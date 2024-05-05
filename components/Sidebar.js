import React from 'react';

import Brandsidebar from './Brandsidebar';
import Colorsidebar from './Colorsidebar';
import Pricesidebar from './Pricesidebar';

const Sidebar = () => {
	return (
		<div className=' bg-white p-4 rounded-md shadow-md'>
			<div className='p-5'>
				<div className='text-orange-400 font-bold text-xl'>دسته بندی</div>
				<div className='my-5'>
					<ul>
						<li className='flex items-center gap-2 p-2'>
							<div className='w-7 h-7 relative rounded-full bg-gray-200'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth='1.5'
									stroke='currentColor'
									className=' absolute top-2 stroke-gray-600 left-0 w-7 h-7'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3'
									/>
								</svg>
							</div>
							<span>تلفن همراه</span>
						</li>
						<li className='flex items-center gap-2 p-2'>
							<div className='w-7 h-7 relative rounded-full bg-gray-200'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth='1.5'
									stroke='currentColor'
									className=' absolute top-2 stroke-gray-600 left-0 w-7 h-7'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z'
									/>
								</svg>
							</div>
							<span>لپ تاب</span>
						</li>
						<li className='flex items-center gap-2 p-2 text-lg'>
							<div className='w-7 h-7 relative rounded-full bg-gray-200'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth='1.5'
									stroke='currentColor'
									className=' absolute top-2 stroke-gray-600 left-0 w-7 h-7'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
									/>
								</svg>
							</div>
							<span>ساعت هوشمند</span>
						</li>
					</ul>
				</div>
			</div>
			<div className='p-5'>
				<div className='text-orange-400 font-bold text-xl'>فیلتر</div>
				<div className='my-5'>
					<ul>
						<Brandsidebar />
						<Colorsidebar />
						<Pricesidebar />
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
