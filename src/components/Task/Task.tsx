import React, { MouseEventHandler } from 'react';

import styles from './Task.module.css'

import trash from '../../assets/trash.svg'

interface TaskProps {
  content: string
  uuid: string
  onDeleteTask: (uuid: string) => void
}

const Task: React.FC<TaskProps> = ({ content, uuid, onDeleteTask }) => {

  function handleDeleteTask() {
    onDeleteTask(uuid)
  }

  return (
    <div className={styles.container}>
      <input type="checkbox" name="" id="" />

      <p>{content}</p>
      <button onClick={handleDeleteTask}>
        <img src={trash} alt="" />
      </button>
    </div>
  )
}

export default Task;