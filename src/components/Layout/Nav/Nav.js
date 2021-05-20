import React from 'react'
import classes from './Nav.module.css';
import Container from '../Container/Container';

export default function Nav() {
    return (
        <nav className={classes.nav}>
            <Container>
                <div className="logo">
                    <h2>Steps<span className={classes.logoDot}></span></h2>
                </div>
                <div className="cart-summary">
                    <i className="fa fa-cart-plus" aria-hidden="true"></i>
                </div>
            </Container>
        </nav>
    )
}
