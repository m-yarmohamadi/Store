import React, { useState } from 'react';

const Bottom = () => {
	const [activeShow, setActiveShow] = useState('');
	return (
		<div className=' md:hidden  pt-1 px-4 z-20  shadow-lg sticky bottom-0 container max-w-screen-2xl mx-auto'>
			<nav className=' shadow-[0_-4px_8px_0_rgba(0,0,0,0.1)] rounded-t-2xl  font-bold lg:text-lg bg-white  overflow-hidden'>
				<ul className='flex justify-around items-center w-full text-gray-400 '>
					<li>
						<a
							onClick={() => setActiveShow(1)}
							className={`${activeShow === 1 ? ` text-gray-800` : `text-gray-400`} flex justify-center items-center gap-x-1 p-4 `}
							href='#'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='currentColor'
								class='w-6 h-6'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
								/>
							</svg>
							<span className={`${activeShow === 1 ? `block text-gray-800` : `hidden`}`}>خانه</span>
						</a>
					</li>
					<li>
						<a
							onClick={() => setActiveShow(2)}
							className={`${activeShow === 2 ? ` text-gray-800` : `text-gray-400`} flex justify-center items-center gap-x-1 p-4 `}
							href='#'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='currentColor'
								class='w-6 h-6'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z'
								/>
							</svg>
							<span className={`${activeShow === 2 ? `block text-gray-800` : `hidden`}`}>
								دسته بندی
							</span>
						</a>
					</li>
					<li>
						<a
							onClick={() => setActiveShow(3)}
							className={`${activeShow === 3 ? ` text-gray-800` : `text-gray-400`} flex justify-center items-center gap-x-1 p-4 `}
							href='#'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='currentColor'
								class='w-6 h-6'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
								/>
							</svg>
							<span className={`${activeShow === 3 ? `block text-gray-800` : `hidden`}`}>سبد خرید</span>
						</a>
					</li>
					<li>
						<a
							onClick={() => setActiveShow(4)}
							className={`${activeShow === 4 ? ` text-gray-800` : `text-gray-400`} flex justify-center items-center gap-x-1 p-4 `}
							href='#'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='currentColor'
								class='w-6 h-6'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
								/>
							</svg>
							<span className={`${activeShow === 4 ? `block text-gray-800` : `hidden`}`}>
								علاقمندیها
							</span>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Bottom;
