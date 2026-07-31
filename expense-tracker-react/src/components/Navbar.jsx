import { NavLink } from "react-router-dom";


function Navbar() {

  return (

    <nav>

      <h2>
        Expense Tracker
      </h2>


     <NavLink
  to="/"
  className={({isActive}) =>
    isActive ? "active" : ""
  }
>
  Home
</NavLink>




<NavLink
  to="/expense"
  className={({isActive}) =>
    isActive ? "active" : ""
  }
>
  Expense
</NavLink>

    </nav>

  );

}

export default Navbar;
