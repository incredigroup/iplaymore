import React, { Fragment, useState, useEffect, useRef } from "react";
import Book from './cover/book';

const Comic = () => {
    return (
        <Fragment>
        <div className="edrea_tm_section hidden animated" id="comic">
            <div className="section_inner">
                <div className="edrea_tm_portfolio swiper-section">
                    <div className="edrea_tm_main_title">
                    <h3>
                        THUNDER! ©<span className="coloring">Comic</span>
                    </h3>
                    </div>
                    <Book menu="comic"></Book>
                </div>
            </div>
        </div>
        </Fragment>
    );
};

export default Comic;

