import Header from "./components/Header/Header"
import InputBar from "./components/InputBar/InputBar"
import TasksHeader from "./components/TasksHeader/TasksHeader"

import { v4 as uuidv4 } from 'uuid';

import Task from "./components/Task/Task"

import clipboard from './assets/clipboard.svg'

import styles from './App.module.css'
import './global.css'
import { ChangeEvent, FormEvent, useState } from "react"

export function App() {

  const [tasks, setTasks] = useState<string[]>([])

  const [newTask, setNewTask] = useState('')

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("")
    setNewTask(event.target.value)
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    setTasks([...tasks, newTask])
    setNewTask('')
  }

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <InputBar handleNewTaskChange={handleNewTaskChange} handleCreateNewTask={handleCreateNewTask} content={newTask} />

        <TasksHeader tasks={tasks} />

        {tasks.length < 1
          ? <div className={styles.empty}>
            <img src={clipboard} alt="todo Logo" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
          : (tasks.map(
            task =>
              <Task key={uuidv4()} content={task} />
          ))
        }
      </div>
    </div>
  )
}
