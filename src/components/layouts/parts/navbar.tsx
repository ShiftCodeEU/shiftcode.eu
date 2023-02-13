import LanguageSelector from "@components/i18n/parts/languageSelectbox";

const Navbar = (props: { currentLang: string; languages: any[] }) => {
	return (
		<div className="navbar bg-glass-black sticky top-2 z-50">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-dark lg:hidden">
						Menu
					</label>
					<ul
						tabIndex={0}
						className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<a>Item 1</a>
						</li>
						<li tabIndex={0}>
							<a className="justify-between">
								Parent
								<svg
									className="fill-current"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
								>
									<path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
								</svg>
							</a>
							<ul className="p-2">
								<li>
									<a>Submenu 1</a>
								</li>
								<li>
									<a>Submenu 2</a>
								</li>
							</ul>
						</li>
						<li>
							<a>Item 3</a>
						</li>
					</ul>
				</div>
				<a href="/" className="pl-2 normal-case text-xl cursor-pointer">
					ShiftCode
				</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1 flex gap-2">
					<li className="btn-dark">
						<a>Item 1</a>
					</li>
					<li tabIndex={0} className="btn-dark">
						<a className="btn-dark">Parent</a>
						<ul className="p-2 bg-base-100 mt-3">
							<li className="btn-dark ">
								<a>Submenu 1</a>
							</li>
							<li className="btn-dark">
								<a>Submenu 2</a>
							</li>
						</ul>
					</li>
					<li className="btn-dark">
						<a>Item 3</a>
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
