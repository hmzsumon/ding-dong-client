// app/host/page.tsx
'use client';
import dynamic from 'next/dynamic';

const HostPage = dynamic(() => import('@/components/host/HostPage'), {
	ssr: false,
});

export default HostPage;
