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
			<AuthNav />
			<div className='mt-[6.3rem]'>{children}</div>
			<AuthFooter />
		</div>
	);
};

export default AuthLayout;
