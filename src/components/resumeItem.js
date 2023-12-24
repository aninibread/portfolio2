import React from 'react';
import styles from '../styles/resumeItem.module.css'; // Ensure you have this CSS module

const ResumeItem = ({ companyName, positionName, teamName }) => {
  return (
    <div className={styles.resumeItem}>
      <h3 className={styles.companyName}>{companyName}</h3>
      <p className={styles.positionName}>{positionName}</p>
      <p className={styles.teamName}>{teamName}</p>
    </div>
  );
};

export default ResumeItem;