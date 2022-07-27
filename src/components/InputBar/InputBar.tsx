import React, { ChangeEvent, ChangeEventHandler, FormEvent, MouseEventHandler, useEffect, useState } from 'react';

import styles from './InputBar.module.css'

import add from '../../assets/add.svg'

interface InputBarProps {
  handleCreateNewTask: (newTaskText: string) => void;
}

const InputBar: React.FC<InputBarProps> = ({ handleCreateNewTask }) => {

  const [newTaskText, setNewTaskText] = useState<string>('')

  function handleNewTaskTextChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("")
    setNewTaskText(event.target.value)
  }

  function onCreateNewTask() {
    handleCreateNewTask(newTaskText)
    setNewTaskText('')
  }

  return (
    <div className={styles.container}>
      <input type="text" placeholder={'Adicione uma nova tarefa'} onChange={handleNewTaskTextChange} value={newTaskText} />
      <button onClick={onCreateNewTask}>
        Criar
        <img src={add} alt="add todo" />
      </button>
    </div>
  )
}

export default InputBar;