import React from 'react';
import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={imgUrl} alt="Project" />
      </div>
      <div className={styles.description}>
        <h3 className={styles.title}>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
