import React from 'react'
import SkillTitle from './SkillTitle'
import { projects } from '../data'
import Project from './Project'

const ProjectList = () => {
  return (
    <section className="py-20 align-element" id="projects">
      <SkillTitle title="Web creation" />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((item) => {
          return <Project key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default ProjectList
