import { useState } from "react";
import projectsData from "../projects";
import Project from "./Project";

export default function Projects() {
    const [actualProj, setActualProj] = useState(0)

    function handleClick(e: any) {
        const { name } = e.target

        switch (name) {
            case '+':
                setActualProj(prevProj => prevProj + 1)
                break;
            case '-':
                setActualProj(prevProj => prevProj - 1)
                break;

            default:
                break;
        }
    }

    const projElements = projectsData.map((index) => <Project key={index.id} data={index} />)

    return (
        <div className="min-h-screen py-12 lg:py-0 flex flex-col items-center justify-center" id="projects">
            <h2>Projects</h2>

            {projElements[actualProj]}

            <div className="flex gap-4">
                <button className="projectsBtn" type="button" name="-" onClick={handleClick} disabled={actualProj <= 0}>{'<-'}</button>
                <button className="projectsBtn" type="button" name="+" onClick={handleClick} disabled={actualProj >= (projectsData.length - 1)}>{'->'}</button>
            </div>
        </div>
    )
}