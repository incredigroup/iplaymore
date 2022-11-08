import { useContext, useEffect } from "react";
import { context } from "../context/context";

const Header = ( {route} ) => {
  const navContext = useContext(context);
 const { nav, changeNav, logined, logStatus, username, account } = navContext;


  useEffect(() => {
    console.log(nav);
  }, [nav]);



  const activeNav = (value) => (value == nav ? "active" : "");
  const logout = () => {
    logStatus({username: '', status:false});
    changeNav('home');
  }
  return (
    <div className="edrea_tm_header">
      <div className="header_inner">
        <div className="logo">
          <a href="#home" onClick={() => changeNav("home")}>
            <img src="img/logo/iplaymore_1080x454.png" alt="" />
          </a>
        </div>
        <div className="menu">
          <ul className="transition_link">
            <li className={activeNav("home")}>
              <a href="#home" onClick={() => changeNav("home")}>
                Home
              </a>
            </li>
            <li className={activeNav("videos")}>
              <a href="#videos" onClick={() => changeNav("videos")}>
                Videos
              </a>
            </li>
              <li className={activeNav("bonfire")}>
                <a href="#bonfire" onClick={() => changeNav("bonfire")}>
                Bonfire Stories
                </a>
              </li>
            <li className={activeNav("game")}>
              <a href="#game" onClick={() => changeNav("game")}>
                Game
              </a>
            </li>
            {logined?
            <li class="dropbox">
              <div class="dropdown">
                <a href="#">
                  My Account
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
               Sign In 

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
