import { Link } from "react-router-dom";
import "./wo.css";
import Wonav from "./wo/wonav";
import Womain from "./wo/womain";
import Woye from "./wo/wo-ye";
import Wocl from "./wo/wo-cl";


function Wo() {
  return (
    <div id="wo">
      <Wonav></Wonav>
      <Womain></Womain>
      <Woye></Woye>
      <Wocl></Wocl>
    </div>
  );
}

export default Wo;
