import React from "react"
import MDXprovider from "@mdx-js/react"
import styled from "styled-components"

import A from "./elements/a"

const Post = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
)
