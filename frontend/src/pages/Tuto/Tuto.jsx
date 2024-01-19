import React from "react";
import { Link } from "react-router-dom";
import Frame1 from "./TutoComponent/Fram1";
import Frame2 from "./TutoComponent/Fram2";
import Frame3 from "./TutoComponent/Fram3";

import "./Tuto.scss";

function Tuto() {
  return (
    <div className="tuto-block">
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <div className="tuto-list-div">
        <Link to="/" className="tuto-list-link">
          TESTER NOTRE IA
        </Link>
      </div>
    </div>
  );
}

export default Tuto;
