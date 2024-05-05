import React, { useState } from 'react';

const Pricesidebar = () => {
	const [price, setprice] = useState(false);

	return (
		<li className='hover:bg-orange-50 rounded-md '>
			<div className='flex items-center gap-2 p-2 '>
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
							d='M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
						/>
					</svg>
				</div>
				<div
					onClick={() => {
						setprice(!price);
					}}
					className='w-full flex justify-between items-center cursor-pointer'
				>
					<span className='font-bold'>محدوده قیمت</span>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className={`w-5 h-5 ${
							price
								? `rotate-180 transition ease-out duration-500`
								: ` transition ease-out duration-500`
						}`}
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='m19.5 8.25-7.5 7.5-7.5-7.5'
						/>
					</svg>
				</div>
			</div>
			{price && (
				<div className='text-gray-600 '>
					<div className='hover:bg-gray-100 rounded-md flex items-center p-2 ps-8'>
						<input
							id='1-5'
							type='radio'
							value=''
							name='price'
							className='text-orange-500 focus:ring-orange-500 form-radio w-4 h-4  bg-gray-100 border-gray-300  '
						/>
						<label for='1-5' className='ms-2 text-sm font-medium text-gray-900 '>
							1 تا 5 میلیون
						</label>
					</div>
					<div className='hover:bg-gray-100 rounded-md flex items-center p-2 ps-8'>
						<input
							id='5-10'
							type='radio'
							value=''
							name='price'
							className='text-orange-500 focus:ring-orange-500 form-radio  w-4 h-4  bg-gray-100 border-gray-300  '
						/>
						<label for='5-10' className='ms-2 text-sm font-medium text-gray-900 '>
							5 تا 10 میلیون
						</label>
					</div>
					<div className='hover:bg-gray-100 rounded-md flex items-center p-2 ps-8'>
						<input
							id='10-15'
							type='radio'
							value=''
							name='price'
							className='text-orange-500 focus:ring-orange-500 form-radio  w-4 h-4  bg-gray-100 border-gray-300  '
						/>
						<label for='10-15' className='ms-2 text-sm font-medium text-gray-900 '>
							5 تا 10 میلیون
						</label>
					</div>
					<div className='hover:bg-gray-100 rounded-md flex items-center p-2 ps-8'>
						<input
							id='15-20'
							type='radio'
							value=''
							name='price'
							className='text-orange-500 focus:ring-orange-500 form-radio  w-4 h-4  bg-gray-100 border-gray-300 '
						/>
						<label for='15-20' className='ms-2 text-sm font-medium text-gray-900 '>
							5 تا 10 میلیون
						</label>
					</div>
				</div>
			)}
		</li>
	);
};

export default Pricesidebar;
