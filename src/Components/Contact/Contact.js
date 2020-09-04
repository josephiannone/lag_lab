import React from 'react';
import classes from './Contact.module.css';

const contact = () => {
    return (
        <div className={classes.Contact}>

            <p><span>Email: </span></p>
            <p>lagunoff@uw.edu</p>
            <br/>
            <p><span>Voicemail: </span></p>
            <p>206-616-4285</p>
            <br/>
            <p><span>Mailing Address:</span></p>
            <p>750 Republican St., F573</p>
            <p>BOX 358070</p>
            <p>Seattle WA 98109</p>
        </div>
    )
}

export default contact;