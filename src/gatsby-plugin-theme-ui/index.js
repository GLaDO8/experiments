export default {
  breakpoints: ["40em", "52em", "64em"],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  fonts: {
    body: "IBM Plex Sans, Helvetica, Arial, serif",
    heading: "IBM Plex Sans, Helvetica, Arial, serif",
    monospace: "consola, Helvetica, Arial, serif",
  },
  colors: {
    text: "#000",
    background: "#fff",
  },
  // base theme values...
  styles: {
    // the keys used here reference elements in MDX
    h1: {
      fontFamily: "body",
      marginTop: 0,
      marginBottom: 3,
      color: "text",
    },
    h2: {
      fontFamily: "body",
      fontSize: 26,
      marginTop: 0,
      marginBottom: 0,
      color: "text",
    },
    p: {
      fontFamily: "body",
      fontSize: 18,
      fontWeight: 400,
      letterSpacing: "0.03em",
      color: "text",
    },
    a: {
      fontFamily: "body",
      fontWeight: 400,
      color: "#FF2B79",
    },
    // more styles can be added as needed
  },
}
