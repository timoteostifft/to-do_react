import React from 'react';
import TTask from '../../types/TTask';

import styles from './TasksHeader.module.css'

interface TasksheaderProps {
  tasks: TTask[]
}

const TasksHeader: React.FC<TasksheaderProps> = ({ tasks }) => {

  const finishedTasks = tasks.filter(task => {
    return task.isFinish === true
  })

  return (
    <header className={styles.header}>
      <div>
        <strong>
          Tarefas Criadas
        </strong>
        <section>
          {tasks.length}
        </section>
      </div>
      <div>
        <strong>
          Concluídas
        </strong>
        <section>
          {tasks.length === 0 ? '0' : `${finishedTasks.length} de ${tasks.length}`}
        </section>
      </div>
    </header>
  )
}

export default TasksHeader;