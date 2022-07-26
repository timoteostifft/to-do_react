import React, { ChangeEvent, ChangeEventHandler, FormEvent, MouseEventHandler, useState } from 'react';

import styles from './InputBar.module.css'

import add from '../../assets/add.svg'

interface InputBarProps {
  handleNewTaskChange: ChangeEventHandler<HTMLInputElement>;
  handleCreateNewTask: MouseEventHandler<HTMLButtonElement>;
  content: string;
}

const SearchBar: React.FC<InputBarProps> = ({ handleNewTaskChange, handleCreateNewTask, content }) => {

  return (
    <div className={styles.container}>
      <input type="text" placeholder={'Adicione uma nova tarefa'} onChange={handleNewTaskChange} value={content} />
      <button onClick={handleCreateNewTask}>
        Criar
        <img src={add} alt="add todo" />
      </button>
    </div>
  )
}

export default SearchBar;