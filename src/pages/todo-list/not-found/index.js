// Note: DataNotFound component...!

import React, { memo } from 'react';
import styles from "../../../styles/Todo.module.css";

const DataNotFound = () => <h1 className={styles.notFound}> Data Not Found! </h1>
export default memo(DataNotFound);