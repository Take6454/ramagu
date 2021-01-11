
/* S3 EP33 three js //////////////////////////////////////////////////////////////*/

import * as THREE from './build/three.module.min.js';       
import Stats from './jsm/libs/stats.module.min.js';
import { OrbitControls } from './jsm/controls/OrbitControls.min.js';
var camera31, scene31, renderer31, stats31;
var pointLight31, pointLight231;
init31();
animate31();
function init31() {
camera31 = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
camera31.position.set( 0, 10, 40 );
scene31 = new THREE.Scene();
scene31.add( new THREE.AmbientLight( 0x111122 ) );
function createLight( color ) {
var intensity = 1.5;
var pointLight31 = new THREE.PointLight( color, intensity, 20 );
pointLight31.castShadow = true;
pointLight31.shadow.camera.near = 1;
pointLight31.shadow.camera.far = 60;
pointLight31.shadow.bias = - 0.005; 
var geometry3 = new THREE.SphereBufferGeometry( 0.3, 12, 6 );
var material = new THREE.MeshBasicMaterial( { color: color } );
material.color.multiplyScalar( intensity );
var sphere = new THREE.Mesh( geometry3, material );
pointLight31.add( sphere );
var texture = new THREE.CanvasTexture( generateTexture31() );
texture.magFilter = THREE.NearestFilter;
texture.wrapT = THREE.RepeatWrapping;
texture.wrapS = THREE.RepeatWrapping;
texture.repeat.set( 1, 4.5 );
var geometry3 = new THREE.SphereBufferGeometry( 2, 32, 8 );
var material = new THREE.MeshPhongMaterial( {
side: THREE.DoubleSide,
alphaMap: texture,
alphaTest: 0.5
} );
var sphere = new THREE.Mesh( geometry3, material );
sphere.castShadow = true;
sphere.receiveShadow = true;
pointLight31.add( sphere );
var distanceMaterial = new THREE.MeshDistanceMaterial( {
alphaMap: material.alphaMap,
alphaTest: material.alphaTest
} );
sphere.customDistanceMaterial = distanceMaterial;
return pointLight31;
}
pointLight31 = createLight( 0x0088ff );
scene31.add( pointLight31 );
pointLight231 = createLight( 0xff8888 );
scene31.add( pointLight231 );
//var geometry = new THREE.BoxBufferGeometry( 30, 30, 30 );
var geometry = new THREE.BoxBufferGeometry( 30, 25, 100 );
var material = new THREE.MeshPhongMaterial( {
color: 0xa0adaf,
shininess: 10,
specular: 0x111111,
side: THREE.BackSide
} );
var mesh = new THREE.Mesh( geometry, material );
mesh.position.y = 10;
mesh.receiveShadow = true;
scene31.add( mesh );
renderer31 = new THREE.WebGLRenderer( { antialias: true } );
renderer31.setPixelRatio( window.devicePixelRatio );
//renderer31.setSize( window.innerWidth, window.innerHeight );
/*renderer31.setSize( window.innerWidth,360 );*/
if(matchMedia('(max-width: 560px)').matches){
    renderer31.setSize( window.innerWidth,180 );
  }  else if (matchMedia('(max-width: 960px)').matches){
    renderer31.setSize( window.innerWidth,370 );
  } else if (matchMedia('(max-width: 1025px)').matches){
    renderer31.setSize( window.innerWidth,510 );
  } else {
    renderer31.setSize( window.innerWidth,360 );
  }

renderer31.shadowMap.enabled = true;
renderer31.shadowMap.type = THREE.BasicShadowMap;
var abc31 = document.getElementById("bbbb3");
abc31.appendChild( renderer31.domElement );
var controls = new OrbitControls( camera31, renderer31.domElement );
controls.target.set( 0, 10, 0 );
controls.update();
stats31 = new Stats();
window.addEventListener( 'resize', onWindowResize31, false );
}
function onWindowResize31() {
camera31.aspect = window.innerWidth / window.innerHeight;
camera31.updateProjectionMatrix();
renderer31.setSize( window.innerWidth, window.innerHeight );
}  
function generateTexture31() {
var canvas = document.createElement( 'canvas' );
canvas.width = 2;
canvas.height = 2;
var context = canvas.getContext( '2d' );
context.fillStyle = 'white';
context.fillRect( 0, 1, 2, 1 );
return canvas;
} 
function animate31() {
requestAnimationFrame( animate31 );
render31();
}
function render31() {
var time = performance.now() * 0.001;
pointLight31.position.x = Math.sin( time * 0.6 ) * 9;
pointLight31.position.y = Math.sin( time * 0.7 ) * 9 + 6;
pointLight31.position.z = Math.sin( time * 0.8 ) * 9;
pointLight31.rotation.x = time;
pointLight31.rotation.z = time;
time += 10000;
pointLight231.position.x = Math.sin( time * 0.6 ) * 9;
pointLight231.position.y = Math.sin( time * 0.7 ) * 9 + 6;
pointLight231.position.z = Math.sin( time * 0.8 ) * 9;
pointLight231.rotation.x = time;
pointLight231.rotation.z = time;
renderer31.render( scene31, camera31 );
stats31.update();
}
/* S4 Video444 three js //////////////////////////////////////////////////////////////*/
/*import * as THREE from './build/three.module.js';*/
/*import Stats from './jsm/libs/stats.module.js'; */
import { GUI } from './jsm/libs/dat.gui.module.min.js';
var camera4, scene4, renderer4, stats4, materials4 = [], parameters;
var mouseX4 = 0, mouseY4 = 0;
var windowHalfX4 = window.innerWidth / 2;
var windowHalfY4 = window.innerHeight / 2;

