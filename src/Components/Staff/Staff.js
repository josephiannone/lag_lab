import React from 'react';

import classes from './Staff.module.css';
import michaelImg from '../../img/staff/michael.jpg';
import TerriImg from '../../img/staff/TD.jpg';
import PostDocsImg from '../../img/staff/default-person.png'
import LyndseyImg from '../../img/staff/IMG_2856.JPG'
//dan is su[[[rot tp to be hear
import SonnyImg from '../../img/staff/IMG_0049 (1).jpg'
import ChristinaImg from '../../img/staff/IMG_2740.jpg'
import AnushkaImg from '../../img/staff/79293957_483823205593948_1292608491206213632_n.jpg'


const staff = () => {
    return (
        <div className={classes.Staff}>
            <h3>Principal Investigator</h3>

            <div className={classes.Card}>
                <div>
                    <img src={michaelImg} alt=''/>
                    <p>Michael Lagunoff</p>
                    <p>lagunoff@uw.edu</p>
                </div>
            </div>
                <h3>Staff Scientist</h3>
            <div className={classes.Card}>
                <div>
                    <img src={TerriImg} alt=''/>
                    <p>Terri DiMaio</p>
                    <p>tdimaio@uw.edu</p>
                </div>
            </div>
                <h3>Post Docs</h3>
            <div className={classes.Card}>
                <div>
                    <img src={PostDocsImg} alt=''/>
                    <p>You?</p>
                </div>
            </div>
            <h3>Graduate Students</h3>
            <div className={classes.Card}>
                <div>
                    <img src={LyndseyImg} alt=''/>
                    <p>Lyndsey Moore</p>
                    <p>lyndseym@uw.edu</p>
                </div>
                <div>
                    <img src={PostDocsImg} alt=''/>
                    <p>Daniel Holmes</p>
                    <p>dlholmes@uw.edu</p>
                </div>
            </div>
            <h3>Undergraduate Students</h3>
            <div className={classes.Card}>
                <div>
                    <img src={SonnyImg} alt=''/>
                    <p>Santino Iannone</p>
                    <p>iannos@uw.edu</p>
                </div>
                <div>
                    <img src={ChristinaImg} alt=''/>
                    <p>Christina Le</p>
                    <p>cle2000@uw.edu</p>
                </div>
                <div>
                    <img src={AnushkaImg} alt=''/>
                    <p>Anushka Ladha</p>
                    <p>aladha@uw.edu</p>
                </div>
            </div>
            <div className={classes.Alumni}>
                <h3>Lab Alumni</h3>
                <p> Daniel Vogt </p>
                <p> Alice Ranjan </p>
            </div>
        </div>
    )
}

export default staff;