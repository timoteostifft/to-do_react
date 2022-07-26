import React from 'react'

import rocket from '../../assets/rocket.svg'

import styles from './Header.module.css'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img src={rocket} alt="todo Logo" />
      <strong>to</strong>
      <strong>do</strong>
    </header>
  )
}

export default Header