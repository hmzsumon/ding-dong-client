import React from 'react';
import { Home, Clapperboard, Video, MessageCircle, User } from 'lucide-react';
import Link from 'next/link';

const AuthFooter = () => {
	return (
		<div className=' bg-white border-t border-gray-200 flex justify-around items-center py-2 fixed bottom-0  w-full max-w-md mx-auto z-20'>
			<Link href='/dashboard'>
				<button className='flex flex-col items-center text-xs'>
					<div className='w-6 h-6 flex items-center justify-center'>
						<div className='w-6 h-6 bg-pink-100 rounded-md flex items-center justify-center'>
							<Home size={16} className='text-pink-500' />
						</div>
					</div>
					<span className='mt-1 text-black'>Live</span>
				</button>
			</Link>
			<button className='flex flex-col items-center text-xs text-gray-400'>
				<div className='w-6 h-6 flex items-center justify-center'>
					<div className='w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center'>
						<Clapperboard size={12} className='text-gray-500' />
					</div>
				</div>
				<span className='mt-1'>Shorts</span>
			</button>
			<Link href='/start-live'>
				<button className='flex items-center justify-center -mt-5'>
					<div className='w-14 h-14 bg-pink-500 rounded-full flex items-center justify-center'>
						<Video size={28} className='text-white' />
					</div>
				</button>
			</Link>
			<button className='flex flex-col items-center text-xs text-gray-400'>
				<div className='w-6 h-6 flex items-center justify-center'>
					<div className='w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center'>
						<MessageCircle size={12} className='text-gray-500' />
					</div>
				</div>
				<span className='mt-1'>Message</span>
			</button>
			<button className='flex flex-col items-center text-xs text-gray-400'>
				<div className='w-6 h-6 flex items-center justify-center'>
					<div className='w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center'>
						<User size={12} className='text-gray-500' />
					</div>
				</div>
				<span className='mt-1'>Me</span>
			</button>
		</div>
	);
};

export default AuthFooter;