init4();
animate4();
function init4() {
camera4 = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 2000 );
camera4.position.z = 1000;
scene4 = new THREE.Scene();
scene4.fog = new THREE.FogExp2( 0x000000, 0.0008 );
var geometry = new THREE.BufferGeometry();
var vertices = [];
var textureLoader = new THREE.TextureLoader();
var sprite1 = textureLoader.load( 'img/snowflake1-cutout.png' );
var sprite2 = textureLoader.load( 'img/snowflake2-cutout.png' );
var sprite3 = textureLoader.load( 'img/snowflake2-cutout.png' );
var sprite4 = textureLoader.load( 'img/snowflake4-cutout.png' );
var sprite5 = textureLoader.load( 'img/snowflake5-cutout.png' );  
//for ( var i = 0; i < 10000; i ++ ) {
for ( var i = 0; i < 2000; i ++ ) {   
var x = Math.random() * 2000 - 1000;
var y = Math.random() * 2000 - 1000;
var z = Math.random() * 2000 - 1000;  
vertices.push( x, y, z );  
}  
geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );  
parameters = [
[[ 1.0, 0.2, 0.5 ], sprite2, 20 ],
[[ 0.95, 0.1, 0.5 ], sprite3, 15 ],
[[ 0.90, 0.05, 0.5 ], sprite1, 10 ],
[[ 0.85, 0, 0.5 ], sprite5, 8 ],
[[ 0.80, 0, 0.5 ], sprite4, 5 ]
];   
for ( var i = 0; i < parameters.length; i ++ ) { 
var color = parameters[ i ][ 0 ];
var sprite = parameters[ i ][ 1 ];
var size = parameters[ i ][ 2 ];
materials4[ i ] = new THREE.PointsMaterial( { size: size, map: sprite, blending: THREE.AdditiveBlending, depthTest: false, transparent: true } );
materials4[ i ].color.setHSL( color[ 0 ], color[ 1 ], color[ 2 ] );
var particles = new THREE.Points( geometry, materials4[ i ] );
particles.rotation.x = Math.random() * 6;
particles.rotation.y = Math.random() * 6;
particles.rotation.z = Math.random() * 6;
scene4.add( particles );
}  
renderer4 = new THREE.WebGLRenderer({alpha:true});
renderer4.setPixelRatio( window.devicePixelRatio );
renderer4.setSize( window.innerWidth, window.innerHeight );
var con4 = document.getElementById('con4');
con4.appendChild( renderer4.domElement );  
stats4 = new Stats();
window.addEventListener( 'resize', onWindowResize4, false );
}
function onWindowResize4() {
windowHalfX4 = window.innerWidth / 2;
windowHalfY4 = window.innerHeight / 2;
camera4.aspect = window.innerWidth / window.innerHeight;
camera4.updateProjectionMatrix();
renderer4.setSize( window.innerWidth, window.innerHeight );
}           
function animate4() {
requestAnimationFrame( animate4 );
render4();
stats4.update();
}
function render4() {
var time = Date.now() * 0.00005;
camera4.position.x += ( mouseX4 - camera4.position.x ) * 0.05;
camera4.position.y += ( - mouseY4 - camera4.position.y ) * 0.05;
camera4.lookAt( scene4.position );
for ( var i = 0; i < scene4.children.length; i ++ ) {
var object = scene4.children[ i ];
if ( object instanceof THREE.Points ) {
object.rotation.y = time * ( i < 4 ? i + 1 : - ( i + 1 ) );
}
}
for ( var i = 0; i < materials4.length; i ++ ) {
var color = parameters[ i ][ 0 ];
var h = ( 360 * ( color[ 0 ] + time ) % 360 ) / 360;
materials4[ i ].color.setHSL( h, color[ 1 ], color[ 2 ] );
}
renderer4.render( scene4, camera4 );
}
/*  red object /////////////////////  */

