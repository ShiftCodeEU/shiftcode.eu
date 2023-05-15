import {
	getPageImageByName,
	getShowcaseMetaData,
	isShowcaseSlugValid
} from "@/data/dataHelpers";
import { availableShowcaseMeta } from "@/data/pageData";
import dynamic from "next/dynamic";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";

const Loading = dynamic(() => import("./loading"), { ssr: false });

export const revalidate = 2500;

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
	return {
		title: getShowcaseMetaData(params.slug)?.title,
		description:
			"These projects are just some of the interesting ones we've worked on. Feel free to have a look around!"
	};
};

export const generateStaticParams = () => {
	const showcases = availableShowcaseMeta;

	return showcases.map((showcase) => ({
		slug: showcase.slug
	}));
};

const Showcase = ({ params }: { params: { slug: string } }) => {
	const slug = params.slug;
	const pageData = getShowcaseMetaData(slug);

	if (!slug || isShowcaseSlugValid(slug) == undefined) {
		notFound();
	}

	const desktopImage = getPageImageByName(
		pageData.images,
		"showcase-desktop"
	)?.path;

	const mobileImage = getPageImageByName(
		pageData.images,
		"showcase-mobile"
	)?.path;

	return (
		<Suspense fallback={<Loading />}>
			<div className="hero py-14 lg:py-32">
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-md">
						<h1 className="mb-5 text-2xl font-bold lg:text-5xl">
							{pageData.title}
						</h1>
						<p className="mb-5 lg:text-lg">
							On this page you will find more deets about the
							{` ${pageData.title.replace(" Showcase", "")} `}
							project.
						</p>
					</div>
				</div>
			</div>
			{pageData.images && pageData.images.length > 0 && (
				<div id="showcase-mock" className="flex flex-col pb-16">
					<h2 className="mb-5 text-center font-bold lg:text-2xl">
						{`What does the ${pageData.title.replace(
							" Showcase",
							""
						)} website look like?`}
					</h2>
					<div className="bg-base-400 bg-glass-black mockup-window mx-auto hidden max-w-[600px] border border-accent lg:inline-block">
						<div className="bg-glass-black relative flex h-auto justify-center">
							<Image
								src={desktopImage}
								height={600}
								width={1200}
								alt="showcase on desktop"
								className="h-auto w-full border-t border-accent"
								blurDataURL="https://placehold.co/1200x600/webp?text=Loading..."
								placeholder="blur"
							/>
						</div>
					</div>
					<div className="mockup-phone mx-auto inline-block max-w-[280px] border-accent lg:hidden">
						<div className="camera"></div>
						<div className="display flex max-w-[270px]">
							{/* <div
								className="phone-1 artboard  artboard-demo mx-auto"
								style={{ width: "268px" }}
							>
								Hi.
							</div> */}
							<Image
								src={mobileImage}
								height={1200}
								width={600}
								style={{ width: "268px" }}
								alt="showcase on desktop"
								className="phone-1 artboard  artboard-demo mx-auto mt-6"
								blurDataURL="https://placehold.co/1200x600/webp?text=Loading..."
								placeholder="blur"
							/>
						</div>
					</div>
				</div>
			)}
		</Suspense>
	);
};

export default Showcase;
