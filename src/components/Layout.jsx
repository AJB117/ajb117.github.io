import React from "react"
import TopBar from "./TopBar"

const Layout = ({ children, inBlogPost }) => (
  <div>
    <TopBar inBlogPost={inBlogPost} />
    {children}
  </div>
)
export default Layout
