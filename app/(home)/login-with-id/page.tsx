'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GoBack from '@/components/GoBack';
import { useRouter } from 'next/navigation';
import { FaAngleLeft } from 'react-icons/fa';

const LoginWithId = () => {
	const [animateExit, setAnimateExit] = useState(false);
	const router = useRouter();

	const handleGoBack = () => {
		setAnimateExit(true); // exit এনিমেশন শুরু
		setTimeout(() => {
			router.back(); // কিছু সময় পরে পেজ থেকে বের হওয়া
		}, 500); // এই সময়টা transition duration এর সাথে মিলিয়ে দাও
	};
	return (
		<motion.div
			initial={{ x: '100vw' }}
			animate={animateExit ? { x: '100vw' } : { x: 0 }}
			exit={{ x: '-100vw' }}
			transition={{ duration: 0.5, ease: 'easeInOut' }}
			className='relative md:w-6/12 lg:w-4/12 mx-auto'
		>
			<button
				className='absolute top-4 left-2  rounded-full   transition duration-200'
				onClick={handleGoBack}
			>
				<FaAngleLeft className='text-xl' />
			</button>
			<div className='min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-500 to-purple-700 px-2'>
				<div className='w-full max-w-xs'>
					<h1 className='text-white text-2xl font-bold text-center'>
						Ding-Dong Account
					</h1>
					<p className='text-white text-center mt-2'>
						Enter your account and password
					</p>

					<div className='mt-6'>
						<input
							type='text'
							placeholder='Enter your ID'
							className='w-full bg-white/20 text-white placeholder-white border border-white/40 rounded-full px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-white'
						/>

						<input
							type='password'
							placeholder='Password'
							className='w-full bg-white/20 text-white placeholder-white border border-white/40 rounded-full px-4 py-3 mb-2 focus:outline-none focus:ring-2 focus:ring-white'
						/>

						<div className='text-right mb-6'>
							<a href='#' className='text-white text-sm underline'>
								Forgot password?
							</a>
						</div>

						<button className='w-full border border-white text-white py-3 rounded-full hover:bg-white hover:text-pink-600 transition duration-200'>
							Login
						</button>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default LoginWithId;
