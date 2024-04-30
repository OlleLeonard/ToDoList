import { Link } from "react-router-dom";


const Header = () => {
  return (
    <nav className="Center">
      <div className="orange">
      <Link to="/" className="orange">Home</Link>
       <Link to="/to-do-list" className="orange">Create list</Link>
       <Link to="/About" className="orange">About</Link>
      </div>
    </nav>
  );
}

export default  Header; 