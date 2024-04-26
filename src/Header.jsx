import { Link } from "react-router-dom";


const Header = () => {
  return (
    <nav className="App">
      <h1>The List Site</h1>
      <div className="orange">
      <Link to="/Home" className="orange">Home</Link>
       <Link to="/to-do-list" className="orange">Create list</Link>
       <Link to="/About" className="orange">About</Link>
      </div>
    </nav>
  );
}

export default  Header; 