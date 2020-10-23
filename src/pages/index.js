import React from "react"
import { graphql } from "gatsby"
// import { useChain, animated } from "react-spring"
import { Spring } from "react-spring/renderprops"
import VisibilitySensor from "react-visibility-sensor"
// import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"
import { FaLinkedinIn, FaCodepen, FaEnvelope, FaFileAlt } from "react-icons/fa"
import PortfolioTile from "../components/PortfolioTile"

import ScrollingBanner from "../components/ScrollingBanner"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "rc-calendar/assets/index.css"

/* TODO darkmode */

const IndexPage = ({ data }) => {
  // const blogTitle = data.nlogPosts.title;
  return (
    <Layout>
      <SEO title="Home" />
      <section className="hero-section" style={{ position: "relative" }}>
        <ScrollingBanner />
        <div className="container">
          <div className="grid-two-col">
            <div>
              <div className="hero-picture"></div>
              {/* TODO hair length subject to change */}
            </div>
            <div className="list">
              <div className="hero-text">
                <h1>Phil Welsh</h1>
                <br />
                <p>
                  Hi. I’m a web designer and developer from the UK. <br />I
                  studied Creative Digital Media at Teesside University. <br />
                  <br /> I work in UX, graphic &amp; web design, and web
                  development.
                </p>
                <a
                  href="https://res.cloudinary.com/philwelsh/image/upload/f_auto,q_auto/philwelsh.com/philwelsh-cv-2020.pdf"
                  download
                  className="link"
                  style={{ borderColor: "white" }}
                >
                  {/* TODO ADD ACCENTS */}
                  See My Resume
                  <FaFileAlt />
                </a>
              </div>
              {/* TODO ADD DAILIES AND PORTFOLIO SECTIONS */}
              {/* <ul>
                <li>
                  <a href="/dailies">dailies</a>
                </li>
                <li>
                  <a href="/portfolio">portfolio</a>
                </li>
                <li>
                  <a href="#contact-section">contact</a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </section>
      <section className="skills-section" id="skills-section">
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <div className="container">
              <div className="grid-two-col">
                <div className="split">
                  <Spring
                    delay={0}
                    to={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                        ? `translateY(0px)`
                        : "translateY(100px)",
                    }}
                  >
                    {({ opacity, transform }) => (
                      <div
                        style={{
                          opacity,
                          transform,
                          transitionDuration: ".3s",
                        }}
                      >
                        <h1>Skills</h1>
                        <p>
                          Starting from an education in design and digital
                          media, and delving deeper into code with each project
                          I now have a wide range of complimentary skills I plan
                          to continue to add to and develop.
                        </p>
                        <hr />
                      </div>
                    )}
                  </Spring>
                </div>
                {/* TODO animate cascade slide in */}
                {/* TODO click on each section */}
                {/* TODO animate bouncing to entice clicking */}
                <div className="split">
                  <div className="strip-gallery">
                    <div>
                      <h2>Adobe</h2>
                      <p>Photoshop, Illustrator, AfterEffects, XD</p>
                    </div>
                    <div>
                      <h2>Code</h2>
                      <p>HTML, CSS, Javascript, ReactJS, Jquery, LESS/SASS</p>
                    </div>
                    <div>
                      <h2>JAM</h2>
                      <p>Gatsby, Netlify, Cloudinary, Contentful</p>
                    </div>
                    <div>
                      <h2>Source Control</h2>
                      <p>Git, Bitbucket, JIRA</p>
                    </div>
                    <div>
                      <h2>3D</h2>
                      <p>Zbrush, 3DSMax</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </VisibilitySensor>
      </section>
      <section className="first-section">
        {/* TODO ADD DAILIES */}
        {/* <VisibilitySensor partialVisibility> 
          {({ isVisible }) => (
            <div className="container">
              <div className="grid-two-col">
                <div className="split">
                  <Spring
                    delay={0}
                    to={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                        ? `translateY(0px)`
                        : "translateY(100px)",
                    }}
                  >
                    {({ opacity, transform }) => (
                      <div
                        style={{
                          opacity,
                          transform,
                          transitionDuration: ".3s",
                        }}
                      >
                        <h1>Dailies</h1>
                        <p>
                          daily progress, achievements and workload, be it
                          animation, programming or anything else
                        </p>
                        <a href="/dailies">Go to /dailies</a>
                      </div>
                    )}
                  </Spring>
                </div>
                <div className="split">
                  <div className="gallery-container">
                    <a href="/portfolio#web" className="gallery-item">
                      <div class="blog-card">
                        <img src="assets/school-toon.PNG" alt="web-portfolio" />
                        <div>
                          <p>web</p>
                        </div>
                      </div>
                    </a>
                    <a href="/portfolio#graphics" className="gallery-item">
                      <div class="blog-card">
                        <img src="assets/school-toon.PNG" alt="web-portfolio" />
                        <div>
                          <p>graphics</p>
                        </div>
                      </div>
                    </a>
                    <a href="/portfolio#other" className="gallery-item">
                      <div class="blog-card">
                        <img src="assets/school-toon.PNG" alt="web-portfolio" />
                        <div>
                          <p>other</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </VisibilitySensor> */}
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <div className="container">
              <div className="grid-two-col">
                <div className="split">
                  <Spring
                    delay={0}
                    to={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                        ? `translateY(0px)`
                        : "translateY(100px)",
                    }}
                  >
                    {({ opacity, transform }) => (
                      <div
                        style={{
                          opacity,
                          transform,
                          transitionDuration: ".3s",
                        }}
                      >
                        <h1>Portfolio</h1>
                        <p>
                          I've been lucky to work with some amazing clients and
                          projects including web design, development, email,
                          graphic design and marketing.
                        </p>
                        {/* TODO CREATE PORTFOLIO PAGE */}
                        {/* TODO animate cascade slide in */}
                        {/* TODO animate bouncing to entice clicking */}
                        {/* <a href="/portfolio">Go to /portfolio</a> */}
                        <hr />
                      </div>
                    )}
                  </Spring>
                </div>

                <div className="split">
                  <div className="change1">
                    <PortfolioTile
                      link={"https://www.netvue.com"}
                      imgUrl={
                        "https://res.cloudinary.com/philwelsh/image/upload/f_auto,q_auto/v1602907393/philwelsh.com/site-images/logo-netvue_jrurlr.jpg"
                      }
                      imgUrl2={
                        "https://res.cloudinary.com/philwelsh/image/upload/f_auto,q_auto/v1602948667/philwelsh.com/site-images/site-netvue_hveip9.jpg"
                      }
                    />
                    <PortfolioTile
                      link={"https://www.controlgap.com"}
                      imgUrl={
                        "https://res.cloudinary.com/philwelsh/image/upload/f_auto,q_auto/v1602907393/philwelsh.com/site-images/logo-controlgap_si3iqj.jpg"
                      }
                      imgUrl2={
                        "https://res.cloudinary.com/philwelsh/image/upload/f_auto,q_auto/v1602948667/philwelsh.com/site-images/site-controlgap_wv0mml.jpg"
                      }
                    />
                    <PortfolioTile
                      link={"https://www.firstliteled.co.uk"}
                      imgUrl={
                        "https://res.cloudinary.com/philwelsh/image/upload/f_auto,q_auto/v1602907393/philwelsh.com/site-images/logo-firstlite_blxixi.jpg"
                      }
                      imgUrl2={
                        "https://res.cloudinary.com/philwelsh/image/upload/f_auto,q_auto/v1602948667/philwelsh.com/site-images/site-firstlite_tgbb71.jpg"
                      }
                    />
                    <PortfolioTile
                      link={"https://www.meccabingo.co.uk"}
                      imgUrl={
                        "https://res.cloudinary.com/philwelsh/image/upload/f_auto,q_auto/v1602907393/philwelsh.com/site-images/logo-mecca_t45t2x.jpg"
                      }
                      imgUrl2={
                        "https://res.cloudinary.com/philwelsh/image/upload/f_auto,q_auto/v1602948667/philwelsh.com/site-images/site-mecca_r102as.jpg"
                      }
                    />
                    <PortfolioTile
                      link={"https://www.lowes.co.uk"}
                      imgUrl={
                        "https://res.cloudinary.com/philwelsh/image/upload/f_auto,q_auto/v1602907393/philwelsh.com/site-images/logo-lowes_siuisv.jpg"
                      }
                      imgUrl2={
                        "https://res.cloudinary.com/philwelsh/image/upload/f_auto,q_auto/v1602948667/philwelsh.com/site-images/site-lowes_cupihi.jpg"
                      }
                    />
                    <PortfolioTile
                      link={"https://www.hadriantechnology.co.uk"}
                      imgUrl={
                        "https://res.cloudinary.com/philwelsh/image/upload/f_auto,q_auto/v1602907393/philwelsh.com/site-images/logo-hadrian_qsgle1.jpg"
                      }
                      imgUrl2={
                        "https://res.cloudinary.com/philwelsh/image/upload/f_auto,q_auto/v1602948667/philwelsh.com/site-images/site-hadrian_twditv.jpg"
                      }
                    />
                  </div>
                  {/* TODO create component for website links */}

                  {/* TODO ADD GALLERY OF GRAPHIC DESIGN */}
                  {/*
                  <div className="gallery-container"> <AwesomeSlider>
                      <div data-src="/static/assets/coinspin-wip-1.jpg" />                      
                      <div data-src="/static/assets/coinspin-wip-2.jpg" />
                      <div data-src="/static/assets/coinspin-wip-3.jpg" />
                    </AwesomeSlider> */}
                  {/* TODO VERSION 2 */}
                  {/* <a href="/portfolio#web" className="gallery-item">
                      <div class="blog-card">
                        <img src="assets/school-toon.PNG" alt="web-portfolio" />
                        <div>
                          <p>web</p>
                        </div>
                      </div>
                    </a>
                    <a href="/portfolio#graphics" className="gallery-item">
                      <div class="blog-card">
                        <img src="assets/school-toon.PNG" alt="web-portfolio" />
                        <div>
                          <p>graphics</p>
                        </div>
                      </div>
                    </a>
                    <a href="/portfolio#other" className="gallery-item">
                      <div class="blog-card">
                        <img src="assets/school-toon.PNG" alt="web-portfolio" />
                        <div>
                          <p>other</p>
                        </div>
                      </div>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          )}
        </VisibilitySensor>
      </section>
      <section className="contact-section" id="contact-section">
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <div className="container">
              <div className="grid-two-col">
                <div className="split">
                  <Spring
                    delay={0}
                    to={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                        ? `translateY(0px)`
                        : "translateY(100px)",
                    }}
                  >
                    {({ opacity, transform }) => (
                      <div
                        style={{
                          opacity,
                          transform,
                          transitionDuration: ".3s",
                        }}
                      >
                        <h1>Contact</h1>
                        <p>
                          Interested in getting in touch or working together?{" "}
                          <br />
                          please contact me or see my work on the following
                          links
                        </p>
                        <hr />
                      </div>
                    )}
                  </Spring>
                </div>
                <div className="split">
                  <a className="link" href="mailto:philwelsh3d@gmail.com">
                    Mail
                    <FaEnvelope />
                  </a>
                  <a
                    className="link"
                    href="https://www.linkedin.com/in/welshphil/"
                  >
                    LinkedIn
                    <FaLinkedinIn />
                  </a>
                  <a className="link" href="https://codepen.io/philwelsh">
                    Codepen
                    <FaCodepen />
                  </a>
                  <a
                    className="link"
                    href="https://res.cloudinary.com/philwelsh/image/upload/f_auto,q_auto/philwelsh.com/philwelsh-cv-2020.pdf"
                    download
                  >
                    {/* TODO ADD ACCENTS */}
                    Resume
                    <FaFileAlt />
                  </a>
                </div>
              </div>
            </div>
          )}
        </VisibilitySensor>
      </section>
    </Layout>
  )
}

export default IndexPage
export const IndexBlogsQuery = graphql`
  query indexBlogs {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`
