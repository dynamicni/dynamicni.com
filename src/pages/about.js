import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import Layout from "../components/layout"
import { graphql } from "gatsby"

import "../styles/about.css"


const About = (props) => (

    <>
        <Layout>
            <div className="top-band">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <polygon points="0 0, 60 200, 0 100"/>
            </svg>
            <div className="page-logo-letters">
                <Img className="page-logo" fluid={props.data.logo.childImageSharp.fluid} 
                objectFit="contain"
                />
            </div>
            </div>
            <div className="middle-section">
            <div className="text-body">
                <h1><i>Dynamic Public Affairs</i></h1>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <br/>
            <br/>
            <div className="break"></div>
            <br/>
            <br/>
            <div className="sub-heading">
                <h1><i>What We Offer</i></h1>
            </div>
            <br/>
            <div className="showcase">
                <div className="showcase-topic">
                <img src="https://unsplash.it/300/300"/>
                <div className="showcase-blurb">
                    <div className="showcase-title">
                    <h2>Stuff</h2>
                    </div>
                    <div className="showcase-break">
                    </div>
                    <div className="showcase-pitch">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                </div>
                <br/>
                <div className="showcase-topic">
                <img src="https://unsplash.it/300/300"/>
                <div className="showcase-blurb">
                    <div className="showcase-title">
                    <h2>Stuff</h2>
                    </div>
                    <div className="showcase-break">
                    </div>
                    <div className="showcase-pitch">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                </div>
                <br/>
                <div className="showcase-topic">
                <img src="https://unsplash.it/300/300"/>
                <div className="showcase-blurb">
                    <div className="showcase-title">
                    <h2>Stuff</h2>
                    </div>
                    <div className="showcase-break">
                    </div>
                    <div className="showcase-pitch">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                </div>
            </div>
            <br/>
            <br/>
            <div className="break"></div>
            <br/>
            <br/>
            <div className="lower-showcase">
                <div className="lower-blurb">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="lower-picture">
                <img src="https://unsplash.it/300/200"/>
                </div>
            </div>
            </div>
            <br/>
        </Layout>    
    </>
)

export default About

export const  pageQuery = graphql`
    query{
        logo: file(relativePath: {eq: "logo-letters.png"}) {
            childImageSharp {
                fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid_tracedSVG
                }
            
            }
        }
    }
`