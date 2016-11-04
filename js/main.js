var scene, renderer, camera;
var terrain;
var game;
var keys = new Array(500);
var movementX=0,movementY=0,isMouse=false;
keys.fill(0);
$(document).ready(function () {


    camera = new Camera();
    camera.camera.position.set(0, 2, 5);
    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    terrain = new Terrain();
    terrain.addToScene(scene);

    game = new Game(scene);
    game.init();
    setPointer();
    render();
});

function setPointer(){
    var havePointerLock = 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document;
    if(havePointerLock){
        var element = document.body;
        $(element).click(function (event) {
            element.requestPointerLock = element.requestPointerLock || element.mozRequestPointerLock || element.webkitRequestPointerLock;
            element.requestPointerLock();

            element.requestFullscreen = element.requestFullscreen || element.mozRequestFullscreen || element.mozRequestFullScreen || element.webkitRequestFullscreen;
            element.requestFullscreen();
        });
    }
};



function render() {
    renderer.render(scene, camera.camera);

    camera.update(game.getPlayerById(game. my_id));
    game.update();
    console.log('hhh');
    requestAnimationFrame(render);
}