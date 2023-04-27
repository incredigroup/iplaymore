import { Fragment, useState } from "react";
import PortfolioModal from "./popup/PortfolioModal";

const EmptyPage = ( { data } ) => {
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
      <div className="edrea_tm_section hidden animated" id="emptypage" style={{'transform': `scale(${zoom.scale})`}}>
          <div className="edrea_tm_main_title">
              <h3>EmptyPage</h3>
          </div>
          <input
            className='input number'
            type="text"
            value={Math.floor((Math.random()*1000000)+1)}
            placeholder="Search marketplace..."
            /> 
      </div>
    </Fragment>
  );
};
export default EmptyPage;

