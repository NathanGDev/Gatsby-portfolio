import React from 'react'
import tw, { styled } from "twin.macro"
import GithubIcon from "../../assets/github-image.svg"
import LinkedinIcon from "../../assets/linkedin.svg"
import MailIcon from "../../assets/email.svg"
import TwitterIcon from "../../assets/twitter.svg"


const ContactPage = () => {
  return (
    <section tw="border-4 border-black row-start-1 row-end-2 col-start-2 col-end-2">
      <div>
        <h1>Contact</h1>
      </div>
      <div tw="flex items-center ">
        <div tw="grid grid-cols-4 grid-flow-col-dense items-center gap-3 h-12">
          <GithubIcon tw="w-20" />
          <LinkedinIcon tw="w-20" />
          <TwitterIcon tw="w-20" />
          <MailIcon tw="w-20" />
        </div>
      </div>
    </section>
  )
}

export default ContactPage
