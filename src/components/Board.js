import {
    IcosahedronGeometry,
    MeshPhongMaterial,
    MeshLambertMaterial,

    Mesh,
    PlaneGeometry,
    DoubleSide,
    TextureLoader,
    RepeatWrapping,
    DirectionalLight,
    BoxGeometry,
    PointLight,
    LoadingManager,
    ColladaLoader,
    AmbientLight
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
                        color = 0x999999
                    } else {
                        color = 0x555555
                    }
                } else {
                    if (j % 2 == 0) {
                        color = 0x555555
                    } else {
                        color = 0x999999
                    }
                }

                const material = new MeshPhongMaterial({
                    color: color,
                    map: new TextureLoader().load(fieldTex),
                    shininess: 10
                    // emissive: 0xa1924f,
                    // emissiveIntensity: 0.3,
                    // reflectivity: 40,
                });



                const cube = new Mesh(geometry, material);
                cube.position.x = i * 32 - 112
                cube.position.z = j * 32 - 112
                cube.position.y = -5
                cube.gameX = i
                cube.gameZ = j

                this.planes.push(cube)

                this.scene.add(cube);



            }
        }


        for (let i = 0; i < 12; i++) {
            let light = new PointLight(0xab5a13, 5, 320)
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

            // if (i == 4) {
            //     light.position.set(-300, 50, 300)
            // }

            // if (i == 5) {
            //     light.position.set(300, 50, 300)
            // }

            // if (i == 6) {
            //     light.position.set(300, 50, -300)
            // }

            // if (i == 7) {
            //     light.position.set(-300, 50, -300)
            // }

            // if (i == 8) {
            //     light.position.set(-300, 50, 0)
            // }
            // if (i == 9) {
            //     light.position.set(300, 50, )
            // }
            // if (i == 10) {
            //     light.position.set(0, 50, -300)
            // }
            // if (i == 11) {
            //     light.position.set(0, 50, 300)
            // }
            this.scene.add(light)
        }




        this.light = new PointLight(0x4f90ff, 5, 350)
        this.light.position.set(16, 300, 16)

        this.light2 = new AmbientLight(0xfccc88, 1)
        this.scene.add(this.light)
        this.scene.add(this.light2)


        this.manager = new LoadingManager();
        this.model = new ColladaModel(this.scene, this.manager);
        this.model.load(collada);

        this.manager.onLoad = () => {
            let model = this.model.get();

            model.scale.set(10, 10, 10)


            console.log(model.children[0])
            model.children[0].material = new MeshPhongMaterial({
                color: 0xFFFFFF,
                
                // emissive: 0xa1924f,
                // emissiveIntensity: 0.3,
                // reflectivity: 40,
                map: new TextureLoader().load(fieldTex),
            })
            let clone = model.clone()
            clone.position.z = 32
            clone.children[0].material = new MeshLambertMaterial({
                color: 0x333333,
                // emissive: 0x241308,
                // emissiveIntensity: 0.3,
                // reflectivity: 40,
                map: new TextureLoader().load(fieldTex),
            })

            this.blackPiece = clone
            this.whitePiece = model


        };

    }


    updateBoard(boardArray) {
        this.pieces.forEach(element => {
           
            this.scene.remove(element)
        });
        this.pieces = []

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (boardArray[i][j] == "b") {
                    let clone = this.blackPiece.clone()
                    clone.position.x = i * 32 - 112
                    clone.position.z = j * 32 - 112
                    clone.gameX = i
                    clone.gameZ = j
                    this.pieces.push(clone)
                    this.scene.add(clone)
                } else if (boardArray[i][j] == "w") {
                    let clone = this.whitePiece.clone()
                    clone.position.x = i * 32 - 112
                    clone.position.z = j * 32 - 112
                    clone.gameX = i
                    clone.gameZ = j
                    this.pieces.push(clone)
                    this.scene.add(clone)

                }

            }
        }





    }


}
