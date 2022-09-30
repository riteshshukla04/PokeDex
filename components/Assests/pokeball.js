import * as React from "react"
import Svg, { Path } from "react-native-svg"

const PokeBall = (props) => (
  <Svg
   
    fill="#212121"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M14.857 12a2.857 2.857 0 1 1-5.714 0 2.857 2.857 0 0 1 5.714 0Z"
      fill="#212121"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 24c6.045 0 11.047-4.47 11.878-10.286H16.85a5.145 5.145 0 0 1-9.7 0H.122C.953 19.53 5.955 24 12 24ZM7.15 10.286H.122C.953 4.47 5.955 0 12 0s11.047 4.47 11.878 10.286H16.85a5.145 5.145 0 0 0-9.7 0ZM14.857 12a2.857 2.857 0 1 1-5.714 0 2.857 2.857 0 0 1 5.714 0Z"
      fill="#212121"
    />
  </Svg>
)

export default PokeBall
