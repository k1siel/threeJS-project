import {
    Scene,
    LoadingManager,
    Clock,
    Vector3,
    GridHelper,


} from 'three';
import Renderer from './Renderer';
import Camera from './Camera';
import Ico from './Ico';
import Model from "./Model"
import Keyboard from "./Keyboard"
import Animation from "./Animation"
import Config from './Config';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import socketController from "./socketController.js"
import {
    io
} from "socket.io-client";
import Player from "./Player.js"


export default class Main {
    constructor(container) {


        this.socket = io()

        this.socket.on('connection', () => {
            console.log("connceted!")
        })

        this.player1;
        this.player2;
        let self = this

        this.socket.on('startGame', function (data, color) {
            //console.log("startGame", data)
            
            if (color == "black") {
                self.player1 = new Player("black", data.user1)
                self.player2 = new Player("white", data.user2)
            }
            else{
                self.player2 = new Player("black", data.user1)
                self.player1 = new Player("white", data.user2)
            }

            console.log(self.player1, self.player2)
        });



        this.container = container;
        this.scene = new Scene();
        this.renderer = new Renderer(this.scene, container);
        this.camera = new Camera(this.renderer.threeRenderer);
        this.ico = new Ico(this.scene);

        const gridHelper = new GridHelper(1000, 10);
        this.scene.add(gridHelper);







        this.render();
    }

    render() {





        this.renderer.render(this.scene, this.camera.threeCamera);



        requestAnimationFrame(this.render.bind(this));


    }

    createUI(){
        
    }

}