import React from 'react'
import aboutImg from '../assets/about.svg'
import SkillTitle from './SkillTitle'

const About = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutImg} className="w-full h-64" />
        <article>
          <SkillTitle title="Code and coffee" />
          <p className="mt-8 text-slate-600 leading-loose">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            maiores itaque doloribus asperiores dolorum quas voluptates
            distinctio, porro beatae quam provident libero animi totam,
            praesentium voluptatem corrupti dignissimos ipsum accusantium!
          </p>
        </article>
      </div>
    </section>
  )
}

export default About
