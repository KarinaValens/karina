import Image from 'next/image'


export default function Footer() {
  return (
    <div> 
        <Image  width={10} height={10}  src={'/media/images/logo.png'} alt="logo" sizes="(max-width: 700px) 100vw, 700px"/>
    <div id="icons-footer-container">
        <a href="https://github.com/KarinaValens">
            <Image width={10} height={10} src={'/media/icons/github_white.png'} alt="github link" sizes="(max-width: 700px) 100vw, 700px"/>
        </a>
        <a href="https://www.linkedin.com/in/karinavalenswebdeveloper/">
            <Image width={10} height={10} src={'/media/icons/linkedin.png'} alt="linkeding" sizes="(max-width: 700px) 100vw, 700px"/>
        </a>
    </div>
    </div>
  )
}

