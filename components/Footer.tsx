import Link from 'next/link'

import { BsWhatsapp, BsInstagram } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

export function Footer() {
  return (
    <div className="relative lg:pb-4 pb-0 bg-footerclr text-gray-300 bg-yellow-700 mt-8">
      <div className="relative pt-6 pb-6 px-4 sm:px-6 lg:px-8">
        <div className="flex lg:flex-row flex-col lg:items-center justify-between">
          <div className="lg:flex-1 py-8">
            <div className="h-10 w-36 mb-4">
              <Link href="/">
                <a className='font-extrabold text-2xl'>ReBooks.</a>
              </Link>
            </div>
            <h3 className="text-lg font-bold mb-2">Sejuta Cita</h3>
            <p className="max-w-sm">
              Perusahaan pendidikan dengan misi mendemokratis informasi event bagi anak muda Indonesia
            </p>
          </div>
          <div className="lg:flex-1 mt-8">
            <h3 className='font-bold mb-2'>Contact Us</h3>
            <p className='mb-2'>Monday-Sunday @ 08.00-22.00</p>
            <div className='flex items-center my-1'>
              <BsWhatsapp size={15} />
              <span className='ml-2 font-bold'>62 8712-213-2132</span>
            </div>
            <div className='flex items-center my-1'>
              <AiOutlineMail size={15} />
              <span className='ml-2 font-bold'>halo@sejutacita.id</span>
            </div>
            <div className='flex items-center my-1'>
              <BsInstagram size={15} />
              <span className='ml-2 font-bold'>@sejutacita.com</span>
            </div>
            <div className='flex items-center my-1'>
              <BsInstagram size={15} />
              <span className='ml-2 font-bold'>@sejutacuta.futureleaders</span>
            </div>
          </div>
          <div className="lg:flex-1 mt-8">
            <h2 className='font-bold mb-2'>Office</h2>
            <p className="mb-2">Closed temporarily due to Covid-19</p>
            <h2 className='font-bold mb-2'>Matrix Smart Sulte</h2>
            <p className='mb-2'>
              <span>Cibis Nine Building Lt.11</span>
              <span>Jl. TB Smatupang No. 2, RT13/RW5,</span>
              <span>Cilandak Tim, Kec. Ps. Minggu,</span>
              <span>Kota Jakarta Selatan,</span>
              <span>Daerah Khusus Ibukota Jakarta 12560</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}