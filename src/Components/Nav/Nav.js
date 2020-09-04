import React, { useState} from 'react';
import classes from './Nav.module.css';
import { Link } from 'react-router-dom';


const Nav = () => {

    const [current, setCurrent] = useState('home')

    const navClickHandler = event => {
        setCurrent(event.target.id)
    }

    return (
        <div className={classes.Nav}>
            <p><span className={classes.Logo}>Lagunoff Lab</span></p>
            <div className={classes.Nav2}>
                <Link to='/'
                      id='home'
                      className={(current === 'home' ? classes.Active : '')}
                      onClick={(event) => navClickHandler(event)}>Home</Link>
                <Link to='/research'
                      id='research'
                      className={(current === 'research' ? classes.Active : '')}
                      onClick={(event) => navClickHandler(event)}>Research</Link>
                <Link to='/staff'
                      id='staff'
                      className={(current === 'staff' ? classes.Active : '')}
                      onClick={(event) => navClickHandler(event)}>Staff</Link>
                <Link to='/publications'
                      id='publications'
                      className={(current === 'publications' ? classes.Active : '')}
                      onClick={(event) => navClickHandler(event)}>Publications</Link>
                <Link to='/contact'
                      id='contact'
                      className={(current === 'contact' ? classes.Active : '')}
                      onClick={(event) => navClickHandler(event)}>Contact</Link>
            </div>
        </div>
    )
}

export default Nav