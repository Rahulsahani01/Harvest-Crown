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

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Failed to send email.');
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
