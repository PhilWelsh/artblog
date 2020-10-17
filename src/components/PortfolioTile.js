import React from "react"
import styled from "styled-components"

const PortfolioTile = (link, imgUrl, imgUrl2) => {
  const WebTile = styled.a`
    background: url(${imgUrl});

    &:hover {
      background: url(${imgUrl2});
    }
  `

  return <WebTile href={link}></WebTile>
}

export default PortfolioTile
