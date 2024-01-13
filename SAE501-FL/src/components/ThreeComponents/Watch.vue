<script setup>
import {ref, onMounted, onBeforeUnmount, onBeforeUpdate, toRefs, onUpdated } from 'vue';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader.js';
import * as THREE from 'three'
const canvas = ref(null)
var controls = null
var clock = new THREE.Clock();
var clickInfo=[];
var animations=[];
var obstacles=[];

let scene = null
let camera = null
// let cube = null
let renderer = null
let animationId = null

var boitierC = null
var boitierR = null 
var bracelet = null
var braceletTextures = null
var boitierBkrd = null
let aiguilleH = null
let aiguilleM = null
let aiguilleS = null

var SCREEN_WIDTH,SCREEN_HEIGHT,SCREEN_LEFT,SCREEN_TOP;

const raycaster = new THREE.Raycaster();
// var boutonMontre = null
// var fermoirMontre = null
// var pierreMontre = null

const props = defineProps({
  boitier_shape:String,
  fond:String,
  bracelet_tissu:String,
});

const boitier = toRefs(props);
const boitierFond = boitier.fond.value
const braceletTissue = boitier.bracelet_tissu.value
boitier.fond.value = "black02"; 
boitier.bracelet_tissu.value = "cuir_blanc";

console.log(boitier)
// console.log(boitierFond)

// // console.log(boitier.boitier_shape.value)
// // console.log(boitier.fond.value)
// console.log(braceletTissue)


const initScene = () => {
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z=1.5
  
  SCREEN_WIDTH = canvas.value.scrollWidth;
  SCREEN_HEIGHT = canvas.value.scrollHeight;
  SCREEN_LEFT = canvas.value.offsetLeft - canvas.value.scrollLeft + canvas.value.clientLeft;
  SCREEN_TOP = canvas.value.offsetTop - canvas.value.scrollTop + canvas.value.clientTop;  

  renderer = new THREE.WebGLRenderer({canvas: canvas.value})
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setClearColor(0x222222,1);
  controls = new OrbitControls(camera,renderer.domElement);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
 

  // TExture de fond scène
  const textureLoader = new THREE.TextureLoader();
    textureLoader.load('/background/Wood_023_basecolor.jpg', function(texture) {
        scene.background = texture; // Définir l'image comme arrière-plan de la scène
    });

//Sol noir : 
    const planeGeometry = new THREE.PlaneGeometry(0.30, 0.30); // Taille du plan, à ajuster selon vos besoins
    const planeMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2; // Rotation pour que le plan soit horizontal
    plane.position.y = -0.05; // Positionnement sous la montre, ajuster selon la position de votre montre
    scene.add(plane);

    // Sphère avec la fog de zone : 
    // Création d'une sphère semi-transparente
    const sphereGeometry = new THREE.SphereGeometry(0.23, 32, 32); // Rayon à ajuster selon vos besoins
    const sphereMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xffffff,
        transparent: true,
        opacity: 0.05,
        side: THREE.DoubleSide // Pour rendre l'intérieur de la sphère visible
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.y = 0; // Ajustez cette valeur pour aligner avec votre sol
    // Ajout du brouillard
    scene.fog = new THREE.FogExp2(0xcccccc, 0.50); // Ajustez la densité selon vos besoins
    scene.add(sphere);

    
  //Lumière de la montre
  var pointLight = new THREE.PointLight(0xffffff,2);
  		pointLight.position.set(0, 1, 0);

	scene.add(pointLight);
  var pointLight2 = new THREE.PointLight(0xffffff,2);
  		pointLight2.position.set(1, -1, 1);

	scene.add(pointLight2);


  clock.start();
  var loader = new ColladaLoader();
  loader.load('/models/montre.dae', onLoaded, onProgress, onError ); 
}

