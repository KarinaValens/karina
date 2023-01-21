import Image from 'next/image'
import React from 'react'

export default function SkillsIcons() {
  return (
    <section id="skills-section">
    <h2 className='sub-title'>Skills</h2>
    <div id="skills-list" className='flex'>
       <div className='icon-container flex'><Image width="60" height="60" className="icon" src={"/media/icons/html.png"} alt="icons"  sizes="(max-width: 700px) 100vw, 700px"/> </div>
       <div className='icon-container flex'><Image width="60" height="60" className="icon" src={"/media/icons/css.png"} alt="icons" sizes="(max-width: 700px) 100vw, 700px"/> </div>
       <div className='icon-container flex'><Image width="60" height="60" className="icon" src={"/media/icons/js.png"} alt="icons" sizes="(max-width: 700px) 100vw, 700px"/> </div>
       <div className='icon-container flex'><Image width="60" height="60" className="icon" src={"/media/icons/react.png"} alt="icons" sizes="(max-width: 700px) 100vw, 700px"/> </div>
       <div className='icon-container flex'><Image width="60" height="60" className="icon" src={"/media/icons/software.png"} alt="icons" sizes="(max-width: 700px) 100vw, 700px"/> </div>
       <div className='icon-container flex'><Image width="60" height="60" className="icon" src={"/media/icons/database.png"} alt="icons" sizes="(max-width: 700px) 100vw, 700px"/> </div>
       <div className='icon-container flex'><Image width="60" height="60" className="icon" src={"/media/icons/api.png"} alt="icons" sizes="(max-width: 700px) 100vw, 700px"/> </div>
       <div className='icon-container flex'><Image width="60" height="60" className="icon" src={"/media/icons/command_line.png"} alt="icons" sizes="(max-width: 700px) 100vw, 700px"/> </div>
       <div className='icon-container flex'><Image width="60" height="60" className="icon" src={"/media/icons/website.png"} alt="icons" sizes="(max-width: 700px) 100vw, 700px"/> </div>
       <div className='icon-container flex'><Image width="60" height="60" className="icon" src={"/media/icons/github.png"} alt="icons" sizes="(max-width: 700px) 100vw, 700px"/> </div>
       <div className='icon-container flex'><Image width="60" height="60" className="icon" src={"/media/icons/deployment.png"} alt="icons" sizes="(max-width: 700px) 100vw, 700px"/> </div>
       <div className='icon-container flex'><Image width="60" height="60" className="icon" src={"/media/icons/nodejs.png"} alt="icons" sizes="(max-width: 700px) 100vw, 700px"/> </div>
    </div>
    <div className='flex-column'>
       <a className='credits' href="https://www.flaticon.com/free-icons/color-palette" title="color palette icons"> icons created by Muhammad Ali </a>
       <a className='credits' href="https://www.flaticon.com/free-icons/react" title="react icons">React icon created by Dreamstale - Flaticon </a>
    </div>
</section>
  )
}

