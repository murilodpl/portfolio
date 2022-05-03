import homeSVG from "../assets/home.svg";
import iconGitHub from "../assets/icon-github.svg"
import iconLinkedin from "../assets/icon-linkedin.svg"

export default function Home() {
    return (
        <div className="h-screen lg:grid grid-cols-2">
            <div className="flex flex-col items-center justify-center">
                <h1>Murilo Leopoldino</h1>
                <p>Front-End Developer | ReactJS Developer</p>
                <div className="flex gap-4 mt-4">
                    <a href="https://github.com/murilodpl" className="iconHover" target="_blank" rel="noopenner" aria-label="Murilo's GitHub"><img src={iconGitHub} width="24px" height="24px" alt="GitHub Icon" /></a>
                    <a href="https://www.linkedin.com/in/murilo-leopoldino" className="iconHover" target="_blank" rel="noopenner" aria-label="Murilo's Linkedin"><img src={iconLinkedin} width="24px" height="24px" alt="Linkedin Icon" /></a>
                </div>
            </div>
            <img className="sectionImage" src={homeSVG} width="384px" height="384px" alt="Profile Details" />
        </div>
    )
}