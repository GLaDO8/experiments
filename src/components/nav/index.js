import React from "react";
import { Link } from "gatsby";
import navStyles from './nav.module.css';

// export default (props) => (
  
// )

const Nav = () => (
  <nav>
    <div className = {navStyles.topbar}>
      <ul>
        <li>
          <Link className={navStyles.nav__item_link} to='/Portfolio'>Portfolio</Link>
        </li>
        <li>
          <Link className={navStyles.nav__item_link} to='/About Me'>About Me</Link>
        </li>
        <li>
          <Link className={navStyles.nav__item_link} to='/Blog'>Blog</Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Nav;






















// import Img from 'gatsby-image'
// import BackgroundImage from 'gatsby-background-image'


// export default (props) => (
//   <div>
//     <div>
//     <Img fluid={props.data.imageOne.childImageSharp.fluid} />
//       <ul>
//         <headerLink to = "/">Designer</headerLink>
//         <headerLink to = "/">Developer</headerLink>
//         <headerLink to = "/">Blog</headerLink>
//       </ul>
//     </div>
//     <div>
//       <Header_quicklink headerText = "About"/>
//       <p>yolo</p>
//     </div>
//   </div> 
// )
//relativePath is relative to the folder defined in gatsby-config's plugin configuration for gatsby-source-filesystem

// export const pageQuery = graphql`
//   query {
//     imageOne: file(relativePath: { eq: "one.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 1000) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `
