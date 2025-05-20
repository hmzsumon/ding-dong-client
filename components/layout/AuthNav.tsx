import { Search } from 'lucide-react';
import React from 'react';

const AuthNav = () => {
	return (
		<div className='fixed top-0 max-w-md mx-auto  bg-pink-50 z-20'>
			{/* Search Header */}
			<div className='flex items-center justify-between px-4 py-2'>
				<div className='flex items-center'>
					<div className='w-8 h-8 mr-2'>
						<div className='w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center'>
							<span className='text-yellow-600 text-xs'>🏆</span>
						</div>
					</div>
				</div>
				<div className='flex-1 mx-2 relative'>
					<div className='bg-white rounded-full flex items-center px-4 py-1'>
						<Search className='w-4 h-4 text-gray-400' />
						<input
							type='text'
							placeholder='Search ID'
							className='bg-transparent border-none focus:outline-none text-sm w-full px-2'
						/>
					</div>
				</div>
				<div className='w-8 h-8'>
					<div className='w-8 h-8 bg-gradient-to-r from-pink-300 to-pink-500 rounded-full flex items-center justify-center'>
						<span className='text-white text-sm'>😊</span>
					</div>
				</div>
			</div>

			{/* Navigation Tabs - Scrollable */}
			<div className='relative '>
				<div className='flex overflow-x-auto scrollbar-none text-xs font-bold py-2 border-b border-gray-200 px-2'>
					<button className='py-2 px-1 text-gray-400 whitespace-nowrap mr-4'>
						Freshers
					</button>
					<button className='py-2 px-1 text-black font-bold whitespace-nowrap border-b-2 border-black mr-4'>
						Popular
					</button>
					<button className='py-2 px-1 text-gray-400 whitespace-nowrap mr-2'>
						Spotlight
					</button>
					<button className='py-2 px-1 text-gray-400 whitespace-nowrap mr-2'>
						Party
					</button>
					<button className='py-2 px-1 text-gray-400 whitespace-nowrap mr-2'>
						PK Matches
					</button>
					<button className='py-2 px-1 text-gray-400 whitespace-nowrap mr-2'>
						Trending
					</button>
					<button className='py-2 px-1 text-gray-400 whitespace-nowrap mr-2'>
						New Users
					</button>
					<button className='py-2 px-1 text-gray-400 whitespace-nowrap mr-2'>
						Nearby
					</button>
				</div>

				{/* Fade indicators for scroll */}
				<div className='absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-pink-50 to-transparent pointer-events-none'></div>
				<div className='absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-r from-pink-50 to-transparent pointer-events-none'></div>
			</div>
		</div>
	);
};

export default AuthNav;
