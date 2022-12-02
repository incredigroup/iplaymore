import React, { Fragment, useState, useEffect, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import Image from "next/image";
import useSWR from 'swr';
import PageCover from "./cover/PageCover";
import Page from "./cover/page";


const Comic = () => {
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const book = useRef();

    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data }= useSWR('/api/readfiles?menu=comic', fetcher);
    const number = eval(JSON.stringify(data));
    const onPage = (e) => {
        setPage(e.data);
    };

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
                    <div className="portfolio_list gallery_zoom comic-container">
                        <div className="flipbook">
                            <HTMLFlipBook
                                width={350}
                                height={500}
                                size="stretch"
                                minWidth={250}
                                maxWidth={1000}
                                minHeight={350}
                                maxHeight={1533}
                                maxShadowOpacity={0.5}
                                showCover={true}
                                mobileScrollSupport={true}
                                onFlip={onPage}
                                useMouseEvents={true}
                                className="iplaymorecomic"
                                ref={book}
                            >
                                {(() => {
                                    const pages = [];
                                    for(let i = 1; i <= number; i++){
                                        let url = "/files/comic/" + i + ".jpg";
                                        if(i === 1) {
                                            pages.push(
                                                <div className="demopage">
                                                    <Image 
                                                        src={url}
                                                        alt=""
                                                        layout="fill"
                                                    />
                                                </div>
                                            );
                                        } else if (i === number) {
                                            pages.push(
                                                <div className="demopage">
                                                    <Image 
                                                        src={url}
                                                        alt=""
                                                        layout="fill"
                                                    />
                                                </div>
                                            );
                                        } else {
                                            pages.push(
                                                <div key={i} className="demopage">
                                                    <div className="img-container">
                                                        <Image 
                                                            src={url}
                                                            alt=""
                                                            layout="fill"
                                                        />
                                                    </div>
                                                    <div className="page-footer">- {i - 1} -</div>
                                                </div>
                                            );
                                        }
                                    }
                                    return pages;
                                })()}
                            </HTMLFlipBook>
                            <div className="comic-pagination">
                                <div>
                                    <button className="btn-pagination" onClick={() =>book.current.pageFlip().flipPrev()}>Previous page</button>
                                    [<span> {page} </span> of
                                    <span> {number - 2} </span>]
                                    <button className="btn-pagination" onClick={() =>book.current.pageFlip().flipNext()}>Next page</button>
                                </div>
                                <div>
                                    {/* State: <i>{state}</i>, orientation: <i>{orientation}</i> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Fragment>
    );
};

export default Comic;
