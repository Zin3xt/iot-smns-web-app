import Nav from "./nav";
import Home from "../pages/index";
import styles from "../styles/Home.module.css";
const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
