"use client";

import Image from "next/image";
import logo from "~/images/small-icon.webp";
import { NavigationMenuGeneric } from "../generics/navMenu";

const Navbar = () => {
	return (
		<div className="bg-glass-black navbar sticky top-2 z-50">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn-dark btn lg:hidden">
						<span className="px-2">
							<svg
								stroke="currentColor"
								fill="none"
								strokeWidth="0"
								viewBox="0 0 15 15"
								height="1.5rem"
								width="1.5rem"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
									fill="currentColor"
								></path>
							</svg>
						</span>
					</label>
					<div
						tabIndex={0}
						className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
					>
						<a className="btn-dark" href="#">
							Item 1
						</a>
						<a className="btn-dark" href="#">
							Item 1
						</a>
						<a className="btn-dark" href="#">
							Item 2
						</a>
					</div>
				</div>
				<a href="/" className="hidden lg:flex lg:pl-2">
					<Image
						src={logo}
						placeholder="blur"
						alt="ShiftCode"
						height={64}
						width={84}
					/>
				</a>
			</div>
			<div className="navbar-center flex">
				{/* <div className="menu menu-horizontal hidden gap-2 lg:flex">
					<a className="btn-dark" href="#">
						Item 1
					</a>
					<a className="btn-dark" href="#">
						Item 1
					</a>
					<a className="btn-dark" href="#">
						Item 2
					</a>
				</div> */}
				<div className="hidden lg:flex">
					<NavigationMenuGeneric />
				</div>
				<a
					href="/"
					className="mx-auto flex bg-clip-text text-2xl text-secondary antialiased lg:hidden lg:pl-2"
				>
					SHIFTCODE
				</a>
			</div>
			<div className="navbar-end"></div>
		</div>
	);
};
export default Navbar;
