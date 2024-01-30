import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'

const Project = ({ img, url, github, title, text }) => {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300">
      <img
        src={img}
        alt={title}
        className={'w-full object-cover rounded-t-lg h-64'}
      />
      <div className="p-8">
        <h4 className="font-medium tracking-wide text-xl capitalize py-4">
          {title}
        </h4>
        <p>{text}</p>
        <div className="mt-4 flex gap-x-4">
          <a href={url}>
            <TbWorldWww className=" w-8 h-8 text-slate-500 hover:text-black duration-300" />
          </a>
          <a href={github}>
            <FaGithubSquare className=" w-8 h-8 text-slate-500 hover:text-black duration-300" />
          </a>
        </div>
      </div>
    </article>
  )
}

export default Project
