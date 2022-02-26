import {VFC, memo, ReactNode, useState} from "react";
import Link from "next/link";
import styles from "./Layout.module.scss";
import { HomeIcon } from "../../styles/Home";


type Props = {
  children: ReactNode;
}

type Navigation = {
  icon?: JSX.Element;
  pageName: string;
  path: string;
}

const navigations: Navigation[] = [
  {
    pageName: "トップ",
    path: "/",
    icon: <HomeIcon className={styles.icon}/>
  },
  {
    pageName: "ページ2",
    path: "#",
    icon: <HomeIcon className={styles.icon}/>
  },
  {
    pageName: "ページ3",
    path: "#",
    icon: <HomeIcon className={styles.icon}/>
  },
  {
    pageName: "ページ4",
    path: "#",
    icon: <HomeIcon className={styles.icon}/>
  },

]

export const Layout: VFC<Props> = memo((props) => {

  const { children } = props;

  const [ menuOpen, setMenuOpen ] = useState(false);

  return (
    <div className={styles.root}>

      { menuOpen ? (
        <aside className={styles.sidebar} style={{ width: "200px" }}>
          <div className={styles.hamburger} role="button" onClick={() => setMenuOpen(!menuOpen)}>
            <span className={styles.border}></span>
            <span className={styles.border}></span>
            <span className={styles.border}></span>
          </div>
          {navigations.map((navigation) => (
            <Link href={navigation.path} key={navigation.path}>
              <a className={styles.flexContainer}>
                {navigation.icon}
                <p
                  className={styles.pageName}
                >ほげ</p>
              </a>
            </Link>
          ))}
        </aside>
      ) : (
        <aside className={styles.sidebar} style={{ width: "60px" }}>
          <div className={styles.hamburger} role="button" onClick={() => setMenuOpen(!menuOpen)}>
            <span className={styles.border}></span>
            <span className={styles.border}></span>
            <span className={styles.border}></span>
          </div>
          {navigations.map((navigation) => (
            <Link href={navigation.path} key={navigation.path}>
              <a className={styles.flexContainer}>
                {navigation.icon}
              </a>
            </Link>
          ))}
        </aside>
      )}


      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  )
})
