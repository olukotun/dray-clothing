import React from 'react'
import './checkout.style.scss'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selector'
import cartItem from '../../components/cart-item-component/cart-item-component'
import CheckoutItem from '../../components/checkout-item/checkout.component'


const Checkoutpage =({CartItems, total})=>(
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>

        </div>
        {
            CartItems.map(cartItem=>(
               <CheckoutItem key={cartItem.id}cartItem={cartItem}/>
            ))
        }
        <div className='total'>
    <span>TOTAL: ${total}</span>
        </div>
        
     </div>
)
const mapStateToProps=createStructuredSelector({
  CartItems: selectCartItems,
  total: selectCartTotal
})
export default connect(mapStateToProps)(Checkoutpage)