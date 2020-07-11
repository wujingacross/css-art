import React from "react"
import Layout from "../components/layout"
import "./unit1.css"

export default function BeforeAfter() {
  return (
    <Layout>
      <h1>About base css</h1>
      <p></p>
      <div className="wrapper">
        <figure className="menu">
          <ul>
            <li>
              <a href="file:///Users/wujing/code/demo/h5/css/unit1/css.html#leaf">
                后代选择器
              </a>
            </li>
            <li>
              <a href="file:///Users/wujing/code/demo/h5/css/unit1/css.html#cls">
                伪类选择器
              </a>
            </li>
            <li>
              <a href="file:///Users/wujing/code/demo/h5/css/unit1/css.html#len">
                单位 - 长度
              </a>
            </li>
            <li>
              <a href="file:///Users/wujing/code/demo/h5/css/unit1/css.html#clr">
                单位 - 颜色
              </a>
            </li>
            <li>
              <a href="file:///Users/wujing/code/demo/h5/css/unit1/css.html#rgba">
                单位 - 颜色（透明度）
              </a>
            </li>
            <li>
              <a href="file:///Users/wujing/code/demo/h5/css/unit1/css.html#pst">
                定位
              </a>
            </li>
            <li>
              <a href="file:///Users/wujing/code/demo/h5/css/unit1/css.html#inherit">
                继承
              </a>
            </li>
            <li>
              <a href="file:///Users/wujing/code/demo/h5/css/unit1/css.html#ref-color">
                引用颜色
              </a>
            </li>
            <li>
              <a href="file:///Users/wujing/code/demo/h5/css/unit1/css.html#ref-size">
                引用尺寸
              </a>
            </li>
          </ul>
        </figure>
        <figure className="content">
          <h4 id="leaf">后代选择器</h4>
          <figure className="tree">
            <div className="branch">
              <span className="leaf"></span>
              <span className="leaf"></span>
              <span className="leaf"></span>
            </div>
            <div className="branch">
              <span className="leaf"></span>
              <span className="leaf"></span>
              <span className="leaf"></span>
            </div>
          </figure>

          <h4 id="cls">伪类选择器</h4>
          <figure className="word">
            <div>E</div>
            <div>L</div>
            <div>E</div>
            <div>M</div>
            <div>E</div>
            <div>N</div>
            <div>T</div>
            <div>S</div>
          </figure>

          <h4 id="len">单位 - 长度</h4>
          <figure className="magnifier">
            <div className="lens"></div>
            <div className="handle"></div>
          </figure>

          <h4 id="clr">单位 - 颜色</h4>
          <figure className="seasons">
            <div>spring</div>
            <div>summer</div>
            <div>fall</div>
            <div>winter</div>
          </figure>

          <h4 id="rgba">单位 - 颜色（透明度）</h4>
          <figure className="hashtag">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </figure>

          <h4 id="pst">定位</h4>
          <figure className="man">
            <div className="head"></div>
            <div className="body"></div>
            <div className="feet"></div>
          </figure>

          <h4 id="inherit">继承</h4>
          <figure className="word2">
            <div>c</div>
            <div>s</div>
            <div>s</div>
          </figure>

          <h4 id="ref-color">引用颜色</h4>
          <figure className="container">
            <span></span>
            <span></span>
            <span></span>
          </figure>

          <h4 id="ref-size">引用尺寸</h4>
          <figure className="wordi">
            <div></div>
            <div></div>
          </figure>
        </figure>
      </div>
    </Layout>
  )
}
