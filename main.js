const scene = new THREE.Scene();
scene.background = new THREE.Color(0xdddddd);
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);
// const newcamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);
camera.position.z = -1;

const renderer = new THREE.WebGLRenderer({
    antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// var helper = new THREE.CameraHelper(newcamera);
// scene.add(helper);

//lights
hlight = new THREE.AmbientLight(0xffffff, 1);
scene.add(hlight);

directionalLight = new THREE.DirectionalLight(0xffffff,100);
directionalLight.position.set(0,1,0);
directionalLight.castShadow = true;
scene.add(directionalLight);

light = new THREE.PointLight(0xc4c4c4,10);
light.position.set(0,300,500);
scene.add(light);

// light2 = new THREE.PointLight(0xc4c4c4,10);
// light2.position.set(500,100,0);
// scene.add(light2);
// light3 = new THREE.PointLight(0xc4c4c4,10);
// light3.position.set(0,100,-500);
// scene.add(light3);
// light4 = new THREE.PointLight(0xc4c4c4,10);
// light4.position.set(-500,300,500);
// scene.add(light4);

//import model
let loader = new THREE.GLTFLoader();
loader.load('../model/3/scene.gltf', function(gltf) {
    car = gltf.scene.children[0]; 
    car.position.z=-4.5;
    car.position.y=-1;
    car.position.x=-.5;
    car.rotation.z=-7;
    scene.add(gltf.scene);
    renderer.render(scene, camera);
    animate();
});

loader = new THREE.GLTFLoader();
loader.load('../model/2/scene.gltf', function(gltf) {
    car = gltf.scene.children[0]; 
    car.position.z=-6;
    car.position.y=-9;
    car.position.x=-1;
    car.rotation.z=-7;
    scene.add(gltf.scene);
    renderer.render(scene, camera);
    animate();
});

loader = new THREE.GLTFLoader();
loader.load('../model/1/scene.gltf', function(gltf) {
    car = gltf.scene.children[0]; 
    car.position.z=-6;
    car.position.y=-18;
    car.rotation.z=-7;
    scene.add(gltf.scene);
    renderer.render(scene, camera);
    animate();
});

function moveCamera() {
    const t = document.body.getBoundingClientRect().top;
    camera.position.y = t * +0.01;
    // camera.position.x = t * -0.0002;
    // camera.rotation.y = t * -0.0002;
  }
  
  document.body.onscroll = moveCamera;
  moveCamera();

function animate() {
    requestAnimationFrame(animate);

    // camera.lookAt(newcamera.position);

    // camera.position.x = Math.cos(i) *30;
    // camera.position.z = Math.sin(i) *30;

    // i += 0.01;
    // car.rotation.z += 0.01;
    renderer.render(scene,camera);
}




