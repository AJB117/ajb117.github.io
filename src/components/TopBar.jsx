import { AppBar, Slide, Toolbar, useScrollTrigger } from '@material-ui/core';
import { Link } from 'gatsby';
import React from 'react';
import '../styles/TopBar.css'

const HideOnScroll = ({children, inBlogPost}) => {
  // const { children } = props;
  const trigger = useScrollTrigger();
  return (
      inBlogPost ? 
        <Slide
          appear={false}
          direction="down"
          in={!trigger}
        >
          {children}
        </Slide>
      : <div>
          {children}
        </div>
  )
}

const TopBar = ({ inBlogPost }) => {
  const AppBarStyle = {
    // background: '#d32f2f',
    background: '#F5F5F5'
  };
  return (
    <HideOnScroll
      inBlogPost={inBlogPost}
    >
      <AppBar
        style={AppBarStyle}
      >
        <Toolbar
          variant="dense"
        >
          <div className="text">
            <h2>
              <Link to="/">
                Home
              </Link>
            </h2>
            <h2>
              <Link to="/blog">
                Blog
              </Link>
            </h2>
            <h2>
              <Link to="/contact">
                Contact
              </Link>
            </h2>
          </div>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  )
}

export default TopBar;