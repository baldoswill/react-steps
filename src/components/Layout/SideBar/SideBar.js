import classes from './SideBar.module.css'
import React from 'react'

export default function SideBar(props) {
    return (
        <div className = {classes.sideBar}>
            {props.children}
        </div>
    )
}
