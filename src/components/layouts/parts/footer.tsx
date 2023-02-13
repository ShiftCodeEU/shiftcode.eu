const Footer = () => {
	const StartYear = 2023;
	const CurrentYear = new Date().getFullYear();
	const CP =
		CurrentYear == StartYear ? StartYear : `${StartYear} - ${CurrentYear}`;

	return (
		<footer className="footer footer-center mb-2 rounded-xl bg-base-100 p-10 text-base-content">
			<div className="grid grid-flow-col gap-4">
				<a className="link-hover link">About us</a>
				<a className="link-hover link">Projects</a>
				<a className="link-hover link">Contact</a>
				<a className="link-hover link">Open-Source</a>
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
