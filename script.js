const cube = document.getElementById("cube");
let rotationX = 0;
let rotationY = 0;
let scale = 1;
let perspective = 800;

let animationFrameId;
let isRotating = false;

function rotateCube() {
    cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg) scale(${scale})`;
    document.getElementById("game-container").style.perspective = `${perspective}px`;
    animationFrameId = requestAnimationFrame(rotateCube);
}

document.addEventListener("keydown", (event) => {
    if (!isRotating) {
        isRotating = true;
        rotateCube();
    }

    switch (event.key) {
        case "ArrowLeft":
            rotationY -= 5;
            break;
        case "ArrowRight":
            rotationY += 5;
            break;
        case "ArrowUp":
            rotationX += 5;
            break;
        case "ArrowDown":
            rotationX -= 5;
            break;
    }
});

document.addEventListener("keyup", () => {
    isRotating = false;
    cancelAnimationFrame(animationFrameId);
});

const zoomInButton = document.getElementById("zoom-in");
const zoomOutButton = document.getElementById("zoom-out");

zoomInButton.addEventListener("click", () => {
    scale += 0.1;
    perspective += 80; // Adjust this value as needed
});

zoomOutButton.addEventListener("click", () => {
    scale -= 0.1;
    perspective -= 80; // Adjust this value as needed
});
