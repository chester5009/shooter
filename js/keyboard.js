/**
 * Created by chester on 04.11.16.
 */

$(document).on("keydown",function (event) {
    id=event.which;
    keys[id]=1;
    console.log("pressed ",id);
});

$(document).on("keyup",function (event) {
    id=event.which;
    keys[id]=0;
    console.log("upped ",id);
});

document.addEventListener( 'mousemove', onMouseMove, false );
function onMouseMove(event){
    movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
    movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;
    //console.log("mouse "+event.offsetX+" "+event.offsetY);
    console.log("mouse "+movementX+" "+movementY)
    isMouse=true;
}

