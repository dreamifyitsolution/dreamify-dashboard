import Image from 'next/image';
import React, { useState } from 'react';
import Logo from '../../public/vercel.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import SidebarProfile from './SidebarProfile';
import QuickSearch from './QuickSearch';
import SidebarList from './SidebarList';

const Sidebar = () => {
	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};
	return (
		<div className='relative'>
			<header className='shadow md:shadow-none md:block w-full'>
				<div className='px-4 md:px-6'>
					<div className='flex justify-between items-center h-20'>
						{/* Main Logo */}
						<Image src={Logo} alt='logo' width={80} />

						<div onClick={toggleMenu}>
							<GiHamburgerMenu />
						</div>
					</div>
				</div>
			</header>

			<div
				className={`absolute md:hidden bg-black/60 top-0 md:top-auto left-0 right-0 overflow-none h-full min-h-screen ${
					showMenu ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
				}`}
				onClick={toggleMenu}
			></div>
			<div
				className={`absolute 
        md:block top-0  md:top-auto 
        left-0 right-0 max-w-[250px] 
        min-h-screen overflow-y-scroll h-full bg-black transition-transform ease-in-out duration-300 ${
					showMenu ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
				} `}
			>
				<SidebarProfile />
				<QuickSearch />
				<SidebarList />
			</div>
		</div>
	);
};

export default Sidebar;
