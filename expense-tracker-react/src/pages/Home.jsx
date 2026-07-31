import { Link } from "react-router-dom";


function Home() {

  return (
    <div>

      <h1>Home Page</h1>

      <p>Welcome to Expense Tracker</p>


      <Link to="/expense">

        <button>
          Open Expense Tracker
        </button>

      </Link>


    </div>
  );

}

export default Home;