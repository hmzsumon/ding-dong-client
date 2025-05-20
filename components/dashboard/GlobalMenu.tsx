import React from 'react';
import { FaFunnelDollar } from 'react-icons/fa';

const GlobalMenu = () => {
	return (
		<div>
			<div className='flex justify-between items-center text-sm p-2'>
				<h2>Global</h2>
				<FaFunnelDollar />
			</div>
		</div>
	);
};

export default GlobalMenu;