import { VRButton } from './jsm/webxr/VRButton.min.js';

var camera42, scene42, renderer42;
var attractor42, light42;
var x42 = 15 * Math.random();
var y42 = 15 * Math.random();
var z42 = 15 * Math.random();
//var scale42 = .02; // for reducing overall displayed size
var scale42 = .024; // for reducing overall displayed size
var speed42 = 5; // integer, increase for faster visualization
var steps42 = 100000;
var current42 = 1;
var shown42 = 10000;
var beta42 = 8 / 3;
var rho42 = 28;
var sigma42 = 10;
var dt42 = .005;

if(matchMedia('(min-width: 1250px)').matches){
  
init42();
animate42();
}
/*init42();
animate42();*/

function draw42() {
var geometry = attractor42.geometry;
geometry.attributes.position.array.copyWithin( 3 );
geometry.attributes.color.array.copyWithin( 3 );
if ( current42 < steps42 ) {
var dx = sigma42 * ( y42 - x42 ) * dt42;
var dy = ( x42 * ( rho42 - z42 ) - y42 ) * dt42;
var dz = ( x42 * y42 - beta42 * z42 ) * dt42;
x42 += dx;
y42 += dy;
z42 += dz;
geometry.attributes.position.set( [ scale42 * x42, scale42 * y42, scale42 * z42 ], 0 );
light42.color.setHSL( current42 / steps42, 1, .5 );
geometry.attributes.color.set( light42.color.toArray(), 0 );
}
if ( current42 < steps42 + shown42 ) {
current42 ++;
} else {
current42 = 0;
}
}
function init42() {
scene42 = new THREE.Scene();
camera42 = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 10 );
camera42.position.set( 0, 1.6, 1 );
var geometry = new THREE.BufferGeometry();
var positions = new Float32Array( 3 * shown42 );
for ( var i = 0; i < positions.length; i += 3 ) {
positions.set( [ scale42 * x42, scale42 * y42, scale42 * z42 ], i );
}  
geometry.setAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
var colors = new Float32Array( 3 * shown42 );
for ( var i = 0; i < positions.length; i += 3 ) {
colors.set( [ 1, 0, 0 ], i );
}       
geometry.setAttribute( 'color', new THREE.BufferAttribute( colors, 3 ) );
var material = new THREE.LineBasicMaterial( { vertexColors: true } );
attractor42 = new THREE.Line( geometry, material );
attractor42.position.set( 0, 1.5, - 2 );
attractor42.frustumCulled = false; 
scene42.add( attractor42 );
light42 = new THREE.PointLight( 0xffffff, 1 );
light42.distance = 2;
attractor42.add( light42 );
var ground = new THREE.Mesh(
new THREE.PlaneBufferGeometry( 10, 10 ),
new THREE.MeshPhongMaterial()
);
ground.geometry.rotateX( - 90 * Math.PI / 180 );
renderer42 = new THREE.WebGLRenderer( {alpha:true} );
renderer42.setPixelRatio( window.devicePixelRatio );

