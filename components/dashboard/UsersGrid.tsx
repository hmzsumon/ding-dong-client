'use client';
import { Badge } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

// Demo data for users
const users = [
	{
		id: 1,
		name: '~qwAZI🎸',
		image:
			'https://images.pexels.com/photos/1376042/pexels-photo-1376042.jpeg?auto=compress&cs=tinysrgb&w=600',
		badge: { text: 'Rising Star', color: 'bg-blue-500', icon: '⭐' },
		count: '6.5K',
	},
	{
		id: 2,
		name: 'Aisha',
		image:
			'https://images.pexels.com/photos/16396444/pexels-photo-16396444/free-photo-of-indian-lady-girl.jpeg?auto=compress&cs=tinysrgb&w=600',
		badge: null,
		count: '2.3K',
		butterfly: true,
	},
	{
		id: 3,
		name: 'Priya',
		image:
			'https://images.pexels.com/photos/1884971/pexels-photo-1884971.jpeg?auto=compress&cs=tinysrgb&w=600',
		badge: { text: 'PK', color: 'bg-pink-500', icon: '' },
		discount: '63%OFF',
		count: '890',
		bird: true,
	},
	{
		id: 4,
		name: 'Rahul_DJ',
		image:
			'https://images.pexels.com/photos/1975938/pexels-photo-1975938.jpeg?auto=compress&cs=tinysrgb&w=600',
		badge: { text: 'Live', color: 'bg-red-500', icon: '🔴' },
		count: '12K',
	},
	{
		id: 5,
		name: 'Meera✨',
		image:
			'https://images.pexels.com/photos/29065363/pexels-photo-29065363/free-photo-of-elegant-portrait-of-woman-in-white-dress-indoors.jpeg?auto=compress&cs=tinysrgb&w=600',
		badge: { text: 'New', color: 'bg-purple-500', icon: '🆕' },
		count: '345',
	},
	{
		id: 6,
		name: 'DJ_Karan',
		image:
			'https://images.pexels.com/photos/12476637/pexels-photo-12476637.jpeg?auto=compress&cs=tinysrgb&w=600',
		badge: { text: 'Hot', color: 'bg-orange-500', icon: '🔥' },
		count: '8.9K',
	},
	{
		id: 7,
		name: 'Neha',
		image:
			'https://images.pexels.com/photos/8722230/pexels-photo-8722230.jpeg?auto=compress&cs=tinysrgb&w=600',
		badge: { text: 'VIP', color: 'bg-yellow-500', icon: '💎' },
		count: '5.2K',
		crown: true,
	},
	{
		id: 8,
		name: 'Arjun_007',
		image:
			'https://images.pexels.com/photos/10226898/pexels-photo-10226898.jpeg?auto=compress&cs=tinysrgb&w=600',
		badge: { text: 'Trending', color: 'bg-blue-500', icon: '📈' },
		count: '15K',
	},
	{
		id: 9,
		name: 'Pooja',
		image:
			'https://images.pexels.com/photos/29357327/pexels-photo-29357327/free-photo-of-south-asian-woman-celebrating-diwali-with-traditional-lamp.jpeg?auto=compress&cs=tinysrgb&w=600',
		badge: { text: 'PK', color: 'bg-pink-500', icon: '' },
		count: '7.3K',
		discount: '50%OFF',
	},
	{
		id: 10,
		name: 'Vikram',
		image:
			'https://images.pexels.com/photos/25193825/pexels-photo-25193825/free-photo-of-a-woman-in-a-black-and-white-top-and-leggings.jpeg?auto=compress&cs=tinysrgb&w=600',
		badge: { text: 'Popular', color: 'bg-green-500', icon: '👑' },
		count: '11K',
	},
	{
		id: 11,
		name: 'Ananya',
		image:
			'https://images.pexels.com/photos/1580270/pexels-photo-1580270.jpeg?auto=compress&cs=tinysrgb&w=600',
		badge: { text: 'VidCall', color: 'bg-green-500', icon: '📞' },
		count: '4.7K',
	},
	{
		id: 12,
		name: 'Ravi_Sir',
		image:
			'https://images.pexels.com/photos/13685231/pexels-photo-13685231.jpeg?auto=compress&cs=tinysrgb&w=600',
		badge: { text: 'Expert', color: 'bg-teal-500', icon: '🎓' },
		count: '6K',
	},
	{
		id: 13,
		name: 'Ayesha🌟',
		image:
			'https://images.pexels.com/photos/11895919/pexels-photo-11895919.jpeg?auto=compress&cs=tinysrgb&w=600',
		badge: { text: 'Featured', color: 'bg-yellow-500', icon: '✨' },
		count: '2.8K',
	},
	{
		id: 14,
		name: 'Vishal',
		image:
			'https://images.pexels.com/photos/12642195/pexels-photo-12642195.jpeg?auto=compress&cs=tinysrgb&w=600',
		badge: { text: 'New', color: 'bg-purple-500', icon: '🆕' },
		count: '1.4K',
	},
	{
		id: 15,
		name: 'Suman',
		image:
			'https://images.pexels.com/photos/3345532/pexels-photo-3345532.jpeg?auto=compress&cs=tinysrgb&w=600',
		badge: { text: 'Hot', color: 'bg-orange-500', icon: '🔥' },
		count: '9.3K',
	},
	{
		id: 16,
		name: 'Simran✨',
		image:
			'https://images.pexels.com/photos/12006995/pexels-photo-12006995.jpeg?auto=compress&cs=tinysrgb&w=600',
		badge: { text: 'PK', color: 'bg-pink-500', icon: '' },
		count: '12K',
	},
	{
		id: 17,
		name: 'Dinesh',
		image:
			'https://images.pexels.com/photos/10231245/pexels-photo-10231245.jpeg?auto=compress&cs=tinysrgb&w=600',
		badge: { text: 'Trending', color: 'bg-blue-500', icon: '📈' },
		count: '8.1K',
	},
	{
		id: 18,
		name: 'Preeti',
		image:
			'https://images.pexels.com/photos/17467511/pexels-photo-17467511/free-photo-of-akanksha.jpeg?auto=compress&cs=tinysrgb&w=600',
		badge: { text: 'VidCall', color: 'bg-green-500', icon: '📞' },
		count: '3K',
	},
	{
		id: 19,
		name: 'Mohan',
		image:
			'https://images.pexels.com/photos/8548880/pexels-photo-8548880.jpeg?auto=compress&cs=tinysrgb&w=600',
		badge: { text: 'Live', color: 'bg-red-500', icon: '🔴' },
		count: '1.2K',
	},
	{
		id: 20,
		name: 'Sahil',
		image:
			'https://images.pexels.com/photos/12642174/pexels-photo-12642174.jpeg?auto=compress&cs=tinysrgb&w=600',
		badge: { text: 'VIP', color: 'bg-yellow-500', icon: '💎' },
		count: '7.4K',
	},
	{
		id: 21,
		name: 'Ankit🎶',
		image:
			'https://images.pexels.com/photos/3114009/pexels-photo-3114009.jpeg?auto=compress&cs=tinysrgb&w=600',
		badge: { text: 'Rising Star', color: 'bg-blue-500', icon: '⭐' },
		count: '6.2K',
	},
	{
		id: 22,
		name: 'Nisha',
		image:
			'https://images.pexels.com/photos/29351977/pexels-photo-29351977/free-photo-of-elegant-bride-in-traditional-indian-attire.jpeg?auto=compress&cs=tinysrgb&w=600',
		badge: { text: 'Hot', color: 'bg-orange-500', icon: '🔥' },
		count: '2.7K',
	},
	{
		id: 23,
		name: 'Karishma',
		image:
			'https://images.pexels.com/photos/9317195/pexels-photo-9317195.jpeg?auto=compress&cs=tinysrgb&w=600',
		badge: { text: 'Trending', color: 'bg-blue-500', icon: '📈' },
		count: '10.1K',
	},
	{
		id: 24,
		name: 'Karan💥',
		image:
			'https://images.pexels.com/photos/1739502/pexels-photo-1739502.jpeg?auto=compress&cs=tinysrgb&w=600',
		badge: { text: 'Live', color: 'bg-red-500', icon: '🔴' },
		count: '3.8K',
	},
	{
		id: 25,
		name: 'Sandeep',
		image:
			'https://images.pexels.com/photos/724258/pexels-photo-724258.jpeg?auto=compress&cs=tinysrgb&w=600',
		badge: { text: 'VIP', color: 'bg-yellow-500', icon: '💎' },
		count: '5.6K',
	},
	{
		id: 26,
		name: 'Kriti',
		image:
			'https://images.pexels.com/photos/4584488/pexels-photo-4584488.jpeg?auto=compress&cs=tinysrgb&w=600',
		badge: { text: 'VidCall', color: 'bg-green-500', icon: '📞' },
		count: '8.7K',
	},
	{
		id: 27,
		name: 'Neha',
		image:
			'https://images.pexels.com/photos/1193942/pexels-photo-1193942.jpeg?auto=compress&cs=tinysrgb&w=600',
		badge: { text: 'Hot', color: 'bg-orange-500', icon: '🔥' },
		count: '7.8K',
	},
	{
		id: 28,
		name: 'Prakashi_bel',
		image:
			'https://images.pexels.com/photos/2647744/pexels-photo-2647744.jpeg?auto=compress&cs=tinysrgb&w=600',
		badge: { text: 'Rising Star', color: 'bg-blue-500', icon: '⭐' },
		count: '3.4K',
	},
	{
		id: 29,
		name: 'Shivani',
		image:
			'https://images.pexels.com/photos/2739792/pexels-photo-2739792.jpeg?auto=compress&cs=tinysrgb&w=600',
		badge: { text: 'Popular', color: 'bg-green-500', icon: '👑' },
		count: '1.9K',
	},
	{
		id: 30,
		name: 'Dipannita_seek',
		image:
			'https://images.pexels.com/photos/10651362/pexels-photo-10651362.jpeg?auto=compress&cs=tinysrgb&w=600',
		badge: { text: 'VIP', color: 'bg-yellow-500', icon: '💎' },
		count: '10.6K',
	},
	{
		id: 31,
		name: 'Amabeka',
		image:
			'https://images.pexels.com/photos/26731730/pexels-photo-26731730/free-photo-of-portrait-of-a-long-haired-brunette-wearing-makeup.jpeg?auto=compress&cs=tinysrgb&w=600',
		badge: { text: 'Live', color: 'bg-red-500', icon: '🔴' },
		count: '7.9K',
	},
	{
		id: 32,
		name: 'Suman🎶',
		image:
			'https://images.pexels.com/photos/25491356/pexels-photo-25491356/free-photo-of-portrait-of-a-brunette.jpeg?auto=compress&cs=tinysrgb&w=600',
		badge: { text: 'VidCall', color: 'bg-green-500', icon: '📞' },
		count: '3.6K',
	},
	{
		id: 33,
		name: 'Shreya✨',
		image:
			'https://images.pexels.com/photos/20838860/pexels-photo-20838860/free-photo-of-brunette-wearing-makeup.jpeg?auto=compress&cs=tinysrgb&w=600',
		badge: { text: 'New', color: 'bg-purple-500', icon: '🆕' },
		count: '6.1K',
	},
	{
		id: 34,
		name: 'Rashika',
		image:
			'https://images.pexels.com/photos/16612626/pexels-photo-16612626/free-photo-of-studio-shot-of-a-young-brunette-in-an-elegant-dress.jpeg?auto=compress&cs=tinysrgb&w=600',
		badge: { text: 'Trending', color: 'bg-blue-500', icon: '📈' },
		count: '9.5K',
	},
	{
		id: 35,
		name: 'Siddhi',
		image:
			'https://images.pexels.com/photos/7233801/pexels-photo-7233801.jpeg?auto=compress&cs=tinysrgb&w=600',
		badge: { text: 'PK', color: 'bg-pink-500', icon: '' },
		count: '4.4K',
	},
	{
		id: 36,
		name: 'Vishali_Singh',
		image:
			'https://images.pexels.com/photos/21702122/pexels-photo-21702122/free-photo-of-portrait-of-woman-in-traditional-clothing.jpeg?auto=compress&cs=tinysrgb&w=600',
		badge: { text: 'Hot', color: 'bg-orange-500', icon: '🔥' },
		count: '5.8K',
	},
	{
		id: 37,
		name: 'Komali_neha',
		image:
			'https://images.pexels.com/photos/7829302/pexels-photo-7829302.png?auto=compress&cs=tinysrgb&w=600',
		badge: { text: 'Popular', color: 'bg-green-500', icon: '👑' },
		count: '8K',
	},
	{
		id: 38,
		name: 'Riya',
		image:
			'https://images.pexels.com/photos/19015918/pexels-photo-19015918/free-photo-of-portrait-of-bride-wearing-white-dress.jpeg?auto=compress&cs=tinysrgb&w=600',
		badge: { text: 'Rising Star', color: 'bg-blue-500', icon: '⭐' },
		count: '2.6K',
	},
	{
		id: 39,
		name: 'Sunidha',
		image:
			'https://images.pexels.com/photos/29354360/pexels-photo-29354360/free-photo-of-elegant-woman-in-traditional-indian-attire.jpeg?auto=compress&cs=tinysrgb&w=600',
		badge: { text: 'Rising Star', color: 'bg-blue-500', icon: '⭐' },
		count: '2.6K',
	},
];

