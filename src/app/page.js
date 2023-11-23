import React from 'react'
import Image from 'next/image'
import Corrolagray from '../../public/corrolagray.jpeg'
 import Corrolared from '../../public/corrollared.jpeg'
 import ParkingLot from '../../public/parkinglot.jpeg'
// import Toyotacorrola from '../../public/toyotacorrola.jpeg'

const Homepage = () => {
  return (
    <div>
    {/* <div className='flex justify-center pt-2'>Homepage</div> */}
    {/* <div className="py-20" style={{background: linear-gradient+("90deg, #667eea 0%, #764ba2 100%")}} */}
    <div className="py-20" style={{background: "#667eea"}}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-2 text-white">
          Enjoy a Smart way of Parking with VDT parking app!
        </h2>
        <h3 className="text-2xl mb-8 text-gray-200">
          The safety of your parked car is our uttermost priority. You can also monitor your car seamlessly!
        </h3>

        <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
          Click to Begin
        </button>
      </div>
    </div>

    <section className="container mx-auto px-6 p-10">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Features
      </h2>
      <div className="flex items-center flex-wrap mb-20">
        <div className="w-full md:w-1/2">
          <h4 className="text-3xl text-gray-800 font-bold mb-3">Safe Parking</h4>
          <p className="text-gray-600 mb-8">Our Smart solution allows you to safely park your cars without fear of car bash or theft.</p>
        </div>
        <div className="w-full md:w-1/2">
          {/* <img src="assets/health.svg" alt="Monitoring" /> */}
          <Image src={Corrolared} alt='Corrolagray' className='scale-200 w-full'/>

        </div>
      </div>

      <div className="flex items-center flex-wrap mb-20">
        <div className="w-full md:w-1/2">
          {/* <img src="assets/report.svg" alt="Reporting" /> */}
          <Image src={Corrolagray} alt='Corrolagray' className='scale-200 w-full'/>

        </div>
        <div className="w-full md:w-1/2 pl-10">
          <h4 className="text-3xl text-gray-800 font-bold mb-3">Reporting</h4>
          <p className="text-gray-600 mb-8">Our Smart Car Monitoring gives an accurate log of when your car was packed and when you move it away.</p>
        </div>
      </div>

      <div className="flex items-center flex-wrap mb-20">
        <div className="w-full md:w-1/2">
          <h4 className="text-3xl text-gray-800 font-bold mb-3">Syncing</h4>
          <p className="text-gray-600 mb-8">We keep and accurate track of your past transactions with us .</p>
        </div>
        <div className="w-full md:w-1/2">
          {/* <img src="assets/sync.svg" alt="Syncing" /> */}
          <Image src={ParkingLot} alt='ParkingLot' className='scale-200 w-full'/>

        </div>
      </div>
    </section>
    </div>
  )
}

export default Homepage