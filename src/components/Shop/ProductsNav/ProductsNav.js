import React, {useState} from 'react';
import classes from './ProductsNav.module.css';
import {productsActions} from '../../../redux/reducers/products-reducer';
import {useDispatch} from 'react-redux';

export default function ProductsNav() {

    const dispatch = useDispatch();

    const searchHandler = (e) => {

        if(e.keyCode === 13){  
            
            dispatch(productsActions.searchProduct(e.target.value));         
        }  
    }

    const searchHandlerByTyping = (e) => {
        
        if(e.target.value.length > 2){ 
            console.log(e.target.value)             
            dispatch(productsActions.searchProduct(e.target.value));         
        }  
    }

    return (
        <div className={classes.productsNav}>
            <input type="search" 
            name="product-search" 
            className={classes.productSearch} 
            placeholder="Search for shoes" 
            onKeyDown = {e => searchHandler(e)}
            onChange = {e => searchHandlerByTyping(e)}
            />
            <select name="" className={classes.productSort}>
                <option value="low-price">Lowest Price</option>
                <option value="high-price">Highest Price</option>
                <option value="low-price">Latest Shoes</option>
            </select>             
        </div>
    )
}
