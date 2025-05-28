'use client';
import { useEffect, useRef, useState } from 'react';
import { agoraClient } from '@/lib/agora';
import AgoraRTC from 'agora-rtc-sdk-ng';

const APP_ID = process.env.NEXT_PUBLIC_AGORA_APP_ID!;
const CHANNEL = 'test';
const TOKEN =
	'007eJxTYLgpW7DbYutjhW3BTd7J1etfW/5hy2Ss4Wf/6rB/ilzDZwYFBrM0YxNjQ2MjAyOTZBOz1MTEFAODxDTzVEvLROPU1GSzm09NMxoCGRk8hf4zMTJAIIjPwlCSWlzCwAAAEfEe+Q=='; // ✅ Replace with your actual token

export default function HostPage() {
	const videoRef = useRef<HTMLDivElement>(null);
	const [joined, setJoined] = useState(false);
	const [trackCreated, setTrackCreated] = useState(false);
	const [localTrack, setLocalTrack] = useState<any>(null);

	// Permission alert (mobile only)
	useEffect(() => {
		navigator.mediaDevices
			.getUserMedia({ video: true, audio: true })
			.catch(() => alert('📷🎤 Please allow camera and microphone access.'));
	}, []);

	const startStream = async () => {
		try {
			if (agoraClient.connectionState !== 'DISCONNECTED') return;

			await agoraClient.setClientRole('host');
			const uid = await agoraClient.join(APP_ID, CHANNEL, TOKEN || null, null);
			console.log('[JOINED] UID:', uid);

			const track = await AgoraRTC.createCameraVideoTrack();
			await agoraClient.publish([track]);
			setLocalTrack(track);

			if (videoRef.current) {
				track.play(videoRef.current);
				setTrackCreated(true);
			}
			setJoined(true);
		} catch (err) {
			console.error('[ERROR] Join failed:', err);
		}
	};

	// Cleanup on leave
	useEffect(() => {
		return () => {
			if (localTrack) {
				localTrack.stop();
				localTrack.close();
			}
			agoraClient.leave().then(() => console.log('[LEAVE] Left channel'));
		};
	}, [localTrack]);

	return (
		<div className='p-4'>
			<h1 className='text-lg font-bold mb-4'>🎥 Host Live Stream</h1>

			{!joined && (
				<button
					onClick={startStream}
					className='px-6 py-3 rounded-md bg-green-600 text-white font-medium mb-4'
				>
					▶️ Start Streaming
				</button>
			)}

			<div
				ref={videoRef}
				className='w-full h-[400px] bg-black rounded-md overflow-hidden flex items-center justify-center'
			>
				{!trackCreated && <span className='text-white'>🔄 Waiting...</span>}
			</div>
		</div>
	);
}
