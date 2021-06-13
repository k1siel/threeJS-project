import {
    Scene,
    LoadingManager,
    Clock,
    Vector3,
    GridHelper,



} from 'three';
import Renderer from './Renderer';
import Camera from './Camera';
import Ico from './Board';
import {
    OrbitControls
} from 'three/examples/jsm/controls/OrbitControls.js'

import {
    io
} from "socket.io-client";
import Player from "./Player.js"
import Board from './Board';
import Click from "./Click"


export default class Main {
    constructor(container) {



        this.container = container;
        this.scene = new Scene();
        this.renderer = new Renderer(container);
        this.camera = new Camera(30, window.innerWidth, window.innerHeight);
        this.camera.position.set(400, 200, 0)
        this.camera.lookAt(new Vector3(0, 0, 0));

        this.black = 0
        this.white = 0

        // const gridHelper = new GridHelper(1000, 32);
        // this.scene.add(gridHelper);
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);










        this.board = new Board(this.scene)

        this.socket = io()


        this.player1;
        this.player2;
        this.turn;
        let self = this

        this.boardArray;

        this.clickable;

        this.socket.on('startGame', function (data, color) {
            //console.log("startGame", data)

            if (color == "b") {
                self.player1 = new Player("b", data.user1)
                self.player2 = new Player("w", data.user2)
            } else {
                self.player2 = new Player("b", data.user1)
                self.player1 = new Player("w", data.user2)
            }
            self.turn = data.turn
            self.boardArray = data.gameArray
            console.log(self.player1, self.player2, self.boardArray)

            self.createUI()
            self.board.updateBoard(self.boardArray)
        });


        document.addEventListener("click", (e) => {

            let click = new Click()

            click.mouseVector.x = (e.clientX / $(window).width()) * 2 - 1;
            click.mouseVector.y = -(e.clientY / $(window).height()) * 2 + 1;

            click.raycaster.setFromCamera(click.mouseVector, this.camera);

            let intersects = click.raycaster.intersectObjects(this.board.planes)

            // console.log(intersects)

            if (self.player1.color == self.turn) {
                if (intersects.length > 0) {
                    let coordX = intersects[0].object.gameX
                    let coordZ = intersects[0].object.gameZ
                    console.log(coordX, coordZ)
                    if (self.clickable[coordX][coordZ] == 1) {
                        // console.log("emit", self.clickable)
                        self.socket.emit("clicked", {
                            player: self.player1,
                            coordX: coordX,
                            coordZ: coordZ
                        })
                    }




                }
            }
        })

        this.socket.on("yourTurn", (data) => {
            console.log(data)
            self.clickable = data

        })

        this.socket.on("gameUpdate", (data) => {
            console.log("gameUpdate")
            self.boardArray = data.updatedTab
            self.turn = data.turn
            self.updateTurn()
            self.board.updateBoard(self.boardArray)
        })


        this.socket.on("gameEnd", (data) => {
            self.boardArray = data.updatedTab
            self.turn = data.turn
            self.updateTurn()
            self.board.updateBoard(self.boardArray)
            self.gameEnd()

        })

        this.render();
    }

    render() {


        this.renderer.setViewport(0, 0, innerWidth, innerHeight);
        this.renderer.render(this.scene, this.camera);

        this.controls.update();

        requestAnimationFrame(this.render.bind(this));


    }

    createUI() {
        let yourUI = document.createElement("div")
        yourUI.id = "yourUI"
        yourUI.innerHTML = "YOU"

        let opponentUI = document.createElement("div")
        opponentUI.id = "opponentUI"
        opponentUI.innerHTML = "OPPONENT"
        if (this.player1.color == "b") {
            yourUI.style.backgroundColor = "#090c0f"
            yourUI.style.color = "#838d9e"
            // yourUI.style.color = "#ff6781"
            opponentUI.style.backgroundColor = "#f2f0ed"
            opponentUI.style.color = "#383830"
            // opponentUI.style.color = "#ff6781"
        } else {
            opponentUI.style.backgroundColor = "#090c0f"
            opponentUI.style.color = "#838d9e"
            // opponentUI.style.color = "#ff6781"
            yourUI.style.backgroundColor = "#f2f0ed"
            yourUI.style.color = "#383830"
            // yourUI.style.color = "#ff6781"

        }

        this.container.appendChild(yourUI)
        this.container.appendChild(opponentUI)

        let turn = document.createElement("div")

        turn.id = "turn"
        this.container.appendChild(turn)
        this.updateTurn()


    }


    updateTurn() {
        let turn = document.getElementById("turn")
        console.log(this.turn)

        if (this.turn == "b") {
            turn.style.backgroundColor = "#090c0f"
            turn.style.color = "#838d9e"
            // turn.style.color = "#ff6781"
            turn.innerHTML = "TURN <br>" + "black"
        } else {
            turn.style.backgroundColor = "#f2f0ed"
            turn.style.color = "#383830"
            // turn.style.color = "#ff6781"
            turn.innerHTML = "TURN <br>" + "white"
        }
        this.black = 0
        this.white = 0

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (this.boardArray[i][j] == "b") {
                    this.black++
                } else if (this.boardArray[i][j] == "w") {
                    this.white++
                }
            }
        }

        if (this.player1.color == "b") {
            document.getElementById("yourUI").innerHTML = "YOU <br>" + this.black
            document.getElementById("opponentUI").innerHTML = "OPPONENT <br>" + this.white
        } else {
            document.getElementById("yourUI").innerHTML = "YOU <br>" + this.white
            document.getElementById("opponentUI").innerHTML = "OPPONENT <br>" + this.black
        }

    }


    gameEnd() {
        let end = document.createElement("div")
        end.id = "end"
        console.log("black", this.black, "white", this.white)
        if (this.black > this.white) {
            end.innerHTML = "Black has won!"
            end.style.backgroundColor = "#090c0f"
            end.style.color = "#838d9e"

        } else if (this.white > this.black) {
            end.style.backgroundColor = "#f2f0ed"
            end.style.color = "#383830"
            end.innerHTML = "White has won!"
        } else {

            end.style.backgroundColor ="#474747"
            end.style.color = "#a6a6a6"
            end.innerHTML = "Its a draw!"
        }

        this.container.appendChild(end)
    }
}