import React from "react"
import "../styles/home.css"
import "../styles/global.css"

const Href = ({ href, children }) => (
  <a href={href} target="_blank" rel="noreferrer">
    {children}
  </a>
)

export default Href
