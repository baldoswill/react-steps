import React, {useState} from 'react';
import classes from './ProductsNav.module.css';
import {productsActions} from '../../../redux/reducers/products-reducer';
import {useDispatch} from 'react-redux';

export default function ProductsNav() {

    let [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();

    const searchHandler = (e) => {
        if(e.key === 'Enter'){
            
            dispatch(productsActions.searchProduct(searchText));         
        }  
    }

    return (
        <div className={classes.productsNav}>
            <input type="search" 
            name="product-search" 
            className={classes.productSearch} 
            placeholder="Search for shoes" 
                  
            />
            <select name="" className={classes.productSort}>
                <option value="low-price">Lowest Price</option>
                <option value="high-price">Highest Price</option>
                <option value="low-price">Latest Shoes</option>
            </select>             
        </div>
    )
}
