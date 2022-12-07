import { useState, useEffect, useContext } from "react";
import { context } from "../context/context";
import AboutGame from "./popup/AboutGame";


const Game = () => {
  const navContext = useContext(context);
  const { nav, changeNav } = navContext;
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    if(nav === 'game') {
      setPopup(true);
    } else {
      setPopup(false)
    }
    return () => {setPopup(false)}
  }, [nav]);

  const closePopup = () => {
    if(popup !== false) {
      changeNav('home');
    }
    setPopup(false);
  }

  return (
      <AboutGame
        open={popup}
        close={() => closePopup()}
      />
  );
};
export default Game;
