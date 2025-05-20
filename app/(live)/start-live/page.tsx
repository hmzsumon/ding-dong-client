'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Camera, Smile, Wifi } from 'lucide-react';

const resolutions = {
	'360p': { width: 640, height: 360 },
	'480p': { width: 854, height: 480 },
	'720p': { width: 1280, height: 720 },
	'1080p': { width: 1920, height: 1080 },
};

export default function GoLive() {
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const [facingMode, setFacingMode] = useState<'user' | 'environment'>('user');
	const [quality, setQuality] = useState<'360p' | '480p' | '720p' | '1080p'>(
		'720p'
	);
	const [beautyOn, setBeautyOn] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		startCamera();
		return () => stopCamera();
	}, [facingMode, quality]);

	const startCamera = async () => {
		stopCamera();
		try {
			setError(null);
			const { width, height } = resolutions[quality];

			const stream = await navigator.mediaDevices.getUserMedia({
				video: {
					width: { ideal: width },
					height: { ideal: height },
					facingMode: { ideal: facingMode },
				},
				audio: false,
			});

			if (videoRef.current) {
				videoRef.current.srcObject = stream;
			}
		} catch (err: any) {
			console.error('Camera error:', err);
			setError(
				err?.name === 'NotAllowedError'
					? 'Camera permission denied. Please allow access.'
					: err?.message || 'Failed to access camera.'
			);
		}
	};

	const stopCamera = () => {
		const stream = videoRef.current?.srcObject as MediaStream;
		stream?.getTracks().forEach((track) => track.stop());
	};

	const toggleCamera = () => {
		setFacingMode((prev) => (prev === 'user' ? 'environment' : 'user'));
	};

	const toggleBeauty = () => {
		setBeautyOn((prev) => !prev);
	};

	return (
		<div className='relative w-full h-screen bg-black text-white overflow-hidden'>
			<video
				ref={videoRef}
				autoPlay
				playsInline
				muted
				className={`absolute inset-0 object-cover w-full h-full transition-all duration-500 ${
					beautyOn
						? 'filter brightness-110 contrast-110 saturate-125 blur-[0.4px]'
						: ''
				}`}
			/>

			{/* Error Message */}
			{error && (
				<div className='absolute top-5 left-5 right-5 z-20 bg-red-500/80 text-sm p-3 rounded-lg'>
					{error}
				</div>
			)}

			{/* Avatar & Info */}
			<div className='absolute top-5 left-4 flex items-start gap-3 z-10'>
				<div className='w-14 h-14 bg-gray-800 rounded-md flex items-center justify-center'>
					<p className='text-xs text-center'>Avatar</p>
				</div>
				<div className='bg-purple-600 px-3 py-2 rounded-lg text-sm max-w-xs'>
					✨ Upload an avatar so it appears in Discovery.
				</div>
			</div>

			{/* Resolution Dropdown */}
			<div className='absolute top-5 right-4 z-10'>
				<select
					value={quality}
					onChange={(e) => setQuality(e.target.value as any)}
					className='bg-black/60 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm border border-white/20'
				>
					<option value='360p'>360p</option>
					<option value='480p'>480p</option>
					<option value='720p'>720p (HD)</option>
					<option value='1080p'>1080p (Full HD)</option>
				</select>
			</div>

			{/* Controls */}
			<div className='absolute bottom-32 w-full flex justify-around text-center z-10'>
				<div className='flex flex-col items-center gap-1'>
					<button onClick={toggleCamera}>
						<Camera size={28} />
					</button>
					<p className='text-sm'>Switch</p>
				</div>
				<div className='flex flex-col items-center gap-1'>
					<button onClick={toggleBeauty}>
						<Smile size={28} />
					</button>
					<p className='text-sm'>{beautyOn ? 'On ✨' : 'Beauty'}</p>
				</div>
				<div className='flex flex-col items-center gap-1'>
					<Wifi size={28} />
					<p className='text-sm'>Speed</p>
				</div>
			</div>

			{/* Go Live Button */}
			<div className='absolute bottom-16 left-0 right-0 flex justify-center z-10'>
				<button className='bg-gradient-to-r from-pink-500 to-purple-600 px-10 py-3 rounded-full text-lg font-bold shadow-lg'>
					Go Live
				</button>
			</div>

			{/* Bottom Tabs */}
			<div className='absolute bottom-0 left-0 w-full grid grid-cols-3 text-center border-t border-white/10 bg-black/60 backdrop-blur-sm z-10'>
				<div className='py-3 text-pink-400 font-semibold'>Live</div>
				<div className='py-3'>Chat Party</div>
				<div className='py-3'>Video Party</div>
			</div>
		</div>
	);
}
