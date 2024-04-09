import { FC } from 'react'
import styles from './index.module.scss'

interface Props {
  value?: string
  line?: boolean
}

export const Title: FC<Props> = ({ value = '', line = false }) => {

  return (
    <div className={styles.index}>
      <div className={styles.title}>{value}</div>
      {line && <div className={styles.line}></div>}
    </div>
  )
}
