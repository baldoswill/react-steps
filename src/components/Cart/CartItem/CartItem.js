import React, {useState} from 'react';
import Item from '../../General/Item/Item';
 
 

export default function CartItem(props) {
  
    let [size, setSize] = useState(props.sizes[0]);
    let [color, setColor] = useState(props.colors[0]);
   
    const sizeHandler = (sizeParam) => {
        setSize(sizeParam)
    }

    const colorHandler = (colorParam) => {
        setColor(colorParam)
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
    </Item>
    )
}
