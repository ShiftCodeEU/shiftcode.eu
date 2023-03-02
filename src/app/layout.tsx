import "~/styles/tailwind.css";

import dynamic from "next/dynamic";
import Footer from "~/components/layouts/parts/footer";
import Navbar from "~/components/layouts/parts/navbar";
const PageTransition = dynamic(
	() => import("~/components/layouts/parts/pageTransition"),
	{ ssr: false }
);

const Rootlayout = ({
	children // will be a page or nested layout
}: {
	children: React.ReactNode;
}) => {
	return (
		<html lang="en-US">
			<head>
				<meta charSet="UTF-8" />
				<meta name="description" content="No desc yet, still in dev" />

				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>

				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/favicons/apple-touch-icon.png"
				/>

				<link
					rel="icon"
					type="image/png"
					sizes="194x194"
					href="/favicons/favicon-194x194.png"
				/>

				<link
					rel="icon"
					type="image/png"
					sizes="192x192"
					href="/favicons/android-chrome-192x192.png"
				/>

				<link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" />

				<link rel="shortcut icon" href="/favicons/favicon.ico" />

				<meta name="msapplication-TileColor" content="#000000" />
			</head>
			<body className="w-full pb-2">
				<PageTransition>
					<main className="min-h-screen">
						<Navbar />
						<div className="min-h-screen">{children}</div>
						<Footer />
					</main>
				</PageTransition>
			</body>
		</html>
	);
};

export default Rootlayout;
