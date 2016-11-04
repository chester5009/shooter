/**
 * Created by chester on 04.11.16.
 */
function Player(id,x,y,z){
    this.id=id;
    this.geometry=new THREE.CubeGeometry(3,3,3,4,4,4);
    this.material=new THREE.MeshBasicMaterial({color:0x00ffff});
    this.mesh=new THREE.Mesh(this.geometry,this.material);
    this.mesh.position.set(x,y,z);
    this.velocity=new THREE.Vector3(0,0,0);
    this.speed=0.3;
}

Player.prototype.addToScene=function (scene) {
    scene.add(this.mesh);
}
Player.prototype.update=function () {
    this.mesh.position.add(this.velocity);
}
Player.prototype.setVelocity=function (x,y,z) {
    this.velocity=new THREE.Vector3(x,y,z);
}
Player.prototype.move_forward=function () {
    var angle=this.mesh.rotation.y;
    this.velocity=new THREE.Vector3(-Math.sin(angle)*this.speed,0,-Math.cos(angle)*this.speed);
    console.log("sin "+Math.sin(angle)+" cos "+Math.cos(angle));
}
Player.prototype.move_backward=function () {
    var angle=this.mesh.rotation.y;
    this.velocity=new THREE.Vector3(Math.sin(angle),0,Math.cos(angle));
    console.log("sin "+Math.sin(angle)+" cos "+Math.cos(angle));
}