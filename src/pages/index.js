import React from "react"
import { Link } from "gatsby"

import ProjectSection from "../components/projects"
import ContactSection from "../components/contact"
import AboutSection from "../components/about"
import SkillsSection from "../components/skills"
import FooterSection from "../components/footer"
import SEO from "../components/seo"

import tw, { styled } from "twin.macro"


const Button = styled.button`
  ${tw`bg-blue-500 hover:bg-blue-800 text-white p-2 rounded`}
`

// const ProjectSection = Projects`${tw`bg-blue-500`}`

const IndexPage = () => (
  <main tw="h-screen">
    <header tw="flex justify-start fixed top-0 bg-white w-full h-12">
      <div tw="pl-5 flex flex-grow">
        <h1 tw="text-4xl">Nathan</h1>
      </div>
    </header>
    <div tw="grid grid-cols-2 gap-1 p-2 mt-12">
      <SEO title="Home" />
      <ProjectSection />
      <SkillsSection />
      <ContactSection />
      <AboutSection />
    </div>
    <FooterSection />
  </main>
)

export default IndexPage
