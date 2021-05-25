import React from 'react';
import classes from './Item.module.css';


export default function Item(props) {
 
    return (
        <div className={classes.productItem}>           
            <img srcSet= {'assets/img/' + props.images[props.color]} className={classes.productImage} />
            <div className={classes.productInformation}>
                <h4 className={classes.productTitle}>{props.title}</h4>
                <div className={classes.productInfoWrapper}>
                    <div className={classes.productSubtitles}>
                        <p className={classes.productSubtitle}>SIZE: </p>
                        <p className={classes.productSubtitle}>COLOR: </p>
                        <p className={classes.productSubtitle}>PRICE: </p>
                    </div>
                    <div className={classes.productVariations}>
                        <ul className={classes.productSizes}>
                            {props.sizes.map(productSize => {
                                return <li onClick = {e => props.sizeHandler(productSize)} style = {{color: productSize === props.size ? '#F80EE7' : ''}}>
                                    <span className={classes.productSize} key = {productSize}>{productSize}</span>
                                </li>
                            })}
                        </ul>                       
                        <ul className={classes.productColors}>                            
                            {props.colors.map(productColor => {
                                return <li 
                                key = {productColor} 
                                className={classes.productColor}  
                                style={{ backgroundColor: productColor, border: productColor === props.color ? 'solid 1px #ffffff' : 'solid 1px ' + productColor}}
                                onClick = {e => props.colorHandler(productColor)}                                
                                >                                     
                                </li>
                            })}
                        </ul>
                        <p className={classes.productPrice}>$ {props.price.toFixed(2)}</p>
                    </div>
                </div>
            </div>
            {props.children}             
        </div>
    )
}
