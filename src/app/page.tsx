import Image from "next/image";
import Logo from "../images/color2-white_logo_transparent_background.webp";

export const metadata = {
	title: {
		absolute: "ShiftCode Developments"
	},
	description:
		"Welcome to ShiftCode Developments, we build websites, web apps and native apps with the hottest in latest tech."
};

const Home = () => {
	return (
		<div className="mt-2 flex h-full w-full flex-col">
			<section className="w-full">
				<div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:min-h-[22.5rem] lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
					<div className="m-auto flex flex-col gap-2 place-self-center lg:col-span-7">
						<div className="mb-6 flex justify-center lg:hidden">
							<Image
								id="logo1"
								src={Logo}
								priority={true}
								alt="Shiftcode Developments"
								className="z-0 m-auto h-32 w-auto"
							/>
						</div>
						<h1 className="mb-4 max-w-2xl text-3xl font-extrabold leading-none tracking-tight text-white md:text-5xl xl:text-6xl">
							Welcome to ShiftCode!
						</h1>
						<p className="mb-6 max-w-3xl font-light text-gray-200 md:text-lg lg:mb-8 lg:text-xl">
							From websites, web-apps and one-pagers to native
							mobile & desktop applications.
						</p>
						<div className="flex flex-col gap-2 lg:flex-row">
							<a
								href="#"
								className="inline-flex items-center justify-center rounded-lg border border-accentAlt bg-secondary px-5 py-3 text-center text-base font-medium text-accentAlt focus:ring-4 focus:ring-accentAlt hover:bg-accent"
							>
								Check out projects
								<svg
									className="ml-2 -mr-1 h-5 w-5"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
										clipRule="evenodd"
									></path>
								</svg>
							</a>
							<a
								href="#"
								className="inline-flex items-center justify-center rounded-lg border border-accentAlt bg-secondary px-5 py-3 text-center text-base font-medium text-accentAlt focus:ring-4 focus:ring-accentAlt hover:bg-accent"
							>
								Check our Github
							</a>
						</div>
					</div>
					<div className="relative hidden justify-center lg:col-span-5 lg:flex">
						<Image
							id="logo1_alt"
							src={Logo}
							priority={true}
							alt="Shiftcode Developments"
							className="image-full absolute z-0 m-auto h-full w-auto transition-[filter] duration-500 ease-linear hover:hue-rotate-90"
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
