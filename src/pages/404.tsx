import "~/styles/tailwind.css";

import dynamic from "next/dynamic";
import Head from "next/head";
import Footer from "~/components/layouts/parts/footer";
import Navbar from "~/components/layouts/parts/navbar";
const PageTransition = dynamic(
	() => import("~/components/layouts/parts/pageTransition"),
	{ ssr: false }
);

const NotFound = () => {
	return (
		<html lang="en-US">
			<Head>
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
			</Head>
			<body className="w-full pb-2">
				<PageTransition>
					<main className="min-h-screen">
						<Navbar />
						<div className="min-h-screen">
							<div className="flex h-screen w-full">
								<div className="w-{fraction} m-auto mb-[55vh] flex flex-col">
									<div className="m-auto text-4xl font-extrabold">
										404 | Not Found
									</div>
								</div>
							</div>
						</div>
						<Footer />
					</main>
				</PageTransition>
			</body>
		</html>
	);
};

export default NotFound;
