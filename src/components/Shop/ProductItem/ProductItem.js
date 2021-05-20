import React, {useState} from 'react';
import {cartActions} from '../../../redux/reducers/cart-reducer';
import {useDispatch} from 'react-redux';
import Item from '../../General/Item/Item';

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
        dispatch(cartActions.addItem({title: props.title, size, color, price: props.price}));
    }
 
    return (
         <Item 
            item = {props.item} 
            size = {size} 
            color = {color}
            price = {props.price} 
            colorHandler = {colorHandler} 
            sizeHandler = {sizeHandler}
            {...props}
            >            
             <button className="btn btn-add btn-block" type="button" onClick = {e => addItemHandler()}>Add to cart</button>
        </Item>
    )
}
