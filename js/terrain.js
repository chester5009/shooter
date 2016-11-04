/**
 * Created by chester on 04.11.16.
 */
function Terrain(){
    this.geometry=new THREE.PlaneGeometry(500,500,16,16);
    this.material=new THREE.MeshBasicMaterial({color:0x43940C});
    this.terrain=new THREE.Mesh(this.geometry,this.material);
    this.terrain.rotation.x=-Math.PI/2;
}
Terrain.prototype.addToScene=function (scene) {
    scene.add(this.terrain);
}