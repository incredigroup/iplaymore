import React, { Fragment } from "react";
import Book from './cover/book';

const Novel = () => {
    return (
        <Fragment>
        <div className="edrea_tm_section hidden animated" id="novel">
            <div className="section_inner">
                <div className="edrea_tm_portfolio swiper-section">
                    <div className="edrea_tm_main_title">
                    <h3>
                        THUNDER! ©<span className="coloring">Novel</span>
                    </h3>
                    </div>
                    <Book menu="novel"></Book>
                </div>
            </div>
        </div>
        </Fragment>
    );
};

export default Novel;

