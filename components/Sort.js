import React, { useState } from 'react';
const sortData = [
	{
		id: 1,
		title: 'محبوب ترین',
	},
	{
		id: 2,
		title: 'گران ترین',
	},
	{
		id: 3,
		title: 'ارزان ترین',
	},
	{
		id: 4,
		title: 'پرفروش ترین',
	},
];
const Sort = () => {
	const [activeItem, setActiveItem] = useState();
	return (
		<div className=' bg-white w-full flex items-center gap-6  rounded-md ps-4 '>
			<button className='flex items-center justify-center'>
				<svg
					className=' bg-orange-100 p-1 rounded-md shadow-md w-8 h-8 stroke-orange-600 '
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth='1.5'
					stroke='currentColor'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25'
					/>
				</svg>
			</button>
			{sortData.map((item) => (
				<button
					onClick={() => setActiveItem(item.id)}
					key={item.id}
					className={`relative flex justify-start items-center py-4 ${
						activeItem === item.id ? `text-slate-900 font-bold` : `text-slate-400`
					}`}
					type=''
				>
					<span>{item.title}</span>

					{activeItem === item.id && (
						<span className='self-start '>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke='currentColor'
								className=' -mx-3 absolute top-2 left-0 w-4 h-4 stroke-orange-600'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z'
								/>
							</svg>
						</span>
					)}
				</button>
			))}
		</div>
	);
};

export default Sort;
