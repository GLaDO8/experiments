import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components" //styled-components are CSS-in-JS style

//CSS-in-JS allows you to put CSS inside your JS file itself, eliminating the confusion caused by CSS selectors.

const FakeBgImage = styled(Img)`
  position: fixed;
  top: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  z-index: 2;
  margin-right: -20px;
`

const Content = styled.div``

const BgImage = ({
  fluid,
  title,
  height,
  mobileHeight,
  children,
  className,
}) => (
  <div>
    <FakeBgImage
      fluid={fluid}
      title={title}
      height={height}
      mobileHeight={mobileHeight}
    />
    <Content className={className}>{children}</Content>
  </div>
)

BgImage.propTypes = {
  fluid: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  title: PropTypes.string.isRequired,
  height: PropTypes.string,
  mobileHeight: PropTypes.string,
  overlayColor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
}

export default BgImage
