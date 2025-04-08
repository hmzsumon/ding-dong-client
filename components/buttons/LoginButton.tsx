import React from 'react';
import { Button } from '../ui/button';

interface LoginButtonProps {
	icon: React.ElementType;
	title: string;
	bgColor: string;
	hoverColor: string;
	handleLogin?: () => void;
}

const LoginButton = ({
	icon: Icon,
	title,
	bgColor,
	hoverColor,
	handleLogin,
}: LoginButtonProps) => {
	return (
		<div className='relative w-full'>
			<Button
				className={`w-full flex justify-center items-center text-white px-4 py-2 rounded-2xl transition duration-200 ${bgColor} hover:${hoverColor}`}
				onClick={() => {
					// Handle login logic here if needed
					if (handleLogin) {
						handleLogin();
					}
				}}
			>
				<span className='absolute left-4 text-xl'>
					<Icon />
				</span>
				<span className='font-bold'>{title}</span>
			</Button>
		</div>
	);
};

export default LoginButton;
