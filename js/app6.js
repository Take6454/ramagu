////// Loading ////////

jQuery(window).on('load', function() {
  jQuery('.loading').hide();
  jQuery('.loa').hide();
  jQuery('#loader-bg').hide();
});
/*/fullpage////////////////////*/

new fullpage("#fullpage", {
  autoScrolling: true,
  navigation: true,
  
  onLeave: (origin, destination, direction) => { 
    



    if (destination.index === 1) {
      
      setTimeout(function(){
        document.getElementById("img21").classList.add("animate__backInLeft");
      }, 500)
      setTimeout(function(){
        document.getElementById("text21").classList.add("animate__rotateInDownRight");
      }, 1250)
     setTimeout(function(){
       
        document.getElementById("text22").classList.add("active");
        document.getElementById("text222").classList.add("active");
      }, 2000)
      setTimeout(function(){
        document.getElementById("img24").classList.add("animate__fadeInBottomLeft");
        document.getElementById("img25").classList.add("animate__fadeInTopRight");
      },2600)
      setTimeout(function(){
        
        document.getElementById("con22").classList.add("animate__fadeIn");
      }, 3100)
      setTimeout(function(){
        document.getElementById("mask213").classList.add("active");
      }, 3600); 
      
    };
    if (destination.index === 2 && swiper.activeIndex === 0  ) {  
      setTimeout(function(){
        document.getElementById("con3333").classList.add("active");
      },0)     
     setTimeout(function(){
      document.getElementById("mask320").classList.add("animate__zoomInLeft");
      document.getElementById("mask320").classList.add("active");
      }, 500)
      setTimeout(function(){
        document.getElementById("im31").classList.add("animate__slideInRight");
      }, 1000)
      setTimeout(function(){
        document.getElementById("text320").classList.add("animate__flipInY");
        document.getElementById("text320").classList.add("active"); 
      }, 1500)
      setTimeout(function(){
      document.getElementById("im32").classList.add("active")
      }, 2000)
      setTimeout(function(){
        document.getElementById("con34").classList.add("animate__fadeInDown");
        document.getElementById("con35").classList.add("animate__fadeInUp");
        }, 2500)
      setTimeout(function(){
      document.getElementById("con331").classList.remove("prev3");
      }, 3000)
      setTimeout(function(){
        document.getElementById("con331").classList.add("animate__fadeInBottomLeft");
        document.getElementById("con332").classList.add("animate__fadeInTopRight");
      },3000)
      setTimeout(function(){
        document.getElementById("con330").classList.add("animate__flipInX");
      },3500)
      setTimeout(function(){
        document.getElementById("con36").classList.add("animate__fadeIn");
      },4000);
    };
   
     if (destination.index != 2) {
     /**/ 
      document.getElementById("text320").classList.add("animate__flipInY");
      document.getElementById("mask320").classList.add("animate__zoomInLeft");
    };  

    if (destination.index === 3) { 
        setTimeout(function(){
          document.getElementById("con4444").classList.add("active");
        },0)     
        setTimeout(function(){
        /*document.getElementById("con44").classList.add("animate__zoomInUp");*/
        document.getElementById("con44").classList.add("animate__zoomInLeft");
         document.getElementById("con44").classList.add("active");
        },500)
        setTimeout(function(){
        document.getElementById("con43").classList.add("animate__flipInX");
        },1000)
        setTimeout(function(){
        document.getElementById("modalOpen 1").classList.add("animate__lightSpeedInRight");
        document.getElementById("con49").classList.add("animate__lightSpeedInRight");
        },1500)
        setTimeout(function(){
        document.getElementById("con442").classList.add("animate__rotateInUpRight");
        },2000)
        setTimeout(function(){
        document.getElementById("con42").classList.add("animate__rotateIn");
        },2750)
        setTimeout(function(){
        document.getElementById("mask41").classList.add("active");
        document.getElementById("mask4").classList.add("active");
        },3250)
        setTimeout(function(){
        document.getElementById("title4").classList.add("animate__fadeIn");
        }, 4000);
     };   
     if (destination.index === 4) { 
      setTimeout(function(){
        document.getElementById("con63").classList.add("active");
      },0)  
      setTimeout(function(){
        document.getElementById("con69").classList.add("animate__fadeInUp");
        }, 1000)
     setTimeout(function(){
        document.getElementById("loop_css").classList.add("animate__pulse");
      },2000)  
      
      setTimeout(function(){
        document.getElementById("title6").classList.add("animate__fadeIn");
      },3250);
     };   
     if (destination.index === 5) { 
     /* setTimeout(function(){
        document.getElementById("con55551").classList.add("active");
        document.getElementById("con55552").classList.add("active");
      },100)  */
      setTimeout(function(){
        document.getElementById("con55551").classList.add("active");
        document.getElementById("con55552").classList.add("active");
        /*document.getElementById("con55551").classList.remove("con55551");
        document.getElementById("con55552").classList.remove("con55552");*/
      },500)
      setTimeout(function(){
        document.getElementById("myCanvas73").classList.add("animate__slideInLeft");
      },1500)  
      setTimeout(function(){
        document.getElementById("ue78").classList.add("animate__fadeInTopRight");
        document.getElementById("ue788").classList.add("animate__fadeInTopRight");
        document.getElementById("shita79").classList.add("animate__fadeInBottomRight");
      },2000)  
     
      setTimeout(function(){
        document.getElementById("con702").classList.add("animate__fadeIn");
      },2500);
     };   
     if (destination.index === 6) { 
      setTimeout(function(){
        document.getElementById("con77777").classList.add("active");
      },0)  
      setTimeout(function(){
        document.getElementById("con7777").classList.add("active");
        document.getElementById("con77770").classList.add("active");
      },1500)
      setTimeout(function(){
        /*
        document.getElementById("con771").classList.add("active");
        document.getElementById("con741").classList.add("active");*/
        document.getElementById("con771").classList.add("animate__fadeInRight");
        document.getElementById("con741").classList.add("animate__fadeInLeft");
      },3250)
      setTimeout(function(){
        document.getElementById("con721").classList.add("animate__fadeIn");
      },4000);
      };
  }
});
/*if (destination.index === 2 && swiper.activeIndex === 0 && swiper.previousIndex !== 0 ){
  console.log("2");
}*/
/* S1 Home111 //////////////////////////////////////////////////////////////*/