renderer42.setSize( 410, 410 );

renderer42.xr.enabled = true;
var con442 = document.getElementById("con442");
con442.appendChild( renderer42.domElement );
con442.appendChild( VRButton.createButton( renderer42 ) );
window.addEventListener( 'resize', onWindowResize42, false );
}
function onWindowResize42() {
camera42.aspect = window.innerWidth / window.innerHeight;
camera42.updateProjectionMatrix();

//renderer42.setSize( window.innerWidth, window.innerHeight );

renderer42.setSize( 300, 300 );
}  
function animate42() {
renderer42.setAnimationLoop( render42 );
}
function render42() {
for ( var i = 0; i < speed42; i ++ ) draw42();
attractor42.geometry.attributes.position.needsUpdate = true;
attractor42.geometry.attributes.color.needsUpdate = true;
attractor42.rotation.z += .001;
renderer42.render( scene42, camera42 );
}  
/* S5 Photo666 /////////////////////////////////////////////////////////////////////////////////*/
/*import * as THREE from './build/three.module.js';*/
var container6;
var camera6, scene6, renderer6;
var spheres6 = [];
var mouseX6 = 0, mouseY6 = 0;
var windowHalfX6 = window.innerWidth / 2;
var windowHalfY6 = window.innerHeight / 2;
init6();
animate6();
function init6() {
container6 = document.getElementById('base61');
var base62 = document.getElementById('base62');
base62.appendChild( container6 );
camera6 = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 100000 );
camera6.position.z = 3200;
scene6 = new THREE.Scene();
scene6.background = new THREE.CubeTextureLoader()
.setPath( 'textures/cube/Park3Med/' )
.load( [ 'px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg' ] );
//.load( ['nz.jpg', 'nz.jpg', 'nz.jpg', 'nz.jpg', 'nz.jpg', 'nz.jpg'] );

var geometry = new THREE.SphereBufferGeometry( 100, 32, 16 );
var material = new THREE.MeshBasicMaterial( { color: 0xffffff, envMap: scene6.background, refractionRatio: 0.95 } );
material.envMap.mapping = THREE.CubeRefractionMapping;
for ( var i = 0; i < 500; i ++ ) {
var mesh = new THREE.Mesh( geometry, material );
mesh.position.x = Math.random() * 10000 - 5000;
mesh.position.y = Math.random() * 10000 - 5000;
mesh.position.z = Math.random() * 10000 - 5000;
mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 3 + 1;
scene6.add( mesh );
spheres6.push( mesh );
}
renderer6 = new THREE.WebGLRenderer();
renderer6.setPixelRatio( window.devicePixelRatio );

//renderer6.setSize( window.innerWidth, window.innerHeight );
/*////////////////////////////////////////////////////////////////////////////////////*/
if(matchMedia('(max-width: 560px)').matches){
  renderer6.setSize( window.innerWidth,230 );
}  else if (matchMedia('(max-width: 960px)').matches){
  renderer6.setSize( window.innerWidth,511 );
} else if (matchMedia('(max-width: 1025px)').matches){
  renderer6.setSize( window.innerWidth,681);
}  
 else {
renderer6.setSize( window.innerWidth, 328 );
}

/*renderer6.setSize( window.innerWidth, 380 );*/

/*renderer6.setSize( window.innerWidth, 230 );*/

container6.appendChild( renderer6.domElement ); 

/*window.addEventListener( 'resize', onWindowResize6, false );*/
}
onResize();
window.addEventListener( 'resize', onResize);
/*////////////////////////////////////////////////////////////////////////////////////*/
function onResize(){
    renderer6.setPixelRatio( window.devicePixelRatio );
   /* renderer6.setSize( window.innerWidth, 380 );*/

    /*renderer6.setSize( window.innerWidth, 230 );*/
    if(matchMedia('(max-width: 560px)').matches){
      renderer6.setSize( window.innerWidth,230 );
} else if (matchMedia('(max-width: 960px)').matches){
  renderer6.setSize( window.innerWidth,511 );
} else if (matchMedia('(max-width: 1025px)').matches){
  renderer6.setSize( window.innerWidth,681);
}   else {
  renderer6.setSize( window.innerWidth, 328 );
}
}

