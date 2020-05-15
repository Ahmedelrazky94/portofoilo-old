
(function() {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
          || window[vendors[x]+'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame)
      window.requestAnimationFrame = function(callback, element) {
          var currTime = new Date().getTime();
          var timeToCall = Math.max(0, 16 - (currTime - lastTime));
          var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
          lastTime = currTime + timeToCall;
          return id;
      };

  if (!window.cancelAnimationFrame)
      window.cancelAnimationFrame = function(id) {
          clearTimeout(id);
      };
}());

(function() {

  var width, height, largeHeader, canvas, ctx, circles, target, animateHeader = true;

  // Main
  initHeader();


  function initHeader() {
      width = window.innerWidth;
      height = window.innerHeight;
      target = {x: 0, y: height};

      largeHeader = document.getElementById('large-header');
      largeHeader.style.height = height+'px';

      canvas = document.getElementById('demo-canvas');
      canvas.width = width;
      canvas.height = height;
      ctx = canvas.getContext('2d');

      // create particles
      circles = [];
      for(var x = 0; x < width*0.8; x++) {
          var c = new Circle();
          circles.push(c);
      }
      animate();
  }

  // Event handling
 
  function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      largeHeader.style.height = height+'px';
      canvas.width = width;
      canvas.height = height;
  }

  function animate() {
      requestAnimationFrame(animate);
    if(animateHeader) {
          ctx.clearRect(0,0,width,height);
          for(var i in circles) {
              circles[i].draw();
          }
      }
  }

  // Canvas manipulation
  function Circle() {
      var _this = this;

      // constructor
      (function() {
          _this.pos = {};
          init();
      })();

      function init() {
          _this.pos.x = Math.random()*width;
          _this.pos.y = height+Math.random()*100;
          _this.alpha = 0.1+Math.random()*0.3;
          _this.scale = 0.1+Math.random()*0.3;
          _this.velocity = Math.random();
      }

      this.draw = function() {
          if(_this.alpha <= 0) {
              init();
          }
          _this.pos.y -= _this.velocity;
          _this.alpha -= 0.0005;
          ctx.beginPath();
          ctx.arc(_this.pos.x, _this.pos.y, _this.scale*10, 0, 2 * Math.PI, false);
          ctx.fillStyle = 'rgba(255,255,255,'+ _this.alpha+')';
          ctx.fill();
      };
  }

})();  
  
  
  
  
  var w = window.innerWidth,
  h = window.innerHeight,
  canvas = document.getElementById('test'),
  rate = 10,
  arc = -20,
  time,
  count,
  size = 8,
  rate = 10,
  speed = 50,
  parts = new Array,
  colors = ['red','#f57900','yellow','#ce5c00','#5c3566','green','pink','blue','purple'];
var mouse = { x: 0, y: 0 };


function create() {
time = 0;
count = 0;

for(var i = 0; i < arc; i++) {
  parts[i] = {
    x: Math.ceil(Math.random() * w),
    y: Math.ceil(Math.random() * h),
    toX: Math.random() * 5 - 1,
    toY: Math.random() * 2 - 1,
    c: colors[Math.floor(Math.random()*colors.length)],
    size: Math.random() * size
  }
}
}

function particles() {
for(var i = 0; i < arc; i++) {
  var li = parts[i];
  var distanceFactor = DistanceBetween( mouse, parts[i] );
  var distanceFactor = Math.max( Math.min( 15 - ( distanceFactor / 10 ), 10 ), 1 );

  li.x = li.x + li.toX * (time * 0.05);
  li.y = li.y + li.toY * (time * 0.05);
  
  if(li.x > w){
     li.x = 0; 
  }
  if(li.y > h) {
     li.y = 0; 
  }
  if(li.x < 0) {
     li.x = w; 
  }
  if(li.y < 0) {
     li.y = h; 
  }
 
   
}
if(time < speed) {
  time++;
}
setTimeout(particles,500/rate);
}
function MouseMove(e) {
 mouse.x = e.layerX;
 mouse.y = e.layerY;

 //context.fillRect(e.layerX, e.layerY, 5, 5);
 //Draw( e.layerX, e.layerY );
}
function DistanceBetween(p1,p2) {
 var dx = p2.x-p1.x;
 var dy = p2.y-p1.y;
 return Math.sqrt(dx*dx + dy*dy);
}
create();
particles();
  
//  
