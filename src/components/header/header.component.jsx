import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from  '../../assets/crown.svg';
import './header.style.scss';
import {auth} from '../../firebase/firebase.util';
import CartIcon from '../cart-icon/cart-icon.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CartDropdown from '../cart-dropdown/car-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selector';
import {selectCurrentUser} from '../../redux/user/user.selector';


const Header =({currentUser,hidden})=>(
    <div className='header'>
        <Link className='logo-container' to="/">
          <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to ='/shop'>SHOP</Link>
            <Link className='option' to ='/'>CONTACT</Link>
            {
                currentUser ?
                    <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
            }
           
        <CartIcon />

        </div>
        {
        hidden ? null :
        <CartDropdown />
        }
    </div>
)
const mapStateToProp = (state) =>createStructuredSelector({
   currentUser: selectCurrentUser,
   hidden: selectCartHidden
})

export default connect(mapStateToProp)(Header);