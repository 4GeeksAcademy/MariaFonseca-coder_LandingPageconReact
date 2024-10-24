import React from "react";

const NavbarBrand = () => (
	<a className="navbar-brand" href="#">Start Bootstrap</a>
);

const NavbarToggler = () => (
	<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		<span className="navbar-toggler-icon"></span>
	</button>
);

const NavItem = ({ href, children, active, disabled }) => (
	<li className="nav-item">
		<a className={`nav-link ${active ? 'active' : ''} ${disabled ? 'disabled' : ''}`} href={href}>{children}</a>
	</li>
);

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-dark navbar-dark">
			<div className="container-fluid">
				<NavbarBrand />
				<NavbarToggler />
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
						<NavItem href="#" active={true}>Home</NavItem>
						<NavItem href="#">About</NavItem>
						<NavItem href="#">Services</NavItem>
						<NavItem href="#">Contact</NavItem>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
