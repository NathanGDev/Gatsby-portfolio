import React from 'react'
import tw, { styled } from "twin.macro"
const FooterSection = ()  => {


  const Footer = styled.footer`${tw`flex justify-center`}`
  return (
    <Footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org"> Gatsby</a>
    </Footer>
  )
}
export default FooterSection
