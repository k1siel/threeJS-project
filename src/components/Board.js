import {
    IcosahedronGeometry,
    MeshPhongMaterial,
    Mesh,
    PlaneGeometry,
    DoubleSide,
    TextureLoader,
    RepeatWrapping,
    DirectionalLight,
    BoxGeometry
} from "three";

export default class Board {

    constructor(scene) {

        this.scene = scene;
        this.planes = []

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const geometry = new BoxGeometry(32, 10, 32);
                let color;

                if(i%2 ==0){
                    if(j%2 ==0){
                        color = 0xEEEEEE
                    }
                    else{
                        color = 0x111111
                    }
                }
                else{
                    if(j%2 ==0){
                        color = 0x111111
                    }
                    else{
                        color = 0xEEEEEE
                    }
                }

                const material = new MeshPhongMaterial({
                    color: color,
                    shininess: 50,
                });



                const cube = new Mesh(geometry, material);
                cube.position.x = i * 32 - 128
                cube.position.z = j * 32 - 128
                cube.gameX = i
                cube.gameZ = j
                
                this.planes.push(cube)
                
                this.scene.add(cube);
            }
        }

        console.log(this.planes)
        // this.geometry = new PlaneGeometry(1000, 1000);
        // this.material = new MeshPhongMaterial({
        //     side: DoubleSide,
        //     color: 0xAAAAAA,
        //     shininess: 50,
        // })
        // this.mesh = new Mesh(this.geometry, this.material);
        // this.scene.add(this.mesh)
        // this.mesh.rotation.x = Math.PI / 2
        // this.mesh.position.y = -1


        this.light = new DirectionalLight(0xFFFFFF, 0.7)
        this.scene.add(this.light)


    }


}