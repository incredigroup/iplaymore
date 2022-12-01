import React, { Fragment, useState, useEffect, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import Image from "next/image";
// import * as fs from "fs";
// import path from "path";

// const FOLDER_NAME = "files";
// const filesDirectory = path.join(process.cwd(), "public", FOLDER_NAME);

const Comic = ( { data } ) => {
    const [mailData, setMailData] = useState({ name: "", email: "", wallet: ""});
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const book = useRef();
    
    useEffect(() => {
        // setTotalPage(fs.readdirSync(filesDirectory).length);
        setTotalPage(9);
    }, []);


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
                                // onChangeOrientation={onChangeOrientation}
                                // onChangeState={onChangeState}
                                className="iplaymorecomic"
                                ref={book}
                            >
                                <div className="demopage">
                                    <Image 
                                        src="/files/cover_start.jpg"
                                        alt=""
                                        layout="fill"
                                    />
                                </div>
                                <div className="demopage">
                                    <Image 
                                        src="/files/blank.jpg"
                                        alt=""
                                        layout="fill"
                                    />
                                </div>
                                {(() => {
                                    const pages = [];
                                    for(let i = 1; i < totalPage; i++){
                                        let url = "/files/" + i + ".jpg";
                                        pages.push(
                                            <div className="demopage">
                                                <div className="img-container">
                                                    <Image 
                                                        src={url}
                                                        alt=""
                                                        layout="fill"
                                                    />
                                                </div>
                                                <div className="page-footer">- {i} -</div>
                                            </div>
                                        );
                                    }
                                    return pages;
                                })()}
                                <div className="demoPage">
                                    <Image 
                                        src="/files/cover_end.jpg"
                                        alt=""
                                        layout="fill"
                                    />
                                </div>
                                {/* <PageCover>BOOK TITLE</PageCover>
                                <Page number={1}>Lorem ipsum...</Page>
                                <Page number={2}>Lorem ipsum...</Page> */}
                                {/* <PageCover>THE END</PageCover> */}
                            </HTMLFlipBook>
                            <div className="comic-pagination">
                                <div>
                                    <button className="btn-pagination" onClick={() =>book.current.pageFlip().flipPrev()}>Previous page</button>
                                    [<span> {page} </span> of
                                    <span> {totalPage} </span>]
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

// const PageCover = React.forwardRef((props, ref) => {
//     return (
//         <div className="page page-cover" ref={ref} data-density="hard">
//         <div className="page-content">
//             <h2>{props.children}</h2>
//         </div>
//         </div>
//     );
// });
  
// const Page = React.forwardRef((props, ref) => {
//     return (
//         <div className="page" ref={ref}>
//         <div className="page-content">
//             <h2 className="page-header">Page header - {props.number}</h2>
//             <div className="page-image"></div>
//             <div className="page-text">{props.children}</div>
//             <div className="page-footer">{props.number + 1}</div>
//         </div>
//         </div>
//     );
// });

export default Comic;

