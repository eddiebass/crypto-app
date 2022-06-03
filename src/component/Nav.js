import React from "react";

const Nav = () => {
	return (
		<nav>
			<p className="logo">
				crypto<span className="light">Dailies</span>
			</p>
			<ul className="nav-link link">
				<li>Dashboard</li>
				<li>About</li>
			</ul>
		</nav>
	);
};

export default Nav;
