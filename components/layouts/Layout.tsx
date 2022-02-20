import { VFC, memo, ReactNode } from "react";
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

  return (
    <div className={styles.root}>

      <aside className={styles.sidebar}>
        <h1 className={styles.logo}>ロゴが入ります</h1>
        {navigations.map((navigation) => (
          <Link href={navigation.path} key={navigation.path}>
            <a>
              <p className={styles.pageName}>{ navigation.pageName }</p>
            </a>
          </Link>
        ))}
      </aside>

      <main className={styles.mainContent}>
        <div className={styles.header}>
          <div className={styles.hamburger} role="button">
            <span className={styles.border}></span>
            <span className={styles.border}></span>
            <span className={styles.border}></span>
          </div>
        </div>
        {children}
      </main>
    </div>
  )
})
