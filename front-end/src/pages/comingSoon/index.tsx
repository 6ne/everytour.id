import React from 'react'
import Button from '../../components/Button'
import Layout from '../../components/Layout'
import Style from './style.module.scss'

export default () => {
  return (
    <Layout Col customStyles={Style.Layout}>
      <div className={Style.title}>Do you feel the breeze?</div>
      <div className={Style.image}></div>
      <div className={Style.sentence}>Content coming soon</div>
      <Button To="/destinations" CustomStyle={Style.customButton}>
        Explore more
      </Button>
    </Layout>
  )
}