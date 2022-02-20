import {VFC, memo, ReactNode, useState} from "react";
import Link from "next/link";
import styles from "./Layout.module.scss";


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
    path: "/"
  },
  {
    pageName: "ページ2",
    path: "#"
  },
  {
    pageName: "ページ3",
    path: "#"
  },
  {
    pageName: "ページ4",
    path: "#"
  },

]

export const Layout: VFC<Props> = memo((props) => {

  const { children } = props;

  const [ menuClose, setMenuClose ] = useState(false);

  return (
    <div className={styles.root}>

      <aside className={styles.sidebar}>
        <div className={styles.hamburger} role="button" onClick={() => setMenuClose(!menuClose)}>
          <span className={styles.border}></span>
          <span className={styles.border}></span>
          <span className={styles.border}></span>
        </div>
        {navigations.map((navigation) => (
          <Link href={navigation.path} key={navigation.path}>
            <a className={styles.flexContainer}>
              <div className={styles.icon}>○</div>
              <p
                className={styles.pageName}
                style={{display: menuClose ? "none" : "block"}}
              >{ navigation.pageName }</p>
            </a>
          </Link>
        ))}
      </aside>

      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  )
})
