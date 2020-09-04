import React, {useEffect} from 'react';

import cells from '../../img/home/cells.JPG'
import classes from './Home.module.css'
import getPubmed from "./getPubs";



const Home = () => {

    getPubmed()
    useEffect(() => {

    }, [])
    return (
        <div className={classes.Home}>
            <div className={classes.Cont} >
                <div className={classes.Title}>
                    <h1>Lagunoff Lab</h1>
                    <h2>Department of Microbiology</h2>
                    <h2>University of Washington</h2>
                </div>
                <img src={cells} alt='' />
            </div>
            <div className={classes.Recent}>
                <h3>Most Recent Publications</h3>
                <p id='pubs'> </p>
            </div>
        </div>
    )
}

export default Home;