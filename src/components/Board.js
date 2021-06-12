import {
    IcosahedronGeometry,
    MeshPhongMaterial,
    
    Mesh,
    PlaneGeometry,
    DoubleSide,
    TextureLoader,
    RepeatWrapping,
    DirectionalLight,
    BoxGeometry,
    PointLight,
    LoadingManager,
    ColladaLoader
} from "three";
import ColladaModel from "./ColladaModel"
import fieldTex from "./assets/field_texture.png"
import collada from "./assets/piece2.dae"

export default class Board {

    constructor(scene) {

        this.scene = scene;
        this.planes = []
        this.pieces = []

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const geometry = new BoxGeometry(32, 10, 32);
                let color;

                if (i % 2 == 0) {
                    if (j % 2 == 0) {
                        color = 0xFFFFFF
                    } else {
                        color = 0x222222
                    }
                } else {
                    if (j % 2 == 0) {
                        color = 0x222222
                    } else {
                        color = 0xFFFFFF
                    }
                }

                const material = new MeshPhongMaterial({
                    color: color,
                    shininess: 10,
                    map: new TextureLoader().load(fieldTex),
                });



                const cube = new Mesh(geometry, material);
                cube.position.x = i * 32 - 128
                cube.position.z = j * 32 - 128
                cube.position.y = -5
                cube.gameX = i
                cube.gameZ = j

                this.planes.push(cube)

                this.scene.add(cube);



            }
        }


        for (let i = 0; i < 4; i++) {
            let light = new PointLight(0xfcba03, 10, 320)
            if (i == 0) {
                light.position.set(-100, 300, -100)
            }

            if (i == 1) {
                light.position.set(100, 300, 100)
            }

            if (i == 2) {
                light.position.set(100, 300, -100)
            }

            if (i == 3) {
                light.position.set(-100, 300, 100)
            }

            this.scene.add(light)
        }


        console.log(this.planes)

        this.light = new DirectionalLight(0xa3fff3, 0.7)
        this.scene.add(this.light)


        this.manager = new LoadingManager();
        this.model = new ColladaModel(this.scene, this.manager);
        this.model.load(collada);

        this.manager.onLoad = () => {
            let model = this.model.get();

            model.scale.set(10, 10, 10)


            console.log(model.children[0])
            model.children[0].material = new MeshPhongMaterial({
                color: 0xFFFFFF,
                shininess: 20,
                map: new TextureLoader().load(fieldTex),
            })
            let clone = model.clone()
            clone.position.z = 32
            clone.children[0].material = new MeshPhongMaterial({
                color: 0x333333,
                shininess: 20,
                map: new TextureLoader().load(fieldTex),
            })

            this.blackPiece = clone
            this.whitePiece = model

        
        };

    }


    updateBoard(boardArray) {
        this.pieces.forEach(element => {
            console.log(element)
            this.scene.remove(element)
        });
        this.pieces = []

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (boardArray[i][j] == "b") {
                    let clone = this.blackPiece.clone()
                    clone.position.x = i * 32 - 128
                    clone.position.z = j * 32 - 128
                    clone.gameX = i
                    clone.gameZ = j
                    this.pieces.push(clone)
                    this.scene.add(clone)
                } else if (boardArray[i][j] == "w") {
                    let clone = this.whitePiece.clone()
                    clone.position.x = i * 32 - 128
                    clone.position.z = j * 32 - 128
                    clone.gameX = i
                    clone.gameZ = j
                    this.pieces.push(clone)
                    this.scene.add(clone)

                }

            }
        }

        console.log(this.pieces)



    }


}