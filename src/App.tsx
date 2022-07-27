import { useState } from "react"

import { v4 as uuidv4 } from 'uuid';

import Header from "./components/Header/Header"
import InputBar from "./components/InputBar/InputBar"
import Task from "./components/Task/Task"
import TasksHeader from "./components/TasksHeader/TasksHeader"

import './global.css'
import styles from './App.module.css'

import clipboard from './assets/clipboard.svg'

import TTask from "./types/TTask"

export function App() {

  const [tasks, setTasks] = useState<TTask[]>([])

  function handleCreateNewTask(newTaskText: string) {
    const newTask: TTask = { content: newTaskText, uuid: uuidv4(), isFinish: false }

    setTasks([newTask, ...tasks])
  }

  function handleDeleteTask(taskToDeleteUuid: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.uuid !== taskToDeleteUuid
    })

    setTasks(tasksWithoutDeletedOne)
  }

  function handleChangeTaskIsFinish(taskToFinishUuid: string) {
    const index = tasks.findIndex(task => {
      return task.uuid === taskToFinishUuid
    })

    if (index || index === 0) {
      const newTask: TTask = {
        content: tasks[index].content,
        uuid: taskToFinishUuid,
        isFinish: !tasks[index].isFinish
      }
      setTasks([...tasks.slice(0, index), newTask, ...tasks.slice(index + 1)])
    }
  }

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <InputBar handleCreateNewTask={handleCreateNewTask} />

        <TasksHeader tasks={tasks} />

        {tasks.length < 1
          ? <div className={styles.empty}>
            <img src={clipboard} alt="todo Logo" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
          : (tasks.map(
            task =>
              <Task
                key={task.uuid}
                task={task}
                onDeleteTask={handleDeleteTask}
                onFinishTask={handleChangeTaskIsFinish}
              />
          ))
        }
      </div>
    </div>
  )
}
