import React from "react"
import { Link } from 'gatsby';

export default function Home() {
  return (
    <>
      <div>Hello world!</div>
      <Link to={'/blog/first-page'}>First page</Link>
    </>
  )
}
