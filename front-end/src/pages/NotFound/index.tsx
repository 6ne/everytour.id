import React from 'react'
import Button from '../../components/Button'
import Layout from '../../components/Layout'
import styles from './style.module.scss'

export default () => {
  return (
    <Layout direction="column">
      <div className={styles.Title}>Whoops!!</div>
      <div className={styles.Subtitle}>Seems like you're misdirection</div>
      <div className={styles.Image}></div>
      <div className={styles.Sentence}>You get lost in the island!!</div>
      <Button to="/" content="Back Home" fontSize="calc(1em + .5vw)"/>
    </Layout>
  )
}