import React from 'react';
import '../../styles/home.css';
import '../../styles/global.css';
import { Link } from 'gatsby';

const Links = () => {
  return (
    <div className="links">
      <a href="../../../static/cv.pdf" download>CV &#8226; </a>
      <Link to="/blog">
        Blog &#8226;
      </Link>
      <a href="https://www.linkedin.com/in/patrick-soga-5b4118166/"> LinkedIn &#8226; </a>
      <a href="https://github.com/AJB117">Github</a>
    </div>
  )
}

export default Links;