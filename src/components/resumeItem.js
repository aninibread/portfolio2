import React from 'react';
import styles from '../styles/resumeItem.module.css'; // Ensure you have this CSS module

const ResumeItem = ({ companyName, positionName1, teamName1, positionName2, teamName2 }) => {
  return (
    <div className={styles.resumeItem}>
      <h3 className={styles.companyName}>{companyName}</h3>
      
      <p className={styles.positionName1}>{positionName1}</p>
      <p className={styles.teamName}>{teamName1}</p>

      <p className={styles.positionName2}>{positionName2}</p>
      <p className={styles.teamName}>{teamName2}</p>
    </div>
  );
};

export default ResumeItem;