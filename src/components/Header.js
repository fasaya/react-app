import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="mb-5">
        <ul>
          <li><Link to="/">Products</Link></li>
          <li><Link to="/add">Add Product</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
    </div>
    );
};

export default Header;
