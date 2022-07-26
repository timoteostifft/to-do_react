import React from 'react';

import styles from './Task.module.css'

import trash from '../../assets/trash.svg'

const Task: React.FC = () => {
  return (
    <div className={styles.container}>
      <input type="checkbox" name="" id="" />

      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora soluta sunt, repellendus molestias amet consequuntur dicta alias.</p>
      <button>
        <img src={trash} alt="" />
      </button>
    </div>
  )
}

export default Task;