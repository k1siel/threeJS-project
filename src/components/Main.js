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



        const gridHelper = new GridHelper(1000, 32);
        this.scene.add(gridHelper);
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);










        this.board = new Board(this.scene)

        this.socket = io()

        this.socket.on('connection', () => {
            console.log("connceted!")
        })

        this.player1;
        this.player2;
        this.turn;
        let self = this

        this.boardArray =  [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, "w", "b", 0, 0, 0],
            [0, 0, 0, "b", "w", 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ]

        this.socket.on('startGame', function (data, color) {
            //console.log("startGame", data)

            if (color == "black") {
                self.player1 = new Player("black", data.user1)
                self.player2 = new Player("white", data.user2)
            } else {
                self.player2 = new Player("black", data.user1)
                self.player1 = new Player("white", data.user2)
            }
            self.turn = data.turn
            self.boardArray = data.gameArray
            console.log(self.player1, self.player2, self.boardArray)

            self.createUI()
            self.board.updateBoard(self.boardArray)
        });

        console.log(document)
        document.addEventListener("click", (e) => {
            console.log("klikłeś sie chuju")
            let click = new Click()

            click.mouseVector.x = (e.clientX / $(window).width()) * 2 - 1;
            click.mouseVector.y = -(e.clientY / $(window).height()) * 2 + 1;

            click.raycaster.setFromCamera(click.mouseVector, this.camera);

            let intersects = click.raycaster.intersectObjects(this.board.planes)

            console.log(intersects)
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
        if (this.player1.color == "black") {
            yourUI.style.backgroundColor = "#090c0f"
            yourUI.style.color = "#838d9e"
            opponentUI.style.backgroundColor = "#f2f0ed"
            opponentUI.style.color = "#383830"
        } else {
            opponentUI.style.backgroundColor = "#090c0f"
            opponentUI.style.color = "#838d9e"
            yourUI.style.backgroundColor = "#f2f0ed"
            yourUI.style.color = "#383830"

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

        if (this.turn == "black") {
            turn.style.backgroundColor = "#090c0f"
            turn.style.color = "#838d9e"
            turn.innerHTML = "TURN <br>" + this.turn
        } else {
            turn.style.backgroundColor = "#f2f0ed"
            turn.style.color = "#383830"
            turn.innerHTML =  "TURN <br>" + this.turn
        }
    }

}