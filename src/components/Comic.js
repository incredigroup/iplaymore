import React, { Fragment, useState } from "react";
import Book from './cover/Book';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';


const Comic = () => {
    const [zoom, setScale] = useState({scale: 1, marginTop: 0, top: 20, lock: true});
    const zoomIn = () => {
        setScale({...zoom, scale:1.2, marginTop: 60, top: 85});
    }

    const zoomOut = () => {
        setScale({...zoom, scale:1, marginTop: 0, top: 20});
    }

    const zoomLock = () => {
        setScale({...zoom, lock: !zoom.lock});
    }

    return (
        <Fragment>
        <div className="edrea_tm_section hidden animated" id="comic" style={{'transform': `scale(${zoom.scale})`}}>
            <div className="section_inner">
                <div className="edrea_tm_portfolio swiper-section">
                    <div className="edrea_tm_main_title">
                        <h3>
                            THUNDER!©<span className="coloring"> Comic</span>
                        </h3>
                    </div>
                    <div className="zoom"> 
                        <ZoomOutIcon className="zoom-icon" onClick={() => zoomOut()} fontSize="large"/>
                        <ZoomInIcon className="zoom-icon" onClick={() => zoomIn()} fontSize="large"/>
                        {
                            zoom.lock
                            ?<LockIcon onClick={() => zoomLock()} fontSize="large"/>
                            :<LockOpenIcon onClick={() => zoomLock()} fontSize="large"/>
                        }
                    </div>
                    <Book menu="comic" {...zoom} zoomIn={zoomIn}></Book>
                </div>
            </div>
        </div>
        </Fragment>
    );
};

export default Comic;

