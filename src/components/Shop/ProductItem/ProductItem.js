import React, {useState} from 'react';
import {cartActions} from '../../../redux/reducers/cart-reducer';
import {useDispatch} from 'react-redux';
import classes from './ProductItem.module.css';
 
export default function ProductItem(props) {

    let [size, setSize] = useState(props.sizes[0]);
    let [color, setColor] = useState(props.colors[0]);
    const dispatch = useDispatch()
 

    const sizeHandler = (sizeParam) => {
        setSize(sizeParam)
    }

    const colorHandler = (colorParam) => {
        setColor(colorParam)
    }

    const addItemHandler = (item) => {        
        dispatch(cartActions.addItem({title: props.title, size, color, price: props.price, image:  props.images[color], id: props.id}));
    }
 
    return (       
            <div className={classes.productItem}>           
                <img srcSet= {'assets/img/' + props.images[color]} className={classes.productImage} />
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
                                    return <li onClick = {e => sizeHandler(productSize)} style = {{color: productSize === size ? '#F80EE7' : ''}}>
                                        <span className={classes.productSize} key = {productSize}>{productSize}</span>
                                    </li>
                                })}
                            </ul>                       
                            <ul className={classes.productColors}>                            
                                {props.colors.map(productColor => {
                                    return <li 
                                    key = {productColor} 
                                    className={classes.productColor}  
                                    style={{ backgroundColor: productColor, border: productColor === color ? 'solid 1px #ffffff' : 'solid 1px ' + productColor}}
                                    onClick = {e => colorHandler(productColor)}                                
                                    >                                     
                                    </li>
                                })}
                            </ul>
                            <p className={classes.productPrice}>$ {props.price.toFixed(2)}</p>
                        </div>
                    </div>
                </div>
                <button className = "btn btn-add btn-block" onClick = {addItemHandler}>Add to cart</button>         
            </div>
        
    )
}
