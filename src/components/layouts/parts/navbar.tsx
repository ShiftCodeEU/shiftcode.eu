import LanguageSelector from "@components/i18n/parts/languageSelectbox";

import logo from "@src/images/small-base_icon_transparent_background.webp";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = (props: { currentLang: string; languages: any }) => {
	// const hrefHandler = (pathName: string) => {
	// 	if (typeof window !== "undefined") {
	// 		const isDutch = pathName.startsWith("/nl-NL");
	// 	}
	// };

	return (
		<div className="bg-glass-black navbar sticky top-2 z-50">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn-dark btn lg:hidden">
						<span className="px-2">
							<RxHamburgerMenu />
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
					<img
						src={logo}
						alt="ShiftCode"
						className="h-16"
						height="64px"
						width="76px"
					/>
				</a>
			</div>
			<div className="navbar-center flex">
				<div className="menu menu-horizontal hidden gap-2 lg:flex">
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
				<a href="/" className="mx-auto flex lg:hidden lg:pl-2">
					<img
						src={logo}
						alt="ShiftCode"
						className="h-12"
						height="48px"
						width="60px"
					/>
				</a>
			</div>
			<div className="navbar-end">
				<LanguageSelector
					showFlag={true}
					langsAvailable={props.languages}
					currentLang={props.currentLang}
				/>
			</div>
		</div>
	);
};
export default Navbar;
