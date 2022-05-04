/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { BsBookmark, BsBookmarkCheckFill } from "react-icons/bs";
import { MdOutlineHomeWork } from "react-icons/md";
import { FaBusinessTime, FaPeopleArrows } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { HiOutlineEmojiHappy } from "react-icons/hi";

import Profile from "../assets/profile/lokecarlsson.png";
import Profile2 from "../assets/profile/mrcrmn.png";

import { HeaderLottie } from "../components/HeaderLottie";
import { EducationSystem } from "../components/EducationSystem";
import { PickerMachine } from "../components/NextFeature";
import { AuthorSourceBook } from "../components/AuthorSourceBook";

const authorBooks = [
  {
    profile: Profile,
    badge: 5,
    name: "Hartanto Budi",
    country: "Jakarta, Indonesia",
    position: "Books writer with 15 years experience.",
  },
  {
    profile: Profile2,
    badge: 7,
    name: "Mark George",
    country: "LA, USA",
    position: "Owner Store.books dot com.",
  },
  {
    profile: Profile2,
    badge: 7,
    name: "Thomas Jay",
    country: "London, United Kingdom",
    position: "Owner Uk daily dot com.",
  },
];

export default function Home() {
  const router = useRouter();

  return (
    <div className="bg-white relative w-full">
      <div className="relative block overflow-x-hidden">
        <div className="relative z-1 mt-12 py-10 md:py-20 px-6 sm:py-6 md:pb-20 mx-auto md:w-11/12 lg:max-w-7xl">
          <div className="text-gray-500 lg:flex lg:flex-row w-full relative items-center">
            <div className="md:flex-1 text-left items-center md:px-8 lg:px-0">
              <h6 className="uppercase font-extrabold text-sm">
                Lorem, ipsum dolor sit ametit.
              </h6>
              <h1 className="text-4xl md:text-6xl font-semibold my-8 tracking-wide text-gray-800">
                <span className="inline-block">
                  Cari{" "}
                  <span className="text-blue-500 font-extrabold">Bakat</span>{" "}
                  dan{" "}
                  <span className="text-blue-500 font-extrabold">
                    Peluangmu
                  </span>
                </span>
                <span className="inline-block">dengan Giat Membaca.</span>
              </h1>
              <p className="max-w-md">
                Cari Bakat dan Peluangmu dengan Giat Membaca.
              </p>
              <button className="text-yellow-700 mt-8 font-bold">
                Mulai mencari Buku
              </button>
            </div>
            <div className="md:flex-1 justify-center w-full flex-none relative">
              <HeaderLottie />
            </div>
          </div>
        </div>
      </div>
      <div id="about-us" className="relative block overflow-x-hidden">
        <div className="relative py-20 px-6 md:pb-20 mx-auto md:w-11/12 lg:max-w-7xl">
          <div className="max-w-md mx-auto text-lg text-gray-500">
            <p className="italic tracking-wider text-center font-extralight">
              <span>
                "Ketika saya punya tekad untuk sukses, tetapi bungung bagaimana
                cara memulai. Juga bingung dan merasahilang akan tujuan hidup,
                mau jadi apa.
              </span>

              <span className="inline-block">
                Itulah mengapa komunitas SejutaCita dibuat, agar teman teman
                bisa mendapatkan informas dan kesempatan membangun diri, dan
                mendaatkan pekerjaan yang baik pula nanti."
              </span>
            </p>
            <div className="text-center mt-8 text-gray-600">
              <h3 className="font-bold">Andhika Sudarman</h3>
              <p className="font-light text-gray-500 text-sm">
                Founder & CEO of SejutaCita Indonesia
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative block overflow-x-auto">
        <div className="relative py-10 md:py-20 px-6 md:pb-20 mx-auto md:w-11/12 lg:max-w-7xl">
          <div className="flex w-max gap-8 md:gap-10 lg:gap-16">
            {authorBooks.map((author) => {
              return (
                <div key={author.name}>
                  <AuthorSourceBook {...author} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="relative block overflow-x-hidden">
        <div className="relative py-20 px-6 md:pb-20 mx-auto md:w-11/12 lg:max-w-7xl">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-3/5 relative -left-1/4 md:-left-1/4 lg:-left-0 top-0 z-6 md:mb-4 mb-28 lg:mb-4">
              <div className="w-full lg:w-3/4">
                <EducationSystem />
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-8">Education System</h1>
              <p className="my-4 tracking-wide text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                omnis distinctio pariatur quo voluptate voluptatum. Doloremque,
                numquam aliquam, ut ea illo, fugit vitae ex labore voluptas
                blanditiis consequatur mollitia accusantium.
              </p>
              <p className="my-4 tracking-wide text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid quisquam, libero quasi tempore pariatur adipisci
                inventore deserunt ut vitae perspiciatis mollitia veniam vero
                maxime id deleniti officia magnam fugiat iusto!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative block overflow-x-hidden">
        <div className="relative py-20 px-6 md:pb-20 mx-auto md:w-11/12 lg:max-w-7xl">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 md:ml-12">
              <h2 className="text-4xl font-bold text-black">Categories</h2>
            </div>
            {/* Carrer Bussinness, Productivity Time Management, Society Politics, Invesment Finance */}
            <div className="flex-1 my-8 md:my-0">
              <div>
                <button
                  onClick={() =>
                    router.push(
                      `/search?categoryId=1&page=1&size=5`,
                      undefined,
                      { shallow: true }
                    )
                  }
                  className="flex my-2 justify-between items-center text-white py-4 px-6 rounded-md w-full md:max-w-md shadow-lg hover:bg-blue-800 bg-blue-900 font-bold"
                >
                  <p className="tracking-wide">Happiness Minddfulness</p>
                  <div className="p-2 border rounded">
                    <HiOutlineEmojiHappy size={20} />
                  </div>
                </button>
                <button onClick={() =>
                    router.push(
                      `/search?categoryId=11&page=1&size=5`,
                      undefined,
                      { shallow: true }
                    )
                  } className="flex my-2 justify-between items-center text-white py-4 px-6 rounded-md w-full md:max-w-md shadow-lg hover:bg-red-800 bg-red-700 font-bold">
                  <p className="tracking-wide">Carrer Bussinness</p>
                  <div className="p-2 border rounded">
                    <MdOutlineHomeWork size={20} />
                  </div>
                </button>
                <button onClick={() =>
                    router.push(
                      `/search?categoryId=12&page=1&size=5`,
                      undefined,
                      { shallow: true }
                    )
                  } className="flex my-2 justify-between items-center text-white py-4 px-6 rounded-md w-full md:max-w-md shadow-lg hover:bg-pink-800  bg-pink-700 font-bold">
                  <p className="tracking-wide text-left">
                    Productivity Time Management
                  </p>
                  <div className="p-2 border rounded">
                    <FaBusinessTime size={20} />
                  </div>
                </button>
                <button onClick={() =>
                    router.push(
                      `/search?categoryId=19&page=1&size=5`,
                      undefined,
                      { shallow: true }
                    )
                  } className="flex my-2 justify-between items-center text-white py-4 px-6 rounded-md w-full md:max-w-md shadow-lg hover:bg-yellow-700 bg-yellow-800 font-bold">
                  <p className="tracking-wide">Society Politics</p>
                  <div className="p-2 border rounded">
                    <FaPeopleArrows size={20} />
                  </div>
                </button>
                <button onClick={() =>
                    router.push(
                      `/search?categoryId=21&page=1&size=5`,
                      undefined,
                      { shallow: true }
                    )
                  } className="flex my-2 justify-between items-center text-white py-4 px-6 rounded-md w-full md:max-w-md shadow-lg hover:bg-fuchsia-800 bg-fuchsia-700 font-bold">
                  <p className="tracking-wide">Invesment Finance</p>
                  <div className="p-2 border rounded">
                    <GoGraph size={20} />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative block overflow-x-hidden">
        <div className="py-20 px-6">
          <div className="text-center mb-8">
            <h1 className="uppercase font-semibold text-base">Next Feature</h1>
            <p className="max-w-md mx-auto my-8 tracking-wide text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
              nostrum accusantium facere, dolorum exercitationem voluptatum nam
              dignissimos consequuntur. Ab non similique quis consequuntur
              adipisci veritatis delectus nesciunt, quasi repellendus ea?
            </p>
          </div>
          <div className="max-w-md mx-auto my-16">
            <PickerMachine />
          </div>
        </div>
      </div>
    </div>
  );
}
