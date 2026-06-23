import { useState } from 'react';

export interface EmailPayload {
  type: 'inquiry' | 'quote' | 'newsletter';
  senderEmail: string;
  subject: string;
  metadata: Record<string, string>;
}

export const useEmail = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const sendEmail = async (payload: EmailPayload) => {
    setStatus('sending');
    setErrorMessage(null);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setStatus('error');
      setErrorMessage('Web3Forms Access Key (VITE_WEB3FORMS_ACCESS_KEY) is missing in environment variables.');
      return false;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          email: payload.senderEmail,
          subject: payload.subject,
          from_name: 'Crown Harvest Website',
          form_type: payload.type,
          ...payload.metadata,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Failed to submit form to Web3Forms.');
      }

      setStatus('success');
      return true;
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'An unexpected error occurred.');
      return false;
    }
  };

  return { sendEmail, status, setStatus, errorMessage };
};
