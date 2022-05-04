import { Fragment } from "react";

import Link from "next/link";
import { Popover, Transition, Disclosure } from "@headlessui/react";

import { BsBookmarkCheckFill } from "react-icons/bs";
import { BiBookReader, BiMenuAltRight, BiMenu } from "react-icons/bi";

export function Navbar() {
  return (
    <div className="relative bg-white mb-4 z-10 w-full border-b border-gray-100">
      <div className="relative py-4 px-6 sm:px-6 lg:px-8 bg-white">
        <div className="relative flex max-w-6xl mx-auto flex-grow-0 items-center justify-between sm:h-10">
          <Link href="/">
            <a className="font-extrabold text-blue-500 text-2xl">
              ReB<span className="text-gray-600">oo</span>ks.
            </a>
          </Link>
          <div className="lg:hidden">
            <Popover className="relative w-full">
              {({ open }) => (
                <>
                  <Popover.Button
                    aria-label="Open Navbar"
                    className={`
                      ${
                        open ? "" : "text-opacity-90"
                      } bg-transparent py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                  >
                    {open ? <BiMenu size="40" /> : <BiMenuAltRight size="40" />}
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 mt-3 transform -translate-x-64 sm:px-0 w-72">
                      <div
                        className={`overflow-hidden rounded-2xl shadow-lg ring-1ring-opacity-5`}
                      >
                        <div className="relative grid gap-8 bg-white rounded p-7 lg:grid-cols-2">
                          <Link href="/search">
                            <a
                              className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-300 
                                text-gray-700 focus:outline-none focus-visible:ring "
                            >
                              <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-yellow-700 text-white bg-ecstasy bg-opacity-80 sm:h-12 sm:w-12 rounded-lg">
                                <BiBookReader size="20" />
                              </div>
                              <div className="ml-4">
                                <p className="text-sm font-medium m-0">Books</p>
                              </div>
                            </a>
                          </Link>
                          <Link href="/saved-book">
                            <a
                              className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-300 
                                text-gray-700 focus:outline-none focus-visible:ring "
                            >
                              <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-green-600 text-white bg-ecstasy bg-opacity-80 sm:h-12 sm:w-12 rounded-lg">
                                <BsBookmarkCheckFill size="20" />
                              </div>
                              <div className="ml-4">
                                <p className="text-sm font-medium m-0">Saved Books</p>
                              </div>
                            </a>
                          </Link>
                          <Link href="/saved-book">
                            <a
                              className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-yellow-300 
                                text-yellow-700 focus:outline-none focus-visible:ring "
                            >
                              <p className="text-sm font-medium m-0">About Us</p>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </div>
          <div className="hidden lg:block">
            <div className="flex items-center">
              <Link href="/#about-us">
                <a className="flex items-center px-4 py-2 mx-1 hover:text-yellow-600 transition duration-150">
                  <span className="mr-2 font-semibold">About us</span>
                </a>
              </Link>
              <Link href="/search">
                <a className="flex items-center px-4 py-2 transition duration-150 mx-1 rounded hover:shadow-lg shadow-md">
                  <span className="mr-2 text-gray-600 font-semibold">
                    Books{" "}
                  </span>
                  <div className="p-2 bg-yellow-600 rounded text-white">
                    <BiBookReader size={15} />
                  </div>
                </a>
              </Link>
              <Link href="/saved-book">
                <a className="flex items-center px-4 py-2 transition duration-150 mx-1 rounded hover:shadow-md">
                  <span className="mr-2 text-gray-600 font-semibold">
                    Saved{" "}
                  </span>
                  <div className="p-2 bg-green-600 rounded text-white">
                    <BsBookmarkCheckFill size={10} />
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
