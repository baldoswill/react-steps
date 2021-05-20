import React from 'react';
import classes from './Main.module.css';
import Nav from '../Nav/Nav';
import Container from '../Container/Container';

export default function Main(props) {
    return (
        <>
            <Nav />
            <div className={classes.mainContent}>
                <Container>                
                    {props.children}
                </Container>
            </div>
        </>

    )
}
