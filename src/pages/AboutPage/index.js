import React from 'react'
import styled from 'styled-components'

import aboutImg from '../../assets/about-bg.jpg'

const AboutPage = () => {
  return (
		<main className="page-100">
			<Wrapper className="page section section-center">
				<img src={aboutImg} alt="nice table" />
				<article>
					<div className="title">
						<h2>Our Story</h2>
						<div className="underline"></div>
						<p>
							The finest quality clothes with a commitment to the environment
							and our customer. We pride ourselves on our world renowed
							fabric and quality of service.
							<br />
							<br />
							Our story began in our own home over 70 years ago in our basement where we hand stitched every shirt, pants, hat.
							As we have expanded, we continue to believe that it is vital to bring this quality to our customers.
							<br />
							<br />
							Let us help you pick and build your style so you can comfortably and stylishly conquer your day!
						</p>
					</div>
				</article>
			</Wrapper>
		</main>
	);
}

const Wrapper = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 4rem;
	margin-left: 2rem;

	img {
		width: 90%;
		display: block;
		border-radius: var(--radius);
		height: 500px;
		object-fit: cover;
	}
	p {
		line-height: 2;
		max-width: 45em;
		margin-top: 2rem;
		color: var(--clr-grey-5);
		text-align: left;
	}
	.title {
		text-align: center;
		text-align: left;
	}
	.underline {
		margin-left: 0;
	}
	@media (max-width: 992px) {
		grid-template-columns: 1fr;

		.title {
			text-align: center;
			margin-right: 2rem;
		}
	}
`;
export default AboutPage