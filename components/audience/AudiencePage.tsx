'use client';
import { useEffect, useRef, useState } from 'react';
import { agoraClient } from '@/lib/agora';
import AgoraRTC from 'agora-rtc-sdk-ng';

const APP_ID = process.env.NEXT_PUBLIC_AGORA_APP_ID!;
const CHANNEL = 'test';
const TOKEN =
	'007eJxTYLgpW7DbYutjhW3BTd7J1etfW/5hy2Ss4Wf/6rB/ilzDZwYFBrM0YxNjQ2MjAyOTZBOz1MTEFAODxDTzVEvLROPU1GSzm09NMxoCGRk8hf4zMTJAIIjPwlCSWlzCwAAAEfEe+Q==';

export default function HostPage() {
	const videoRef = useRef<HTMLDivElement>(null);
	const [trackCreated, setTrackCreated] = useState(false);

	useEffect(() => {
		let localTrack: any;

		// 🎤📷 Request permission early
		navigator.mediaDevices
			.getUserMedia({ video: true, audio: true })
			.catch(() => {
				alert('Please allow access to your camera and microphone.');
			});

		const start = async () => {
			try {
				if (agoraClient.connectionState !== 'DISCONNECTED') return;

				console.log('[JOIN] Attempting to join...');
				await agoraClient.setClientRole('host');
				const uid = await agoraClient.join(
					APP_ID,
					CHANNEL,
					TOKEN || null,
					null
				);
				console.log('[JOINED] UID:', uid);

				localTrack = await AgoraRTC.createCameraVideoTrack();
				await agoraClient.publish([localTrack]);
				console.log('📡 Track published');

				if (videoRef.current) {
					await localTrack.play(videoRef.current);
					console.log('📺 Video playing');
					setTrackCreated(true);
				}
			} catch (err) {
				console.error('[ERROR] Join failed:', err);
			}
		};

		start();

		return () => {
			if (localTrack) {
				localTrack.stop();
				localTrack.close();
			}
			agoraClient.leave().then(() => {
				console.log('[LEAVE] Left channel');
			});
		};
	}, []);

	return (
		<div className='p-4'>
			<h1 className='text-lg font-bold mb-4'>🎥 Host Live Stream</h1>
			<div
				ref={videoRef}
				className='w-full h-[400px] bg-black rounded-md overflow-hidden flex items-center justify-center'
			>
				{!trackCreated && <span className='text-white'>🔄 Connecting...</span>}
			</div>
		</div>
	);
}
