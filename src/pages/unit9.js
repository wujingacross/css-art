import React from "react"
import Layout from "../components/layout"
import styles from "./unit9.module.css"

export default function Transition() {
  return (
    <Layout>
      <h1>About transition</h1>
      <p>
        缓动transition用于在元素从一个状态转换到另一个状态时，增加中间的过渡效果，使视觉效果平滑改变，并起到吸引用户注意力的作用。
        另外，还可以利用缓动令元素从一个图案动态变幻为另一个截然不同的图案
      </p>
      <section className={styles.container}>
        <figure>
          <div className={styles.hov} />
        </figure>
        <figure>
          <div className={styles.battery} />
        </figure>
        <figure className={styles.test3}>
          <div></div>
          <div></div>
          <div></div>
        </figure>
        <figure className={styles.test4}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </figure>
      </section>
    </Layout>
  )
}