function firstscript(){
   setTimeout(function(){
        document.getElementById("meiji").classList.replace("edo", "logo4");
      }, 850);
}
window.onload = setTimeout("firstscript()",6000);

function maskmask() {
  document.getElementById("mask11").classList.add("active");
}
window.onload = setTimeout("maskmask()",14300);

/* scroll down */
/*
function maskmask1() {
  document.getElementById("box11111").classList.add("animate__fadeInRight");
}
window.onload = setTimeout("maskmask1()",18000);*/
/* white1 */
function maskmask2() {
  document.getElementById("white1").classList.add("active");
}
window.onload = setTimeout("maskmask2()",14300);



/*three js    */
window.addEventListener('load', init1);
function init1() {
let rot1 = 0; 
const renderer1 = new THREE.WebGLRenderer({
  canvas: document.querySelector('#myCanvas1')
});
renderer1.setSize(window.innerWidth , window.innerHeight);
const scene1 = new THREE.Scene();
const camera1 = new THREE.PerspectiveCamera(45,window.innerWidth  / window.innerHeight);
const directionalLight1 = new THREE.DirectionalLight(0xffffff);
directionalLight1.position.set(1, 1, 1);
scene1.add(directionalLight1);
  const material1 = new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load('img/land_ocean_ice_cloud_2048.jpg'),
    side: THREE.DoubleSide
  });
  // 球体の形状を作成します
  //const geometry = new THREE.SphereGeometry(300, 30, 30);
  //const geometry1 = new THREE.SphereGeometry(250, 25, 25);
  //var geometry1 = new THREE.SphereGeometry(250, 25, 25);
       
  if(matchMedia('(max-width: 560px)').matches){
    var geometry1 = new THREE.SphereGeometry(180, 18, 18);
  }  else if (matchMedia('(max-width: 960px)').matches){
    var geometry1 = new THREE.SphereGeometry(200, 20, 20);
  }  else if (matchMedia('(max-width: 1025px)').matches){
    var geometry1 = new THREE.SphereGeometry(250, 25, 25);
  } else {
    //var geometry1 = new THREE.SphereGeometry(280, 28, 28);
    var geometry1 = new THREE.SphereGeometry(300, 30, 30);
  }
 
  const earthMesh1 = new THREE.Mesh(geometry1, material1);
  scene1.add(earthMesh1);
  createStarField1();
  function createStarField1() {
    const geometry1 = new THREE.Geometry();
    for (let i = 0; i < 1000; i++) {
      geometry1.vertices.push(
        new THREE.Vector3(
          3000 * (Math.random() - 0.5),
          3000 * (Math.random() - 0.5),
          3000 * (Math.random() - 0.5)
        )
      );
    }
    const material1 = new THREE.PointsMaterial({
      size: 10,
      color: 0xffffff
    });
    const mesh1 = new THREE.Points(geometry1, material1);
    scene1.add(mesh1);
  }
  tick1();
  function tick1() {
    //rot1 += 0.5; 
    rot1 += 2;
    const radian = (rot1 * Math.PI) / 180;
    camera1.position.x = 1000 * Math.sin(radian);
    camera1.position.z = 1000 * Math.cos(radian);
    camera1.lookAt(new THREE.Vector3(0, 0, 0));
    renderer1.render(scene1, camera1);
    requestAnimationFrame(tick1);
  }
} 

 /* S2 About222 //////////////////////////////////////////////////////////////*/
 
 let scene2,camera2, renderer2, cloudParticles2 = [], flash2, rain2, rainGeo, rainCount = 15000;
       function init2() {
         scene2 = new THREE.Scene();
         camera2 = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight, 1, 1000);
         camera2.position.z = 1;
         camera2.rotation.x = 1.16;
         camera2.rotation.y = -0.12;
         camera2.rotation.z = 0.27;
         ambient = new THREE.AmbientLight(0x555555);
         scene2.add(ambient);
         directionalLight = new THREE.DirectionalLight(0xffeedd);
         directionalLight.position.set(0,0,1);
         scene2.add(directionalLight);
         flash2 = new THREE.PointLight(0x062d89, 30, 500 ,1.7);
         flash2.position.set(200,300,100);
         scene2.add(flash2);
         renderer2 = new THREE.WebGLRenderer();
         scene2.fog = new THREE.FogExp2(0x11111f, 0.002);
         renderer2.setClearColor(scene2.fog.color);
         renderer2.setSize(window.innerWidth, window.innerHeight);
         var con29 = document.getElementById("con29");
         con29.appendChild(renderer2.domElement);
   
         rainGeo = new THREE.Geometry();
         for(let i=0;i<rainCount;i++) {
           rainDrop = new THREE.Vector3(
             Math.random() * 400 -200,
             Math.random() * 500 - 250,
             Math.random() * 400 - 200
           );
           rainDrop.velocity = {};
           rainDrop.velocity = 0;
           rainGeo.vertices.push(rainDrop);
         }
         rainMaterial = new THREE.PointsMaterial({
           color: 0xaaaaaa,
           size: 0.1,
           transparent: true
         });
         rain2 = new THREE.Points(rainGeo,rainMaterial);
         scene2.add(rain2);
         let loader = new THREE.TextureLoader();
         loader.load("img/smoke.png", function(texture){
           cloudGeo2 = new THREE.PlaneBufferGeometry(500,500);
           cloudMaterial = new THREE.MeshLambertMaterial({
             map: texture,
             transparent: true
           });
           for(let p=0; p<25; p++) {
             let cloud = new THREE.Mesh(cloudGeo2,cloudMaterial);
             cloud.position.set(
               Math.random()*800 -400,
               500,
               Math.random()*500 - 450
             );
             cloud.rotation.x = 1.16;
             cloud.rotation.y = -0.12;
             cloud.rotation.z = Math.random()*360;
             cloud.material.opacity = 0.6;
             cloudParticles2.push(cloud);
             scene2.add(cloud);
           }
           animate2();
         });
       }
       function animate2() {
         cloudParticles2.forEach(p => {
           p.rotation.z -=0.002;
         });
         rainGeo.vertices.forEach(p => {
           p.velocity -= 0.1 + Math.random() * 0.1;
           p.y += p.velocity;
           if (p.y < -200) {
             p.y = 200;
             p.velocity = 0;
           }
         });
         rainGeo.verticesNeedUpdate = true;
         rain2.rotation.y +=0.002;
         if(Math.random() > 0.93 || flash2.power > 100) {
           if(flash2.power < 100) 
             flash2.position.set(
               Math.random()*400,
               300 + Math.random() *200,
               100
             );
           flash2.power = 50 + Math.random() * 500;
         }
         renderer2.render(scene2, camera2);
         requestAnimationFrame(animate2);
       }
      init2(); 
