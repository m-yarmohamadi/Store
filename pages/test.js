import React from 'react';

const test = () => {
	return (
		<div className=' bg-gray-400 h-screen'>
			<div className='w-100 h-screen px-20 py-32'>
				<img
					className='border-4 border-white w-full h-full object-cover rounded-3xl shadow-md'
					src='/image/DSC00502.jpg'
					alt=''
				/>
				<div className=' flex justify-between px-10 gap-5'>
					<div className='bg-red-950 border-2 border-red-50  w-full transform skew-x-12 rounded-t-md shadow-lg shadow-white h-60 z-20 -mt-32'>
						<img
							className='w-full h-2/3   object-cover rounded-md border-b border-red-50'
							src='/image/DSC00419.jpg'
							alt=''
						/>
						<div className=' w-full'>
							<div className='p-1 pb-0 rounded-sm m-1 h-20	 bg-red-50'>
								<h2>شب اول محرم الحرام</h2>
								<p>حاج محمد رضا طاهری</p>
								<p>کربلایی حسین طاهری</p>
							</div>
						</div>
					</div>
					<div className='bg-red-950 border-2 border-red-50  w-full transform skew-x-12 rounded-t-md shadow-lg shadow-white h-60 z-20 -mt-32'>
						<img
							className='w-full h-2/3   object-cover rounded-md border-b border-red-50'
							src='/image/DSC00404.jpg'
							alt=''
						/>
					</div>
					<div className='bg-red-950 border-2 border-red-50  w-full transform skew-x-12 rounded-t-md shadow-lg shadow-white h-60 z-20 -mt-32'>
						<img
							className='w-full h-2/3   object-cover rounded-md border-b border-red-50'
							src='/image/DSC00502.jpg'
							alt=''
						/>
					</div>
					<div className='bg-red-950 border-2 border-red-50  w-full transform skew-x-12 rounded-t-md shadow-lg shadow-white h-60 z-20 -mt-32'>
						<img
							className='w-full h-2/3   object-cover rounded-md border-b border-red-50'
							src='/image/DSC00404.jpg'
							alt=''
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default test;
