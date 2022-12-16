import { useContext , useEffect} from "react";
import { context } from "../context/context";
import AnimatedText from "./AnimatedText";
import Image from "next/image";

const Home = ({ route }) => {
  const navContext = useContext(context);
  const { changeNav } = navContext;

  return (
    <div className="edrea_tm_section animated" id="home">
      <div className="section_inner">
        <div className="edrea_tm_home">
          <div className="home-thunder">
            <Image 
              src="/img/logo/thunder.png"
              alt=""
              width="450px"
              height="285px"
            />
          </div>
          <h3 className="job">
            <AnimatedText />
          </h3>
          <div className="edrea_tm_button"> 
            <a href='#register' className="register_btn" onClick={() => changeNav('register')}>Sign Up To Play Early!</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
