import classNames from 'classnames'

import styles from './layout.module.scss'

import Header from 'component/Header'

export function Layout({
  children,
  className,
  ...rest
}: React.ComponentPropsWithRef<'div'>): JSX.Element {
  return (
    <div className={styles.root}>
      <Header />
      <main className={classNames(styles.main, className)} {...rest}>
        {children}
      </main>
    </div>
  )
}
export default Layout
