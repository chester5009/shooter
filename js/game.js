/**
 * Created by chester on 04.11.16.
 */
function Game(scene){
    this.scene=scene;
    this.players=[];
    this.my_id=1;
}


Game.prototype.init=function() {
    this.addPlayer();

}


Game.prototype.addPlayer=function(){
    var x,y,z,id;
    id=1;
    x=0;
    y=1;
    z=0;
    var newPlayer=new Player(id,x,y,z);
    newPlayer.addToScene(this.scene);
    this.players.push(newPlayer);
}

Game.prototype.update=function () {

    for(var i=0;i<this.players.length;i++){
        var p=this.players[i];
        p.update();
        if(p.id==this.my_id){
            /*if(keys[65]==1) this.players[i].velocity.x=-0.02;
            if(keys[68]==1) this.players[i].velocity.x=0.02;
            if(keys[65]==0 && keys[68]==0) this.players[i].velocity.x=0;*/


            if(keys[87]==1) this.players[i].move_forward();
            if(keys[83]==1) this.players[i].move_backward();
            //if(keys[87]==1) this.players[i].velocity.y=0.02;
            //if(keys[83]==1) this.players[i].velocity.y=-0.02;
            if(keys[87]==0 && keys[83]==0) this.players[i].setVelocity(0,0,0);
            if(isMouse){
                this.players[i].mesh.rotation.y-=movementX/1000;
                isMouse=false;
            }
            camera.update(p);

        }
    }

}
Game.prototype.getPlayerById=function (id) {
    for (var i=0;i<this.players.length;i++){
        var p=this.players[i];
        if(p.id==this.my_id){
            return p;
        }
    }
    return null;
}
Game.prototype.getLookAt=function () {
    for (var i=0;i<this.players.length;i++){
        var p=this.players[i];
        if(p.id==this.my_id){
            return new THREE.Vector3(0,0,0);
            return new THREE.Vector3(p.mesh.position.x,p.mesh.position.y,p.mesh.position.z);
        }
    }
    return new THREE.Vector3(0,0,0);

}