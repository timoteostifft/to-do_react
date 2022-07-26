import React from 'react';

import styles from './InputBar.module.css'

import add from '../../assets/add.svg'

const SearchBar: React.FC = () => {
  return (
    <div className={styles.container}>
      <input type="text" placeholder='Adicione uma nova tarefa' />
      <button>
        Criar
        <img src={add} alt="add todo" />
      </button>
    </div>
  )
}

export default SearchBar;