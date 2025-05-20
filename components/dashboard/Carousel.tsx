'use client';
import React, { Component } from 'react';

// Use require for compatibility with class components
const Slider = require('react-slick').default;

export default class Carousel extends Component {
	render() {
		const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 4000,
		};

		const sliderItems = [
			'/assets/slider/banner_1.png',
			'/assets/slider/banner_2.png',
			'/assets/slider/banner_3.png',
			'/assets/slider/banner_4.png',
			'/assets/slider/banner_5.png',
		];

		return (
			<div className='w-full mx-auto'>
				<Slider {...settings}>
					{sliderItems.map((item, index) => (
						<div className='px-1' key={index}>
							<img
								src={item}
								alt=''
								className='w-full rounded-xl min-h-[110px]'
							/>
						</div>
					))}
				</Slider>
			</div>
		);
	}
}
