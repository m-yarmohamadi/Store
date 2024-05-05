import React from 'react';
import Barcode from 'react-barcode';

const barcode = () => {
     const  BarcodeFunc = () => {
        return <Barcode value="sbmu-s27-mit001" />;
    };
    console.log(BarcodeFunc);
    
    return (
        <div >
            <Barcode className='barcode	' value="sbmu-s27-mit001" />
        </div>
    );
};

export default barcode;