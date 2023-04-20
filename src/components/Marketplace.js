import { Fragment, useState } from "react";
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import { portfolioSlider } from "../sliderProps";
import PortfolioModal from "./popup/PortfolioModal";
import Market_UI from './cover/Market_UI';
import Seach_bar from "./cover/Seach_bar";

const Marketplace = ( { data } ) => {
  const [modal, setModal] = useState(false);
  const [zoom, setScale] = useState({scale: 1, marginTop: 0, top: 20, lock: true});
  const zoomIn = () => {
      setScale({...zoom, scale:1.2, marginTop: 60, top: 80});
  }

  const zoomOut = () => {
      setScale({...zoom, scale:1, marginTop: 0, top: 20});
  }

  const zoomLock = () => {
      setScale({...zoom, lock: !zoom.lock});
  }
  
  return (
    <Fragment>
      <PortfolioModal open={modal} close={() => setModal(false)} />
      <div className="edrea_tm_section hidden animated" id="marketplace" style={{'transform': `scale(${zoom.scale})`}}>
                    <div className="edrea_tm_main_title">
                        <h3>Marketplace</h3>
                    </div>
                    <Seach_bar></Seach_bar>
                    <div className="section_inner">
                    <Market_UI></Market_UI>
            </div>
        </div>
    </Fragment>
  );
};
export default Marketplace;

