// app/offers/page.jsx
import { Suspense } from 'react';
import OffersClient from './OffersClient';

export default function OffersPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OffersClient />
    </Suspense>
  );
}
