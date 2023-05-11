import Head from "next/head";
import NavBar from "../Navbar";

import styles from "./MainLayout.module.css";

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Contact - Llerena</title>
        <meta name="description" content="Contact page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default MainLayout;
