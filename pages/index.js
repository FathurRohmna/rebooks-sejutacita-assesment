import Image from 'next/image'
import Link from 'next/link'

import { BsBookmark, BsBookmarkCheckFill } from 'react-icons/bs'
import { MdOutlineHomeWork } from 'react-icons/md'
import { FaBusinessTime, FaPeopleArrows } from 'react-icons/fa'
import { GoGraph } from 'react-icons/go'
import { HiOutlineEmojiHappy } from 'react-icons/hi'

import Profile from '../assets/profile/lokecarlsson.png'
import Profile2 from '../assets/profile/mrcrmn.png'

import { HeaderLottie } from '../components/HeaderLottie'
import { EducationSystem } from '../components/EducationSystem'
import { PickerMachine } from '../components/NextFeature'

export default function Home() {

  return (
    <div className='bg-white relative w-full'>
      <div className="relative block overflow-x-hidden">
        <div className="relative z-1 mt-12 py-20 px-6 sm:py-6 md:pb-20 mx-auto md:w-11/12 lg:max-w-7xl">
          <div className="text-gray-500 lg:flex lg:flex-row w-full relative items-center">
            <div className="md:flex-1 text-left items-center md:px-8 lg:px-0">
              <h6 className='uppercase font-extrabold text-sm'>Lorem, ipsum dolor sit ametit.</h6>
              <h1 className='text-6xl font-semibold my-8 tracking-wide text-gray-800'>
                <span className='inline-block'>Cari <span className='text-blue-500 font-extrabold'>Bakat</span> dan <span className='text-blue-500 font-extrabold'>Peluangmu</span></span>
                <span className='inline-block'>dengan Giat Membaca.</span>
              </h1>
              <p className='max-w-md'>Cari Bakat dan Peluangmu dengan Giat Membaca.</p>
              <button className='text-yellow-700 mt-8 font-bold'>
                Mulai mencari Buku
              </button>
            </div>
            <div className="md:flex-1 justify-center w-full flex-none relative">
              <HeaderLottie />
            </div>
          </div>
        </div>
      </div>
      <div className="relative block overflow-x-hidden">
        <div className="relative py-20 px-6 md:pb-20 mx-auto md:w-11/12 lg:max-w-7xl">
          <div className="max-w-md mx-auto text-lg text-gray-500">
            <p className='italic tracking-wider text-center font-extralight'>
              <span>
                "Ketika saya punya tekad untuk sukses, tetapi bungung bagaimana cara memulai. Juga bingung dan merasahilang akan tujuan hidup, mau jadi apa.
              </span>

              <span className='inline-block'>
                Itulah mengapa komunitas SejutaCita dibuat, agar teman teman bisa mendapatkan informas dan kesempatan membangun diri, dan mendaatkan pekerjaan yang baik pula nanti."
              </span>
            </p>
            <div className="text-center mt-8 text-gray-600">
              <h3 className='font-bold'>Andhika Sudarman</h3>
              <p className='font-light text-gray-500 text-sm'>Founder & CEO of SejutaCita Indonesia</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative block overflow-x-hidden">
        <div className="relative py-20 px-6 md:pb-20 mx-auto md:w-11/12 lg:max-w-7xl">
          <div className="">
            <div className="flex items-center">
              <div className="responsive">
                <div className="relative w-20 h-20">
                  <Image className='rounded-full' src={Profile} alt="Profile" layout="responsive" width={40} height={40} />
                  <div className="absolute top-0 -left-2">
                    <div className='w-6 h-6 items-center justify-center flex text-xs font-bold bg-gray-600 text-white leading-none rounded-full'>
                      <span>4</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-8 text-gray-600">
                <p className="text-xl font-bold">Hartono</p>
                <span className='block my-1'>Spain, Book Creator</span>
                <q className='italic text-gray-500'>Leader heree with 5 years experience</q>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative block overflow-x-hidden">
        <div className="relative py-20 px-6 md:pb-20 mx-auto md:w-11/12 lg:max-w-7xl">
          <div className="flex">
            <div className="w-3/5 relative -left-1/4 md:-left-1/4 lg:-left-0 top-0 z-6 md:mb-4 mb-28 lg:mb-4">
              <div className="w-3/4">
                <EducationSystem />
              </div>
            </div>
            <div className='flex-1'>
              <h1 className='text-4xl font-bold mb-8'>Education System</h1>
              <p className='my-4 tracking-wide'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta omnis distinctio pariatur quo voluptate voluptatum. Doloremque, numquam aliquam, ut ea illo, fugit vitae ex labore voluptas blanditiis consequatur mollitia accusantium.</p>
              <p className='my-4 tracking-wide'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quisquam, libero quasi tempore pariatur adipisci inventore deserunt ut vitae perspiciatis mollitia veniam vero maxime id deleniti officia magnam fugiat iusto!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative block overflow-x-hidden">
        <div className="relative py-20 px-6 md:pb-20 mx-auto md:w-11/12 lg:max-w-7xl">
          <h1 className='font-bold text-4xl text-blue-500'>Best Books</h1>
          <p className='italic'>Find more books with us ! <Link href="/search"><a className='text-yellow-700 underline font-bold'>Books</a></Link></p>
          <div className='my-8'>
            <div className='p-2 rounded-lg border border-gray-200 w-min'>
              <div>
                <div className='relative w-52'>
                  <Image className='rounded-lg' src={Profile2} alt="Profile" layout="responsive" width={60} height={60} />
                </div>
              </div>
              <div className="flex py-4">
                <div className=''>
                  <h4 className='font-bold text-base mb-2'>The Intelligent Investor</h4>
                  <p>Benjamin Graham</p>
                  <span className='italic font-light text-xs'><span className='font-bold'>7</span> Sections</span>
                </div>
                <div className='w-1/5 flex justify-center ml-2'>
                  <button className='p-2 bg-gray-200 h-min rounded'>
                    <BsBookmark size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative block overflow-x-hidden">
        <div className="relative py-20 px-6 md:pb-20 mx-auto md:w-11/12 lg:max-w-7xl">
          <div className='flex'>
            <div className='flex-1 md:ml-12'>
              <h2 className='text-4xl font-bold text-gray-600'>Categories</h2>
            </div>
            {/* Carrer Bussinness, Productivity Time Management, Society Politics, Invesment Finance */}
            <div className='flex-1'>
              <div>
                <div className='flex justify-between items-center text-white py-4 px-6 rounded-md max-w-md shadow-lg  bg-blue-900 font-bold'>
                  <p className='tracking-wide'>Happiness Minddfulness</p>
                  <div className="p-2 border rounded">
                    <HiOutlineEmojiHappy size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative block overflow-x-hidden">
        <div className="">
          <div className="text-center">
            <h1>Next Feature</h1>
            <p className='max-w-md mx-auto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti nostrum accusantium facere, dolorum exercitationem voluptatum nam dignissimos consequuntur. Ab non similique quis consequuntur adipisci veritatis delectus nesciunt, quasi repellendus ea?</p>
          </div>
          <div className='max-w-md mx-auto'>
            <PickerMachine />
          </div>
        </div>
      </div>
    </div>
  )
}