import React from 'react';
import classes from './ProductsNav.module.css';
import { productsActions } from '../../../redux/reducers/products-reducer';
import { useDispatch, useSelector } from 'react-redux';


export default function ProductsNav() {

    const dispatch = useDispatch();

    const searchHandler = (e) => {

        dispatch(productsActions.searchProduct(e.target.value));

    }

    const sortHandler = (e) => {
        dispatch(productsActions.sortProducts(e.target.value));
    }



    return (
        <div className={classes.productsNav}>
            <input type="search"
                name="product-search"
                className={classes.productSearch}
                placeholder="Search for shoes"
                onChange={e => searchHandler(e)}
            />
            <select name="" className={classes.productSort} onChange={e => sortHandler(e)}>
                <option value="low-price">Lowest Price</option>
                <option value="high-price">Highest Price</option>
                <option value="latest-shoes">Latest Shoes</option>
            </select>
        </div>
    )
}
