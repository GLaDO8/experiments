import React from "react"
import Social from "../components/social"
import footerStyles from "./footer.module.css"

const footer = () => (
  <div class={footerStyles.footer_box}>
    <div>
      <p class={footerStyles.footer_title}>GET IN TOUCH</p>
      <p class={footerStyles.footer_content}>
        I’m actively looking for exciting opportunities! If you like my work, we
        can chat over Coffee/Beer/Literally anything in Bangalore!
      </p>
      <div class={footerStyles.mail_box}>
        <a
          href="mailto:shreyas.charming@gmail.com?Subject=Hey%20there!"
          target="_top"
          class={footerStyles.mail_link}
        >
          shreyas.charming@gmail.com
        </a>
      </div>

      <div class={footerStyles.footer_links}>
        <Social />
      </div>
    </div>
    <div>
      <p class={footerStyles.shoutout}>
        Handmade with love using{" "}
        <span>
          <a
            href="https://www.sketch.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sketch
          </a>
        </span>
        ,{" "}
        <span>
          <a
            href="https://www.gatsbyjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby
          </a>
        </span>{" "}
        and{" "}
        <span>
          <a
            href="https://pages.github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github pages
          </a>
        </span>
        . View Github project{" "}
        <a
          href="https://github.com/GLaDO8/GLaDO8.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>
    </div>
  </div>
)
export default footer
