import { Link } from "react-router-dom";


function Wo() {
  return (
  <div>
    <main>
      <h2>Welcome to the homepage</h2>
    </main>
    <nav>
      <Link to="/about">about</Link>
    </nav>
  </div>
  );
}

export default Wo;
