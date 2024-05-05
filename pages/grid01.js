import React from 'react';

const grid01 = () => {
	return (
		<div className=' bg-gray-100 h-screen'>
			<div className=' container'>
				<div className=' grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-x-8 md:gap-y-4 grid-rows-[60px_minmax(600px,_1fr)]'>
					<div className=' hidden md:block p-4 bg-rose-400 col-span-2 row-span-2'>
						items01
					</div>
					<div className='p-4 bg-rose-400 col-span-10'>items02</div>
					<div className='p-4 bg-rose-400 col-span-10 text-justify'>
                    LoremLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
						Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
						Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
						Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem LoremLoremLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
						Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
						Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
						Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
					</div>
				</div>
			</div>
		</div>
	);
};

export default grid01;
