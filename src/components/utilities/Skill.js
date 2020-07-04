import React from 'react';
import Star from './Star';

function Skill(props) {
    return (
        <div className="content-box">
            <div className="skill-box">
                <p>{props.name}</p>
                {[...Array(props.stars)].map((e,i) => <Star key={i} fill={1} />)}
                {[...Array(Number(5-props.stars))].map((e,i) => <Star key={5-i} fill={0} />)}
            </div>
        </div>
    )
}

export default Skill;
