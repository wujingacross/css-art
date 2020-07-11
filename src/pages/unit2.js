import React from "react"
import Layout from "../components/layout"
import styles from "./unit2.module.css"

export default function BeforeAfter() {
  return (
    <Layout>
      <h1>About ::before ::after</h1>
      <p>伪元素是指由css生成的而不是有DOM结构生成的元素.</p>
      <section className={styles.container}>
        <figure className={styles.steamer}>
          <div className={styles.lid}></div>
          <div className={styles.pot}></div>
        </figure>
      </section>
    </Layout>
  )
}
