import classes from "./MainNavigation.module.css";
import Link from "next/link";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
        <li>
          <Link href="/">LA PETITE ACADEMIÉ DU GOÛT</Link>
        </li>
          {/* <li>
            <Link href="/">All Meetups</Link>
          </li> */}
          <li>
            <Link href="#">À PROPOS</Link>
          </li>
          <li>
            <Link href="#">RENCONTRER LES FONDATEURS</Link>
          </li>
          <li>
            <Link href="/new-meetup">DEVENIR ÉCOLE PILOTE</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
