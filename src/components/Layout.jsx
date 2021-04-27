import React from 'react';
import TopBar from './TopBar';

const Layout = ({ children, inBlogPost }) => {

  return (
    <div>
      {/* <topBarCtx.Provider value={value}> */}
        {/* <TopBar inBlogPost={inBlogPost}/> */}
        <TopBar/>
        {children}
      {/* </topBarCtx.Provider> */}
    </div>
  )
}
export default Layout;