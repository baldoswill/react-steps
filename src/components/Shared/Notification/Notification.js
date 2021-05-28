import React from 'react';
import classes from './Notification.module.css';

export default function Notification(props) {

    let typeOfNotification = '';

    console.log(props.type)

    if(props.type === 'success'){
        typeOfNotification = classes.success;
    }else if(props.type ==='error'){
        typeOfNotification = classes.error;
    }else if(props.type ==='loading'){
        typeOfNotification = classes.loading;
    }

    let cssClasses = `${classes.notification} ${typeOfNotification}`;

    return (
        <div className = {cssClasses}>
            <h3 className={classes.title}>{props.title}</h3>
            <p className={classes.message}>{props.message}</p>
        </div>
    )
}
