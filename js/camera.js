/**
 * Created by chester on 04.11.16.
 */
function Camera(){
    this.camera=new THREE.PerspectiveCamera(75.0,window.innerWidth/window.innerHeight,0.1,1000);

}

Camera.prototype.update=function(object){
    var pos=new THREE.Vector3(object.mesh.position.x,object.mesh.position.y,object.mesh.position.z);
    var rotation=object.mesh.rotation.y;
    this.camera.lookAt(new THREE.Vector3(pos.x,pos.y,pos.z));
    this.camera.position.set(pos.x+Math.sin(rotation)*4,pos.y+2,pos.z+Math.cos(rotation)*4);
};