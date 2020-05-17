import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import Layout from "../components/layout"
import { graphql } from "gatsby"

import "../styles/contact.css"


const Contact = (props) => (

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
            <div className="contact-page">
                <h1><i>Get In Touch</i></h1>
                <div className="contact">
                    <div className="contact-info">
                        <p className="contact-name"><i>Dynamic Public Affairs</i></p>
                        <br/>
                        <p className="contact-adress">60 Deramore Avenue</p>
                        <p className="contact-adress">Moira</p>
                        <p className="contact-adress">County Down</p>
                        <p className="contact-adress">BT67 0PY</p>
                        <br/>
                        <p>+447700900077</p>
                        <p>enquiries@dynamicni.com</p>
                    </div>
                    <div className="contact-break">
                    </div>
                    <div className="contact-pic">
                        <img src="https://unsplash.it/400/300" />
                    </div>
                </div>

            </div>
            <br/>
        </Layout>    
    </>
)

export default Contact

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