/* S3 EP33 //////////////////////////////////////////////////////////////*/

/*
document.getElementById("text301").addEventListener("click",function(){
  this.classList.add("active");
})*/



/*animation*/ 
var swiper = new Swiper('.swiper-container', {
 /* zoom: true, */
 zoom: false,
  spaceBetween: 60,
   effect: 'flip',
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
   /*init: function(){document.getElementById("im32").classList.add("active"),
    document.getElementById("text321").classList.add("active"),
    document.getElementById("mask321").classList.add("active")
   },*/
    slideChange: function(){
      
      document.getElementById("im32").classList.remove("active");
      document.getElementById("im33").classList.remove("active");
      document.getElementById("im34").classList.remove("active");
      document.getElementById("im35").classList.remove("active");
      document.getElementById("im36").classList.remove("active");
      document.getElementById("im37").classList.remove("active");
    
        /**/ 
     document.getElementById("text320").classList.remove("active");
       document.getElementById("text320").classList.remove("animate__flipInY");

      document.getElementById("mask320").classList.remove("active");
       document.getElementById("mask320").classList.remove("animate__zoomInLeft");
       /**/ 
      
      
       document.getElementById("text321").classList.remove("active");
       document.getElementById("mask321").classList.remove("active");
      document.getElementById("text322").classList.remove("active");
      document.getElementById("mask322").classList.remove("active");
      document.getElementById("text323").classList.remove("active");
      document.getElementById("mask323").classList.remove("active");
      document.getElementById("text324").classList.remove("active");
      document.getElementById("mask324").classList.remove("active");
      document.getElementById("text325").classList.remove("active");
      document.getElementById("mask325").classList.remove("active");
          if(this.activeIndex == 0){
            document.getElementById("im32").classList.add("active");
            document.getElementById("text320").classList.add("active");
           document.getElementById("mask320").classList.add("active");
          }
          if(this.activeIndex == 1){
           
           document.getElementById("im33").classList.add("active");
           document.getElementById("text321").classList.add("active");
           document.getElementById("mask321").classList.add("active");
          
          }
          if(this.activeIndex == 2){
           
            document.getElementById("im34").classList.add("active");
            document.getElementById("text322").classList.add("active");
            document.getElementById("mask322").classList.add("active");
          }
          if(this.activeIndex == 3){
         
            document.getElementById("im35").classList.add("active");
            document.getElementById("text323").classList.add("active");
            document.getElementById("mask323").classList.add("active");
          }
          if(this.activeIndex == 4){
          
            document.getElementById("im36").classList.add("active");
            document.getElementById("text324").classList.add("active");
            document.getElementById("mask324").classList.add("active");
          }
          if(this.activeIndex == 5){
          
             document.getElementById("im37").classList.add("active");
             document.getElementById("text325").classList.add("active");
             document.getElementById("mask325").classList.add("active");
           }
         
         
    }
  }
});  
/* S4 Video444 //////////////////////////////////////////////////////////////*/

