import React from 'react';
import { FiSearch } from 'react-icons/fi';

const QuickSearch = () => {
	return (
		<div className='relative px-6 py-4 border-b border-white/20'>
			<form action='' className='bg-[#2C2C41] py-2.5 px-3 rounded-lg'>
				<div className='flex items-center'>
					<div>
						<FiSearch color='#fff' />
					</div>
					<div className='flex-1'>
						<input
							type='text'
							placeholder='Quick Search'
							name=''
							id=''
							className='w-full bg-transparent px-4 text-sm'
						/>
					</div>
				</div>
			</form>
		</div>
	);
};

export default QuickSearch;
