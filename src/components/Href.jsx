import React from "react"
import "../styles/home.css"
import "../styles/global.css"

const Href = ({ href, children, ...props }) => {
  if (!("className" in props)) {
    props.className = "normalLink"
  }
  return (
    <a href={href} target="_blank" rel="noreferrer" {...props}>
      {children}
    </a>
  )
}

export default Href
