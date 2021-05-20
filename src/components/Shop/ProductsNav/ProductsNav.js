import React from 'react';
import classes from './ProductsNav.module.css';

export default function ProductsNav() {
    return (
        <div className={classes.productsNav}>
            <input type="search" name="product-search" className={classes.productSearch} placeholder="Search for shoes" />
            <select name="" className={classes.productSort}>
                <option value="low-price">Lowest Price</option>
                <option value="high-price">Highest Price</option>
                <option value="low-price">Latest Shoes</option>
            </select>             
        </div>
    )
}