function animate6() {
requestAnimationFrame( animate6 );
render6();
}
function render6() {
var timer = 0.0001 * Date.now();
for ( var i = 0, il = spheres6.length; i < il; i ++ ) {
var sphere = spheres6[ i ];
sphere.position.x = 5000 * Math.cos( timer + i );
sphere.position.y = 5000 * Math.sin( timer + i * 1.1 );
}
camera6.position.x += ( mouseX6 - camera6.position.x ) * .05;
camera6.position.y += ( - mouseY6 - camera6.position.y ) * .05;
camera6.lookAt( scene6.position );
renderer6.render( scene6, camera6 );
}
/* S6 Live555 /////////////////////////////////////////////////////////////////////////////////*/

/*////////////////サイコロ////////////////////////*/
window.addEventListener('load', init73);
function init73() {
// サイズを指定
const width73 = 600;
const height73= 600;
const rendere73 = new THREE.WebGLRenderer({
canvas: document.querySelector('#myCanvas73'),
alpha: true
});
rendere73.setPixelRatio(window.devicePixelRatio);

if(matchMedia('(max-width: 560px)').matches){
  rendere73.setSize(50,50);
} else if (matchMedia('(max-width: 760px)').matches){
  rendere73.setSize(50,50);
}  else if (matchMedia('(max-width: 960px)').matches){
  rendere73.setSize(400,400);
}  else if (matchMedia('(max-width: 1025px)').matches){
  rendere73.setSize(500,500);
} else {
  rendere73.setSize(600,600);

}
/*
rendere73.setSize(width73, height73);*/

const scene73 = new THREE.Scene();
const camera73 = new THREE.PerspectiveCamera(45, width73 / height73);
camera73.position.set(0, 0, +1000);
// 箱を作成
const geometry73 = new THREE.BoxGeometry(350, 350, 350);
var cubeMaterials73 = 
[
new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load('img/20634597_127650984512997_262461465728909312_n.jpg'), side: THREE.DoubleSide } ),
new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load('img/33086703_215621175907979_4741406563481157632_n.jpg'), side: THREE.DoubleSide } ),
new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load(''), side: THREE.DoubleSide} ),
new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load(''), side: THREE.DoubleSide } ),
new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load('img/60058418_394740934586366_1223041450432585136_n.jpg'), side: THREE.DoubleSide } ),
new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load('img/68825903_432016257421272_6198527963136925581_n.jpg'), side: THREE.DoubleSide } )
];
var material73 = new THREE.MeshFaceMaterial( cubeMaterials73 )
const box = new THREE.Mesh(geometry73, material73);
scene73.add(box);
tick73();
function tick73() {
//回るスピード
//box.rotation.y += 0.01;//
box.rotation.y += 0.03;
rendere73.render(scene73, camera73); // レンダリング
requestAnimationFrame(tick73);
}


 
  if(matchMedia('(max-width: 560px)').matches){
  rendere73.setSize(300,300);
}  else if (matchMedia('(max-width: 960px)').matches){
  rendere73.setSize(400,400);
}  else if (matchMedia('(max-width: 1025px)').matches){
  rendere73.setSize(500,500);
} else {
  rendere73.setSize(600,600);

}


}
/* S7 Contact777  /////////////////////////////////////////////////////////////////////////////////*/
/*import * as THREE from './build/three.module.js';*/
/*import Stats from './jsm/libs/stats.module.js';*/
/*import { OrbitControls } from './jsm/controls/OrbitControls.js';*/
import { Water } from './jsm/objects/Water.min.js';
import { Sky } from './jsm/objects/Sky.min.js';
var container8, stats8;
var camera8, scene8, renderer8, light8;
var controls8, water8, sphere8;
init8();
animate8();
function init8() {
container8 = document.getElementById( 'container71' );
renderer8 = new THREE.WebGLRenderer();
renderer8.setPixelRatio( window.devicePixelRatio );
renderer8.setSize( window.innerWidth, window.innerHeight );
container8.appendChild( renderer8.domElement );
scene8 = new THREE.Scene();
camera8 = new THREE.PerspectiveCamera( 55, window.innerWidth / window.innerHeight, 1, 20000 );
camera8.position.set( 30, 30, 100 );
light8 = new THREE.DirectionalLight( 0xffffff, 0.8 );
scene8.add( light8 );
var waterGeometry = new THREE.PlaneBufferGeometry( 10000, 10000 );
water8 = new Water(
waterGeometry,
{
textureWidth: 512,
textureHeight: 512,
waterNormals: new THREE.TextureLoader().load( 'textures/waternormals.jpg', function ( texture ) {
texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
} ),
alpha: 1.0,
sunDirection: light8.position.clone().normalize(),
sunColor: 0xffffff,
waterColor: 0x001e0f,
distortionScale: 3.7,
fog: scene8.fog !== undefined
}
);
water8.rotation.x = - Math.PI / 2;
scene8.add( water8 );
var sky8 = new Sky(); 
var uniforms8 = sky8.material.uniforms;
uniforms8[ 'turbidity' ].value = 10;
uniforms8[ 'rayleigh' ].value = 2;
uniforms8[ 'luminance' ].value = 1;
uniforms8[ 'mieCoefficient' ].value = 0.005;
uniforms8[ 'mieDirectionalG' ].value = 0.8; 
var parameters8 = {
distance: 400,
inclination: 0.49,
azimuth: 0.205
};
var cubeCamera8 = new THREE.CubeCamera( 0.1, 1, 512 );
cubeCamera8.renderTarget.texture.generateMipmaps = true;
cubeCamera8.renderTarget.texture.minFilter = THREE.LinearMipmapLinearFilter;
scene8.background = cubeCamera8.renderTarget;
function updateSun8() {
var theta = Math.PI * ( parameters8.inclination - 0.5 );
//var theta = Math.PI * ( parameters.inclination - 0.6 );/* daytime */
var phi = 2 * Math.PI * ( parameters8.azimuth - 0.5 );
light8.position.x = parameters8.distance * Math.cos( phi );
light8.position.y = parameters8.distance * Math.sin( phi ) * Math.sin( theta );
light8.position.z = parameters8.distance * Math.sin( phi ) * Math.cos( theta );
sky8.material.uniforms[ 'sunPosition' ].value = light8.position.copy( light8.position );
water8.material.uniforms[ 'sunDirection' ].value.copy( light8.position ).normalize();
cubeCamera8.update( renderer8, sky8 );
}
updateSun8(); 
var geometry = new THREE.IcosahedronBufferGeometry( 20, 1 );
var count = geometry.attributes.position.count;
var colors = [];
var color = new THREE.Color();
for ( var i = 0; i < count; i += 3 ) {
color.setHex( Math.random() * 0xffffff );
colors.push( color.r, color.g, color.b );
colors.push( color.r, color.g, color.b );
colors.push( color.r, color.g, color.b );
} 
geometry.setAttribute( 'color', new THREE.Float32BufferAttribute( colors, 3 ) );
var material = new THREE.MeshStandardMaterial( {
vertexColors: true,
roughness: 0.0,
flatShading: true,
envMap: cubeCamera8.renderTarget.texture, 
side: THREE.DoubleSide
} ); 
sphere8 = new THREE.Mesh( geometry, material );
/*  ball     ////////////////*/
//scene8.add( sphere8 ); 
/*  固定　　　*/
controls8 = new OrbitControls( camera8, renderer8.domElement );
controls8.maxPolarAngle = Math.PI * 0.495;
controls8.target.set( 0, 10, 0 );
controls8.minDistance = 40.0;
controls8.maxDistance = 200.0;
controls8.update(); 
window.addEventListener( 'resize', onWindowResize8, false );
}
function onWindowResize8() {
camera8.aspect = window.innerWidth / window.innerHeight;
camera8.updateProjectionMatrix();
renderer8.setSize( window.innerWidth, window.innerHeight );
}
function animate8() {
requestAnimationFrame( animate8 );
render8();
}
function render8() {
var time = performance.now() * 0.001;
sphere8.position.y = Math.sin( time ) * 20 + 5;
sphere8.rotation.x = time * 0.5;
sphere8.rotation.z = time * 0.51;
water8.material.uniforms[ 'time' ].value += 1.0 / 60.0;
renderer8.render( scene8, camera8 );
}

