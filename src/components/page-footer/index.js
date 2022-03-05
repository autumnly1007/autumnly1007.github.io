import React from 'react';
import './style.scss';

function PageFooter({ author, githubUrl }) {
  return (
    <footer className="page-footer-wrapper">
      <p className="page-footer">
        © {new Date().getFullYear()}
        &nbsp;
        <a href={githubUrl}>{author}</a>
        {/* &nbsp;powered by
        <a href="https://github.com/zoomKoding/zoomkoding-gatsby-blog">
          &nbsp;zoomkoding-gatsby-blog
        </a> */}
        &nbsp;Powered by&nbsp;
        <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer noopener" aria-label="Gatsby">Gatsby</a>
      </p>
    </footer>
  );
}

export default PageFooter;
