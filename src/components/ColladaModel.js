import { ColladaLoader } from "three/examples/jsm/loaders/ColladaLoader";

export default class ColladaModel {
  constructor(scene, manager) {
    this.scene = scene;
    this.mesh = null;
    this.manager = manager;
  }
  load(path) {
    new ColladaLoader(this.manager).load(path, (model) => {
      console.log(model.scene.children);
      this.model = model;
      
    });
  }
  get() {
    return this.model.scene;
  }
  unload() {
    this.scene.remove(this.mesh);
  }
}