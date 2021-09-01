import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Movie Favs</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All movies</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New movie</Link>
          </li>
          <li>
            <Link to="/favorites">My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
