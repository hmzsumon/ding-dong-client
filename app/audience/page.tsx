// app/audience/page.tsx
'use client';
import dynamic from 'next/dynamic';

const AudiencePage = dynamic(
	() => import('@/components/audience/AudiencePage'),
	{
		ssr: false,
	}
);

export default AudiencePage;
