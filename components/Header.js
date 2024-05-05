import React from 'react';

const Header = () => {
	return (
		<div className=' hidden md:block py-1 z-20 bg-white shadow-lg sticky top-0'>
			<nav className='flex justify-between items-center container max-w-screen-2xl mx-auto font-bold lg:text-lg'>
				<ul className='flex  items-center gap-x-2  lg:gap-x-4'>
					<li className='p-3 rounded-md hover:bg-orange-100 cursor-pointer'>
                        <img src="/image/logo.svg" alt=""/>




                    </li>
					<li className='p-3 rounded-md hover:bg-orange-100 cursor-pointer'>خانه</li>
					<li className='p-3 rounded-md hover:bg-orange-100 cursor-pointer'>لپ تاب</li>
					<li className='p-3 rounded-md hover:bg-orange-100 cursor-pointer'>
						ساعت هوشمند
					</li>
					<li className='p-3 rounded-md hover:bg-orange-100 cursor-pointer'>
						تلفن همراه
					</li>
				</ul>
				<div className='flex-1 max-w-xl ms-2'>
					<div className=' bg-gray-100 rounded-md p-1  flex  items-center '>
						<span className='mx-3'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='currentColor'
								className=' stroke-orange-600 w-6 h-6'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
								/>
							</svg>
						</span>
						<input
							className=' focus:outline-none bg-transparent w-full p-2 text-slate-800 '
							placeholder='نام محصول، برند یا رنگ...'
							type='text'
							name=''
						/>
					</div>
				</div>{' '}
			</nav>
		</div>
	);
};

export default Header;
