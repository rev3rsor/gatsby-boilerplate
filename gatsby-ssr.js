import React from "react"

import WrapRootElement from "$helpers/WrapRootElement"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([])
}

export const wrapRootElement = WrapRootElement
