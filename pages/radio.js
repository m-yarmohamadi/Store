import React, { useState } from 'react';
import { ChevronDoubleDownIcon, ChevronDoubleLeftIcon } from '@heroicons/react/16/solid';

const radio = () => {
	const [show, setShow] = useState(false);
	const [show2, setShow2] = useState(false);
	const [tab, setTab] = useState(0);
	return (
		<div className=' container pt-10 flex-col justify-center '>
			<div className='flex flex-col gap-4 bg-white rounded-md w-96 p-2'>
				<div
					onClick={() => setShow(!show)}
					className=' my-2 flex justify-between text-white font-extrabold w-full p-2 rounded-md bg-blue-600'
				>
					<span>آیا سوال خاصی مدنظر شماست؟</span>
					<span
						className={
							!show
								? '-rotate-90 transition ease-out duration-1000'
								: 'transition ease-out duration-1000'
						}
					>
						<ChevronDoubleLeftIcon className='h-6 w-6 text-white' />
					</span>
				</div>
				{show && (
					<div className=' text-blue-950 bg-white p-2 text-justify'>
						<span className='transition ease-out duration-1000'>
							سوالات خود را در زمینه تمام دوره های برنامه نویسی بصورت اختصاصی از
							وبسایت ما بپرسید و منتظر پاسخ خود باشید.
						</span>
					</div>
				)}

				<div
					onClick={() => setShow2(!show2)}
					className='transition ease-out duration-1000 my-2 flex justify-between text-white font-extrabold w-full p-2 rounded-md bg-blue-600'
				>
					<span>آیا دوره های ما را سپری کرده اید؟</span>
					<span
						className={
							show2
								? 'rotate-90 transition ease-out duration-1000'
								: 'transition ease-out duration-1000'
						}
					>
						<ChevronDoubleLeftIcon className=' h-6 w-6  text-white' />
					</span>
				</div>

				{show2 && (
					<div className=' text-blue-950 bg-white p-2 text-justify'>
						<span className=''>
							پس از سپری کردن دوره های ما شما می توانید پروزه های برنامه نویسی را با
							بهترین کیفیت انجام دهید
						</span>
					</div>
				)}
			</div>

			<div className='w-full  mt-20 flex flex-col justify-center  items-center gap-2 '>
				<div className='p-1 text-center items-center  flex justify-between gap-1 overflow-hidden rounded-md w-96 bg-blue-600 h-10'>
					<button
						onClick={() => setTab(1)}
						className=' content-center h-full rounded-md focus:bg-white focus:ring-2 focus:ring-blue-50 focus:ring-offset-2 focus:ring-offset-blue-600 focus:text-blue-900 font-black text-gray-900 w-1/3'
					>
						آخرین
					</button>
					<button
						onClick={() => setTab(2)}
						className=' content-center h-full rounded-md focus:bg-white focus:ring-2 focus:ring-blue-50 focus:ring-offset-2 focus:ring-offset-blue-600 focus:text-blue-900 font-black text-gray-900 w-1/3'
					>
						مهم ترین
					</button>
					<button
						onClick={() => setTab(3)}
						className=' content-center h-full rounded-md focus:bg-white focus:ring-2 focus:ring-blue-50 focus:ring-offset-2 focus:ring-offset-blue-600 focus:text-blue-900 font-black text-gray-900 w-1/3'
					>
						پربازدیدها
					</button>
				</div>
				{tab === 1 && (
					<div className='flex flex-col gap-y-1 rounded-md w-96 bg-white h-fit overflow-hidden'>
						<button className='bg-gray-200 hover:bg-gray-100 '>
							<p className='p-2 pb-0 text-gray-950 text-md text-justify'>
								محتوای شماره 1 آموزش ریکت
							</p>
							<p className='p-2 pt-0 text-gray-600 text-sm text-justify font-thin'>
								آموزش کامپوننت ها
							</p>
						</button>
						<button className='bg-gray-200 hover:bg-gray-100 '>
							<p className='p-2 pb-0 text-gray-950 text-md text-justify'>
								محتوای شماره 1 آموزش نکست
							</p>
							<p className='p-2 pt-0 text-gray-600 text-sm text-justify font-thin'>
								آموزش کامپوننت ها
							</p>
						</button>
					</div>
				)}
				{tab === 2 && (
					<div className='flex flex-col gap-y-1 rounded-md w-96 bg-white h-fit overflow-hidden'>
						<button className='bg-gray-200 hover:bg-gray-100 '>
							<p className='p-2 pb-0 text-gray-950 text-md text-justify'>
								محتوای شماره 2 آموزش ریکت
							</p>
							<p className='p-2 pt-0 text-gray-600 text-sm text-justify font-thin'>
								آموزش کامپوننت ها
							</p>
						</button>
						<button className='bg-gray-200 hover:bg-gray-100 '>
							<p className='p-2 pb-0 text-gray-950 text-md text-justify'>
								محتوای شماره 2 آموزش نکست
							</p>
							<p className='p-2 pt-0 text-gray-600 text-sm text-justify font-thin'>
								آموزش کامپوننت ها
							</p>
						</button>
					</div>
				)}
				{tab === 3 && (
					<div className='flex flex-col gap-y-1 rounded-md w-96 bg-white h-fit overflow-hidden'>
						<button className='bg-gray-200 hover:bg-gray-100 '>
							<p className='p-2 pb-0 text-gray-950 text-md text-justify'>
								محتوای شماره 3 آموزش ریکت
							</p>
							<p className='p-2 pt-0 text-gray-600 text-sm text-justify font-thin'>
								آموزش کامپوننت ها
							</p>
						</button>
						<button className='bg-gray-200 hover:bg-gray-100 '>
							<p className='p-2 pb-0 text-gray-950 text-md text-justify'>
								محتوای شماره 3 آموزش نکست
							</p>
							<p className='p-2 pt-0 text-gray-600 text-sm text-justify font-thin'>
								آموزش کامپوننت ها
							</p>
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default radio;
