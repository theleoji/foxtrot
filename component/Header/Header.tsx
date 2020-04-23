import { Fragment } from 'react'

import styles from './header.module.scss'

export function Header() {
  return (
    <Fragment>
      <h1 className={styles.title}>Leo Ji</h1>
      <h2>software engineer and news nerd</h2>
    </Fragment>
  )
}

export default Header
