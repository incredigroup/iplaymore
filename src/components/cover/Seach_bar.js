import Image from 'next/image';
import { useRef } from "react";
const Seach_bar = ({page,  url }) => {
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
        <a className='gra_red' href="#contact">Redeem Code</a>
      </div>
    );
};

export default Seach_bar;
