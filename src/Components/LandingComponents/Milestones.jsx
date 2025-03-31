import React from 'react';
import styles from './Milestones.module.css';

const milestonesData = [
  {
    id: 1,
    number: '10,000+',
    text: 'Participants',
  },
  {
    id: 2,
    number: '500+',
    text: 'Hackathons Listed',
  },
  {
    id: 3,
    number: '2,000+',
    text: 'Projects Submitted',
  },
];

const Milestones = () => {
  return (
    <section className={styles.milestones}>
      <h2 className={styles.title}>Milestones</h2> {/* Added title here */}
      <div className={styles.milestonesContainer}>
        {milestonesData.map((milestone) => (
          <div key={milestone.id} className={styles.milestone}>
            <div className={styles.number}>
              {milestone.number}
            </div>
            <div className={styles.text}>
              {milestone.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Milestones;