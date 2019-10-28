import React from "react"
import findingStyles from "../styles/findings.module.css"

const Findings = () => {
  return (
    <div class={findingStyles.reads}>
      <ul>
        <li>The less Wrong</li>
        <li>Hypercritical blog</li>
        <li>Onion news</li>
        <li>Ribbonfarm blog</li>
      </ul>
    </div>
  )
}

export default Findings
