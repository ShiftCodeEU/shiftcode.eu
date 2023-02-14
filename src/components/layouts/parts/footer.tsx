import Copyright from "./copyright";

const Footer = () => {
	return (
		<footer className="footer footer-center mb-2 rounded-xl bg-base-100 p-10 text-base-content">
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
					Copyright © <Copyright /> | All right reserved by ShiftCode
					Developments
				</p>
			</div>
		</footer>
	);
};

export default Footer;
