import React from "react"
import { graphql } from "gatsby"
import { Spring } from "react-spring/renderprops"
import VisibilitySensor from "react-visibility-sensor"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "rc-calendar/assets/index.css"

const IndexPage = ({ data }) => {
  // const blogTitle = data.nlogPosts.title;
  return (
    <Layout>
      <SEO title="Home" />
      <section className="hero-section">
        <div className="container">
          <div className="hero">
            <div>
              <h1>Phil Welsh</h1>
              <br />
              <p>
                I’m a web designer and developer from the UK. I studied Creative
                Digital Media at Teesside University. <br />
                <br /> I work in UX, graphic &amp; web design, and web
                development.
              </p>
            </div>
            <div className="list">
              <ul>
                <li>
                  <a href="#">dailies</a>
                </li>
                <li>
                  <a href="#">portfolio</a>
                </li>
                {/* <li>
                  <a href="#">blog</a>
                </li> */}
                <li>
                  <a href="#">contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section-first">
        <div className="index-paragraph-container">
          <div className="index-paragraph-section">
            <div className="container">
              <div className="index-paragraph-text">
                <VisibilitySensor>
                  {({ isVisible }) => (
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
                          <h1>Cool Designs</h1>
                          <br />
                          <p>
                            Utilizing a background in Creative Media and years
                            of experience in graphic and web design.
                            <br />
                            Using Skills in Design, image editing, animation and
                            3d softwares.
                          </p>
                        </div>
                      )}
                    </Spring>
                  )}
                </VisibilitySensor>
              </div>
            </div>
          </div>
          <div className="index-paragraph-section">
            <div className="container">
              <div className="index-paragraph-text">
                <VisibilitySensor>
                  {({ isVisible }) => (
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
                          <h1>Intelligent UX</h1>
                          <p>
                            <br />
                            Designing for the User in mind, AODA compliant.
                            <br />
                            Using good fundamentals, Google Analytics and A/B
                            testing to test and improve effectiveness
                          </p>
                        </div>
                      )}
                    </Spring>
                  )}
                </VisibilitySensor>
              </div>
            </div>
          </div>
          <div className="index-paragraph-section">
            <div className="container">
              <div className="index-paragraph-text">
                <VisibilitySensor>
                  {({ isVisible }) => (
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
                          <h1>Efficient Code</h1>
                          <br />
                          <p>
                            With 3+ Years experience working in development
                            agencies, as an in-house developer for small and
                            large scale international teams and contract work.
                            <br />
                            Experience in the usual + React. Various CMS and
                            JAMstack technologies.
                          </p>{" "}
                        </div>
                      )}
                    </Spring>
                  )}
                </VisibilitySensor>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-second">
        <div className="index-paragraph-section">
          <div className="container">
            <h2>Dailies</h2>
            <p>daily workload, be it animation, programming or anything else</p>
            <div class="gallery"></div>
          </div>
        </div>
        <div className="index-paragraph-section" style={{ marginTop: 0 }}>
          <div className="container">
            <h2>Portfolio</h2>
            <p>
              Best or most relevant work created for clients or as a personal
              project
            </p>
            <div></div>
          </div>
        </div>
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