const UsersGrid = () => {
	return (
		<div>
			<div className='grid grid-cols-2 gap-2 px-2'>
				{users.map((user) => (
					<div
						key={user.id}
						className='relative rounded-lg overflow-hidden h-48 cursor-pointer'
					>
						<Image
							src={user.image}
							width={360}
							height={480}
							alt={`${user.name}'s profile`}
							className='w-full h-full object-cover'
							priority={user.id === 1}
						/>

						{user.badge && (
							<div className='absolute top-2 left-2'>
								<div
									className={`${user.badge.color} text-white text-xs flex items-center gap-1 px-2 rounded-md`}
								>
									{user.badge.icon && (
										<span className='text-xs'>{user.badge.icon}</span>
									)}
									{user.badge.text}
								</div>
							</div>
						)}

						{user.discount && (
							<div className='absolute top-2 right-2'>
								<Badge className='bg-yellow-500 text-white text-xs px-2 rounded-md'>
									{user.discount}
								</Badge>
							</div>
						)}

						{user.butterfly && (
							<div className='absolute top-2 left-2'>
								<div className='text-white text-xs px-2 rounded-md'>
									<span className='text-xs'>🦋</span>
								</div>
							</div>
						)}

						{user.bird && (
							<div className='absolute top-8 right-4'>
								<div className='w-8 h-8'>
									<div className='w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center'>
										<span className='text-yellow-600 text-xs'>🐥</span>
									</div>
								</div>
							</div>
						)}

						<div className='absolute bottom-2 left-2 right-2 flex justify-between items-center'>
							<div className='text-white text-sm font-bold flex items-center'>
								{user.crown && <span className='text-yellow-400 mr-1'>👑</span>}
								{user.name}
								{user.crown && <span className='text-yellow-400 ml-1'>👑</span>}
							</div>
							<div className='text-white text-sm'>{user.count}</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default UsersGrid;
