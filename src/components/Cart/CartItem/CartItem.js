import React from 'react';
import classes from './CartItem.module.css';
 import { removeItem } from '../../../redux/actions/cart-action';
import {useDispatch} from 'react-redux';

export default function CartItem(props) {     
    const dispatch = useDispatch();

    const deleteHandler = (id) => {   
        dispatch(removeItem(id))
    }
    return (
        <div className={classes.productItem} ref = {props.lastItemRef}>
            <i className={"fas fa-times " + classes.deleteIcon} onClick = {e => deleteHandler(props.id)}></i>
            <img srcSet={'assets/img/' + props.image} className={classes.productImage} />
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
                            <li>
                                <span className={classes.productSize}>{props.size}</span>
                            </li>
                        </ul>
                        <ul className={classes.productColors}>
                            <li
                                className={classes.productColor}
                                style={{ backgroundColor: props.color, border: 'solid 1px #ffffff' }}
                            >
                            </li>
                        </ul>
                        <p className={classes.productPrice}>$ {props.price.toFixed(2)}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
