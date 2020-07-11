import React from "react"
import Layout from "../components/layout"
import styles from "./unit8.module.css"

export default function BeforeAfter() {
  return (
    <Layout>
      <h1>About transform</h1>
      <p>
        属性transform可以把元素平移、旋转、缩放、扭曲，除平移的效果和定位类似之外，其他效果都是这个属性独有的能力.
      </p>
      <section className={styles.container}>
        <figure className={styles.clock}>
          <div className={`${styles.hand} ${styles.hour}`}></div>
          <div className={`${styles.hand} ${styles.minute}`}></div>
        </figure>
        <div style={{ display: "flex", marginBottom: "1.08em" }}>
          <figure className={styles.lock} />
          <figure className={styles.unlock} />
        </div>
      </section>
    </Layout>
  )
}
