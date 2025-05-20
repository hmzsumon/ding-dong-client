import AuthFooter from '@/components/layout/AuthFooter';
import AuthNav from '@/components/layout/AuthNav';
import React from 'react';

const AuthLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div className='max-w-md mx-auto  '>
			<div className=''>{children}</div>
		</div>
	);
};

export default AuthLayout;
