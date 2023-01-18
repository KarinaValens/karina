import Image from 'next/image'
import React from 'react'

export default function SkillsIcons() {
  return (
    <section id="skills-section">
    <h2 className='sub-title'>Skills</h2>
    <div id="skills-list">
       <div className='icon-container'><Image width="40" height="40" className="icon" src={"/media/icons/html.png"} alt="icons"  sizes="(max-width: 700px) 100vw, 700px"/> </div>
       <div className='icon-container'><Image width="40" height="40" className="icon" src={"/media/icons/css.png"} alt="icons" sizes="(max-width: 700px) 100vw, 700px"/> </div>
       <div className='icon-container'><Image width="40" height="40" className="icon" src={"/media/icons/js.png"} alt="icons" sizes="(max-width: 700px) 100vw, 700px"/> </div>
       <div className='icon-container'><Image width="40" height="40" className="icon" src={"/media/icons/nodejs.png"} alt="icons" sizes="(max-width: 700px) 100vw, 700px"/> </div>
       <div className='icon-container'><Image width="40" height="40" className="icon" src={"/media/icons/github.png"} alt="icons" sizes="(max-width: 700px) 100vw, 700px"/> </div>
       <div className='icon-container'><Image width="40" height="40" className="icon" src={"/media/icons/software.png"} alt="icons" sizes="(max-width: 700px) 100vw, 700px"/> </div>
       <div className='icon-container'><Image width="40" height="40" className="icon" src={"/media/icons/database.png"} alt="icons" sizes="(max-width: 700px) 100vw, 700px"/> </div>
       <div className='icon-container'><Image width="40" height="40" className="icon" src={"/media/icons/phone.png"} alt="icons" sizes="(max-width: 700px) 100vw, 700px"/> </div>
       <div className='icon-container'><Image width="40" height="40" className="icon" src={"/media/icons/website.png"} alt="icons" sizes="(max-width: 700px) 100vw, 700px"/> </div>
    </div>
</section>
  )
}

