import aboutmeSVG from "../assets/aboutme.svg";

export default function AboutMe() {
    return (
        <div className="min-h-screen flex flex-col justify-center lg:flex-row lg:grid lg:grid-cols-2" id="aboutme">
            <img className="sectionImage" src={aboutmeSVG} width="384px" height="384px" alt="Profile Details" />

            <div className="flex flex-col justify-center text-center lg:text-left">
                <div>
                    <h2>About Me</h2>
                    <p>Frontend developer, passionate about learning/coding in new programming languages. I have experience in creating and maintaining landing pages, institutional sites, systems and databases.</p>
                </div>

                <div className="my-4">
                    <h3>Knowledge, Skills, and Abilities:</h3>
                    <ul className="lg:list-disc">
                        <li>ReactJS;</li>
                        <li>Git and GitHub;</li>
                        <li>HTML5, CSS3 e Javascript;</li>
                        <li>PHP;</li>
                        <li>MySQL | SQL Server | PostgreSQL;</li>
                        <li>NodeJS;</li>
                        <li>Jest;</li>
                        <li>WordPress;</li>
                        <li>Tailwind CSS.</li>
                    </ul>
                </div>

                <div className="my-4">
                    <h3>Language proficiency:</h3>
                    <ul className="lg:list-disc">
                        <li>Native Portuguese;</li>
                        <li>Intermediate English.</li>
                    </ul>
                </div>

                <div className="mt-4">
                    <h3>Interests and hobbies</h3>
                    <p>I like programming, to play games with my friends and playing guitar. 😎</p>
                </div>
            </div>
        </div>
    )
}