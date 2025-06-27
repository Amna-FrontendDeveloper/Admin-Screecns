import React from 'react'
import DisputesList from '../components/DisputesList'
import disputesData from '../data/mockDisputes.json';

import Header from '../components/Header';
import Background from '../assets/BackgroundBanner.png'


const PaymentSection = () => {
  return (
   <>
   
  

   <div className="flex h-screen">
     
      <div className="flex flex-col flex-1">
        <Header />
        <div className=" bg-cover bg-center rounded-lg mx-8 mt-6 relative"
          style={{
            backgroundImage:
              `url(${Background})`,
            minHeight: "220px",
          }}
        >
          <div className=" bg-opacity-40 absolute inset-0 rounded-lg"></div>
          <div className="relative z-10 p-8 text-white">
            <h1 className="text-3xl font-semibold mb-1">Payment Disputes</h1>
            <p className="text-sm opacity-80">Manage and Resolve payment disputes cases </p>
          </div>
        </div>
        < DisputesList disputes={disputesData} />
      </div>
    </div>

   </>
  )
}

export default PaymentSection