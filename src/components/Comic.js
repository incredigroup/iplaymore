import React, { Fragment, useState } from "react";
import Book from './cover/Book';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';

const Comic = () => {
    const [zoom, setScale] = useState({scale: 1, marginTop: 0, top: 20});
    const zoomIn = () => {
        setScale({scale:1.2, marginTop: 70, top: 80});
    }

    const zoomOut = () => {
        setScale({scale:1, marginTop: 0, top: 20});
    }

    return (
        <Fragment>
        <div className="edrea_tm_section hidden animated" id="comic" style={{'transform': `scale(${zoom.scale})`}}>
            <div className="section_inner">
                <div className="edrea_tm_portfolio swiper-section">
                    <div className="edrea_tm_main_title">
                        <h3>
                            THUNDER! ©<span className="coloring">Comic</span>
                        </h3>
                    </div>
                    <div className="zoom"> 
                        <ZoomInIcon onClick={() => zoomIn()} fontSize="large"/>
                        <ZoomOutIcon onClick={() => zoomOut()} fontSize="large"/>
                    </div>
                    <Book menu="comic" {...zoom} zoomIn={zoomIn}></Book>
                </div>
            </div>
        </div>
        </Fragment>
    );
};

export default Comic;

