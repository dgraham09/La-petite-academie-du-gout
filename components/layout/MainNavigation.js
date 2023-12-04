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
          <li>
            <Link href="/about">À PROPOS</Link>
          </li>
          <li>
            <Link href="#">RENCONTRER LES FONDATEURS</Link>
          </li>
          <li>
            <Link href="/contact-form">DEVENIR ÉCOLE PILOTE</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
