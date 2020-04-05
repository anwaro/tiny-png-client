import React, { CSSProperties } from "react";

import styles from "./index.module.scss";

type WrapperProps = {
  style: CSSProperties;
};

const Wrapper: React.FC<WrapperProps> = ({ children, style }) => {
  return (
    <div className={styles.pageWrapper} style={style}>
      {children}
    </div>
  );
};

export default Wrapper;
