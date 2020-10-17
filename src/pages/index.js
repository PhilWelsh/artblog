import React from "react"
import { graphql } from "gatsby"
import { useChain, animated } from "react-spring"
import { Spring } from "react-spring/renderprops"
import VisibilitySensor from "react-visibility-sensor"
import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"
import { FaLinkedinIn, FaCodepen, FaEnvelope, FaFileAlt } from "react-icons/fa"
import PortfolioTile from "../components/PortfolioTile"

import ScrollingBanner from "../components/ScrollingBanner"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "rc-calendar/assets/index.css"

const IndexPage = ({ data }) => {
  // const blogTitle = data.nlogPosts.title;
  return (
    <Layout>
      <SEO title="Home" />
      <section className="hero-section" style={{ position: "relative" }}>
        <ScrollingBanner />
        <div className="container">
          <div className="grid-two-col">
            <div></div>
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
                  href="/philwelsh-resume"
                  className="link"
                  style={{ borderColor: "white" }}
                >
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
        <div className="container">
          <div className="grid-two-col">
            <div className="split">
              <h1>Skills</h1>
              <p>
                Starting from an education in design and digital media, and
                delving deeper into code with each project I now have a wide
                range of complimentary skills I plan to continue to add to and
                develop.
              </p>
            </div>
            <div className="split">
              <div className="strip-gallery">
                <div>
                  <h2>Adobe Suite</h2>
                  <p>Photoshop, Illustrator, AfterEffects, XD</p>
                </div>
                <div>
                  <h2>Coding</h2>
                  <p>HTML, CSS, Javascript, ReactJS, Jquery, LESS/SASS</p>
                </div>
                <div>
                  <h2>JAMStack</h2>
                  <p>Gatsby, Netlify, Cloudinary, Contentful</p>
                </div>
                <div>
                  <h2>Source Control, Management</h2>
                  <p>Git, Bitbucket, JIRA</p>
                </div>
                <div>
                  <h2>3D/Animation</h2>
                  <p>Zbrush, 3DSMax</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                        {/* <a href="/portfolio">Go to /portfolio</a> */}
                        <hr />
                      </div>
                    )}
                  </Spring>
                </div>

                <div className="split">
                  <div className="change1">
                    <PortfolioTile
                      link="https://res.cloudinary.com/philwelsh/image/upload/v1581263269/sample.jpg"
                      imgUrl="https://res.cloudinary.com/philwelsh/image/upload/v1581263269/sample.jpg"
                      imgUrl2="https://res.cloudinary.com/philwelsh/image/upload/v1597780213/projects/coinspin/coinspin-wip-3_llhdoe.jpg"
                    />
                    <a></a>
                    <a></a>
                    <a></a>
                    <a></a>
                    <a></a>
                    <a></a>
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
                  <a className="link" href="/philwelsh-resume">
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
