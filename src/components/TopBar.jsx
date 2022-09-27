import { AppBar, Slide, Toolbar, useScrollTrigger } from '@material-ui/core';
import { Link } from 'gatsby';
import React from 'react';
import '../styles/TopBar.css';

const HideOnScroll = ({children, inBlogPost}) => {
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
    background: '#F5F5F5',
    maxHeight: '50px'
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
              <Link to="/">
                Home
              </Link>
            {/* <h2>
              <Link to="/blog">
                Posts
              </Link>
            </h2> */}
          </div>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  )
}

export default TopBar;