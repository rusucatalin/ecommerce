import { MainPage } from "./pages/MainPage";
import { Login } from "./pages/LoginPage";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      {/* <MainPage /> */}

      <div>
        <div>
          <h1></h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home Page</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default App;
