import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AnimatePresence} from "framer-motion"; 


function Header() {
  return (
    <div className="header">

      <div className="headerFrame">
          <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
          <button className="headerButton">

            Add book
        </button>
        </Link>
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <button className="headerButton">
            Home
          </button> 
          </Link>

        <Link to="/introduce" style={{ color: "inherit", textDecoration: "none" }}>
          <button className="headerButton">
            Introduce
          </button> 
          </Link>
        
      </div>
   
    </div>
  );
}

export default Header;
