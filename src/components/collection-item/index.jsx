import React from 'react';
import RectangularButton from '../custom-buttons/rectangular-btn';
import './collection-item.scss'

//redux
import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.actions';


const CollectionItem = ({item, addItemToCart}) => {
    const {name, price, imageUrl} = item
    return (
        <div className="collection-item">
            <div
                className='image'
                style={{backgroundImage: `url(${imageUrl})`}}
            />
            <div className="collection-footer">
                <span className='name'> {name}</span>
                <span className='price'> ${price}</span>
            </div>
        <RectangularButton inverted onClick={()=>{addItemToCart(item)}} ><span className="button-text">Add to cart</span></RectangularButton>
        </div> 

)}

const mapDispatchToProps = (dispatch) =>({
    addItemToCart: item => dispatch(addItemToCart(item))
})
export default connect(null, mapDispatchToProps)(CollectionItem)
