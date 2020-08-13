import React from 'react'

import tw, { styled } from "twin.macro"

const Button = styled.button`
  ${tw`bg-black  hover:bg-white text-white hover:text-black px-4 py-2 rounded shadow-xl `}
`
const ProjectDiv = styled.div`
  ${tw`border-4 border-black p-2`}
`
const ButtonDiv = styled.div`
  ${tw`self-center p-2 space-x-4 flex justify-center`}
`
const ProjectsPage = () => {
  return (
    <section tw="p-2 border-4 border-black">
      <h1>Projects</h1>
      <div tw="flex space-x-2">
        <ProjectDiv>
          <h2>to-do application</h2>
          <p>
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
            perspiciatis{" "}
          </p>
          <ButtonDiv>
            <Button>Live</Button>
            <Button>Code</Button>
          </ButtonDiv>
        </ProjectDiv>
        <ProjectDiv>
          <h2>twilio project</h2>
          <p>
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
            perspiciatis{" "}
          </p>
          <ButtonDiv>
            <Button>Live</Button>
            <Button>Code</Button>
          </ButtonDiv>
        </ProjectDiv>
        <ProjectDiv>
          <h2>to-do application</h2>
          <p>
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
            perspiciatis{" "}
          </p>
          <ButtonDiv>
            <Button>Live</Button>
            <Button>Code</Button>
          </ButtonDiv>
        </ProjectDiv>
      </div>
      <div tw="flex justify-center pt-3">
        <Button>More Projects</Button>
      </div>
    </section>
  )
}

export default ProjectsPage