const animate = () => {
  let dt=clock.getDelta();
  // console.log('animation is running')
  animationId = requestAnimationFrame(animate)
  // cube.rotation.x += 0.1
    let intersections = raycaster.intersectObjects(obstacles,true);

  renderer.render(scene, camera)
   if (clickInfo.userHasClicked) {
        console.log(
            "("+parseInt(0.5*(clickInfo.mouse.x+1)*SCREEN_WIDTH+SCREEN_LEFT)+
            ";"+parseInt(-0.5*(clickInfo.mouse.y-1)*SCREEN_HEIGHT+SCREEN_TOP)+")");
          clickInfo.userHasClicked=false; // pret pour le clique suivant
        raycaster.setFromCamera(clickInfo.mouse,camera);
          let intersections = raycaster.intersectObjects(scene.children,true);
        let obj=null;
                  // console.log("test",  scene.children)
                  // console.log("test",  raycaster.intersectObjects(scene.children,true))
          if (intersections.length>0) {
            obj = intersections[0].objects; // l'objet de la premiere intersection
            // si l'objet à un nom vide alors on sélectionne son pere
            while (obj!=null && obj.name=="") { // cherche le nom du parent
                obj=obj.parent;
            }
            console.log(obj.name + " uv= (" +
            intersections[0].uv.x.toFixed(2) + "," +
            intersections[0].uv.y.toFixed(2) + ")");
            if (obj) { // Lance la fonction onclick sur l'objet cliqué
                animations.forEach(objects => {
                    if (objects.name==obj.name) {
                        objects.onClick(intersections[0]);
                    }
                });
            }
        }
    }

  animations.forEach(objects => { // mettre à jour l'animation sur tous les objects cliquables
      objects.updateAnimation(dt);
    });
  updateClockHands();
}
const updateClockHands = () => {
    const now = new Date();
    const hours = now.getHours() % 12; // Modulo 12 pour convertir les heures en format 12 heures
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Mettez à jour les rotations des aiguilles
    if (aiguilleH) {
        const hoursRotation = (hours + minutes / 60) * (Math.PI / 6); // 30 degrés par heure, 0.5 degré par minute
        aiguilleH.rotation.z = -hoursRotation;
    }

    if (aiguilleM) {
        const minutesRotation = minutes * (Math.PI / 30); // 6 degrés par minute
        aiguilleM.rotation.z = -minutesRotation;
    }

    if (aiguilleS) {
        const secondsRotation = seconds * (Math.PI / 30); // 6 degrés par seconde
        aiguilleS.rotation.z = -secondsRotation;
    }
};
function onLoaded(collada) {
      let objects = collada.scene;
      boitierC =objects.getObjectByName('boitier_carre');
      boitierR = objects.getObjectByName('boitier_carre');
      bracelet = objects.getObjectByName('bracelet');
      console.log(bracelet)

      objects.traverse((child) => {
        if (child.name === "aiguille_heures") {
            aiguilleH = child;
        } else if (child.name === "aiguille_minutes") {
            aiguilleM = child;
        } else if (child.name === "aiguille_secondes") {
            aiguilleS = child;
        }
        });

        // console.log(boitierC.material[1].map)
        // console.log(boitier.fond.value)

        if(boitier.boitier_shape.value === "carre"){
        boitierC.visible = true
        boitierR.visible = false
        } else if(boitier.boitier_shape.value === "rond"){
          boitierC.visible = false
        boitierR.visible = true
        }


        braceletTextures = new THREE.TextureLoader().load(`/images/bracelet_${boitier.bracelet_tissu.value}.jpg`);
        boitierBkrd = new THREE.TextureLoader().load(`/images/background_${boitier.fond.value}.png`);
        bracelet.material.map = braceletTextures
          // console.log(boitierBkrd)
          // boitier_carre.material[1].map = boitier_background
        boitierR.material[1].map = boitierBkrd
    
    // aiguilleH =objects.getObjectByName('aiguille_heures');
    // aiguilleM = objects.getObjectByName('aiguille_minutes');
    // aiguilleS = objects.getObjectByName('aiguille_minutes');
    // boutonMontre =objects.getObjectByName('bouton');
    
    // fermoirMontre = objects.getObjectByName('fermoir');
    // pierreMontre = objects.getObjectByName('pierre');

    // console.log(boitierC)
    setShadow(scene, true, true);
    scene.add(objects);
    
    obstacles.push(objects);

    let dt = clock.getElapsedTime();
    console.log("Loading completed after "+dt+" s.");
  }

var onProgress = function(data) {
  	if ( data.lengthComputable ) {
  			var percentComplete = data.loaded / data.total * 100;
  			console.log( Math.round( percentComplete, 2 ) + '% downloaded' );
		}
	};

	var onError = function(data) {
		console.error(data);
	};

// const onClick = () => {
//     console.log('document cliqué')
// }
function onClickEvent(event) {
    clickInfo.userHasClicked = true;
    clickInfo.mouse = new THREE.Vector2();
    clickInfo.mouse.x = ((event.clientX-SCREEN_LEFT) / SCREEN_WIDTH ) * 2 - 1;
    clickInfo.mouse.y = -((event.clientY-SCREEN_TOP) / SCREEN_HEIGHT ) * 2 + 1;
  }
  function setShadow(object, cast, receive) {
        object.castShadow = cast;
        object.receiveShadow = receive;
        object.children.forEach(function (child) {
          setShadow(child, cast, receive);
        });
      }


onMounted(() => {
  // console.log(window.innerWidth)
  // console.log(canvas.value.innerWidth)
  initScene()
  animate()
  document.addEventListener('click', onClickEvent,false)
})
onBeforeUpdate(() => {
  console.log("Tu vas fonctionner", boitier.fond.value)
})

onUpdated(() => {
  initScene()
  console.log("Que fais-tu", boitier.fond.value)
})
onBeforeUnmount(() => {    
  console.log("T'es gardée ?", boitier.fond.value)
    cancelAnimationFrame(animationId)
    document.removeEventListener('click', onClickEvent)
})

</script>
    
<template>
    <div >
        <canvas ref="canvas" />
        <!-- <h1>{{fond}}</h1>
        <p>Choix du fond :</p>
        <input type="text" :value="boitier_shape">
        <input type="text" :value="fond" />
        <input type="text" :value="bracelet_tissu"> -->        
    </div>
</template>
<style lang="scss" scoped>
</style>
