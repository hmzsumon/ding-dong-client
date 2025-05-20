import Carousel from '@/components/dashboard/Carousel';
import GlobalMenu from '@/components/dashboard/GlobalMenu';
import UsersGrid from '@/components/dashboard/UsersGrid';
import React from 'react';

const Dashboard = () => {
	return (
		<div>
			<Carousel />
			<GlobalMenu />
			<UsersGrid />
		</div>
	);
};

export default Dashboard;
