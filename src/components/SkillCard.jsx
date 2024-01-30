import React from 'react'

const SkillCard = ({ title, icon, text }) => {
  return (
    <article>
      {icon}
      <h3 className="mt-6 font-bold capitalize">{title}</h3>
      <p className="mt-2 text-slate-500">{text}</p>
    </article>
  )
}

export default SkillCard
