import {extendTheme} from "@chakra-ui/react"

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
}
const fonts = {
  body: `"open sans","sans serif"`,
  heading: "open sans",
}
const theme = extendTheme({config, fonts})

export default theme
