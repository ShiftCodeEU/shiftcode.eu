import { availableShowcaseMeta, availableShowcaseSlugs } from "./pageData";

export const getShowcaseMetaData = (slugString: String) => {
	const getMData = availableShowcaseMeta.find((item) => {
		if (item.slug == slugString) {
			return item;
		}
	});

	if (getMData == undefined) {
		return {
			slug: "/",
			title: "Showcase",
			description:
				"These projects are just some of the interesting ones we've worked on. Feel free to have a look around!",
			images: []
		};
	} else {
		return getMData;
	}
};

export const getPageImageByName = (
	pageImages: {
		imageName: string;
		path: string;
		blurHash: string;
	}[],
	imageName: string
) => {
	const pageImage = pageImages.find((item: (typeof pageImages)[0]) => {
		if (item.imageName == imageName) {
			return true;
		}
	});

	if (pageImage !== undefined) {
		return pageImage;
	} else {
		return {
			imageName: "undefined",
			path: "",
			blurHash: ""
		};
	}
};

export const isShowcaseSlugValid = (slugString: string) => {
	return availableShowcaseSlugs.find((item) => {
		if (item == slugString) {
			return true;
		}
	});
};
