import React from 'react';
import '../../styles/ProjectsPage.css';

// import Backdrop from '../utilities/Backdrop';
import TitleCard from '../utilities/TitleCard';
import CanvasBG from '../utilities/CanvasBG';
import ContentBlock from '../utilities/ContentBlock';
import MediaCard from '../utilities/MediaCard';
import Star from '../utilities/Star';

import IllinoisLine from '../../graphics/illinois-line-teal.gif';
import MazeGenerator from '../../graphics/maze-generator.gif';
import CircleGrowth from '../../graphics/circle-growth.gif';
import DynamicBallPit from '../../graphics/dynamic-ball-pit.gif';
import Nertz from '../../graphics/nertz-demo.gif';
import Asteroids from '../../graphics/asteroids.gif';
import Snake from '../../graphics/snake.gif';
import Smove from '../../graphics/smove.gif';
import LPTimer from '../../graphics/lp-timer.png';
import EPALogo from '../../graphics/epa-logo.png';
import Scoreboard from '../../graphics/scoreboard.png';
import SplitTheBill from  '../../graphics/split-the-bill-2.jpg';
import Chicago from '../../graphics/chicago-uic-small-2.png';
import AptManager from '../../graphics/zoommates.png';
import FrenchClub from '../../graphics/french-club-example.png';
import Efficiency from '../../graphics/disk-packing.gif';
import Waves from '../../graphics/waves-example.gif';
import Trifolium from '../../graphics/trifolium-mechanism.gif';
import Collatz from '../../graphics/collatz-tree.gif';
import KnittyGritty from '../../graphics/knitty-gritty.png';
import Ascii from '../../graphics/ascii-autostereogram.png';
import DesChiffres from '../../graphics/des-chiffres.png';
import DesertWanderer from '../../graphics/desert-wanderer.png';
import MazeRacer from '../../graphics/maze-racer.gif';
import ExampleBook from '../../graphics/example-book.png';

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
                        <MediaCard title="Split The Bill" star={5} subtitle="Need to split a bill proportional to everyone's costs? This is the solution!" language="ReactJS" imgName={SplitTheBill} link="https://github.com/jacobkrol/Split-The-Bill" visit="https://kroljs.com/Split-The-Bill" />
                        <MediaCard title="Scoreboard" star={5} subtitle="Scoreboard interface for personal game nights" language="JavaScript, HTML, CSS" imgName={Scoreboard} link="https://github.com/jacobkrol/Scoreboard" visit="https://kroljs.com/Scoreboard" />
                        <MediaCard title="Knitty Gritty" star={4} subtitle="An installable app for counting stitches and rows on multiple projects" language="ReactJS" imgName={KnittyGritty} link="https://github.com/jacobkrol/KnittyGritty" visit="https://kroljs.com/KnittyGritty" />
                        <MediaCard title="ASCII Autostereogram" star={4} subtitle="Magic Eye? Step aside. Hide custom text in a stereogram block of text" language="ReactJS" imgName={Ascii} link="https://github.com/jacobkrol/JavascriptAsciiAutostereogram" visit="https://kroljs.com/JavascriptAsciiAutostereogram" />
                    </div>
                </ContentBlock>
                <ContentBlock title="pwa games." bg={2} size="medium">
                    <div className="content-row">
                        <MediaCard title="Nertz" star={4} subtitle="Compete against computer opponents in a game of Nertz" language="ReactJS, Node.js, Express" imgName={Nertz} link="https://github.com/jacobkrol/play-nertz-offline" visit="https://kroljs.com/play-nertz-offline" />
                        <MediaCard title="Des Chiffres" star={4} subtitle="Combine the numbers together with arithmetic to reach the target as quickly as possible" language="ReactJS" imgName={DesChiffres} link="https://github.com/jacobkrol/DesChiffres" visit="https://kroljs.com/DesChiffres" />
                        <MediaCard title="Desert Wanderer" star={4} subtitle="Wander the desert shifting cards strategically to bring order to the chaos" language="ReactJS" imgName={DesertWanderer} link="https://github.com/jacobkrol/DesertWanderer" visit="https://kroljs.com/DesertWanderer" />
                    </div>
                </ContentBlock>
                <ContentBlock title="m&k games." bg={1} size="medium">
                    <div className="content-row">
                        <MediaCard title="Asteroids" theme="dark" star={4} subtitle="Play the classic arcade game Asteroids!" language="JavaScript" imgName={Asteroids} link="https://github.com/jacobkrol/Asteroids" visit="https://kroljs.com/Asteroids" />
                        <MediaCard title="Snake" star={4} subtitle="Play the classic game Snake" language="JavaScript" imgName={Snake} link="https://github.com/jacobkrol/Snake" visit="https://kroljs.com/Snake" />
                        <MediaCard title="Smove" star={4} subtitle="Navigate the incoming enemies to collect gold" language="JavaScript" imgName={Smove} link="https://github.com/jacobkrol/Smove" visit="https://kroljs.com/Smove" />
                        <MediaCard title="Maze Racer" star={4} subtitle="Slide through an endless series of random mazes" language="JavaScript" imgName={MazeRacer} link="https://github.com/jacobkrol/MazeRacer" visit="https://kroljs.com/MazeRacer" />
                    </div>
                </ContentBlock>
                <ContentBlock title="wallpapers." bg={0} size="medium">
                    <div className="content-row">
                        <MediaCard title="Line Art" star={4} subtitle="Generate mesmerizing line art in any shape" language="JavaScript, HTML, CSS" imgName={IllinoisLine} link="https://github.com/jacobkrol/Line-Art" visit="https://kroljs.com/Line-Art" />
                        <MediaCard title="Mazes" star={4} subtitle="A variety of work with JavaScript canvas programs in relation to mazes" language="JavaScript" imgName={MazeGenerator} link="https://github.com/jacobkrol/Mazes" />
                        <MediaCard title="Circle Growth" star={4} subtitle="Screensaver design of colorful circle growth" language="JavaScript" imgName={CircleGrowth} link="https://github.com/jacobkrol/Circle-Growth" />
                        <MediaCard title="Dynamic Ball Pit" star={4} subtitle="A basic JavaScript program with interactive dots" language="JavaScript" imgName={DynamicBallPit} link="https://github.com/jacobkrol/Dynamic-Ball-Pit" />
                    </div>
                </ContentBlock>
                <ContentBlock title="speech." bg={3} size="medium">
                    <div className="content-row">
                        <MediaCard title="LP Timer" star={5} subtitle="A simple timer application with time signals to help the forensics community" language="ReactJS, Node.js, Express" imgName={LPTimer} link="https://github.com/jacobkrol/LP-Timer" visit="https://kroljs.com/LP-Timer" />
                        <MediaCard title="Extemp Panel App" star={3} subtitle="A web app to share and practice extemporaneous speaking prompts" language="ReactJS, Node.js, Express" imgName={EPALogo} />
                        <MediaCard title="Example Book" star={3} subtitle="A web app to share and redeem impromptu examples" language="ReactJS, TypeScript, Firestore" imgName={ExampleBook} />
                    </div>
                </ContentBlock>
                <ContentBlock title="adtl_websites." bg={2} size="medium">
                    <div className="content-row">
                        <MediaCard title="Jacob's Homepage" star={5} subtitle="Learn about me and what I am working on, and get in touch" language="ReactJS, Node.js, Express" imgName={Chicago} link="https://github.com/jacobkrol/jacobkrol.github.io" />
                        <MediaCard title="Apartment Manager" star={4} subtitle="Post, like, filter, and compare multiple apartment listings in one place" language="Node.js, Express, ReactJS" imgName={AptManager} link="https://github.com/jacobkrol/Apartment-Manager" />
                        <MediaCard title="FrenchClubUIC.com" star={4} subtitle="Public website produced for the French Club at UIC" language="HTML, CSS" imgName={FrenchClub} visit="http://frenchclubuic.com" />
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
