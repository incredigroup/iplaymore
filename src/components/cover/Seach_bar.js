import Image from 'next/image';
import { useRef } from "react";
import { useContext } from "react";
import { context } from "../../context/context";

const Seach_bar = ({route,  page,  url }) => {
    const navContext = useContext(context);
    const { nav, changeNav, logined, logStatus, username } = navContext;
    const activeNav = (value) => (value == nav ? "active" : "");

    return (
        <div class="seach_nav">
        <div className=''>
        <input
            className='seachbar_input'
            type="text"
            placeholder="Search marketplace..."
            /> 
        </div>
        <div className='button_group'>
        <a class="active" href="#home">Mixed Charavters</a>
        <a href="#about">Brood Characters</a>
        <a className='end' href="#contact">Kin Chacaters</a>
        </div>
        <a className='gra_red' href="#emptypage" onClick={() => changeNav("emptypage")}>Redeem Code</a>
      </div>
    );
};

export default Seach_bar;
