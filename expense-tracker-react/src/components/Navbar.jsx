import { Link } from "react-router-dom";


function Navbar() {

  return (

    <nav>

      <h2>
        Expense Tracker
      </h2>


      <Link to="/">
        Home
      </Link>


      <Link to="/expense">
        Expense
      </Link>


    </nav>

  );

}

export default Navbar;
