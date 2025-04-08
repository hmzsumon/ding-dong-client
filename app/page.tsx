'use client';
import Image from 'next/image';
import BGImg from '@/public/assets/images/bg/bg_1.jpg';
import Logo from '@/public/assets/logos/logo.png';
import LoginButton from '@/components/buttons/LoginButton';
import { FaFacebookF, FaGoogle, FaWhatsapp, FaUserAlt } from 'react-icons/fa';
import { FaMobileScreenButton } from 'react-icons/fa6';
import Separator from '@/components/Separator';
import Link from 'next/link';
import { login, googleLogin } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const router = useRouter();

	const handleGoogleLogin = async () => {
		console.log('Google login clicked');
		try {
			await googleLogin();
			router.push('/dashboard');
		} catch (err: any) {
			alert(err.message);
		}
	};
	return (
		<div className='home-wrapper h-screen flex flex-col md:w-6/12 lg:w-4/12 mx-auto'>
			<div className='flex-grow flex flex-col justify-between px-4 mt-20'>
				<div className='space-y-2'>
					<Image
						src={Logo}
						alt='Logo'
						className='w-36 mx-auto p-1 bg-gradient-to-br from-[#c9b6ff] via-[#ffa8c5] to-[#9fdcfb] rounded-lg'
					/>
					<div className='space-y-2'>
						<h2 className='text-sm font-bold text-center'>Ding-Dong Live</h2>
						<p className='text-center text-xs text-gray-300'>
							It's Live, It's Showtime
						</p>
					</div>
				</div>

				<div>
					<div className='mt-10'>
						<div className='space-y-3 w-full max-w-sm md:w-96 mx-auto'>
							<LoginButton
								icon={FaFacebookF}
								title='Log in with Facebook'
								bgColor='bg-blue-500'
								hoverColor='bg-blue-600'
							/>
							<LoginButton
								icon={FaGoogle}
								title='Log in with Google'
								bgColor='bg-red-500'
								hoverColor='bg-red-600'
								handleLogin={handleGoogleLogin}
							/>
							<LoginButton
								icon={FaWhatsapp}
								title='Log in with GitHub'
								bgColor='bg-green-500'
								hoverColor='bg-green-600'
							/>
						</div>
					</div>

					<Separator />

					<div className='flex items-center justify-center gap-4 w-full  md:w-96 mx-auto '>
						<button className='text-white p-1 rounded-full h-10 w-10 flex items-center justify-center bg-blue-500 hover:bg-blue-700 transition duration-200'>
							<FaMobileScreenButton className='text-xl text-white' />
						</button>
						<Link href='/login-with-id'>
							<button className='text-white p-1 rounded-full h-10 w-10 flex items-center justify-center bg-red-500 hover:bg-red-700 transition duration-200'>
								<FaUserAlt className='text-xl text-white' />
							</button>
						</Link>
					</div>
				</div>

				{/* Footer at bottom */}
				<div className='mb-4'>
					<p className='text-xs text-white text-center px-2'>
						By logging in, you confirm you're at least 18 years old and agree to
						our <span className='underline'>Terms & Privacy Policy</span>
					</p>
				</div>
			</div>
		</div>
	);
}
