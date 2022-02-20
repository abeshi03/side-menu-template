import { VFC, memo, ReactNode } from "react";
import styles from "./Layout.module.scss";


type Props = {
  children: ReactNode;
}

export const Layout: VFC<Props> = memo((props) => {

  const { children } = props;

  return (
    <div className={styles.root}>

      {children}
    </div>
  )
})
