import React from 'react';
import HLine from './HLine';
import '../../styles/TitleCard.css';

// ---- PROPS ----
// props.title (req.) = string for header
// props.size (opt.) = integer 0-100 of desired viewport height
// props.subtitle (opt.) = string or array of strings for subtitles

function TitleCard(props) {
    const { Icon } = props;
    return (
        <div className="title-container" style={{minHeight: (props.size || 100) + "vh"}}>
            <div className="title-cell">
                {props.title
                    ? <h1 className="title">{props.title}</h1>
                    : Icon
                        ? <h1 className="title"><Icon /></h1>
                        : null
                }
                <HLine />
                {typeof props.subtitle === "object"
                    ? props.subtitle.map((s,i) => <h2 className="subtitle" key={i}>{s}</h2>)
                    : typeof props.subtitle === "string"
                        ? <h2 className="subtitle">{props.subtitle}</h2>
                        : null
                }
            </div>
        </div>
    )
}

export default TitleCard;
