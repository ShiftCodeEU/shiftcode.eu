const Footer = () => {
	const StartYear = 2023;
	const CurrentYear = new Date().getFullYear();
	const CP =
		CurrentYear == StartYear ? StartYear : `${StartYear} - ${CurrentYear}`;

	return (
		<footer className="footer footer-center p-10 bg-base-100 text-base-content rounded-xl mb-2">
			<div className="grid grid-flow-col gap-4">
				<a className="link link-hover">About us</a>
				<a className="link link-hover">Projects</a>
				<a className="link link-hover">Contact</a>
				<a className="link link-hover">Open-Source</a>
			</div>
			<div>
				<div className="grid grid-flow-col gap-4">
					<a>
						<a>socialLink 1</a>
					</a>
					<a>
						<a>socialLink 2</a>
					</a>
					<a>socialLink 3</a>
				</div>
			</div>
			<div>
				<p>
					Copyright © {CP} | All right reserved by ShiftCode
					Developments
				</p>
			</div>
		</footer>
	);
};

export default Footer;
