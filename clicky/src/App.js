import React from 'react';
import './App.css';
import ShowImage from "./components/Game.js";
import Michael from "./image.json";
import NavBar from "./components/Navbar/NavBar";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div>
      <NavBar />
      <Wrapper>
        <div className="row1">
          <ShowImage
            image={Michael[0].image}
          />
          <ShowImage
            image={Michael[1].image}
          />
          <ShowImage
            image={Michael[2].image}
          />
        </div>
        <div className="row2">
          <ShowImage
            image={Michael[3].image}
          />
          <ShowImage
            image={Michael[4].image}
          />
          <ShowImage
            image={Michael[5].image}
          />
        </div>
        <div className="row3">
          <ShowImage
            image={Michael[6].image}
          />
          <ShowImage
            image={Michael[7].image}
          />
          <ShowImage
            image={Michael[8].image}
          />
        </div>
        <div className="row2">
          <ShowImage
            image={Michael[9].image}
          />
          <ShowImage
            image={Michael[10].image}
          />
          <ShowImage
            image={Michael[11].image}
          />
        </div>
      </Wrapper>
    </div>
  );
}

export default App;
