import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import Layout from "../components/layout"
import { graphql } from "gatsby"

import "../styles/people.css"


const People = (props) => (

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
            <div className="page">
            <div className="title">
                <h1><i>Our Team</i></h1>
            </div>
            <div className="profile">
                <div className="profile-picture">
                <div className="picture">
                    <img src="https://unsplash.it/200/300" />
                </div>
                <div cclassName="name">
                    <p className="mobile-name key-name"><i>Neil Johnston</i></p>
                    <p className="mobile-name"><i>Founder & Chief Visionary</i></p>
                </div>
                </div>
                <div className="profile-blurb">
                <p className="desktop-name key-name"><i>Neil Johnston</i></p>
                <p className="desktop-name"><i>Founder & Chief Visionary</i></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <br/>
            <br/>
            <div className="people-break"></div>
            <br/>
            <br/>
            <div className="middle-profile">
                <div className="profile-picture">
                <div className="picture">
                    <img src="https://unsplash.it/200/300" />
                </div>
                <div className="name">
                    <p className="mobile-name key-name"><i>Red Shirt</i></p>
                    <p className="mobile-name"><i>Professional Patsy</i></p>
                </div>
                </div>
                <div className="profile-blurb">
                <p className="desktop-name key-name"><i>Red Shirt</i></p>
                <p className="desktop-name"><i>Professional Patsy</i></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <br/>
            <br/>
            <div className="break"></div>
            <br/>
            <br/>
            <div className="profile">
                <div className="profile-picture">
                <div className="picture">
                    <img src="https://unsplash.it/200/300" />
                </div>
                <div className="name">
                    <p className="mobile-name key-name"><i>Aaron Rankin</i></p>
                    <p className="mobile-name"><i>Only Here To Make Up The Numbers</i></p>
                </div>
                </div>
                <div className="profile-blurb">
                <p className="desktop-name key-name"><i>Aaron Rankin</i></p>
                <p className="desktop-name"><i>Only Here To Make Up The Numbers</i></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            </div>
            <br/>
        </Layout>    
    </>
)

export default People

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