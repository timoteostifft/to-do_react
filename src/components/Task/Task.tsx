import React from 'react';

import styles from './Task.module.css'

import trash from '../../assets/trash.svg'

interface TaskProps {
  content: string
}

const Task: React.FC<TaskProps> = ({ content }) => {
  return (
    <div className={styles.container}>
      <input type="checkbox" name="" id="" />

      <p>{content}</p>
      <button>
        <img src={trash} alt="" />
      </button>
    </div>
  )
}

export default Task;