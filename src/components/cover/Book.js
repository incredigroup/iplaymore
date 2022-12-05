import { useState, useRef } from "react";
import Image from 'next/image';
import HTMLFlipBook from "react-pageflip";
import useSWR from 'swr';

const Book = ({ menu }) => {
    const [page, setPage] = useState(0);
    const book = useRef();

    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data }= useSWR('/api/readfiles?menu=' + menu, fetcher);
    const number = data && data.length;
    const onPage = (e) => {
        setPage(e.data);
    };
    return (
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
                        const pages= [];
                        data && data.map((one, key) => {
                            const url = one.replace(/\\/g, "/");
                            if(key <= 1 || key == data.length - 1) {
                                pages.push(
                                    <div key={key} className="demopage">
                                        <Image 
                                            src={url}
                                            alt=""
                                            layout="fill"
                                        />
                                    </div>
                                );
                            } else {
                                pages.push(
                                    <div key={key} className="demopage">
                                        <div className="img-container">
                                            <Image 
                                                src={url}
                                                alt=""
                                                layout="fill"
                                            />
                                        </div>
                                        <div className="page-footer">- {key - 1} -</div>
                                    </div>
                                );
                            }
                        })
                        return pages;
                    })()}
                </HTMLFlipBook>
                <div className="comic-pagination">
                    <div>
                        <button className="btn-pagination" onClick={() =>book.current.pageFlip().flipPrev()}>Previous page</button>
                        [<span> {page} </span> of
                        <span> {number-2} </span>]
                        <button className="btn-pagination" onClick={() =>book.current.pageFlip().flipNext()}>Next page</button>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book