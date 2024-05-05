import React, { useState } from 'react';

const Colorsidebar = () => {
	const [color, setColor] = useState(false);

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
							d='M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z'
						/>
					</svg>
				</div>

				<div
					onClick={() => {
						setColor(!color);
					}}
					className='w-full flex justify-between items-center cursor-pointer'
				>
					<span className='font-bold'>رنگ محصول</span>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className={`w-5 h-5 ${
							color
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
			{color && (
				<div>
					<label
						className=' hover:bg-red-100 rounded-md flex justify-start items-center p-2 ps-8  text-sm font-bold'
						for='red'
					>
						<input className='form-checkbox rounded mx-2 w-4 h-4 text-orange-500 focus:ring-orange-500 ' type='checkbox' name='red' value='' />
						<span>قرمز</span>
					</label>
					<label
						className=' hover:bg-green-100 rounded-md flex justify-start items-center p-2 ps-8  text-sm font-bold'
						for='green'
					>
						<input className='form-checkbox rounded mx-2 w-4 h-4 text-orange-500 focus:ring-orange-500' type='checkbox' name='green' value='' />
						<span>سبز</span>
					</label>
					<label
						className=' hover:bg-blue-100 rounded-md flex justify-start items-center p-2 ps-8  text-sm font-bold'
						for='blue'
					>
						<input className='form-checkbox rounded mx-2 w-4 h-4 text-orange-500 focus:ring-orange-500' type='checkbox' name='blue' value='' />
						<span>آبی</span>
					</label>
					<label
						className=' hover:bg-yellow-100 rounded-md flex justify-start items-center p-2 ps-8  text-sm font-bold'
						for='yellow'
					>
						<input className='form-checkbox rounded mx-2 w-4 h-4 text-orange-500 focus:ring-orange-500' type='checkbox' name='yellow' value='' />
						<span>زرد</span>
					</label>
				</div>
			)}
		</li>
	);
};

export default Colorsidebar;
