import { useContext, useEffect, useState } from "react";
import { context } from "../context/context";
import Image from 'next/image';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Header = ( {route} ) => {
  const navContext = useContext(context);
  const { nav, changeNav, logined, logStatus, account } = navContext;
  const activeNav = (value) => (value == nav ? "active" : "");
  const logout = () => {
    logStatus({username: '', status:false});
    changeNav('home');
  }

  return (
    <div className="edrea_tm_header">
      <div className="header_inner">
        <div className="logo header-logo">
          <a href="#home" onClick={() => changeNav("home")}>
            <Image 
              src="/img/logo/iplaymore_logo.png"
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </a>
        </div>
        <div className="menu">
          <ul className="transition_link">
            <li className={activeNav("home")}>
              <a href="#home" onClick={() => changeNav("home")}>
                Home
              </a>
            </li>
            <li className={activeNav("bonfire")}>
              <a href="#bonfire" onClick={() => changeNav("bonfire")}>
              Bonfire Stories
              </a>
            </li>
            <li className={activeNav("comic")}>
              <a href="#comic" onClick={() => changeNav("comic")}>
                Comic
              </a> 
            </li>
            <li className={activeNav("game")}>
              <a href="#game" onClick={() => changeNav("game")}>
                Game
              </a>
            </li>
            <li className={activeNav("novel")}>
              <a href="#novel" onClick={() => changeNav("novel")}>
                Novel 
               </a> 
             </li> 
            <li className={activeNav("music")}>
              <a href="#music" onClick={() => changeNav("music")}>
                Music
              </a>
            </li>
             <li className={activeNav("marketplace")}>
               <a href="#marketplace" onClick={() => changeNav("marketplace")}>
                 Marketplace
               </a>
             </li>
            <li className={activeNav("videos")}>
              <a href="#videos" onClick={() => changeNav("videos")}>
                Videos
              </a>
            </li>
            {logined?
            <li class="dropbox">
              <div class="dropdown">
                <a href="#">
                  <AccountCircleIcon fontSize="large" className="accounticon"></AccountCircleIcon>
                </a>
                <div class="dropdown-content" onClick={() => logout()}>
                  <label>{account.substr(0, 5)}...{account.substr(-4, 4)}</label>
                  <br/>
                  <a class="logout" >
                    Logout 
                  </a>
                </div>
              </div>
            </li>:
            <li className='`{activeNav("signin")}` dropbox'>
              <a href="#login" onClick={() => changeNav("signin")}>
               Log-in 
              </a>
            </li>
            }
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
