import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import styled from "styled-components"; //styled-components are CSS-in-JS style

//CSS-in-JS allows you to put CSS inside your JS file itself, eliminating the confusion caused by CSS selectors. 

const FakeBgImage = styled(Img)`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 
  z-index: -1;
  margin: 0;
  background-size: cover;
  -ms-transform       : rotate(0deg); /* IE 9 */
  -webkit-transform   : rotate(0deg); /* Chrome, Safari, Opera */
  transform           : rotate(0deg);

  background-position: center center;

  & > img {
    background-size: cover;
    object-position: 0% 0% !important;
    font-family: "object-fit: cover !important; object-position: 0% 0% !important;";
  }
  &:after {
      animation: grain 8s steps(10) infinite;
      content: "";
      background-image: url("../images/grain.png");
      height: 300%;
      width: 300%;
      opacity: 0.3;
      position: fixed;   
  }
  @keyframes grain {
    0%, 100% { transform:translate(0, 0) }
    10% { transform:translate(-5%, -10%) }
    20% { transform:translate(-15%, 5%) }
    30% { transform:translate(7%, -25%) }
    40% { transform:translate(-5%, 25%) }
    50% { transform:translate(-15%, 10%) }
    60% { transform:translate(15%, 0%) }
    70% { transform:translate(0%, 15%) }
    80% { transform:translate(3%, 35%) }
    90% { transform:translate(-10%, 10%) }
  }
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
`;

const BgImage = ({
  fluid,
  title,
  height,
  mobileHeight,
  children,
  className
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
);

BgImage.propTypes = {
  fluid: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  title: PropTypes.string.isRequired,
  height: PropTypes.string,
  mobileHeight: PropTypes.string,
  overlayColor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
};
// BgImage.defaultProps = {
//   height: null,
//   mobileHeight: null,
//   overlayColor: "transparent",
//   children: null,
//   className: null
// };

export default BgImage;