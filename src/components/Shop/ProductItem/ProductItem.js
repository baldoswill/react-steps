import React from 'react';
import classes from './ProductItem.module.css';

export default function ProductItem(props) {
    return (
        <div className={classes.productItem}>           
            <img srcSet= {'assets/img/' +  props.images[0]} className={classes.productImage} />
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
                            {props.sizes.map(size => {
                                return <li>
                                    <span className={classes.productSize} key = {size}>{size}</span>
                                </li>
                            })}

                        </ul>
                       
                        <ul className={classes.productColors}>
                            {props.colors.map(color => {
                                return <li 
                                key = {color} 
                                className={classes.productColor}  
                                style={{ backgroundColor: color }}>                                     
                                </li>
                            })}
                        </ul>
                        <p className={classes.productPrice}>$ {props.price.toFixed(2)}</p>
                    </div>
                </div>
            </div>
            <button className="btn btn-add btn-block" type="button">Add to cart</button>
        </div>
    )
}
