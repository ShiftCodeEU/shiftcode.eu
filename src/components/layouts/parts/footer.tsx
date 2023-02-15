const Footer = () => {
	const StartYear = 2023;
	const CurrentYear = new Date().getFullYear();
	const CP =
		CurrentYear == StartYear ? StartYear : `${StartYear} - ${CurrentYear}`;

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
				<p>
					Copyright &copy; {CP} | All right reserved by&nbsp;
					<a href="/">ShiftCode Developments</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
