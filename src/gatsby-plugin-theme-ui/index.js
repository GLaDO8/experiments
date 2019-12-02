export default {
  breakpoints: ["40em", "52em", "64em"],
  fontWeights: {
    body: 300,
    heading: 700,
    bold: 700,
  },
  fonts: {
    body: "body, Helvetica, Arial, serif",
    heading: "Roboto Mono, Helvetica, Arial, serif",
    monospace: "Roboto Mono, Helvetica, Arial, serif",
  },
  colors: {
    text: "#000",
    background: "#fff",
  },
  // base theme values...
  styles: {
    // the keys used here reference elements in MDX
    h1: {
      fontFamily: "heading",
      marginTop: 0,
      marginBottom: 3,
      letterSpacing: "0.01em",
      color: "text",
    },
    h2: {
      fontFamily: "heading",
      fontSize: 26,
      marginTop: 0,
      marginBottom: 0,
      color: "text",
    },
    p: {
      fontFamily: "body",
      fontSize: 17,
      fontWeight: 400,
      letterSpacing: "0.03em",
      color: "text",
      lineHeight: "1.5em",
    },
    a: {
      fontFamily: "body",
      fontWeight: 400,
      color: "#FF2B79",
    },
    // more styles can be added as needed
  },
}
