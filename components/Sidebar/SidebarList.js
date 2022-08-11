import Link from 'next/link';
import React, { Component, createElement, useEffect, useState } from 'react';
import { sidebar } from '../../data/sidebarData';

const SidebarList = () => {
	return (
		<div className='px-6 py-4 border-b border-white/20'>
			{sidebar &&
				sidebar.map((data, index) => (
					<ul className='text-white' key={index}>
						<li className='p-2.5'>
							<span> {data.title}</span>
						</li>
						{data.items && (
							<ul>
								{data.items.map((item, key) => (
									<li className='pl-5 py-2.5 text-xs' key={key}>
										<Link href={item.path}>{item.name}</Link>
									</li>
								))}
							</ul>
						)}
					</ul>
				))}
		</div>
	);
};

export default SidebarList;
