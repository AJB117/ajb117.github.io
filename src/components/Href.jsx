import React from "react"
import "../styles/home.css"
import "../styles/global.css"

const Href = ({ href, children, ...props }) => (
  <a href={href} target="_blank" rel="noreferrer" {...props}>
    {children}
  </a>
)

export default Href
