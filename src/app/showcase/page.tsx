import { availableShowcaseMeta } from "@/data/pageData";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 600000;

export const generateMetadata = () => {
	return {
		title: "Projects",
		description:
			"These projects are just some of the interesting ones we've worked on. Feel free to have a look around!"
	};
};

const ShowcaseRoot = () => {
	const pageDataAll = availableShowcaseMeta;

	return (
		<>
			<div className="hero pt-14 lg:pt-32">
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-md">
						<h1 className="mb-5 text-2xl font-bold lg:text-5xl">
							Showcase
						</h1>
						<p className="mb-5 lg:text-lg">
							On this page you will find more deets about the
							showcase projects.
						</p>
					</div>
				</div>
			</div>
			<div className="flex flex-wrap items-center justify-center gap-3">
				{pageDataAll.map((pageData, idx) => {
					const desktopImage = pageData.images.find(
						(item) => item.imageName == "showcase-desktop"
					);
					const mobileImage = pageData.images.find(
						(item) => item.imageName == "showcase-mobile"
					);

					if (desktopImage === undefined || mobileImage === undefined)
						return;

					return (
						<Link
							key={idx + 1}
							id="showcase-mock"
							className="mb-16 flex flex-col p-4 hover:bg-[rgba(0,0,0,0.25)] hover:rounded-xl"
							href={`/showcase/${String(pageData.title)
								.toLowerCase()
								.replace(" showcase", "")}`}
						>
							<h2 className="mb-5 text-center font-bold lg:text-2xl">
								{`What does the ${pageData.title.replace(
									" Showcase",
									""
								)} website look like?`}
							</h2>
							<div className="bg-base-400 bg-glass-black mockup-window mx-auto hidden max-w-[600px] border border-accent lg:inline-block">
								<div className="bg-glass-black relative flex h-auto justify-center">
									<Image
										src={desktopImage.path}
										height={600}
										width={1200}
										alt="showcase on desktop"
										className="h-auto w-full border-t border-accent"
										priority
									/>
								</div>
							</div>
							<div className="mockup-phone mx-auto inline-block max-w-[280px] border-accent lg:hidden">
								<div className="camera"></div>
								<div className="display flex max-w-[270px]">
									<Image
										src={mobileImage.path}
										height={1200}
										width={600}
										style={{ width: "268px" }}
										alt="showcase on desktop"
										className="phone-1 artboard  artboard-demo mx-auto mt-6"
										priority
									/>
								</div>
							</div>
						</Link>
					);
				})}
			</div>
		</>
	);
};
export default ShowcaseRoot;