new hoverEffect({
parent: document.querySelector('.distortion4'),
intensity: 0.1,
angle: Math.PI / 4,
image1: "img/design.png",
image2: "img/design (1).png",
displacementImage: "img/heightMap.png"
//displacementImage: "fluid.jpg"
});
/*  youtube animation   */

document.getElementById("modalOpen 1").addEventListener("click", function(){
document.getElementById("modal 1").classList.add("acti");
document.getElementById("mask").classList.add("acti");
})  
/*document.getElementById("modalOpen 11").addEventListener("click", function(){
document.getElementById("modal 1").classList.add("acti");
document.getElementById("mask").classList.add("acti");
})  */
document.getElementById("modalClose 1").addEventListener("click", function(){
document.getElementById("modal 1").classList.remove("acti");
document.getElementById("mask").classList.remove("acti");
})
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
function onYouTubeIframeAPIReady() {
player11 = new YT.Player('player11');
}
document.getElementById('modalClose 1').addEventListener('click', function() {
player11.pauseVideo();
}, false);
/* S5 Photo666 /////////////////////////////////////////////////////////////////////////////////*/

/* S6 Live555 /////////////////////////////////////////////////////////////////////////////////*/
///////////星///////// 

let scene72, camera72, renderer72, stars72, starGeo72; 
function ini72() {
scene72 = new THREE.Scene();
camera72 = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight, 1, 1000);
camera72.position.z = 1;
camera72.rotation.x = Math.PI/2;
var height = 370;
renderer72 = new THREE.WebGLRenderer({alpha:true});
renderer72.setSize(window.innerWidth,height);
var kkkk = document.getElementById('kaka74');
kkkk.appendChild(renderer72.domElement);
starGeo72 = new THREE.Geometry();
for(let i=0;i<6000;i++) {
  star = new THREE.Vector3(
    Math.random() * 600 - 300,
    Math.random() * 600 - 300,
    Math.random() * 600 - 300
  );
  star.velocity = 0;
  /*アニメーション早さ*/ 
  /*star.acceleration = 0.02;*/
  star.acceleration = 1;
  starGeo72.vertices.push(star);
}
let sprite72 = new THREE.TextureLoader().load( 'img/star.png' );
let starMaterial72 = new THREE.PointsMaterial({
  color : 0xffffff,
  size: 0.7,
  map: sprite72
});
stars72 = new THREE.Points(starGeo72,starMaterial72);
scene72.add(stars72);
window.addEventListener("resize", onWindowResize72, false);
animate72(); 
}
function onWindowResize72() {
  camera72.aspect = window.innerWidth / window.innerHeight;
  camera72.updateProjectionMatrix();
  renderer72.setSize(window.innerWidth, window.innerHeight);
}
function animate72() {
starGeo72.vertices.forEach(p => {
  p.velocity += p.acceleration
  p.y -= p.velocity;
  if (p.y < -200) {
    p.y = 200;
    p.velocity = 0;
  }
});
starGeo72.verticesNeedUpdate = true;
/*アニメーション回る早さ*/ 
stars72.rotation.y +=0.002;
renderer72.render(scene72, camera72);
requestAnimationFrame(animate72);
}
ini72();
/* S7 Contact777  /////////////////////////////////////////////////////////////////////////////////*/
