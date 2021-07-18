import React, { useEffect, useState, useRef } from "react";
import "./Home.css";
import dinosaur from "./dinosaur.png";
import cactus from "./cactus.png";
import flyingdinosaur from "./flyingdinosaur.PNG";
import cactus2 from "./cactus2.png";
import Image from "./Image";

const Home = () => {
  // const [start, setStart] = useState(false);
  // const dino_ref = useRef();
  // const con_ref = useRef();

  

//   useEffect(() => {
//     var myObstacles = [];
//     var gamescore = 0;
//     // //inserting images

//     // var cactusimg = new Image()
//     // cactusimg.src = {cactus}

//     // var cactus2img = new Image()
//     // cactus2img.src = {cactus2}

//     // var flyingdinosaurimg = new Image()
//     // flyingdinosaurimg.src = {flyingdinosaur}

//     function jump() {
//       player.speedY = -2;
//     }

//     function everyinterval(n) {
//       if (gamearea.frame % n == 0) return true;
//       return false;
//     }

//     function randGap() {
//       return Math.floor(200 + Math.random() * (500 - 200 + 1));
//     }

//     var scoreText = {
//       x: 220,
//       y: 200,
//       update: function (score) {
//         gamearea.context.fillStyle = "gray";
//         gamearea.context.font = "30px Consolas";
//         gamearea.context.fillText(score, 220, 200);
//       },
//     };
//     var player = {
//       x: 20,
//       y: 460,
//       speedY: 0,

//       update: function () {
//         if (this.y < 470) {
//           gamearea.context.drawImage(
//             <Image src={dinosaur} />,
//             this.x,
//             this.y - 40,
//             60,
//             60
//           );
//         } else {
//           gamearea.context.drawImage(
//             <Image src={dinosaur} />,
//             this.x,
//             this.y - 40,
//             50,
//             60
//           );
//         }
//       },
//       newPos: function () {
//         if (this.y < 300) {
//           this.speedY = 2;
//         }
//         this.y = this.y + this.speedY;
//         if (this.speedY == 2 && this.y == 470) {
//           this.speedY = 0;
//         }
//       },
//       crashWith: function (obs) {
//         if (
//           this.x + 30 > obs.x &&
//           this.x < obs.x + obs.width &&
//           this.y + 30 > obs.y
//         ) {
//           return true;
//         }
//         return false;
//       },
//     };

//     function obstacle() {
//       let randomValue = Math.floor(Math.random() * 10);
//       let yDistance = Math.floor(Math.random() * 10);
//       this.height = 41;
//       this.width = 31;
//       this.x = 1000;
//       this.y = gamearea.canvas.height - this.height;
//       console.log(this.y);

//       this.draw = function () {
//         if (randomValue < 3) {
//           gamearea.context.drawImage(
//             <Image src={cactus} />,
//             this.x,
//             this.y - 23,
//             40,
//             this.height + 5
//           );
//         } else if (randomValue < 7) {
//           //console.log(randomValue);

//           gamearea.context.drawImage(
//             <Image src={cactus2} />,
//             this.x,
//             this.y - 23,
//             40,
//             this.height + 5
//           );
//         } else {
//           if (yDistance > 2) {
//             gamearea.context.drawImage(
//               <Image src={flyingdinosaur} />,
//               this.x,
//               this.y - 85,
//               60,
//               this.height + 10
//             );
//           } else {
//             gamearea.context.drawImage(
//               <Image src={flyingdinosaur} />,
//               this.x,
//               this.y - 100,
//               60,
//               this.height + 10
//             );
//           }
//         }
//       };
//     }

//     var gamearea = {
//       canvas: document.createElement("canvas"),

//       start: function () {
//         this.canvas.height = 500;
//         this.canvas.width = 600;
//         con_ref.current.insertBefore(this.canvas, dino_ref.current);
//         this.context = this.canvas.getContext("2d");
//         this.frame = 0;
//         this.score = 0;
//         scoreText.update("Score : 0");
//         this.interval = setInterval(this.updateGameArea, 5);
//         window.addEventListener("keydown", jump);
//       },

//       updateGameArea: function () {
//         for (let i = 0; i < myObstacles.length; i++) {
//           if (player.crashWith(myObstacles[i])) {
//             gamearea.stop();
//             return;
//           }
//         }
//         gamearea.clear();

//         if (everyinterval(randGap())) {
//           myObstacles.push(new obstacle());

//           gamearea.frame = 0;
//         }
//         for (let i = 0; i < myObstacles.length; i++) {
//           myObstacles[i].x -= 2;
//           myObstacles[i].draw();
//         }
//         player.newPos();
//         player.update();
//         gamearea.frame += 2;
//         gamearea.score += 0.5;
//         gamescore = Math.floor(gamearea.score);
//         scoreText.update("Score: " + gamescore);
//       },

//       clear: function () {
//         gamearea.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
//       },

//       stop: function () {
//         const animation = document.querySelector("canvas");

//         clearInterval(this.interval);
//         gamearea.context.fillStyle = "gray";
//         gamearea.context.font = "25px Consolas";
//         gamearea.context.fillText("Game over!!", 200, 250);
//         animation.style.animation = "none";
//       },
//     };
//     gamearea.start();
//   }, []);


  return (
    <div className="grid justify-center">
      {/* <button onClick={startGameHandler}>start dino</button> */}
      {/* <div ref={con_ref}>
        <div ref={dino_ref}></div>
      </div>
      <Image src={dinosaur} /> */}
      <span className="text-3xl">Home</span>
 
      {/* <img src={cactus} width="100" height="100"></img> */}
    </div>
  );
};

export default Home;
