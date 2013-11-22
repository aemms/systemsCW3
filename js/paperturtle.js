//Start Paper Js Drawing
var position = new Point(400,200);


// define variables that can be changed
var maxSpeed = 10;
var maxAngle = 3;
var maxThrust = 0.2;
var maxCoast = 0.99;
var thrustColor = "orange";
var crazy = false;
var myPath = new Path();
myPath.strokeColor = 'black';



function onFrame() {
	if(Key.isDown('left')) {
		Triangle.turnLeft();
	}
	if (Key.isDown('right')) {
    Triangle.turnRight();
  }
  if (Key.isDown('up')) {
    Triangle.thrust();
  } else {
    Triangle.coast();
  }  
	Triangle.move();
}

project.currentStyle.strokeColor = 'black';

var Triangle = new function() {
	var path = new Path([-14, -8], [14, 0], [-14, 8], [-12, 4], [-12, -4], [-14,-8]);
	path.fillColor = "black";
	var thrust = new Path([-13, -4], [-30, 0], [-13, 4]);
	thrust.strokeColor = thrustColor;
	thrust.fillColor = thrustColor;
	var group = new Group(path, thrust);
  group.position = view.bounds.center;

  return {
  	item: group,

  	angle: 0,

  	vector: new Point({
      angle: 0,
      length: 0
    }),

    turnLeft: function() {
      group.rotate(-maxAngle);
      this.angle -= maxAngle;
    },

    turnRight: function() {
      group.rotate(maxAngle);
      this.angle += maxAngle;
    },

    turn180: function() {
    	group.rotate(180);
    	this.angle += 180;
    },

    thrust: function() {
      thrust.visible = true;
      this.vector += new Point({
        angle: this.angle,
        length: maxThrust
      });
      if (this.vector.length > maxSpeed) {
        this.vector.length = maxSpeed;
      }
    },

    stop: function() {
      this.vector.length = 0;
    },
    
    coast: function() {
      thrust.visible = false;
      this.vector *= maxCoast;
    },
    
    move: function() {
    	this.thrustUpdate(); 
    	this.display(); 
      group.position += this.vector;      
      keepInView(group);
      myPath.add(group.position);
    },

    thrustUpdate: function() {
    	thrust.strokeColor = thrustColor;
			thrust.fillColor = thrustColor;
    },
    
    moveTo: function(position) {
      group.position = position;
      keepInView(group);
    },

    resetTriangle: function() {
    	group.position = view.bounds.center;
    	group.rotate(-this.angle);
    	//this.vector.angle = this.vector.angle;
    	this.angle -= this.angle;
    	this.vector.length = 0;
    	this.length = 0;
    	myPath.removeSegments();
    },

    increase: function(){
    	crazy = true;
			console.log("increase clicked");	
			maxSpeed = 200;
			maxAngle = 6;
			maxThrust = 2;
			maxCoast = 0.95;
			thrustColor = "red";
		},

		decrease: function() {
			crazy = false;
			maxSpeed = 10;
			maxAngle = 3;
			maxThrust = 0.2;
			maxCoast = 0.99;
			thrustColor = "orange";
		},
		display: function() {
			var htmlNormal = "<h3 class='centreText'>Normal Mode</h3>";
			var htmlCrazy = "<h3 class='centreText'>Crazy Mode</h3>" ;
			var myDiv = document.getElementById("myDiv");

			if(crazy){
				myDiv.className = "myDivClass pull-right";
				myDiv.innerHTML = htmlCrazy;				
			} else {
				myDiv.innerHTML = htmlNormal;
				myDiv.className = "otherDiv pull-right";
			}
		},
		addPath: function(position) {				
			myPath.add(position);
		}
  }
}

function keepInView(item) {
  var position = item.position;
  var itemBounds = item.bounds;
  var bounds = view.bounds;

  if (itemBounds.left > bounds.width) {
    position.x = -item.bounds.width;
  }

  if (position.x < -itemBounds.width) {
    position.x = bounds.width;
  }

  if (itemBounds.top > view.size.height) {
    position.y = -itemBounds.height;
  }

  if (position.y < -itemBounds.height) {
    position.y = bounds.height  + itemBounds.height / 2;
  }
}

function onKeyUp(event){
	if(event.key == "space"){
		console.log("pressed");
		Triangle.turn180();
	}
	if(event.key =="r"){
		console.log("reset");
		Triangle.resetTriangle();
	}
	if(event.key == "shift"){
		console.log("shift pressed");  		
		if(crazy) {
			Triangle.decrease();
		} else {
			Triangle.increase();
		} 
	}
}

