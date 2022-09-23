import React from 'react';
import '../../styles/MediaCard.css';
import Star from './Star';
import { MdPinDrop } from 'react-icons/md';
import { FaRegFileCode } from 'react-icons/fa';

function MediaCard(props) {
    return (
        <div className="content-box media-box" style={{backgroundImage: "url(" + props.imgName + ")", color: props.theme==="dark" ? "#EEE" : "#111"}}>
            <div className="media-column">
                {props.date
                    ? <p>{props.date}</p>
                    : null
                }
                <span className="content-row">{props.star ? <Star fill={props.star} /> : null}<p><strong>{props.title}</strong></p></span>
                <p><em>{props.subtitle}</em></p>
                {props.location
                    ? <span className="content-row"><MdPinDrop title="pin" size={15} /><p>{props.location}</p></span>
                    : null
                }
                {typeof props.language === "object"
                    ? props.language.map((lang,i) => <span className="content-row" key={i}><FaRegFileCode title="languages" size={15} /><p>{lang}</p></span>)
                    : typeof props.language === "string"
                        ? <span className="content-row"><FaRegFileCode title="languages" size={15} /><p>{props.language}</p></span>
                        : null
                }
                {props.link
                    ? <p>See more <a style={{color: props.theme==="dark" ? "#EEE" : "#111"}} href={props.link} target="_blank" rel="noopener noreferrer">here</a></p>
                    : null
                }
                {props.visit
                    ? <p>Visit the app <a style={{color: props.theme==="dark" ? "#EEE" : "#111"}} href={props.link} target="_blank" rel="noopener noreferrer">here</a></p>
                    : null
                }
            </div>
        </div>
    )
}

export default MediaCard;
