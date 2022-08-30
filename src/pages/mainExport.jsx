import React, { useEffect, useState, useRef, useCallback } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { PerspectiveCamera, OrbitControls } from "@react-three/drei"
import * as THREE from "three"

import MainExport from "./models/MainModel"
import captures from "./src/captures"
import MiniGame from "./src/Minigame/minigame"

//?
import ArrowDown from "./src/Tetris/img/ArrowDown.png"
import ArrowUp from "./src/Tetris/img/ArrowUp.png"
import ArrowLeft from "./src/Tetris/img/ArrowLeft.png"
import ArrowRight from "./src/Tetris/img/ArrowRight.png"
import * as Constants from './src/Tetris/constants';
import { getRandomInt, rotateClampX, checkMove } from './src/Tetris/util';
import './src/Tetris/style.scss';


export default function Export() {
    const [currentScrolling, setCurrentScrolling] = useState(0)
    const [currentDevice, setCurrentDevice] = useState("pc")

    const objectRef = useRef(null)
    const[canvasClass, setCanvasClass] = useState("canvas")//!!!!
    const[buttonPressed, setButtonPressed] = useState(false) //!!!!
    const[objectCurrentState, setObjectCurrentState] = useState(["first", "second"])

    //About page
    const [bodyTransition, setBodyTransition] = useState({transform: `scale(${ 0 }) !important`})
    const [firstStyle, setFirstStyle] = useState({transform: "rotate(0deg)"})
    const [secondStyle, setSecondStyle] = useState({transform: "rotate(0deg)"})
    const [numberS, setNumberS] = useState(0)
    function timeout(delay) { return new Promise( res => setTimeout(res, delay) ); }
    //Languages page
    const [scaleLanguages, setScaleLanguages] = useState({transform: `scale(${ 0 })`, display: "none"})
    // links
    const [linkStyle, setLinkStyle] = useState({display: "none"})

    const FrameCamera = () => {
        useFrame((_, delta) => {
            if (!!objectRef.current) { 
                const v1P = new THREE.Vector3(
                    captures[0][objectCurrentState[0]].object[currentDevice].position[0],
                    captures[0][objectCurrentState[0]].object[currentDevice].position[1],
                    captures[0][objectCurrentState[0]].object[currentDevice].position[2]
                )
                const v2P = new THREE.Vector3(
                    captures[0][objectCurrentState[1]].object[currentDevice].position[0],
                    captures[0][objectCurrentState[1]].object[currentDevice].position[1],
                    captures[0][objectCurrentState[1]].object[currentDevice].position[2]
                )
                const v1R = new THREE.Vector3(
                    captures[0][objectCurrentState[0]].object[currentDevice].rotate[0],
                    captures[0][objectCurrentState[0]].object[currentDevice].rotate[1],
                    captures[0][objectCurrentState[0]].object[currentDevice].rotate[2]
                )
                const v2R = new THREE.Vector3(
                    captures[0][objectCurrentState[1]].object[currentDevice].rotate[0],
                    captures[0][objectCurrentState[1]].object[currentDevice].rotate[1],
                    captures[0][objectCurrentState[1]].object[currentDevice].rotate[2]
                )

                if (buttonPressed == true) {
                    //!
                    if (currentScrolling >= 0 && currentScrolling <= 1000) {
                        const v3R = new THREE.Vector3().lerpVectors(v1R, v2R, currentScrolling / 1000)
                        objectRef.current.rotation.setFromVector3(v3R)
                        objectRef.current.position.lerpVectors(v1P, v2P, currentScrolling / 1000)
                    }
                    if (currentScrolling < 1000) {
                        setBodyTransition({transform: `scale(1)`, top: `${(currentScrolling - 2000) / 4}vh`})
                    }
                    if (currentScrolling >= 1000 && currentScrolling <= 1700) {
                        let val = (currentScrolling - 1000) / 700 
                        const getValue = () => {
                            if (val > 0.9) {
                                return 1
                            } else {
                                return val
                            }
                        }
                        setBodyTransition({transform: `scale(${ getValue() })`})
                    }
                    if (currentScrolling >= 1900 && currentScrolling <= 1940) {
                        setFirstStyle({transform: `rotate( -${(currentScrolling - 1900) / 2}deg)`})
                        setSecondStyle({transform: `rotate(${(currentScrolling - 1900) / 2}deg)`})
                    }
                    if (currentScrolling >= 1950 && currentScrolling <= 2000) {
                        setFirstStyle({transform: `rotate( -${(currentScrolling - 1950) / 2.4}deg)`})
                        setSecondStyle({transform: `rotate(${(currentScrolling - 1950) / 2.4}deg)`})
                    }
                    if (currentScrolling >= 2000 && currentScrolling <= 2800) {
                        setObjectCurrentState(["first", "second"])
                        setBodyTransition({transform: `scale(1)`, top: `${(currentScrolling - 2000) / 4}vh`})
                    }
                    if (currentScrolling > 2801 && currentScrolling <= 3800) {
                        setObjectCurrentState(["second", "third"])
                        const v3R = new THREE.Vector3().lerpVectors(v1R, v2R, (currentScrolling - 2801) / 1000)
                        objectRef.current.rotation.setFromVector3(v3R)
                        objectRef.current.position.lerpVectors(v1P, v2P, (currentScrolling - 2801) / 1000)
                    }
                    if (currentScrolling > 4000 && currentScrolling <= 5000) {
                        setObjectCurrentState(["third", "fourth"])
                        const v3R = new THREE.Vector3().lerpVectors(v1R, v2R, (currentScrolling - 4000) / 1000)
                        objectRef.current.rotation.setFromVector3(v3R)
                        objectRef.current.position.lerpVectors(v1P, v2P, (currentScrolling - 4000) / 1000)
                    }
                    if (currentScrolling < 5000) {
                        setScaleLanguages({transform: `scale($0)`, display: "none"})
                    }
                    if (currentScrolling > 5000 && currentScrolling <= 5700) { // do
                        let val = (currentScrolling - 5000) / 700 
                        const getValue = () => {
                            if (val > 0.9) {
                                return 1
                            } else {
                                return val
                            }
                        }
                        setScaleLanguages({transform: `scale(${ getValue() })`, display: "flex"})
                    }
                    if (currentScrolling > 5900 && currentScrolling <= 6700) {
                        setScaleLanguages({transform: `scale(1)`, top: `${(currentScrolling - 5900) / 6}vh`})
                    }
                    if (currentScrolling > 6700 && currentScrolling <= 7700) {
                        setObjectCurrentState(["fourth", "fifth"])
                        setLinkStyle({display: "flex"})
                        const v3R = new THREE.Vector3().lerpVectors(v1R, v2R, (currentScrolling - 6700) / 1000)
                        objectRef.current.rotation.setFromVector3(v3R)
                        objectRef.current.position.lerpVectors(v1P, v2P, (currentScrolling - 6700) / 1000)
                    } else if (currentScrolling > 7700) {
                        setLinkStyle({display: "flex"})
                    } else {
                        setLinkStyle({display: "none"})
                    }
                }
            }
        }) 
    }

    // size
    useEffect(() => {
        function handleWindowResize() {
            setCurrentDevice(getWindowSize());
        }

        window.addEventListener('scroll', handleWindowResize);

        return () => {
        window.removeEventListener('scroll', handleWindowResize);
        };
    }, []);
    function getWindowSize() {
        var curDevice = ""
        if (window.innerWidth < 770) {
            curDevice = "phone"
        } else {
            curDevice = "pc"
        }
        console.log(curDevice)
        return curDevice
    }
//working
    const handleScroll = useCallback(e => {
        console.log(currentScrolling)
        const window = e.currentTarget;
        if (currentScrolling > window.scrollY) {
            console.log("scrolling up");
        } else if (currentScrolling < window.scrollY) {
            console.log("scrolling down");
        }
        setCurrentScrolling(window.scrollY);
    }, [currentScrolling])

    useEffect(() => {
        setCurrentScrolling(window.scrollY);
        window.addEventListener("scroll", handleScroll);
    
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    useEffect(() => {
        window.addEventListener("keydown", function(e) {
            if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
                e.preventDefault();
            }
        }, false);
    })

    //Working   
    const startBtn = () => {
        setCanvasClass("canvas activated")
        setButtonPressed(true)
    }
    //Working
    const Box = () => {
        const boxRef = useRef(null)

        useFrame((state) => {
            if (!!boxRef.current) {
                const {x, y } = state.mouse
                boxRef.current.rotation.y += x / 20
                boxRef.current.rotation.x += y / 20

                boxRef.current.rotation.x += 0.01
                boxRef.current.rotation.y += 0.01
            }
        })

        return (
            <mesh ref={boxRef}>
                <icosahedronBufferGeometry args={[1, 0]} />
                <meshNormalMaterial />
            </mesh>
        )
    }

    //Working
    const onScrollFunc = async () => {
        setNumberS(count => count + 1)
        if(numberS < 2) {
            setFirstStyle({transform: `rotate(-${numberS * 6}deg)`})
            setSecondStyle({transform: `rotate(${numberS * 6}deg)`})
        }
        else if (numberS == 2) {
            setFirstStyle({transform: "rotate(-20deg)"})
            setSecondStyle({transform: "rotate(20deg)"})
        }
        else if (numberS >= 8) {
            setFirstStyle({transform: "rotate(-40deg)"})
            setSecondStyle({transform: "rotate(40deg)"})
        }
    }
    //!Game
    class Square extends React.Component {
        render() {
            return (
                <div id="block" style={{
                    backgroundColor: this.props.color,
                    width: Constants.squareDim,
                    height: Constants.squareDim,
                    position: 'absolute',
                    top: this.props.y * Constants.squareDim,
                    left: this.props.x * Constants.squareDim,
                    border: "1.5px solid #dddddd",
                    }}
                > 
                    <h1 className="textBlock">{this.props.text}</h1>
                </div>
            );
        }
    }

    class Game extends React.Component {
        constructor(props) {
            super(props);
            
            this.state = {
            isFallingFinished: false,
            numLinesRemoved: 0,
            currentPiece: null,
            isGameOver: false,
            board: Array(Constants.numRowInBoard).fill(null).map(
                () => Array(Constants.numColInBoard).fill(Constants.TetrominoShape.NoShape)
            ),
            };
    }
    
        start() {
            this.newPiece();
        }
    
        gameOver() {
            this.setState({
            currentPiece: 0,
            isGameOver: true,
            });
            this.stopTimer();
        }
    
        newPiece() {
            const board = this.state.board;
    
            const newPieceShape = getRandomInt(1, Object.keys(Constants.TetrominoShape).length);
            const newPieceCoords = Constants.TetrominoCoordsTable[newPieceShape].slice();
            const newX = Math.floor(Constants.numColInBoard / 2) + 1;
            const newY = Math.max(0, -Math.min(...newPieceCoords.map(x => x[1]))); // map from 1 to x
    
            const newPiece = {
                shape: newPieceShape,
                coords: newPieceCoords,
                x: newX,
                y: newY,
            };
            const isValidMove = checkMove(newPiece, board, newX, newY);
    
            if (isValidMove) {
                this.setState({
                    currentPiece: newPiece,
                });
            } else {
                this.commitPieceToBoard(newPiece);
                this.gameOver();
            }
        }
    
        tryMove(deltaX, deltaY) {
            const currentPiece = this.state.currentPiece;
            const board = this.state.board;
            if (!currentPiece) {
                return true;
            }
            const newX = currentPiece.x + deltaX;
            const newY = currentPiece.y + deltaY;
            const isValidMove = checkMove(currentPiece, board, newX, newY);
    
            if (isValidMove) {
                this.setState({
                    currentPiece: Object.assign({}, currentPiece, {x: newX, y: newY}),
                });
            }
            return isValidMove;
        }
    
        rotateLeft() {
            const currentPiece = this.state.currentPiece;
            if (!currentPiece || currentPiece.shape === Constants.TetrominoShape.HtmlShape) {
            return;
            }
            const newCoords = currentPiece.coords.map((entry) => [entry[1], -entry[0]]);
            const newX = rotateClampX(currentPiece.x, newCoords);
    
            this.setState({
            currentPiece: Object.assign({}, currentPiece, {
                coords: newCoords,
                x: newX,
            }),
            });
        }
    
        rotateRight() {
            const currentPiece = this.state.currentPiece;
            if (!currentPiece || currentPiece.shape === Constants.TetrominoShape.HtmlShape) {
            return;
            }
            const newCoords = currentPiece.coords.map((entry) => [-entry[1], entry[0]]);
            const newX = rotateClampX(currentPiece.x, newCoords);
            this.setState({
            currentPiece: Object.assign({}, currentPiece, {
                coords: newCoords,
                x: newX,
            }),
            });
        }
    
    
        oneLineDown() {
            if (!this.tryMove(0, 1)) {
            this.pieceDropped();
            }
        }
    
        commitPieceToBoard(piece) {
            const board = this.state.board;
            const newBoard = board.map((row, y) => row.map((elem, x) => {
            for (const e of piece.coords) {
                if (x === piece.x + e[0] && y === piece.y + e[1]) {
                return piece.shape;
                }
            }
            return elem;
            }));
            this.setState({
                board: newBoard,
            });
        }
    
        pieceDropped() {
            const currentPiece = this.state.currentPiece;
            this.commitPieceToBoard(currentPiece);
            this.removeFullLines();
            if (!this.state.isFallingFinished) {
                this.newPiece();
            }
        }
    
        removeFullLines() {
            const numLinesRemoved = this.state.numLinesRemoved;
            const board = this.state.board;
            let linesToRemove = [];
            for (let y = 0; y < Constants.numRowInBoard; y++) {
            let lineIsFull = true;
            for (let x = 0; x < Constants.numColInBoard; x++) {
                if (board[y][x] === Constants.TetrominoShape.NoShape) {
                lineIsFull = false;
                break;
                }
            }
            if (lineIsFull) {
                linesToRemove.push(y);
            }
            }
    
            let newBoard = board.map((row) => row.map((elem) => elem));
            for (const y of linesToRemove) {
            for (let yy = y; yy > 0; yy--) {
                for (let xx = 0; xx < Constants.numColInBoard; xx++) {
                newBoard[yy][xx] = newBoard[yy - 1][xx];
                }
            }
            }
    
            if (linesToRemove.length > 0) {
            this.setState({
                numLinesRemoved: numLinesRemoved + linesToRemove.length,
                isFallingFinished: true,
                currentPiece: null,
                board: newBoard,
            });
            }
        }
    
        handleKeyDown(event) {
            switch (event.code) {
                case 'ArrowLeft':
                    this.tryMove(-1, 0);
                    break;
                case 'ArrowRight':
                    this.tryMove(1, 0);
                    break;
                case 'ArrowDown':
                    this.rotateRight();
                    break;
                case 'ArrowUp':
                    this.rotateLeft();
                    break;
                default:
                    break;
            }
        }
    
        handleTimerTick() {
            if (this.state.isFallingFinished) {
            this.setState({ isFallingFinished: false });
            this.newPiece();
            } else {
            this.oneLineDown();
            }
        }
    
        handleClick(event) {
            switch (event.path[0].alt) {
                case 'arrowL':
                    this.tryMove(-1, 0);
                    break;
                case 'arrowR':
                    this.tryMove(1, 0);
                    break;
                case 'arrowD':
                    this.rotateRight();
                    break;
                case 'arrowU':
                    this.rotateLeft();
                    break;
                default:
                    break;
            }
        }
    
        componentDidMount() {
            document.addEventListener('click', (event) => this.handleClick(event), false);
            document.addEventListener('keydown', (event) => this.handleKeyDown(event), false);
            this.timer = setInterval(
            () => this.handleTimerTick(),
            500
            );
            this.start();
        }
    
        componentWillUnmount() {
            document.addEventListener('click', (event) => this.handleClick(event), false);
            document.addEventListener('keydown', (event) => this.handleKeyDown(event), false);
            this.stopTimer();
        }
    
        stopTimer() {
            if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
            }
        }
    
        render() {
            const currentPiece = this.state.currentPiece;
            const board = this.state.board;
            const statusText = this.state.isGameOver ?
            <div className="score">Game Over</div>
            : <div className="score">Score: {this.state.numLinesRemoved}</div>
            let boardRendered = [];
            for (let y = 0; y < Constants.numRowInBoard; y++) {
                for (let x = 0; x < Constants.numColInBoard; x++) {
                    const shape = board[y][x];
                    if (shape !== Constants.TetrominoShape.NoShape) {
                        boardRendered.push(
                            <Square
                                x={x}
                                y={y}
                                color={Constants.TetrominoColor[shape]}
                                key={y * Constants.numColInBoard + x}
                            />
                        );
                    }
                }
            }
            let currentPieceRendered = null;
            if (currentPiece) {
                currentPieceRendered = currentPiece.coords.map((e, index) => {
                    return (
                        <Square
                            x={currentPiece.x + e[0]}
                            y={currentPiece.y + e[1]}
                            color={Constants.TetrominoColor[currentPiece.shape]}
                            key={boardRendered.length + index}
                            text={Constants.TetrominoText[currentPiece.shape][index]} // on spawn
                        />);
            });
            }
            return [
            <div id="game-bg" style={scaleLanguages}>
                <h1 style={{display: "none"}}>Ok, maybe I am not best at the games :D.</h1>
                <div className="wrapper-game">
                <div
                    id="board"
                    key="board"
                    style={{
                    position: 'absolute',
                    top: `calc(50% - calc(${Constants.BoardHeight}px / 2))`,
                    width: `${Constants.BoardWidth}px`,
                    height: `${Constants.BoardHeight}px`,
                    backgroundColor: '#080917',
                }}>
                    {boardRendered}
                    {currentPieceRendered}
                </div>
                    <p>{statusText}</p>
                    <div className="will-see"> 
                        <h3>You will see:</h3> 
                        <ul>
                            <li>Html</li>
                            <li>SCSS</li>
                            <li>JavaScript</li>
                            <li>ReactJs</li>
                            <li>NodeJs</li>
                        </ul>
                    </div>
                    <div className="buttons">
                        <img src={ArrowLeft} alt="arrowL" />
                        <img src={ArrowRight} alt="arrowR" />
                        <img src={ArrowUp} alt="arrowU" />
                        <img src={ArrowDown} alt="arrowD" />
                    </div>
                </div>
            </div>
            ];
        }
    }

    return (
        <>
            <div className="landing-page">
                <div className="start-button">
                    <div className="center-txt">
                        <h1 onClick={startBtn} > Start </h1>
                    </div>
                </div>
            </div>
            <Canvas className={canvasClass} shadows>
                <PerspectiveCamera makeDefault  position={[0, 0, 0]}/>
                <ambientLight intensity={0.5} />
                <directionalLight position={[1, 0, 10]} intensity={1} />
                <group ref={objectRef} position={[0.5, -3.41, -16.71]} rotation={[1, 0.72, 0]}>
                    <MainExport  /> 
                </group>
                <FrameCamera/>
            </Canvas>
            <> 
            {/* bg text  */}
                <div className="about-page-container"  style={bodyTransition}>
                    <div className="about-page">
                        <h1>About</h1>
                        <div className="text-section">
                            <p>
                                I'm Tomiis, a young front-end developer <br />
                                    &nbsp; based in small country Czech Republic. <br />
                                My design is focused on <br />
                                    &nbsp; Three-dimensional graphic and animations.
                            </p>
                        </div>
                        <h2 className="bg-text">DEVELOPER</h2>
                        <div className="scroll-container">
                            <h3>Scroll Down</h3>
                            <div style={firstStyle} className="scroll-f scroll"></div>
                            <div style={secondStyle} className="scroll-s scroll"></div>
                        </div>
                    </div>
                    <Canvas className="canvasPreview">
                        <OrbitControls enablePan={false} enableZoom={false} />
                        <PerspectiveCamera makeDefault position={[0, 2, -1]}/>
                        <pointLight position={[5, 5, 5]} />
                        <Box />
                    </Canvas>
                </div>
            </>
            <Game />
            <MiniGame />
            <>
                <div className="links" style={linkStyle}>
                    <a href="https://instagram.com/tomii6_" className="border-link" target="_blank"></a>
                    <a href="https://github.com/tomiis4" target="_blank"></a>
                    <a href="https://discordapp.com/users/537667668317044746" className="border-link brs" target="_blank"></a>
                </div>
            </>
        </>
    )
}

// npx gltfjsx MainExport.gltfAS