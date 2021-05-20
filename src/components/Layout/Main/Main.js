import React from 'react';
import classes from './Main.module.css'; 
import Container from '../Container/Container';

export default function Main(props) {
    return (
        <>
            
            <div className={classes.mainContent}>
                <Container>                
                    {props.children}
                </Container>
            </div>
        </>

    )
}
