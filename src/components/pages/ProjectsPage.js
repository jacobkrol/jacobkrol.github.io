import React from 'react';
import '../../styles/ProjectsPage.css';

// import Backdrop from '../utilities/Backdrop';
import TitleCard from '../utilities/TitleCard';
import CanvasBG from '../utilities/CanvasBG';
import ContentBlock from '../utilities/ContentBlock';
import MediaCard from '../utilities/MediaCard';
import Star from '../utilities/Star';

import MazeGenerator from '../../graphics/maze-generator.gif';
import CircleGrowth from '../../graphics/circle-growth.gif';
import DynamicBallPit from '../../graphics/dynamic-ball-pit.gif';
import Asteroids from '../../graphics/asteroids.gif';
import Snake from '../../graphics/snake.gif';
import Smove from '../../graphics/smove.gif';
import LPTimer from '../../graphics/lp-timer.png';
import Scoreboard from '../../graphics/scoreboard.png';
import SplitTheBill from  '../../graphics/split-the-bill.png';
import Chicago from '../../graphics/chicago-uic-small-2.png';
import AptManager from '../../graphics/zoommates.png';
import FrenchClub from '../../graphics/french-club-example.png';
import Efficiency from '../../graphics/disk-packing.gif';
import Waves from '../../graphics/waves-example.gif';
import Trifolium from '../../graphics/trifolium-mechanism.gif';
import Collatz from '../../graphics/collatz-tree.gif';

function ProjectsPage() {
    return (
        <div id="projects">
            <CanvasBG />
            <TitleCard title="Projects" subtitle="Check out some cool things I've been working on" size={66} />

                <div id="legend-row" className="content-row">
                    <div className="content-row">
                        <div className="content-row">
                            <Star fill={2} />
                            <p>Deprecated</p>
                        </div>
                        <div className="content-row">
                            <Star fill={3} />
                            <p>In Progress</p>
                        </div>
                    </div>
                    <div className="content-row">
                        <div className="content-row">
                            <Star fill={4} />
                            <p>Completed</p>
                        </div>
                        <div className="content-row">
                            <Star fill={5} />
                            <p>Maintained</p>
                        </div>
                    </div>
                </div>

            <div className="content-row content-block-container">
                <ContentBlock title="utilities." bg={3} size="medium">
                    <div className="content-row">
                        <MediaCard title="LP Timer" star={5} subtitle="A simple timer application with time signals to help the forensics community" language="ReactJS, Node.js, Express" imgName={LPTimer} link="https://jacobkrol.github.io/LP-Timer" />
                        <MediaCard title="Scoreboard" star={5} subtitle="Scoreboard interface for personal game nights" language="JavaScript, HTML5, CSS" imgName={Scoreboard} link="https://github.com/jacobkrol/Scoreboard" />
                        <MediaCard title="Split The Bill" star={4} subtitle="Need to split a bill proportional to everyone's costs? This is the solution!" language="JavaScript, HTML5, CSS" imgName={SplitTheBill} link="https://github.com/jacobkrol/splitthebill" />
                    </div>
                </ContentBlock>
                <ContentBlock title="games." bg={1} size="medium">
                    <div className="content-row">
                        <MediaCard title="Asteroids" theme="dark" star={4} subtitle="Play the classic arcade game Asteroids!" language="JavaScript" imgName={Asteroids} link="https://github.com/jacobkrol/Asteroids" />
                        <MediaCard title="Snake" star={4} subtitle="Play the classic game Snake" language="JavaScript" imgName={Snake} link="https://github.com/jacobkrol/Snake" />
                        <MediaCard title="Smove" star={4} subtitle="Navigate the incoming enemies to collect gold" language="JavaScript" imgName={Smove} link="https://github.com/jacobkrol/Smove" />
                    </div>
                </ContentBlock>
                <ContentBlock title="wallpapers." bg={0} size="medium">
                    <div className="content-row">
                        <MediaCard title="Mazes" star={4} subtitle="A variety of work with JavaScript canvas programs in relation to mazes" language="JavaScript" imgName={MazeGenerator} link="https://github.com/jacobkrol/Mazes" />
                        <MediaCard title="Circle Growth" star={4} subtitle="Screensaver design of colorful circle growth" language="JavaScript" imgName={CircleGrowth} link="https://github.com/jacobkrol/Circle-Growth" />
                        <MediaCard title="Dynamic Ball Pit" star={4} subtitle="A basic JavaScript program with interactive dots" language="JavaScript" imgName={DynamicBallPit} link="https://github.com/jacobkrol/Dynamic-Ball-Pit" />
                    </div>
                </ContentBlock>
                <ContentBlock title="websites." bg={2} size="medium">
                    <div className="content-row">
                        <MediaCard title="Jacob's Homepage" star={5} subtitle="Learn about me and what I am working on, and get in touch" language="ReactJS, Node.js, Express" imgName={Chicago} link="https://github.com/jacobkrol/jacobkrol.github.io" />
                        <MediaCard title="Apartment Manager" star={5} subtitle="Post, like, filter, and compare multiple apartment listings in one place" language="Node.js, Express, ReactJS" imgName={AptManager} link="https://github.com/jacobkrol/Apartment-Manager" />
                        <MediaCard title="FrenchClubUIC.com" star={5} subtitle="Public website produced for the French Club at UIC" language="HTML5, CSS" imgName={FrenchClub} link="http://frenchclubuic.com" />
                    </div>
                </ContentBlock>
                <ContentBlock title="maths." bg={0} size="medium">
                    <div className="content-row">
                        <MediaCard title="Efficiency of Planar Disk Packings" star={4} subtitle="Analyzing the packing efficiency of disks in an infinite plane" language="C++, CMAKE, JavaScript" imgName={Efficiency} link="https://github.com/jacobkrol/Planar-Disk-Packing" />
                        <MediaCard title="Magnetic Waves" star={4} subtitle="Studying MHD equations and visualizing magnetic waves" language="SageMath, Python, JavaScript" imgName={Waves} link="https://github.com/jacobkrol/Magnetic-Waves" />
                        <MediaCard title="Wikipedia Illustration Task Force" star={4} subtitle="Create visualizations for complex mathematical theorems on wikipedia" language="SageMath, Python" imgName={Trifolium} link="https://en.wikipedia.org/wiki/Kempe%27s_universality_theorem" />
                        <MediaCard title="Collatz Conjecture" star={3} subtitle="Personal investigations using coding as a tool" language="Python, JavaScript" imgName={Collatz} link="https://github.com/jacobkrol/Collatz-Conjecture" />
                    </div>
                </ContentBlock>
            </div>
        </div>
    )
}

export default ProjectsPage;
