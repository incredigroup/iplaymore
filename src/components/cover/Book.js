import { useState, useRef, useEffect } from "react";
import Image from 'next/image';
import HTMLFlipBook from "react-pageflip";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import useSWR from 'swr';

const Book = (props) => {
    const [page, setPage] = useState(0);
    const [zoomState, setZoom] = useState({zoom: 1, allowZoom: false, allowPan: false});
    const book = useRef();
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data }= useSWR('/api/readfiles?menu=' + props.menu, fetcher);
    const number = data && data.length;
    
    useEffect(()=>{
        setZoom({...zoomState, zoom: 1, allowZoom: !zoomState.allowZoom, allowPan: !zoomState.allowPan});
    }, [props.lock]);

    const onPage = (e) => {
        setPage(e.data);
    };

    return (
        <>
        <div className="portfolio_list gallery_zoom comic-container" style={{ marginTop: props.marginTop }}>
            <div className="book-area iplaymorecomic" style={{transform: `scale(${props.scale})`}}>
            <TransformWrapper initialScale={1} initialPositionX={0} initialPositionY={0} disabled={zoomState.allowZoom}>
                <TransformComponent>
                    <HTMLFlipBook
                    width={550}
                    height={700}
                    size="stretch"
                    minWidth={250}
                    maxWidth={1200}
                    minHeight={350}
                    maxHeight={1433}
                    maxShadowOpacity={0.5}
                    showCover={true}
                    mobileScrollSupport={true}
                    onFlip={onPage}
                    useMouseEvents={zoomState.allowZoom}
                    // swipeDistance = {0}
                    // useMouseEvents={false}
                    ref={book}
                >
                    {(() => {
                        const pages= [];
                        data && data.map((one, key) => {
                            const url = one.replace(/\\/g, "/");
                            if(key < 1 || key == data.length - 1) {
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
                                        <div className="page-footer">- {key} -</div>
                                    </div>
                                );
                            }
                        })
                        return pages;
                    })()}
                    </HTMLFlipBook>
                </TransformComponent>
            </TransformWrapper>
            </div>
        </div>
        <div className="handle-flip" style={{top: props.top}}>
            <div className="comic-pagination">
                <button className="btn-pagination" onClick={() =>book.current.pageFlip().flipPrev()}>Previous page</button>
                [<span> {page} </span> of
                <span> {number-1} </span>]
                <button className="btn-pagination" onClick={() =>book.current.pageFlip().flipNext()}>Next page</button>
            </div>
        </div>
        </>
    );
};

export default Book