import React from 'react';
import './hero.scss'
import imageBG from '../../assets/hero-img1.jpg'
import RoundButton from '../custom-buttons/round-btn';


const Hero = () => {
    return (
			<div className="hero">
				<div className="image" style={{ backgroundImage: `url(${imageBG})` }}>
					<div className="hero-content">
						<h1 className="hero-text">Fall Collection is here.</h1>
						<h1 className="hero-text-mb">Fall is here.</h1>
						<div className="btn-wrapper">
							<RoundButton isBlack goTo="/shop/fall">
								Shop Fall
							</RoundButton>

							<RoundButton goTo="/shop">Shop all&nbsp;</RoundButton>
						</div>
					</div>
				</div>
			</div>
		);
}



export default Hero