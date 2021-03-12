import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./header.scss";
import logo from '../../images/logo.jpg';

export default function Header() {
	return (
		<div>
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="#home">
					<img
						src={logo}
						width="30"
						height="30"
						className="d-inline-block align-top"
						alt=""
					/>
				</Navbar.Brand>
				<Nav className="mr-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#about">About</Nav.Link>
					<Nav.Link href="#tour">Tour</Nav.Link>
				</Nav>
				{/* <Form inline>
					<FormControl type="text" placeholder="Search" className="mr-sm-2" />
					<Button variant="outline-info">Search</Button>
				</Form> */}
			</Navbar>
		</div>
	);
}

