import React from 'react'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import styled from 'styled-components'
//redux
import {connect} from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart.actions'

const CartIcon = ({toggleCartHidden}) => {
    return (
			<Container onClick={toggleCartHidden}>
				<ShoppingIcon className="shopping-icon" />
				<span className="item-count">0</span>
			</Container>
		);
}

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon)


const Container = styled.div`
	width: 45px;
	height: 45px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	color: #fff;

	.shopping-icon {
		width: 24px;
		height: 24px;
	}

	.item-count {
		position: absolute;
		font-size: 10px;
		font-weight: bold;
		bottom: 12px;
	}
`;