import Hero from '@/components/web/Hero'
import React from 'react'
import ProjectsSection from './_componet/ProjectsSection'

const page = () => {
  return (
    <div>
      <Hero vedieoLink="/asset/banner1.mp4" title="Before Biolume: Key Projects" description=""/>
       <ProjectsSection/>
    </div>
  )
}

export default page
