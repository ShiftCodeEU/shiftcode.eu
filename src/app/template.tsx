import Footer from "~/components/layouts/parts/footer";
import Navbar from "~/components/layouts/parts/navbar";
import PageTransition from "~/components/layouts/parts/pageTransition";

const RootTemplate = ({ children }: { children: React.ReactNode }) => {
	return (
		<PageTransition>
			<Navbar />
			<main className="min-h-screen">{children}</main>
			<Footer />
		</PageTransition>
	);
};
export default RootTemplate;
