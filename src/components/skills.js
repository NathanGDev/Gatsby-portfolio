import React from 'react'



import tw, { styled } from "twin.macro"

const Button = styled.button`
  ${tw`bg-black  hover:bg-white text-white hover:text-black px-4 py-2 rounded shadow-xl `}
`
const ProjectDiv = styled.div`
  ${tw`border-4 border-black p-2`}
`
const ButtonDiv = styled.div`
  ${tw`self-center p-2 space-x-2 flex justify-center`}
`
const SkillsPage = () => {
  return (
    <section tw="p-2 border-4 border-black">
      <h1>Skills</h1>
      <div tw="flex space-x-2"></div>
    </section>
  )
}

export default SkillsPage
