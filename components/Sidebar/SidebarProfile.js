import React from 'react';
import Image from 'next/image';
import { FiSettings } from 'react-icons/fi';

const SidebarProfile = () => {
	return (
		<div className='px-6 py-4 flex border-b border-white/20'>
			<div className=''>
				<Image
					src='https://preview.keenthemes.com/metronic8/demo8/assets/media/avatars/300-1.jpg'
					alt='Logged In user'
					width={50}
					height={50}
					className='rounded-md'
				/>
			</div>
			<div className='ml-2 flex-1'>
				<h3 className='text-sm text-white font-semibold'>Roshan Adhikari</h3>
				<p className='text-xs text-gray-200'>Frontend Developer</p>
				<div className='text-green-500 text-xs'>
					<span className='text-sm font-bold'>.</span>
					<span>online</span>
				</div>
			</div>
			<div className='mt-1'>
				<FiSettings color='white' />
			</div>
		</div>
	);
};

export default SidebarProfile;
