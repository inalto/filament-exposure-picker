function h(e){return{state:e.state,mode:"dark",open:!1,canvas:null,ctx:null,x0:0,y0:0,width:256,height:256,angle:0,isDragged:!1,direction:{"-90":"W","-67.5":"WNW","-45":"NW","-22.5":"NNW",0:"N","22.5":"NNE",45:"NE","67.5":"ENE",90:"E","112.5":"ESE",135:"SE","157.5":"SSE",180:"S","202.5":"SSW",225:"SW","247.5":"WSW"},angles:{W:"-90",WNW:"-67.5",NW:"-45",NNW:"-22.5",N:"0",NNE:"22.5",NE:"45",ENE:"67.5",E:"90",ESE:"112.5",SE:"135",SSE:"157.5",S:"180",SSW:"202.5",SW:"225",WSW:"247.5"},init:function(){this.canvas=this.$refs.can,this.ctx=this.canvas.getContext("2d"),this.ctx.canvas.width=this.width,this.ctx.canvas.height=this.height,this.angle=this.angles[this.state],this.x0=this.width/2,this.y0=this.height/2,console.log(this.x0+" "+this.y0),this.drawArrow()},setupListeners:function(){this.canvas.addEventListener("mousedown",function(t){if(this.open){t.currentTarget.matches(":hover")&&(this.isDragged=!this.isDragged);let i=t.currentTarget.getBoundingClientRect();this.x=t.clientX-i.left,this.y=t.clientY-i.top,this.angle=Math.round((Math.atan2(this.y-this.y0,this.x-this.x0)*180/Math.PI+90)/22.5)*22.5,this.setDirection(this.direction[this.angle]),this.drawArrow()}}.bind(this)),this.canvas.addEventListener("dblclick",function(t){this.isDragged=!1,this.open=!1}.bind(this)),window.addEventListener("mouseup",function(t){t.target==this.canvas&&(window.removeEventListener("mousemove",function(i){}),this.isDragged=!1)}.bind(this))},setDirection:function(t){this.state=t,this.angle=this.angles[this.state]},drawArrow:function(){if(!(this.state in this.angles))return;var t=10,i=this.width/2-10;this.ctx.clearRect(0,0,this.width,this.height);let s=new Path2D;s.moveTo(i,0),s.lineTo(i+t,-t),s.lineTo(i+t,t),s.lineTo(i,0),s.closePath(),this.ctx.save(),this.ctx.translate(this.x0,this.y0),this.ctx.rotate((this.angle-90)*Math.PI/180),this.mode=="dark"?this.ctx.fillStyle="#ffffff":this.ctx.fillStyle="#000000",this.ctx.fill(s),this.ctx.restore(),navigator.vibrate(100)}}}export{h as default};
