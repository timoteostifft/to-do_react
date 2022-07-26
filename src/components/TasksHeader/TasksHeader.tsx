import React from 'react';

import styles from './TasksHeader.module.css'

const TasksHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <div>
        <strong>
          Tarefas Criadas
        </strong>
        <section>
          1
        </section>
      </div>
      <div>
        <strong>
          Conclúidas
        </strong>
        <section>
          0
        </section>
      </div>
    </header>
  )
}

export default TasksHeader;