import classes from './SideBar.module.css'
import React from 'react'
import { useSelector } from 'react-redux';

export default function SideBar(props) {

    const totalPrice = useSelector(state => state.cartReducer.totalPrice)

    return (
        <div className={classes.sideBar} style = {{left: props.showSideBar ? '0px' : '-900px'}}>
            <div className={classes.cartItems}>
                <h2 className = {classes.cartSummary}>Cart Summary</h2>
                {props.children}
            </div>
            <div className={classes.sideBarWrapper}>
                <div className={classes.totalPrice}>
                    <p className={classes.total}>Total: $ {totalPrice.toFixed(2)}</p>
                </div>
            </div>
        </div>
    )
}
