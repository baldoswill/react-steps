import React from 'react';
import {useSelector} from 'react-redux';
import classes from './Nav.module.css';
import Container from '../Container/Container';
import cartReducer from '../../../redux/reducers/cart-reducer';
 

export default function Nav() {

    const totalQuantity =  useSelector(state => state.cartReducer.totalQuantity);


    return (
        <nav className={classes.nav}>
            <Container>
                <div className="logo">
                    <h2>Steps<span className={classes.logoDot}></span></h2>
                </div>
                <div className={classes.cartSummary}>
                    <i className = {classes.totalQuantityCounter}>{totalQuantity}</i>
                    <i className="fa fa-cart-plus" aria-hidden="true"></i>
                </div>
            </Container>
        </nav>
    )
}
