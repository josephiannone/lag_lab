import React from 'react';
import classes from './Research.module.css';

import img1 from '../../img/research/img1.png';
import img2 from '../../img/research/img2.png';
import img3 from '../../img/research/img3.png';

const research = () => {
    return (
        <div className={classes.Research}>
            <p>
                The Lagunoff lab is interested in the intersection of viruses and cancer.
                As many as 15% of all human cancer has a viral etiology.  A better
                understanding of the mechanisms of virus induced cancers will lead to a
                better understanding of both viral pathogenesis and oncogenesis.
            </p>
            <p>
                The lab is primarily focused on the etiologic agent of Kaposi’s Sarcoma,
                the eighth human herpesvirus, commonly referred to as Kaposi’s Sarcoma
                herpesvirus (KSHV). KSHV is a gamma-herpesvirus and is present in the main
                tumor cell of all KS tumors, the spindle cell.  Spindle cells express markers
                of lymphatic endothelium including VEGFR3 among others.  The lab is interested
                how KSHV alters endothelial cells and how this could lead to KS tumors.
            </p>
            <p>
                The lab is focused on a number of virus host interactions including virus induced
                cancer cell metabolism, virus induced oncogenic signaling pathways and virus
                induced cell proliferation towards immortalization.  In addition, the lab has used
                Crispr/Cas9 genomic screening to identify host genes that are essential to the
                survival and maintenance of KSHV latency with the goal of identifying novel targets
                to treat viral latency in the KS tumor and beyond.
            </p>
            <div className={classes.Cluster}>
                <div>
                    <div>
                        <img src={img1} alt='' />
                        <i>KSHV spindling of endothelial cells</i>
                    </div>
                    <div>
                        <img src={img2} alt='' />
                        <i>E.M. pictures of KSHV from lytic paper</i>
                    </div>
                </div>
                <div>
                    <img src={img3} alt='' />
                    <i>KSHV induction of metabolism</i>
                </div>
            </div>
        </div>
    )
}

export default research;