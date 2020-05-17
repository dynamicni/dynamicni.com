import { Link } from "gatsby"
import React from "react"
import { TiArrowRight } from "react-icons/ti"


import "../styles/front-header.css"

const FrontHeader = () => (
  <>
    <header className="front-header">
    <div className="spacer">
  
    </div>
    <div className="enter-btn">
      <span className="btn-wrapper">
        <Link className="enter-link" to="/about">
          <span className="btn-text">Explore</span>
          <div className="enter-icon">
            <TiArrowRight value={{ style: { verticalAlign: 'middle', width: "100%" } }} />
          </div>
        </Link>
      </span>
    </div>
    </header>
  </>
)

export default FrontHeader
