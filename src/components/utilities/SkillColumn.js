import React from 'react';
import '../../styles/Skill.css';

function SkillColumn(props) {
    return (
        <div className="content-column">
            <div className="skill-column-title">
                <h3>{props.title}</h3>
            </div>
            {props.children}
        </div>
    )
}

export default SkillColumn;
