import React from 'react';
import getPubmed from "./getPubs";
import classes from "./Publications.module.css"



const Publications = () => {

    getPubmed()

    return (
        <div className={classes.Publications}>
            <p id='pubs'> </p>
        </div>
    )
}



export default Publications;