import LanguageSelector from "@components/i18n/parts/languageSelectbox";

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
						Menu
					</label>
					<ul
						tabIndex={0}
						className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
					>
						<li>
							<a href="#">Item 1</a>
						</li>
						<li className="btn-dark">
							<a href="#">Item 1</a>
						</li>
						<li className="btn-dark">
							<a href="#">Item 2</a>
						</li>
					</ul>
				</div>
				<a href="/" className="cursor-pointer pl-2 text-xl normal-case">
					ShiftCode
				</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal flex gap-2 px-1">
					<li className="btn-dark">
						<a href="#">Item 1</a>
					</li>
					<li className="btn-dark">
						<a href="#">Item 2</a>
					</li>
					<li className="btn-dark">
						<a href="#">Item 3</a>
					</li>
				</ul>
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
