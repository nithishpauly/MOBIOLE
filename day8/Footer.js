import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./Footerstyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "orange",
				textAlign: "center",
				marginTop: "-50px" }}>
		Mobiole for your quick recharge 
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Mobile Recharge</FooterLink>
			<FooterLink href="#">Broadband</FooterLink>
			<FooterLink href="#">DTH</FooterLink>
			<FooterLink href="#">FastTag</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">9994958957</FooterLink>
			<FooterLink href="#">xy@gmail.com</FooterLink>
			<FooterLink href="#"></FooterLink>
			<FooterLink href="#"></FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
