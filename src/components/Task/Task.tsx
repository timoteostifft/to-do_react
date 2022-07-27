import React, { MouseEventHandler, useEffect } from 'react';

import styles from './Task.module.css'

import trash from '../../assets/trash.svg'
import TTask from '../../types/TTask';

interface TaskProps {
  task: TTask
  onDeleteTask: (uuid: string) => void
  onFinishTask: (uuid: string) => void
}

const Task: React.FC<TaskProps> = ({ task, onDeleteTask, onFinishTask }) => {

  function handleDeleteTask() {
    onDeleteTask(task.uuid)
  }

  function handleFinishTask() {
    onFinishTask(task.uuid)
  }

  return (
    <div className={styles.container}>
      <input type="checkbox" name="" id="" onChange={handleFinishTask} />

      <p className={task.isFinish ? styles.finish : styles.unfinished}>{task.content}</p>
      <button onClick={handleDeleteTask}>
        <img src={trash} alt="" />
      </button>
    </div>
  )
}

export default Task;