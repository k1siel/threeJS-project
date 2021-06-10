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
import { io } from "socket.io-client";




export default class Main {
    constructor(container) {
        // właściwości klasy
        //this.socket = io("http://localhost:8080/")

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
}