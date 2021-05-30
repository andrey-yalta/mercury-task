import './css/style.scss'
import {HeaderContainer} from "./components/Header/HeaderContainer";
import React from "react";
import {FirstScreenContainer} from "./components/FirstScreen/FirstScreenContainer";
import {Advantages} from "./components/Advantages/Advanrages";
import {Feedback} from "./components/Feedback/Feedback";
import {Footer} from "./components/Footer/Footer";
import {useAdvantagesContext} from "./Context/AdvantagesContext";
function App() {

    const {getPhotos,getPosts}= useAdvantagesContext()

    React.useEffect(()=>{
        getPhotos()
        getPosts()
    })

  return (
        <div>
          <HeaderContainer/>
          <FirstScreenContainer/>
          <Advantages/>
          <Feedback/>
          <Footer/>
        </div>
  );
}

export default App;
