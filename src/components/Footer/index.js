import React from "react";
import styled from "styled-components";
const Footer = () => {
	return (
		<Wrapper>
			<h5>
				&copy; {new Date().getFullYear()}
				<span>Astrac Clothing</span>
			</h5>
			<h5>All Rights Reserved</h5>
		</Wrapper>
	);
};

const Wrapper = styled.footer`
	height: 5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #222;
	text-align: center;
	span {
		color: #fff;
		padding-left: 0.5rem;
	}
	h5 {
		color: #fff;
		margin: 0.3rem;
		font-weight: 400;
		text-transform: none;
		line-height: 1.25;
	}
	@media (min-width: 776px) {
		flex-direction: row;
	}
`;

export default Footer;
