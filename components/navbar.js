import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import  Link  from "next/link";

function navbar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
			<nav className=" shadow-sm fixed w-full z-10">
				<div className="w-full">
					<div className="flex items-center h-20 w-full">
						<div className="flex items-center  mx-20  justify-between w-full">
							<div className="flex justify-center items-center flex-shrink-0 ">
								<h1 className=" font-bold text-xl cursor-pointer">
									Game<span className="text-blue-500">Thuk</span>
								</h1>
							</div>
							<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
								<div class="flex items-center justify-center">
									<div class="flex border-2 rounded">
										<input type="text" class="px-4 py-2 w-80" placeholder="ค้นหา..."></input>
										<button class="flex items-center justify-center px-4 border-l">
											<svg class="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24">
												<path
													d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
											</svg>
										</button>
									</div>
								</div>
							</div>
							

							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-4">
									<Link href="/">
										<a>
											<div className="cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:font-black"> 
												Home
											</div>
										</a>
									</Link>

										<a>
											<div className="text-black font-semibold px-3 py-2 text-md hover:font-black"> 
												BestNew007
											</div>
										</a>


									<Link href="/login">
										<a>
											<div className="cursor-pointer bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-black"> 
												Login
											</div>
										</a>
									</Link>
								</div>
							</div>
						</div>
						<div className="mr-10 flex md:hidden ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>
			</nav>
	);
}

export default navbar;
