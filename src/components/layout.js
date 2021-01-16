import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, #___gatsby, #gatsby-focus-wrapper {
    padding: 0;
    margin: 0;
    height: 100%;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Layout.Root>
      <GlobalStyle />
      <Layout.Main>{children}</Layout.Main>
      <Layout.Footer>
        <p>Made by <a href="https://bomani.rip/">Bomani Oseni McClendon</a></p>
      </Layout.Footer>
    </Layout.Root>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.Root = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

Layout.Main = styled.main`
  flex: 1;
`;

Layout.Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #444444;
  opacity: 0.5;
  font-style: italic;
  
  a {
    text-decoration: none;
    color: #444444;
  }

  a:hover {
    text-decoration: underline;
  }
`;


export default Layout;
