import Bottom from '@/components/Bottom';
import Header from '@/components/Header';
import Product from '@/components/Product';
import Sidebar from '@/components/Sidebar';
import Sort from '@/components/Sort';
import React from 'react';
const data = [
	{
		id: 1,
		title: 'اپل واچ سری 6',
		brand: 'اپل',
		imgUrl: 'whatch.webp',
		price: '15.750.000',
		colors: ['bg-slate-600', 'bg-blue-600', 'bg-gray-600'],
	},
	{
		id: 2,
		title: 'گلکسی واچ 3',
		brand: 'سامسونگ',
		imgUrl: 'watch02.png',
		price: '13.790.000',
		colors: ['bg-zinc-600', 'bg-rose-600', 'bg-amber-600'],
	},
	{
		id: 3,
		title: 'گیر فیت 2',
		brand: 'سامسونگ',
		imgUrl: 'watch03.png',
		price: '11.880.000',
		colors: ['bg-red-600', 'bg-orange-600', 'bg-stone-600'],
	},
	{
		id: 4,
		title: 'اپل واچ سری 5',
		brand: 'اپل',
		imgUrl: 'watch04.png',
		price: '13.910.000',
		colors: ['bg-yellow-600', 'bg-lime-600', 'bg-green-600'],
	},
	{
		id: 5,
		title: 'اپل واچ سری 4',
		brand: 'اپل',
		imgUrl: 'whatch.webp',
		price: '9.870.000',
		colors: ['bg-emerald-600', 'bg-teal-600', 'bg-cyan-600'],
	},
	{
		id: 6,
		title: 'اپل واچ سری 3',
		brand: 'اپل',
		imgUrl: 'watch03.png',
		price: '7.340.000',
		colors: ['bg-sky-600', 'bg-blue-600', 'bg-indigo-600'],
	},
	{
		id: 7,
		title: 'گلکسی واچ 2',
		brand: 'سامسونگ',
		imgUrl: 'watch02.png',
		price: '8.450.000',
		colors: ['bg-violet-600', 'bg-purple-600', 'bg-fuchsia-600'],
	},
	{
		id: 8,
		title: 'واچ 2',
		brand: 'هواوی',
		imgUrl: 'watch04.png',
		price: '5.430.000',
		colors: ['bg-pink-600', 'bg-neutral-600', 'bg-white'],
	},
];

const home = () => {
	return (
		<>
			<Header />
			<div className='bg-gray-100 container max-w-screen-2xl mx-auto pb-10'>
				{/* App Bar */}
				<div className=' bg-white rounded-md w-full'>
					<div className='md:hidden mt-10 p-2  mb-6 flex justify-between items-center '>
						<div>
							<img className='' src='/image/logo.svg' alt='' />
						</div>
						<div className='text-lg font-bold text-slate-800'>
							<span>ساعت هوشمند</span>
						</div>
						<div className='bg-white p-1 rounded-md shadow-md w-7 h-7 flex justify-center items-center'>
							<svg
								className='  stroke-slate-800'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
								/>
							</svg>
						</div>
					</div>
				</div>
				<div className='flex justify-between items-center gap-2 md:pt-2 mb-9'>
					<div className='bg-white rounded-md w-full flex justify-start items-center p-2 shadow-sm'>
						<svg
							className=' pe-2 w-8 h-8 stroke-orange-600 '
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
						<span className='text-sm font-medium text-slate-800'>محبوب ترین محصول</span>
					</div>
					<div className='bg-white rounded-md w-full flex justify-start items-center p-2 shadow-sm'>
						<svg
							className=' pe-2 w-8 h-8 stroke-gray-300'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z'
							/>
						</svg>
						<span className='text-sm font-medium text-slate-800'>فیلتر: برند اپل</span>
					</div>
				</div>
				<div className='grid grid-cols-12 md:grid-rows-[55px_minmax(500px,_1fr)] md:gap-6'>
					<div className=' hidden md:block  md:col-span-4 lg:col-span-3 row-span-2'>
						<Sidebar />
					</div>
					<div className='  hidden md:block  md:col-span-8 lg:col-span-9 shadow-md'>
						<Sort />
					</div>
					<div className=' col-span-12 md:col-span-8 lg:col-span-9'>
						<div className='grid gap-2 md:gap-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   '>
							{data.map((item) => (
								<Product
									key={item.id}
									title={item.title}
									brand={item.brand}
									imgUrl={item.imgUrl}
									price={item.price}
									colors={item.colors}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
			<Bottom />
		</>
	);
};

export default home;
