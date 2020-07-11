import React from "react"
import { css } from "@emotion/core"
import Layout from "../components/layout"

export default function Home() {
  return (
    // <Layout>
    //   <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
    //   <p>
    //     What do I like to do? Lots of course but definitely enjoy building
    //     websites.
    //   </p>
    // </Layout>

    <Layout>
      <h1
        css={css`
          text-align: center;
          margin-top: 5rem;
        `}
      >
        CSS ART
      </h1>
      {/* <div>
        <img
          src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
          alt="Group of pandas eating bamboo"
        />
      </div> */}
    </Layout>
  )
}
