import "./index.css"
import Wonavdao from "./wonavdao";
import Wouserdata from "./wouserdata";
import $ from "jquery"


function Wonav() {


  return (
    <nav id="wonav">
      <Wonavdao></Wonavdao>
      <Wouserdata></Wouserdata>
    </nav>

  );

}

export default Wonav;
