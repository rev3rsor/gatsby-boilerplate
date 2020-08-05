import React, { createContext, useEffect, useState } from "react"

const MOBILE_SIZE = 480
const TABLET_SIZE = 960

export const MobileContext = createContext({
  isMobile: "",
  setIsMobile: () => {},
})

const MobileProvider = (props) => {
  const [isMobile, setIsMobile] = useState("")
  const checkIsMobile = () =>
    setIsMobile(
      window.innerWidth <= MOBILE_SIZE || window.innerHeight <= MOBILE_SIZE
        ? "mobile"
        : window.innerWidth <= TABLET_SIZE
        ? "tablet"
        : ""
    )

  useEffect(() => {
    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)
    return () => window.removeEventListener("resize", checkIsMobile)
  })

  return (
    <MobileContext.Provider value={{ isMobile, setIsMobile }}>
      {props.children}
    </MobileContext.Provider>
  )
}

export default MobileProvider
