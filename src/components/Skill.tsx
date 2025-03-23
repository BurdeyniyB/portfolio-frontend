import React from "react";
import indexCSS from "../styles/index.module.css";

type SkillProps = {
    name: string;
    level: number;
}
const Skill: React.FC<SkillProps> = ({ name, level }) => {
    return (
        <div className={indexCSS.Skill}>
            <h4>{name}</h4>
            <div className={indexCSS.SkillBar} data-value={`${level}%`} style={{ "--skill-width": `${level}%` } as React.CSSProperties}></div>
        </div>
    );
}

export default Skill;