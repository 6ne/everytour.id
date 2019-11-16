import React from 'react'
import Button from '../../components/Button'
import Layout from '../../components/Layout'
import Style from './style.module.scss'

export default () => {
  return (
    <Layout Col>
      <div className={Style.title}>Whoops!!</div>
      <div className={Style.subtitle}>Seems like you're misdirection</div>
      <div className={Style.image}></div>
      <div className={Style.sentence}>You get lost in the island!!</div>
      <Button To="/" CustomStyle={Style.customButton}>
        Go Home
      </Button>
    </Layout>
  )
}