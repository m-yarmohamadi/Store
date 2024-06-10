import React, { useState, useEffect } from 'react';

const Clock = () => {
    const [deg, setDeg] = useState();

    useEffect(() => {
        const interval = setInterval(() => {
            setDeg(prevDeg => (prevDeg + 6) % 360); // هر ثانیه 6 درجه جابجا شود
        }, 1000);
        console.log(deg);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className='flex justify-center items-center'>
                <hr className={`border border-red-700 w-32 absolute top-40 rotate-[${deg}]`} />
            </div>
        </div>
    );
};

export default Clock;