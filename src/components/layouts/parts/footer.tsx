import { Suspense } from "react";

const Footer = () => {
	const StartYear = 2023;

	return (
		<footer className="footer footer-center rounded-xl bg-base-100 p-10 text-base-content">
			<div className="grid grid-flow-col gap-4">
				<a href="#" className="link-hover link">
					About us
				</a>
				<a href="#" className="link-hover link">
					Projects
				</a>
				<a href="#" className="link-hover link">
					Contact
				</a>
				<a href="#" className="link-hover link">
					Open-Source
				</a>
			</div>
			<div>
				<div className="grid grid-flow-col gap-4">
					<a href="#">
						<span>socialLink 1</span>
					</a>
					<a href="#">
						<span>socialLink 2</span>
					</a>
					<a href="#">
						<span>socialLink 3</span>
					</a>
				</div>
			</div>
			<div>
				<Suspense fallback={StartYear}>
					<p>
						Copyright &copy;{" "}
						{new Date().getFullYear() == StartYear
							? StartYear
							: StartYear.toString() +
							  " - " +
							  new Date().getFullYear().toString()}
						| All right reserved by&nbsp;
						<a href="/">ShiftCode Developments</a>
					</p>
				</Suspense>
			</div>
		</footer>
	);
};

export default Footer;
