import React, { useState } from 'react';

const Brandsidebar = () => {
	const [brand, setBrand] = useState(false);

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
							d='m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
						/>
					</svg>
				</div>
				<div
					onClick={() => {
						setBrand(!brand);
					}}
					className='w-full flex justify-between items-center cursor-pointer '
				>
					<span className='font-bold'>برند محصول</span>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className={`w-5 h-5 ${
							brand
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
			{brand && (
				<div>
					<label
						className=' hover:bg-gray-100 rounded-md flex justify-start items-center p-2 ps-8  text-sm font-bold'
						for='apple'
					>
						<input
							className='form-checkbox rounded mx-2 w-4 h-4 text-orange-500 focus:ring-orange-500'
							type='checkbox'
							name='apple'
							value=''
						/>
						<span>اپل</span>
					</label>
					<label
						className=' hover:bg-gray-100 rounded-md flex justify-start items-center p-2 ps-8  text-sm font-bold'
						for='samsung'
					>
						<input
							className='form-checkbox rounded mx-2 w-4 h-4 text-orange-500 focus:ring-orange-500'
							type='checkbox'
							name='samsung'
							value=''
						/>
						<span>سامسونگ</span>
					</label>
					<label
						className=' hover:bg-gray-100 rounded-md flex justify-start items-center p-2 ps-8  text-sm font-bold'
						for='Shiaumi'
					>
						<input
							className='form-checkbox rounded mx-2 w-4 h-4 text-orange-500 focus:ring-orange-500'
							type='checkbox'
							name='Shiaumi'
							value=''
						/>
						<span>شیائومی</span>
					</label>
					<label
						className=' hover:bg-gray-100 rounded-md flex justify-start items-center p-2 ps-8  text-sm font-bold'
						for='hoavey'
					>
						<input
							className='form-checkbox rounded mx-2 w-4 h-4 text-orange-500 focus:ring-orange-500'
							type='checkbox'
							name='hoavey'
							value=''
						/>
						<span>هواوی</span>
					</label>
				</div>
			)}
		</li>
	);
};

export default Brandsidebar;
