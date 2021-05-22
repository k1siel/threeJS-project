import {
    IcosahedronGeometry,
    MeshPhongMaterial,
    Mesh,
    PlaneGeometry,
    DoubleSide,
    TextureLoader,
    RepeatWrapping,
    DirectionalLight,
} from "three";

export default class Ico {

    constructor(scene) {

        this.scene = scene;
        this.geometry = new PlaneGeometry(1000, 1000);
        this.material = new MeshPhongMaterial({
            side: DoubleSide,
            color: 0xAAAAAA,
            shininess: 50,
        })
        this.mesh = new Mesh(this.geometry, this.material);
        this.scene.add(this.mesh)
        this.mesh.rotation.x = Math.PI / 2
        this.mesh.position.y = -1


        this.light = new DirectionalLight(0x00AAff, 0.7)
        this.scene.add(this.light)

    
    }
    

}
