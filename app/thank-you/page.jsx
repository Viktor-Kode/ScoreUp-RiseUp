// app/thank-you/page.jsx
'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function ThankYouPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [paymentVerified, setPaymentVerified] = useState(false);
  
  useEffect(() => {
    const product = searchParams.get('product');
    const payment = searchParams.get('payment');
    
    if (payment === 'completed') {
      // Verify payment with your backend or email tracking
      setPaymentVerified(true);
      
      // Send confirmation email
      emailjs.send(
        'service_renapht',
        'template_z1vr7ty',
        {
          to_email: 'travis@scoreupriseup.com',
          to_name: 'Travis',
          product_name: product,
          customer_action: 'Payment Completed',
          timestamp: new Date().toISOString()
        },
        'SS2R3dMbKoMDjBayk'
      );
    }
  }, [searchParams]);
  
  return (
    <div>
      {paymentVerified ? (
        // Show real thank you content
        <div>Thank you for your payment!</div>
      ) : (
        // Show payment pending message
        <div>Waiting for payment confirmation...</div>
      )}
    </div>
  );
}