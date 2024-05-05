import React, { useState } from 'react';

const Product = ({ title, brand, imgUrl, price, colors }) => {
	const [colorSelect, setColorSelect] = useState();
	return (
		<div className='bg-white rounded-md p-1 shadow-md'>
			<div className=' bg-gradient-to-br from-slate-300 to-orange-50  rounded-md shadow-md flex justify-center items-center'>
				<img className='px-8 py-4 h-48' src={`/image/${imgUrl}`} alt='' />
			</div>
			<div className='flex justify-between items-center p-2'>
				<span className='text-xs text-slate-300'>{brand}</span>
				<div className='flex justify-end items-center'>
					{colors.map((color, index) => (
						<div
							key={index}
							onClick={() => setColorSelect(index)}
							className={` flex justify-center items-center shadow-sm shadow-slate-800 cursor-pointer border border-slate-100 ${color} rounded-full w-5 h-5 md:h-6 md:w-6 -me-1 transition ease-out duration-5000 hover:transform hover:scale-125`}
						>
							{colorSelect === index && (
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth='1.5'
									stroke='currentColor'
									className='w-4 h-4 md:w-5 md:h-5  stroke-white'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										d='m4.5 12.75 6 6 9-13.5'
									/>
								</svg>
							)}
						</div>
					))}
				</div>
			</div>
			<div>
				<span className=' text-slate-800 text-sm font-bold px-2 py-4'>{title}</span>
			</div>
			<div>
				<span className=' text-orange-700 text-sm font-bold p-2 flex justify-end items-center'>
					{price} تومان
				</span>
			</div>
			<div>
				<hr className='border border-slate-200' />
				<button className='w-full flex justify-center items-center p-2 text-orange-500 font-bold'>
					مشاهده و سفارش
				</button>
			</div>
		</div>
	);
};

export default Product;
