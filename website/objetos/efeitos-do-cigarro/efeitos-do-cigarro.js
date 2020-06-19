(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg_tela1 = function() {
	this.initialize(img.bg_tela1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2437,1371);


(lib.cancer = function() {
	this.initialize(img.cancer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,875,875);


(lib.celulas = function() {
	this.initialize(img.celulas);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,917,917);


(lib.cigarro = function() {
	this.initialize(img.cigarro);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,537);


(lib.cigarro_bg1__ = function() {
	this.initialize(img.cigarro_bg1__);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1113,169);


(lib.cigarro_bg2__ = function() {
	this.initialize(img.cigarro_bg2__);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1113,169);


(lib.cigarros = function() {
	this.initialize(img.cigarros);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,917,917);


(lib.death = function() {
	this.initialize(img.death);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,833,833);


(lib.embalagem = function() {
	this.initialize(img.embalagem);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,455,265);


(lib.globolosvermelhos = function() {
	this.initialize(img.globolosvermelhos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,833,625);


(lib.popup1 = function() {
	this.initialize(img.popup1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,501);


(lib.popup2 = function() {
	this.initialize(img.popup2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,401,287);


(lib.pulmao = function() {
	this.initialize(img.pulmao);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,833,833);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Símbolo4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.instance = new lib.cigarro_bg2__();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1113,169);


(lib.Símbolo3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.instance = new lib.cigarro_bg2__();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1113,169);


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.instance = new lib.cigarro_bg1__();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1113,169);


(lib.cigarro8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ADpAAQAABghEBEQhFBFhgAAQhfAAhEhFQhFhEAAhgQAAhgBFhEQBEhEBfAAQBgAABFBEQBEBEAABgg");
	this.shape.setTransform(24.1,23,0.733,0.733);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AglBIQgOgNAAgVQAAgOAIgLQAIgLAOgDQgMgFgHgKQgHgKAAgNQAAgUANgMQANgMAVAAQAVAAAOAMQANAMAAAUQAAANgIAKQgHAKgMAFQAOADAJALQAIALAAAOQAAAVgOANQgPAMgXAAQgXAAgOgMgAgbANQgLAKAAAPQAAAQALAJQAKAKARAAQARAAALgKQALgJAAgQQAAgPgLgKQgLgKgRAAQgQAAgLAKgAgYg/QgKAJAAAPQAAAOAKAJQAJAJAPAAQAPAAAKgJQAJgJAAgOQAAgOgJgKQgKgJgPAAQgPAAgJAJg");
	this.shape_1.setTransform(24.1,23.1);

	this.instance = new lib.cigarro();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,0.836);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cigarro8, new cjs.Rectangle(0,0,48,448.9), null);


(lib.cigarro7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ADpAAQAABghEBEQhFBFhgAAQhfAAhEhFQhFhEAAhgQAAhgBFhEQBEhEBfAAQBgAABFBEQBEBEAABgg");
	this.shape.setTransform(24.1,23,0.733,0.733);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdBSIBEiXIhcAAIAAgMIBrAAIAAAIIhFCbg");
	this.shape_1.setTransform(23.9,23.8);

	this.instance = new lib.cigarro();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,0.836);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cigarro7, new cjs.Rectangle(0,0,48,448.9), null);


(lib.cigarro6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ADpAAQAABghEBEQhFBFhgAAQhfAAhEhFQhFhEAAhgQAAhgBFhEQBEhEBfAAQBgAABFBEQBEBEAABgg");
	this.shape.setTransform(24.3,23,0.733,0.733);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgjBCQgPgRAAgbIAAgNQAAgrAUgYQAUgZAkAAIAEAAIAAAMIgCAAQgcAAgRARQgRARgCAfQAHgJAKgFQALgFAMAAQAVAAANAPQANANAAAZQAAAQgGAMQgGANgLAHQgLAIgPAAQgWAAgPgSgAgVgGQgLAHgEALIAAAMQAAAVALAOQALANAQAAQAQAAAKgMQAKgNAAgTQAAgTgKgLQgKgMgQAAQgMAAgLAIg");
	this.shape_1.setTransform(24.4,23.1);

	this.instance = new lib.cigarro();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,0.836);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cigarro6, new cjs.Rectangle(0,0,48,448.9), null);


(lib.cigarro5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ADpAAQAABghEBEQhFBFhgAAQhfAAhEhFQhFhEAAhgQAAhgBFhEQBEhEBfAAQBgAABFBEQBEBEAABgg");
	this.shape.setTransform(24.3,23,0.733,0.733);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgiBHQgNgMgBgVIAMAAQADAQAIAJQAKAJAPAAQASAAAJgMQAJgLAAgUQAAgSgKgLQgKgLgQAAQgKAAgIACQgHADgIAGIgKgCIAIhQIBRAAIAAAMIhGAAIgFA4QANgJARAAQAWAAANAOQAOAOAAAXQAAAagOAPQgMAOgYAAQgUAAgOgMg");
	this.shape_1.setTransform(24.4,23.2);

	this.instance = new lib.cigarro();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,0.836);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cigarro5, new cjs.Rectangle(0,0,48,448.9), null);


(lib.cigarro4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ADpAAQAABghEBEQhFBFhgAAQhfAAhEhFQhFhEAAhgQAAhgBFhEQBEhEBfAAQBgAABFBEQBEBEAABgg");
	this.shape.setTransform(24.1,23,0.733,0.733);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AATBSIAAgqIhMAAIAAgHIBLhyIAOAAIAABuIAaAAIAAALIgaAAIAAAqgAANg1Ig2BSIA8AAIAAhcg");
	this.shape_1.setTransform(23.2,22.7);

	this.instance = new lib.cigarro();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,0.836);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cigarro4, new cjs.Rectangle(0,0,48,448.9), null);


(lib.cigarro3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ADpAAQAABghEBEQhFBFhgAAQhfAAhEhFQhFhEAAhgQAAhgBFhEQBEhEBfAAQBgAABFBEQBEBEAABgg");
	this.shape.setTransform(24.3,23,0.733,0.733);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZBOQgMgGgGgKQgIgLAAgOIAOAAQAAAQALAKQALAKAQAAQASAAAKgJQAJgJAAgRQAAgRgKgIQgLgJgUAAIgNAAIAAgLIAOAAQALAAAIgEQAJgEAEgHQAFgHAAgJQAAgQgJgJQgJgJgQAAQgPAAgKAJQgLAKABAPIgOAAQAAgNAGgKQAHgLALgGQALgFAOAAQAWAAANAMQANAMgBAVQAAAMgHAKQgIAKgNAFQAPADAJAKQAHALABAOQAAAVgPANQgNANgXAAQgOAAgMgGg");
	this.shape_1.setTransform(24.2,23.1);

	this.instance = new lib.cigarro();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,0.836);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cigarro3, new cjs.Rectangle(0,0,48,448.9), null);


(lib.cigarro2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ADpAAQAABghEBEQhFBFhgAAQhfAAhEhFQhFhEAAhgQAAhgBFhEQBEhEBfAAQBgAABFBEQBEBEAABgg");
	this.shape.setTransform(24.1,23,0.733,0.733);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgwBTIAAgKIA2hAQAOgPAGgKQAFgLABgKQAAgQgJgIQgKgJgPAAQgRAAgKAKQgKALAAARIgNAAQAAgPAGgLQAGgLAMgHQALgGAPAAQAVAAANAMQANALAAAVQAAAMgHANQgHANgSAUIgtA0IBVAAIAAALg");
	this.shape_1.setTransform(24.2,22.6);

	this.instance = new lib.cigarro();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,0.836);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cigarro2, new cjs.Rectangle(0,0,48,448.9), null);


(lib.cigarro1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ADpAAQAABghEBEQhFBFhgAAQhfAAhEhFQhFhEAAhgQAAhgBFhEQBEhEBfAAQBgAABFBEQBEBEAABgg");
	this.shape.setTransform(23.5,23,0.733,0.733);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQBSIAAiTIgsARIAAgNIA3gUIACAAIAACjg");
	this.shape_1.setTransform(21.7,23);

	this.instance = new lib.cigarro();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,0.836);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cigarro1, new cjs.Rectangle(0,0,48,448.9), null);


(lib.btn_cigarro8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkNTtMAAAgnZIIcAAMAAAAnZg");
	this.shape.setTransform(20.2,223.7,0.749,1.773);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40.5,447.4);


(lib.btn_cigarro7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkNTtMAAAgnZIIcAAMAAAAnZg");
	this.shape.setTransform(20.2,223.7,0.749,1.773);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40.5,447.4);


(lib.btn_cigarro6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkNTtMAAAgnZIIcAAMAAAAnZg");
	this.shape.setTransform(20.2,223.7,0.749,1.773);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40.5,447.4);


(lib.btn_cigarro5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkNTtMAAAgnZIIcAAMAAAAnZg");
	this.shape.setTransform(20.2,223.7,0.749,1.773);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40.5,447.4);


(lib.btn_cigarro4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkNTtMAAAgnZIIcAAMAAAAnZg");
	this.shape.setTransform(20.2,223.7,0.749,1.773);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40.5,447.4);


(lib.btn_cigarro3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkNTtMAAAgnZIIcAAMAAAAnZg");
	this.shape.setTransform(20.2,223.7,0.749,1.773);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40.5,447.4);


(lib.btn_cigarro2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkNTtMAAAgnZIIcAAMAAAAnZg");
	this.shape.setTransform(20.2,223.7,0.749,1.773);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40.5,447.4);


(lib.btn_cigarro1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkNTtMAAAgnZIIcAAMAAAAnZg");
	this.shape.setTransform(20.2,223.7,0.749,1.773);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40.5,447.4);


(lib.Interpolação5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.instance = new lib.cigarro_bg1__();
	this.instance.parent = this;
	this.instance.setTransform(-556.5,-84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-556.5,-84.5,1113,169);


(lib.Interpolação4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.instance = new lib.cigarro_bg1__();
	this.instance.parent = this;
	this.instance.setTransform(-556.5,-84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-556.5,-84.5,1113,169);


(lib.Interpolação2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.instance = new lib.cigarro_bg2__();
	this.instance.parent = this;
	this.instance.setTransform(-556.5,-84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-556.5,-84.5,1113,169);


(lib.Interpolação1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.instance = new lib.cigarro_bg2__();
	this.instance.parent = this;
	this.instance.setTransform(-556.5,-84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-556.5,-84.5,1113,169);


(lib.btn_iniciar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.902)").s().p("AAiBZIgjhEIgjAAIAABEIgfAAIAAixIBAAAQAeAAAQAOQARANAAAbQAAASgJAMQgIALgQAGIAoBLIAAABgAgkgDIAhAAQAPAAAIgIQAJgIAAgOQAAgOgIgIQgIgIgQAAIghAAg");
	this.shape.setTransform(111.6,22.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(102,102,102,0.902)").s().p("AAxBZIgPgpIhEAAIgOApIghAAIBEixIAbAAIBDCxgAgZAXIAzAAIgahJg");
	this.shape_1.setTransform(94.7,22.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(102,102,102,0.902)").s().p("AgPBZIAAixIAfAAIAACxg");
	this.shape_2.setTransform(82.8,22.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(102,102,102,0.902)").s().p("AgjBSQgRgLgJgSQgIgTgBgYIAAgQQAAgZAJgUQAJgTARgKQAQgLAWAAQAdAAASAQQASAQADAeIgfAAQgCgUgJgIQgJgJgRAAQgUAAgLAPQgKAPgBAcIAAAPQAAAdAKAPQALAQATAAQASAAAKgJQAIgIADgTIAfAAQgDAdgSAQQgTAQgeAAQgUAAgQgKg");
	this.shape_3.setTransform(71.2,22.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,102,102,0.902)").s().p("AgOBZIAAixIAdAAIAACxg");
	this.shape_4.setTransform(59.3,22.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(102,102,102,0.902)").s().p("AAoBZIhPh9IAAB9IgfAAIAAixIAfAAIBPB+IAAh+IAfAAIAACxg");
	this.shape_5.setTransform(46.8,22.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(102,102,102,0.902)").s().p("AgPBZIAAixIAeAAIAACxg");
	this.shape_6.setTransform(34.4,22.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("ArqDSIAAmjIXVAAIAAGjg");
	this.shape_7.setTransform(74.8,21.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.902)").s().p("AAiBZIgjhEIgjAAIAABEIgfAAIAAixIBAAAQAeAAAQAOQARANAAAbQAAASgJAMQgIALgQAGIAoBLIAAABgAgkgDIAhAAQAPAAAIgIQAJgIAAgOQAAgOgIgIQgIgIgQAAIghAAg");
	this.shape_8.setTransform(111.6,22.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.902)").s().p("AAxBZIgPgpIhEAAIgOApIghAAIBEixIAbAAIBDCxgAgZAXIAzAAIgahJg");
	this.shape_9.setTransform(94.7,22.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.902)").s().p("AgPBZIAAixIAfAAIAACxg");
	this.shape_10.setTransform(82.8,22.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.902)").s().p("AgjBSQgRgLgJgSQgIgTgBgYIAAgQQAAgZAJgUQAJgTARgKQAQgLAWAAQAdAAASAQQASAQADAeIgfAAQgCgUgJgIQgJgJgRAAQgUAAgLAPQgKAPgBAcIAAAPQAAAdAKAPQALAQATAAQASAAAKgJQAIgIADgTIAfAAQgDAdgSAQQgTAQgeAAQgUAAgQgKg");
	this.shape_11.setTransform(71.2,22.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.902)").s().p("AgOBZIAAixIAdAAIAACxg");
	this.shape_12.setTransform(59.3,22.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.902)").s().p("AAoBZIhPh9IAAB9IgfAAIAAixIAfAAIBPB+IAAh+IAfAAIAACxg");
	this.shape_13.setTransform(46.8,22.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.902)").s().p("AgPBZIAAixIAeAAIAACxg");
	this.shape_14.setTransform(34.4,22.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("ArqDSIAAmjIXVAAIAAGjg");
	this.shape_15.setTransform(74.8,21.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0.3,149.5,42);


(lib.btn_fechar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C29B01").ss(2,1,1).p("ADpAAQAABghEBEQhFBFhgAAQhfAAhEhFQhFhEAAhgQAAhgBFhEQBEhEBfAAQBgAABFBEQBEBEAABgg");
	this.shape.setTransform(18.7,19.4,0.804,0.804);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("AikCkQhEhDABhhQgBhfBEhEQBEhEBggBQBgABBFBEQBDBEAABfQAABhhDBDQhFBEhgABQhggBhEhEg");
	this.shape_1.setTransform(18.7,19.4,0.804,0.804);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C29B01").s().p("AA1BaIg1hPIgzBPIgSAAIA9haIg8hZIASAAIAyBMIAyhMIASAAIg7BZIA+Bag");
	this.shape_2.setTransform(18.7,19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-0.3,39.4,39.4);


(lib.tela1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btn_iniciar.addEventListener("click", iniciando.bind(this));
		function iniciando(){
			createjs.Tween.get(this.parent.tela1)
			.to({y:700, alpha:0, visible:false}, 1000, createjs.Ease.quartInOut);
			
			this.parent.tela2.visible = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.902)").s().p("AhFBYQgfgfAAgzIAAgGQAAgiANgbQAOgcAYgOQAYgPAcgBQAvAAAaAfQAZAeAAA3IAAATIiVAAQACAdARAQQARARAYAAQAkAAAWgdIAcAbQgOAVgXALQgXAMgdAAQgwAAgegggAgeg+QgNAPgEAaIBhAAIAAgDQgBgbgMgNQgNgNgVAAQgUAAgNAPg");
	this.shape.setTransform(451.9,225.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.902)").s().p("AhLCFQgZghAAg4QAAg0AZggQAYggAqAAQAkAAAWAZIAAh2IA0AAIAAFGIgvAAIgDgYQgXAdgmAAQgoAAgZghgAgjgKQgNATAAAoQAAAjANAUQAOATAYAAQAfAAAPgcIAAhhQgOgcggAAQgYAAgOAUg");
	this.shape_1.setTransform(427.2,220.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.902)").s().p("AhLCQQgTgWAAgqIAAiUIAzAAIAACUQAAArAlAAQAkAAAOgbIAAikIAzAAIAADlIgxAAIgBgWQgXAbgoAAQgmAAgTgWgAgZhkIAphBIA7AAIg7BBg");
	this.shape_2.setTransform(403.3,220.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.902)").s().p("AhMBkQgWgVAAgdQAAglAbgSQAcgTAyAAIAfAAIAAgQQAAgRgKgLQgKgLgTAAQgRAAgMAJQgMAJAAANIgzAAQAAgTANgQQAMgRAWgJQAWgKAZAAQApAAAXAVQAZAUAAAlIAABnQAAAfAJATIAAADIg1AAQgEgHgCgOQgZAagiAAQgjgBgWgTgAggARQgOAKAAASQAAAPAKAJQAJAJARAAQAOAAAOgIQAOgHAGgNIAAgrIgcAAQgbAAgPAKg");
	this.shape_3.setTransform(379.4,225.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.902)").s().p("AgvBtQgXgKgMgSQgMgSAAgVIAyAAQABATANAJQANAKAUAAQAUABALgIQAKgIAAgNQAAgNgLgIQgLgHgagFQgagGgSgJQgngRAAgjQAAgeAZgVQAagTAlgBQAqAAAZAVQAZAUAAAhIgzAAQAAgPgLgKQgLgKgTAAQgQAAgKAIQgLAIAAANQAAAMAKAHQAKAGAdAHQAfAGARAKQARAIAJANQAIANAAASQAAAggaATQgZAUgqAAQgbAAgWgLg");
	this.shape_4.setTransform(356.2,225.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.902)").s().p("AhMCSQgWgUAAgdQAAglAcgUQAbgTAxAAIAhAAIAAgQQAAgQgKgLQgKgLgUAAQgRAAgMAJQgMAJAAANIgzAAQAAgTANgQQAMgRAWgJQAWgJAZAAQAoAAAYAUQAZAUAAAkIAABoQAAAfAJATIAAADIg1AAQgDgGgDgPQgYAagkAAQgiAAgWgUgAggA/QgOAKAAASQAAAPAKAJQAKAJAQAAQAOAAAOgHQANgIAIgMIAAgsIgcAAQgcAAgPAKgAgNhkIg5hBIA7AAIApBBg");
	this.shape_5.setTransform(322.4,220.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.902)").s().p("AgvBtQgXgKgMgSQgMgSAAgVIAyAAQABATANAJQANAKAUAAQAUABALgIQAKgIAAgNQAAgNgLgIQgLgHgagFQgagGgSgJQgngRAAgjQAAgeAZgVQAagTAlgBQAqAAAZAVQAZAUAAAhIgzAAQAAgPgLgKQgLgKgTAAQgQAAgKAIQgLAIAAANQAAAMAKAHQAKAGAdAHQAfAGARAKQARAIAJANQAIANAAASQAAAggaATQgZAUgqAAQgbAAgWgLg");
	this.shape_6.setTransform(288.3,225.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.902)").s().p("AhNBXQgdghAAg1IAAgCQAAgiANgbQAOgcAYgOQAYgPAfAAQAuAAAeAfQAdAdABAyIABALQAAAjgNAaQgOAbgYAOQgYAPggABQgwgBgdgggAgng5QgPAUgBAnQAAAkAPAUQAPAUAZAAQAaAAAPgUQAOgVAAgmQAAgjgOgVQgPgUgaAAQgZAAgOAUg");
	this.shape_7.setTransform(264.8,225.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.902)").s().p("AgVBzIhRjlIA2AAIAwCjIAxijIA2AAIhQDlg");
	this.shape_8.setTransform(241.6,225.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.902)").s().p("AhMBkQgWgVAAgdQAAglAcgSQAbgTAyAAIAfAAIAAgQQABgRgLgLQgJgLgUAAQgRAAgMAJQgMAJAAANIgzAAQAAgTANgQQAMgRAWgJQAWgKAZAAQAoAAAYAVQAYAUABAlIAABnQAAAfAJATIAAADIg1AAQgEgHgCgOQgZAagiAAQgjgBgWgTgAggARQgOAKAAASQAAAPAKAJQAKAJAQAAQAOAAAOgIQAOgHAGgNIAAgrIgbAAQgcAAgPAKg");
	this.shape_9.setTransform(219,225.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.902)").s().p("Ag7B1IAAjlIAxAAIABAaQASgeAhAAQALAAAHADIAAAwQgKgBgLAAQgjAAgMAbIAACcg");
	this.shape_10.setTransform(200.5,225.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.902)").s().p("AgzCYQgZgLgMgRIAYgeQAZAcAiAAQAZAAAPgOQAOgOABgbIAAgQQgXAagkAAQgpgBgZggQgZgggBg4QABg2AZgfQAZghApAAQAnABAWAbIADgXIAvAAIAADeQAAAugcAZQgdAagvAAQgZAAgYgKgAgjhjQgOAUAAAoQAAAiAOAUQAOATAZAAQAeAAAQgbIAAhkQgPgagfAAQgZAAgOAUg");
	this.shape_11.setTransform(179.1,229.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.902)").s().p("ABVCbIgZhIIh3AAIgZBIIg4AAIB1k1IAvAAIB1E1gAgsAnIBZAAIgth/g");
	this.shape_12.setTransform(152.7,221.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(194,155,1,0.486)").s().p("AhFBYQgfgeAAg0IAAgGQAAgiANgbQAOgbAYgPQAYgQAcABQAvAAAaAdQAZAeAAA4IAAATIiVAAQACAdARAQQARARAYAAQAkAAAWgcIAcAaQgOAVgXALQgXAMgdgBQgwAAgegfgAgeg+QgNAPgEAbIBhAAIAAgFQgBgagMgMQgNgOgVAAQgUAAgNAPg");
	this.shape_13.setTransform(453.4,228.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(194,155,1,0.486)").s().p("AhLCFQgZghAAg4QAAg0AZggQAYggAqAAQAkAAAWAZIAAh2IA0AAIAAFGIgvAAIgDgYQgXAdgmAAQgoAAgZghgAgjgKQgNATAAAoQAAAjANAUQAOATAYAAQAfAAAPgcIAAhhQgOgcggAAQgYAAgOAUg");
	this.shape_14.setTransform(428.8,224.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(194,155,1,0.486)").s().p("AhLCQQgTgWAAgqIAAiUIAzAAIAACUQAAArAlAAQAkAAAOgbIAAikIAzAAIAADlIgxAAIgBgWQgXAbgoAAQgmAAgTgWgAgZhkIAphBIA7AAIg7BBg");
	this.shape_15.setTransform(404.8,224.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(194,155,1,0.486)").s().p("AhMBjQgWgTAAgdQAAgmAbgSQAcgTAygBIAgAAIAAgPQAAgRgLgMQgJgKgUAAQgSAAgLAJQgMAIABAOIg0AAQAAgTAMgQQANgRAWgJQAVgJAaAAQApgBAYAVQAXAUABAlIAABnQAAAfAJATIAAADIg1AAQgEgGgCgPQgZAZgjAAQgiABgWgVgAgfARQgPAKAAASQAAAPAKAJQAJAJARAAQAPAAANgHQANgIAIgMIAAgsIgdAAQgbAAgOAKg");
	this.shape_16.setTransform(381,228.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(194,155,1,0.486)").s().p("AgvBtQgXgKgMgSQgMgSAAgUIAyAAQABARANALQANAKAUgBQAUAAALgHQAKgIAAgMQAAgPgLgGQgLgIgagGQgagFgSgIQgngSAAgjQAAgfAZgUQAagTAlAAQAqgBAZAVQAZAUAAAhIgzAAQAAgPgLgKQgLgKgTAAQgQAAgKAIQgLAIAAANQAAAMAKAGQAKAIAdAGQAfAHARAJQARAIAJANQAIANAAATQAAAegaAUQgZATgqAAQgbABgWgLg");
	this.shape_17.setTransform(357.8,228.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(194,155,1,0.486)").s().p("AhMCSQgWgUAAgdQAAglAbgUQAcgTAyAAIAfAAIAAgQQABgQgLgLQgKgLgTAAQgRAAgMAJQgMAJAAANIgzAAQAAgTANgQQAMgRAWgJQAWgJAZAAQAoAAAYAUQAYAUABAkIAABoQAAAfAJATIAAADIg1AAQgEgGgCgPQgZAagiAAQgjAAgWgUgAggA/QgOAKAAASQAAAPAKAJQAKAJAQAAQAOAAAOgHQAOgIAGgMIAAgsIgcAAQgbAAgPAKgAgNhkIg5hBIA7AAIAoBBg");
	this.shape_18.setTransform(324,224.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(194,155,1,0.486)").s().p("AgvBtQgXgKgMgSQgMgSAAgUIAyAAQABARANALQANAKAUgBQAUAAALgHQAKgIAAgMQAAgPgLgGQgLgIgagGQgagFgSgIQgngSAAgjQAAgfAZgUQAagTAlAAQAqgBAZAVQAZAUAAAhIgzAAQAAgPgLgKQgLgKgTAAQgQAAgKAIQgLAIAAANQAAAMAKAGQAKAIAdAGQAfAHARAJQARAIAJANQAIANAAATQAAAegaAUQgZATgqAAQgbABgWgLg");
	this.shape_19.setTransform(289.9,228.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(194,155,1,0.486)").s().p("AhNBXQgdggAAg3IAAgBQAAgiANgbQANgbAZgPQAYgOAfAAQAuAAAeAdQAcAeACAyIABALQAAAigNAbQgOAbgXAPQgZAOggAAQgwABgdghgAgng5QgPAUgBAnQAAAkAPAUQAPAUAZAAQAaAAAPgUQAPgVAAgmQAAgjgPgUQgPgVgaAAQgZAAgOAUg");
	this.shape_20.setTransform(266.3,228.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(194,155,1,0.486)").s().p("AgVBzIhRjlIA2AAIAwCkIAxikIA2AAIhQDlg");
	this.shape_21.setTransform(243.1,228.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(194,155,1,0.486)").s().p("AhMBjQgWgTAAgdQAAgmAbgSQAcgTAygBIAfAAIAAgPQAAgRgKgMQgKgKgTAAQgRAAgMAJQgMAIAAAOIgzAAQAAgTAMgQQANgRAWgJQAWgJAZAAQApgBAXAVQAZAUAAAlIAABnQAAAfAJATIAAADIg1AAQgEgGgCgPQgZAZgiAAQgjABgWgVgAggARQgOAKAAASQAAAPAKAJQAKAJAQAAQAOAAAOgHQAOgIAGgMIAAgsIgcAAQgbAAgPAKg");
	this.shape_22.setTransform(220.6,228.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(194,155,1,0.486)").s().p("Ag7B1IAAjlIAxAAIABAaQASgeAhAAQALAAAHADIAAAwQgKgBgLAAQgjAAgMAbIAACcg");
	this.shape_23.setTransform(202.1,228.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(194,155,1,0.486)").s().p("AgzCYQgYgKgNgRIAZggQAXAdAjAAQAZAAAPgOQAOgOAAgbIAAgPQgVAZglgBQgoABgaghQgaggAAg4QAAg2AaggQAZgfAqAAQAmgBAXAcIACgXIAvAAIAADeQAAAtgcAaQgdAbgvAAQgZAAgYgLgAgjhjQgOAVAAAmQAAAjAOAUQAOATAYAAQAfAAAPgaIAAhlQgOgagfAAQgZAAgOAUg");
	this.shape_24.setTransform(180.7,233.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(194,155,1,0.486)").s().p("ABVCbIgZhIIh3AAIgZBIIg4AAIB1k1IAvAAIB1E1gAgsAnIBZAAIgth/g");
	this.shape_25.setTransform(154.3,224.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(255,255,255,0.008)").ss(1,1,1).p("A02jRMAptAAAIAAGjMgptAAAg");
	this.shape_26.setTransform(305.5,220.9,1.384,2.493,0,20.3,0);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EABB01").s().p("A02DSIAAmjMAptAAAIAAGjg");
	this.shape_27.setTransform(305.5,220.9,1.384,2.493,0,20.3,0);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#9A7B01").ss(1,1,1).p("A02jRMAptAAAIAAGjMgptAAAg");
	this.shape_28.setTransform(291.1,225.8,1.41,2.665,0,20.2,0);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(154,123,1,0.008)").s().p("A02DSIAAmjMAptAAAIAAGjg");
	this.shape_29.setTransform(291.1,225.8,1.41,2.665,0,20.2,0);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,204,0,0.902)").s().p("Ah5D8Qg3ghgeg9Qgdg+AAhQIAAgbQAAhSAdg+QAeg/A2ghQA2ghBEAAQBFAAA3AhQA1AhAeA/QAeA+AABSIAAAYQgBBSgdA9QgdA+g2AiQg1AhhHAAQhDAAg2ghgAhYiRQgfAtAABXIAAAaQAABVAeAvQAgAvA5AAQA6AAAfgtQAfguABhWIAAgbQAAhXgggtQgfgug6AAQg5AAgfAtg");
	this.shape_30.setTransform(439.9,405.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,204,0,0.902)").s().p("AjUEWIAAorIDYAAQA/AAAvAXQAwAXAZAqQAaAqAAA2QAABSg4AuQg4AvhjAAIhjAAIAADEgAhhgKIBlAAQAtAAAYgVQAYgVAAgoQAAgpgYgZQgYgZgqgBIhoAAg");
	this.shape_31.setTransform(388.7,405.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,204,0,0.902)").s().p("ABeEWIhojMIhbAAIAADMIhyAAIAAorIDOAAQBiAAA1AsQA1AsAABQQAAA5gYAmQgZAlgyAWIB4DjIAAAGgAhlgRIBdAAQAqAAAXgWQAYgWAAgnQAAgngWgWQgXgXgtAAIhcAAg");
	this.shape_32.setTransform(339.2,405.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,204,0,0.902)").s().p("Ah5D8Qg3ghgeg9Qgeg+AAhQIAAgbQABhSAdg+QAeg/A2ghQA2ghBEAAQBFAAA2AhQA2AhAeA/QAeA+AABSIAAAYQAABSgeA9QgdA+g2AiQg1AhhHAAQhEAAg1ghgAhYiRQgfAtAABXIAAAaQgBBVAfAvQAgAvA5AAQA6AAAfgtQAfguABhWIAAgbQgBhXgfgtQgfgug6AAQg5AAgfAtg");
	this.shape_33.setTransform(285.7,405.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,204,0,0.902)").s().p("AilDWQg9hIAAh+IAAghQAAhQAcg9QAdg9A0ggQA0ghBFAAQBgAAA7AzQA6A0AKBdIhzAAQgEg2gagYQgagYg0AAQg4AAgdApQgcApgBBWIAAApQAABaAbApQAcAqA5AAQA1AAAbgYQAagZADgyIBzAAQgHBZg7A0Qg8AzhiAAQhpAAg+hHg");
	this.shape_34.setTransform(233.6,405.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,204,0,0.902)").s().p("AibDYQg9hGAAh2IAAg4QABhMAbg7QAbg6AxggQAxgfA/AAQBAAAAyAfQAwAeAbA5QAbA4AABLIAABBQAABNgaA6QgaA6gxAfQgyAfhBAAQhgAAg7hFgAh6i6QguA5gBBmIAAA5QAABjAuA6QAuA6BNAAQBQAAAtg5QAsg5AAhmIAAg6QAAhkgtg5Qgtg5hPAAQhNAAgtA5g");
	this.shape_35.setTransform(161.7,405.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(255,204,0,0.902)").s().p("ACgEWIk+nbIAAHbIgwAAIAAorIAwAAIE+HbIAAnbIAvAAIAAIrg");
	this.shape_36.setTransform(107.5,405.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0.902)").s().p("Ah6D8Qg2ghgeg9Qgdg+AAhQIAAgbQAAhSAdg+QAeg/A1ghQA2ghBFAAQBFAAA3AhQA1AhAeA/QAeA+gBBSIAAAYQAABSgcA9QgdA+g2AiQg3AhhGAAQhEAAg2ghgAhYiRQggAtABBXIAAAaQAABVAeAvQAgAvA5AAQA6AAAfgtQAfguAAhWIAAgbQABhXgggtQgfgug6AAQg5AAgfAtg");
	this.shape_37.setTransform(784.8,330.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(255,255,255,0.902)").s().p("ABeEWIhojMIhbAAIAADMIhyAAIAAorIDOAAQBiAAA1AsQA1AsAABQQAAA5gYAmQgZAlgyAWIB4DjIAAAGgAhlgRIBdAAQAqAAAXgWQAYgWAAgnQAAgngWgWQgXgXgtAAIhcAAg");
	this.shape_38.setTransform(734.5,330.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,255,255,0.902)").s().p("ABeEWIhojMIhbAAIAADMIhyAAIAAorIDOAAQBiAAA1AsQA1AsAABQQAAA5gYAmQgZAlgyAWIB4DjIAAAGgAhlgRIBdAAQAqAAAXgWQAYgWAAgnQAAgngWgWQgXgXgtAAIhcAAg");
	this.shape_39.setTransform(684.7,330.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(255,255,255,0.902)").s().p("ACKEWIgmhzIjIAAIgmBzIh5AAIDPorIBoAAIDRIrgAhEBHICJAAIhFjPg");
	this.shape_40.setTransform(631.9,330.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(255,255,255,0.902)").s().p("AhvD+Qg3gggdg7Qgeg8AAhRIAAglQAAhTAcg9QAcg9A1ggQA0ggBGAAQBjAAA4AvQA3AvALBaIhwAAQgHgwgagWQgbgWgtAAQg6AAgfAsQgeAsAABWIAAAjQgBBXAiAtQAhAsA/AAQBAAAAcgbIAAhgIhoAAIAAhTIDbAAIAADdQgfAlg5AUQg4AUhFAAQhHAAg2gfg");
	this.shape_41.setTransform(578.6,330.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(255,255,255,0.902)").s().p("Ag4EWIAAorIBxAAIAAIrg");
	this.shape_42.setTransform(540.9,330.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(255,255,255,0.902)").s().p("AilDWQg9hIAAh+IAAghQAAhQAcg9QAdg9A0ggQA0ghBFAAQBgAAA7AzQA6A0AKBdIhzAAQgEg2gagYQgagYg0AAQg4AAgdApQgcApgBBWIAAApQAABaAbApQAcAqA5AAQA1AAAbgYQAagZADgyIBzAAQgHBZg7A0Qg8AzhiAAQhpAAg+hHg");
	this.shape_43.setTransform(504.4,330.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(255,255,255,0.902)").s().p("AicDYQg7hGgBh2IAAg4QAAhMAcg7QAag6AyggQAxgfA/AAQBAAAAxAfQAxAeAbA5QAaA4ACBLIAABBQAABNgaA6QgbA6gyAfQgxAfhAAAQhhAAg8hFgAh6i6QguA5AABmIAAA5QgBBjAvA6QAtA6BOAAQBPAAAtg5QAsg5AAhmIAAg6QABhkgug5Qgtg5hPAAQhMAAguA5g");
	this.shape_44.setTransform(432.5,330.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(255,255,255,0.902)").s().p("AjDEWIAAorICbAAQBDAAA3AgQA2AfAeA5QAeA6AABKIAAAzQAABKgeA6QgeA5g2AfQg3AghGAAgAiUDuIBpAAQBXAAA1g6QA1g6AAhjIAAgxQAAhfg0g6Qg1g6hUAAIhtAAg");
	this.shape_45.setTransform(381.6,330.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(255,255,255,0.902)").s().p("Ah5D8Qg3ghgeg9Qgeg+ABhQIAAgbQAAhSAdg+QAeg/A2ghQA2ghBEAAQBFAAA3AhQA1AhAeA/QAeA+AABSIAAAYQgBBSgdA9QgdA+g2AiQg1AhhHAAQhDAAg2ghgAhYiRQgfAtAABXIAAAaQAABVAeAvQAgAvA5AAQA6AAAfgtQAfguABhWIAAgbQAAhXgggtQgfgug6AAQg5AAgfAtg");
	this.shape_46.setTransform(308.5,330.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(255,255,255,0.902)").s().p("Ag5EWIAAnOIioAAIAAhdIHDAAIAABdIiqAAIAAHOg");
	this.shape_47.setTransform(257.4,330.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(255,255,255,0.902)").s().p("Ag4EWIAAorIBxAAIAAIrg");
	this.shape_48.setTransform(221.9,330.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(255,255,255,0.902)").s().p("Ai5EWIAAorIFyAAIAABdIkAAAIAACEIDbAAIAABZIjbAAIAACVIEBAAIAABcg");
	this.shape_49.setTransform(190.1,330.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(255,255,255,0.902)").s().p("Ai0EWIAAorIFpAAIAABdIj2AAIAACPIDbAAIAABcIjbAAIAADjg");
	this.shape_50.setTransform(146.7,330.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(255,255,255,0.902)").s().p("Ai5EWIAAorIFyAAIAABdIkAAAIAACEIDbAAIAABZIjbAAIAACVIEBAAIAABcg");
	this.shape_51.setTransform(103.4,330.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// btn_iniciar
	this.btn_iniciar = new lib.btn_iniciar();
	this.btn_iniciar.name = "btn_iniciar";
	this.btn_iniciar.parent = this;
	this.btn_iniciar.setTransform(160,483.5,1,1,0,0,0,76.5,21.1);
	new cjs.ButtonHelper(this.btn_iniciar, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_iniciar).wait(1));

	// bg
	this.instance = new lib.bg_tela1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tela1, new cjs.Rectangle(0,0,1170,658.2), null);


(lib.popup8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btn_fechar.addEventListener("click", fechar.bind(this));
		function fechar(){
			createjs.Tween.get(this.parent.popup8)
			.to({y:700}, 1000, createjs.Ease.quartInOut);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn_fechar
	this.btn_fechar = new lib.btn_fechar();
	this.btn_fechar.name = "btn_fechar";
	this.btn_fechar.parent = this;
	this.btn_fechar.setTransform(283.4,30.3,1,1,0,0,0,18.7,19.4);
	new cjs.ButtonHelper(this.btn_fechar, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_fechar).wait(1));

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.902)").s().p("AgGAHQgDgDAAgEQAAgDADgCQACgDAEAAQAFAAACADQADACAAADQAAAEgDADQgCADgFAAQgEAAgCgDg");
	this.shape.setTransform(395.1,439.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.902)").s().p("AgdAoQgIgIAAgLQAAgPALgHQALgIASAAIAQAAIAAgHQAAgIgFgFQgFgFgJAAQgIAAgGAEQgFAEgBAGIgPAAQAAgHAEgGQAGgGAIgEQAJgEAJAAQAPAAAKAIQAIAIABAOIAAAqQAAAMADAIIAAABIgRAAQgBgCAAgHQgLALgPAAQgOAAgJgIgAgWASQAAAIAGAEQAFAEAHAAQAHAAAHgEQAGgDADgHIAAgTIgNAAQgcAAAAARg");
	this.shape_1.setTransform(388.1,435.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAjQgLgMAAgWIAAgCQAAgNAFgLQAFgKAJgGQAJgGAMAAQAPAAALAJQAKAKABAPIgPAAQgBgJgGgGQgGgGgJAAQgLAAgGAJQgIAIABARIAAACQgBAQAIAIQAGAJALAAQAIAAAHgFQAGgFABgIIAPAAQAAAIgGAHQgEAHgJAFQgIAEgKAAQgSAAgLgNg");
	this.shape_2.setTransform(378.9,435.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.902)").s().p("AgHA/IAAhbIAPAAIAABbgAgGguQgDgDABgEQgBgEADgDQADgCADAAQAFAAACACQACADAAAEQAAAEgCADQgCACgFAAQgDAAgDgCg");
	this.shape_3.setTransform(372.1,433.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.902)").s().p("AgTA9QgJgEgFgIIAIgJQAKAMAPAAQAKAAAHgGQAGgHAAgMIAAgHQgJAKgQAAQgQAAgKgNQgKgNAAgVQAAgWAKgNQAKgMAQAAQAQAAAKAMIABgLIAOAAIAABaQAAARgLALQgKAKgSAAQgJAAgKgEgAgQgqQgGAJAAASQAAAPAGAIQAHAJAKAAQAPAAAHgOIAAgpQgHgNgPAAQgKAAgHAJg");
	this.shape_4.setTransform(364.8,437.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.902)").s().p("AgeA2QgLgNAAgWIAAgBQAAgOAFgKQAFgKAKgHQAJgFAMAAQASAAAMANQAMANAAAVIAAABQAAANgFALQgGAKgJAHQgJAFgNAAQgSABgMgNgAgSgGQgIAIABASQgBAPAIAKQAHAJALAAQAMAAAHgJQAHgKAAgRQAAgPgHgJQgHgJgMAAQgLAAgHAJgAgIgoIAPgaIATAAIgXAag");
	this.shape_5.setTransform(355.2,433.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.902)").s().p("AgHBCIAAiDIAPAAIAACDg");
	this.shape_6.setTransform(348,433.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.902)").s().p("AgdAjQgMgNAAgWIAAAAQAAgNAFgLQAGgLAJgGQAKgGALAAQASAAANANQALANAAAVIAAABQAAAOgFAKQgGALgJAGQgJAGgNAAQgSAAgLgNgAgSgZQgIAKAAAQQAAAPAIAKQAHAJALAAQAMAAAHgJQAHgKAAgQQAAgPgHgJQgIgKgLAAQgLAAgHAJg");
	this.shape_7.setTransform(340.9,435.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.902)").s().p("AgVAvIAAhbIAPAAIAAAKQAHgMAOAAIAHABIAAAOIgHAAQgPAAgFAOIAABAg");
	this.shape_8.setTransform(333.4,435.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.902)").s().p("AgcAnQgHgJgBgRIAAg7IARAAIAAA7QAAAVARAAQAQAAAHgNIAAhDIAPAAIAABcIgOAAIgBgJQgJAKgRAAQgPAAgIgIg");
	this.shape_9.setTransform(325.2,435.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAkQgLgNAAgUIAAgDQAAgNAFgLQAFgLAKgGQAJgGAKAAQASAAAKAMQAKAMAAAWIAAAGIg9AAQAAANAIAJQAHAIALAAQAIAAAGgDQAGgEAEgFIAKAHQgMASgXAAQgSAAgMgMgAgOgbQgGAHgCANIAtAAIAAgCQAAgMgGgGQgGgHgKAAQgIAAgHAHg");
	this.shape_10.setTransform(315.8,435.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.902)").s().p("AAVAvIAAg8QAAgKgFgFQgEgFgKAAQgHAAgFAFQgGAEgDAGIAABBIgQAAIAAhbIAPAAIAAALQALgNAQAAQAdAAAAAhIAAA8g");
	this.shape_11.setTransform(306.2,435.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAkQgLgNAAgUIAAgDQAAgNAFgLQAFgLAKgGQAJgGAKAAQASAAAKAMQAKAMAAAWIAAAGIg9AAQAAANAIAJQAHAIALAAQAIAAAGgDQAGgEAEgFIAKAHQgMASgXAAQgSAAgMgMgAgOgbQgGAHgCANIAtAAIAAgCQAAgMgGgGQgGgHgKAAQgIAAgHAHg");
	this.shape_12.setTransform(292.5,435.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.902)").s().p("AgVAvIAAhbIAPAAIAAAKQAHgMAOAAIAHABIAAAOIgHAAQgPAAgFAOIAABAg");
	this.shape_13.setTransform(280.9,435.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.902)").s().p("AgcAoQgJgIAAgLQAAgPALgHQALgIASAAIAQAAIAAgHQAAgIgFgFQgFgFgJAAQgIAAgGAEQgFAEAAAGIgQAAQgBgHAGgGQAEgGAJgEQAIgEAJAAQAQAAAKAIQAJAIAAAOIAAAqQAAAMADAIIAAABIgRAAQgBgCgBgHQgLALgOAAQgOAAgIgIgAgVASQAAAIAEAEQAFAEAJAAQAGAAAGgEQAHgDADgHIAAgTIgMAAQgcAAAAARg");
	this.shape_14.setTransform(272.8,435.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.902)").s().p("AgHBCIAAiDIAPAAIAACDg");
	this.shape_15.setTransform(265.9,433.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.902)").s().p("AgcAnQgIgJAAgRIAAg7IARAAIAAA7QAAAVARAAQAQAAAGgNIAAhDIAQAAIAABcIgOAAIgBgJQgJAKgRAAQgPAAgIgIg");
	this.shape_16.setTransform(258.9,435.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAjQgLgMAAgWIAAgCQAAgNAFgLQAFgKAJgGQAKgGALAAQAQAAAKAJQAKAKABAPIgPAAQgBgJgGgGQgGgGgJAAQgLAAgHAJQgHAIAAARIAAACQAAAQAHAIQAHAJALAAQAIAAAHgFQAGgFABgIIAPAAQAAAIgFAHQgGAHgIAFQgJAEgJAAQgSAAgLgNg");
	this.shape_17.setTransform(249.6,435.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.902)").s().p("AgRAsQgJgEgFgHQgFgHAAgIIAQAAQABAIAGAEQAFAFAJAAQAJAAAGgEQAFgDAAgGQAAgHgFgDQgFgEgLgCQgMgDgHgDQgHgDgDgFQgDgFAAgHQAAgLAJgIQAKgIAOAAQAPAAAKAIQAKAIAAANIgQAAQAAgHgFgEQgGgFgIAAQgIAAgFAEQgFAEAAAGQAAAFAFADQAEADALADQAMACAHAEQAIADADAFQAEAFAAAIQAAAMgKAIQgKAHgQAAQgKAAgIgEg");
	this.shape_18.setTransform(240.4,435.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.902)").s().p("AgdAoQgIgIAAgLQAAgPALgHQALgIATAAIAPAAIAAgHQAAgIgFgFQgFgFgJAAQgIAAgFAEQgHAEABAGIgRAAQAAgHAGgGQAEgGAJgEQAJgEAIAAQARAAAIAIQAKAIAAAOIAAAqQAAAMADAIIAAABIgQAAQgCgCgBgHQgKALgPAAQgNAAgKgIgAgVASQAAAIAEAEQAGAEAIAAQAGAAAGgEQAHgDADgHIAAgTIgNAAQgbAAAAARg");
	this.shape_19.setTransform(231.1,435.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.902)").s().p("AgFAuIghhbIAQAAIAWBGIAXhGIAQAAIghBbg");
	this.shape_20.setTransform(222.1,435.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.902)").s().p("AgdAjQgMgNAAgWIAAAAQAAgNAFgLQAFgLAKgGQAKgGALAAQATAAALANQAMANAAAVIAAABQAAAOgFAKQgGALgJAGQgKAGgMAAQgSAAgLgNgAgSgZQgHAKgBAQQABAPAHAKQAHAJALAAQAMAAAHgJQAHgKAAgQQAAgPgHgJQgIgKgLAAQgLAAgHAJg");
	this.shape_21.setTransform(212.9,435.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.902)").s().p("AgHA/IAAhbIAPAAIAABbgAgGguQgCgDgBgEQABgEACgDQACgCAEAAQAEAAADACQADADgBAEQABAEgDADQgDACgEAAQgEAAgCgCg");
	this.shape_22.setTransform(205.8,433.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.902)").s().p("AgbA2QgLgNAAgWIAAgBQAAgVAKgMQALgNAQAAQAPAAAKALIAAgxIAPAAIAACDIgOAAIgBgKQgJALgQAAQgQABgKgNgAgQgGQgGAIAAASQAAAPAGAKQAHAIAKABQAPAAAIgOIAAgpQgIgOgPAAQgKAAgHAJg");
	this.shape_23.setTransform(198.5,433.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.902)").s().p("AgVAvIAAhbIAPAAIAAAKQAHgMAOAAIAHABIAAAOIgHAAQgPAAgFAOIAABAg");
	this.shape_24.setTransform(191.3,435.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.902)").s().p("AgcAoQgJgIAAgLQAAgPALgHQALgIASAAIAQAAIAAgHQAAgIgFgFQgFgFgJAAQgIAAgGAEQgFAEAAAGIgQAAQAAgHAEgGQAGgGAIgEQAIgEAJAAQAQAAAKAIQAIAIABAOIAAAqQAAAMADAIIAAABIgRAAQgBgCgBgHQgLALgOAAQgOAAgIgIgAgWASQABAIAEAEQAFAEAIAAQAHAAAHgEQAGgDADgHIAAgTIgMAAQgcAAgBARg");
	this.shape_25.setTransform(183.1,435.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAjQgLgMAAgWIAAgCQAAgNAFgLQAFgKAJgGQAJgGAMAAQAPAAALAJQAKAKABAPIgPAAQgBgJgGgGQgGgGgJAAQgLAAgHAJQgGAIAAARIAAACQAAAQAGAIQAHAJALAAQAJAAAGgFQAGgFABgIIAPAAQgBAIgEAHQgFAHgJAFQgIAEgKAAQgSAAgLgNg");
	this.shape_26.setTransform(173.9,435.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.902)").s().p("AgdAoQgIgIAAgLQAAgPALgHQALgIASAAIAQAAIAAgHQAAgIgFgFQgFgFgJAAQgIAAgGAEQgFAEgBAGIgPAAQAAgHAEgGQAGgGAIgEQAJgEAJAAQAPAAAKAIQAIAIABAOIAAAqQAAAMADAIIAAABIgRAAQgBgCAAgHQgLALgPAAQgOAAgJgIgAgWASQAAAIAGAEQAFAEAHAAQAHAAAHgEQAGgDADgHIAAgTIgNAAQgcAAAAARg");
	this.shape_27.setTransform(495.7,416);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.902)").s().p("AgJA5QAHAAACgCQAEgDAAgEQAAgDgDgCQgBgCgIgBIACgLIACAAIAGABIACAAIgBADQANADABAMQgBAIgGAFQgHAFgLAAgAAEAeIAAgBIgIAAIAIAAIAAABIgCAAIgGgBQgOgCgJgKQgLgNAAgUIAAgDQAAgOAFgKQAFgKAJgGQAKgGALAAQAQAAAKAJQAKAKABAOIgPAAQgBgJgGgGQgGgFgJAAQgLAAgHAJQgGAIgBARIAAADQABAPAGAIQAHAJALAAQAIAAAHgGQAGgEABgHIAPAAQAAAHgFAHQgGAHgIAFQgHADgJABgAAEAeIAAAAg");
	this.shape_28.setTransform(486.4,417.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.902)").s().p("AAVAvIAAg8QAAgKgFgFQgEgFgKAAQgHAAgFAEQgGAFgDAGIAABBIgQAAIAAhbIAPAAIAAALQALgNAQAAQAdAAAAAhIAAA8g");
	this.shape_29.setTransform(476.9,415.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAkQgLgNAAgUIAAgDQAAgNAFgLQAFgLAKgGQAJgGAKAAQASAAAKAMQAKAMAAAWIAAAGIg9AAQAAANAIAJQAHAIALAAQAIAAAGgDQAGgEAEgFIAKAHQgMASgXAAQgSAAgMgMgAgOgbQgGAHgCANIAtAAIAAgCQAAgMgGgGQgGgHgKAAQgIAAgHAHg");
	this.shape_30.setTransform(467.5,416);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.902)").s().p("AgdAjQgMgNAAgWIAAAAQAAgNAFgLQAGgLAJgGQAKgGALAAQATAAAMANQALANAAAVIAAABQAAAOgFAKQgGALgJAGQgKAGgMAAQgSAAgLgNgAgSgZQgIAKAAAQQAAAPAIAKQAHAJALAAQAMAAAHgJQAHgKAAgQQAAgPgHgJQgHgKgMAAQgLAAgHAJg");
	this.shape_31.setTransform(457.8,416);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0.902)").s().p("AgbA2QgLgNAAgWIAAgBQAAgUAKgNQAKgNARAAQAPAAAJALIAAgxIAQAAIAACDIgOAAIgBgKQgKAMgPgBQgRABgJgNgAgQgGQgGAIAAASQAAAPAGAKQAHAIAKABQAQAAAGgOIAAgqQgGgNgQAAQgKAAgHAJg");
	this.shape_32.setTransform(447.6,414.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,255,255,0.902)").s().p("AgLAPQAIgLAAgLIAAgOIAPAAIAAAMQAAAJgFAIQgEAIgFAGg");
	this.shape_33.setTransform(436.6,420.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,255,255,0.902)").s().p("AgVAvIAAhbIAPAAIAAAKQAHgMAOAAIAHABIAAAOIgHAAQgPAAgFAOIAABAg");
	this.shape_34.setTransform(432.6,415.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAkQgLgNAAgUIAAgDQAAgNAFgLQAFgLAKgGQAJgGAKAAQASAAAKAMQAKAMAAAWIAAAGIg9AAQAAANAIAJQAHAIALAAQAIAAAGgDQAGgEAEgFIAKAHQgMASgXAAQgSAAgMgMgAgOgbQgGAHgCANIAtAAIAAgCQAAgMgGgGQgGgHgKAAQgIAAgHAHg");
	this.shape_35.setTransform(424.7,416);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAjQgLgMAAgWIAAgCQAAgNAFgLQAFgKAJgGQAKgGALAAQAPAAALAJQAKAKABAPIgPAAQgBgJgGgGQgGgGgJAAQgLAAgGAJQgIAIABARIAAACQgBAQAIAIQAGAJALAAQAJAAAGgFQAGgFABgIIAPAAQAAAIgGAHQgEAHgJAFQgIAEgKAAQgSAAgLgNg");
	this.shape_36.setTransform(415.5,416);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0.902)").s().p("AAVAvIAAg8QAAgKgFgFQgEgFgKAAQgHAAgFAEQgGAFgDAGIAABBIgQAAIAAhbIAPAAIAAALQALgNAQAAQAdAAAAAhIAAA8g");
	this.shape_37.setTransform(405.9,415.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(255,255,255,0.902)").s().p("AgcA7QgJgIAAgMQAAgOALgIQALgIASAAIAQAAIAAgHQAAgHgFgGQgFgEgJAAQgIgBgGAFQgFAEAAAGIgQAAQAAgHAEgGQAGgGAIgEQAIgEAKAAQAPAAAKAIQAIAIABANIAAAqQAAANADAIIAAABIgRAAQgBgDgBgGQgLALgOgBQgOAAgIgHgAgWAlQABAHAFAFQAFAEAHAAQAHAAAHgEQAGgEADgGIAAgTIgMAAQgdAAAAARgAAPgpIgNgPIgLAPIgOAAIAAgBIAWgYIAIAAIAVAYIAAABg");
	this.shape_38.setTransform(396.3,414.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAjQgLgMAAgWIAAgCQAAgNAFgLQAFgKAJgGQAKgGALAAQAPAAALAJQAKAKABAPIgPAAQgBgJgGgGQgGgGgJAAQgLAAgGAJQgIAIAAARIAAACQAAAQAIAIQAGAJALAAQAJAAAGgFQAGgFABgIIAPAAQAAAIgGAHQgEAHgJAFQgIAEgKAAQgSAAgLgNg");
	this.shape_39.setTransform(387.1,416);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAkQgLgNAAgUIAAgDQAAgNAFgLQAFgLAKgGQAJgGAKAAQASAAAKAMQAKAMAAAWIAAAGIg9AAQAAANAIAJQAHAIALAAQAIAAAGgDQAGgEAEgFIAKAHQgMASgXAAQgSAAgMgMgAgOgbQgGAHgCANIAtAAIAAgCQAAgMgGgGQgGgHgKAAQgIAAgHAHg");
	this.shape_40.setTransform(373.5,416);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(255,255,255,0.902)").s().p("AgcA2QgKgNAAgWIAAgBQAAgUAKgNQALgNAPAAQAQAAAJALIAAgxIAQAAIAACDIgPAAIAAgKQgKAMgQgBQgPABgLgNgAgPgGQgHAIAAASQAAAPAHAKQAGAIALABQAPAAAGgOIAAgqQgGgNgPAAQgLAAgGAJg");
	this.shape_41.setTransform(363.6,414.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(255,255,255,0.902)").s().p("AgeAjQgLgNAAgWIAAAAQAAgNAFgLQAGgLAJgGQAKgGALAAQASAAANANQALANAAAVIAAABQAAAOgFAKQgFALgKAGQgJAGgNAAQgSAAgMgNgAgSgZQgIAKAAAQQAAAPAIAKQAHAJALAAQAMAAAHgJQAHgKAAgQQAAgPgHgJQgIgKgLAAQgLAAgHAJg");
	this.shape_42.setTransform(349.6,416);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(255,255,255,0.902)").s().p("AgCA0QgGgGAAgMIAAg5IgQAAIAAgMIAQAAIAAgWIAPAAIAAAWIARAAIAAAMIgRAAIAAA5QAAAFACADQADADAFAAIAIgBIAAANIgMABQgKAAgFgGg");
	this.shape_43.setTransform(341.5,414.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(255,255,255,0.902)").s().p("AAVAvIAAg8QAAgKgFgFQgEgFgKAAQgHAAgFAEQgGAFgDAGIAABBIgQAAIAAhbIAPAAIAAALQALgNAQAAQAdAAAAAhIAAA8g");
	this.shape_44.setTransform(334,415.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAkQgLgNAAgUIAAgDQAAgNAFgLQAFgLAKgGQAJgGAKAAQASAAAKAMQAKAMAAAWIAAAGIg9AAQAAANAIAJQAHAIALAAQAIAAAGgDQAGgEAEgFIAKAHQgMASgXAAQgSAAgMgMgAgOgbQgGAHgCANIAtAAIAAgCQAAgMgGgGQgGgHgKAAQgIAAgHAHg");
	this.shape_45.setTransform(324.6,416);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(255,255,255,0.902)").s().p("AAxAvIAAg8QAAgKgFgFQgEgFgLAAQgJAAgFAFQgGAFgBAJIAAA9IgPAAIAAg8QAAgUgUAAQgPAAgGANIAABDIgQAAIAAhbIAPAAIABAKQAKgMARAAQATAAAGAOQAFgGAHgEQAIgEAKAAQAeAAABAgIAAA9g");
	this.shape_46.setTransform(312.3,415.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(255,255,255,0.902)").s().p("AgHA/IAAhbIAOAAIAABbgAgGguQgCgDAAgEQAAgEACgDQADgCADAAQAEAAADACQADADAAAEQAAAEgDADQgDACgEAAQgDAAgDgCg");
	this.shape_47.setTransform(302.5,414.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(255,255,255,0.902)").s().p("AgFAuIghhbIAQAAIAWBGIAXhGIAQAAIghBbg");
	this.shape_48.setTransform(296.1,416);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(255,255,255,0.902)").s().p("AgHBCIAAiDIAPAAIAACDg");
	this.shape_49.setTransform(289.8,414);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(255,255,255,0.902)").s().p("AgdAjQgMgNAAgWIAAAAQAAgNAFgLQAFgLAKgGQAKgGALAAQATAAALANQAMANAAAVIAAABQAAAOgFAKQgGALgJAGQgKAGgMAAQgSAAgLgNgAgSgZQgHAKgBAQQABAPAHAKQAHAJALAAQAMAAAHgJQAHgKAAgQQAAgPgHgJQgIgKgLAAQgLAAgHAJg");
	this.shape_50.setTransform(282.7,416);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(255,255,255,0.902)").s().p("AgFAuIghhbIAQAAIAWBGIAXhGIAQAAIghBbg");
	this.shape_51.setTransform(273.4,416);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(255,255,255,0.902)").s().p("AAVAvIAAg8QAAgKgFgFQgEgFgKAAQgHAAgFAEQgGAFgDAGIAABBIgQAAIAAhbIAPAAIAAALQALgNAQAAQAdAAAAAhIAAA8g");
	this.shape_52.setTransform(264.3,415.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAkQgLgNAAgUIAAgDQAAgNAFgLQAFgLAKgGQAJgGAKAAQASAAAKAMQAKAMAAAWIAAAGIg9AAQAAANAIAJQAHAIALAAQAIAAAGgDQAGgEAEgFIAKAHQgMASgXAAQgSAAgMgMgAgOgbQgGAHgCANIAtAAIAAgCQAAgMgGgGQgGgHgKAAQgIAAgHAHg");
	this.shape_53.setTransform(255,416);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(255,255,255,0.902)").s().p("AgRAsQgJgEgFgHQgFgHAAgIIAQAAQABAIAGAEQAFAFAJAAQAJAAAGgEQAFgDAAgGQAAgHgFgDQgFgEgLgCQgMgDgHgDQgHgDgDgFQgDgFAAgHQAAgLAJgIQAKgIAOAAQAPAAAKAIQAKAIAAANIgQAAQAAgHgFgEQgGgFgIAAQgIAAgFAEQgFAEAAAGQAAAFAFADQAEADALADQAMACAHAEQAIADADAFQAEAFAAAIQAAAMgKAIQgKAHgQAAQgKAAgIgEg");
	this.shape_54.setTransform(245.7,416);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAkQgLgNAAgUIAAgDQAAgNAFgLQAFgLAKgGQAJgGAKAAQASAAAKAMQAKAMAAAWIAAAGIg9AAQAAANAIAJQAHAIALAAQAIAAAGgDQAGgEAEgFIAKAHQgMASgXAAQgSAAgMgMgAgOgbQgGAHgCANIAtAAIAAgCQAAgMgGgGQgGgHgKAAQgIAAgHAHg");
	this.shape_55.setTransform(236.6,416);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(255,255,255,0.902)").s().p("AgbA2QgLgNAAgWIAAgBQAAgUAKgNQAKgNARAAQAPAAAKALIAAgxIAPAAIAACDIgOAAIgBgKQgKAMgPgBQgRABgJgNgAgQgGQgGAIAAASQAAAPAGAKQAHAIAKABQAPAAAIgOIAAgqQgIgNgPAAQgKAAgHAJg");
	this.shape_56.setTransform(226.8,414.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(255,255,255,0.902)").s().p("AgeAjQgLgNAAgWIAAAAQAAgNAFgLQAGgLAJgGQAKgGALAAQATAAALANQAMANAAAVIAAABQAAAOgFAKQgGALgJAGQgKAGgMAAQgSAAgMgNgAgSgZQgHAKAAAQQAAAPAHAKQAHAJALAAQAMAAAHgJQAHgKAAgQQAAgPgHgJQgHgKgMAAQgLAAgHAJg");
	this.shape_57.setTransform(212.7,416);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(255,255,255,0.902)").s().p("AgcAoQgJgIAAgLQAAgPALgHQALgIATAAIAPAAIAAgHQAAgIgFgFQgFgFgJAAQgIAAgFAEQgHAEABAGIgRAAQAAgHAGgGQAEgGAJgEQAIgEAJAAQAQAAAJAIQAKAIAAAOIAAAqQAAAMADAIIAAABIgQAAQgCgCgBgHQgKALgPAAQgNAAgJgIgAgVASQAAAIAEAEQAGAEAIAAQAGAAAGgEQAHgDADgHIAAgTIgMAAQgcAAAAARg");
	this.shape_58.setTransform(198.6,416);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(255,255,255,0.902)").s().p("AgVAvIAAhbIAPAAIAAAKQAHgMAOAAIAHABIAAAOIgHAAQgPAAgFAOIAABAg");
	this.shape_59.setTransform(191.4,415.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(255,255,255,0.902)").s().p("AgdAoQgIgIAAgLQAAgPALgHQALgIATAAIAPAAIAAgHQAAgIgFgFQgFgFgJAAQgIAAgFAEQgHAEAAAGIgQAAQABgHAFgGQAEgGAJgEQAJgEAJAAQAQAAAIAIQAKAIAAAOIAAAqQAAAMADAIIAAABIgQAAQgCgCAAgHQgMALgOAAQgNAAgKgIgAgWASQAAAIAGAEQAEAEAIAAQAHAAAHgEQAGgDADgHIAAgTIgNAAQgcAAAAARg");
	this.shape_60.setTransform(183.2,416);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(255,255,255,0.902)").s().p("AgmBBIAAh/IAOAAIABAKQAKgMAQAAQAQAAAKANQAKAMAAAXIAAABQAAAUgKANQgJANgRAAQgPAAgKgLIAAAtgAgWgmIAAArQAHANAPAAQAKAAAHgJQAGgJABgRQgBgPgGgJQgHgKgKAAQgPAAgHANg");
	this.shape_61.setTransform(173.7,417.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(255,255,255,0.902)").s().p("AgdAjQgMgNAAgWIAAAAQAAgNAFgLQAGgLAJgGQAKgGALAAQASAAAMANQAMANAAAVIAAABQAAAOgFAKQgFALgKAGQgKAGgMAAQgSAAgLgNgAgSgZQgHAKgBAQQABAPAHAKQAHAJALAAQAMAAAHgJQAHgKAAgQQAAgPgHgJQgIgKgLAAQgLAAgHAJg");
	this.shape_62.setTransform(159.3,416);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(255,255,255,0.902)").s().p("AgcA2QgKgNAAgWIAAgBQAAgUAKgNQALgNAPAAQAQAAAJALIAAgxIAQAAIAACDIgPAAIAAgKQgJAMgRgBQgQABgKgNgAgPgGQgHAIAAASQAAAPAHAKQAGAIALABQAPAAAGgOIAAgqQgGgNgPAAQgLAAgGAJg");
	this.shape_63.setTransform(149.1,414.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(255,255,255,0.902)").s().p("AAVAvIAAg8QAAgKgFgFQgEgFgKAAQgHAAgFAEQgGAFgDAGIAABBIgQAAIAAhbIAPAAIAAALQALgNAQAAQAdAAAAAhIAAA8g");
	this.shape_64.setTransform(139.5,415.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(255,255,255,0.902)").s().p("AgHA/IAAhbIAPAAIAABbgAgGguQgDgDABgEQgBgEADgDQADgCADAAQAFAAACACQACADABAEQgBAEgCADQgCACgFAAQgDAAgDgCg");
	this.shape_65.setTransform(132.6,414.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAnQgJgJAAgRIAAg7IARAAIAAA7QgBAVASAAQARAAAFgNIAAhDIAQAAIAABbIgPAAIAAgJQgJALgRAAQgPAAgHgIg");
	this.shape_66.setTransform(125.6,416.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(255,255,255,0.902)").s().p("AgXA3IgBAKIgOAAIAAiDIAQAAIAAAyQAJgMAQAAQARAAAJANQAKANAAAVIAAABQAAAVgKANQgJAMgRAAQgQABgKgMgAgWgBIAAAoQAHAPAPAAQALgBAGgIQAGgKAAgRQAAgQgGgIQgGgJgLAAQgQAAgGAOg");
	this.shape_67.setTransform(116.1,414.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(255,255,255,0.902)").s().p("AgHA/IAAhbIAOAAIAABbgAgGguQgDgDAAgEQAAgEADgDQACgCAEAAQAFAAACACQADADAAAEQAAAEgDADQgCACgFAAQgEAAgCgCg");
	this.shape_68.setTransform(108.9,414.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(255,255,255,0.902)").s().p("AgVAvIAAhbIAPAAIAAAKQAHgMAOAAIAHABIAAAOIgHAAQgPAAgFAOIAABAg");
	this.shape_69.setTransform(104.2,415.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(255,255,255,0.902)").s().p("AgCA0QgFgGgBgMIAAg5IgQAAIAAgMIAQAAIAAgWIAQAAIAAAWIARAAIAAAMIgRAAIAAA5QAAAFABADQADADAFAAIAIgBIAAANIgMABQgKAAgFgGg");
	this.shape_70.setTransform(97.7,414.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(255,255,255,0.902)").s().p("AAVAvIAAg8QAAgKgFgFQgEgFgKAAQgHAAgFAEQgGAFgDAGIAABBIgQAAIAAhbIAPAAIAAALQALgNAQAAQAdAAAAAhIAAA8g");
	this.shape_71.setTransform(90.3,415.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(255,255,255,0.902)").s().p("AgdAjQgMgNAAgWIAAAAQAAgNAFgLQAGgLAJgGQAKgGALAAQASAAANANQALANAAAVIAAABQAAAOgFAKQgFALgKAGQgJAGgNAAQgSAAgLgNgAgSgZQgIAKAAAQQAAAPAIAKQAHAJALAAQAMAAAHgJQAHgKAAgQQAAgPgHgJQgIgKgLAAQgLAAgHAJg");
	this.shape_72.setTransform(80.5,416);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAjQgLgMAAgWIAAgCQAAgNAFgLQAFgKAJgGQAJgGAMAAQAPAAALAJQAKAKABAPIgPAAQgBgJgGgGQgGgGgJAAQgLAAgGAJQgIAIABARIAAACQgBAQAIAIQAGAJALAAQAIAAAHgFQAGgFABgIIAPAAQgBAIgFAHQgEAHgJAFQgJAEgJAAQgSAAgLgNg");
	this.shape_73.setTransform(71,416);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(255,255,255,0.902)").s().p("AgLAPQAIgLABgLIAAgOIAOAAIAAAMQAAAJgFAIQgEAIgFAGg");
	this.shape_74.setTransform(460.7,401.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(255,255,255,0.902)").s().p("AgdAjQgMgNAAgWIAAAAQAAgNAFgLQAGgLAJgGQAKgGALAAQASAAANANQALANAAAVIAAABQAAAOgFAKQgGALgJAGQgJAGgNAAQgSAAgLgNgAgSgZQgIAKAAAQQAAAPAIAKQAHAJALAAQAMAAAHgJQAHgKAAgQQAAgPgHgJQgIgKgLAAQgLAAgHAJg");
	this.shape_75.setTransform(454.3,396.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(255,255,255,0.902)").s().p("AgCA0QgGgGABgMIAAg5IgRAAIAAgMIARAAIAAgWIAPAAIAAAWIAQAAIAAAMIgQAAIAAA5QAAAFACADQACADAGAAIAHgBIAAANIgMABQgLAAgEgGg");
	this.shape_76.setTransform(446.2,395.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(255,255,255,0.902)").s().p("AAVAvIAAg8QAAgKgFgFQgEgFgKAAQgHAAgFAFQgGAEgDAGIAABBIgQAAIAAhbIAPAAIAAALQALgNAQAAQAdAAAAAhIAAA8g");
	this.shape_77.setTransform(438.7,396.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAkQgLgNAAgUIAAgDQAAgNAFgLQAFgLAKgGQAJgGAKAAQASAAAKAMQAKAMAAAWIAAAGIg9AAQAAANAIAJQAHAIALAAQAIAAAGgDQAGgEAEgFIAKAHQgMASgXAAQgSAAgMgMgAgOgbQgGAHgCANIAtAAIAAgCQAAgMgGgGQgGgHgKAAQgIAAgHAHg");
	this.shape_78.setTransform(429.3,396.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(255,255,255,0.902)").s().p("AAxAvIAAg8QAAgKgFgFQgEgFgLAAQgJAAgFAGQgGAFgBAIIAAA9IgPAAIAAg8QAAgUgUAAQgPAAgGAOIAABCIgQAAIAAhbIAPAAIABAKQAKgMARAAQATAAAGAOQAFgGAHgEQAIgEAKAAQAeAAABAgIAAA9g");
	this.shape_79.setTransform(417,396.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(255,255,255,0.902)").s().p("AgHA/IAAhbIAPAAIAABbgAgGguQgDgDABgEQgBgEADgDQADgCADAAQAFAAACACQACADAAAEQAAAEgCADQgCACgFAAQgDAAgDgCg");
	this.shape_80.setTransform(407.2,394.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAjQgLgMAAgWIAAgCQAAgNAFgLQAFgKAJgGQAKgGALAAQAPAAALAJQAKAKABAPIgPAAQgBgJgGgGQgGgGgJAAQgLAAgHAJQgGAIgBARIAAACQABAQAGAIQAHAJALAAQAIAAAHgFQAGgFABgIIAPAAQgBAIgEAHQgGAHgIAFQgJAEgJAAQgSAAgLgNg");
	this.shape_81.setTransform(400.6,396.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAkQgLgNAAgUIAAgDQAAgNAFgLQAFgLAKgGQAJgGAKAAQASAAAKAMQAKAMAAAWIAAAGIg9AAQAAANAIAJQAHAIALAAQAIAAAGgDQAGgEAEgFIAKAHQgMASgXAAQgSAAgMgMgAgOgbQgGAHgCANIAtAAIAAgCQAAgMgGgGQgGgHgKAAQgIAAgHAHg");
	this.shape_82.setTransform(391.3,396.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(255,255,255,0.902)").s().p("AAVBCIAAg9QAAgJgFgFQgEgFgKAAQgHAAgFAEQgGAEgDAGIAABCIgQAAIAAiDIAQAAIAAAyQAKgMAQAAQAdAAAAAgIAAA9g");
	this.shape_83.setTransform(381.8,394.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(255,255,255,0.902)").s().p("AgHBCIAAiDIAPAAIAACDg");
	this.shape_84.setTransform(374.9,394.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAkQgLgNAAgUIAAgDQAAgNAFgLQAFgLAKgGQAJgGAKAAQASAAAKAMQAKAMAAAWIAAAGIg9AAQAAANAIAJQAHAIALAAQAIAAAGgDQAGgEAEgFIAKAHQgMASgXAAQgSAAgMgMgAgOgbQgGAHgCANIAtAAIAAgCQAAgMgGgGQgGgHgKAAQgIAAgHAHg");
	this.shape_85.setTransform(368.2,396.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(255,255,255,0.902)").s().p("AgFAuIghhbIAQAAIAWBGIAXhGIAQAAIghBbg");
	this.shape_86.setTransform(359.2,396.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(255,255,255,0.902)").s().p("AAVAvIAAg8QAAgKgFgFQgEgFgKAAQgHAAgFAFQgGAEgDAGIAABBIgQAAIAAhbIAPAAIAAALQALgNAQAAQAdAAAAAhIAAA8g");
	this.shape_87.setTransform(350.1,396.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAkQgLgNAAgUIAAgDQAAgNAFgLQAFgLAKgGQAJgGAKAAQASAAAKAMQAKAMAAAWIAAAGIg9AAQAAANAIAJQAHAIALAAQAIAAAGgDQAGgEAEgFIAKAHQgMASgXAAQgSAAgMgMgAgOgbQgGAHgCANIAtAAIAAgCQAAgMgGgGQgGgHgKAAQgIAAgHAHg");
	this.shape_88.setTransform(340.8,396.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAkQgLgNAAgUIAAgDQAAgNAFgLQAFgLAKgGQAJgGAKAAQASAAAKAMQAKAMAAAWIAAAGIg9AAQAAANAIAJQAHAIALAAQAIAAAGgDQAGgEAEgFIAKAHQgMASgXAAQgSAAgMgMgAgOgbQgGAHgCANIAtAAIAAgCQAAgMgGgGQgGgHgKAAQgIAAgHAHg");
	this.shape_89.setTransform(327.1,396.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(255,255,255,0.902)").s().p("AgcA2QgKgNAAgWIAAgBQAAgVAKgMQALgNAPAAQAQAAAJALIAAgxIAQAAIAACDIgPAAIAAgKQgKALgQAAQgPABgLgNgAgPgGQgHAIAAASQAAAPAHAKQAGAIALABQAPAAAGgOIAAgpQgGgOgPAAQgLAAgGAJg");
	this.shape_90.setTransform(317.3,394.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(255,255,255,0.902)").s().p("AgeAjQgLgNAAgWIAAAAQAAgNAFgLQAGgLAJgGQAJgGAMAAQASAAANANQALANAAAVIAAABQAAAOgFAKQgFALgKAGQgJAGgNAAQgSAAgMgNgAgSgZQgIAKAAAQQAAAPAIAKQAHAJALAAQAMAAAHgJQAHgKAAgQQAAgPgHgJQgIgKgLAAQgLAAgHAJg");
	this.shape_91.setTransform(303.2,396.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(255,255,255,0.902)").s().p("AgRAsQgJgEgFgHQgFgHAAgIIAQAAQABAIAGAEQAFAFAJAAQAJAAAGgEQAFgDAAgGQAAgHgFgDQgFgEgLgCQgMgDgHgDQgHgDgDgFQgDgFAAgHQAAgLAJgIQAKgIAOAAQAPAAAKAIQAKAIAAANIgQAAQAAgHgFgEQgGgFgIAAQgIAAgFAEQgFAEAAAGQAAAFAFADQAEADALADQAMACAHAEQAIADADAFQAEAFAAAIQAAAMgKAIQgKAHgQAAQgKAAgIgEg");
	this.shape_92.setTransform(293.6,396.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(255,255,255,0.902)").s().p("AgRAsQgJgEgFgHQgFgHAAgIIAQAAQABAIAGAEQAFAFAJAAQAJAAAGgEQAFgDAAgGQAAgHgFgDQgFgEgLgCQgMgDgHgDQgHgDgDgFQgDgFAAgHQAAgLAJgIQAKgIAOAAQAPAAAKAIQAKAIAAANIgQAAQAAgHgFgEQgGgFgIAAQgIAAgFAEQgFAEAAAGQAAAFAFADQAEADALADQAMACAHAEQAIADADAFQAEAFAAAIQAAAMgKAIQgKAHgQAAQgKAAgIgEg");
	this.shape_93.setTransform(284.6,396.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAkQgLgNAAgUIAAgDQAAgNAFgLQAFgLAKgGQAJgGAKAAQASAAAKAMQAKAMAAAWIAAAGIg9AAQAAANAIAJQAHAIALAAQAIAAAGgDQAGgEAEgFIAKAHQgMASgXAAQgSAAgMgMgAgOgbQgGAHgCANIAtAAIAAgCQAAgMgGgGQgGgHgKAAQgIAAgHAHg");
	this.shape_94.setTransform(275.6,396.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAjQgLgMAAgWIAAgCQAAgNAFgLQAFgKAJgGQAJgGAMAAQAPAAALAJQAKAKABAPIgPAAQgBgJgGgGQgGgGgJAAQgLAAgGAJQgIAIABARIAAACQgBAQAIAIQAGAJALAAQAIAAAHgFQAGgFABgIIAPAAQAAAIgGAHQgEAHgJAFQgIAEgKAAQgSAAgLgNg");
	this.shape_95.setTransform(266.4,396.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(255,255,255,0.902)").s().p("AgeAjQgLgNAAgWIAAAAQAAgNAFgLQAGgLAJgGQAJgGAMAAQATAAALANQAMANAAAVIAAABQAAAOgFAKQgGALgJAGQgKAGgMAAQgSAAgMgNgAgSgZQgHAKAAAQQAAAPAHAKQAHAJALAAQAMAAAHgJQAHgKAAgQQAAgPgHgJQgHgKgMAAQgLAAgHAJg");
	this.shape_96.setTransform(256.7,396.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(255,255,255,0.902)").s().p("AgVAvIAAhbIAPAAIAAAKQAHgMAOAAIAHABIAAAOIgHAAQgPAAgFAOIAABAg");
	this.shape_97.setTransform(249.2,396.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(255,255,255,0.902)").s().p("AgmBBIAAh/IAOAAIABAKQAKgMAQAAQAQAAAKANQAKAMAAAXIAAABQAAAUgKANQgJANgRAAQgQAAgJgLIAAAtgAgWgmIAAArQAHANAPAAQAKAAAHgJQAGgJAAgRQAAgPgGgJQgHgKgKAAQgPAAgHANg");
	this.shape_98.setTransform(241.1,398.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(255,255,255,0.902)").s().p("AgdAjQgMgNAAgWIAAAAQAAgNAFgLQAGgLAJgGQAKgGALAAQASAAANANQALANAAAVIAAABQAAAOgFAKQgGALgJAGQgJAGgNAAQgSAAgLgNgAgSgZQgIAKAAAQQAAAPAIAKQAHAJALAAQAMAAAHgJQAHgKAAgQQAAgPgHgJQgIgKgLAAQgLAAgHAJg");
	this.shape_99.setTransform(226.6,396.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(255,255,255,0.902)").s().p("AgcA2QgKgNAAgWIAAgBQAAgVAKgMQALgNAPAAQAQAAAJALIAAgxIAQAAIAACDIgPAAIAAgKQgKALgQAAQgPABgLgNgAgPgGQgHAIAAASQAAAPAHAKQAGAIALABQAPAAAGgOIAAgpQgGgOgPAAQgLAAgGAJg");
	this.shape_100.setTransform(216.5,394.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(255,255,255,0.902)").s().p("AgRAsQgJgEgFgHQgFgHAAgIIAQAAQABAIAGAEQAFAFAJAAQAJAAAGgEQAFgDAAgGQAAgHgFgDQgFgEgLgCQgMgDgHgDQgHgDgDgFQgDgFAAgHQAAgLAJgIQAKgIAOAAQAPAAAKAIQAKAIAAANIgQAAQAAgHgFgEQgGgFgIAAQgIAAgFAEQgFAEAAAGQAAAFAFADQAEADALADQAMACAHAEQAIADADAFQAEAFAAAIQAAAMgKAIQgKAHgQAAQgKAAgIgEg");
	this.shape_101.setTransform(202.8,396.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(255,255,255,0.902)").s().p("AgdA7QgIgIAAgMQAAgOALgIQALgIASAAIAQAAIAAgIQAAgHgFgEQgFgGgJABQgIAAgGAEQgFAEgBAGIgPAAQAAgHAEgGQAFgHAJgEQAJgDAJAAQAQAAAIAIQAKAIAAANIAAArQAAAMADAIIAAABIgRAAQgBgDAAgHQgMAMgOgBQgOAAgJgHgAgWAlQAAAHAGAFQAFAEAHAAQAHAAAHgEQAGgEADgGIAAgTIgNAAQgcAAAAARgAgFgoIAPgaIATAAIgXAag");
	this.shape_102.setTransform(193.6,394.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(255,255,255,0.902)").s().p("AgVAvIAAhbIAPAAIAAAKQAHgMAOAAIAHABIAAAOIgHAAQgPAAgFAOIAABAg");
	this.shape_103.setTransform(186.4,396.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(255,255,255,0.902)").s().p("AgCA0QgGgGAAgMIAAg5IgQAAIAAgMIAQAAIAAgWIAPAAIAAAWIARAAIAAAMIgRAAIAAA5QAAAFACADQADADAFAAIAIgBIAAANIgMABQgLAAgEgGg");
	this.shape_104.setTransform(179.8,395.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(255,255,255,0.902)").s().p("AgVAvIAAhbIAPAAIAAAKQAHgMAOAAIAHABIAAAOIgHAAQgPAAgFAOIAABAg");
	this.shape_105.setTransform(170.4,396.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(255,255,255,0.902)").s().p("AgeAjQgLgNAAgWIAAAAQAAgNAFgLQAFgLAKgGQAJgGAMAAQASAAANANQALANAAAVIAAABQAAAOgFAKQgFALgKAGQgJAGgNAAQgSAAgMgNgAgSgZQgIAKABAQQgBAPAIAKQAHAJALAAQAMAAAHgJQAHgKAAgQQAAgPgHgJQgHgKgMAAQgLAAgHAJg");
	this.shape_106.setTransform(162,396.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(255,255,255,0.902)").s().p("AgmBBIAAh/IAOAAIABAKQAKgMAQAAQARAAAJANQAKAMAAAXIAAABQAAAUgKANQgJANgQAAQgRAAgJgLIAAAtgAgWgmIAAArQAHANAOAAQALAAAGgJQAIgJAAgRQAAgPgIgJQgGgKgLAAQgOAAgHANg");
	this.shape_107.setTransform(152.3,398.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(255,255,255,0.902)").s().p("AgHBCIAAiDIAPAAIAACDg");
	this.shape_108.setTransform(140.7,394.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(255,255,255,0.902)").s().p("AgcAoQgJgIAAgLQAAgPALgHQALgIATAAIAPAAIAAgHQAAgIgFgFQgFgFgJAAQgIAAgFAEQgHAEABAGIgRAAQAAgHAGgGQAEgGAJgEQAIgEAJAAQAQAAAJAIQAKAIAAAOIAAAqQAAAMADAIIAAABIgQAAQgCgCgBgHQgKALgPAAQgNAAgJgIgAgVASQAAAIAEAEQAGAEAIAAQAGAAAGgEQAHgDADgHIAAgTIgMAAQgcAAAAARg");
	this.shape_109.setTransform(133.8,396.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(255,255,255,0.902)").s().p("AgVAvIAAhbIAPAAIAAAKQAHgMAOAAIAHABIAAAOIgHAAQgPAAgFAOIAABAg");
	this.shape_110.setTransform(126.5,396.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAkQgLgNAAgUIAAgDQAAgNAFgLQAFgLAKgGQAJgGAKAAQASAAAKAMQAKAMAAAWIAAAGIg9AAQAAANAIAJQAHAIALAAQAIAAAGgDQAGgEAEgFIAKAHQgMASgXAAQgSAAgMgMgAgOgbQgGAHgCANIAtAAIAAgCQAAgMgGgGQgGgHgKAAQgIAAgHAHg");
	this.shape_111.setTransform(118.6,396.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(255,255,255,0.902)").s().p("AgTA9QgJgEgFgIIAIgJQAKAMAPAAQAKAAAHgGQAGgHAAgMIAAgHQgJAKgQAAQgQAAgKgNQgKgNAAgVQAAgWAKgNQAKgMAQAAQAQAAAKAMIABgLIAOAAIAABaQAAARgLALQgKAKgSAAQgJAAgKgEgAgQgqQgGAJAAASQAAAPAGAIQAHAJAKAAQAPAAAHgOIAAgpQgHgNgPAAQgKAAgHAJg");
	this.shape_112.setTransform(108.7,398.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(255,255,255,0.902)").s().p("AgdAjQgMgNAAgWIAAAAQAAgNAFgLQAGgLAJgGQAJgGAMAAQASAAANANQALANAAAVIAAABQAAAOgFAKQgFALgKAGQgJAGgNAAQgSAAgLgNgAgSgZQgIAKAAAQQAAAPAIAKQAHAJALAAQAMAAAHgJQAHgKAAgQQAAgPgHgJQgIgKgLAAQgLAAgHAJg");
	this.shape_113.setTransform(505.3,376.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("rgba(255,255,255,0.902)").s().p("AAxAvIAAg8QAAgKgFgFQgEgFgLAAQgJAAgFAGQgGAFgBAIIAAA9IgPAAIAAg7QAAgVgUAAQgPAAgGAOIAABCIgQAAIAAhcIAPAAIABALQAKgMARAAQATAAAGAOQAFgGAHgEQAIgEAKAAQAeAAABAgIAAA9g");
	this.shape_114.setTransform(492.6,376.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("rgba(255,255,255,0.902)").s().p("AgRAsQgJgEgFgHQgFgHAAgIIAQAAQABAIAGAEQAFAFAJAAQAJAAAGgEQAFgDAAgGQAAgHgFgDQgFgEgLgCQgMgDgHgDQgHgDgDgFQgDgFAAgHQAAgLAJgIQAKgIAOAAQAPAAAKAIQAKAIAAANIgQAAQAAgHgFgEQgGgFgIAAQgIAAgFAEQgFAEAAAGQAAAFAFADQAEADALADQAMACAHAEQAIADADAFQAEAFAAAIQAAAMgKAIQgKAHgQAAQgKAAgIgEg");
	this.shape_115.setTransform(480.3,376.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("rgba(255,255,255,0.902)").s().p("AgHA/IAAhcIAOAAIAABcgAgGguQgDgDAAgEQAAgEADgCQADgDADAAQAEAAADADQACACAAAEQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_116.setTransform(473.8,375.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("rgba(255,255,255,0.902)").s().p("AAVAvIAAg8QAAgKgFgFQgEgFgKAAQgHAAgFAFQgGAEgDAGIAABBIgQAAIAAhcIAPAAIAAAMQALgNAQAAQAdAAAAAhIAAA8g");
	this.shape_117.setTransform(466.8,376.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("rgba(255,255,255,0.902)").s().p("AgdAoQgIgIAAgLQAAgPALgHQALgIATAAIAPAAIAAgHQAAgIgFgFQgFgFgJAAQgIAAgFAEQgHAEAAAGIgQAAQABgHAEgGQAFgGAJgEQAJgEAJAAQAQAAAIAIQAKAIAAAOIAAAqQAAAMADAIIAAABIgQAAQgCgCAAgHQgMALgOAAQgNAAgKgIgAgWASQAAAIAGAEQAEAEAJAAQAGAAAHgEQAGgDADgHIAAgTIgNAAQgcAAAAARg");
	this.shape_118.setTransform(457.2,376.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAjQgLgMAAgWIAAgCQAAgNAFgLQAFgKAJgGQAKgGALAAQAQAAAKAJQAKAKABAPIgPAAQgBgJgGgGQgGgGgJAAQgLAAgGAJQgIAIAAARIAAACQAAAQAIAIQAGAJALAAQAJAAAGgFQAGgFABgIIAPAAQAAAIgGAHQgEAHgJAFQgIAEgKAAQgSAAgLgNg");
	this.shape_119.setTransform(448,376.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAkQgLgNAAgUIAAgDQAAgNAFgLQAFgLAKgGQAJgGAKAAQASAAAKAMQAKAMAAAWIAAAGIg9AAQAAANAIAJQAHAIALAAQAIAAAGgDQAGgEAEgFIAKAHQgMASgXAAQgSAAgMgMgAgOgbQgGAHgCANIAtAAIAAgCQAAgMgGgGQgGgHgKAAQgIAAgHAHg");
	this.shape_120.setTransform(438.7,376.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("rgba(255,255,255,0.902)").s().p("AAxAvIAAg8QAAgKgFgFQgEgFgLAAQgJAAgFAGQgGAFgBAIIAAA9IgPAAIAAg7QAAgVgUAAQgPAAgGAOIAABCIgQAAIAAhcIAPAAIABALQAKgMARAAQATAAAGAOQAFgGAHgEQAIgEAKAAQAeAAABAgIAAA9g");
	this.shape_121.setTransform(426.3,376.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("rgba(255,255,255,0.902)").s().p("AgdAjQgMgNAAgWIAAAAQAAgNAFgLQAGgLAJgGQAKgGALAAQASAAANANQALANAAAVIAAABQAAAOgFAKQgGALgJAGQgJAGgNAAQgSAAgLgNgAgSgZQgIAKAAAQQAAAPAIAKQAHAJALAAQAMAAAHgJQAHgKAAgQQAAgPgHgJQgIgKgLAAQgLAAgHAJg");
	this.shape_122.setTransform(409.3,376.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(255,255,255,0.902)").s().p("AgcAoQgJgIAAgLQAAgPALgHQALgIASAAIAQAAIAAgHQAAgIgFgFQgFgFgJAAQgIAAgGAEQgFAEAAAGIgQAAQAAgHAEgGQAGgGAIgEQAIgEAKAAQAPAAAKAIQAIAIABAOIAAAqQAAAMADAIIAAABIgRAAQgBgCgBgHQgLALgOAAQgOAAgIgIgAgWASQABAIAEAEQAFAEAIAAQAHAAAGgEQAHgDADgHIAAgTIgMAAQgcAAgBARg");
	this.shape_123.setTransform(399.6,376.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("rgba(255,255,255,0.902)").s().p("AgdAjQgMgNAAgWIAAAAQAAgNAFgLQAGgLAJgGQAKgGALAAQASAAANANQALANAAAVIAAABQAAAOgFAKQgGALgJAGQgJAGgNAAQgSAAgLgNgAgSgZQgIAKAAAQQAAAPAIAKQAHAJALAAQAMAAAHgJQAHgKAAgQQAAgPgHgJQgIgKgLAAQgLAAgHAJg");
	this.shape_124.setTransform(385.5,376.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("rgba(255,255,255,0.902)").s().p("AgcA2QgKgOAAgVIAAgBQAAgUAKgNQALgNAPAAQAQAAAJALIAAgwIAQAAIAACCIgPAAIAAgKQgKALgQAAQgPAAgLgMgAgPgGQgHAIAAASQAAAPAHAKQAGAJALAAQAPgBAGgNIAAgpQgGgOgPAAQgLAAgGAJg");
	this.shape_125.setTransform(375.3,374.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("rgba(255,255,255,0.902)").s().p("AgcAoQgJgIAAgLQAAgPALgHQALgIASAAIAQAAIAAgHQAAgIgFgFQgFgFgJAAQgIAAgGAEQgFAEAAAGIgQAAQAAgHAEgGQAGgGAIgEQAIgEAKAAQAPAAAKAIQAIAIABAOIAAAqQAAAMADAIIAAABIgRAAQgBgCgBgHQgLALgOAAQgOAAgIgIgAgWASQABAIAEAEQAFAEAIAAQAHAAAGgEQAHgDADgHIAAgTIgMAAQgcAAgBARg");
	this.shape_126.setTransform(365.8,376.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("rgba(255,255,255,0.902)").s().p("AAVAvIAAg8QAAgKgFgFQgEgFgKAAQgHAAgFAFQgGAEgDAGIAABBIgQAAIAAhcIAPAAIAAAMQALgNAQAAQAdAAAAAhIAAA8g");
	this.shape_127.setTransform(356.2,376.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("rgba(255,255,255,0.902)").s().p("AgdAjQgMgNAAgWIAAAAQAAgNAFgLQAGgLAJgGQAJgGAMAAQASAAANANQALANAAAVIAAABQAAAOgFAKQgFALgKAGQgJAGgNAAQgSAAgLgNgAgSgZQgIAKAAAQQAAAPAIAKQAHAJALAAQAMAAAHgJQAHgKAAgQQAAgPgHgJQgIgKgLAAQgLAAgHAJg");
	this.shape_128.setTransform(346.4,376.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("rgba(255,255,255,0.902)").s().p("AgHA/IAAhcIAPAAIAABcgAgGguQgCgDgBgEQABgEACgCQACgDAEAAQAEAAADADQADACgBAEQABAEgDADQgDACgEAAQgEAAgCgCg");
	this.shape_129.setTransform(339.4,375.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAjQgLgMAAgWIAAgCQAAgNAFgLQAFgKAJgGQAJgGAMAAQAPAAALAJQAKAKABAPIgPAAQgBgJgGgGQgGgGgJAAQgLAAgHAJQgGAIAAARIAAACQAAAQAGAIQAHAJALAAQAJAAAGgFQAGgFABgIIAPAAQgBAIgEAHQgFAHgJAFQgIAEgKAAQgSAAgLgNg");
	this.shape_130.setTransform(332.7,376.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("rgba(255,255,255,0.902)").s().p("AgcAoQgJgIAAgLQAAgPALgHQALgIATAAIAPAAIAAgHQAAgIgFgFQgFgFgJAAQgIAAgFAEQgHAEABAGIgRAAQAAgHAGgGQAEgGAJgEQAIgEAJAAQAQAAAJAIQAKAIAAAOIAAAqQAAAMADAIIAAABIgQAAQgCgCgBgHQgKALgPAAQgNAAgJgIgAgVASQAAAIAEAEQAGAEAIAAQAGAAAGgEQAHgDADgHIAAgTIgMAAQgcAAAAARg");
	this.shape_131.setTransform(323.3,376.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("rgba(255,255,255,0.902)").s().p("AgHBCIAAiDIAPAAIAACDg");
	this.shape_132.setTransform(316.4,374.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAkQgLgNAAgUIAAgDQAAgNAFgLQAFgLAKgGQAJgGAKAAQASAAAKAMQAKAMAAAWIAAAGIg9AAQAAANAIAJQAHAIALAAQAIAAAGgDQAGgEAEgFIAKAHQgMASgXAAQgSAAgMgMgAgOgbQgGAHgCANIAtAAIAAgCQAAgMgGgGQgGgHgKAAQgIAAgHAHg");
	this.shape_133.setTransform(309.7,376.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("rgba(255,255,255,0.902)").s().p("AgVAvIAAhcIAPAAIAAALQAHgMAOAAIAHABIAAAPIgHgBQgPAAgFAOIAABAg");
	this.shape_134.setTransform(302.5,376.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("rgba(255,255,255,0.902)").s().p("AgbA2QgLgMAAgVIAAgDQAAgNAFgKQAFgLAKgGQAJgGAKAAQASAAAKALQAKAMAAAWIAAAHIg9AAQAAANAIAIQAHAJALAAQAIAAAGgDQAGgEAEgFIAKAHQgMARgXAAQgSAAgMgMgAgOgIQgGAGgCAMIAtAAIAAgBQAAgLgGgHQgGgGgKAAQgIAAgHAHgAgHgoIAQgZIATAAIgXAZg");
	this.shape_135.setTransform(290.2,374.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("rgba(255,255,255,0.902)").s().p("AgdAjQgMgNAAgWIAAAAQAAgNAFgLQAGgLAJgGQAKgGALAAQASAAANANQALANAAAVIAAABQAAAOgFAKQgGALgJAGQgKAGgMAAQgSAAgLgNgAgSgZQgIAKAAAQQAAAPAIAKQAHAJALAAQAMAAAHgJQAHgKAAgQQAAgPgHgJQgIgKgLAAQgLAAgHAJg");
	this.shape_136.setTransform(276.1,376.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("rgba(255,255,255,0.902)").s().p("AgFAuIghhbIAQAAIAWBGIAXhGIAQAAIghBbg");
	this.shape_137.setTransform(266.9,376.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("rgba(255,255,255,0.902)").s().p("AgHA/IAAhcIAOAAIAABcgAgGguQgDgDAAgEQAAgEADgCQADgDADAAQAEAAADADQADACAAAEQAAAEgDADQgDACgEAAQgDAAgDgCg");
	this.shape_138.setTransform(260.6,375.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("rgba(255,255,255,0.902)").s().p("AgCA0QgFgGgBgMIAAg5IgQAAIAAgMIAQAAIAAgWIAPAAIAAAWIASAAIAAAMIgSAAIAAA5QAAAFACADQADADAFAAIAIgBIAAANIgMABQgKAAgFgGg");
	this.shape_139.setTransform(255.3,375.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("rgba(255,255,255,0.902)").s().p("AgcAoQgJgIAAgLQAAgPALgHQALgIASAAIAQAAIAAgHQAAgIgFgFQgFgFgJAAQgIAAgGAEQgFAEAAAGIgQAAQAAgHAEgGQAGgGAIgEQAIgEAJAAQAQAAAKAIQAIAIABAOIAAAqQAAAMADAIIAAABIgRAAQgBgCgBgHQgLALgOAAQgOAAgIgIgAgWASQABAIAEAEQAFAEAIAAQAHAAAGgEQAHgDADgHIAAgTIgMAAQgcAAgBARg");
	this.shape_140.setTransform(247.9,376.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("rgba(255,255,255,0.902)").s().p("AgbA2QgLgOAAgVIAAgBQAAgUAKgNQAKgNARAAQAPAAAKALIAAgwIAPAAIAACCIgOAAIgBgKQgKALgPAAQgRAAgJgMgAgQgGQgGAIAAASQAAAPAGAKQAHAJAKAAQAPgBAIgNIAAgpQgIgOgPAAQgKAAgHAJg");
	this.shape_141.setTransform(238,374.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("rgba(255,255,255,0.902)").s().p("AgHA/IAAhcIAOAAIAABcgAgGguQgDgDAAgEQAAgEADgCQADgDADAAQAEAAADADQACACAAAEQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_142.setTransform(231.2,375.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("rgba(255,255,255,0.902)").s().p("AAVAuIgVgiIgUAiIgTAAIAfguIgegtIASAAIAUAiIAUgiIATAAIgfAtIAgAug");
	this.shape_143.setTransform(224.7,376.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("rgba(255,255,255,0.902)").s().p("AgeAjQgLgNAAgWIAAAAQAAgNAFgLQAGgLAJgGQAKgGALAAQATAAALANQAMANAAAVIAAABQAAAOgFAKQgGALgJAGQgKAGgMAAQgSAAgMgNgAgSgZQgHAKAAAQQAAAPAHAKQAHAJALAAQAMAAAHgJQAHgKAAgQQAAgPgHgJQgHgKgMAAQgLAAgHAJg");
	this.shape_144.setTransform(215.4,376.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAkQgLgNAAgUIAAgDQAAgNAFgLQAFgLAKgGQAJgGAKAAQASAAAKAMQAKAMAAAWIAAAGIg9AAQAAANAIAJQAHAIALAAQAIAAAGgDQAGgEAEgFIAKAHQgMASgXAAQgSAAgMgMgAgOgbQgGAHgCANIAtAAIAAgCQAAgMgGgGQgGgHgKAAQgIAAgHAHg");
	this.shape_145.setTransform(201.5,376.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("rgba(255,255,255,0.902)").s().p("AgRAsQgJgEgFgHQgFgHAAgIIAQAAQABAIAGAEQAFAFAJAAQAJAAAGgEQAFgDAAgGQAAgHgFgDQgFgEgLgCQgMgDgHgDQgHgDgDgFQgDgFAAgHQAAgLAJgIQAKgIAOAAQAPAAAKAIQAKAIAAANIgQAAQAAgHgFgEQgGgFgIAAQgIAAgFAEQgFAEAAAGQAAAFAFADQAEADALADQAMACAHAEQAIADADAFQAEAFAAAIQAAAMgKAIQgKAHgQAAQgKAAgIgEg");
	this.shape_146.setTransform(192.2,376.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("rgba(255,255,255,0.902)").s().p("AgRAsQgJgEgFgHQgFgHAAgIIAQAAQABAIAGAEQAFAFAJAAQAJAAAGgEQAFgDAAgGQAAgHgFgDQgFgEgLgCQgMgDgHgDQgHgDgDgFQgDgFAAgHQAAgLAJgIQAKgIAOAAQAPAAAKAIQAKAIAAANIgQAAQAAgHgFgEQgGgFgIAAQgIAAgFAEQgFAEAAAGQAAAFAFADQAEADALADQAMACAHAEQAIADADAFQAEAFAAAIQAAAMgKAIQgKAHgQAAQgKAAgIgEg");
	this.shape_147.setTransform(183.2,376.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAkQgLgNAAgUIAAgDQAAgNAFgLQAFgLAKgGQAJgGAKAAQASAAAKAMQAKAMAAAWIAAAGIg9AAQAAANAIAJQAHAIALAAQAIAAAGgDQAGgEAEgFIAKAHQgMASgXAAQgSAAgMgMgAgOgbQgGAHgCANIAtAAIAAgCQAAgMgGgGQgGgHgKAAQgIAAgHAHg");
	this.shape_148.setTransform(174.1,376.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("rgba(255,255,255,0.902)").s().p("AgVAvIAAhcIAPAAIAAALQAHgMAOAAIAHABIAAAPIgHgBQgPAAgFAOIAABAg");
	this.shape_149.setTransform(166.9,376.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("rgba(255,255,255,0.902)").s().p("AgCA0QgGgGABgMIAAg5IgRAAIAAgMIARAAIAAgWIAPAAIAAAWIAQAAIAAAMIgQAAIAAA5QAAAFACADQACADAGAAIAHgBIAAANIgMABQgLAAgEgGg");
	this.shape_150.setTransform(160.4,375.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("rgba(255,255,255,0.902)").s().p("AgRAsQgJgEgFgHQgFgHAAgIIAQAAQABAIAGAEQAFAFAJAAQAJAAAGgEQAFgDAAgGQAAgHgFgDQgFgEgLgCQgMgDgHgDQgHgDgDgFQgDgFAAgHQAAgLAJgIQAKgIAOAAQAPAAAKAIQAKAIAAANIgQAAQAAgHgFgEQgGgFgIAAQgIAAgFAEQgFAEAAAGQAAAFAFADQAEADALADQAMACAHAEQAIADADAFQAEAFAAAIQAAAMgKAIQgKAHgQAAQgKAAgIgEg");
	this.shape_151.setTransform(153.2,376.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAkQgLgNAAgUIAAgDQAAgNAFgLQAFgLAKgGQAJgGAKAAQASAAAKAMQAKAMAAAWIAAAGIg9AAQAAANAIAJQAHAIALAAQAIAAAGgDQAGgEAEgFIAKAHQgMASgXAAQgSAAgMgMgAgOgbQgGAHgCANIAtAAIAAgCQAAgMgGgGQgGgHgKAAQgIAAgHAHg");
	this.shape_152.setTransform(144.2,376.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("rgba(255,255,255,0.902)").s().p("AgZA5QgLgHgHgOQgFgNgBgSIAAgIQAAgSAGgOQAHgNALgIQALgHAOAAQAPAAAMAHQALAIAGANQAGAOAAASIAAAHQAAASgGAOQgGAOgLAHQgMAHgPAAQgOAAgLgHgAgYglQgIAMgBAVIAAAIQABAVAIANQAKAMAOAAQAQAAAJgMQAJgLAAgWIAAgIQAAgWgJgMQgJgMgQAAQgOAAgKAMg");
	this.shape_153.setTransform(129.1,375.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("rgba(255,255,255,0.902)").s().p("AgGAHQgDgDAAgEQAAgDADgDQACgCAEAAQAFAAACACQADADAAADQAAAEgDADQgCACgFABQgEgBgCgCg");
	this.shape_154.setTransform(116.3,380.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("rgba(255,255,255,0.902)").s().p("AgdAoQgIgIAAgLQAAgPALgHQALgIATAAIAPAAIAAgHQAAgIgFgFQgFgFgJAAQgIAAgFAEQgHAEAAAGIgQAAQABgHAEgGQAFgGAJgEQAJgEAJAAQAQAAAIAIQAKAIAAAOIAAAqQAAAMADAIIAAABIgQAAQgCgCAAgHQgMALgOAAQgNAAgKgIgAgWASQAAAIAGAEQAEAEAJAAQAGAAAHgEQAGgDADgHIAAgTIgNAAQgcAAAAARg");
	this.shape_155.setTransform(109.4,376.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAjQgLgMAAgWIAAgCQAAgNAFgLQAFgKAJgGQAKgGALAAQAQAAAKAJQAKAKABAPIgPAAQgBgJgGgGQgGgGgJAAQgLAAgGAJQgIAIAAARIAAACQAAAQAIAIQAGAJALAAQAJAAAGgFQAGgFABgIIAPAAQAAAIgGAHQgEAHgJAFQgIAEgKAAQgSAAgLgNg");
	this.shape_156.setTransform(100.1,376.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("rgba(255,255,255,0.902)").s().p("AgHA/IAAhcIAPAAIAABcgAgGguQgCgDAAgEQAAgEACgCQADgDADAAQAFAAACADQACACABAEQgBAEgCADQgCACgFAAQgDAAgDgCg");
	this.shape_157.setTransform(93.4,375.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("rgba(255,255,255,0.902)").s().p("AAVAvIAAg8QAAgKgFgFQgEgFgKAAQgHAAgFAFQgGAEgDAGIAABBIgQAAIAAhcIAPAAIAAAMQALgNAQAAQAdAAAAAhIAAA8g");
	this.shape_158.setTransform(86.3,376.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("rgba(255,255,255,0.902)").s().p("AgdA2QgMgOAAgVIAAgBQAAgNAFgLQAFgKAKgHQAKgFALAAQATAAALANQAMANAAAUIAAACQAAAOgFAKQgGAKgJAHQgKAFgMAAQgSAAgLgMgAgSgGQgHAIgBASQABAPAHAKQAHAJALAAQAMAAAHgJQAHgKAAgRQAAgQgHgIQgIgJgLAAQgLAAgHAJgAAMgpIgMgOIgMAOIgOAAIAAgBIAVgXIAJAAIAVAXIAAABg");
	this.shape_159.setTransform(76.6,374.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("rgba(255,255,255,0.902)").s().p("AgVAvIAAhcIAPAAIAAALQAHgMAOAAIAHABIAAAPIgHgBQgPAAgFAOIAABAg");
	this.shape_160.setTransform(69,376.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAjQgLgMAAgWIAAgCQAAgNAFgLQAFgKAJgGQAKgGALAAQAQAAAKAJQAKAKABAPIgPAAQgBgJgGgGQgGgGgJAAQgLAAgHAJQgGAIgBARIAAACQABAQAGAIQAHAJALAAQAIAAAHgFQAGgFABgIIAPAAQAAAIgFAHQgGAHgIAFQgJAEgJAAQgSAAgLgNg");
	this.shape_161.setTransform(61.2,376.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("rgba(255,255,255,0.902)").s().p("AgVAvIAAhbIAPAAIAAAKQAHgMAOAAIAHABIAAAOIgHAAQgPAAgFAOIAABAg");
	this.shape_162.setTransform(493.2,357.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("rgba(255,255,255,0.902)").s().p("AgdAoQgIgIAAgLQAAgPALgHQALgIATAAIAPAAIAAgHQAAgIgFgFQgFgFgJAAQgIAAgFAEQgHAEAAAGIgQAAQABgHAFgGQAEgGAJgEQAJgEAIAAQARAAAIAIQAKAIAAAOIAAAqQAAAMADAIIAAABIgQAAQgCgCAAgHQgMALgOAAQgNAAgKgIgAgVASQAAAIAEAEQAFAEAJAAQAGAAAGgEQAHgDADgHIAAgTIgNAAQgbAAAAARg");
	this.shape_163.setTransform(485,357.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("rgba(255,255,255,0.902)").s().p("AAVAvIAAg8QAAgKgFgFQgEgFgKAAQgHAAgFAFQgGAEgDAGIAABBIgQAAIAAhbIAPAAIAAALQALgNAQAAQAdAAAAAhIAAA8g");
	this.shape_164.setTransform(475.4,357.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("rgba(255,255,255,0.902)").s().p("AgeAjQgLgNAAgWIAAAAQAAgNAFgLQAGgLAJgGQAKgGALAAQATAAALANQAMANAAAVIAAABQAAAOgFAKQgGALgJAGQgKAGgMAAQgSAAgMgNgAgSgZQgHAKAAAQQAAAPAHAKQAHAJALAAQAMAAAHgJQAHgKAAgQQAAgPgHgJQgHgKgMAAQgLAAgHAJg");
	this.shape_165.setTransform(465.6,357.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("rgba(255,255,255,0.902)").s().p("AAxAvIAAg8QAAgKgFgFQgEgFgLAAQgJAAgFAGQgGAFgBAIIAAA9IgPAAIAAg8QAAgUgUAAQgPAAgGAOIAABCIgQAAIAAhbIAPAAIABAKQAKgMARAAQATAAAGAOQAFgGAHgEQAIgEAKAAQAeAAABAgIAAA9g");
	this.shape_166.setTransform(453,357.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("rgba(255,255,255,0.902)").s().p("AgHBCIAAiDIAPAAIAACDg");
	this.shape_167.setTransform(443.2,355.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAnQgJgJAAgRIAAg7IARAAIAAA7QAAAVARAAQAQAAAGgNIAAhDIAQAAIAABcIgOAAIgBgJQgJAKgRAAQgPAAgHgIg");
	this.shape_168.setTransform(436.2,357.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("rgba(255,255,255,0.902)").s().p("AgmBBIAAh/IAOAAIABAKQAKgMAQAAQARAAAJANQAKAMAAAXIAAABQAAAUgKANQgJANgRAAQgPAAgKgLIAAAtgAgWgmIAAArQAHANAPAAQAKAAAHgJQAGgJABgRQgBgPgGgJQgHgKgKAAQgPAAgHANg");
	this.shape_169.setTransform(426.7,358.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("rgba(255,255,255,0.902)").s().p("AgeAjQgLgNAAgWIAAAAQAAgNAFgLQAFgLAKgGQAJgGAMAAQASAAANANQALANAAAVIAAABQAAAOgFAKQgFALgKAGQgJAGgNAAQgSAAgMgNgAgSgZQgIAKABAQQgBAPAIAKQAHAJALAAQAMAAAHgJQAHgKAAgQQAAgPgHgJQgHgKgMAAQgLAAgHAJg");
	this.shape_170.setTransform(412.2,357.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("rgba(255,255,255,0.902)").s().p("AgcA6QgJgIAAgMQAAgOALgIQALgIATAAIAPAAIAAgHQAAgIgFgEQgFgGgJAAQgIABgFAEQgHAEABAGIgRAAQAAgHAGgGQAEgHAJgEQAIgDAJAAQAQAAAKAIQAIAIABANIAAArQAAAMADAIIAAABIgQAAQgCgDgBgHQgLAMgOgBQgNAAgJgHgAgVAkQAAAHAEAFQAGAEAIAAQAGAAAGgEQAHgDADgHIAAgTIgMAAQgcAAAAARgAgbgqQAAgJAGgGQAFgGAHAAIAGABIAFADIAGAEIAGAAQADAAACgDQADgDAAgDIALABQAAAIgGAGQgFAGgIAAIgGAAIgHgEIgEgEIgFAAQgEAAgCACQgCAEgBADg");
	this.shape_171.setTransform(402.5,355.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("rgba(255,255,255,0.902)").s().p("AgRAsQgJgEgFgHQgFgHAAgIIAQAAQABAIAGAEQAFAFAJAAQAJAAAGgEQAFgDAAgGQAAgHgFgDQgFgEgLgCQgMgDgHgDQgHgDgDgFQgDgFAAgHQAAgLAJgIQAKgIAOAAQAPAAAKAIQAKAIAAANIgQAAQAAgHgFgEQgGgFgIAAQgIAAgFAEQgFAEAAAGQAAAFAFADQAEADALADQAMACAHAEQAIADADAFQAEAFAAAIQAAAMgKAIQgKAHgQAAQgKAAgIgEg");
	this.shape_172.setTransform(393.1,357.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAkQgLgNAAgUIAAgDQAAgNAFgLQAFgLAKgGQAJgGAKAAQASAAAKAMQAKAMAAAWIAAAGIg9AAQAAANAIAJQAHAIALAAQAIAAAGgDQAGgEAEgFIAKAHQgMASgXAAQgSAAgMgMgAgOgbQgGAHgCANIAtAAIAAgCQAAgMgGgGQgGgHgKAAQgIAAgHAHg");
	this.shape_173.setTransform(384.1,357.2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("rgba(255,255,255,0.902)").s().p("AgHBCIAAiDIAPAAIAACDg");
	this.shape_174.setTransform(377.3,355.3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("rgba(255,255,255,0.902)").s().p("AgdA7QgIgIAAgMQAAgOALgIQALgIASAAIAQAAIAAgIQAAgHgFgEQgFgGgJAAQgIABgGAEQgFAEgBAGIgPAAQAAgHAEgGQAGgHAIgEQAJgDAJAAQAPAAAKAIQAIAIABANIAAArQAAAMADAIIAAABIgRAAQgBgDAAgHQgLAMgPgBQgOAAgJgHgAgWAlQAAAHAGAFQAFAEAHAAQAHAAAHgEQAGgDADgHIAAgTIgNAAQgcAAAAARgAgCgoIgVgaIASAAIAQAag");
	this.shape_175.setTransform(366.1,355.4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("rgba(255,255,255,0.902)").s().p("AgdAoQgIgIAAgLQAAgPALgHQALgIATAAIAPAAIAAgHQAAgIgFgFQgFgFgJAAQgIAAgFAEQgHAEABAGIgRAAQAAgHAGgGQAEgGAJgEQAJgEAIAAQARAAAIAIQAKAIAAAOIAAAqQAAAMADAIIAAABIgQAAQgCgCgBgHQgKALgPAAQgNAAgKgIgAgVASQAAAIAEAEQAGAEAIAAQAGAAAGgEQAHgDADgHIAAgTIgNAAQgbAAAAARg");
	this.shape_176.setTransform(352.2,357.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("rgba(255,255,255,0.902)").s().p("AgFAuIghhbIAQAAIAWBGIAXhGIAQAAIghBbg");
	this.shape_177.setTransform(343.2,357.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAkQgLgNAAgUIAAgDQAAgNAFgLQAFgLAKgGQAJgGAKAAQASAAAKAMQAKAMAAAWIAAAGIg9AAQAAANAIAJQAHAIALAAQAIAAAGgDQAGgEAEgFIAKAHQgMASgXAAQgSAAgMgMgAgOgbQgGAHgCANIAtAAIAAgCQAAgMgGgGQgGgHgKAAQgIAAgHAHg");
	this.shape_178.setTransform(334.4,357.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("rgba(255,255,255,0.902)").s().p("AgHBCIAAiDIAPAAIAACDg");
	this.shape_179.setTransform(327.5,355.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAkQgLgNAAgUIAAgDQAAgNAFgLQAFgLAKgGQAJgGAKAAQASAAAKAMQAKAMAAAWIAAAGIg9AAQAAANAIAJQAHAIALAAQAIAAAGgDQAGgEAEgFIAKAHQgMASgXAAQgSAAgMgMgAgOgbQgGAHgCANIAtAAIAAgCQAAgMgGgGQgGgHgKAAQgIAAgHAHg");
	this.shape_180.setTransform(316.5,357.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAkQgLgNAAgUIAAgDQAAgNAFgLQAFgLAKgGQAJgGAKAAQASAAAKAMQAKAMAAAWIAAAGIg9AAQAAANAIAJQAHAIALAAQAIAAAGgDQAGgEAEgFIAKAHQgMASgXAAQgSAAgMgMgAgOgbQgGAHgCANIAtAAIAAgCQAAgMgGgGQgGgHgKAAQgIAAgHAHg");
	this.shape_181.setTransform(302.9,357.2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("rgba(255,255,255,0.902)").s().p("AgRAsQgJgEgFgHQgFgHAAgIIAQAAQABAIAGAEQAFAFAJAAQAJAAAGgEQAFgDAAgGQAAgHgFgDQgFgEgLgCQgMgDgHgDQgHgDgDgFQgDgFAAgHQAAgLAJgIQAKgIAOAAQAPAAAKAIQAKAIAAANIgQAAQAAgHgFgEQgGgFgIAAQgIAAgFAEQgFAEAAAGQAAAFAFADQAEADALADQAMACAHAEQAIADADAFQAEAFAAAIQAAAMgKAIQgKAHgQAAQgKAAgIgEg");
	this.shape_182.setTransform(293.6,357.2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("rgba(255,255,255,0.902)").s().p("AgeAjQgLgNAAgWIAAAAQAAgNAFgLQAGgLAJgGQAJgGAMAAQATAAALANQAMANAAAVIAAABQAAAOgFAKQgGALgJAGQgKAGgMAAQgSAAgMgNgAgSgZQgHAKAAAQQAAAPAHAKQAHAJALAAQAMAAAHgJQAHgKAAgQQAAgPgHgJQgHgKgMAAQgLAAgHAJg");
	this.shape_183.setTransform(284.2,357.2);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("rgba(255,255,255,0.902)").s().p("AgVAvIAAhbIAPAAIAAAKQAHgMAOAAIAHABIAAAOIgHAAQgPAAgFAOIAABAg");
	this.shape_184.setTransform(276.7,357.2);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAkQgLgNAAgUIAAgDQAAgNAFgLQAFgLAKgGQAJgGAKAAQASAAAKAMQAKAMAAAWIAAAGIg9AAQAAANAIAJQAHAIALAAQAIAAAGgDQAGgEAEgFIAKAHQgMASgXAAQgSAAgMgMgAgOgbQgGAHgCANIAtAAIAAgCQAAgMgGgGQgGgHgKAAQgIAAgHAHg");
	this.shape_185.setTransform(268.7,357.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("rgba(255,255,255,0.902)").s().p("AgHBCIAAiDIAPAAIAACDg");
	this.shape_186.setTransform(261.8,355.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAjQgLgMAAgWIAAgCQAAgNAFgLQAFgKAJgGQAKgGALAAQAPAAALAJQAKAKABAPIgPAAQgBgJgGgGQgGgGgJAAQgLAAgGAJQgIAIAAARIAAACQAAAQAIAIQAGAJALAAQAJAAAGgFQAGgFABgIIAPAAQAAAIgGAHQgEAHgJAFQgIAEgKAAQgSAAgLgNg");
	this.shape_187.setTransform(255.3,357.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("rgba(255,255,255,0.902)").s().p("AgRAsQgJgEgFgHQgFgHAAgIIAQAAQABAIAGAEQAFAFAJAAQAJAAAGgEQAFgDAAgGQAAgHgFgDQgFgEgLgCQgMgDgHgDQgHgDgDgFQgDgFAAgHQAAgLAJgIQAKgIAOAAQAPAAAKAIQAKAIAAANIgQAAQAAgHgFgEQgGgFgIAAQgIAAgFAEQgFAEAAAGQAAAFAFADQAEADALADQAMACAHAEQAIADADAFQAEAFAAAIQAAAMgKAIQgKAHgQAAQgKAAgIgEg");
	this.shape_188.setTransform(246,357.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("rgba(255,255,255,0.902)").s().p("AgeAjQgLgNAAgWIAAAAQAAgNAFgLQAGgLAJgGQAKgGALAAQATAAALANQAMANAAAVIAAABQAAAOgFAKQgGALgJAGQgKAGgMAAQgSAAgMgNgAgSgZQgHAKAAAQQAAAPAHAKQAHAJALAAQAMAAAHgJQAHgKAAgQQAAgPgHgJQgHgKgMAAQgLAAgHAJg");
	this.shape_189.setTransform(236.6,357.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("rgba(255,255,255,0.902)").s().p("AgVAvIAAhbIAPAAIAAAKQAHgMAOAAIAHABIAAAOIgHAAQgPAAgFAOIAABAg");
	this.shape_190.setTransform(229,357.2);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAkQgLgNAAgUIAAgDQAAgNAFgLQAFgLAKgGQAJgGAKAAQASAAAKAMQAKAMAAAWIAAAGIg9AAQAAANAIAJQAHAIALAAQAIAAAGgDQAGgEAEgFIAKAHQgMASgXAAQgSAAgMgMgAgOgbQgGAHgCANIAtAAIAAgCQAAgMgGgGQgGgHgKAAQgIAAgHAHg");
	this.shape_191.setTransform(221.1,357.2);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("rgba(255,255,255,0.902)").s().p("AgCA0QgFgGgBgMIAAg5IgQAAIAAgMIAQAAIAAgWIAQAAIAAAWIARAAIAAAMIgRAAIAAA5QAAAFABADQADADAGAAIAHgBIAAANIgMABQgKAAgFgGg");
	this.shape_192.setTransform(213.3,356.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("rgba(255,255,255,0.902)").s().p("AgdAoQgIgIAAgLQAAgPALgHQALgIASAAIAQAAIAAgHQAAgIgFgFQgFgFgJAAQgIAAgGAEQgFAEgBAGIgPAAQAAgHAEgGQAGgGAIgEQAJgEAJAAQAPAAAKAIQAIAIABAOIAAAqQAAAMADAIIAAABIgRAAQgBgCAAgHQgLALgPAAQgOAAgJgIgAgWASQAAAIAGAEQAFAEAHAAQAHAAAHgEQAGgDADgHIAAgTIgNAAQgcAAAAARg");
	this.shape_193.setTransform(205.9,357.2);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("rgba(255,255,255,0.902)").s().p("AgcAoQgJgIAAgLQAAgPALgHQALgIASAAIAQAAIAAgHQAAgIgFgFQgFgFgJAAQgIAAgGAEQgFAEAAAGIgQAAQAAgHAEgGQAGgGAIgEQAIgEAKAAQAPAAAKAIQAIAIABAOIAAAqQAAAMADAIIAAABIgRAAQgBgCgBgHQgLALgOAAQgOAAgIgIgAgWASQABAIAFAEQAFAEAHAAQAHAAAHgEQAGgDADgHIAAgTIgMAAQgdAAAAARg");
	this.shape_194.setTransform(192,357.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAkQgLgNAAgUIAAgDQAAgNAFgLQAFgLAKgGQAJgGAKAAQASAAAKAMQAKAMAAAWIAAAGIg9AAQAAANAIAJQAHAIALAAQAIAAAGgDQAGgEAEgFIAKAHQgMASgXAAQgSAAgMgMgAgOgbQgGAHgCANIAtAAIAAgCQAAgMgGgGQgGgHgKAAQgIAAgHAHg");
	this.shape_195.setTransform(178.3,357.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("rgba(255,255,255,0.902)").s().p("AgFAuIghhbIAQAAIAWBGIAXhGIAQAAIghBbg");
	this.shape_196.setTransform(169.4,357.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("rgba(255,255,255,0.902)").s().p("AgdAjQgMgNAAgWIAAAAQAAgNAFgLQAGgLAJgGQAKgGALAAQATAAALANQAMANAAAVIAAABQAAAOgFAKQgFALgKAGQgKAGgMAAQgSAAgLgNgAgSgZQgHAKAAAQQAAAPAHAKQAHAJALAAQAMAAAHgJQAHgKAAgQQAAgPgHgJQgIgKgLAAQgLAAgHAJg");
	this.shape_197.setTransform(160.2,357.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("rgba(255,255,255,0.902)").s().p("AAxAvIAAg8QAAgKgFgFQgEgFgLAAQgJAAgFAGQgGAFgBAIIAAA9IgPAAIAAg8QAAgUgUAAQgPAAgGAOIAABCIgQAAIAAhbIAPAAIABAKQAKgMARAAQATAAAGAOQAFgGAHgEQAIgEAKAAQAeAAABAgIAAA9g");
	this.shape_198.setTransform(147.5,357.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("rgba(255,255,255,0.902)").s().p("AgeAjQgLgNAAgWIAAAAQAAgNAFgLQAGgLAJgGQAKgGALAAQATAAALANQAMANAAAVIAAABQAAAOgFAKQgGALgJAGQgKAGgMAAQgSAAgMgNgAgSgZQgHAKAAAQQAAAPAHAKQAHAJALAAQAMAAAHgJQAHgKAAgQQAAgPgHgJQgHgKgMAAQgLAAgHAJg");
	this.shape_199.setTransform(134.9,357.2);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("rgba(255,255,255,0.902)").s().p("AgVAvIAAhbIAPAAIAAAKQAHgMAOAAIAHABIAAAOIgHAAQgPAAgFAOIAABAg");
	this.shape_200.setTransform(127.3,357.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("rgba(255,255,255,0.902)").s().p("AgmBBIAAh/IAOAAIABAKQAKgMAQAAQAQAAAKANQAKAMAAAXIAAABQAAAUgKANQgJANgRAAQgPAAgKgLIAAAtgAgWgmIAAArQAHANAPAAQAKAAAHgJQAGgJABgRQgBgPgGgJQgHgKgKAAQgPAAgHANg");
	this.shape_201.setTransform(119.2,358.9);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("rgba(255,255,255,0.902)").s().p("AgLAPQAIgLAAgLIAAgOIAPAAIAAAMQAAAJgEAIQgFAIgFAGg");
	this.shape_202.setTransform(107.8,362.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("rgba(255,255,255,0.902)").s().p("AAmA+IgMggIgzAAIgMAgIgRAAIAwh7IANAAIAwB7gAgUAQIApAAIgVg5g");
	this.shape_203.setTransform(100.6,355.6);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("rgba(255,255,255,0.902)").s().p("AAfA+Ig9hfIAABfIgRAAIAAh7IARAAIA+BfIAAhfIAQAAIAAB7g");
	this.shape_204.setTransform(88.7,355.6);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("rgba(255,255,255,0.902)").s().p("AgsA+IAAh7IAjAAQAQAAAMAHQAMAHAHANQAHAOAAARIAAAHQAAARgHAOQgHANgMAHQgNAHgPAAgAgbAxIARAAQASAAAKgMQAKgMAAgWIAAgGQAAgVgJgMQgKgMgRAAIgTAAg");
	this.shape_205.setTransform(76.9,355.6);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("rgba(255,255,255,0.902)").s().p("AgeAjQgLgNAAgWIAAAAQAAgNAFgLQAGgLAJgGQAKgGALAAQATAAALANQAMANAAAVIAAABQAAAOgFAKQgGALgJAGQgKAGgMAAQgSAAgMgNgAgSgZQgHAKAAAQQAAAPAHAKQAHAJALAAQAMAAAHgJQAHgKAAgQQAAgPgHgJQgHgKgMAAQgLAAgHAJg");
	this.shape_206.setTransform(503.9,337.6);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("rgba(255,255,255,0.902)").s().p("AgdAoQgIgIAAgLQAAgPALgHQALgIASAAIAQAAIAAgHQAAgIgFgFQgFgFgJAAQgIAAgFAEQgGAEgBAGIgPAAQAAgHAEgGQAFgGAJgEQAJgEAJAAQAQAAAIAIQAKAIAAAOIAAAqQAAAMADAIIAAABIgQAAQgCgCAAgHQgMALgOAAQgOAAgJgIgAgWASQAAAIAGAEQAFAEAHAAQAHAAAHgEQAGgDADgHIAAgTIgNAAQgcAAAAARg");
	this.shape_207.setTransform(489.7,337.6);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("rgba(255,255,255,0.902)").s().p("AAxAvIAAg8QAAgKgFgFQgEgFgLAAQgJAAgFAGQgGAFgBAIIAAA9IgPAAIAAg7QAAgVgUAAQgPAAgGAOIAABCIgQAAIAAhcIAPAAIABALQAKgMARAAQATAAAGAOQAFgGAHgEQAIgEAKAAQAeAAABAgIAAA9g");
	this.shape_208.setTransform(477.3,337.6);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("rgba(255,255,255,0.902)").s().p("AgVAvIAAhcIAPAAIAAALQAHgMAOAAIAHABIAAAPIgHgBQgPAAgFANIAABBg");
	this.shape_209.setTransform(467.1,337.6);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("rgba(255,255,255,0.902)").s().p("AgdAjQgMgNAAgWIAAAAQAAgNAFgLQAGgLAJgGQAKgGALAAQATAAAMANQALANAAAVIAAABQAAAOgFAKQgGALgJAGQgKAGgMAAQgSAAgLgNgAgSgZQgIAKAAAQQAAAPAIAKQAHAJALAAQAMAAAHgJQAHgKAAgQQAAgPgHgJQgHgKgMAAQgLAAgHAJg");
	this.shape_210.setTransform(458.7,337.6);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("rgba(255,255,255,0.902)").s().p("AgMBDIAAhQIgPAAIAAgMIAPAAIAAgKQAAgPAHgHQAHgJAPAAIALACIgBANIgJgBQgHAAgEAEQgFAFAAAIIAAAKIAVAAIAAAMIgVAAIAABQg");
	this.shape_211.setTransform(451,335.6);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("rgba(255,255,255,0.902)").s().p("AgRAsQgJgEgFgHQgFgHAAgIIAQAAQABAIAGAEQAFAFAJAAQAJAAAGgEQAFgDAAgGQAAgHgFgDQgFgEgLgCQgMgDgHgDQgHgDgDgFQgDgFAAgHQAAgLAJgIQAKgIAOAAQAPAAAKAIQAKAIAAANIgQAAQAAgHgFgEQgGgFgIAAQgIAAgFAEQgFAEAAAGQAAAFAFADQAEADALADQAMACAHAEQAIADADAFQAEAFAAAIQAAAMgKAIQgKAHgQAAQgKAAgIgEg");
	this.shape_212.setTransform(443.1,337.6);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("rgba(255,255,255,0.902)").s().p("AAVAvIAAg8QAAgKgFgFQgEgFgKAAQgHAAgFAFQgGAEgDAGIAABBIgQAAIAAhcIAPAAIAAAMQALgNAQAAQAdAAAAAhIAAA8g");
	this.shape_213.setTransform(433.8,337.6);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("rgba(255,255,255,0.902)").s().p("AgdAoQgIgIAAgLQAAgPALgHQALgIATAAIAPAAIAAgHQAAgIgFgFQgFgFgJAAQgIAAgFAEQgHAEABAGIgRAAQAAgHAGgGQAEgGAJgEQAJgEAIAAQARAAAIAIQAKAIAAAOIAAAqQAAAMADAIIAAABIgQAAQgCgCgBgHQgKALgPAAQgNAAgKgIgAgVASQAAAIAEAEQAGAEAIAAQAGAAAGgEQAHgDADgHIAAgTIgNAAQgbAAAAARg");
	this.shape_214.setTransform(424.2,337.6);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("rgba(255,255,255,0.902)").s().p("AgVAvIAAhcIAPAAIAAALQAHgMAOAAIAHABIAAAPIgHgBQgPAAgFANIAABBg");
	this.shape_215.setTransform(416.9,337.6);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("rgba(255,255,255,0.902)").s().p("AgCA0QgGgGABgMIAAg5IgRAAIAAgMIARAAIAAgWIAOAAIAAAWIARAAIAAAMIgRAAIAAA5QAAAFADADQACADAFAAIAIgBIAAANIgMABQgKAAgFgGg");
	this.shape_216.setTransform(410.4,336.6);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAkQgLgNAAgUIAAgDQAAgNAFgLQAFgLAKgGQAJgGAKAAQASAAAKAMQAKAMAAAWIAAAGIg9AAQAAANAIAJQAHAIALAAQAIAAAGgDQAGgEAEgFIAKAHQgMASgXAAQgSAAgMgMgAgOgbQgGAHgCANIAtAAIAAgCQAAgMgGgGQgGgHgKAAQgIAAgHAHg");
	this.shape_217.setTransform(398.9,337.6);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAmQgJgIAAgRIAAg7IARAAIAAA7QgBAVASAAQARAAAFgNIAAhDIAQAAIAABcIgPAAIAAgJQgJAKgRAAQgPAAgHgJg");
	this.shape_218.setTransform(389.3,337.7);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("rgba(255,255,255,0.902)").s().p("AAYBBIAAgsQgLAKgOAAQgRAAgKgNQgKgNAAgVIAAgBQAAgWAKgMQAKgNARAAQAPAAAKALIAAgJIAPAAIAAB/gAgPgqQgHAJAAASQAAAPAHAJQAGAJALAAQAOAAAIgMIAAgtQgJgMgNAAQgLAAgGAJg");
	this.shape_219.setTransform(379.3,339.3);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("rgba(255,255,255,0.902)").s().p("AgLAPQAIgLAAgLIAAgOIAPAAIAAAMQAAAJgFAIQgEAIgFAGg");
	this.shape_220.setTransform(368.2,342.6);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("rgba(255,255,255,0.902)").s().p("AgeAjQgLgNAAgWIAAAAQAAgNAFgLQAFgLAKgGQAJgGAMAAQASAAANANQALANAAAVIAAABQAAAOgFAKQgFALgKAGQgJAGgNAAQgSAAgMgNgAgSgZQgIAKABAQQgBAPAIAKQAHAJALAAQAMAAAHgJQAHgKAAgQQAAgPgHgJQgHgKgMAAQgLAAgHAJg");
	this.shape_221.setTransform(361.8,337.6);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("rgba(255,255,255,0.902)").s().p("AgFAuIghhbIAQAAIAWBGIAXhGIAQAAIghBbg");
	this.shape_222.setTransform(352.5,337.6);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("rgba(255,255,255,0.902)").s().p("AgHA/IAAhbIAPAAIAABbgAgGgvQgCgCAAgEQAAgEACgCQADgDADAAQAFAAACADQACACABAEQgBAEgCACQgCADgFAAQgDAAgDgDg");
	this.shape_223.setTransform(346.3,336);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("rgba(255,255,255,0.902)").s().p("AgCA0QgFgGAAgMIAAg5IgRAAIAAgMIARAAIAAgWIAPAAIAAAWIARAAIAAAMIgRAAIAAA5QAAAFACADQACADAGAAIAHgBIAAANIgMABQgLAAgEgGg");
	this.shape_224.setTransform(341,336.6);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("rgba(255,255,255,0.902)").s().p("AgcAoQgJgIAAgLQAAgPALgHQALgIATAAIAPAAIAAgHQAAgIgFgFQgFgFgJAAQgIAAgFAEQgHAEABAGIgRAAQAAgHAGgGQAEgGAJgEQAIgEAJAAQAQAAAJAIQAKAIAAAOIAAAqQAAAMADAIIAAABIgQAAQgCgCgBgHQgLALgOAAQgNAAgJgIgAgVASQAAAIAEAEQAGAEAIAAQAGAAAGgEQAHgDADgHIAAgTIgMAAQgcAAAAARg");
	this.shape_225.setTransform(333.6,337.6);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("rgba(255,255,255,0.902)").s().p("AgcA2QgKgOAAgVIAAgBQAAgUAKgNQALgNAPAAQAQAAAJALIAAgwIAQAAIAACCIgPAAIAAgKQgJAMgRgBQgQAAgKgMgAgPgGQgHAIAAASQAAAPAHAJQAGAKALAAQAPgBAGgNIAAgpQgGgOgPAAQgLAAgGAJg");
	this.shape_226.setTransform(323.7,335.8);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("rgba(255,255,255,0.902)").s().p("AgHA/IAAhbIAOAAIAABbgAgGgvQgCgCAAgEQAAgEACgCQADgDADAAQAEAAADADQADACAAAEQAAAEgDACQgDADgEAAQgDAAgDgDg");
	this.shape_227.setTransform(316.9,336);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("rgba(255,255,255,0.902)").s().p("AAVAuIgVgiIgUAiIgTAAIAfguIgegtIASAAIAUAiIAUgiIATAAIgfAtIAgAug");
	this.shape_228.setTransform(310.4,337.6);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("rgba(255,255,255,0.902)").s().p("AgeAjQgLgNAAgWIAAAAQAAgNAFgLQAFgLAKgGQAJgGAMAAQASAAANANQALANAAAVIAAABQAAAOgFAKQgFALgKAGQgJAGgNAAQgSAAgMgNgAgSgZQgIAKABAQQgBAPAIAKQAHAJALAAQAMAAAHgJQAHgKAAgQQAAgPgHgJQgHgKgMAAQgLAAgHAJg");
	this.shape_229.setTransform(301.1,337.6);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAkQgLgNAAgUIAAgDQAAgNAFgLQAFgLAKgGQAJgGAKAAQASAAAKAMQAKAMAAAWIAAAGIg9AAQAAANAIAJQAHAIALAAQAIAAAGgDQAGgEAEgFIAKAHQgMASgXAAQgSAAgMgMgAgOgbQgGAHgCANIAtAAIAAgCQAAgMgGgGQgGgHgKAAQgIAAgHAHg");
	this.shape_230.setTransform(287.2,337.6);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("rgba(255,255,255,0.902)").s().p("AgRAsQgJgEgFgHQgFgHAAgIIAQAAQABAIAGAEQAFAFAJAAQAJAAAGgEQAFgDAAgGQAAgHgFgDQgFgEgLgCQgMgDgHgDQgHgDgDgFQgDgFAAgHQAAgLAJgIQAKgIAOAAQAPAAAKAIQAKAIAAANIgQAAQAAgHgFgEQgGgFgIAAQgIAAgFAEQgFAEAAAGQAAAFAFADQAEADALADQAMACAHAEQAIADADAFQAEAFAAAIQAAAMgKAIQgKAHgQAAQgKAAgIgEg");
	this.shape_231.setTransform(277.9,337.6);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("rgba(255,255,255,0.902)").s().p("AgRAsQgJgEgFgHQgFgHAAgIIAQAAQABAIAGAEQAFAFAJAAQAJAAAGgEQAFgDAAgGQAAgHgFgDQgFgEgLgCQgMgDgHgDQgHgDgDgFQgDgFAAgHQAAgLAJgIQAKgIAOAAQAPAAAKAIQAKAIAAANIgQAAQAAgHgFgEQgGgFgIAAQgIAAgFAEQgFAEAAAGQAAAFAFADQAEADALADQAMACAHAEQAIADADAFQAEAFAAAIQAAAMgKAIQgKAHgQAAQgKAAgIgEg");
	this.shape_232.setTransform(268.9,337.6);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAkQgLgNAAgUIAAgDQAAgNAFgLQAFgLAKgGQAJgGAKAAQASAAAKAMQAKAMAAAWIAAAGIg9AAQAAANAIAJQAHAIALAAQAIAAAGgDQAGgEAEgFIAKAHQgMASgXAAQgSAAgMgMgAgOgbQgGAHgCANIAtAAIAAgCQAAgMgGgGQgGgHgKAAQgIAAgHAHg");
	this.shape_233.setTransform(259.8,337.6);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("rgba(255,255,255,0.902)").s().p("AgVAvIAAhcIAPAAIAAALQAHgMAOAAIAHABIAAAPIgHgBQgPAAgFANIAABBg");
	this.shape_234.setTransform(252.6,337.6);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("rgba(255,255,255,0.902)").s().p("AgCA0QgGgGAAgMIAAg5IgQAAIAAgMIAQAAIAAgWIAPAAIAAAWIARAAIAAAMIgRAAIAAA5QAAAFACADQADADAFAAIAIgBIAAANIgMABQgKAAgFgGg");
	this.shape_235.setTransform(246.1,336.6);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("rgba(255,255,255,0.902)").s().p("AgRAsQgJgEgFgHQgFgHAAgIIAQAAQABAIAGAEQAFAFAJAAQAJAAAGgEQAFgDAAgGQAAgHgFgDQgFgEgLgCQgMgDgHgDQgHgDgDgFQgDgFAAgHQAAgLAJgIQAKgIAOAAQAPAAAKAIQAKAIAAANIgQAAQAAgHgFgEQgGgFgIAAQgIAAgFAEQgFAEAAAGQAAAFAFADQAEADALADQAMACAHAEQAIADADAFQAEAFAAAIQAAAMgKAIQgKAHgQAAQgKAAgIgEg");
	this.shape_236.setTransform(238.9,337.6);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAkQgLgNAAgUIAAgDQAAgNAFgLQAFgLAKgGQAJgGAKAAQASAAAKAMQAKAMAAAWIAAAGIg9AAQAAANAIAJQAHAIALAAQAIAAAGgDQAGgEAEgFIAKAHQgMASgXAAQgSAAgMgMgAgOgbQgGAHgCANIAtAAIAAgCQAAgMgGgGQgGgHgKAAQgIAAgHAHg");
	this.shape_237.setTransform(229.9,337.6);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("rgba(255,255,255,0.902)").s().p("AgeAjQgLgNAAgWIAAAAQAAgNAFgLQAGgLAJgGQAKgGALAAQATAAALANQAMANAAAVIAAABQAAAOgFAKQgGALgJAGQgKAGgMAAQgSAAgMgNgAgSgZQgHAKAAAQQAAAPAHAKQAHAJALAAQAMAAAHgJQAHgKAAgQQAAgPgHgJQgHgKgMAAQgLAAgHAJg");
	this.shape_238.setTransform(215.9,337.6);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("rgba(255,255,255,0.902)").s().p("AgbA2QgLgMAAgVIAAgDQAAgNAFgKQAFgLAKgGQAJgGAKAAQASAAAKALQAKAMAAAWIAAAHIg9AAQAAANAIAIQAHAJALAAQAIAAAGgDQAGgEAEgFIAKAHQgMARgXAAQgSAAgMgMgAgOgIQgGAGgCAMIAtAAIAAgBQAAgLgGgHQgGgGgKAAQgIAAgHAHgAgHgoIAQgZIATAAIgXAZg");
	this.shape_239.setTransform(201.9,335.8);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("rgba(255,255,255,0.902)").s().p("AAxAvIAAg8QAAgKgFgFQgEgFgLAAQgJAAgFAGQgGAFgBAIIAAA9IgPAAIAAg7QAAgVgUAAQgPAAgGAOIAABCIgQAAIAAhcIAPAAIABALQAKgMARAAQATAAAGAOQAFgGAHgEQAIgEAKAAQAeAAABAgIAAA9g");
	this.shape_240.setTransform(185.2,337.6);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("rgba(255,255,255,0.902)").s().p("AAAA/QgUAAgLgLQgNgLAAgTIAAhUIAQAAIAABTQAAAOAHAIQAIAHANAAQAOAAAHgHQAIgIAAgOIAAhTIAQAAIAABTQAAATgLALQgLAKgTACg");
	this.shape_241.setTransform(171.9,336.1);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("rgba(255,255,255,0.902)").s().p("AgGAHQgDgDAAgEQAAgDADgDQACgCAEAAQAFAAACACQADADAAADQAAAEgDADQgCACgFABQgEgBgCgCg");
	this.shape_242.setTransform(159.5,341.4);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("rgba(255,255,255,0.902)").s().p("AgRAsQgJgEgFgHQgFgHAAgIIAQAAQABAIAGAEQAFAFAJAAQAJAAAGgEQAFgDAAgGQAAgHgFgDQgFgEgLgCQgMgDgHgDQgHgDgDgFQgDgFAAgHQAAgLAJgIQAKgIAOAAQAPAAAKAIQAKAIAAANIgQAAQAAgHgFgEQgGgFgIAAQgIAAgFAEQgFAEAAAGQAAAFAFADQAEADALADQAMACAHAEQAIADADAFQAEAFAAAIQAAAMgKAIQgKAHgQAAQgKAAgIgEg");
	this.shape_243.setTransform(152.7,337.6);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("rgba(255,255,255,0.902)").s().p("AgeAjQgLgNAAgWIAAAAQAAgNAFgLQAFgLAKgGQAJgGAMAAQASAAANANQALANAAAVIAAABQAAAOgFAKQgGALgJAGQgJAGgNAAQgSAAgMgNgAgSgZQgIAKABAQQgBAPAIAKQAHAJALAAQAMAAAHgJQAHgKAAgQQAAgPgHgJQgHgKgMAAQgLAAgHAJg");
	this.shape_244.setTransform(143.2,337.6);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("rgba(255,255,255,0.902)").s().p("AAVAvIAAg8QAAgKgFgFQgEgFgKAAQgHAAgFAFQgGAEgDAGIAABBIgQAAIAAhcIAPAAIAAAMQALgNAQAAQAdAAAAAhIAAA8g");
	this.shape_245.setTransform(133.4,337.6);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("rgba(255,255,255,0.902)").s().p("AgdAoQgIgIAAgLQAAgPALgHQALgIATAAIAPAAIAAgHQAAgIgFgFQgFgFgJAAQgIAAgFAEQgHAEAAAGIgQAAQABgHAEgGQAFgGAJgEQAJgEAJAAQAQAAAIAIQAKAIAAAOIAAAqQAAAMADAIIAAABIgQAAQgCgCAAgHQgMALgOAAQgNAAgKgIgAgWASQAAAIAGAEQAEAEAIAAQAHAAAHgEQAGgDADgHIAAgTIgNAAQgcAAAAARg");
	this.shape_246.setTransform(123.8,337.6);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("rgba(255,255,255,0.902)").s().p("AgcA2QgKgOAAgVIAAgBQAAgUAKgNQALgNAPAAQAQAAAJALIAAgwIAQAAIAACCIgPAAIAAgKQgKAMgQgBQgPAAgLgMgAgPgGQgHAIAAASQAAAPAHAJQAGAKALAAQAPgBAGgNIAAgpQgGgOgPAAQgLAAgGAJg");
	this.shape_247.setTransform(113.9,335.8);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("rgba(255,255,255,0.902)").s().p("AgcAoQgJgIAAgLQAAgPALgHQALgIATAAIAPAAIAAgHQAAgIgFgFQgFgFgJAAQgIAAgFAEQgHAEABAGIgRAAQAAgHAGgGQAEgGAJgEQAIgEAJAAQAQAAAJAIQAKAIAAAOIAAAqQAAAMADAIIAAABIgQAAQgCgCgBgHQgKALgPAAQgNAAgJgIgAgVASQAAAIAEAEQAGAEAIAAQAGAAAGgEQAHgDADgHIAAgTIgMAAQgcAAAAARg");
	this.shape_248.setTransform(100.1,337.6);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("rgba(255,255,255,0.902)").s().p("AgRAsQgJgEgFgHQgFgHAAgIIAQAAQABAIAGAEQAFAFAJAAQAJAAAGgEQAFgDAAgGQAAgHgFgDQgFgEgLgCQgMgDgHgDQgHgDgDgFQgDgFAAgHQAAgLAJgIQAKgIAOAAQAPAAAKAIQAKAIAAANIgQAAQAAgHgFgEQgGgFgIAAQgIAAgFAEQgFAEAAAGQAAAFAFADQAEADALADQAMACAHAEQAIADADAFQAEAFAAAIQAAAMgKAIQgKAHgQAAQgKAAgIgEg");
	this.shape_249.setTransform(90.7,337.6);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAmQgJgIABgRIAAg7IAQAAIAAA7QgBAVASAAQARAAAFgNIAAhDIAQAAIAABcIgPAAIAAgJQgJAKgRAAQgPAAgHgJg");
	this.shape_250.setTransform(81.4,337.7);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("rgba(255,255,255,0.902)").s().p("AgdAoQgIgIAAgLQAAgPALgHQALgIATAAIAPAAIAAgHQAAgIgFgFQgFgFgJAAQgIAAgFAEQgHAEABAGIgRAAQAAgHAGgGQAEgGAJgEQAJgEAIAAQARAAAIAIQAKAIAAAOIAAAqQAAAMADAIIAAABIgQAAQgCgCgBgHQgKALgPAAQgNAAgKgIgAgVASQAAAIAEAEQAGAEAIAAQAGAAAGgEQAHgDADgHIAAgTIgNAAQgbAAAAARg");
	this.shape_251.setTransform(71.8,337.6);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAjQgLgMAAgWIAAgCQAAgNAFgLQAFgKAJgGQAKgGALAAQAPAAALAJQAKAKABAPIgPAAQgBgJgGgGQgGgGgJAAQgLAAgHAJQgGAIgBARIAAACQABAQAGAIQAHAJALAAQAIAAAHgFQAGgFABgIIAPAAQgBAIgEAHQgGAHgIAFQgJAEgJAAQgSAAgLgNg");
	this.shape_252.setTransform(62.6,337.6);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("rgba(255,255,255,0.902)").s().p("AgeAjQgLgNAAgWIAAAAQAAgNAFgLQAGgLAJgGQAJgGAMAAQATAAALANQAMANAAAVIAAABQAAAOgFAKQgGALgJAGQgKAGgMAAQgSAAgMgNgAgSgZQgHAKAAAQQAAAPAHAKQAHAJALAAQAMAAAHgJQAHgKAAgQQAAgPgHgJQgHgKgMAAQgLAAgHAJg");
	this.shape_253.setTransform(491.2,318.1);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("rgba(255,255,255,0.902)").s().p("AgVAvIAAhbIAPAAIAAAKQAHgMAOAAIAHABIAAAOIgHAAQgPAAgFAOIAABAg");
	this.shape_254.setTransform(483.7,318);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("rgba(255,255,255,0.902)").s().p("AgVAvIAAhbIAPAAIAAAKQAHgMAOAAIAHABIAAAOIgHAAQgPAAgFAOIAABAg");
	this.shape_255.setTransform(477.7,318);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("rgba(255,255,255,0.902)").s().p("AgdAoQgIgIAAgLQAAgPALgHQALgIASAAIAQAAIAAgHQAAgIgFgFQgFgFgJAAQgIAAgGAEQgFAEgBAGIgPAAQAAgHAEgGQAGgGAIgEQAJgEAJAAQAPAAAKAIQAIAIABAOIAAAqQAAAMADAIIAAABIgRAAQgBgCAAgHQgLALgPAAQgOAAgJgIgAgWASQAAAIAGAEQAFAEAHAAQAHAAAHgEQAGgDADgHIAAgTIgNAAQgcAAAAARg");
	this.shape_256.setTransform(469.6,318.1);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("rgba(255,255,255,0.902)").s().p("AgTA9QgJgEgFgIIAIgJQAKAMAPAAQAKAAAHgGQAGgHAAgMIAAgHQgJAKgQAAQgQAAgKgNQgKgNAAgVQAAgWAKgNQAKgMAQAAQAQAAAKAMIABgLIAOAAIAABaQAAARgLALQgKAKgSAAQgJAAgKgEgAgQgqQgGAJAAASQAAAPAGAIQAHAJAKAAQAPAAAHgOIAAgpQgHgNgPAAQgKAAgHAJg");
	this.shape_257.setTransform(459.7,319.8);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("rgba(255,255,255,0.902)").s().p("AgHA/IAAhbIAPAAIAABbgAgGguQgCgDgBgEQABgEACgDQACgCAEAAQAEAAADACQADADgBAEQABAEgDADQgDACgEAAQgEAAgCgCg");
	this.shape_258.setTransform(452.9,316.4);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAjQgLgMAAgWIAAgCQAAgNAFgLQAFgKAJgGQAKgGALAAQAQAAAKAJQAKAKABAPIgPAAQgBgJgGgGQgGgGgJAAQgLAAgGAJQgIAIAAARIAAACQAAAQAIAIQAGAJALAAQAJAAAGgFQAGgFABgIIAPAAQAAAIgFAHQgGAHgIAFQgJAEgJAAQgSAAgLgNg");
	this.shape_259.setTransform(446.3,318.1);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("rgba(255,255,255,0.902)").s().p("AgeAjQgLgNAAgWIAAAAQAAgNAFgLQAGgLAJgGQAJgGAMAAQATAAALANQAMANAAAVIAAABQAAAOgFAKQgGALgJAGQgKAGgMAAQgSAAgMgNgAgSgZQgHAKAAAQQAAAPAHAKQAHAJALAAQAMAAAHgJQAHgKAAgQQAAgPgHgJQgHgKgMAAQgLAAgHAJg");
	this.shape_260.setTransform(432.2,318.1);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("rgba(255,255,255,0.902)").s().p("AgbA2QgLgNAAgWIAAgBQAAgVAKgMQAKgNARAAQAPAAAKALIAAgxIAPAAIAACDIgOAAIgBgKQgKALgPAAQgRABgJgNgAgQgGQgGAIAAASQAAAPAGAKQAHAIAKABQAPAAAIgOIAAgpQgIgOgPAAQgKAAgHAJg");
	this.shape_261.setTransform(422.1,316.2);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("rgba(255,255,255,0.902)").s().p("AgeAjQgLgNAAgWIAAAAQAAgNAFgLQAGgLAJgGQAKgGALAAQATAAALANQAMANAAAVIAAABQAAAOgFAKQgGALgJAGQgKAGgMAAQgSAAgMgNgAgSgZQgHAKAAAQQAAAPAHAKQAHAJALAAQAMAAAHgJQAHgKAAgQQAAgPgHgJQgHgKgMAAQgLAAgHAJg");
	this.shape_262.setTransform(408,318.1);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("rgba(255,255,255,0.902)").s().p("AAxAvIAAg8QAAgKgFgFQgEgFgLAAQgJAAgFAGQgGAFgBAIIAAA9IgPAAIAAg8QAAgUgUAAQgPAAgGAOIAABCIgQAAIAAhbIAPAAIABAKQAKgMARAAQATAAAGAOQAFgGAHgEQAIgEAKAAQAeAAABAgIAAA9g");
	this.shape_263.setTransform(395.4,318);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAnQgJgJABgRIAAg7IAQAAIAAA7QAAAVAQAAQASAAAFgNIAAhDIARAAIAABcIgQAAIAAgJQgJAKgRAAQgPAAgHgIg");
	this.shape_264.setTransform(382.8,318.2);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("rgba(255,255,255,0.902)").s().p("AgMBDIAAhQIgPAAIAAgMIAPAAIAAgKQgBgPAJgHQAGgJAPABIALABIgBAMIgJAAQgHAAgEAFQgFAEABAIIAAAKIAUAAIAAAMIgUAAIAABQg");
	this.shape_265.setTransform(375.2,316.1);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("rgba(255,255,255,0.902)").s().p("AgeAjQgLgNAAgWIAAAAQAAgNAFgLQAGgLAJgGQAJgGAMAAQASAAANANQALANAAAVIAAABQAAAOgFAKQgFALgKAGQgJAGgNAAQgSAAgMgNgAgSgZQgIAKAAAQQAAAPAIAKQAHAJALAAQAMAAAHgJQAHgKAAgQQAAgPgHgJQgIgKgLAAQgLAAgHAJg");
	this.shape_266.setTransform(362.6,318.1);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAkQgLgNAAgUIAAgDQAAgNAFgLQAFgLAKgGQAJgGAKAAQASAAAKAMQAKAMAAAWIAAAGIg9AAQAAANAIAJQAHAIALAAQAIAAAGgDQAGgEAEgFIAKAHQgMASgXAAQgSAAgMgMgAgOgbQgGAHgCANIAtAAIAAgCQAAgMgGgGQgGgHgKAAQgIAAgHAHg");
	this.shape_267.setTransform(348.7,318.1);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("rgba(255,255,255,0.902)").s().p("AgcAnQgHgJgBgRIAAg7IAQAAIAAA7QABAVARAAQAQAAAHgNIAAhDIAPAAIAABcIgOAAIgBgJQgJAKgRAAQgPAAgIgIg");
	this.shape_268.setTransform(339.1,318.2);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("rgba(255,255,255,0.902)").s().p("AAXBBIAAgsQgKAKgOAAQgRAAgKgNQgKgNAAgVIAAgBQAAgWAKgMQAKgNARAAQAPAAAKALIAAgJIAPAAIAAB/gAgPgqQgHAJAAASQAAAPAHAJQAGAJALAAQAOAAAHgMIAAgtQgHgMgOAAQgLAAgGAJg");
	this.shape_269.setTransform(329.1,319.8);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAkQgLgNAAgUIAAgDQAAgNAFgLQAFgLAKgGQAJgGAKAAQASAAAKAMQAKAMAAAWIAAAGIg9AAQAAANAIAJQAHAIALAAQAIAAAGgDQAGgEAEgFIAKAHQgMASgXAAQgSAAgMgMgAgOgbQgGAHgCANIAtAAIAAgCQAAgMgGgGQgGgHgKAAQgIAAgHAHg");
	this.shape_270.setTransform(315.5,318.1);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("rgba(255,255,255,0.902)").s().p("AgcA2QgKgNAAgWIAAgBQAAgVAKgMQALgNAPAAQAQAAAJALIAAgxIAQAAIAACDIgPAAIAAgKQgKALgQAAQgPABgLgNgAgPgGQgHAIAAASQAAAPAHAKQAGAIALABQAPAAAGgOIAAgpQgGgOgPAAQgLAAgGAJg");
	this.shape_271.setTransform(305.6,316.2);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("rgba(255,255,255,0.902)").s().p("AgRAsQgJgEgFgHQgFgHAAgIIAQAAQABAIAGAEQAFAFAJAAQAJAAAGgEQAFgDAAgGQAAgHgFgDQgFgEgLgCQgMgDgHgDQgHgDgDgFQgDgFAAgHQAAgLAJgIQAKgIAOAAQAPAAAKAIQAKAIAAANIgQAAQAAgHgFgEQgGgFgIAAQgIAAgFAEQgFAEAAAGQAAAFAFADQAEADALADQAMACAHAEQAIADADAFQAEAFAAAIQAAAMgKAIQgKAHgQAAQgKAAgIgEg");
	this.shape_272.setTransform(292,318.1);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("rgba(255,255,255,0.902)").s().p("AgdAoQgIgIAAgLQAAgPALgHQALgIASAAIAQAAIAAgHQAAgIgFgFQgFgFgJAAQgIAAgFAEQgGAEgBAGIgPAAQAAgHAEgGQAFgGAJgEQAJgEAJAAQAQAAAIAIQAKAIAAAOIAAAqQAAAMADAIIAAABIgQAAQgCgCAAgHQgMALgOAAQgOAAgJgIgAgWASQAAAIAGAEQAFAEAHAAQAHAAAHgEQAGgDADgHIAAgTIgNAAQgcAAAAARg");
	this.shape_273.setTransform(282.7,318.1);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("rgba(255,255,255,0.902)").s().p("AgHA/IAAhbIAPAAIAABbgAgGguQgCgDgBgEQABgEACgDQACgCAEAAQAEAAADACQADADgBAEQABAEgDADQgDACgEAAQgEAAgCgCg");
	this.shape_274.setTransform(275.9,316.4);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAjQgLgMAAgWIAAgCQAAgNAFgLQAFgKAJgGQAJgGAMAAQAPAAALAJQAKAKABAPIgPAAQgBgJgGgGQgGgGgJAAQgLAAgHAJQgGAIAAARIAAACQAAAQAGAIQAHAJALAAQAJAAAGgFQAGgFABgIIAPAAQgBAIgEAHQgFAHgJAFQgIAEgKAAQgSAAgLgNg");
	this.shape_275.setTransform(269.3,318.1);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("rgba(255,255,255,0.902)").s().p("AAVAvIAAg8QAAgKgFgFQgEgFgKAAQgHAAgFAFQgGAEgDAGIAABBIgQAAIAAhbIAPAAIAAALQALgNAQAAQAdAAAAAhIAAA8g");
	this.shape_276.setTransform(259.7,318);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("rgba(255,255,255,0.902)").s().p("AgbA3QgLgNAAgVIAAgCQAAgPAFgJQAFgLAKgGQAJgGAKAAQASAAAKAMQAKAMAAAVIAAAGIg9AAQAAAOAIAJQAHAIALAAQAIAAAGgEQAGgDAEgGIAKAIQgMARgXAAQgSABgMgMgAgOgIQgGAHgCALIAtAAIAAgBQAAgLgGgGQgGgHgKAAQgIAAgHAHgAAOgpIgNgOIgMAOIgNAAIAAgBIAVgYIAJAAIAVAYIAAABg");
	this.shape_277.setTransform(250.3,316.2);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("rgba(255,255,255,0.902)").s().p("AgcA2QgKgNAAgWIAAgBQAAgVAKgMQALgNAQAAQAPAAAKALIAAgxIAPAAIAACDIgOAAIgBgKQgJALgQAAQgQABgLgNgAgQgGQgGAIAAASQAAAPAGAKQAHAIAKABQAPAAAIgOIAAgpQgIgOgPAAQgKAAgHAJg");
	this.shape_278.setTransform(240.5,316.2);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("rgba(255,255,255,0.902)").s().p("AgHA/IAAhbIAOAAIAABbgAgGguQgCgDAAgEQAAgEACgDQADgCADAAQAEAAADACQADADAAAEQAAAEgDADQgDACgEAAQgDAAgDgCg");
	this.shape_279.setTransform(233.7,316.4);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("rgba(255,255,255,0.902)").s().p("AgFAuIghhbIAQAAIAWBGIAXhGIAQAAIghBbg");
	this.shape_280.setTransform(227.2,318.1);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAkQgLgNAAgUIAAgDQAAgNAFgLQAFgLAKgGQAJgGAKAAQASAAAKAMQAKAMAAAWIAAAGIg9AAQAAANAIAJQAHAIALAAQAIAAAGgDQAGgEAEgFIAKAHQgMASgXAAQgSAAgMgMgAgOgbQgGAHgCANIAtAAIAAgCQAAgMgGgGQgGgHgKAAQgIAAgHAHg");
	this.shape_281.setTransform(218.5,318.1);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("rgba(255,255,255,0.902)").s().p("AgRAsQgJgEgFgHQgFgHAAgIIAQAAQABAIAGAEQAFAFAJAAQAJAAAGgEQAFgDAAgGQAAgHgFgDQgFgEgLgCQgMgDgHgDQgHgDgDgFQgDgFAAgHQAAgLAJgIQAKgIAOAAQAPAAAKAIQAKAIAAANIgQAAQAAgHgFgEQgGgFgIAAQgIAAgFAEQgFAEAAAGQAAAFAFADQAEADALADQAMACAHAEQAIADADAFQAEAFAAAIQAAAMgKAIQgKAHgQAAQgKAAgIgEg");
	this.shape_282.setTransform(204.8,318.1);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("rgba(255,255,255,0.902)").s().p("AgcAoQgJgIAAgLQAAgPALgHQALgIASAAIAQAAIAAgHQAAgIgFgFQgFgFgJAAQgIAAgGAEQgFAEAAAGIgQAAQAAgHAEgGQAGgGAIgEQAIgEAKAAQAPAAAKAIQAIAIABAOIAAAqQAAAMADAIIAAABIgRAAQgBgCAAgHQgMALgOAAQgOAAgIgIgAgWASQABAIAFAEQAFAEAHAAQAHAAAHgEQAGgDADgHIAAgTIgMAAQgdAAAAARg");
	this.shape_283.setTransform(195.6,318.1);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("rgba(255,255,255,0.902)").s().p("AgHA/IAAhbIAPAAIAABbgAgGguQgCgDAAgEQAAgEACgDQADgCADAAQAFAAACACQACADABAEQgBAEgCADQgCACgFAAQgDAAgDgCg");
	this.shape_284.setTransform(188.8,316.4);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("rgba(255,255,255,0.902)").s().p("AgVAvIAAhbIAPAAIAAAKQAHgMAOAAIAHABIAAAOIgHAAQgPAAgFAOIAABAg");
	this.shape_285.setTransform(184.1,318);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("rgba(255,255,255,0.902)").s().p("AgcA7QgJgIAAgMQAAgOALgIQALgIASAAIAQAAIAAgHQAAgIgFgEQgFgGgJAAQgIABgGAEQgFAEAAAGIgQAAQAAgHAEgGQAGgHAIgEQAIgDAJAAQAQAAAKAIQAIAIABANIAAArQAAAMADAIIAAABIgRAAQgBgDgBgHQgLAMgOgBQgOAAgIgHgAgWAlQABAHAEAFQAFAEAIAAQAHAAAGgEQAHgDADgHIAAgTIgMAAQgcAAgBARgAgGgoIAQgaIATAAIgXAag");
	this.shape_286.setTransform(175.9,316.2);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("rgba(255,255,255,0.902)").s().p("AgFAuIghhbIAQAAIAWBGIAXhGIAQAAIghBbg");
	this.shape_287.setTransform(166.9,318.1);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("rgba(255,255,255,0.902)").s().p("AAxAvIAAg8QAAgKgFgFQgEgFgLAAQgJAAgFAGQgGAFgBAIIAAA9IgPAAIAAg8QAAgUgUAAQgPAAgGAOIAABCIgQAAIAAhbIAPAAIABAKQAKgMARAAQATAAAGAOQAFgGAHgEQAIgEAKAAQAeAAABAgIAAA9g");
	this.shape_288.setTransform(150.7,318);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("rgba(255,255,255,0.902)").s().p("AgbAkQgLgNAAgUIAAgDQAAgNAFgLQAFgLAKgGQAJgGAKAAQASAAAKAMQAKAMAAAWIAAAGIg9AAQAAANAIAJQAHAIALAAQAIAAAGgDQAGgEAEgFIAKAHQgMASgXAAQgSAAgMgMgAgOgbQgGAHgCANIAtAAIAAgCQAAgMgGgGQgGgHgKAAQgIAAgHAHg");
	this.shape_289.setTransform(138.5,318.1);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("rgba(255,255,255,0.902)").s().p("AgCA0QgGgGABgMIAAg5IgRAAIAAgMIARAAIAAgWIAOAAIAAAWIARAAIAAAMIgRAAIAAA5QABAFACADQACADAGAAIAHgBIAAANIgMABQgLAAgEgGg");
	this.shape_290.setTransform(130.6,317);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("rgba(255,255,255,0.902)").s().p("AgRAsQgJgEgFgHQgFgHAAgIIAQAAQABAIAGAEQAFAFAJAAQAJAAAGgEQAFgDAAgGQAAgHgFgDQgFgEgLgCQgMgDgHgDQgHgDgDgFQgDgFAAgHQAAgLAJgIQAKgIAOAAQAPAAAKAIQAKAIAAANIgQAAQAAgHgFgEQgGgFgIAAQgIAAgFAEQgFAEAAAGQAAAFAFADQAEADALADQAMACAHAEQAIADADAFQAEAFAAAIQAAAMgKAIQgKAHgQAAQgKAAgIgEg");
	this.shape_291.setTransform(123.5,318.1);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("rgba(255,255,255,0.902)").s().p("AgHA/IAAhbIAOAAIAABbgAgGguQgDgDAAgEQAAgEADgDQADgCADAAQAEAAADACQACADAAAEQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_292.setTransform(116.9,316.4);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("rgba(255,255,255,0.902)").s().p("AAVAuIgVgiIgUAiIgTAAIAfguIgegtIASAAIAUAiIAUgiIATAAIgfAtIAgAug");
	this.shape_293.setTransform(110.4,318.1);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("rgba(255,255,255,0.902)").s().p("AgmA+IAAh7IBNAAIAAANIg9AAIAAAoIA1AAIAAANIg1AAIAAAsIA+AAIAAANg");
	this.shape_294.setTransform(101.5,316.5);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("rgba(194,155,1,0.902)").s().p("AgXAKIAAgTIAvAAIAAATg");
	this.shape_295.setTransform(88.3,317.4);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("rgba(194,155,1,0.902)").s().p("AgeA2QgLgJAAgRQAAgKAFgIQAGgIAJgDQgJgEgDgHQgFgHAAgJQAAgQAKgJQALgKARAAQASAAALAJQALAKAAAQQgBAJgEAHQgFAHgHAEQAJADAFAIQAFAIAAAKQAAARgLAJQgMAKgTAAQgSAAgMgKgAgMANQgEAFAAAIQAAAIAEAFQAFAFAHAAQAJAAAEgFQAFgEgBgJQAAgIgEgFQgFgFgIAAQgHAAgFAFgAgKgnQgDAFAAAHQAAAHADAFQAFAFAFAAQAIAAADgFQAEgFAAgHQAAgHgEgFQgEgEgHAAQgFAAgFAEg");
	this.shape_296.setTransform(75.5,316.5);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#C29B01").ss(2,1,1).p("EgiKAiCQoarAAAufQAAxnMeseQMesfRoAAQRoAAMfMfQMeMeAARnQAAOfoZLA");
	this.shape_297.setTransform(283.4,228.6);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("rgba(234,187,1,0.008)").s().p("EgiKAiCQoarAAAufQAAxnMeseQMfsfRnAAQRpAAMeMfQMeMeAARnQAAOfoZLAg");
	this.shape_298.setTransform(283.4,228.6);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#C29B01").ss(2,1,1).p("EgkSAi4Qn/rGAAuYQAAyVM+s+QM+s+SVAAQSWAAM+M+QM9M+AASVQAAOYn+LG");
	this.shape_299.setTransform(283.4,223.2);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("rgba(234,187,1,0.008)").s().p("EgkRAi4QoArGAAuYQAByVM9s+QM+s+SVAAQSVAAM/M+QM9M+ABSVQAAOYn/LGg");
	this.shape_300.setTransform(283.4,223.2);

	this.instance = new lib.death();
	this.instance.parent = this;
	this.instance.setTransform(119.3,50.3,0.391,0.391);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.popup8, new cjs.Rectangle(-1,-1,568.7,448.4), null);


(lib.popup7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btn_fechar.addEventListener("click", fechar.bind(this));
		function fechar(){
			createjs.Tween.get(this.parent.popup7)
			.to({y:700}, 1000, createjs.Ease.quartInOut);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn_fechar
	this.btn_fechar = new lib.btn_fechar();
	this.btn_fechar.name = "btn_fechar";
	this.btn_fechar.parent = this;
	this.btn_fechar.setTransform(283.4,30.3,1,1,0,0,0,18.7,19.4);
	new cjs.ButtonHelper(this.btn_fechar, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_fechar).wait(1));

	// txt
	this.instance = new lib.cigarros();
	this.instance.parent = this;
	this.instance.setTransform(119.1,17.1,0.358,0.358);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.902)").s().p("AgIAJQgEgDAAgGQAAgEAEgEQACgDAGAAQAGAAADADQAEAEAAAEQAAAGgEADQgDADgGAAQgGAAgCgDg");
	this.shape.setTransform(375.8,437.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.902)").s().p("AgnAtQgPgQAAgdIAAAAQAAgSAHgOQAHgOAMgIQANgIAPAAQAYAAAQARQAPASAAAbIAAACQAAARgHAOQgHAOgMAIQgNAIgQgBQgYABgPgSgAgYggQgJAMAAAWQAAATAJAMQAJANAPAAQAQAAAJgNQAJgMAAgVQAAgUgJgMQgKgNgPAAQgPAAgJANg");
	this.shape_1.setTransform(366.4,432.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.902)").s().p("AgGA8Igsh3IAVAAIAeBbIAdhbIAVAAIgqB3g");
	this.shape_2.setTransform(354.3,432.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.902)").s().p("AgKBSIAAh3IAUAAIAAB3gAgIg9QgDgEAAgFQAAgEADgEQADgEAFABQAGgBADAEQADAEAAAEQAAAFgDAEQgDADgGAAQgFAAgDgDg");
	this.shape_3.setTransform(346.1,430.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.902)").s().p("AgDBEQgHgIAAgQIAAhKIgWAAIAAgQIAWAAIAAgdIAUAAIAAAdIAWAAIAAAQIgWAAIAABKQAAAHACAEQADADAIABIAKgBIAAAQQgJACgHAAQgOAAgGgIg");
	this.shape_4.setTransform(339.2,431.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.902)").s().p("AgmA0QgLgKAAgPQAAgTAPgKQAOgKAZAAIAUAAIAAgJQAAgLgGgGQgHgHgMAAQgKAAgIAGQgIAFABAIIgWAAQAAgJAHgJQAGgIALgFQAMgEAMgBQAUAAAMALQANAKAAATIAAA2QgBARAFAKIAAABIgVAAQgCgDgCgJQgOAOgTAAQgSAAgMgKgAgcAYQAAAKAGAGQAHAEAKAAQAIAAAKgEQAIgGAEgIIAAgYIgQAAQglAAAAAWg");
	this.shape_5.setTransform(329.5,432.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.902)").s().p("AgkBGQgOgRAAgcIAAgCQAAgbAOgQQAMgRAWAAQAUAAAMAOIAAg/IAVAAIAACrIgTAAIgBgNQgMAPgWAAQgVAAgMgRgAgVgIQgIALAAAXQAAAUAIAMQAJALAOAAQATAAAJgRIAAg3QgJgRgTAAQgOAAgJAMg");
	this.shape_6.setTransform(316.6,430.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.902)").s().p("AgJBSIAAh3IATAAIAAB3gAgIg9QgDgEAAgFQAAgEADgEQADgEAFABQAGgBADAEQADAEAAAEQAAAFgDAEQgDADgGAAQgFAAgDgDg");
	this.shape_7.setTransform(307.7,430.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.902)").s().p("AAcA8IgcgtIgbAtIgYAAIApg8Igng7IAXAAIAaAsIAagsIAYAAIgnA7IApA8g");
	this.shape_8.setTransform(299.2,432.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.902)").s().p("AgnAtQgPgQAAgdIAAAAQAAgSAHgOQAHgOAMgIQANgIAPAAQAYAAAQARQAPASAAAbIAAACQAAARgHAOQgHAOgMAIQgNAIgQgBQgYABgPgSgAgYggQgJAMAAAWQAAATAJAMQAJANAPAAQAQAAAJgNQAJgMAAgVQAAgUgJgMQgKgNgPAAQgPAAgJANg");
	this.shape_9.setTransform(287,432.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.902)").s().p("AgjAvQgPgRAAgaIAAgEQAAgRAHgOQAGgOANgJQAMgHAOgBQAXABANAPQANAQAAAcIAAAIIhRAAQABASAKALQAKALAOAAQALAAAIgFQAHgEAGgHIANAKQgQAWgeAAQgYAAgPgPgAgTgkQgIAJgCARIA8AAIAAgCQgBgQgIgIQgIgJgMAAQgMABgJAIg");
	this.shape_10.setTransform(268.8,432.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.902)").s().p("AgXA6QgLgGgHgJQgGgJAAgLIAVAAQABALAHAGQAIAGAMAAQALAAAIgFQAHgFAAgHQAAgJgHgFQgGgEgPgEQgQgDgIgEQgKgFgFgGQgDgHAAgIQAAgPAMgKQANgLASAAQAVAAANALQAMALAAAQIgUAAQAAgJgIgFQgHgGgLgBQgLAAgFAFQgHAFAAAIQAAAHAGAFQAGADAOADQAPAEAKAFQAKADAFAIQAEAGAAAKQAAAQgMAKQgOAJgUAAQgOAAgLgEg");
	this.shape_11.setTransform(256.7,432.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.902)").s().p("AgXA6QgLgGgGgJQgHgJAAgLIAVAAQAAALAIAGQAIAGAMAAQALAAAIgFQAGgFABgHQgBgJgFgFQgHgEgPgEQgQgDgIgEQgKgFgFgGQgDgHAAgIQAAgPAMgKQANgLASAAQAUAAANALQANALAAAQIgUAAQAAgJgIgFQgHgGgLgBQgLAAgFAFQgHAFAAAIQAAAHAGAFQAGADAOADQAPAEALAFQAJADAEAIQAFAGAAAKQAAAQgMAKQgOAJgUAAQgOAAgLgEg");
	this.shape_12.setTransform(244.9,432.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.902)").s().p("AgjAvQgPgRAAgaIAAgEQAAgRAHgOQAGgOANgJQAMgHAOgBQAXABANAPQANAQAAAcIAAAIIhRAAQABASAKALQAKALAOAAQALAAAIgFQAHgEAGgHIANAKQgQAWgeAAQgYAAgPgPgAgTgkQgIAJgCARIA8AAIAAgCQgBgQgIgIQgIgJgMAAQgMABgJAIg");
	this.shape_13.setTransform(233.1,432.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.902)").s().p("AgcA9IAAh3IAUAAIAAANQAKgQASAAQAGAAADACIAAATIgKAAQgTgBgHASIAABUg");
	this.shape_14.setTransform(223.6,432.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.902)").s().p("AgDBEQgHgIAAgQIAAhKIgWAAIAAgQIAWAAIAAgdIAUAAIAAAdIAWAAIAAAQIgWAAIAABKQAAAHADAEQACADAIABIAKgBIAAAQQgJACgHAAQgOAAgGgIg");
	this.shape_15.setTransform(215.1,431.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.902)").s().p("AgXA6QgLgGgHgJQgGgJAAgLIAVAAQAAALAIAGQAIAGAMAAQALAAAIgFQAGgFABgHQgBgJgGgFQgGgEgPgEQgQgDgIgEQgKgFgFgGQgDgHAAgIQAAgPAMgKQANgLASAAQAVAAAMALQANALAAAQIgUAAQAAgJgIgFQgHgGgLgBQgLAAgFAFQgHAFAAAIQAAAHAGAFQAGADAOADQAPAEALAFQAJADAEAIQAFAGAAAKQAAAQgMAKQgOAJgUAAQgOAAgLgEg");
	this.shape_16.setTransform(205.8,432.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.902)").s().p("AgjAvQgPgRAAgaIAAgEQAAgRAHgOQAGgOANgJQAMgHAOgBQAXABANAPQANAQAAAcIAAAIIhRAAQABASAKALQAKALAOAAQALAAAIgFQAHgEAGgHIANAKQgQAWgeAAQgYAAgPgPgAgTgkQgIAJgCARIA8AAIAAgCQgBgQgIgIQgIgJgMAAQgMABgJAIg");
	this.shape_17.setTransform(193.9,432.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.902)").s().p("ABAA+IAAhPQAAgOgGgFQgGgHgOAAQgLAAgIAHQgHAHgCAMIAABPIgTAAIAAhOQAAgbgaAAQgVAAgHARIAABYIgVAAIAAh5IAUAAIAAAOQAOgQAWAAQAaAAAIAUQAGgJAKgFQAJgGANAAQAoABABAqIAABQg");
	this.shape_18.setTransform(486.3,407.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.902)").s().p("AgjAuQgPgQAAgbIAAgDQAAgRAHgPQAGgOANgHQAMgJAOAAQAXAAANAQQANAQAAAdIAAAHIhRAAQABASAKALQAKALAOAAQALAAAIgEQAHgFAGgIIANAKQgQAYgeAAQgYgBgPgQgAgTgjQgIAJgCAQIA8AAIAAgBQgBgRgIgIQgIgIgMAAQgMgBgJAKg");
	this.shape_19.setTransform(470.3,407.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.902)").s().p("AgcA+IAAh5IAUAAIAAAPQAKgQASgBQAGABADABIAAATIgKgBQgTABgHAQIAABWg");
	this.shape_20.setTransform(455.2,407.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.902)").s().p("AgmA1QgLgKAAgQQAAgTAOgJQAPgLAZAAIAUAAIAAgKQAAgKgHgGQgGgHgMAAQgKAAgIAFQgIAGAAAIIgVAAQABgJAGgIQAHgJALgEQAKgGAMAAQAVAAAMALQAMAKAAASIAAA3QAAARAFAJIAAADIgVAAQgDgEgBgJQgOAPgTAAQgSAAgMgKgAgcAYQAAAKAHAFQAGAGAKAAQAIAAAKgGQAIgFAEgHIAAgZIgQAAQglAAAAAWg");
	this.shape_21.setTransform(444.5,407.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.902)").s().p("AgDBEQgHgJAAgPIAAhKIgWAAIAAgQIAWAAIAAgdIAUAAIAAAdIAWAAIAAAQIgWAAIAABKQAAAHADAEQACADAIAAIAKgBIAAARQgJACgHAAQgOAAgGgIg");
	this.shape_22.setTransform(434.3,405.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.902)").s().p("AgJBWIAAirIATAAIAACrg");
	this.shape_23.setTransform(428.1,404.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.902)").s().p("AgkAzQgKgLgBgXIAAhOIAVAAIAABOQAAAbAWAAQAXAAAIgSIAAhXIAVAAIAAB5IgUAAIAAgNQgNAOgWABQgTgBgKgKg");
	this.shape_24.setTransform(418.9,407.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.902)").s().p("AgXA5QgMgFgFgIQgHgKAAgKIAVAAQAAAJAIAHQAIAGAMAAQALAAAIgFQAGgEAAgJQAAgIgFgEQgHgFgPgDQgQgEgIgEQgKgFgEgGQgEgGAAgJQAAgPAMgLQANgKASAAQAUAAANALQANAKAAARIgVAAQABgJgIgFQgHgHgLABQgLAAgFAEQgHAFAAAIQAAAIAGADQAGAEAPAEQAOADALAFQAJAEAEAGQAFAHAAAKQAAAQgNAKQgNAKgUAAQgOAAgLgGg");
	this.shape_25.setTransform(406.7,407.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.902)").s().p("AgjAuQgPgQAAgbIAAgDQAAgRAHgPQAGgOANgHQAMgJAOAAQAXAAANAQQANAQAAAdIAAAHIhRAAQABASAKALQAKALAOAAQALAAAIgEQAHgFAGgIIANAKQgQAYgeAAQgYgBgPgQgAgTgjQgIAJgCAQIA8AAIAAgBQgBgRgIgIQgIgIgMAAQgMgBgJAKg");
	this.shape_26.setTransform(394.9,407.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.902)").s().p("AgcA+IAAh5IAUAAIAAAPQAKgQASgBQAGABADABIAAATIgKgBQgTABgHAQIAABWg");
	this.shape_27.setTransform(385.5,407.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.902)").s().p("AgjAuQgPgQAAgbIAAgDQAAgRAHgPQAGgOANgHQAMgJAOAAQAXAAANAQQANAQAAAdIAAAHIhRAAQABASAKALQAKALAOAAQALAAAIgEQAHgFAGgIIANAKQgQAYgeAAQgYgBgPgQgAgTgjQgIAJgCAQIA8AAIAAgBQgBgRgIgIQgIgIgMAAQgMgBgJAKg");
	this.shape_28.setTransform(369.4,407.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.902)").s().p("AgkBGQgOgRAAgcIAAgCQAAgbAOgQQANgRAVAAQAUAAAMAOIAAg/IAVAAIAACrIgTAAIgBgNQgNAPgUAAQgWAAgMgRgAgUgIQgJALAAAXQAAAUAJAMQAIALAOAAQAUAAAIgRIAAg3QgJgRgTAAQgOAAgIAMg");
	this.shape_29.setTransform(356.5,404.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.902)").s().p("AgnAuQgPgRAAgcIAAgBQAAgSAHgOQAHgOAMgIQANgHAPgBQAYABAQARQAPAQAAAcIAAABQAAASgHAOQgHAOgMAIQgNAHgQABQgYgBgPgQgAgYghQgJAMAAAWQAAAVAJAMQAJAMAPAAQAQAAAJgMQAJgNAAgVQAAgUgJgNQgKgMgPABQgPgBgJAMg");
	this.shape_30.setTransform(343.8,407.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.902)").s().p("AgyBVIAAinIATAAIABAOQAMgQAWAAQAWAAAMARQANAQAAAdIAAACQAAAbgNARQgMAQgWAAQgVAAgMgNIAAA6gAgdgyIAAA5QAJARATAAQAOAAAJgMQAIgMAAgWQAAgVgIgMQgJgLgOAAQgTAAgJAQg");
	this.shape_31.setTransform(331,409.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0.902)").s().p("AgjAuQgPgQAAgbIAAgDQAAgRAHgPQAGgOANgHQAMgJAOAAQAXAAANAQQANAQAAAdIAAAHIhRAAQABASAKALQAKALAOAAQALAAAIgEQAHgFAGgIIANAKQgQAYgeAAQgYgBgPgQgAgTgjQgIAJgCAQIA8AAIAAgBQgBgRgIgIQgIgIgMAAQgMgBgJAKg");
	this.shape_32.setTransform(312.7,407.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,255,255,0.902)").s().p("AgkAzQgKgLgBgXIAAhOIAVAAIAABOQAAAbAWAAQAXAAAIgSIAAhXIAVAAIAAB5IgUAAIAAgNQgNAOgWABQgTgBgKgKg");
	this.shape_33.setTransform(300.2,407.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,255,255,0.902)").s().p("AAeBVIAAg6QgMANgUAAQgWAAgNgRQgNgRAAgbIAAgBQAAgdANgQQANgRAXAAQATAAANAPIABgNIATAAIAACngAgUg3QgJAMAAAXQAAAUAJAMQAIAMAOAAQATAAAJgRIAAg6QgJgQgTAAQgOAAgIAMg");
	this.shape_34.setTransform(287.1,409.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,255,255,0.902)").s().p("AgJBWIAAirIATAAIAACrg");
	this.shape_35.setTransform(272.5,404.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(255,255,255,0.902)").s().p("AgmA1QgLgKAAgQQAAgTAPgJQAOgLAZAAIAUAAIAAgKQAAgKgGgGQgHgHgMAAQgKAAgIAFQgHAGAAAIIgWAAQAAgJAHgIQAGgJALgEQAMgGAMAAQAVAAALALQAMAKABASIAAA3QgBARAFAJIAAADIgVAAQgCgEgBgJQgPAPgTAAQgSAAgMgKgAgcAYQAAAKAGAFQAHAGAKAAQAIAAAJgGQAJgFAEgHIAAgZIgQAAQglAAAAAWg");
	this.shape_36.setTransform(263.5,407.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0.902)").s().p("AgKBTIAAh5IAUAAIAAB5gAgIg9QgDgDAAgFQAAgGADgDQADgEAFAAQAGAAADAEQADADAAAGQAAAFgDADQgDADgGAAQgFAAgDgDg");
	this.shape_37.setTransform(254.5,405);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(255,255,255,0.902)").s().p("AgjAuQgPgQAAgdIAAgCQAAgSAHgOQAGgNAMgIQAMgHAQgBQAUAAAOAMQANANABATIgUAAQAAgMgIgHQgIgHgMAAQgPgBgJALQgIAMAAAWIAAACQAAAWAIALQAJALAPAAQALAAAIgHQAJgHAAgKIAUAAQgBALgGAJQgHAJgLAGQgLAFgMABQgYgBgOgQg");
	this.shape_38.setTransform(245.8,407.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,255,255,0.902)").s().p("AgJBTIAAh5IATAAIAAB5gAgIg9QgDgDAAgFQAAgGADgDQADgEAFAAQAGAAADAEQADADAAAGQAAAFgDADQgDADgGAAQgFAAgDgDg");
	this.shape_39.setTransform(237,405);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(255,255,255,0.902)").s().p("AglBGQgNgRAAgcIAAgCQAAgbANgQQAOgRAVAAQAUAAANAOIAAg/IAUAAIAACrIgTAAIgBgNQgNAPgUAAQgWAAgNgRgAgUgIQgJALAAAXQAAAUAJAMQAIALAOAAQATAAAKgRIAAg3QgKgRgTAAQgOAAgIAMg");
	this.shape_40.setTransform(227.4,404.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(255,255,255,0.902)").s().p("AgkAzQgKgLgBgXIAAhOIAVAAIAABOQAAAbAWAAQAXAAAIgSIAAhXIAVAAIAAB5IgUAAIAAgNQgNAOgWABQgTgBgKgKg");
	this.shape_41.setTransform(214.9,407.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(255,255,255,0.902)").s().p("AgWBpIAAgQIAJABQAHAAAEgFQADgDAAgJIAAiHIAVAAIAACGQgBAjgeAAQgHAAgGgCgAAChWQgDgDAAgFQAAgFADgEQADgDAGAAQAGAAADADQADAEAAAFQAAAFgDADQgDADgGAAQgGAAgDgDg");
	this.shape_42.setTransform(204.8,407.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(255,255,255,0.902)").s().p("AgjAuQgPgQAAgbIAAgDQAAgRAHgPQAGgOANgHQAMgJAOAAQAXAAANAQQANAQAAAdIAAAHIhRAAQABASAKALQAKALAOAAQALAAAIgEQAHgFAGgIIANAKQgQAYgeAAQgYgBgPgQgAgTgjQgIAJgCAQIA8AAIAAgBQgBgRgIgIQgIgIgMAAQgMgBgJAKg");
	this.shape_43.setTransform(197.2,407.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(255,255,255,0.902)").s().p("AgcA+IAAh5IAUAAIAAAPQAKgQASgBQAGABADABIAAATIgKgBQgTABgHAQIAABWg");
	this.shape_44.setTransform(187.8,407.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(255,255,255,0.902)").s().p("AgyBVIAAinIATAAIABAOQAMgQAWAAQAWAAAMARQANAQAAAdIAAACQAAAbgNARQgMAQgWAAQgVAAgMgNIAAA6gAgdgyIAAA5QAJARATAAQAOAAAJgMQAIgMAAgWQAAgVgIgMQgJgLgOAAQgTAAgJAQg");
	this.shape_45.setTransform(177.1,409.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(255,255,255,0.902)").s().p("AgnAuQgPgRAAgcIAAgBQAAgSAHgOQAHgOAMgIQANgHAPgBQAYABAQARQAPAQAAAcIAAABQAAASgHAOQgHAOgMAIQgNAHgQABQgYgBgPgQgAgYghQgJAMAAAWQAAAVAJAMQAJAMAPAAQAQAAAJgMQAJgNAAgVQAAgUgJgNQgKgMgPABQgPgBgJAMg");
	this.shape_46.setTransform(158.3,407.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(255,255,255,0.902)").s().p("AgXA5QgLgFgHgIQgGgKAAgKIAVAAQAAAJAIAHQAIAGALAAQANAAAGgFQAIgEAAgJQAAgIgHgEQgGgFgPgDQgPgEgKgEQgJgFgEgGQgFgGAAgJQAAgPANgLQAMgKATAAQAUAAAOALQAMAKAAARIgUAAQgBgJgHgFQgHgHgLABQgKAAgHAEQgGAFAAAIQAAAIAGADQAGAEAOAEQAQADAJAFQAKAEAFAGQAEAHAAAKQAAAQgMAKQgNAKgWAAQgNAAgLgGg");
	this.shape_47.setTransform(145.8,407.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(255,255,255,0.902)").s().p("AgXA5QgLgFgHgIQgGgKAAgKIAVAAQABAJAHAHQAIAGALAAQANAAAGgFQAIgEAAgJQAAgIgHgEQgGgFgPgDQgPgEgKgEQgJgFgFgGQgEgGAAgJQAAgPANgLQANgKASAAQAVAAANALQAMAKAAARIgUAAQAAgJgIgFQgHgHgLABQgKAAgGAEQgHAFAAAIQAAAIAGADQAGAEAOAEQAPADAKAFQAKAEAFAGQAEAHAAAKQAAAQgMAKQgNAKgWAAQgNAAgLgGg");
	this.shape_48.setTransform(134,407.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(255,255,255,0.902)").s().p("AgjAuQgPgQAAgbIAAgDQAAgRAHgPQAGgOANgHQAMgJAOAAQAXAAANAQQANAQAAAdIAAAHIhRAAQABASAKALQAKALAOAAQALAAAIgEQAHgFAGgIIANAKQgQAYgeAAQgYgBgPgQgAgTgjQgIAJgCAQIA8AAIAAgBQgBgRgIgIQgIgIgMAAQgMgBgJAKg");
	this.shape_49.setTransform(122.2,407.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(255,255,255,0.902)").s().p("AgjAuQgPgQAAgdIAAgCQAAgSAHgOQAGgNAMgIQAMgHAQgBQAUAAAOAMQANANABATIgUAAQAAgMgIgHQgIgHgMAAQgPgBgJALQgIAMAAAWIAAACQAAAWAIALQAJALAPAAQALAAAIgHQAJgHAAgKIAUAAQgBALgGAJQgHAJgLAGQgLAFgMABQgYgBgOgQg");
	this.shape_50.setTransform(110.1,407.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(255,255,255,0.902)").s().p("AgnAuQgPgRAAgcIAAgBQAAgSAHgOQAHgOAMgIQANgHAPgBQAYABAQARQAPAQAAAcIAAABQAAASgHAOQgHAOgMAIQgNAHgQABQgYgBgPgQgAgYghQgJAMAAAWQAAAVAJAMQAJAMAPAAQAQAAAJgMQAJgNAAgVQAAgUgJgNQgKgMgPABQgPgBgJAMg");
	this.shape_51.setTransform(97.5,407.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(255,255,255,0.902)").s().p("AgcA+IAAh5IAUAAIAAAPQAKgQASgBQAGABADABIAAATIgKgBQgTABgHAQIAABWg");
	this.shape_52.setTransform(87.7,407.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(255,255,255,0.902)").s().p("AgyBVIAAinIATAAIABAOQAMgQAWAAQAWAAAMARQANAQAAAdIAAACQAAAbgNARQgMAQgWAAQgVAAgMgNIAAA6gAgdgyIAAA5QAJARATAAQAOAAAJgMQAIgMAAgWQAAgVgIgMQgJgLgOAAQgTAAgJAQg");
	this.shape_53.setTransform(77,409.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(255,255,255,0.902)").s().p("AgnAtQgPgQAAgdIAAAAQAAgSAHgOQAHgOAMgIQANgHAPgBQAYABAQARQAPAQAAAcIAAABQAAASgHAOQgHAOgMAIQgNAHgQAAQgYAAgPgRgAgYghQgJANAAAVQAAAVAJAMQAJAMAPAAQAQAAAJgMQAJgNAAgVQAAgUgJgNQgKgMgPABQgPgBgJAMg");
	this.shape_54.setTransform(489.4,381.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(255,255,255,0.902)").s().p("AgcA+IAAh5IAUAAIAAAPQAKgQASgBQAGABADABIAAATIgKgBQgTAAgHARIAABWg");
	this.shape_55.setTransform(479.6,381.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(255,255,255,0.902)").s().p("AgDBEQgHgIAAgQIAAhKIgWAAIAAgQIAWAAIAAgdIATAAIAAAdIAXAAIAAAQIgXAAIAABKQABAHADAEQADAEAHAAIAKgCIAAARQgJACgHAAQgOAAgGgIg");
	this.shape_56.setTransform(471.1,380.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(255,255,255,0.902)").s().p("AgkAzQgKgLgBgXIAAhOIAVAAIAABNQAAAcAWAAQAXAAAIgSIAAhXIAVAAIAAB5IgUAAIAAgNQgNAOgWAAQgTABgKgLg");
	this.shape_57.setTransform(461.3,381.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(255,255,255,0.902)").s().p("AgnAtQgPgQAAgdIAAAAQAAgSAHgOQAHgOAMgIQANgHAPgBQAYABAQARQAPAQAAAcIAAABQAAASgHAOQgHAOgMAIQgNAHgQAAQgYAAgPgRgAgYghQgJANAAAVQAAAVAJAMQAJAMAPAAQAQAAAJgMQAJgNAAgVQAAgUgJgNQgKgMgPABQgPgBgJAMg");
	this.shape_58.setTransform(448.5,381.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(255,255,255,0.902)").s().p("ABAA+IAAhPQAAgOgGgFQgGgHgOAAQgLAAgIAHQgHAHgCAMIAABPIgTAAIAAhPQAAgagaAAQgVAAgHARIAABYIgVAAIAAh5IAUAAIAAAOQAOgQAWAAQAaAAAIAUQAGgJAKgFQAJgGANAAQAoABABAqIAABQg");
	this.shape_59.setTransform(426.3,381.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(255,255,255,0.902)").s().p("AgkAzQgKgLgBgXIAAhOIAVAAIAABNQAAAcAWAAQAXAAAIgSIAAhXIAVAAIAAB5IgUAAIAAgNQgNAOgWAAQgTABgKgLg");
	this.shape_60.setTransform(409.9,381.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(255,255,255,0.902)").s().p("AgPAUQALgPAAgOIAAgSIAUAAIAAAPQAAAMgGALQgFAKgIAIg");
	this.shape_61.setTransform(395.3,388.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(255,255,255,0.902)").s().p("AgmA1QgLgLAAgPQAAgTAPgJQAOgLAZAAIAUAAIAAgJQAAgLgGgGQgHgHgMAAQgKAAgIAGQgHAFAAAIIgWAAQAAgJAHgJQAGgIALgEQAMgGAMAAQAVAAALALQAMAKABASIAAA3QgBARAFAKIAAACIgVAAQgCgEgBgJQgPAOgTAAQgSABgMgKgAgcAYQAAAKAGAFQAHAGAKAAQAIAAAJgGQAJgEAEgJIAAgYIgQAAQglAAAAAWg");
	this.shape_62.setTransform(387.2,381.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(255,255,255,0.902)").s().p("AgjAuQgPgQAAgdIAAgCQAAgSAHgOQAGgOAMgHQAMgHAQgBQAUABAOALQANAMABAUIgUAAQAAgLgIgIQgIgHgMAAQgPgBgJALQgIAMAAAWIAAACQAAAWAIALQAJALAPAAQALAAAIgHQAJgHAAgJIAUAAQgBAKgGAJQgHAJgLAGQgLAFgMAAQgYAAgOgQg");
	this.shape_63.setTransform(375.1,381.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(255,255,255,0.902)").s().p("AgJBTIAAh5IATAAIAAB5gAgIg9QgDgEAAgEQAAgFADgEQADgEAFAAQAGAAADAEQADAEAAAFQAAAEgDAEQgDADgGAAQgFAAgDgDg");
	this.shape_64.setTransform(366.3,379.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(255,255,255,0.902)").s().p("AAbA+IAAhPQAAgNgGgHQgGgGgMAAQgJAAgIAFQgIAGgEAIIAABWIgVAAIAAh5IAUAAIABAQQANgSAWAAQAmABABArIAABPg");
	this.shape_65.setTransform(357.2,381.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(255,255,255,0.902)").s().p("AgnBGQgPgRAAgcIAAgCQAAgSAHgNQAHgOAMgIQANgHAPAAQAYAAAQARQAPARAAAbIAAACQAAARgHAOQgHAOgMAIQgNAIgQAAQgYAAgPgRgAgYgIQgJALAAAXQAAAUAJAMQAJAMAPAAQAQAAAJgMQAJgNAAgWQAAgUgJgLQgKgMgPAAQgPAAgJAMgAAQg2IgQgTIgRATIgRAAIAAgCIAcgeIALAAIAcAfIAAABg");
	this.shape_66.setTransform(344.3,379.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(255,255,255,0.902)").s().p("AgcA+IAAh5IAUAAIAAAPQAKgQASgBQAGABADABIAAATIgKgBQgTAAgHARIAABWg");
	this.shape_67.setTransform(334.5,381.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(255,255,255,0.902)").s().p("AgjAuQgPgQAAgdIAAgCQAAgSAHgOQAGgOAMgHQAMgHAQgBQAUABAOALQANAMABAUIgUAAQAAgLgIgIQgIgHgMAAQgPgBgJALQgIAMAAAWIAAACQAAAWAIALQAJALAPAAQALAAAIgHQAJgHAAgJIAUAAQgBAKgGAJQgHAJgLAGQgLAFgMAAQgYAAgOgQg");
	this.shape_68.setTransform(324.2,381.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(255,255,255,0.902)").s().p("AgnAtQgPgQAAgdIAAAAQAAgSAHgOQAHgOAMgIQANgHAPgBQAYABAQARQAPAQAAAcIAAABQAAASgHAOQgHAOgMAIQgNAHgQAAQgYAAgPgRgAgYghQgJANAAAVQAAAVAJAMQAJAMAPAAQAQAAAJgMQAJgNAAgVQAAgUgJgNQgKgMgPABQgPgBgJAMg");
	this.shape_69.setTransform(305.9,381.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(255,255,255,0.902)").s().p("AgmBMQgLgKAAgQQAAgTAPgKQAOgLAZAAIAUAAIAAgJQAAgKgGgGQgHgHgMAAQgKAAgIAGQgIAFABAIIgWAAQAAgJAHgIQAGgJALgEQAMgFAMAAQAUAAAMAKQANAKAAASIAAA3QgBARAFAKIAAACIgVAAQgDgEgBgJQgOAPgTAAQgSAAgMgKgAgcAvQAAAKAGAGQAHAFAKAAQAIAAAJgFQAJgFAEgIIAAgZIgQAAQglAAAAAWgAgjg3QAAgMAGgIQAHgIAKAAIAHABIAIAFIAJAEIAGABQAEAAADgEQAEgEAAgFIANACQABAMgHAHQgHAIgKAAIgIgBIgJgFIgHgEIgGgBQgEAAgEAEQgDADAAAGg");
	this.shape_70.setTransform(293.1,379.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(255,255,255,0.902)").s().p("AgMBKQAJAAAEgCQAFgDAAgGQAAgFgEgCQgCgCgLgBIADgPQgQgDgLgMQgPgRAAgcIAAgDQAAgSAHgNQAGgOAMgIQAMgHAQAAQAUAAAOAMQANAMABATIgUAAQAAgLgIgIQgIgHgMAAQgPAAgJALQgIALAAAWIAAAEQAAAUAIALQAJALAPAAQALAAAIgHQAJgGAAgJIAUAAQgBAJgGAJQgHAKgLAFQgJAFgLABIAAgBIgOAAIALABIADAAIgBAFQARADAAAQQAAALgJAGQgJAGgPAAgAAGAnIAAAAgAADAnIgLgBIAOAAIAAABIgDAAg");
	this.shape_71.setTransform(281,384);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(255,255,255,0.902)").s().p("AgmA1QgLgLAAgPQAAgTAPgJQAOgLAZAAIAUAAIAAgJQAAgLgGgGQgHgHgMAAQgKAAgIAGQgIAFABAIIgWAAQABgJAGgJQAHgIALgEQALgGAMAAQAUAAAMALQANAKAAASIAAA3QgBARAFAKIAAACIgVAAQgCgEgCgJQgOAOgTAAQgSABgMgKgAgcAYQAAAKAGAFQAHAGAKAAQAIAAAKgGQAIgEAEgJIAAgYIgQAAQglAAAAAWg");
	this.shape_72.setTransform(268.7,381.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(255,255,255,0.902)").s().p("ABAA+IAAhPQAAgOgGgFQgGgHgOAAQgLAAgIAHQgHAHgCAMIAABPIgTAAIAAhPQAAgagaAAQgVAAgHARIAABYIgVAAIAAh5IAUAAIAAAOQAOgQAWAAQAaAAAIAUQAGgJAKgFQAJgGANAAQAoABABAqIAABQg");
	this.shape_73.setTransform(252.4,381.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(255,255,255,0.902)").s().p("AglA1QgMgLAAgPQAAgTAPgJQAOgLAZAAIAUAAIAAgJQAAgLgGgGQgHgHgMAAQgKAAgIAGQgHAFAAAIIgVAAQgBgJAHgJQAGgIALgEQAMgGAMAAQAUAAANALQALAKABASIAAA3QAAARAEAKIAAACIgWAAQgBgEgBgJQgPAOgTAAQgSABgLgKgAgcAYQAAAKAGAFQAHAGAKAAQAJAAAIgGQAJgEAEgJIAAgYIgQAAQglAAAAAWg");
	this.shape_74.setTransform(236.1,381.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(255,255,255,0.902)").s().p("AgJBWIAAirIATAAIAACrg");
	this.shape_75.setTransform(227.2,379.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(255,255,255,0.902)").s().p("AgQBXIAAhoIgUAAIAAgQIAUAAIAAgNQAAgTAKgLQAJgKATAAQAIAAAHACIgCAQIgLAAQgKgBgFAHQgGAGAAAKIAAANIAaAAIAAAQIgaAAIAABog");
	this.shape_76.setTransform(220.7,379);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(255,255,255,0.902)").s().p("AAbA+IAAhPQAAgNgGgHQgGgGgMAAQgJAAgIAFQgIAGgEAIIAABWIgVAAIAAh5IAUAAIABAQQANgSAWAAQAmABABArIAABPg");
	this.shape_77.setTransform(210.1,381.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(255,255,255,0.902)").s().p("AgKBTIAAh5IAUAAIAAB5gAgIg9QgDgEAAgEQAAgFADgEQADgEAFAAQAGAAADAEQADAEAAAFQAAAEgDAEQgDADgGAAQgFAAgDgDg");
	this.shape_78.setTransform(201.1,379.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(255,255,255,0.902)").s().p("AgjAuQgPgQAAgbIAAgDQAAgSAHgOQAGgNANgJQAMgIAOAAQAXAAANAQQANAPAAAeIAAAHIhRAAQABASAKALQAKALAOAAQALAAAIgEQAHgFAGgIIANAKQgQAYgegBQgYAAgPgQgAgTgjQgIAJgCAQIA8AAIAAgBQgBgRgIgIQgIgIgMAAQgMgBgJAKg");
	this.shape_79.setTransform(186.6,381.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(255,255,255,0.902)").s().p("AglBGQgNgRAAgcIAAgCQAAgbANgQQANgRAWAAQAUAAANAOIAAg/IAUAAIAACrIgTAAIgBgNQgMAPgWAAQgUAAgOgRgAgVgIQgIALAAAXQAAAUAIAMQAJALAOAAQAUAAAJgRIAAg3QgKgRgTAAQgOAAgJAMg");
	this.shape_80.setTransform(173.7,379.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(255,255,255,0.902)").s().p("AgXA5QgLgEgHgJQgGgKAAgKIAVAAQABAJAHAHQAIAGAMAAQALAAAHgFQAIgEAAgJQAAgIgHgEQgGgFgPgDQgQgEgIgEQgKgEgFgHQgDgHAAgIQAAgPAMgLQANgKASAAQAVAAANALQAMALAAAQIgUAAQAAgJgIgFQgHgHgLABQgLAAgFAEQgHAFAAAIQAAAIAGADQAGAEAOADQAPAEAKAFQAKAEAFAGQAEAHAAAKQAAAQgMAKQgOAJgUAAQgOABgLgGg");
	this.shape_81.setTransform(155.9,381.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(255,255,255,0.902)").s().p("AgnAtQgPgQAAgdIAAAAQAAgSAHgOQAHgOAMgIQANgHAPgBQAYABAQARQAPAQAAAcIAAABQAAASgHAOQgHAOgMAIQgNAHgQAAQgYAAgPgRgAgYghQgJANAAAVQAAAVAJAMQAJAMAPAAQAQAAAJgMQAJgNAAgVQAAgUgJgNQgKgMgPABQgPgBgJAMg");
	this.shape_82.setTransform(143.5,381.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(255,255,255,0.902)").s().p("AgkBGQgOgRAAgcIAAgCQAAgbAOgQQAMgRAWAAQAUAAAMAOIAAg/IAVAAIAACrIgTAAIgBgNQgMAPgWAAQgUAAgNgRgAgVgIQgIALAAAXQAAAUAIAMQAJALAOAAQATAAAJgRIAAg3QgJgRgTAAQgOAAgJAMg");
	this.shape_83.setTransform(130.3,379.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(255,255,255,0.902)").s().p("AglA1QgMgLAAgPQAAgTAOgJQAPgLAZAAIAUAAIAAgJQAAgLgHgGQgGgHgMAAQgKAAgIAGQgHAFgBAIIgUAAQgBgJAHgJQAHgIAKgEQALgGANAAQAVAAAMALQAMAKAAASIAAA3QAAARAEAKIAAACIgWAAQgBgEgBgJQgPAOgTAAQgSABgLgKgAgcAYQAAAKAGAFQAHAGAKAAQAIAAAJgGQAJgEAEgJIAAgYIgQAAQglAAAAAWg");
	this.shape_84.setTransform(117.9,381.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(255,255,255,0.902)").s().p("AgHA9Igsh5IAWAAIAeBdIAdhdIAWAAIgrB5g");
	this.shape_85.setTransform(106.1,381.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(255,255,255,0.902)").s().p("AgjAuQgPgQAAgbIAAgDQAAgSAHgOQAGgNANgJQAMgIAOAAQAXAAANAQQANAPAAAeIAAAHIhRAAQABASAKALQAKALAOAAQALAAAIgEQAHgFAGgIIANAKQgQAYgegBQgYAAgPgQgAgTgjQgIAJgCAQIA8AAIAAgBQgBgRgIgIQgIgIgMAAQgMgBgJAKg");
	this.shape_86.setTransform(94.6,381.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(255,255,255,0.902)").s().p("AgJBWIAAirIATAAIAACrg");
	this.shape_87.setTransform(85.7,379.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(255,255,255,0.902)").s().p("AgjAuQgPgQAAgbIAAgDQAAgSAHgOQAGgNANgJQAMgIAOAAQAXAAANAQQANAPAAAeIAAAHIhRAAQABASAKALQAKALAOAAQALAAAIgEQAHgFAGgIIANAKQgQAYgegBQgYAAgPgQgAgTgjQgIAJgCAQIA8AAIAAgBQgBgRgIgIQgIgIgMAAQgMgBgJAKg");
	this.shape_88.setTransform(76.9,381.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(255,255,255,0.902)").s().p("AgXA5QgLgEgHgKQgGgJAAgLIAVAAQABAKAHAHQAIAGALAAQANAAAGgFQAIgFAAgHQAAgJgHgFQgGgEgPgEQgPgDgKgEQgJgFgFgGQgDgHgBgIQAAgPANgKQANgKASAAQAVAAANAKQAMAKAAARIgUAAQAAgIgIgHQgHgFgLAAQgKgBgGAFQgHAFAAAIQAAAHAGAFQAGADAOAEQAPADAKAFQAKADAFAIQAEAGAAAKQAAAQgMAKQgNAKgWAAQgNgBgLgFg");
	this.shape_89.setTransform(508.4,356.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(255,255,255,0.902)").s().p("AgKBSIAAh3IAUAAIAAB3gAgIg9QgDgEAAgFQAAgFADgDQADgDAFAAQAGAAADADQADADAAAFQAAAFgDAEQgDADgGAAQgFAAgDgDg");
	this.shape_90.setTransform(499.8,353.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(255,255,255,0.902)").s().p("AgmA0QgLgJAAgQQAAgTAPgKQAOgKAZAAIAUAAIAAgKQAAgKgGgHQgHgGgMAAQgKAAgIAFQgHAGAAAIIgWAAQAAgJAHgIQAGgJALgFQAMgEAMAAQAVAAALAKQAMAKABASIAAA3QgBARAFAJIAAACIgVAAQgCgDgBgJQgPAPgTAAQgSAAgMgLgAgcAYQAAAKAGAFQAHAFAKABQAIgBAJgFQAJgEAEgIIAAgZIgQAAQglAAAAAWg");
	this.shape_91.setTransform(490.7,356.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(255,255,255,0.902)").s().p("ABAA9IAAhPQAAgNgGgGQgGgGgOAAQgLAAgIAHQgHAHgCALIAABPIgTAAIAAhNQAAgbgaAAQgVAAgHARIAABXIgVAAIAAh3IAUAAIAAANQAOgPAWAAQAaAAAIATQAGgJAKgGQAJgEANAAQAoAAABApIAABQg");
	this.shape_92.setTransform(474.5,356);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(255,255,255,0.902)").s().p("AgXA5QgLgEgHgKQgGgJAAgLIAVAAQAAAKAIAHQAIAGAMAAQALAAAIgFQAGgFABgHQgBgJgGgFQgGgEgPgEQgQgDgIgEQgKgFgFgGQgDgHAAgIQAAgPAMgKQANgKASAAQAVAAAMAKQANAKAAARIgUAAQAAgIgIgHQgHgFgLAAQgLgBgFAFQgHAFAAAIQAAAHAGAFQAGADAOAEQAPADALAFQAJADAEAIQAFAGAAAKQAAAQgMAKQgOAKgUAAQgOgBgLgFg");
	this.shape_93.setTransform(452.8,356.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(255,255,255,0.902)").s().p("AgJBSIAAh3IATAAIAAB3gAgIg9QgDgEAAgFQAAgFADgDQADgDAFAAQAGAAADADQADADAAAFQAAAFgDAEQgDADgGAAQgFAAgDgDg");
	this.shape_94.setTransform(444.2,353.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(255,255,255,0.902)").s().p("AgjAvQgPgQAAgcIAAgDQAAgSAHgOQAGgOANgHQAMgIAOAAQAXAAANAPQANAPAAAdIAAAIIhRAAQABASAKALQAKALAOAAQALAAAIgFQAHgEAGgHIANAJQgQAYgeAAQgYAAgPgQgAgTgjQgIAIgCARIA8AAIAAgCQgBgPgIgJQgIgJgMABQgMAAgJAJg");
	this.shape_95.setTransform(435.5,356.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(255,255,255,0.902)").s().p("AgHA8Igrh3IAVAAIAdBbIAfhbIAVAAIgsB3g");
	this.shape_96.setTransform(423.7,356.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(255,255,255,0.902)").s().p("AgWBWIAAh4IAVAAIAAB4gAgWg0IAVghIAYAAIgdAhg");
	this.shape_97.setTransform(416.6,353.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(255,255,255,0.902)").s().p("AAbA9IAAhPQAAgNgGgGQgGgGgMAAQgJAAgIAFQgIAFgEAKIAABUIgVAAIAAh3IAUAAIABAPQANgRAWAAQAmAAABAqIAABPg");
	this.shape_98.setTransform(406.2,356);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(255,255,255,0.902)").s().p("AglA0QgMgJAAgQQAAgTAOgKQAPgKAZAAIAUAAIAAgKQAAgKgHgHQgGgGgMAAQgLAAgHAFQgHAGgBAIIgUAAQgBgJAHgIQAHgJAKgFQALgEAMAAQAWAAAMAKQAMAKgBASIAAA3QABARAEAJIAAACIgWAAQgCgDAAgJQgPAPgTAAQgSAAgLgLgAgcAYQAAAKAHAFQAGAFAKABQAJgBAIgFQAJgEAEgIIAAgZIgQAAQglAAAAAWg");
	this.shape_99.setTransform(388,356.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(255,255,255,0.902)").s().p("AgnAuQgPgSAAgbIAAgBQAAgSAHgOQAHgOAMgIQANgIAPABQAYgBAQASQAPARAAAbIAAACQAAARgHAOQgHAOgMAIQgNAIgQAAQgYAAgPgRgAgYggQgJAMAAAWQAAATAJAMQAJANAPAAQAQAAAJgNQAJgMAAgVQAAgUgJgMQgKgMgPAAQgPAAgJAMg");
	this.shape_100.setTransform(369.6,356.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(255,255,255,0.902)").s().p("AglBGQgNgRAAgcIAAgCQAAgbANgQQANgRAWAAQAUAAANAOIAAg/IAUAAIAACrIgTAAIgBgNQgMAPgWAAQgVAAgNgRgAgVgIQgIALAAAXQAAAUAIAMQAJALAOAAQAUAAAJgRIAAg3QgKgRgTAAQgOAAgJAMg");
	this.shape_101.setTransform(356.3,353.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(255,255,255,0.902)").s().p("AgmA0QgLgJAAgQQAAgTAPgKQAOgKAZAAIAUAAIAAgKQAAgKgGgHQgHgGgMAAQgKAAgIAFQgIAGABAIIgWAAQAAgJAHgIQAGgJALgFQAMgEAMAAQAUAAAMAKQANAKAAASIAAA3QgBARAFAJIAAACIgVAAQgCgDgCgJQgOAPgTAAQgSAAgMgLgAgcAYQAAAKAGAFQAHAFAKABQAIgBAJgFQAJgEAEgIIAAgZIgQAAQglAAAAAWg");
	this.shape_102.setTransform(343.9,356.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(255,255,255,0.902)").s().p("AgKBSIAAh3IAUAAIAAB3gAgIg9QgDgEAAgFQAAgFADgDQADgDAFAAQAGAAADADQADADAAAFQAAAFgDAEQgDADgGAAQgFAAgDgDg");
	this.shape_103.setTransform(335,353.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(255,255,255,0.902)").s().p("AgjAvQgPgRAAgdIAAgDQAAgRAHgNQAGgOAMgIQAMgIAQABQAUAAAOALQANANABATIgUAAQAAgMgIgHQgIgIgMABQgPAAgJALQgIALAAAVIAAAEQAAAVAIAKQAJAMAPAAQALAAAIgHQAJgGAAgLIAUAAQgBALgGAJQgHAJgLAGQgLAGgMAAQgYAAgOgQg");
	this.shape_104.setTransform(326.3,356.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(255,255,255,0.902)").s().p("AgnAuQgPgSAAgbIAAgBQAAgSAHgOQAHgOAMgIQANgIAPABQAYgBAQASQAPARAAAbIAAACQAAARgHAOQgHAOgMAIQgNAIgQAAQgYAAgPgRgAgYggQgJAMAAAWQAAATAJAMQAJANAPAAQAQAAAJgNQAJgMAAgVQAAgUgJgMQgKgMgPAAQgPAAgJAMg");
	this.shape_105.setTransform(313.6,356.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(255,255,255,0.902)").s().p("AgXA5QgLgEgGgKQgHgJAAgLIAVAAQAAAKAIAHQAIAGAMAAQALAAAIgFQAGgFABgHQgBgJgGgFQgGgEgPgEQgQgDgIgEQgKgFgFgGQgDgHAAgIQAAgPAMgKQANgKASAAQAUAAANAKQANAKAAARIgUAAQAAgIgIgHQgHgFgLAAQgLgBgFAFQgHAFAAAIQAAAHAGAFQAGADAOAEQAPADALAFQAJADAEAIQAFAGAAAKQAAAQgMAKQgOAKgUAAQgOgBgLgFg");
	this.shape_106.setTransform(301.2,356.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(255,255,255,0.902)").s().p("AgXA5QgMgEgFgKQgHgJAAgLIAVAAQAAAKAIAHQAIAGAMAAQALAAAIgFQAGgFABgHQgBgJgFgFQgHgEgPgEQgQgDgIgEQgKgFgFgGQgDgHAAgIQAAgPAMgKQAMgKATAAQAVAAAMAKQANAKAAARIgVAAQABgIgIgHQgHgFgLAAQgLgBgFAFQgHAFAAAIQAAAHAGAFQAGADAOAEQAPADALAFQAJADAEAIQAFAGAAAKQAAAQgNAKQgNAKgUAAQgOgBgLgFg");
	this.shape_107.setTransform(289.4,356.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(255,255,255,0.902)").s().p("AglA0QgMgJAAgQQAAgTAOgKQAPgKAZAAIAUAAIAAgKQAAgKgHgHQgGgGgMAAQgLAAgHAFQgHAGgBAIIgUAAQAAgJAGgIQAHgJAKgFQALgEAMAAQAWAAAMAKQAMAKgBASIAAA3QABARAEAJIAAACIgWAAQgCgDAAgJQgPAPgTAAQgSAAgLgLgAgcAYQAAAKAHAFQAGAFAKABQAJgBAIgFQAJgEAEgIIAAgZIgQAAQglAAAAAWg");
	this.shape_108.setTransform(277.3,356.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(255,255,255,0.902)").s().p("AgmBNQgLgKAAgQQAAgTAOgKQAPgLAZAAIAUAAIAAgJQAAgKgHgGQgGgHgMAAQgLAAgHAGQgIAFAAAIIgVAAQABgJAGgIQAHgJALgEQALgFALAAQAVAAAMAKQAMAKAAASIAAA3QAAARAFAKIAAACIgVAAQgDgEgBgJQgOAPgTAAQgSAAgMgKgAgcAwQAAAKAHAGQAGAFAKAAQAIAAAKgFQAIgFAEgIIAAgZIgQAAQglAAAAAWgAgIg1IAVghIAZAAIgeAhg");
	this.shape_109.setTransform(259.1,353.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(255,255,255,0.902)").s().p("AgDBEQgHgJAAgPIAAhKIgWAAIAAgQIAWAAIAAgdIAUAAIAAAdIAWAAIAAAQIgWAAIAABKQAAAIADADQACADAIAAIAKgBIAAARQgJACgHAAQgOAAgGgIg");
	this.shape_110.setTransform(248.9,354.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(255,255,255,0.902)").s().p("AgXA5QgLgEgHgKQgGgJAAgLIAVAAQAAAKAIAHQAIAGAMAAQALAAAIgFQAGgFABgHQgBgJgGgFQgGgEgPgEQgQgDgIgEQgKgFgFgGQgDgHAAgIQAAgPAMgKQANgKASAAQAVAAAMAKQANAKAAARIgUAAQAAgIgIgHQgHgFgLAAQgLgBgFAFQgHAFAAAIQAAAHAGAFQAGADAOAEQAPADALAFQAJADAEAIQAFAGAAAKQAAAQgMAKQgOAKgUAAQgOgBgLgFg");
	this.shape_111.setTransform(239.5,356.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(255,255,255,0.902)").s().p("AgjAvQgPgQAAgcIAAgDQAAgSAHgOQAGgOANgHQAMgIAOAAQAXAAANAPQANAPAAAdIAAAIIhRAAQABASAKALQAKALAOAAQALAAAIgFQAHgEAGgHIANAJQgQAYgeAAQgYAAgPgQgAgTgjQgIAIgCARIA8AAIAAgCQgBgPgIgJQgIgJgMABQgMAAgJAJg");
	this.shape_112.setTransform(227.7,356.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(255,255,255,0.902)").s().p("AgnAuQgPgSAAgbIAAgBQAAgSAHgOQAHgOAMgIQANgIAPABQAYgBAQASQAPARAAAbIAAACQAAARgHAOQgHAOgMAIQgNAIgQAAQgYAAgPgRgAgYggQgJAMAAAWQAAATAJAMQAJANAPAAQAQAAAJgNQAJgMAAgVQAAgUgJgMQgKgMgPAAQgPAAgJAMg");
	this.shape_113.setTransform(209.3,356.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("rgba(255,255,255,0.902)").s().p("ABAA9IAAhPQAAgNgGgGQgGgGgOAAQgLAAgIAHQgHAHgCALIAABPIgTAAIAAhNQAAgbgaAAQgVAAgHARIAABXIgVAAIAAh3IAUAAIAAANQAOgPAWAAQAaAAAIATQAGgJAKgGQAJgEANAAQAoAAABApIAABQg");
	this.shape_114.setTransform(192.8,356);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("rgba(255,255,255,0.902)").s().p("AgXA5QgMgEgFgKQgHgJAAgLIAVAAQAAAKAIAHQAIAGAMAAQALAAAIgFQAGgFAAgHQAAgJgFgFQgHgEgPgEQgQgDgIgEQgKgFgEgGQgEgHAAgIQAAgPAMgKQANgKASAAQAVAAAMAKQANAKAAARIgVAAQABgIgIgHQgHgFgLAAQgLgBgFAFQgHAFAAAIQAAAHAGAFQAGADAPAEQAOADALAFQAJADAEAIQAFAGAAAKQAAAQgNAKQgNAKgUAAQgOgBgLgFg");
	this.shape_115.setTransform(176.8,356.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("rgba(255,255,255,0.902)").s().p("AgKBSIAAh3IAUAAIAAB3gAgIg9QgDgEAAgFQAAgFADgDQADgDAFAAQAGAAADADQADADAAAFQAAAFgDAEQgDADgGAAQgFAAgDgDg");
	this.shape_116.setTransform(168.2,353.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("rgba(255,255,255,0.902)").s().p("AgZBQQgMgGgHgKIALgMQANAQATAAQAOAAAJgIQAIgJAAgPIAAgKQgMAOgVAAQgVAAgNgRQgNgRAAgdQAAgcANgRQANgQAWAAQAVAAAMAPIABgNIATAAIAAB1QAAAXgOAOQgOANgXAAQgMAAgNgFgAgVg3QgIAMAAAXQAAAUAIALQAJALAOAAQATAAAJgRIAAg3QgJgRgTAAQgOAAgJAMg");
	this.shape_117.setTransform(158.7,358.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("rgba(255,255,255,0.902)").s().p("AgmA0QgLgJAAgQQAAgTAPgKQAOgKAZAAIAUAAIAAgKQAAgKgGgHQgHgGgMAAQgKAAgIAFQgIAGABAIIgWAAQABgJAGgIQAHgJALgFQALgEAMAAQAUAAAMAKQANAKAAASIAAA3QgBARAFAJIAAACIgVAAQgCgDgCgJQgOAPgTAAQgSAAgMgLgAgcAYQAAAKAGAFQAHAFAKABQAIgBAKgFQAIgEAEgIIAAgZIgQAAQglAAAAAWg");
	this.shape_118.setTransform(146.3,356.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("rgba(255,255,255,0.902)").s().p("AgeBHIgBAOIgTAAIAAirIAVAAIAABAQAMgPAVAAQAWAAANAQQAMARAAAcIAAACQAAAbgMARQgNARgWAAQgWAAgMgQgAgdgBIAAAzQAJATAUAAQAOAAAIgLQAJgMAAgXQAAgVgJgKQgIgMgOAAQgUAAgJATg");
	this.shape_119.setTransform(133.9,353.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("rgba(255,255,255,0.902)").s().p("AgmA0QgLgJAAgQQAAgTAOgKQAPgKAZAAIAUAAIAAgKQAAgKgHgHQgGgGgMAAQgKAAgIAFQgIAGAAAIIgVAAQABgJAGgIQAHgJALgFQALgEALAAQAVAAAMAKQAMAKAAASIAAA3QAAARAFAJIAAACIgVAAQgDgDgBgJQgOAPgTAAQgSAAgMgLgAgcAYQAAAKAHAFQAGAFAKABQAIgBAKgFQAIgEAEgIIAAgZIgQAAQglAAAAAWg");
	this.shape_120.setTransform(121,356.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("rgba(255,255,255,0.902)").s().p("AgDBEQgHgJAAgPIAAhKIgWAAIAAgQIAWAAIAAgdIAUAAIAAAdIAWAAIAAAQIgWAAIAABKQAAAIADADQACADAIAAIAKgBIAAARQgJACgHAAQgOAAgGgIg");
	this.shape_121.setTransform(110.7,354.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("rgba(255,255,255,0.902)").s().p("AghBLQgPgKgIgRQgIgSgBgXIAAgLQAAgYAJgSQAIgSAPgJQAPgKASABQAUgBAOAKQAQAJAHASQAJASAAAYIAAAKQAAAYgJARQgHASgQAKQgOAIgTABQgTgBgPgIgAgfgwQgMAPAAAcIAAALQAAAcAMAQQALAQAVAAQAUAAALgPQAMgQAAgcIAAgLQAAgdgMgPQgLgQgVAAQgUAAgLAQg");
	this.shape_122.setTransform(93.7,354);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(194,155,1,0.902)").s().p("AgeANIAAgZIA9AAIAAAZg");
	this.shape_123.setTransform(75.6,355.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("rgba(194,155,1,0.902)").s().p("AgnBRIA+iHIhPAAIAAgaIBxAAIAAASIg9CPg");
	this.shape_124.setTransform(58.8,354);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#C29B01").ss(2,1,1).p("EgiKAiCQoarAAAufQAAxnMeseQMesfRoAAQRoAAMfMfQMeMeAARnQAAOfoZLA");
	this.shape_125.setTransform(283.4,228.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("rgba(234,187,1,0.008)").s().p("EgiKAiCQoarAAAufQAAxnMeseQMfsfRnAAQRpAAMeMfQMeMeAARnQAAOfoZLAg");
	this.shape_126.setTransform(283.4,228.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#C29B01").ss(2,1,1).p("EgkSAi4Qn/rGAAuYQAAyVM+s+QM+s+SVAAQSWAAM+M+QM9M+AASVQAAOYn+LG");
	this.shape_127.setTransform(283.4,223.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("rgba(234,187,1,0.008)").s().p("EgkRAi4QoArGAAuYQAByVM9s+QM+s+SVAAQSVAAM/M+QM9M+ABSVQAAOYn/LGg");
	this.shape_128.setTransform(283.4,223.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.popup7, new cjs.Rectangle(-1,-1,568.7,448.4), null);


(lib.popup6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btn_fechar.addEventListener("click", fechar.bind(this));
		function fechar(){
			createjs.Tween.get(this.parent.popup6)
			.to({y:700}, 1000, createjs.Ease.quartInOut);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn_fechar
	this.btn_fechar = new lib.btn_fechar();
	this.btn_fechar.name = "btn_fechar";
	this.btn_fechar.parent = this;
	this.btn_fechar.setTransform(283.4,30.3,1,1,0,0,0,18.7,19.4);
	new cjs.ButtonHelper(this.btn_fechar, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_fechar).wait(1));

	// txt
	this.instance = new lib.celulas();
	this.instance.parent = this;
	this.instance.setTransform(139.1,52.1,0.315,0.315);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.902)").s().p("AgGAHQgDgDAAgEQAAgDADgCQACgDAEAAQAEAAADADQADACAAADQAAAEgDADQgDACgEAAQgEAAgCgCg");
	this.shape.setTransform(444.8,438);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.902)").s().p("AggA0QgNgJAAgRIANAAQABAMAJAHQAJAGAOAAQAOABAJgHQAIgGAAgJQABgKgJgGQgHgGgRgDQgPgEgIgEQgKgEgEgGQgEgHAAgJQAAgOAMgKQALgIASgBQAVAAAMALQAMAJAAAQIgNAAQAAgKgJgHQgJgIgOABQgMAAgIAFQgIAHAAAJQAAAJAHAFQAHAFAQAEQARAEAKAEQAIAEAEAHQAFAGAAAKQAAAQgNAIQgMAJgUAAQgUAAgNgKg");
	this.shape_1.setTransform(436.4,432.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgIgHgNQgHgNAAgRIAAgFQAAgQAHgOQAHgOAMgJQAMgHANgBQAWAAANAPQANAPAAAbIAAAGIhVAAIAAADQAAAUALAOQAMANARAAQALAAAIgDQAIgFAHgIIAIAGQgOAWgcgBQgPABgMgIgAgWgnQgLALgCASIBIAAIAAgBQgBgSgJgKQgKgLgPAAQgOAAgKALg");
	this.shape_2.setTransform(424.8,432.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.902)").s().p("AgCBFQgGgHAAgRIAAhPIgWAAIAAgLIAWAAIAAgfIAMAAIAAAfIAaAAIAAALIgaAAIAABPQAAALAEAEQAEAFAIABIALgCIAAAMQgFABgJAAQgOAAgFgIg");
	this.shape_3.setTransform(414.9,431.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.902)").s().p("AAgA9IAAhOQAAgQgGgIQgIgIgOAAQgLAAgKAIQgJAIgGANIAABRIgMAAIAAh3IAMAAIAAAUQAIgLAJgGQALgFALgBQATAAAKAMQAKAKAAAWIAABOg");
	this.shape_4.setTransform(405.2,432.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.902)").s().p("AgkA1QgMgJAAgPQAAgSAPgLQAPgJAaAAIAXAAIAAgNQABgNgJgIQgHgIgPABQgOgBgJAIQgJAHAAAKIgNAAQAAgOANgLQAOgLASAAQAUAAAMALQAMAJAAATIAAA4QAAASADAIIAAABIgNAAQgDgFgBgMQgGAKgLAFQgLAFgLgBQgSAAgKgJgAgXAIQgLAHAAAMQAAAKAIAHQAHAHAMAAQAMAAAMgHQAKgGAEgLIAAgbIgXAAQgUAAgLAIg");
	this.shape_5.setTransform(392.6,432.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.902)").s().p("ABHA9IAAhOQAAgQgHgIQgHgIgPAAQgPAAgJAKQgKAIgCANIAABPIgMAAIAAhPQAAgPgHgIQgIgIgOAAQgNAAgJAHQgJAIgFAOIAABRIgNAAIAAh3IANAAIAAATQAHgKAKgGQAKgGAMAAQAdAAAHAYQAGgLALgHQALgFANgBQAnABABAqIAABPg");
	this.shape_6.setTransform(376.5,432.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.902)").s().p("AgiAyQgLgLAAgWIAAhNIAOAAIAABLQAAAjAbAAQAdAAAHgYIAAhWIAOAAIAAB3IgNAAIgBgPQgMARgZAAQgTAAgKgLg");
	this.shape_7.setTransform(360,432.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.902)").s().p("AgOBXIAAhtIgUAAIAAgLIAUAAIAAgOQAAgTAKgKQAIgKARAAQAIAAAGACIgBALQgFgBgHAAQgLAAgGAGQgGAIAAAMIAAAPIAcAAIAAALIgcAAIAABtg");
	this.shape_8.setTransform(350.4,430.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.902)").s().p("AgaAGIAAgLIA1AAIAAALg");
	this.shape_9.setTransform(342.8,431.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.902)").s().p("AgmAuQgPgRAAgcIAAgCQAAgRAHgOQAGgOANgIQANgIAOAAQAYAAAPARQAPARAAAcIAAACQAAARgHAOQgHAOgMAIQgMAIgQgBQgXAAgPgQgAgcgkQgMAOAAAWIAAACQAAAWAMAOQALAOARgBQATABAKgOQAMgOgBgXIAAgCQAAgNgEgMQgGgMgJgGQgJgHgMABQgRAAgLAOg");
	this.shape_10.setTransform(333.2,432.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.902)").s().p("AgkBLQgLgJAAgPQAAgSAOgKQAPgLAaAAIAYAAIAAgMQgBgNgHgIQgJgHgPAAQgMAAgKAHQgJAHAAAKIgOAAQABgOANgLQANgKATAAQAUAAAMAKQALAKABASIAAA4QAAASADAIIAAACIgNAAQgCgGgBgLQgIAJgKAFQgLAFgMAAQgRAAgKgKgAgXAeQgLAHAAANQAAAKAHAGQAIAHAMAAQANAAALgGQAKgHAFgLIAAgaIgYAAQgUAAgLAHgAgfg7QAAgKAGgHQAHgGAJAAQAGAAADABIAGAFIAHAEQAEACAEAAQAFAAAEgEQADgEABgGIAKABQgBALgGAGQgHAHgJAAQgIAAgIgHQgHgGgHAAQgFAAgDAEQgEADAAAGg");
	this.shape_11.setTransform(320.5,430.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.902)").s().p("AAgA9IAAhOQAAgQgHgIQgGgIgPAAQgMAAgJAIQgKAIgEANIAABRIgOAAIAAh3IANAAIABAUQAGgLALgGQAKgFALgBQATAAAKAMQAKAKAAAWIAABOg");
	this.shape_12.setTransform(308.3,432.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.902)").s().p("AggA0QgNgJAAgRIANAAQABAMAJAHQAJAGAOAAQAOABAJgHQAJgGgBgJQAAgKgHgGQgJgGgPgDQgQgEgJgEQgJgEgEgGQgEgHAAgJQAAgOAMgKQALgIATgBQATAAANALQAMAJAAAQIgOAAQAAgKgIgHQgJgIgNABQgNAAgHAFQgJAHAAAJQAAAJAHAFQAGAFARAEQARAEAJAEQAKAEADAHQAFAGAAAKQAAAQgMAIQgNAJgUAAQgUAAgNgKg");
	this.shape_13.setTransform(290.6,432.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.902)").s().p("AgmAuQgPgRAAgcIAAgCQAAgRAHgOQAHgOAMgIQAMgIAPAAQAYAAAPARQAPARAAAcIAAACQAAARgHAOQgGAOgNAIQgMAIgQgBQgXAAgPgQgAgcgkQgMAOAAAWIAAACQAAAWAMAOQALAOARgBQATABAKgOQALgOAAgXIAAgCQAAgNgEgMQgGgMgJgGQgJgHgMABQgRAAgLAOg");
	this.shape_14.setTransform(278.4,432.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgIgHgNQgHgNAAgRIAAgFQAAgQAHgOQAHgOAMgJQAMgHANgBQAWAAANAPQANAPAAAbIAAAGIhVAAIAAADQAAAUALAOQAMANARAAQALAAAIgDQAIgFAHgIIAIAGQgOAWgcgBQgPABgMgIgAgWgnQgLALgCASIBIAAIAAgBQgBgSgJgKQgKgLgPAAQgOAAgKALg");
	this.shape_15.setTransform(260.6,432.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.902)").s().p("AgiAyQgLgLAAgWIAAhNIAOAAIAABLQAAAjAbAAQAdAAAHgYIAAhWIAOAAIAAB3IgNAAIgBgPQgMARgZAAQgTAAgKgLg");
	this.shape_16.setTransform(248.3,432.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.902)").s().p("AAjBVIAAg+QgNARgXAAQgVAAgNgQQgNgRAAgcIAAgBQAAgdANgQQAMgRAWAAQAYAAAMATIABgRIANAAIAACngAgZg7QgJANAAAaQAAAWAJAOQAKANAPAAQAZAAAKgVIAAg6QgFgLgJgGQgJgGgLAAQgQAAgKAOg");
	this.shape_17.setTransform(235.3,435);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.902)").s().p("AgmAuQgPgRAAgcIAAgCQAAgRAHgOQAGgOANgIQANgIAOAAQAYAAAPARQAPARAAAcIAAACQAAARgGAOQgIAOgMAIQgMAIgQgBQgXAAgPgQgAgcgkQgLAOAAAWIAAACQAAAWALAOQALAOARgBQASABAMgOQAKgOABgXIAAgCQAAgNgGgMQgEgMgKgGQgJgHgMABQgRAAgLAOg");
	this.shape_18.setTransform(217.3,432.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.902)").s().p("AgjBGQgNgRAAgcIAAgCQAAgbANgRQAMgQAWAAQAYAAAMATIAAhEIAOAAIAACrIgNAAIAAgQQgNASgYAAQgVAAgNgRgAgZgMQgJAMAAAaQAAAXAJANQAJANAQAAQAZAAAKgVIAAg4QgKgYgZAAQgPAAgKAOg");
	this.shape_19.setTransform(204.2,430.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgIgHgNQgHgNAAgRIAAgFQAAgQAHgOQAHgOAMgJQAMgHANgBQAWAAANAPQANAPAAAbIAAAGIhVAAIAAADQAAAUALAOQAMANARAAQALAAAIgDQAIgFAHgIIAIAGQgOAWgcgBQgPABgMgIgAgWgnQgLALgCASIBIAAIAAgBQgBgSgJgKQgKgLgPAAQgOAAgKALg");
	this.shape_20.setTransform(186.7,432.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.902)").s().p("AgiAyQgLgLAAgWIAAhNIAOAAIAABLQAAAjAbAAQAdAAAHgYIAAhWIAOAAIAAB3IgNAAIgBgPQgMARgZAAQgTAAgKgLg");
	this.shape_21.setTransform(174.4,432.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.902)").s().p("AgXBQQgLgGgHgJIAIgIQAOARATAAQAQABAKgLQAJgKAAgRIAAgPQgNARgXAAQgVAAgNgQQgNgRAAgcIAAgBQAAgcANgRQAMgQAWgBQAYABANATIAAgRIANAAIAAB1QAAAXgNAOQgNANgXAAQgLABgMgGgAgZg8QgJAOAAAaQAAAVAJAOQAJANAQAAQAZAAAKgWIAAg3QgEgMgJgGQgJgGgNAAQgPAAgKANg");
	this.shape_22.setTransform(161.5,435.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.902)").s().p("AAgA9IAAhOQAAgQgGgIQgIgIgOAAQgLAAgKAIQgJAIgGANIAABRIgMAAIAAh3IAMAAIAAAUQAIgLAJgGQALgFALgBQAUAAAJAMQAKAKAAAWIAABOg");
	this.shape_23.setTransform(149.2,432.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.902)").s().p("AgkA1QgMgJAAgPQAAgSAPgLQAPgJAaAAIAXAAIAAgNQABgNgJgIQgHgIgPABQgOgBgJAIQgJAHAAAKIgNAAQAAgOANgLQAOgLASAAQAUAAAMALQAMAJAAATIAAA4QAAASADAIIAAABIgNAAQgDgFgBgMQgGAKgLAFQgLAFgLgBQgSAAgKgJgAgXAIQgLAHAAAMQAAAKAIAHQAHAHAMAAQAMAAAMgHQAKgGAEgLIAAgbIgXAAQgUAAgLAIg");
	this.shape_24.setTransform(136.6,432.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.902)").s().p("AggA0QgNgJAAgRIANAAQABAMAJAHQAJAGAOAAQAOABAJgHQAJgGAAgJQgBgKgHgGQgJgGgQgDQgPgEgJgEQgIgEgFgGQgEgHAAgJQAAgOAMgKQAMgIARgBQAVAAAMALQAMAJAAAQIgNAAQAAgKgJgHQgJgIgOABQgMAAgHAFQgJAHAAAJQAAAJAHAFQAHAFAQAEQASAEAIAEQAJAEAFAHQAEAGAAAKQAAAQgMAIQgNAJgUAAQgUAAgNgKg");
	this.shape_25.setTransform(124.8,432.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.902)").s().p("AgmAuQgPgRAAgcIAAgCQAAgRAHgOQAHgOAMgIQAMgHAPgBQAYABAPARQAPAQAAAcIAAACQAAASgHAOQgGANgNAIQgMAHgQABQgXAAgPgRgAgcgkQgLAOAAAWIAAACQAAAVALAOQALAPARAAQATAAAKgPQAMgOAAgWIAAgCQgBgOgFgLQgEgLgKgHQgJgGgMgBQgRAAgLAPg");
	this.shape_26.setTransform(475.8,407.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.902)").s().p("AAhA+IAAhPQgBgQgGgIQgIgIgOAAQgMAAgJAIQgJAHgGANIAABTIgNAAIAAh5IANAAIAAAVQAIgLAJgFQALgHALAAQAUAAAJALQAJALAAAWIAABPg");
	this.shape_27.setTransform(463.1,407.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.902)").s().p("AggA1QgNgLAAgPIANAAQABAMAJAGQAJAHAOAAQAOgBAJgFQAJgHAAgJQgBgKgHgGQgJgHgQgDQgPgDgJgDQgIgFgFgHQgEgGAAgIQAAgPAMgJQAMgKARAAQAUAAANAKQAMALAAAPIgOAAQABgKgJgHQgJgIgOAAQgMAAgHAHQgJAFAAAKQAAAJAHAFQAGAFARAEQARAEAJAEQAJAEAFAHQAEAGAAAKQAAAPgMAKQgNAJgUAAQgUAAgNgKg");
	this.shape_28.setTransform(445.5,407.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgIgHgNQgHgNAAgSIAAgDQAAgSAHgOQAHgOAMgHQAMgJANAAQAWABANAPQANAOAAAaIAAAHIhVAAIAAACQAAAVALAOQAMAOARAAQALAAAIgFQAIgDAHgJIAIAHQgOAUgcABQgPgBgMgHgAgWgnQgLALgCATIBIAAIAAgCQgBgRgJgMQgKgKgPgBQgOAAgKAMg");
	this.shape_29.setTransform(433.8,407.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.902)").s().p("AgCBGQgGgJAAgPIAAhQIgWAAIAAgLIAWAAIAAgfIAMAAIAAAfIAaAAIAAALIgaAAIAABQQAAAKAEAFQAEAEAIAAIALgBIAAALQgFACgJAAQgOAAgFgHg");
	this.shape_30.setTransform(423.9,405.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.902)").s().p("AAgA+IAAhPQAAgQgGgIQgIgIgOAAQgLAAgKAIQgJAHgGANIAABTIgMAAIAAh5IAMAAIAAAVQAIgLAJgFQALgHALAAQATAAAKALQAKALAAAWIAABPg");
	this.shape_31.setTransform(414.2,407.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0.902)").s().p("AgkA1QgMgJAAgQQAAgRAPgKQAPgKAaAAIAXAAIAAgOQABgNgJgHQgHgIgPAAQgOAAgJAIQgJAHAAAKIgNAAQAAgPANgKQAOgLASAAQAUAAAMAKQAMALAAARIAAA5QAAARADAJIAAACIgNAAQgDgGgBgLQgGAJgLAFQgLAEgLABQgSAAgKgKgAgXAIQgLAHAAAMQAAALAIAGQAHAHAMAAQAMAAAMgGQAKgHAEgLIAAgaIgXAAQgUAAgLAHg");
	this.shape_32.setTransform(401.6,407.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,255,255,0.902)").s().p("AgjBGQgNgRAAgcIAAgCQAAgbANgRQAMgQAWAAQAYAAAMATIAAhEIAOAAIAACrIgNAAIAAgQQgNASgYAAQgVAAgNgRgAgZgMQgJAMAAAaQAAAXAJANQAJANAQAAQAZAAAKgVIAAg4QgKgYgZAAQgPAAgKAOg");
	this.shape_33.setTransform(389,404.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,255,255,0.902)").s().p("AgGBTIAAh5IANAAIAAB5gAgGhCQgCgDAAgEQAAgDACgDQADgDADAAQAEAAADADQACADAAADQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_34.setTransform(380.4,405);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,255,255,0.902)").s().p("AAjA9Igjg0IgiA0IgPAAIAqg9Igog8IAPAAIAgAyIAhgyIAPAAIgoA8IAqA9g");
	this.shape_35.setTransform(372.2,407.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(255,255,255,0.902)").s().p("AgmAuQgPgRAAgcIAAgCQAAgRAHgOQAGgOANgIQANgHAOgBQAYABAPARQAPAQAAAcIAAACQAAASgGAOQgIANgMAIQgMAHgQABQgXAAgPgRgAgcgkQgLAOAAAWIAAACQAAAVALAOQALAPARAAQASAAAMgPQAKgOABgWIAAgCQAAgOgGgLQgEgLgKgHQgJgGgMgBQgRAAgLAPg");
	this.shape_36.setTransform(360.3,407.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0.902)").s().p("AgGBTIAAh5IANAAIAAB5gAgGhCQgCgDAAgEQAAgDACgDQADgDADAAQAEAAADADQACADAAADQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_37.setTransform(351.3,405);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(255,255,255,0.902)").s().p("AgCBGQgGgJAAgPIAAhQIgWAAIAAgLIAWAAIAAgfIAMAAIAAAfIAZAAIAAALIgZAAIAABQQAAAKAEAFQAEAEAIAAIALgBIABALQgGACgJAAQgNAAgGgHg");
	this.shape_38.setTransform(344.8,405.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,255,255,0.902)").s().p("AAhA+IAAhPQgBgQgHgIQgGgIgPAAQgMAAgJAIQgKAHgEANIAABTIgOAAIAAh5IANAAIABAVQAGgLALgFQAKgHALAAQATAAAKALQAJALAAAWIAABPg");
	this.shape_39.setTransform(335.1,407.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(255,255,255,0.902)").s().p("AglA1QgLgJABgQQgBgRAQgKQAOgKAZAAIAZAAIAAgOQgBgNgHgHQgJgIgPAAQgNAAgJAIQgJAHAAAKIgOAAQAAgPAOgKQANgLATAAQAUAAAMAKQAMALAAARIAAA5QAAARAEAJIAAACIgPAAQgBgGgBgLQgIAJgKAFQgLAEgMABQgRAAgLgKgAgWAIQgMAHAAAMQAAALAHAGQAIAHAMAAQAMAAALgGQALgHAFgLIAAgaIgZAAQgTAAgKAHg");
	this.shape_40.setTransform(322.5,407.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgIgHgNQgHgNAAgSIAAgDQAAgSAHgOQAHgOAMgHQAMgJANAAQAWABANAPQANAOAAAaIAAAHIhVAAIAAACQAAAVALAOQAMAOARAAQALAAAIgFQAIgDAHgJIAIAHQgOAUgcABQgPgBgMgHgAgWgnQgLALgCATIBIAAIAAgCQgBgRgJgMQgKgKgPgBQgOAAgKAMg");
	this.shape_41.setTransform(305.1,407.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(255,255,255,0.902)").s().p("AgjBGQgNgRAAgcIAAgCQAAgbANgRQAMgQAWAAQAYAAAMATIAAhEIAOAAIAACrIgNAAIAAgQQgNASgYAAQgVAAgNgRgAgZgMQgJAMAAAaQAAAXAJANQAJANAQAAQAZAAAKgVIAAg4QgKgYgZAAQgPAAgKAOg");
	this.shape_42.setTransform(292.4,404.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(255,255,255,0.902)").s().p("AggA1QgNgLAAgPIANAAQABAMAJAGQAJAHAOAAQAOgBAJgFQAJgHAAgJQgBgKgHgGQgJgHgQgDQgPgDgJgDQgIgFgFgHQgEgGAAgIQAAgPAMgJQAMgKARAAQAVAAAMAKQAMALAAAPIgNAAQAAgKgJgHQgJgIgOAAQgMAAgHAHQgJAFAAAKQAAAJAHAFQAGAFARAEQASAEAIAEQAJAEAFAHQAEAGAAAKQAAAPgMAKQgNAJgUAAQgUAAgNgKg");
	this.shape_43.setTransform(275,407.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(255,255,255,0.902)").s().p("AgGBTIAAh5IANAAIAAB5gAgGhCQgCgDAAgEQAAgDACgDQADgDADAAQAEAAADADQACADAAADQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_44.setTransform(266.7,405);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgIgHgNQgHgNAAgSIAAgDQAAgSAHgOQAHgOAMgHQAMgJANAAQAWABANAPQANAOAAAaIAAAHIhVAAIAAACQAAAVALAOQAMAOARAAQALAAAIgFQAIgDAHgJIAIAHQgOAUgcABQgPgBgMgHgAgWgnQgLALgCATIBIAAIAAgCQgBgRgJgMQgKgKgPgBQgOAAgKAMg");
	this.shape_45.setTransform(258.3,407.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(255,255,255,0.902)").s().p("AgEA9Iguh5IAOAAIAkBmIAlhmIAOAAIgtB5g");
	this.shape_46.setTransform(246.8,407.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(255,255,255,0.902)").s().p("AgRBVIAAh4IANAAIAAB4gAgSg1IAUgfIARAAIgZAfg");
	this.shape_47.setTransform(239.9,404.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(255,255,255,0.902)").s().p("AAgA+IAAhPQAAgQgHgIQgGgIgPAAQgLAAgKAIQgKAHgEANIAABTIgOAAIAAh5IANAAIABAVQAGgLALgFQAKgHALAAQATAAAKALQAKALAAAWIAABPg");
	this.shape_48.setTransform(230,407.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(255,255,255,0.902)").s().p("AggA1QgNgLAAgPIANAAQABAMAJAGQAJAHAOAAQAOgBAJgFQAIgHABgJQAAgKgJgGQgHgHgRgDQgPgDgIgDQgKgFgEgHQgEgGAAgIQAAgPAMgJQALgKASAAQAVAAAMAKQAMALAAAPIgNAAQAAgKgJgHQgJgIgOAAQgMAAgIAHQgIAFAAAKQAAAJAHAFQAHAFAQAEQARAEAKAEQAIAEAEAHQAFAGAAAKQAAAPgNAKQgMAJgUAAQgUAAgNgKg");
	this.shape_49.setTransform(212.3,407.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgIgHgNQgHgNAAgSIAAgDQAAgSAHgOQAHgOAMgHQAMgJANAAQAWABANAPQANAOAAAaIAAAHIhVAAIAAACQAAAVALAOQAMAOARAAQALAAAIgFQAIgDAHgJIAIAHQgOAUgcABQgPgBgMgHgAgWgnQgLALgCATIBIAAIAAgCQgBgRgJgMQgKgKgPgBQgOAAgKAMg");
	this.shape_50.setTransform(200.7,407.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(255,255,255,0.902)").s().p("AgbA+IAAh5IANAAIAAAUQALgWAXAAQAFABADABIAAAMIgJgBQgNAAgIAHQgIAHgEANIAABTg");
	this.shape_51.setTransform(191.6,407.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(255,255,255,0.902)").s().p("AgmAuQgPgRAAgcIAAgCQAAgRAHgOQAHgOAMgIQAMgHAPgBQAYABAPARQAPAQAAAcIAAACQAAASgHAOQgGANgNAIQgMAHgQABQgXAAgPgRgAgcgkQgLAOAAAWIAAACQAAAVALAOQALAPARAAQATAAAKgPQAMgOAAgWIAAgCQgBgOgFgLQgEgLgKgHQgJgGgMgBQgRAAgLAPg");
	this.shape_52.setTransform(180.6,407.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(255,255,255,0.902)").s().p("AAhA+IAAhPQgBgQgGgIQgIgIgOAAQgMAAgJAIQgJAHgGANIAABTIgNAAIAAh5IANAAIAAAVQAIgLAJgFQALgHALAAQAUAAAJALQAJALAAAWIAABPg");
	this.shape_53.setTransform(167.9,407.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgIgHgNQgHgNAAgSIAAgDQAAgSAHgOQAHgOAMgHQAMgJANAAQAWABANAPQANAOAAAaIAAAHIhVAAIAAACQAAAVALAOQAMAOARAAQALAAAIgFQAIgDAHgJIAIAHQgOAUgcABQgPgBgMgHgAgWgnQgLALgCATIBIAAIAAgCQgBgRgJgMQgKgKgPgBQgOAAgKAMg");
	this.shape_54.setTransform(155.8,407.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(255,255,255,0.902)").s().p("ABHA+IAAhPQAAgRgHgHQgHgIgPAAQgPAAgJAJQgKAKgCANIAABPIgMAAIAAhQQAAgPgHgJQgIgHgOAAQgNAAgJAHQgJAHgFAOIAABTIgNAAIAAh5IANAAIAAAUQAHgKAKgGQAKgFAMgBQAdAAAHAYQAGgMALgFQALgHANAAQAnAAABArIAABQg");
	this.shape_55.setTransform(139.7,407.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(255,255,255,0.902)").s().p("ABHA+IAAhPQAAgRgHgHQgHgIgPAAQgPAAgJAJQgKAKgCANIAABPIgMAAIAAhQQAAgPgHgJQgIgHgOAAQgNAAgJAHQgJAHgFAOIAABTIgNAAIAAh5IANAAIAAAUQAHgKAKgGQAKgFAMgBQAdAAAHAYQAGgMALgFQALgHANAAQAnAAABArIAABQg");
	this.shape_56.setTransform(113.8,407.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(255,255,255,0.902)").s().p("AgWBPQgNgIgHgNQgHgOAAgRIAAgFQAAgRAHgNQAHgOAMgIQAMgIANAAQAWAAANAPQANAPAAAZIAAAIIhVAAIAAACQAAAVALAOQAMANARAAQALAAAIgEQAIgEAHgIIAIAGQgOAVgcAAQgPAAgMgHgAgWgPQgLALgCARIBIAAIAAgBQgBgRgJgLQgKgLgPAAQgOAAgKAMgAAWg3IgSgVIgSAVIgMAAIAAgCIAagcIAIAAIAbAdIAAABg");
	this.shape_57.setTransform(97.8,404.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(255,255,255,0.902)").s().p("AgCBGQgGgJAAgPIAAhQIgWAAIAAgLIAWAAIAAgfIAMAAIAAAfIAZAAIAAALIgZAAIAABQQAAAKAEAFQADAEAJAAIALgBIABALQgGACgJAAQgNAAgGgHg");
	this.shape_58.setTransform(87.9,405.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(255,255,255,0.902)").s().p("AggA1QgNgLAAgQIANAAQABAMAJAHQAJAGAOABQAOAAAJgHQAIgGAAgJQABgKgJgGQgHgGgQgDQgQgEgIgDQgKgFgEgHQgEgGAAgIQAAgPAMgKQALgJATAAQATAAANAKQAMALAAAPIgNAAQgBgKgIgHQgJgIgNAAQgNABgIAGQgIAGAAAJQAAAJAHAFQAGAFARAEQARAEAKAEQAIAFAEAGQAFAGAAAKQAAAPgNAKQgMAJgUgBQgUABgNgKg");
	this.shape_59.setTransform(505.8,381.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgIgHgNQgHgNAAgSIAAgDQAAgSAHgOQAHgNAMgJQAMgIANAAQAWABANAPQANAOAAAaIAAAHIhVAAIAAACQAAAVALAOQAMAOARAAQALAAAIgFQAIgDAHgJIAIAHQgOAUgcAAQgPAAgMgHgAgWgnQgLALgCATIBIAAIAAgCQgBgSgJgKQgKgMgPAAQgOAAgKAMg");
	this.shape_60.setTransform(494.2,381.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(255,255,255,0.902)").s().p("AgCBGQgGgJAAgPIAAhQIgXAAIAAgLIAXAAIAAgfIAMAAIAAAfIAaAAIAAALIgaAAIAABQQAAAKAEAFQAEAEAIAAIALgBIAAALQgFACgJAAQgOAAgFgHg");
	this.shape_61.setTransform(484.3,380.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(255,255,255,0.902)").s().p("AAgA+IAAhPQAAgQgGgIQgIgIgOAAQgLAAgKAIQgJAHgGAOIAABSIgMAAIAAh5IAMAAIAAAVQAHgLAKgFQALgHALAAQAUABAJAKQAKALAAAWIAABPg");
	this.shape_62.setTransform(474.6,381.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(255,255,255,0.902)").s().p("AgkA1QgMgJAAgQQAAgRAPgLQAPgJAaAAIAXAAIAAgOQAAgNgIgHQgHgIgPAAQgOAAgJAIQgJAHAAAKIgNAAQAAgPANgKQAOgLASAAQAUAAAMAKQALALABARIAAA5QAAASADAIIAAACIgNAAQgCgGgCgLQgGAJgLAFQgLAEgLAAQgSAAgKgJgAgXAIQgLAHAAAMQAAALAIAGQAHAHAMAAQAMAAAMgGQAKgHAEgLIAAgbIgXAAQgUABgLAHg");
	this.shape_63.setTransform(462,381.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(255,255,255,0.902)").s().p("ABHA+IAAhPQAAgRgHgHQgHgIgPAAQgPAAgJAJQgKAKgCANIAABPIgMAAIAAhQQAAgPgHgJQgIgHgOAAQgNAAgJAHQgJAHgFAPIAABSIgNAAIAAh5IANAAIAAAUQAHgKAKgGQAKgFAMgBQAdAAAHAYQAGgMALgFQALgHANAAQAnAAABArIAABQg");
	this.shape_64.setTransform(445.9,381.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(255,255,255,0.902)").s().p("AgiAzQgLgLAAgXIAAhOIAOAAIAABNQAAAiAbAAQAdAAAHgYIAAhXIAOAAIAAB5IgNAAIgBgQQgMASgZgBQgTABgKgLg");
	this.shape_65.setTransform(429.4,381.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(255,255,255,0.902)").s().p("AgOBXIAAhtIgUAAIAAgLIAUAAIAAgPQAAgSAKgKQAIgKARAAQAHAAAHACIgBALQgGgBgGgBQgLAAgGAHQgGAIAAAMIAAAPIAcAAIAAALIgcAAIAABtg");
	this.shape_66.setTransform(419.8,379);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(255,255,255,0.902)").s().p("AggA1QgNgLAAgQIANAAQABAMAJAHQAJAGAOABQAOAAAJgHQAIgGAAgJQABgKgJgGQgHgGgQgDQgQgEgIgDQgKgFgEgHQgEgGAAgIQAAgPAMgKQALgJATAAQATAAANAKQAMALAAAPIgOAAQAAgKgIgHQgJgIgNAAQgNABgIAGQgIAGAAAJQAAAJAHAFQAGAFARAEQASAEAJAEQAIAFAEAGQAFAGAAAKQAAAPgNAKQgMAJgUgBQgUABgNgKg");
	this.shape_67.setTransform(404.2,381.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(255,255,255,0.902)").s().p("AgtBAQgRgVAAgiIAAgQQAAgXAHgRQAIgRAPgJQAOgKASAAQASABAPAIQAPAKAHAQQAIAQABAXIAAASQgBAXgHAQQgIARgPAKQgOAJgTgBQgcAAgRgTgAgjg1QgOAQAAAeIAAAQQAAAdAOARQANARAWAAQAYAAANgRQANgRgBgdIAAgQQABgegNgQQgOgSgXABQgWgBgNASg");
	this.shape_68.setTransform(390.7,379.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(255,255,255,0.902)").s().p("AgGAHQgDgDAAgEQAAgDADgCQACgDAEAAQAEAAADADQADACAAADQAAAEgDADQgDACgEAAQgEAAgCgCg");
	this.shape_69.setTransform(374.5,386.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(255,255,255,0.902)").s().p("AggA1QgNgLAAgQIANAAQABAMAJAHQAJAGAOABQAOAAAJgHQAJgGgBgJQAAgKgHgGQgJgGgPgDQgQgEgJgDQgJgFgEgHQgEgGAAgIQAAgPAMgKQALgJATAAQATAAANAKQAMALAAAPIgOAAQABgKgJgHQgJgIgNAAQgNABgHAGQgJAGAAAJQAAAJAHAFQAGAFARAEQARAEAKAEQAJAFADAGQAFAGAAAKQAAAPgMAKQgNAJgUgBQgUABgNgKg");
	this.shape_70.setTransform(366.2,381.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(255,255,255,0.902)").s().p("AgkA1QgLgJAAgQQAAgRAOgLQAPgJAaAAIAXAAIAAgOQAAgNgHgHQgJgIgPAAQgMAAgKAIQgJAHAAAKIgNAAQAAgPANgKQANgLATAAQAUAAAMAKQALALABARIAAA5QAAASADAIIAAACIgNAAQgCgGgCgLQgGAJgLAFQgLAEgLAAQgSAAgKgJgAgXAIQgLAHAAAMQAAALAIAGQAHAHAMAAQANAAALgGQAKgHAEgLIAAgbIgXAAQgUABgLAHg");
	this.shape_71.setTransform(354.1,381.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(255,255,255,0.902)").s().p("AgjBGQgNgRAAgcIAAgCQAAgbANgRQAMgQAWAAQAYAAAMATIAAhEIAOAAIAACrIgNAAIAAgQQgNASgYAAQgVAAgNgRgAgZgMQgJAMAAAaQAAAXAJANQAJANAQAAQAZAAAKgVIAAg4QgKgYgZAAQgPAAgKAOg");
	this.shape_72.setTransform(341.5,379.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(255,255,255,0.902)").s().p("AgkA1QgMgJABgQQgBgRAPgLQAPgJAaAAIAYAAIAAgOQgBgNgHgHQgJgIgPAAQgMAAgKAIQgJAHAAAKIgOAAQAAgPAOgKQANgLATAAQAUAAAMAKQAMALAAARIAAA5QAAASAEAIIAAACIgPAAQgBgGgBgLQgIAJgKAFQgLAEgMAAQgRAAgKgJgAgWAIQgMAHAAAMQAAALAHAGQAIAHAMAAQAMAAALgGQALgHAFgLIAAgbIgYAAQgUABgKAHg");
	this.shape_73.setTransform(329.1,381.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(255,255,255,0.902)").s().p("AgiAuQgOgRAAgcIAAgCQAAgSAHgOQAFgNANgIQALgHAPgBQATAAANAMQANAMABAUIgMAAQgCgPgJgJQgKgIgNgBQgSAAgJAOQgKANAAAYIAAACQAAAXAKANQAJANASABQANgBAKgHQAJgJACgMIAMAAQgBALgGAKQgGAJgLAEQgLAGgLgBQgXAAgOgQg");
	this.shape_74.setTransform(317.3,381.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(255,255,255,0.902)").s().p("AgGBTIAAh5IANAAIAAB5gAgGhCQgCgDAAgEQAAgDACgDQADgDADAAQAEAAADADQACADAAADQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_75.setTransform(308.8,379.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(255,255,255,0.902)").s().p("AgOBXIAAhtIgUAAIAAgLIAUAAIAAgPQAAgSAJgKQAJgKARAAQAHAAAHACIgBALQgGgBgGgBQgLAAgHAHQgEAIAAAMIAAAPIAbAAIAAALIgbAAIAABtg");
	this.shape_76.setTransform(302.8,379);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(255,255,255,0.902)").s().p("AgGBTIAAh5IANAAIAAB5gAgGhCQgCgDAAgEQAAgDACgDQADgDADAAQAEAAADADQACADAAADQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_77.setTransform(296,379.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(255,255,255,0.902)").s().p("AAgA+IAAhPQAAgQgHgIQgGgIgPAAQgLAAgKAIQgKAHgFAOIAABSIgMAAIAAh5IAMAAIAAAVQAHgLALgFQAKgHALAAQATABAKAKQAKALAAAWIAABPg");
	this.shape_78.setTransform(287.2,381.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(255,255,255,0.902)").s().p("AgkA1QgLgJAAgQQAAgRAOgLQAPgJAaAAIAYAAIAAgOQgBgNgHgHQgJgIgPAAQgMAAgKAIQgJAHAAAKIgNAAQgBgPAOgKQANgLATAAQAUAAAMAKQAMALAAARIAAA5QAAASADAIIAAACIgNAAQgCgGgBgLQgIAJgKAFQgLAEgLAAQgSAAgKgJgAgXAIQgLAHAAAMQAAALAHAGQAIAHAMAAQANAAALgGQAKgHAFgLIAAgbIgYAAQgUABgLAHg");
	this.shape_79.setTransform(274.6,381.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(255,255,255,0.902)").s().p("AgjBGQgNgRAAgcIAAgCQAAgbANgRQAMgQAWAAQAYAAAMATIAAhEIAOAAIAACrIgNAAIAAgQQgNASgYAAQgVAAgNgRgAgZgMQgJAMAAAaQAAAXAJANQAJANAQAAQAZAAAKgVIAAg4QgKgYgZAAQgPAAgKAOg");
	this.shape_80.setTransform(262,379.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(255,255,255,0.902)").s().p("AggA1QgNgLAAgQIANAAQABAMAJAHQAJAGAOABQAOAAAJgHQAJgGAAgJQgBgKgHgGQgJgGgQgDQgPgEgJgDQgIgFgFgHQgEgGAAgIQAAgPAMgKQAMgJARAAQAVAAAMAKQAMALAAAPIgNAAQAAgKgJgHQgJgIgOAAQgMABgHAGQgJAGAAAJQAAAJAHAFQAHAFAQAEQASAEAIAEQAJAFAFAGQAEAGAAAKQAAAPgMAKQgNAJgUgBQgUABgNgKg");
	this.shape_81.setTransform(244.5,381.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(255,255,255,0.902)").s().p("AglA1QgLgJABgQQgBgRAQgLQAOgJAZAAIAZAAIAAgOQgBgNgHgHQgJgIgPAAQgNAAgJAIQgJAHAAAKIgOAAQAAgPAOgKQANgLATAAQAUAAAMAKQAMALAAARIAAA5QAAASAEAIIAAACIgPAAQgBgGgBgLQgIAJgKAFQgLAEgMAAQgRAAgLgJgAgWAIQgMAHAAAMQAAALAHAGQAIAHAMAAQAMAAALgGQALgHAFgLIAAgbIgZAAQgTABgKAHg");
	this.shape_82.setTransform(232.5,381.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(255,255,255,0.902)").s().p("AgGBWIAAirIANAAIAACrg");
	this.shape_83.setTransform(223.9,379.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(255,255,255,0.902)").s().p("AgiAzQgLgLAAgXIAAhOIAOAAIAABNQAAAiAbAAQAdAAAHgYIAAhXIAOAAIAAB5IgNAAIgBgQQgMASgZgBQgTABgKgLg");
	this.shape_84.setTransform(215.1,381.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(255,255,255,0.902)").s().p("AgGBWIAAirIANAAIAACrg");
	this.shape_85.setTransform(206.2,379.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(255,255,255,0.902)").s().p("AgWBPQgNgHgHgOQgHgNAAgRIAAgFQAAgRAHgNQAHgOAMgIQAMgIANAAQAWAAANAPQANAPAAAZIAAAHIhVAAIAAADQAAAUALAOQAMAOARAAQALAAAIgEQAIgEAHgJIAIAHQgOAVgcAAQgPAAgMgIgAgWgPQgLALgCASIBIAAIAAgCQgBgQgJgLQgKgLgPAAQgOAAgKALgAgDg3IAUgfIAQAAIgaAfg");
	this.shape_86.setTransform(197.8,379.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(255,255,255,0.902)").s().p("AgiAuQgOgRAAgcIAAgCQAAgSAGgOQAHgNALgIQAMgHAOgBQAVAAAMAMQANAMABAUIgNAAQgBgPgJgJQgKgIgOgBQgQAAgLAOQgJANgBAYIAAACQABAXAJANQALANAQABQAOgBAKgHQAJgJABgMIANAAQAAALgHAKQgGAJgKAEQgMAGgMgBQgWAAgOgQg");
	this.shape_87.setTransform(186,381.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(255,255,255,0.902)").s().p("AggA1QgNgLAAgQIANAAQABAMAJAHQAJAGAOABQAOAAAJgHQAIgGAAgJQABgKgJgGQgHgGgRgDQgPgEgIgDQgKgFgEgHQgEgGAAgIQAAgPAMgKQALgJASAAQAVAAAMAKQAMALAAAPIgNAAQAAgKgJgHQgJgIgOAAQgMABgIAGQgIAGAAAJQAAAJAHAFQAHAFAQAEQARAEAKAEQAIAFAFAGQAEAGAAAKQAAAPgNAKQgMAJgUgBQgUABgNgKg");
	this.shape_88.setTransform(168.7,381.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(255,255,255,0.902)").s().p("AglA1QgKgJgBgQQABgRAPgLQAOgJAZAAIAZAAIAAgOQAAgNgJgHQgHgIgPAAQgNAAgKAIQgJAHAAAKIgOAAQAAgPAOgKQAOgLASAAQAUAAAMAKQAMALAAARIAAA5QAAASAEAIIAAACIgPAAQgCgGAAgLQgIAJgKAFQgLAEgMAAQgRAAgLgJgAgWAIQgMAHAAAMQAAALAHAGQAIAHAMAAQANAAAKgGQALgHAFgLIAAgbIgZAAQgSABgLAHg");
	this.shape_89.setTransform(156.6,381.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(255,255,255,0.902)").s().p("AgbA+IAAh5IANAAIAAAUQALgWAWAAQAGABADABIAAAMIgJgBQgNAAgHAHQgJAHgEAOIAABSg");
	this.shape_90.setTransform(141.9,381.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(255,255,255,0.902)").s().p("AglA1QgKgJgBgQQABgRAPgLQAOgJAZAAIAYAAIAAgOQABgNgJgHQgHgIgPAAQgOAAgJAIQgJAHAAAKIgNAAQAAgPANgKQAOgLASAAQAUAAAMAKQAMALAAARIAAA5QAAASADAIIAAACIgOAAQgCgGgBgLQgHAJgKAFQgLAEgLAAQgSAAgLgJgAgXAIQgLAHAAAMQAAALAIAGQAHAHAMAAQANAAAKgGQALgHAEgLIAAgbIgYAAQgSABgMAHg");
	this.shape_91.setTransform(131.1,381.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(255,255,255,0.902)").s().p("AgbA+IAAh5IANAAIAAAUQALgWAXAAQAFABADABIAAAMIgJgBQgNAAgIAHQgIAHgEAOIAABSg");
	this.shape_92.setTransform(122,381.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(255,255,255,0.902)").s().p("AgkA1QgLgJAAgQQAAgRAOgLQAPgJAaAAIAXAAIAAgOQAAgNgHgHQgJgIgOAAQgNAAgKAIQgJAHAAAKIgNAAQAAgPANgKQANgLATAAQAUAAAMAKQALALABARIAAA5QAAASADAIIAAACIgNAAQgCgGgCgLQgGAJgLAFQgLAEgLAAQgSAAgKgJgAgXAIQgLAHAAAMQAAALAIAGQAHAHAMAAQANAAALgGQAKgHAEgLIAAgbIgXAAQgUABgLAHg");
	this.shape_93.setTransform(111.1,381.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(255,255,255,0.902)").s().p("AgvBVIAAinIAMAAIAAARQANgTAYAAQAWAAAMARQAMAQAAAdIAAACQAAAbgMARQgMAQgWAAQgXAAgOgRIAAA+gAgVhCQgJAGgFALIAAA5QAFAKAKAGQAIAFAMAAQARAAAJgNQAJgOAAgYQAAgXgJgOQgJgNgRAAQgMAAgJAGg");
	this.shape_94.setTransform(99.1,383.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgIgHgNQgHgNAAgSIAAgDQAAgSAHgOQAHgNAMgJQAMgIANAAQAWABANAPQANAOAAAaIAAAHIhVAAIAAACQAAAVALAOQAMAOARAAQALAAAIgFQAIgDAHgJIAIAHQgOAUgcAAQgPAAgMgHgAgWgnQgLALgCATIBIAAIAAgCQgBgSgJgKQgKgMgPAAQgOAAgKAMg");
	this.shape_95.setTransform(86.6,381.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(255,255,255,0.902)").s().p("AgbA+IAAh5IANAAIAAAUQALgWAXAAQAFABADABIAAAMIgJgBQgNAAgIAHQgIAHgEAOIAABSg");
	this.shape_96.setTransform(77.5,381.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(255,255,255,0.902)").s().p("AgkA1QgMgJAAgQQAAgRAPgLQAPgJAaAAIAXAAIAAgOQAAgNgIgHQgHgIgPAAQgOAAgJAIQgJAHAAAKIgNAAQAAgPANgKQAOgLASAAQAUAAAMAKQALALABARIAAA5QAAASADAIIAAACIgNAAQgCgGgCgLQgGAJgLAFQgLAEgLAAQgSAAgKgJgAgXAIQgLAHAAAMQAAALAIAGQAHAHAMAAQAMAAAMgGQAKgHAEgLIAAgbIgXAAQgUABgLAHg");
	this.shape_97.setTransform(61.1,381.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(255,255,255,0.902)").s().p("AgbA9IAAh3IANAAIAAATQALgVAXAAQAFAAADABIAAAMIgJgBQgNAAgIAHQgIAHgEANIAABSg");
	this.shape_98.setTransform(503.6,356);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(255,255,255,0.902)").s().p("AgkA1QgLgKAAgOQAAgSAOgKQAPgKAaAAIAXAAIAAgOQAAgMgHgIQgJgHgPAAQgMAAgKAHQgJAHAAAKIgNAAQAAgOANgLQANgKATAAQAUAAAMAKQALAKABASIAAA4QAAARADAJIAAABIgNAAQgDgFgBgMQgGAKgLAFQgLAFgLAAQgSAAgKgKgAgXAIQgLAHAAANQAAAJAIAHQAHAHAMAAQANAAALgGQAKgHAEgLIAAgaIgXAAQgUgBgLAIg");
	this.shape_99.setTransform(492.7,356.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(255,255,255,0.902)").s().p("AgjBGQgNgRAAgcIAAgCQAAgbANgRQAMgQAWAAQAYAAAMATIAAhEIAOAAIAACrIgNAAIAAgQQgNASgYAAQgVAAgNgRgAgZgMQgJAMAAAaQAAAXAJANQAJANAQAAQAZAAAKgVIAAg4QgKgYgZAAQgPAAgKAOg");
	this.shape_100.setTransform(480.1,353.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(255,255,255,0.902)").s().p("AgiAyQgLgKAAgWIAAhOIAOAAIAABLQAAAjAbAAQAdAAAHgYIAAhWIAOAAIAAB3IgNAAIgBgPQgMARgZABQgTAAgKgMg");
	this.shape_101.setTransform(467.7,356.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(255,255,255,0.902)").s().p("AgWBoIAAgKIAKABQATAAAAgXIAAiGIANAAIAACGQAAARgHAJQgJAJgOAAQgHAAgFgDgAAHhbQgCgCAAgEQAAgDACgDQADgDAEAAQAEAAACADQADADAAADQAAAEgDACQgCADgEAAQgEAAgDgDg");
	this.shape_102.setTransform(457.4,356.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(255,255,255,0.902)").s().p("AglA1QgLgKAAgOQABgSAPgKQAOgKAZAAIAZAAIAAgOQAAgMgIgIQgIgHgQAAQgNAAgJAHQgJAHAAAKIgOAAQAAgOAOgLQAOgKASAAQAUAAAMAKQALAKABASIAAA4QAAARAEAJIAAABIgPAAQgCgFAAgMQgIAKgKAFQgLAFgMAAQgRAAgLgKgAgWAIQgMAHAAANQAAAJAHAHQAIAHAMAAQAMAAALgGQALgHAFgLIAAgaIgZAAQgSgBgLAIg");
	this.shape_103.setTransform(449.9,356.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(255,255,255,0.902)").s().p("AgkA1QgLgKAAgOQAAgSAOgKQAPgKAaAAIAYAAIAAgOQgBgMgHgIQgJgHgPAAQgMAAgKAHQgJAHAAAKIgNAAQgBgOAOgLQANgKATAAQAUAAAMAKQAMAKAAASIAAA4QAAARADAJIAAABIgNAAQgCgFgBgMQgIAKgKAFQgLAFgLAAQgSAAgKgKgAgXAIQgLAHAAANQAAAJAHAHQAIAHAMAAQANAAALgGQAKgHAFgLIAAgaIgYAAQgUgBgLAIg");
	this.shape_104.setTransform(432.1,356.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(255,255,255,0.902)").s().p("AgbA9IAAh3IANAAIAAATQALgVAWAAQAGAAADABIAAAMIgJgBQgNAAgHAHQgJAHgEANIAABSg");
	this.shape_105.setTransform(423,356);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(255,255,255,0.902)").s().p("AglA1QgLgKAAgOQABgSAPgKQAOgKAZAAIAZAAIAAgOQAAgMgJgIQgHgHgQAAQgNAAgJAHQgJAHAAAKIgOAAQAAgOAOgLQAOgKASAAQAUAAAMAKQALAKABASIAAA4QAAARAEAJIAAABIgPAAQgCgFAAgMQgIAKgKAFQgLAFgMAAQgRAAgLgKgAgWAIQgMAHAAANQAAAJAHAHQAIAHAMAAQAMAAALgGQALgHAFgLIAAgaIgZAAQgSgBgLAIg");
	this.shape_106.setTransform(412.1,356.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(255,255,255,0.902)").s().p("AgwBVIAAinIAMAAIACARQANgTAYAAQAVAAANARQALAQABAdIAAACQAAAbgNARQgNAQgUAAQgYAAgNgRIAAA+gAgVhCQgJAGgEALIAAA5QAEAKAJAGQAKAFALAAQARAAAJgNQAKgOgBgYQABgXgKgOQgJgNgRAAQgMAAgJAGg");
	this.shape_107.setTransform(400.1,358.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(255,255,255,0.902)").s().p("AggA0QgNgJAAgQIANAAQABALAJAHQAJAHAOgBQAOAAAJgFQAJgHAAgJQgBgKgHgGQgJgHgQgDQgPgDgJgEQgIgEgFgGQgEgGAAgKQAAgOAMgJQAMgJARAAQAVAAAMAKQAMAJAAARIgNAAQAAgLgJgHQgJgHgOAAQgMgBgHAHQgJAFAAAKQAAAJAHAFQAGAFARAEQASAEAIAEQAJAFAFAGQAEAHAAAJQAAAPgMAKQgNAIgUABQgUAAgNgLg");
	this.shape_108.setTransform(382.1,356.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgHgHgOQgHgOAAgRIAAgEQAAgRAHgOQAHgOAMgHQAMgIANAAQAWAAANAOQANAPAAAbIAAAGIhVAAIAAACQAAAVALAOQAMANARAAQALAAAIgDQAIgEAHgJIAIAGQgOAWgcAAQgPAAgMgIgAgWgnQgLALgCASIBIAAIAAgBQgBgSgJgLQgKgLgPABQgOAAgKALg");
	this.shape_109.setTransform(370.5,356.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(255,255,255,0.902)").s().p("AgCBFQgGgHAAgQIAAhQIgXAAIAAgLIAXAAIAAgfIAMAAIAAAfIAaAAIAAALIgaAAIAABQQAAAKAEAEQAEAGAIAAIALgBIAAALQgFABgJAAQgOAAgFgIg");
	this.shape_110.setTransform(360.6,354.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(255,255,255,0.902)").s().p("AAgA9IAAhOQAAgQgGgIQgIgIgOAAQgLAAgKAIQgJAIgGAMIAABSIgMAAIAAh3IAMAAIAAAUQAHgLAKgGQALgFALAAQAUAAAJALQAKAKAAAWIAABOg");
	this.shape_111.setTransform(350.9,356);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(255,255,255,0.902)").s().p("AgkA1QgMgKAAgOQAAgSAPgKQAPgKAaAAIAXAAIAAgOQAAgMgIgIQgHgHgPAAQgOAAgJAHQgJAHAAAKIgNAAQAAgOANgLQAOgKASAAQAUAAAMAKQALAKABASIAAA4QAAARADAJIAAABIgNAAQgCgFgCgMQgGAKgLAFQgLAFgLAAQgSAAgKgKgAgXAIQgLAHAAANQAAAJAIAHQAHAHAMAAQAMAAAMgGQAKgHAEgLIAAgaIgXAAQgUgBgLAIg");
	this.shape_112.setTransform(338.3,356.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(255,255,255,0.902)").s().p("AgjBGQgNgRAAgcIAAgCQAAgbANgRQAMgQAWAAQAYAAAMATIAAhEIAOAAIAACrIgNAAIAAgQQgNASgYAAQgVAAgNgRgAgZgMQgJAMAAAaQAAAXAJANQAJANAQAAQAZAAAKgVIAAg4QgKgYgZAAQgPAAgKAOg");
	this.shape_113.setTransform(325.6,353.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("rgba(255,255,255,0.902)").s().p("AgGBSIAAh3IANAAIAAB3gAgGhCQgCgDAAgEQAAgDACgDQADgCADAAQAEAAADACQACADAAADQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_114.setTransform(317,353.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("rgba(255,255,255,0.902)").s().p("AAiA8IgigyIgiAyIgPAAIAqg8Igog7IAQAAIAfAwIAhgwIAQAAIgpA7IAqA8g");
	this.shape_115.setTransform(308.9,356.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("rgba(255,255,255,0.902)").s().p("AgmAuQgPgRAAgcIAAgCQAAgRAHgOQAGgOANgIQANgIAOABQAYgBAPASQAPAQAAAcIAAACQAAASgGANQgIAPgMAHQgMAIgQAAQgXgBgPgQgAgcgkQgLAOAAAWIAAACQAAAWALAOQALANARAAQASAAAMgNQAKgOABgXIAAgCQAAgNgGgMQgEgLgKgHQgJgGgMAAQgRAAgLAOg");
	this.shape_116.setTransform(296.9,356.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("rgba(255,255,255,0.902)").s().p("AgGBSIAAh3IANAAIAAB3gAgGhCQgCgDAAgEQAAgDACgDQADgCADAAQAEAAADACQACADAAADQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_117.setTransform(287.9,353.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("rgba(255,255,255,0.902)").s().p("AgCBFQgGgHAAgQIAAhQIgWAAIAAgLIAWAAIAAgfIAMAAIAAAfIAZAAIAAALIgZAAIAABQQAAAKAEAEQADAGAJAAIALgBIABALQgGABgJAAQgNAAgGgIg");
	this.shape_118.setTransform(281.4,354.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("rgba(255,255,255,0.902)").s().p("AAgA9IAAhOQAAgQgHgIQgGgIgPAAQgLAAgKAIQgKAIgEAMIAABSIgOAAIAAh3IANAAIABAUQAGgLALgGQAKgFALAAQATAAAKALQAKAKgBAWIAABOg");
	this.shape_119.setTransform(271.7,356);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("rgba(255,255,255,0.902)").s().p("AglA1QgLgKAAgOQABgSAPgKQAOgKAZAAIAZAAIAAgOQAAgMgJgIQgHgHgQAAQgNAAgJAHQgJAHAAAKIgOAAQAAgOAOgLQAOgKASAAQAUAAAMAKQALAKABASIAAA4QAAARAEAJIAAABIgPAAQgCgFAAgMQgIAKgKAFQgLAFgMAAQgRAAgLgKgAgWAIQgMAHAAANQAAAJAHAHQAIAHAMAAQAMAAALgGQALgHAFgLIAAgaIgZAAQgSgBgLAIg");
	this.shape_120.setTransform(259.1,356.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("rgba(255,255,255,0.902)").s().p("AgvA8IAAgKIBJhiIhGAAIAAgLIBXAAIAAAJIhJBjIBOAAIAAALg");
	this.shape_121.setTransform(242.2,356.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("rgba(255,255,255,0.902)").s().p("AgiAyQgLgKAAgWIAAhOIAOAAIAABLQAAAjAbAAQAdAAAHgYIAAhWIAOAAIAAB3IgNAAIgBgPQgMARgZABQgTAAgKgMg");
	this.shape_122.setTransform(230.1,356.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(255,255,255,0.902)").s().p("AgjBGQgNgRAAgcIAAgCQAAgbANgRQAMgQAWAAQAYAAAMATIAAhEIAOAAIAACrIgNAAIAAgQQgNASgYAAQgVAAgNgRgAgZgMQgJAMAAAaQAAAXAJANQAJANAQAAQAZAAAKgVIAAg4QgKgYgZAAQgPAAgKAOg");
	this.shape_123.setTransform(217.2,353.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("rgba(255,255,255,0.902)").s().p("AgmAuQgPgRAAgcIAAgCQAAgRAHgOQAHgOAMgIQAMgIAPABQAYgBAPASQAPAQAAAcIAAACQAAASgHANQgHAPgMAHQgMAIgQAAQgXgBgPgQgAgcgkQgMAOAAAWIAAACQAAAWAMAOQALANARAAQASAAALgNQALgOAAgXIAAgCQAAgNgEgMQgGgLgJgHQgJgGgMAAQgRAAgLAOg");
	this.shape_124.setTransform(204.7,356.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("rgba(255,255,255,0.902)").s().p("AgbA9IAAh3IANAAIAAATQALgVAWAAQAGAAADABIAAAMIgJgBQgNAAgHAHQgJAHgEANIAABSg");
	this.shape_125.setTransform(195.2,356);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("rgba(255,255,255,0.902)").s().p("AgwBVIAAinIAMAAIACARQANgTAYAAQAVAAANARQALAQABAdIAAACQAAAbgNARQgNAQgUAAQgYAAgNgRIAAA+gAgVhCQgJAGgEALIAAA5QAEAKAJAGQAKAFALAAQARAAAJgNQAKgOgBgYQABgXgKgOQgJgNgRAAQgMAAgJAGg");
	this.shape_126.setTransform(184.5,358.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("rgba(255,255,255,0.902)").s().p("AgmAuQgPgRAAgcIAAgCQAAgRAHgOQAHgOAMgIQAMgIAPABQAYgBAPASQAPAQAAAcIAAACQAAASgHANQgGAPgNAHQgMAIgQAAQgXgBgPgQgAgcgkQgMAOAAAWIAAACQAAAWAMAOQALANARAAQATAAAKgNQALgOAAgXIAAgCQAAgNgEgMQgGgLgJgHQgJgGgMAAQgRAAgLAOg");
	this.shape_127.setTransform(165.9,356.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("rgba(255,255,255,0.902)").s().p("AgwBVIAAinIAMAAIACARQANgTAYAAQAVAAANARQALAQABAdIAAACQAAAbgNARQgNAQgUAAQgYAAgNgRIAAA+gAgVhCQgJAGgEALIAAA5QAEAKAJAGQAKAFALAAQARAAAJgNQAKgOgBgYQABgXgKgOQgJgNgRAAQgMAAgJAGg");
	this.shape_128.setTransform(153.5,358.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("rgba(255,255,255,0.902)").s().p("AgbA9IAAh3IANAAIAAATQALgVAWAAQAGAAADABIAAAMIgJgBQgNAAgHAHQgJAHgEANIAABSg");
	this.shape_129.setTransform(143.7,356);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("rgba(255,255,255,0.902)").s().p("AgmAuQgPgRAAgcIAAgCQAAgRAHgOQAGgOANgIQANgIAOABQAYgBAPASQAPAQAAAcIAAACQAAASgGANQgIAPgMAHQgMAIgQAAQgXgBgPgQgAgcgkQgMAOAAAWIAAACQAAAWAMAOQALANARAAQASAAAMgNQALgOAAgXIAAgCQAAgNgGgMQgEgLgKgHQgJgGgMAAQgRAAgLAOg");
	this.shape_130.setTransform(132.8,356.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("rgba(255,255,255,0.902)").s().p("AgiAuQgOgQAAgcIAAgEQAAgRAGgOQAHgNALgIQAMgIAOABQAVAAANALQAMAMABATIgMAAQgBgOgKgIQgJgKgPABQgQAAgKANQgLANABAXIAAAEQgBAXALANQAKAMAQAAQAPAAAJgIQAKgHABgNIAMAAQgBALgGAJQgGAKgKAEQgLAFgNABQgWgBgOgQg");
	this.shape_131.setTransform(120.5,356.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("rgba(255,255,255,0.902)").s().p("AgtA/QgRgUAAgjIAAgQQgBgVAJgSQAHgRAOgJQAPgKASABQATgBAOAJQAOAKAIAQQAIARAAAVIAAATQABAWgJASQgHAQgOAKQgPAIgTABQgbAAgSgVgAgjg2QgOARAAAeIAAAQQAAAdAOARQANARAWAAQAXAAANgRQANgRAAgeIAAgQQAAgdgNgRQgNgRgXAAQgWAAgNARg");
	this.shape_132.setTransform(101.2,354);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("rgba(194,155,1,0.902)").s().p("AgeANIAAgZIA9AAIAAAZg");
	this.shape_133.setTransform(83.2,355.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("rgba(194,155,1,0.902)").s().p("AgnBCQgQgSAAgeIAAgMQAAgZAKgUQAKgVATgLQARgLAZAAIAFAAIAAAaIgDAAQgWABgMALQgNALgDAUQANgOATAAQAVAAANAQQAMAOAAAZQAAAPgHANQgHANgMAHQgNAHgQAAQgYAAgQgRgAgNACQgHAFgDAGIAAAKQAAAQAHAJQAGAJALAAQAKAAAGgIQAHgIAAgNQAAgNgHgIQgGgIgLAAQgHAAgGADg");
	this.shape_134.setTransform(66.7,354);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#C29B01").ss(2,1,1).p("EgiKAiCQoarAAAufQAAxnMeseQMesfRoAAQRoAAMfMfQMeMeAARnQAAOfoZLA");
	this.shape_135.setTransform(283.4,228.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("rgba(234,187,1,0.008)").s().p("EgiKAiCQoarAAAufQAAxnMeseQMfsfRnAAQRpAAMeMfQMeMeAARnQAAOfoZLAg");
	this.shape_136.setTransform(283.4,228.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#C29B01").ss(2,1,1).p("EgkSAi4Qn/rGAAuYQAAyVM+s+QM+s+SVAAQSWAAM+M+QM9M+AASVQAAOYn+LG");
	this.shape_137.setTransform(283.4,223.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("rgba(234,187,1,0.008)").s().p("EgkRAi4QoArGAAuYQAByVM9s+QM+s+SVAAQSVAAM/M+QM9M+ABSVQAAOYn/LGg");
	this.shape_138.setTransform(283.4,223.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.popup6, new cjs.Rectangle(-1,-1,568.7,448.4), null);


(lib.popup5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btn_fechar.addEventListener("click", fechar.bind(this));
		function fechar(){
			createjs.Tween.get(this.parent.popup5)
			.to({y:700}, 1000, createjs.Ease.quartInOut);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn_fechar
	this.btn_fechar = new lib.btn_fechar();
	this.btn_fechar.name = "btn_fechar";
	this.btn_fechar.parent = this;
	this.btn_fechar.setTransform(283.4,30.3,1,1,0,0,0,18.7,19.4);
	new cjs.ButtonHelper(this.btn_fechar, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_fechar).wait(1));

	// txt
	this.instance = new lib.pulmao();
	this.instance.parent = this;
	this.instance.setTransform(137.6,64.3,0.35,0.35);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.902)").s().p("AgGAHQgDgDAAgEQAAgDADgCQACgDAEAAQAEAAADADQADACAAADQAAAEgDADQgDACgEAAQgEAAgCgCg");
	this.shape.setTransform(440.9,437.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.902)").s().p("AggA1QgNgKAAgQIANAAQABAMAJAGQAJAHAOgBQAOAAAJgFQAIgHAAgJQABgKgJgGQgHgHgQgDQgQgDgIgEQgKgEgEgHQgEgFAAgKQAAgOAMgJQALgKATABQATgBANALQAMAKAAAQIgOAAQAAgLgIgHQgJgHgNgBQgNAAgIAHQgIAFAAAKQAAAJAHAFQAGAFARAEQASAEAJAEQAIAFAEAGQAFAHAAAJQAAAQgNAJQgMAIgUABQgUgBgNgJg");
	this.shape_1.setTransform(432.6,432.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.902)").s().p("AglA1QgLgKABgOQgBgSAPgKQAPgKAZAAIAZAAIAAgOQgBgMgHgIQgJgHgPgBQgMABgKAHQgJAHAAAKIgOAAQAAgPAOgKQANgKATAAQAUgBAMALQAMAKAAASIAAA4QAAARAEAJIAAABIgPAAQgBgFgBgLQgIAJgKAFQgLAFgMAAQgRAAgLgKgAgWAIQgMAHAAANQAAAKAHAGQAIAHAMAAQAMAAAMgGQAKgHAFgLIAAgaIgZAAQgTAAgKAHg");
	this.shape_2.setTransform(420.5,432.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.902)").s().p("AgbA9IAAh4IANAAIAAAUQALgWAWABQAGgBADACIAAAMIgJgBQgNAAgHAHQgJAHgEANIAABSg");
	this.shape_3.setTransform(411.4,432.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.902)").s().p("AgCBFQgGgHAAgQIAAhQIgXAAIAAgLIAXAAIAAgfIAMAAIAAAfIAaAAIAAALIgaAAIAABQQAAAKAEAEQAEAGAIAAIALgBIAAAKQgFACgJAAQgOAAgFgIg");
	this.shape_4.setTransform(402.9,430.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.902)").s().p("AgiAyQgLgKAAgWIAAhPIAOAAIAABNQAAAiAbAAQAdAAAHgYIAAhXIAOAAIAAB4IgNAAIgBgPQgMASgZAAQgTAAgKgMg");
	this.shape_5.setTransform(393.1,432.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.902)").s().p("AgmAuQgPgRAAgcIAAgCQAAgRAHgOQAGgOANgIQANgHAOAAQAYgBAPASQAPAQAAAcIAAACQAAASgHANQgHAPgMAHQgMAIgQAAQgXAAgPgRgAgcgkQgMAOAAAWIAAACQAAAWAMAOQALANARAAQATAAAKgNQAMgOgBgXIAAgCQAAgNgEgMQgGgLgJgHQgJgGgMgBQgRAAgLAPg");
	this.shape_6.setTransform(380.5,432.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgHgHgOQgHgOAAgRIAAgDQAAgSAHgOQAHgOAMgHQAMgJANABQAWgBANAPQANAQAAAZIAAAHIhVAAIAAACQAAAVALAOQAMANARAAQALAAAIgEQAIgDAHgJIAIAGQgOAWgcAAQgPAAgMgIgAgWgnQgLALgCATIBIAAIAAgCQgBgRgJgMQgKgLgPAAQgOAAgKAMg");
	this.shape_7.setTransform(362.6,432.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.902)").s().p("AggA1QgNgKAAgQIANAAQABAMAJAGQAJAHAOgBQAOAAAJgFQAJgHAAgJQgBgKgHgGQgJgHgQgDQgPgDgJgEQgIgEgFgHQgEgFAAgKQAAgOAMgJQAMgKARABQAVgBAMALQAMAKAAAQIgNAAQAAgLgJgHQgJgHgOgBQgMAAgHAHQgJAFAAAKQAAAJAHAFQAHAFAQAEQASAEAIAEQAJAFAFAGQAEAHAAAJQAAAQgMAJQgNAIgUABQgUgBgNgJg");
	this.shape_8.setTransform(345.3,432.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.902)").s().p("AgkA1QgMgKAAgOQAAgSAQgKQAOgKAaAAIAXAAIAAgOQABgMgJgIQgHgHgPgBQgOABgJAHQgJAHAAAKIgNAAQAAgPANgKQAOgKASAAQAUgBAMALQAMAKAAASIAAA4QAAARADAJIAAABIgNAAQgDgFgBgLQgGAJgLAFQgLAFgLAAQgSAAgKgKgAgXAIQgLAHAAANQAAAKAIAGQAHAHAMAAQAMAAAMgGQAKgHAEgLIAAgaIgXAAQgUAAgLAHg");
	this.shape_9.setTransform(333.2,432.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.902)").s().p("AgGBSIAAh4IANAAIAAB4gAgGhCQgCgDAAgEQAAgDACgDQADgCADgBQAEABADACQACADAAADQAAAEgCADQgDADgEgBQgDABgDgDg");
	this.shape_10.setTransform(324.7,430);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.902)").s().p("AgbA9IAAh4IANAAIAAAUQALgWAWABQAGgBADACIAAAMIgJgBQgNAAgHAHQgJAHgEANIAABSg");
	this.shape_11.setTransform(319,432.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.902)").s().p("AgmBGQgPgRAAgcIAAgDQAAgRAHgNQAGgOANgIQAMgHAPAAQAYAAAPARQAPAQAAAbIAAADQAAASgGAOQgIAOgMAHQgMAIgQAAQgXAAgPgRgAgcgMQgMANAAAXIAAACQAAAWAMAOQALAOARAAQATAAAKgOQAMgOgBgXIAAgDQAAgNgEgLQgGgLgJgHQgJgGgMAAQgRAAgLAOgAgHg3IAUgfIAQAAIgaAfg");
	this.shape_12.setTransform(308,429.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.902)").s().p("AgCBFQgGgHAAgQIAAhQIgXAAIAAgLIAXAAIAAgfIAMAAIAAAfIAaAAIAAALIgaAAIAABQQAAAKAEAEQADAGAJAAIALgBIAAAKQgFACgJAAQgOAAgFgIg");
	this.shape_13.setTransform(297.7,430.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.902)").s().p("AgkA1QgLgKAAgOQAAgSAOgKQAPgKAaAAIAXAAIAAgOQAAgMgHgIQgJgHgPgBQgMABgKAHQgJAHAAAKIgNAAQAAgPANgKQANgKATAAQAUgBAMALQALAKABASIAAA4QAAARADAJIAAABIgNAAQgDgFgBgLQgGAJgLAFQgLAFgLAAQgSAAgKgKgAgXAIQgLAHAAANQAAAKAIAGQAHAHAMAAQANAAALgGQAKgHAEgLIAAgaIgXAAQgUAAgLAHg");
	this.shape_14.setTransform(288,432.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.902)").s().p("AgbA9IAAh4IANAAIAAAUQALgWAWABQAGgBADACIAAAMIgJgBQgNAAgHAHQgJAHgEANIAABSg");
	this.shape_15.setTransform(278.9,432.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.902)").s().p("AgGBSIAAh4IANAAIAAB4gAgGhCQgCgDAAgEQAAgDACgDQADgCADgBQAEABADACQACADAAADQAAAEgCADQgDADgEgBQgDABgDgDg");
	this.shape_16.setTransform(271.7,430);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.902)").s().p("AgwBVIAAinIANAAIABARQAMgTAYAAQAWAAANARQAMAQgBAdIAAACQAAAbgMARQgMAQgWAAQgXAAgNgRIAAA+gAgVhCQgJAGgEALIAAA5QAFAKAIAGQAKAFALAAQARAAAJgNQAKgOAAgYQAAgXgKgOQgJgNgRAAQgMAAgJAGg");
	this.shape_17.setTransform(263.1,434.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.902)").s().p("AggA1QgNgKAAgQIANAAQABAMAJAGQAJAHAOgBQAOAAAJgFQAJgHAAgJQgBgKgHgGQgJgHgQgDQgPgDgJgEQgIgEgFgHQgEgFAAgKQAAgOAMgJQAMgKARABQAVgBAMALQAMAKAAAQIgNAAQAAgLgJgHQgJgHgOgBQgMAAgHAHQgJAFAAAKQAAAJAHAFQAGAFARAEQASAEAIAEQAJAFAFAGQAEAHAAAJQAAAQgMAJQgNAIgUABQgUgBgNgJg");
	this.shape_18.setTransform(250.7,432.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgHgHgOQgHgOAAgRIAAgDQAAgSAHgOQAHgOAMgHQAMgJANABQAWgBANAPQANAQAAAZIAAAHIhVAAIAAACQAAAVALAOQAMANARAAQALAAAIgEQAIgDAHgJIAIAGQgOAWgcAAQgPAAgMgIgAgWgnQgLALgCATIBIAAIAAgCQgBgRgJgMQgKgLgPAAQgOAAgKAMg");
	this.shape_19.setTransform(239.1,432.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.902)").s().p("AgbA9IAAh4IANAAIAAAUQALgWAWABQAGgBADACIAAAMIgJgBQgNAAgHAHQgJAHgEANIAABSg");
	this.shape_20.setTransform(230,432.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.902)").s().p("AggA1QgNgKAAgQIANAAQABAMAJAGQAJAHAOgBQAOAAAJgFQAJgHgBgJQAAgKgHgGQgJgHgPgDQgQgDgJgEQgJgEgEgHQgEgFAAgKQAAgOAMgJQALgKATABQATgBANALQAMAKAAAQIgOAAQABgLgJgHQgJgHgNgBQgNAAgHAHQgJAFAAAKQAAAJAHAFQAGAFARAEQARAEAJAEQAKAFADAGQAFAHAAAJQAAAQgMAJQgNAIgUABQgUgBgNgJg");
	this.shape_21.setTransform(214.1,432.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgHgHgOQgHgOAAgRIAAgDQAAgSAHgOQAHgOAMgHQAMgJANABQAWgBANAPQANAQAAAZIAAAHIhVAAIAAACQAAAVALAOQAMANARAAQALAAAIgEQAIgDAHgJIAIAGQgOAWgcAAQgPAAgMgIgAgWgnQgLALgCATIBIAAIAAgCQgBgRgJgMQgKgLgPAAQgOAAgKAMg");
	this.shape_22.setTransform(202.5,432.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.902)").s().p("AgmBEQgPgRAAgcIAAgDQAAgRAHgNQAGgOANgIQANgHAOAAQAYAAAPARQAPAQAAAbIAAADQAAASgHAOQgHAOgMAHQgMAIgQAAQgXAAgPgRgAgcgOQgMAOAAAWIAAACQAAAWAMAOQALAOARAAQATAAALgOQALgOgBgXIAAgDQAAgNgEgLQgGgLgJgHQgJgGgMAAQgRAAgLAOgAgkg7QgBgKAHgHQAGgGAKAAQAFAAADACIAHAEIAHAEQADACAEAAQAGAAADgEQAEgDAAgHIAKABQAAALgHAGQgFAHgKAAQgJAAgHgGQgIgHgGAAQgFAAgEAEQgDADAAAHg");
	this.shape_23.setTransform(190.1,430);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.902)").s().p("AgJBOQAJAAAGgEQAGgEAAgGQABgGgGgDQgEgCgJgBIADgNIAGAAIADAAIAAgBIgJAAIAAABQgTgDgMgOQgOgQAAgbIAAgEQAAgSAHgOQAFgNANgIQALgHAPAAQATAAAOALQAMAMABAUIgMAAQgBgPgKgIQgKgJgNAAQgRAAgKANQgKANAAAYIAAAEQAAAWAKANQAKANARAAQANAAAKgIQAKgIABgMIAMAAQgBAKgGAKQgGAJgLAFQgJAEgKABIgBAGQASACAAARQABAKgKAGQgIAGgOAAgAgDAnIAAgBIAJAAIAAABIgDAAIgGAAgAgDAnIAAAAg");
	this.shape_24.setTransform(177.9,434.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.902)").s().p("AgiAuQgOgQAAgcIAAgEQAAgRAGgOQAHgNALgIQAMgHAOAAQAVAAANALQAMAMABAUIgNAAQAAgPgKgJQgJgJgPAAQgQAAgLAOQgKANAAAYIAAACQAAAYAKAMQALANAQAAQAPAAAJgHQAKgIAAgNIANAAQAAALgHAKQgGAIgKAFQgMAFgMABQgWAAgOgRg");
	this.shape_25.setTransform(166,432.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgHgHgOQgHgOAAgRIAAgDQAAgSAHgOQAHgOAMgHQAMgJANABQAWgBANAPQANAQAAAZIAAAHIhVAAIAAACQAAAVALAOQAMANARAAQALAAAIgEQAIgDAHgJIAIAGQgOAWgcAAQgPAAgMgIgAgWgnQgLALgCATIBIAAIAAgCQgBgRgJgMQgKgLgPAAQgOAAgKAMg");
	this.shape_26.setTransform(154.2,432.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.902)").s().p("AgOBXIAAhtIgUAAIAAgLIAUAAIAAgOQAAgTAJgKQAJgKARAAQAHAAAHACIgBALQgGgCgGABQgLgBgHAIQgEAGAAANIAAAPIAbAAIAAALIgbAAIAABtg");
	this.shape_27.setTransform(144.9,429.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.902)").s().p("AAhA9IAAhOQgBgQgHgIQgGgIgPAAQgMAAgJAIQgKAHgEANIAABSIgOAAIAAh4IANAAIABAVQAGgLALgGQAKgFALAAQATgBAKALQAJALAAAWIAABOg");
	this.shape_28.setTransform(134.4,432.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.902)").s().p("AgGBSIAAh4IANAAIAAB4gAgGhCQgCgDAAgEQAAgDACgDQADgCADgBQAEABADACQACADAAADQAAAEgCADQgDADgEgBQgDABgDgDg");
	this.shape_29.setTransform(125.5,430);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgHgHgOQgHgOAAgRIAAgDQAAgSAHgOQAHgOAMgHQAMgJANABQAWgBANAQQANAPAAAZIAAAHIhVAAIAAACQAAAVALAOQAMAOARAAQALgBAIgEQAIgDAHgJIAIAGQgOAWgcAAQgPAAgMgIgAgWgnQgLALgCATIBIAAIAAgCQgBgRgJgMQgKgKgPgBQgOAAgKAMg");
	this.shape_30.setTransform(474.9,406.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.902)").s().p("AgjBGQgNgRAAgcIAAgCQAAgbANgRQAMgQAWAAQAYAAAMATIAAhEIAOAAIAACrIgNAAIAAgQQgNASgYAAQgVAAgNgRgAgZgMQgJAMAAAaQAAAXAJANQAJANAQAAQAZAAAKgVIAAg4QgKgYgZAAQgPAAgKAOg");
	this.shape_31.setTransform(462.2,404.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0.902)").s().p("AgmAuQgPgRAAgcIAAgCQAAgRAHgOQAGgOANgIQANgHAOAAQAYAAAPARQAPAQAAAcIAAACQAAASgGAOQgIAOgMAHQgMAIgQAAQgXAAgPgRgAgcgkQgLAOAAAWIAAACQAAAVALAOQALAPARAAQASAAAMgPQALgNgBgXIAAgCQABgOgGgLQgEgMgKgGQgJgGgMgBQgRAAgLAPg");
	this.shape_32.setTransform(444.2,406.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,255,255,0.902)").s().p("AgiAuQgOgRAAgcIAAgCQAAgSAHgOQAFgNANgIQALgHAPAAQATAAANALQANAMABAUIgNAAQgBgPgJgJQgJgJgOAAQgSAAgJAOQgLANAAAYIAAACQAAAYALAMQAJAOASAAQAOgBAJgHQAJgJABgMIANAAQgBALgGAKQgGAIgLAFQgKAGgMAAQgXAAgOgRg");
	this.shape_33.setTransform(431.9,406.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,255,255,0.902)").s().p("AggA1QgNgLAAgPIANAAQABAMAJAGQAJAHAOAAQAOgBAJgFQAJgHgBgJQAAgKgHgGQgJgGgPgEQgQgDgJgEQgJgEgEgHQgEgGAAgIQAAgPAMgJQALgKATABQATgBANAKQAMALAAAQIgOAAQABgLgJgHQgJgHgNgBQgNAAgHAHQgJAFAAAKQAAAJAHAFQAGAFARAEQARAEAKAEQAJAEADAHQAFAGAAAKQAAAPgMAKQgNAIgUABQgUgBgNgJg");
	this.shape_34.setTransform(420.2,406.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,255,255,0.902)").s().p("AgGBTIAAh5IANAAIAAB5gAgGhCQgCgCAAgFQAAgDACgDQADgCADgBQAEABADACQACADAAADQAAAFgCACQgDADgEgBQgDABgDgDg");
	this.shape_35.setTransform(411.9,404.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(255,255,255,0.902)").s().p("AgbA+IAAh5IANAAIAAAUQALgWAWABQAGgBADACIAAAMIgJgBQgNAAgIAHQgIAHgEANIAABTg");
	this.shape_36.setTransform(406.2,406.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0.902)").s().p("AgmAuQgPgRAAgcIAAgCQAAgRAHgOQAGgOANgIQANgHAOAAQAYAAAPARQAPAQAAAcIAAACQAAASgGAOQgIAOgMAHQgMAIgQAAQgXAAgPgRgAgcgkQgLAOAAAWIAAACQAAAVALAOQALAPARAAQASAAAMgPQAKgNABgXIAAgCQAAgOgGgLQgEgMgKgGQgJgGgMgBQgRAAgLAPg");
	this.shape_37.setTransform(389.6,406.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(255,255,255,0.902)").s().p("AgbA+IAAh5IANAAIAAAUQALgWAWABQAGgBADACIAAAMIgJgBQgNAAgHAHQgJAHgEANIAABTg");
	this.shape_38.setTransform(374.5,406.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,255,255,0.902)").s().p("AglA1QgKgJgBgPQABgSAPgKQAOgKAZAAIAYAAIAAgOQABgNgJgHQgIgHgOgBQgNABgKAHQgJAHAAAKIgOAAQAAgPAOgKQAOgKASAAQAUgBAMAKQALALABARIAAA5QAAARAEAJIAAACIgPAAQgCgGgBgLQgHAJgKAFQgLAEgMABQgRAAgLgKgAgWAIQgMAHAAANQAAAKAHAGQAIAHAMAAQANAAAKgGQALgHAEgLIAAgaIgYAAQgSAAgLAHg");
	this.shape_39.setTransform(363.6,406.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(255,255,255,0.902)").s().p("AgCBFQgGgHAAgQIAAhQIgXAAIAAgLIAXAAIAAgfIAMAAIAAAfIAaAAIAAALIgaAAIAABQQAAAKAEAEQAEAGAIAAIALgBIABAKQgGACgJAAQgOAAgFgIg");
	this.shape_40.setTransform(353.7,405.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(255,255,255,0.902)").s().p("AAgA+IAAhPQAAgQgGgIQgIgIgOAAQgLAAgKAIQgJAHgGANIAABTIgMAAIAAh5IAMAAIAAAVQAIgLAJgFQALgHALABQAUgBAJALQAKALAAAWIAABPg");
	this.shape_41.setTransform(344,406.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgHgHgOQgHgOAAgRIAAgDQAAgSAHgOQAHgOAMgHQAMgJANABQAWgBANAQQANAPAAAZIAAAHIhVAAIAAACQAAAVALAOQAMAOARAAQALgBAIgEQAIgDAHgJIAIAGQgOAWgcAAQgPAAgMgIgAgWgnQgLALgCATIBIAAIAAgCQgBgRgJgMQgKgKgPgBQgOAAgKAMg");
	this.shape_42.setTransform(331.9,406.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(255,255,255,0.902)").s().p("ABHA+IAAhPQAAgRgHgHQgHgIgPAAQgPAAgJAJQgKAKgCANIAABPIgMAAIAAhQQAAgPgHgJQgIgHgOAAQgNAAgJAHQgJAHgFAOIAABTIgNAAIAAh5IANAAIAAAUQAHgLAKgFQAKgFAMAAQAdgBAHAYQAGgMALgFQALgHANABQAnAAABAqIAABQg");
	this.shape_43.setTransform(315.8,406.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(255,255,255,0.902)").s().p("AgiAzQgLgLAAgWIAAhPIAOAAIAABNQAAAiAbAAQAdAAAHgYIAAhXIAOAAIAAB5IgNAAIgBgQQgMASgZAAQgTgBgKgKg");
	this.shape_44.setTransform(299.3,406.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(255,255,255,0.902)").s().p("AgkA1QgLgJAAgPQAAgSAOgKQAPgKAaAAIAYAAIAAgOQgBgNgHgHQgJgHgPgBQgMABgKAHQgJAHAAAKIgOAAQABgPANgKQANgKATAAQAUgBAMAKQALALABARIAAA5QAAARADAJIAAACIgNAAQgCgGgBgLQgIAJgKAFQgLAEgMABQgRAAgKgKgAgXAIQgLAHAAANQAAAKAHAGQAIAHAMAAQANAAALgGQAKgHAFgLIAAgaIgYAAQgUAAgLAHg");
	this.shape_45.setTransform(286.7,406.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgHgHgOQgHgOAAgRIAAgDQAAgSAHgOQAHgOAMgHQAMgJANABQAWgBANAQQANAPAAAZIAAAHIhVAAIAAACQAAAVALAOQAMAOARAAQALgBAIgEQAIgDAHgJIAIAGQgOAWgcAAQgPAAgMgIgAgWgnQgLALgCATIBIAAIAAgCQgBgRgJgMQgKgKgPgBQgOAAgKAMg");
	this.shape_46.setTransform(269.3,406.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(255,255,255,0.902)").s().p("AgjBGQgNgRAAgcIAAgCQAAgbANgRQAMgQAWAAQAYAAAMATIAAhEIAOAAIAACrIgNAAIAAgQQgNASgYAAQgVAAgNgRgAgZgMQgJAMAAAaQAAAXAJANQAJANAQAAQAZAAAKgVIAAg4QgKgYgZAAQgPAAgKAOg");
	this.shape_47.setTransform(256.7,404.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(255,255,255,0.902)").s().p("AgmAuQgPgRAAgcIAAgCQAAgRAHgOQAHgOAMgIQAMgHAPAAQAYAAAPARQAPAQAAAcIAAACQAAASgHAOQgGAOgNAHQgMAIgQAAQgXAAgPgRgAgcgkQgMAOAAAWIAAACQAAAVAMAOQALAPARAAQATAAAKgPQALgNAAgXIAAgCQAAgOgEgLQgGgMgJgGQgJgGgMgBQgRAAgLAPg");
	this.shape_48.setTransform(244.2,406.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(255,255,255,0.902)").s().p("AgvBVIAAinIAMAAIAAARQANgTAYAAQAWAAAMARQAMAQAAAdIAAACQAAAbgMARQgMAQgWAAQgXAAgOgRIAAA+gAgVhCQgJAGgFALIAAA5QAFAKAKAGQAIAFAMAAQARAAAJgNQAKgOAAgYQAAgXgKgOQgJgNgRAAQgMAAgJAGg");
	this.shape_49.setTransform(231.7,408.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgHgHgOQgHgOAAgRIAAgDQAAgSAHgOQAHgOAMgHQAMgJANABQAWgBANAQQANAPAAAZIAAAHIhVAAIAAACQAAAVALAOQAMAOARAAQALgBAIgEQAIgDAHgJIAIAGQgOAWgcAAQgPAAgMgIgAgWgnQgLALgCATIBIAAIAAgCQgBgRgJgMQgKgKgPgBQgOAAgKAMg");
	this.shape_50.setTransform(213.7,406.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(255,255,255,0.902)").s().p("AgmAuQgPgRAAgcIAAgCQAAgRAHgOQAGgOANgIQANgHAOAAQAYAAAPARQAPAQAAAcIAAACQAAASgGAOQgIAOgMAHQgMAIgQAAQgXAAgPgRgAgcgkQgLAOgBAWIAAACQABAVALAOQALAPARAAQASAAAMgPQALgNAAgXIAAgCQAAgOgGgLQgEgMgKgGQgJgGgMgBQgRAAgLAPg");
	this.shape_51.setTransform(195.8,406.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(255,255,255,0.902)").s().p("AgiAuQgOgRAAgcIAAgCQAAgSAGgOQAHgNALgIQAMgHAOAAQAVAAANALQAMAMABAUIgMAAQgBgPgKgJQgJgJgPAAQgQAAgLAOQgKANABAYIAAACQgBAYAKAMQALAOAQAAQAPgBAJgHQAKgJABgMIAMAAQgBALgGAKQgGAIgKAFQgLAGgNAAQgWAAgOgRg");
	this.shape_52.setTransform(183.5,406.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(255,255,255,0.902)").s().p("AgGBTIAAh5IANAAIAAB5gAgGhCQgCgCAAgFQAAgDACgDQADgCADgBQAEABADACQACADAAADQAAAFgCACQgDADgEgBQgDABgDgDg");
	this.shape_53.setTransform(175,404.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(255,255,255,0.902)").s().p("AgXBQQgLgGgHgJIAIgIQAOARATABQAQgBAKgJQAJgLAAgRIAAgPQgNASgXAAQgVAAgNgRQgNgRAAgbIAAgCQAAgdANgQQAMgQAWAAQAYgBANAUIAAgSIANAAIAAB2QAAAYgNANQgNAOgXAAQgLgBgMgFgAgZg7QgJANAAAZQAAAXAJANQAJANAQAAQAZAAAKgWIAAg3QgEgMgJgGQgJgGgNAAQgPAAgKAOg");
	this.shape_54.setTransform(165.8,409);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(255,255,255,0.902)").s().p("AgmBGQgPgRAAgcIAAgDQAAgRAHgNQAHgOAMgIQAMgHAPAAQAYAAAPARQAPAQAAAbIAAADQAAASgHAOQgGAOgNAHQgMAIgQAAQgXAAgPgRgAgcgMQgMANAAAXIAAACQAAAWAMAOQALAOARAAQATAAAKgOQALgOAAgXIAAgDQAAgNgEgLQgGgLgJgHQgJgGgMAAQgRAAgLAOgAgHg3IAUgfIAQAAIgaAfg");
	this.shape_55.setTransform(153.3,404.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(255,255,255,0.902)").s().p("AgGBWIAAirIANAAIAACrg");
	this.shape_56.setTransform(144.3,404.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(255,255,255,0.902)").s().p("AgGBTIAAh5IANAAIAAB5gAgGhCQgCgCAAgFQAAgDACgDQADgCADgBQAEABADACQACADAAADQAAAFgCACQgDADgEgBQgDABgDgDg");
	this.shape_57.setTransform(139.2,404.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(255,255,255,0.902)").s().p("AAgA+IAAhPQAAgQgGgIQgIgIgOAAQgLAAgKAIQgJAHgGANIAABTIgMAAIAAh5IAMAAIAAAVQAHgLAKgFQALgHALABQAUgBAJALQAKALAAAWIAABPg");
	this.shape_58.setTransform(130.4,406.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(255,255,255,0.902)").s().p("AgiAzQgLgLAAgWIAAhPIAOAAIAABNQAAAiAbAAQAdAAAHgYIAAhXIAOAAIAAB5IgNAAIgBgQQgMASgZAAQgTgBgKgKg");
	this.shape_59.setTransform(117.7,406.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(255,255,255,0.902)").s().p("ABHA+IAAhPQAAgRgHgHQgHgIgPAAQgPAAgJAJQgKAKgCANIAABPIgMAAIAAhQQAAgPgHgJQgIgHgOAAQgNAAgJAHQgJAHgFAOIAABTIgNAAIAAh5IANAAIAAAUQAHgLAKgFQAKgFAMAAQAdgBAHAYQAGgMALgFQALgHANABQAnAAABAqIAABQg");
	this.shape_60.setTransform(101.4,406.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(255,255,255,0.902)").s().p("AgGBTIAAh5IANAAIAAB5gAgGhCQgCgCAAgFQAAgDACgDQADgCADgBQAEABADACQACADAAADQAAAFgCACQgDADgEgBQgDABgDgDg");
	this.shape_61.setTransform(88.6,404.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(255,255,255,0.902)").s().p("AglA1QgLgJAAgPQABgSAPgLQAOgJAZAAIAYAAIAAgNQABgNgJgIQgHgIgPABQgNgBgKAIQgJAHAAAKIgOAAQAAgOAOgLQAOgLASAAQAUAAAMALQAMAJAAATIAAA4QAAASAEAIIAAABIgPAAQgCgFgBgMQgHAKgKAFQgLAFgMgBQgRAAgLgJgAgWAIQgMAHAAAMQAAAKAHAHQAIAHAMAAQANAAAKgHQALgGAEgLIAAgbIgYAAQgSAAgLAIg");
	this.shape_62.setTransform(459.9,381.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(255,255,255,0.902)").s().p("ABHA9IAAhOQAAgQgHgIQgHgIgPAAQgPAAgJAKQgKAIgCANIAABPIgMAAIAAhPQAAgPgHgIQgIgIgOAAQgNAAgJAHQgJAIgFAOIAABRIgNAAIAAh3IANAAIAAATQAHgKAKgGQAKgGAMAAQAdAAAHAYQAGgLALgHQALgFANgBQAnABABAqIAABPg");
	this.shape_63.setTransform(443.8,381);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgIgHgNQgHgNAAgRIAAgFQAAgQAHgOQAHgOAMgJQAMgHANgBQAWAAANAPQANAPAAAbIAAAGIhVAAIAAADQAAAUALAOQAMANARAAQALAAAIgDQAIgFAHgIIAIAGQgOAWgcgBQgPABgMgIgAgWgnQgLALgCASIBIAAIAAgBQgBgSgJgKQgKgLgPAAQgOAAgKALg");
	this.shape_64.setTransform(427.8,381.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(255,255,255,0.902)").s().p("AgCBFQgGgHAAgRIAAhPIgWAAIAAgLIAWAAIAAgfIAMAAIAAAfIAaAAIAAALIgaAAIAABPQAAALAEAEQADAFAJABIALgCIABAMQgGABgJAAQgNAAgGgIg");
	this.shape_65.setTransform(417.9,379.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(255,255,255,0.902)").s().p("AggA0QgNgJAAgRIANAAQABAMAJAHQAJAGAOAAQAOABAJgHQAIgGAAgJQABgKgJgGQgHgGgQgDQgQgEgIgEQgKgEgEgGQgEgHAAgJQAAgOAMgKQALgIATgBQATAAANALQAMAJAAAQIgOAAQAAgKgIgHQgJgIgNABQgNAAgIAFQgIAHAAAJQAAAJAHAFQAGAFARAEQASAEAJAEQAIAEAEAHQAFAGAAAKQAAAQgNAIQgMAJgUAAQgUAAgNgKg");
	this.shape_66.setTransform(408.7,381.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(255,255,255,0.902)").s().p("AgGBSIAAh3IANAAIAAB3gAgGhCQgCgCAAgEQAAgEACgDQADgDADABQAEgBADADQACADAAAEQAAAEgCACQgDACgEABQgDgBgDgCg");
	this.shape_67.setTransform(400.4,378.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(255,255,255,0.902)").s().p("AggA0QgNgJAAgRIANAAQABAMAJAHQAJAGAOAAQAOABAJgHQAJgGAAgJQgBgKgHgGQgJgGgQgDQgPgEgJgEQgIgEgFgGQgEgHAAgJQAAgOAMgKQAMgIARgBQAVAAAMALQAMAJAAAQIgNAAQAAgKgJgHQgJgIgOABQgMAAgHAFQgJAHAAAJQAAAJAHAFQAGAFARAEQASAEAIAEQAJAEAFAHQAEAGAAAKQAAAQgMAIQgNAJgUAAQgUAAgNgKg");
	this.shape_68.setTransform(392,381.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(255,255,255,0.902)").s().p("AgmAuQgPgRAAgcIAAgCQAAgRAHgOQAHgOAMgIQAMgIAPAAQAYAAAPARQAPARAAAcIAAACQAAARgHAOQgGAOgNAIQgMAIgQgBQgXAAgPgQgAgcgkQgMAOAAAWIAAACQAAAWAMAOQALAOARgBQATABAKgOQALgOAAgXIAAgCQAAgNgEgMQgGgMgJgGQgJgHgMABQgRAAgLAOg");
	this.shape_69.setTransform(374.3,381.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(255,255,255,0.902)").s().p("AgjBGQgNgRAAgcIAAgCQAAgbANgRQAMgQAWAAQAYAAAMATIAAhEIAOAAIAACrIgNAAIAAgQQgNASgYAAQgVAAgNgRgAgZgMQgJAMAAAaQAAAXAJANQAJANAQAAQAZAAAKgVIAAg4QgKgYgZAAQgPAAgKAOg");
	this.shape_70.setTransform(361.2,378.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(255,255,255,0.902)").s().p("AgmAuQgPgRAAgcIAAgCQAAgRAHgOQAGgOANgIQANgIAOAAQAYAAAPARQAPARAAAcIAAACQAAARgGAOQgIAOgMAIQgMAIgQgBQgXAAgPgQgAgcgkQgLAOAAAWIAAACQAAAWALAOQALAOARgBQASABAMgOQAKgOABgXIAAgCQAAgNgGgMQgEgMgKgGQgJgHgMABQgRAAgLAOg");
	this.shape_71.setTransform(343.2,381.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(255,255,255,0.902)").s().p("AglBLQgKgJgBgPQABgSAPgKQAOgLAZAAIAYAAIAAgMQABgNgJgIQgHgHgPAAQgOAAgJAHQgJAHAAAKIgNAAQAAgOANgLQAOgKASAAQAUAAAMAKQAMAKAAASIAAA4QAAASAEAIIAAACIgPAAQgCgGgBgLQgHAJgKAFQgLAFgLAAQgSAAgLgKgAgXAeQgLAHAAANQAAAKAIAGQAHAHAMAAQANAAAKgGQALgHAEgLIAAgaIgYAAQgSAAgMAHgAgfg7QAAgKAHgHQAFgGAKAAQAFAAAEABIAGAFIAHAEQAEACAEAAQAFAAAEgEQAEgEgBgGIAKABQABALgHAGQgGAHgKAAQgIAAgIgHQgHgGgGAAQgGAAgDAEQgEADAAAGg");
	this.shape_72.setTransform(330.4,378.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(255,255,255,0.902)").s().p("AgJBOQAJAAAGgEQAGgEABgGQAAgGgGgDQgFgCgIgBIADgNIAGAAIADAAIgBAGQASACAAARQABAKgKAGQgIAGgPAAgAADAnIgGAAIAAgBIAJAAIAAABIAAgBIgJAAIAAABQgTgDgMgOQgOgQAAgbIAAgEQAAgSAHgOQAFgNANgIQALgHAPAAQATAAANALQANAMABAUIgMAAQgCgPgJgIQgKgJgNAAQgSAAgJANQgKANAAAYIAAAEQAAAWAKANQAJANASAAQANAAAKgIQAJgIACgMIAMAAQgBAKgGAKQgGAJgLAFQgJAEgKABIgDAAIAAAAgAgDAnIAAAAg");
	this.shape_73.setTransform(318.6,383.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(255,255,255,0.902)").s().p("AAhA9IAAhOQgBgQgHgIQgGgIgPAAQgLAAgKAIQgKAIgEANIAABRIgOAAIAAh3IANAAIABAUQAGgLALgGQAKgFALgBQATAAAKAMQAKAKgBAWIAABOg");
	this.shape_74.setTransform(306.4,381);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(255,255,255,0.902)").s().p("AgiAyQgLgLAAgWIAAhNIAOAAIAABLQAAAjAbAAQAdAAAHgYIAAhWIAOAAIAAB3IgNAAIgBgPQgMARgZAAQgTAAgKgLg");
	this.shape_75.setTransform(293.7,381.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(255,255,255,0.902)").s().p("AgOBXIAAhtIgUAAIAAgLIAUAAIAAgOQAAgTAKgKQAIgKARAAQAIAAAGACIgBALQgFgBgHAAQgLAAgGAGQgGAIAAAMIAAAPIAcAAIAAALIgcAAIAABtg");
	this.shape_76.setTransform(284.1,378.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(255,255,255,0.902)").s().p("AgkA1QgMgJAAgPQAAgSAQgLQAOgJAaAAIAXAAIAAgNQABgNgJgIQgHgIgPABQgOgBgJAIQgJAHAAAKIgNAAQAAgOANgLQAOgLASAAQAUAAAMALQAMAJAAATIAAA4QAAASADAIIAAABIgNAAQgDgFgBgMQgGAKgLAFQgLAFgLgBQgSAAgKgJgAgXAIQgLAHAAAMQAAAKAIAHQAHAHAMAAQAMAAAMgHQAKgGAEgLIAAgbIgXAAQgUAAgLAIg");
	this.shape_77.setTransform(268,381.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(255,255,255,0.902)").s().p("AglA1QgLgJABgPQAAgSAPgLQAOgJAZAAIAZAAIAAgNQAAgNgJgIQgHgIgQABQgNgBgJAIQgJAHAAAKIgOAAQAAgOAOgLQAOgLASAAQAUAAAMALQALAJABATIAAA4QAAASAEAIIAAABIgPAAQgCgFAAgMQgIAKgKAFQgLAFgMgBQgRAAgLgJgAgWAIQgMAHAAAMQAAAKAHAHQAIAHAMAAQAMAAALgHQALgGAFgLIAAgbIgZAAQgSAAgLAIg");
	this.shape_78.setTransform(250.1,381.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(255,255,255,0.902)").s().p("AgCBFQgGgHAAgRIAAhPIgWAAIAAgLIAWAAIAAgfIAMAAIAAAfIAaAAIAAALIgaAAIAABPQAAALAEAEQADAFAJABIALgCIABAMQgGABgJAAQgOAAgFgIg");
	this.shape_79.setTransform(240.2,379.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgIgHgNQgHgNAAgRIAAgFQAAgQAHgOQAHgOAMgJQAMgHANgBQAWAAANAPQANAPAAAbIAAAGIhVAAIAAADQAAAUALAOQAMANARAAQALAAAIgDQAIgFAHgIIAIAGQgOAWgcgBQgPABgMgIgAgWgnQgLALgCASIBIAAIAAgBQgBgSgJgKQgKgLgPAAQgOAAgKALg");
	this.shape_80.setTransform(231,381.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(255,255,255,0.902)").s().p("AgOBXIAAhtIgUAAIAAgLIAUAAIAAgOQAAgTAJgKQAJgKARAAQAIAAAGACIgBALQgFgBgHAAQgLAAgHAGQgEAIAAAMIAAAPIAcAAIAAALIgcAAIAABtg");
	this.shape_81.setTransform(221.6,378.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(255,255,255,0.902)").s().p("AglA1QgKgJgBgPQABgSAPgLQAOgJAZAAIAYAAIAAgNQABgNgJgIQgHgIgPABQgNgBgKAIQgJAHAAAKIgOAAQAAgOAOgLQAOgLASAAQAUAAAMALQAMAJAAATIAAA4QAAASAEAIIAAABIgPAAQgCgFgBgMQgHAKgKAFQgLAFgMgBQgRAAgLgJgAgWAIQgMAHAAAMQAAAKAHAHQAIAHAMAAQANAAAKgHQALgGAEgLIAAgbIgYAAQgSAAgLAIg");
	this.shape_82.setTransform(211.1,381.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(255,255,255,0.902)").s().p("AgbA9IAAh3IANAAIAAATQALgVAXgBQAFAAADACIAAAMIgJgBQgNAAgIAHQgIAHgEAOIAABRg");
	this.shape_83.setTransform(196.4,381);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(255,255,255,0.902)").s().p("AglA1QgKgJgBgPQABgSAPgLQAOgJAZAAIAYAAIAAgNQABgNgJgIQgHgIgPABQgOgBgJAIQgJAHAAAKIgNAAQAAgOANgLQAOgLASAAQAUAAAMALQAMAJAAATIAAA4QAAASADAIIAAABIgOAAQgCgFgBgMQgHAKgKAFQgLAFgLgBQgSAAgLgJgAgXAIQgLAHAAAMQAAAKAIAHQAHAHAMAAQANAAAKgHQALgGAEgLIAAgbIgYAAQgSAAgMAIg");
	this.shape_84.setTransform(185.5,381.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(255,255,255,0.902)").s().p("ABHA9IAAhOQAAgQgHgIQgHgIgPAAQgPAAgJAKQgKAIgCANIAABPIgMAAIAAhPQAAgPgHgIQgIgIgOAAQgNAAgJAHQgJAIgFAOIAABRIgNAAIAAh3IANAAIAAATQAHgKAKgGQAKgGAMAAQAdAAAHAYQAGgLALgHQALgFANgBQAnABABAqIAABPg");
	this.shape_85.setTransform(169.5,381);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(255,255,255,0.902)").s().p("AgiAyQgLgLAAgWIAAhNIAOAAIAABLQAAAjAbAAQAdAAAHgYIAAhWIAOAAIAAB3IgNAAIgBgPQgMARgZAAQgTAAgKgLg");
	this.shape_86.setTransform(153,381.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(255,255,255,0.902)").s().p("AgyBRIAAihIBkAAIAAALIhVAAIAABAIBKAAIAAAKIhKAAIAABMg");
	this.shape_87.setTransform(141,379);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(194,155,1,0.902)").s().p("AgeANIAAgZIA9AAIAAAZg");
	this.shape_88.setTransform(123.8,380.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(194,155,1,0.902)").s().p("AgaBNQgNgGgHgLQgIgLAAgOIAgAAQABAKAGAGQAGAFAJAAQALAAAGgHQAGgIAAgPQAAgOgHgHQgHgGgLAAQgMAAgHAFIgDADIgagHIAKhRIBaAAIAAAaIhAAAIgEAjQALgGAMAAQAYAAANAPQANANAAAaQAAAQgHAMQgGANgNAHQgMAGgRAAQgOAAgMgFg");
	this.shape_89.setTransform(107.2,379.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#C29B01").ss(2,1,1).p("EgiKAiCQoarAAAufQAAxnMeseQMesfRoAAQRoAAMfMfQMeMeAARnQAAOfoZLA");
	this.shape_90.setTransform(283.4,228.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(234,187,1,0.008)").s().p("EgiKAiCQoarAAAufQAAxnMeseQMfsfRnAAQRpAAMeMfQMeMeAARnQAAOfoZLAg");
	this.shape_91.setTransform(283.4,228.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#C29B01").ss(2,1,1).p("EgkSAi4Qn/rGAAuYQAAyVM+s+QM+s+SVAAQSWAAM+M+QM9M+AASVQAAOYn+LG");
	this.shape_92.setTransform(283.4,223.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(234,187,1,0.008)").s().p("EgkRAi4QoArGAAuYQAByVM9s+QM+s+SVAAQSVAAM/M+QM9M+ABSVQAAOYn/LGg");
	this.shape_93.setTransform(283.4,223.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.popup5, new cjs.Rectangle(-1,-1,568.7,448.4), null);


(lib.popup4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btn_fechar.addEventListener("click", fechar.bind(this));
		function fechar(){
			createjs.Tween.get(this.parent.popup4)
			.to({y:700}, 1000, createjs.Ease.quartInOut);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn_fechar
	this.btn_fechar = new lib.btn_fechar();
	this.btn_fechar.name = "btn_fechar";
	this.btn_fechar.parent = this;
	this.btn_fechar.setTransform(283.4,30.3,1,1,0,0,0,18.7,19.4);
	new cjs.ButtonHelper(this.btn_fechar, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_fechar).wait(1));

	// txt
	this.instance = new lib.cancer();
	this.instance.parent = this;
	this.instance.setTransform(153.6,44.6,0.294,0.294);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.902)").s().p("AgGAHQgDgDAAgEQAAgDADgCQACgDAEAAQAEAAADADQADACAAADQAAAEgDADQgDACgEAAQgEAAgCgCg");
	this.shape.setTransform(346.5,438.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgHgHgOQgHgOAAgQIAAgFQAAgRAHgOQAHgOAMgHQAMgIANAAQAWAAANAOQANAPAAAbIAAAGIhVAAIAAADQAAAUALAOQAMANARAAQALAAAIgDQAIgEAHgJIAIAGQgOAWgcAAQgPAAgMgIgAgWgnQgLALgCASIBIAAIAAgBQgBgSgJgLQgKgLgPABQgOAAgKALg");
	this.shape_1.setTransform(338.1,433);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.902)").s().p("AgCBFQgGgHAAgQIAAhQIgXAAIAAgLIAXAAIAAgfIAMAAIAAAfIAaAAIAAALIgaAAIAABQQAAAKAEAEQAEAGAIAAIALgBIAAALQgFABgJAAQgOAAgFgIg");
	this.shape_2.setTransform(328.2,431.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.902)").s().p("AAgA9IAAhOQAAgQgGgIQgIgIgOAAQgLAAgKAIQgJAIgGAMIAABSIgMAAIAAh3IAMAAIAAAUQAIgLAJgGQALgFALAAQAUAAAJALQAKAKAAAWIAABOg");
	this.shape_3.setTransform(318.5,432.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgHgHgOQgHgOAAgQIAAgFQAAgRAHgOQAHgOAMgHQAMgIANAAQAWAAANAOQANAPAAAbIAAAGIhVAAIAAADQAAAUALAOQAMANARAAQALAAAIgDQAIgEAHgJIAIAGQgOAWgcAAQgPAAgMgIgAgWgnQgLALgCASIBIAAIAAgBQgBgSgJgLQgKgLgPABQgOAAgKALg");
	this.shape_4.setTransform(306.3,433);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.902)").s().p("ABHA9IAAhOQAAgQgHgIQgHgIgPAAQgPAAgJAKQgKAIgCANIAABPIgMAAIAAhPQAAgQgHgHQgIgIgOAAQgNAAgJAHQgJAIgFANIAABSIgNAAIAAh3IANAAIAAATQAHgLAKgFQAKgGAMABQAdAAAHAXQAGgLALgHQALgFANAAQAnAAABAqIAABPg");
	this.shape_5.setTransform(290.3,432.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.902)").s().p("AglA1QgLgKABgOQgBgSAPgKQAPgKAaAAIAYAAIAAgOQgBgMgHgIQgJgHgPAAQgMAAgKAHQgJAHAAAKIgOAAQAAgPAOgKQANgKATAAQAUAAAMAKQAMAJAAATIAAA4QAAARAEAJIAAABIgPAAQgBgFgBgMQgIAKgKAFQgLAFgMAAQgRAAgLgKgAgWAIQgMAHAAANQAAAJAHAHQAIAHAMAAQAMAAALgGQALgHAFgLIAAgaIgYAAQgUgBgKAIg");
	this.shape_6.setTransform(273.8,433);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.902)").s().p("AgjBGQgNgRAAgcIAAgCQAAgbANgRQAMgQAWAAQAYAAAMATIAAhEIAOAAIAACrIgNAAIAAgQQgNASgYAAQgVAAgNgRgAgZgMQgJAMAAAaQAAAXAJANQAJANAQAAQAZAAAKgVIAAg4QgKgYgZAAQgPAAgKAOg");
	this.shape_7.setTransform(261.2,430.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.902)").s().p("AgGBSIAAh3IANAAIAAB3gAgGhCQgCgDAAgEQAAgDACgDQADgCADgBQAEABADACQACADAAADQAAAEgCADQgDACgEABQgDgBgDgCg");
	this.shape_8.setTransform(252.5,430.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.902)").s().p("AgwBVIAAinIAMAAIACARQANgTAYAAQAVAAANARQALAQABAdIAAACQAAAbgNARQgNAQgUAAQgYAAgNgRIAAA+gAgVhCQgJAGgEALIAAA5QAEAKAJAGQAKAFALAAQARAAAJgNQAKgOgBgYQABgXgKgOQgJgNgRAAQgMAAgJAGg");
	this.shape_9.setTransform(243.9,435.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.902)").s().p("AglA1QgKgKgBgOQABgSAPgKQAOgKAZAAIAYAAIAAgOQABgMgJgIQgHgHgPAAQgOAAgJAHQgJAHAAAKIgNAAQAAgPANgKQAOgKASAAQAUAAAMAKQAMAJAAATIAAA4QAAARAEAJIAAABIgPAAQgCgFgBgMQgHAKgKAFQgLAFgLAAQgSAAgLgKgAgXAIQgLAHAAANQAAAJAIAHQAHAHAMAAQANAAAKgGQALgHAEgLIAAgaIgYAAQgSgBgMAIg");
	this.shape_10.setTransform(231,433);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.902)").s().p("AgbA9IAAh3IANAAIAAATQALgVAXAAQAFAAADABIAAAMIgJgBQgNAAgIAHQgIAHgEANIAABSg");
	this.shape_11.setTransform(221.9,432.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.902)").s().p("AgmAuQgPgRAAgcIAAgCQAAgRAHgOQAGgOANgIQANgIAOAAQAYABAPAQQAPARAAAcIAAACQAAARgGAPQgIANgMAIQgMAHgQAAQgXAAgPgQgAgcgkQgLAOAAAWIAAACQAAAVALAOQALAOARABQASgBAMgOQAKgOABgWIAAgCQAAgNgGgMQgEgMgKgGQgJgHgMAAQgRAAgLAPg");
	this.shape_12.setTransform(466,407.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.902)").s().p("AgCBGQgGgJAAgQIAAhPIgXAAIAAgLIAXAAIAAgfIAMAAIAAAfIAZAAIAAALIgZAAIAABPQAAALAEAFQADAEAJAAIALgBIAAALQgFACgJAAQgOAAgFgHg");
	this.shape_13.setTransform(455.6,406);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.902)").s().p("AgGBTIAAh5IANAAIAAB5gAgGhCQgCgCAAgEQAAgEACgDQADgCADAAQAEAAADACQACADAAAEQAAAEgCACQgDADgEAAQgDAAgDgDg");
	this.shape_14.setTransform(449.7,405.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.902)").s().p("AgiAzQgLgLAAgXIAAhOIAOAAIAABMQAAAjAbAAQAdAAAHgYIAAhXIAOAAIAAB5IgNAAIgBgQQgMARgZAAQgTABgKgLg");
	this.shape_15.setTransform(440.8,407.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.902)").s().p("ABHA+IAAhPQAAgRgHgHQgHgIgPAAQgPAAgJAKQgKAIgCANIAABQIgMAAIAAhQQAAgPgHgJQgIgHgOAAQgNAAgJAHQgJAHgFAPIAABSIgNAAIAAh5IANAAIAAAUQAHgKAKgGQAKgFAMgBQAdABAHAXQAGgMALgFQALgHANAAQAnAAABArIAABQg");
	this.shape_16.setTransform(424.4,407.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.902)").s().p("AgbA+IAAh5IANAAIAAAUQALgVAWgBQAGABADABIAAAMIgJgBQgNAAgHAHQgJAHgEAOIAABSg");
	this.shape_17.setTransform(405.5,407.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.902)").s().p("AgGBTIAAh5IANAAIAAB5gAgGhCQgCgCAAgEQAAgEACgDQADgCADAAQAEAAADACQACADAAAEQAAAEgCACQgDADgEAAQgDAAgDgDg");
	this.shape_18.setTransform(398.4,405.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.902)").s().p("AgvA9IAAgKIBJhjIhGAAIAAgMIBXAAIAAALIhJBiIBOAAIAAAMg");
	this.shape_19.setTransform(390.4,407.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.902)").s().p("AgiAzQgLgLAAgXIAAhOIAOAAIAABMQAAAjAbAAQAdAAAHgYIAAhXIAOAAIAAB5IgNAAIgBgQQgMARgZAAQgTABgKgLg");
	this.shape_20.setTransform(378.4,407.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.902)").s().p("AgjBGQgNgRAAgcIAAgCQAAgbANgRQAMgQAWAAQAYAAAMATIAAhEIAOAAIAACrIgNAAIAAgQQgNASgYAAQgVAAgNgRgAgZgMQgJAMAAAaQAAAXAJANQAJANAQAAQAZAAAKgVIAAg4QgKgYgZAAQgPAAgKAOg");
	this.shape_21.setTransform(365.4,405);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.902)").s().p("AgmAuQgPgRAAgcIAAgCQAAgRAHgOQAHgOAMgIQAMgIAPAAQAYABAPAQQAPARAAAcIAAACQAAARgHAPQgGANgNAIQgMAHgQAAQgXAAgPgQgAgcgkQgLAOAAAWIAAACQAAAVALAOQALAOARABQATgBAKgOQAMgOAAgWIAAgCQgBgNgFgMQgEgMgKgGQgJgHgMAAQgRAAgLAPg");
	this.shape_22.setTransform(353,407.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.902)").s().p("AgbA+IAAh5IANAAIAAAUQALgVAWgBQAGABADABIAAAMIgJgBQgNAAgHAHQgJAHgEAOIAABSg");
	this.shape_23.setTransform(343.4,407.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.902)").s().p("AgvBVIAAinIALAAIABARQANgTAZAAQAVAAAMARQANAQAAAdIAAACQAAAbgNARQgNAQgUAAQgYAAgOgRIAAA+gAgVhCQgIAGgGALIAAA5QAGAKAJAGQAJAFALAAQAQAAAKgNQAJgOAAgYQAAgXgJgOQgKgNgQAAQgMAAgJAGg");
	this.shape_24.setTransform(332.8,409.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgIgHgNQgHgOAAgQIAAgEQAAgRAHgOQAHgOAMgJQAMgIANAAQAWABANAPQANAPAAAZIAAAHIhVAAIAAADQAAAUALAOQAMAOARAAQALAAAIgFQAIgEAHgIIAIAHQgOAUgcAAQgPAAgMgHgAgWgnQgLALgCATIBIAAIAAgCQgBgSgJgKQgKgMgPAAQgOAAgKAMg");
	this.shape_25.setTransform(320.3,407.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.902)").s().p("AgbA+IAAh5IANAAIAAAUQALgVAWgBQAGABADABIAAAMIgJgBQgNAAgHAHQgJAHgEAOIAABSg");
	this.shape_26.setTransform(311.3,407.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgIgHgNQgHgOAAgQIAAgEQAAgRAHgOQAHgOAMgJQAMgIANAAQAWABANAPQANAPAAAZIAAAHIhVAAIAAADQAAAUALAOQAMAOARAAQALAAAIgFQAIgEAHgIIAIAHQgOAUgcAAQgPAAgMgHgAgWgnQgLALgCATIBIAAIAAgCQgBgSgJgKQgKgMgPAAQgOAAgKAMg");
	this.shape_27.setTransform(295.3,407.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.902)").s().p("AggA0QgNgKAAgQIANAAQABAMAJAHQAJAGAOABQAOAAAJgHQAIgGAAgJQABgKgJgGQgHgGgQgDQgQgEgIgDQgKgFgEgGQgEgGAAgJQAAgPAMgKQAMgIASgBQATABANAJQAMALAAAPIgOAAQAAgKgIgHQgJgIgNAAQgNABgIAFQgIAHAAAJQAAAJAHAFQAGAFARAEQASAEAJAEQAIAFAEAGQAFAHAAAJQAAAPgNAJQgMAKgUgBQgUABgNgLg");
	this.shape_28.setTransform(283.5,407.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.902)").s().p("AgiAzQgLgLAAgXIAAhOIAOAAIAABMQAAAjAbAAQAdAAAHgYIAAhXIAOAAIAAB5IgNAAIgBgQQgMARgZAAQgTABgKgLg");
	this.shape_29.setTransform(265.9,407.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.902)").s().p("AgmAuQgPgRAAgcIAAgCQAAgRAHgOQAGgOANgIQANgIAOAAQAYABAPAQQAPARAAAcIAAACQAAARgGAPQgIANgMAIQgMAHgQAAQgXAAgPgQgAgcgkQgLAOAAAWIAAACQAAAVALAOQALAOARABQASgBAMgOQAKgOABgWIAAgCQAAgNgGgMQgEgMgKgGQgJgHgMAAQgRAAgLAPg");
	this.shape_30.setTransform(253.2,407.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgIgHgNQgHgOAAgQIAAgEQAAgRAHgOQAHgOAMgJQAMgIANAAQAWABANAPQANAPAAAZIAAAHIhVAAIAAADQAAAUALAOQAMAOARAAQALAAAIgFQAIgEAHgIIAIAHQgOAUgcAAQgPAAgMgHgAgWgnQgLALgCATIBIAAIAAgCQgBgSgJgKQgKgMgPAAQgOAAgKAMg");
	this.shape_31.setTransform(235.3,407.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0.902)").s().p("AgCBGQgGgJAAgQIAAhPIgXAAIAAgLIAXAAIAAgfIAMAAIAAAfIAZAAIAAALIgZAAIAABPQAAALAEAFQAEAEAIAAIALgBIAAALQgFACgJAAQgNAAgGgHg");
	this.shape_32.setTransform(225.4,406);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,255,255,0.902)").s().p("AAhA+IAAhPQgBgQgGgIQgIgIgOAAQgMAAgJAIQgKAHgEAOIAABSIgOAAIAAh5IANAAIABAVQAHgLAJgFQALgHALAAQAUABAJAKQAJALAAAWIAABPg");
	this.shape_33.setTransform(215.7,407.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgIgHgNQgHgOAAgQIAAgEQAAgRAHgOQAHgOAMgJQAMgIANAAQAWABANAPQANAPAAAZIAAAHIhVAAIAAADQAAAUALAOQAMAOARAAQALAAAIgFQAIgEAHgIIAIAHQgOAUgcAAQgPAAgMgHgAgWgnQgLALgCATIBIAAIAAgCQgBgSgJgKQgKgMgPAAQgOAAgKAMg");
	this.shape_34.setTransform(203.6,407.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,255,255,0.902)").s().p("ABHA+IAAhPQAAgRgHgHQgHgIgPAAQgPAAgJAKQgKAIgCANIAABQIgMAAIAAhQQAAgPgHgJQgIgHgOAAQgNAAgJAHQgJAHgFAPIAABSIgNAAIAAh5IANAAIAAAUQAHgKAKgGQAKgFAMgBQAdABAHAXQAGgMALgFQALgHANAAQAnAAABArIAABQg");
	this.shape_35.setTransform(187.5,407.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(255,255,255,0.902)").s().p("AgGBWIAAirIANAAIAACrg");
	this.shape_36.setTransform(174.8,404.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0.902)").s().p("AglA1QgLgKABgPQgBgRAQgLQAOgJAZAAIAZAAIAAgNQgBgOgHgHQgJgIgPAAQgNAAgJAIQgJAHAAAKIgOAAQAAgOAOgLQANgLATAAQAUABAMAJQAMALAAARIAAA5QAAASAEAIIAAACIgPAAQgBgGgBgLQgIAJgKAFQgLAEgMAAQgRAAgLgJgAgWAIQgMAHAAAMQAAAKAHAHQAIAHAMAAQAMAAALgHQALgGAFgLIAAgbIgZAAQgTAAgKAIg");
	this.shape_37.setTransform(165.9,407.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(255,255,255,0.902)").s().p("ABHA+IAAhPQAAgRgHgHQgHgIgPAAQgPAAgJAKQgKAIgCANIAABQIgMAAIAAhQQAAgPgHgJQgIgHgOAAQgNAAgJAHQgJAHgFAPIAABSIgNAAIAAh5IANAAIAAAUQAHgKAKgGQAKgFAMgBQAdABAHAXQAGgMALgFQALgHANAAQAnAAABArIAABQg");
	this.shape_38.setTransform(149.8,407.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,255,255,0.902)").s().p("AgbA+IAAh5IANAAIAAAUQALgVAWgBQAGABADABIAAAMIgJgBQgNAAgHAHQgJAHgEAOIAABSg");
	this.shape_39.setTransform(136.5,407.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(255,255,255,0.902)").s().p("AgmAuQgPgRAAgcIAAgCQAAgRAHgOQAGgOANgIQANgIAOAAQAYABAPAQQAPARAAAcIAAACQAAARgGAPQgIANgMAIQgMAHgQAAQgXAAgPgQgAgcgkQgLAOAAAWIAAACQAAAVALAOQALAOARABQASgBAMgOQALgOgBgWIAAgCQABgNgGgMQgEgMgKgGQgJgHgMAAQgRAAgLAPg");
	this.shape_40.setTransform(125.6,407.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(255,255,255,0.902)").s().p("AAgA+IAAhPQAAgQgHgIQgGgIgPAAQgLAAgKAIQgKAHgEAOIAABSIgOAAIAAh5IANAAIABAVQAGgLALgFQAKgHALAAQATABAKAKQAKALgBAWIAABPg");
	this.shape_41.setTransform(112.9,407.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(255,255,255,0.902)").s().p("AgkA1QgMgKAAgPQAAgRAPgLQAPgJAaAAIAXAAIAAgNQAAgOgIgHQgHgIgPAAQgOAAgJAIQgJAHAAAKIgNAAQAAgOANgLQAOgLASAAQAUABAMAJQALALABARIAAA5QAAASADAIIAAACIgNAAQgCgGgCgLQgGAJgLAFQgLAEgLAAQgSAAgKgJgAgXAIQgLAHAAAMQAAAKAIAHQAHAHAMAAQAMAAAMgHQAKgGAEgLIAAgbIgXAAQgUAAgLAIg");
	this.shape_42.setTransform(100.2,407.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(255,255,255,0.902)").s().p("AgbA9IAAh4IANAAIAAAUQALgWAWABQAGgBADACIAAAMIgJgBQgNAAgHAHQgJAHgEANIAABSg");
	this.shape_43.setTransform(509.9,381.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgHgHgOQgHgOAAgRIAAgDQAAgSAHgOQAHgOAMgHQAMgJANABQAWgBANAPQANAQAAAZIAAAHIhVAAIAAACQAAAVALAOQAMANARAAQALAAAIgEQAIgDAHgJIAIAGQgOAWgcAAQgPAAgMgIgAgWgnQgLALgCATIBIAAIAAgCQgBgRgJgMQgKgLgPAAQgOAAgKAMg");
	this.shape_44.setTransform(499.5,381.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(255,255,255,0.902)").s().p("AgiAuQgOgRAAgbIAAgEQAAgRAHgOQAFgNANgIQALgHAPAAQATAAANALQANAMABAUIgNAAQgBgPgJgJQgJgJgOAAQgSABgJANQgLANAAAYIAAACQAAAYALAMQAJANASAAQAOAAAJgHQAJgIABgNIANAAQgBALgGAKQgGAIgLAFQgKAFgMABQgXAAgOgRg");
	this.shape_45.setTransform(487.7,381.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(255,255,255,0.902)").s().p("AggA1QgNgKAAgQIANAAQABAMAJAGQAJAHAOgBQAOAAAJgFQAJgHgBgJQAAgKgHgGQgJgHgPgDQgQgDgJgEQgJgEgEgHQgEgFAAgKQAAgOAMgJQALgKATABQATgBANALQAMAKAAAQIgOAAQABgLgJgHQgJgHgNgBQgNAAgHAHQgJAFAAAKQAAAJAHAFQAGAFARAEQARAEAJAEQAKAFADAGQAFAHAAAJQAAAQgMAJQgNAIgUABQgUgBgNgJg");
	this.shape_46.setTransform(476,381.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgHgHgOQgHgOAAgRIAAgDQAAgSAHgOQAHgOAMgHQAMgJANABQAWgBANAPQANAQAAAZIAAAHIhVAAIAAACQAAAVALAOQAMANARAAQALAAAIgEQAIgDAHgJIAIAGQgOAWgcAAQgPAAgMgIgAgWgnQgLALgCATIBIAAIAAgCQgBgRgJgMQgKgLgPAAQgOAAgKAMg");
	this.shape_47.setTransform(464.4,381.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(255,255,255,0.902)").s().p("AgbA9IAAh4IANAAIAAAUQALgWAWABQAGgBADACIAAAMIgJgBQgNAAgHAHQgJAHgEANIAABSg");
	this.shape_48.setTransform(455.3,381.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(255,255,255,0.902)").s().p("AgiAuQgOgRAAgbIAAgEQAAgRAHgOQAGgNAMgIQALgHAPAAQATAAANALQANAMABAUIgNAAQgBgPgJgJQgJgJgOAAQgSABgKANQgJANgBAYIAAACQABAYAJAMQAKANASAAQAOAAAJgHQAJgIABgNIANAAQAAALgHAKQgGAIgLAFQgLAFgLABQgXAAgOgRg");
	this.shape_49.setTransform(444.9,381.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(255,255,255,0.902)").s().p("AgkA1QgLgKAAgOQAAgSAOgKQAPgKAaAAIAXAAIAAgOQAAgMgHgIQgJgHgPgBQgMABgKAHQgJAHAAAKIgNAAQAAgPANgKQANgKATAAQAUgBAMALQALAKABASIAAA4QAAARADAJIAAABIgNAAQgCgFgCgLQgGAJgLAFQgLAFgLAAQgSAAgKgKgAgXAIQgLAHAAANQAAAKAIAGQAHAHAMAAQANAAALgGQAKgHAEgLIAAgaIgXAAQgUAAgLAHg");
	this.shape_50.setTransform(427,381.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(255,255,255,0.902)").s().p("AggA1QgNgKAAgQIANAAQABAMAJAGQAJAHAOgBQAOAAAJgFQAJgHAAgJQgBgKgHgGQgJgHgQgDQgPgDgJgEQgIgEgFgHQgEgFAAgKQAAgOAMgJQAMgKARABQAVgBAMALQAMAKAAAQIgNAAQAAgLgJgHQgJgHgOgBQgMAAgHAHQgJAFAAAKQAAAJAHAFQAHAFAQAEQASAEAIAEQAJAFAFAGQAEAHAAAJQAAAQgMAJQgNAIgUABQgUgBgNgJg");
	this.shape_51.setTransform(409.7,381.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(255,255,255,0.902)").s().p("AgmAuQgPgRAAgcIAAgCQAAgRAHgOQAHgOAMgIQAMgHAPAAQAYgBAPASQAPAQAAAcIAAACQAAASgHANQgGAOgNAIQgMAIgQAAQgXAAgPgRgAgcgkQgLAOAAAWIAAACQAAAWALAOQALANARAAQATAAAKgNQAMgOAAgXIAAgCQgBgOgFgLQgEgLgKgHQgJgGgMgBQgRABgLAOg");
	this.shape_52.setTransform(397.5,381.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(255,255,255,0.902)").s().p("AgaAGIAAgLIA1AAIAAALg");
	this.shape_53.setTransform(387.8,380.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(255,255,255,0.902)").s().p("AgmAuQgPgRAAgcIAAgCQAAgRAHgOQAHgOAMgIQAMgHAPAAQAYgBAPASQAPAQAAAcIAAACQAAASgHANQgGAOgNAIQgMAIgQAAQgXAAgPgRgAgcgkQgLAOAAAWIAAACQAAAWALAOQALANARAAQATAAAKgNQAMgOAAgXIAAgCQgBgOgFgLQgEgLgKgHQgJgGgMgBQgRABgLAOg");
	this.shape_54.setTransform(378.2,381.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(255,255,255,0.902)").s().p("AgjBGQgNgRAAgcIAAgCQAAgbANgRQAMgQAWAAQAYAAAMATIAAhEIAOAAIAACrIgNAAIAAgQQgNASgYAAQgVAAgNgRgAgZgMQgJAMAAAaQAAAXAJANQAJANAQAAQAZAAAKgVIAAg4QgKgYgZAAQgPAAgKAOg");
	this.shape_55.setTransform(365.1,379.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(255,255,255,0.902)").s().p("AAgA9IAAhOQAAgQgHgIQgGgIgPAAQgLAAgKAIQgKAHgEANIAABSIgOAAIAAh4IANAAIABAVQAGgLALgGQAKgFALAAQATgBAKALQAKALgBAWIAABOg");
	this.shape_56.setTransform(352.7,381.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(255,255,255,0.902)").s().p("AglA1QgLgKAAgOQABgSAPgKQAOgKAZAAIAZAAIAAgOQAAgMgJgIQgHgHgQgBQgNABgJAHQgJAHAAAKIgOAAQAAgPAOgKQAOgKASAAQAUgBAMALQALAKABASIAAA4QAAARAEAJIAAABIgPAAQgCgFAAgLQgIAJgKAFQgLAFgMAAQgRAAgLgKgAgWAIQgMAHAAANQAAAKAHAGQAIAHAMAAQAMAAALgGQALgHAFgLIAAgaIgZAAQgSAAgLAHg");
	this.shape_57.setTransform(340.1,381.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(255,255,255,0.902)").s().p("AgEA8Iguh4IAOAAIAkBmIAlhmIAOAAIgtB4g");
	this.shape_58.setTransform(328.6,381.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgHgHgOQgHgOAAgRIAAgDQAAgSAHgOQAHgOAMgHQAMgJANABQAWgBANAPQANAQAAAZIAAAHIhVAAIAAACQAAAVALAOQAMANARAAQALAAAIgEQAIgDAHgJIAIAGQgOAWgcAAQgPAAgMgIgAgWgnQgLALgCATIBIAAIAAgCQgBgRgJgMQgKgLgPAAQgOAAgKAMg");
	this.shape_59.setTransform(317.3,381.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(255,255,255,0.902)").s().p("AgGBWIAAirIANAAIAACrg");
	this.shape_60.setTransform(308.8,379.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(255,255,255,0.902)").s().p("AgLAUQALgOAAgNIAAgSIAMAAIAAAOQAAAWgPAPg");
	this.shape_61.setTransform(298.1,388.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(255,255,255,0.902)").s().p("AggA1QgNgKAAgQIANAAQABAMAJAGQAJAHAOgBQAOAAAJgFQAIgHAAgJQAAgKgIgGQgHgHgQgDQgQgDgJgEQgJgEgEgHQgEgFAAgKQAAgOAMgJQALgKATABQATgBANALQAMAKAAAQIgOAAQAAgLgIgHQgJgHgNgBQgNAAgIAHQgIAFAAAKQAAAJAHAFQAGAFARAEQASAEAJAEQAJAFADAGQAFAHAAAJQAAAQgNAJQgMAIgUABQgUgBgNgJg");
	this.shape_62.setTransform(290.5,381.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(255,255,255,0.902)").s().p("AgkA1QgMgKAAgOQAAgSAPgKQAPgKAaAAIAXAAIAAgOQAAgMgIgIQgHgHgPgBQgOABgJAHQgJAHAAAKIgNAAQAAgPANgKQAOgKASAAQAUgBAMALQALAKABASIAAA4QAAARADAJIAAABIgNAAQgCgFgCgLQgGAJgLAFQgLAFgLAAQgSAAgKgKgAgXAIQgLAHAAANQAAAKAIAGQAHAHAMAAQAMAAAMgGQAKgHAEgLIAAgaIgXAAQgUAAgLAHg");
	this.shape_63.setTransform(278.4,381.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(255,255,255,0.902)").s().p("AgGBWIAAirIANAAIAACrg");
	this.shape_64.setTransform(269.9,379.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(255,255,255,0.902)").s().p("AgiAyQgLgKAAgWIAAhOIAOAAIAABMQAAAiAbAAQAdAAAHgYIAAhWIAOAAIAAB3IgNAAIgBgPQgMASgZAAQgTAAgKgMg");
	this.shape_65.setTransform(261,381.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(255,255,255,0.902)").s().p("AgGBWIAAirIANAAIAACrg");
	this.shape_66.setTransform(252.2,379.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(255,255,255,0.902)").s().p("AgWBPQgNgHgHgOQgHgNAAgRIAAgFQAAgRAHgNQAHgOAMgIQAMgIANAAQAWAAANAPQANAPAAAZIAAAHIhVAAIAAADQAAAUALAOQAMAOARAAQALAAAIgEQAIgEAHgJIAIAHQgOAVgcAAQgPAAgMgIgAgWgPQgLALgCASIBIAAIAAgCQgBgQgJgLQgKgLgPAAQgOAAgKALgAgDg3IAUgfIAQAAIgaAfg");
	this.shape_67.setTransform(243.8,379.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(255,255,255,0.902)").s().p("AgiAuQgOgRAAgbIAAgEQAAgRAGgOQAHgNALgIQAMgHAOAAQAVAAAMALQANAMABAUIgNAAQgBgPgJgJQgKgJgOAAQgQABgLANQgJANgBAYIAAACQABAYAJAMQALANAQAAQAOAAAKgHQAJgIABgNIANAAQAAALgHAKQgGAIgLAFQgLAFgMABQgWAAgOgRg");
	this.shape_68.setTransform(231.9,381.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(255,255,255,0.902)").s().p("AggA1QgNgKAAgQIANAAQABAMAJAGQAJAHAOgBQAOAAAJgFQAJgHAAgJQgBgKgHgGQgJgHgQgDQgPgDgJgEQgIgEgFgHQgEgFAAgKQAAgOAMgJQAMgKARABQAUgBANALQAMAKAAAQIgOAAQABgLgJgHQgJgHgOgBQgMAAgHAHQgJAFAAAKQAAAJAHAFQAGAFARAEQARAEAJAEQAJAFAFAGQAEAHAAAJQAAAQgMAJQgNAIgUABQgUgBgNgJg");
	this.shape_69.setTransform(214.6,381.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(255,255,255,0.902)").s().p("AgkA1QgLgKAAgOQAAgSAOgKQAPgKAaAAIAYAAIAAgOQgBgMgHgIQgJgHgPgBQgMABgKAHQgJAHAAAKIgOAAQAAgPAOgKQANgKATAAQAUgBAMALQAMAKAAASIAAA4QAAARADAJIAAABIgNAAQgCgFgBgLQgIAJgKAFQgLAFgMAAQgRAAgKgKgAgXAIQgLAHAAANQAAAKAIAGQAHAHAMAAQANAAALgGQAKgHAFgLIAAgaIgYAAQgUAAgLAHg");
	this.shape_70.setTransform(202.6,381.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(255,255,255,0.902)").s().p("AgjBGQgNgRAAgcIAAgCQAAgbANgRQAMgQAWAAQAYAAAMATIAAhEIAOAAIAACrIgNAAIAAgQQgNASgYAAQgVAAgNgRgAgZgMQgJAMAAAaQAAAXAJANQAJANAQAAQAZAAAKgVIAAg4QgKgYgZAAQgPAAgKAOg");
	this.shape_71.setTransform(189.9,379.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(255,255,255,0.902)").s().p("AgmAuQgPgRAAgcIAAgCQAAgRAHgOQAHgOAMgIQAMgHAPAAQAYgBAPASQAPAQAAAcIAAACQAAASgHANQgHAOgMAIQgMAIgQAAQgXAAgPgRgAgcgkQgMAOAAAWIAAACQAAAWAMAOQALANARAAQATAAAKgNQALgOAAgXIAAgCQAAgOgEgLQgGgLgJgHQgJgGgMgBQgRABgLAOg");
	this.shape_72.setTransform(171.9,381.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(255,255,255,0.902)").s().p("AgCBFQgGgHAAgQIAAhQIgXAAIAAgLIAXAAIAAgfIAMAAIAAAfIAZAAIAAALIgZAAIAABQQAAAKAEAEQAEAGAIAAIALgBIAAAKQgFACgJAAQgNAAgGgIg");
	this.shape_73.setTransform(161.5,380.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(255,255,255,0.902)").s().p("AAhA9IAAhOQgBgQgHgIQgHgIgOAAQgMAAgJAIQgKAHgEANIAABSIgOAAIAAh4IANAAIABAVQAHgLAJgGQALgFALAAQAUgBAJALQAJALAAAWIAABOg");
	this.shape_74.setTransform(151.8,381.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgHgHgOQgHgOAAgRIAAgDQAAgSAHgOQAHgOAMgHQAMgJANABQAWgBANAPQANAQAAAZIAAAHIhVAAIAAACQAAAVALAOQAMANARAAQALAAAIgEQAIgDAHgJIAIAGQgOAWgcAAQgPAAgMgIgAgWgnQgLALgCATIBIAAIAAgCQgBgRgJgMQgKgLgPAAQgOAAgKAMg");
	this.shape_75.setTransform(139.7,381.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(255,255,255,0.902)").s().p("ABHA9IAAhOQAAgQgHgIQgHgIgPAAQgPAAgJAJQgKAKgCANIAABOIgMAAIAAhPQAAgQgHgHQgIgIgOAAQgNAAgJAHQgJAIgFANIAABSIgNAAIAAh4IANAAIAAAUQAHgLAKgFQAKgGAMABQAdgBAHAYQAGgLALgHQALgFANAAQAnAAABAqIAABPg");
	this.shape_76.setTransform(123.6,381.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(255,255,255,0.902)").s().p("AgGBSIAAh4IANAAIAAB4gAgGhCQgCgDAAgEQAAgDACgDQADgCADgBQAEABADACQACADAAADQAAAEgCADQgDACgEAAQgDABgDgDg");
	this.shape_77.setTransform(110.9,379.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(255,255,255,0.902)").s().p("AgiAuQgOgRAAgbIAAgEQAAgRAHgOQAGgNAMgIQALgHAPAAQATAAANALQANAMABAUIgNAAQgBgPgJgJQgJgJgOAAQgSABgKANQgJANgBAYIAAACQABAYAJAMQAKANASAAQAOAAAJgHQAJgIABgNIANAAQAAALgHAKQgGAIgLAFQgLAFgLABQgXAAgOgRg");
	this.shape_78.setTransform(102.4,381.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(255,255,255,0.902)").s().p("AggA1QgNgKAAgQIANAAQABAMAJAGQAJAHAOgBQAOAAAJgFQAJgHAAgJQAAgKgIgGQgIgHgRgDQgPgDgIgEQgKgEgEgHQgEgFAAgKQAAgOAMgJQAMgKARABQAVgBAMALQAMAKAAAQIgNAAQAAgLgJgHQgJgHgOgBQgMAAgHAHQgJAFAAAKQAAAJAHAFQAHAFAQAEQASAEAIAEQAKAFAEAGQAEAHAAAJQAAAQgNAJQgMAIgUABQgUgBgNgJg");
	this.shape_79.setTransform(90.7,381.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgHgHgOQgHgOAAgRIAAgDQAAgSAHgOQAHgOAMgHQAMgJANABQAWgBANAPQANAQAAAZIAAAHIhVAAIAAACQAAAVALAOQAMANARAAQALAAAIgEQAIgDAHgJIAIAGQgOAWgcAAQgPAAgMgIgAgWgnQgLALgCATIBIAAIAAgCQgBgRgJgMQgKgLgPAAQgOAAgKAMg");
	this.shape_80.setTransform(79.1,381.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(255,255,255,0.902)").s().p("AgbA9IAAh4IANAAIAAAUQALgWAWABQAGgBADACIAAAMIgJgBQgNAAgIAHQgIAHgEANIAABSg");
	this.shape_81.setTransform(70,381.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(255,255,255,0.902)").s().p("AgiAuQgOgRAAgbIAAgEQAAgRAGgOQAHgNALgIQAMgHAOAAQAVAAAMALQANAMABAUIgNAAQgBgPgJgJQgKgJgOAAQgQABgLANQgJANgBAYIAAACQABAYAJAMQALANAQAAQAOAAAKgHQAJgIABgNIANAAQAAALgHAKQgGAIgLAFQgLAFgMABQgWAAgOgRg");
	this.shape_82.setTransform(59.6,381.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(255,255,255,0.902)").s().p("AgmAuQgPgRAAgcIAAgCQAAgRAHgOQAHgOAMgIQAMgIAPAAQAYAAAPARQAPARAAAcIAAACQAAARgHAOQgGAOgNAIQgMAHgQAAQgXAAgPgQgAgcgkQgMAOAAAWIAAACQAAAWAMANQALAOARABQATgBAKgOQALgNAAgXIAAgCQAAgNgEgMQgGgMgJgGQgJgHgMABQgRAAgLAOg");
	this.shape_83.setTransform(505.7,356.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(255,255,255,0.902)").s().p("ABHA9IAAhOQAAgRgHgHQgHgIgPAAQgPAAgJAKQgKAIgCANIAABPIgMAAIAAhPQAAgQgHgIQgIgHgOAAQgNAAgJAHQgJAHgFAPIAABRIgNAAIAAh3IANAAIAAATQAHgLAKgFQAKgGAMAAQAdABAHAXQAGgLALgHQALgFANgBQAnAAABArIAABPg");
	this.shape_84.setTransform(483.5,356.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(255,255,255,0.902)").s().p("AgkA1QgLgJAAgQQAAgRAOgLQAPgJAaAAIAXAAIAAgNQAAgOgHgHQgJgIgOABQgNgBgKAIQgJAHAAAKIgNAAQAAgOANgLQANgLATAAQAUABAMAJQALAKABATIAAA4QAAASADAIIAAACIgNAAQgCgGgCgMQgGAKgLAFQgLAFgLgBQgSAAgKgJgAgXAIQgLAHAAAMQAAAKAIAHQAHAHAMAAQANAAALgHQAKgGAEgLIAAgbIgXAAQgUAAgLAIg");
	this.shape_85.setTransform(467.1,356.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(255,255,255,0.902)").s().p("AgGBWIAAirIANAAIAACrg");
	this.shape_86.setTransform(458.5,353.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(255,255,255,0.902)").s().p("AgmAuQgPgRAAgcIAAgCQAAgRAHgOQAGgOANgIQANgIAOAAQAYAAAPARQAPARAAAcIAAACQAAARgGAOQgIAOgMAIQgMAHgQAAQgXAAgPgQgAgcgkQgMAOABAWIAAACQgBAWAMANQALAOARABQASgBAMgOQALgNAAgXIAAgCQAAgNgGgMQgEgMgKgGQgJgHgMABQgRAAgLAOg");
	this.shape_87.setTransform(449.6,356.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(255,255,255,0.902)").s().p("AgbA9IAAh3IANAAIAAATQALgVAXgBQAFAAADACIAAAMIgJgBQgNAAgIAHQgIAHgEAOIAABRg");
	this.shape_88.setTransform(440,356.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(255,255,255,0.902)").s().p("AgCBGQgGgJAAgQIAAhPIgXAAIAAgLIAXAAIAAgfIAMAAIAAAfIAZAAIAAALIgZAAIAABPQAAALAEAFQAEAEAIAAIALgBIAAAMQgFABgJAAQgNAAgGgHg");
	this.shape_89.setTransform(431.5,354.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(255,255,255,0.902)").s().p("AAhA9IAAhOQgBgQgGgIQgIgIgOAAQgMAAgJAIQgKAIgEANIAABRIgOAAIAAh3IANAAIABAUQAHgLAJgGQALgFALgBQAUAAAJAMQAJAKAAAWIAABOg");
	this.shape_90.setTransform(421.8,356.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(255,255,255,0.902)").s().p("AgmAuQgPgRAAgcIAAgCQAAgRAHgOQAHgOAMgIQAMgIAPAAQAYAAAPARQAPARAAAcIAAACQAAARgHAOQgGAOgNAIQgMAHgQAAQgXAAgPgQgAgcgkQgMAOABAWIAAACQgBAWAMANQALAOARABQATgBAKgOQAMgNAAgXIAAgCQgBgNgFgMQgEgMgKgGQgJgHgMABQgRAAgLAOg");
	this.shape_91.setTransform(409.1,356.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(255,255,255,0.902)").s().p("AgiAuQgOgQAAgdIAAgDQAAgRAHgOQAFgOANgHQALgIAPAAQATAAANAMQANAMABATIgNAAQgBgOgJgIQgJgJgOAAQgSAAgJANQgLANAAAXIAAAEQAAAWALAOQAJAMASABQAOAAAJgJQAJgHABgNIANAAQgBALgGAJQgGAJgLAGQgKAEgMAAQgXAAgOgQg");
	this.shape_92.setTransform(396.8,356.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgIgHgNQgHgNAAgRIAAgFQAAgQAHgOQAHgOAMgJQAMgHANgBQAWAAANAPQANAQAAAaIAAAGIhVAAIAAADQAAAUALAOQAMANARABQALAAAIgEQAIgFAHgIIAIAHQgOAUgcAAQgPAAgMgHgAgWgnQgLALgCASIBIAAIAAgBQgBgRgJgLQgKgLgPAAQgOgBgKAMg");
	this.shape_93.setTransform(379.4,356.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(255,255,255,0.902)").s().p("AgiAzQgLgMAAgWIAAhNIAOAAIAABLQAAAjAbAAQAdAAAHgYIAAhWIAOAAIAAB4IgNAAIgBgQQgMARgZAAQgTABgKgLg");
	this.shape_94.setTransform(367.2,356.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(255,255,255,0.902)").s().p("AAjBVIAAg+QgNARgXAAQgVAAgNgQQgNgRAAgcIAAgBQAAgdANgQQAMgRAWAAQAYAAAMATIABgRIANAAIAACngAgZg7QgJANAAAaQAAAWAJAOQAKANAPAAQAZAAAKgVIAAg6QgFgLgJgGQgJgGgLAAQgQAAgKAOg");
	this.shape_95.setTransform(354.2,358.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(255,255,255,0.902)").s().p("AggA0QgNgKAAgQIANAAQABAMAJAHQAJAGAOABQAOAAAJgHQAJgGAAgJQgBgKgHgGQgJgGgQgDQgPgEgJgDQgIgFgFgGQgEgHAAgIQAAgPAMgKQAMgIARgBQAVABAMAJQAMAKAAAQIgNAAQAAgKgJgHQgJgIgOABQgMAAgHAFQgJAHAAAJQAAAJAHAFQAHAFAQAEQASAEAIAEQAJAFAFAGQAEAHAAAJQAAAQgMAIQgNAKgUgBQgUABgNgLg");
	this.shape_96.setTransform(336.8,356.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgIgHgNQgHgNAAgRIAAgFQAAgQAHgOQAHgOAMgJQAMgHANgBQAWAAANAPQANAQAAAaIAAAGIhVAAIAAADQAAAUALAOQAMANARABQALAAAIgEQAIgFAHgIIAIAHQgOAUgcAAQgPAAgMgHgAgWgnQgLALgCASIBIAAIAAgBQgBgRgJgLQgKgLgPAAQgOgBgKAMg");
	this.shape_97.setTransform(325.2,356.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(255,255,255,0.902)").s().p("AgCBGQgGgJAAgQIAAhPIgXAAIAAgLIAXAAIAAgfIAMAAIAAAfIAZAAIAAALIgZAAIAABPQAAALAEAFQADAEAJAAIALgBIAAAMQgFABgJAAQgOAAgFgHg");
	this.shape_98.setTransform(315.2,354.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(255,255,255,0.902)").s().p("AAhA9IAAhOQgBgQgGgIQgIgIgOAAQgMAAgJAIQgJAIgGANIAABRIgMAAIAAh3IAMAAIAAAUQAHgLAKgGQALgFALgBQAUAAAJAMQAJAKAAAWIAABOg");
	this.shape_99.setTransform(305.5,356.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(255,255,255,0.902)").s().p("AgkA1QgLgJAAgQQAAgRAOgLQAPgJAaAAIAXAAIAAgNQAAgOgHgHQgJgIgPABQgMgBgKAIQgJAHAAAKIgNAAQAAgOANgLQANgLATAAQAUABAMAJQALAKABATIAAA4QAAASADAIIAAACIgNAAQgCgGgCgMQgGAKgLAFQgLAFgLgBQgSAAgKgJgAgXAIQgLAHAAAMQAAAKAIAHQAHAHAMAAQANAAALgHQAKgGAEgLIAAgbIgXAAQgUAAgLAIg");
	this.shape_100.setTransform(292.9,356.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(255,255,255,0.902)").s().p("AgCBGQgGgJAAgQIAAhPIgXAAIAAgLIAXAAIAAgfIAMAAIAAAfIAZAAIAAALIgZAAIAABPQAAALAEAFQAEAEAIAAIALgBIAAAMQgFABgJAAQgNAAgGgHg");
	this.shape_101.setTransform(283,354.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(255,255,255,0.902)").s().p("AgbA9IAAh3IANAAIAAATQALgVAWgBQAGAAADACIAAAMIgJgBQgNAAgHAHQgJAHgEAOIAABRg");
	this.shape_102.setTransform(276.5,356.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(255,255,255,0.902)").s().p("AgmAuQgPgRAAgcIAAgCQAAgRAHgOQAHgOAMgIQAMgIAPAAQAYAAAPARQAPARAAAcIAAACQAAARgHAOQgHAOgMAIQgMAHgQAAQgXAAgPgQgAgcgkQgMAOAAAWIAAACQAAAWAMANQALAOARABQATgBAKgOQALgNAAgXIAAgCQAAgNgEgMQgGgMgJgGQgJgHgMABQgRAAgLAOg");
	this.shape_103.setTransform(265.5,356.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(255,255,255,0.902)").s().p("AgwBVIAAinIANAAIABARQANgTAYAAQAVAAANARQAMAQAAAdIAAACQgBAbgMARQgNAQgUAAQgYAAgNgRIAAA+gAgVhCQgJAGgEALIAAA5QAFAKAIAGQAKAFALAAQAQAAAKgNQAKgOAAgYQAAgXgKgOQgKgNgQAAQgMAAgJAGg");
	this.shape_104.setTransform(253,358.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(255,255,255,0.902)").s().p("ABHA9IAAhOQAAgRgHgHQgHgIgPAAQgPAAgJAKQgKAIgCANIAABPIgMAAIAAhPQAAgQgHgIQgIgHgOAAQgNAAgJAHQgJAHgFAPIAABRIgNAAIAAh3IANAAIAAATQAHgLAKgFQAKgGAMAAQAdABAHAXQAGgLALgHQALgFANgBQAnAAABArIAABPg");
	this.shape_105.setTransform(236.3,356.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(255,255,255,0.902)").s().p("AgGBTIAAh4IANAAIAAB4gAgGhCQgCgCAAgEQAAgEACgDQADgCADAAQAEAAADACQACADAAAEQAAAEgCACQgDADgEAAQgDAAgDgDg");
	this.shape_106.setTransform(223.6,354);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(255,255,255,0.902)").s().p("AggA0QgNgKAAgQIANAAQABAMAJAHQAJAGAOABQAOAAAJgHQAIgGAAgJQABgKgJgGQgHgGgRgDQgPgEgIgDQgKgFgEgGQgEgHAAgIQAAgPAMgKQALgIASgBQAVABAMAJQAMAKAAAQIgNAAQAAgKgJgHQgJgIgOABQgMAAgIAFQgIAHAAAJQAAAJAHAFQAHAFAQAEQARAEAKAEQAIAFAFAGQAEAHAAAJQAAAQgNAIQgMAKgUgBQgUABgNgLg");
	this.shape_107.setTransform(209.6,356.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgIgHgNQgHgNAAgRIAAgFQAAgQAHgOQAHgOAMgJQAMgHANgBQAWAAANAPQANAQAAAaIAAAGIhVAAIAAADQAAAUALAOQAMANARABQALAAAIgEQAIgFAHgIIAIAHQgOAUgcAAQgPAAgMgHgAgWgnQgLALgCASIBIAAIAAgBQgBgRgJgLQgKgLgPAAQgOgBgKAMg");
	this.shape_108.setTransform(198,356.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(255,255,255,0.902)").s().p("AAhA9IAAhOQgBgQgHgIQgGgIgPAAQgLAAgKAIQgKAIgEANIAABRIgOAAIAAh3IANAAIABAUQAGgLALgGQAKgFALgBQATAAAKAMQAKAKgBAWIAABOg");
	this.shape_109.setTransform(185.8,356.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgIgHgNQgHgNAAgRIAAgFQAAgQAHgOQAHgOAMgJQAMgHANgBQAWAAANAPQANAQAAAaIAAAGIhVAAIAAADQAAAUALAOQAMANARABQALAAAIgEQAIgFAHgIIAIAHQgOAUgcAAQgPAAgMgHgAgWgnQgLALgCASIBIAAIAAgBQgBgRgJgLQgKgLgPAAQgOgBgKAMg");
	this.shape_110.setTransform(173.6,356.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(255,255,255,0.902)").s().p("AgXBQQgLgGgHgJIAIgIQAOARATAAQAQABAKgLQAJgJAAgSIAAgPQgNARgXAAQgVAAgNgQQgNgRAAgcIAAgBQAAgcANgRQAMgRAWAAQAYABANATIAAgRIANAAIAAB1QAAAXgNAOQgNANgXAAQgLABgMgGgAgZg8QgJAOAAAZQAAAWAJAOQAJANAQAAQAZAAAKgWIAAg3QgEgMgJgGQgJgGgNAAQgPAAgKANg");
	this.shape_111.setTransform(161,358.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(255,255,255,0.902)").s().p("ABHA9IAAhOQAAgRgHgHQgHgIgPAAQgPAAgJAKQgKAIgCANIAABPIgMAAIAAhPQAAgQgHgIQgIgHgOAAQgNAAgJAHQgJAHgFAPIAABRIgNAAIAAh3IANAAIAAATQAHgLAKgFQAKgGAMAAQAdABAHAXQAGgLALgHQALgFANgBQAnAAABArIAABPg");
	this.shape_112.setTransform(139.3,356.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgIgHgNQgHgNAAgRIAAgFQAAgQAHgOQAHgOAMgJQAMgHANgBQAWAAANAPQANAQAAAaIAAAGIhVAAIAAADQAAAUALAOQAMANARABQALAAAIgEQAIgFAHgIIAIAHQgOAUgcAAQgPAAgMgHgAgWgnQgLALgCASIBIAAIAAgBQgBgRgJgLQgKgLgPAAQgOgBgKAMg");
	this.shape_113.setTransform(123.3,356.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("rgba(255,255,255,0.902)").s().p("ABHA9IAAhOQAAgRgHgHQgHgIgPAAQgPAAgJAKQgKAIgCANIAABPIgMAAIAAhPQAAgQgHgIQgIgHgOAAQgNAAgJAHQgJAHgFAPIAABRIgNAAIAAh3IANAAIAAATQAHgLAKgFQAKgGAMAAQAdABAHAXQAGgLALgHQALgFANgBQAnAAABArIAABPg");
	this.shape_114.setTransform(101.6,356.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgIgHgNQgHgNAAgRIAAgFQAAgQAHgOQAHgOAMgJQAMgHANgBQAWAAANAPQANAQAAAaIAAAGIhVAAIAAADQAAAUALAOQAMANARABQALAAAIgEQAIgFAHgIIAIAHQgOAUgcAAQgPAAgMgHgAgWgnQgLALgCASIBIAAIAAgBQgBgRgJgLQgKgLgPAAQgOgBgKAMg");
	this.shape_115.setTransform(85.6,356.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("rgba(255,255,255,0.902)").s().p("AgXBQQgLgGgHgJIAIgIQAOARATAAQAQABAKgLQAJgJAAgSIAAgPQgNARgXAAQgVAAgNgQQgNgRAAgcIAAgBQAAgcANgRQAMgRAWAAQAYABANATIAAgRIANAAIAAB1QAAAXgNAOQgNANgXAAQgLABgMgGgAgZg8QgJAOAAAZQAAAWAJAOQAJANAQAAQAZAAAKgWIAAg3QgEgMgJgGQgJgGgNAAQgPAAgKANg");
	this.shape_116.setTransform(73,358.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("rgba(255,255,255,0.902)").s().p("AgkA1QgMgJAAgQQAAgRAPgLQAPgJAaAAIAXAAIAAgNQAAgOgIgHQgHgIgPABQgOgBgJAIQgJAHAAAKIgNAAQAAgOANgLQAOgLASAAQAUABAMAJQALAKABATIAAA4QAAASADAIIAAACIgNAAQgCgGgCgMQgGAKgLAFQgLAFgLgBQgSAAgKgJgAgXAIQgLAHAAAMQAAAKAIAHQAHAHAMAAQAMAAAMgHQAKgGAEgLIAAgbIgXAAQgUAAgLAIg");
	this.shape_117.setTransform(60.6,356.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("rgba(255,255,255,0.902)").s().p("AgmAuQgPgRAAgcIAAgCQAAgRAHgOQAGgOANgIQANgIAOAAQAYAAAPARQAPARAAAcIAAACQAAARgGAOQgIAOgMAIQgMAIgQgBQgXAAgPgQgAgcgkQgMAOAAAWIAAACQAAAWAMAOQALAOARgBQASABAMgOQALgOgBgXIAAgCQABgNgGgMQgEgMgKgGQgJgHgMABQgRAAgLAOg");
	this.shape_118.setTransform(502.2,330.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("rgba(255,255,255,0.902)").s().p("AgiAuQgOgQAAgcIAAgEQAAgRAHgOQAFgOANgHQALgIAPAAQATAAANAMQANAMABATIgNAAQgBgOgJgIQgJgJgOAAQgSAAgJANQgLANAAAXIAAAEQAAAWALAOQAJANASgBQAOABAJgJQAJgHABgNIANAAQgBALgGAJQgGAJgLAGQgKAEgMAAQgXAAgOgQg");
	this.shape_119.setTransform(490,330.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("rgba(255,255,255,0.902)").s().p("AgkA1QgMgJAAgPQAAgSAPgLQAPgJAaAAIAXAAIAAgNQABgNgJgIQgHgIgPABQgOgBgJAIQgJAHAAAKIgNAAQAAgOANgLQAOgLASAAQAUAAAMALQAMAJAAATIAAA4QAAASADAIIAAABIgNAAQgDgFgBgMQgGAKgLAFQgLAFgLgBQgSAAgKgJgAgXAIQgLAHAAAMQAAAKAIAHQAHAHAMAAQAMAAAMgHQAKgGAEgLIAAgbIgXAAQgUAAgLAIg");
	this.shape_120.setTransform(477.7,330.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("rgba(255,255,255,0.902)").s().p("AgjBEIAAARIgNAAIAAirIANAAIAABEQANgTAYAAQAWAAAMAQQANAQAAAdIAAACQAAAcgNAQQgNARgVAAQgYAAgNgTgAgVgTQgJAGgFAMIAAA2QAKAWAZAAQAQAAAKgNQAJgNAAgaQAAgXgJgNQgJgNgRAAQgMAAgJAHg");
	this.shape_121.setTransform(465.7,328.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("rgba(255,255,255,0.902)").s().p("AglA1QgKgJgBgPQABgSAPgLQAOgJAZAAIAZAAIAAgNQAAgNgJgIQgHgIgPABQgNgBgKAIQgJAHAAAKIgOAAQAAgOAOgLQAOgLASAAQAUAAAMALQAMAJAAATIAAA4QAAASAEAIIAAABIgPAAQgCgFAAgMQgIAKgKAFQgLAFgMgBQgRAAgLgJgAgWAIQgMAHAAAMQAAAKAHAHQAIAHAMAAQANAAAKgHQALgGAFgLIAAgbIgZAAQgSAAgLAIg");
	this.shape_122.setTransform(452.7,330.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(255,255,255,0.902)").s().p("AgCBFQgGgHAAgRIAAhPIgXAAIAAgLIAXAAIAAgfIAMAAIAAAfIAaAAIAAALIgaAAIAABPQAAALAEAFQAEAEAIABIALgCIAAAMQgFABgJAAQgOAAgFgIg");
	this.shape_123.setTransform(442.8,329.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("rgba(255,255,255,0.902)").s().p("AgmAuQgPgRAAgcIAAgCQAAgRAHgOQAGgOANgIQANgIAOAAQAYAAAPARQAPARAAAcIAAACQAAARgGAOQgIAOgMAIQgMAIgQgBQgXAAgPgQgAgcgkQgLAOAAAWIAAACQAAAWALAOQALAOARgBQASABAMgOQAKgOABgXIAAgCQAAgNgGgMQgEgMgKgGQgJgHgMABQgRAAgLAOg");
	this.shape_124.setTransform(427.4,330.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("rgba(255,255,255,0.902)").s().p("AgjBGQgNgRAAgcIAAgCQAAgbANgRQAMgQAWAAQAYAAAMATIAAhEIAOAAIAACrIgNAAIAAgQQgNASgYAAQgVAAgNgRgAgZgMQgJAMAAAaQAAAXAJANQAJANAQAAQAZAAAKgVIAAg4QgKgYgZAAQgPAAgKAOg");
	this.shape_125.setTransform(414.3,328.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("rgba(255,255,255,0.902)").s().p("AgmAuQgPgRAAgcIAAgCQAAgRAHgOQAGgOANgIQANgIAOAAQAYAAAPARQAPARAAAcIAAACQAAARgGAOQgIAOgMAIQgMAIgQgBQgXAAgPgQgAgcgkQgLAOAAAWIAAACQAAAWALAOQALAOARgBQASABAMgOQAKgOABgXIAAgCQAAgNgGgMQgEgMgKgGQgJgHgMABQgRAAgLAOg");
	this.shape_126.setTransform(396.3,330.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("rgba(255,255,255,0.902)").s().p("ABHA9IAAhOQAAgQgHgIQgHgIgPAAQgPAAgJAKQgKAIgCANIAABPIgMAAIAAhPQAAgPgHgIQgIgIgOAAQgNAAgJAHQgJAIgFAOIAABRIgNAAIAAh3IANAAIAAATQAHgKAKgGQAKgGAMAAQAdAAAHAYQAGgLALgHQALgFANgBQAnABABAqIAABPg");
	this.shape_127.setTransform(379.8,330.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("rgba(255,255,255,0.902)").s().p("AgiAyQgLgLAAgWIAAhNIAOAAIAABLQAAAjAbAAQAdAAAHgYIAAhWIAOAAIAAB3IgNAAIgBgPQgMARgZAAQgTAAgKgLg");
	this.shape_128.setTransform(363.3,330.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("rgba(255,255,255,0.902)").s().p("AgOBXIAAhtIgUAAIAAgLIAUAAIAAgOQAAgTAKgKQAIgKARAAQAHAAAHACIgBALQgGgBgGAAQgLAAgGAGQgGAIAAAMIAAAPIAcAAIAAALIgcAAIAABtg");
	this.shape_129.setTransform(353.6,328);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("rgba(255,255,255,0.902)").s().p("AgmAuQgPgRAAgcIAAgCQAAgRAHgOQAGgOANgIQANgIAOAAQAYAAAPARQAPARAAAcIAAACQAAARgGAOQgIAOgMAIQgMAIgQgBQgXAAgPgQgAgcgkQgLAOAAAWIAAACQAAAWALAOQALAOARgBQASABAMgOQAKgOABgXIAAgCQAAgNgGgMQgEgMgKgGQgJgHgMABQgRAAgLAOg");
	this.shape_130.setTransform(337.4,330.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("rgba(255,255,255,0.902)").s().p("AAhA9IAAhOQgBgQgHgIQgGgIgPAAQgMAAgJAIQgKAIgEANIAABRIgOAAIAAh3IANAAIABAUQAGgLALgGQAKgFALgBQATAAAKAMQAJAKAAAWIAABOg");
	this.shape_131.setTransform(324.7,330.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("rgba(255,255,255,0.902)").s().p("AggA0QgNgJAAgRIANAAQABAMAJAHQAJAGAOAAQAOABAJgHQAJgGAAgJQgBgKgHgGQgJgGgQgDQgPgEgJgEQgIgEgFgGQgEgHAAgJQAAgOAMgKQAMgIARgBQAVAAAMALQAMAJAAAQIgNAAQAAgKgJgHQgJgIgOABQgMAAgHAFQgJAHAAAJQAAAJAHAFQAHAFAQAEQASAEAIAEQAJAEAFAHQAEAGAAAKQAAAQgMAIQgNAJgUAAQgUAAgNgKg");
	this.shape_132.setTransform(307.1,330.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgIgHgNQgHgNAAgRIAAgFQAAgQAHgOQAHgOAMgJQAMgHANgBQAWAAANAPQANAPAAAbIAAAGIhVAAIAAADQAAAUALAOQAMANARAAQALAAAIgDQAIgFAHgIIAIAGQgOAWgcgBQgPABgMgIgAgWgnQgLALgCASIBIAAIAAgBQgBgSgJgKQgKgLgPAAQgOAAgKALg");
	this.shape_133.setTransform(295.4,330.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("rgba(255,255,255,0.902)").s().p("AgCBFQgGgHAAgRIAAhPIgXAAIAAgLIAXAAIAAgfIAMAAIAAAfIAZAAIAAALIgZAAIAABPQAAALAEAFQADAEAJABIALgCIAAAMQgFABgJAAQgOAAgFgIg");
	this.shape_134.setTransform(285.5,329.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("rgba(255,255,255,0.902)").s().p("AAhA9IAAhOQgBgQgGgIQgIgIgOAAQgMAAgJAIQgJAIgGANIAABRIgMAAIAAh3IAMAAIAAAUQAHgLAKgGQALgFALgBQAUAAAJAMQAKAKAAAWIAABOg");
	this.shape_135.setTransform(275.8,330.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgIgHgNQgHgNAAgRIAAgFQAAgQAHgOQAHgOAMgJQAMgHANgBQAWAAANAPQANAPAAAbIAAAGIhVAAIAAADQAAAUALAOQAMANARAAQALAAAIgDQAIgFAHgIIAIAGQgOAWgcgBQgPABgMgIgAgWgnQgLALgCASIBIAAIAAgBQgBgSgJgKQgKgLgPAAQgOAAgKALg");
	this.shape_136.setTransform(263.7,330.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("rgba(255,255,255,0.902)").s().p("AggA0QgNgJAAgRIANAAQABAMAJAHQAJAGAOAAQAOABAJgHQAIgGAAgJQABgKgJgGQgHgGgRgDQgPgEgIgEQgKgEgEgGQgEgHAAgJQAAgOAMgKQALgIASgBQAVAAAMALQAMAJAAAQIgNAAQAAgKgJgHQgJgIgOABQgMAAgIAFQgIAHAAAJQAAAJAHAFQAHAFAQAEQARAEAKAEQAIAEAEAHQAFAGAAAKQAAAQgNAIQgMAJgUAAQgUAAgNgKg");
	this.shape_137.setTransform(251.9,330.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgIgHgNQgHgNAAgRIAAgFQAAgQAHgOQAHgOAMgJQAMgHANgBQAWAAANAPQANAPAAAbIAAAGIhVAAIAAADQAAAUALAOQAMANARAAQALAAAIgDQAIgFAHgIIAIAGQgOAWgcgBQgPABgMgIgAgWgnQgLALgCASIBIAAIAAgBQgBgSgJgKQgKgLgPAAQgOAAgKALg");
	this.shape_138.setTransform(240.3,330.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("rgba(255,255,255,0.902)").s().p("AgbA9IAAh3IANAAIAAATQALgVAXgBQAFAAADACIAAAMIgJgBQgNAAgIAHQgIAHgEAOIAABRg");
	this.shape_139.setTransform(231.2,330.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("rgba(255,255,255,0.902)").s().p("AgwBVIAAinIANAAIABARQANgTAYAAQAVAAANARQAMAQgBAdIAAACQAAAbgMARQgNAQgUAAQgYAAgNgRIAAA+gAgVhCQgJAGgEALIAAA5QAFAKAIAGQAKAFALAAQAQAAAKgNQAKgOAAgYQAAgXgKgOQgKgNgQAAQgMAAgJAGg");
	this.shape_140.setTransform(220.6,332.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("rgba(255,255,255,0.902)").s().p("AgaBtQALgIAJgQQAJgRAFgVQAGgWAAgZQAAgXgGgWQgFgVgJgRQgJgRgLgIIAEgJQAOAJAKATQAMATAGAXQAHAXAAAZQAAAZgGAXQgGAWgMATQgLATgOAIg");
	this.shape_141.setTransform(204,330.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("rgba(255,255,255,0.902)").s().p("AggA0QgNgJAAgRIANAAQABAMAJAHQAJAGAOAAQAOABAJgHQAJgGgBgJQAAgKgHgGQgJgGgPgDQgQgEgJgEQgJgEgEgGQgEgHAAgJQAAgOAMgKQALgIATgBQATAAANALQAMAJAAAQIgOAAQABgKgJgHQgJgIgNABQgNAAgHAFQgJAHAAAJQAAAJAHAFQAGAFARAEQARAEAJAEQAKAEADAHQAFAGAAAKQAAAQgMAIQgNAJgUAAQgUAAgNgKg");
	this.shape_142.setTransform(195.2,330.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("rgba(255,255,255,0.902)").s().p("AgmAuQgPgRAAgcIAAgCQAAgRAHgOQAHgOAMgIQAMgIAPAAQAYAAAPARQAPARAAAcIAAACQAAARgHAOQgGAOgNAIQgMAIgQgBQgXAAgPgQgAgcgkQgMAOAAAWIAAACQAAAWAMAOQALAOARgBQATABAKgOQALgOAAgXIAAgCQAAgNgEgMQgGgMgJgGQgJgHgMABQgRAAgLAOg");
	this.shape_143.setTransform(183,330.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("rgba(255,255,255,0.902)").s().p("AAgA9IAAhOQAAgQgGgIQgIgIgOAAQgLAAgKAIQgJAIgGANIAABRIgMAAIAAh3IAMAAIAAAUQAIgLAJgGQALgFALgBQAUAAAJAMQAKAKAAAWIAABOg");
	this.shape_144.setTransform(170.3,330.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgIgHgNQgHgNAAgRIAAgFQAAgQAHgOQAHgOAMgJQAMgHANgBQAWAAANAPQANAPAAAbIAAAGIhVAAIAAADQAAAUALAOQAMANARAAQALAAAIgDQAIgFAHgIIAIAGQgOAWgcgBQgPABgMgIgAgWgnQgLALgCASIBIAAIAAgBQgBgSgJgKQgKgLgPAAQgOAAgKALg");
	this.shape_145.setTransform(158.2,330.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("rgba(255,255,255,0.902)").s().p("AgXBQQgLgGgHgJIAIgIQAOARATAAQAQABAKgLQAJgKAAgRIAAgPQgNARgXAAQgVAAgNgQQgNgRAAgcIAAgBQAAgcANgRQAMgQAWgBQAYABANATIAAgRIANAAIAAB1QAAAXgNAOQgNANgXAAQgLABgMgGgAgZg8QgJAOAAAaQAAAVAJAOQAJANAQAAQAZAAAKgWIAAg3QgEgMgJgGQgJgGgNAAQgPAAgKANg");
	this.shape_146.setTransform(145.6,333);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("rgba(255,255,255,0.902)").s().p("AgmBGQgPgRAAgcIAAgDQAAgRAHgNQAGgOANgIQANgHAOAAQAYAAAPARQAPAQAAAbIAAADQAAASgGAOQgIAOgMAHQgMAIgQAAQgXAAgPgRgAgcgMQgLANAAAXIAAACQAAAWALAOQALAOARAAQASAAAMgOQAKgOABgXIAAgDQAAgNgGgLQgEgLgKgHQgJgGgMAAQgRAAgLAOgAgHg3IAUgfIARAAIgaAfg");
	this.shape_147.setTransform(133.1,328.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("rgba(255,255,255,0.902)").s().p("AAhA9IAAhOQgBgQgHgIQgGgIgPAAQgMAAgJAIQgKAIgEANIAABRIgOAAIAAh3IANAAIABAUQAGgLALgGQAKgFALgBQATAAAKAMQAJAKAAAWIAABOg");
	this.shape_148.setTransform(120.4,330.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("rgba(255,255,255,0.902)").s().p("AgGBSIAAh3IANAAIAAB3gAgGhCQgCgCAAgEQAAgEACgDQADgDADABQAEgBADADQACADAAAEQAAAEgCACQgDACgEABQgDgBgDgCg");
	this.shape_149.setTransform(111.5,328.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("rgba(255,255,255,0.902)").s().p("AgiAuQgOgQAAgcIAAgEQAAgRAGgOQAHgOALgHQAMgIAOAAQAVAAANAMQAMAMABATIgNAAQgBgOgJgIQgJgJgPAAQgQAAgLANQgKANAAAXIAAAEQAAAWAKAOQALANAQgBQAPABAJgJQAJgHABgNIANAAQAAALgHAJQgGAJgKAGQgMAEgMAAQgWAAgOgQg");
	this.shape_150.setTransform(103.1,330.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("rgba(255,255,255,0.902)").s().p("AgbA9IAAh3IANAAIAAATQALgVAWgBQAGAAADACIAAAMIgJgBQgNAAgHAHQgJAHgEAOIAABRg");
	this.shape_151.setTransform(94,330.6);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("rgba(255,255,255,0.902)").s().p("AglA1QgLgJAAgPQABgSAPgLQAOgJAZAAIAZAAIAAgNQAAgNgJgIQgHgIgQABQgNgBgJAIQgJAHAAAKIgOAAQAAgOAOgLQAOgLASAAQAUAAAMALQALAJABATIAAA4QAAASAEAIIAAABIgPAAQgCgFAAgMQgIAKgKAFQgLAFgMgBQgRAAgLgJgAgWAIQgMAHAAAMQAAAKAHAHQAIAHAMAAQAMAAALgHQALgGAFgLIAAgbIgZAAQgSAAgLAIg");
	this.shape_152.setTransform(83.2,330.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("rgba(255,255,255,0.902)").s().p("AgiAuQgOgQAAgcIAAgEQAAgRAHgOQAGgOAMgHQALgIAPAAQATAAANAMQANAMABATIgNAAQgBgOgJgIQgJgJgOAAQgSAAgKANQgJANgBAXIAAAEQABAWAJAOQAKANASgBQAOABAJgJQAJgHABgNIANAAQAAALgHAJQgGAJgLAGQgLAEgLAAQgXAAgOgQg");
	this.shape_153.setTransform(71.4,330.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("rgba(255,255,255,0.902)").s().p("AgCBaQgMgTgGgWQgGgYAAgZQAAgYAGgXQAGgXAMgTQAMgTAOgJIADAJQgIAGgGAKQgIAKgFAOQgFANgEASQgEARABAVQgBAXAGAWQAFAWAJAQQAJAQALAJIgDAIQgOgIgMgTg");
	this.shape_154.setTransform(62.4,330.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("rgba(255,255,255,0.902)").s().p("AgbA+IAAh5IANAAIAAAUQALgWAXAAQAFABADABIAAAMIgJgBQgNAAgIAHQgIAHgEANIAABTg");
	this.shape_155.setTransform(451.1,305);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgIgHgNQgHgNAAgSIAAgDQAAgRAHgPQAHgOAMgHQAMgJANAAQAWABANAPQANAOAAAaIAAAHIhVAAIAAACQAAAVALAOQAMAOARAAQALAAAIgFQAIgDAHgJIAIAHQgOAUgcABQgPgBgMgHgAgWgnQgLALgCATIBIAAIAAgCQgBgRgJgMQgKgKgPgBQgOAAgKAMg");
	this.shape_156.setTransform(440.7,305.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("rgba(255,255,255,0.902)").s().p("AgiAuQgOgRAAgcIAAgCQAAgSAHgOQAFgNANgIQALgHAPgBQATAAANAMQANAMABAUIgMAAQgCgPgJgJQgKgIgNgBQgSAAgJAOQgKANAAAYIAAACQAAAXAKANQAJAOASAAQANgBAKgHQAJgJACgMIAMAAQgBALgGAKQgGAIgLAFQgLAGgLAAQgXAAgOgRg");
	this.shape_157.setTransform(428.9,305.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("rgba(255,255,255,0.902)").s().p("AAhA+IAAhPQgBgQgHgIQgGgIgPAAQgLAAgKAIQgKAHgEANIAABTIgOAAIAAh5IANAAIABAVQAGgLALgFQAKgHALAAQATAAAKALQAKALgBAWIAABPg");
	this.shape_158.setTransform(416.6,305);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("rgba(255,255,255,0.902)").s().p("AglBNQgLgKAAgPQABgRAPgLQAOgKAZAAIAZAAIAAgOQAAgMgIgHQgIgIgQAAQgNAAgJAIQgJAHAAAKIgOAAQAAgPAOgKQAOgLASAAQAUAAAMAKQALAKABASIAAA5QAAARAEAJIAAABIgPAAQgBgFgBgMQgIAKgKAFQgLAEgMAAQgRAAgLgJgAgWAgQgMAHAAAMQAAAKAHAHQAIAHAMAAQAMAAALgHQALgGAFgLIAAgbIgZAAQgSAAgLAIgAAYg3IgTgVIgRAVIgMAAIAAgCIAZgcIAIAAIAbAdIAAABg");
	this.shape_159.setTransform(404,302.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("rgba(255,255,255,0.902)").s().p("AgiAuQgOgRAAgcIAAgCQAAgSAHgOQAGgNAMgIQALgHAPgBQATAAANAMQANAMABAUIgNAAQgBgPgJgJQgJgIgOgBQgSAAgKAOQgJANgBAYIAAACQABAXAJANQAKAOASAAQAOgBAJgHQAJgJABgMIANAAQAAALgHAKQgGAIgLAFQgLAGgLAAQgXAAgOgRg");
	this.shape_160.setTransform(392.2,305.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgIgHgNQgHgNAAgSIAAgDQAAgRAHgPQAHgOAMgHQAMgJANAAQAWABANAPQANAOAAAaIAAAHIhVAAIAAACQAAAVALAOQAMAOARAAQALAAAIgFQAIgDAHgJIAIAHQgOAUgcABQgPgBgMgHgAgWgnQgLALgCATIBIAAIAAgCQgBgRgJgMQgKgKgPgBQgOAAgKAMg");
	this.shape_161.setTransform(374.8,305.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("rgba(255,255,255,0.902)").s().p("AgjBGQgNgRAAgcIAAgCQAAgbANgRQAMgQAWAAQAYAAAMATIAAhEIAOAAIAACrIgNAAIAAgQQgNASgYAAQgVAAgNgRgAgZgMQgJAMAAAaQAAAXAJANQAJANAQAAQAZAAAKgVIAAg4QgKgYgZAAQgPAAgKAOg");
	this.shape_162.setTransform(362.2,302.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("rgba(255,255,255,0.902)").s().p("AggA1QgNgLAAgPIANAAQABAMAJAGQAJAHAOAAQAOgBAJgFQAJgHAAgJQgBgKgHgGQgJgGgQgEQgPgDgJgDQgIgFgFgHQgEgGAAgIQAAgPAMgKQAMgJARAAQAVAAAMAKQAMALAAAPIgNAAQAAgKgJgHQgJgIgOAAQgMAAgHAHQgJAFAAAKQAAAJAHAFQAGAFARAEQASAEAIAEQAJAEAFAHQAEAGAAAKQAAAPgMAKQgNAJgUAAQgUAAgNgKg");
	this.shape_163.setTransform(344.8,305.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgIgHgNQgHgNAAgSIAAgDQAAgRAHgPQAHgOAMgHQAMgJANAAQAWABANAPQANAOAAAaIAAAHIhVAAIAAACQAAAVALAOQAMAOARAAQALAAAIgFQAIgDAHgJIAIAHQgOAUgcABQgPgBgMgHgAgWgnQgLALgCATIBIAAIAAgCQgBgRgJgMQgKgKgPgBQgOAAgKAMg");
	this.shape_164.setTransform(333.2,305.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("rgba(255,255,255,0.902)").s().p("AgbA+IAAh5IANAAIAAAUQALgWAWAAQAGABADABIAAAMIgJgBQgNAAgHAHQgJAHgEANIAABTg");
	this.shape_165.setTransform(324.1,305);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("rgba(255,255,255,0.902)").s().p("AgmAuQgPgRAAgcIAAgCQAAgRAHgOQAGgOANgIQANgHAOgBQAYABAPARQAPAQAAAcIAAACQAAASgGAOQgIAOgMAHQgMAHgQABQgXAAgPgRgAgcgkQgLAOAAAWIAAACQAAAVALAOQALAPARAAQASAAAMgPQAKgOABgWIAAgCQAAgOgGgLQgEgLgKgHQgJgGgMgBQgRAAgLAPg");
	this.shape_166.setTransform(313.1,305.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("rgba(255,255,255,0.902)").s().p("AgjBGQgNgRAAgcIAAgCQAAgbANgRQAMgQAWAAQAYAAAMATIAAhEIAOAAIAACrIgNAAIAAgQQgNASgYAAQgVAAgNgRgAgZgMQgJAMAAAaQAAAXAJANQAJANAQAAQAZAAAKgVIAAg4QgKgYgZAAQgPAAgKAOg");
	this.shape_167.setTransform(300,302.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("rgba(255,255,255,0.902)").s().p("AglA1QgKgJgBgQQABgRAPgKQAOgKAZAAIAYAAIAAgOQABgNgJgHQgHgIgPAAQgOAAgJAIQgJAHAAAKIgNAAQAAgPANgKQAOgLASAAQAUAAAMAKQAMALAAARIAAA5QAAARAEAJIAAACIgPAAQgCgGgBgLQgHAJgKAFQgLAEgLABQgSAAgLgKgAgXAIQgLAHAAAMQAAALAIAGQAHAHAMAAQANAAAKgGQALgHAEgLIAAgaIgYAAQgSAAgMAHg");
	this.shape_168.setTransform(287.7,305.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("rgba(255,255,255,0.902)").s().p("AggA1QgNgLAAgPIANAAQABAMAJAGQAJAHAOAAQAOgBAJgFQAJgHAAgJQgBgKgHgGQgJgGgQgEQgPgDgJgDQgIgFgFgHQgEgGAAgIQAAgPAMgKQAMgJARAAQAVAAAMAKQAMALAAAPIgNAAQAAgKgJgHQgJgIgOAAQgMAAgHAHQgJAFAAAKQAAAJAHAFQAGAFARAEQASAEAIAEQAJAEAFAHQAEAGAAAKQAAAPgMAKQgNAJgUAAQgUAAgNgKg");
	this.shape_169.setTransform(275.9,305.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("rgba(255,255,255,0.902)").s().p("AgiAzQgLgLAAgXIAAhOIAOAAIAABNQAAAiAbAAQAdAAAHgYIAAhXIAOAAIAAB5IgNAAIgBgQQgMASgZAAQgTgBgKgKg");
	this.shape_170.setTransform(263.8,305.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("rgba(255,255,255,0.902)").s().p("AglA1QgLgJABgQQgBgRAPgKQAPgKAaAAIAYAAIAAgOQgBgNgHgHQgJgIgPAAQgMAAgKAIQgJAHAAAKIgOAAQAAgPAOgKQANgLATAAQAUAAAMAKQAMALAAARIAAA5QAAARAEAJIAAACIgPAAQgBgGgBgLQgIAJgKAFQgLAEgMABQgRAAgLgKgAgWAIQgMAHAAAMQAAALAHAGQAIAHAMAAQAMAAALgGQALgHAFgLIAAgaIgYAAQgUAAgKAHg");
	this.shape_171.setTransform(251.3,305.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("rgba(255,255,255,0.902)").s().p("AgiAuQgOgRAAgcIAAgCQAAgSAGgOQAHgNALgIQAMgHAOgBQAVAAANAMQAMAMABAUIgNAAQgBgPgJgJQgJgIgPgBQgQAAgLAOQgKANAAAYIAAACQAAAXAKANQALAOAQAAQAPgBAJgHQAJgJABgMIANAAQAAALgHAKQgGAIgKAFQgMAGgMAAQgWAAgOgRg");
	this.shape_172.setTransform(239.5,305.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("rgba(255,255,255,0.902)").s().p("AggA1QgNgLAAgPIANAAQABAMAJAGQAJAHAOAAQAOgBAJgFQAJgHAAgJQAAgKgIgGQgIgGgRgEQgPgDgIgDQgKgFgEgHQgEgGAAgIQAAgPAMgKQAMgJARAAQAVAAAMAKQAMALAAAPIgNAAQAAgKgJgHQgJgIgOAAQgMAAgHAHQgJAFAAAKQAAAJAHAFQAHAFAQAEQASAEAIAEQAKAEAEAHQAEAGAAAKQAAAPgNAKQgMAJgUAAQgUAAgNgKg");
	this.shape_173.setTransform(222.1,305.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgIgHgNQgHgNAAgSIAAgDQAAgRAHgPQAHgOAMgHQAMgJANAAQAWABANAPQANAOAAAaIAAAHIhVAAIAAACQAAAVALAOQAMAOARAAQALAAAIgFQAIgDAHgJIAIAHQgOAUgcABQgPgBgMgHgAgWgnQgLALgCATIBIAAIAAgCQgBgRgJgMQgKgKgPgBQgOAAgKAMg");
	this.shape_174.setTransform(210.5,305.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("rgba(255,255,255,0.902)").s().p("AgCBGQgGgJAAgPIAAhQIgWAAIAAgLIAWAAIAAgfIAMAAIAAAfIAaAAIAAALIgaAAIAABQQAAAKAEAFQADAEAJAAIALgBIABALQgGACgJAAQgOAAgFgHg");
	this.shape_175.setTransform(200.6,303.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("rgba(255,255,255,0.902)").s().p("AAgA+IAAhPQAAgQgHgIQgGgIgPAAQgLAAgKAIQgKAHgFANIAABTIgMAAIAAh5IAMAAIAAAVQAIgLAKgFQAKgHALAAQATAAAKALQAKALAAAWIAABPg");
	this.shape_176.setTransform(190.9,305);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("rgba(255,255,255,0.902)").s().p("AgWA3QgNgIgHgNQgHgNAAgSIAAgDQAAgRAHgPQAHgOAMgHQAMgJANAAQAWABANAPQANAOAAAaIAAAHIhVAAIAAACQAAAVALAOQAMAOARAAQALAAAIgFQAIgDAHgJIAIAHQgOAUgcABQgPgBgMgHgAgWgnQgLALgCATIBIAAIAAgCQgBgRgJgMQgKgKgPgBQgOAAgKAMg");
	this.shape_177.setTransform(178.8,305.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("rgba(255,255,255,0.902)").s().p("AgXBQQgLgGgHgJIAIgIQAOASATAAQAQgBAKgJQAJgLAAgRIAAgPQgNASgXAAQgVAAgNgRQgNgRAAgbIAAgCQAAgcANgRQAMgRAWAAQAYAAANAUIAAgSIANAAIAAB2QAAAYgNANQgNANgXAAQgLAAgMgFgAgZg7QgJANAAAZQAAAXAJANQAJANAQAAQAZAAAKgWIAAg3QgEgMgJgGQgJgGgNAAQgPAAgKAOg");
	this.shape_178.setTransform(166.2,307.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("rgba(255,255,255,0.902)").s().p("AA2BRIgRgtIhJAAIgRAtIgOAAIA9ihIANAAIA9ChgAggAYIBBAAIghhYg");
	this.shape_179.setTransform(153,303);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("rgba(194,155,1,0.902)").s().p("AgeANIAAgZIA9AAIAAAZg");
	this.shape_180.setTransform(135.7,304.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("rgba(194,155,1,0.902)").s().p("AAJBRIAAgjIhCAAIgBgUIBChqIAhAAIAABkIATAAIAAAaIgTAAIAAAjgAAGghIggA1IAjAAIAAg4g");
	this.shape_181.setTransform(119.1,303);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#C29B01").ss(2,1,1).p("EgiKAiCQoarAAAufQAAxnMeseQMesfRoAAQRoAAMfMfQMeMeAARnQAAOfoZLA");
	this.shape_182.setTransform(283.4,228.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("rgba(234,187,1,0.008)").s().p("EgiKAiCQoarAAAufQAAxnMeseQMfsfRnAAQRpAAMeMfQMeMeAARnQAAOfoZLAg");
	this.shape_183.setTransform(283.4,228.6);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#C29B01").ss(2,1,1).p("EgkSAi4Qn/rGAAuYQAAyVM+s+QM+s+SVAAQSWAAM+M+QM9M+AASVQAAOYn+LG");
	this.shape_184.setTransform(283.4,223.2);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("rgba(234,187,1,0.008)").s().p("EgkRAi4QoArGAAuYQAByVM9s+QM+s+SVAAQSVAAM/M+QM9M+ABSVQAAOYn/LGg");
	this.shape_185.setTransform(283.4,223.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.popup4, new cjs.Rectangle(-1,-1,568.7,448.4), null);


(lib.popup3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btn_fechar.addEventListener("click", fechar.bind(this));
		function fechar(){
			createjs.Tween.get(this.parent.popup3)
			.to({y:700}, 1000, createjs.Ease.quartInOut);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn_fechar
	this.btn_fechar = new lib.btn_fechar();
	this.btn_fechar.name = "btn_fechar";
	this.btn_fechar.parent = this;
	this.btn_fechar.setTransform(283.4,30.3,1,1,0,0,0,18.7,19.4);
	new cjs.ButtonHelper(this.btn_fechar, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_fechar).wait(1));

	// txt
	this.instance = new lib.globolosvermelhos();
	this.instance.parent = this;
	this.instance.setTransform(141.2,67.3,0.353,0.353);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.902)").s().p("AgHAIQgCgDAAgFQAAgDACgDQADgDAEAAQAFAAADADQACADAAADQAAAFgCADQgDACgFAAQgEAAgDgCg");
	this.shape.setTransform(401.5,436.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.902)").s().p("AgqAzQgRgTAAgfIAAgCQAAgTAIgQQAHgPAOgJQAOgIAQAAQAbAAAQASQARATAAAfIAAACQAAATgIAQQgHAPgOAJQgNAIgSAAQgZAAgRgSgAgfgoQgNAPAAAZIAAACQAAAYANAPQAMAQATAAQAUAAANgQQAMgPAAgZIAAgCQAAgPgGgNQgFgNgLgHQgKgHgNAAQgTAAgMAQg");
	this.shape_1.setTransform(391.5,430.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.902)").s().p("AgHBbIAAiEIAOAAIAACEgAgHhKQgCgCAAgEQAAgEACgDQADgDAEAAQAEAAADADQADACAAAEQAAAFgDACQgDADgEABQgEgBgDgDg");
	this.shape_2.setTransform(381.6,428.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.902)").s().p("AAkBEIAAhXQAAgSgIgIQgHgKgRABQgNgBgKAKQgLAIgFAOIAABbIgOAAIAAiEIAOAAIAAAWQAIgMALgHQALgGANAAQAVAAALAMQAKAMAAAZIAABWg");
	this.shape_3.setTransform(371.8,430.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.902)").s().p("AgYBXQgOgJgIgPQgIgPAAgSIAAgGQAAgSAHgPQAIgQAOgJQANgIAOAAQAZAAAOAQQAOARAAAcIAAAIIheAAIAAADQAAAXANAPQANAPASAAQAMAAAKgFQAIgDAIgKIAKAHQgRAYgfAAQgQAAgNgJgAgYgSQgMANgDAUIBPAAIAAgCQAAgSgKgNQgLgMgRABQgPgBgLAMgAAYg+IgUgWIgTAWIgOAAIAAgBIAdgfIAJAAIAeAfIAAABg");
	this.shape_4.setTransform(358.4,428.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.902)").s().p("AgZBYQgNgGgHgKIAIgJQAQATAVAAQASAAAKgLQALgLAAgTIAAgRQgOAUgbAAQgXAAgOgTQgOgSAAgfIAAgCQAAgfAOgSQAOgTAYAAQAaAAAOAWIABgTIAOAAIAACCQAAAZgPAPQgOAQgZAAQgNAAgMgHgAgchCQgKAOAAAdQAAAYAKAPQALAPARAAQAcAAALgZIAAg9QgFgNgKgGQgKgHgOAAQgRAAgLAPg");
	this.shape_5.setTransform(344.5,433.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.902)").s().p("AgHBbIAAiEIAOAAIAACEgAgHhKQgCgCAAgEQAAgEACgDQADgDAEAAQAEAAADADQADACAAAEQAAAFgDACQgDADgEABQgEgBgDgDg");
	this.shape_6.setTransform(335,428.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.902)").s().p("AAmBDIgmg5IglA5IgSAAIAvhDIgthCIARAAIAkA2IAkg2IARAAIgtBCIAvBDg");
	this.shape_7.setTransform(326,430.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.902)").s().p("AgqAzQgRgTAAgfIAAgCQAAgTAIgQQAHgPAOgJQAOgIAQAAQAbAAAQASQARATAAAfIAAACQAAATgIAQQgHAPgOAJQgNAIgSAAQgZAAgRgSgAgfgoQgNAPAAAZIAAACQAAAYANAPQAMAQATAAQAUAAANgQQAMgPAAgZIAAgCQAAgPgGgNQgFgNgLgHQgKgHgNAAQgTAAgMAQg");
	this.shape_8.setTransform(312.7,430.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.902)").s().p("AgZA9QgNgJgIgPQgIgPAAgSIAAgFQAAgTAIgPQAHgQANgJQAOgIAOAAQAYAAAPAQQAOARAAAdIAAAHIheAAIAAADQAAAWANAQQANAPATAAQALAAAJgFQAKgEAHgJIAKAHQgRAXgfAAQgQAAgOgIgAgZgsQgLANgCAUIBPAAIAAgBQgBgUgLgMQgKgMgRAAQgPAAgMAMg");
	this.shape_9.setTransform(293,430.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.902)").s().p("AgnBOQgOgTAAggIAAgBQAAgeAOgTQAOgSAYAAQAaAAAOAVIAAhLIAPAAIAAC9IgOAAIgBgSQgOAUgbAAQgXAAgOgSgAgcgOQgKAOAAAcQAAAaAKAPQALAOARAAQAcAAALgYIAAg9QgLgbgcAAQgRAAgLAPg");
	this.shape_10.setTransform(279.1,428.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.902)").s().p("AgoA6QgMgKAAgRQAAgTAPgMQARgKAcAAIAaAAIAAgPQABgOgJgJQgJgIgRAAQgPAAgJAIQgKAIAAALIgPAAQgBgQAQgMQAOgLAVAAQAWAAANALQANALAAAUIAAA+QABAUADAJIAAACIgPAAQgCgHgBgMQgIAKgMAGQgMAFgNAAQgTAAgLgLgAgZAJQgNAHAAAOQAAALAIAIQAJAHANAAQAOAAAMgHQAMgHAEgMIAAgeIgaAAQgVABgMAIg");
	this.shape_11.setTransform(259.2,430.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.902)").s().p("AgCBMQgHgIAAgSIAAhYIgZAAIAAgMIAZAAIAAgiIAOAAIAAAiIAbAAIAAAMIgbAAIAABYQAAALAEAGQAEAFAJAAIAMgBIABAMQgGACgKAAQgPAAgGgJg");
	this.shape_12.setTransform(248.2,429.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.902)").s().p("AgZA9QgNgJgIgPQgIgPAAgSIAAgFQAAgTAIgPQAHgQANgJQAOgIAOAAQAZAAAOAQQAOARAAAdIAAAHIheAAIAAADQAAAWANAQQANAPATAAQALAAAKgFQAJgEAHgJIAKAHQgRAXgfAAQgQAAgOgIgAgZgsQgLANgCAUIBOAAIAAgBQAAgUgLgMQgKgMgRAAQgPAAgMAMg");
	this.shape_13.setTransform(238,430.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.902)").s().p("AgHBfIAAi9IAPAAIAAC9g");
	this.shape_14.setTransform(228.6,428);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.902)").s().p("Ag1BeIAAi4IAOAAIAAASQAPgVAaAAQAZAAANASQAOASAAAhIAAACQAAAegOASQgOATgXAAQgaAAgPgUIAABFgAgXhKQgKAHgFANIAAA/QAFALAKAGQAKAGANAAQASAAAKgPQALgPAAgbQAAgZgLgPQgKgPgSAAQgOAAgJAGg");
	this.shape_15.setTransform(219,433.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.902)").s().p("ABPBEIAAhXQAAgSgIgIQgHgKgRABQgQAAgLAKQgLAKgCAPIAABXIgNAAIAAhYQgBgRgIgJQgIgIgQAAQgOgBgKAJQgKAHgFAQIAABbIgPAAIAAiEIAOAAIABAVQAHgMAMgGQALgGANAAQAgAAAHAaQAIgMAMgIQAMgGAOAAQArAAABAvIAABYg");
	this.shape_16.setTransform(200.5,430.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.902)").s().p("AgqAzQgRgTAAgfIAAgCQAAgTAIgQQAHgPAOgJQAOgIAQAAQAbAAAQASQARATAAAfIAAACQAAATgIAQQgHAPgOAJQgNAIgSAAQgZAAgRgSgAgfgoQgNAPAAAZIAAACQAAAYANAPQAMAQATAAQAUAAANgQQAMgPAAgZIAAgCQAAgPgGgNQgFgNgLgHQgKgHgNAAQgTAAgMAQg");
	this.shape_17.setTransform(182.2,430.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.902)").s().p("AgmAzQgPgSAAgfIAAgEQAAgTAHgQQAHgPANgIQANgIAQAAQAWAAAOANQAOANABAVIgOAAQgBgQgKgJQgKgKgQAAQgTAAgLAPQgLAOAAAaIAAAEQAAAZALAOQALAPATAAQAPAAALgJQAKgJABgOIAOAAQAAANgHAKQgHAKgMAGQgMAFgNAAQgZAAgQgSg");
	this.shape_18.setTransform(168.6,430.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.902)").s().p("AgpA6QgLgKgBgRQABgTAQgMQAQgKAcAAIAbAAIAAgPQAAgOgJgJQgJgIgRAAQgPAAgKAIQgKAIAAALIgPAAQAAgQAPgMQAPgLAVAAQAWAAANALQANALABAUIAAA+QAAAUADAJIAAACIgQAAQgCgHAAgMQgIAKgMAGQgMAFgMAAQgUAAgMgLgAgaAJQgMAHAAAOQAAALAJAIQAIAHANAAQAOAAAMgHQALgHAGgMIAAgeIgbAAQgVABgNAIg");
	this.shape_19.setTransform(448.7,402.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.902)").s().p("AgZBYQgNgGgHgKIAIgJQAQATAVAAQASAAAKgLQALgLAAgTIAAgRQgOAUgbAAQgXAAgOgTQgOgSAAgfIAAgCQAAgfAOgSQAOgTAYAAQAaAAAOAWIABgTIAOAAIAACCQAAAZgPAPQgOAQgZAAQgNAAgMgHgAgchCQgKAOAAAdQAAAYAKAPQALAPARAAQAcAAALgZIAAg9QgFgNgKgGQgKgHgOAAQgRAAgLAPg");
	this.shape_20.setTransform(434.8,405.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.902)").s().p("AgeBEIAAiFIAOAAIAAAWQAMgYAZAAQAHAAADABIAAAOIgKgBQgOAAgJAIQgJAIgFAOIAABbg");
	this.shape_21.setTransform(424.6,402.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.902)").s().p("AgpA6QgMgKAAgRQABgTAQgMQAQgKAcAAIAbAAIAAgPQAAgOgJgJQgJgIgRAAQgOAAgLAIQgKAIAAALIgPAAQAAgQAPgMQAPgLAVAAQAWAAANALQANALAAAUIAAA+QABAUAEAJIAAACIgRAAQgCgHAAgMQgIAKgMAGQgMAFgMAAQgUAAgMgLgAgaAJQgMAHAAAOQAAALAJAIQAIAHANAAQAOAAAMgHQALgHAGgMIAAgeIgaAAQgWABgNAIg");
	this.shape_22.setTransform(412.6,402.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.902)").s().p("AgmAzQgPgSAAgfIAAgEQAAgTAHgQQAHgPANgIQANgIAQAAQAWAAAOANQAOANABAVIgOAAQgBgQgKgJQgKgKgQAAQgTAAgLAPQgLAOAAAaIAAAEQAAAZALAOQALAPATAAQAPAAALgJQAKgJABgOIAOAAQAAANgHAKQgHAKgMAGQgMAFgNAAQgZAAgQgSg");
	this.shape_23.setTransform(399.5,402.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.902)").s().p("AgoA6QgMgKAAgRQAAgTAPgMQARgKAcAAIAaAAIAAgPQABgOgJgJQgJgIgRAAQgPAAgJAIQgKAIAAALIgPAAQgBgQAQgMQAOgLAVAAQAWAAANALQANALABAUIAAA+QAAAUADAJIAAACIgPAAQgDgHAAgMQgIAKgMAGQgMAFgNAAQgTAAgLgLgAgZAJQgNAHAAAOQAAALAIAIQAJAHANAAQAOAAAMgHQAMgHAEgMIAAgeIgaAAQgVABgMAIg");
	this.shape_24.setTransform(379.8,402.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.902)").s().p("ABPBEIAAhXQAAgSgIgJQgHgIgRgBQgQABgLAKQgLAKgCAOIAABYIgNAAIAAhYQgBgSgIgIQgIgJgQAAQgOABgKAHQgKAJgFAPIAABbIgPAAIAAiFIAOAAIABAWQAHgMAMgGQALgGANAAQAgAAAHAaQAIgMAMgHQAMgHAOAAQArAAABAvIAABYg");
	this.shape_25.setTransform(362,402.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.902)").s().p("AgnA4QgLgNABgYIAAhWIAOAAIAABUQAAAmAfAAQAfAAAIgaIAAhgIAPAAIAACFIgOAAIAAgRQgOATgcAAQgVAAgMgMg");
	this.shape_26.setTransform(343.8,402.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.902)").s().p("AgeBEIAAiFIAOAAIABAWQALgYAZAAQAGAAAEABIgBAOIgJgBQgPAAgIAIQgKAIgDAOIAABbg");
	this.shape_27.setTransform(327.3,402.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.902)").s().p("AgpA6QgMgKABgRQgBgTARgMQAQgKAcAAIAbAAIAAgPQAAgOgJgJQgJgIgRAAQgOAAgKAIQgLAIABALIgQAAQABgQAPgMQAOgLAVAAQAWAAANALQANALAAAUIAAA+QAAAUAFAJIAAACIgQAAQgCgHgBgMQgIAKgMAGQgMAFgMAAQgUAAgMgLgAgZAJQgNAHAAAOQAAALAIAIQAJAHANAAQAOAAAMgHQALgHAGgMIAAgeIgaAAQgWABgMAIg");
	this.shape_28.setTransform(315.2,402.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.902)").s().p("AgCBMQgHgIAAgSIAAhYIgZAAIAAgMIAZAAIAAgiIAOAAIAAAiIAbAAIAAAMIgbAAIAABYQAAALAEAGQAEAFAJAAIAMgBIABAMQgGACgKAAQgPAAgGgJg");
	this.shape_29.setTransform(304.2,400.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.902)").s().p("AgeBEIAAiFIAOAAIABAWQALgYAZAAQAHAAADABIAAAOIgKgBQgPAAgIAIQgKAIgDAOIAABbg");
	this.shape_30.setTransform(297,402.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.902)").s().p("AgqAzQgRgTAAgfIAAgCQAAgTAIgQQAHgPAOgJQAOgIAQAAQAbAAAQASQARATAAAfIAAACQAAATgIAQQgHAPgOAJQgNAIgSAAQgZAAgRgSgAgfgoQgNAPAAAZIAAACQAAAYANAPQAMAQATAAQAUAAANgQQAMgPAAgZIAAgCQAAgPgGgNQgFgNgLgHQgKgHgNAAQgTAAgMAQg");
	this.shape_31.setTransform(284.9,402.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0.902)").s().p("Ag1BeIAAi4IAOAAIAAASQAPgVAbAAQAYAAANASQAOASAAAhIAAACQAAAegOASQgOATgXAAQgbAAgOgUIAABFgAgXhKQgKAHgFANIAAA/QAFALAKAGQAKAGANAAQASAAALgPQAKgPAAgbQAAgZgKgPQgLgPgSAAQgOAAgJAGg");
	this.shape_32.setTransform(271.1,405);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,255,255,0.902)").s().p("AgjA6QgPgLAAgSIAPAAQABANAKAIQAKAHAQAAQAPAAAKgHQAJgHAAgKQAAgLgJgHQgJgHgRgDQgRgEgKgEQgKgFgFgHQgEgHAAgKQAAgQANgKQANgKAUAAQAWAAAOALQANALAAASIgPAAQAAgMgJgIQgKgIgPAAQgOAAgJAHQgIAGAAALQAAAKAHAFQAHAGATAEQATAFAKAEQAKAFAEAHQAFAIAAAKQAAARgOAKQgNAKgWAAQgXAAgOgLg");
	this.shape_33.setTransform(257.4,402.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,255,255,0.902)").s().p("AAkBEIAAhXQAAgSgIgJQgHgIgRgBQgNABgKAIQgLAJgFAOIAABbIgOAAIAAiFIAOAAIAAAXQAIgMALgGQALgHANAAQAVAAALAMQAKAMAAAYIAABXg");
	this.shape_34.setTransform(244.1,402.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,255,255,0.902)").s().p("AgpA6QgMgKABgRQgBgTARgMQAQgKAcAAIAbAAIAAgPQAAgOgJgJQgJgIgRAAQgOAAgKAIQgLAIABALIgQAAQABgQAPgMQAOgLAVAAQAWAAANALQANALAAAUIAAA+QAAAUAFAJIAAACIgQAAQgCgHgBgMQgIAKgMAGQgMAFgMAAQgUAAgMgLgAgZAJQgNAHAAAOQAAALAIAIQAJAHANAAQAOAAAMgHQALgHAGgMIAAgeIgaAAQgWABgMAIg");
	this.shape_35.setTransform(230.2,402.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(255,255,255,0.902)").s().p("AgeBEIAAiFIAOAAIAAAWQAMgYAZAAQAGAAAEABIgBAOIgKgBQgOAAgIAIQgJAIgFAOIAABbg");
	this.shape_36.setTransform(220.1,402.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0.902)").s().p("AgCBMQgHgIAAgSIAAhYIgZAAIAAgMIAZAAIAAgiIAOAAIAAAiIAbAAIAAAMIgbAAIAABYQAAALAEAGQAEAFAJAAIAMgBIABAMQgGACgKAAQgPAAgGgJg");
	this.shape_37.setTransform(210.7,400.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(255,255,255,0.902)").s().p("ABPBEIAAhXQAAgSgIgJQgHgIgRgBQgQABgLAKQgLAKgCAOIAABYIgNAAIAAhYQgBgSgIgIQgIgJgQAAQgOABgKAHQgKAJgFAPIAABbIgPAAIAAiFIAOAAIABAWQAHgMAMgGQALgGANAAQAgAAAHAaQAIgMAMgHQAMgHAOAAQArAAABAvIAABYg");
	this.shape_38.setTransform(189.5,402.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,255,255,0.902)").s().p("AgoA6QgNgKAAgRQAAgTAQgMQARgKAcAAIAaAAIAAgPQAAgOgIgJQgJgIgRAAQgPAAgJAIQgLAIAAALIgOAAQgBgQAPgMQAPgLAVAAQAWAAANALQANALABAUIAAA+QAAAUADAJIAAACIgPAAQgDgHAAgMQgIAKgMAGQgMAFgNAAQgTAAgLgLgAgaAJQgMAHAAAOQAAALAJAIQAIAHANAAQAOAAAMgHQAMgHAEgMIAAgeIgaAAQgVABgNAIg");
	this.shape_39.setTransform(171.4,402.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(255,255,255,0.902)").s().p("AgjA6QgPgLAAgSIAPAAQABANAKAIQAKAHAQAAQAPAAAKgHQAJgHAAgKQAAgLgJgHQgJgHgRgDQgRgEgKgEQgKgFgFgHQgEgHAAgKQAAgQANgKQANgKAUAAQAWAAAOALQANALAAASIgPAAQAAgMgJgIQgKgIgPAAQgOAAgJAHQgIAGAAALQAAAKAHAFQAHAGATAEQATAFAKAEQAKAFAEAHQAFAIAAAKQAAARgOAKQgNAKgWAAQgXAAgOgLg");
	this.shape_40.setTransform(158.3,402.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(255,255,255,0.902)").s().p("AgjA6QgPgLAAgSIAPAAQABANAKAIQAKAHAQAAQAPAAAKgHQAJgHAAgKQAAgLgJgHQgJgHgRgDQgRgEgKgEQgKgFgFgHQgEgHAAgKQAAgQANgKQANgKAUAAQAWAAAOALQANALAAASIgPAAQAAgMgJgIQgKgIgPAAQgOAAgJAHQgIAGAAALQAAAKAHAFQAHAGATAEQATAFAKAEQAKAFAEAHQAFAIAAAKQAAARgOAKQgNAKgWAAQgXAAgOgLg");
	this.shape_41.setTransform(145.6,402.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(255,255,255,0.902)").s().p("AgqAzQgRgTAAgfIAAgCQAAgTAIgQQAHgPAOgJQAOgIAQAAQAbAAAQASQARATAAAfIAAACQAAATgIAQQgHAPgOAJQgNAIgSAAQgZAAgRgSgAgfgoQgNAPAAAZIAAACQAAAYANAPQAMAQATAAQAUAAANgQQAMgPAAgZIAAgCQAAgPgGgNQgFgNgLgHQgKgHgNAAQgTAAgMAQg");
	this.shape_42.setTransform(132.1,402.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(255,255,255,0.902)").s().p("Ag1BeIAAi4IAOAAIAAASQAPgVAbAAQAYAAANASQAOASAAAhIAAACQAAAegOASQgOATgXAAQgbAAgOgUIAABFgAgXhKQgKAHgFANIAAA/QAFALAKAGQAKAGANAAQASAAALgPQAKgPAAgbQAAgZgKgPQgLgPgSAAQgNAAgKAGg");
	this.shape_43.setTransform(118.4,405);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(255,255,255,0.902)").s().p("AgjA6QgPgLAAgSIAPAAQABANAKAIQAKAHAQAAQAPAAAKgHQAJgHAAgKQAAgLgJgHQgJgHgRgDQgRgEgKgEQgKgFgFgHQgEgHAAgKQAAgQANgKQANgKAUAAQAWAAAOALQANALAAASIgPAAQAAgMgJgIQgKgIgPAAQgOAAgJAHQgIAGAAALQAAAKAHAFQAHAGATAEQATAFAKAEQAKAFAEAHQAFAIAAAKQAAARgOAKQgNAKgWAAQgXAAgOgLg");
	this.shape_44.setTransform(468.9,374.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(255,255,255,0.902)").s().p("AgpA6QgMgKABgRQgBgTARgMQAQgKAcAAIAbAAIAAgPQAAgOgJgJQgJgIgRAAQgOAAgKAIQgLAIABALIgQAAQABgQAPgMQAOgLAVAAQAWAAANALQANALAAAUIAAA+QAAAUAFAJIAAACIgQAAQgCgHgBgMQgIAKgMAGQgMAFgMAAQgUAAgMgLgAgZAJQgNAHAAAOQAAALAIAIQAJAHANAAQAOAAAMgHQALgHAGgMIAAgeIgaAAQgWABgMAIg");
	this.shape_45.setTransform(455.6,374.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(255,255,255,0.902)").s().p("AgnBOQgOgTAAggIAAgBQAAgeAOgTQAOgSAYAAQAaAAAOAVIAAhLIAPAAIAAC9IgOAAIgBgSQgOAUgbAAQgXAAgOgSgAgcgOQgKAOAAAcQAAAaAKAPQALAOARAAQAcAAALgYIAAg9QgLgbgcAAQgRAAgLAPg");
	this.shape_46.setTransform(441.7,371.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(255,255,255,0.902)").s().p("AgpA6QgLgKgBgRQABgTAQgMQAQgKAcAAIAbAAIAAgPQAAgOgJgJQgJgIgRAAQgPAAgKAIQgKAIAAALIgPAAQAAgQAPgMQAPgLAVAAQAWAAANALQANALABAUIAAA+QAAAUAEAJIAAACIgRAAQgCgHAAgMQgIAKgMAGQgMAFgMAAQgUAAgMgLgAgaAJQgMAHAAAOQAAALAJAIQAIAHANAAQAOAAAMgHQALgHAGgMIAAgeIgaAAQgWABgNAIg");
	this.shape_47.setTransform(428,374.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(255,255,255,0.902)").s().p("AgCBMQgHgIAAgSIAAhYIgZAAIAAgMIAZAAIAAgiIAOAAIAAAiIAbAAIAAAMIgbAAIAABYQAAALAEAGQAEAFAJAAIAMgBIABAMQgGACgKAAQgPAAgGgJg");
	this.shape_48.setTransform(417,372.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(255,255,255,0.902)").s().p("AgZA9QgNgJgIgPQgIgPAAgSIAAgFQAAgTAIgPQAHgQAOgJQANgIAOAAQAZAAAOAQQAOARAAAdIAAAHIheAAIAAADQAAAWANAQQANAPATAAQALAAAKgFQAJgEAHgJIAKAHQgRAXgfAAQgQAAgOgIgAgZgsQgLANgCAUIBOAAIAAgBQAAgUgLgMQgKgMgRAAQgPAAgMAMg");
	this.shape_49.setTransform(406.8,374.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(255,255,255,0.902)").s().p("AgQBgIAAh4IgVAAIAAgMIAVAAIAAgRQAAgUALgLQAKgLASAAQAJAAAGACIgBAMQgFgBgIAAQgMAAgHAHQgGAIAAAOIAAARIAfAAIAAAMIgfAAIAAB4g");
	this.shape_50.setTransform(396.4,371.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(255,255,255,0.902)").s().p("AgpA6QgLgKgBgRQABgTAQgMQAQgKAcAAIAbAAIAAgPQAAgOgJgJQgJgIgRAAQgPAAgKAIQgKAIAAALIgPAAQAAgQAPgMQAPgLAVAAQAWAAANALQANALABAUIAAA+QAAAUADAJIAAACIgQAAQgCgHAAgMQgIAKgMAGQgMAFgMAAQgUAAgMgLgAgaAJQgMAHAAAOQAAALAJAIQAIAHANAAQAOAAAMgHQALgHAGgMIAAgeIgbAAQgVABgNAIg");
	this.shape_51.setTransform(384.8,374.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(255,255,255,0.902)").s().p("AgjA6QgPgLAAgSIAPAAQABANAKAIQAKAHAQAAQAPAAAKgHQAJgHAAgKQAAgLgJgHQgJgHgRgDQgRgEgKgEQgKgFgFgHQgEgHAAgKQAAgQANgKQANgKAUAAQAWAAAOALQANALAAASIgPAAQAAgMgJgIQgKgIgPAAQgOAAgJAHQgIAGAAALQAAAKAHAFQAHAGATAEQATAFAKAEQAKAFAEAHQAFAIAAAKQAAARgOAKQgNAKgWAAQgXAAgOgLg");
	this.shape_52.setTransform(365.6,374.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(255,255,255,0.902)").s().p("AgpA6QgMgKAAgRQABgTAQgMQAQgKAcAAIAbAAIAAgPQAAgOgJgJQgJgIgRAAQgOAAgLAIQgKAIABALIgQAAQAAgQAQgMQAOgLAVAAQAWAAANALQANALAAAUIAAA+QABAUAEAJIAAACIgRAAQgCgHAAgMQgIAKgMAGQgMAFgMAAQgUAAgMgLgAgaAJQgMAHAAAOQAAALAJAIQAIAHANAAQAOAAAMgHQALgHAGgMIAAgeIgaAAQgWABgNAIg");
	this.shape_53.setTransform(352.3,374.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(255,255,255,0.902)").s().p("AgGBfIAAi9IANAAIAAC9g");
	this.shape_54.setTransform(342.9,371.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(255,255,255,0.902)").s().p("AgnA3QgLgMAAgYIAAhWIAPAAIAABUQAAAmAfAAQAfAAAJgbIAAhfIAOAAIAACEIgOAAIAAgRQgNAUgdAAQgVAAgMgNg");
	this.shape_55.setTransform(333.1,374.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(255,255,255,0.902)").s().p("AgGBfIAAi9IAOAAIAAC9g");
	this.shape_56.setTransform(323.3,371.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(255,255,255,0.902)").s().p("AgYBYQgOgJgIgPQgIgPAAgSIAAgGQAAgTAHgOQAIgQANgJQAOgIAPAAQAXAAAPAQQAOARAAAcIAAAIIheAAIAAADQAAAWANAQQANAPASAAQANAAAIgFQAJgEAIgJIAJAHQgQAXgfAAQgQAAgNgIgAgYgRQgMANgDATIBQAAIAAgBQgBgTgKgMQgLgMgQAAQgRAAgKAMgAgEg8IAXgjIARAAIgcAjg");
	this.shape_57.setTransform(314,371.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(255,255,255,0.902)").s().p("AgmAzQgPgSAAgfIAAgEQAAgTAHgQQAHgPANgIQANgIAQAAQAWAAAOANQAOANABAVIgOAAQgBgQgKgJQgKgKgQAAQgTAAgLAPQgLAOAAAaIAAAEQAAAZALAOQALAPATAAQAPAAALgJQAKgJABgOIAOAAQAAANgHAKQgHAKgMAGQgMAFgNAAQgZAAgQgSg");
	this.shape_58.setTransform(300.9,374.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(255,255,255,0.902)").s().p("AgjA6QgPgLAAgSIAPAAQABANAKAIQAKAHAQAAQAPAAAKgHQAJgHAAgKQAAgLgJgHQgJgHgRgDQgRgEgKgEQgKgFgFgHQgEgHAAgKQAAgQANgKQANgKAUAAQAWAAAOALQANALAAASIgPAAQAAgMgJgIQgKgIgPAAQgOAAgJAHQgIAGAAALQAAAKAHAFQAHAGATAEQATAFAKAEQAKAFAEAHQAFAIAAAKQAAARgOAKQgNAKgWAAQgXAAgOgLg");
	this.shape_59.setTransform(281.7,374.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(255,255,255,0.902)").s().p("AgoA6QgNgKAAgRQAAgTAQgMQARgKAcAAIAaAAIAAgPQAAgOgIgJQgJgIgRAAQgOAAgLAIQgJAIgBALIgOAAQAAgQAOgMQAPgLAVAAQAWAAANALQANALABAUIAAA+QAAAUADAJIAAACIgQAAQgBgHgBgMQgIAKgMAGQgMAFgNAAQgTAAgLgLgAgaAJQgMAHAAAOQAAALAJAIQAIAHANAAQAOAAAMgHQAMgHAEgMIAAgeIgaAAQgVABgNAIg");
	this.shape_60.setTransform(268.5,374.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(255,255,255,0.902)").s().p("AgZA9QgNgJgIgPQgIgPAAgSIAAgFQAAgTAIgPQAHgQANgJQAOgIAOAAQAZAAAOAQQAOARAAAdIAAAHIheAAIAAADQAAAWANAQQANAPATAAQALAAAKgFQAJgEAHgJIAKAHQgRAXgfAAQgQAAgOgIgAgZgsQgLANgCAUIBOAAIAAgBQAAgUgLgMQgKgMgRAAQgPAAgMAMg");
	this.shape_61.setTransform(249.3,374.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(255,255,255,0.902)").s().p("AgnA3QgKgMgBgYIAAhWIAPAAIAABUQAAAmAfAAQAfAAAJgbIAAhfIAOAAIAACEIgOAAIAAgRQgOAUgcAAQgVAAgMgNg");
	this.shape_62.setTransform(235.7,374.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(255,255,255,0.902)").s().p("AAnBeIAAhEQgPATgZAAQgYAAgOgTQgOgSAAgfIAAgCQAAgfAOgSQAOgTAYAAQAaAAAOAVIABgSIAOAAIAAC4gAgbhBQgLAOAAAdQAAAZALAPQAKAOARAAQAbAAAMgXIAAhAQgGgMgJgHQgKgGgNAAQgSAAgKAPg");
	this.shape_63.setTransform(221.3,376.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(255,255,255,0.902)").s().p("AgqAzQgRgTAAgfIAAgCQAAgTAIgQQAHgPAOgJQAOgIAQAAQAbAAAQASQARATAAAfIAAACQAAATgIAQQgHAPgOAJQgNAIgSAAQgZAAgRgSgAgfgoQgNAPAAAZIAAACQAAAYANAPQAMAQATAAQAUAAANgQQAMgPAAgZIAAgCQAAgPgGgNQgFgNgLgHQgKgHgNAAQgTAAgMAQg");
	this.shape_64.setTransform(201.3,374.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(255,255,255,0.902)").s().p("AgnBOQgOgTAAggIAAgBQAAgeAOgTQAOgSAYAAQAaAAAOAVIAAhLIAPAAIAAC9IgOAAIgBgSQgOAUgbAAQgXAAgOgSgAgcgOQgKAOAAAcQAAAaAKAPQALAOARAAQAcAAALgYIAAg9QgLgbgcAAQgRAAgLAPg");
	this.shape_65.setTransform(186.9,371.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(255,255,255,0.902)").s().p("AAkBEIAAhXQAAgSgIgJQgHgJgRAAQgNAAgKAJQgLAJgFAPIAABaIgOAAIAAiEIAOAAIAAAWQAIgMALgHQALgGANAAQAVAAALAMQAKAMAAAYIAABXg");
	this.shape_66.setTransform(173.2,374.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(255,255,255,0.902)").s().p("AgHBbIAAiEIAOAAIAACEgAgHhKQgCgCAAgEQAAgEACgDQADgDAEAAQAEAAADADQADACAAAFQAAAEgDACQgDAEgEAAQgEAAgDgEg");
	this.shape_67.setTransform(163.5,371.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(255,255,255,0.902)").s().p("AgnBOQgOgTAAggIAAgBQAAgeAOgTQAOgSAYAAQAaAAAOAVIAAhLIAPAAIAAC9IgOAAIgBgSQgOAUgbAAQgXAAgOgSgAgcgOQgKAOAAAcQAAAaAKAPQALAOARAAQAcAAALgYIAAg9QgLgbgcAAQgRAAgLAPg");
	this.shape_68.setTransform(153.2,371.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(255,255,255,0.902)").s().p("AgYA9QgPgJgHgPQgIgPAAgSIAAgFQAAgTAHgPQAIgQAOgJQANgIAPAAQAYAAAOAQQAOARAAAdIAAAHIheAAIAAADQAAAWANAQQANAPASAAQAMAAAKgFQAIgEAIgJIAJAHQgQAXgfAAQgQAAgNgIgAgYgsQgMANgDAUIBPAAIAAgBQAAgUgKgMQgLgMgQAAQgQAAgLAMg");
	this.shape_69.setTransform(140.1,374.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(255,255,255,0.902)").s().p("Ag1BeIAAi4IAOAAIAAASQAPgVAaAAQAZAAANASQAOASAAAhIAAACQAAAegOASQgOATgXAAQgaAAgPgUIAABFgAgXhKQgKAHgFANIAAA/QAFALAKAGQAKAGANAAQASAAAKgPQALgPAAgbQAAgZgLgPQgKgPgSAAQgOAAgJAGg");
	this.shape_70.setTransform(126.8,376.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(255,255,255,0.902)").s().p("ABPBEIAAhXQAAgSgIgJQgHgJgRAAQgQABgLAKQgLAKgCAPIAABXIgNAAIAAhYQgBgRgIgJQgIgIgQgBQgOAAgKAJQgKAHgFARIAABaIgPAAIAAiEIAOAAIABAVQAHgMAMgGQALgGANAAQAgAAAHAaQAIgMAMgIQAMgGAOAAQArAAABAvIAABYg");
	this.shape_71.setTransform(108.3,374.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(255,255,255,0.902)").s().p("AgHBbIAAiEIAOAAIAACEgAgHhKQgCgCAAgEQAAgEACgDQADgDAEAAQAEAAADADQADACAAAFQAAAEgDACQgDAEgEAAQgEAAgDgEg");
	this.shape_72.setTransform(94.2,371.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(255,255,255,0.902)").s().p("AgMAWQALgPAAgPIAAgTIAOAAIAAAPQAAAZgQAPg");
	this.shape_73.setTransform(490,353.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(255,255,255,0.902)").s().p("AgjA6QgPgLAAgSIAPAAQABANAKAIQAKAHAQAAQAPAAAKgHQAJgHAAgKQAAgLgJgHQgJgHgRgDQgRgEgKgEQgKgFgFgHQgEgHAAgKQAAgQANgKQANgKAUAAQAWAAAOALQANALAAASIgPAAQAAgMgJgIQgKgIgPAAQgOAAgJAHQgIAGAAALQAAAKAHAFQAHAGATAEQATAFAKAEQAKAFAEAHQAFAIAAAKQAAARgOAKQgNAKgWAAQgXAAgOgLg");
	this.shape_74.setTransform(481.4,345.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(255,255,255,0.902)").s().p("AgqAzQgRgTAAgfIAAgCQAAgTAIgQQAHgPAOgJQAOgIAQAAQAbAAAQASQARATAAAfIAAACQAAATgIAQQgHAPgOAJQgNAIgSAAQgZAAgRgSgAgfgoQgNAPAAAZIAAACQAAAYANAPQAMAQATAAQAUAAANgQQAMgPAAgZIAAgCQAAgPgGgNQgFgNgLgHQgKgHgNAAQgTAAgMAQg");
	this.shape_75.setTransform(468,345.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(255,255,255,0.902)").s().p("AAkBfIAAhYQAAgRgIgIQgHgJgRAAQgNAAgKAJQgLAIgFANIAABcIgOAAIAAi9IAOAAIAABPQAIgMALgGQALgHANAAQAVAAALAMQAKAMAAAYIAABXg");
	this.shape_76.setTransform(454.1,343.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(255,255,255,0.902)").s().p("AgGBfIAAi9IANAAIAAC9g");
	this.shape_77.setTransform(444.3,343.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(255,255,255,0.902)").s().p("AgZA9QgOgJgHgPQgIgPAAgSIAAgFQAAgTAHgPQAIgQANgJQAOgIAPAAQAXAAAPAQQAOARAAAdIAAAHIheAAIAAADQAAAWANAQQANAPATAAQAMAAAIgFQAKgEAHgJIAJAHQgQAXgfAAQgQAAgOgIgAgZgsQgLANgCAUIBPAAIAAgBQgBgUgKgMQgLgMgQAAQgRAAgLAMg");
	this.shape_78.setTransform(435,345.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(255,255,255,0.902)").s().p("ABPBEIAAhXQAAgSgIgIQgHgJgRAAQgQAAgLAKQgLAKgCAOIAABYIgNAAIAAhYQgBgRgIgJQgIgJgQABQgOAAgKAHQgKAJgFAPIAABbIgPAAIAAiFIAOAAIABAWQAHgMAMgGQALgGANAAQAgAAAHAaQAIgNAMgGQAMgHAOAAQArAAABAvIAABYg");
	this.shape_79.setTransform(417.2,345.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(255,255,255,0.902)").s().p("AgeBEIAAiFIAOAAIABAWQALgYAZAAQAGAAAEABIgBAOIgKgBQgNAAgJAIQgKAHgDAPIAABbg");
	this.shape_80.setTransform(402.5,345.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(255,255,255,0.902)").s().p("AgZA9QgNgJgIgPQgIgPAAgSIAAgFQAAgTAIgPQAHgQAOgJQANgIAOAAQAZAAAOAQQAOARAAAdIAAAHIheAAIAAADQAAAWANAQQANAPATAAQALAAAKgFQAJgEAHgJIAKAHQgRAXgfAAQgQAAgOgIgAgZgsQgLANgCAUIBOAAIAAgBQAAgUgLgMQgKgMgRAAQgPAAgMAMg");
	this.shape_81.setTransform(391,345.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(255,255,255,0.902)").s().p("AgFBDIgyiFIAPAAIAoBwIAphwIAPAAIgyCFg");
	this.shape_82.setTransform(378.3,345.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(255,255,255,0.902)").s().p("AgjA6QgPgLAAgSIAPAAQABANAKAIQAKAHAQAAQAPAAAKgHQAJgHAAgKQAAgLgJgHQgJgHgRgDQgRgEgKgEQgKgFgFgHQgEgHAAgKQAAgQANgKQANgKAUAAQAWAAAOALQANALAAASIgPAAQAAgMgJgIQgKgIgPAAQgOAAgJAHQgIAGAAALQAAAKAHAFQAHAGATAEQATAFAKAEQAKAFAEAHQAFAIAAAKQAAARgOAKQgNAKgWAAQgXAAgOgLg");
	this.shape_83.setTransform(359.6,345.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(255,255,255,0.902)").s().p("AgqAzQgRgTAAgfIAAgCQAAgTAIgQQAHgPAOgJQAOgIAQAAQAbAAAQASQARATAAAfIAAACQAAATgIAQQgHAPgOAJQgNAIgSAAQgZAAgRgSgAgfgoQgNAPAAAZIAAACQAAAYANAPQAMAQATAAQAUAAANgQQAMgPAAgZIAAgCQAAgPgGgNQgFgNgLgHQgKgHgNAAQgTAAgMAQg");
	this.shape_84.setTransform(346.2,345.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(255,255,255,0.902)").s().p("AgHBfIAAi9IAOAAIAAC9g");
	this.shape_85.setTransform(336.3,343.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(255,255,255,0.902)").s().p("AgmA4QgLgNAAgYIAAhWIAOAAIAABUQAAAmAfAAQAfAAAIgaIAAhgIAQAAIAACFIgPAAIAAgRQgOATgcAAQgVAAgLgMg");
	this.shape_86.setTransform(326.5,346.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(255,255,255,0.902)").s().p("AgnBLIAAATIgOAAIAAi9IAPAAIAABLQAOgVAbAAQAYAAANASQAOASAAAfIAAACQAAAggOASQgOASgXAAQgbAAgPgVgAgXgWQgKAHgFAOIAAA7QALAZAbAAQATAAAKgOQAKgPAAgcQAAgagKgOQgKgPgTAAQgNAAgKAHg");
	this.shape_87.setTransform(312.9,343.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(255,255,255,0.902)").s().p("AgqBOQgRgTAAgfIAAgDQAAgTAIgPQAHgPAOgJQAOgIAQAAQAbAAAQASQARATAAAeIAAADQAAATgIAQQgHAPgOAJQgNAIgSAAQgZAAgRgSgAgfgNQgNAOAAAZIAAADQAAAYANAPQAMAQATAAQAUAAANgQQAMgPAAgZIAAgDQAAgPgGgMQgFgNgLgHQgKgHgNAAQgTAAgMAQgAgIg8IAXgjIASAAIgdAjg");
	this.shape_88.setTransform(298.4,343.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(255,255,255,0.902)").s().p("AgGBfIAAi9IANAAIAAC9g");
	this.shape_89.setTransform(288.6,343.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(255,255,255,0.902)").s().p("AgZBYQgNgGgHgKIAIgJQAQATAVAAQASAAAKgLQALgLAAgTIAAgRQgOAUgbAAQgXAAgOgTQgOgSAAgfIAAgCQAAgfAOgSQAOgTAYAAQAaAAAOAWIABgTIAOAAIAACCQAAAZgPAPQgOAQgZAAQgNAAgMgHgAgchCQgKAOAAAdQAAAYAKAPQALAPARAAQAcAAALgZIAAg9QgFgNgKgGQgKgHgOAAQgRAAgLAPg");
	this.shape_90.setTransform(278.4,348.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(255,255,255,0.902)").s().p("AgjA6QgPgLAAgSIAPAAQABANAKAIQAKAHAQAAQAPAAAKgHQAJgHAAgKQAAgLgJgHQgJgHgRgDQgRgEgKgEQgKgFgFgHQgEgHAAgKQAAgQANgKQANgKAUAAQAWAAAOALQANALAAASIgPAAQAAgMgJgIQgKgIgPAAQgOAAgJAHQgIAGAAALQAAAKAHAFQAHAGATAEQATAFAKAEQAKAFAEAHQAFAIAAAKQAAARgOAKQgNAKgWAAQgXAAgOgLg");
	this.shape_91.setTransform(259.1,345.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(255,255,255,0.902)").s().p("AgqAzQgRgTAAgfIAAgCQAAgTAIgQQAHgPAOgJQAOgIAQAAQAbAAAQASQARATAAAfIAAACQAAATgIAQQgHAPgOAJQgNAIgSAAQgZAAgRgSgAgfgoQgNAPAAAZIAAACQAAAYANAPQAMAQATAAQAUAAANgQQAMgPAAgZIAAgCQAAgPgGgNQgFgNgLgHQgKgHgNAAQgTAAgMAQg");
	this.shape_92.setTransform(245.7,345.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(255,255,255,0.902)").s().p("AAkBEIAAhXQAAgSgIgIQgHgJgRAAQgNAAgKAJQgLAIgFAOIAABbIgOAAIAAiFIAOAAIAAAXQAIgMALgGQALgHANAAQAVAAALAMQAKAMAAAZIAABWg");
	this.shape_93.setTransform(231.6,345.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(255,255,255,0.902)").s().p("AgoA6QgMgKAAgRQAAgTAPgMQARgKAcAAIAaAAIAAgPQABgOgJgJQgJgIgRAAQgPAAgJAIQgKAIAAALIgPAAQgBgQAQgMQAOgLAVAAQAWAAANALQANALAAAUIAAA+QAAAUAEAJIAAACIgPAAQgCgHgBgMQgIAKgMAGQgMAFgNAAQgTAAgLgLgAgZAJQgNAHAAAOQAAALAIAIQAJAHANAAQAOAAAMgHQAMgHAEgMIAAgeIgaAAQgVABgMAIg");
	this.shape_94.setTransform(211.5,345.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(255,255,255,0.902)").s().p("AAkBEIAAhXQAAgSgIgIQgHgJgRAAQgNAAgKAJQgLAIgFAOIAABbIgOAAIAAiFIAOAAIAAAXQAIgMALgGQALgHANAAQAVAAALAMQAKAMAAAZIAABWg");
	this.shape_95.setTransform(198,345.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(255,255,255,0.902)").s().p("AgHBbIAAiFIAOAAIAACFgAgHhJQgCgDAAgEQAAgEACgEQADgCAEAAQAEAAADACQADAEAAADQAAAFgDADQgDACgEAAQgEAAgDgCg");
	this.shape_96.setTransform(188.2,343.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(255,255,255,0.902)").s().p("AgmBLIgBATIgOAAIAAi9IAPAAIAABLQAOgVAaAAQAZAAANASQAOASAAAfIAAACQAAAggOASQgOASgXAAQgbAAgOgVgAgXgWQgKAHgFAOIAAA7QALAZAbAAQATAAAKgOQAKgPAAgcQAAgagKgOQgKgPgTAAQgOAAgJAHg");
	this.shape_97.setTransform(178.6,343.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(255,255,255,0.902)").s().p("AgqAzQgRgTAAgfIAAgCQAAgTAIgQQAHgPAOgJQAOgIAQAAQAbAAAQASQARATAAAfIAAACQAAATgIAQQgHAPgOAJQgNAIgSAAQgZAAgRgSgAgfgoQgNAPAAAZIAAACQAAAYANAPQAMAQATAAQAUAAANgQQAMgPAAgZIAAgCQAAgPgGgNQgFgNgLgHQgKgHgNAAQgTAAgMAQg");
	this.shape_98.setTransform(164.2,345.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(255,255,255,0.902)").s().p("AgGBfIAAi9IANAAIAAC9g");
	this.shape_99.setTransform(154.4,343.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(255,255,255,0.902)").s().p("AgZBYQgNgGgHgKIAIgJQAQATAVAAQASAAAKgLQALgLAAgTIAAgRQgOAUgbAAQgXAAgOgTQgOgSAAgfIAAgCQAAgfAOgSQAOgTAYAAQAaAAAOAWIABgTIAOAAIAACCQAAAZgPAPQgOAQgZAAQgNAAgMgHgAgchCQgKAOAAAdQAAAYAKAPQALAPARAAQAcAAALgZIAAg9QgFgNgKgGQgKgHgOAAQgRAAgLAPg");
	this.shape_100.setTransform(144.2,348.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(255,255,255,0.902)").s().p("AgqAzQgRgTAAgfIAAgCQAAgTAIgQQAHgPAOgJQAOgIAQAAQAbAAAQASQARATAAAfIAAACQAAATgIAQQgHAPgOAJQgNAIgSAAQgZAAgRgSgAgfgoQgNAPAAAZIAAACQAAAYANAPQAMAQATAAQAUAAANgQQAMgPAAgZIAAgCQAAgPgGgNQgFgNgLgHQgKgHgNAAQgTAAgMAQg");
	this.shape_101.setTransform(130.4,345.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(255,255,255,0.902)").s().p("ABPBEIAAhXQAAgSgIgIQgHgJgRAAQgQAAgLAKQgLAKgCAOIAABYIgNAAIAAhYQgBgRgIgJQgIgJgQABQgOAAgKAHQgKAJgFAPIAABbIgPAAIAAiFIAOAAIABAWQAHgMAMgGQALgGANAAQAgAAAHAaQAIgNAMgGQAMgHAOAAQArAAABAvIAABYg");
	this.shape_102.setTransform(112.1,345.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(255,255,255,0.902)").s().p("AgYA9QgPgJgHgPQgIgPAAgSIAAgFQAAgTAHgPQAIgQANgJQAOgIAPAAQAXAAAPAQQAOARAAAdIAAAHIheAAIAAADQAAAWANAQQANAPASAAQANAAAIgFQAJgEAIgJIAJAHQgQAXgfAAQgQAAgNgIgAgYgsQgMANgDAUIBQAAIAAgBQgBgUgKgMQgLgMgQAAQgRAAgKAMg");
	this.shape_103.setTransform(94.4,345.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(255,255,255,0.902)").s().p("AAkBfIAAhYQAAgRgIgIQgHgJgRAAQgNAAgKAJQgLAIgFANIAABcIgOAAIAAi9IAOAAIAABPQAIgMALgGQALgHANAAQAVAAALAMQAKAMAAAYIAABXg");
	this.shape_104.setTransform(80.9,343.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(255,255,255,0.902)").s().p("AgoBVQgMgKAAgRQAAgTAPgMQARgLAcAAIAaAAIAAgPQABgNgJgJQgJgIgRAAQgOAAgKAIQgKAIAAALIgQAAQABgQAPgMQAOgLAVAAQAWAAANALQANALAAATIAAA/QAAAUAFAJIAAACIgQAAQgCgHgBgMQgIAKgMAGQgMAFgNAAQgTAAgLgLgAgZAkQgNAHAAAOQAAALAIAIQAJAHANAAQAOAAAMgHQAMgHAEgMIAAgeIgZAAQgWABgMAIgAABg8IgagjIARAAIAWAjg");
	this.shape_105.setTransform(475.8,314.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(255,255,255,0.902)").s().p("AgoA6QgMgKgBgRQABgTAPgMQARgKAcAAIAaAAIAAgPQAAgOgIgJQgJgIgRAAQgOAAgLAIQgJAIgBALIgOAAQAAgQAOgMQAPgLAVAAQAWAAANALQANALABAUIAAA+QAAAUADAJIAAACIgQAAQgBgHgBgMQgIAKgMAGQgMAFgNAAQgTAAgLgLgAgaAJQgMAHAAAOQAAALAJAIQAIAHANAAQAOAAAMgHQALgHAFgMIAAgeIgaAAQgVABgNAIg");
	this.shape_106.setTransform(456,317.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(255,255,255,0.902)").s().p("AgZBYQgNgGgHgKIAIgJQAQATAVAAQASAAAKgLQALgLAAgTIAAgRQgOAUgbAAQgXAAgOgTQgOgSAAgfIAAgCQAAgfAOgSQAOgTAYAAQAaAAAOAWIABgTIAOAAIAACCQAAAZgPAPQgOAQgZAAQgNAAgMgHgAgchCQgKAOAAAdQAAAYAKAPQALAPARAAQAcAAALgZIAAg9QgFgNgKgGQgKgHgOAAQgRAAgLAPg");
	this.shape_107.setTransform(442.1,320.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(255,255,255,0.902)").s().p("AgHBbIAAiFIAOAAIAACFgAgHhKQgCgCAAgEQAAgEACgDQADgDAEAAQAEAAADADQADACAAAFQAAAEgDACQgDAEgEAAQgEAAgDgEg");
	this.shape_108.setTransform(432.6,315.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(255,255,255,0.902)").s().p("AgHBfIAAi9IAPAAIAAC9g");
	this.shape_109.setTransform(426.9,314.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(255,255,255,0.902)").s().p("AgZA9QgOgJgHgPQgIgPAAgSIAAgFQAAgTAIgPQAHgQANgJQAOgIAOAAQAYAAAPAQQAOARAAAdIAAAHIheAAIAAADQAAAWANAQQANAPATAAQALAAAJgFQAKgEAHgJIAJAHQgQAXgfAAQgQAAgOgIgAgZgsQgLANgCAUIBPAAIAAgBQgBgUgLgMQgKgMgRAAQgQAAgLAMg");
	this.shape_110.setTransform(411.5,317.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(255,255,255,0.902)").s().p("AgjA6QgPgLAAgSIAPAAQABANAKAIQAKAHAQAAQAPAAAKgHQAJgHAAgKQAAgLgJgHQgJgHgRgDQgRgEgKgEQgKgFgFgHQgEgHAAgKQAAgQANgKQANgKAUAAQAWAAAOALQANALAAASIgPAAQAAgMgJgIQgKgIgPAAQgOAAgJAHQgIAGAAALQAAAKAHAFQAHAGATAEQATAFAKAEQAKAFAEAHQAFAIAAAKQAAARgOAKQgNAKgWAAQgXAAgOgLg");
	this.shape_111.setTransform(398.4,317.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(255,255,255,0.902)").s().p("AgqAzQgRgTAAgfIAAgCQAAgTAIgQQAHgPAOgJQAOgIAQAAQAbAAAQASQARATAAAfIAAACQAAATgIAQQgHAPgOAJQgNAIgSAAQgZAAgRgSgAgfgoQgNAPAAAZIAAACQAAAYANAPQAMAQATAAQAUAAANgQQAMgPAAgZIAAgCQAAgPgGgNQgFgNgLgHQgKgHgNAAQgTAAgMAQg");
	this.shape_112.setTransform(378.8,317.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(255,255,255,0.902)").s().p("AAkBEIAAhXQAAgSgIgJQgHgJgRAAQgNAAgKAJQgLAJgFAPIAABaIgOAAIAAiFIAOAAIAAAXQAIgMALgHQALgGANAAQAVAAALAMQAKAMAAAYIAABXg");
	this.shape_113.setTransform(364.8,317.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("rgba(255,255,255,0.902)").s().p("AgqAzQgRgTAAgfIAAgCQAAgTAIgQQAHgPAOgJQAOgIAQAAQAbAAAQASQARATAAAfIAAACQAAATgIAQQgHAPgOAJQgNAIgSAAQgZAAgRgSgAgfgoQgNAPAAAZIAAACQAAAYANAPQAMAQATAAQAUAAANgQQAMgPAAgZIAAgCQAAgPgGgNQgFgNgLgHQgKgHgNAAQgTAAgMAQg");
	this.shape_114.setTransform(350.7,317.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("rgba(255,255,255,0.902)").s().p("AgnBLIAAATIgOAAIAAi9IAPAAIAABLQAOgVAaAAQAZAAANASQAOASAAAfIAAACQAAAggOASQgOASgXAAQgbAAgPgVgAgXgWQgKAHgFAOIAAA7QALAZAbAAQATAAAKgOQAKgPAAgcQAAgagKgOQgKgPgTAAQgOAAgJAHg");
	this.shape_115.setTransform(336.9,314.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("rgba(255,255,255,0.902)").s().p("AgeBEIAAiFIAOAAIABAVQALgXAZAAQAHAAADACIAAANIgKgBQgPAAgIAIQgKAHgDAPIAABbg");
	this.shape_116.setTransform(326.2,317.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("rgba(255,255,255,0.902)").s().p("AgpA6QgLgKgBgRQABgTAQgMQAQgKAcAAIAbAAIAAgPQAAgOgJgJQgJgIgRAAQgPAAgKAIQgKAIAAALIgPAAQAAgQAPgMQAPgLAVAAQAWAAANALQANALABAUIAAA+QAAAUAEAJIAAACIgRAAQgCgHAAgMQgIAKgMAGQgMAFgMAAQgUAAgMgLgAgaAJQgMAHAAAOQAAALAJAIQAIAHANAAQAOAAAMgHQALgHAGgMIAAgeIgaAAQgWABgNAIg");
	this.shape_117.setTransform(314.2,317.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("rgba(255,255,255,0.902)").s().p("AgmAzQgPgSAAgfIAAgEQAAgTAHgQQAHgPANgIQANgIAQAAQAWAAAOANQAOANABAVIgOAAQgBgQgKgJQgKgKgQAAQgTAAgLAPQgLAOAAAaIAAAEQAAAZALAOQALAPATAAQAPAAALgJQAKgJABgOIAOAAQAAANgHAKQgHAKgMAGQgMAFgNAAQgZAAgQgSg");
	this.shape_118.setTransform(301.1,317.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("rgba(255,255,255,0.902)").s().p("AgZA9QgOgJgHgPQgIgPAAgSIAAgFQAAgTAIgPQAHgQANgJQAOgIAOAAQAYAAAPAQQAOARAAAdIAAAHIheAAIAAADQAAAWANAQQANAPATAAQALAAAJgFQAKgEAHgJIAKAHQgRAXgfAAQgQAAgOgIgAgZgsQgLANgCAUIBPAAIAAgBQgBgUgLgMQgKgMgRAAQgQAAgLAMg");
	this.shape_119.setTransform(281.9,317.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("rgba(255,255,255,0.902)").s().p("AgnBOQgOgTAAggIAAgBQAAgeAOgTQAOgSAYAAQAaAAAOAVIAAhLIAPAAIAAC9IgOAAIgBgSQgOAUgbAAQgXAAgOgSgAgcgOQgKAOAAAcQAAAaAKAPQALAOARAAQAcAAALgYIAAg9QgLgbgcAAQgRAAgLAPg");
	this.shape_120.setTransform(267.9,314.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("rgba(255,255,255,0.902)").s().p("AgqAzQgRgTAAgfIAAgCQAAgTAIgQQAHgPAOgJQAOgIAQAAQAbAAAQASQARATAAAfIAAACQAAATgIAQQgHAPgOAJQgNAIgSAAQgZAAgRgSgAgfgoQgNAPAAAZIAAACQAAAYANAPQAMAQATAAQAUAAANgQQAMgPAAgZIAAgCQAAgPgGgNQgFgNgLgHQgKgHgNAAQgTAAgMAQg");
	this.shape_121.setTransform(247.9,317.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("rgba(255,255,255,0.902)").s().p("AgnBOQgOgTAAggIAAgBQAAgeAOgTQAOgSAYAAQAaAAAOAVIAAhLIAPAAIAAC9IgOAAIgBgSQgOAUgbAAQgXAAgOgSgAgcgOQgKAOAAAcQAAAaAKAPQALAOARAAQAcAAALgYIAAg9QgLgbgcAAQgRAAgLAPg");
	this.shape_122.setTransform(233.5,314.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(255,255,255,0.902)").s().p("AgHBbIAAiFIAOAAIAACFgAgHhKQgCgCAAgEQAAgEACgDQADgDAEAAQAEAAADADQADACAAAFQAAAEgDACQgDAEgEAAQgEAAgDgEg");
	this.shape_123.setTransform(224,315.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("rgba(255,255,255,0.902)").s().p("AAmBDIgmg5IglA5IgRAAIAvhDIgthCIARAAIAjA2IAkg2IASAAIguBCIAwBDg");
	this.shape_124.setTransform(215,317.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("rgba(255,255,255,0.902)").s().p("AgqBOQgRgTAAgfIAAgDQAAgTAIgPQAHgPAOgJQAOgIAQAAQAbAAAQASQARATAAAeIAAADQAAATgIAQQgHAPgOAJQgNAIgSAAQgZAAgRgSgAgfgNQgNAOAAAZIAAADQAAAYANAPQAMAQATAAQAUAAANgQQAMgPAAgZIAAgDQAAgPgGgMQgFgNgLgHQgKgHgNAAQgTAAgMAQgAgIg8IAXgjIASAAIgdAjg");
	this.shape_125.setTransform(201.7,314.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("rgba(255,255,255,0.902)").s().p("AAkBEIAAhXQAAgSgIgJQgHgJgRAAQgNAAgKAJQgLAJgFAPIAABaIgOAAIAAiFIAOAAIAAAXQAIgMALgHQALgGANAAQAVAAALAMQAKAMAAAYIAABXg");
	this.shape_126.setTransform(187.7,317.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("rgba(255,255,255,0.902)").s().p("AgqAzQgRgTAAgfIAAgCQAAgTAIgQQAHgPAOgJQAOgIAQAAQAbAAAQASQARATAAAfIAAACQAAATgIAQQgHAPgOAJQgNAIgSAAQgZAAgRgSgAgfgoQgNAPAAAZIAAACQAAAYANAPQAMAQATAAQAUAAANgQQAMgPAAgZIAAgCQAAgPgGgNQgFgNgLgHQgKgHgNAAQgTAAgMAQg");
	this.shape_127.setTransform(173.6,317.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("rgba(255,255,255,0.902)").s().p("ABPBEIAAhXQAAgSgIgJQgHgJgRAAQgQABgLAKQgLAKgCAOIAABYIgNAAIAAhYQgBgSgIgIQgIgJgQAAQgOAAgKAIQgKAIgFARIAABaIgPAAIAAiFIAOAAIABAWQAHgMAMgGQALgGANAAQAgAAAHAaQAIgMAMgIQAMgGAOAAQArAAABAvIAABYg");
	this.shape_128.setTransform(155.4,317.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("rgba(255,255,255,0.902)").s().p("AgxBGQgUgXAAgmIAAgRQAAgZAIgTQAKgTAPgKQAQgLAUABQAVAAAPAKQARAJAIATQAJASAAAZIAAAUQAAAYgJAUQgIASgQAKQgQALgVgBQgfABgSgXgAgng8QgPATAAAhIAAASQAAAgAPATQAPATAYAAQAagBAPgSQAOgTAAggIAAgSQAAghgOgTQgPgSgaAAQgYAAgPASg");
	this.shape_129.setTransform(129.4,315.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("rgba(194,155,1,0.902)").s().p("AgiAPIAAgcIBFAAIAAAcg");
	this.shape_130.setTransform(109.7,316.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("rgba(194,155,1,0.902)").s().p("AgtBPQgQgPgBgYIAkAAQAAALAIAGQAHAHALAAQAMgBAHgGQAIgHgBgLQABgbgdAAIgTAAIAAgbIATAAQAMAAAHgHQAHgGAAgMQAAgKgHgHQgGgFgLAAQgKgBgHAGQgGAFgBAJIgkAAQABgNAHgMQAIgLAOgGQANgHARABQAbAAARANQAPAOABAYQAAANgIAKQgHAKgNAGQAPAEAIALQAHALAAAOQAAAZgRAOQgSAOgbAAQgcABgRgOg");
	this.shape_131.setTransform(91.1,315.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#C29B01").ss(2,1,1).p("EgiKAiCQoarAAAufQAAxnMeseQMesfRoAAQRoAAMfMfQMeMeAARnQAAOfoZLA");
	this.shape_132.setTransform(283.4,228.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("rgba(234,187,1,0.008)").s().p("EgiKAiCQoarAAAufQAAxnMeseQMfsfRnAAQRpAAMeMfQMeMeAARnQAAOfoZLAg");
	this.shape_133.setTransform(283.4,228.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#C29B01").ss(2,1,1).p("EgkSAi4Qn/rGAAuYQAAyVM+s+QM+s+SVAAQSWAAM+M+QM9M+AASVQAAOYn+LG");
	this.shape_134.setTransform(283.4,223.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("rgba(234,187,1,0.008)").s().p("EgkRAi4QoArGAAuYQAByVM9s+QM+s+SVAAQSVAAM/M+QM9M+ABSVQAAOYn/LGg");
	this.shape_135.setTransform(283.4,223.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.popup3, new cjs.Rectangle(-1,-1,568.7,448.4), null);


(lib.popup2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btn_fechar.addEventListener("click", fechar.bind(this));
		function fechar(){
			createjs.Tween.get(this.parent.popup2)
			.to({y:700}, 1000, createjs.Ease.quartInOut);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn_fechar
	this.btn_fechar = new lib.btn_fechar();
	this.btn_fechar.name = "btn_fechar";
	this.btn_fechar.parent = this;
	this.btn_fechar.setTransform(283.4,30.3,1,1,0,0,0,18.7,19.4);
	new cjs.ButtonHelper(this.btn_fechar, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_fechar).wait(1));

	// txt
	this.instance = new lib.popup2();
	this.instance.parent = this;
	this.instance.setTransform(104.2,67.6,0.855,0.855);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.902)").s().p("AgGAIQgDgDAAgFQAAgDADgDQACgDAEAAQAFAAADADQADADAAADQAAAFgDADQgDACgFAAQgEAAgCgCg");
	this.shape.setTransform(417.8,435.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.902)").s().p("AgqAzQgRgTAAgfIAAgCQAAgTAIgQQAHgPAOgJQAOgIAQAAQAbAAAQASQARATAAAfIAAACQAAATgIAQQgHAPgOAJQgNAIgSAAQgZAAgRgSgAgfgoQgNAPAAAZIAAACQAAAYANAPQAMAQATAAQAUAAANgQQAMgPAAgZIAAgCQAAgPgGgNQgFgNgLgHQgKgHgNAAQgTAAgMAQg");
	this.shape_1.setTransform(407.8,429.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.902)").s().p("AAkBEIAAhXQAAgSgIgJQgHgIgRgBQgNABgKAIQgLAJgFAPIAABaIgOAAIAAiFIAOAAIAAAXQAIgMALgGQALgHANAAQAVAAALAMQAKAMAAAYIAABXg");
	this.shape_2.setTransform(393.8,429.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.902)").s().p("AgeBEIAAiFIAOAAIABAWQALgYAZAAQAHAAADABIAAAOIgKgBQgPAAgIAIQgKAHgDAPIAABbg");
	this.shape_3.setTransform(383.4,429.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.902)").s().p("AgYA9QgOgJgIgPQgIgPAAgSIAAgFQAAgTAHgPQAIgQAOgJQANgIAOAAQAZAAAOAQQAOARAAAdIAAAHIheAAIAAADQAAAWANAQQANAPASAAQAMAAAKgFQAIgEAIgJIAKAHQgRAXgfAAQgQAAgNgIgAgYgsQgMANgDAUIBPAAIAAgBQAAgUgKgMQgLgMgRAAQgPAAgLAMg");
	this.shape_4.setTransform(371.9,429.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.902)").s().p("AgCBMQgHgIAAgSIAAhYIgZAAIAAgMIAZAAIAAgiIAOAAIAAAiIAbAAIAAAMIgbAAIAABYQAAALAEAGQAEAFAJAAIAMgBIABAMQgGACgKAAQgPAAgGgJg");
	this.shape_5.setTransform(360.9,428.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.902)").s().p("AgpA6QgLgKgBgRQABgTAQgMQAQgKAcAAIAbAAIAAgPQAAgOgJgJQgJgIgRAAQgPAAgKAIQgKAIAAALIgPAAQAAgQAPgMQAPgLAVAAQAWAAANALQANALABAUIAAA+QAAAUAEAJIAAACIgRAAQgCgHAAgMQgIAKgMAGQgMAFgMAAQgUAAgMgLgAgaAJQgMAHAAAOQAAALAJAIQAIAHANAAQAOAAAMgHQALgHAGgMIAAgeIgaAAQgWABgNAIg");
	this.shape_6.setTransform(350.2,429.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.902)").s().p("ABPBEIAAhXQAAgSgIgJQgHgIgRgBQgQABgLAKQgLAKgCAOIAABYIgNAAIAAhYQgBgSgIgIQgIgJgQAAQgOABgKAHQgKAJgFAQIAABaIgPAAIAAiFIAOAAIABAWQAHgMAMgGQALgGANAAQAgAAAHAaQAIgNAMgGQAMgHAOAAQArAAABAvIAABYg");
	this.shape_7.setTransform(332.4,429.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.902)").s().p("AgZA9QgOgJgHgPQgIgPAAgSIAAgFQAAgTAHgPQAIgQANgJQAOgIAPAAQAXAAAPAQQAOARAAAdIAAAHIheAAIAAADQAAAWANAQQANAPATAAQAMAAAIgFQAKgEAHgJIAJAHQgQAXgfAAQgQAAgOgIgAgZgsQgLANgCAUIBPAAIAAgBQgBgUgKgMQgLgMgQAAQgRAAgLAMg");
	this.shape_8.setTransform(308.5,429.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.902)").s().p("AgCBMQgHgIAAgSIAAhYIgZAAIAAgMIAZAAIAAgiIAOAAIAAAiIAbAAIAAAMIgbAAIAABYQAAALAEAGQAEAFAJAAIAMgBIABAMQgGACgKAAQgPAAgGgJg");
	this.shape_9.setTransform(297.5,428.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.902)").s().p("AgHBbIAAiFIAOAAIAACFgAgHhJQgCgDAAgEQAAgFACgDQADgCAEAAQAEAAADACQADAEAAAEQAAAEgDADQgDACgEAAQgEAAgDgCg");
	this.shape_10.setTransform(291,427.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.902)").s().p("AgZA9QgNgJgIgPQgIgPAAgSIAAgFQAAgTAIgPQAHgQAOgJQANgIAOAAQAZAAAOAQQAOARAAAdIAAAHIheAAIAAADQAAAWANAQQANAPATAAQALAAAKgFQAJgEAHgJIAKAHQgRAXgfAAQgQAAgOgIgAgZgsQgLANgCAUIBOAAIAAgBQAAgUgLgMQgKgMgRAAQgPAAgMAMg");
	this.shape_11.setTransform(281.7,429.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.902)").s().p("AgGBfIAAi9IANAAIAAC9g");
	this.shape_12.setTransform(272.3,427.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.902)").s().p("AgqAzQgRgTAAgfIAAgCQAAgTAIgQQAHgPAOgJQAOgIAQAAQAbAAAQASQARATAAAfIAAACQAAATgIAQQgHAPgOAJQgNAIgSAAQgZAAgRgSgAgfgoQgNAPAAAZIAAACQAAAYANAPQAMAQATAAQAUAAANgQQAMgPAAgZIAAgCQAAgPgGgNQgFgNgLgHQgKgHgNAAQgTAAgMAQg");
	this.shape_13.setTransform(256.1,429.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.902)").s().p("AAkBEIAAhXQAAgSgIgJQgHgIgRgBQgNABgKAIQgLAJgFAPIAABaIgOAAIAAiFIAOAAIAAAXQAIgMALgGQALgHANAAQAVAAALAMQAKAMAAAYIAABXg");
	this.shape_14.setTransform(242.1,429.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.902)").s().p("AgYA9QgOgJgIgPQgIgPAAgSIAAgFQAAgTAHgPQAIgQAOgJQANgIAPAAQAYAAAOAQQAOARAAAdIAAAHIheAAIAAADQAAAWANAQQANAPASAAQAMAAAKgFQAIgEAIgJIAKAHQgRAXgfAAQgQAAgNgIgAgYgsQgMANgDAUIBPAAIAAgBQAAgUgLgMQgKgMgQAAQgQAAgLAMg");
	this.shape_15.setTransform(222.5,429.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.902)").s().p("AgqAzQgRgTAAgfIAAgCQAAgTAIgQQAHgPAOgJQAOgIAQAAQAbAAAQASQARATAAAfIAAACQAAATgIAQQgHAPgOAJQgNAIgSAAQgZAAgRgSgAgfgoQgNAPAAAZIAAACQAAAYANAPQAMAQATAAQAUAAANgQQAMgPAAgZIAAgCQAAgPgGgNQgFgNgLgHQgKgHgNAAQgTAAgMAQg");
	this.shape_16.setTransform(202.6,429.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.902)").s().p("Ag1BeIAAi4IAOAAIABASQAOgVAbAAQAXAAAOASQAOASAAAhIAAACQAAAegOASQgOATgXAAQgaAAgPgUIAABFgAgXhKQgKAHgFANIAAA/QAFALAKAGQAKAGANAAQASAAAKgPQALgPAAgbQAAgZgLgPQgKgPgSAAQgNAAgKAGg");
	this.shape_17.setTransform(188.8,432.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.902)").s().p("AgeBEIAAiFIAOAAIAAAWQAMgYAZAAQAHAAADABIgBAOIgKgBQgNAAgJAIQgKAHgEAPIAABbg");
	this.shape_18.setTransform(178.1,429.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.902)").s().p("AgqAzQgRgTAAgfIAAgCQAAgTAIgQQAHgPAOgJQAOgIAQAAQAbAAAQASQARATAAAfIAAACQAAATgIAQQgHAPgOAJQgNAIgSAAQgZAAgRgSgAgfgoQgNAPAAAZIAAACQAAAYANAPQAMAQATAAQAUAAANgQQAMgPAAgZIAAgCQAAgPgGgNQgFgNgLgHQgKgHgNAAQgTAAgMAQg");
	this.shape_19.setTransform(165.9,429.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.902)").s().p("AgmAzQgPgSAAgfIAAgEQAAgTAHgQQAHgPANgIQANgIAQAAQAWAAAOANQAOANABAVIgOAAQgBgQgKgJQgKgKgQAAQgTAAgLAPQgLAOAAAaIAAAEQAAAZALAOQALAPATAAQAPAAALgJQAKgJABgOIAOAAQAAANgHAKQgHAKgMAGQgMAFgNAAQgZAAgQgSg");
	this.shape_20.setTransform(152.4,429.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.902)").s().p("AgqAzQgRgTAAgfIAAgCQAAgTAIgQQAHgPAOgJQAOgIAQAAQAbAAAQASQARATAAAfIAAACQAAATgIAQQgHAPgOAJQgNAIgSAAQgZAAgRgSgAgfgoQgNAPAAAZIAAACQAAAYANAPQAMAQATAAQAUAAANgQQAMgPAAgZIAAgCQAAgPgGgNQgFgNgLgHQgKgHgNAAQgTAAgMAQg");
	this.shape_21.setTransform(495.6,401.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.902)").s().p("AgnBOQgOgTAAggIAAgBQAAgeAOgTQAOgSAYAAQAaAAAOAVIAAhLIAPAAIAAC9IgOAAIgBgSQgOAUgbAAQgXAAgOgSgAgcgOQgKAOAAAcQAAAaAKAPQALAOARAAQAcAAALgYIAAg9QgLgbgcAAQgRAAgLAPg");
	this.shape_22.setTransform(481.2,398.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.902)").s().p("AgjA6QgPgLAAgSIAPAAQABANAKAIQAKAHAQAAQAPAAAKgHQAJgHAAgKQAAgLgJgHQgJgHgRgDQgRgEgKgEQgKgFgFgHQgEgHAAgKQAAgQANgKQANgKAUAAQAWAAAOALQANALAAASIgPAAQAAgMgJgIQgKgIgPAAQgOAAgJAHQgIAGAAALQAAAKAHAFQAHAGATAEQATAFAKAEQAKAFAEAHQAFAIAAAKQAAARgOAKQgNAKgWAAQgXAAgOgLg");
	this.shape_23.setTransform(461.9,401.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.902)").s().p("AgYA9QgPgJgHgPQgIgPAAgSIAAgFQAAgTAHgPQAIgQAOgJQANgIAPAAQAXAAAPAQQAOARAAAdIAAAHIheAAIAAADQAAAWANAQQANAPASAAQANAAAIgFQAJgEAIgJIAJAHQgQAXgfAAQgQAAgNgIgAgYgsQgMANgDAUIBPAAIAAgBQAAgUgKgMQgLgMgQAAQgRAAgKAMg");
	this.shape_24.setTransform(449.1,401.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.902)").s().p("AgCBMQgHgIAAgSIAAhYIgZAAIAAgMIAZAAIAAgiIAOAAIAAAiIAbAAIAAAMIgbAAIAABYQAAALAEAGQAEAFAJAAIAMgBIABAMQgGACgKAAQgPAAgGgJg");
	this.shape_25.setTransform(438.1,400);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.902)").s().p("AgeBEIAAiEIAOAAIAAAUQAMgXAZAAQAHAAADACIAAANIgKgBQgOAAgJAIQgJAIgFAOIAABbg");
	this.shape_26.setTransform(430.9,401.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.902)").s().p("AgpA6QgMgKAAgRQABgTAQgMQAQgKAcAAIAbAAIAAgPQAAgOgJgJQgJgIgRAAQgOAAgLAIQgKAIABALIgQAAQAAgQAQgMQAOgLAVAAQAWAAANALQANALAAAUIAAA+QABAUAEAJIAAACIgRAAQgCgHAAgMQgIAKgMAGQgMAFgMAAQgUAAgMgLgAgZAJQgNAHAAAOQAAALAJAIQAIAHANAAQAOAAAMgHQALgHAGgMIAAgeIgaAAQgWABgMAIg");
	this.shape_27.setTransform(418.9,401.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.902)").s().p("Ag1BeIAAi4IAOAAIABASQAOgVAaAAQAYAAAOASQAOASAAAhIAAACQAAAegOASQgOATgXAAQgbAAgOgUIAABFgAgXhKQgKAHgFANIAAA/QAFALAKAGQAKAGANAAQASAAAKgPQALgPAAgbQAAgZgLgPQgKgPgSAAQgNAAgKAGg");
	this.shape_28.setTransform(405.6,404);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.902)").s().p("AgjA6QgPgLAAgSIAPAAQABANAKAIQAKAHAQAAQAPAAAKgHQAJgHAAgKQAAgLgJgHQgJgHgRgDQgRgEgKgEQgKgFgFgHQgEgHAAgKQAAgQANgKQANgKAUAAQAWAAAOALQANALAAASIgPAAQAAgMgJgIQgKgIgPAAQgOAAgJAHQgIAGAAALQAAAKAHAFQAHAGATAEQATAFAKAEQAKAFAEAHQAFAIAAAKQAAARgOAKQgNAKgWAAQgXAAgOgLg");
	this.shape_29.setTransform(385.7,401.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.902)").s().p("AgoA6QgNgKAAgRQAAgTAQgMQARgKAcAAIAaAAIAAgPQAAgOgIgJQgJgIgRAAQgOAAgLAIQgJAIgBALIgOAAQAAgQAOgMQAPgLAVAAQAWAAANALQANALABAUIAAA+QAAAUADAJIAAACIgQAAQgBgHgBgMQgIAKgMAGQgMAFgNAAQgTAAgLgLgAgaAJQgMAHAAAOQAAALAJAIQAIAHANAAQAOAAAMgHQAMgHAEgMIAAgeIgaAAQgVABgNAIg");
	this.shape_30.setTransform(372.4,401.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.902)").s().p("AgjA6QgPgLAAgSIAPAAQABANAKAIQAKAHAQAAQAPAAAKgHQAJgHAAgKQAAgLgJgHQgJgHgRgDQgRgEgKgEQgKgFgFgHQgEgHAAgKQAAgQANgKQANgKAUAAQAWAAAOALQANALAAASIgPAAQAAgMgJgIQgKgIgPAAQgOAAgJAHQgIAGAAALQAAAKAHAFQAHAGATAEQATAFAKAEQAKAFAEAHQAFAIAAAKQAAARgOAKQgNAKgWAAQgXAAgOgLg");
	this.shape_31.setTransform(353.2,401.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0.902)").s().p("AgoA6QgMgKgBgRQABgTAPgMQARgKAcAAIAbAAIAAgPQgBgOgIgJQgJgIgRAAQgOAAgLAIQgJAIgBALIgOAAQAAgQAOgMQAPgLAVAAQAWAAANALQANALABAUIAAA+QAAAUADAJIAAACIgQAAQgBgHgBgMQgIAKgMAGQgMAFgMAAQgUAAgLgLgAgaAJQgMAHAAAOQAAALAJAIQAIAHANAAQAOAAAMgHQAMgHAFgMIAAgeIgbAAQgVABgNAIg");
	this.shape_32.setTransform(339.9,401.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,255,255,0.902)").s().p("AgnBOQgOgTAAggIAAgBQAAgeAOgTQAOgSAYAAQAaAAAOAVIAAhLIAPAAIAAC9IgOAAIgBgSQgOAUgbAAQgXAAgOgSgAgcgOQgKAOAAAcQAAAaAKAPQALAOARAAQAcAAALgYIAAg9QgLgbgcAAQgRAAgLAPg");
	this.shape_33.setTransform(326,398.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,255,255,0.902)").s().p("AgqAzQgRgTAAgfIAAgCQAAgTAIgQQAHgPAOgJQAOgIAQAAQAbAAAQASQARATAAAfIAAACQAAATgIAQQgHAPgOAJQgNAIgSAAQgZAAgRgSgAgfgoQgNAPAAAZIAAACQAAAYANAPQAMAQATAAQAUAAANgQQAMgPAAgZIAAgCQAAgPgGgNQgFgNgLgHQgKgHgNAAQgTAAgMAQg");
	this.shape_34.setTransform(312.1,401.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,255,255,0.902)").s().p("AgCBMQgHgIAAgSIAAhYIgZAAIAAgMIAZAAIAAgiIAOAAIAAAiIAbAAIAAAMIgbAAIAABYQAAALAEAGQAEAFAJAAIAMgBIABAMQgGACgKAAQgPAAgGgJg");
	this.shape_35.setTransform(300.7,400);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(255,255,255,0.902)").s().p("ABPBEIAAhXQAAgSgIgIQgHgKgRABQgQAAgLAKQgLAKgCAPIAABXIgNAAIAAhYQgBgRgIgJQgIgIgQAAQgOgBgKAJQgKAHgFAQIAABbIgPAAIAAiEIAOAAIABAVQAHgMAMgGQALgGANAAQAgAAAHAaQAIgMAMgIQAMgGAOAAQArAAABAvIAABYg");
	this.shape_36.setTransform(279.5,401.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0.902)").s().p("AgZA9QgNgJgIgPQgIgPAAgSIAAgFQAAgTAIgPQAHgQANgJQAOgIAOAAQAZAAAOAQQAOARAAAdIAAAHIheAAIAAADQAAAWANAQQANAPATAAQALAAAKgFQAJgEAHgJIAKAHQgRAXgfAAQgQAAgOgIgAgZgsQgLANgCAUIBOAAIAAgBQAAgUgLgMQgKgMgRAAQgPAAgMAMg");
	this.shape_37.setTransform(261.9,401.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(255,255,255,0.902)").s().p("AgqAzQgRgTAAgfIAAgCQAAgTAIgQQAHgPAOgJQAOgIAQAAQAbAAAQASQARATAAAfIAAACQAAATgIAQQgHAPgOAJQgNAIgSAAQgZAAgRgSgAgfgoQgNAPAAAZIAAACQAAAYANAPQAMAQATAAQAUAAANgQQAMgPAAgZIAAgCQAAgPgGgNQgFgNgLgHQgKgHgNAAQgTAAgMAQg");
	this.shape_38.setTransform(242,401.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,255,255,0.902)").s().p("AgnBOQgOgTAAggIAAgBQAAgeAOgTQAOgSAYAAQAaAAAOAVIAAhLIAPAAIAAC9IgOAAIgBgSQgOAUgbAAQgXAAgOgSgAgcgOQgKAOAAAcQAAAaAKAPQALAOARAAQAcAAALgYIAAg9QgLgbgcAAQgRAAgLAPg");
	this.shape_39.setTransform(227.6,398.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(255,255,255,0.902)").s().p("AgoA6QgMgKgBgRQABgTAPgMQARgKAcAAIAaAAIAAgPQAAgOgIgJQgJgIgRAAQgOAAgLAIQgJAIgBALIgOAAQAAgQAOgMQAPgLAVAAQAWAAANALQANALABAUIAAA+QAAAUADAJIAAACIgQAAQgBgHgBgMQgIAKgMAGQgMAFgNAAQgTAAgLgLgAgaAJQgMAHAAAOQAAALAJAIQAIAHANAAQAOAAAMgHQAMgHAEgMIAAgeIgaAAQgVABgNAIg");
	this.shape_40.setTransform(213.9,401.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(255,255,255,0.902)").s().p("AgeBEIAAiEIAOAAIABAUQALgXAZAAQAHAAADACIAAANIgKgBQgPAAgIAIQgKAIgDAOIAABbg");
	this.shape_41.setTransform(203.9,401.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(255,255,255,0.902)").s().p("AgCBMQgHgIAAgSIAAhYIgZAAIAAgMIAZAAIAAgiIAOAAIAAAiIAbAAIAAAMIgbAAIAABYQAAALAEAGQAEAFAJAAIAMgBIABAMQgGACgKAAQgPAAgGgJg");
	this.shape_42.setTransform(194.4,400);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(255,255,255,0.902)").s().p("AAkBEIAAhXQAAgSgIgIQgHgKgRABQgNgBgKAKQgLAIgFAOIAABbIgOAAIAAiEIAOAAIAAAWQAIgMALgHQALgGANAAQAVAAALAMQAKAMAAAZIAABWg");
	this.shape_43.setTransform(183.7,401.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(255,255,255,0.902)").s().p("AgqAzQgRgTAAgfIAAgCQAAgTAIgQQAHgPAOgJQAOgIAQAAQAbAAAQASQARATAAAfIAAACQAAATgIAQQgHAPgOAJQgNAIgSAAQgZAAgRgSgAgfgoQgNAPAAAZIAAACQAAAYANAPQAMAQATAAQAUAAANgQQAMgPAAgZIAAgCQAAgPgGgNQgFgNgLgHQgKgHgNAAQgTAAgMAQg");
	this.shape_44.setTransform(169.6,401.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(255,255,255,0.902)").s().p("AgmAzQgPgSAAgfIAAgEQAAgTAHgQQAHgPANgIQANgIAQAAQAWAAAOANQAOANABAVIgOAAQgBgQgKgJQgKgKgQAAQgTAAgLAPQgLAOAAAaIAAAEQAAAZALAOQALAPATAAQAPAAALgJQAKgJABgOIAOAAQAAANgHAKQgHAKgMAGQgMAFgNAAQgZAAgQgSg");
	this.shape_45.setTransform(156.1,401.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(255,255,255,0.902)").s().p("AAkBEIAAhXQAAgSgIgIQgHgKgRABQgNgBgKAKQgLAIgFAOIAABbIgOAAIAAiEIAOAAIAAAWQAIgMALgHQALgGANAAQAVAAALAMQAKAMAAAZIAABWg");
	this.shape_46.setTransform(142.5,401.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(255,255,255,0.902)").s().p("AgZA9QgNgJgIgPQgIgPAAgSIAAgFQAAgTAIgPQAHgQANgJQAOgIAOAAQAZAAAOAQQAOARAAAdIAAAHIheAAIAAADQAAAWANAQQANAPATAAQALAAAKgFQAJgEAHgJIAKAHQgRAXgfAAQgQAAgOgIgAgZgsQgLANgCAUIBOAAIAAgBQAAgUgLgMQgKgMgRAAQgPAAgMAMg");
	this.shape_47.setTransform(129.1,401.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(255,255,255,0.902)").s().p("AgYBYQgPgJgHgPQgIgPAAgSIAAgGQAAgTAHgOQAIgQAOgJQANgIAPAAQAYAAAOAQQAOARAAAcIAAAIIheAAIAAADQAAAWANAQQANAPASAAQAMAAAKgFQAIgEAIgJIAJAHQgQAXgfAAQgQAAgNgIgAgYgRQgMANgDATIBPAAIAAgBQAAgTgKgMQgLgMgQAAQgQAAgLAMgAgEg8IAXgjIASAAIgdAjg");
	this.shape_48.setTransform(109.9,398.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(255,255,255,0.902)").s().p("AgYA9QgOgJgIgPQgIgPAAgSIAAgFQAAgTAHgPQAIgQAOgJQANgIAPAAQAYAAAOAQQAOARAAAdIAAAHIheAAIAAADQAAAWANAQQANAPASAAQAMAAAKgFQAIgEAIgJIAKAHQgRAXgfAAQgQAAgNgIgAgYgsQgMANgDAUIBPAAIAAgBQAAgUgLgMQgKgMgQAAQgQAAgLAMg");
	this.shape_49.setTransform(90.7,401.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(255,255,255,0.902)").s().p("AgHBfIAAi9IAOAAIAAC9g");
	this.shape_50.setTransform(81.3,398.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(255,255,255,0.902)").s().p("Ag3BaIAAizIBvAAIAAANIhgAAIAABEIBUAAIAAAMIhUAAIAABJIBgAAIAAANg");
	this.shape_51.setTransform(71.9,399.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(255,255,255,0.902)").s().p("AgHAIQgDgDAAgFQAAgDADgDQADgDAEAAQAFAAADADQACADAAADQAAAFgCADQgDACgFAAQgEAAgDgCg");
	this.shape_52.setTransform(486.6,379);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(255,255,255,0.902)").s().p("AgoA6QgNgKAAgRQAAgTAQgMQARgKAcAAIAaAAIAAgPQAAgOgIgJQgJgIgRAAQgOAAgLAIQgJAIgBALIgOAAQAAgQAOgMQAPgLAVAAQAWAAANALQANALABAUIAAA+QAAAUADAJIAAACIgQAAQgBgHgBgMQgIAKgMAGQgMAFgNAAQgTAAgLgLgAgaAJQgMAHAAAOQAAALAJAIQAIAHANAAQAOAAAMgHQAMgHAEgMIAAgeIgaAAQgVABgNAIg");
	this.shape_53.setTransform(476.8,373.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(255,255,255,0.902)").s().p("AgnBOQgOgTAAggIAAgBQAAgeAOgTQAOgSAYAAQAaAAAOAVIAAhLIAPAAIAAC9IgOAAIgBgSQgOAUgbAAQgXAAgOgSgAgcgOQgKAOAAAcQAAAaAKAPQALAOARAAQAcAAALgYIAAg9QgLgbgcAAQgRAAgLAPg");
	this.shape_54.setTransform(462.9,370.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(255,255,255,0.902)").s().p("AgpA6QgLgKgBgRQABgTAQgMQAQgKAcAAIAbAAIAAgPQAAgOgJgJQgJgIgRAAQgPAAgKAIQgKAIAAALIgPAAQAAgQAPgMQAPgLAVAAQAWAAANALQANALABAUIAAA+QAAAUAEAJIAAACIgRAAQgCgHAAgMQgIAKgMAGQgMAFgMAAQgUAAgMgLgAgaAJQgMAHAAAOQAAALAJAIQAIAHANAAQAOAAAMgHQALgHAGgMIAAgeIgaAAQgWABgNAIg");
	this.shape_55.setTransform(449.2,373.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(255,255,255,0.902)").s().p("AgGBfIAAi9IANAAIAAC9g");
	this.shape_56.setTransform(439.8,370.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(255,255,255,0.902)").s().p("AgpA6QgMgKABgRQgBgTARgMQAQgKAcAAIAbAAIAAgPQAAgOgJgJQgJgIgRAAQgOAAgKAIQgLAIABALIgQAAQABgQAPgMQAOgLAVAAQAWAAANALQANALAAAUIAAA+QAAAUAFAJIAAACIgQAAQgCgHgBgMQgIAKgMAGQgMAFgMAAQgUAAgMgLgAgZAJQgNAHAAAOQAAALAIAIQAJAHANAAQAOAAAMgHQALgHAGgMIAAgeIgaAAQgWABgMAIg");
	this.shape_57.setTransform(430,373.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(255,255,255,0.902)").s().p("AAkBEIAAhXQAAgSgIgJQgHgIgRgBQgNABgKAIQgLAJgFAOIAABbIgOAAIAAiFIAOAAIAAAXQAIgMALgGQALgHANAAQAVAAALAMQAKAMAAAYIAABXg");
	this.shape_58.setTransform(416.4,373.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(255,255,255,0.902)").s().p("AgHBbIAAiFIAOAAIAACFgAgHhJQgCgDAAgEQAAgFACgDQADgCAEAAQAEAAADACQADADAAAEQAAAFgDADQgDACgEAAQgEAAgDgCg");
	this.shape_59.setTransform(406.6,370.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(255,255,255,0.902)").s().p("AgeBEIAAiFIAOAAIABAWQALgYAZAAQAHAAADABIAAAOIgKgBQgPAAgIAIQgJAIgEAOIAABbg");
	this.shape_60.setTransform(394.1,373.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(255,255,255,0.902)").s().p("AgYA9QgPgJgHgPQgIgPAAgSIAAgFQAAgTAHgPQAIgQAOgJQANgIAPAAQAYAAAOAQQAOARAAAdIAAAHIheAAIAAADQAAAWANAQQANAPASAAQAMAAAKgFQAIgEAIgJIAJAHQgQAXgfAAQgQAAgNgIgAgYgsQgMANgDAUIBPAAIAAgBQAAgUgKgMQgLgMgQAAQgQAAgLAMg");
	this.shape_61.setTransform(382.6,373.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(255,255,255,0.902)").s().p("AgjA6QgPgLAAgSIAPAAQABANAKAIQAKAHAQAAQAPAAAKgHQAJgHAAgKQAAgLgJgHQgJgHgRgDQgRgEgKgEQgKgFgFgHQgEgHAAgKQAAgQANgKQANgKAUAAQAWAAAOALQANALAAASIgPAAQAAgMgJgIQgKgIgPAAQgOAAgJAHQgIAGAAALQAAAKAHAFQAHAGATAEQATAFAKAEQAKAFAEAHQAFAIAAAKQAAARgOAKQgNAKgWAAQgXAAgOgLg");
	this.shape_62.setTransform(369.6,373.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(255,255,255,0.902)").s().p("AgoA6QgMgKAAgRQAAgTAPgMQARgKAcAAIAaAAIAAgPQABgOgJgJQgJgIgRAAQgPAAgJAIQgKAIAAALIgPAAQgBgQAQgMQAOgLAVAAQAWAAANALQANALAAAUIAAA+QAAAUAEAJIAAACIgPAAQgCgHgBgMQgIAKgMAGQgMAFgNAAQgTAAgLgLgAgZAJQgNAHAAAOQAAALAIAIQAJAHANAAQAOAAAMgHQAMgHAEgMIAAgeIgaAAQgVABgMAIg");
	this.shape_63.setTransform(350.1,373.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(255,255,255,0.902)").s().p("AgKBWQAKAAAHgEQAHgFAAgGQAAgHgGgDQgFgCgKgBIADgPIAHAAIAEAAIAAgBIgKAAIgBABQgUgDgOgPQgPgSAAgfIAAgEQAAgTAHgQQAHgPANgJQANgHAQAAQAWAAAOAMQAOAOABAVIgOAAQgBgQgKgKQgKgJgQAAQgTAAgLAPQgLAOAAAaIAAAFQAAAYALAOQALAPATAAQAPAAALgJQAKgJABgNIAOAAQAAALgHALQgHAJgMAGQgKAFgLABIgBAHQAUACAAASQAAAMgKAHQgKAHgPAAgAgEArIABgBIAKAAIAAABIgEAAIgHAAgAgEArIAAAAg");
	this.shape_64.setTransform(337,375.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(255,255,255,0.902)").s().p("AgpA6QgMgKAAgRQABgTAQgMQAQgKAcAAIAbAAIAAgPQAAgOgJgJQgJgIgRAAQgOAAgLAIQgKAIAAALIgPAAQAAgQAPgMQAPgLAVAAQAWAAANALQANALAAAUIAAA+QABAUAEAJIAAACIgRAAQgCgHAAgMQgIAKgMAGQgMAFgMAAQgUAAgMgLgAgZAJQgNAHAAAOQAAALAJAIQAIAHANAAQAOAAAMgHQALgHAGgMIAAgeIgaAAQgWABgMAIg");
	this.shape_65.setTransform(323.5,373.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(255,255,255,0.902)").s().p("ABPBEIAAhXQAAgSgIgJQgHgIgRgBQgQABgLAKQgLAKgCAOIAABYIgNAAIAAhYQgBgSgIgIQgIgJgQAAQgOABgKAHQgKAJgFAPIAABbIgPAAIAAiFIAOAAIABAWQAHgMAMgGQALgGANAAQAgAAAHAaQAIgMAMgHQAMgHAOAAQArAAABAvIAABYg");
	this.shape_66.setTransform(305.7,373.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(255,255,255,0.902)").s().p("AgmA4QgMgNAAgYIAAhWIAPAAIAABUQAAAmAfAAQAfAAAJgaIAAhgIAPAAIAACFIgPAAIAAgRQgOATgcAAQgVAAgLgMg");
	this.shape_67.setTransform(287.5,373.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(255,255,255,0.902)").s().p("AgQBgIAAh4IgVAAIAAgMIAVAAIAAgRQAAgUALgLQAKgLASAAQAJAAAGACIgBAMQgFgBgIAAQgMAAgHAHQgGAIAAAOIAAARIAfAAIAAAMIgfAAIAAB4g");
	this.shape_68.setTransform(276.8,370.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(255,255,255,0.902)").s().p("AgpA6QgMgKABgRQgBgTARgMQAQgKAcAAIAbAAIAAgPQAAgOgJgJQgJgIgRAAQgOAAgKAIQgLAIABALIgQAAQABgQAPgMQAOgLAVAAQAWAAANALQANALAAAUIAAA+QAAAUAFAJIAAACIgRAAQgCgHAAgMQgIAKgMAGQgMAFgMAAQgUAAgMgLgAgZAJQgNAHAAAOQAAALAIAIQAJAHANAAQAOAAAMgHQALgHAGgMIAAgeIgaAAQgWABgMAIg");
	this.shape_69.setTransform(259.1,373.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(255,255,255,0.902)").s().p("AgjA6QgPgLAAgSIAPAAQABANAKAIQAKAHAQAAQAPAAAKgHQAJgHAAgKQAAgLgJgHQgJgHgRgDQgRgEgKgEQgKgFgFgHQgEgHAAgKQAAgQANgKQANgKAUAAQAWAAAOALQANALAAASIgPAAQAAgMgJgIQgKgIgPAAQgOAAgJAHQgIAGAAALQAAAKAHAFQAHAGATAEQATAFAKAEQAKAFAEAHQAFAIAAAKQAAARgOAKQgNAKgWAAQgXAAgOgLg");
	this.shape_70.setTransform(239.8,373.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(255,255,255,0.902)").s().p("AgqBOQgRgTAAgfIAAgDQAAgTAIgPQAHgPAOgJQAOgIAQAAQAbAAAQASQARATAAAeIAAADQAAATgIAQQgHAPgOAJQgNAIgSAAQgZAAgRgSgAgfgNQgNAOAAAZIAAADQAAAYANAPQAMAQATAAQAUAAANgQQAMgPAAgZIAAgDQAAgPgGgMQgFgNgLgHQgKgHgNAAQgTAAgMAQgAgIg8IAXgjIASAAIgdAjg");
	this.shape_71.setTransform(226.4,370.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(255,255,255,0.902)").s().p("Ag1BeIAAi4IAOAAIAAASQAPgVAaAAQAZAAANASQAOASAAAhIAAACQAAAegOASQgOATgXAAQgaAAgPgUIAABFgAgXhKQgKAHgFANIAAA/QAFALAKAGQAKAGANAAQASAAALgPQAKgPAAgbQAAgZgKgPQgLgPgSAAQgOAAgJAGg");
	this.shape_72.setTransform(212.6,375.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(255,255,255,0.902)").s().p("AgoA6QgNgKAAgRQAAgTAQgMQARgKAcAAIAaAAIAAgPQAAgOgIgJQgJgIgRAAQgPAAgJAIQgLAIAAALIgOAAQgBgQAPgMQAPgLAVAAQAWAAANALQANALABAUIAAA+QAAAUADAJIAAACIgPAAQgDgHAAgMQgIAKgMAGQgMAFgNAAQgTAAgLgLgAgaAJQgMAHAAAOQAAALAJAIQAIAHANAAQAOAAAMgHQAMgHAEgMIAAgeIgaAAQgVABgNAIg");
	this.shape_73.setTransform(198.4,373.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(255,255,255,0.902)").s().p("AgjA6QgPgLAAgSIAPAAQABANAKAIQAKAHAQAAQAPAAAKgHQAJgHAAgKQAAgLgJgHQgJgHgRgDQgRgEgKgEQgKgFgFgHQgEgHAAgKQAAgQANgKQANgKAUAAQAWAAAOALQANALAAASIgPAAQAAgMgJgIQgKgIgPAAQgOAAgJAHQgIAGAAALQAAAKAHAFQAHAGATAEQATAFAKAEQAKAFAEAHQAFAIAAAKQAAARgOAKQgNAKgWAAQgXAAgOgLg");
	this.shape_74.setTransform(179.1,373.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(255,255,255,0.902)").s().p("AgqAzQgRgTAAgfIAAgCQAAgTAIgQQAHgPAOgJQAOgIAQAAQAbAAAQASQARATAAAfIAAACQAAATgIAQQgHAPgOAJQgNAIgSAAQgZAAgRgSgAgfgoQgNAPAAAZIAAACQAAAYANAPQAMAQATAAQAUAAANgQQAMgPAAgZIAAgCQAAgPgGgNQgFgNgLgHQgKgHgNAAQgTAAgMAQg");
	this.shape_75.setTransform(165.7,373.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(255,255,255,0.902)").s().p("AgnBOQgOgTAAggIAAgBQAAgeAOgTQAOgSAYAAQAaAAAOAVIAAhLIAPAAIAAC9IgOAAIgBgSQgOAUgbAAQgXAAgOgSgAgcgOQgKAOAAAcQAAAaAKAPQALAOARAAQAcAAALgYIAAg9QgLgbgcAAQgRAAgLAPg");
	this.shape_76.setTransform(151.3,370.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(255,255,255,0.902)").s().p("AAkBEIAAhXQAAgSgIgJQgHgIgRgBQgNABgKAIQgLAJgFAOIAABbIgOAAIAAiFIAOAAIAAAXQAIgMALgGQALgHANAAQAVAAALAMQAKAMAAAYIAABXg");
	this.shape_77.setTransform(137.6,373.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(255,255,255,0.902)").s().p("AgmA4QgMgNAAgYIAAhWIAPAAIAABUQAAAmAfAAQAfAAAJgaIAAhgIAPAAIAACFIgPAAIAAgRQgOATgcAAQgVAAgLgMg");
	this.shape_78.setTransform(123.7,373.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(255,255,255,0.902)").s().p("AgZBYQgNgGgHgKIAIgJQAQATAVAAQASAAAKgLQALgLAAgTIAAgRQgOAUgbAAQgXAAgOgTQgOgSAAgfIAAgCQAAgfAOgSQAOgTAYAAQAaAAAOAWIABgTIAOAAIAACCQAAAZgPAPQgOAQgZAAQgNAAgMgHgAgchCQgKAOAAAdQAAAYAKAPQALAPARAAQAcAAALgZIAAg9QgFgNgKgGQgKgHgOAAQgRAAgLAPg");
	this.shape_79.setTransform(109.5,375.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(255,255,255,0.902)").s().p("AgZA9QgNgJgIgPQgIgPAAgSIAAgFQAAgTAIgPQAHgQANgJQAOgIAOAAQAZAAAOAQQAOARAAAdIAAAHIheAAIAAADQAAAWANAQQANAPATAAQALAAAKgFQAJgEAHgJIAKAHQgRAXgfAAQgQAAgOgIgAgZgsQgLANgCAUIBOAAIAAgBQAAgUgLgMQgKgMgRAAQgPAAgMAMg");
	this.shape_80.setTransform(96.3,373.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(255,255,255,0.902)").s().p("AgjA6QgPgLAAgSIAPAAQABANAKAIQAKAHAQAAQAPAAAKgHQAJgHAAgKQAAgLgJgHQgJgHgRgDQgRgEgKgEQgKgFgFgHQgEgHAAgKQAAgQANgKQANgKAUAAQAWAAAOALQANALAAASIgPAAQAAgMgJgIQgKgIgPAAQgOAAgJAHQgIAGAAALQAAAKAHAFQAHAGATAEQATAFAKAEQAKAFAEAHQAFAIAAAKQAAARgOAKQgNAKgWAAQgXAAgOgLg");
	this.shape_81.setTransform(83.2,373.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(255,255,255,0.902)").s().p("AgoBJQgOgTAAglIAAgfQAAgmAOgUQAOgTAagBQAaAAAPAUQAOASAAAlIAAAgQAAAmgOAUQgOAUgbgBQgaABgOgUgAgdg/QgKAPgBAfIAAAiQAAAfALAQQAKAQATAAQAUAAAKgQQAKgQAAgeIAAgiQAAgfgKgQQgKgQgUAAQgTAAgKAQg");
	this.shape_82.setTransform(480.5,342.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(255,255,255,0.902)").s().p("AARBaIAAihIgwASIAAgOIA9gWIACAAIAACzg");
	this.shape_83.setTransform(464.8,342.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(255,255,255,0.902)").s().p("ABPBEIAAhXQAAgSgIgJQgHgJgRAAQgQABgLAKQgLAKgCAPIAABXIgNAAIAAhYQgBgRgIgJQgIgIgQgBQgOAAgKAJQgKAHgFARIAABaIgPAAIAAiEIAOAAIABAVQAHgMAMgGQALgGANAAQAgAAAHAaQAIgMAMgIQAMgGAOAAQArAAABAvIAABYg");
	this.shape_84.setTransform(442,344.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(255,255,255,0.902)").s().p("AgYA9QgPgJgHgPQgIgPAAgSIAAgFQAAgTAHgPQAIgQAOgJQANgIAPAAQAXAAAPAQQAOARAAAdIAAAHIheAAIAAADQAAAWANAQQANAPASAAQANAAAIgFQAJgEAIgJIAJAHQgQAXgfAAQgQAAgNgIgAgYgsQgMANgDAUIBPAAIAAgBQAAgUgKgMQgLgMgQAAQgRAAgKAMg");
	this.shape_85.setTransform(424.4,345);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(255,255,255,0.902)").s().p("AgqAzQgRgTAAgfIAAgCQAAgTAIgQQAHgPAOgJQAOgIAQAAQAbAAAQASQARATAAAfIAAACQAAATgIAQQgHAPgOAJQgNAIgSAAQgZAAgRgSgAgfgoQgNAPAAAZIAAACQAAAYANAPQAMAQATAAQAUAAANgQQAMgPAAgZIAAgCQAAgPgGgNQgFgNgLgHQgKgHgNAAQgTAAgMAQg");
	this.shape_86.setTransform(404.5,345);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(255,255,255,0.902)").s().p("AgeBEIAAiEIAOAAIABAUQALgXAZAAQAGAAAEACIgBANIgKgBQgNAAgJAIQgKAHgDAPIAABbg");
	this.shape_87.setTransform(394,344.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(255,255,255,0.902)").s().p("AgmBLIgBATIgOAAIAAi9IAPAAIAABLQAOgVAaAAQAYAAAOASQAOASAAAfIAAACQAAAggOASQgOASgXAAQgbAAgOgVgAgXgWQgKAHgFAOIAAA7QALAZAbAAQASAAALgOQAKgPAAgcQAAgagKgOQgLgPgSAAQgNAAgKAHg");
	this.shape_88.setTransform(382.2,342.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(255,255,255,0.902)").s().p("AgYA9QgPgJgHgPQgIgPAAgSIAAgFQAAgTAHgPQAIgQANgJQAOgIAPAAQAXAAAPAQQAOARAAAdIAAAHIheAAIAAADQAAAWANAQQANAPATAAQAMAAAIgFQAJgEAIgJIAJAHQgQAXgfAAQgQAAgNgIgAgYgsQgMANgCAUIBPAAIAAgBQgBgUgKgMQgLgMgQAAQgRAAgKAMg");
	this.shape_89.setTransform(368.5,345);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(255,255,255,0.902)").s().p("AgeBEIAAiEIAOAAIABAUQALgXAZAAQAGAAAEACIgBANIgKgBQgNAAgJAIQgKAHgDAPIAABbg");
	this.shape_90.setTransform(358.4,344.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(255,255,255,0.902)").s().p("AgZBYQgNgJgIgPQgIgPAAgSIAAgGQAAgTAIgOQAHgQAOgJQANgIAOAAQAZAAAOAQQAOARAAAcIAAAIIheAAIAAADQAAAWANAQQANAPATAAQALAAAKgFQAJgEAHgJIAKAHQgRAXgfAAQgQAAgOgIgAgZgRQgLANgCATIBOAAIAAgBQAAgTgLgMQgKgMgRAAQgPAAgMAMgAgEg8IAXgjIARAAIgcAjg");
	this.shape_91.setTransform(346.9,342.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(255,255,255,0.902)").s().p("AgmAzQgPgSAAgfIAAgEQAAgTAHgQQAHgPANgIQANgIAQAAQAWAAAOANQAOANABAVIgOAAQgBgQgKgJQgKgKgQAAQgTAAgLAPQgLAOAAAaIAAAEQAAAZALAOQALAPATAAQAPAAALgJQAKgJABgOIAOAAQAAANgHAKQgHAKgMAGQgMAFgNAAQgZAAgQgSg");
	this.shape_92.setTransform(333.8,345);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(255,255,255,0.902)").s().p("AgqAzQgRgTAAgfIAAgCQAAgTAIgQQAHgPAOgJQAOgIAQAAQAbAAAQASQARATAAAfIAAACQAAATgIAQQgHAPgOAJQgNAIgSAAQgZAAgRgSgAgfgoQgNAPAAAZIAAACQAAAYANAPQAMAQATAAQAUAAANgQQAMgPAAgZIAAgCQAAgPgGgNQgFgNgLgHQgKgHgNAAQgTAAgMAQg");
	this.shape_93.setTransform(314,345);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(255,255,255,0.902)").s().p("AgZA9QgNgJgIgPQgIgPAAgSIAAgFQAAgTAIgPQAHgQAOgJQANgIAOAAQAZAAAOAQQAOARAAAdIAAAHIheAAIAAADQAAAWANAQQANAPATAAQALAAAKgFQAJgEAHgJIAKAHQgRAXgfAAQgQAAgOgIgAgZgsQgLANgCAUIBOAAIAAgBQAAgUgLgMQgKgMgRAAQgPAAgMAMg");
	this.shape_94.setTransform(294.3,345);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(255,255,255,0.902)").s().p("AgZBYQgNgGgHgKIAIgJQAQATAVAAQASAAAKgLQALgLAAgTIAAgRQgOAUgbAAQgXAAgOgTQgOgSAAgfIAAgCQAAgfAOgSQAOgTAYAAQAaAAAOAWIABgTIAOAAIAACCQAAAZgPAPQgOAQgZAAQgNAAgMgHgAgchCQgKAOAAAdQAAAYAKAPQALAPARAAQAcAAALgZIAAg9QgFgNgKgGQgKgHgOAAQgRAAgLAPg");
	this.shape_95.setTransform(280.4,347.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(255,255,255,0.902)").s().p("AAkBEIAAhXQAAgSgIgJQgHgJgRAAQgNAAgKAJQgLAJgFAPIAABaIgOAAIAAiEIAOAAIAAAWQAIgMALgHQALgGANAAQAVAAALAMQAKAMAAAYIAABXg");
	this.shape_96.setTransform(266.7,344.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(255,255,255,0.902)").s().p("AgHBbIAAiEIAOAAIAACEgAgHhKQgCgCAAgEQAAgEACgDQADgDAEAAQAEAAADADQADACAAAFQAAAEgDACQgDAEgEAAQgEAAgDgEg");
	this.shape_97.setTransform(256.9,342.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(255,255,255,0.902)").s().p("AgCBMQgHgIAAgSIAAhYIgZAAIAAgMIAZAAIAAgiIAOAAIAAAiIAbAAIAAAMIgbAAIAABYQAAALAEAGQAEAFAJAAIAMgBIABAMQgGACgKAAQgPAAgGgJg");
	this.shape_98.setTransform(249.7,343.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(255,255,255,0.902)").s().p("AgoA6QgMgKAAgRQAAgTAPgMQARgKAcAAIAaAAIAAgPQABgOgJgJQgJgIgRAAQgPAAgJAIQgKAIAAALIgPAAQgBgQAQgMQAOgLAVAAQAWAAANALQANALAAAUIAAA+QABAUADAJIAAACIgPAAQgCgHgBgMQgIAKgMAGQgMAFgNAAQgTAAgLgLgAgZAJQgNAHAAAOQAAALAIAIQAJAHANAAQAOAAAMgHQAMgHAEgMIAAgeIgaAAQgVABgMAIg");
	this.shape_99.setTransform(239,345);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(255,255,255,0.902)").s().p("AgpA6QgLgKgBgRQABgTAQgMQAQgKAcAAIAbAAIAAgPQAAgOgJgJQgJgIgRAAQgPAAgKAIQgKAIAAALIgPAAQAAgQAPgMQAPgLAVAAQAWAAANALQANALABAUIAAA+QAAAUAEAJIAAACIgRAAQgCgHAAgMQgIAKgMAGQgMAFgMAAQgUAAgMgLgAgaAJQgMAHAAAOQAAALAJAIQAIAHANAAQAOAAAMgHQALgHAGgMIAAgeIgaAAQgWABgNAIg");
	this.shape_100.setTransform(219.2,345);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(255,255,255,0.902)").s().p("AAkBEIAAhXQAAgSgIgJQgHgJgRAAQgNAAgKAJQgLAJgFAPIAABaIgOAAIAAiEIAOAAIAAAWQAIgMALgHQALgGANAAQAVAAALAMQAKAMAAAYIAABXg");
	this.shape_101.setTransform(205.7,344.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(255,255,255,0.902)").s().p("AgHBbIAAiEIAOAAIAACEgAgHhKQgCgCAAgEQAAgEACgDQADgDAEAAQAEAAADADQADACAAAFQAAAEgDACQgDAEgEAAQgEAAgDgEg");
	this.shape_102.setTransform(195.9,342.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(255,255,255,0.902)").s().p("AgCBMQgHgIAAgSIAAhYIgZAAIAAgMIAZAAIAAgiIAOAAIAAAiIAbAAIAAAMIgbAAIAABYQAAALAEAGQAEAFAJAAIAMgBIABAMQgGACgKAAQgPAAgGgJg");
	this.shape_103.setTransform(188.6,343.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(255,255,255,0.902)").s().p("AgqAzQgRgTAAgfIAAgCQAAgTAIgQQAHgPAOgJQAOgIAQAAQAbAAAQASQARATAAAfIAAACQAAATgIAQQgHAPgOAJQgNAIgSAAQgZAAgRgSgAgfgoQgNAPAAAZIAAACQAAAYANAPQAMAQATAAQAUAAANgQQAMgPAAgZIAAgCQAAgPgGgNQgFgNgLgHQgKgHgNAAQgTAAgMAQg");
	this.shape_104.setTransform(177.8,345);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(255,255,255,0.902)").s().p("AgmAzQgPgSAAgfIAAgEQAAgTAHgQQAHgPANgIQANgIAQAAQAWAAAOANQAOANABAVIgOAAQgBgQgKgJQgKgKgQAAQgTAAgLAPQgLAOAAAaIAAAEQAAAZALAOQALAPATAAQAPAAALgJQAKgJABgOIAOAAQAAANgHAKQgHAKgMAGQgMAFgNAAQgZAAgQgSg");
	this.shape_105.setTransform(164.2,345);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(255,255,255,0.902)").s().p("AgHBbIAAiEIAOAAIAACEgAgHhKQgCgCAAgEQAAgEACgDQADgDAEAAQAEAAADADQADACAAAFQAAAEgDACQgDAEgEAAQgEAAgDgEg");
	this.shape_106.setTransform(154.8,342.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(255,255,255,0.902)").s().p("AAkBEIAAhXQAAgSgIgJQgHgJgRAAQgNAAgKAJQgLAJgFAPIAABaIgOAAIAAiEIAOAAIAAAWQAIgMALgHQALgGANAAQAVAAALAMQAKAMAAAYIAABXg");
	this.shape_107.setTransform(145,344.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(255,255,255,0.902)").s().p("AA8BaIgTgzIhRAAIgSAzIgQAAIBEizIANAAIBFCzgAgjAbIBHAAIgkhhg");
	this.shape_108.setTransform(124,342.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(194,155,1,0.902)").s().p("AgiAPIAAgcIBFAAIAAAcg");
	this.shape_109.setTransform(104.9,344);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(194,155,1,0.902)").s().p("Ag7BbIAAgYIA7g+QALgMAFgKQAGgKAAgJQAAgMgGgGQgGgHgKAAQgNAAgGAIQgIAIAAAOIgkAAQAAgQAJgOQAHgOAOgHQAPgIASAAQAbAAAQANQAOAOAAAYQABANgHAOQgHANgRASIgoArIBMAAIAAAdg");
	this.shape_110.setTransform(86.5,342.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#C29B01").ss(2,1,1).p("EgiKAiCQoarAAAufQAAxnMeseQMesfRoAAQRoAAMfMfQMeMeAARnQAAOfoZLA");
	this.shape_111.setTransform(283.4,228.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(234,187,1,0.008)").s().p("EgiKAiCQoarAAAufQAAxnMeseQMfsfRnAAQRpAAMeMfQMeMeAARnQAAOfoZLAg");
	this.shape_112.setTransform(283.4,228.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#C29B01").ss(2,1,1).p("EgkSAi4Qn/rGAAuYQAAyVM+s+QM+s+SVAAQSWAAM+M+QM9M+AASVQAAOYn+LG");
	this.shape_113.setTransform(283.4,223.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("rgba(234,187,1,0.008)").s().p("EgkRAi4QoArGAAuYQAByVM9s+QM+s+SVAAQSVAAM/M+QM9M+ABSVQAAOYn/LGg");
	this.shape_114.setTransform(283.4,223.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.popup2_1, new cjs.Rectangle(-1,-1,568.7,448.4), null);


(lib.popup1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btn_fechar.addEventListener("click", fechar.bind(this));
		function fechar(){
			createjs.Tween.get(this.parent.popup1)
			.to({y:700}, 1000, createjs.Ease.quartInOut);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn_fechar
	this.btn_fechar = new lib.btn_fechar();
	this.btn_fechar.name = "btn_fechar";
	this.btn_fechar.parent = this;
	this.btn_fechar.setTransform(283.4,30.3,1,1,0,0,0,18.7,19.4);
	new cjs.ButtonHelper(this.btn_fechar, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_fechar).wait(1));

	// txt
	this.instance = new lib.popup1();
	this.instance.parent = this;
	this.instance.setTransform(80.9,349.6,0.694,0.694,-90);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.902)").s().p("AgHAIQgCgDgBgFQABgDACgDQADgDAEAAQAFAAACADQADADAAADQAAAFgDADQgCACgFAAQgEAAgDgCg");
	this.shape.setTransform(483.5,429.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.902)").s().p("AgjA6QgPgLAAgSIAPAAQABANAKAIQAKAHAQAAQAPAAAKgHQAJgHAAgKQAAgLgJgHQgJgHgRgDQgRgEgKgEQgKgFgFgHQgEgHAAgKQAAgQANgKQANgKAUAAQAWAAAOALQANALAAASIgPAAQAAgMgJgIQgKgIgPAAQgOAAgJAHQgIAGAAALQAAAKAHAFQAHAGATAEQATAFAKAEQAKAFAEAHQAFAIAAAKQAAARgOAKQgNAKgWAAQgXAAgOgLg");
	this.shape_1.setTransform(474.2,423.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.902)").s().p("AgZA9QgOgJgHgPQgIgPAAgSIAAgFQAAgTAIgPQAHgQANgJQAOgIAOAAQAYAAAPAQQAOARAAAdIAAAHIheAAIAAADQAAAWANAQQANAPATAAQALAAAJgFQAKgEAHgJIAJAHQgQAXgfAAQgQAAgOgIgAgZgsQgLANgCAUIBPAAIAAgBQgBgUgLgMQgKgMgRAAQgQAAgLAMg");
	this.shape_2.setTransform(461.4,423.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.902)").s().p("AgCBMQgHgIAAgSIAAhYIgZAAIAAgMIAZAAIAAgiIAOAAIAAAiIAbAAIAAAMIgbAAIAABYQAAALAEAGQAEAFAJAAIAMgBIABAMQgGACgKAAQgPAAgGgJg");
	this.shape_3.setTransform(450.4,421.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.902)").s().p("AAkBEIAAhXQAAgSgIgIQgHgJgRAAQgNAAgKAJQgLAIgFAOIAABbIgOAAIAAiEIAOAAIAAAWQAIgMALgHQALgGANAAQAVAAALAMQAKAMAAAZIAABWg");
	this.shape_4.setTransform(439.7,423.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.902)").s().p("AgZA9QgOgJgHgPQgIgPAAgSIAAgFQAAgTAIgPQAHgQANgJQAOgIAOAAQAYAAAPAQQAOARAAAdIAAAHIheAAIAAADQAAAWANAQQANAPATAAQALAAAJgFQAKgEAHgJIAJAHQgQAXgfAAQgQAAgOgIgAgZgsQgLANgCAUIBPAAIAAgBQgBgUgLgMQgKgMgRAAQgQAAgLAMg");
	this.shape_5.setTransform(426.3,423.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.902)").s().p("AgeBEIAAiEIAOAAIABAVQALgYAZAAQAHAAADABIAAAOIgKgBQgPAAgIAIQgKAIgDAOIAABbg");
	this.shape_6.setTransform(416.3,423.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.902)").s().p("AgYA9QgOgJgIgPQgIgPAAgSIAAgFQAAgTAHgPQAIgQAOgJQANgIAPAAQAYAAAOAQQAOARAAAdIAAAHIheAAIAAADQAAAWANAQQANAPASAAQAMAAAKgFQAIgEAIgJIAKAHQgRAXgfAAQgQAAgNgIgAgYgsQgMANgDAUIBPAAIAAgBQAAgUgLgMQgKgMgQAAQgQAAgLAMg");
	this.shape_7.setTransform(404.8,423.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.902)").s().p("AgPBgIAAh4IgXAAIAAgMIAXAAIAAgRQAAgUAKgLQAJgLATAAQAIAAAIACIgBAMQgHgBgHAAQgMAAgHAHQgGAIAAAOIAAARIAfAAIAAAMIgfAAIAAB4g");
	this.shape_8.setTransform(394.4,420.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.902)").s().p("AgHBbIAAiEIAOAAIAACEgAgHhKQgCgCAAgEQAAgFACgDQADgCAEAAQAEAAADACQADAEAAADQAAAFgDACQgDADgEAAQgEAAgDgDg");
	this.shape_9.setTransform(386.9,421);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.902)").s().p("AgnBOQgOgTAAggIAAgBQAAgeAOgTQAOgSAYAAQAaAAAOAVIAAhLIAPAAIAAC9IgOAAIgBgSQgOAUgbAAQgXAAgOgSgAgcgOQgKAOAAAcQAAAaAKAPQALAOARAAQAcAAALgYIAAg9QgLgbgcAAQgRAAgLAPg");
	this.shape_10.setTransform(376.7,420.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.902)").s().p("AgjA6QgPgLAAgSIAPAAQABANAKAIQAKAHAQAAQAPAAAKgHQAJgHAAgKQAAgLgJgHQgJgHgRgDQgRgEgKgEQgKgFgFgHQgEgHAAgKQAAgQANgKQANgKAUAAQAWAAAOALQANALAAASIgPAAQAAgMgJgIQgKgIgPAAQgOAAgJAHQgIAGAAALQAAAKAHAFQAHAGATAEQATAFAKAEQAKAFAEAHQAFAIAAAKQAAARgOAKQgNAKgWAAQgXAAgOgLg");
	this.shape_11.setTransform(357.4,423.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.902)").s().p("AgpA6QgMgKABgRQgBgTARgMQAQgKAcAAIAbAAIAAgPQAAgOgJgJQgJgIgRAAQgOAAgLAIQgKAIABALIgQAAQABgQAPgMQAOgLAVAAQAWAAANALQANALAAAUIAAA+QAAAUAFAJIAAACIgQAAQgDgHAAgMQgIAKgMAGQgMAFgMAAQgUAAgMgLgAgZAJQgNAHAAAOQAAALAIAIQAJAHANAAQAOAAAMgHQALgHAGgMIAAgeIgaAAQgWABgMAIg");
	this.shape_12.setTransform(344.1,423.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.902)").s().p("AgeBEIAAiEIAOAAIAAAVQAMgYAZAAQAGAAAEABIAAAOIgLgBQgOAAgIAIQgJAIgFAOIAABbg");
	this.shape_13.setTransform(334.1,423.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.902)").s().p("AgHBbIAAiEIAOAAIAACEgAgHhKQgCgCAAgEQAAgFACgDQADgCAEAAQAEAAADACQADAEAAADQAAAFgDACQgDADgEAAQgEAAgDgDg");
	this.shape_14.setTransform(326.2,421);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.902)").s().p("AgZA9QgNgJgIgPQgIgPAAgSIAAgFQAAgTAIgPQAHgQANgJQAOgIAOAAQAYAAAPAQQAOARAAAdIAAAHIheAAIAAADQAAAWANAQQANAPATAAQALAAAJgFQAKgEAHgJIAKAHQgRAXgfAAQgQAAgOgIgAgZgsQgLANgCAUIBPAAIAAgBQgBgUgLgMQgKgMgRAAQgPAAgMAMg");
	this.shape_15.setTransform(316.9,423.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.902)").s().p("AAkBEIAAhXQAAgSgIgIQgHgJgRAAQgNAAgKAJQgLAIgFAOIAABbIgOAAIAAiEIAOAAIAAAWQAIgMALgHQALgGANAAQAVAAALAMQAKAMAAAZIAABWg");
	this.shape_16.setTransform(303.3,423.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.902)").s().p("AgpA6QgLgKgBgRQABgTAQgMQAQgKAcAAIAbAAIAAgPQAAgOgJgJQgJgIgRAAQgPAAgKAIQgKAIAAALIgPAAQAAgQAPgMQAPgLAVAAQAWAAANALQANALABAUIAAA+QAAAUAEAJIAAACIgRAAQgCgHAAgMQgIAKgMAGQgMAFgMAAQgUAAgMgLgAgaAJQgMAHAAAOQAAALAJAIQAIAHANAAQAOAAAMgHQALgHAGgMIAAgeIgaAAQgWABgNAIg");
	this.shape_17.setTransform(289.4,423.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.902)").s().p("ABPBEIAAhXQAAgSgIgIQgHgJgRAAQgQAAgLAKQgLAKgCAPIAABXIgNAAIAAhYQgBgRgIgJQgIgJgQABQgOAAgKAIQgKAHgFAQIAABbIgPAAIAAiEIAOAAIABAVQAHgMAMgGQALgGANAAQAgAAAHAaQAIgMAMgIQAMgGAOAAQArAAABAvIAABYg");
	this.shape_18.setTransform(271.6,423.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.902)").s().p("AgjA6QgPgLAAgSIAPAAQABANAKAIQAKAHAQAAQAPAAAKgHQAJgHAAgKQAAgLgJgHQgJgHgRgDQgRgEgKgEQgKgFgFgHQgEgHAAgKQAAgQANgKQANgKAUAAQAWAAAOALQANALAAASIgPAAQAAgMgJgIQgKgIgPAAQgOAAgJAHQgIAGAAALQAAAKAHAFQAHAGATAEQATAFAKAEQAKAFAEAHQAFAIAAAKQAAARgOAKQgNAKgWAAQgXAAgOgLg");
	this.shape_19.setTransform(247.8,423.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.902)").s().p("AgpA6QgLgKgBgRQABgTAQgMQAQgKAcAAIAbAAIAAgPQAAgOgJgJQgJgIgRAAQgPAAgKAIQgKAIAAALIgPAAQAAgQAPgMQAPgLAVAAQAWAAANALQANALABAUIAAA+QAAAUADAJIAAACIgQAAQgCgHAAgMQgIAKgMAGQgMAFgMAAQgUAAgMgLgAgaAJQgMAHAAAOQAAALAJAIQAIAHANAAQAOAAAMgHQALgHAGgMIAAgeIgbAAQgVABgNAIg");
	this.shape_20.setTransform(234.5,423.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.902)").s().p("AgHBbIAAiEIAOAAIAACEgAgHhKQgCgCAAgEQAAgFACgDQADgCAEAAQAEAAADACQADAEAAADQAAAFgDACQgDADgEAAQgEAAgDgDg");
	this.shape_21.setTransform(225.1,421);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.902)").s().p("AgeBEIAAiEIAOAAIAAAVQAMgYAZAAQAGAAAEABIgBAOIgKgBQgOAAgIAIQgJAIgFAOIAABbg");
	this.shape_22.setTransform(218.8,423.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.902)").s().p("AgpBVQgMgKABgRQgBgTARgMQAQgLAcAAIAbAAIAAgPQAAgNgJgJQgJgIgRAAQgOAAgKAIQgLAIABALIgQAAQABgQAPgMQAOgLAVAAQAWAAANALQANALAAATIAAA/QAAAUAFAJIAAACIgQAAQgCgHgBgMQgIAKgMAGQgMAFgMAAQgUAAgMgLgAgZAkQgNAHAAAOQAAALAIAIQAJAHANAAQAOAAAMgHQALgHAGgMIAAgeIgaAAQgWABgMAIgAgCg8IAXgjIARAAIgcAjg");
	this.shape_23.setTransform(206.8,420.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.902)").s().p("AgFBDIgyiFIAPAAIAoBwIAphwIAPAAIgyCFg");
	this.shape_24.setTransform(194.1,423.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.902)").s().p("AgYA9QgOgJgIgPQgIgPAAgSIAAgFQAAgTAIgPQAHgQAOgJQANgIAOAAQAZAAAOAQQAOARAAAdIAAAHIheAAIAAADQAAAWANAQQANAPASAAQAMAAAKgFQAIgEAIgJIAKAHQgRAXgfAAQgQAAgNgIgAgYgsQgMANgDAUIBPAAIAAgBQAAgUgLgMQgKgMgRAAQgPAAgLAMg");
	this.shape_25.setTransform(175.4,423.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.902)").s().p("AgnBOQgOgTAAggIAAgBQAAgeAOgTQAOgSAYAAQAaAAAOAVIAAhLIAPAAIAAC9IgOAAIgBgSQgOAUgbAAQgXAAgOgSgAgcgOQgKAOAAAcQAAAaAKAPQALAOARAAQAcAAALgYIAAg9QgLgbgcAAQgRAAgLAPg");
	this.shape_26.setTransform(161.4,420.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.902)").s().p("AgjA6QgPgLAAgSIAPAAQABANAKAIQAKAHAQAAQAPAAAKgHQAJgHAAgKQAAgLgJgHQgJgHgRgDQgRgEgKgEQgKgFgFgHQgEgHAAgKQAAgQANgKQANgKAUAAQAWAAAOALQANALAAASIgPAAQAAgMgJgIQgKgIgPAAQgOAAgJAHQgIAGAAALQAAAKAHAFQAHAGATAEQATAFAKAEQAKAFAEAHQAFAIAAAKQAAARgOAKQgNAKgWAAQgXAAgOgLg");
	this.shape_27.setTransform(142.1,423.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.902)").s().p("AgqAzQgRgTAAgfIAAgCQAAgTAIgQQAHgPAOgJQAOgIAQAAQAbAAAQASQARATAAAfIAAACQAAATgIAQQgHAPgOAJQgNAIgSAAQgZAAgRgSgAgfgoQgNAPAAAZIAAACQAAAYANAPQAMAQATAAQAUAAANgQQAMgPAAgZIAAgCQAAgPgGgNQgFgNgLgHQgKgHgNAAQgTAAgMAQg");
	this.shape_28.setTransform(128.7,423.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.902)").s().p("AAkBEIAAhXQAAgSgIgIQgHgJgRAAQgNAAgKAJQgLAIgFAOIAABbIgOAAIAAiEIAOAAIAAAWQAIgMALgHQALgGANAAQAVAAALAMQAKAMAAAZIAABWg");
	this.shape_29.setTransform(114.7,423.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.902)").s().p("AgoA6QgNgKAAgRQAAgTAQgMQARgKAcAAIAaAAIAAgPQAAgOgIgJQgJgIgRAAQgPAAgJAIQgLAIAAALIgOAAQgBgQAPgMQAPgLAVAAQAWAAANALQANALABAUIAAA+QAAAUADAJIAAACIgPAAQgDgHAAgMQgIAKgMAGQgMAFgNAAQgTAAgLgLgAgaAJQgMAHAAAOQAAALAJAIQAIAHANAAQAOAAAMgHQAMgHAEgMIAAgeIgaAAQgVABgNAIg");
	this.shape_30.setTransform(100.7,423.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.902)").s().p("AgnBOQgOgTAAggIAAgBQAAgeAOgTQAOgSAYAAQAaAAAOAVIAAhLIAPAAIAAC9IgOAAIgBgSQgOAUgbAAQgXAAgOgSgAgcgOQgKAOAAAcQAAAaAKAPQALAOARAAQAcAAALgYIAAg9QgLgbgcAAQgRAAgLAPg");
	this.shape_31.setTransform(86.8,420.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0.902)").s().p("AgqAzQgRgTAAgfIAAgCQAAgTAIgQQAHgPAOgJQAOgIAQAAQAbAAAQASQARATAAAfIAAACQAAATgIAQQgHAPgOAJQgNAIgSAAQgZAAgRgSgAgfgoQgNAPAAAZIAAACQAAAYANAPQAMAQATAAQAUAAANgQQAMgPAAgZIAAgCQAAgPgGgNQgFgNgLgHQgKgHgNAAQgTAAgMAQg");
	this.shape_32.setTransform(509.7,395.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,255,255,0.902)").s().p("AgnBOQgOgTAAggIAAgBQAAgeAOgTQAOgSAYAAQAaAAAOAVIAAhLIAPAAIAAC9IgOAAIgBgSQgOAUgbAAQgXAAgOgSgAgcgOQgKAOAAAcQAAAaAKAPQALAOARAAQAcAAALgYIAAg9QgLgbgcAAQgRAAgLAPg");
	this.shape_33.setTransform(495.3,392.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,255,255,0.902)").s().p("AAkBEIAAhXQAAgSgIgJQgHgIgRgBQgNABgKAIQgLAJgFAPIAABaIgOAAIAAiFIAOAAIAAAXQAIgMALgGQALgHANAAQAVAAALAMQAKAMAAAYIAABXg");
	this.shape_34.setTransform(481.6,395);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,255,255,0.902)").s().p("AgoA6QgMgKgBgRQABgTAPgMQARgKAcAAIAaAAIAAgPQAAgOgIgJQgJgIgRAAQgPAAgKAIQgJAIgBALIgOAAQAAgQAOgMQAPgLAVAAQAWAAANALQANALABAUIAAA+QAAAUADAJIAAACIgQAAQgBgHgBgMQgIAKgMAGQgMAFgNAAQgTAAgLgLgAgaAJQgMAHAAAOQAAALAJAIQAIAHANAAQAOAAAMgHQAMgHAEgMIAAgeIgaAAQgVABgNAIg");
	this.shape_35.setTransform(467.7,395.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(255,255,255,0.902)").s().p("AgjA6QgPgLAAgSIAPAAQABANAKAIQAKAHAQAAQAPAAAKgHQAJgHAAgKQAAgLgJgHQgJgHgRgDQgRgEgKgEQgKgFgFgHQgEgHAAgKQAAgQANgKQANgKAUAAQAWAAAOALQANALAAASIgPAAQAAgMgJgIQgKgIgPAAQgOAAgJAHQgIAGAAALQAAAKAHAFQAHAGATAEQATAFAKAEQAKAFAEAHQAFAIAAAKQAAARgOAKQgNAKgWAAQgXAAgOgLg");
	this.shape_36.setTransform(454.7,395.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0.902)").s().p("AgnA3QgLgMABgYIAAhWIAOAAIAABUQAAAmAfAAQAfAAAIgbIAAhfIAPAAIAACEIgOAAIAAgQQgOATgcAAQgVAAgMgNg");
	this.shape_37.setTransform(441.4,395.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(255,255,255,0.902)").s().p("AgpA6QgMgKABgRQAAgTAQgMQAQgKAcAAIAbAAIAAgPQAAgOgJgJQgJgIgRAAQgOAAgLAIQgKAIAAALIgPAAQAAgQAPgMQAPgLAVAAQAWAAANALQANALAAAUIAAA+QABAUAEAJIAAACIgRAAQgCgHAAgMQgIAKgMAGQgMAFgMAAQgUAAgMgLgAgaAJQgMAHAAAOQAAALAJAIQAIAHANAAQAOAAAMgHQALgHAGgMIAAgeIgaAAQgWABgNAIg");
	this.shape_38.setTransform(427.5,395.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,255,255,0.902)").s().p("AgmAzQgPgSAAgfIAAgEQAAgTAHgQQAHgPANgIQANgIAQAAQAWAAAOANQAOANABAVIgOAAQgBgQgKgJQgKgKgQAAQgTAAgLAPQgLAOAAAaIAAAEQAAAZALAOQALAPATAAQAPAAALgJQAKgJABgOIAOAAQAAANgHAKQgHAKgMAGQgMAFgNAAQgZAAgQgSg");
	this.shape_39.setTransform(414.4,395.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(255,255,255,0.902)").s().p("AgMAWQALgPAAgPIAAgTIAOAAIAAAPQAAAZgRAPg");
	this.shape_40.setTransform(398.8,402.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(255,255,255,0.902)").s().p("AgqAzQgRgTAAgfIAAgCQAAgTAIgQQAHgPAOgJQAOgIAQAAQAbAAAQASQARATAAAfIAAACQAAATgIAQQgHAPgOAJQgNAIgSAAQgZAAgRgSgAgfgoQgNAPAAAZIAAACQAAAYANAPQAMAQATAAQAUAAANgQQAMgPAAgZIAAgCQAAgPgGgNQgFgNgLgHQgKgHgNAAQgTAAgMAQg");
	this.shape_41.setTransform(389.7,395.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(255,255,255,0.902)").s().p("Ag1BeIAAi4IAOAAIAAASQAPgVAbAAQAYAAANASQAOASAAAhIAAACQAAAegOASQgOATgXAAQgbAAgOgUIAABFgAgXhKQgKAHgFANIAAA/QAFALAKAGQAKAGANAAQASAAALgPQAKgPAAgbQAAgZgKgPQgLgPgSAAQgNAAgKAGg");
	this.shape_42.setTransform(375.9,397.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(255,255,255,0.902)").s().p("AgeBEIAAiFIAOAAIAAAVQAMgXAZAAQAGAAAEACIAAANIgLgBQgOAAgIAIQgJAHgFAPIAABbg");
	this.shape_43.setTransform(365.1,395);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(255,255,255,0.902)").s().p("AgqAzQgRgTAAgfIAAgCQAAgTAIgQQAHgPAOgJQAOgIAQAAQAbAAAQASQARATAAAfIAAACQAAATgIAQQgHAPgOAJQgNAIgSAAQgZAAgRgSgAgfgoQgNAPAAAZIAAACQAAAYANAPQAMAQATAAQAUAAANgQQAMgPAAgZIAAgCQAAgPgGgNQgFgNgLgHQgKgHgNAAQgTAAgMAQg");
	this.shape_44.setTransform(353,395.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(255,255,255,0.902)").s().p("AgmAzQgPgSAAgfIAAgEQAAgTAHgQQAHgPANgIQANgIAQAAQAWAAAOANQAOANABAVIgOAAQgBgQgKgJQgKgKgQAAQgTAAgLAPQgLAOAAAaIAAAEQAAAZALAOQALAPATAAQAPAAALgJQAKgJABgOIAOAAQAAANgHAKQgHAKgMAGQgMAFgNAAQgZAAgQgSg");
	this.shape_45.setTransform(339.4,395.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(255,255,255,0.902)").s().p("AgqAzQgRgTAAgfIAAgCQAAgTAIgQQAHgPAOgJQAOgIAQAAQAbAAAQASQARATAAAfIAAACQAAATgIAQQgHAPgOAJQgNAIgSAAQgZAAgRgSgAgfgoQgNAPAAAZIAAACQAAAYANAPQAMAQATAAQAUAAANgQQAMgPAAgZIAAgCQAAgPgGgNQgFgNgLgHQgKgHgNAAQgTAAgMAQg");
	this.shape_46.setTransform(319.6,395.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(255,255,255,0.902)").s().p("AgqAzQgRgTAAgfIAAgCQAAgTAIgQQAHgPAOgJQAOgIAQAAQAbAAAQASQARATAAAfIAAACQAAATgIAQQgHAPgOAJQgNAIgSAAQgZAAgRgSgAgfgoQgNAPAAAZIAAACQAAAYANAPQAMAQATAAQAUAAANgQQAMgPAAgZIAAgCQAAgPgGgNQgFgNgLgHQgKgHgNAAQgTAAgMAQg");
	this.shape_47.setTransform(299.2,395.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(255,255,255,0.902)").s().p("AgnBOQgOgTAAggIAAgBQAAgeAOgTQAOgSAYAAQAaAAAOAVIAAhLIAPAAIAAC9IgOAAIgBgSQgOAUgbAAQgXAAgOgSgAgcgOQgKAOAAAcQAAAaAKAPQALAOARAAQAcAAALgYIAAg9QgLgbgcAAQgRAAgLAPg");
	this.shape_48.setTransform(284.8,392.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(255,255,255,0.902)").s().p("AgqAzQgRgTAAgfIAAgCQAAgTAIgQQAHgPAOgJQAOgIAQAAQAbAAAQASQARATAAAfIAAACQAAATgIAQQgHAPgOAJQgNAIgSAAQgZAAgRgSgAgfgoQgNAPAAAZIAAACQAAAYANAPQAMAQATAAQAUAAANgQQAMgPAAgZIAAgCQAAgPgGgNQgFgNgLgHQgKgHgNAAQgTAAgMAQg");
	this.shape_49.setTransform(271,395.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(255,255,255,0.902)").s().p("AgCBMQgHgIAAgSIAAhYIgZAAIAAgMIAZAAIAAgiIAOAAIAAAiIAbAAIAAAMIgbAAIAABYQAAALAEAGQAEAFAJAAIAMgBIABAMQgGACgKAAQgPAAgGgJg");
	this.shape_50.setTransform(259.5,393.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(255,255,255,0.902)").s().p("AgeBEIAAiFIAOAAIABAVQALgXAZAAQAHAAADACIAAANIgKgBQgPAAgIAIQgKAHgDAPIAABbg");
	this.shape_51.setTransform(246.2,395);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(255,255,255,0.902)").s().p("AgqAzQgRgTAAgfIAAgCQAAgTAIgQQAHgPAOgJQAOgIAQAAQAbAAAQASQARATAAAfIAAACQAAATgIAQQgHAPgOAJQgNAIgSAAQgZAAgRgSgAgfgoQgNAPAAAZIAAACQAAAYANAPQAMAQATAAQAUAAANgQQAMgPAAgZIAAgCQAAgPgGgNQgFgNgLgHQgKgHgNAAQgTAAgMAQg");
	this.shape_52.setTransform(234,395.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(255,255,255,0.902)").s().p("Ag1BeIAAi4IAOAAIABASQAOgVAaAAQAYAAAOASQAOASAAAhIAAACQAAAegOASQgOATgXAAQgbAAgOgUIAABFgAgXhKQgKAHgFANIAAA/QAFALAKAGQAKAGANAAQASAAAKgPQALgPAAgbQAAgZgLgPQgKgPgSAAQgNAAgKAGg");
	this.shape_53.setTransform(220.2,397.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(255,255,255,0.902)").s().p("ABPBEIAAhXQAAgSgIgJQgHgIgRgBQgQABgLAKQgLAKgCAOIAABYIgNAAIAAhYQgBgSgIgIQgIgJgQAAQgOABgKAHQgKAJgFAQIAABaIgPAAIAAiFIAOAAIABAWQAHgMAMgGQALgGANAAQAgAAAHAaQAIgNAMgGQAMgHAOAAQArAAABAvIAABYg");
	this.shape_54.setTransform(195.5,395);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(255,255,255,0.902)").s().p("AgpA6QgLgKgBgRQABgTAQgMQAQgKAcAAIAbAAIAAgPQAAgOgJgJQgJgIgRAAQgPAAgKAIQgKAIAAALIgPAAQAAgQAPgMQAPgLAVAAQAWAAANALQANALABAUIAAA+QAAAUADAJIAAACIgQAAQgCgHAAgMQgIAKgMAGQgMAFgMAAQgUAAgMgLgAgaAJQgMAHAAAOQAAALAJAIQAIAHANAAQAOAAAMgHQALgHAGgMIAAgeIgbAAQgVABgNAIg");
	this.shape_55.setTransform(177.4,395.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(255,255,255,0.902)").s().p("AgZB0IABgNIALACQAVAAAAgZIAAiVIAPAAIAACVQAAATgJAJQgJAKgQAAQgHAAgHgCgAAIhkQgDgDABgEQgBgFADgCQADgDAFAAQAEAAADADQACACABAFQgBAEgCADQgDADgEAAQgFAAgDgDg");
	this.shape_56.setTransform(166.2,395.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(255,255,255,0.902)").s().p("AgpA6QgLgKgBgRQABgTAQgMQAQgKAcAAIAbAAIAAgPQAAgOgJgJQgJgIgRAAQgPAAgKAIQgKAIAAALIgPAAQAAgQAPgMQAPgLAVAAQAWAAANALQANALABAUIAAA+QAAAUADAJIAAACIgQAAQgCgHAAgMQgIAKgMAGQgMAFgMAAQgUAAgMgLgAgaAJQgMAHAAAOQAAALAJAIQAIAHANAAQAOAAAMgHQALgHAGgMIAAgeIgbAAQgVABgNAIg");
	this.shape_57.setTransform(158,395.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(255,255,255,0.902)").s().p("AgHBbIAAiFIAOAAIAACFgAgHhJQgCgDAAgEQAAgFACgCQADgDAEAAQAEAAADADQADACAAAFQAAAEgDADQgDADgEAAQgEAAgDgDg");
	this.shape_58.setTransform(148.6,392.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(255,255,255,0.902)").s().p("AgFBDIgyiFIAPAAIAoBwIAphwIAPAAIgyCFg");
	this.shape_59.setTransform(139.7,395.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(255,255,255,0.902)").s().p("AgqAzQgRgTAAgfIAAgCQAAgTAIgQQAHgPAOgJQAOgIAQAAQAbAAAQASQARATAAAfIAAACQAAATgIAQQgHAPgOAJQgNAIgSAAQgZAAgRgSgAgfgoQgNAPAAAZIAAACQAAAYANAPQAMAQATAAQAUAAANgQQAMgPAAgZIAAgCQAAgPgGgNQgFgNgLgHQgKgHgNAAQgTAAgMAQg");
	this.shape_60.setTransform(120.3,395.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(255,255,255,0.902)").s().p("AgeBEIAAiFIAOAAIABAVQALgXAZAAQAHAAADACIAAANIgKgBQgPAAgIAIQgKAHgDAPIAABbg");
	this.shape_61.setTransform(109.8,395);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(255,255,255,0.902)").s().p("AgeBEIAAiFIAOAAIAAAVQAMgXAZAAQAGAAAEACIgBANIgKgBQgOAAgIAIQgJAHgFAPIAABbg");
	this.shape_62.setTransform(101.3,395);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(255,255,255,0.902)").s().p("AgpA6QgMgKABgRQgBgTARgMQAQgKAcAAIAbAAIAAgPQAAgOgJgJQgJgIgRAAQgOAAgKAIQgLAIABALIgQAAQABgQAPgMQAOgLAVAAQAWAAANALQANALAAAUIAAA+QAAAUAFAJIAAACIgQAAQgCgHgBgMQgIAKgMAGQgMAFgMAAQgUAAgMgLgAgZAJQgNAHAAAOQAAALAIAIQAJAHANAAQAOAAAMgHQALgHAGgMIAAgeIgaAAQgWABgMAIg");
	this.shape_63.setTransform(89.3,395.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(255,255,255,0.902)").s().p("AgZBYQgNgGgHgKIAIgJQAQATAVAAQASAAAKgLQALgLAAgTIAAgRQgOAUgbAAQgXAAgOgTQgOgSAAgfIAAgCQAAgfAOgSQAOgTAYAAQAaAAAOAWIABgTIAOAAIAACCQAAAZgPAPQgOAQgZAAQgNAAgMgHgAgchCQgKAOAAAdQAAAYAKAPQALAPARAAQAcAAALgZIAAg9QgFgNgKgGQgKgHgOAAQgRAAgLAPg");
	this.shape_64.setTransform(75.4,397.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(255,255,255,0.902)").s().p("AgHBbIAAiFIAOAAIAACFgAgHhJQgCgDAAgEQAAgFACgCQADgDAEAAQAEAAADADQADACAAAFQAAAEgDADQgDADgEAAQgEAAgDgDg");
	this.shape_65.setTransform(65.9,392.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(255,255,255,0.902)").s().p("AgmAzQgPgSAAgfIAAgEQAAgTAHgQQAHgPANgIQANgIAQAAQAWAAAOANQAOANABAVIgOAAQgBgQgKgJQgKgKgQAAQgTAAgLAPQgLAOAAAaIAAAEQAAAZALAOQALAPATAAQAPAAALgJQAKgJABgOIAOAAQAAANgHAKQgHAKgMAGQgMAFgNAAQgZAAgQgSg");
	this.shape_66.setTransform(56.5,395.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(255,255,255,0.902)").s().p("AgqAzQgRgTAAgfIAAgCQAAgTAIgQQAHgPAOgJQAOgIAQAAQAbAAAQASQARATAAAfIAAACQAAATgIAQQgHAPgOAJQgNAIgSAAQgZAAgRgSgAgfgoQgNAPAAAZIAAACQAAAYANAPQAMAQATAAQAUAAANgQQAMgPAAgZIAAgCQAAgPgGgNQgFgNgLgHQgKgHgNAAQgTAAgMAQg");
	this.shape_67.setTransform(503.4,366.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(255,255,255,0.902)").s().p("AgnBOQgOgTAAggIAAgBQAAgeAOgTQAOgSAYAAQAaAAAOAVIAAhLIAPAAIAAC9IgOAAIgBgSQgOAUgbAAQgXAAgOgSgAgcgOQgKAOAAAcQAAAaAKAPQALAOARAAQAcAAALgYIAAg9QgLgbgcAAQgRAAgLAPg");
	this.shape_68.setTransform(489,364.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(255,255,255,0.902)").s().p("AgoA6QgNgKAAgRQAAgTAQgMQARgKAcAAIAaAAIAAgPQAAgOgIgJQgJgIgRAAQgOAAgLAIQgJAIgBALIgOAAQAAgQAOgMQAPgLAVAAQAWAAANALQANALABAUIAAA+QAAAUADAJIAAACIgQAAQgBgHgBgMQgIAKgMAGQgMAFgNAAQgTAAgLgLgAgaAJQgMAHAAAOQAAALAJAIQAIAHANAAQAOAAAMgHQAMgHAEgMIAAgeIgaAAQgVABgNAIg");
	this.shape_69.setTransform(469.2,366.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(255,255,255,0.902)").s().p("AgKBWQAKgBAHgDQAHgFAAgGQAAgIgGgCQgFgCgKgBIAEgQIAGABIAEAAIAAgCIgKAAIAAABQgVgCgOgQQgPgRAAgeIAAgFQAAgUAHgPQAHgPANgIQANgJAQABQAWgBAOANQAOANABAWIgOAAQgBgQgKgKQgKgJgQAAQgTAAgLAPQgLAOAAAaIAAAFQAAAYALAOQALAPATAAQAPAAALgJQAKgJABgNIAOAAQAAALgHALQgHAKgMAGQgKAEgLABIgBAGQAUADAAASQAAAMgKAGQgKAIgPgBgAgDAqIAAgBIAKAAIAAACIgEAAIgGgBgAgDAqIAAAAg");
	this.shape_70.setTransform(456.1,369.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(255,255,255,0.902)").s().p("AgpA6QgMgKABgRQgBgTARgMQAQgKAcAAIAbAAIAAgPQAAgOgJgJQgJgIgRAAQgOAAgKAIQgLAIABALIgQAAQABgQAPgMQAOgLAVAAQAWAAANALQANALAAAUIAAA+QAAAUAFAJIAAACIgQAAQgCgHgBgMQgIAKgMAGQgMAFgMAAQgUAAgMgLgAgZAJQgNAHAAAOQAAALAIAIQAJAHANAAQAOAAAMgHQALgHAGgMIAAgeIgaAAQgWABgMAIg");
	this.shape_71.setTransform(442.6,366.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(255,255,255,0.902)").s().p("ABPBEIAAhXQAAgSgIgIQgHgKgRABQgQAAgLAKQgLAKgCAPIAABXIgNAAIAAhYQgBgRgIgJQgIgIgQAAQgOgBgKAJQgKAHgFAQIAABbIgPAAIAAiEIAOAAIABAVQAHgMAMgGQALgGANAAQAgAAAHAaQAIgMAMgIQAMgGAOAAQArAAABAvIAABYg");
	this.shape_72.setTransform(424.7,366.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(255,255,255,0.902)").s().p("AgnA4QgKgNgBgYIAAhWIAPAAIAABUQAAAmAfAAQAfAAAJgaIAAhgIAOAAIAACFIgOAAIAAgSQgNAUgdAAQgVAAgMgMg");
	this.shape_73.setTransform(406.6,367);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(255,255,255,0.902)").s().p("AgQBgIAAh4IgVAAIAAgMIAVAAIAAgRQAAgUALgLQAJgLATAAQAJAAAGACIAAAMQgGgBgIAAQgMAAgHAHQgGAIAAAOIAAARIAfAAIAAAMIgfAAIAAB4g");
	this.shape_74.setTransform(395.9,363.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(255,255,255,0.902)").s().p("AgpA6QgLgKgBgRQABgTAQgMQAQgKAcAAIAbAAIAAgPQAAgOgJgJQgJgIgRAAQgPAAgKAIQgKAIAAALIgPAAQAAgQAPgMQAPgLAVAAQAWAAANALQANALABAUIAAA+QAAAUADAJIAAACIgQAAQgCgHAAgMQgIAKgMAGQgMAFgMAAQgUAAgMgLgAgaAJQgMAHAAAOQAAALAJAIQAIAHANAAQAOAAAMgHQALgHAGgMIAAgeIgbAAQgVABgNAIg");
	this.shape_75.setTransform(378.1,366.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(255,255,255,0.902)").s().p("AAkBEIAAhXQAAgSgIgIQgHgKgRABQgNgBgKAKQgLAIgFAOIAABbIgOAAIAAiEIAOAAIAAAWQAIgMALgHQALgGANAAQAVAAALAMQAKAMAAAZIAABWg");
	this.shape_76.setTransform(364.5,366.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(255,255,255,0.902)").s().p("AgjA6QgPgLAAgSIAPAAQABANAKAIQAKAHAQAAQAPAAAKgHQAJgHAAgKQAAgLgJgHQgJgHgRgDQgRgEgKgEQgKgFgFgHQgEgHAAgKQAAgQANgKQANgKAUAAQAWAAAOALQANALAAASIgPAAQAAgMgJgIQgKgIgPAAQgOAAgJAHQgIAGAAALQAAAKAHAFQAHAGATAEQATAFAKAEQAKAFAEAHQAFAIAAAKQAAARgOAKQgNAKgWAAQgXAAgOgLg");
	this.shape_77.setTransform(344.9,366.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(255,255,255,0.902)").s().p("AgqAzQgRgTAAgfIAAgCQAAgTAIgQQAHgPAOgJQAOgIAQAAQAbAAAQASQARATAAAfIAAACQAAATgIAQQgHAPgOAJQgNAIgSAAQgZAAgRgSgAgfgoQgNAPAAAZIAAACQAAAYANAPQAMAQATAAQAUAAANgQQAMgPAAgZIAAgCQAAgPgGgNQgFgNgLgHQgKgHgNAAQgTAAgMAQg");
	this.shape_78.setTransform(331.5,366.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(255,255,255,0.902)").s().p("AgmAzQgPgSAAgfIAAgEQAAgTAHgQQAHgPANgIQANgIAQAAQAWAAAOANQAOANABAVIgOAAQgBgQgKgJQgKgKgQAAQgTAAgLAPQgLAOAAAaIAAAEQAAAZALAOQALAPATAAQAPAAALgJQAKgJABgOIAOAAQAAANgHAKQgHAKgMAGQgMAFgNAAQgZAAgQgSg");
	this.shape_79.setTransform(318,366.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(255,255,255,0.902)").s().p("AgHBbIAAiEIAOAAIAACEgAgHhKQgCgCAAgEQAAgEACgDQADgDAEAAQAEAAADADQADADAAADQAAAFgDACQgDADgEAAQgEAAgDgDg");
	this.shape_80.setTransform(308.6,364.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(255,255,255,0.902)").s().p("AAmBDIgmg5IglA5IgRAAIAvhDIgthCIARAAIAjA2IAkg2IASAAIguBCIAwBDg");
	this.shape_81.setTransform(299.6,366.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(255,255,255,0.902)").s().p("AgqBOQgRgTAAgfIAAgDQAAgTAIgPQAHgPAOgJQAOgIAQAAQAbAAAQASQARATAAAeIAAADQAAATgIAQQgHAPgOAJQgNAIgSAAQgZAAgRgSgAgfgNQgNAOAAAZIAAADQAAAYANAPQAMAQATAAQAUAAANgQQAMgPAAgZIAAgDQAAgPgGgMQgFgNgLgHQgKgHgNAAQgTAAgMAQgAgIg8IAXgjIASAAIgdAjg");
	this.shape_82.setTransform(286.3,364.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(255,255,255,0.902)").s().p("AgCBMQgHgIAAgSIAAhYIgZAAIAAgMIAZAAIAAgiIAOAAIAAAiIAbAAIAAAMIgbAAIAABYQAAALAEAGQAEAFAJAAIAMgBIABAMQgGACgKAAQgPAAgGgJg");
	this.shape_83.setTransform(274.9,365.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(255,255,255,0.902)").s().p("AgjA6QgPgLAAgSIAPAAQABANAKAIQAKAHAQAAQAPAAAKgHQAJgHAAgKQAAgLgJgHQgJgHgRgDQgRgEgKgEQgKgFgFgHQgEgHAAgKQAAgQANgKQANgKAUAAQAWAAAOALQANALAAASIgPAAQAAgMgJgIQgKgIgPAAQgOAAgJAHQgIAGAAALQAAAKAHAFQAHAGATAEQATAFAKAEQAKAFAEAHQAFAIAAAKQAAARgOAKQgNAKgWAAQgXAAgOgLg");
	this.shape_84.setTransform(258.5,366.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(255,255,255,0.902)").s().p("AgYA9QgPgJgHgPQgIgPAAgSIAAgFQAAgTAHgPQAIgQAOgJQANgIAPAAQAXAAAPAQQAOARAAAdIAAAHIheAAIAAADQAAAWANAQQANAPASAAQANAAAIgFQAJgEAIgJIAJAHQgQAXgfAAQgQAAgNgIgAgYgsQgMANgDAUIBQAAIAAgBQgBgUgKgMQgLgMgQAAQgRAAgKAMg");
	this.shape_85.setTransform(245.7,366.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(255,255,255,0.902)").s().p("AgCBMQgHgIAAgSIAAhYIgZAAIAAgMIAZAAIAAgiIAOAAIAAAiIAbAAIAAAMIgbAAIAABYQAAALAEAGQAEAFAJAAIAMgBIABAMQgGACgKAAQgPAAgGgJg");
	this.shape_86.setTransform(234.7,365.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(255,255,255,0.902)").s().p("AAkBEIAAhXQAAgSgIgIQgHgKgRABQgNgBgKAKQgLAIgFAOIAABbIgOAAIAAiEIAOAAIAAAWQAIgMALgHQALgGANAAQAVAAALAMQAKAMAAAZIAABWg");
	this.shape_87.setTransform(224,366.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(255,255,255,0.902)").s().p("AgYA9QgPgJgHgPQgIgPAAgSIAAgFQAAgTAHgPQAIgQAOgJQANgIAPAAQAXAAAPAQQAOARAAAdIAAAHIheAAIAAADQAAAWANAQQANAPASAAQANAAAIgFQAJgEAIgJIAJAHQgQAXgfAAQgQAAgNgIgAgYgsQgMANgDAUIBPAAIAAgBQAAgUgKgMQgLgMgQAAQgRAAgKAMg");
	this.shape_88.setTransform(210.6,366.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(255,255,255,0.902)").s().p("AgHBbIAAiEIAOAAIAACEgAgHhKQgCgCAAgEQAAgEACgDQADgDAEAAQAEAAADADQADADAAADQAAAFgDACQgDADgEAAQgEAAgDgDg");
	this.shape_89.setTransform(201.2,364.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(255,255,255,0.902)").s().p("AgnBOQgOgTAAggIAAgBQAAgeAOgTQAOgSAYAAQAaAAAOAVIAAhLIAPAAIAAC9IgOAAIgBgSQgOAUgbAAQgXAAgOgSgAgcgOQgKAOAAAcQAAAaAKAPQALAOARAAQAcAAALgYIAAg9QgLgbgcAAQgRAAgLAPg");
	this.shape_90.setTransform(191,364.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(255,255,255,0.902)").s().p("AgZA9QgNgJgIgPQgIgPAAgSIAAgFQAAgTAIgPQAHgQANgJQAOgIAOAAQAZAAAOAQQAOARAAAdIAAAHIheAAIAAADQAAAWANAQQANAPATAAQALAAAJgFQAKgEAHgJIAKAHQgRAXgfAAQgQAAgOgIgAgZgsQgLANgCAUIBPAAIAAgBQgBgUgLgMQgKgMgRAAQgPAAgMAMg");
	this.shape_91.setTransform(177.8,366.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(255,255,255,0.902)").s().p("AgeBEIAAiEIAOAAIABAVQALgYAZAAQAHAAADACIAAANIgKgBQgPAAgIAIQgKAIgDAOIAABbg");
	this.shape_92.setTransform(167.8,366.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(255,255,255,0.902)").s().p("AgZBYQgNgGgHgKIAIgJQAQATAVAAQASAAAKgLQALgLAAgTIAAgRQgOAUgbAAQgXAAgOgTQgOgSAAgfIAAgCQAAgfAOgSQAOgTAYAAQAaAAAOAWIABgTIAOAAIAACCQAAAZgPAPQgOAQgZAAQgNAAgMgHgAgchCQgKAOAAAdQAAAYAKAPQALAPARAAQAcAAALgZIAAg9QgFgNgKgGQgKgHgOAAQgRAAgLAPg");
	this.shape_93.setTransform(155.4,369.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(255,255,255,0.902)").s().p("AAkBEIAAhXQAAgSgIgIQgHgKgRABQgNgBgKAKQgLAIgFAOIAABbIgOAAIAAiEIAOAAIAAAWQAIgMALgHQALgGANAAQAVAAALAMQAKAMAAAZIAABWg");
	this.shape_94.setTransform(141.7,366.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(255,255,255,0.902)").s().p("AgHBbIAAiEIAOAAIAACEgAgHhKQgCgCAAgEQAAgEACgDQADgDAEAAQAEAAADADQADADAAADQAAAFgDACQgDADgEAAQgEAAgDgDg");
	this.shape_95.setTransform(132,364.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(255,255,255,0.902)").s().p("AgjA6QgPgLAAgSIAPAAQABANAKAIQAKAHAQAAQAPAAAKgHQAJgHAAgKQAAgLgJgHQgJgHgRgDQgRgEgKgEQgKgFgFgHQgEgHAAgKQAAgQANgKQANgKAUAAQAWAAAOALQANALAAASIgPAAQAAgMgJgIQgKgIgPAAQgOAAgJAHQgIAGAAALQAAAKAHAFQAHAGATAEQATAFAKAEQAKAFAEAHQAFAIAAAKQAAARgOAKQgNAKgWAAQgXAAgOgLg");
	this.shape_96.setTransform(116.5,366.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(255,255,255,0.902)").s().p("AgxBGQgUgXAAgmIAAgSQAAgYAJgTQAIgTAQgKQAQgLAUAAQAVABAPAJQARALAIASQAJASAAAYIAAAVQAAAZgJASQgIATgQALQgQAJgVABQgegBgTgWgAgng7QgPASAAAhIAAASQAAAgAPASQAPAUAYgBQAaAAAPgSQAOgTAAggIAAgTQAAgggOgSQgPgTgaAAQgYAAgPATg");
	this.shape_97.setTransform(101.6,364.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(194,155,1,0.902)").s().p("AgiAPIAAgdIBFAAIAAAdg");
	this.shape_98.setTransform(81.9,365.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(194,155,1,0.902)").s().p("AAEBaIAAiJIgqAOIAAgeIBJgaIAEAAIAACzg");
	this.shape_99.setTransform(62.2,364.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#C29B01").ss(2,1,1).p("EgiKAiCQoarAAAufQAAxnMeseQMesfRoAAQRoAAMfMfQMeMeAARnQAAOfoZLA");
	this.shape_100.setTransform(283.4,228.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(234,187,1,0.008)").s().p("EgiKAiCQoarAAAufQAAxnMeseQMfsfRnAAQRpAAMeMfQMeMeAARnQAAOfoZLAg");
	this.shape_101.setTransform(283.4,228.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#C29B01").ss(2,1,1).p("EgkSAi4Qn/rGAAuYQAAyVM+s+QM+s+SVAAQSWAAM+M+QM9M+AASVQAAOYn+LG");
	this.shape_102.setTransform(283.4,223.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(234,187,1,0.008)").s().p("EgkRAi4QoArGAAuYQAByVM9s+QM+s+SVAAQSVAAM/M+QM9M+ABSVQAAOYn/LGg");
	this.shape_103.setTransform(283.4,223.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.popup1_1, new cjs.Rectangle(-1,-1,568.7,448.4), null);


(lib.Símbolo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.instance = new lib.Símbolo1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(556.5,84.5,1,1,0,0,0,556.5,84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1113,169);


(lib.cigarro_animacao = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.898)").s().p("EhV8Aw7MAAAhh1MCr5AAAMAAABh1g");
	this.shape.setTransform(585,329,1.063,1.051);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1200));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EhbZAirIAAm7QAWAFAYgBQCYABBsjCQBtjBAAkSQAAkShtjBQhsjCiYABQgYgBgWAFIAAoeMC2zAAAMAAAAj5g");
	var mask_graphics_119 = new cjs.Graphics().p("EhbZAirIAAm7QAWAFAYgBQCYABBsjCQBtjBAAkSQAAkShtjBQhsjCiYABQgYgBgWAFIAAoeMC2zAAAMAAAAj5g");
	var mask_graphics_120 = new cjs.Graphics().p("EhbUAirIAAm7QAXAFAXgBQCZABBsjCQBsjBAAkSQAAkShsjBQhsjCiZABQgXgBgXAFIAAoeMC2zAAAMAAAAj5g");
	var mask_graphics_121 = new cjs.Graphics().p("EhbOAirIAAm7QAWAFAYgBQCYABBsjCQBtjBAAkSQAAkShtjBQhsjCiYABQgYgBgWAFIAAoeMC2xAAAMAAAAj5g");
	var mask_graphics_122 = new cjs.Graphics().p("EhbJAirIAAm7QAXAFAXgBQCZABBsjCQBsjBAAkSQAAkShsjBQhsjCiZABQgXgBgXAFIAAoeMC2wAAAMAAAAj5g");
	var mask_graphics_123 = new cjs.Graphics().p("EhbDAirIAAm7QAWAFAYgBQCYABBsjCQBsjBAAkSQAAkShsjBQhsjCiYABQgYgBgWAFIAAoeMC2vAAAMAAAAj5g");
	var mask_graphics_124 = new cjs.Graphics().p("Eha+AirIAAm7QAXAFAXgBQCZABBrjCQBtjBAAkSQAAkShtjBQhrjCiZABQgXgBgXAFIAAoeMC2uAAAMAAAAj5g");
	var mask_graphics_125 = new cjs.Graphics().p("Eha4AirIAAm7QAWAFAYgBQCYABBsjCQBsjBAAkSQAAkShsjBQhsjCiYABQgYgBgWAFIAAoeMC2sAAAMAAAAj5g");
	var mask_graphics_126 = new cjs.Graphics().p("EhazAirIAAm7QAXAFAXgBQCZABBrjCQBtjBAAkSQAAkShtjBQhrjCiZABQgXgBgXAFIAAoeMC2sAAAMAAAAj5g");
	var mask_graphics_127 = new cjs.Graphics().p("EhatAirIAAm7QAWAFAYgBQCYABBsjCQBsjBAAkSQAAkShsjBQhsjCiYABQgYgBgWAFIAAoeMC2qAAAMAAAAj5g");
	var mask_graphics_128 = new cjs.Graphics().p("EhaoAirIAAm7QAXAFAXgBQCZABBrjCQBtjBAAkSQAAkShtjBQhrjCiZABQgXgBgXAFIAAoeMC2pAAAMAAAAj5g");
	var mask_graphics_129 = new cjs.Graphics().p("EhaiAirIAAm7QAWAFAYgBQCYABBsjCQBsjBAAkSQAAkShsjBQhsjCiYABQgYgBgWAFIAAoeMC2oAAAMAAAAj5g");
	var mask_graphics_130 = new cjs.Graphics().p("EhadAirIAAm7QAXAFAXgBQCYABBsjCQBtjBAAkSQAAkShtjBQhsjCiYABQgXgBgXAFIAAoeMC2nAAAMAAAAj5g");
	var mask_graphics_131 = new cjs.Graphics().p("EhaXAirIAAm7QAWAFAXgBQCZABBsjCQBsjBAAkSQAAkShsjBQhsjCiZABQgXgBgWAFIAAoeMC2lAAAMAAAAj5g");
	var mask_graphics_132 = new cjs.Graphics().p("EhaSAirIAAm7QAXAFAXgBQCYABBsjCQBsjBAAkSQAAkShsjBQhsjCiYABQgXgBgXAFIAAoeMC2lAAAMAAAAj5g");
	var mask_graphics_133 = new cjs.Graphics().p("EhaMAirIAAm7QAWAFAXgBQCZABBsjCQBsjBAAkSQAAkShsjBQhsjCiZABQgXgBgWAFIAAoeMC2jAAAMAAAAj5g");
	var mask_graphics_134 = new cjs.Graphics().p("EhaHAirIAAm7QAXAFAXgBQCYABBsjCQBsjBAAkSQAAkShsjBQhsjCiYABQgXgBgXAFIAAoeMC2iAAAMAAAAj5g");
	var mask_graphics_135 = new cjs.Graphics().p("EhaBAirIAAm7QAWAFAXgBQCZABBsjCQBsjBAAkSQAAkShsjBQhsjCiZABQgXgBgWAFIAAoeMC2hAAAMAAAAj5g");
	var mask_graphics_136 = new cjs.Graphics().p("EhZ8AirIAAm7QAWAFAYgBQCYABBsjCQBsjBAAkSQAAkShsjBQhsjCiYABQgYgBgWAFIAAoeMC2gAAAMAAAAj5g");
	var mask_graphics_137 = new cjs.Graphics().p("EhZ2AirIAAm7QAWAFAXgBQCZABBrjCQBtjBAAkSQAAkShtjBQhrjCiZABQgXgBgWAFIAAoeMC2eAAAMAAAAj5g");
	var mask_graphics_138 = new cjs.Graphics().p("EhZxAirIAAm7QAWAFAYgBQCYABBsjCQBsjBAAkSQAAkShsjBQhsjCiYABQgYgBgWAFIAAoeMC2eAAAMAAAAj5g");
	var mask_graphics_139 = new cjs.Graphics().p("EhZrAirIAAm7QAWAFAXgBQCZABBrjCQBtjBAAkSQAAkShtjBQhrjCiZABQgXgBgWAFIAAoeMC2cAAAMAAAAj5g");
	var mask_graphics_140 = new cjs.Graphics().p("EhZmAirIAAm7QAWAFAYgBQCYABBsjCQBsjBAAkSQAAkShsjBQhsjCiYABQgYgBgWAFIAAoeMC2bAAAMAAAAj5g");
	var mask_graphics_141 = new cjs.Graphics().p("EhZgAirIAAm7QAWAFAXgBQCZABBrjCQBsjBAAkSQAAkShsjBQhrjCiZABQgXgBgWAFIAAoeMC2aAAAMAAAAj5g");
	var mask_graphics_142 = new cjs.Graphics().p("EhZbAirIAAm7QAWAFAYgBQCYABBsjCQBsjBAAkSQAAkShsjBQhsjCiYABQgYgBgWAFIAAoeMC2ZAAAMAAAAj5g");
	var mask_graphics_143 = new cjs.Graphics().p("EhZVAirIAAm7QAWAFAXgBQCZABBrjCQBsjBAAkSQAAkShsjBQhrjCiZABQgXgBgWAFIAAoeMC2XAAAMAAAAj5g");
	var mask_graphics_144 = new cjs.Graphics().p("EhZQAirIAAm7QAWAFAYgBQCYABBsjCQBsjBAAkSQAAkShsjBQhsjCiYABQgYgBgWAFIAAoeMC2XAAAMAAAAj5g");
	var mask_graphics_145 = new cjs.Graphics().p("EhZLAirIAAm7QAXAFAXgBQCYABBsjCQBsjBAAkSQAAkShsjBQhsjCiYABQgXgBgXAFIAAoeMC2WAAAMAAAAj5g");
	var mask_graphics_146 = new cjs.Graphics().p("EhZFAirIAAm7QAWAFAYgBQCYABBsjCQBsjBAAkSQAAkShsjBQhsjCiYABQgYgBgWAFIAAoeMC2UAAAMAAAAj5g");
	var mask_graphics_147 = new cjs.Graphics().p("EhZAAirIAAm7QAXAFAXgBQCYABBsjCQBsjBAAkSQAAkShsjBQhsjCiYABQgXgBgXAFIAAoeMC2UAAAMAAAAj5g");
	var mask_graphics_148 = new cjs.Graphics().p("EhY6AirIAAm7QAWAFAYgBQCYABBrjCQBtjBAAkSQAAkShtjBQhrjCiYABQgYgBgWAFIAAoeMC2SAAAMAAAAj5g");
	var mask_graphics_149 = new cjs.Graphics().p("EhY1AirIAAm7QAXAFAXgBQCYABBsjCQBsjBAAkSQAAkShsjBQhsjCiYABQgXgBgXAFIAAoeMC2RAAAMAAAAj5g");
	var mask_graphics_150 = new cjs.Graphics().p("EhYvAirIAAm7QAWAFAYgBQCYABBrjCQBsjBAAkSQAAkShsjBQhrjCiYABQgYgBgWAFIAAoeMC2QAAAMAAAAj5g");
	var mask_graphics_151 = new cjs.Graphics().p("EhYqAirIAAm7QAXAFAXgBQCYABBsjCQBsjBAAkSQAAkShsjBQhsjCiYABQgXgBgXAFIAAoeMC2PAAAMAAAAj5g");
	var mask_graphics_152 = new cjs.Graphics().p("EhYkAirIAAm7QAWAFAYgBQCYABBrjCQBsjBAAkSQAAkShsjBQhrjCiYABQgYgBgWAFIAAoeMC2OAAAMAAAAj5g");
	var mask_graphics_153 = new cjs.Graphics().p("EhYfAirIAAm7QAXAFAXgBQCYABBsjCQBsjBAAkSQAAkShsjBQhsjCiYABQgXgBgXAFIAAoeMC2NAAAMAAAAj5g");
	var mask_graphics_154 = new cjs.Graphics().p("EhYZAirIAAm7QAWAFAYgBQCYABBrjCQBsjBAAkSQAAkShsjBQhrjCiYABQgYgBgWAFIAAoeMC2LAAAMAAAAj5g");
	var mask_graphics_155 = new cjs.Graphics().p("EhYUAirIAAm7QAXAFAXgBQCYABBsjCQBsjBAAkSQAAkShsjBQhsjCiYABQgXgBgXAFIAAoeMC2LAAAMAAAAj5g");
	var mask_graphics_156 = new cjs.Graphics().p("EhYOAirIAAm7QAWAFAYgBQCYABBrjCQBsjBAAkSQAAkShsjBQhrjCiYABQgYgBgWAFIAAoeMC2JAAAMAAAAj5g");
	var mask_graphics_157 = new cjs.Graphics().p("EhYJAirIAAm7QAXAFAXgBQCYABBsjCQBsjBAAkSQAAkShsjBQhsjCiYABQgXgBgXAFIAAoeMC2IAAAMAAAAj5g");
	var mask_graphics_158 = new cjs.Graphics().p("EhYDAirIAAm7QAWAFAXgBQCZABBrjCQBsjBAAkSQAAkShsjBQhrjCiZABQgXgBgWAFIAAoeMC2HAAAMAAAAj5g");
	var mask_graphics_159 = new cjs.Graphics().p("EhX+AirIAAm7QAXAFAXgBQCYABBrjCQBsjBABkSQgBkShsjBQhrjCiYABQgXgBgXAFIAAoeMC2GAAAMAAAAj5g");
	var mask_graphics_160 = new cjs.Graphics().p("EhX4AirIAAm7QAWAFAXgBQCYABBsjCQBsjBAAkSQAAkShsjBQhsjCiYABQgXgBgWAFIAAoeMC2EAAAMAAAAj5g");
	var mask_graphics_161 = new cjs.Graphics().p("EhXzAirIAAm7QAXAFAXgBQCYABBrjCQBsjBAAkSQAAkShsjBQhrjCiYABQgXgBgXAFIAAoeMC2EAAAMAAAAj5g");
	var mask_graphics_162 = new cjs.Graphics().p("EhXtAirIAAm7QAWAFAXgBQCYABBsjCQBsjBAAkSQAAkShsjBQhsjCiYABQgXgBgWAFIAAoeMC2CAAAMAAAAj5g");
	var mask_graphics_163 = new cjs.Graphics().p("EhXoAirIAAm7QAXAFAXgBQCYABBrjCQBsjBAAkSQAAkShsjBQhrjCiYABQgXgBgXAFIAAoeMC2BAAAMAAAAj5g");
	var mask_graphics_164 = new cjs.Graphics().p("EhXiAirIAAm7QAWAFAXgBQCYABBsjCQBsjBAAkSQAAkShsjBQhsjCiYABQgXgBgWAFIAAoeMC2AAAAMAAAAj5g");
	var mask_graphics_165 = new cjs.Graphics().p("EhXdAirIAAm7QAXAFAXgBQCYABBrjCQBsjBAAkSQAAkShsjBQhrjCiYABQgXgBgXAFIAAoeMC1/AAAMAAAAj5g");
	var mask_graphics_166 = new cjs.Graphics().p("EhXXAirIAAm7QAWAFAXgBQCYABBsjCQBsjBAAkSQAAkShsjBQhsjCiYABQgXgBgWAFIAAoeMC19AAAMAAAAj5g");
	var mask_graphics_167 = new cjs.Graphics().p("EhXSAirIAAm7QAWAFAYgBQCYABBrjCQBsjBAAkSQAAkShsjBQhrjCiYABQgYgBgWAFIAAoeMC19AAAMAAAAj5g");
	var mask_graphics_168 = new cjs.Graphics().p("EhXMAirIAAm7QAWAFAXgBQCYABBsjCQBsjBAAkSQAAkShsjBQhsjCiYABQgXgBgWAFIAAoeMC17AAAMAAAAj5g");
	var mask_graphics_169 = new cjs.Graphics().p("EhXHAirIAAm7QAWAFAYgBQCYABBrjCQBsjBAAkSQAAkShsjBQhrjCiYABQgYgBgWAFIAAoeMC16AAAMAAAAj5g");
	var mask_graphics_170 = new cjs.Graphics().p("EhXBAirIAAm7QAWAFAXgBQCYABBrjCQBsjBAAkSQAAkShsjBQhrjCiYABQgXgBgWAFIAAoeMC15AAAMAAAAj5g");
	var mask_graphics_171 = new cjs.Graphics().p("EhW8AirIAAm7QAWAFAYgBQCYABBrjCQBsjBAAkSQAAkShsjBQhrjCiYABQgYgBgWAFIAAoeMC14AAAMAAAAj5g");
	var mask_graphics_172 = new cjs.Graphics().p("EhW2AirIAAm7QAWAFAXgBQCYABBrjCQBsjBAAkSQAAkShsjBQhrjCiYABQgXgBgWAFIAAoeMC12AAAMAAAAj5g");
	var mask_graphics_173 = new cjs.Graphics().p("EhWxAirIAAm7QAWAFAYgBQCYABBrjCQBsjBAAkSQAAkShsjBQhrjCiYABQgYgBgWAFIAAoeMC12AAAMAAAAj5g");
	var mask_graphics_174 = new cjs.Graphics().p("EhWrAirIAAm7QAWAFAXgBQCYABBrjCQBsjBAAkSQAAkShsjBQhrjCiYABQgXgBgWAFIAAoeMC10AAAMAAAAj5g");
	var mask_graphics_175 = new cjs.Graphics().p("EhWmAirIAAm7QAWAFAYgBQCXABBsjCQBsjBAAkSQAAkShsjBQhsjCiXABQgYgBgWAFIAAoeMC1zAAAMAAAAj5g");
	var mask_graphics_176 = new cjs.Graphics().p("EhWgAirIAAm7QAWAFAXgBQCYABBrjCQBsjBAAkSQAAkShsjBQhrjCiYABQgXgBgWAFIAAoeMC1yAAAMAAAAj5g");
	var mask_graphics_177 = new cjs.Graphics().p("EhWbAirIAAm7QAWAFAYgBQCXABBsjCQBsjBAAkSQAAkShsjBQhsjCiXABQgYgBgWAFIAAoeMC1xAAAMAAAAj5g");
	var mask_graphics_178 = new cjs.Graphics().p("EhWVAirIAAm7QAWAFAXgBQCYABBrjCQBsjBAAkSQAAkShsjBQhrjCiYABQgXgBgWAFIAAoeMC1vAAAMAAAAj5g");
	var mask_graphics_179 = new cjs.Graphics().p("EhWQAirIAAm7QAWAFAYgBQCXABBsjCQBrjBAAkSQAAkShrjBQhsjCiXABQgYgBgWAFIAAoeMC1vAAAMAAAAj5g");
	var mask_graphics_180 = new cjs.Graphics().p("EhWKAirIAAm7QAWAFAXgBQCYABBrjCQBsjBAAkSQAAkShsjBQhrjCiYABQgXgBgWAFIAAoeMC1tAAAMAAAAj5g");
	var mask_graphics_181 = new cjs.Graphics().p("EhWFAirIAAm7QAWAFAYgBQCXABBsjCQBrjBAAkSQAAkShrjBQhsjCiXABQgYgBgWAFIAAoeMC1sAAAMAAAAj5g");
	var mask_graphics_182 = new cjs.Graphics().p("EhWAAirIAAm7QAXAFAXgBQCYABBrjCQBsjBAAkSQAAkShsjBQhrjCiYABQgXgBgXAFIAAoeMC1sAAAMAAAAj5g");
	var mask_graphics_183 = new cjs.Graphics().p("EhV6AirIAAm7QAWAFAYgBQCXABBrjCQBsjBAAkSQAAkShsjBQhrjCiXABQgYgBgWAFIAAoeMC1qAAAMAAAAj5g");
	var mask_graphics_184 = new cjs.Graphics().p("EhV1AirIAAm7QAXAFAXgBQCYABBrjCQBsjBAAkSQAAkShsjBQhrjCiYABQgXgBgXAFIAAoeMC1pAAAMAAAAj5g");
	var mask_graphics_185 = new cjs.Graphics().p("EhVvAirIAAm7QAWAFAYgBQCXABBrjCQBsjBAAkSQAAkShsjBQhrjCiXABQgYgBgWAFIAAoeMC1oAAAMAAAAj5g");
	var mask_graphics_186 = new cjs.Graphics().p("EhVqAirIAAm7QAXAFAXgBQCYABBrjCQBsjBAAkSQAAkShsjBQhrjCiYABQgXgBgXAFIAAoeMC1nAAAMAAAAj5g");
	var mask_graphics_187 = new cjs.Graphics().p("EhVkAirIAAm7QAWAFAXgBQCYABBrjCQBsjBAAkSQAAkShsjBQhrjCiYABQgXgBgWAFIAAoeMC1lAAAMAAAAj5g");
	var mask_graphics_188 = new cjs.Graphics().p("EhVfAirIAAm7QAXAFAXgBQCYABBrjCQBrjBAAkSQAAkShrjBQhrjCiYABQgXgBgXAFIAAoeMC1lAAAMAAAAj5g");
	var mask_graphics_189 = new cjs.Graphics().p("EhVZAirIAAm7QAWAFAXgBQCYABBrjCQBsjBAAkSQAAkShsjBQhrjCiYABQgXgBgWAFIAAoeMC1jAAAMAAAAj5g");
	var mask_graphics_190 = new cjs.Graphics().p("EhVUAirIAAm7QAXAFAXgBQCXABBsjCQBrjBAAkSQAAkShrjBQhsjCiXABQgXgBgXAFIAAoeMC1jAAAMAAAAj5g");
	var mask_graphics_191 = new cjs.Graphics().p("EhVOAirIAAm7QAWAFAXgBQCYABBrjCQBsjBAAkSQAAkShsjBQhrjCiYABQgXgBgWAFIAAoeMC1hAAAMAAAAj5g");
	var mask_graphics_192 = new cjs.Graphics().p("EhVJAirIAAm7QAXAFAXgBQCXABBsjCQBrjBAAkSQAAkShrjBQhsjCiXABQgXgBgXAFIAAoeMC1gAAAMAAAAj5g");
	var mask_graphics_193 = new cjs.Graphics().p("EhVDAirIAAm7QAWAFAXgBQCYABBrjCQBsjBAAkSQAAkShsjBQhrjCiYABQgXgBgWAFIAAoeMC1fAAAMAAAAj5g");
	var mask_graphics_194 = new cjs.Graphics().p("EhU+AirIAAm7QAXAFAXgBQCXABBrjCQBsjBAAkSQAAkShsjBQhrjCiXABQgXgBgXAFIAAoeMC1eAAAMAAAAj5g");
	var mask_graphics_195 = new cjs.Graphics().p("EhU4AirIAAm7QAWAFAXgBQCYABBrjCQBsjBAAkSQAAkShsjBQhrjCiYABQgXgBgWAFIAAoeMC1cAAAMAAAAj5g");
	var mask_graphics_196 = new cjs.Graphics().p("EhUzAirIAAm7QAXAFAXgBQCXABBrjCQBsjBAAkSQAAkShsjBQhrjCiXABQgXgBgXAFIAAoeMC1cAAAMAAAAj5g");
	var mask_graphics_197 = new cjs.Graphics().p("EhUtAirIAAm7QAWAFAXgBQCYABBrjCQBrjBAAkSQAAkShrjBQhrjCiYABQgXgBgWAFIAAoeMC1aAAAMAAAAj5g");
	var mask_graphics_198 = new cjs.Graphics().p("EhUoAirIAAm7QAXAFAXgBQCXABBrjCQBsjBAAkSQAAkShsjBQhrjCiXABQgXgBgXAFIAAoeMC1ZAAAMAAAAj5g");
	var mask_graphics_199 = new cjs.Graphics().p("EhUiAirIAAm7QAWAFAXgBQCYABBrjCQBrjBAAkSQAAkShrjBQhrjCiYABQgXgBgWAFIAAoeMC1YAAAMAAAAj5g");
	var mask_graphics_200 = new cjs.Graphics().p("EhUdAirIAAm7QAWAFAYgBQCXABBrjCQBsjBAAkSQAAkShsjBQhrjCiXABQgYgBgWAFIAAoeMC1XAAAMAAAAj5g");
	var mask_graphics_201 = new cjs.Graphics().p("EhUXAirIAAm7QAWAFAXgBQCYABBrjCQBrjBAAkSQAAkShrjBQhrjCiYABQgXgBgWAFIAAoeMC1VAAAMAAAAj5g");
	var mask_graphics_202 = new cjs.Graphics().p("EhUSAirIAAm7QAWAFAYgBQCXABBrjCQBsjBAAkSQAAkShsjBQhrjCiXABQgYgBgWAFIAAoeMC1VAAAMAAAAj5g");
	var mask_graphics_203 = new cjs.Graphics().p("EhUMAirIAAm7QAWAFAXgBQCYABBrjCQBrjBAAkSQAAkShrjBQhrjCiYABQgXgBgWAFIAAoeMC1TAAAMAAAAj5g");
	var mask_graphics_204 = new cjs.Graphics().p("EhUHAirIAAm7QAWAFAYgBQCXABBrjCQBsjBAAkSQAAkShsjBQhrjCiXABQgYgBgWAFIAAoeMC1SAAAMAAAAj5g");
	var mask_graphics_205 = new cjs.Graphics().p("EhUBAirIAAm7QAWAFAXgBQCXABBrjCQBsjBAAkSQAAkShsjBQhrjCiXABQgXgBgWAFIAAoeMC1RAAAMAAAAj5g");
	var mask_graphics_206 = new cjs.Graphics().p("EhT8AirIAAm7QAWAFAYgBQCXABBrjCQBrjBAAkSQAAkShrjBQhrjCiXABQgYgBgWAFIAAoeMC1QAAAMAAAAj5g");
	var mask_graphics_207 = new cjs.Graphics().p("EhT2AirIAAm7QAWAFAXgBQCXABBrjCQBsjBAAkSQAAkShsjBQhrjCiXABQgXgBgWAFIAAoeMC1OAAAMAAAAj5g");
	var mask_graphics_208 = new cjs.Graphics().p("EhTxAirIAAm7QAWAFAYgBQCXABBrjCQBrjBAAkSQAAkShrjBQhrjCiXABQgYgBgWAFIAAoeMC1OAAAMAAAAj5g");
	var mask_graphics_209 = new cjs.Graphics().p("EhTrAirIAAm7QAWAFAXgBQCXABBrjCQBsjBAAkSQAAkShsjBQhrjCiXABQgXgBgWAFIAAoeMC1MAAAMAAAAj5g");
	var mask_graphics_210 = new cjs.Graphics().p("EhTmAirIAAm7QAWAFAYgBQCXABBrjCQBrjBAAkSQAAkShrjBQhrjCiXABQgYgBgWAFIAAoeMC1LAAAMAAAAj5g");
	var mask_graphics_211 = new cjs.Graphics().p("EhTgAirIAAm7QAWAFAXgBQCXABBrjCQBsjBAAkSQAAkShsjBQhrjCiXABQgXgBgWAFIAAoeMC1KAAAMAAAAj5g");
	var mask_graphics_212 = new cjs.Graphics().p("EhTbAirIAAm7QAWAFAYgBQCXABBrjCQBrjBAAkSQAAkShrjBQhrjCiXABQgYgBgWAFIAAoeMC1JAAAMAAAAj5g");
	var mask_graphics_213 = new cjs.Graphics().p("EhTVAirIAAm7QAWAFAXgBQCXABBrjCQBsjBAAkSQAAkShsjBQhrjCiXABQgXgBgWAFIAAoeMC1HAAAMAAAAj5g");
	var mask_graphics_214 = new cjs.Graphics().p("EhTQAirIAAm7QAWAFAXgBQCYABBrjCQBrjBAAkSQAAkShrjBQhrjCiYABQgXgBgWAFIAAoeMC1HAAAMAAAAj5g");
	var mask_graphics_215 = new cjs.Graphics().p("EhTKAirIAAm7QAWAFAXgBQCXABBrjCQBrjBAAkSQAAkShrjBQhrjCiXABQgXgBgWAFIAAoeMC1FAAAMAAAAj5g");
	var mask_graphics_216 = new cjs.Graphics().p("EhTFAirIAAm7QAWAFAXgBQCYABBqjCQBsjBAAkSQAAkShsjBQhqjCiYABQgXgBgWAFIAAoeMC1EAAAMAAAAj5g");
	var mask_graphics_217 = new cjs.Graphics().p("EhS/AirIAAm7QAWAFAXgBQCXABBrjCQBrjBAAkSQAAkShrjBQhrjCiXABQgXgBgWAFIAAoeMC1DAAAMAAAAj5g");
	var mask_graphics_218 = new cjs.Graphics().p("EhS6AirIAAm7QAWAFAXgBQCYABBqjCQBsjBAAkSQAAkShsjBQhqjCiYABQgXgBgWAFIAAoeMC1CAAAMAAAAj5g");
	var mask_graphics_219 = new cjs.Graphics().p("EhS1AirIAAm7QAXAFAXgBQCXABBrjCQBrjBAAkSQAAkShrjBQhrjCiXABQgXgBgXAFIAAoeMC1BAAAMAAAAj5g");
	var mask_graphics_220 = new cjs.Graphics().p("EhSvAirIAAm7QAWAFAXgBQCXABBrjCQBsjBAAkSQAAkShsjBQhrjCiXABQgXgBgWAFIAAoeMC1AAAAMAAAAj5g");
	var mask_graphics_221 = new cjs.Graphics().p("EhSqAirIAAm7QAXAFAXgBQCXABBrjCQBrjBAAkSQAAkShrjBQhrjCiXABQgXgBgXAFIAAoeMC0/AAAMAAAAj5g");
	var mask_graphics_222 = new cjs.Graphics().p("EhSkAirIAAm7QAWAFAXgBQCXABBrjCQBsjBAAkSQAAkShsjBQhrjCiXABQgXgBgWAFIAAoeMC09AAAMAAAAj5g");
	var mask_graphics_223 = new cjs.Graphics().p("EhSfAirIAAm7QAXAFAXgBQCXABBrjCQBrjBAAkSQAAkShrjBQhrjCiXABQgXgBgXAFIAAoeMC09AAAMAAAAj5g");
	var mask_graphics_224 = new cjs.Graphics().p("EhSZAirIAAm7QAWAFAXgBQCXABBrjCQBrjBAAkSQAAkShrjBQhrjCiXABQgXgBgWAFIAAoeMC07AAAMAAAAj5g");
	var mask_graphics_225 = new cjs.Graphics().p("EhSUAirIAAm7QAXAFAXgBQCXABBrjCQBrjBAAkSQAAkShrjBQhrjCiXABQgXgBgXAFIAAoeMC07AAAMAAAAj5g");
	var mask_graphics_226 = new cjs.Graphics().p("EhSOAirIAAm7QAWAFAXgBQCXABBrjCQBrjBAAkSQAAkShrjBQhrjCiXABQgXgBgWAFIAAoeMC05AAAMAAAAj5g");
	var mask_graphics_227 = new cjs.Graphics().p("EhSJAirIAAm7QAXAFAXgBQCXABBrjCQBrjBAAkSQAAkShrjBQhrjCiXABQgXgBgXAFIAAoeMC04AAAMAAAAj5g");
	var mask_graphics_228 = new cjs.Graphics().p("EhSDAirIAAm7QAWAFAXgBQCXABBrjCQBrjBAAkSQAAkShrjBQhrjCiXABQgXgBgWAFIAAoeMC03AAAMAAAAj5g");
	var mask_graphics_229 = new cjs.Graphics().p("EhR+AirIAAm7QAXAFAXgBQCXABBqjCQBsjBAAkSQAAkShsjBQhqjCiXABQgXgBgXAFIAAoeMC02AAAMAAAAj5g");
	var mask_graphics_230 = new cjs.Graphics().p("EhR4AirIAAm7QAWAFAXgBQCXABBrjCQBrjBAAkSQAAkShrjBQhrjCiXABQgXgBgWAFIAAoeMC00AAAMAAAAj5g");
	var mask_graphics_231 = new cjs.Graphics().p("EhRzAirIAAm7QAWAFAYgBQCXABBqjCQBsjBAAkSQAAkShsjBQhqjCiXABQgYgBgWAFIAAoeMC00AAAMAAAAj5g");
	var mask_graphics_232 = new cjs.Graphics().p("EhRtAirIAAm7QAWAFAXgBQCXABBrjCQBrjBAAkSQAAkShrjBQhrjCiXABQgXgBgWAFIAAoeMC0yAAAMAAAAj5g");
	var mask_graphics_233 = new cjs.Graphics().p("EhRoAirIAAm7QAWAFAYgBQCXABBqjCQBrjBAAkSQAAkShrjBQhqjCiXABQgYgBgWAFIAAoeMC0xAAAMAAAAj5g");
	var mask_graphics_234 = new cjs.Graphics().p("EhRiAirIAAm7QAWAFAXgBQCXABBrjCQBrjBAAkSQAAkShrjBQhrjCiXABQgXgBgWAFIAAoeMC0wAAAMAAAAj5g");
	var mask_graphics_235 = new cjs.Graphics().p("EhRdAirIAAm7QAWAFAYgBQCWABBrjCQBrjBAAkSQAAkShrjBQhrjCiWABQgYgBgWAFIAAoeMC0vAAAMAAAAj5g");
	var mask_graphics_236 = new cjs.Graphics().p("EhRXAirIAAm7QAWAFAXgBQCXABBrjCQBrjBAAkSQAAkShrjBQhrjCiXABQgXgBgWAFIAAoeMC0tAAAMAAAAj5g");
	var mask_graphics_237 = new cjs.Graphics().p("EhRSAirIAAm7QAWAFAYgBQCWABBrjCQBrjBAAkSQAAkShrjBQhrjCiWABQgYgBgWAFIAAoeMC0tAAAMAAAAj5g");
	var mask_graphics_238 = new cjs.Graphics().p("EhRMAirIAAm7QAWAFAXgBQCXABBrjCQBrjBAAkSQAAkShrjBQhrjCiXABQgXgBgWAFIAAoeMC0rAAAMAAAAj5g");
	var mask_graphics_239 = new cjs.Graphics().p("EhRHAirIAAm7QAWAFAYgBQCWABBrjCQBrjBAAkSQAAkShrjBQhrjCiWABQgYgBgWAFIAAoeMC0qAAAMAAAAj5g");
	var mask_graphics_240 = new cjs.Graphics().p("EhRBAirIAAm7QAWAFAXgBQCXABBqjCQBsjBAAkSQAAkShsjBQhqjCiXABQgXgBgWAFIAAoeMC0pAAAMAAAAj5g");
	var mask_graphics_241 = new cjs.Graphics().p("EhQ8AirIAAm7QAWAFAXgBQCXABBrjCQBrjBAAkSQAAkShrjBQhrjCiXABQgXgBgWAFIAAoeMC0oAAAMAAAAj5g");
	var mask_graphics_242 = new cjs.Graphics().p("EhQ2AirIAAm7QAWAFAXgBQCXABBqjCQBsjBAAkSQAAkShsjBQhqjCiXABQgXgBgWAFIAAoeMC0mAAAMAAAAj5g");
	var mask_graphics_243 = new cjs.Graphics().p("EhQxAirIAAm7QAWAFAXgBQCXABBrjCQBrjBAAkSQAAkShrjBQhrjCiXABQgXgBgWAFIAAoeMC0mAAAMAAAAj5g");
	var mask_graphics_244 = new cjs.Graphics().p("EhQrAirIAAm7QAWAFAXgBQCXABBqjCQBrjBAAkSQAAkShrjBQhqjCiXABQgXgBgWAFIAAoeMC0kAAAMAAAAj5g");
	var mask_graphics_245 = new cjs.Graphics().p("EhQmAirIAAm7QAWAFAXgBQCXABBrjCQBrjBAAkSQAAkShrjBQhrjCiXABQgXgBgWAFIAAoeMC0jAAAMAAAAj5g");
	var mask_graphics_246 = new cjs.Graphics().p("EhQgAirIAAm7QAWAFAXgBQCXABBqjCQBrjBAAkSQAAkShrjBQhqjCiXABQgXgBgWAFIAAoeMC0iAAAMAAAAj5g");
	var mask_graphics_247 = new cjs.Graphics().p("EhQbAirIAAm7QAWAFAXgBQCXABBrjCQBrjBAAkSQAAkShrjBQhrjCiXABQgXgBgWAFIAAoeMC0hAAAMAAAAj5g");
	var mask_graphics_248 = new cjs.Graphics().p("EhQVAirIAAm7QAWAFAXgBQCXABBqjCQBrjBAAkSQAAkShrjBQhqjCiXABQgXgBgWAFIAAoeMC0fAAAMAAAAj5g");
	var mask_graphics_249 = new cjs.Graphics().p("EhQQAirIAAm7QAWAFAXgBQCXABBrjCQBrjBAAkSQAAkShrjBQhrjCiXABQgXgBgWAFIAAoeMC0fAAAMAAAAj5g");
	var mask_graphics_250 = new cjs.Graphics().p("EhQKAirIAAm7QAWAFAXgBQCWABBrjCQBrjBAAkSQAAkShrjBQhrjCiWABQgXgBgWAFIAAoeMC0dAAAMAAAAj5g");
	var mask_graphics_251 = new cjs.Graphics().p("EhQFAirIAAm7QAWAFAXgBQCXABBqjCQBsjBAAkSQAAkShsjBQhqjCiXABQgXgBgWAFIAAoeMC0cAAAMAAAAj5g");
	var mask_graphics_252 = new cjs.Graphics().p("EhP/AirIAAm7QAWAFAXgBQCWABBrjCQBrjBAAkSQAAkShrjBQhrjCiWABQgXgBgWAFIAAoeMC0bAAAMAAAAj5g");
	var mask_graphics_253 = new cjs.Graphics().p("EhP6AirIAAm7QAWAFAXgBQCXABBqjCQBrjBAAkSQAAkShrjBQhqjCiXABQgXgBgWAFIAAoeMC0aAAAMAAAAj5g");
	var mask_graphics_254 = new cjs.Graphics().p("EhP0AirIAAm7QAWAFAXgBQCWABBrjCQBrjBAAkSQAAkShrjBQhrjCiWABQgXgBgWAFIAAoeMC0YAAAMAAAAj5g");
	var mask_graphics_255 = new cjs.Graphics().p("EhPvAirIAAm7QAWAFAXgBQCXABBqjCQBrjBAAkSQAAkShrjBQhqjCiXABQgXgBgWAFIAAoeMC0YAAAMAAAAj5g");
	var mask_graphics_256 = new cjs.Graphics().p("EhPqAirIAAm7QAXAFAXgBQCWABBrjCQBrjBAAkSQAAkShrjBQhrjCiWABQgXgBgXAFIAAoeMC0XAAAMAAAAj5g");
	var mask_graphics_257 = new cjs.Graphics().p("EhPkAirIAAm7QAWAFAXgBQCXABBqjCQBrjBAAkSQAAkShrjBQhqjCiXABQgXgBgWAFIAAoeMC0VAAAMAAAAj5g");
	var mask_graphics_258 = new cjs.Graphics().p("EhPfAirIAAm7QAXAFAXgBQCWABBrjCQBrjBAAkSQAAkShrjBQhrjCiWABQgXgBgXAFIAAoeMC0VAAAMAAAAj5g");
	var mask_graphics_259 = new cjs.Graphics().p("EhPZAirIAAm7QAWAFAXgBQCXABBqjCQBrjBAAkSQAAkShrjBQhqjCiXABQgXgBgWAFIAAoeMC0TAAAMAAAAj5g");
	var mask_graphics_260 = new cjs.Graphics().p("EhPUAirIAAm7QAXAFAXgBQCWABBrjCQBrjBAAkSQAAkShrjBQhrjCiWABQgXgBgXAFIAAoeMC0SAAAMAAAAj5g");
	var mask_graphics_261 = new cjs.Graphics().p("EhPOAirIAAm7QAWAFAXgBQCXABBqjCQBrjBAAkSQAAkShrjBQhqjCiXABQgXgBgWAFIAAoeMC0RAAAMAAAAj5g");
	var mask_graphics_262 = new cjs.Graphics().p("EhPJAirIAAm7QAXAFAXgBQCWABBqjCQBrjBAAkSQAAkShrjBQhqjCiWABQgXgBgXAFIAAoeMC0QAAAMAAAAj5g");
	var mask_graphics_263 = new cjs.Graphics().p("EhPDAirIAAm7QAWAFAXgBQCXABBqjCQBrjBAAkSQAAkShrjBQhqjCiXABQgXgBgWAFIAAoeMC0PAAAMAAAAj5g");
	var mask_graphics_264 = new cjs.Graphics().p("EhO+AirIAAm7QAWAFAYgBQCWABBqjCQBrjBAAkSQAAkShrjBQhqjCiWABQgYgBgWAFIAAoeMC0OAAAMAAAAj5g");
	var mask_graphics_265 = new cjs.Graphics().p("EhO4AirIAAm7QAWAFAXgBQCXABBqjCQBrjBAAkSQAAkShrjBQhqjCiXABQgXgBgWAFIAAoeMC0MAAAMAAAAj5g");
	var mask_graphics_266 = new cjs.Graphics().p("EhOzAirIAAm7QAWAFAYgBQCWABBqjCQBrjBAAkSQAAkShrjBQhqjCiWABQgYgBgWAFIAAoeMC0MAAAMAAAAj5g");
	var mask_graphics_267 = new cjs.Graphics().p("EhOtAirIAAm7QAWAFAXgBQCWABBrjCQBrjBAAkSQAAkShrjBQhrjCiWABQgXgBgWAFIAAoeMC0KAAAMAAAAj5g");
	var mask_graphics_268 = new cjs.Graphics().p("EhOoAirIAAm7QAWAFAYgBQCWABBqjCQBrjBAAkSQAAkShrjBQhqjCiWABQgYgBgWAFIAAoeMC0JAAAMAAAAj5g");
	var mask_graphics_269 = new cjs.Graphics().p("EhOiAirIAAm7QAWAFAXgBQCWABBrjCQBrjBAAkSQAAkShrjBQhrjCiWABQgXgBgWAFIAAoeMC0IAAAMAAAAj5g");
	var mask_graphics_270 = new cjs.Graphics().p("EhOdAirIAAm7QAWAFAXgBQCXABBqjCQBrjBAAkSQAAkShrjBQhqjCiXABQgXgBgWAFIAAoeMC0HAAAMAAAAj5g");
	var mask_graphics_271 = new cjs.Graphics().p("EhOXAirIAAm7QAWAFAXgBQCWABBrjCQBqjBAAkSQAAkShqjBQhrjCiWABQgXgBgWAFIAAoeMC0FAAAMAAAAj5g");
	var mask_graphics_272 = new cjs.Graphics().p("EhOSAirIAAm7QAWAFAXgBQCXABBqjCQBrjBAAkSQAAkShrjBQhqjCiXABQgXgBgWAFIAAoeMC0FAAAMAAAAj5g");
	var mask_graphics_273 = new cjs.Graphics().p("EhOMAirIAAm7QAWAFAXgBQCWABBrjCQBqjBAAkSQAAkShqjBQhrjCiWABQgXgBgWAFIAAoeMC0DAAAMAAAAj5g");
	var mask_graphics_274 = new cjs.Graphics().p("EhOHAirIAAm7QAWAFAXgBQCXABBqjCQBrjBAAkSQAAkShrjBQhqjCiXABQgXgBgWAFIAAoeMC0CAAAMAAAAj5g");
	var mask_graphics_275 = new cjs.Graphics().p("EhOBAirIAAm7QAWAFAXgBQCWABBqjCQBrjBAAkSQAAkShrjBQhqjCiWABQgXgBgWAFIAAoeMC0BAAAMAAAAj5g");
	var mask_graphics_276 = new cjs.Graphics().p("EhN8AirIAAm7QAWAFAXgBQCXABBqjCQBrjBAAkSQAAkShrjBQhqjCiXABQgXgBgWAFIAAoeMC0AAAAMAAAAj5g");
	var mask_graphics_277 = new cjs.Graphics().p("EhN2AirIAAm7QAWAFAXgBQCWABBqjCQBrjBAAkSQAAkShrjBQhqjCiWABQgXgBgWAFIAAoeMCz+AAAMAAAAj5g");
	var mask_graphics_278 = new cjs.Graphics().p("EhNxAirIAAm7QAWAFAXgBQCXABBqjCQBrjBAAkSQAAkShrjBQhqjCiXABQgXgBgWAFIAAoeMCz+AAAMAAAAj5g");
	var mask_graphics_279 = new cjs.Graphics().p("EhNrAirIAAm7QAWAFAXgBQCWABBqjCQBrjBAAkSQAAkShrjBQhqjCiWABQgXgBgWAFIAAoeMCz8AAAMAAAAj5g");
	var mask_graphics_280 = new cjs.Graphics().p("EhNmAirIAAm7QAWAFAXgBQCXABBqjCQBqjBAAkSQAAkShqjBQhqjCiXABQgXgBgWAFIAAoeMCz7AAAMAAAAj5g");
	var mask_graphics_281 = new cjs.Graphics().p("EhNgAirIAAm7QAWAFAXgBQCWABBqjCQBrjBAAkSQAAkShrjBQhqjCiWABQgXgBgWAFIAAoeMCz6AAAMAAAAj5g");
	var mask_graphics_282 = new cjs.Graphics().p("EhNbAirIAAm7QAWAFAXgBQCWABBrjCQBqjBAAkSQAAkShqjBQhrjCiWABQgXgBgWAFIAAoeMCz5AAAMAAAAj5g");
	var mask_graphics_283 = new cjs.Graphics().p("EhNVAirIAAm7QAWAFAXgBQCWABBqjCQBrjBAAkSQAAkShrjBQhqjCiWABQgXgBgWAFIAAoeMCz3AAAMAAAAj5g");
	var mask_graphics_284 = new cjs.Graphics().p("EhNQAirIAAm7QAWAFAXgBQCWABBrjCQBqjBAAkSQAAkShqjBQhrjCiWABQgXgBgWAFIAAoeMCz3AAAMAAAAj5g");
	var mask_graphics_285 = new cjs.Graphics().p("EhNKAirIAAm7QAWAFAXgBQCWABBqjCQBrjBAAkSQAAkShrjBQhqjCiWABQgXgBgWAFIAAoeMCz1AAAMAAAAj5g");
	var mask_graphics_286 = new cjs.Graphics().p("EhNFAirIAAm7QAWAFAXgBQCWABBqjCQBrjBAAkSQAAkShrjBQhqjCiWABQgXgBgWAFIAAoeMCz0AAAMAAAAj5g");
	var mask_graphics_287 = new cjs.Graphics().p("EhM/AirIAAm7QAWAFAXgBQCWABBqjCQBrjBAAkSQAAkShrjBQhqjCiWABQgXgBgWAFIAAoeMCzzAAAMAAAAj5g");
	var mask_graphics_288 = new cjs.Graphics().p("EhM6AirIAAm7QAWAFAXgBQCWABBqjCQBrjBAAkSQAAkShrjBQhqjCiWABQgXgBgWAFIAAoeMCzyAAAMAAAAj5g");
	var mask_graphics_289 = new cjs.Graphics().p("EhM0AirIAAm7QAWAFAXgBQCWABBqjCQBqjBAAkSQAAkShqjBQhqjCiWABQgXgBgWAFIAAoeMCzwAAAMAAAAj5g");
	var mask_graphics_290 = new cjs.Graphics().p("EhMvAirIAAm7QAWAFAXgBQCWABBqjCQBrjBAAkSQAAkShrjBQhqjCiWABQgXgBgWAFIAAoeMCzwAAAMAAAAj5g");
	var mask_graphics_291 = new cjs.Graphics().p("EhMpAirIAAm7QAWAFAXgBQCWABBqjCQBqjBAAkSQAAkShqjBQhqjCiWABQgXgBgWAFIAAoeMCzuAAAMAAAAj5g");
	var mask_graphics_292 = new cjs.Graphics().p("EhMkAirIAAm7QAWAFAXgBQCWABBqjCQBrjBAAkSQAAkShrjBQhqjCiWABQgXgBgWAFIAAoeMCztAAAMAAAAj5g");
	var mask_graphics_293 = new cjs.Graphics().p("EhMeAirIAAm7QAWAFAXgBQCWABBqjCQBqjBAAkSQAAkShqjBQhqjCiWABQgXgBgWAFIAAoeMCzsAAAMAAAAj5g");
	var mask_graphics_294 = new cjs.Graphics().p("EhMZAirIAAm7QAWAFAXgBQCWABBqjCQBrjBAAkSQAAkShrjBQhqjCiWABQgXgBgWAFIAAoeMCzrAAAMAAAAj5g");
	var mask_graphics_295 = new cjs.Graphics().p("EhMUAirIAAm7QAWAFAYgBQCWABBqjCQBqjBAAkSQAAkShqjBQhqjCiWABQgYgBgWAFIAAoeMCzqAAAMAAAAj5g");
	var mask_graphics_296 = new cjs.Graphics().p("EhMOAirIAAm7QAWAFAXgBQCWABBqjCQBrjBAAkSQAAkShrjBQhqjCiWABQgXgBgWAFIAAoeMCzpAAAMAAAAj5g");
	var mask_graphics_297 = new cjs.Graphics().p("EhMJAirIAAm7QAWAFAXgBQCWABBqjCQBrjBAAkSQAAkShrjBQhqjCiWABQgXgBgWAFIAAoeMCzoAAAMAAAAj5g");
	var mask_graphics_298 = new cjs.Graphics().p("EhMDAirIAAm7QAWAFAXgBQCWABBqjCQBqjBAAkSQAAkShqjBQhqjCiWABQgXgBgWAFIAAoeMCzmAAAMAAAAj5g");
	var mask_graphics_299 = new cjs.Graphics().p("EhL+AirIAAm7QAWAFAXgBQCWABBqjCQBrjBAAkSQAAkShrjBQhqjCiWABQgXgBgWAFIAAoeMCzmAAAMAAAAj5g");
	var mask_graphics_300 = new cjs.Graphics().p("EhL4AirIAAm7QAWAFAXgBQCWABBqjCQBqjBAAkSQAAkShqjBQhqjCiWABQgXgBgWAFIAAoeMCzkAAAMAAAAj5g");
	var mask_graphics_301 = new cjs.Graphics().p("EhLzAirIAAm7QAWAFAXgBQCWABBqjCQBrjBAAkSQAAkShrjBQhqjCiWABQgXgBgWAFIAAoeMCzkAAAMAAAAj5g");
	var mask_graphics_302 = new cjs.Graphics().p("EhLtAirIAAm7QAWAFAXgBQCWABBqjCQBqjBAAkSQAAkShqjBQhqjCiWABQgXgBgWAFIAAoeMCziAAAMAAAAj5g");
	var mask_graphics_303 = new cjs.Graphics().p("EhLoAirIAAm7QAWAFAXgBQCWABBqjCQBrjBAAkSQAAkShrjBQhqjCiWABQgXgBgWAFIAAoeMCzhAAAMAAAAj5g");
	var mask_graphics_304 = new cjs.Graphics().p("EhLiAirIAAm7QAWAFAXgBQCWABBqjCQBqjBAAkSQAAkShqjBQhqjCiWABQgXgBgWAFIAAoeMCzgAAAMAAAAj5g");
	var mask_graphics_305 = new cjs.Graphics().p("EhLdAirIAAm7QAWAFAXgBQCWABBqjCQBrjBAAkSQAAkShrjBQhqjCiWABQgXgBgWAFIAAoeMCzfAAAMAAAAj5g");
	var mask_graphics_306 = new cjs.Graphics().p("EhLXAirIAAm7QAWAFAXgBQCWABBqjCQBqjBAAkSQAAkShqjBQhqjCiWABQgXgBgWAFIAAoeMCzdAAAMAAAAj5g");
	var mask_graphics_307 = new cjs.Graphics().p("EhLSAirIAAm7QAWAFAXgBQCWABBqjCQBqjBAAkSQAAkShqjBQhqjCiWABQgXgBgWAFIAAoeMCzdAAAMAAAAj5g");
	var mask_graphics_308 = new cjs.Graphics().p("EhLMAirIAAm7QAWAFAXgBQCWABBpjCQBrjBAAkSQAAkShrjBQhpjCiWABQgXgBgWAFIAAoeMCzbAAAMAAAAj5g");
	var mask_graphics_309 = new cjs.Graphics().p("EhLHAirIAAm7QAWAFAXgBQCWABBqjCQBqjBAAkSQAAkShqjBQhqjCiWABQgXgBgWAFIAAoeMCzaAAAMAAAAj5g");
	var mask_graphics_310 = new cjs.Graphics().p("EhLBAirIAAm7QAWAFAXgBQCWABBpjCQBrjBAAkSQAAkShrjBQhpjCiWABQgXgBgWAFIAAoeMCzZAAAMAAAAj5g");
	var mask_graphics_311 = new cjs.Graphics().p("EhK8AirIAAm7QAWAFAXgBQCWABBqjCQBqjBAAkSQAAkShqjBQhqjCiWABQgXgBgWAFIAAoeMCzYAAAMAAAAj5g");
	var mask_graphics_312 = new cjs.Graphics().p("EhK2AirIAAm7QAWAFAXgBQCVABBqjCQBrjBAAkSQAAkShrjBQhqjCiVABQgXgBgWAFIAAoeMCzWAAAMAAAAj5g");
	var mask_graphics_313 = new cjs.Graphics().p("EhKxAirIAAm7QAWAFAXgBQCWABBqjCQBqjBAAkSQAAkShqjBQhqjCiWABQgXgBgWAFIAAoeMCzWAAAMAAAAj5g");
	var mask_graphics_314 = new cjs.Graphics().p("EhKrAirIAAm7QAWAFAXgBQCVABBqjCQBrjBAAkSQAAkShrjBQhqjCiVABQgXgBgWAFIAAoeMCzUAAAMAAAAj5g");
	var mask_graphics_315 = new cjs.Graphics().p("EhKmAirIAAm7QAWAFAXgBQCWABBqjCQBqjBAAkSQAAkShqjBQhqjCiWABQgXgBgWAFIAAoeMCzTAAAMAAAAj5g");
	var mask_graphics_316 = new cjs.Graphics().p("EhKgAirIAAm7QAWAFAXgBQCVABBqjCQBrjBAAkSQAAkShrjBQhqjCiVABQgXgBgWAFIAAoeMCzSAAAMAAAAj5g");
	var mask_graphics_317 = new cjs.Graphics().p("EhKbAirIAAm7QAWAFAXgBQCWABBqjCQBqjBAAkSQAAkShqjBQhqjCiWABQgXgBgWAFIAAoeMCzRAAAMAAAAj5g");
	var mask_graphics_318 = new cjs.Graphics().p("EhKVAirIAAm7QAWAFAXgBQCVABBqjCQBqjBAAkSQAAkShqjBQhqjCiVABQgXgBgWAFIAAoeMCzPAAAMAAAAj5g");
	var mask_graphics_319 = new cjs.Graphics().p("EhKQAirIAAm7QAWAFAXgBQCWABBqjCQBqjBAAkSQAAkShqjBQhqjCiWABQgXgBgWAFIAAoeMCzPAAAMAAAAj5g");
	var mask_graphics_320 = new cjs.Graphics().p("EhKKAirIAAm7QAWAFAXgBQCVABBqjCQBqjBAAkSQAAkShqjBQhqjCiVABQgXgBgWAFIAAoeMCzNAAAMAAAAj5g");
	var mask_graphics_321 = new cjs.Graphics().p("EhKFAirIAAm7QAWAFAXgBQCWABBpjCQBrjBAAkSQAAkShrjBQhpjCiWABQgXgBgWAFIAAoeMCzMAAAMAAAAj5g");
	var mask_graphics_322 = new cjs.Graphics().p("EhJ/AirIAAm7QAWAFAXgBQCVABBqjCQBqjBAAkSQAAkShqjBQhqjCiVABQgXgBgWAFIAAoeMCzLAAAMAAAAj5g");
	var mask_graphics_323 = new cjs.Graphics().p("EhJ6AirIAAm7QAWAFAXgBQCWABBpjCQBrjBAAkSQAAkShrjBQhpjCiWABQgXgBgWAFIAAoeMCzKAAAMAAAAj5g");
	var mask_graphics_324 = new cjs.Graphics().p("EhJ0AirIAAm7QAWAFAWgBQCWABBqjCQBqjBAAkSQAAkShqjBQhqjCiWABQgWgBgWAFIAAoeMCzIAAAMAAAAj5g");
	var mask_graphics_325 = new cjs.Graphics().p("EhJvAirIAAm7QAWAFAXgBQCWABBpjCQBrjBAAkSQAAkShrjBQhpjCiWABQgXgBgWAFIAAoeMCzIAAAMAAAAj5g");
	var mask_graphics_326 = new cjs.Graphics().p("EhJpAirIAAm7QAWAFAWgBQCWABBqjCQBqjBAAkSQAAkShqjBQhqjCiWABQgWgBgWAFIAAoeMCzGAAAMAAAAj5g");
	var mask_graphics_327 = new cjs.Graphics().p("EhJkAirIAAm7QAWAFAXgBQCVABBqjCQBqjBAAkSQAAkShqjBQhqjCiVABQgXgBgWAFIAAoeMCzFAAAMAAAAj5g");
	var mask_graphics_328 = new cjs.Graphics().p("EhJeAirIAAm7QAVAFAXgBQCWABBqjCQBqjBAAkSQAAkShqjBQhqjCiWABQgXgBgVAFIAAoeMCzEAAAMAAAAj5g");
	var mask_graphics_329 = new cjs.Graphics().p("EhJZAirIAAm7QAWAFAXgBQCVABBqjCQBqjBAAkSQAAkShqjBQhqjCiVABQgXgBgWAFIAAoeMCzDAAAMAAAAj5g");
	var mask_graphics_330 = new cjs.Graphics().p("EhJUAirIAAm7QAWAFAXgBQCWABBqjCQBqjBAAkSQAAkShqjBQhqjCiWABQgXgBgWAFIAAoeMCzCAAAMAAAAj5g");
	var mask_graphics_331 = new cjs.Graphics().p("EhJOAirIAAm7QAWAFAXgBQCVABBqjCQBqjBAAkSQAAkShqjBQhqjCiVABQgXgBgWAFIAAoeMCzBAAAMAAAAj5g");
	var mask_graphics_332 = new cjs.Graphics().p("EhJJAirIAAm7QAWAFAXgBQCWABBpjCQBrjBAAkSQAAkShrjBQhpjCiWABQgXgBgWAFIAAoeMCzAAAAMAAAAj5g");
	var mask_graphics_333 = new cjs.Graphics().p("EhJDAirIAAm7QAWAFAXgBQCVABBqjCQBqjBAAkSQAAkShqjBQhqjCiVABQgXgBgWAFIAAoeMCy+AAAMAAAAj5g");
	var mask_graphics_334 = new cjs.Graphics().p("EhI+AirIAAm7QAWAFAXgBQCWABBpjCQBrjBAAkSQAAkShrjBQhpjCiWABQgXgBgWAFIAAoeMCy+AAAMAAAAj5g");
	var mask_graphics_335 = new cjs.Graphics().p("EhI4AirIAAm7QAWAFAXgBQCVABBqjCQBqjBAAkSQAAkShqjBQhqjCiVABQgXgBgWAFIAAoeMCy8AAAMAAAAj5g");
	var mask_graphics_336 = new cjs.Graphics().p("EhIzAirIAAm7QAWAFAXgBQCWABBpjCQBqjBAAkSQAAkShqjBQhpjCiWABQgXgBgWAFIAAoeMCy7AAAMAAAAj5g");
	var mask_graphics_337 = new cjs.Graphics().p("EhItAirIAAm7QAWAFAXgBQCVABBqjCQBqjBAAkSQAAkShqjBQhqjCiVABQgXgBgWAFIAAoeMCy6AAAMAAAAj5g");
	var mask_graphics_338 = new cjs.Graphics().p("EhIoAirIAAm7QAWAFAXgBQCWABBpjCQBqjBAAkSQAAkShqjBQhpjCiWABQgXgBgWAFIAAoeMCy5AAAMAAAAj5g");
	var mask_graphics_339 = new cjs.Graphics().p("EhIiAirIAAm7QAWAFAXgBQCVABBqjCQBqjBAAkSQAAkShqjBQhqjCiVABQgXgBgWAFIAAoeMCy4AAAMAAAAj5g");
	var mask_graphics_340 = new cjs.Graphics().p("EhIdAirIAAm7QAWAFAXgBQCWABBpjCQBqjBAAkSQAAkShqjBQhpjCiWABQgXgBgWAFIAAoeMCy3AAAMAAAAj5g");
	var mask_graphics_341 = new cjs.Graphics().p("EhIXAirIAAm7QAWAFAXgBQCVABBqjCQBqjBAAkSQAAkShqjBQhqjCiVABQgXgBgWAFIAAoeMCy1AAAMAAAAj5g");
	var mask_graphics_342 = new cjs.Graphics().p("EhISAirIAAm7QAWAFAXgBQCVABBqjCQBqjBAAkSQAAkShqjBQhqjCiVABQgXgBgWAFIAAoeMCy1AAAMAAAAj5g");
	var mask_graphics_343 = new cjs.Graphics().p("EhIMAirIAAm7QAWAFAXgBQCVABBpjCQBrjBAAkSQAAkShrjBQhpjCiVABQgXgBgWAFIAAoeMCyzAAAMAAAAj5g");
	var mask_graphics_344 = new cjs.Graphics().p("EhIHAirIAAm7QAWAFAXgBQCVABBqjCQBqjBAAkSQAAkShqjBQhqjCiVABQgXgBgWAFIAAoeMCyyAAAMAAAAj5g");
	var mask_graphics_345 = new cjs.Graphics().p("EhIBAirIAAm7QAWAFAXgBQCVABBpjCQBqjBAAkSQAAkShqjBQhpjCiVABQgXgBgWAFIAAoeMCyxAAAMAAAAj5g");
	var mask_graphics_346 = new cjs.Graphics().p("EhH8AirIAAm7QAWAFAXgBQCVABBqjCQBqjBAAkSQAAkShqjBQhqjCiVABQgXgBgWAFIAAoeMCywAAAMAAAAj5g");
	var mask_graphics_347 = new cjs.Graphics().p("EhH2AirIAAm7QAWAFAXgBQCVABBpjCQBqjBAAkSQAAkShqjBQhpjCiVABQgXgBgWAFIAAoeMCyuAAAMAAAAj5g");
	var mask_graphics_348 = new cjs.Graphics().p("EhHxAirIAAm7QAWAFAXgBQCVABBqjCQBqjBAAkSQAAkShqjBQhqjCiVABQgXgBgWAFIAAoeMCyuAAAMAAAAj5g");
	var mask_graphics_349 = new cjs.Graphics().p("EhHrAirIAAm7QAWAFAXgBQCVABBpjCQBqjBAAkSQAAkShqjBQhpjCiVABQgXgBgWAFIAAoeMCysAAAMAAAAj5g");
	var mask_graphics_350 = new cjs.Graphics().p("EhHmAirIAAm7QAWAFAXgBQCVABBqjCQBqjBAAkSQAAkShqjBQhqjCiVABQgXgBgWAFIAAoeMCyrAAAMAAAAj5g");
	var mask_graphics_351 = new cjs.Graphics().p("EhHgAirIAAm7QAWAFAXgBQCVABBpjCQBqjBAAkSQAAkShqjBQhpjCiVABQgXgBgWAFIAAoeMCyqAAAMAAAAj5g");
	var mask_graphics_352 = new cjs.Graphics().p("EhHbAirIAAm7QAWAFAXgBQCVABBqjCQBqjBAAkSQAAkShqjBQhqjCiVABQgXgBgWAFIAAoeMCypAAAMAAAAj5g");
	var mask_graphics_353 = new cjs.Graphics().p("EhHVAirIAAm7QAWAFAWgBQCWABBpjCQBqjBAAkSQAAkShqjBQhpjCiWABQgWgBgWAFIAAoeMCynAAAMAAAAj5g");
	var mask_graphics_354 = new cjs.Graphics().p("EhHQAirIAAm7QAWAFAXgBQCVABBpjCQBqjBAAkSQAAkShqjBQhpjCiVABQgXgBgWAFIAAoeMCynAAAMAAAAj5g");
	var mask_graphics_355 = new cjs.Graphics().p("EhHKAirIAAm7QAWAFAWgBQCWABBpjCQBqjBAAkSQAAkShqjBQhpjCiWABQgWgBgWAFIAAoeMCylAAAMAAAAj5g");
	var mask_graphics_356 = new cjs.Graphics().p("EhHFAirIAAm7QAWAFAXgBQCVABBpjCQBqjBAAkSQAAkShqjBQhpjCiVABQgXgBgWAFIAAoeMCykAAAMAAAAj5g");
	var mask_graphics_357 = new cjs.Graphics().p("EhG/AirIAAm7QAWAFAWgBQCVABBqjCQBqjBAAkSQAAkShqjBQhqjCiVABQgWgBgWAFIAAoeMCyjAAAMAAAAj5g");
	var mask_graphics_358 = new cjs.Graphics().p("EhG6AirIAAm7QAWAFAXgBQCVABBpjCQBqjBAAkSQAAkShqjBQhpjCiVABQgXgBgWAFIAAoeMCyiAAAMAAAAj5g");
	var mask_graphics_359 = new cjs.Graphics().p("EhG0AirIAAm7QAVAFAXgBQCVABBqjCQBqjBAAkSQAAkShqjBQhqjCiVABQgXgBgVAFIAAoeMCygAAAMAAAAj5g");
	var mask_graphics_360 = new cjs.Graphics().p("EhGvAirIAAm7QAWAFAXgBQCVABBpjCQBqjBAAkSQAAkShqjBQhpjCiVABQgXgBgWAFIAAoeMCygAAAMAAAAj5g");
	var mask_graphics_361 = new cjs.Graphics().p("EhGpAirIAAm7QAVAFAXgBQCVABBqjCQBqjBAAkSQAAkShqjBQhqjCiVABQgXgBgVAFIAAoeMCyeAAAMAAAAj5g");
	var mask_graphics_362 = new cjs.Graphics().p("EhGkAirIAAm7QAWAFAXgBQCVABBpjCQBqjBAAkSQAAkShqjBQhpjCiVABQgXgBgWAFIAAoeMCydAAAMAAAAj5g");
	var mask_graphics_363 = new cjs.Graphics().p("EhGeAirIAAm7QAVAFAXgBQCVABBqjCQBpjBAAkSQAAkShpjBQhqjCiVABQgXgBgVAFIAAoeMCycAAAMAAAAj5g");
	var mask_graphics_364 = new cjs.Graphics().p("EhGZAirIAAm7QAWAFAXgBQCVABBpjCQBqjBAAkSQAAkShqjBQhpjCiVABQgXgBgWAFIAAoeMCybAAAMAAAAj5g");
	var mask_graphics_365 = new cjs.Graphics().p("EhGTAirIAAm7QAVAFAXgBQCVABBqjCQBpjBAAkSQAAkShpjBQhqjCiVABQgXgBgVAFIAAoeMCyZAAAMAAAAj5g");
	var mask_graphics_366 = new cjs.Graphics().p("EhGOAirIAAm7QAWAFAXgBQCVABBpjCQBqjBAAkSQAAkShqjBQhpjCiVABQgXgBgWAFIAAoeMCyZAAAMAAAAj5g");
	var mask_graphics_367 = new cjs.Graphics().p("EhGJAirIAAm7QAWAFAXgBQCVABBpjCQBqjBAAkSQAAkShqjBQhpjCiVABQgXgBgWAFIAAoeMCyYAAAMAAAAj5g");
	var mask_graphics_368 = new cjs.Graphics().p("EhGDAirIAAm7QAWAFAXgBQCVABBpjCQBqjBAAkSQAAkShqjBQhpjCiVABQgXgBgWAFIAAoeMCyWAAAMAAAAj5g");
	var mask_graphics_369 = new cjs.Graphics().p("EhF+AirIAAm7QAWAFAXgBQCVABBpjCQBqjBAAkSQAAkShqjBQhpjCiVABQgXgBgWAFIAAoeMCyWAAAMAAAAj5g");
	var mask_graphics_370 = new cjs.Graphics().p("EhF4AirIAAm7QAWAFAXgBQCVABBpjCQBqjBAAkSQAAkShqjBQhpjCiVABQgXgBgWAFIAAoeMCyUAAAMAAAAj5g");
	var mask_graphics_371 = new cjs.Graphics().p("EhFzAirIAAm7QAWAFAXgBQCVABBpjCQBqjBAAkSQAAkShqjBQhpjCiVABQgXgBgWAFIAAoeMCyTAAAMAAAAj5g");
	var mask_graphics_372 = new cjs.Graphics().p("EhFtAirIAAm7QAWAFAXgBQCUABBqjCQBpjBAAkSQAAkShpjBQhqjCiUABQgXgBgWAFIAAoeMCySAAAMAAAAj5g");
	var mask_graphics_373 = new cjs.Graphics().p("EhFoAirIAAm7QAWAFAXgBQCVABBpjCQBqjBAAkSQAAkShqjBQhpjCiVABQgXgBgWAFIAAoeMCyRAAAMAAAAj5g");
	var mask_graphics_374 = new cjs.Graphics().p("EhFiAirIAAm7QAWAFAXgBQCUABBqjCQBpjBAAkSQAAkShpjBQhqjCiUABQgXgBgWAFIAAoeMCyPAAAMAAAAj5g");
	var mask_graphics_375 = new cjs.Graphics().p("EhFdAirIAAm7QAWAFAXgBQCVABBpjCQBqjBAAkSQAAkShqjBQhpjCiVABQgXgBgWAFIAAoeMCyPAAAMAAAAj5g");
	var mask_graphics_376 = new cjs.Graphics().p("EhFXAirIAAm7QAWAFAXgBQCUABBqjCQBpjBAAkSQAAkShpjBQhqjCiUABQgXgBgWAFIAAoeMCyNAAAMAAAAj5g");
	var mask_graphics_377 = new cjs.Graphics().p("EhFSAirIAAm7QAWAFAXgBQCVABBpjCQBqjBAAkSQAAkShqjBQhpjCiVABQgXgBgWAFIAAoeMCyNAAAMAAAAj5g");
	var mask_graphics_378 = new cjs.Graphics().p("EhFMAirIAAm7QAWAFAXgBQCUABBpjCQBqjBAAkSQAAkShqjBQhpjCiUABQgXgBgWAFIAAoeMCyLAAAMAAAAj5g");
	var mask_graphics_379 = new cjs.Graphics().p("EhFHAirIAAm7QAWAFAXgBQCVABBpjCQBqjBAAkSQAAkShqjBQhpjCiVABQgXgBgWAFIAAoeMCyKAAAMAAAAj5g");
	var mask_graphics_380 = new cjs.Graphics().p("EhFBAirIAAm7QAWAFAWgBQCVABBpjCQBqjBAAkSQAAkShqjBQhpjCiVABQgWgBgWAFIAAoeMCyJAAAMAAAAj5g");
	var mask_graphics_381 = new cjs.Graphics().p("EhE8AirIAAm7QAWAFAXgBQCVABBpjCQBpjBAAkSQAAkShpjBQhpjCiVABQgXgBgWAFIAAoeMCyIAAAMAAAAj5g");
	var mask_graphics_382 = new cjs.Graphics().p("EhE2AirIAAm7QAWAFAWgBQCVABBpjCQBqjBAAkSQAAkShqjBQhpjCiVABQgWgBgWAFIAAoeMCyGAAAMAAAAj5g");
	var mask_graphics_383 = new cjs.Graphics().p("EhExAirIAAm7QAWAFAXgBQCVABBpjCQBpjBAAkSQAAkShpjBQhpjCiVABQgXgBgWAFIAAoeMCyGAAAMAAAAj5g");
	var mask_graphics_384 = new cjs.Graphics().p("EhErAirIAAm7QAWAFAWgBQCVABBpjCQBqjBAAkSQAAkShqjBQhpjCiVABQgWgBgWAFIAAoeMCyEAAAMAAAAj5g");
	var mask_graphics_385 = new cjs.Graphics().p("EhEmAirIAAm7QAWAFAXgBQCVABBpjCQBpjBAAkSQAAkShpjBQhpjCiVABQgXgBgWAFIAAoeMCyDAAAMAAAAj5g");
	var mask_graphics_386 = new cjs.Graphics().p("EhEgAirIAAm7QAWAFAWgBQCVABBpjCQBqjBAAkSQAAkShqjBQhpjCiVABQgWgBgWAFIAAoeMCyCAAAMAAAAj5g");
	var mask_graphics_387 = new cjs.Graphics().p("EhEbAirIAAm7QAWAFAXgBQCUABBqjCQBpjBAAkSQAAkShpjBQhqjCiUABQgXgBgWAFIAAoeMCyBAAAMAAAAj5g");
	var mask_graphics_388 = new cjs.Graphics().p("EhEVAirIAAm7QAWAFAWgBQCVABBpjCQBqjBAAkSQAAkShqjBQhpjCiVABQgWgBgWAFIAAoeMCx/AAAMAAAAj5g");
	var mask_graphics_389 = new cjs.Graphics().p("EhEQAirIAAm7QAWAFAXgBQCUABBpjCQBqjBAAkSQAAkShqjBQhpjCiUABQgXgBgWAFIAAoeMCx/AAAMAAAAj5g");
	var mask_graphics_390 = new cjs.Graphics().p("EhEKAirIAAm7QAVAFAXgBQCVABBpjCQBqjBAAkSQAAkShqjBQhpjCiVABQgXgBgVAFIAAoeMCx9AAAMAAAAj5g");
	var mask_graphics_391 = new cjs.Graphics().p("EhEFAirIAAm7QAWAFAXgBQCUABBpjCQBqjBAAkSQAAkShqjBQhpjCiUABQgXgBgWAFIAAoeMCx8AAAMAAAAj5g");
	var mask_graphics_392 = new cjs.Graphics().p("EhD/AirIAAm7QAVAFAXgBQCVABBpjCQBpjBAAkSQAAkShpjBQhpjCiVABQgXgBgVAFIAAoeMCx7AAAMAAAAj5g");
	var mask_graphics_393 = new cjs.Graphics().p("EhD6AirIAAm7QAWAFAXgBQCUABBpjCQBqjBAAkSQAAkShqjBQhpjCiUABQgXgBgWAFIAAoeMCx6AAAMAAAAj5g");
	var mask_graphics_394 = new cjs.Graphics().p("EhD0AirIAAm7QAVAFAXgBQCVABBpjCQBpjBAAkSQAAkShpjBQhpjCiVABQgXgBgVAFIAAoeMCx4AAAMAAAAj5g");
	var mask_graphics_395 = new cjs.Graphics().p("EhDvAirIAAm7QAWAFAXgBQCUABBpjCQBqjBAAkSQAAkShqjBQhpjCiUABQgXgBgWAFIAAoeMCx4AAAMAAAAj5g");
	var mask_graphics_396 = new cjs.Graphics().p("EhDpAirIAAm7QAVAFAXgBQCVABBpjCQBpjBAAkSQAAkShpjBQhpjCiVABQgXgBgVAFIAAoeMCx2AAAMAAAAj5g");
	var mask_graphics_397 = new cjs.Graphics().p("EhDkAirIAAm7QAWAFAXgBQCUABBpjCQBqjBAAkSQAAkShqjBQhpjCiUABQgXgBgWAFIAAoeMCx1AAAMAAAAj5g");
	var mask_graphics_398 = new cjs.Graphics().p("EhDeAirIAAm7QAVAFAXgBQCVABBpjCQBpjBAAkSQAAkShpjBQhpjCiVABQgXgBgVAFIAAoeMCx0AAAMAAAAj5g");
	var mask_graphics_399 = new cjs.Graphics().p("EhDZAirIAAm7QAWAFAXgBQCUABBpjCQBqjBAAkSQAAkShqjBQhpjCiUABQgXgBgWAFIAAoeMCxzAAAMAAAAj5g");
	var mask_graphics_400 = new cjs.Graphics().p("EhDTAirIAAm7QAVAFAXgBQCVABBojCQBqjBAAkSQAAkShqjBQhojCiVABQgXgBgVAFIAAoeMCxxAAAMAAAAj5g");
	var mask_graphics_401 = new cjs.Graphics().p("EhDOAirIAAm7QAWAFAXgBQCUABBpjCQBpjBAAkSQAAkShpjBQhpjCiUABQgXgBgWAFIAAoeMCxxAAAMAAAAj5g");
	var mask_graphics_402 = new cjs.Graphics().p("EhDIAirIAAm7QAVAFAXgBQCUABBpjCQBqjBAAkSQAAkShqjBQhpjCiUABQgXgBgVAFIAAoeMCxvAAAMAAAAj5g");
	var mask_graphics_403 = new cjs.Graphics().p("EhDDAirIAAm7QAWAFAXgBQCUABBpjCQBpjBAAkSQAAkShpjBQhpjCiUABQgXgBgWAFIAAoeMCxuAAAMAAAAj5g");
	var mask_graphics_404 = new cjs.Graphics().p("EhC+AirIAAm7QAWAFAXgBQCUABBpjCQBqjBAAkSQAAkShqjBQhpjCiUABQgXgBgWAFIAAoeMCxuAAAMAAAAj5g");
	var mask_graphics_405 = new cjs.Graphics().p("EhC4AirIAAm7QAWAFAXgBQCUABBpjCQBpjBAAkSQAAkShpjBQhpjCiUABQgXgBgWAFIAAoeMCxsAAAMAAAAj5g");
	var mask_graphics_406 = new cjs.Graphics().p("EhCzAirIAAm7QAWAFAXgBQCUABBpjCQBqjBAAkSQAAkShqjBQhpjCiUABQgXgBgWAFIAAoeMCxrAAAMAAAAj5g");
	var mask_graphics_407 = new cjs.Graphics().p("EhCtAirIAAm7QAWAFAXgBQCUABBpjCQBpjBAAkSQAAkShpjBQhpjCiUABQgXgBgWAFIAAoeMCxqAAAMAAAAj5g");
	var mask_graphics_408 = new cjs.Graphics().p("EhCoAirIAAm7QAWAFAXgBQCUABBpjCQBqjBAAkSQAAkShqjBQhpjCiUABQgXgBgWAFIAAoeMCxpAAAMAAAAj5g");
	var mask_graphics_409 = new cjs.Graphics().p("EhCiAirIAAm7QAWAFAWgBQCVABBpjCQBpjBAAkSQAAkShpjBQhpjCiVABQgWgBgWAFIAAoeMCxnAAAMAAAAj5g");
	var mask_graphics_410 = new cjs.Graphics().p("EhCdAirIAAm7QAWAFAXgBQCUABBpjCQBpjBAAkSQAAkShpjBQhpjCiUABQgXgBgWAFIAAoeMCxnAAAMAAAAj5g");
	var mask_graphics_411 = new cjs.Graphics().p("EhCXAirIAAm7QAWAFAWgBQCVABBpjCQBpjBAAkSQAAkShpjBQhpjCiVABQgWgBgWAFIAAoeMCxlAAAMAAAAj5g");
	var mask_graphics_412 = new cjs.Graphics().p("EhCSAirIAAm7QAWAFAXgBQCUABBpjCQBpjBAAkSQAAkShpjBQhpjCiUABQgXgBgWAFIAAoeMCxkAAAMAAAAj5g");
	var mask_graphics_413 = new cjs.Graphics().p("EhCMAirIAAm7QAWAFAWgBQCVABBojCQBqjBAAkSQAAkShqjBQhojCiVABQgWgBgWAFIAAoeMCxjAAAMAAAAj5g");
	var mask_graphics_414 = new cjs.Graphics().p("EhCHAirIAAm7QAWAFAXgBQCUABBpjCQBpjBAAkSQAAkShpjBQhpjCiUABQgXgBgWAFIAAoeMCxiAAAMAAAAj5g");
	var mask_graphics_415 = new cjs.Graphics().p("EhCBAirIAAm7QAWAFAWgBQCVABBojCQBqjBAAkSQAAkShqjBQhojCiVABQgWgBgWAFIAAoeMCxhAAAMAAAAj5g");
	var mask_graphics_416 = new cjs.Graphics().p("EhB8AirIAAm7QAWAFAXgBQCUABBpjCQBpjBAAkSQAAkShpjBQhpjCiUABQgXgBgWAFIAAoeMCxgAAAMAAAAj5g");
	var mask_graphics_417 = new cjs.Graphics().p("EhB2AirIAAm7QAWAFAWgBQCVABBojCQBqjBAAkSQAAkShqjBQhojCiVABQgWgBgWAFIAAoeMCxeAAAMAAAAj5g");
	var mask_graphics_418 = new cjs.Graphics().p("EhBxAirIAAm7QAWAFAXgBQCUABBpjCQBpjBAAkSQAAkShpjBQhpjCiUABQgXgBgWAFIAAoeMCxeAAAMAAAAj5g");
	var mask_graphics_419 = new cjs.Graphics().p("EhBrAirIAAm7QAWAFAWgBQCUABBpjCQBpjBAAkSQAAkShpjBQhpjCiUABQgWgBgWAFIAAoeMCxcAAAMAAAAj5g");
	var mask_graphics_420 = new cjs.Graphics().p("EhBmAirIAAm7QAWAFAXgBQCUABBpjCQBpjBAAkSQAAkShpjBQhpjCiUABQgXgBgWAFIAAoeMCxbAAAMAAAAj5g");
	var mask_graphics_421 = new cjs.Graphics().p("EhBgAirIAAm7QAWAFAWgBQCUABBpjCQBpjBAAkSQAAkShpjBQhpjCiUABQgWgBgWAFIAAoeMCxaAAAMAAAAj5g");
	var mask_graphics_422 = new cjs.Graphics().p("EhBbAirIAAm7QAWAFAXgBQCUABBpjCQBpjBAAkSQAAkShpjBQhpjCiUABQgXgBgWAFIAAoeMCxZAAAMAAAAj5g");
	var mask_graphics_423 = new cjs.Graphics().p("EhBVAirIAAm7QAVAFAXgBQCUABBpjCQBpjBAAkSQAAkShpjBQhpjCiUABQgXgBgVAFIAAoeMCxXAAAMAAAAj5g");
	var mask_graphics_424 = new cjs.Graphics().p("EhBQAirIAAm7QAWAFAXgBQCUABBojCQBqjBAAkSQAAkShqjBQhojCiUABQgXgBgWAFIAAoeMCxXAAAMAAAAj5g");
	var mask_graphics_425 = new cjs.Graphics().p("EhBKAirIAAm7QAVAFAXgBQCUABBpjCQBpjBAAkSQAAkShpjBQhpjCiUABQgXgBgVAFIAAoeMCxVAAAMAAAAj5g");
	var mask_graphics_426 = new cjs.Graphics().p("EhBFAirIAAm7QAWAFAXgBQCUABBojCQBqjBAAkSQAAkShqjBQhojCiUABQgXgBgWAFIAAoeMCxUAAAMAAAAj5g");
	var mask_graphics_427 = new cjs.Graphics().p("EhA/AirIAAm7QAVAFAXgBQCUABBpjCQBpjBAAkSQAAkShpjBQhpjCiUABQgXgBgVAFIAAoeMCxTAAAMAAAAj5g");
	var mask_graphics_428 = new cjs.Graphics().p("EhA6AirIAAm7QAWAFAXgBQCUABBojCQBpjBAAkSQAAkShpjBQhojCiUABQgXgBgWAFIAAoeMCxSAAAMAAAAj5g");
	var mask_graphics_429 = new cjs.Graphics().p("EhA0AirIAAm7QAVAFAXgBQCUABBpjCQBpjBAAkSQAAkShpjBQhpjCiUABQgXgBgVAFIAAoeMCxQAAAMAAAAj5g");
	var mask_graphics_430 = new cjs.Graphics().p("EhAvAirIAAm7QAWAFAXgBQCUABBojCQBpjBAAkSQAAkShpjBQhojCiUABQgXgBgWAFIAAoeMCxQAAAMAAAAj5g");
	var mask_graphics_431 = new cjs.Graphics().p("EhApAirIAAm7QAVAFAXgBQCUABBpjCQBpjBAAkSQAAkShpjBQhpjCiUABQgXgBgVAFIAAoeMCxOAAAMAAAAj5g");
	var mask_graphics_432 = new cjs.Graphics().p("EhAkAirIAAm7QAWAFAXgBQCUABBojCQBpjBAAkSQAAkShpjBQhojCiUABQgXgBgWAFIAAoeMCxNAAAMAAAAj5g");
	var mask_graphics_433 = new cjs.Graphics().p("EhAeAirIAAm7QAVAFAXgBQCUABBpjCQBpjBAAkSQAAkShpjBQhpjCiUABQgXgBgVAFIAAoeMCxMAAAMAAAAj5g");
	var mask_graphics_434 = new cjs.Graphics().p("EhAZAirIAAm7QAWAFAXgBQCTABBpjCQBpjBAAkSQAAkShpjBQhpjCiTABQgXgBgWAFIAAoeMCxLAAAMAAAAj5g");
	var mask_graphics_435 = new cjs.Graphics().p("EhATAirIAAm7QAVAFAXgBQCUABBojCQBqjBAAkSQAAkShqjBQhojCiUABQgXgBgVAFIAAoeMCxJAAAMAAAAj5g");
	var mask_graphics_436 = new cjs.Graphics().p("EhAOAirIAAm7QAWAFAWgBQCUABBpjCQBpjBAAkSQAAkShpjBQhpjCiUABQgWgBgWAFIAAoeMCxJAAAMAAAAj5g");
	var mask_graphics_437 = new cjs.Graphics().p("EhAIAirIAAm7QAVAFAXgBQCUABBojCQBpjBAAkSQAAkShpjBQhojCiUABQgXgBgVAFIAAoeMCxHAAAMAAAAj5g");
	var mask_graphics_438 = new cjs.Graphics().p("EhADAirIAAm7QAWAFAWgBQCUABBpjCQBpjBAAkSQAAkShpjBQhpjCiUABQgWgBgWAFIAAoeMCxGAAAMAAAAj5g");
	var mask_graphics_439 = new cjs.Graphics().p("Eg/9AirIAAm7QAVAFAXgBQCUABBojCQBpjBAAkSQAAkShpjBQhojCiUABQgXgBgVAFIAAoeMCxFAAAMAAAAj5g");
	var mask_graphics_440 = new cjs.Graphics().p("Eg/4AirIAAm7QAWAFAWgBQCUABBpjCQBpjBAAkSQAAkShpjBQhpjCiUABQgWgBgWAFIAAoeMCxEAAAMAAAAj5g");
	var mask_graphics_441 = new cjs.Graphics().p("Eg/zAirIAAm7QAWAFAXgBQCUABBojCQBpjBAAkSQAAkShpjBQhojCiUABQgXgBgWAFIAAoeMCxDAAAMAAAAj5g");
	var mask_graphics_442 = new cjs.Graphics().p("Eg/tAirIAAm7QAWAFAWgBQCUABBpjCQBpjBAAkSQAAkShpjBQhpjCiUABQgWgBgWAFIAAoeMCxCAAAMAAAAj5g");
	var mask_graphics_443 = new cjs.Graphics().p("Eg/oAirIAAm7QAWAFAXgBQCUABBojCQBpjBAAkSQAAkShpjBQhojCiUABQgXgBgWAFIAAoeMCxBAAAMAAAAj5g");
	var mask_graphics_444 = new cjs.Graphics().p("Eg/iAirIAAm7QAWAFAWgBQCUABBpjCQBpjBAAkSQAAkShpjBQhpjCiUABQgWgBgWAFIAAoeMCw/AAAMAAAAj5g");
	var mask_graphics_445 = new cjs.Graphics().p("Eg/dAirIAAm7QAWAFAXgBQCUABBojCQBpjBAAkSQAAkShpjBQhojCiUABQgXgBgWAFIAAoeMCw/AAAMAAAAj5g");
	var mask_graphics_446 = new cjs.Graphics().p("Eg/XAirIAAm7QAWAFAWgBQCUABBojCQBpjBAAkSQAAkShpjBQhojCiUABQgWgBgWAFIAAoeMCw9AAAMAAAAj5g");
	var mask_graphics_447 = new cjs.Graphics().p("Eg/SAirIAAm7QAWAFAXgBQCUABBojCQBpjBAAkSQAAkShpjBQhojCiUABQgXgBgWAFIAAoeMCw8AAAMAAAAj5g");
	var mask_graphics_448 = new cjs.Graphics().p("Eg/MAirIAAm7QAWAFAWgBQCUABBojCQBpjBAAkSQAAkShpjBQhojCiUABQgWgBgWAFIAAoeMCw7AAAMAAAAj5g");
	var mask_graphics_449 = new cjs.Graphics().p("Eg/HAirIAAm7QAWAFAXgBQCTABBpjCQBpjBAAkSQAAkShpjBQhpjCiTABQgXgBgWAFIAAoeMCw6AAAMAAAAj5g");
	var mask_graphics_450 = new cjs.Graphics().p("Eg/BAirIAAm7QAWAFAWgBQCUABBojCQBpjBAAkSQAAkShpjBQhojCiUABQgWgBgWAFIAAoeMCw4AAAMAAAAj5g");
	var mask_graphics_451 = new cjs.Graphics().p("Eg+8AirIAAm7QAWAFAXgBQCTABBpjCQBpjBAAkSQAAkShpjBQhpjCiTABQgXgBgWAFIAAoeMCw4AAAMAAAAj5g");
	var mask_graphics_452 = new cjs.Graphics().p("Eg+2AirIAAm7QAWAFAWgBQCUABBojCQBpjBAAkSQAAkShpjBQhojCiUABQgWgBgWAFIAAoeMCw2AAAMAAAAj5g");
	var mask_graphics_453 = new cjs.Graphics().p("Eg+xAirIAAm7QAWAFAXgBQCTABBpjCQBpjBAAkSQAAkShpjBQhpjCiTABQgXgBgWAFIAAoeMCw2AAAMAAAAj5g");
	var mask_graphics_454 = new cjs.Graphics().p("Eg+rAirIAAm7QAVAFAXgBQCUABBojCQBpjBAAkSQAAkShpjBQhojCiUABQgXgBgVAFIAAoeMCw0AAAMAAAAj5g");
	var mask_graphics_455 = new cjs.Graphics().p("Eg+mAirIAAm7QAWAFAXgBQCTABBpjCQBojBAAkSQAAkShojBQhpjCiTABQgXgBgWAFIAAoeMCwzAAAMAAAAj5g");
	var mask_graphics_456 = new cjs.Graphics().p("Eg+gAirIAAm7QAVAFAXgBQCUABBojCQBpjBAAkSQAAkShpjBQhojCiUABQgXgBgVAFIAAoeMCwyAAAMAAAAj5g");
	var mask_graphics_457 = new cjs.Graphics().p("Eg+bAirIAAm7QAWAFAXgBQCTABBpjCQBojBAAkSQAAkShojBQhpjCiTABQgXgBgWAFIAAoeMCwxAAAMAAAAj5g");
	var mask_graphics_458 = new cjs.Graphics().p("Eg+VAirIAAm7QAVAFAXgBQCUABBojCQBpjBAAkSQAAkShpjBQhojCiUABQgXgBgVAFIAAoeMCwvAAAMAAAAj5g");
	var mask_graphics_459 = new cjs.Graphics().p("Eg+QAirIAAm7QAWAFAXgBQCTABBojCQBpjBAAkSQAAkShpjBQhojCiTABQgXgBgWAFIAAoeMCwvAAAMAAAAj5g");
	var mask_graphics_460 = new cjs.Graphics().p("Eg+KAirIAAm7QAVAFAXgBQCUABBojCQBpjBAAkSQAAkShpjBQhojCiUABQgXgBgVAFIAAoeMCwtAAAMAAAAj5g");
	var mask_graphics_461 = new cjs.Graphics().p("Eg+FAirIAAm7QAWAFAXgBQCTABBojCQBpjBAAkSQAAkShpjBQhojCiTABQgXgBgWAFIAAoeMCwsAAAMAAAAj5g");
	var mask_graphics_462 = new cjs.Graphics().p("Eg9/AirIAAm7QAVAFAXgBQCUABBojCQBpjBAAkSQAAkShpjBQhojCiUABQgXgBgVAFIAAoeMCwrAAAMAAAAj5g");
	var mask_graphics_463 = new cjs.Graphics().p("Eg96AirIAAm7QAWAFAXgBQCTABBojCQBpjBAAkSQAAkShpjBQhojCiTABQgXgBgWAFIAAoeMCwqAAAMAAAAj5g");
	var mask_graphics_464 = new cjs.Graphics().p("Eg90AirIAAm7QAVAFAXgBQCTABBpjCQBpjBAAkSQAAkShpjBQhpjCiTABQgXgBgVAFIAAoeMCwoAAAMAAAAj5g");
	var mask_graphics_465 = new cjs.Graphics().p("Eg9vAirIAAm7QAWAFAWgBQCUABBojCQBpjBAAkSQAAkShpjBQhojCiUABQgWgBgWAFIAAoeMCwoAAAMAAAAj5g");
	var mask_graphics_466 = new cjs.Graphics().p("Eg9pAirIAAm7QAVAFAXgBQCTABBpjCQBojBAAkSQAAkShojBQhpjCiTABQgXgBgVAFIAAoeMCwmAAAMAAAAj5g");
	var mask_graphics_467 = new cjs.Graphics().p("Eg9kAirIAAm7QAWAFAWgBQCUABBojCQBpjBAAkSQAAkShpjBQhojCiUABQgWgBgWAFIAAoeMCwlAAAMAAAAj5g");
	var mask_graphics_468 = new cjs.Graphics().p("Eg9eAirIAAm7QAVAFAXgBQCTABBpjCQBojBAAkSQAAkShojBQhpjCiTABQgXgBgVAFIAAoeMCwkAAAMAAAAj5g");
	var mask_graphics_469 = new cjs.Graphics().p("Eg9ZAirIAAm7QAWAFAWgBQCUABBojCQBpjBAAkSQAAkShpjBQhojCiUABQgWgBgWAFIAAoeMCwjAAAMAAAAj5g");
	var mask_graphics_470 = new cjs.Graphics().p("Eg9TAirIAAm7QAVAFAXgBQCTABBojCQBpjBAAkSQAAkShpjBQhojCiTABQgXgBgVAFIAAoeMCwhAAAMAAAAj5g");
	var mask_graphics_471 = new cjs.Graphics().p("Eg9OAirIAAm7QAWAFAWgBQCUABBojCQBpjBAAkSQAAkShpjBQhojCiUABQgWgBgWAFIAAoeMCwhAAAMAAAAj5g");
	var mask_graphics_472 = new cjs.Graphics().p("Eg9IAirIAAm7QAVAFAXgBQCTABBojCQBpjBAAkSQAAkShpjBQhojCiTABQgXgBgVAFIAAoeMCwfAAAMAAAAj5g");
	var mask_graphics_473 = new cjs.Graphics().p("Eg9DAirIAAm7QAWAFAWgBQCUABBojCQBpjBAAkSQAAkShpjBQhojCiUABQgWgBgWAFIAAoeMCweAAAMAAAAj5g");
	var mask_graphics_474 = new cjs.Graphics().p("Eg89AirIAAm7QAVAFAXgBQCTABBojCQBpjBAAkSQAAkShpjBQhojCiTABQgXgBgVAFIAAoeMCwdAAAMAAAAj5g");
	var mask_graphics_475 = new cjs.Graphics().p("Eg84AirIAAm7QAWAFAWgBQCUABBojCQBojBAAkSQAAkShojBQhojCiUABQgWgBgWAFIAAoeMCwcAAAMAAAAj5g");
	var mask_graphics_476 = new cjs.Graphics().p("Eg8yAirIAAm7QAVAFAXgBQCTABBojCQBpjBAAkSQAAkShpjBQhojCiTABQgXgBgVAFIAAoeMCwaAAAMAAAAj5g");
	var mask_graphics_477 = new cjs.Graphics().p("Eg8tAirIAAm7QAWAFAWgBQCUABBojCQBojBAAkSQAAkShojBQhojCiUABQgWgBgWAFIAAoeMCwaAAAMAAAAj5g");
	var mask_graphics_478 = new cjs.Graphics().p("Eg8oAirIAAm7QAWAFAXgBQCTABBojCQBpjBAAkSQAAkShpjBQhojCiTABQgXgBgWAFIAAoeMCwZAAAMAAAAj5g");
	var mask_graphics_479 = new cjs.Graphics().p("Eg8iAirIAAm7QAWAFAWgBQCTABBpjCQBojBAAkSQAAkShojBQhpjCiTABQgWgBgWAFIAAoeMCwXAAAMAAAAj5g");
	var mask_graphics_480 = new cjs.Graphics().p("Eg8dAirIAAm7QAWAFAXgBQCTABBojCQBpjBAAkSQAAkShpjBQhojCiTABQgXgBgWAFIAAoeMCwXAAAMAAAAj5g");
	var mask_graphics_481 = new cjs.Graphics().p("Eg8XAirIAAm7QAWAFAWgBQCTABBojCQBpjBAAkSQAAkShpjBQhojCiTABQgWgBgWAFIAAoeMCwVAAAMAAAAj5g");
	var mask_graphics_482 = new cjs.Graphics().p("Eg8SAirIAAm7QAWAFAXgBQCTABBojCQBpjBAAkSQAAkShpjBQhojCiTABQgXgBgWAFIAAoeMCwUAAAMAAAAj5g");
	var mask_graphics_483 = new cjs.Graphics().p("Eg8MAirIAAm7QAWAFAWgBQCTABBojCQBpjBAAkSQAAkShpjBQhojCiTABQgWgBgWAFIAAoeMCwTAAAMAAAAj5g");
	var mask_graphics_484 = new cjs.Graphics().p("Eg8HAirIAAm7QAWAFAXgBQCTABBojCQBojBAAkSQAAkShojBQhojCiTABQgXgBgWAFIAAoeMCwSAAAMAAAAj5g");
	var mask_graphics_485 = new cjs.Graphics().p("Eg8BAirIAAm7QAWAFAWgBQCTABBojCQBpjBAAkSQAAkShpjBQhojCiTABQgWgBgWAFIAAoeMCwQAAAMAAAAj5g");
	var mask_graphics_486 = new cjs.Graphics().p("Eg78AirIAAm7QAWAFAXgBQCTABBojCQBojBAAkSQAAkShojBQhojCiTABQgXgBgWAFIAAoeMCwQAAAMAAAAj5g");
	var mask_graphics_487 = new cjs.Graphics().p("Eg72AirIAAm7QAVAFAXgBQCTABBojCQBpjBAAkSQAAkShpjBQhojCiTABQgXgBgVAFIAAoeMCwOAAAMAAAAj5g");
	var mask_graphics_488 = new cjs.Graphics().p("Eg7xAirIAAm7QAWAFAXgBQCTABBojCQBojBAAkSQAAkShojBQhojCiTABQgXgBgWAFIAAoeMCwNAAAMAAAAj5g");
	var mask_graphics_489 = new cjs.Graphics().p("Eg7rAirIAAm7QAVAFAXgBQCTABBojCQBpjBAAkSQAAkShpjBQhojCiTABQgXgBgVAFIAAoeMCwMAAAMAAAAj5g");
	var mask_graphics_490 = new cjs.Graphics().p("Eg7mAirIAAm7QAWAFAXgBQCTABBojCQBojBAAkSQAAkShojBQhojCiTABQgXgBgWAFIAAoeMCwLAAAMAAAAj5g");
	var mask_graphics_491 = new cjs.Graphics().p("Eg7gAirIAAm7QAVAFAXgBQCTABBojCQBpjBAAkSQAAkShpjBQhojCiTABQgXgBgVAFIAAoeMCwKAAAMAAAAj5g");
	var mask_graphics_492 = new cjs.Graphics().p("Eg7bAirIAAm7QAWAFAWgBQCUABBnjCQBpjBAAkSQAAkShpjBQhnjCiUABQgWgBgWAFIAAoeMCwJAAAMAAAAj5g");
	var mask_graphics_493 = new cjs.Graphics().p("Eg7VAirIAAm7QAVAFAXgBQCTABBojCQBojBAAkSQAAkShojBQhojCiTABQgXgBgVAFIAAoeMCwHAAAMAAAAj5g");
	var mask_graphics_494 = new cjs.Graphics().p("Eg7QAirIAAm7QAWAFAWgBQCTABBojCQBpjBAAkSQAAkShpjBQhojCiTABQgWgBgWAFIAAoeMCwHAAAMAAAAj5g");
	var mask_graphics_495 = new cjs.Graphics().p("Eg7KAirIAAm7QAVAFAXgBQCTABBojCQBojBAAkSQAAkShojBQhojCiTABQgXgBgVAFIAAoeMCwFAAAMAAAAj5g");
	var mask_graphics_496 = new cjs.Graphics().p("Eg7FAirIAAm7QAWAFAWgBQCTABBojCQBpjBAAkSQAAkShpjBQhojCiTABQgWgBgWAFIAAoeMCwEAAAMAAAAj5g");
	var mask_graphics_497 = new cjs.Graphics().p("Eg6/AirIAAm7QAVAFAXgBQCTABBojCQBojBAAkSQAAkShojBQhojCiTABQgXgBgVAFIAAoeMCwDAAAMAAAAj5g");
	var mask_graphics_498 = new cjs.Graphics().p("Eg66AirIAAm7QAWAFAWgBQCTABBojCQBpjBAAkSQAAkShpjBQhojCiTABQgWgBgWAFIAAoeMCwCAAAMAAAAj5g");
	var mask_graphics_499 = new cjs.Graphics().p("Eg60AirIAAm7QAVAFAXgBQCTABBojCQBojBAAkSQAAkShojBQhojCiTABQgXgBgVAFIAAoeMCwAAAAMAAAAj5g");
	var mask_graphics_500 = new cjs.Graphics().p("Eg6vAirIAAm7QAWAFAWgBQCTABBojCQBpjBAAkSQAAkShpjBQhojCiTABQgWgBgWAFIAAoeMCwAAAAMAAAAj5g");
	var mask_graphics_501 = new cjs.Graphics().p("Eg6pAirIAAm7QAVAFAXgBQCTABBojCQBojBAAkSQAAkShojBQhojCiTABQgXgBgVAFIAAoeMCv+AAAMAAAAj5g");
	var mask_graphics_502 = new cjs.Graphics().p("Eg6kAirIAAm7QAWAFAWgBQCTABBojCQBojBAAkSQAAkShojBQhojCiTABQgWgBgWAFIAAoeMCv9AAAMAAAAj5g");
	var mask_graphics_503 = new cjs.Graphics().p("Eg6eAirIAAm7QAVAFAXgBQCTABBojCQBojBAAkSQAAkShojBQhojCiTABQgXgBgVAFIAAoeMCv8AAAMAAAAj5g");
	var mask_graphics_504 = new cjs.Graphics().p("Eg6ZAirIAAm7QAWAFAWgBQCTABBojCQBojBAAkSQAAkShojBQhojCiTABQgWgBgWAFIAAoeMCv7AAAMAAAAj5g");
	var mask_graphics_505 = new cjs.Graphics().p("Eg6TAirIAAm7QAVAFAXgBQCTABBnjCQBpjBAAkSQAAkShpjBQhnjCiTABQgXgBgVAFIAAoeMCv5AAAMAAAAj5g");
	var mask_graphics_506 = new cjs.Graphics().p("Eg6OAirIAAm7QAWAFAWgBQCTABBojCQBojBAAkSQAAkShojBQhojCiTABQgWgBgWAFIAAoeMCv5AAAMAAAAj5g");
	var mask_graphics_507 = new cjs.Graphics().p("Eg6IAirIAAm7QAVAFAXgBQCTABBnjCQBpjBAAkSQAAkShpjBQhnjCiTABQgXgBgVAFIAAoeMCv3AAAMAAAAj5g");
	var mask_graphics_508 = new cjs.Graphics().p("Eg6DAirIAAm7QAWAFAWgBQCTABBojCQBojBAAkSQAAkShojBQhojCiTABQgWgBgWAFIAAoeMCv2AAAMAAAAj5g");
	var mask_graphics_509 = new cjs.Graphics().p("Eg59AirIAAm7QAVAFAXgBQCSABBojCQBpjBAAkSQAAkShpjBQhojCiSABQgXgBgVAFIAAoeMCv1AAAMAAAAj5g");
	var mask_graphics_510 = new cjs.Graphics().p("Eg54AirIAAm7QAWAFAWgBQCTABBojCQBojBAAkSQAAkShojBQhojCiTABQgWgBgWAFIAAoeMCv0AAAMAAAAj5g");
	var mask_graphics_511 = new cjs.Graphics().p("Eg5yAirIAAm7QAVAFAXgBQCSABBojCQBojBAAkSQAAkShojBQhojCiSABQgXgBgVAFIAAoeMCvyAAAMAAAAj5g");
	var mask_graphics_512 = new cjs.Graphics().p("Eg5tAirIAAm7QAWAFAWgBQCTABBojCQBojBAAkSQAAkShojBQhojCiTABQgWgBgWAFIAAoeMCvyAAAMAAAAj5g");
	var mask_graphics_513 = new cjs.Graphics().p("Eg5nAirIAAm7QAVAFAXgBQCSABBojCQBojBAAkSQAAkShojBQhojCiSABQgXgBgVAFIAAoeMCvwAAAMAAAAj5g");
	var mask_graphics_514 = new cjs.Graphics().p("Eg5iAirIAAm7QAWAFAWgBQCTABBojCQBojBAAkSQAAkShojBQhojCiTABQgWgBgWAFIAAoeMCvvAAAMAAAAj5g");
	var mask_graphics_515 = new cjs.Graphics().p("Eg5dAirIAAm7QAWAFAXgBQCSABBojCQBojBAAkSQAAkShojBQhojCiSABQgXgBgWAFIAAoeMCvvAAAMAAAAj5g");
	var mask_graphics_516 = new cjs.Graphics().p("Eg5XAirIAAm7QAWAFAWgBQCTABBnjCQBpjBAAkSQAAkShpjBQhnjCiTABQgWgBgWAFIAAoeMCvtAAAMAAAAj5g");
	var mask_graphics_517 = new cjs.Graphics().p("Eg5SAirIAAm7QAWAFAXgBQCSABBojCQBojBAAkSQAAkShojBQhojCiSABQgXgBgWAFIAAoeMCvsAAAMAAAAj5g");
	var mask_graphics_518 = new cjs.Graphics().p("Eg5MAirIAAm7QAVAFAXgBQCTABBnjCQBpjBAAkSQAAkShpjBQhnjCiTABQgXgBgVAFIAAoeMCvrAAAMAAAAj5g");
	var mask_graphics_519 = new cjs.Graphics().p("Eg5HAirIAAm7QAWAFAWgBQCTABBojCQBojBAAkSQAAkShojBQhojCiTABQgWgBgWAFIAAoeMCvqAAAMAAAAj5g");
	var mask_graphics_520 = new cjs.Graphics().p("Eg5BAirIAAm7QAVAFAXgBQCTABBnjCQBojBAAkSQAAkShojBQhnjCiTABQgXgBgVAFIAAoeMCvoAAAMAAAAj5g");
	var mask_graphics_521 = new cjs.Graphics().p("Eg48AirIAAm7QAWAFAWgBQCTABBojCQBojBAAkSQAAkShojBQhojCiTABQgWgBgWAFIAAoeMCvoAAAMAAAAj5g");
	var mask_graphics_522 = new cjs.Graphics().p("Eg42AirIAAm7QAVAFAXgBQCTABBnjCQBojBAAkSQAAkShojBQhnjCiTABQgXgBgVAFIAAoeMCvmAAAMAAAAj5g");
	var mask_graphics_523 = new cjs.Graphics().p("Eg4xAirIAAm7QAWAFAWgBQCTABBojCQBojBAAkSQAAkShojBQhojCiTABQgWgBgWAFIAAoeMCvlAAAMAAAAj5g");
	var mask_graphics_524 = new cjs.Graphics().p("Eg4rAirIAAm7QAVAFAXgBQCSABBojCQBojBAAkSQAAkShojBQhojCiSABQgXgBgVAFIAAoeMCvkAAAMAAAAj5g");
	var mask_graphics_525 = new cjs.Graphics().p("Eg4mAirIAAm7QAWAFAWgBQCTABBojCQBojBAAkSQAAkShojBQhojCiTABQgWgBgWAFIAAoeMCvjAAAMAAAAj5g");
	var mask_graphics_526 = new cjs.Graphics().p("Eg4gAirIAAm7QAVAFAXgBQCSABBojCQBojBAAkSQAAkShojBQhojCiSABQgXgBgVAFIAAoeMCvhAAAMAAAAj5g");
	var mask_graphics_527 = new cjs.Graphics().p("Eg4bAirIAAm7QAWAFAWgBQCTABBnjCQBpjBAAkSQAAkShpjBQhnjCiTABQgWgBgWAFIAAoeMCvhAAAMAAAAj5g");
	var mask_graphics_528 = new cjs.Graphics().p("Eg4VAirIAAm7QAVAFAXgBQCSABBojCQBojBAAkSQAAkShojBQhojCiSABQgXgBgVAFIAAoeMCvfAAAMAAAAj5g");
	var mask_graphics_529 = new cjs.Graphics().p("Eg4QAirIAAm7QAWAFAWgBQCTABBnjCQBojBAAkSQAAkShojBQhnjCiTABQgWgBgWAFIAAoeMCvfAAAMAAAAj5g");
	var mask_graphics_530 = new cjs.Graphics().p("Eg4KAirIAAm7QAVAFAXgBQCSABBojCQBojBAAkSQAAkShojBQhojCiSABQgXgBgVAFIAAoeMCvdAAAMAAAAj5g");
	var mask_graphics_531 = new cjs.Graphics().p("Eg4FAirIAAm7QAWAFAWgBQCTABBnjCQBojBAAkSQAAkShojBQhnjCiTABQgWgBgWAFIAAoeMCvcAAAMAAAAj5g");
	var mask_graphics_532 = new cjs.Graphics().p("Eg3/AirIAAm7QAVAFAXgBQCSABBojCQBojBAAkSQAAkShojBQhojCiSABQgXgBgVAFIAAoeMCvbAAAMAAAAj5g");
	var mask_graphics_533 = new cjs.Graphics().p("Eg36AirIAAm7QAWAFAWgBQCTABBnjCQBojBAAkSQAAkShojBQhnjCiTABQgWgBgWAFIAAoeMCvaAAAMAAAAj5g");
	var mask_graphics_534 = new cjs.Graphics().p("Eg30AirIAAm7QAVAFAXgBQCSABBojCQBojBAAkSQAAkShojBQhojCiSABQgXgBgVAFIAAoeMCvYAAAMAAAAj5g");
	var mask_graphics_535 = new cjs.Graphics().p("Eg3vAirIAAm7QAWAFAWgBQCTABBnjCQBojBAAkSQAAkShojBQhnjCiTABQgWgBgWAFIAAoeMCvYAAAMAAAAj5g");
	var mask_graphics_536 = new cjs.Graphics().p("Eg3pAirIAAm7QAVAFAXgBQCSABBojCQBojBAAkSQAAkShojBQhojCiSABQgXgBgVAFIAAoeMCvWAAAMAAAAj5g");
	var mask_graphics_537 = new cjs.Graphics().p("Eg3kAirIAAm7QAWAFAWgBQCTABBnjCQBojBAAkSQAAkShojBQhnjCiTABQgWgBgWAFIAAoeMCvVAAAMAAAAj5g");
	var mask_graphics_538 = new cjs.Graphics().p("Eg3eAirIAAm7QAVAFAXgBQCSABBnjCQBojBAAkSQAAkShojBQhnjCiSABQgXgBgVAFIAAoeMCvUAAAMAAAAj5g");
	var mask_graphics_539 = new cjs.Graphics().p("Eg3ZAirIAAm7QAWAFAWgBQCSABBojCQBojBAAkSQAAkShojBQhojCiSABQgWgBgWAFIAAoeMCvTAAAMAAAAj5g");
	var mask_graphics_540 = new cjs.Graphics().p("Eg3TAirIAAm7QAVAFAXgBQCSABBnjCQBojBAAkSQAAkShojBQhnjCiSABQgXgBgVAFIAAoeMCvRAAAMAAAAj5g");
	var mask_graphics_541 = new cjs.Graphics().p("Eg3OAirIAAm7QAWAFAWgBQCSABBojCQBojBAAkSQAAkShojBQhojCiSABQgWgBgWAFIAAoeMCvRAAAMAAAAj5g");
	var mask_graphics_542 = new cjs.Graphics().p("Eg3IAirIAAm7QAVAFAXgBQCSABBnjCQBojBAAkSQAAkShojBQhnjCiSABQgXgBgVAFIAAoeMCvPAAAMAAAAj5g");
	var mask_graphics_543 = new cjs.Graphics().p("Eg3DAirIAAm7QAWAFAWgBQCSABBojCQBojBAAkSQAAkShojBQhojCiSABQgWgBgWAFIAAoeMCvOAAAMAAAAj5g");
	var mask_graphics_544 = new cjs.Graphics().p("Eg29AirIAAm7QAVAFAXgBQCSABBnjCQBojBAAkSQAAkShojBQhnjCiSABQgXgBgVAFIAAoeMCvNAAAMAAAAj5g");
	var mask_graphics_545 = new cjs.Graphics().p("Eg24AirIAAm7QAWAFAWgBQCSABBojCQBojBAAkSQAAkShojBQhojCiSABQgWgBgWAFIAAoeMCvMAAAMAAAAj5g");
	var mask_graphics_546 = new cjs.Graphics().p("Eg2yAirIAAm7QAVAFAXgBQCSABBnjCQBojBAAkSQAAkShojBQhnjCiSABQgXgBgVAFIAAoeMCvKAAAMAAAAj5g");
	var mask_graphics_547 = new cjs.Graphics().p("Eg2tAirIAAm7QAWAFAWgBQCSABBojCQBojBAAkSQAAkShojBQhojCiSABQgWgBgWAFIAAoeMCvKAAAMAAAAj5g");
	var mask_graphics_548 = new cjs.Graphics().p("Eg2nAirIAAm7QAVAFAWgBQCTABBnjCQBojBAAkSQAAkShojBQhnjCiTABQgWgBgVAFIAAoeMCvIAAAMAAAAj5g");
	var mask_graphics_549 = new cjs.Graphics().p("Eg2iAirIAAm7QAVAFAXgBQCSABBojCQBnjBAAkSQAAkShnjBQhojCiSABQgXgBgVAFIAAoeMCvHAAAMAAAAj5g");
	var mask_graphics_550 = new cjs.Graphics().p("Eg2cAirIAAm7QAVAFAWgBQCTABBnjCQBojBAAkSQAAkShojBQhnjCiTABQgWgBgVAFIAAoeMCvGAAAMAAAAj5g");
	var mask_graphics_551 = new cjs.Graphics().p("Eg2XAirIAAm7QAVAFAXgBQCSABBnjCQBojBAAkSQAAkShojBQhnjCiSABQgXgBgVAFIAAoeMCvFAAAMAAAAj5g");
	var mask_graphics_552 = new cjs.Graphics().p("Eg2SAirIAAm7QAWAFAWgBQCTABBnjCQBojBAAkSQAAkShojBQhnjCiTABQgWgBgWAFIAAoeMCvEAAAMAAAAj5g");
	var mask_graphics_553 = new cjs.Graphics().p("Eg2MAirIAAm7QAVAFAXgBQCSABBnjCQBojBAAkSQAAkShojBQhnjCiSABQgXgBgVAFIAAoeMCvDAAAMAAAAj5g");
	var mask_graphics_554 = new cjs.Graphics().p("Eg2HAirIAAm7QAWAFAWgBQCSABBojCQBojBAAkSQAAkShojBQhojCiSABQgWgBgWAFIAAoeMCvCAAAMAAAAj5g");
	var mask_graphics_555 = new cjs.Graphics().p("Eg2BAirIAAm7QAVAFAXgBQCSABBnjCQBojBAAkSQAAkShojBQhnjCiSABQgXgBgVAFIAAoeMCvAAAAMAAAAj5g");
	var mask_graphics_556 = new cjs.Graphics().p("Eg18AirIAAm7QAWAFAWgBQCSABBojCQBojBAAkSQAAkShojBQhojCiSABQgWgBgWAFIAAoeMCvAAAAMAAAAj5g");
	var mask_graphics_557 = new cjs.Graphics().p("Eg12AirIAAm7QAVAFAXgBQCSABBnjCQBojBAAkSQAAkShojBQhnjCiSABQgXgBgVAFIAAoeMCu+AAAMAAAAj5g");
	var mask_graphics_558 = new cjs.Graphics().p("Eg1xAirIAAm7QAWAFAWgBQCSABBojCQBnjBAAkSQAAkShnjBQhojCiSABQgWgBgWAFIAAoeMCu9AAAMAAAAj5g");
	var mask_graphics_559 = new cjs.Graphics().p("Eg1rAirIAAm7QAVAFAXgBQCSABBnjCQBojBAAkSQAAkShojBQhnjCiSABQgXgBgVAFIAAoeMCu8AAAMAAAAj5g");
	var mask_graphics_560 = new cjs.Graphics().p("Eg1mAirIAAm7QAWAFAWgBQCSABBojCQBnjBAAkSQAAkShnjBQhojCiSABQgWgBgWAFIAAoeMCu7AAAMAAAAj5g");
	var mask_graphics_561 = new cjs.Graphics().p("Eg1gAirIAAm7QAVAFAXgBQCSABBnjCQBojBAAkSQAAkShojBQhnjCiSABQgXgBgVAFIAAoeMCu5AAAMAAAAj5g");
	var mask_graphics_562 = new cjs.Graphics().p("Eg1bAirIAAm7QAWAFAWgBQCSABBnjCQBojBAAkSQAAkShojBQhnjCiSABQgWgBgWAFIAAoeMCu5AAAMAAAAj5g");
	var mask_graphics_563 = new cjs.Graphics().p("Eg1VAirIAAm7QAVAFAXgBQCSABBnjCQBojBAAkSQAAkShojBQhnjCiSABQgXgBgVAFIAAoeMCu3AAAMAAAAj5g");
	var mask_graphics_564 = new cjs.Graphics().p("Eg1QAirIAAm7QAWAFAWgBQCSABBnjCQBojBAAkSQAAkShojBQhnjCiSABQgWgBgWAFIAAoeMCu2AAAMAAAAj5g");
	var mask_graphics_565 = new cjs.Graphics().p("Eg1KAirIAAm7QAVAFAXgBQCSABBnjCQBojBAAkSQAAkShojBQhnjCiSABQgXgBgVAFIAAoeMCu1AAAMAAAAj5g");
	var mask_graphics_566 = new cjs.Graphics().p("Eg1FAirIAAm7QAWAFAWgBQCSABBnjCQBojBAAkSQAAkShojBQhnjCiSABQgWgBgWAFIAAoeMCu0AAAMAAAAj5g");
	var mask_graphics_567 = new cjs.Graphics().p("Eg0/AirIAAm7QAVAFAXgBQCSABBnjCQBnjBAAkSQAAkShnjBQhnjCiSABQgXgBgVAFIAAoeMCuzAAAMAAAAj5g");
	var mask_graphics_568 = new cjs.Graphics().p("Eg06AirIAAm7QAWAFAWgBQCSABBnjCQBojBAAkSQAAkShojBQhnjCiSABQgWgBgWAFIAAoeMCuyAAAMAAAAj5g");
	var mask_graphics_569 = new cjs.Graphics().p("Eg00AirIAAm7QAVAFAXgBQCRABBojCQBnjBAAkSQAAkShnjBQhojCiRABQgXgBgVAFIAAoeMCuwAAAMAAAAj5g");
	var mask_graphics_570 = new cjs.Graphics().p("Eg0vAirIAAm7QAWAFAWgBQCSABBnjCQBojBAAkSQAAkShojBQhnjCiSABQgWgBgWAFIAAoeMCuwAAAMAAAAj5g");
	var mask_graphics_571 = new cjs.Graphics().p("Eg0pAirIAAm7QAVAFAXgBQCRABBojCQBnjBAAkSQAAkShnjBQhojCiRABQgXgBgVAFIAAoeMCuuAAAMAAAAj5g");
	var mask_graphics_572 = new cjs.Graphics().p("Eg0kAirIAAm7QAWAFAWgBQCSABBnjCQBojBAAkSQAAkShojBQhnjCiSABQgWgBgWAFIAAoeMCutAAAMAAAAj5g");
	var mask_graphics_573 = new cjs.Graphics().p("Eg0eAirIAAm7QAVAFAXgBQCRABBnjCQBojBAAkSQAAkShojBQhnjCiRABQgXgBgVAFIAAoeMCusAAAMAAAAj5g");
	var mask_graphics_574 = new cjs.Graphics().p("Eg0ZAirIAAm7QAWAFAWgBQCSABBnjCQBojBAAkSQAAkShojBQhnjCiSABQgWgBgWAFIAAoeMCurAAAMAAAAj5g");
	var mask_graphics_575 = new cjs.Graphics().p("Eg0TAirIAAm7QAVAFAWgBQCSABBnjCQBojBAAkSQAAkShojBQhnjCiSABQgWgBgVAFIAAoeMCupAAAMAAAAj5g");
	var mask_graphics_576 = new cjs.Graphics().p("Eg0OAirIAAm7QAWAFAWgBQCSABBnjCQBnjBAAkSQAAkShnjBQhnjCiSABQgWgBgWAFIAAoeMCupAAAMAAAAj5g");
	var mask_graphics_577 = new cjs.Graphics().p("Eg0IAirIAAm7QAVAFAWgBQCSABBnjCQBojBAAkSQAAkShojBQhnjCiSABQgWgBgVAFIAAoeMCunAAAMAAAAj5g");
	var mask_graphics_578 = new cjs.Graphics().p("Eg0DAirIAAm7QAWAFAWgBQCSABBnjCQBnjBAAkSQAAkShnjBQhnjCiSABQgWgBgWAFIAAoeMCumAAAMAAAAj5g");
	var mask_graphics_579 = new cjs.Graphics().p("Egz9AirIAAm7QAVAFAWgBQCSABBnjCQBojBAAkSQAAkShojBQhnjCiSABQgWgBgVAFIAAoeMCulAAAMAAAAj5g");
	var mask_graphics_580 = new cjs.Graphics().p("Egz4AirIAAm7QAWAFAWgBQCSABBnjCQBnjBAAkSQAAkShnjBQhnjCiSABQgWgBgWAFIAAoeMCukAAAMAAAAj5g");
	var mask_graphics_581 = new cjs.Graphics().p("EgzyAirIAAm7QAVAFAWgBQCSABBnjCQBojBAAkSQAAkShojBQhnjCiSABQgWgBgVAFIAAoeMCuiAAAMAAAAj5g");
	var mask_graphics_582 = new cjs.Graphics().p("EgztAirIAAm7QAVAFAXgBQCSABBnjCQBnjBAAkSQAAkShnjBQhnjCiSABQgXgBgVAFIAAoeMCuiAAAMAAAAj5g");
	var mask_graphics_583 = new cjs.Graphics().p("EgznAirIAAm7QAVAFAWgBQCSABBnjCQBojBAAkSQAAkShojBQhnjCiSABQgWgBgVAFIAAoeMCugAAAMAAAAj5g");
	var mask_graphics_584 = new cjs.Graphics().p("EgziAirIAAm7QAVAFAXgBQCSABBmjCQBojBAAkSQAAkShojBQhmjCiSABQgXgBgVAFIAAoeMCufAAAMAAAAj5g");
	var mask_graphics_585 = new cjs.Graphics().p("EgzcAirIAAm7QAVAFAWgBQCSABBnjCQBnjBAAkSQAAkShnjBQhnjCiSABQgWgBgVAFIAAoeMCueAAAMAAAAj5g");
	var mask_graphics_586 = new cjs.Graphics().p("EgzXAirIAAm7QAVAFAXgBQCRABBnjCQBojBAAkSQAAkShojBQhnjCiRABQgXgBgVAFIAAoeMCudAAAMAAAAj5g");
	var mask_graphics_587 = new cjs.Graphics().p("EgzRAirIAAm7QAVAFAWgBQCSABBnjCQBnjBAAkSQAAkShnjBQhnjCiSABQgWgBgVAFIAAoeMCubAAAMAAAAj5g");
	var mask_graphics_588 = new cjs.Graphics().p("EgzMAirIAAm7QAVAFAXgBQCRABBnjCQBojBAAkSQAAkShojBQhnjCiRABQgXgBgVAFIAAoeMCubAAAMAAAAj5g");
	var mask_graphics_589 = new cjs.Graphics().p("EgzHAirIAAm7QAWAFAWgBQCSABBnjCQBnjBAAkSQAAkShnjBQhnjCiSABQgWgBgWAFIAAoeMCuaAAAMAAAAj5g");
	var mask_graphics_590 = new cjs.Graphics().p("EgzBAirIAAm7QAVAFAXgBQCRABBnjCQBojBAAkSQAAkShojBQhnjCiRABQgXgBgVAFIAAoeMCuYAAAMAAAAj5g");
	var mask_graphics_591 = new cjs.Graphics().p("Egy8AirIAAm7QAWAFAWgBQCSABBnjCQBnjBAAkSQAAkShnjBQhnjCiSABQgWgBgWAFIAAoeMCuYAAAMAAAAj5g");
	var mask_graphics_592 = new cjs.Graphics().p("Egy2AirIAAm7QAVAFAXgBQCRABBnjCQBojBAAkSQAAkShojBQhnjCiRABQgXgBgVAFIAAoeMCuWAAAMAAAAj5g");
	var mask_graphics_593 = new cjs.Graphics().p("EgyxAirIAAm7QAWAFAWgBQCSABBnjCQBnjBAAkSQAAkShnjBQhnjCiSABQgWgBgWAFIAAoeMCuVAAAMAAAAj5g");
	var mask_graphics_594 = new cjs.Graphics().p("EgyrAirIAAm7QAVAFAXgBQCRABBnjCQBnjBAAkSQAAkShnjBQhnjCiRABQgXgBgVAFIAAoeMCuUAAAMAAAAj5g");
	var mask_graphics_595 = new cjs.Graphics().p("EgymAirIAAm7QAWAFAWgBQCSABBnjCQBnjBAAkSQAAkShnjBQhnjCiSABQgWgBgWAFIAAoeMCuTAAAMAAAAj5g");
	var mask_graphics_596 = new cjs.Graphics().p("EgygAirIAAm7QAVAFAXgBQCRABBnjCQBnjBAAkSQAAkShnjBQhnjCiRABQgXgBgVAFIAAoeMCuRAAAMAAAAj5g");
	var mask_graphics_597 = new cjs.Graphics().p("EgybAirIAAm7QAWAFAWgBQCSABBmjCQBojBAAkSQAAkShojBQhmjCiSABQgWgBgWAFIAAoeMCuRAAAMAAAAj5g");
	var mask_graphics_598 = new cjs.Graphics().p("EgyVAirIAAm7QAVAFAXgBQCRABBnjCQBnjBAAkSQAAkShnjBQhnjCiRABQgXgBgVAFIAAoeMCuPAAAMAAAAj5g");
	var mask_graphics_599 = new cjs.Graphics().p("EgyQAirIAAm7QAWAFAWgBQCSABBmjCQBojBAAkSQAAkShojBQhmjCiSABQgWgBgWAFIAAoeMCuOAAAMAAAAj5g");
	var mask_graphics_600 = new cjs.Graphics().p("EgyKAirIAAm7QAVAFAXgBQCRABBnjCQBnjBAAkSQAAkShnjBQhnjCiRABQgXgBgVAFIAAoeMCuNAAAMAAAAj5g");
	var mask_graphics_601 = new cjs.Graphics().p("EgyFAirIAAm7QAWAFAWgBQCRABBnjCQBojBAAkSQAAkShojBQhnjCiRABQgWgBgWAFIAAoeMCuMAAAMAAAAj5g");
	var mask_graphics_602 = new cjs.Graphics().p("Egx/AirIAAm7QAVAFAWgBQCSABBnjCQBnjBAAkSQAAkShnjBQhnjCiSABQgWgBgVAFIAAoeMCuKAAAMAAAAj5g");
	var mask_graphics_603 = new cjs.Graphics().p("Egx6AirIAAm7QAWAFAWgBQCRABBnjCQBnjBAAkSQAAkShnjBQhnjCiRABQgWgBgWAFIAAoeMCuKAAAMAAAAj5g");
	var mask_graphics_604 = new cjs.Graphics().p("Egx0AirIAAm7QAVAFAWgBQCSABBnjCQBnjBAAkSQAAkShnjBQhnjCiSABQgWgBgVAFIAAoeMCuIAAAMAAAAj5g");
	var mask_graphics_605 = new cjs.Graphics().p("EgxvAirIAAm7QAWAFAWgBQCRABBnjCQBnjBAAkSQAAkShnjBQhnjCiRABQgWgBgWAFIAAoeMCuIAAAMAAAAj5g");
	var mask_graphics_606 = new cjs.Graphics().p("EgxpAirIAAm7QAVAFAWgBQCSABBnjCQBnjBAAkSQAAkShnjBQhnjCiSABQgWgBgVAFIAAoeMCuGAAAMAAAAj5g");
	var mask_graphics_607 = new cjs.Graphics().p("EgxkAirIAAm7QAWAFAWgBQCRABBnjCQBnjBAAkSQAAkShnjBQhnjCiRABQgWgBgWAFIAAoeMCuFAAAMAAAAj5g");
	var mask_graphics_608 = new cjs.Graphics().p("EgxeAirIAAm7QAVAFAWgBQCSABBmjCQBojBAAkSQAAkShojBQhmjCiSABQgWgBgVAFIAAoeMCuEAAAMAAAAj5g");
	var mask_graphics_609 = new cjs.Graphics().p("EgxZAirIAAm7QAWAFAWgBQCRABBnjCQBnjBAAkSQAAkShnjBQhnjCiRABQgWgBgWAFIAAoeMCuDAAAMAAAAj5g");
	var mask_graphics_610 = new cjs.Graphics().p("EgxTAirIAAm7QAVAFAWgBQCSABBmjCQBojBAAkSQAAkShojBQhmjCiSABQgWgBgVAFIAAoeMCuBAAAMAAAAj5g");
	var mask_graphics_611 = new cjs.Graphics().p("EgxOAirIAAm7QAWAFAWgBQCRABBnjCQBnjBAAkSQAAkShnjBQhnjCiRABQgWgBgWAFIAAoeMCuBAAAMAAAAj5g");
	var mask_graphics_612 = new cjs.Graphics().p("EgxIAirIAAm7QAVAFAWgBQCSABBmjCQBojBgBkSQABkShojBQhmjCiSABQgWgBgVAFIAAoeMCt/AAAMAAAAj5g");
	var mask_graphics_613 = new cjs.Graphics().p("EgxDAirIAAm7QAVAFAXgBQCRABBnjCQBnjBAAkSQAAkShnjBQhnjCiRABQgXgBgVAFIAAoeMCt+AAAMAAAAj5g");
	var mask_graphics_614 = new cjs.Graphics().p("Egw9AirIAAm7QAVAFAWgBQCSABBmjCQBnjBAAkSQAAkShnjBQhmjCiSABQgWgBgVAFIAAoeMCt9AAAMAAAAj5g");
	var mask_graphics_615 = new cjs.Graphics().p("Egw4AirIAAm7QAVAFAXgBQCRABBnjCQBnjBAAkSQAAkShnjBQhnjCiRABQgXgBgVAFIAAoeMCt8AAAMAAAAj5g");
	var mask_graphics_616 = new cjs.Graphics().p("EgwyAirIAAm7QAVAFAWgBQCRABBnjCQBnjBAAkSQAAkShnjBQhnjCiRABQgWgBgVAFIAAoeMCt6AAAMAAAAj5g");
	var mask_graphics_617 = new cjs.Graphics().p("EgwtAirIAAm7QAVAFAXgBQCRABBnjCQBnjBAAkSQAAkShnjBQhnjCiRABQgXgBgVAFIAAoeMCt6AAAMAAAAj5g");
	var mask_graphics_618 = new cjs.Graphics().p("EgwnAirIAAm7QAVAFAWgBQCRABBnjCQBnjBAAkSQAAkShnjBQhnjCiRABQgWgBgVAFIAAoeMCt4AAAMAAAAj5g");
	var mask_graphics_619 = new cjs.Graphics().p("EgwiAirIAAm7QAVAFAXgBQCRABBmjCQBojBAAkSQAAkShojBQhmjCiRABQgXgBgVAFIAAoeMCt3AAAMAAAAj5g");
	var mask_graphics_620 = new cjs.Graphics().p("EgwcAirIAAm7QAVAFAWgBQCRABBnjCQBnjBAAkSQAAkShnjBQhnjCiRABQgWgBgVAFIAAoeMCt2AAAMAAAAj5g");
	var mask_graphics_621 = new cjs.Graphics().p("EgwXAirIAAm7QAVAFAXgBQCRABBmjCQBojBAAkSQAAkShojBQhmjCiRABQgXgBgVAFIAAoeMCt1AAAMAAAAj5g");
	var mask_graphics_622 = new cjs.Graphics().p("EgwRAirIAAm7QAVAFAWgBQCRABBnjCQBnjBAAkSQAAkShnjBQhnjCiRABQgWgBgVAFIAAoeMCtzAAAMAAAAj5g");
	var mask_graphics_623 = new cjs.Graphics().p("EgwMAirIAAm7QAVAFAXgBQCRABBmjCQBnjBAAkSQAAkShnjBQhmjCiRABQgXgBgVAFIAAoeMCtzAAAMAAAAj5g");
	var mask_graphics_624 = new cjs.Graphics().p("EgwGAirIAAm7QAVAFAWgBQCRABBnjCQBnjBAAkSQAAkShnjBQhnjCiRABQgWgBgVAFIAAoeMCtxAAAMAAAAj5g");
	var mask_graphics_625 = new cjs.Graphics().p("EgwBAirIAAm7QAVAFAXgBQCRABBmjCQBnjBAAkSQAAkShnjBQhmjCiRABQgXgBgVAFIAAoeMCtwAAAMAAAAj5g");
	var mask_graphics_626 = new cjs.Graphics().p("Egv8AirIAAm7QAWAFAWgBQCRABBnjCQBnjBAAkSQAAkShnjBQhnjCiRABQgWgBgWAFIAAoeMCtwAAAMAAAAj5g");
	var mask_graphics_627 = new cjs.Graphics().p("Egv2AirIAAm7QAVAFAXgBQCRABBmjCQBnjBAAkSQAAkShnjBQhmjCiRABQgXgBgVAFIAAoeMCtuAAAMAAAAj5g");
	var mask_graphics_628 = new cjs.Graphics().p("EgvxAirIAAm7QAWAFAWgBQCRABBnjCQBnjBAAkSQAAkShnjBQhnjCiRABQgWgBgWAFIAAoeMCttAAAMAAAAj5g");
	var mask_graphics_629 = new cjs.Graphics().p("EgvrAirIAAm7QAVAFAXgBQCRABBmjCQBnjBAAkSQAAkShnjBQhmjCiRABQgXgBgVAFIAAoeMCtsAAAMAAAAj5g");
	var mask_graphics_630 = new cjs.Graphics().p("EgvmAirIAAm7QAWAFAWgBQCRABBmjCQBojBAAkSQAAkShojBQhmjCiRABQgWgBgWAFIAAoeMCtrAAAMAAAAj5g");
	var mask_graphics_631 = new cjs.Graphics().p("EgvgAirIAAm7QAVAFAWgBQCRABBnjCQBnjBAAkSQAAkShnjBQhnjCiRABQgWgBgVAFIAAoeMCtpAAAMAAAAj5g");
	var mask_graphics_632 = new cjs.Graphics().p("EgvbAirIAAm7QAWAFAWgBQCRABBmjCQBnjBAAkSQAAkShnjBQhmjCiRABQgWgBgWAFIAAoeMCtpAAAMAAAAj5g");
	var mask_graphics_633 = new cjs.Graphics().p("EgvVAirIAAm7QAVAFAWgBQCRABBnjCQBnjBAAkSQAAkShnjBQhnjCiRABQgWgBgVAFIAAoeMCtnAAAMAAAAj5g");
	var mask_graphics_634 = new cjs.Graphics().p("EgvQAirIAAm7QAWAFAWgBQCRABBmjCQBnjBAAkSQAAkShnjBQhmjCiRABQgWgBgWAFIAAoeMCtmAAAMAAAAj5g");
	var mask_graphics_635 = new cjs.Graphics().p("EgvKAirIAAm7QAVAFAWgBQCRABBnjCQBnjBAAkSQAAkShnjBQhnjCiRABQgWgBgVAFIAAoeMCtlAAAMAAAAj5g");
	var mask_graphics_636 = new cjs.Graphics().p("EgvFAirIAAm7QAWAFAWgBQCRABBmjCQBnjBAAkSQAAkShnjBQhmjCiRABQgWgBgWAFIAAoeMCtkAAAMAAAAj5g");
	var mask_graphics_637 = new cjs.Graphics().p("Egu/AirIAAm7QAVAFAWgBQCRABBnjCQBnjBAAkSQAAkShnjBQhnjCiRABQgWgBgVAFIAAoeMCtiAAAMAAAAj5g");
	var mask_graphics_638 = new cjs.Graphics().p("Egu6AirIAAm7QAWAFAWgBQCRABBmjCQBnjBAAkSQAAkShnjBQhmjCiRABQgWgBgWAFIAAoeMCtiAAAMAAAAj5g");
	var mask_graphics_639 = new cjs.Graphics().p("Egu0AirIAAm7QAVAFAWgBQCRABBnjCQBnjBAAkSQAAkShnjBQhnjCiRABQgWgBgVAFIAAoeMCtgAAAMAAAAj5g");
	var mask_graphics_640 = new cjs.Graphics().p("EguvAirIAAm7QAWAFAWgBQCRABBmjCQBnjBAAkSQAAkShnjBQhmjCiRABQgWgBgWAFIAAoeMCtfAAAMAAAAj5g");
	var mask_graphics_641 = new cjs.Graphics().p("EgupAirIAAm7QAVAFAWgBQCRABBnjCQBmjBAAkSQAAkShmjBQhnjCiRABQgWgBgVAFIAAoeMCteAAAMAAAAj5g");
	var mask_graphics_642 = new cjs.Graphics().p("EgukAirIAAm7QAWAFAWgBQCRABBmjCQBnjBAAkSQAAkShnjBQhmjCiRABQgWgBgWAFIAAoeMCtdAAAMAAAAj5g");
	var mask_graphics_643 = new cjs.Graphics().p("EgueAirIAAm7QAVAFAWgBQCRABBmjCQBnjBAAkSQAAkShnjBQhmjCiRABQgWgBgVAFIAAoeMCtcAAAMAAAAj5g");
	var mask_graphics_644 = new cjs.Graphics().p("EguZAirIAAm7QAWAFAWgBQCRABBmjCQBnjBAAkSQAAkShnjBQhmjCiRABQgWgBgWAFIAAoeMCtbAAAMAAAAj5g");
	var mask_graphics_645 = new cjs.Graphics().p("EguTAirIAAm7QAVAFAWgBQCRABBmjCQBnjBAAkSQAAkShnjBQhmjCiRABQgWgBgVAFIAAoeMCtZAAAMAAAAj5g");
	var mask_graphics_646 = new cjs.Graphics().p("EguOAirIAAm7QAVAFAXgBQCQABBnjCQBnjBAAkSQAAkShnjBQhnjCiQABQgXgBgVAFIAAoeMCtZAAAMAAAAj5g");
	var mask_graphics_647 = new cjs.Graphics().p("EguIAirIAAm7QAVAFAWgBQCRABBmjCQBnjBAAkSQAAkShnjBQhmjCiRABQgWgBgVAFIAAoeMCtXAAAMAAAAj5g");
	var mask_graphics_648 = new cjs.Graphics().p("EguDAirIAAm7QAVAFAXgBQCQABBnjCQBnjBAAkSQAAkShnjBQhnjCiQABQgXgBgVAFIAAoeMCtWAAAMAAAAj5g");
	var mask_graphics_649 = new cjs.Graphics().p("Egt9AirIAAm7QAVAFAWgBQCRABBmjCQBnjBAAkSQAAkShnjBQhmjCiRABQgWgBgVAFIAAoeMCtVAAAMAAAAj5g");
	var mask_graphics_650 = new cjs.Graphics().p("Egt4AirIAAm7QAVAFAXgBQCQABBnjCQBmjBAAkSQAAkShmjBQhnjCiQABQgXgBgVAFIAAoeMCtUAAAMAAAAj5g");
	var mask_graphics_651 = new cjs.Graphics().p("EgtyAirIAAm7QAVAFAWgBQCRABBmjCQBnjBAAkSQAAkShnjBQhmjCiRABQgWgBgVAFIAAoeMCtSAAAMAAAAj5g");
	var mask_graphics_652 = new cjs.Graphics().p("EgttAirIAAm7QAVAFAXgBQCQABBnjCQBmjBAAkSQAAkShmjBQhnjCiQABQgXgBgVAFIAAoeMCtSAAAMAAAAj5g");
	var mask_graphics_653 = new cjs.Graphics().p("EgtnAirIAAm7QAVAFAWgBQCRABBmjCQBnjBAAkSQAAkShnjBQhmjCiRABQgWgBgVAFIAAoeMCtQAAAMAAAAj5g");
	var mask_graphics_654 = new cjs.Graphics().p("EgtiAirIAAm7QAVAFAXgBQCQABBmjCQBnjBAAkSQAAkShnjBQhmjCiQABQgXgBgVAFIAAoeMCtPAAAMAAAAj5g");
	var mask_graphics_655 = new cjs.Graphics().p("EgtcAirIAAm7QAVAFAWgBQCRABBmjCQBnjBAAkSQAAkShnjBQhmjCiRABQgWgBgVAFIAAoeMCtOAAAMAAAAj5g");
	var mask_graphics_656 = new cjs.Graphics().p("EgtXAirIAAm7QAVAFAXgBQCQABBmjCQBnjBAAkSQAAkShnjBQhmjCiQABQgXgBgVAFIAAoeMCtNAAAMAAAAj5g");
	var mask_graphics_657 = new cjs.Graphics().p("EgtRAirIAAm7QAVAFAWgBQCRABBmjCQBnjBAAkSQAAkShnjBQhmjCiRABQgWgBgVAFIAAoeMCtLAAAMAAAAj5g");
	var mask_graphics_658 = new cjs.Graphics().p("EgtMAirIAAm7QAVAFAWgBQCRABBmjCQBnjBAAkSQAAkShnjBQhmjCiRABQgWgBgVAFIAAoeMCtLAAAMAAAAj5g");
	var mask_graphics_659 = new cjs.Graphics().p("EgtGAirIAAm7QAVAFAWgBQCRABBmjCQBmjBAAkSQAAkShmjBQhmjCiRABQgWgBgVAFIAAoeMCtJAAAMAAAAj5g");
	var mask_graphics_660 = new cjs.Graphics().p("EgtBAirIAAm7QAVAFAWgBQCRABBmjCQBnjBAAkSQAAkShnjBQhmjCiRABQgWgBgVAFIAAoeMCtIAAAMAAAAj5g");
	var mask_graphics_661 = new cjs.Graphics().p("Egs7AirIAAm7QAVAFAWgBQCQABBnjCQBmjBAAkSQAAkShmjBQhnjCiQABQgWgBgVAFIAAoeMCtHAAAMAAAAj5g");
	var mask_graphics_662 = new cjs.Graphics().p("Egs2AirIAAm7QAVAFAWgBQCRABBmjCQBnjBAAkSQAAkShnjBQhmjCiRABQgWgBgVAFIAAoeMCtGAAAMAAAAj5g");
	var mask_graphics_663 = new cjs.Graphics().p("EgsxAirIAAm7QAWAFAWgBQCQABBnjCQBmjBAAkSQAAkShmjBQhnjCiQABQgWgBgWAFIAAoeMCtFAAAMAAAAj5g");
	var mask_graphics_664 = new cjs.Graphics().p("EgsrAirIAAm7QAVAFAWgBQCRABBmjCQBnjBAAkSQAAkShnjBQhmjCiRABQgWgBgVAFIAAoeMCtEAAAMAAAAj5g");
	var mask_graphics_665 = new cjs.Graphics().p("EgsmAirIAAm7QAWAFAWgBQCQABBmjCQBnjBAAkSQAAkShnjBQhmjCiQABQgWgBgWAFIAAoeMCtDAAAMAAAAj5g");
	var mask_graphics_666 = new cjs.Graphics().p("EgsgAirIAAm7QAVAFAWgBQCRABBmjCQBnjBAAkSQAAkShnjBQhmjCiRABQgWgBgVAFIAAoeMCtBAAAMAAAAj5g");
	var mask_graphics_667 = new cjs.Graphics().p("EgsbAirIAAm7QAWAFAWgBQCQABBmjCQBnjBAAkSQAAkShnjBQhmjCiQABQgWgBgWAFIAAoeMCtBAAAMAAAAj5g");
	var mask_graphics_668 = new cjs.Graphics().p("EgsVAirIAAm7QAVAFAWgBQCRABBmjCQBmjBAAkSQAAkShmjBQhmjCiRABQgWgBgVAFIAAoeMCs/AAAMAAAAj5g");
	var mask_graphics_669 = new cjs.Graphics().p("EgsQAirIAAm7QAWAFAWgBQCQABBmjCQBnjBAAkSQAAkShnjBQhmjCiQABQgWgBgWAFIAAoeMCs+AAAMAAAAj5g");
	var mask_graphics_670 = new cjs.Graphics().p("EgsKAirIAAm7QAVAFAWgBQCRABBmjCQBmjBAAkSQAAkShmjBQhmjCiRABQgWgBgVAFIAAoeMCs9AAAMAAAAj5g");
	var mask_graphics_671 = new cjs.Graphics().p("EgsFAirIAAm7QAWAFAWgBQCQABBmjCQBnjBAAkSQAAkShnjBQhmjCiQABQgWgBgWAFIAAoeMCs8AAAMAAAAj5g");
	var mask_graphics_672 = new cjs.Graphics().p("Egr/AirIAAm7QAVAFAWgBQCRABBmjCQBmjBAAkSQAAkShmjBQhmjCiRABQgWgBgVAFIAAoeMCs6AAAMAAAAj5g");
	var mask_graphics_673 = new cjs.Graphics().p("Egr6AirIAAm7QAWAFAWgBQCQABBmjCQBnjBAAkSQAAkShnjBQhmjCiQABQgWgBgWAFIAAoeMCs6AAAMAAAAj5g");
	var mask_graphics_674 = new cjs.Graphics().p("Egr0AirIAAm7QAVAFAWgBQCRABBmjCQBmjBAAkSQAAkShmjBQhmjCiRABQgWgBgVAFIAAoeMCs4AAAMAAAAj5g");
	var mask_graphics_675 = new cjs.Graphics().p("EgrvAirIAAm7QAWAFAWgBQCQABBmjCQBnjBAAkSQAAkShnjBQhmjCiQABQgWgBgWAFIAAoeMCs3AAAMAAAAj5g");
	var mask_graphics_676 = new cjs.Graphics().p("EgrpAirIAAm7QAVAFAWgBQCQABBmjCQBnjBAAkSQAAkShnjBQhmjCiQABQgWgBgVAFIAAoeMCs2AAAMAAAAj5g");
	var mask_graphics_677 = new cjs.Graphics().p("EgrkAirIAAm7QAVAFAXgBQCQABBmjCQBmjBAAkSQAAkShmjBQhmjCiQABQgXgBgVAFIAAoeMCs1AAAMAAAAj5g");
	var mask_graphics_678 = new cjs.Graphics().p("EgreAirIAAm7QAVAFAWgBQCQABBmjCQBnjBAAkSQAAkShnjBQhmjCiQABQgWgBgVAFIAAoeMCszAAAMAAAAj5g");
	var mask_graphics_679 = new cjs.Graphics().p("EgrZAirIAAm7QAVAFAXgBQCQABBmjCQBmjBAAkSQAAkShmjBQhmjCiQABQgXgBgVAFIAAoeMCszAAAMAAAAj5g");
	var mask_graphics_680 = new cjs.Graphics().p("EgrTAirIAAm7QAVAFAWgBQCQABBmjCQBnjBAAkSQAAkShnjBQhmjCiQABQgWgBgVAFIAAoeMCsxAAAMAAAAj5g");
	var mask_graphics_681 = new cjs.Graphics().p("EgrOAirIAAm7QAVAFAXgBQCQABBmjCQBmjBAAkSQAAkShmjBQhmjCiQABQgXgBgVAFIAAoeMCsxAAAMAAAAj5g");
	var mask_graphics_682 = new cjs.Graphics().p("EgrIAirIAAm7QAVAFAWgBQCQABBmjCQBnjBAAkSQAAkShnjBQhmjCiQABQgWgBgVAFIAAoeMCsvAAAMAAAAj5g");
	var mask_graphics_683 = new cjs.Graphics().p("EgrDAirIAAm7QAVAFAXgBQCQABBmjCQBmjBAAkSQAAkShmjBQhmjCiQABQgXgBgVAFIAAoeMCsuAAAMAAAAj5g");
	var mask_graphics_684 = new cjs.Graphics().p("Egq9AirIAAm7QAVAFAWgBQCQABBmjCQBnjBAAkSQAAkShnjBQhmjCiQABQgWgBgVAFIAAoeMCstAAAMAAAAj5g");
	var mask_graphics_685 = new cjs.Graphics().p("Egq4AirIAAm7QAVAFAWgBQCRABBmjCQBmjBAAkSQAAkShmjBQhmjCiRABQgWgBgVAFIAAoeMCssAAAMAAAAj5g");
	var mask_graphics_686 = new cjs.Graphics().p("EgqyAirIAAm7QAVAFAWgBQCQABBmjCQBmjBABkSQgBkShmjBQhmjCiQABQgWgBgVAFIAAoeMCsqAAAMAAAAj5g");
	var mask_graphics_687 = new cjs.Graphics().p("EgqtAirIAAm7QAVAFAWgBQCRABBmjCQBmjBAAkSQAAkShmjBQhmjCiRABQgWgBgVAFIAAoeMCsqAAAMAAAAj5g");
	var mask_graphics_688 = new cjs.Graphics().p("EgqnAirIAAm7QAVAFAWgBQCQABBmjCQBmjBAAkSQAAkShmjBQhmjCiQABQgWgBgVAFIAAoeMCsoAAAMAAAAj5g");
	var mask_graphics_689 = new cjs.Graphics().p("EgqiAirIAAm7QAVAFAWgBQCRABBljCQBnjBAAkSQAAkShnjBQhljCiRABQgWgBgVAFIAAoeMCsnAAAMAAAAj5g");
	var mask_graphics_690 = new cjs.Graphics().p("EgqcAirIAAm7QAVAFAWgBQCQABBmjCQBmjBAAkSQAAkShmjBQhmjCiQABQgWgBgVAFIAAoeMCsmAAAMAAAAj5g");
	var mask_graphics_691 = new cjs.Graphics().p("EgqXAirIAAm7QAVAFAWgBQCQABBmjCQBnjBAAkSQAAkShnjBQhmjCiQABQgWgBgVAFIAAoeMCslAAAMAAAAj5g");
	var mask_graphics_692 = new cjs.Graphics().p("EgqRAirIAAm7QAVAFAWgBQCQABBmjCQBmjBAAkSQAAkShmjBQhmjCiQABQgWgBgVAFIAAoeMCsjAAAMAAAAj5g");
	var mask_graphics_693 = new cjs.Graphics().p("EgqMAirIAAm7QAVAFAWgBQCQABBmjCQBnjBAAkSQAAkShnjBQhmjCiQABQgWgBgVAFIAAoeMCsjAAAMAAAAj5g");
	var mask_graphics_694 = new cjs.Graphics().p("EgqGAirIAAm7QAVAFAWgBQCQABBmjCQBmjBAAkSQAAkShmjBQhmjCiQABQgWgBgVAFIAAoeMCshAAAMAAAAj5g");
	var mask_graphics_695 = new cjs.Graphics().p("EgqBAirIAAm7QAVAFAWgBQCQABBmjCQBnjBAAkSQAAkShnjBQhmjCiQABQgWgBgVAFIAAoeMCsgAAAMAAAAj5g");
	var mask_graphics_696 = new cjs.Graphics().p("Egp7AirIAAm7QAVAFAWgBQCQABBmjCQBmjBAAkSQAAkShmjBQhmjCiQABQgWgBgVAFIAAoeMCsfAAAMAAAAj5g");
	var mask_graphics_697 = new cjs.Graphics().p("Egp2AirIAAm7QAVAFAWgBQCQABBmjCQBmjBAAkSQAAkShmjBQhmjCiQABQgWgBgVAFIAAoeMCseAAAMAAAAj5g");
	var mask_graphics_698 = new cjs.Graphics().p("EgpwAirIAAm7QAVAFAWgBQCQABBmjCQBmjBAAkSQAAkShmjBQhmjCiQABQgWgBgVAFIAAoeMCscAAAMAAAAj5g");
	var mask_graphics_699 = new cjs.Graphics().p("EgprAirIAAm7QAVAFAWgBQCQABBmjCQBmjBAAkSQAAkShmjBQhmjCiQABQgWgBgVAFIAAoeMCscAAAMAAAAj5g");
	var mask_graphics_700 = new cjs.Graphics().p("EgpmAirIAAm7QAWAFAWgBQCQABBljCQBnjBAAkSQAAkShnjBQhljCiQABQgWgBgWAFIAAoeMCsbAAAMAAAAj5g");
	var mask_graphics_701 = new cjs.Graphics().p("EgpgAirIAAm7QAVAFAWgBQCQABBmjCQBmjBAAkSQAAkShmjBQhmjCiQABQgWgBgVAFIAAoeMCsZAAAMAAAAj5g");
	var mask_graphics_702 = new cjs.Graphics().p("EgpbAirIAAm7QAWAFAWgBQCQABBljCQBnjBAAkSQAAkShnjBQhljCiQABQgWgBgWAFIAAoeMCsZAAAMAAAAj5g");
	var mask_graphics_703 = new cjs.Graphics().p("EgpVAirIAAm7QAVAFAWgBQCQABBmjCQBmjBAAkSQAAkShmjBQhmjCiQABQgWgBgVAFIAAoeMCsXAAAMAAAAj5g");
	var mask_graphics_704 = new cjs.Graphics().p("EgpQAirIAAm7QAWAFAWgBQCQABBljCQBnjBAAkSQAAkShnjBQhljCiQABQgWgBgWAFIAAoeMCsWAAAMAAAAj5g");
	var mask_graphics_705 = new cjs.Graphics().p("EgpKAirIAAm7QAVAFAWgBQCQABBmjCQBmjBAAkSQAAkShmjBQhmjCiQABQgWgBgVAFIAAoeMCsVAAAMAAAAj5g");
	var mask_graphics_706 = new cjs.Graphics().p("EgpFAirIAAm7QAWAFAWgBQCPABBmjCQBmjBAAkSQAAkShmjBQhmjCiPABQgWgBgWAFIAAoeMCsUAAAMAAAAj5g");
	var mask_graphics_707 = new cjs.Graphics().p("Ego/AirIAAm7QAVAFAWgBQCQABBmjCQBmjBAAkSQAAkShmjBQhmjCiQABQgWgBgVAFIAAoeMCsSAAAMAAAAj5g");
	var mask_graphics_708 = new cjs.Graphics().p("Ego6AirIAAm7QAVAFAXgBQCPABBmjCQBmjBAAkSQAAkShmjBQhmjCiPABQgXgBgVAFIAAoeMCsSAAAMAAAAj5g");
	var mask_graphics_709 = new cjs.Graphics().p("Ego0AirIAAm7QAVAFAWgBQCQABBmjCQBmjBAAkSQAAkShmjBQhmjCiQABQgWgBgVAFIAAoeMCsQAAAMAAAAj5g");
	var mask_graphics_710 = new cjs.Graphics().p("EgovAirIAAm7QAVAFAXgBQCPABBmjCQBmjBAAkSQAAkShmjBQhmjCiPABQgXgBgVAFIAAoeMCsPAAAMAAAAj5g");
	var mask_graphics_711 = new cjs.Graphics().p("EgopAirIAAm7QAVAFAWgBQCQABBljCQBnjBAAkSQAAkShnjBQhljCiQABQgWgBgVAFIAAoeMCsOAAAMAAAAj5g");
	var mask_graphics_712 = new cjs.Graphics().p("EgokAirIAAm7QAVAFAXgBQCPABBmjCQBmjBAAkSQAAkShmjBQhmjCiPABQgXgBgVAFIAAoeMCsNAAAMAAAAj5g");
	var mask_graphics_713 = new cjs.Graphics().p("EgoeAirIAAm7QAVAFAWgBQCQABBljCQBnjBAAkSQAAkShnjBQhljCiQABQgWgBgVAFIAAoeMCsLAAAMAAAAj5g");
	var mask_graphics_714 = new cjs.Graphics().p("EgoZAirIAAm7QAVAFAWgBQCQABBmjCQBmjBAAkSQAAkShmjBQhmjCiQABQgWgBgVAFIAAoeMCsLAAAMAAAAj5g");
	var mask_graphics_715 = new cjs.Graphics().p("EgoTAirIAAm7QAVAFAWgBQCQABBljCQBmjBAAkSQAAkShmjBQhljCiQABQgWgBgVAFIAAoeMCsJAAAMAAAAj5g");
	var mask_graphics_716 = new cjs.Graphics().p("EgoOAirIAAm7QAVAFAWgBQCQABBmjCQBmjBAAkSQAAkShmjBQhmjCiQABQgWgBgVAFIAAoeMCsIAAAMAAAAj5g");
	var mask_graphics_717 = new cjs.Graphics().p("EgoIAirIAAm7QAVAFAWgBQCQABBljCQBmjBAAkSQAAkShmjBQhljCiQABQgWgBgVAFIAAoeMCsHAAAMAAAAj5g");
	var mask_graphics_718 = new cjs.Graphics().p("EgoDAirIAAm7QAVAFAWgBQCQABBmjCQBmjBAAkSQAAkShmjBQhmjCiQABQgWgBgVAFIAAoeMCsGAAAMAAAAj5g");
	var mask_graphics_719 = new cjs.Graphics().p("Egn9AirIAAm7QAVAFAWgBQCQABBljCQBmjBAAkSQAAkShmjBQhljCiQABQgWgBgVAFIAAoeMCsFAAAMAAAAj5g");
	var mask_graphics_720 = new cjs.Graphics().p("Egn4AirIAAm7QAVAFAWgBQCQABBmjCQBmjBAAkSQAAkShmjBQhmjCiQABQgWgBgVAFIAAoeMCsEAAAMAAAAj5g");
	var mask_graphics_721 = new cjs.Graphics().p("EgnyAirIAAm7QAVAFAWgBQCPABBmjCQBmjBAAkSQAAkShmjBQhmjCiPABQgWgBgVAFIAAoeMCsCAAAMAAAAj5g");
	var mask_graphics_722 = new cjs.Graphics().p("EgntAirIAAm7QAVAFAWgBQCQABBljCQBnjBAAkSQAAkShnjBQhljCiQABQgWgBgVAFIAAoeMCsCAAAMAAAAj5g");
	var mask_graphics_723 = new cjs.Graphics().p("EgnnAirIAAm7QAVAFAWgBQCPABBmjCQBmjBAAkSQAAkShmjBQhmjCiPABQgWgBgVAFIAAoeMCsAAAAMAAAAj5g");
	var mask_graphics_724 = new cjs.Graphics().p("EgniAirIAAm7QAVAFAWgBQCQABBljCQBmjBAAkSQAAkShmjBQhljCiQABQgWgBgVAFIAAoeMCr/AAAMAAAAj5g");
	var mask_graphics_725 = new cjs.Graphics().p("EgncAirIAAm7QAVAFAWgBQCPABBmjCQBmjBAAkSQAAkShmjBQhmjCiPABQgWgBgVAFIAAoeMCr+AAAMAAAAj5g");
	var mask_graphics_726 = new cjs.Graphics().p("EgnXAirIAAm7QAVAFAWgBQCQABBljCQBmjBAAkSQAAkShmjBQhljCiQABQgWgBgVAFIAAoeMCr9AAAMAAAAj5g");
	var mask_graphics_727 = new cjs.Graphics().p("EgnRAirIAAm7QAVAFAWgBQCPABBmjCQBmjBAAkSQAAkShmjBQhmjCiPABQgWgBgVAFIAAoeMCr7AAAMAAAAj5g");
	var mask_graphics_728 = new cjs.Graphics().p("EgnMAirIAAm7QAVAFAWgBQCQABBljCQBmjBAAkSQAAkShmjBQhljCiQABQgWgBgVAFIAAoeMCr7AAAMAAAAj5g");
	var mask_graphics_729 = new cjs.Graphics().p("EgnGAirIAAm7QAVAFAWgBQCPABBmjCQBmjBAAkSQAAkShmjBQhmjCiPABQgWgBgVAFIAAoeMCr5AAAMAAAAj5g");
	var mask_graphics_730 = new cjs.Graphics().p("EgnBAirIAAm7QAVAFAWgBQCQABBljCQBmjBAAkSQAAkShmjBQhljCiQABQgWgBgVAFIAAoeMCr4AAAMAAAAj5g");
	var mask_graphics_731 = new cjs.Graphics().p("Egm7AirIAAm7QAVAFAWgBQCPABBmjCQBmjBAAkSQAAkShmjBQhmjCiPABQgWgBgVAFIAAoeMCr3AAAMAAAAj5g");
	var mask_graphics_732 = new cjs.Graphics().p("Egm2AirIAAm7QAVAFAWgBQCQABBljCQBmjBAAkSQAAkShmjBQhljCiQABQgWgBgVAFIAAoeMCr2AAAMAAAAj5g");
	var mask_graphics_733 = new cjs.Graphics().p("EgmwAirIAAm7QAVAFAWgBQCPABBmjCQBljBAAkSQAAkShljBQhmjCiPABQgWgBgVAFIAAoeMCr0AAAMAAAAj5g");
	var mask_graphics_734 = new cjs.Graphics().p("EgmrAirIAAm7QAVAFAWgBQCQABBljCQBmjBAAkSQAAkShmjBQhljCiQABQgWgBgVAFIAAoeMCr0AAAMAAAAj5g");
	var mask_graphics_735 = new cjs.Graphics().p("EgmlAirIAAm7QAVAFAWgBQCPABBljCQBmjBAAkSQAAkShmjBQhljCiPABQgWgBgVAFIAAoeMCryAAAMAAAAj5g");
	var mask_graphics_736 = new cjs.Graphics().p("EgmgAirIAAm7QAVAFAWgBQCPABBmjCQBmjBAAkSQAAkShmjBQhmjCiPABQgWgBgVAFIAAoeMCrxAAAMAAAAj5g");
	var mask_graphics_737 = new cjs.Graphics().p("EgmbAirIAAm7QAWAFAWgBQCPABBljCQBmjBAAkSQAAkShmjBQhljCiPABQgWgBgWAFIAAoeMCrxAAAMAAAAj5g");
	var mask_graphics_738 = new cjs.Graphics().p("EgmVAirIAAm7QAVAFAWgBQCPABBmjCQBmjBAAkSQAAkShmjBQhmjCiPABQgWgBgVAFIAAoeMCrvAAAMAAAAj5g");
	var mask_graphics_739 = new cjs.Graphics().p("EgmQAirIAAm7QAWAFAWgBQCPABBljCQBmjBAAkSQAAkShmjBQhljCiPABQgWgBgWAFIAAoeMCruAAAMAAAAj5g");
	var mask_graphics_740 = new cjs.Graphics().p("EgmKAirIAAm7QAVAFAWgBQCPABBmjCQBmjBAAkSQAAkShmjBQhmjCiPABQgWgBgVAFIAAoeMCrtAAAMAAAAj5g");
	var mask_graphics_741 = new cjs.Graphics().p("EgmFAirIAAm7QAVAFAWgBQCQABBljCQBmjBAAkSQAAkShmjBQhljCiQABQgWgBgVAFIAAoeMCrsAAAMAAAAj5g");
	var mask_graphics_742 = new cjs.Graphics().p("Egl/AirIAAm7QAVAFAWgBQCPABBmjCQBljBAAkSQAAkShljBQhmjCiPABQgWgBgVAFIAAoeMCrqAAAMAAAAj5g");
	var mask_graphics_743 = new cjs.Graphics().p("Egl6AirIAAm7QAVAFAWgBQCQABBljCQBmjBAAkSQAAkShmjBQhljCiQABQgWgBgVAFIAAoeMCrqAAAMAAAAj5g");
	var mask_graphics_744 = new cjs.Graphics().p("Egl0AirIAAm7QAVAFAWgBQCPABBmjCQBljBAAkSQAAkShljBQhmjCiPABQgWgBgVAFIAAoeMCroAAAMAAAAj5g");
	var mask_graphics_745 = new cjs.Graphics().p("EglvAirIAAm7QAVAFAWgBQCQABBljCQBmjBAAkSQAAkShmjBQhljCiQABQgWgBgVAFIAAoeMCrnAAAMAAAAj5g");
	var mask_graphics_746 = new cjs.Graphics().p("EglpAirIAAm7QAVAFAWgBQCPABBljCQBmjBAAkSQAAkShmjBQhljCiPABQgWgBgVAFIAAoeMCrmAAAMAAAAj5g");
	var mask_graphics_747 = new cjs.Graphics().p("EglkAirIAAm7QAVAFAWgBQCQABBljCQBmjBAAkSQAAkShmjBQhljCiQABQgWgBgVAFIAAoeMCrlAAAMAAAAj5g");
	var mask_graphics_748 = new cjs.Graphics().p("EgleAirIAAm7QAVAFAWgBQCPABBljCQBmjBAAkSQAAkShmjBQhljCiPABQgWgBgVAFIAAoeMCrjAAAMAAAAj5g");
	var mask_graphics_749 = new cjs.Graphics().p("EglZAirIAAm7QAVAFAWgBQCQABBljCQBmjBAAkSQAAkShmjBQhljCiQABQgWgBgVAFIAAoeMCrjAAAMAAAAj5g");
	var mask_graphics_750 = new cjs.Graphics().p("EglTAirIAAm7QAVAFAWgBQCPABBljCQBmjBAAkSQAAkShmjBQhljCiPABQgWgBgVAFIAAoeMCrhAAAMAAAAj5g");
	var mask_graphics_751 = new cjs.Graphics().p("EglOAirIAAm7QAVAFAWgBQCQABBljCQBljBAAkSQAAkShljBQhljCiQABQgWgBgVAFIAAoeMCrgAAAMAAAAj5g");
	var mask_graphics_752 = new cjs.Graphics().p("EglIAirIAAm7QAVAFAWgBQCPABBljCQBmjBAAkSQAAkShmjBQhljCiPABQgWgBgVAFIAAoeMCrfAAAMAAAAj5g");
	var mask_graphics_753 = new cjs.Graphics().p("EglDAirIAAm7QAVAFAWgBQCPABBmjCQBljBAAkSQAAkShljBQhmjCiPABQgWgBgVAFIAAoeMCreAAAMAAAAj5g");
	var mask_graphics_754 = new cjs.Graphics().p("Egk9AirIAAm7QAVAFAWgBQCPABBljCQBmjBAAkSQAAkShmjBQhljCiPABQgWgBgVAFIAAoeMCrcAAAMAAAAj5g");
	var mask_graphics_755 = new cjs.Graphics().p("Egk4AirIAAm7QAVAFAWgBQCPABBmjCQBljBAAkSQAAkShljBQhmjCiPABQgWgBgVAFIAAoeMCrcAAAMAAAAj5g");
	var mask_graphics_756 = new cjs.Graphics().p("EgkyAirIAAm7QAVAFAWgBQCPABBljCQBmjBAAkSQAAkShmjBQhljCiPABQgWgBgVAFIAAoeMCraAAAMAAAAj5g");
	var mask_graphics_757 = new cjs.Graphics().p("EgktAirIAAm7QAVAFAWgBQCPABBljCQBmjBAAkSQAAkShmjBQhljCiPABQgWgBgVAFIAAoeMCraAAAMAAAAj5g");
	var mask_graphics_758 = new cjs.Graphics().p("EgknAirIAAm7QAVAFAWgBQCPABBljCQBmjBAAkSQAAkShmjBQhljCiPABQgWgBgVAFIAAoeMCrYAAAMAAAAj5g");
	var mask_graphics_759 = new cjs.Graphics().p("EgkiAirIAAm7QAVAFAWgBQCPABBljCQBmjBAAkSQAAkShmjBQhljCiPABQgWgBgVAFIAAoeMCrXAAAMAAAAj5g");
	var mask_graphics_760 = new cjs.Graphics().p("EgkcAirIAAm7QAVAFAWgBQCPABBljCQBljBAAkSQAAkShljBQhljCiPABQgWgBgVAFIAAoeMCrWAAAMAAAAj5g");
	var mask_graphics_761 = new cjs.Graphics().p("EgkXAirIAAm7QAVAFAWgBQCPABBljCQBmjBAAkSQAAkShmjBQhljCiPABQgWgBgVAFIAAoeMCrVAAAMAAAAj5g");
	var mask_graphics_762 = new cjs.Graphics().p("EgkRAirIAAm7QAVAFAWgBQCPABBljCQBljBAAkSQAAkShljBQhljCiPABQgWgBgVAFIAAoeMCrTAAAMAAAAj5g");
	var mask_graphics_763 = new cjs.Graphics().p("EgkMAirIAAm7QAVAFAWgBQCPABBljCQBmjBAAkSQAAkShmjBQhljCiPABQgWgBgVAFIAAoeMCrTAAAMAAAAj5g");
	var mask_graphics_764 = new cjs.Graphics().p("EgkGAirIAAm7QAVAFAWgBQCPABBljCQBljBAAkSQAAkShljBQhljCiPABQgWgBgVAFIAAoeMCrRAAAMAAAAj5g");
	var mask_graphics_765 = new cjs.Graphics().p("EgkBAirIAAm7QAVAFAWgBQCPABBljCQBmjBAAkSQAAkShmjBQhljCiPABQgWgBgVAFIAAoeMCrQAAAMAAAAj5g");
	var mask_graphics_766 = new cjs.Graphics().p("Egj7AirIAAm7QAVAFAWgBQCPABBljCQBljBAAkSQAAkShljBQhljCiPABQgWgBgVAFIAAoeMCrPAAAMAAAAj5g");
	var mask_graphics_767 = new cjs.Graphics().p("Egj2AirIAAm7QAVAFAWgBQCPABBljCQBmjBAAkSQAAkShmjBQhljCiPABQgWgBgVAFIAAoeMCrOAAAMAAAAj5g");
	var mask_graphics_768 = new cjs.Graphics().p("EgjwAirIAAm7QAVAFAWgBQCOABBljCQBmjBAAkSQAAkShmjBQhljCiOABQgWgBgVAFIAAoeMCrMAAAMAAAAj5g");
	var mask_graphics_769 = new cjs.Graphics().p("EgjrAirIAAm7QAVAFAWgBQCPABBljCQBmjBAAkSQAAkShmjBQhljCiPABQgWgBgVAFIAAoeMCrMAAAMAAAAj5g");
	var mask_graphics_770 = new cjs.Graphics().p("EgjlAirIAAm7QAVAFAVgBQCPABBljCQBmjBAAkSQAAkShmjBQhljCiPABQgVgBgVAFIAAoeMCrKAAAMAAAAj5g");
	var mask_graphics_771 = new cjs.Graphics().p("EgjgAirIAAm7QAVAFAWgBQCPABBljCQBljBAAkSQAAkShljBQhljCiPABQgWgBgVAFIAAoeMCrJAAAMAAAAj5g");
	var mask_graphics_772 = new cjs.Graphics().p("EgjaAirIAAm7QAUAFAWgBQCPABBljCQBmjBAAkSQAAkShmjBQhljCiPABQgWgBgUAFIAAoeMCrIAAAMAAAAj5g");
	var mask_graphics_773 = new cjs.Graphics().p("EgjVAirIAAm7QAVAFAWgBQCPABBljCQBljBAAkSQAAkShljBQhljCiPABQgWgBgVAFIAAoeMCrHAAAMAAAAj5g");
	var mask_graphics_774 = new cjs.Graphics().p("EgjQAirIAAm7QAVAFAWgBQCPABBljCQBmjBAAkSQAAkShmjBQhljCiPABQgWgBgVAFIAAoeMCrGAAAMAAAAj5g");
	var mask_graphics_775 = new cjs.Graphics().p("EgjKAirIAAm7QAVAFAWgBQCPABBljCQBljBAAkSQAAkShljBQhljCiPABQgWgBgVAFIAAoeMCrFAAAMAAAAj5g");
	var mask_graphics_776 = new cjs.Graphics().p("EgjFAirIAAm7QAVAFAWgBQCPABBljCQBmjBAAkSQAAkShmjBQhljCiPABQgWgBgVAFIAAoeMCrEAAAMAAAAj5g");
	var mask_graphics_777 = new cjs.Graphics().p("Egi/AirIAAm7QAVAFAWgBQCPABBljCQBljBAAkSQAAkShljBQhljCiPABQgWgBgVAFIAAoeMCrCAAAMAAAAj5g");
	var mask_graphics_778 = new cjs.Graphics().p("Egi6AirIAAm7QAVAFAWgBQCPABBljCQBmjBAAkSQAAkShmjBQhljCiPABQgWgBgVAFIAAoeMCrCAAAMAAAAj5g");
	var mask_graphics_779 = new cjs.Graphics().p("Egi0AirIAAm7QAVAFAWgBQCPABBljCQBljBAAkSQAAkShljBQhljCiPABQgWgBgVAFIAAoeMCrAAAAMAAAAj5g");
	var mask_graphics_780 = new cjs.Graphics().p("EgivAirIAAm7QAVAFAWgBQCPABBljCQBljBAAkSQAAkShljBQhljCiPABQgWgBgVAFIAAoeMCq/AAAMAAAAj5g");
	var mask_graphics_781 = new cjs.Graphics().p("EgipAirIAAm7QAVAFAWgBQCPABBkjCQBmjBAAkSQAAkShmjBQhkjCiPABQgWgBgVAFIAAoeMCq+AAAMAAAAj5g");
	var mask_graphics_782 = new cjs.Graphics().p("EgikAirIAAm7QAVAFAWgBQCPABBljCQBljBAAkSQAAkShljBQhljCiPABQgWgBgVAFIAAoeMCq9AAAMAAAAj5g");
	var mask_graphics_783 = new cjs.Graphics().p("EgieAirIAAm7QAVAFAWgBQCOABBljCQBmjBAAkSQAAkShmjBQhljCiOABQgWgBgVAFIAAoeMCq7AAAMAAAAj5g");
	var mask_graphics_784 = new cjs.Graphics().p("EgiZAirIAAm7QAVAFAWgBQCPABBljCQBljBAAkSQAAkShljBQhljCiPABQgWgBgVAFIAAoeMCq7AAAMAAAAj5g");
	var mask_graphics_785 = new cjs.Graphics().p("EgiTAirIAAm7QAVAFAWgBQCOABBljCQBmjBAAkSQAAkShmjBQhljCiOABQgWgBgVAFIAAoeMCq5AAAMAAAAj5g");
	var mask_graphics_786 = new cjs.Graphics().p("EgiOAirIAAm7QAVAFAWgBQCPABBljCQBljBAAkSQAAkShljBQhljCiPABQgWgBgVAFIAAoeMCq4AAAMAAAAj5g");
	var mask_graphics_787 = new cjs.Graphics().p("EgiIAirIAAm7QAVAFAWgBQCOABBljCQBmjBAAkSQAAkShmjBQhljCiOABQgWgBgVAFIAAoeMCq3AAAMAAAAj5g");
	var mask_graphics_788 = new cjs.Graphics().p("EgiDAirIAAm7QAVAFAWgBQCPABBljCQBljBAAkSQAAkShljBQhljCiPABQgWgBgVAFIAAoeMCq2AAAMAAAAj5g");
	var mask_graphics_789 = new cjs.Graphics().p("Egh9AirIAAm7QAVAFAWgBQCOABBljCQBljBAAkSQAAkShljBQhljCiOABQgWgBgVAFIAAoeMCq0AAAMAAAAj5g");
	var mask_graphics_790 = new cjs.Graphics().p("Egh4AirIAAm7QAVAFAWgBQCPABBljCQBljBAAkSQAAkShljBQhljCiPABQgWgBgVAFIAAoeMCq0AAAMAAAAj5g");
	var mask_graphics_791 = new cjs.Graphics().p("EghyAirIAAm7QAVAFAWgBQCOABBljCQBljBAAkSQAAkShljBQhljCiOABQgWgBgVAFIAAoeMCqyAAAMAAAAj5g");
	var mask_graphics_792 = new cjs.Graphics().p("EghtAirIAAm7QAVAFAWgBQCPABBkjCQBmjBAAkSQAAkShmjBQhkjCiPABQgWgBgVAFIAAoeMCqxAAAMAAAAj5g");
	var mask_graphics_793 = new cjs.Graphics().p("EghnAirIAAm7QAVAFAWgBQCOABBljCQBljBAAkSQAAkShljBQhljCiOABQgWgBgVAFIAAoeMCqwAAAMAAAAj5g");
	var mask_graphics_794 = new cjs.Graphics().p("EghiAirIAAm7QAVAFAWgBQCPABBkjCQBmjBAAkSQAAkShmjBQhkjCiPABQgWgBgVAFIAAoeMCqvAAAMAAAAj5g");
	var mask_graphics_795 = new cjs.Graphics().p("EghcAirIAAm7QAVAFAWgBQCOABBljCQBljBAAkSQAAkShljBQhljCiOABQgWgBgVAFIAAoeMCquAAAMAAAAj5g");
	var mask_graphics_796 = new cjs.Graphics().p("EghXAirIAAm7QAVAFAWgBQCPABBkjCQBmjBAAkSQAAkShmjBQhkjCiPABQgWgBgVAFIAAoeMCqtAAAMAAAAj5g");
	var mask_graphics_797 = new cjs.Graphics().p("EghRAirIAAm7QAVAFAVgBQCPABBljCQBljBAAkSQAAkShljBQhljCiPABQgVgBgVAFIAAoeMCqrAAAMAAAAj5g");
	var mask_graphics_798 = new cjs.Graphics().p("EghMAirIAAm7QAVAFAWgBQCOABBljCQBljBAAkSQAAkShljBQhljCiOABQgWgBgVAFIAAoeMCqrAAAMAAAAj5g");
	var mask_graphics_799 = new cjs.Graphics().p("EghGAirIAAm7QAVAFAVgBQCPABBljCQBljBAAkSQAAkShljBQhljCiPABQgVgBgVAFIAAoeMCqpAAAMAAAAj5g");
	var mask_graphics_800 = new cjs.Graphics().p("EghBAirIAAm7QAVAFAWgBQCOABBljCQBljBAAkSQAAkShljBQhljCiOABQgWgBgVAFIAAoeMCqoAAAMAAAAj5g");
	var mask_graphics_801 = new cjs.Graphics().p("Egg7AirIAAm7QAVAFAVgBQCPABBljCQBljBAAkSQAAkShljBQhljCiPABQgVgBgVAFIAAoeMCqnAAAMAAAAj5g");
	var mask_graphics_802 = new cjs.Graphics().p("Egg2AirIAAm7QAVAFAWgBQCOABBljCQBljBAAkSQAAkShljBQhljCiOABQgWgBgVAFIAAoeMCqmAAAMAAAAj5g");
	var mask_graphics_803 = new cjs.Graphics().p("EggwAirIAAm7QAVAFAVgBQCPABBkjCQBmjBAAkSQAAkShmjBQhkjCiPABQgVgBgVAFIAAoeMCqkAAAMAAAAj5g");
	var mask_graphics_804 = new cjs.Graphics().p("EggrAirIAAm7QAVAFAWgBQCOABBljCQBljBAAkSQAAkShljBQhljCiOABQgWgBgVAFIAAoeMCqkAAAMAAAAj5g");
	var mask_graphics_805 = new cjs.Graphics().p("EgglAirIAAm7QAUAFAWgBQCPABBkjCQBmjBAAkSQAAkShmjBQhkjCiPABQgWgBgUAFIAAoeMCqiAAAMAAAAj5g");
	var mask_graphics_806 = new cjs.Graphics().p("EgggAirIAAm7QAVAFAWgBQCOABBljCQBljBAAkSQAAkShljBQhljCiOABQgWgBgVAFIAAoeMCqhAAAMAAAAj5g");
	var mask_graphics_807 = new cjs.Graphics().p("EggaAirIAAm7QAUAFAWgBQCPABBkjCQBljBAAkSQAAkShljBQhkjCiPABQgWgBgUAFIAAoeMCqgAAAMAAAAj5g");
	var mask_graphics_808 = new cjs.Graphics().p("EggVAirIAAm7QAVAFAWgBQCOABBljCQBljBAAkSQAAkShljBQhljCiOABQgWgBgVAFIAAoeMCqfAAAMAAAAj5g");
	var mask_graphics_809 = new cjs.Graphics().p("EggPAirIAAm7QAUAFAWgBQCPABBkjCQBljBAAkSQAAkShljBQhkjCiPABQgWgBgUAFIAAoeMCqdAAAMAAAAj5g");
	var mask_graphics_810 = new cjs.Graphics().p("EggKAirIAAm7QAVAFAWgBQCOABBljCQBljBAAkSQAAkShljBQhljCiOABQgWgBgVAFIAAoeMCqdAAAMAAAAj5g");
	var mask_graphics_811 = new cjs.Graphics().p("EggFAirIAAm7QAVAFAWgBQCPABBkjCQBljBAAkSQAAkShljBQhkjCiPABQgWgBgVAFIAAoeMCqcAAAMAAAAj5g");
	var mask_graphics_812 = new cjs.Graphics().p("Egf/AirIAAm7QAVAFAWgBQCOABBljCQBljBAAkSQAAkShljBQhljCiOABQgWgBgVAFIAAoeMCqaAAAMAAAAj5g");
	var mask_graphics_813 = new cjs.Graphics().p("Egf6AirIAAm7QAVAFAWgBQCOABBljCQBljBAAkSQAAkShljBQhljCiOABQgWgBgVAFIAAoeMCqaAAAMAAAAj5g");
	var mask_graphics_814 = new cjs.Graphics().p("Egf0AirIAAm7QAVAFAWgBQCOABBkjCQBmjBAAkSQAAkShmjBQhkjCiOABQgWgBgVAFIAAoeMCqYAAAMAAAAj5g");
	var mask_graphics_815 = new cjs.Graphics().p("EgfvAirIAAm7QAVAFAWgBQCOABBljCQBljBAAkSQAAkShljBQhljCiOABQgWgBgVAFIAAoeMCqXAAAMAAAAj5g");
	var mask_graphics_816 = new cjs.Graphics().p("EgfpAirIAAm7QAVAFAWgBQCOABBkjCQBljBAAkSQAAkShljBQhkjCiOABQgWgBgVAFIAAoeMCqWAAAMAAAAj5g");
	var mask_graphics_817 = new cjs.Graphics().p("EgfkAirIAAm7QAVAFAWgBQCOABBljCQBljBAAkSQAAkShljBQhljCiOABQgWgBgVAFIAAoeMCqVAAAMAAAAj5g");
	var mask_graphics_818 = new cjs.Graphics().p("EgfeAirIAAm7QAVAFAWgBQCOABBkjCQBljBAAkSQAAkShljBQhkjCiOABQgWgBgVAFIAAoeMCqTAAAMAAAAj5g");
	var mask_graphics_819 = new cjs.Graphics().p("EgfZAirIAAm7QAVAFAWgBQCOABBljCQBljBAAkSQAAkShljBQhljCiOABQgWgBgVAFIAAoeMCqTAAAMAAAAj5g");
	var mask_graphics_820 = new cjs.Graphics().p("EgfTAirIAAm7QAVAFAWgBQCOABBkjCQBljBAAkSQAAkShljBQhkjCiOABQgWgBgVAFIAAoeMCqRAAAMAAAAj5g");
	var mask_graphics_821 = new cjs.Graphics().p("EgfOAirIAAm7QAVAFAWgBQCOABBljCQBljBAAkSQAAkShljBQhljCiOABQgWgBgVAFIAAoeMCqQAAAMAAAAj5g");
	var mask_graphics_822 = new cjs.Graphics().p("EgfIAirIAAm7QAVAFAWgBQCOABBkjCQBljBAAkSQAAkShljBQhkjCiOABQgWgBgVAFIAAoeMCqPAAAMAAAAj5g");
	var mask_graphics_823 = new cjs.Graphics().p("EgfDAirIAAm7QAVAFAWgBQCOABBljCQBljBAAkSQAAkShljBQhljCiOABQgWgBgVAFIAAoeMCqOAAAMAAAAj5g");
	var mask_graphics_824 = new cjs.Graphics().p("Ege9AirIAAm7QAVAFAWgBQCOABBkjCQBljBAAkSQAAkShljBQhkjCiOABQgWgBgVAFIAAoeMCqMAAAMAAAAj5g");
	var mask_graphics_825 = new cjs.Graphics().p("Ege4AirIAAm7QAVAFAWgBQCOABBljCQBkjBAAkSQAAkShkjBQhljCiOABQgWgBgVAFIAAoeMCqMAAAMAAAAj5g");
	var mask_graphics_826 = new cjs.Graphics().p("EgeyAirIAAm7QAVAFAVgBQCPABBkjCQBljBAAkSQAAkShljBQhkjCiPABQgVgBgVAFIAAoeMCqKAAAMAAAAj5g");
	var mask_graphics_827 = new cjs.Graphics().p("EgetAirIAAm7QAVAFAWgBQCOABBkjCQBljBAAkSQAAkShljBQhkjCiOABQgWgBgVAFIAAoeMCqJAAAMAAAAj5g");
	var mask_graphics_828 = new cjs.Graphics().p("EgenAirIAAm7QAVAFAVgBQCOABBljCQBljBAAkSQAAkShljBQhljCiOABQgVgBgVAFIAAoeMCqIAAAMAAAAj5g");
	var mask_graphics_829 = new cjs.Graphics().p("EgeiAirIAAm7QAVAFAWgBQCOABBkjCQBljBAAkSQAAkShljBQhkjCiOABQgWgBgVAFIAAoeMCqHAAAMAAAAj5g");
	var mask_graphics_830 = new cjs.Graphics().p("EgecAirIAAm7QAVAFAVgBQCOABBljCQBljBAAkSQAAkShljBQhljCiOABQgVgBgVAFIAAoeMCqFAAAMAAAAj5g");
	var mask_graphics_831 = new cjs.Graphics().p("EgeXAirIAAm7QAVAFAWgBQCOABBkjCQBljBAAkSQAAkShljBQhkjCiOABQgWgBgVAFIAAoeMCqFAAAMAAAAj5g");
	var mask_graphics_832 = new cjs.Graphics().p("EgeRAirIAAm7QAVAFAVgBQCOABBljCQBljBAAkSQAAkShljBQhljCiOABQgVgBgVAFIAAoeMCqDAAAMAAAAj5g");
	var mask_graphics_833 = new cjs.Graphics().p("EgeMAirIAAm7QAVAFAWgBQCOABBkjCQBljBAAkSQAAkShljBQhkjCiOABQgWgBgVAFIAAoeMCqDAAAMAAAAj5g");
	var mask_graphics_834 = new cjs.Graphics().p("EgeGAirIAAm7QAVAFAVgBQCOABBljCQBkjBAAkSQAAkShkjBQhljCiOABQgVgBgVAFIAAoeMCqBAAAMAAAAj5g");
	var mask_graphics_835 = new cjs.Graphics().p("EgeBAirIAAm7QAVAFAWgBQCOABBkjCQBljBAAkSQAAkShljBQhkjCiOABQgWgBgVAFIAAoeMCqAAAAMAAAAj5g");
	var mask_graphics_836 = new cjs.Graphics().p("Egd7AirIAAm7QAUAFAWgBQCOABBljCQBkjBAAkSQAAkShkjBQhljCiOABQgWgBgUAFIAAoeMCp/AAAMAAAAj5g");
	var mask_graphics_837 = new cjs.Graphics().p("Egd2AirIAAm7QAVAFAWgBQCOABBkjCQBljBAAkSQAAkShljBQhkjCiOABQgWgBgVAFIAAoeMCp+AAAMAAAAj5g");
	var mask_graphics_838 = new cjs.Graphics().p("EgdwAirIAAm7QAUAFAWgBQCOABBkjCQBljBAAkSQAAkShljBQhkjCiOABQgWgBgUAFIAAoeMCp8AAAMAAAAj5g");
	var mask_graphics_839 = new cjs.Graphics().p("EgdrAirIAAm7QAVAFAWgBQCOABBkjCQBljBAAkSQAAkShljBQhkjCiOABQgWgBgVAFIAAoeMCp8AAAMAAAAj5g");
	var mask_graphics_840 = new cjs.Graphics().p("EgdlAirIAAm7QAUAFAWgBQCOABBkjCQBljBAAkSQAAkShljBQhkjCiOABQgWgBgUAFIAAoeMCp6AAAMAAAAj5g");
	var mask_graphics_841 = new cjs.Graphics().p("EgdgAirIAAm7QAVAFAWgBQCOABBkjCQBljBAAkSQAAkShljBQhkjCiOABQgWgBgVAFIAAoeMCp5AAAMAAAAj5g");
	var mask_graphics_842 = new cjs.Graphics().p("EgdaAirIAAm7QAUAFAWgBQCOABBkjCQBljBAAkSQAAkShljBQhkjCiOABQgWgBgUAFIAAoeMCp4AAAMAAAAj5g");
	var mask_graphics_843 = new cjs.Graphics().p("EgdVAirIAAm7QAVAFAWgBQCNABBljCQBljBAAkSQAAkShljBQhljCiNABQgWgBgVAFIAAoeMCp3AAAMAAAAj5g");
	var mask_graphics_844 = new cjs.Graphics().p("EgdPAirIAAm7QAUAFAWgBQCOABBkjCQBljBAAkSQAAkShljBQhkjCiOABQgWgBgUAFIAAoeMCp1AAAMAAAAj5g");
	var mask_graphics_845 = new cjs.Graphics().p("EgdKAirIAAm7QAVAFAWgBQCNABBljCQBkjBAAkSQAAkShkjBQhljCiNABQgWgBgVAFIAAoeMCp1AAAMAAAAj5g");
	var mask_graphics_846 = new cjs.Graphics().p("EgdEAirIAAm7QAUAFAWgBQCOABBkjCQBljBAAkSQAAkShljBQhkjCiOABQgWgBgUAFIAAoeMCpzAAAMAAAAj5g");
	var mask_graphics_847 = new cjs.Graphics().p("Egc/AirIAAm7QAVAFAWgBQCNABBljCQBkjBAAkSQAAkShkjBQhljCiNABQgWgBgVAFIAAoeMCpyAAAMAAAAj5g");
	var mask_graphics_848 = new cjs.Graphics().p("Egc6AirIAAm7QAVAFAWgBQCOABBkjCQBljBAAkSQAAkShljBQhkjCiOABQgWgBgVAFIAAoeMCpyAAAMAAAAj5g");
	var mask_graphics_849 = new cjs.Graphics().p("Egc0AirIAAm7QAVAFAWgBQCNABBkjCQBljBAAkSQAAkShljBQhkjCiNABQgWgBgVAFIAAoeMCpwAAAMAAAAj5g");
	var mask_graphics_850 = new cjs.Graphics().p("EgcvAirIAAm7QAVAFAWgBQCOABBkjCQBljBAAkSQAAkShljBQhkjCiOABQgWgBgVAFIAAoeMCpvAAAMAAAAj5g");
	var mask_graphics_851 = new cjs.Graphics().p("EgcpAirIAAm7QAVAFAWgBQCNABBkjCQBljBAAkSQAAkShljBQhkjCiNABQgWgBgVAFIAAoeMCpuAAAMAAAAj5g");
	var mask_graphics_852 = new cjs.Graphics().p("EgckAirIAAm7QAVAFAWgBQCOABBkjCQBljBAAkSQAAkShljBQhkjCiOABQgWgBgVAFIAAoeMCptAAAMAAAAj5g");
	var mask_graphics_853 = new cjs.Graphics().p("EgceAirIAAm7QAVAFAVgBQCOABBkjCQBljBAAkSQAAkShljBQhkjCiOABQgVgBgVAFIAAoeMCprAAAMAAAAj5g");
	var mask_graphics_854 = new cjs.Graphics().p("EgcZAirIAAm7QAVAFAWgBQCOABBkjCQBkjBAAkSQAAkShkjBQhkjCiOABQgWgBgVAFIAAoeMCprAAAMAAAAj5g");
	var mask_graphics_855 = new cjs.Graphics().p("EgcTAirIAAm7QAVAFAVgBQCOABBkjCQBljBAAkSQAAkShljBQhkjCiOABQgVgBgVAFIAAoeMCppAAAMAAAAj5g");
	var mask_graphics_856 = new cjs.Graphics().p("EgcOAirIAAm7QAVAFAWgBQCOABBkjCQBkjBAAkSQAAkShkjBQhkjCiOABQgWgBgVAFIAAoeMCpoAAAMAAAAj5g");
	var mask_graphics_857 = new cjs.Graphics().p("EgcIAirIAAm7QAVAFAVgBQCOABBkjCQBljBAAkSQAAkShljBQhkjCiOABQgVgBgVAFIAAoeMCpnAAAMAAAAj5g");
	var mask_graphics_858 = new cjs.Graphics().p("EgcDAirIAAm7QAVAFAWgBQCNABBljCQBkjBAAkSQAAkShkjBQhljCiNABQgWgBgVAFIAAoeMCpmAAAMAAAAj5g");
	var mask_graphics_859 = new cjs.Graphics().p("Egb9AirIAAm7QAVAFAVgBQCOABBkjCQBljBAAkSQAAkShljBQhkjCiOABQgVgBgVAFIAAoeMCpkAAAMAAAAj5g");
	var mask_graphics_860 = new cjs.Graphics().p("Egb4AirIAAm7QAVAFAWgBQCNABBkjCQBljBAAkSQAAkShljBQhkjCiNABQgWgBgVAFIAAoeMCpkAAAMAAAAj5g");
	var mask_graphics_861 = new cjs.Graphics().p("EgbyAirIAAm7QAVAFAVgBQCOABBkjCQBljBAAkSQAAkShljBQhkjCiOABQgVgBgVAFIAAoeMCpiAAAMAAAAj5g");
	var mask_graphics_862 = new cjs.Graphics().p("EgbtAirIAAm7QAVAFAWgBQCNABBkjCQBljBAAkSQAAkShljBQhkjCiNABQgWgBgVAFIAAoeMCphAAAMAAAAj5g");
	var mask_graphics_863 = new cjs.Graphics().p("EgbnAirIAAm7QAVAFAVgBQCOABBkjCQBkjBAAkSQAAkShkjBQhkjCiOABQgVgBgVAFIAAoeMCpgAAAMAAAAj5g");
	var mask_graphics_864 = new cjs.Graphics().p("EgbiAirIAAm7QAVAFAWgBQCNABBkjCQBljBAAkSQAAkShljBQhkjCiNABQgWgBgVAFIAAoeMCpfAAAMAAAAj5g");
	var mask_graphics_865 = new cjs.Graphics().p("EgbcAirIAAm7QAVAFAVgBQCOABBkjCQBkjBAAkSQAAkShkjBQhkjCiOABQgVgBgVAFIAAoeMCpdAAAMAAAAj5g");
	var mask_graphics_866 = new cjs.Graphics().p("EgbXAirIAAm7QAVAFAWgBQCNABBkjCQBljBAAkSQAAkShljBQhkjCiNABQgWgBgVAFIAAoeMCpdAAAMAAAAj5g");
	var mask_graphics_867 = new cjs.Graphics().p("EgbRAirIAAm7QAUAFAWgBQCOABBkjCQBkjBAAkSQAAkShkjBQhkjCiOABQgWgBgUAFIAAoeMCpbAAAMAAAAj5g");
	var mask_graphics_868 = new cjs.Graphics().p("EgbMAirIAAm7QAVAFAWgBQCNABBkjCQBljBAAkSQAAkShljBQhkjCiNABQgWgBgVAFIAAoeMCpbAAAMAAAAj5g");
	var mask_graphics_869 = new cjs.Graphics().p("EgbGAirIAAm7QAUAFAWgBQCOABBkjCQBkjBAAkSQAAkShkjBQhkjCiOABQgWgBgUAFIAAoeMCpZAAAMAAAAj5g");
	var mask_graphics_870 = new cjs.Graphics().p("EgbBAirIAAm7QAVAFAWgBQCNABBkjCQBljBAAkSQAAkShljBQhkjCiNABQgWgBgVAFIAAoeMCpYAAAMAAAAj5g");
	var mask_graphics_871 = new cjs.Graphics().p("Ega7AirIAAm7QAUAFAWgBQCOABBkjCQBkjBAAkSQAAkShkjBQhkjCiOABQgWgBgUAFIAAoeMCpXAAAMAAAAj5g");
	var mask_graphics_872 = new cjs.Graphics().p("Ega2AirIAAm7QAVAFAWgBQCNABBkjCQBkjBAAkSQAAkShkjBQhkjCiNABQgWgBgVAFIAAoeMCpWAAAMAAAAj5g");
	var mask_graphics_873 = new cjs.Graphics().p("EgawAirIAAm7QAUAFAWgBQCNABBkjCQBljBAAkSQAAkShljBQhkjCiNABQgWgBgUAFIAAoeMCpUAAAMAAAAj5g");
	var mask_graphics_874 = new cjs.Graphics().p("EgarAirIAAm7QAVAFAWgBQCNABBkjCQBkjBAAkSQAAkShkjBQhkjCiNABQgWgBgVAFIAAoeMCpUAAAMAAAAj5g");
	var mask_graphics_875 = new cjs.Graphics().p("EgalAirIAAm7QAUAFAWgBQCNABBkjCQBljBAAkSQAAkShljBQhkjCiNABQgWgBgUAFIAAoeMCpSAAAMAAAAj5g");
	var mask_graphics_876 = new cjs.Graphics().p("EgagAirIAAm7QAVAFAWgBQCNABBkjCQBkjBAAkSQAAkShkjBQhkjCiNABQgWgBgVAFIAAoeMCpRAAAMAAAAj5g");
	var mask_graphics_877 = new cjs.Graphics().p("EgaaAirIAAm7QAUAFAWgBQCNABBkjCQBljBAAkSQAAkShljBQhkjCiNABQgWgBgUAFIAAoeMCpQAAAMAAAAj5g");
	var mask_graphics_878 = new cjs.Graphics().p("EgaVAirIAAm7QAVAFAWgBQCNABBkjCQBkjBAAkSQAAkShkjBQhkjCiNABQgWgBgVAFIAAoeMCpPAAAMAAAAj5g");
	var mask_graphics_879 = new cjs.Graphics().p("EgaPAirIAAm7QAUAFAWgBQCNABBkjCQBljBAAkSQAAkShljBQhkjCiNABQgWgBgUAFIAAoeMCpNAAAMAAAAj5g");
	var mask_graphics_880 = new cjs.Graphics().p("EgaKAirIAAm7QAVAFAVgBQCOABBkjCQBkjBAAkSQAAkShkjBQhkjCiOABQgVgBgVAFIAAoeMCpNAAAMAAAAj5g");
	var mask_graphics_881 = new cjs.Graphics().p("EgaEAirIAAm7QAUAFAWgBQCNABBkjCQBkjBAAkSQAAkShkjBQhkjCiNABQgWgBgUAFIAAoeMCpLAAAMAAAAj5g");
	var mask_graphics_882 = new cjs.Graphics().p("EgZ/AirIAAm7QAVAFAVgBQCOABBkjCQBkjBAAkSQAAkShkjBQhkjCiOABQgVgBgVAFIAAoeMCpKAAAMAAAAj5g");
	var mask_graphics_883 = new cjs.Graphics().p("EgZ5AirIAAm7QAUAFAWgBQCNABBkjCQBkjBAAkSQAAkShkjBQhkjCiNABQgWgBgUAFIAAoeMCpJAAAMAAAAj5g");
	var mask_graphics_884 = new cjs.Graphics().p("EgZ0AirIAAm7QAVAFAVgBQCOABBjjCQBljBAAkSQAAkShljBQhjjCiOABQgVgBgVAFIAAoeMCpIAAAMAAAAj5g");
	var mask_graphics_885 = new cjs.Graphics().p("EgZvAirIAAm7QAVAFAWgBQCNABBkjCQBkjBAAkSQAAkShkjBQhkjCiNABQgWgBgVAFIAAoeMCpHAAAMAAAAj5g");
	var mask_graphics_886 = new cjs.Graphics().p("EgZpAirIAAm7QAVAFAVgBQCOABBjjCQBljBAAkSQAAkShljBQhjjCiOABQgVgBgVAFIAAoeMCpGAAAMAAAAj5g");
	var mask_graphics_887 = new cjs.Graphics().p("EgZkAirIAAm7QAVAFAWgBQCNABBkjCQBkjBAAkSQAAkShkjBQhkjCiNABQgWgBgVAFIAAoeMCpFAAAMAAAAj5g");
	var mask_graphics_888 = new cjs.Graphics().p("EgZeAirIAAm7QAVAFAVgBQCNABBkjCQBljBAAkSQAAkShljBQhkjCiNABQgVgBgVAFIAAoeMCpDAAAMAAAAj5g");
	var mask_graphics_889 = new cjs.Graphics().p("EgZZAirIAAm7QAVAFAWgBQCNABBkjCQBkjBAAkSQAAkShkjBQhkjCiNABQgWgBgVAFIAAoeMCpDAAAMAAAAj5g");
	var mask_graphics_890 = new cjs.Graphics().p("EgZTAirIAAm7QAVAFAVgBQCNABBkjCQBkjBAAkSQAAkShkjBQhkjCiNABQgVgBgVAFIAAoeMCpBAAAMAAAAj5g");
	var mask_graphics_891 = new cjs.Graphics().p("EgZOAirIAAm7QAVAFAWgBQCNABBkjCQBkjBAAkSQAAkShkjBQhkjCiNABQgWgBgVAFIAAoeMCpAAAAMAAAAj5g");
	var mask_graphics_892 = new cjs.Graphics().p("EgZIAirIAAm7QAVAFAVgBQCNABBkjCQBkjBAAkSQAAkShkjBQhkjCiNABQgVgBgVAFIAAoeMCo/AAAMAAAAj5g");
	var mask_graphics_893 = new cjs.Graphics().p("EgZDAirIAAm7QAVAFAWgBQCNABBkjCQBkjBAAkSQAAkShkjBQhkjCiNABQgWgBgVAFIAAoeMCo+AAAMAAAAj5g");
	var mask_graphics_894 = new cjs.Graphics().p("EgY9AirIAAm7QAVAFAVgBQCNABBkjCQBkjBAAkSQAAkShkjBQhkjCiNABQgVgBgVAFIAAoeMCo8AAAMAAAAj5g");
	var mask_graphics_895 = new cjs.Graphics().p("EgY4AirIAAm7QAVAFAWgBQCNABBjjCQBljBAAkSQAAkShljBQhjjCiNABQgWgBgVAFIAAoeMCo8AAAMAAAAj5g");
	var mask_graphics_896 = new cjs.Graphics().p("EgYyAirIAAm7QAVAFAVgBQCNABBkjCQBkjBAAkSQAAkShkjBQhkjCiNABQgVgBgVAFIAAoeMCo6AAAMAAAAj5g");
	var mask_graphics_897 = new cjs.Graphics().p("EgYtAirIAAm7QAVAFAWgBQCNABBjjCQBljBAAkSQAAkShljBQhjjCiNABQgWgBgVAFIAAoeMCo5AAAMAAAAj5g");
	var mask_graphics_898 = new cjs.Graphics().p("EgYnAirIAAm7QAVAFAVgBQCNABBkjCQBkjBAAkSQAAkShkjBQhkjCiNABQgVgBgVAFIAAoeMCo4AAAMAAAAj5g");
	var mask_graphics_899 = new cjs.Graphics().p("EgYiAirIAAm7QAVAFAWgBQCNABBjjCQBkjBAAkSQAAkShkjBQhjjCiNABQgWgBgVAFIAAoeMCo3AAAMAAAAj5g");
	var mask_graphics_900 = new cjs.Graphics().p("EgYcAirIAAm7QAUAFAWgBQCNABBkjCQBkjBAAkSQAAkShkjBQhkjCiNABQgWgBgUAFIAAoeMCo1AAAMAAAAj5g");
	var mask_graphics_901 = new cjs.Graphics().p("EgYXAirIAAm7QAVAFAWgBQCNABBjjCQBkjBAAkSQAAkShkjBQhjjCiNABQgWgBgVAFIAAoeMCo1AAAMAAAAj5g");
	var mask_graphics_902 = new cjs.Graphics().p("EgYRAirIAAm7QAUAFAWgBQCNABBkjCQBkjBAAkSQAAkShkjBQhkjCiNABQgWgBgUAFIAAoeMCozAAAMAAAAj5g");
	var mask_graphics_903 = new cjs.Graphics().p("EgYMAirIAAm7QAVAFAWgBQCMABBkjCQBkjBAAkSQAAkShkjBQhkjCiMABQgWgBgVAFIAAoeMCoyAAAMAAAAj5g");
	var mask_graphics_904 = new cjs.Graphics().p("EgYGAirIAAm7QAUAFAWgBQCNABBkjCQBkjBAAkSQAAkShkjBQhkjCiNABQgWgBgUAFIAAoeMCoxAAAMAAAAj5g");
	var mask_graphics_905 = new cjs.Graphics().p("EgYBAirIAAm7QAVAFAWgBQCMABBkjCQBkjBAAkSQAAkShkjBQhkjCiMABQgWgBgVAFIAAoeMCowAAAMAAAAj5g");
	var mask_graphics_906 = new cjs.Graphics().p("EgX7AirIAAm7QAUAFAWgBQCNABBjjCQBljBAAkSQAAkShljBQhjjCiNABQgWgBgUAFIAAoeMCovAAAMAAAAj5g");
	var mask_graphics_907 = new cjs.Graphics().p("EgX2AirIAAm7QAVAFAWgBQCMABBkjCQBkjBAAkSQAAkShkjBQhkjCiMABQgWgBgVAFIAAoeMCouAAAMAAAAj5g");
	var mask_graphics_908 = new cjs.Graphics().p("EgXwAirIAAm7QAUAFAWgBQCNABBjjCQBkjBAAkSQAAkShkjBQhjjCiNABQgWgBgUAFIAAoeMCosAAAMAAAAj5g");
	var mask_graphics_909 = new cjs.Graphics().p("EgXrAirIAAm7QAVAFAVgBQCNABBkjCQBkjBAAkSQAAkShkjBQhkjCiNABQgVgBgVAFIAAoeMCosAAAMAAAAj5g");
	var mask_graphics_910 = new cjs.Graphics().p("EgXlAirIAAm7QAUAFAWgBQCNABBjjCQBkjBAAkSQAAkShkjBQhjjCiNABQgWgBgUAFIAAoeMCoqAAAMAAAAj5g");
	var mask_graphics_911 = new cjs.Graphics().p("EgXgAirIAAm7QAVAFAVgBQCNABBkjCQBkjBAAkSQAAkShkjBQhkjCiNABQgVgBgVAFIAAoeMCopAAAMAAAAj5g");
	var mask_graphics_912 = new cjs.Graphics().p("EgXaAirIAAm7QAUAFAWgBQCNABBjjCQBkjBAAkSQAAkShkjBQhjjCiNABQgWgBgUAFIAAoeMCooAAAMAAAAj5g");
	var mask_graphics_913 = new cjs.Graphics().p("EgXVAirIAAm7QAVAFAVgBQCNABBkjCQBkjBAAkSQAAkShkjBQhkjCiNABQgVgBgVAFIAAoeMConAAAMAAAAj5g");
	var mask_graphics_914 = new cjs.Graphics().p("EgXPAirIAAm7QAUAFAWgBQCNABBjjCQBkjBAAkSQAAkShkjBQhjjCiNABQgWgBgUAFIAAoeMColAAAMAAAAj5g");
	var mask_graphics_915 = new cjs.Graphics().p("EgXKAirIAAm7QAVAFAVgBQCNABBkjCQBkjBAAkSQAAkShkjBQhkjCiNABQgVgBgVAFIAAoeMColAAAMAAAAj5g");
	var mask_graphics_916 = new cjs.Graphics().p("EgXEAirIAAm7QAUAFAWgBQCNABBjjCQBkjBAAkSQAAkShkjBQhjjCiNABQgWgBgUAFIAAoeMCojAAAMAAAAj5g");
	var mask_graphics_917 = new cjs.Graphics().p("EgW/AirIAAm7QAVAFAVgBQCNABBkjCQBkjBgBkSQABkShkjBQhkjCiNABQgVgBgVAFIAAoeMCoiAAAMAAAAj5g");
	var mask_graphics_918 = new cjs.Graphics().p("EgW5AirIAAm7QAUAFAWgBQCNABBjjCQBkjBAAkSQAAkShkjBQhjjCiNABQgWgBgUAFIAAoeMCohAAAMAAAAj5g");
	var mask_graphics_919 = new cjs.Graphics().p("EgW0AirIAAm7QAVAFAVgBQCNABBjjCQBkjBAAkSQAAkShkjBQhjjCiNABQgVgBgVAFIAAoeMCogAAAMAAAAj5g");
	var mask_graphics_920 = new cjs.Graphics().p("EgWuAirIAAm7QAUAFAWgBQCMABBkjCQBkjBAAkSQAAkShkjBQhkjCiMABQgWgBgUAFIAAoeMCoeAAAMAAAAj5g");
	var mask_graphics_921 = new cjs.Graphics().p("EgWpAirIAAm7QAVAFAVgBQCNABBjjCQBkjBAAkSQAAkShkjBQhjjCiNABQgVgBgVAFIAAoeMCoeAAAMAAAAj5g");
	var mask_graphics_922 = new cjs.Graphics().p("EgWkAirIAAm7QAVAFAWgBQCMABBkjCQBkjBAAkSQAAkShkjBQhkjCiMABQgWgBgVAFIAAoeMCodAAAMAAAAj5g");
	var mask_graphics_923 = new cjs.Graphics().p("EgWeAirIAAm7QAVAFAVgBQCNABBjjCQBkjBAAkSQAAkShkjBQhjjCiNABQgVgBgVAFIAAoeMCobAAAMAAAAj5g");
	var mask_graphics_924 = new cjs.Graphics().p("EgWZAirIAAm7QAVAFAWgBQCMABBkjCQBkjBAAkSQAAkShkjBQhkjCiMABQgWgBgVAFIAAoeMCobAAAMAAAAj5g");
	var mask_graphics_925 = new cjs.Graphics().p("EgWTAirIAAm7QAVAFAVgBQCNABBjjCQBkjBAAkSQAAkShkjBQhjjCiNABQgVgBgVAFIAAoeMCoZAAAMAAAAj5g");
	var mask_graphics_926 = new cjs.Graphics().p("EgWOAirIAAm7QAVAFAWgBQCMABBkjCQBkjBAAkSQAAkShkjBQhkjCiMABQgWgBgVAFIAAoeMCoYAAAMAAAAj5g");
	var mask_graphics_927 = new cjs.Graphics().p("EgWIAirIAAm7QAVAFAVgBQCNABBjjCQBkjBAAkSQAAkShkjBQhjjCiNABQgVgBgVAFIAAoeMCoXAAAMAAAAj5g");
	var mask_graphics_928 = new cjs.Graphics().p("EgWDAirIAAm7QAVAFAWgBQCMABBkjCQBjjBAAkSQAAkShjjBQhkjCiMABQgWgBgVAFIAAoeMCoWAAAMAAAAj5g");
	var mask_graphics_929 = new cjs.Graphics().p("EgV9AirIAAm7QAVAFAVgBQCNABBjjCQBkjBAAkSQAAkShkjBQhjjCiNABQgVgBgVAFIAAoeMCoUAAAMAAAAj5g");
	var mask_graphics_930 = new cjs.Graphics().p("EgV4AirIAAm7QAVAFAWgBQCMABBjjCQBkjBAAkSQAAkShkjBQhjjCiMABQgWgBgVAFIAAoeMCoUAAAMAAAAj5g");
	var mask_graphics_931 = new cjs.Graphics().p("EgVyAirIAAm7QAUAFAWgBQCNABBjjCQBkjBAAkSQAAkShkjBQhjjCiNABQgWgBgUAFIAAoeMCoSAAAMAAAAj5g");
	var mask_graphics_932 = new cjs.Graphics().p("EgVtAirIAAm7QAVAFAWgBQCMABBjjCQBkjBAAkSQAAkShkjBQhjjCiMABQgWgBgVAFIAAoeMCoRAAAMAAAAj5g");
	var mask_graphics_933 = new cjs.Graphics().p("EgVnAirIAAm7QAUAFAWgBQCNABBjjCQBkjBAAkSQAAkShkjBQhjjCiNABQgWgBgUAFIAAoeMCoQAAAMAAAAj5g");
	var mask_graphics_934 = new cjs.Graphics().p("EgViAirIAAm7QAVAFAWgBQCMABBjjCQBkjBAAkSQAAkShkjBQhjjCiMABQgWgBgVAFIAAoeMCoPAAAMAAAAj5g");
	var mask_graphics_935 = new cjs.Graphics().p("EgVcAirIAAm7QAUAFAWgBQCMABBkjCQBkjBAAkSQAAkShkjBQhkjCiMABQgWgBgUAFIAAoeMCoNAAAMAAAAj5g");
	var mask_graphics_936 = new cjs.Graphics().p("EgVXAirIAAm7QAVAFAVgBQCNABBjjCQBkjBAAkSQAAkShkjBQhjjCiNABQgVgBgVAFIAAoeMCoNAAAMAAAAj5g");
	var mask_graphics_937 = new cjs.Graphics().p("EgVRAirIAAm7QAUAFAWgBQCMABBkjCQBjjBAAkSQAAkShjjBQhkjCiMABQgWgBgUAFIAAoeMCoLAAAMAAAAj5g");
	var mask_graphics_938 = new cjs.Graphics().p("EgVMAirIAAm7QAVAFAVgBQCNABBjjCQBkjBAAkSQAAkShkjBQhjjCiNABQgVgBgVAFIAAoeMCoKAAAMAAAAj5g");
	var mask_graphics_939 = new cjs.Graphics().p("EgVGAirIAAm7QAUAFAWgBQCMABBkjCQBjjBAAkSQAAkShjjBQhkjCiMABQgWgBgUAFIAAoeMCoJAAAMAAAAj5g");
	var mask_graphics_940 = new cjs.Graphics().p("EgVBAirIAAm7QAVAFAVgBQCNABBjjCQBkjBAAkSQAAkShkjBQhjjCiNABQgVgBgVAFIAAoeMCoIAAAMAAAAj5g");
	var mask_graphics_941 = new cjs.Graphics().p("EgU7AirIAAm7QAUAFAWgBQCMABBjjCQBkjBAAkSQAAkShkjBQhjjCiMABQgWgBgUAFIAAoeMCoGAAAMAAAAj5g");
	var mask_graphics_942 = new cjs.Graphics().p("EgU2AirIAAm7QAVAFAVgBQCNABBjjCQBkjBAAkSQAAkShkjBQhjjCiNABQgVgBgVAFIAAoeMCoGAAAMAAAAj5g");
	var mask_graphics_943 = new cjs.Graphics().p("EgUwAirIAAm7QAUAFAWgBQCMABBjjCQBkjBAAkSQAAkShkjBQhjjCiMABQgWgBgUAFIAAoeMCoEAAAMAAAAj5g");
	var mask_graphics_944 = new cjs.Graphics().p("EgUrAirIAAm7QAVAFAVgBQCNABBjjCQBkjBAAkSQAAkShkjBQhjjCiNABQgVgBgVAFIAAoeMCoEAAAMAAAAj5g");
	var mask_graphics_945 = new cjs.Graphics().p("EgUlAirIAAm7QAUAFAWgBQCMABBjjCQBkjBAAkSQAAkShkjBQhjjCiMABQgWgBgUAFIAAoeMCoCAAAMAAAAj5g");
	var mask_graphics_946 = new cjs.Graphics().p("EgUgAirIAAm7QAVAFAVgBQCNABBjjCQBjjBAAkSQAAkShjjBQhjjCiNABQgVgBgVAFIAAoeMCoBAAAMAAAAj5g");
	var mask_graphics_947 = new cjs.Graphics().p("EgUaAirIAAm7QAUAFAWgBQCMABBjjCQBkjBAAkSQAAkShkjBQhjjCiMABQgWgBgUAFIAAoeMCoAAAAMAAAAj5g");
	var mask_graphics_948 = new cjs.Graphics().p("EgUVAirIAAm7QAVAFAVgBQCNABBjjCQBjjBAAkSQAAkShjjBQhjjCiNABQgVgBgVAFIAAoeMCn/AAAMAAAAj5g");
	var mask_graphics_949 = new cjs.Graphics().p("EgUPAirIAAm7QAUAFAWgBQCMABBjjCQBkjBAAkSQAAkShkjBQhjjCiMABQgWgBgUAFIAAoeMCn9AAAMAAAAj5g");
	var mask_graphics_950 = new cjs.Graphics().p("EgUKAirIAAm7QAVAFAVgBQCMABBkjCQBjjBAAkSQAAkShjjBQhkjCiMABQgVgBgVAFIAAoeMCn9AAAMAAAAj5g");
	var mask_graphics_951 = new cjs.Graphics().p("EgUEAirIAAm7QAUAFAWgBQCMABBjjCQBkjBAAkSQAAkShkjBQhjjCiMABQgWgBgUAFIAAoeMCn7AAAMAAAAj5g");
	var mask_graphics_952 = new cjs.Graphics().p("EgT/AirIAAm7QAVAFAVgBQCMABBjjCQBkjBAAkSQAAkShkjBQhjjCiMABQgVgBgVAFIAAoeMCn6AAAMAAAAj5g");
	var mask_graphics_953 = new cjs.Graphics().p("EgT5AirIAAm7QAUAFAWgBQCMABBjjCQBkjBAAkSQAAkShkjBQhjjCiMABQgWgBgUAFIAAoeMCn5AAAMAAAAj5g");
	var mask_graphics_954 = new cjs.Graphics().p("EgT0AirIAAm7QAVAFAVgBQCMABBjjCQBkjBAAkSQAAkShkjBQhjjCiMABQgVgBgVAFIAAoeMCn4AAAMAAAAj5g");
	var mask_graphics_955 = new cjs.Graphics().p("EgTuAirIAAm7QAUAFAWgBQCMABBjjCQBjjBAAkSQAAkShjjBQhjjCiMABQgWgBgUAFIAAoeMCn2AAAMAAAAj5g");
	var mask_graphics_956 = new cjs.Graphics().p("EgTpAirIAAm7QAVAFAVgBQCMABBjjCQBkjBAAkSQAAkShkjBQhjjCiMABQgVgBgVAFIAAoeMCn2AAAMAAAAj5g");
	var mask_graphics_957 = new cjs.Graphics().p("EgTjAirIAAm7QAUAFAWgBQCMABBjjCQBjjBAAkSQAAkShjjBQhjjCiMABQgWgBgUAFIAAoeMCn0AAAMAAAAj5g");
	var mask_graphics_958 = new cjs.Graphics().p("EgTeAirIAAm7QAVAFAVgBQCMABBjjCQBkjBAAkSQAAkShkjBQhjjCiMABQgVgBgVAFIAAoeMCnzAAAMAAAAj5g");
	var mask_graphics_959 = new cjs.Graphics().p("EgTZAirIAAm7QAVAFAWgBQCMABBjjCQBjjBAAkSQAAkShjjBQhjjCiMABQgWgBgVAFIAAoeMCnzAAAMAAAAj5g");
	var mask_graphics_960 = new cjs.Graphics().p("EgTTAirIAAm7QAVAFAVgBQCMABBjjCQBkjBAAkSQAAkShkjBQhjjCiMABQgVgBgVAFIAAoeMCnxAAAMAAAAj5g");
	var mask_graphics_961 = new cjs.Graphics().p("EgTOAirIAAm7QAVAFAWgBQCMABBjjCQBjjBAAkSQAAkShjjBQhjjCiMABQgWgBgVAFIAAoeMCnwAAAMAAAAj5g");
	var mask_graphics_962 = new cjs.Graphics().p("EgTIAirIAAm7QAVAFAVgBQCMABBjjCQBkjBAAkSQAAkShkjBQhjjCiMABQgVgBgVAFIAAoeMCnvAAAMAAAAj5g");
	var mask_graphics_963 = new cjs.Graphics().p("EgTDAirIAAm7QAVAFAVgBQCNABBjjCQBjjBAAkSQAAkShjjBQhjjCiNABQgVgBgVAFIAAoeMCnuAAAMAAAAj5g");
	var mask_graphics_964 = new cjs.Graphics().p("EgS9AirIAAm7QAUAFAWgBQCMABBjjCQBjjBAAkSQAAkShjjBQhjjCiMABQgWgBgUAFIAAoeMCnsAAAMAAAAj5g");
	var mask_graphics_965 = new cjs.Graphics().p("EgS4AirIAAm7QAVAFAVgBQCMABBjjCQBkjBAAkSQAAkShkjBQhjjCiMABQgVgBgVAFIAAoeMCnsAAAMAAAAj5g");
	var mask_graphics_966 = new cjs.Graphics().p("EgSyAirIAAm7QAUAFAWgBQCMABBjjCQBjjBAAkSQAAkShjjBQhjjCiMABQgWgBgUAFIAAoeMCnqAAAMAAAAj5g");
	var mask_graphics_967 = new cjs.Graphics().p("EgStAirIAAm7QAVAFAVgBQCMABBjjCQBkjBAAkSQAAkShkjBQhjjCiMABQgVgBgVAFIAAoeMCnpAAAMAAAAj5g");
	var mask_graphics_968 = new cjs.Graphics().p("EgSnAirIAAm7QAUAFAWgBQCMABBjjCQBjjBAAkSQAAkShjjBQhjjCiMABQgWgBgUAFIAAoeMCnoAAAMAAAAj5g");
	var mask_graphics_969 = new cjs.Graphics().p("EgSiAirIAAm7QAVAFAVgBQCMABBjjCQBkjBAAkSQAAkShkjBQhjjCiMABQgVgBgVAFIAAoeMCnnAAAMAAAAj5g");
	var mask_graphics_970 = new cjs.Graphics().p("EgScAirIAAm7QAUAFAWgBQCMABBjjCQBjjBAAkSQAAkShjjBQhjjCiMABQgWgBgUAFIAAoeMCnlAAAMAAAAj5g");
	var mask_graphics_971 = new cjs.Graphics().p("EgSXAirIAAm7QAVAFAVgBQCMABBjjCQBkjBAAkSQAAkShkjBQhjjCiMABQgVgBgVAFIAAoeMCnlAAAMAAAAj5g");
	var mask_graphics_972 = new cjs.Graphics().p("EgSRAirIAAm7QAUAFAWgBQCMABBjjCQBjjBAAkSQAAkShjjBQhjjCiMABQgWgBgUAFIAAoeMCnjAAAMAAAAj5g");
	var mask_graphics_973 = new cjs.Graphics().p("EgSMAirIAAm7QAVAFAVgBQCMABBjjCQBjjBAAkSQAAkShjjBQhjjCiMABQgVgBgVAFIAAoeMCniAAAMAAAAj5g");
	var mask_graphics_974 = new cjs.Graphics().p("EgSGAirIAAm7QAUAFAWgBQCMABBjjCQBjjBAAkSQAAkShjjBQhjjCiMABQgWgBgUAFIAAoeMCnhAAAMAAAAj5g");
	var mask_graphics_975 = new cjs.Graphics().p("EgSBAirIAAm7QAVAFAVgBQCMABBjjCQBjjBAAkSQAAkShjjBQhjjCiMABQgVgBgVAFIAAoeMCngAAAMAAAAj5g");
	var mask_graphics_976 = new cjs.Graphics().p("EgR7AirIAAm7QAUAFAWgBQCMABBijCQBkjBAAkSQAAkShkjBQhijCiMABQgWgBgUAFIAAoeMCneAAAMAAAAj5g");
	var mask_graphics_977 = new cjs.Graphics().p("EgR2AirIAAm7QAVAFAVgBQCMABBjjCQBjjBAAkSQAAkShjjBQhjjCiMABQgVgBgVAFIAAoeMCneAAAMAAAAj5g");
	var mask_graphics_978 = new cjs.Graphics().p("EgRwAirIAAm7QAUAFAWgBQCMABBijCQBkjBAAkSQAAkShkjBQhijCiMABQgWgBgUAFIAAoeMCncAAAMAAAAj5g");
	var mask_graphics_979 = new cjs.Graphics().p("EgRrAirIAAm7QAVAFAVgBQCMABBjjCQBjjBAAkSQAAkShjjBQhjjCiMABQgVgBgVAFIAAoeMCnbAAAMAAAAj5g");
	var mask_graphics_980 = new cjs.Graphics().p("EgRlAirIAAm7QAUAFAWgBQCLABBjjCQBkjBAAkSQAAkShkjBQhjjCiLABQgWgBgUAFIAAoeMCnaAAAMAAAAj5g");
	var mask_graphics_981 = new cjs.Graphics().p("EgRgAirIAAm7QAVAFAVgBQCMABBjjCQBjjBAAkSQAAkShjjBQhjjCiMABQgVgBgVAFIAAoeMCnZAAAMAAAAj5g");
	var mask_graphics_982 = new cjs.Graphics().p("EgRaAirIAAm7QAUAFAWgBQCLABBjjCQBjjBAAkSQAAkShjjBQhjjCiLABQgWgBgUAFIAAoeMCnYAAAMAAAAj5g");
	var mask_graphics_983 = new cjs.Graphics().p("EgRVAirIAAm7QAVAFAVgBQCMABBjjCQBjjBAAkSQAAkShjjBQhjjCiMABQgVgBgVAFIAAoeMCnXAAAMAAAAj5g");
	var mask_graphics_984 = new cjs.Graphics().p("EgRPAirIAAm7QAUAFAWgBQCLABBjjCQBjjBAAkSQAAkShjjBQhjjCiLABQgWgBgUAFIAAoeMCnVAAAMAAAAj5g");
	var mask_graphics_985 = new cjs.Graphics().p("EgRKAirIAAm7QAVAFAVgBQCMABBjjCQBjjBAAkSQAAkShjjBQhjjCiMABQgVgBgVAFIAAoeMCnVAAAMAAAAj5g");
	var mask_graphics_986 = new cjs.Graphics().p("EgREAirIAAm7QAUAFAWgBQCLABBjjCQBjjBAAkSQAAkShjjBQhjjCiLABQgWgBgUAFIAAoeMCnTAAAMAAAAj5g");
	var mask_graphics_987 = new cjs.Graphics().p("EgQ/AirIAAm7QAVAFAVgBQCMABBijCQBkjBAAkSQAAkShkjBQhijCiMABQgVgBgVAFIAAoeMCnSAAAMAAAAj5g");
	var mask_graphics_988 = new cjs.Graphics().p("EgQ5AirIAAm7QAUAFAWgBQCLABBjjCQBjjBAAkSQAAkShjjBQhjjCiLABQgWgBgUAFIAAoeMCnRAAAMAAAAj5g");
	var mask_graphics_989 = new cjs.Graphics().p("EgQ0AirIAAm7QAVAFAVgBQCMABBijCQBkjBAAkSQAAkShkjBQhijCiMABQgVgBgVAFIAAoeMCnQAAAMAAAAj5g");
	var mask_graphics_990 = new cjs.Graphics().p("EgQuAirIAAm7QAUAFAWgBQCLABBjjCQBjjBAAkSQAAkShjjBQhjjCiLABQgWgBgUAFIAAoeMCnOAAAMAAAAj5g");
	var mask_graphics_991 = new cjs.Graphics().p("EgQpAirIAAm7QAVAFAVgBQCMABBijCQBkjBAAkSQAAkShkjBQhijCiMABQgVgBgVAFIAAoeMCnOAAAMAAAAj5g");
	var mask_graphics_992 = new cjs.Graphics().p("EgQjAirIAAm7QAUAFAVgBQCMABBjjCQBjjBAAkSQAAkShjjBQhjjCiMABQgVgBgUAFIAAoeMCnMAAAMAAAAj5g");
	var mask_graphics_993 = new cjs.Graphics().p("EgQeAirIAAm7QAVAFAVgBQCMABBijCQBjjBAAkSQAAkShjjBQhijCiMABQgVgBgVAFIAAoeMCnLAAAMAAAAj5g");
	var mask_graphics_994 = new cjs.Graphics().p("EgQYAirIAAm7QAUAFAVgBQCMABBjjCQBjjBAAkSQAAkShjjBQhjjCiMABQgVgBgUAFIAAoeMCnKAAAMAAAAj5g");
	var mask_graphics_995 = new cjs.Graphics().p("EgQTAirIAAm7QAUAFAWgBQCLABBjjCQBjjBAAkSQAAkShjjBQhjjCiLABQgWgBgUAFIAAoeMCnJAAAMAAAAj5g");
	var mask_graphics_996 = new cjs.Graphics().p("EgQOAirIAAm7QAVAFAVgBQCMABBjjCQBjjBAAkSQAAkShjjBQhjjCiMABQgVgBgVAFIAAoeMCnIAAAMAAAAj5g");
	var mask_graphics_997 = new cjs.Graphics().p("EgQIAirIAAm7QAUAFAWgBQCLABBjjCQBjjBAAkSQAAkShjjBQhjjCiLABQgWgBgUAFIAAoeMCnHAAAMAAAAj5g");
	var mask_graphics_998 = new cjs.Graphics().p("EgQDAirIAAm7QAVAFAVgBQCMABBijCQBkjBAAkSQAAkShkjBQhijCiMABQgVgBgVAFIAAoeMCnGAAAMAAAAj5g");
	var mask_graphics_999 = new cjs.Graphics().p("EgP9AirIAAm7QAUAFAWgBQCLABBjjCQBjjBAAkSQAAkShjjBQhjjCiLABQgWgBgUAFIAAoeMCnEAAAMAAAAj5g");
	var mask_graphics_1000 = new cjs.Graphics().p("EgP4AirIAAm7QAVAFAVgBQCMABBijCQBkjBAAkSQAAkShkjBQhijCiMABQgVgBgVAFIAAoeMCnEAAAMAAAAj5g");
	var mask_graphics_1001 = new cjs.Graphics().p("EgPyAirIAAm7QAUAFAWgBQCLABBjjCQBjjBAAkSQAAkShjjBQhjjCiLABQgWgBgUAFIAAoeMCnCAAAMAAAAj5g");
	var mask_graphics_1002 = new cjs.Graphics().p("EgPtAirIAAm7QAVAFAVgBQCMABBijCQBjjBAAkSQAAkShjjBQhijCiMABQgVgBgVAFIAAoeMCnBAAAMAAAAj5g");
	var mask_graphics_1003 = new cjs.Graphics().p("EgPnAirIAAm7QAUAFAWgBQCLABBjjCQBjjBAAkSQAAkShjjBQhjjCiLABQgWgBgUAFIAAoeMCnAAAAMAAAAj5g");
	var mask_graphics_1004 = new cjs.Graphics().p("EgPiAirIAAm7QAVAFAVgBQCMABBijCQBjjBAAkSQAAkShjjBQhijCiMABQgVgBgVAFIAAoeMCm/AAAMAAAAj5g");
	var mask_graphics_1005 = new cjs.Graphics().p("EgPcAirIAAm7QAUAFAWgBQCLABBjjCQBjjBAAkSQAAkShjjBQhjjCiLABQgWgBgUAFIAAoeMCm9AAAMAAAAj5g");
	var mask_graphics_1006 = new cjs.Graphics().p("EgPXAirIAAm7QAVAFAVgBQCMABBijCQBjjBAAkSQAAkShjjBQhijCiMABQgVgBgVAFIAAoeMCm9AAAMAAAAj5g");
	var mask_graphics_1007 = new cjs.Graphics().p("EgPRAirIAAm7QAUAFAWgBQCLABBjjCQBjjBAAkSQAAkShjjBQhjjCiLABQgWgBgUAFIAAoeMCm7AAAMAAAAj5g");
	var mask_graphics_1008 = new cjs.Graphics().p("EgPMAirIAAm7QAVAFAVgBQCMABBijCQBjjBAAkSQAAkShjjBQhijCiMABQgVgBgVAFIAAoeMCm6AAAMAAAAj5g");
	var mask_graphics_1009 = new cjs.Graphics().p("EgPGAirIAAm7QAUAFAWgBQCLABBjjCQBjjBAAkSQAAkShjjBQhjjCiLABQgWgBgUAFIAAoeMCm5AAAMAAAAj5g");
	var mask_graphics_1010 = new cjs.Graphics().p("EgPBAirIAAm7QAVAFAVgBQCLABBjjCQBjjBAAkSQAAkShjjBQhjjCiLABQgVgBgVAFIAAoeMCm4AAAMAAAAj5g");
	var mask_graphics_1011 = new cjs.Graphics().p("EgO7AirIAAm7QAUAFAWgBQCLABBijCQBjjBAAkSQAAkShjjBQhijCiLABQgWgBgUAFIAAoeMCm2AAAMAAAAj5g");
	var mask_graphics_1012 = new cjs.Graphics().p("EgO2AirIAAm7QAVAFAVgBQCLABBjjCQBjjBAAkSQAAkShjjBQhjjCiLABQgVgBgVAFIAAoeMCm2AAAMAAAAj5g");
	var mask_graphics_1013 = new cjs.Graphics().p("EgOwAirIAAm7QAUAFAWgBQCLABBijCQBjjBAAkSQAAkShjjBQhijCiLABQgWgBgUAFIAAoeMCm0AAAMAAAAj5g");
	var mask_graphics_1014 = new cjs.Graphics().p("EgOrAirIAAm7QAVAFAVgBQCLABBjjCQBjjBAAkSQAAkShjjBQhjjCiLABQgVgBgVAFIAAoeMCmzAAAMAAAAj5g");
	var mask_graphics_1015 = new cjs.Graphics().p("EgOlAirIAAm7QAUAFAWgBQCLABBijCQBjjBAAkSQAAkShjjBQhijCiLABQgWgBgUAFIAAoeMCmyAAAMAAAAj5g");
	var mask_graphics_1016 = new cjs.Graphics().p("EgOgAirIAAm7QAVAFAVgBQCLABBjjCQBjjBAAkSQAAkShjjBQhjjCiLABQgVgBgVAFIAAoeMCmxAAAMAAAAj5g");
	var mask_graphics_1017 = new cjs.Graphics().p("EgOaAirIAAm7QAUAFAWgBQCLABBijCQBjjBAAkSQAAkShjjBQhijCiLABQgWgBgUAFIAAoeMCmvAAAMAAAAj5g");
	var mask_graphics_1018 = new cjs.Graphics().p("EgOVAirIAAm7QAVAFAVgBQCLABBjjCQBjjBAAkSQAAkShjjBQhjjCiLABQgVgBgVAFIAAoeMCmvAAAMAAAAj5g");
	var mask_graphics_1019 = new cjs.Graphics().p("EgOPAirIAAm7QAUAFAVgBQCMABBijCQBjjBAAkSQAAkShjjBQhijCiMABQgVgBgUAFIAAoeMCmtAAAMAAAAj5g");
	var mask_graphics_1020 = new cjs.Graphics().p("EgOKAirIAAm7QAVAFAVgBQCLABBjjCQBijBAAkSQAAkShijBQhjjCiLABQgVgBgVAFIAAoeMCmtAAAMAAAAj5g");
	var mask_graphics_1021 = new cjs.Graphics().p("EgOEAirIAAm7QAUAFAVgBQCMABBijCQBjjBAAkSQAAkShjjBQhijCiMABQgVgBgUAFIAAoeMCmrAAAMAAAAj5g");
	var mask_graphics_1022 = new cjs.Graphics().p("EgN/AirIAAm7QAVAFAVgBQCLABBijCQBjjBAAkSQAAkShjjBQhijCiLABQgVgBgVAFIAAoeMCmqAAAMAAAAj5g");
	var mask_graphics_1023 = new cjs.Graphics().p("EgN5AirIAAm7QAUAFAVgBQCMABBijCQBjjBAAkSQAAkShjjBQhijCiMABQgVgBgUAFIAAoeMCmpAAAMAAAAj5g");
	var mask_graphics_1024 = new cjs.Graphics().p("EgN0AirIAAm7QAVAFAVgBQCLABBijCQBjjBAAkSQAAkShjjBQhijCiLABQgVgBgVAFIAAoeMCmoAAAMAAAAj5g");
	var mask_graphics_1025 = new cjs.Graphics().p("EgNuAirIAAm7QAUAFAVgBQCLABBjjCQBjjBAAkSQAAkShjjBQhjjCiLABQgVgBgUAFIAAoeMCmmAAAMAAAAj5g");
	var mask_graphics_1026 = new cjs.Graphics().p("EgNpAirIAAm7QAVAFAVgBQCLABBijCQBjjBAAkSQAAkShjjBQhijCiLABQgVgBgVAFIAAoeMCmmAAAMAAAAj5g");
	var mask_graphics_1027 = new cjs.Graphics().p("EgNjAirIAAm7QAUAFAVgBQCLABBjjCQBjjBAAkSQAAkShjjBQhjjCiLABQgVgBgUAFIAAoeMCmkAAAMAAAAj5g");
	var mask_graphics_1028 = new cjs.Graphics().p("EgNeAirIAAm7QAUAFAWgBQCLABBijCQBjjBAAkSQAAkShjjBQhijCiLABQgWgBgUAFIAAoeMCmjAAAMAAAAj5g");
	var mask_graphics_1029 = new cjs.Graphics().p("EgNYAirIAAm7QAUAFAVgBQCLABBjjCQBijBAAkSQAAkShijBQhjjCiLABQgVgBgUAFIAAoeMCmiAAAMAAAAj5g");
	var mask_graphics_1030 = new cjs.Graphics().p("EgNTAirIAAm7QAUAFAWgBQCLABBijCQBjjBAAkSQAAkShjjBQhijCiLABQgWgBgUAFIAAoeMCmhAAAMAAAAj5g");
	var mask_graphics_1031 = new cjs.Graphics().p("EgNNAirIAAm7QAUAFAVgBQCLABBjjCQBijBAAkSQAAkShijBQhjjCiLABQgVgBgUAFIAAoeMCmfAAAMAAAAj5g");
	var mask_graphics_1032 = new cjs.Graphics().p("EgNIAirIAAm7QAUAFAWgBQCLABBijCQBjjBAAkSQAAkShjjBQhijCiLABQgWgBgUAFIAAoeMCmfAAAMAAAAj5g");
	var mask_graphics_1033 = new cjs.Graphics().p("EgNDAirIAAm7QAVAFAVgBQCLABBijCQBjjBAAkSQAAkShjjBQhijCiLABQgVgBgVAFIAAoeMCmeAAAMAAAAj5g");
	var mask_graphics_1034 = new cjs.Graphics().p("EgM9AirIAAm7QAUAFAWgBQCLABBijCQBjjBAAkSQAAkShjjBQhijCiLABQgWgBgUAFIAAoeMCmcAAAMAAAAj5g");
	var mask_graphics_1035 = new cjs.Graphics().p("EgM4AirIAAm7QAVAFAVgBQCLABBijCQBjjBAAkSQAAkShjjBQhijCiLABQgVgBgVAFIAAoeMCmcAAAMAAAAj5g");
	var mask_graphics_1036 = new cjs.Graphics().p("EgMyAirIAAm7QAUAFAWgBQCLABBijCQBjjBAAkSQAAkShjjBQhijCiLABQgWgBgUAFIAAoeMCmaAAAMAAAAj5g");
	var mask_graphics_1037 = new cjs.Graphics().p("EgMtAirIAAm7QAVAFAVgBQCLABBijCQBjjBAAkSQAAkShjjBQhijCiLABQgVgBgVAFIAAoeMCmZAAAMAAAAj5g");
	var mask_graphics_1038 = new cjs.Graphics().p("EgMnAirIAAm7QAUAFAWgBQCLABBijCQBijBAAkSQAAkShijBQhijCiLABQgWgBgUAFIAAoeMCmYAAAMAAAAj5g");
	var mask_graphics_1039 = new cjs.Graphics().p("EgMiAirIAAm7QAVAFAVgBQCLABBijCQBjjBAAkSQAAkShjjBQhijCiLABQgVgBgVAFIAAoeMCmXAAAMAAAAj5g");
	var mask_graphics_1040 = new cjs.Graphics().p("EgMcAirIAAm7QAUAFAWgBQCKABBjjCQBijBAAkSQAAkShijBQhjjCiKABQgWgBgUAFIAAoeMCmVAAAMAAAAj5g");
	var mask_graphics_1041 = new cjs.Graphics().p("EgMXAirIAAm7QAVAFAVgBQCLABBijCQBjjBAAkSQAAkShjjBQhijCiLABQgVgBgVAFIAAoeMCmVAAAMAAAAj5g");
	var mask_graphics_1042 = new cjs.Graphics().p("EgMRAirIAAm7QAUAFAWgBQCKABBjjCQBijBAAkSQAAkShijBQhjjCiKABQgWgBgUAFIAAoeMCmTAAAMAAAAj5g");
	var mask_graphics_1043 = new cjs.Graphics().p("EgMMAirIAAm7QAVAFAVgBQCLABBijCQBjjBAAkSQAAkShjjBQhijCiLABQgVgBgVAFIAAoeMCmSAAAMAAAAj5g");
	var mask_graphics_1044 = new cjs.Graphics().p("EgMGAirIAAm7QAUAFAWgBQCKABBijCQBjjBAAkSQAAkShjjBQhijCiKABQgWgBgUAFIAAoeMCmRAAAMAAAAj5g");
	var mask_graphics_1045 = new cjs.Graphics().p("EgMBAirIAAm7QAVAFAVgBQCLABBijCQBjjBAAkSQAAkShjjBQhijCiLABQgVgBgVAFIAAoeMCmQAAAMAAAAj5g");
	var mask_graphics_1046 = new cjs.Graphics().p("EgL7AirIAAm7QAUAFAWgBQCKABBijCQBjjBAAkSQAAkShjjBQhijCiKABQgWgBgUAFIAAoeMCmOAAAMAAAAj5g");
	var mask_graphics_1047 = new cjs.Graphics().p("EgL2AirIAAm7QAVAFAVgBQCLABBijCQBijBAAkSQAAkShijBQhijCiLABQgVgBgVAFIAAoeMCmOAAAMAAAAj5g");
	var mask_graphics_1048 = new cjs.Graphics().p("EgLwAirIAAm7QAUAFAVgBQCLABBijCQBjjBAAkSQAAkShjjBQhijCiLABQgVgBgUAFIAAoeMCmMAAAMAAAAj5g");
	var mask_graphics_1049 = new cjs.Graphics().p("EgLrAirIAAm7QAVAFAVgBQCLABBijCQBijBAAkSQAAkShijBQhijCiLABQgVgBgVAFIAAoeMCmLAAAMAAAAj5g");
	var mask_graphics_1050 = new cjs.Graphics().p("EgLlAirIAAm7QAUAFAVgBQCLABBijCQBjjBAAkSQAAkShjjBQhijCiLABQgVgBgUAFIAAoeMCmKAAAMAAAAj5g");
	var mask_graphics_1051 = new cjs.Graphics().p("EgLgAirIAAm7QAVAFAVgBQCLABBijCQBijBAAkSQAAkShijBQhijCiLABQgVgBgVAFIAAoeMCmJAAAMAAAAj5g");
	var mask_graphics_1052 = new cjs.Graphics().p("EgLaAirIAAm7QAUAFAVgBQCLABBijCQBjjBAAkSQAAkShjjBQhijCiLABQgVgBgUAFIAAoeMCmHAAAMAAAAj5g");
	var mask_graphics_1053 = new cjs.Graphics().p("EgLVAirIAAm7QAVAFAVgBQCLABBijCQBijBAAkSQAAkShijBQhijCiLABQgVgBgVAFIAAoeMCmHAAAMAAAAj5g");
	var mask_graphics_1054 = new cjs.Graphics().p("EgLPAirIAAm7QAUAFAVgBQCLABBijCQBjjBAAkSQAAkShjjBQhijCiLABQgVgBgUAFIAAoeMCmFAAAMAAAAj5g");
	var mask_graphics_1055 = new cjs.Graphics().p("EgLKAirIAAm7QAVAFAVgBQCKABBjjCQBijBAAkSQAAkShijBQhjjCiKABQgVgBgVAFIAAoeMCmEAAAMAAAAj5g");
	var mask_graphics_1056 = new cjs.Graphics().p("EgLEAirIAAm7QAUAFAVgBQCLABBijCQBijBAAkSQAAkShijBQhijCiLABQgVgBgUAFIAAoeMCmDAAAMAAAAj5g");
	var mask_graphics_1057 = new cjs.Graphics().p("EgK/AirIAAm7QAVAFAVgBQCKABBijCQBjjBAAkSQAAkShjjBQhijCiKABQgVgBgVAFIAAoeMCmCAAAMAAAAj5g");
	var mask_graphics_1058 = new cjs.Graphics().p("EgK5AirIAAm7QAUAFAVgBQCLABBijCQBijBAAkSQAAkShijBQhijCiLABQgVgBgUAFIAAoeMCmBAAAMAAAAj5g");
	var mask_graphics_1059 = new cjs.Graphics().p("EgK0AirIAAm7QAUAFAWgBQCKABBijCQBjjBAAkSQAAkShjjBQhijCiKABQgWgBgUAFIAAoeMCmAAAAMAAAAj5g");
	var mask_graphics_1060 = new cjs.Graphics().p("EgKuAirIAAm7QAUAFAVgBQCLABBijCQBijBAAkSQAAkShijBQhijCiLABQgVgBgUAFIAAoeMCl+AAAMAAAAj5g");
	var mask_graphics_1061 = new cjs.Graphics().p("EgKpAirIAAm7QAUAFAWgBQCKABBijCQBjjBAAkSQAAkShjjBQhijCiKABQgWgBgUAFIAAoeMCl+AAAMAAAAj5g");
	var mask_graphics_1062 = new cjs.Graphics().p("EgKjAirIAAm7QAUAFAVgBQCLABBijCQBijBAAkSQAAkShijBQhijCiLABQgVgBgUAFIAAoeMCl8AAAMAAAAj5g");
	var mask_graphics_1063 = new cjs.Graphics().p("EgKeAirIAAm7QAUAFAWgBQCKABBijCQBjjBAAkSQAAkShjjBQhijCiKABQgWgBgUAFIAAoeMCl7AAAMAAAAj5g");
	var mask_graphics_1064 = new cjs.Graphics().p("EgKYAirIAAm7QAUAFAVgBQCLABBijCQBijBAAkSQAAkShijBQhijCiLABQgVgBgUAFIAAoeMCl6AAAMAAAAj5g");
	var mask_graphics_1065 = new cjs.Graphics().p("EgKTAirIAAm7QAUAFAWgBQCKABBijCQBijBAAkSQAAkShijBQhijCiKABQgWgBgUAFIAAoeMCl5AAAMAAAAj5g");
	var mask_graphics_1066 = new cjs.Graphics().p("EgKNAirIAAm7QAUAFAVgBQCLABBijCQBijBAAkSQAAkShijBQhijCiLABQgVgBgUAFIAAoeMCl3AAAMAAAAj5g");
	var mask_graphics_1067 = new cjs.Graphics().p("EgKIAirIAAm7QAUAFAWgBQCKABBijCQBijBAAkSQAAkShijBQhijCiKABQgWgBgUAFIAAoeMCl3AAAMAAAAj5g");
	var mask_graphics_1068 = new cjs.Graphics().p("EgKCAirIAAm7QAUAFAVgBQCLABBhjCQBjjBAAkSQAAkShjjBQhhjCiLABQgVgBgUAFIAAoeMCl1AAAMAAAAj5g");
	var mask_graphics_1069 = new cjs.Graphics().p("EgJ9AirIAAm7QAUAFAWgBQCKABBijCQBijBAAkSQAAkShijBQhijCiKABQgWgBgUAFIAAoeMCl0AAAMAAAAj5g");
	var mask_graphics_1070 = new cjs.Graphics().p("EgJ4AirIAAm7QAVAFAVgBQCKABBijCQBjjBAAkSQAAkShjjBQhijCiKABQgVgBgVAFIAAoeMCl0AAAMAAAAj5g");
	var mask_graphics_1071 = new cjs.Graphics().p("EgJyAirIAAm7QAUAFAWgBQCKABBijCQBijBAAkSQAAkShijBQhijCiKABQgWgBgUAFIAAoeMClyAAAMAAAAj5g");
	var mask_graphics_1072 = new cjs.Graphics().p("EgJtAirIAAm7QAVAFAVgBQCKABBijCQBjjBAAkSQAAkShjjBQhijCiKABQgVgBgVAFIAAoeMClxAAAMAAAAj5g");
	var mask_graphics_1073 = new cjs.Graphics().p("EgJnAirIAAm7QAUAFAWgBQCKABBijCQBijBAAkSQAAkShijBQhijCiKABQgWgBgUAFIAAoeMClwAAAMAAAAj5g");
	var mask_graphics_1074 = new cjs.Graphics().p("EgJiAirIAAm7QAVAFAVgBQCKABBijCQBjjBAAkSQAAkShjjBQhijCiKABQgVgBgVAFIAAoeMClvAAAMAAAAj5g");
	var mask_graphics_1075 = new cjs.Graphics().p("EgJcAirIAAm7QAUAFAVgBQCLABBijCQBijBAAkSQAAkShijBQhijCiLABQgVgBgUAFIAAoeMCltAAAMAAAAj5g");
	var mask_graphics_1076 = new cjs.Graphics().p("EgJXAirIAAm7QAVAFAVgBQCKABBijCQBijBAAkSQAAkShijBQhijCiKABQgVgBgVAFIAAoeMCltAAAMAAAAj5g");
	var mask_graphics_1077 = new cjs.Graphics().p("EgJRAirIAAm7QAUAFAVgBQCLABBijCQBijBAAkSQAAkShijBQhijCiLABQgVgBgUAFIAAoeMClrAAAMAAAAj5g");
	var mask_graphics_1078 = new cjs.Graphics().p("EgJMAirIAAm7QAVAFAVgBQCKABBijCQBijBAAkSQAAkShijBQhijCiKABQgVgBgVAFIAAoeMClqAAAMAAAAj5g");
	var mask_graphics_1079 = new cjs.Graphics().p("EgJGAirIAAm7QAUAFAVgBQCLABBhjCQBjjBAAkSQAAkShjjBQhhjCiLABQgVgBgUAFIAAoeMClpAAAMAAAAj5g");
	var mask_graphics_1080 = new cjs.Graphics().p("EgJBAirIAAm7QAVAFAVgBQCKABBijCQBijBAAkSQAAkShijBQhijCiKABQgVgBgVAFIAAoeMCloAAAMAAAAj5g");
	var mask_graphics_1081 = new cjs.Graphics().p("EgI7AirIAAm7QAUAFAVgBQCLABBhjCQBjjBAAkSQAAkShjjBQhhjCiLABQgVgBgUAFIAAoeMClmAAAMAAAAj5g");
	var mask_graphics_1082 = new cjs.Graphics().p("EgI2AirIAAm7QAVAFAVgBQCKABBijCQBijBAAkSQAAkShijBQhijCiKABQgVgBgVAFIAAoeMClmAAAMAAAAj5g");
	var mask_graphics_1083 = new cjs.Graphics().p("EgIwAirIAAm7QAUAFAVgBQCLABBhjCQBjjBAAkSQAAkShjjBQhhjCiLABQgVgBgUAFIAAoeMClkAAAMAAAAj5g");
	var mask_graphics_1084 = new cjs.Graphics().p("EgIrAirIAAm7QAVAFAVgBQCKABBijCQBijBAAkSQAAkShijBQhijCiKABQgVgBgVAFIAAoeMCljAAAMAAAAj5g");
	var mask_graphics_1085 = new cjs.Graphics().p("EgIlAirIAAm7QAUAFAVgBQCLABBhjCQBijBAAkSQAAkShijBQhhjCiLABQgVgBgUAFIAAoeMCliAAAMAAAAj5g");
	var mask_graphics_1086 = new cjs.Graphics().p("EgIgAirIAAm7QAVAFAVgBQCKABBijCQBijBAAkSQAAkShijBQhijCiKABQgVgBgVAFIAAoeMClhAAAMAAAAj5g");
	var mask_graphics_1087 = new cjs.Graphics().p("EgIaAirIAAm7QAUAFAVgBQCKABBijCQBijBAAkSQAAkShijBQhijCiKABQgVgBgUAFIAAoeMClfAAAMAAAAj5g");
	var mask_graphics_1088 = new cjs.Graphics().p("EgIVAirIAAm7QAVAFAVgBQCKABBijCQBijBAAkSQAAkShijBQhijCiKABQgVgBgVAFIAAoeMClfAAAMAAAAj5g");
	var mask_graphics_1089 = new cjs.Graphics().p("EgIPAirIAAm7QAUAFAVgBQCKABBijCQBijBAAkSQAAkShijBQhijCiKABQgVgBgUAFIAAoeMCldAAAMAAAAj5g");
	var mask_graphics_1090 = new cjs.Graphics().p("EgIKAirIAAm7QAUAFAWgBQCKABBhjCQBjjBAAkSQAAkShjjBQhhjCiKABQgWgBgUAFIAAoeMClcAAAMAAAAj5g");
	var mask_graphics_1091 = new cjs.Graphics().p("EgIEAirIAAm7QAUAFAVgBQCKABBijCQBijBAAkSQAAkShijBQhijCiKABQgVgBgUAFIAAoeMClbAAAMAAAAj5g");
	var mask_graphics_1092 = new cjs.Graphics().p("EgH/AirIAAm7QAUAFAWgBQCKABBhjCQBjjBAAkSQAAkShjjBQhhjCiKABQgWgBgUAFIAAoeMClaAAAMAAAAj5g");
	var mask_graphics_1093 = new cjs.Graphics().p("EgH5AirIAAm7QAUAFAVgBQCKABBijCQBijBAAkSQAAkShijBQhijCiKABQgVgBgUAFIAAoeMClYAAAMAAAAj5g");
	var mask_graphics_1094 = new cjs.Graphics().p("EgH0AirIAAm7QAUAFAWgBQCKABBhjCQBijBAAkSQAAkShijBQhhjCiKABQgWgBgUAFIAAoeMClYAAAMAAAAj5g");
	var mask_graphics_1095 = new cjs.Graphics().p("EgHuAirIAAm7QAUAFAVgBQCKABBijCQBijBAAkSQAAkShijBQhijCiKABQgVgBgUAFIAAoeMClWAAAMAAAAj5g");
	var mask_graphics_1096 = new cjs.Graphics().p("EgHpAirIAAm7QAUAFAWgBQCKABBhjCQBijBAAkSQAAkShijBQhhjCiKABQgWgBgUAFIAAoeMClWAAAMAAAAj5g");
	var mask_graphics_1097 = new cjs.Graphics().p("EgHjAirIAAm7QAUAFAVgBQCKABBijCQBijBAAkSQAAkShijBQhijCiKABQgVgBgUAFIAAoeMClUAAAMAAAAj5g");
	var mask_graphics_1098 = new cjs.Graphics().p("EgHeAirIAAm7QAUAFAWgBQCKABBhjCQBijBAAkSQAAkShijBQhhjCiKABQgWgBgUAFIAAoeMClTAAAMAAAAj5g");
	var mask_graphics_1099 = new cjs.Graphics().p("EgHYAirIAAm7QAUAFAVgBQCKABBijCQBijBAAkSQAAkShijBQhijCiKABQgVgBgUAFIAAoeMClSAAAMAAAAj5g");
	var mask_graphics_1100 = new cjs.Graphics().p("EgHTAirIAAm7QAUAFAWgBQCKABBhjCQBijBAAkSQAAkShijBQhhjCiKABQgWgBgUAFIAAoeMClRAAAMAAAAj5g");
	var mask_graphics_1101 = new cjs.Graphics().p("EgHNAirIAAm7QAUAFAVgBQCKABBijCQBijBAAkSQAAkShijBQhijCiKABQgVgBgUAFIAAoeMClPAAAMAAAAj5g");
	var mask_graphics_1102 = new cjs.Graphics().p("EgHIAirIAAm7QAUAFAVgBQCKABBijCQBijBAAkSQAAkShijBQhijCiKABQgVgBgUAFIAAoeMClPAAAMAAAAj5g");
	var mask_graphics_1103 = new cjs.Graphics().p("EgHCAirIAAm7QAUAFAVgBQCKABBhjCQBijBAAkSQAAkShijBQhhjCiKABQgVgBgUAFIAAoeMClNAAAMAAAAj5g");
	var mask_graphics_1104 = new cjs.Graphics().p("EgG9AirIAAm7QAUAFAVgBQCKABBijCQBijBAAkSQAAkShijBQhijCiKABQgVgBgUAFIAAoeMClMAAAMAAAAj5g");
	var mask_graphics_1105 = new cjs.Graphics().p("EgG3AirIAAm7QAUAFAVgBQCKABBhjCQBijBAAkSQAAkShijBQhhjCiKABQgVgBgUAFIAAoeMClLAAAMAAAAj5g");
	var mask_graphics_1106 = new cjs.Graphics().p("EgGyAirIAAm7QAUAFAVgBQCKABBijCQBijBAAkSQAAkShijBQhijCiKABQgVgBgUAFIAAoeMClKAAAMAAAAj5g");
	var mask_graphics_1107 = new cjs.Graphics().p("EgGtAirIAAm7QAVAFAVgBQCKABBhjCQBijBAAkSQAAkShijBQhhjCiKABQgVgBgVAFIAAoeMClJAAAMAAAAj5g");
	var mask_graphics_1108 = new cjs.Graphics().p("EgGnAirIAAm7QAUAFAVgBQCKABBijCQBijBAAkSQAAkShijBQhijCiKABQgVgBgUAFIAAoeMClIAAAMAAAAj5g");
	var mask_graphics_1109 = new cjs.Graphics().p("EgGiAirIAAm7QAVAFAVgBQCKABBhjCQBijBAAkSQAAkShijBQhhjCiKABQgVgBgVAFIAAoeMClHAAAMAAAAj5g");
	var mask_graphics_1110 = new cjs.Graphics().p("EgGcAirIAAm7QAUAFAVgBQCKABBijCQBijBAAkSQAAkShijBQhijCiKABQgVgBgUAFIAAoeMClFAAAMAAAAj5g");
	var mask_graphics_1111 = new cjs.Graphics().p("EgGXAirIAAm7QAVAFAVgBQCKABBhjCQBijBAAkSQAAkShijBQhhjCiKABQgVgBgVAFIAAoeMClFAAAMAAAAj5g");
	var mask_graphics_1112 = new cjs.Graphics().p("EgGRAirIAAm7QAUAFAVgBQCKABBijCQBhjBAAkSQAAkShhjBQhijCiKABQgVgBgUAFIAAoeMClDAAAMAAAAj5g");
	var mask_graphics_1113 = new cjs.Graphics().p("EgGMAirIAAm7QAVAFAVgBQCKABBhjCQBijBAAkSQAAkShijBQhhjCiKABQgVgBgVAFIAAoeMClCAAAMAAAAj5g");
	var mask_graphics_1114 = new cjs.Graphics().p("EgGGAirIAAm7QAUAFAVgBQCKABBhjCQBijBAAkSQAAkShijBQhhjCiKABQgVgBgUAFIAAoeMClBAAAMAAAAj5g");
	var mask_graphics_1115 = new cjs.Graphics().p("EgGBAirIAAm7QAVAFAVgBQCKABBhjCQBijBAAkSQAAkShijBQhhjCiKABQgVgBgVAFIAAoeMClAAAAMAAAAj5g");
	var mask_graphics_1116 = new cjs.Graphics().p("EgF7AirIAAm7QAUAFAVgBQCKABBhjCQBijBAAkSQAAkShijBQhhjCiKABQgVgBgUAFIAAoeMCk+AAAMAAAAj5g");
	var mask_graphics_1117 = new cjs.Graphics().p("EgF2AirIAAm7QAVAFAVgBQCJABBijCQBhjBAAkSQAAkShhjBQhijCiJABQgVgBgVAFIAAoeMCk+AAAMAAAAj5g");
	var mask_graphics_1118 = new cjs.Graphics().p("EgFwAirIAAm7QAUAFAVgBQCKABBhjCQBhjBAAkSQAAkShhjBQhhjCiKABQgVgBgUAFIAAoeMCk8AAAMAAAAj5g");
	var mask_graphics_1119 = new cjs.Graphics().p("EgFrAirIAAm7QAVAFAVgBQCJABBijCQBhjBAAkSQAAkShhjBQhijCiJABQgVgBgVAFIAAoeMCk7AAAMAAAAj5g");
	var mask_graphics_1120 = new cjs.Graphics().p("EgFlAirIAAm7QAUAFAVgBQCKABBhjCQBhjBAAkSQAAkShhjBQhhjCiKABQgVgBgUAFIAAoeMCk6AAAMAAAAj5g");
	var mask_graphics_1121 = new cjs.Graphics().p("EgFgAirIAAm7QAVAFAVgBQCJABBijCQBgjBAAkSQAAkShgjBQhijCiJABQgVgBgVAFIAAoeMCk5AAAMAAAAj5g");
	var mask_graphics_1122 = new cjs.Graphics().p("EgFaAirIAAm7QAUAFAVgBQCKABBhjCQBhjBAAkSQAAkShhjBQhhjCiKABQgVgBgUAFIAAoeMCk3AAAMAAAAj5g");
	var mask_graphics_1123 = new cjs.Graphics().p("EgFVAirIAAm7QAUAFAWgBQCJABBijCQBgjBAAkSQAAkShgjBQhijCiJABQgWgBgUAFIAAoeMCk3AAAMAAAAj5g");
	var mask_graphics_1124 = new cjs.Graphics().p("EgFPAirIAAm7QAUAFAVgBQCKABBhjCQBhjBAAkSQAAkShhjBQhhjCiKABQgVgBgUAFIAAoeMCk1AAAMAAAAj5g");
	var mask_graphics_1125 = new cjs.Graphics().p("EgFKAirIAAm7QAUAFAWgBQCJABBhjCQBhjBAAkSQAAkShhjBQhhjCiJABQgWgBgUAFIAAoeMCk0AAAMAAAAj5g");
	var mask_graphics_1126 = new cjs.Graphics().p("EgFEAirIAAm7QAUAFAVgBQCKABBhjCQBhjBAAkSQAAkShhjBQhhjCiKABQgVgBgUAFIAAoeMCkzAAAMAAAAj5g");
	var mask_graphics_1127 = new cjs.Graphics().p("EgE/AirIAAm7QAUAFAWgBQCJABBhjCQBhjBAAkSQAAkShhjBQhhjCiJABQgWgBgUAFIAAoeMCkyAAAMAAAAj5g");
	var mask_graphics_1128 = new cjs.Graphics().p("EgE5AirIAAm7QAUAFAVgBQCKABBhjCQBhjBAAkSQAAkShhjBQhhjCiKABQgVgBgUAFIAAoeMCkwAAAMAAAAj5g");
	var mask_graphics_1129 = new cjs.Graphics().p("EgE0AirIAAm7QAUAFAWgBQCJABBhjCQBhjBAAkSQAAkShhjBQhhjCiJABQgWgBgUAFIAAoeMCkwAAAMAAAAj5g");
	var mask_graphics_1130 = new cjs.Graphics().p("EgEuAirIAAm7QAUAFAVgBQCKABBhjCQBgjBAAkSQAAkShgjBQhhjCiKABQgVgBgUAFIAAoeMCkuAAAMAAAAj5g");
	var mask_graphics_1131 = new cjs.Graphics().p("EgEpAirIAAm7QAUAFAVgBQCKABBhjCQBhjBAAkSQAAkShhjBQhhjCiKABQgVgBgUAFIAAoeMCktAAAMAAAAj5g");
	var mask_graphics_1132 = new cjs.Graphics().p("EgEjAirIAAm7QAUAFAVgBQCJABBijCQBgjBAAkSQAAkShgjBQhijCiJABQgVgBgUAFIAAoeMCksAAAMAAAAj5g");
	var mask_graphics_1133 = new cjs.Graphics().p("EgEeAirIAAm7QAUAFAVgBQCKABBhjCQBhjBAAkSQAAkShhjBQhhjCiKABQgVgBgUAFIAAoeMCkrAAAMAAAAj5g");
	var mask_graphics_1134 = new cjs.Graphics().p("EgEYAirIAAm7QAUAFAVgBQCJABBijCQBgjBAAkSQAAkShgjBQhijCiJABQgVgBgUAFIAAoeMCkqAAAMAAAAj5g");
	var mask_graphics_1135 = new cjs.Graphics().p("EgETAirIAAm7QAUAFAVgBQCKABBgjCQBijBAAkSQAAkShijBQhgjCiKABQgVgBgUAFIAAoeMCkpAAAMAAAAj5g");
	var mask_graphics_1136 = new cjs.Graphics().p("EgENAirIAAm7QAUAFAVgBQCJABBgjCQBijBAAkSQAAkShijBQhgjCiJABQgVgBgUAFIAAoeMCknAAAMAAAAj5g");
	var mask_graphics_1137 = new cjs.Graphics().p("EgEIAirIAAm7QAUAFAVgBQCKABBgjCQBijBAAkSQAAkShijBQhgjCiKABQgVgBgUAFIAAoeMCknAAAMAAAAj5g");
	var mask_graphics_1138 = new cjs.Graphics().p("EgECAirIAAm7QAUAFAVgBQCJABBgjCQBijBAAkSQAAkShijBQhgjCiJABQgVgBgUAFIAAoeMCklAAAMAAAAj5g");
	var mask_graphics_1139 = new cjs.Graphics().p("EgD9AirIAAm7QAUAFAVgBQCKABBgjCQBhjBAAkSQAAkShhjBQhgjCiKABQgVgBgUAFIAAoeMCkkAAAMAAAAj5g");
	var mask_graphics_1140 = new cjs.Graphics().p("EgD3AirIAAm7QAUAFAVgBQCJABBgjCQBijBAAkSQAAkShijBQhgjCiJABQgVgBgUAFIAAoeMCkjAAAMAAAAj5g");
	var mask_graphics_1141 = new cjs.Graphics().p("EgDyAirIAAm7QAUAFAVgBQCKABBgjCQBhjBAAkSQAAkShhjBQhgjCiKABQgVgBgUAFIAAoeMCkiAAAMAAAAj5g");
	var mask_graphics_1142 = new cjs.Graphics().p("EgDsAirIAAm7QAUAFAVgBQCJABBgjCQBijBAAkSQAAkShijBQhgjCiJABQgVgBgUAFIAAoeMCkgAAAMAAAAj5g");
	var mask_graphics_1143 = new cjs.Graphics().p("EgDnAirIAAm7QAUAFAVgBQCKABBgjCQBhjBAAkSQAAkShhjBQhgjCiKABQgVgBgUAFIAAoeMCkgAAAMAAAAj5g");
	var mask_graphics_1144 = new cjs.Graphics().p("EgDiAirIAAm7QAVAFAVgBQCJABBgjCQBijBAAkSQAAkShijBQhgjCiJABQgVgBgVAFIAAoeMCkfAAAMAAAAj5g");
	var mask_graphics_1145 = new cjs.Graphics().p("EgDcAirIAAm7QAUAFAVgBQCKABBgjCQBhjBAAkSQAAkShhjBQhgjCiKABQgVgBgUAFIAAoeMCkdAAAMAAAAj5g");
	var mask_graphics_1146 = new cjs.Graphics().p("EgDXAirIAAm7QAVAFAVgBQCJABBgjCQBijBAAkSQAAkShijBQhgjCiJABQgVgBgVAFIAAoeMCkdAAAMAAAAj5g");
	var mask_graphics_1147 = new cjs.Graphics().p("EgDRAirIAAm7QAUAFAVgBQCJABBhjCQBhjBAAkSQAAkShhjBQhhjCiJABQgVgBgUAFIAAoeMCkbAAAMAAAAj5g");
	var mask_graphics_1148 = new cjs.Graphics().p("EgDMAirIAAm7QAVAFAVgBQCJABBgjCQBijBAAkSQAAkShijBQhgjCiJABQgVgBgVAFIAAoeMCkaAAAMAAAAj5g");
	var mask_graphics_1149 = new cjs.Graphics().p("EgDGAirIAAm7QAUAFAVgBQCJABBgjCQBijBAAkSQAAkShijBQhgjCiJABQgVgBgUAFIAAoeMCkZAAAMAAAAj5g");
	var mask_graphics_1150 = new cjs.Graphics().p("EgDBAirIAAm7QAVAFAVgBQCJABBgjCQBhjBAAkSQAAkShhjBQhgjCiJABQgVgBgVAFIAAoeMCkYAAAMAAAAj5g");
	var mask_graphics_1151 = new cjs.Graphics().p("EgC7AirIAAm7QAUAFAVgBQCJABBgjCQBijBAAkSQAAkShijBQhgjCiJABQgVgBgUAFIAAoeMCkWAAAMAAAAj5g");
	var mask_graphics_1152 = new cjs.Graphics().p("EgC2AirIAAm7QAVAFAVgBQCJABBgjCQBhjBAAkSQAAkShhjBQhgjCiJABQgVgBgVAFIAAoeMCkWAAAMAAAAj5g");
	var mask_graphics_1153 = new cjs.Graphics().p("EgCwAirIAAm7QAUAFAVgBQCIABBhjCQBijBAAkSQAAkShijBQhhjCiIABQgVgBgUAFIAAoeMCkUAAAMAAAAj5g");
	var mask_graphics_1154 = new cjs.Graphics().p("EgCrAirIAAm7QAUAFAWgBQCIABBhjCQBhjBAAkSQAAkShhjBQhhjCiIABQgWgBgUAFIAAoeMCkTAAAMAAAAj5g");
	var mask_graphics_1155 = new cjs.Graphics().p("EgClAirIAAm7QAUAFAVgBQCIABBhjCQBijBAAkSQAAkShijBQhhjCiIABQgVgBgUAFIAAoeMCkSAAAMAAAAj5g");
	var mask_graphics_1156 = new cjs.Graphics().p("EgCgAirIAAm7QAUAFAWgBQCIABBhjCQBhjBAAkSQAAkShhjBQhhjCiIABQgWgBgUAFIAAoeMCkRAAAMAAAAj5g");
	var mask_graphics_1157 = new cjs.Graphics().p("EgCaAirIAAm7QAUAFAVgBQCIABBhjCQBijBAAkSQAAkShijBQhhjCiIABQgVgBgUAFIAAoeMCkPAAAMAAAAj5g");
	var mask_graphics_1158 = new cjs.Graphics().p("EgCVAirIAAm7QAUAFAVgBQCJABBhjCQBhjBAAkSQAAkShhjBQhhjCiJABQgVgBgUAFIAAoeMCkPAAAMAAAAj5g");
	var mask_graphics_1159 = new cjs.Graphics().p("EgCPAirIAAm7QAUAFAVgBQCIABBhjCQBhjBAAkSQAAkShhjBQhhjCiIABQgVgBgUAFIAAoeMCkNAAAMAAAAj5g");
	var mask_graphics_1160 = new cjs.Graphics().p("EgCKAirIAAm7QAUAFAVgBQCJABBgjCQBijBAAkSQAAkShijBQhgjCiJABQgVgBgUAFIAAoeMCkMAAAMAAAAj5g");
	var mask_graphics_1161 = new cjs.Graphics().p("EgCEAirIAAm7QAUAFAVgBQCIABBhjCQBhjBAAkSQAAkShhjBQhhjCiIABQgVgBgUAFIAAoeMCkLAAAMAAAAj5g");
	var mask_graphics_1162 = new cjs.Graphics().p("EgB/AirIAAm7QAUAFAVgBQCIABBhjCQBijBAAkSQAAkShijBQhhjCiIABQgVgBgUAFIAAoeMCkKAAAMAAAAj5g");
	var mask_graphics_1163 = new cjs.Graphics().p("EgB5AirIAAm7QAUAFAVgBQCIABBhjCQBhjBAAkSQAAkShhjBQhhjCiIABQgVgBgUAFIAAoeMCkIAAAMAAAAj5g");
	var mask_graphics_1164 = new cjs.Graphics().p("EgB0AirIAAm7QAUAFAVgBQCIABBhjCQBijBAAkSQAAkShijBQhhjCiIABQgVgBgUAFIAAoeMCkIAAAMAAAAj5g");
	var mask_graphics_1165 = new cjs.Graphics().p("EgBuAirIAAm7QAUAFAVgBQCIABBhjCQBhjBAAkSQAAkShhjBQhhjCiIABQgVgBgUAFIAAoeMCkGAAAMAAAAj5g");
	var mask_graphics_1166 = new cjs.Graphics().p("EgBpAirIAAm7QAUAFAVgBQCIABBhjCQBijBAAkSQAAkShijBQhhjCiIABQgVgBgUAFIAAoeMCkFAAAMAAAAj5g");
	var mask_graphics_1167 = new cjs.Graphics().p("EgBjAirIAAm7QAUAFAVgBQCIABBhjCQBhjBAAkSQAAkShhjBQhhjCiIABQgVgBgUAFIAAoeMCkEAAAMAAAAj5g");
	var mask_graphics_1168 = new cjs.Graphics().p("EgBeAirIAAm7QAUAFAVgBQCIABBhjCQBhjBAAkSQAAkShhjBQhhjCiIABQgVgBgUAFIAAoeMCkDAAAMAAAAj5g");
	var mask_graphics_1169 = new cjs.Graphics().p("EgBYAirIAAm7QAUAFAVgBQCIABBhjCQBhjBAAkSQAAkShhjBQhhjCiIABQgVgBgUAFIAAoeMCkBAAAMAAAAj5g");
	var mask_graphics_1170 = new cjs.Graphics().p("EgBTAirIAAm7QAUAFAVgBQCIABBhjCQBhjBAAkSQAAkShhjBQhhjCiIABQgVgBgUAFIAAoeMCkBAAAMAAAAj5g");
	var mask_graphics_1171 = new cjs.Graphics().p("EgBNAirIAAm7QAUAFAVgBQCIABBgjCQBijBAAkSQAAkShijBQhgjCiIABQgVgBgUAFIAAoeMCj/AAAMAAAAj5g");
	var mask_graphics_1172 = new cjs.Graphics().p("EgBIAirIAAm7QAUAFAVgBQCIABBhjCQBhjBAAkSQAAkShhjBQhhjCiIABQgVgBgUAFIAAoeMCj/AAAMAAAAj5g");
	var mask_graphics_1173 = new cjs.Graphics().p("EgBCAirIAAm7QAUAFAVgBQCIABBgjCQBijBAAkSQAAkShijBQhgjCiIABQgVgBgUAFIAAoeMCj9AAAMAAAAj5g");
	var mask_graphics_1174 = new cjs.Graphics().p("EgA9AirIAAm7QAUAFAVgBQCIABBhjCQBhjBAAkSQAAkShhjBQhhjCiIABQgVgBgUAFIAAoeMCj8AAAMAAAAj5g");
	var mask_graphics_1175 = new cjs.Graphics().p("EgA3AirIAAm7QAUAFAVgBQCIABBgjCQBijBAAkSQAAkShijBQhgjCiIABQgVgBgUAFIAAoeMCj7AAAMAAAAj5g");
	var mask_graphics_1176 = new cjs.Graphics().p("EgAyAirIAAm7QAUAFAVgBQCIABBhjCQBhjBAAkSQAAkShhjBQhhjCiIABQgVgBgUAFIAAoeMCj6AAAMAAAAj5g");
	var mask_graphics_1177 = new cjs.Graphics().p("EgAsAirIAAm7QAUAFAVgBQCHABBhjCQBhjBAAkSQAAkShhjBQhhjCiHABQgVgBgUAFIAAoeMCj4AAAMAAAAj5g");
	var mask_graphics_1178 = new cjs.Graphics().p("EgAnAirIAAm7QAUAFAUgBQCJABBhjCQBhjBAAkSQAAkShhjBQhhjCiJABQgUgBgUAFIAAoeMCj4AAAMAAAAj5g");
	var mask_graphics_1179 = new cjs.Graphics().p("EgAhAirIAAm7QAUAFAUgBQCIABBhjCQBhjBAAkSQAAkShhjBQhhjCiIABQgUgBgUAFIAAoeMCj2AAAMAAAAj5g");
	var mask_graphics_1180 = new cjs.Graphics().p("EgAcAirIAAm7QAUAFAUgBQCJABBhjCQBhjBAAkSQAAkShhjBQhhjCiJABQgUgBgUAFIAAoeMCj1AAAMAAAAj5g");
	var mask_graphics_1181 = new cjs.Graphics().p("EgAXAirIAAm7QAVAFAUgBQCIABBhjCQBhjBAAkSQAAkShhjBQhhjCiIABQgUgBgVAFIAAoeMCj1AAAMAAAAj5g");
	var mask_graphics_1182 = new cjs.Graphics().p("EgARAirIAAm7QATAFAVgBQCJABBgjCQBijBAAkSQAAkShijBQhgjCiJABQgVgBgTAFIAAoeMCjzAAAMAAAAj5g");
	var mask_graphics_1183 = new cjs.Graphics().p("EgAMAirIAAm7QAUAFAVgBQCIABBhjCQBhjBAAkSQAAkShhjBQhhjCiIABQgVgBgUAFIAAoeMCjyAAAMAAAAj5g");
	var mask_graphics_1184 = new cjs.Graphics().p("EgAGAirIAAm7QATAFAVgBQCJABBgjCQBijBAAkSQAAkShijBQhgjCiJABQgVgBgTAFIAAoeMCjxAAAMAAAAj5g");
	var mask_graphics_1185 = new cjs.Graphics().p("EgABAirIAAm7QAUAFAVgBQCIABBhjCQBhjBAAkSQAAkShhjBQhhjCiIABQgVgBgUAFIAAoeMCjwAAAMAAAAj5g");
	var mask_graphics_1186 = new cjs.Graphics().p("EAAEAirIAAm7QAUAFAVgBQCJABBgjCQBhjBAAkSQAAkShhjBQhgjCiJABQgVgBgUAFIAAoeMCjvAAAMAAAAj5g");
	var mask_graphics_1187 = new cjs.Graphics().p("EAAJAirIAAm7QAUAFAVgBQCJABBhjCQBhjBAAkSQAAkShhjBQhhjCiJABQgVgBgUAFIAAoeMCjvAAAMAAAAj5g");
	var mask_graphics_1188 = new cjs.Graphics().p("EAAPAirIAAm7QAUAFAVgBQCJABBgjCQBhjBAAkSQAAkShhjBQhgjCiJABQgVgBgUAFIAAoeMCjtAAAMAAAAj5g");
	var mask_graphics_1189 = new cjs.Graphics().p("EAAUAirIAAm7QAUAFAVgBQCJABBhjCQBhjBAAkSQAAkShhjBQhhjCiJABQgVgBgUAFIAAoeMCjsAAAMAAAAj5g");
	var mask_graphics_1190 = new cjs.Graphics().p("EAAaAirIAAm7QAUAFAVgBQCJABBgjCQBhjBAAkSQAAkShhjBQhgjCiJABQgVgBgUAFIAAoeMCjrAAAMAAAAj5g");
	var mask_graphics_1191 = new cjs.Graphics().p("EAAfAirIAAm7QAUAFAVgBQCJABBhjCQBhjBAAkSQAAkShhjBQhhjCiJABQgVgBgUAFIAAoeMCjqAAAMAAAAj5g");
	var mask_graphics_1192 = new cjs.Graphics().p("EAAlAirIAAm7QAUAFAVgBQCIABBhjCQBhjBAAkSQAAkShhjBQhhjCiIABQgVgBgUAFIAAoeMCjoAAAMAAAAj5g");
	var mask_graphics_1193 = new cjs.Graphics().p("EAAqAirIAAm7QAUAFAVgBQCJABBhjCQBhjBAAkSQAAkShhjBQhhjCiJABQgVgBgUAFIAAoeMCjoAAAMAAAAj5g");
	var mask_graphics_1194 = new cjs.Graphics().p("EAAwAirIAAm7QAUAFAVgBQCIABBhjCQBhjBAAkSQAAkShhjBQhhjCiIABQgVgBgUAFIAAoeMCjmAAAMAAAAj5g");
	var mask_graphics_1195 = new cjs.Graphics().p("EAA1AirIAAm7QAUAFAVgBQCJABBgjCQBhjBAAkSQAAkShhjBQhgjCiJABQgVgBgUAFIAAoeMCjlAAAMAAAAj5g");
	var mask_graphics_1196 = new cjs.Graphics().p("EAA7AirIAAm7QAUAFAVgBQCIABBhjCQBhjBAAkSQAAkShhjBQhhjCiIABQgVgBgUAFIAAoeMCjkAAAMAAAAj5g");
	var mask_graphics_1197 = new cjs.Graphics().p("EABAAirIAAm7QAUAFAVgBQCJABBgjCQBhjBAAkSQAAkShhjBQhgjCiJABQgVgBgUAFIAAoeMCjjAAAMAAAAj5g");
	var mask_graphics_1198 = new cjs.Graphics().p("EABGAirIAAm7QAUAFAVgBQCIABBhjCQBhjBAAkSQAAkShhjBQhhjCiIABQgVgBgUAFIAAoeMCjhAAAMAAAAj5g");
	var mask_graphics_1199 = new cjs.Graphics().p("EABLAirIAAm7QAUAFAVgBQCJABBgjCQBhjBAAkSQAAkShhjBQhgjCiJABQgVgBgUAFIAAoeMCjhAAAMAAAAj5g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:585,y:222}).wait(119).to({graphics:mask_graphics_119,x:585,y:222}).wait(1).to({graphics:mask_graphics_120,x:585.5,y:222}).wait(1).to({graphics:mask_graphics_121,x:585.9,y:222}).wait(1).to({graphics:mask_graphics_122,x:586.3,y:222}).wait(1).to({graphics:mask_graphics_123,x:586.8,y:222}).wait(1).to({graphics:mask_graphics_124,x:587.2,y:222}).wait(1).to({graphics:mask_graphics_125,x:587.6,y:222}).wait(1).to({graphics:mask_graphics_126,x:588.1,y:222}).wait(1).to({graphics:mask_graphics_127,x:588.5,y:222}).wait(1).to({graphics:mask_graphics_128,x:588.9,y:222}).wait(1).to({graphics:mask_graphics_129,x:589.4,y:222}).wait(1).to({graphics:mask_graphics_130,x:589.8,y:222}).wait(1).to({graphics:mask_graphics_131,x:590.2,y:222}).wait(1).to({graphics:mask_graphics_132,x:590.7,y:222}).wait(1).to({graphics:mask_graphics_133,x:591.1,y:222}).wait(1).to({graphics:mask_graphics_134,x:591.5,y:222}).wait(1).to({graphics:mask_graphics_135,x:592,y:222}).wait(1).to({graphics:mask_graphics_136,x:592.4,y:222}).wait(1).to({graphics:mask_graphics_137,x:592.8,y:222}).wait(1).to({graphics:mask_graphics_138,x:593.3,y:222}).wait(1).to({graphics:mask_graphics_139,x:593.7,y:222}).wait(1).to({graphics:mask_graphics_140,x:594.1,y:222}).wait(1).to({graphics:mask_graphics_141,x:594.6,y:222}).wait(1).to({graphics:mask_graphics_142,x:595,y:222}).wait(1).to({graphics:mask_graphics_143,x:595.4,y:222}).wait(1).to({graphics:mask_graphics_144,x:595.9,y:222}).wait(1).to({graphics:mask_graphics_145,x:596.3,y:222}).wait(1).to({graphics:mask_graphics_146,x:596.7,y:222}).wait(1).to({graphics:mask_graphics_147,x:597.2,y:222}).wait(1).to({graphics:mask_graphics_148,x:597.6,y:222}).wait(1).to({graphics:mask_graphics_149,x:598.1,y:222}).wait(1).to({graphics:mask_graphics_150,x:598.5,y:222}).wait(1).to({graphics:mask_graphics_151,x:598.9,y:222}).wait(1).to({graphics:mask_graphics_152,x:599.4,y:222}).wait(1).to({graphics:mask_graphics_153,x:599.8,y:222}).wait(1).to({graphics:mask_graphics_154,x:600.2,y:222}).wait(1).to({graphics:mask_graphics_155,x:600.7,y:222}).wait(1).to({graphics:mask_graphics_156,x:601.1,y:222}).wait(1).to({graphics:mask_graphics_157,x:601.5,y:222}).wait(1).to({graphics:mask_graphics_158,x:602,y:222}).wait(1).to({graphics:mask_graphics_159,x:602.4,y:222}).wait(1).to({graphics:mask_graphics_160,x:602.8,y:222}).wait(1).to({graphics:mask_graphics_161,x:603.3,y:222}).wait(1).to({graphics:mask_graphics_162,x:603.7,y:222}).wait(1).to({graphics:mask_graphics_163,x:604.1,y:222}).wait(1).to({graphics:mask_graphics_164,x:604.6,y:222}).wait(1).to({graphics:mask_graphics_165,x:605,y:222}).wait(1).to({graphics:mask_graphics_166,x:605.4,y:222}).wait(1).to({graphics:mask_graphics_167,x:605.9,y:222}).wait(1).to({graphics:mask_graphics_168,x:606.3,y:222}).wait(1).to({graphics:mask_graphics_169,x:606.7,y:222}).wait(1).to({graphics:mask_graphics_170,x:607.2,y:222}).wait(1).to({graphics:mask_graphics_171,x:607.6,y:222}).wait(1).to({graphics:mask_graphics_172,x:608,y:222}).wait(1).to({graphics:mask_graphics_173,x:608.5,y:222}).wait(1).to({graphics:mask_graphics_174,x:608.9,y:222}).wait(1).to({graphics:mask_graphics_175,x:609.3,y:222}).wait(1).to({graphics:mask_graphics_176,x:609.8,y:222}).wait(1).to({graphics:mask_graphics_177,x:610.2,y:222}).wait(1).to({graphics:mask_graphics_178,x:610.6,y:222}).wait(1).to({graphics:mask_graphics_179,x:611.1,y:222}).wait(1).to({graphics:mask_graphics_180,x:611.5,y:222}).wait(1).to({graphics:mask_graphics_181,x:611.9,y:222}).wait(1).to({graphics:mask_graphics_182,x:612.4,y:222}).wait(1).to({graphics:mask_graphics_183,x:612.8,y:222}).wait(1).to({graphics:mask_graphics_184,x:613.2,y:222}).wait(1).to({graphics:mask_graphics_185,x:613.7,y:222}).wait(1).to({graphics:mask_graphics_186,x:614.1,y:222}).wait(1).to({graphics:mask_graphics_187,x:614.6,y:222}).wait(1).to({graphics:mask_graphics_188,x:615,y:222}).wait(1).to({graphics:mask_graphics_189,x:615.4,y:222}).wait(1).to({graphics:mask_graphics_190,x:615.9,y:222}).wait(1).to({graphics:mask_graphics_191,x:616.3,y:222}).wait(1).to({graphics:mask_graphics_192,x:616.7,y:222}).wait(1).to({graphics:mask_graphics_193,x:617.2,y:222}).wait(1).to({graphics:mask_graphics_194,x:617.6,y:222}).wait(1).to({graphics:mask_graphics_195,x:618,y:222}).wait(1).to({graphics:mask_graphics_196,x:618.5,y:222}).wait(1).to({graphics:mask_graphics_197,x:618.9,y:222}).wait(1).to({graphics:mask_graphics_198,x:619.3,y:222}).wait(1).to({graphics:mask_graphics_199,x:619.8,y:222}).wait(1).to({graphics:mask_graphics_200,x:620.2,y:222}).wait(1).to({graphics:mask_graphics_201,x:620.6,y:222}).wait(1).to({graphics:mask_graphics_202,x:621.1,y:222}).wait(1).to({graphics:mask_graphics_203,x:621.5,y:222}).wait(1).to({graphics:mask_graphics_204,x:621.9,y:222}).wait(1).to({graphics:mask_graphics_205,x:622.4,y:222}).wait(1).to({graphics:mask_graphics_206,x:622.8,y:222}).wait(1).to({graphics:mask_graphics_207,x:623.2,y:222}).wait(1).to({graphics:mask_graphics_208,x:623.7,y:222}).wait(1).to({graphics:mask_graphics_209,x:624.1,y:222}).wait(1).to({graphics:mask_graphics_210,x:624.5,y:222}).wait(1).to({graphics:mask_graphics_211,x:625,y:222}).wait(1).to({graphics:mask_graphics_212,x:625.4,y:222}).wait(1).to({graphics:mask_graphics_213,x:625.8,y:222}).wait(1).to({graphics:mask_graphics_214,x:626.3,y:222}).wait(1).to({graphics:mask_graphics_215,x:626.7,y:222}).wait(1).to({graphics:mask_graphics_216,x:627.1,y:222}).wait(1).to({graphics:mask_graphics_217,x:627.6,y:222}).wait(1).to({graphics:mask_graphics_218,x:628,y:222}).wait(1).to({graphics:mask_graphics_219,x:628.4,y:222}).wait(1).to({graphics:mask_graphics_220,x:628.9,y:222}).wait(1).to({graphics:mask_graphics_221,x:629.3,y:222}).wait(1).to({graphics:mask_graphics_222,x:629.7,y:222}).wait(1).to({graphics:mask_graphics_223,x:630.2,y:222}).wait(1).to({graphics:mask_graphics_224,x:630.6,y:222}).wait(1).to({graphics:mask_graphics_225,x:631.1,y:222}).wait(1).to({graphics:mask_graphics_226,x:631.5,y:222}).wait(1).to({graphics:mask_graphics_227,x:631.9,y:222}).wait(1).to({graphics:mask_graphics_228,x:632.4,y:222}).wait(1).to({graphics:mask_graphics_229,x:632.8,y:222}).wait(1).to({graphics:mask_graphics_230,x:633.2,y:222}).wait(1).to({graphics:mask_graphics_231,x:633.7,y:222}).wait(1).to({graphics:mask_graphics_232,x:634.1,y:222}).wait(1).to({graphics:mask_graphics_233,x:634.5,y:222}).wait(1).to({graphics:mask_graphics_234,x:635,y:222}).wait(1).to({graphics:mask_graphics_235,x:635.4,y:222}).wait(1).to({graphics:mask_graphics_236,x:635.8,y:222}).wait(1).to({graphics:mask_graphics_237,x:636.3,y:222}).wait(1).to({graphics:mask_graphics_238,x:636.7,y:222}).wait(1).to({graphics:mask_graphics_239,x:637.1,y:222}).wait(1).to({graphics:mask_graphics_240,x:637.6,y:222}).wait(1).to({graphics:mask_graphics_241,x:638,y:222}).wait(1).to({graphics:mask_graphics_242,x:638.4,y:222}).wait(1).to({graphics:mask_graphics_243,x:638.9,y:222}).wait(1).to({graphics:mask_graphics_244,x:639.3,y:222}).wait(1).to({graphics:mask_graphics_245,x:639.7,y:222}).wait(1).to({graphics:mask_graphics_246,x:640.2,y:222}).wait(1).to({graphics:mask_graphics_247,x:640.6,y:222}).wait(1).to({graphics:mask_graphics_248,x:641,y:222}).wait(1).to({graphics:mask_graphics_249,x:641.5,y:222}).wait(1).to({graphics:mask_graphics_250,x:641.9,y:222}).wait(1).to({graphics:mask_graphics_251,x:642.3,y:222}).wait(1).to({graphics:mask_graphics_252,x:642.8,y:222}).wait(1).to({graphics:mask_graphics_253,x:643.2,y:222}).wait(1).to({graphics:mask_graphics_254,x:643.6,y:222}).wait(1).to({graphics:mask_graphics_255,x:644.1,y:222}).wait(1).to({graphics:mask_graphics_256,x:644.5,y:222}).wait(1).to({graphics:mask_graphics_257,x:644.9,y:222}).wait(1).to({graphics:mask_graphics_258,x:645.4,y:222}).wait(1).to({graphics:mask_graphics_259,x:645.8,y:222}).wait(1).to({graphics:mask_graphics_260,x:646.2,y:222}).wait(1).to({graphics:mask_graphics_261,x:646.7,y:222}).wait(1).to({graphics:mask_graphics_262,x:647.1,y:222}).wait(1).to({graphics:mask_graphics_263,x:647.6,y:222}).wait(1).to({graphics:mask_graphics_264,x:648,y:222}).wait(1).to({graphics:mask_graphics_265,x:648.4,y:222}).wait(1).to({graphics:mask_graphics_266,x:648.9,y:222}).wait(1).to({graphics:mask_graphics_267,x:649.3,y:222}).wait(1).to({graphics:mask_graphics_268,x:649.7,y:222}).wait(1).to({graphics:mask_graphics_269,x:650.2,y:222}).wait(1).to({graphics:mask_graphics_270,x:650.6,y:222}).wait(1).to({graphics:mask_graphics_271,x:651,y:222}).wait(1).to({graphics:mask_graphics_272,x:651.5,y:222}).wait(1).to({graphics:mask_graphics_273,x:651.9,y:222}).wait(1).to({graphics:mask_graphics_274,x:652.3,y:222}).wait(1).to({graphics:mask_graphics_275,x:652.8,y:222}).wait(1).to({graphics:mask_graphics_276,x:653.2,y:222}).wait(1).to({graphics:mask_graphics_277,x:653.6,y:222}).wait(1).to({graphics:mask_graphics_278,x:654.1,y:222}).wait(1).to({graphics:mask_graphics_279,x:654.5,y:222}).wait(1).to({graphics:mask_graphics_280,x:654.9,y:222}).wait(1).to({graphics:mask_graphics_281,x:655.4,y:222}).wait(1).to({graphics:mask_graphics_282,x:655.8,y:222}).wait(1).to({graphics:mask_graphics_283,x:656.2,y:222}).wait(1).to({graphics:mask_graphics_284,x:656.7,y:222}).wait(1).to({graphics:mask_graphics_285,x:657.1,y:222}).wait(1).to({graphics:mask_graphics_286,x:657.5,y:222}).wait(1).to({graphics:mask_graphics_287,x:658,y:222}).wait(1).to({graphics:mask_graphics_288,x:658.4,y:222}).wait(1).to({graphics:mask_graphics_289,x:658.8,y:222}).wait(1).to({graphics:mask_graphics_290,x:659.3,y:222}).wait(1).to({graphics:mask_graphics_291,x:659.7,y:222}).wait(1).to({graphics:mask_graphics_292,x:660.1,y:222}).wait(1).to({graphics:mask_graphics_293,x:660.6,y:222}).wait(1).to({graphics:mask_graphics_294,x:661,y:222}).wait(1).to({graphics:mask_graphics_295,x:661.4,y:222}).wait(1).to({graphics:mask_graphics_296,x:661.9,y:222}).wait(1).to({graphics:mask_graphics_297,x:662.3,y:222}).wait(1).to({graphics:mask_graphics_298,x:662.7,y:222}).wait(1).to({graphics:mask_graphics_299,x:663.2,y:222}).wait(1).to({graphics:mask_graphics_300,x:663.6,y:222}).wait(1).to({graphics:mask_graphics_301,x:664.1,y:222}).wait(1).to({graphics:mask_graphics_302,x:664.5,y:222}).wait(1).to({graphics:mask_graphics_303,x:664.9,y:222}).wait(1).to({graphics:mask_graphics_304,x:665.4,y:222}).wait(1).to({graphics:mask_graphics_305,x:665.8,y:222}).wait(1).to({graphics:mask_graphics_306,x:666.2,y:222}).wait(1).to({graphics:mask_graphics_307,x:666.7,y:222}).wait(1).to({graphics:mask_graphics_308,x:667.1,y:222}).wait(1).to({graphics:mask_graphics_309,x:667.5,y:222}).wait(1).to({graphics:mask_graphics_310,x:668,y:222}).wait(1).to({graphics:mask_graphics_311,x:668.4,y:222}).wait(1).to({graphics:mask_graphics_312,x:668.8,y:222}).wait(1).to({graphics:mask_graphics_313,x:669.3,y:222}).wait(1).to({graphics:mask_graphics_314,x:669.7,y:222}).wait(1).to({graphics:mask_graphics_315,x:670.1,y:222}).wait(1).to({graphics:mask_graphics_316,x:670.6,y:222}).wait(1).to({graphics:mask_graphics_317,x:671,y:222}).wait(1).to({graphics:mask_graphics_318,x:671.4,y:222}).wait(1).to({graphics:mask_graphics_319,x:671.9,y:222}).wait(1).to({graphics:mask_graphics_320,x:672.3,y:222}).wait(1).to({graphics:mask_graphics_321,x:672.7,y:222}).wait(1).to({graphics:mask_graphics_322,x:673.2,y:222}).wait(1).to({graphics:mask_graphics_323,x:673.6,y:222}).wait(1).to({graphics:mask_graphics_324,x:674,y:222}).wait(1).to({graphics:mask_graphics_325,x:674.5,y:222}).wait(1).to({graphics:mask_graphics_326,x:674.9,y:222}).wait(1).to({graphics:mask_graphics_327,x:675.3,y:222}).wait(1).to({graphics:mask_graphics_328,x:675.8,y:222}).wait(1).to({graphics:mask_graphics_329,x:676.2,y:222}).wait(1).to({graphics:mask_graphics_330,x:676.6,y:222}).wait(1).to({graphics:mask_graphics_331,x:677.1,y:222}).wait(1).to({graphics:mask_graphics_332,x:677.5,y:222}).wait(1).to({graphics:mask_graphics_333,x:677.9,y:222}).wait(1).to({graphics:mask_graphics_334,x:678.4,y:222}).wait(1).to({graphics:mask_graphics_335,x:678.8,y:222}).wait(1).to({graphics:mask_graphics_336,x:679.2,y:222}).wait(1).to({graphics:mask_graphics_337,x:679.7,y:222}).wait(1).to({graphics:mask_graphics_338,x:680.1,y:222}).wait(1).to({graphics:mask_graphics_339,x:680.6,y:222}).wait(1).to({graphics:mask_graphics_340,x:681,y:222}).wait(1).to({graphics:mask_graphics_341,x:681.4,y:222}).wait(1).to({graphics:mask_graphics_342,x:681.9,y:222}).wait(1).to({graphics:mask_graphics_343,x:682.3,y:222}).wait(1).to({graphics:mask_graphics_344,x:682.7,y:222}).wait(1).to({graphics:mask_graphics_345,x:683.2,y:222}).wait(1).to({graphics:mask_graphics_346,x:683.6,y:222}).wait(1).to({graphics:mask_graphics_347,x:684,y:222}).wait(1).to({graphics:mask_graphics_348,x:684.5,y:222}).wait(1).to({graphics:mask_graphics_349,x:684.9,y:222}).wait(1).to({graphics:mask_graphics_350,x:685.3,y:222}).wait(1).to({graphics:mask_graphics_351,x:685.8,y:222}).wait(1).to({graphics:mask_graphics_352,x:686.2,y:222}).wait(1).to({graphics:mask_graphics_353,x:686.6,y:222}).wait(1).to({graphics:mask_graphics_354,x:687.1,y:222}).wait(1).to({graphics:mask_graphics_355,x:687.5,y:222}).wait(1).to({graphics:mask_graphics_356,x:687.9,y:222}).wait(1).to({graphics:mask_graphics_357,x:688.4,y:222}).wait(1).to({graphics:mask_graphics_358,x:688.8,y:222}).wait(1).to({graphics:mask_graphics_359,x:689.2,y:222}).wait(1).to({graphics:mask_graphics_360,x:689.7,y:222}).wait(1).to({graphics:mask_graphics_361,x:690.1,y:222}).wait(1).to({graphics:mask_graphics_362,x:690.5,y:222}).wait(1).to({graphics:mask_graphics_363,x:691,y:222}).wait(1).to({graphics:mask_graphics_364,x:691.4,y:222}).wait(1).to({graphics:mask_graphics_365,x:691.8,y:222}).wait(1).to({graphics:mask_graphics_366,x:692.3,y:222}).wait(1).to({graphics:mask_graphics_367,x:692.7,y:222}).wait(1).to({graphics:mask_graphics_368,x:693.1,y:222}).wait(1).to({graphics:mask_graphics_369,x:693.6,y:222}).wait(1).to({graphics:mask_graphics_370,x:694,y:222}).wait(1).to({graphics:mask_graphics_371,x:694.4,y:222}).wait(1).to({graphics:mask_graphics_372,x:694.9,y:222}).wait(1).to({graphics:mask_graphics_373,x:695.3,y:222}).wait(1).to({graphics:mask_graphics_374,x:695.7,y:222}).wait(1).to({graphics:mask_graphics_375,x:696.2,y:222}).wait(1).to({graphics:mask_graphics_376,x:696.6,y:222}).wait(1).to({graphics:mask_graphics_377,x:697.1,y:222}).wait(1).to({graphics:mask_graphics_378,x:697.5,y:222}).wait(1).to({graphics:mask_graphics_379,x:697.9,y:222}).wait(1).to({graphics:mask_graphics_380,x:698.4,y:222}).wait(1).to({graphics:mask_graphics_381,x:698.8,y:222}).wait(1).to({graphics:mask_graphics_382,x:699.2,y:222}).wait(1).to({graphics:mask_graphics_383,x:699.7,y:222}).wait(1).to({graphics:mask_graphics_384,x:700.1,y:222}).wait(1).to({graphics:mask_graphics_385,x:700.5,y:222}).wait(1).to({graphics:mask_graphics_386,x:701,y:222}).wait(1).to({graphics:mask_graphics_387,x:701.4,y:222}).wait(1).to({graphics:mask_graphics_388,x:701.8,y:222}).wait(1).to({graphics:mask_graphics_389,x:702.3,y:222}).wait(1).to({graphics:mask_graphics_390,x:702.7,y:222}).wait(1).to({graphics:mask_graphics_391,x:703.1,y:222}).wait(1).to({graphics:mask_graphics_392,x:703.6,y:222}).wait(1).to({graphics:mask_graphics_393,x:704,y:222}).wait(1).to({graphics:mask_graphics_394,x:704.4,y:222}).wait(1).to({graphics:mask_graphics_395,x:704.9,y:222}).wait(1).to({graphics:mask_graphics_396,x:705.3,y:222}).wait(1).to({graphics:mask_graphics_397,x:705.7,y:222}).wait(1).to({graphics:mask_graphics_398,x:706.2,y:222}).wait(1).to({graphics:mask_graphics_399,x:706.6,y:222}).wait(1).to({graphics:mask_graphics_400,x:707,y:222}).wait(1).to({graphics:mask_graphics_401,x:707.5,y:222}).wait(1).to({graphics:mask_graphics_402,x:707.9,y:222}).wait(1).to({graphics:mask_graphics_403,x:708.3,y:222}).wait(1).to({graphics:mask_graphics_404,x:708.8,y:222}).wait(1).to({graphics:mask_graphics_405,x:709.2,y:222}).wait(1).to({graphics:mask_graphics_406,x:709.6,y:222}).wait(1).to({graphics:mask_graphics_407,x:710.1,y:222}).wait(1).to({graphics:mask_graphics_408,x:710.5,y:222}).wait(1).to({graphics:mask_graphics_409,x:710.9,y:222}).wait(1).to({graphics:mask_graphics_410,x:711.4,y:222}).wait(1).to({graphics:mask_graphics_411,x:711.8,y:222}).wait(1).to({graphics:mask_graphics_412,x:712.2,y:222}).wait(1).to({graphics:mask_graphics_413,x:712.7,y:222}).wait(1).to({graphics:mask_graphics_414,x:713.1,y:222}).wait(1).to({graphics:mask_graphics_415,x:713.6,y:222}).wait(1).to({graphics:mask_graphics_416,x:714,y:222}).wait(1).to({graphics:mask_graphics_417,x:714.4,y:222}).wait(1).to({graphics:mask_graphics_418,x:714.9,y:222}).wait(1).to({graphics:mask_graphics_419,x:715.3,y:222}).wait(1).to({graphics:mask_graphics_420,x:715.7,y:222}).wait(1).to({graphics:mask_graphics_421,x:716.2,y:222}).wait(1).to({graphics:mask_graphics_422,x:716.6,y:222}).wait(1).to({graphics:mask_graphics_423,x:717,y:222}).wait(1).to({graphics:mask_graphics_424,x:717.5,y:222}).wait(1).to({graphics:mask_graphics_425,x:717.9,y:222}).wait(1).to({graphics:mask_graphics_426,x:718.3,y:222}).wait(1).to({graphics:mask_graphics_427,x:718.8,y:222}).wait(1).to({graphics:mask_graphics_428,x:719.2,y:222}).wait(1).to({graphics:mask_graphics_429,x:719.6,y:222}).wait(1).to({graphics:mask_graphics_430,x:720.1,y:222}).wait(1).to({graphics:mask_graphics_431,x:720.5,y:222}).wait(1).to({graphics:mask_graphics_432,x:720.9,y:222}).wait(1).to({graphics:mask_graphics_433,x:721.4,y:222}).wait(1).to({graphics:mask_graphics_434,x:721.8,y:222}).wait(1).to({graphics:mask_graphics_435,x:722.2,y:222}).wait(1).to({graphics:mask_graphics_436,x:722.7,y:222}).wait(1).to({graphics:mask_graphics_437,x:723.1,y:222}).wait(1).to({graphics:mask_graphics_438,x:723.5,y:222}).wait(1).to({graphics:mask_graphics_439,x:724,y:222}).wait(1).to({graphics:mask_graphics_440,x:724.4,y:222}).wait(1).to({graphics:mask_graphics_441,x:724.8,y:222}).wait(1).to({graphics:mask_graphics_442,x:725.3,y:222}).wait(1).to({graphics:mask_graphics_443,x:725.7,y:222}).wait(1).to({graphics:mask_graphics_444,x:726.1,y:222}).wait(1).to({graphics:mask_graphics_445,x:726.6,y:222}).wait(1).to({graphics:mask_graphics_446,x:727,y:222}).wait(1).to({graphics:mask_graphics_447,x:727.4,y:222}).wait(1).to({graphics:mask_graphics_448,x:727.9,y:222}).wait(1).to({graphics:mask_graphics_449,x:728.3,y:222}).wait(1).to({graphics:mask_graphics_450,x:728.7,y:222}).wait(1).to({graphics:mask_graphics_451,x:729.2,y:222}).wait(1).to({graphics:mask_graphics_452,x:729.6,y:222}).wait(1).to({graphics:mask_graphics_453,x:730.1,y:222}).wait(1).to({graphics:mask_graphics_454,x:730.5,y:222}).wait(1).to({graphics:mask_graphics_455,x:730.9,y:222}).wait(1).to({graphics:mask_graphics_456,x:731.4,y:222}).wait(1).to({graphics:mask_graphics_457,x:731.8,y:222}).wait(1).to({graphics:mask_graphics_458,x:732.2,y:222}).wait(1).to({graphics:mask_graphics_459,x:732.7,y:222}).wait(1).to({graphics:mask_graphics_460,x:733.1,y:222}).wait(1).to({graphics:mask_graphics_461,x:733.5,y:222}).wait(1).to({graphics:mask_graphics_462,x:734,y:222}).wait(1).to({graphics:mask_graphics_463,x:734.4,y:222}).wait(1).to({graphics:mask_graphics_464,x:734.8,y:222}).wait(1).to({graphics:mask_graphics_465,x:735.3,y:222}).wait(1).to({graphics:mask_graphics_466,x:735.7,y:222}).wait(1).to({graphics:mask_graphics_467,x:736.1,y:222}).wait(1).to({graphics:mask_graphics_468,x:736.6,y:222}).wait(1).to({graphics:mask_graphics_469,x:737,y:222}).wait(1).to({graphics:mask_graphics_470,x:737.4,y:222}).wait(1).to({graphics:mask_graphics_471,x:737.9,y:222}).wait(1).to({graphics:mask_graphics_472,x:738.3,y:222}).wait(1).to({graphics:mask_graphics_473,x:738.7,y:222}).wait(1).to({graphics:mask_graphics_474,x:739.2,y:222}).wait(1).to({graphics:mask_graphics_475,x:739.6,y:222}).wait(1).to({graphics:mask_graphics_476,x:740,y:222}).wait(1).to({graphics:mask_graphics_477,x:740.5,y:222}).wait(1).to({graphics:mask_graphics_478,x:740.9,y:222}).wait(1).to({graphics:mask_graphics_479,x:741.3,y:222}).wait(1).to({graphics:mask_graphics_480,x:741.8,y:222}).wait(1).to({graphics:mask_graphics_481,x:742.2,y:222}).wait(1).to({graphics:mask_graphics_482,x:742.6,y:222}).wait(1).to({graphics:mask_graphics_483,x:743.1,y:222}).wait(1).to({graphics:mask_graphics_484,x:743.5,y:222}).wait(1).to({graphics:mask_graphics_485,x:743.9,y:222}).wait(1).to({graphics:mask_graphics_486,x:744.4,y:222}).wait(1).to({graphics:mask_graphics_487,x:744.8,y:222}).wait(1).to({graphics:mask_graphics_488,x:745.2,y:222}).wait(1).to({graphics:mask_graphics_489,x:745.7,y:222}).wait(1).to({graphics:mask_graphics_490,x:746.1,y:222}).wait(1).to({graphics:mask_graphics_491,x:746.6,y:222}).wait(1).to({graphics:mask_graphics_492,x:747,y:222}).wait(1).to({graphics:mask_graphics_493,x:747.4,y:222}).wait(1).to({graphics:mask_graphics_494,x:747.9,y:222}).wait(1).to({graphics:mask_graphics_495,x:748.3,y:222}).wait(1).to({graphics:mask_graphics_496,x:748.7,y:222}).wait(1).to({graphics:mask_graphics_497,x:749.2,y:222}).wait(1).to({graphics:mask_graphics_498,x:749.6,y:222}).wait(1).to({graphics:mask_graphics_499,x:750,y:222}).wait(1).to({graphics:mask_graphics_500,x:750.5,y:222}).wait(1).to({graphics:mask_graphics_501,x:750.9,y:222}).wait(1).to({graphics:mask_graphics_502,x:751.3,y:222}).wait(1).to({graphics:mask_graphics_503,x:751.8,y:222}).wait(1).to({graphics:mask_graphics_504,x:752.2,y:222}).wait(1).to({graphics:mask_graphics_505,x:752.6,y:222}).wait(1).to({graphics:mask_graphics_506,x:753.1,y:222}).wait(1).to({graphics:mask_graphics_507,x:753.5,y:222}).wait(1).to({graphics:mask_graphics_508,x:753.9,y:222}).wait(1).to({graphics:mask_graphics_509,x:754.4,y:222}).wait(1).to({graphics:mask_graphics_510,x:754.8,y:222}).wait(1).to({graphics:mask_graphics_511,x:755.2,y:222}).wait(1).to({graphics:mask_graphics_512,x:755.7,y:222}).wait(1).to({graphics:mask_graphics_513,x:756.1,y:222}).wait(1).to({graphics:mask_graphics_514,x:756.5,y:222}).wait(1).to({graphics:mask_graphics_515,x:757,y:222}).wait(1).to({graphics:mask_graphics_516,x:757.4,y:222}).wait(1).to({graphics:mask_graphics_517,x:757.8,y:222}).wait(1).to({graphics:mask_graphics_518,x:758.3,y:222}).wait(1).to({graphics:mask_graphics_519,x:758.7,y:222}).wait(1).to({graphics:mask_graphics_520,x:759.1,y:222}).wait(1).to({graphics:mask_graphics_521,x:759.6,y:222}).wait(1).to({graphics:mask_graphics_522,x:760,y:222}).wait(1).to({graphics:mask_graphics_523,x:760.4,y:222}).wait(1).to({graphics:mask_graphics_524,x:760.9,y:222}).wait(1).to({graphics:mask_graphics_525,x:761.3,y:222}).wait(1).to({graphics:mask_graphics_526,x:761.7,y:222}).wait(1).to({graphics:mask_graphics_527,x:762.2,y:222}).wait(1).to({graphics:mask_graphics_528,x:762.6,y:222}).wait(1).to({graphics:mask_graphics_529,x:763.1,y:222}).wait(1).to({graphics:mask_graphics_530,x:763.5,y:222}).wait(1).to({graphics:mask_graphics_531,x:763.9,y:222}).wait(1).to({graphics:mask_graphics_532,x:764.4,y:222}).wait(1).to({graphics:mask_graphics_533,x:764.8,y:222}).wait(1).to({graphics:mask_graphics_534,x:765.2,y:222}).wait(1).to({graphics:mask_graphics_535,x:765.7,y:222}).wait(1).to({graphics:mask_graphics_536,x:766.1,y:222}).wait(1).to({graphics:mask_graphics_537,x:766.5,y:222}).wait(1).to({graphics:mask_graphics_538,x:767,y:222}).wait(1).to({graphics:mask_graphics_539,x:767.4,y:222}).wait(1).to({graphics:mask_graphics_540,x:767.8,y:222}).wait(1).to({graphics:mask_graphics_541,x:768.3,y:222}).wait(1).to({graphics:mask_graphics_542,x:768.7,y:222}).wait(1).to({graphics:mask_graphics_543,x:769.1,y:222}).wait(1).to({graphics:mask_graphics_544,x:769.6,y:222}).wait(1).to({graphics:mask_graphics_545,x:770,y:222}).wait(1).to({graphics:mask_graphics_546,x:770.4,y:222}).wait(1).to({graphics:mask_graphics_547,x:770.9,y:222}).wait(1).to({graphics:mask_graphics_548,x:771.3,y:222}).wait(1).to({graphics:mask_graphics_549,x:771.7,y:222}).wait(1).to({graphics:mask_graphics_550,x:772.2,y:222}).wait(1).to({graphics:mask_graphics_551,x:772.6,y:222}).wait(1).to({graphics:mask_graphics_552,x:773,y:222}).wait(1).to({graphics:mask_graphics_553,x:773.5,y:222}).wait(1).to({graphics:mask_graphics_554,x:773.9,y:222}).wait(1).to({graphics:mask_graphics_555,x:774.3,y:222}).wait(1).to({graphics:mask_graphics_556,x:774.8,y:222}).wait(1).to({graphics:mask_graphics_557,x:775.2,y:222}).wait(1).to({graphics:mask_graphics_558,x:775.6,y:222}).wait(1).to({graphics:mask_graphics_559,x:776.1,y:222}).wait(1).to({graphics:mask_graphics_560,x:776.5,y:222}).wait(1).to({graphics:mask_graphics_561,x:776.9,y:222}).wait(1).to({graphics:mask_graphics_562,x:777.4,y:222}).wait(1).to({graphics:mask_graphics_563,x:777.8,y:222}).wait(1).to({graphics:mask_graphics_564,x:778.2,y:222}).wait(1).to({graphics:mask_graphics_565,x:778.7,y:222}).wait(1).to({graphics:mask_graphics_566,x:779.1,y:222}).wait(1).to({graphics:mask_graphics_567,x:779.6,y:222}).wait(1).to({graphics:mask_graphics_568,x:780,y:222}).wait(1).to({graphics:mask_graphics_569,x:780.4,y:222}).wait(1).to({graphics:mask_graphics_570,x:780.9,y:222}).wait(1).to({graphics:mask_graphics_571,x:781.3,y:222}).wait(1).to({graphics:mask_graphics_572,x:781.7,y:222}).wait(1).to({graphics:mask_graphics_573,x:782.2,y:222}).wait(1).to({graphics:mask_graphics_574,x:782.6,y:222}).wait(1).to({graphics:mask_graphics_575,x:783,y:222}).wait(1).to({graphics:mask_graphics_576,x:783.5,y:222}).wait(1).to({graphics:mask_graphics_577,x:783.9,y:222}).wait(1).to({graphics:mask_graphics_578,x:784.3,y:222}).wait(1).to({graphics:mask_graphics_579,x:784.8,y:222}).wait(1).to({graphics:mask_graphics_580,x:785.2,y:222}).wait(1).to({graphics:mask_graphics_581,x:785.6,y:222}).wait(1).to({graphics:mask_graphics_582,x:786.1,y:222}).wait(1).to({graphics:mask_graphics_583,x:786.5,y:222}).wait(1).to({graphics:mask_graphics_584,x:786.9,y:222}).wait(1).to({graphics:mask_graphics_585,x:787.4,y:222}).wait(1).to({graphics:mask_graphics_586,x:787.8,y:222}).wait(1).to({graphics:mask_graphics_587,x:788.2,y:222}).wait(1).to({graphics:mask_graphics_588,x:788.7,y:222}).wait(1).to({graphics:mask_graphics_589,x:789.1,y:222}).wait(1).to({graphics:mask_graphics_590,x:789.5,y:222}).wait(1).to({graphics:mask_graphics_591,x:790,y:222}).wait(1).to({graphics:mask_graphics_592,x:790.4,y:222}).wait(1).to({graphics:mask_graphics_593,x:790.8,y:222}).wait(1).to({graphics:mask_graphics_594,x:791.3,y:222}).wait(1).to({graphics:mask_graphics_595,x:791.7,y:222}).wait(1).to({graphics:mask_graphics_596,x:792.1,y:222}).wait(1).to({graphics:mask_graphics_597,x:792.6,y:222}).wait(1).to({graphics:mask_graphics_598,x:793,y:222}).wait(1).to({graphics:mask_graphics_599,x:793.4,y:222}).wait(1).to({graphics:mask_graphics_600,x:793.9,y:222}).wait(1).to({graphics:mask_graphics_601,x:794.3,y:222}).wait(1).to({graphics:mask_graphics_602,x:794.7,y:222}).wait(1).to({graphics:mask_graphics_603,x:795.2,y:222}).wait(1).to({graphics:mask_graphics_604,x:795.6,y:222}).wait(1).to({graphics:mask_graphics_605,x:796.1,y:222}).wait(1).to({graphics:mask_graphics_606,x:796.5,y:222}).wait(1).to({graphics:mask_graphics_607,x:796.9,y:222}).wait(1).to({graphics:mask_graphics_608,x:797.4,y:222}).wait(1).to({graphics:mask_graphics_609,x:797.8,y:222}).wait(1).to({graphics:mask_graphics_610,x:798.2,y:222}).wait(1).to({graphics:mask_graphics_611,x:798.7,y:222}).wait(1).to({graphics:mask_graphics_612,x:799.1,y:222}).wait(1).to({graphics:mask_graphics_613,x:799.5,y:222}).wait(1).to({graphics:mask_graphics_614,x:800,y:222}).wait(1).to({graphics:mask_graphics_615,x:800.4,y:222}).wait(1).to({graphics:mask_graphics_616,x:800.8,y:222}).wait(1).to({graphics:mask_graphics_617,x:801.3,y:222}).wait(1).to({graphics:mask_graphics_618,x:801.7,y:222}).wait(1).to({graphics:mask_graphics_619,x:802.1,y:222}).wait(1).to({graphics:mask_graphics_620,x:802.6,y:222}).wait(1).to({graphics:mask_graphics_621,x:803,y:222}).wait(1).to({graphics:mask_graphics_622,x:803.4,y:222}).wait(1).to({graphics:mask_graphics_623,x:803.9,y:222}).wait(1).to({graphics:mask_graphics_624,x:804.3,y:222}).wait(1).to({graphics:mask_graphics_625,x:804.7,y:222}).wait(1).to({graphics:mask_graphics_626,x:805.2,y:222}).wait(1).to({graphics:mask_graphics_627,x:805.6,y:222}).wait(1).to({graphics:mask_graphics_628,x:806,y:222}).wait(1).to({graphics:mask_graphics_629,x:806.5,y:222}).wait(1).to({graphics:mask_graphics_630,x:806.9,y:222}).wait(1).to({graphics:mask_graphics_631,x:807.3,y:222}).wait(1).to({graphics:mask_graphics_632,x:807.8,y:222}).wait(1).to({graphics:mask_graphics_633,x:808.2,y:222}).wait(1).to({graphics:mask_graphics_634,x:808.6,y:222}).wait(1).to({graphics:mask_graphics_635,x:809.1,y:222}).wait(1).to({graphics:mask_graphics_636,x:809.5,y:222}).wait(1).to({graphics:mask_graphics_637,x:809.9,y:222}).wait(1).to({graphics:mask_graphics_638,x:810.4,y:222}).wait(1).to({graphics:mask_graphics_639,x:810.8,y:222}).wait(1).to({graphics:mask_graphics_640,x:811.2,y:222}).wait(1).to({graphics:mask_graphics_641,x:811.7,y:222}).wait(1).to({graphics:mask_graphics_642,x:812.1,y:222}).wait(1).to({graphics:mask_graphics_643,x:812.6,y:222}).wait(1).to({graphics:mask_graphics_644,x:813,y:222}).wait(1).to({graphics:mask_graphics_645,x:813.4,y:222}).wait(1).to({graphics:mask_graphics_646,x:813.9,y:222}).wait(1).to({graphics:mask_graphics_647,x:814.3,y:222}).wait(1).to({graphics:mask_graphics_648,x:814.7,y:222}).wait(1).to({graphics:mask_graphics_649,x:815.2,y:222}).wait(1).to({graphics:mask_graphics_650,x:815.6,y:222}).wait(1).to({graphics:mask_graphics_651,x:816,y:222}).wait(1).to({graphics:mask_graphics_652,x:816.5,y:222}).wait(1).to({graphics:mask_graphics_653,x:816.9,y:222}).wait(1).to({graphics:mask_graphics_654,x:817.3,y:222}).wait(1).to({graphics:mask_graphics_655,x:817.8,y:222}).wait(1).to({graphics:mask_graphics_656,x:818.2,y:222}).wait(1).to({graphics:mask_graphics_657,x:818.6,y:222}).wait(1).to({graphics:mask_graphics_658,x:819.1,y:222}).wait(1).to({graphics:mask_graphics_659,x:819.5,y:222}).wait(1).to({graphics:mask_graphics_660,x:819.9,y:222}).wait(1).to({graphics:mask_graphics_661,x:820.4,y:222}).wait(1).to({graphics:mask_graphics_662,x:820.8,y:222}).wait(1).to({graphics:mask_graphics_663,x:821.2,y:222}).wait(1).to({graphics:mask_graphics_664,x:821.7,y:222}).wait(1).to({graphics:mask_graphics_665,x:822.1,y:222}).wait(1).to({graphics:mask_graphics_666,x:822.5,y:222}).wait(1).to({graphics:mask_graphics_667,x:823,y:222}).wait(1).to({graphics:mask_graphics_668,x:823.4,y:222}).wait(1).to({graphics:mask_graphics_669,x:823.8,y:222}).wait(1).to({graphics:mask_graphics_670,x:824.3,y:222}).wait(1).to({graphics:mask_graphics_671,x:824.7,y:222}).wait(1).to({graphics:mask_graphics_672,x:825.1,y:222}).wait(1).to({graphics:mask_graphics_673,x:825.6,y:222}).wait(1).to({graphics:mask_graphics_674,x:826,y:222}).wait(1).to({graphics:mask_graphics_675,x:826.4,y:222}).wait(1).to({graphics:mask_graphics_676,x:826.9,y:222}).wait(1).to({graphics:mask_graphics_677,x:827.3,y:222}).wait(1).to({graphics:mask_graphics_678,x:827.7,y:222}).wait(1).to({graphics:mask_graphics_679,x:828.2,y:222}).wait(1).to({graphics:mask_graphics_680,x:828.6,y:222}).wait(1).to({graphics:mask_graphics_681,x:829.1,y:222}).wait(1).to({graphics:mask_graphics_682,x:829.5,y:222}).wait(1).to({graphics:mask_graphics_683,x:829.9,y:222}).wait(1).to({graphics:mask_graphics_684,x:830.4,y:222}).wait(1).to({graphics:mask_graphics_685,x:830.8,y:222}).wait(1).to({graphics:mask_graphics_686,x:831.2,y:222}).wait(1).to({graphics:mask_graphics_687,x:831.7,y:222}).wait(1).to({graphics:mask_graphics_688,x:832.1,y:222}).wait(1).to({graphics:mask_graphics_689,x:832.5,y:222}).wait(1).to({graphics:mask_graphics_690,x:833,y:222}).wait(1).to({graphics:mask_graphics_691,x:833.4,y:222}).wait(1).to({graphics:mask_graphics_692,x:833.8,y:222}).wait(1).to({graphics:mask_graphics_693,x:834.3,y:222}).wait(1).to({graphics:mask_graphics_694,x:834.7,y:222}).wait(1).to({graphics:mask_graphics_695,x:835.1,y:222}).wait(1).to({graphics:mask_graphics_696,x:835.6,y:222}).wait(1).to({graphics:mask_graphics_697,x:836,y:222}).wait(1).to({graphics:mask_graphics_698,x:836.4,y:222}).wait(1).to({graphics:mask_graphics_699,x:836.9,y:222}).wait(1).to({graphics:mask_graphics_700,x:837.3,y:222}).wait(1).to({graphics:mask_graphics_701,x:837.7,y:222}).wait(1).to({graphics:mask_graphics_702,x:838.2,y:222}).wait(1).to({graphics:mask_graphics_703,x:838.6,y:222}).wait(1).to({graphics:mask_graphics_704,x:839,y:222}).wait(1).to({graphics:mask_graphics_705,x:839.5,y:222}).wait(1).to({graphics:mask_graphics_706,x:839.9,y:222}).wait(1).to({graphics:mask_graphics_707,x:840.3,y:222}).wait(1).to({graphics:mask_graphics_708,x:840.8,y:222}).wait(1).to({graphics:mask_graphics_709,x:841.2,y:222}).wait(1).to({graphics:mask_graphics_710,x:841.6,y:222}).wait(1).to({graphics:mask_graphics_711,x:842.1,y:222}).wait(1).to({graphics:mask_graphics_712,x:842.5,y:222}).wait(1).to({graphics:mask_graphics_713,x:842.9,y:222}).wait(1).to({graphics:mask_graphics_714,x:843.4,y:222}).wait(1).to({graphics:mask_graphics_715,x:843.8,y:222}).wait(1).to({graphics:mask_graphics_716,x:844.2,y:222}).wait(1).to({graphics:mask_graphics_717,x:844.7,y:222}).wait(1).to({graphics:mask_graphics_718,x:845.1,y:222}).wait(1).to({graphics:mask_graphics_719,x:845.6,y:222}).wait(1).to({graphics:mask_graphics_720,x:846,y:222}).wait(1).to({graphics:mask_graphics_721,x:846.4,y:222}).wait(1).to({graphics:mask_graphics_722,x:846.9,y:222}).wait(1).to({graphics:mask_graphics_723,x:847.3,y:222}).wait(1).to({graphics:mask_graphics_724,x:847.7,y:222}).wait(1).to({graphics:mask_graphics_725,x:848.2,y:222}).wait(1).to({graphics:mask_graphics_726,x:848.6,y:222}).wait(1).to({graphics:mask_graphics_727,x:849,y:222}).wait(1).to({graphics:mask_graphics_728,x:849.5,y:222}).wait(1).to({graphics:mask_graphics_729,x:849.9,y:222}).wait(1).to({graphics:mask_graphics_730,x:850.3,y:222}).wait(1).to({graphics:mask_graphics_731,x:850.8,y:222}).wait(1).to({graphics:mask_graphics_732,x:851.2,y:222}).wait(1).to({graphics:mask_graphics_733,x:851.6,y:222}).wait(1).to({graphics:mask_graphics_734,x:852.1,y:222}).wait(1).to({graphics:mask_graphics_735,x:852.5,y:222}).wait(1).to({graphics:mask_graphics_736,x:852.9,y:222}).wait(1).to({graphics:mask_graphics_737,x:853.4,y:222}).wait(1).to({graphics:mask_graphics_738,x:853.8,y:222}).wait(1).to({graphics:mask_graphics_739,x:854.2,y:222}).wait(1).to({graphics:mask_graphics_740,x:854.7,y:222}).wait(1).to({graphics:mask_graphics_741,x:855.1,y:222}).wait(1).to({graphics:mask_graphics_742,x:855.5,y:222}).wait(1).to({graphics:mask_graphics_743,x:856,y:222}).wait(1).to({graphics:mask_graphics_744,x:856.4,y:222}).wait(1).to({graphics:mask_graphics_745,x:856.8,y:222}).wait(1).to({graphics:mask_graphics_746,x:857.3,y:222}).wait(1).to({graphics:mask_graphics_747,x:857.7,y:222}).wait(1).to({graphics:mask_graphics_748,x:858.1,y:222}).wait(1).to({graphics:mask_graphics_749,x:858.6,y:222}).wait(1).to({graphics:mask_graphics_750,x:859,y:222}).wait(1).to({graphics:mask_graphics_751,x:859.4,y:222}).wait(1).to({graphics:mask_graphics_752,x:859.9,y:222}).wait(1).to({graphics:mask_graphics_753,x:860.3,y:222}).wait(1).to({graphics:mask_graphics_754,x:860.7,y:222}).wait(1).to({graphics:mask_graphics_755,x:861.2,y:222}).wait(1).to({graphics:mask_graphics_756,x:861.6,y:222}).wait(1).to({graphics:mask_graphics_757,x:862.1,y:222}).wait(1).to({graphics:mask_graphics_758,x:862.5,y:222}).wait(1).to({graphics:mask_graphics_759,x:862.9,y:222}).wait(1).to({graphics:mask_graphics_760,x:863.4,y:222}).wait(1).to({graphics:mask_graphics_761,x:863.8,y:222}).wait(1).to({graphics:mask_graphics_762,x:864.2,y:222}).wait(1).to({graphics:mask_graphics_763,x:864.7,y:222}).wait(1).to({graphics:mask_graphics_764,x:865.1,y:222}).wait(1).to({graphics:mask_graphics_765,x:865.5,y:222}).wait(1).to({graphics:mask_graphics_766,x:866,y:222}).wait(1).to({graphics:mask_graphics_767,x:866.4,y:222}).wait(1).to({graphics:mask_graphics_768,x:866.8,y:222}).wait(1).to({graphics:mask_graphics_769,x:867.3,y:222}).wait(1).to({graphics:mask_graphics_770,x:867.7,y:222}).wait(1).to({graphics:mask_graphics_771,x:868.1,y:222}).wait(1).to({graphics:mask_graphics_772,x:868.6,y:222}).wait(1).to({graphics:mask_graphics_773,x:869,y:222}).wait(1).to({graphics:mask_graphics_774,x:869.4,y:222}).wait(1).to({graphics:mask_graphics_775,x:869.9,y:222}).wait(1).to({graphics:mask_graphics_776,x:870.3,y:222}).wait(1).to({graphics:mask_graphics_777,x:870.7,y:222}).wait(1).to({graphics:mask_graphics_778,x:871.2,y:222}).wait(1).to({graphics:mask_graphics_779,x:871.6,y:222}).wait(1).to({graphics:mask_graphics_780,x:872,y:222}).wait(1).to({graphics:mask_graphics_781,x:872.5,y:222}).wait(1).to({graphics:mask_graphics_782,x:872.9,y:222}).wait(1).to({graphics:mask_graphics_783,x:873.3,y:222}).wait(1).to({graphics:mask_graphics_784,x:873.8,y:222}).wait(1).to({graphics:mask_graphics_785,x:874.2,y:222}).wait(1).to({graphics:mask_graphics_786,x:874.6,y:222}).wait(1).to({graphics:mask_graphics_787,x:875.1,y:222}).wait(1).to({graphics:mask_graphics_788,x:875.5,y:222}).wait(1).to({graphics:mask_graphics_789,x:875.9,y:222}).wait(1).to({graphics:mask_graphics_790,x:876.4,y:222}).wait(1).to({graphics:mask_graphics_791,x:876.8,y:222}).wait(1).to({graphics:mask_graphics_792,x:877.2,y:222}).wait(1).to({graphics:mask_graphics_793,x:877.7,y:222}).wait(1).to({graphics:mask_graphics_794,x:878.1,y:222}).wait(1).to({graphics:mask_graphics_795,x:878.6,y:222}).wait(1).to({graphics:mask_graphics_796,x:879,y:222}).wait(1).to({graphics:mask_graphics_797,x:879.4,y:222}).wait(1).to({graphics:mask_graphics_798,x:879.9,y:222}).wait(1).to({graphics:mask_graphics_799,x:880.3,y:222}).wait(1).to({graphics:mask_graphics_800,x:880.7,y:222}).wait(1).to({graphics:mask_graphics_801,x:881.2,y:222}).wait(1).to({graphics:mask_graphics_802,x:881.6,y:222}).wait(1).to({graphics:mask_graphics_803,x:882,y:222}).wait(1).to({graphics:mask_graphics_804,x:882.5,y:222}).wait(1).to({graphics:mask_graphics_805,x:882.9,y:222}).wait(1).to({graphics:mask_graphics_806,x:883.3,y:222}).wait(1).to({graphics:mask_graphics_807,x:883.8,y:222}).wait(1).to({graphics:mask_graphics_808,x:884.2,y:222}).wait(1).to({graphics:mask_graphics_809,x:884.6,y:222}).wait(1).to({graphics:mask_graphics_810,x:885.1,y:222}).wait(1).to({graphics:mask_graphics_811,x:885.5,y:222}).wait(1).to({graphics:mask_graphics_812,x:885.9,y:222}).wait(1).to({graphics:mask_graphics_813,x:886.4,y:222}).wait(1).to({graphics:mask_graphics_814,x:886.8,y:222}).wait(1).to({graphics:mask_graphics_815,x:887.2,y:222}).wait(1).to({graphics:mask_graphics_816,x:887.7,y:222}).wait(1).to({graphics:mask_graphics_817,x:888.1,y:222}).wait(1).to({graphics:mask_graphics_818,x:888.5,y:222}).wait(1).to({graphics:mask_graphics_819,x:889,y:222}).wait(1).to({graphics:mask_graphics_820,x:889.4,y:222}).wait(1).to({graphics:mask_graphics_821,x:889.8,y:222}).wait(1).to({graphics:mask_graphics_822,x:890.3,y:222}).wait(1).to({graphics:mask_graphics_823,x:890.7,y:222}).wait(1).to({graphics:mask_graphics_824,x:891.1,y:222}).wait(1).to({graphics:mask_graphics_825,x:891.6,y:222}).wait(1).to({graphics:mask_graphics_826,x:892,y:222}).wait(1).to({graphics:mask_graphics_827,x:892.4,y:222}).wait(1).to({graphics:mask_graphics_828,x:892.9,y:222}).wait(1).to({graphics:mask_graphics_829,x:893.3,y:222}).wait(1).to({graphics:mask_graphics_830,x:893.7,y:222}).wait(1).to({graphics:mask_graphics_831,x:894.2,y:222}).wait(1).to({graphics:mask_graphics_832,x:894.6,y:222}).wait(1).to({graphics:mask_graphics_833,x:895.1,y:222}).wait(1).to({graphics:mask_graphics_834,x:895.5,y:222}).wait(1).to({graphics:mask_graphics_835,x:895.9,y:222}).wait(1).to({graphics:mask_graphics_836,x:896.4,y:222}).wait(1).to({graphics:mask_graphics_837,x:896.8,y:222}).wait(1).to({graphics:mask_graphics_838,x:897.2,y:222}).wait(1).to({graphics:mask_graphics_839,x:897.7,y:222}).wait(1).to({graphics:mask_graphics_840,x:898.1,y:222}).wait(1).to({graphics:mask_graphics_841,x:898.5,y:222}).wait(1).to({graphics:mask_graphics_842,x:899,y:222}).wait(1).to({graphics:mask_graphics_843,x:899.4,y:222}).wait(1).to({graphics:mask_graphics_844,x:899.8,y:222}).wait(1).to({graphics:mask_graphics_845,x:900.3,y:222}).wait(1).to({graphics:mask_graphics_846,x:900.7,y:222}).wait(1).to({graphics:mask_graphics_847,x:901.1,y:222}).wait(1).to({graphics:mask_graphics_848,x:901.6,y:222}).wait(1).to({graphics:mask_graphics_849,x:902,y:222}).wait(1).to({graphics:mask_graphics_850,x:902.4,y:222}).wait(1).to({graphics:mask_graphics_851,x:902.9,y:222}).wait(1).to({graphics:mask_graphics_852,x:903.3,y:222}).wait(1).to({graphics:mask_graphics_853,x:903.7,y:222}).wait(1).to({graphics:mask_graphics_854,x:904.2,y:222}).wait(1).to({graphics:mask_graphics_855,x:904.6,y:222}).wait(1).to({graphics:mask_graphics_856,x:905,y:222}).wait(1).to({graphics:mask_graphics_857,x:905.5,y:222}).wait(1).to({graphics:mask_graphics_858,x:905.9,y:222}).wait(1).to({graphics:mask_graphics_859,x:906.3,y:222}).wait(1).to({graphics:mask_graphics_860,x:906.8,y:222}).wait(1).to({graphics:mask_graphics_861,x:907.2,y:222}).wait(1).to({graphics:mask_graphics_862,x:907.6,y:222}).wait(1).to({graphics:mask_graphics_863,x:908.1,y:222}).wait(1).to({graphics:mask_graphics_864,x:908.5,y:222}).wait(1).to({graphics:mask_graphics_865,x:908.9,y:222}).wait(1).to({graphics:mask_graphics_866,x:909.4,y:222}).wait(1).to({graphics:mask_graphics_867,x:909.8,y:222}).wait(1).to({graphics:mask_graphics_868,x:910.3,y:222}).wait(1).to({graphics:mask_graphics_869,x:910.7,y:222}).wait(1).to({graphics:mask_graphics_870,x:911.1,y:222}).wait(1).to({graphics:mask_graphics_871,x:911.6,y:222}).wait(1).to({graphics:mask_graphics_872,x:912,y:222}).wait(1).to({graphics:mask_graphics_873,x:912.4,y:222}).wait(1).to({graphics:mask_graphics_874,x:912.9,y:222}).wait(1).to({graphics:mask_graphics_875,x:913.3,y:222}).wait(1).to({graphics:mask_graphics_876,x:913.7,y:222}).wait(1).to({graphics:mask_graphics_877,x:914.2,y:222}).wait(1).to({graphics:mask_graphics_878,x:914.6,y:222}).wait(1).to({graphics:mask_graphics_879,x:915,y:222}).wait(1).to({graphics:mask_graphics_880,x:915.5,y:222}).wait(1).to({graphics:mask_graphics_881,x:915.9,y:222}).wait(1).to({graphics:mask_graphics_882,x:916.3,y:222}).wait(1).to({graphics:mask_graphics_883,x:916.8,y:222}).wait(1).to({graphics:mask_graphics_884,x:917.2,y:222}).wait(1).to({graphics:mask_graphics_885,x:917.6,y:222}).wait(1).to({graphics:mask_graphics_886,x:918.1,y:222}).wait(1).to({graphics:mask_graphics_887,x:918.5,y:222}).wait(1).to({graphics:mask_graphics_888,x:918.9,y:222}).wait(1).to({graphics:mask_graphics_889,x:919.4,y:222}).wait(1).to({graphics:mask_graphics_890,x:919.8,y:222}).wait(1).to({graphics:mask_graphics_891,x:920.2,y:222}).wait(1).to({graphics:mask_graphics_892,x:920.7,y:222}).wait(1).to({graphics:mask_graphics_893,x:921.1,y:222}).wait(1).to({graphics:mask_graphics_894,x:921.5,y:222}).wait(1).to({graphics:mask_graphics_895,x:922,y:222}).wait(1).to({graphics:mask_graphics_896,x:922.4,y:222}).wait(1).to({graphics:mask_graphics_897,x:922.8,y:222}).wait(1).to({graphics:mask_graphics_898,x:923.3,y:222}).wait(1).to({graphics:mask_graphics_899,x:923.7,y:222}).wait(1).to({graphics:mask_graphics_900,x:924.1,y:222}).wait(1).to({graphics:mask_graphics_901,x:924.6,y:222}).wait(1).to({graphics:mask_graphics_902,x:925,y:222}).wait(1).to({graphics:mask_graphics_903,x:925.4,y:222}).wait(1).to({graphics:mask_graphics_904,x:925.9,y:222}).wait(1).to({graphics:mask_graphics_905,x:926.3,y:222}).wait(1).to({graphics:mask_graphics_906,x:926.8,y:222}).wait(1).to({graphics:mask_graphics_907,x:927.2,y:222}).wait(1).to({graphics:mask_graphics_908,x:927.6,y:222}).wait(1).to({graphics:mask_graphics_909,x:928.1,y:222}).wait(1).to({graphics:mask_graphics_910,x:928.5,y:222}).wait(1).to({graphics:mask_graphics_911,x:928.9,y:222}).wait(1).to({graphics:mask_graphics_912,x:929.4,y:222}).wait(1).to({graphics:mask_graphics_913,x:929.8,y:222}).wait(1).to({graphics:mask_graphics_914,x:930.2,y:222}).wait(1).to({graphics:mask_graphics_915,x:930.7,y:222}).wait(1).to({graphics:mask_graphics_916,x:931.1,y:222}).wait(1).to({graphics:mask_graphics_917,x:931.5,y:222}).wait(1).to({graphics:mask_graphics_918,x:932,y:222}).wait(1).to({graphics:mask_graphics_919,x:932.4,y:222}).wait(1).to({graphics:mask_graphics_920,x:932.8,y:222}).wait(1).to({graphics:mask_graphics_921,x:933.3,y:222}).wait(1).to({graphics:mask_graphics_922,x:933.7,y:222}).wait(1).to({graphics:mask_graphics_923,x:934.1,y:222}).wait(1).to({graphics:mask_graphics_924,x:934.6,y:222}).wait(1).to({graphics:mask_graphics_925,x:935,y:222}).wait(1).to({graphics:mask_graphics_926,x:935.4,y:222}).wait(1).to({graphics:mask_graphics_927,x:935.9,y:222}).wait(1).to({graphics:mask_graphics_928,x:936.3,y:222}).wait(1).to({graphics:mask_graphics_929,x:936.7,y:222}).wait(1).to({graphics:mask_graphics_930,x:937.2,y:222}).wait(1).to({graphics:mask_graphics_931,x:937.6,y:222}).wait(1).to({graphics:mask_graphics_932,x:938,y:222}).wait(1).to({graphics:mask_graphics_933,x:938.5,y:222}).wait(1).to({graphics:mask_graphics_934,x:938.9,y:222}).wait(1).to({graphics:mask_graphics_935,x:939.3,y:222}).wait(1).to({graphics:mask_graphics_936,x:939.8,y:222}).wait(1).to({graphics:mask_graphics_937,x:940.2,y:222}).wait(1).to({graphics:mask_graphics_938,x:940.6,y:222}).wait(1).to({graphics:mask_graphics_939,x:941.1,y:222}).wait(1).to({graphics:mask_graphics_940,x:941.5,y:222}).wait(1).to({graphics:mask_graphics_941,x:941.9,y:222}).wait(1).to({graphics:mask_graphics_942,x:942.4,y:222}).wait(1).to({graphics:mask_graphics_943,x:942.8,y:222}).wait(1).to({graphics:mask_graphics_944,x:943.3,y:222}).wait(1).to({graphics:mask_graphics_945,x:943.7,y:222}).wait(1).to({graphics:mask_graphics_946,x:944.1,y:222}).wait(1).to({graphics:mask_graphics_947,x:944.6,y:222}).wait(1).to({graphics:mask_graphics_948,x:945,y:222}).wait(1).to({graphics:mask_graphics_949,x:945.4,y:222}).wait(1).to({graphics:mask_graphics_950,x:945.9,y:222}).wait(1).to({graphics:mask_graphics_951,x:946.3,y:222}).wait(1).to({graphics:mask_graphics_952,x:946.7,y:222}).wait(1).to({graphics:mask_graphics_953,x:947.2,y:222}).wait(1).to({graphics:mask_graphics_954,x:947.6,y:222}).wait(1).to({graphics:mask_graphics_955,x:948,y:222}).wait(1).to({graphics:mask_graphics_956,x:948.5,y:222}).wait(1).to({graphics:mask_graphics_957,x:948.9,y:222}).wait(1).to({graphics:mask_graphics_958,x:949.3,y:222}).wait(1).to({graphics:mask_graphics_959,x:949.8,y:222}).wait(1).to({graphics:mask_graphics_960,x:950.2,y:222}).wait(1).to({graphics:mask_graphics_961,x:950.6,y:222}).wait(1).to({graphics:mask_graphics_962,x:951.1,y:222}).wait(1).to({graphics:mask_graphics_963,x:951.5,y:222}).wait(1).to({graphics:mask_graphics_964,x:951.9,y:222}).wait(1).to({graphics:mask_graphics_965,x:952.4,y:222}).wait(1).to({graphics:mask_graphics_966,x:952.8,y:222}).wait(1).to({graphics:mask_graphics_967,x:953.2,y:222}).wait(1).to({graphics:mask_graphics_968,x:953.7,y:222}).wait(1).to({graphics:mask_graphics_969,x:954.1,y:222}).wait(1).to({graphics:mask_graphics_970,x:954.5,y:222}).wait(1).to({graphics:mask_graphics_971,x:955,y:222}).wait(1).to({graphics:mask_graphics_972,x:955.4,y:222}).wait(1).to({graphics:mask_graphics_973,x:955.8,y:222}).wait(1).to({graphics:mask_graphics_974,x:956.3,y:222}).wait(1).to({graphics:mask_graphics_975,x:956.7,y:222}).wait(1).to({graphics:mask_graphics_976,x:957.1,y:222}).wait(1).to({graphics:mask_graphics_977,x:957.6,y:222}).wait(1).to({graphics:mask_graphics_978,x:958,y:222}).wait(1).to({graphics:mask_graphics_979,x:958.4,y:222}).wait(1).to({graphics:mask_graphics_980,x:958.9,y:222}).wait(1).to({graphics:mask_graphics_981,x:959.3,y:222}).wait(1).to({graphics:mask_graphics_982,x:959.8,y:222}).wait(1).to({graphics:mask_graphics_983,x:960.2,y:222}).wait(1).to({graphics:mask_graphics_984,x:960.6,y:222}).wait(1).to({graphics:mask_graphics_985,x:961.1,y:222}).wait(1).to({graphics:mask_graphics_986,x:961.5,y:222}).wait(1).to({graphics:mask_graphics_987,x:961.9,y:222}).wait(1).to({graphics:mask_graphics_988,x:962.4,y:222}).wait(1).to({graphics:mask_graphics_989,x:962.8,y:222}).wait(1).to({graphics:mask_graphics_990,x:963.2,y:222}).wait(1).to({graphics:mask_graphics_991,x:963.7,y:222}).wait(1).to({graphics:mask_graphics_992,x:964.1,y:222}).wait(1).to({graphics:mask_graphics_993,x:964.5,y:222}).wait(1).to({graphics:mask_graphics_994,x:965,y:222}).wait(1).to({graphics:mask_graphics_995,x:965.4,y:222}).wait(1).to({graphics:mask_graphics_996,x:965.8,y:222}).wait(1).to({graphics:mask_graphics_997,x:966.3,y:222}).wait(1).to({graphics:mask_graphics_998,x:966.7,y:222}).wait(1).to({graphics:mask_graphics_999,x:967.1,y:222}).wait(1).to({graphics:mask_graphics_1000,x:967.6,y:222}).wait(1).to({graphics:mask_graphics_1001,x:968,y:222}).wait(1).to({graphics:mask_graphics_1002,x:968.4,y:222}).wait(1).to({graphics:mask_graphics_1003,x:968.9,y:222}).wait(1).to({graphics:mask_graphics_1004,x:969.3,y:222}).wait(1).to({graphics:mask_graphics_1005,x:969.7,y:222}).wait(1).to({graphics:mask_graphics_1006,x:970.2,y:222}).wait(1).to({graphics:mask_graphics_1007,x:970.6,y:222}).wait(1).to({graphics:mask_graphics_1008,x:971,y:222}).wait(1).to({graphics:mask_graphics_1009,x:971.5,y:222}).wait(1).to({graphics:mask_graphics_1010,x:971.9,y:222}).wait(1).to({graphics:mask_graphics_1011,x:972.3,y:222}).wait(1).to({graphics:mask_graphics_1012,x:972.8,y:222}).wait(1).to({graphics:mask_graphics_1013,x:973.2,y:222}).wait(1).to({graphics:mask_graphics_1014,x:973.6,y:222}).wait(1).to({graphics:mask_graphics_1015,x:974.1,y:222}).wait(1).to({graphics:mask_graphics_1016,x:974.5,y:222}).wait(1).to({graphics:mask_graphics_1017,x:974.9,y:222}).wait(1).to({graphics:mask_graphics_1018,x:975.4,y:222}).wait(1).to({graphics:mask_graphics_1019,x:975.8,y:222}).wait(1).to({graphics:mask_graphics_1020,x:976.3,y:222}).wait(1).to({graphics:mask_graphics_1021,x:976.7,y:222}).wait(1).to({graphics:mask_graphics_1022,x:977.1,y:222}).wait(1).to({graphics:mask_graphics_1023,x:977.6,y:222}).wait(1).to({graphics:mask_graphics_1024,x:978,y:222}).wait(1).to({graphics:mask_graphics_1025,x:978.4,y:222}).wait(1).to({graphics:mask_graphics_1026,x:978.9,y:222}).wait(1).to({graphics:mask_graphics_1027,x:979.3,y:222}).wait(1).to({graphics:mask_graphics_1028,x:979.7,y:222}).wait(1).to({graphics:mask_graphics_1029,x:980.2,y:222}).wait(1).to({graphics:mask_graphics_1030,x:980.6,y:222}).wait(1).to({graphics:mask_graphics_1031,x:981,y:222}).wait(1).to({graphics:mask_graphics_1032,x:981.5,y:222}).wait(1).to({graphics:mask_graphics_1033,x:981.9,y:222}).wait(1).to({graphics:mask_graphics_1034,x:982.3,y:222}).wait(1).to({graphics:mask_graphics_1035,x:982.8,y:222}).wait(1).to({graphics:mask_graphics_1036,x:983.2,y:222}).wait(1).to({graphics:mask_graphics_1037,x:983.6,y:222}).wait(1).to({graphics:mask_graphics_1038,x:984.1,y:222}).wait(1).to({graphics:mask_graphics_1039,x:984.5,y:222}).wait(1).to({graphics:mask_graphics_1040,x:984.9,y:222}).wait(1).to({graphics:mask_graphics_1041,x:985.4,y:222}).wait(1).to({graphics:mask_graphics_1042,x:985.8,y:222}).wait(1).to({graphics:mask_graphics_1043,x:986.2,y:222}).wait(1).to({graphics:mask_graphics_1044,x:986.7,y:222}).wait(1).to({graphics:mask_graphics_1045,x:987.1,y:222}).wait(1).to({graphics:mask_graphics_1046,x:987.5,y:222}).wait(1).to({graphics:mask_graphics_1047,x:988,y:222}).wait(1).to({graphics:mask_graphics_1048,x:988.4,y:222}).wait(1).to({graphics:mask_graphics_1049,x:988.8,y:222}).wait(1).to({graphics:mask_graphics_1050,x:989.3,y:222}).wait(1).to({graphics:mask_graphics_1051,x:989.7,y:222}).wait(1).to({graphics:mask_graphics_1052,x:990.1,y:222}).wait(1).to({graphics:mask_graphics_1053,x:990.6,y:222}).wait(1).to({graphics:mask_graphics_1054,x:991,y:222}).wait(1).to({graphics:mask_graphics_1055,x:991.4,y:222}).wait(1).to({graphics:mask_graphics_1056,x:991.9,y:222}).wait(1).to({graphics:mask_graphics_1057,x:992.3,y:222}).wait(1).to({graphics:mask_graphics_1058,x:992.8,y:222}).wait(1).to({graphics:mask_graphics_1059,x:993.2,y:222}).wait(1).to({graphics:mask_graphics_1060,x:993.6,y:222}).wait(1).to({graphics:mask_graphics_1061,x:994.1,y:222}).wait(1).to({graphics:mask_graphics_1062,x:994.5,y:222}).wait(1).to({graphics:mask_graphics_1063,x:994.9,y:222}).wait(1).to({graphics:mask_graphics_1064,x:995.4,y:222}).wait(1).to({graphics:mask_graphics_1065,x:995.8,y:222}).wait(1).to({graphics:mask_graphics_1066,x:996.2,y:222}).wait(1).to({graphics:mask_graphics_1067,x:996.7,y:222}).wait(1).to({graphics:mask_graphics_1068,x:997.1,y:222}).wait(1).to({graphics:mask_graphics_1069,x:997.5,y:222}).wait(1).to({graphics:mask_graphics_1070,x:998,y:222}).wait(1).to({graphics:mask_graphics_1071,x:998.4,y:222}).wait(1).to({graphics:mask_graphics_1072,x:998.8,y:222}).wait(1).to({graphics:mask_graphics_1073,x:999.3,y:222}).wait(1).to({graphics:mask_graphics_1074,x:999.7,y:222}).wait(1).to({graphics:mask_graphics_1075,x:1000.1,y:222}).wait(1).to({graphics:mask_graphics_1076,x:1000.6,y:222}).wait(1).to({graphics:mask_graphics_1077,x:1001,y:222}).wait(1).to({graphics:mask_graphics_1078,x:1001.4,y:222}).wait(1).to({graphics:mask_graphics_1079,x:1001.9,y:222}).wait(1).to({graphics:mask_graphics_1080,x:1002.3,y:222}).wait(1).to({graphics:mask_graphics_1081,x:1002.7,y:222}).wait(1).to({graphics:mask_graphics_1082,x:1003.2,y:222}).wait(1).to({graphics:mask_graphics_1083,x:1003.6,y:222}).wait(1).to({graphics:mask_graphics_1084,x:1004,y:222}).wait(1).to({graphics:mask_graphics_1085,x:1004.5,y:222}).wait(1).to({graphics:mask_graphics_1086,x:1004.9,y:222}).wait(1).to({graphics:mask_graphics_1087,x:1005.3,y:222}).wait(1).to({graphics:mask_graphics_1088,x:1005.8,y:222}).wait(1).to({graphics:mask_graphics_1089,x:1006.2,y:222}).wait(1).to({graphics:mask_graphics_1090,x:1006.6,y:222}).wait(1).to({graphics:mask_graphics_1091,x:1007.1,y:222}).wait(1).to({graphics:mask_graphics_1092,x:1007.5,y:222}).wait(1).to({graphics:mask_graphics_1093,x:1007.9,y:222}).wait(1).to({graphics:mask_graphics_1094,x:1008.4,y:222}).wait(1).to({graphics:mask_graphics_1095,x:1008.8,y:222}).wait(1).to({graphics:mask_graphics_1096,x:1009.3,y:222}).wait(1).to({graphics:mask_graphics_1097,x:1009.7,y:222}).wait(1).to({graphics:mask_graphics_1098,x:1010.1,y:222}).wait(1).to({graphics:mask_graphics_1099,x:1010.6,y:222}).wait(1).to({graphics:mask_graphics_1100,x:1011,y:222}).wait(1).to({graphics:mask_graphics_1101,x:1011.4,y:222}).wait(1).to({graphics:mask_graphics_1102,x:1011.9,y:222}).wait(1).to({graphics:mask_graphics_1103,x:1012.3,y:222}).wait(1).to({graphics:mask_graphics_1104,x:1012.7,y:222}).wait(1).to({graphics:mask_graphics_1105,x:1013.2,y:222}).wait(1).to({graphics:mask_graphics_1106,x:1013.6,y:222}).wait(1).to({graphics:mask_graphics_1107,x:1014,y:222}).wait(1).to({graphics:mask_graphics_1108,x:1014.5,y:222}).wait(1).to({graphics:mask_graphics_1109,x:1014.9,y:222}).wait(1).to({graphics:mask_graphics_1110,x:1015.3,y:222}).wait(1).to({graphics:mask_graphics_1111,x:1015.8,y:222}).wait(1).to({graphics:mask_graphics_1112,x:1016.2,y:222}).wait(1).to({graphics:mask_graphics_1113,x:1016.6,y:222}).wait(1).to({graphics:mask_graphics_1114,x:1017.1,y:222}).wait(1).to({graphics:mask_graphics_1115,x:1017.5,y:222}).wait(1).to({graphics:mask_graphics_1116,x:1017.9,y:222}).wait(1).to({graphics:mask_graphics_1117,x:1018.4,y:222}).wait(1).to({graphics:mask_graphics_1118,x:1018.8,y:222}).wait(1).to({graphics:mask_graphics_1119,x:1019.2,y:222}).wait(1).to({graphics:mask_graphics_1120,x:1019.7,y:222}).wait(1).to({graphics:mask_graphics_1121,x:1020.1,y:222}).wait(1).to({graphics:mask_graphics_1122,x:1020.5,y:222}).wait(1).to({graphics:mask_graphics_1123,x:1021,y:222}).wait(1).to({graphics:mask_graphics_1124,x:1021.4,y:222}).wait(1).to({graphics:mask_graphics_1125,x:1021.8,y:222}).wait(1).to({graphics:mask_graphics_1126,x:1022.3,y:222}).wait(1).to({graphics:mask_graphics_1127,x:1022.7,y:222}).wait(1).to({graphics:mask_graphics_1128,x:1023.1,y:222}).wait(1).to({graphics:mask_graphics_1129,x:1023.6,y:222}).wait(1).to({graphics:mask_graphics_1130,x:1024,y:222}).wait(1).to({graphics:mask_graphics_1131,x:1024.4,y:222}).wait(1).to({graphics:mask_graphics_1132,x:1024.9,y:222}).wait(1).to({graphics:mask_graphics_1133,x:1025.3,y:222}).wait(1).to({graphics:mask_graphics_1134,x:1025.8,y:222}).wait(1).to({graphics:mask_graphics_1135,x:1026.2,y:222}).wait(1).to({graphics:mask_graphics_1136,x:1026.6,y:222}).wait(1).to({graphics:mask_graphics_1137,x:1027.1,y:222}).wait(1).to({graphics:mask_graphics_1138,x:1027.5,y:222}).wait(1).to({graphics:mask_graphics_1139,x:1027.9,y:222}).wait(1).to({graphics:mask_graphics_1140,x:1028.4,y:222}).wait(1).to({graphics:mask_graphics_1141,x:1028.8,y:222}).wait(1).to({graphics:mask_graphics_1142,x:1029.2,y:222}).wait(1).to({graphics:mask_graphics_1143,x:1029.7,y:222}).wait(1).to({graphics:mask_graphics_1144,x:1030.1,y:222}).wait(1).to({graphics:mask_graphics_1145,x:1030.5,y:222}).wait(1).to({graphics:mask_graphics_1146,x:1031,y:222}).wait(1).to({graphics:mask_graphics_1147,x:1031.4,y:222}).wait(1).to({graphics:mask_graphics_1148,x:1031.8,y:222}).wait(1).to({graphics:mask_graphics_1149,x:1032.3,y:222}).wait(1).to({graphics:mask_graphics_1150,x:1032.7,y:222}).wait(1).to({graphics:mask_graphics_1151,x:1033.1,y:222}).wait(1).to({graphics:mask_graphics_1152,x:1033.6,y:222}).wait(1).to({graphics:mask_graphics_1153,x:1034,y:222}).wait(1).to({graphics:mask_graphics_1154,x:1034.4,y:222}).wait(1).to({graphics:mask_graphics_1155,x:1034.9,y:222}).wait(1).to({graphics:mask_graphics_1156,x:1035.3,y:222}).wait(1).to({graphics:mask_graphics_1157,x:1035.7,y:222}).wait(1).to({graphics:mask_graphics_1158,x:1036.2,y:222}).wait(1).to({graphics:mask_graphics_1159,x:1036.6,y:222}).wait(1).to({graphics:mask_graphics_1160,x:1037,y:222}).wait(1).to({graphics:mask_graphics_1161,x:1037.5,y:222}).wait(1).to({graphics:mask_graphics_1162,x:1037.9,y:222}).wait(1).to({graphics:mask_graphics_1163,x:1038.3,y:222}).wait(1).to({graphics:mask_graphics_1164,x:1038.8,y:222}).wait(1).to({graphics:mask_graphics_1165,x:1039.2,y:222}).wait(1).to({graphics:mask_graphics_1166,x:1039.6,y:222}).wait(1).to({graphics:mask_graphics_1167,x:1040.1,y:222}).wait(1).to({graphics:mask_graphics_1168,x:1040.5,y:222}).wait(1).to({graphics:mask_graphics_1169,x:1040.9,y:222}).wait(1).to({graphics:mask_graphics_1170,x:1041.4,y:222}).wait(1).to({graphics:mask_graphics_1171,x:1041.8,y:222}).wait(1).to({graphics:mask_graphics_1172,x:1042.3,y:222}).wait(1).to({graphics:mask_graphics_1173,x:1042.7,y:222}).wait(1).to({graphics:mask_graphics_1174,x:1043.1,y:222}).wait(1).to({graphics:mask_graphics_1175,x:1043.6,y:222}).wait(1).to({graphics:mask_graphics_1176,x:1044,y:222}).wait(1).to({graphics:mask_graphics_1177,x:1044.4,y:222}).wait(1).to({graphics:mask_graphics_1178,x:1044.9,y:222}).wait(1).to({graphics:mask_graphics_1179,x:1045.3,y:222}).wait(1).to({graphics:mask_graphics_1180,x:1045.7,y:222}).wait(1).to({graphics:mask_graphics_1181,x:1046.2,y:222}).wait(1).to({graphics:mask_graphics_1182,x:1046.6,y:222}).wait(1).to({graphics:mask_graphics_1183,x:1047,y:222}).wait(1).to({graphics:mask_graphics_1184,x:1047.5,y:222}).wait(1).to({graphics:mask_graphics_1185,x:1047.9,y:222}).wait(1).to({graphics:mask_graphics_1186,x:1048.3,y:222}).wait(1).to({graphics:mask_graphics_1187,x:1048.8,y:222}).wait(1).to({graphics:mask_graphics_1188,x:1049.2,y:222}).wait(1).to({graphics:mask_graphics_1189,x:1049.6,y:222}).wait(1).to({graphics:mask_graphics_1190,x:1050.1,y:222}).wait(1).to({graphics:mask_graphics_1191,x:1050.5,y:222}).wait(1).to({graphics:mask_graphics_1192,x:1050.9,y:222}).wait(1).to({graphics:mask_graphics_1193,x:1051.4,y:222}).wait(1).to({graphics:mask_graphics_1194,x:1051.8,y:222}).wait(1).to({graphics:mask_graphics_1195,x:1052.2,y:222}).wait(1).to({graphics:mask_graphics_1196,x:1052.7,y:222}).wait(1).to({graphics:mask_graphics_1197,x:1053.1,y:222}).wait(1).to({graphics:mask_graphics_1198,x:1053.5,y:222}).wait(1).to({graphics:mask_graphics_1199,x:1054,y:222}).wait(1));

	// cigarro1
	this.instance = new lib.Símbolo1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(613.5,329,1,1,0,0,0,556.5,84.5);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Símbolo2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(613.5,329,1,1,0,0,0,556.5,84.5);

	this.instance_2 = new lib.Interpolação5("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(613.5,329);
	this.instance_2._off = true;

	this.instance_3 = new lib.Interpolação4("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(887.6,329);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},59).to({state:[{t:this.instance_2}]},20).to({state:[{t:this.instance_2}]},40).to({state:[{t:this.instance_3}]},1080).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,alpha:1},59).wait(1141));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(79).to({_off:false},0).to({x:629.9},40).to({_off:true,x:887.6},1080).wait(1));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EhbZAisMAAAgj6MC2zAAAMAAAAj6g");
	var mask_1_graphics_1199 = new cjs.Graphics().p("EhbZAisMAAAgj6MC2zAAAMAAAAj6g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:585,y:222}).wait(1199).to({graphics:mask_1_graphics_1199,x:585,y:222}).wait(1));

	// cigarro2
	this.instance_4 = new lib.Símbolo3("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(613.5,329,1,1,0,0,0,556.5,84.5);
	this.instance_4.alpha = 0;

	this.instance_5 = new lib.Símbolo4("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(613.5,329,1,1,0,0,0,556.5,84.5);

	this.instance_6 = new lib.Interpolação1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(613.5,329);
	this.instance_6._off = true;

	this.instance_7 = new lib.Interpolação2("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(1505.7,329);

	var maskedShapeInstanceList = [this.instance_4,this.instance_5,this.instance_6,this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_4}]},29).to({state:[{t:this.instance_5}]},30).to({state:[{t:this.instance_6}]},240).to({state:[{t:this.instance_7}]},900).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(29).to({startPosition:0},0).to({_off:true,alpha:1},30).wait(1141));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(299).to({_off:false},0).to({_off:true,x:1505.7},900).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1170,658);


(lib.tela2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//----------ANIMAÇÃO DOS BOTÕES COM MOUSEOVER//
		
		stage.enableMouseOver();
		
		
		//BTN_CIGARRO1
		
		this.btn_cigarro1.addEventListener("mouseover", mouseover1.bind(this));
		function mouseover1(){
			createjs.Tween.get(this.cigarro1).to({y:280}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.btn_cigarro1).to({y:280}, 1000, createjs.Ease.quartInOut);}
		
		
		this.btn_cigarro1.addEventListener("mouseout", mouseout1.bind(this));
		function mouseout1(){
			createjs.Tween.get(this.cigarro1).to({y:410}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.btn_cigarro1).to({y:410}, 1000, createjs.Ease.quartInOut);}
			
		
		this.btn_cigarro1.addEventListener("mouseleave", mouseleave1.bind(this));
		function mouseleave1(){
			createjs.Tween.get(this.cigarro1).to({y:410}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.btn_cigarro1).to({y:410}, 1000, createjs.Ease.quartInOut);}
			
			
		this.btn_cigarro1.addEventListener("click", popup1.bind(this));
		function popup1(){
			createjs.Tween.get(this.popup1).to({y:190}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup2).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup3).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup4).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup5).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup6).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup7).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup8).to({y:700}, 1000, createjs.Ease.quartInOut);}
			
			
			
		
			
			
		//BTN_CIGARRO2
		
		this.btn_cigarro2.addEventListener("mouseover", mouseover2.bind(this));
		function mouseover2(){
			createjs.Tween.get(this.cigarro2).to({y:280}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.btn_cigarro2).to({y:280}, 1000, createjs.Ease.quartInOut);}
		
		
		this.btn_cigarro2.addEventListener("mouseout", mouseout2.bind(this));
		function mouseout2(){
			createjs.Tween.get(this.cigarro2).wait(1000).to({y:410}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.btn_cigarro2).wait(1000).to({y:410}, 1000, createjs.Ease.quartInOut);}
			
		
		this.btn_cigarro2.addEventListener("click", popup2.bind(this));
		function popup2(){
			createjs.Tween.get(this.popup1).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup2).to({y:190}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup3).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup4).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup5).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup6).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup7).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup8).to({y:700}, 1000, createjs.Ease.quartInOut);}
			
			
			
			
			
		//BTN_CIGARRO3
		
		this.btn_cigarro3.addEventListener("mouseover", mouseover3.bind(this));
		function mouseover3(){
			createjs.Tween.get(this.cigarro3).to({y:280}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.btn_cigarro3).to({y:280}, 1000, createjs.Ease.quartInOut);}
		
		
		this.btn_cigarro3.addEventListener("mouseout", mouseout3.bind(this));
		function mouseout3(){
			createjs.Tween.get(this.cigarro3).to({y:410}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.btn_cigarro3).to({y:410}, 1000, createjs.Ease.quartInOut);}
			
			
		this.btn_cigarro3.addEventListener("click", popup3.bind(this));
		function popup3(){
			createjs.Tween.get(this.popup1).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup2).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup3).to({y:190}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup4).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup5).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup6).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup7).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup8).to({y:700}, 1000, createjs.Ease.quartInOut);}
			
			
			
		//BTN_CIGARRO4
		
		this.btn_cigarro4.addEventListener("mouseover", mouseover4.bind(this));
		function mouseover4(){
			createjs.Tween.get(this.cigarro4).to({y:280}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.btn_cigarro4).to({y:280}, 1000, createjs.Ease.quartInOut);}
		
		
		this.btn_cigarro4.addEventListener("mouseout", mouseout4.bind(this));
		function mouseout4(){
			createjs.Tween.get(this.cigarro4).to({y:410}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.btn_cigarro4).to({y:410}, 1000, createjs.Ease.quartInOut);}
			
		
		this.btn_cigarro4.addEventListener("click", popup4.bind(this));
		function popup4(){
			createjs.Tween.get(this.popup1).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup2).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup3).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup4).to({y:190}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup5).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup6).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup7).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup8).to({y:700}, 1000, createjs.Ease.quartInOut);}
			
			
			
			
		//BTN_CIGARRO5
		
		this.btn_cigarro5.addEventListener("mouseover", mouseover5.bind(this));
		function mouseover5(){
			createjs.Tween.get(this.cigarro5).to({y:280}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.btn_cigarro5).to({y:280}, 1000, createjs.Ease.quartInOut);}
		
		
		this.btn_cigarro5.addEventListener("mouseout", mouseout5.bind(this));
		function mouseout5(){
			createjs.Tween.get(this.cigarro5).to({y:410}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.btn_cigarro5).to({y:410}, 1000, createjs.Ease.quartInOut);}
			
			
		this.btn_cigarro5.addEventListener("click", popup5.bind(this));
		function popup5(){
			createjs.Tween.get(this.popup1).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup2).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup3).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup4).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup5).to({y:190}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup6).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup7).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup8).to({y:700}, 1000, createjs.Ease.quartInOut);}
			
			
			
			
		//BTN_CIGARRO6
		
		this.btn_cigarro6.addEventListener("mouseover", mouseover6.bind(this));
		function mouseover6(){
			createjs.Tween.get(this.cigarro6).to({y:280}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.btn_cigarro6).to({y:280}, 1000, createjs.Ease.quartInOut);}
		
		
		this.btn_cigarro6.addEventListener("mouseout", mouseout6.bind(this));
		function mouseout6(){
			createjs.Tween.get(this.cigarro6).to({y:410}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.btn_cigarro6).to({y:410}, 1000, createjs.Ease.quartInOut);}
			
			
		this.btn_cigarro6.addEventListener("click", popup6.bind(this));
		function popup6(){
			createjs.Tween.get(this.popup1).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup2).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup3).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup4).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup5).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup6).to({y:190}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup7).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup8).to({y:700}, 1000, createjs.Ease.quartInOut);}
			
			
			
			
		//BTN_CIGARRO7
		
		this.btn_cigarro7.addEventListener("mouseover", mouseover7.bind(this));
		function mouseover7(){
			createjs.Tween.get(this.cigarro7).to({y:280}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.btn_cigarro7).to({y:280}, 1000, createjs.Ease.quartInOut);}
		
		
		this.btn_cigarro7.addEventListener("mouseout", mouseout7.bind(this));
		function mouseout7(){
			createjs.Tween.get(this.cigarro7).to({y:410}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.btn_cigarro7).to({y:410}, 1000, createjs.Ease.quartInOut);}
			
			
		this.btn_cigarro7.addEventListener("click", popup7.bind(this));
		function popup7(){
			createjs.Tween.get(this.popup1).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup2).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup3).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup4).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup5).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup6).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup7).to({y:190}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup8).to({y:700}, 1000, createjs.Ease.quartInOut);}
			
			
			
		
		//BTN_CIGARRO8
		
		this.btn_cigarro8.addEventListener("mouseover", mouseover8.bind(this));
		function mouseover8(){
			createjs.Tween.get(this.cigarro8).to({y:280}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.btn_cigarro8).to({y:280}, 1000, createjs.Ease.quartInOut);}
		
		
		this.btn_cigarro8.addEventListener("mouseout", mouseout8.bind(this));
		function mouseout8(){
			createjs.Tween.get(this.cigarro8).to({y:410}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.btn_cigarro8).to({y:410}, 1000, createjs.Ease.quartInOut);}
			
			
		this.btn_cigarro8.addEventListener("click", popup8.bind(this));
		function popup8(){
			createjs.Tween.get(this.popup1).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup2).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup3).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup4).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup5).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup6).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup7).to({y:700}, 1000, createjs.Ease.quartInOut);
			createjs.Tween.get(this.popup8).to({y:190}, 1000, createjs.Ease.quartInOut);}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// popup1
	this.popup1 = new lib.popup1_1();
	this.popup1.name = "popup1";
	this.popup1.parent = this;
	this.popup1.setTransform(530.7,658.4);

	this.timeline.addTween(cjs.Tween.get(this.popup1).wait(1));

	// popup2
	this.popup2 = new lib.popup2_1();
	this.popup2.name = "popup2";
	this.popup2.parent = this;
	this.popup2.setTransform(530.7,658.4);

	this.timeline.addTween(cjs.Tween.get(this.popup2).wait(1));

	// popup3
	this.popup3 = new lib.popup3();
	this.popup3.name = "popup3";
	this.popup3.parent = this;
	this.popup3.setTransform(530.7,658.4);

	this.timeline.addTween(cjs.Tween.get(this.popup3).wait(1));

	// popup4
	this.popup4 = new lib.popup4();
	this.popup4.name = "popup4";
	this.popup4.parent = this;
	this.popup4.setTransform(530.7,658.4);

	this.timeline.addTween(cjs.Tween.get(this.popup4).wait(1));

	// popup5
	this.popup5 = new lib.popup5();
	this.popup5.name = "popup5";
	this.popup5.parent = this;
	this.popup5.setTransform(530.7,658.4);

	this.timeline.addTween(cjs.Tween.get(this.popup5).wait(1));

	// popup6
	this.popup6 = new lib.popup6();
	this.popup6.name = "popup6";
	this.popup6.parent = this;
	this.popup6.setTransform(530.7,658.4);

	this.timeline.addTween(cjs.Tween.get(this.popup6).wait(1));

	// popup7
	this.popup7 = new lib.popup7();
	this.popup7.name = "popup7";
	this.popup7.parent = this;
	this.popup7.setTransform(530.7,658.4);

	this.timeline.addTween(cjs.Tween.get(this.popup7).wait(1));

	// popup8
	this.popup8 = new lib.popup8();
	this.popup8.name = "popup8";
	this.popup8.parent = this;
	this.popup8.setTransform(530.7,658.4);

	this.timeline.addTween(cjs.Tween.get(this.popup8).wait(1));

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.902)").s().p("AgnAyQgRgSAAgdIAAgDQAAgTAHgPQAIgPANgJQAOgIAQAAQAaAAAOARQAPARAAAeIAAALIhTAAQAAAQAKAKQAJAJANAAQAVAAAMgQIAQAPQgIALgNAHQgNAGgQAAQgaAAgSgRgAgRgjQgHAJgCAPIA2AAIAAgCQgBgPgGgHQgIgIgLAAQgLAAgIAIg");
	this.shape.setTransform(672.9,31.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.902)").s().p("AgqBLQgOgTAAgfQAAgdAOgSQAOgSAXAAQAUAAANAOIAAhCIAdAAIAAC3IgbAAIgBgOQgNAQgVAAQgXAAgOgSgAgTgFQgIAKAAAWQAAAUAIALQAIALANAAQARAAAJgQIAAg2QgIgPgSAAQgNAAgIALg");
	this.shape_1.setTransform(658.9,29.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.902)").s().p("AgqBRQgLgNAAgXIAAhTIAdAAIAABTQABAYAUAAQAUAAAIgPIAAhcIAcAAIAACBIgbAAIgBgNQgNAPgWAAQgVAAgLgMgAgNg4IAWgkIAhAAIghAkg");
	this.shape_2.setTransform(645.5,29.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.902)").s().p("AgqA4QgMgLAAgRQAAgUAOgKQAQgLAbAAIASAAIAAgJQAAgKgFgGQgFgGgLAAQgKAAgGAFQgHAFAAAIIgdAAQAAgLAHgJQAHgKANgFQAMgFAOAAQAWAAAOALQANAMAAAUIAAA6QABARAFALIAAACIgeAAQgCgEgCgIQgNAOgUAAQgTAAgMgLgAgRAKQgJAFABAKQgBAJAGAFQAFAFAKAAQAHAAAIgEQAIgFADgHIAAgYIgPAAQgQAAgHAGg");
	this.shape_3.setTransform(632,31.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.902)").s().p("AgaA9QgNgFgGgKQgIgKABgMIAcAAQAAAKAIAGQAGAFAMAAQALAAAGgEQAGgEAAgHQAAgIgGgEQgGgEgPgEQgPgDgJgEQgWgKAAgUQAAgRAOgLQAOgLAVAAQAXAAAOALQAPAMAAASIgeAAQAAgIgFgGQgHgFgKAAQgIAAgHAEQgGAEAAAIQAAAHAGADQAFAEARAEQARAEAKAFQAJAEAFAHQAFAIAAAKQAAARgPALQgPALgXAAQgPAAgMgGg");
	this.shape_4.setTransform(619,31.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.902)").s().p("AgrBSQgMgLABgRQgBgUAQgLQAPgLAbAAIASAAIAAgJQABgJgGgGQgFgGgLAAQgKAAgHAFQgGAFAAAIIgdAAQAAgLAHgJQAHgKAMgFQANgFANAAQAXAAAOALQAOAMAAATIAAA7QAAARAEALIAAACIgdAAQgCgEgBgIQgPAOgSAAQgUAAgNgLgAgSAkQgIAFAAAKQABAJAFAFQAGAFAJAAQAHAAAIgEQAHgFAEgHIAAgYIgPAAQgPAAgJAGgAgHg4IgggkIAhAAIAXAkg");
	this.shape_5.setTransform(599.9,29.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.902)").s().p("AgaA9QgNgFgGgKQgIgKABgMIAcAAQAAAKAIAGQAGAFAMAAQALAAAGgEQAGgEAAgHQAAgIgGgEQgGgEgPgEQgPgDgJgEQgWgKAAgUQAAgRAOgLQAOgLAVAAQAXAAAOALQAPAMAAASIgeAAQAAgIgFgGQgHgFgKAAQgIAAgHAEQgGAEAAAIQAAAHAGADQAFAEARAEQARAEAKAFQAJAEAFAHQAFAIAAAKQAAARgPALQgPALgXAAQgPAAgMgGg");
	this.shape_6.setTransform(580.7,31.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.902)").s().p("AgrAxQgQgSAAgfIAAAAQAAgTAHgQQAIgPANgIQAOgIARAAQAaAAAQARQARARABAbIAAAGQAAATgHAQQgIAPgNAIQgOAIgSAAQgaAAgRgSgAgWggQgIAMAAAVQAAAUAIAMQAIALAOAAQAPAAAIgMQAIgLAAgVQAAgUgIgLQgJgMgOAAQgNAAgJALg");
	this.shape_7.setTransform(567.5,31.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.902)").s().p("AgLBBIguiBIAfAAIAaBcIAchcIAeAAIgtCBg");
	this.shape_8.setTransform(554.4,31.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.902)").s().p("AgqA4QgMgLgBgRQABgUAPgKQAPgLAcAAIASAAIAAgJQgBgKgFgGQgGgGgKAAQgKAAgHAFQgGAFAAAIIgdAAQAAgLAHgJQAHgKAMgFQAMgFAOAAQAXAAAOALQANAMAAAUIAAA6QAAARAGALIAAACIgeAAQgCgEgBgIQgOAOgUAAQgTAAgMgLgAgSAKQgHAFgBAKQAAAJAGAFQAGAFAJAAQAHAAAIgEQAHgFAFgHIAAgYIgQAAQgQAAgIAGg");
	this.shape_9.setTransform(541.7,31.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.902)").s().p("AghBCIAAiAIAcAAIABAOQAJgRATAAQAGAAAEACIAAAbIgMgBQgUAAgGAPIAABYg");
	this.shape_10.setTransform(531.4,31.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.902)").s().p("AgcBWQgOgHgHgJIAOgRQANAQAUAAQANgBAIgHQAJgIAAgQIAAgIQgMAOgVAAQgWAAgPgSQgOgSAAggQAAgeAOgRQAOgSAXAAQAWAAAMAPIACgNIAaAAIAAB8QAAAagPAPQgRAOgZAAQgPAAgNgFgAgTg3QgIALAAAWQAAAUAIAKQAIALANAAQARAAAJgPIAAg4QgJgOgRAAQgNAAgIALg");
	this.shape_11.setTransform(519.3,34.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.902)").s().p("AAwBXIgOgoIhCAAIgPAoIgfAAIBCitIAaAAIBBCtgAgYAWIAxAAIgZhHg");
	this.shape_12.setTransform(504.4,29.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(194,155,1,0.486)").s().p("AgnAyQgRgSAAgdIAAgDQAAgTAHgPQAIgPANgJQAOgIAQAAQAaAAAOARQAPARAAAeIAAALIhTAAQABAQAJAKQAJAJANAAQAVAAANgQIAPAPQgIALgNAHQgNAGgQAAQgaAAgSgRgAgRgjQgHAJgCAPIA2AAIAAgCQgBgPgGgHQgIgIgLAAQgLAAgIAIg");
	this.shape_13.setTransform(673.8,33.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(194,155,1,0.486)").s().p("AgqBLQgOgTAAgfQAAgdAOgSQAOgSAXAAQAUAAANAOIAAhCIAdAAIAAC3IgbAAIgBgOQgNAQgVAAQgXAAgOgSgAgTgFQgIAKAAAWQAAAUAIALQAIALANAAQARAAAJgQIAAg2QgIgPgSAAQgNAAgIALg");
	this.shape_14.setTransform(659.8,31);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(194,155,1,0.486)").s().p("AgqBRQgLgNAAgXIAAhTIAdAAIAABTQABAYAUAAQAUAAAIgPIAAhcIAcAAIAACBIgbAAIgBgNQgNAPgWAAQgVAAgLgMgAgNg4IAWgkIAhAAIghAkg");
	this.shape_15.setTransform(646.4,31);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(194,155,1,0.486)").s().p("AgqA4QgMgLAAgRQAAgUAOgKQAQgLAbAAIASAAIAAgJQAAgKgFgGQgFgGgLAAQgKAAgGAFQgHAFAAAIIgdAAQAAgLAHgJQAHgKANgFQAMgFAOAAQAWAAAOALQANAMAAAUIAAA6QAAARAGALIAAACIgeAAQgCgEgCgIQgNAOgUAAQgTAAgMgLgAgRAKQgJAFABAKQgBAJAGAFQAFAFAKAAQAHAAAIgEQAIgFADgHIAAgYIgPAAQgQAAgHAGg");
	this.shape_16.setTransform(632.9,33.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(194,155,1,0.486)").s().p("AgaA9QgNgFgGgKQgIgKABgMIAcAAQAAAKAIAGQAGAFAMAAQALAAAGgEQAGgEAAgHQAAgIgGgEQgGgEgPgEQgPgDgJgEQgWgKAAgUQAAgRAOgLQAOgLAVAAQAXAAAPALQAOAMAAASIgeAAQAAgIgFgGQgHgFgKAAQgIAAgHAEQgGAEAAAIQAAAHAGADQAFAEARAEQARAEAKAFQAJAEAFAHQAFAIAAAKQAAARgPALQgPALgXAAQgPAAgMgGg");
	this.shape_17.setTransform(619.9,33.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(194,155,1,0.486)").s().p("AgrBSQgMgLABgRQgBgUAQgLQAPgLAbAAIASAAIAAgJQABgJgGgGQgFgGgLAAQgKAAgHAFQgGAFAAAIIgdAAQAAgLAHgJQAHgKAMgFQANgFANAAQAXAAAOALQAOAMAAATIAAA7QAAARAEALIAAACIgdAAQgCgEgBgIQgPAOgSAAQgUAAgNgLgAgRAkQgJAFAAAKQABAJAFAFQAGAFAJAAQAHAAAIgEQAHgFAEgHIAAgYIgPAAQgPAAgIAGgAgHg4IgggkIAhAAIAXAkg");
	this.shape_18.setTransform(600.8,31);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(194,155,1,0.486)").s().p("AgaA9QgNgFgGgKQgIgKABgMIAcAAQAAAKAIAGQAGAFAMAAQALAAAGgEQAGgEAAgHQAAgIgGgEQgGgEgPgEQgPgDgJgEQgWgKAAgUQAAgRAOgLQAOgLAVAAQAXAAAPALQAOAMAAASIgeAAQAAgIgFgGQgHgFgKAAQgIAAgHAEQgGAEAAAIQAAAHAGADQAFAEARAEQARAEAKAFQAJAEAFAHQAFAIAAAKQAAARgPALQgPALgXAAQgPAAgMgGg");
	this.shape_19.setTransform(581.6,33.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(194,155,1,0.486)").s().p("AgrAxQgQgSAAgfIAAAAQAAgTAHgQQAIgPANgIQAOgIARAAQAaAAAQARQARARABAbIAAAGQAAATgHAQQgIAPgNAIQgOAIgSAAQgaAAgRgSgAgWggQgIAMAAAVQAAAUAIAMQAIALAOAAQAPAAAIgMQAIgLAAgVQAAgUgIgLQgJgMgOAAQgNAAgJALg");
	this.shape_20.setTransform(568.4,33.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(194,155,1,0.486)").s().p("AgLBBIguiBIAfAAIAaBcIAchcIAeAAIgtCBg");
	this.shape_21.setTransform(555.3,33.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(194,155,1,0.486)").s().p("AgqA4QgMgLgBgRQABgUAPgKQAPgLAcAAIASAAIAAgJQgBgKgFgGQgGgGgKAAQgKAAgHAFQgGAFAAAIIgdAAQAAgLAHgJQAHgKAMgFQAMgFAOAAQAXAAAOALQANAMAAAUIAAA6QAAARAGALIAAACIgeAAQgCgEgBgIQgOAOgUAAQgTAAgMgLgAgSAKQgHAFgBAKQAAAJAGAFQAFAFAKAAQAHAAAIgEQAHgFAFgHIAAgYIgQAAQgQAAgIAGg");
	this.shape_22.setTransform(542.6,33.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(194,155,1,0.486)").s().p("AghBCIAAiAIAcAAIABAOQAJgRASAAQAHAAAEACIAAAbIgMgBQgUAAgGAPIAABYg");
	this.shape_23.setTransform(532.3,33.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(194,155,1,0.486)").s().p("AgcBWQgOgHgHgJIAOgRQANAQAUAAQANgBAIgHQAJgIAAgQIAAgIQgMAOgVAAQgWAAgPgSQgOgSAAggQAAgeAOgRQAOgSAXAAQAWAAAMAPIACgNIAaAAIAAB8QAAAagPAPQgRAOgZAAQgPAAgNgFgAgTg3QgIALAAAWQAAAUAIAKQAIALANAAQARAAAJgPIAAg4QgJgOgRAAQgNAAgIALg");
	this.shape_24.setTransform(520.2,36.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(194,155,1,0.486)").s().p("AAwBXIgOgoIhCAAIgPAoIgfAAIBCitIAaAAIBBCtgAgYAWIAxAAIgZhHg");
	this.shape_25.setTransform(505.3,31.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(255,255,255,0.008)").ss(1,1,1).p("A02jRMAptAAAIAAGjMgptAAAg");
	this.shape_26.setTransform(590.4,29.3,0.779,1.404,0,20.3,0);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EABB01").s().p("A02DSIAAmjMAptAAAIAAGjg");
	this.shape_27.setTransform(590.4,29.3,0.779,1.404,0,20.3,0);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#9A7B01").ss(1,1,1).p("A02jRMAptAAAIAAGjMgptAAAg");
	this.shape_28.setTransform(582.3,32,0.794,1.501,0,20.2,0);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(154,123,1,0.008)").s().p("A02DSIAAmjMAptAAAIAAGjg");
	this.shape_29.setTransform(582.3,32,0.794,1.501,0,20.2,0);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,204,0,0.902)").s().p("AhECOQgfgTgQgiQgRgjAAgtIAAgPQAAguAQgjQARgjAfgTQAegTAmAAQAnAAAeATQAfATARAjQAQAjAAAuIAAANQAAAugQAjQgRAjgeATQgeATgoAAQgmAAgegTgAgxhRQgSAZAAAxIAAAOQAAAwASAaQARAbAgAAQAhAAARgaQASgZAAgxIAAgOQAAgxgSgaQgRgZghAAQggAAgRAZg");
	this.shape_30.setTransform(678.7,138.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,204,0,0.902)").s().p("Ah3CcIAAk3IB5AAQAjAAAbAMQAbANAOAYQAPAYAAAeQAAAuggAaQgfAag4AAIg3AAIAABugAg2gFIA4AAQAaAAANgMQAOgMAAgXQAAgWgOgPQgNgOgYAAIg6AAg");
	this.shape_31.setTransform(649.9,138.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,204,0,0.902)").s().p("AA1CcIg6hyIgzAAIAAByIhBAAIAAk3IB0AAQA3AAAeAYQAeAZAAAtQAAAggOAWQgOAUgcAMIBECAIAAADgAg4gJIA0AAQAXAAANgNQANgMAAgWQAAgWgMgNQgNgMgZAAIgzAAg");
	this.shape_32.setTransform(622.1,138.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,204,0,0.902)").s().p("AhECOQgfgTgQgiQgRgjAAgtIAAgPQAAguAQgjQARgjAfgTQAegTAmAAQAnAAAeATQAfATARAjQAQAjAAAuIAAANQAAAugQAjQgRAjgeATQgeATgoAAQgmAAgegTgAgxhRQgSAZAAAxIAAAOQAAAwASAaQARAbAgAAQAhAAARgaQASgZAAgxIAAgOQAAgxgSgaQgRgZghAAQggAAgRAZg");
	this.shape_33.setTransform(591.9,138.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,204,0,0.902)").s().p("AhcB4QgjgoAAhHIAAgSQAAgtAQgjQAQgiAegSQAdgTAmAAQA2AAAhAdQAhAdAGA1IhBAAQgCgfgPgNQgOgOgeAAQgfAAgQAXQgQAXAAAxIAAAWQAAAzAPAYQAPAXAgAAQAeAAAPgOQAPgNACgdIBAAAQgDAzgiAdQgiAdg3AAQg7AAgigpg");
	this.shape_34.setTransform(562.6,138.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,204,0,0.902)").s().p("AhXB5QgignAAhCIAAggQAAgqAPghQAPghAcgSQAcgSAjAAQAkAAAcASQAbARAPAgQAPAgABApIAAAlQAAArgPAhQgPAggcASQgbASglAAQg1AAgigogAhEhoQgaAgAAA5IAAAgQAAA3AZAhQAaAhArAAQAtAAAZggQAZghAAg5IAAggQAAg5gZggQgagggsAAQgrAAgZAhg");
	this.shape_35.setTransform(522.1,138.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(255,204,0,0.902)").s().p("ABaCcIizkKIAAEKIgaAAIAAk3IAaAAICzEKIAAkKIAbAAIAAE3g");
	this.shape_36.setTransform(491.6,138.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0.902)").s().p("AhECOQgfgTgQgiQgRgjAAgtIAAgPQAAguAQgjQARgjAfgTQAegTAmAAQAnAAAeATQAfATARAjQAQAjAAAuIAAANQAAAugQAjQgRAjgeATQgeATgoAAQgmAAgegTgAgxhRQgSAZAAAxIAAAOQAAAwASAaQARAbAgAAQAhAAARgaQASgZAAgxIAAgOQAAgxgSgaQgRgZghAAQggAAgRAZg");
	this.shape_37.setTransform(775.9,96.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(255,255,255,0.902)").s().p("AA1CcIg6hyIgzAAIAAByIhBAAIAAk3IB0AAQA3AAAeAYQAeAZAAAtQAAAggOAWQgOAUgcAMIBECAIAAADgAg4gJIA0AAQAXAAANgNQANgMAAgWQAAgWgMgNQgNgMgZAAIgzAAg");
	this.shape_38.setTransform(747.6,96.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,255,255,0.902)").s().p("AA1CcIg6hyIgzAAIAAByIhBAAIAAk3IB0AAQA3AAAeAYQAeAZAAAtQAAAggOAWQgOAUgcAMIBECAIAAADgAg4gJIA0AAQAXAAANgNQANgMAAgWQAAgWgMgNQgNgMgZAAIgzAAg");
	this.shape_39.setTransform(719.5,96.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(255,255,255,0.902)").s().p("ABOCcIgWhAIhvAAIgWBAIhEAAIB0k3IA6AAIB1E3gAgmAoIBNAAIgnh0g");
	this.shape_40.setTransform(689.8,96.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(255,255,255,0.902)").s().p("Ag+CPQgfgSgQgiQgRghgBguIAAgUQAAgvAQgiQAQgiAegTQAegSAmAAQA4AAAfAbQAgAaAGAzIg/AAQgEgbgPgMQgPgNgaAAQgfAAgSAZQgRAZAAAwIAAATQAAAyATAZQASAZAjAAQAlAAAPgQIAAg2Ig6AAIAAguIB7AAIAAB8QgSAVggALQgfAMgnAAQgoAAgegSg");
	this.shape_41.setTransform(659.8,96.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(255,255,255,0.902)").s().p("AgfCcIAAk3IA/AAIAAE3g");
	this.shape_42.setTransform(638.6,96.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(255,255,255,0.902)").s().p("AhcB4QgjgoAAhHIAAgSQAAgtAQgjQAQgiAegSQAdgTAmAAQA2AAAhAdQAhAdAGA1IhBAAQgCgfgPgNQgOgOgeAAQgfAAgQAXQgQAXAAAxIAAAWQAAAzAPAYQAPAXAgAAQAeAAAPgOQAPgNACgdIBAAAQgDAzgiAdQgiAdg3AAQg7AAgigpg");
	this.shape_43.setTransform(618,96.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(255,255,255,0.902)").s().p("AhXB5QgignAAhCIAAggQAAgqAPghQAPghAcgSQAcgSAjAAQAkAAAcASQAbARAPAgQAPAgABApIAAAlQAAArgPAhQgPAggcASQgbASglAAQg1AAgigogAhEhoQgaAgAAA5IAAAgQAAA3AZAhQAaAhArAAQAtAAAZggQAZghAAg5IAAggQAAg5gZggQgagggsAAQgrAAgZAhg");
	this.shape_44.setTransform(577.5,96.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(255,255,255,0.902)").s().p("AhuCcIAAk3IBYAAQAmAAAeARQAeASASAgQARAhAAAqIAAAbQAAAqgRAhQgSAggeASQgfARgnAAgAhTCGIA7AAQAxAAAdghQAfghAAg3IAAgbQgBg2gdggQgeghguAAIg+AAg");
	this.shape_45.setTransform(548.9,96.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(255,255,255,0.902)").s().p("AhECOQgfgTgQgiQgRgjAAgtIAAgPQAAguAQgjQARgjAfgTQAegTAmAAQAnAAAeATQAfATARAjQAQAjAAAuIAAANQAAAugQAjQgRAjgeATQgeATgoAAQgmAAgegTgAgxhRQgSAZAAAxIAAAOQAAAwASAaQARAbAgAAQAhAAARgaQASgZAAgxIAAgOQAAgxgSgaQgRgZghAAQggAAgRAZg");
	this.shape_46.setTransform(507.7,96.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(255,255,255,0.902)").s().p("AggCcIAAkDIhfAAIAAg0ID+AAIAAA0IhfAAIAAEDg");
	this.shape_47.setTransform(479,96.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(255,255,255,0.902)").s().p("AgfCcIAAk3IA/AAIAAE3g");
	this.shape_48.setTransform(458.9,96.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(255,255,255,0.902)").s().p("AhoCcIAAk3IDQAAIAAA0IiPAAIAABKIB6AAIAAAyIh6AAIAABTICQAAIAAA0g");
	this.shape_49.setTransform(441.1,96.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(255,255,255,0.902)").s().p("AhlCcIAAk3IDLAAIAAA0IiKAAIAABQIB6AAIAAAzIh6AAIAACAg");
	this.shape_50.setTransform(416.7,96.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(255,255,255,0.902)").s().p("AhoCcIAAk3IDQAAIAAA0IiPAAIAABKIB6AAIAAAyIh6AAIAABTICQAAIAAA0g");
	this.shape_51.setTransform(392.2,96.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#CCCCCC").ss(1,1,1).p("AlqAAILVAA");
	this.shape_52.setTransform(437,615.6,0.662,1,-90);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#CCCCCC").ss(1,1,1).p("AlqAAILVAA");
	this.shape_53.setTransform(424.2,615.6,0.662,1,-90);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#CCCCCC").ss(1,1,1).p("AlqAAILVAA");
	this.shape_54.setTransform(411.4,615.6,0.662,1,-90);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#CCCCCC").ss(1,1,1).p("AlqAAILVAA");
	this.shape_55.setTransform(398.6,615.6,0.662,1,-90);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#CCCCCC").ss(1,1,1).p("AlqAAILVAA");
	this.shape_56.setTransform(385.8,615.6,0.662,1,-90);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#CCCCCC").ss(1,1,1).p("AlqAAILVAA");
	this.shape_57.setTransform(75.7,615.6,0.662,1,-90);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#CCCCCC").ss(1,1,1).p("AlqAAILVAA");
	this.shape_58.setTransform(62.9,615.6,0.662,1,-90);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#CCCCCC").ss(1,1,1).p("AlqAAILVAA");
	this.shape_59.setTransform(50.1,615.6,0.662,1,-90);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#CCCCCC").ss(1,1,1).p("AlqAAILVAA");
	this.shape_60.setTransform(37.3,615.6,0.662,1,-90);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#CCCCCC").ss(1,1,1).p("AlqAAILVAA");
	this.shape_61.setTransform(24.6,615.6,0.662,1,-90);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(51,51,51,0.902)").s().p("AgHAIQgEgDABgFQgBgEAEgDQADgDAEAAQAFAAADADQAEADgBAEQABAFgEADQgDADgFAAQgEAAgDgDg");
	this.shape_62.setTransform(356,627.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(51,51,51,0.902)").s().p("AgZAdQgKgLABgRIAAgBQAAgLAEgIQAEgJAJgFQAIgFAJAAQAPAAAKAKQAJAJACAPIAAAFQAAARgKALQgJAKgRAAQgPAAgKgKgAgKgQQgFAGAAALQAAALAFAFQAEAGAGAAQAIAAADgGQAEgFABgMQgBgKgEgGQgDgGgIAAQgGAAgEAGg");
	this.shape_63.setTransform(350,624.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(51,51,51,0.902)").s().p("AAMAmIAAgvQAAgGgDgDQgCgDgHAAQgHAAgEAHIAAA0IgUAAIAAhKIASAAIABAJQAIgKAMAAQAMAAAGAHQAGAHAAAOIAAAvg");
	this.shape_64.setTransform(342,624.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(51,51,51,0.902)").s().p("AgZAgQgHgGgBgJQAAgMAJgGQAKgGAPAAIAJAAIAAgFQAAgFgCgDQgDgDgFAAQgFAAgCACQgDADAAAEIgVAAQAAgGAFgGQADgGAHgCQAIgEAIAAQAOAAAIAHQAIAHAAAMIAAAgQAAALAEAGIAAAAIgVAAIgCgGQgHAIgLAAQgLAAgHgHgAgMAOIgBABQAAADAEADQACACAEAAQAEAAADgCQAFgCABgCIAAgOIgHAAQgOAAgBALg");
	this.shape_65.setTransform(334.2,624.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(51,51,51,0.902)").s().p("AAiAmIAAgvQAAgGgDgDQgCgDgHAAQgJAAgDAJIAAAyIgTAAIAAguQAAgHgDgDQgCgDgGAAQgJAAgEAHIAAA0IgUAAIAAhKIATAAIABAJQAIgKANAAQAOAAAFALQAIgLAPAAQAMAAAGAHQAGAHAAAOIAAAvg");
	this.shape_66.setTransform(324.3,624.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(51,51,51,0.902)").s().p("AgZAfQgGgHgBgNIAAgwIAVAAIAAAvQAAAMALAAQAJAAADgHIAAg0IAVAAIAABKIgTAAIgBgIQgIAJgMAAQgMAAgGgHg");
	this.shape_67.setTransform(314.2,625);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(51,51,51,0.902)").s().p("AAMA1IAAgvQAAgGgCgDQgDgDgGAAQgIAAgFAGIAAA1IgUAAIAAhpIAUAAIAAAoQAJgKALAAQAYAAAAAbIAAAwg");
	this.shape_68.setTransform(306.2,623.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(51,51,51,0.902)").s().p("AgZAdQgKgLAAgRIAAgBQABgLAEgIQAEgJAJgFQAHgFAKAAQAPAAAKAKQAJAJACAPIAAAFQAAARgKALQgJAKgRAAQgPAAgKgKgAgKgQQgFAGAAALQAAALAFAFQAEAGAGAAQAIAAADgGQAFgFAAgMQAAgKgFgGQgDgGgIAAQgGAAgEAGg");
	this.shape_69.setTransform(294.7,624.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(51,51,51,0.902)").s().p("AghA1IAAhnIATAAIABAHQAHgJALAAQANAAAIALQAIAKAAASIAAABQAAAQgIALQgIAKgNAAQgLAAgHgIIAAAkgAgNgcIAAAeQAEAHAJAAQAOAAAAgWQAAgLgEgGQgEgFgGAAQgJAAgEAHg");
	this.shape_70.setTransform(286.9,626.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(51,51,51,0.902)").s().p("AgUAmIAAhKIATAAIAAAJQAFgKALAAIAGABIAAATIgHAAQgMAAgCAHIAAAwg");
	this.shape_71.setTransform(280.4,624.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(51,51,51,0.902)").s().p("AgZAdQgKgLAAgRIAAgBQABgLAEgIQAEgJAJgFQAHgFAKAAQAPAAAKAKQAJAJACAPIAAAFQAAARgKALQgJAKgRAAQgPAAgKgKgAgKgQQgFAGAAALQAAALAFAFQAEAGAGAAQAIAAADgGQAFgFAAgMQAAgKgFgGQgDgGgIAAQgGAAgEAGg");
	this.shape_72.setTransform(273.6,624.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(51,51,51,0.902)").s().p("AgWAdQgKgLAAgRIAAgBQAAgRAKgKQAJgLAPAAQAOAAAIAIQAJAIAAAOIgTAAQAAgHgDgDQgEgEgGAAQgGAAgDAGQgEAEAAAMIAAABQAAALAEAGQADAFAHAAQAFAAAEgEQADgDAAgFIATAAQAAAIgEAHQgEAGgHAEQgHADgJAAQgPAAgJgKg");
	this.shape_73.setTransform(265.9,624.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(51,51,51,0.902)").s().p("AgYAdQgLgLAAgRIAAgBQAAgLAFgIQAEgJAIgFQAJgFAJAAQAPAAAJAKQALAJAAAPIAAAFQAAARgJALQgKAKgQAAQgPAAgJgKgAgLgQQgDAGAAALQAAALADAFQAEAGAHAAQAHAAAFgGQADgFAAgMQAAgKgDgGQgFgGgHAAQgHAAgEAGg");
	this.shape_74.setTransform(254.6,624.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(51,51,51,0.902)").s().p("AAMAmIAAgvQAAgGgDgDQgCgDgHAAQgHAAgEAHIAAA0IgUAAIAAhKIASAAIABAJQAIgKAMAAQAMAAAGAHQAGAHAAAOIAAAvg");
	this.shape_75.setTransform(246.6,624.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(51,51,51,0.902)").s().p("AgZAdQgJgLgBgRIAAgBQABgLAEgIQAEgJAIgFQAJgFAJAAQAPAAAKAKQAKAJAAAPIAAAFQAAARgJALQgJAKgRAAQgPAAgKgKgAgKgQQgEAGgBALQABALAEAFQADAGAHAAQAHAAAEgGQAFgFAAgMQAAgKgFgGQgEgGgHAAQgHAAgDAGg");
	this.shape_76.setTransform(235.1,624.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(51,51,51,0.902)").s().p("AgWAdQgKgLAAgRIAAgBQAAgRAKgKQAJgLAPAAQAOAAAIAIQAJAIAAAOIgTAAQAAgHgDgDQgEgEgGAAQgGAAgDAGQgEAEAAAMIAAABQAAALAEAGQADAFAHAAQAFAAAEgEQADgDAAgFIATAAQAAAIgEAHQgEAGgHAEQgHADgJAAQgPAAgJgKg");
	this.shape_77.setTransform(227.4,624.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(51,51,51,0.902)").s().p("AgZAgQgIgGABgJQAAgMAJgGQAIgGAQAAIAJAAIAAgFQAAgFgDgDQgCgDgFAAQgFAAgDACQgDADAAAEIgTAAQAAgGADgGQAFgGAGgCQAIgEAIAAQAOAAAIAHQAJAHAAAMIAAAgQAAALACAGIAAAAIgUAAIgCgGQgHAIgLAAQgLAAgHgHgAgMAOIAAABQAAADACADQADACAFAAQADAAAEgCQAEgCABgCIAAgOIgHAAQgOAAgBALg");
	this.shape_78.setTransform(219.9,624.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(51,51,51,0.902)").s().p("AgOAsIgBAIIgSAAIAAhpIAUAAIAAAmQAHgIALAAQANAAAIALQAIAJAAASIAAABQAAARgIALQgHAKgOAAQgLAAgIgKgAgNAAIAAAeQAEAIAJAAQAJAAADgKQACgFAAgIQAAgMgEgEQgDgGgHAAQgJABgEAGg");
	this.shape_79.setTransform(212.2,623.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(51,51,51,0.902)").s().p("AgZAgQgHgGAAgJQgBgMAKgGQAIgGAQAAIAJAAIAAgFQAAgFgDgDQgCgDgFAAQgFAAgCACQgEADAAAEIgUAAQABgGADgGQAFgGAHgCQAHgEAIAAQAOAAAIAHQAJAHAAAMIAAAgQAAALACAGIAAAAIgUAAIgCgGQgHAIgLAAQgLAAgHgHgAgMAOIgBABQAAADADADQADACAEAAQAEAAADgCQAEgCACgCIAAgOIgHAAQgOAAgBALg");
	this.shape_80.setTransform(204.3,624.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(51,51,51,0.902)").s().p("AgKAaIAAgnIgLAAIAAgPIALAAIAAgTIATAAIAAATIANAAIAAAPIgNAAIAAAkQAAAFABABQACACAFAAIAFAAIAAAOQgFADgHAAQgUgBAAgVg");
	this.shape_81.setTransform(198,624.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(51,51,51,0.902)").s().p("AgZAdQgKgLAAgRIAAgBQABgLAEgIQAEgJAJgFQAIgFAJAAQAPAAAKAKQAKAJAAAPIAAAFQAAARgJALQgJAKgRAAQgPAAgKgKgAgKgQQgFAGAAALQAAALAFAFQADAGAHAAQAHAAAEgGQAFgFAAgMQAAgKgFgGQgEgGgHAAQgHAAgDAGg");
	this.shape_82.setTransform(188.2,624.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(51,51,51,0.902)").s().p("AgZAsQgIgLAAgSQAAgRAIgKQAIgLAOAAQAKAAAHAIIAAgmIAUAAIAABpIgSAAIgBgIQgIAKgKAAQgOAAgIgKgAgNAQQAAALAEAFQAEAGAGAAQAJAAAEgIIAAgeQgEgGgJgBQgOABAAAWg");
	this.shape_83.setTransform(180,623.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(51,51,51,0.902)").s().p("AgPAkQgIgEgEgFQgEgHAAgHIATAAQAAAGAEADQAEADAFAAQAGgBADgCQACgCAAgDQAAgEgDgCQgEgCgHgBQgbgHAAgQQAAgKAJgGQAIgHAMAAQAPAAAIAHQAJAGAAALIgUAAQAAgEgDgDQgDgDgGAAQgEABgDACQgCACAAAEQAAADADACQADACAGABIANAEQAQAEAAAPQAAAKgJAGQgJAHgOAAQgIAAgHgDg");
	this.shape_84.setTransform(168.9,624.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(51,51,51,0.902)").s().p("AgYAdQgLgLABgRIAAgBQgBgLAFgIQAEgJAJgFQAHgFAKAAQAPAAAJAKQALAJABAPIAAAFQAAARgKALQgKAKgQAAQgPAAgJgKgAgLgQQgEAGAAALQAAALAEAFQAFAGAGAAQAIAAADgGQAEgFAAgMQAAgKgEgGQgDgGgIAAQgGAAgFAGg");
	this.shape_85.setTransform(161.3,624.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(51,51,51,0.902)").s().p("AgJA0IAAhKIATAAIAABKgAgHgiQgDgCAAgFQAAgFADgCQADgDAEAAQAFAAADADQADACAAAFQAAAFgDACQgDADgFAAQgEAAgDgDg");
	this.shape_86.setTransform(155.4,623.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(51,51,51,0.902)").s().p("AgWAdQgKgLAAgRIAAgBQAAgRAKgKQAJgLAPAAQAOAAAIAIQAJAIAAAOIgTAAQAAgHgDgDQgEgEgGAAQgGAAgDAGQgEAEAAAMIAAABQAAALAEAGQADAFAHAAQAFAAAEgEQADgDAAgFIATAAQAAAIgEAHQgEAGgHAEQgHADgJAAQgPAAgJgKg");
	this.shape_87.setTransform(149.8,624.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(51,51,51,0.902)").s().p("AgRA1IAAhKIATAAIAABKgAgQgeIANgWIAVAAIgSAWg");
	this.shape_88.setTransform(145,623.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(51,51,51,0.902)").s().p("AgNA2IAAg7IgLAAIAAgPIALAAIAAgHQAAgMAIgHQAGgHANAAIALACIgBAPIgGgBQgMAAABALIAAAGIAOAAIAAAPIgOAAIAAA7g");
	this.shape_89.setTransform(139.8,623.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(51,51,51,0.902)").s().p("AgXAdQgKgKAAgRIAAgCQAAgLAEgIQAFgJAIgFQAIgFAJAAQAPAAAJAKQAJAJAAATIAAAHIgvAAQABAHAFAFQAFAEAGAAQAMAAAGgJIAKAMQgEAGgIAEQgIADgJAAQgQAAgKgKgAgIgRQgEADgBAIIAbAAIAAgBQAAgIgDgDQgEgEgGAAQgFAAgEAFg");
	this.shape_90.setTransform(133.4,624.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(51,51,51,0.902)").s().p("AgJA1IAAhpIATAAIAABpg");
	this.shape_91.setTransform(127.6,623.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(51,51,51,0.902)").s().p("AgZAgQgHgGAAgJQgBgMAKgGQAIgGAQAAIAJAAIAAgFQAAgFgDgDQgCgDgFAAQgFAAgCACQgEADAAAEIgUAAQAAgGAEgGQAFgGAHgCQAHgEAIAAQAOAAAIAHQAJAHAAAMIAAAgQAAALACAGIAAAAIgUAAIgCgGQgHAIgLAAQgLAAgHgHgAgMAOIgBABQAAADADADQADACAEAAQAEAAAEgCQADgCACgCIAAgOIgHAAQgOAAgBALg");
	this.shape_92.setTransform(122,624.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(51,51,51,0.902)").s().p("AAiAmIAAgvQAAgGgDgDQgCgDgHAAQgJAAgDAJIAAAyIgTAAIAAguQAAgHgDgDQgCgDgGAAQgJAAgEAHIAAA0IgUAAIAAhKIATAAIABAJQAIgKANAAQAOAAAFALQAIgLAPAAQAMAAAGAHQAGAHAAAOIAAAvg");
	this.shape_93.setTransform(112,624.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(51,51,51,0.902)").s().p("AgOAkQgHgDgEgGQgEgGAAgGIANAAQAAAGAFAEQAFADAHAAQAHAAAFgCQAEgDAAgFQAAgGgEgDQgEgCgJgDQgJgCgGgCQgGgDgCgEQgDgDAAgGQAAgJAIgHQAHgGAMAAQAMAAAIAHQAIAGAAAKIgNAAQAAgEgEgFQgFgDgGAAQgGgBgEAEQgEADAAAEQAAAFADADQAEACAJACQAJADAGACQAGACADAFQADADAAAHQAAAKgIAGQgIAGgNAAQgIAAgHgDg");
	this.shape_94.setTransform(327.7,607.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(51,51,51,0.902)").s().p("AgXAcQgKgLAAgQIAAgBQAAgLAEgIQAFgJAHgFQAIgFAJAAQAPAAAJALQAKAKAAARIAAABQAAALgEAIQgEAJgIAFQgIAFgKAAQgOAAgJgLgAgOgTQgHAHAAANQAAAMAHAIQAFAHAJAAQAKAAAFgHQAGgIAAgNQAAgMgGgHQgFgJgKABQgJgBgFAJg");
	this.shape_95.setTransform(320.1,607.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(51,51,51,0.902)").s().p("AgXAhQgHgGAAgKQAAgMAJgFQAJgHAPAAIANAAIAAgGQAAgGgFgFQgEgDgHAAQgHgBgEAEQgEAEgBAEIgMAAQAAgFADgFQAEgGAHgDQAHgDAHAAQAOAAAGAGQAIAHAAALIAAAiQAAAKADAGIAAABIgNAAIgCgIQgKAKgLAAQgLAAgHgGgAgRAPQAAAGAEAEQAEACAGAAQAFAAAGgCQAFgEADgEIAAgQIgKAAQgXAAAAAOg");
	this.shape_96.setTransform(308.7,607.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(51,51,51,0.902)").s().p("AgRAmIAAhKIAMAAIABAJQAFgKALAAIAGABIAAAMIgGgBQgMAAgEALIAAA0g");
	this.shape_97.setTransform(302.8,607.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(51,51,51,0.902)").s().p("AgGAzIAAhKIAMAAIAABKgAgFglQgBgDgBgDQABgDABgCQACgCADAAQADAAADACQACACAAADQAAADgCADQgDACgDAAQgDAAgCgCg");
	this.shape_98.setTransform(298.3,606.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(51,51,51,0.902)").s().p("AgKA2IAAhAIgMAAIAAgKIAMAAIAAgIQAAgLAHgHQAFgHAMAAIAJACIgBAKIgHgBQgGAAgEAEQgDADAAAHIAAAIIAQAAIAAAKIgQAAIAABAg");
	this.shape_99.setTransform(294.3,606.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(51,51,51,0.902)").s().p("AARAmIAAgwQAAgIgEgEQgEgEgHAAQgGAAgEADQgFADgDAGIAAA0IgMAAIAAhKIAMAAIAAAKQAJgLANAAQAYAAgBAbIAAAwg");
	this.shape_100.setTransform(287.7,607.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(51,51,51,0.902)").s().p("AgXAcQgKgLAAgQIAAgBQAAgLAEgIQAEgJAIgFQAIgFAJAAQAPAAAJALQAKAKAAARIAAABQAAALgEAIQgFAJgHAFQgIAFgKAAQgPAAgIgLgAgOgTQgHAHAAANQAAAMAHAIQAFAHAJAAQAKAAAFgHQAGgIAAgNQAAgMgGgHQgFgJgKABQgJgBgFAJg");
	this.shape_101.setTransform(279.8,607.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(51,51,51,0.902)").s().p("AgWAcQgIgKgBgRIAAgBQAAgLAFgJQADgJAIgEQAHgFAJAAQAOAAAHAIQAJAIAAAMIgMAAQAAgIgFgFQgFgEgIAAQgIAAgGAHQgFAHAAANIAAABQAAAOAFAGQAGAIAIgBQAIAAAEgDQAGgFAAgGIAMAAQAAAGgEAGQgEAGgHAEQgGADgJAAQgNAAgKgLg");
	this.shape_102.setTransform(272.1,607.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(51,51,51,0.902)").s().p("AgVAdQgKgKAAgRIAAgCQAAgKAEgJQAFgJAHgFQAIgFAIAAQAPAAAIAKQAIAJAAATIAAADIgyAAQAAAMAHAGQAGAIAIgBQAHAAAFgCQAEgDAEgEIAIAGQgKAOgSAAQgPAAgJgKgAgLgWQgFAGgCAKIAlAAIAAgBQgBgKgEgFQgFgGgIABQgHAAgFAFg");
	this.shape_103.setTransform(261.1,607.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(51,51,51,0.902)").s().p("AgOAkQgHgDgEgGQgEgGAAgGIANAAQAAAGAFAEQAFADAHAAQAHAAAFgCQAEgDAAgFQAAgGgEgDQgEgCgJgDQgJgCgGgCQgGgDgCgEQgDgDAAgGQAAgJAIgHQAHgGAMAAQAMAAAIAHQAIAGAAAKIgNAAQAAgEgEgFQgFgDgGAAQgGgBgEAEQgEADAAAEQAAAFADADQAEACAJACQAJADAGACQAGACADAFQADADAAAHQAAAKgIAGQgIAGgNAAQgIAAgHgDg");
	this.shape_104.setTransform(250.1,607.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(51,51,51,0.902)").s().p("AgYAcQgJgLAAgQIAAgBQAAgLAEgIQAEgJAIgFQAIgFAJAAQAPAAAKALQAJAKAAARIAAABQAAALgEAIQgFAJgHAFQgIAFgKAAQgOAAgKgLgAgPgTQgFAHgBANQABAMAFAIQAGAHAJAAQAJAAAHgHQAFgIAAgNQAAgMgFgHQgHgJgJABQgIgBgHAJg");
	this.shape_105.setTransform(242.4,607.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(51,51,51,0.902)").s().p("AgRAmIAAhKIAMAAIABAJQAFgKALAAIAGABIAAAMIgGgBQgMAAgEALIAAA0g");
	this.shape_106.setTransform(236.3,607.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(51,51,51,0.902)").s().p("AgRAmIAAhKIAMAAIABAJQAFgKALAAIAGABIAAAMIgGgBQgMAAgEALIAAA0g");
	this.shape_107.setTransform(231.5,607.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(51,51,51,0.902)").s().p("AgXAhQgHgGAAgKQAAgMAJgFQAJgHAPAAIAMAAIAAgGQAAgGgDgFQgFgDgHAAQgGgBgFAEQgFAEABAEIgOAAQAAgFAFgFQADgGAIgDQAGgDAHAAQANAAAIAGQAHAHAAALIAAAiQAAAKADAGIAAABIgOAAIgCgIQgJAKgKAAQgMAAgHgGgAgRAPQAAAGAEAEQAEACAGAAQAFAAAFgCQAGgEACgEIAAgQIgKAAQgWAAAAAOg");
	this.shape_108.setTransform(224.9,607.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(51,51,51,0.902)").s().p("AgPAyQgIgEgEgGIAHgIQAIALAMgBQAIAAAGgEQAFgGAAgKIAAgGQgIAJgMAAQgNAAgIgLQgJgLAAgQQAAgSAIgKQAJgLANAAQANAAAHAKIABgIIAMAAIAABIQAAAOgJAIQgJAJgOAAQgHAAgIgDgAgMghQgGAGAAAPQAAAMAFAHQAGAHAIAAQAMAAAGgLIAAghQgGgLgMAAQgIAAgFAIg");
	this.shape_109.setTransform(216.9,609.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(51,51,51,0.902)").s().p("AgFAzIAAhKIALAAIAABKgAgFglQgBgDAAgDQAAgDABgCQACgCADAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgDAAgCgCg");
	this.shape_110.setTransform(211.4,606.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(51,51,51,0.902)").s().p("AgWAcQgIgKgBgRIAAgBQABgLAEgJQADgJAIgEQAHgFAJAAQAOAAAHAIQAJAIAAAMIgMAAQAAgIgFgFQgFgEgIAAQgIAAgGAHQgFAHAAANIAAABQAAAOAFAGQAGAIAIgBQAIAAAEgDQAGgFAAgGIAMAAQAAAGgEAGQgEAGgHAEQgGADgJAAQgNAAgKgLg");
	this.shape_111.setTransform(206.1,607.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(51,51,51,0.902)").s().p("AgOAkQgHgDgEgGQgEgGAAgGIANAAQAAAGAFAEQAFADAHAAQAHAAAFgCQAEgDAAgFQAAgGgEgDQgEgCgJgDQgJgCgGgCQgGgDgCgEQgDgDAAgGQAAgJAIgHQAHgGAMAAQAMAAAIAHQAIAGAAAKIgNAAQAAgEgEgFQgFgDgGAAQgGgBgEAEQgEADAAAEQAAAFADADQAEACAJACQAJADAGACQAGACADAFQADADAAAHQAAAKgIAGQgIAGgNAAQgIAAgHgDg");
	this.shape_112.setTransform(195,607.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(51,51,51,0.902)").s().p("AgYAcQgJgLAAgQIAAgBQAAgLAEgIQAFgJAHgFQAIgFAJAAQAPAAAKALQAJAKAAARIAAABQAAALgEAIQgFAJgHAFQgIAFgKAAQgOAAgKgLgAgPgTQgFAHAAANQAAAMAFAIQAGAHAJAAQAJAAAHgHQAFgIAAgNQAAgMgFgHQgHgJgJABQgIgBgHAJg");
	this.shape_113.setTransform(187.4,607.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("rgba(51,51,51,0.902)").s().p("AARAmIAAgwQgBgIgDgEQgDgEgIAAQgFAAgFADQgFADgCAGIAAA0IgNAAIAAhKIAMAAIAAAKQAJgLAMAAQAYAAAAAbIAAAwg");
	this.shape_114.setTransform(179.4,607.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("rgba(51,51,51,0.902)").s().p("AgVAdQgKgKAAgRIAAgCQAAgKAEgJQAFgJAHgFQAIgFAIAAQAPAAAIAKQAIAJAAATIAAADIgyAAQAAAMAHAGQAGAIAIgBQAHAAAFgCQAEgDAEgEIAIAGQgKAOgSAAQgPAAgJgKgAgLgWQgFAGgCAKIAlAAIAAgBQgBgKgEgFQgFgGgIABQgHAAgFAFg");
	this.shape_115.setTransform(168.3,607.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("rgba(51,51,51,0.902)").s().p("AgWAfQgGgHgBgNIAAgwIANAAIAAAvQAAARAOAAQAOAAAEgLIAAg1IAOAAIAABKIgNAAIAAgIQgIAJgNAAQgMAAgGgHg");
	this.shape_116.setTransform(160.6,608);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("rgba(51,51,51,0.902)").s().p("AATA1IAAgkQgIAIgLAAQgOAAgJgKQgHgLgBgQIAAgBQABgSAHgKQAJgLAOAAQALAAAIAJIABgHIALAAIAABngAgMgiQgGAIABAOQgBAMAGAHQAFAIAJAAQALAAAGgKIAAgkQgGgKgLAAQgJAAgFAHg");
	this.shape_117.setTransform(152.4,609.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("rgba(51,51,51,0.902)").s().p("AgGAzIAAhKIAMAAIAABKgAgFglQgCgDABgDQgBgDACgCQACgCADAAQADAAACACQACACABADQgBADgCADQgCACgDAAQgDAAgCgCg");
	this.shape_118.setTransform(146.9,606.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("rgba(51,51,51,0.902)").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_119.setTransform(143.4,606.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("rgba(51,51,51,0.902)").s().p("AgbAnQgLgNAAgVIAAgJQAAgOAFgLQAGgKAJgGQAIgGAMAAQAQAAAJAJQAKAJACAQIgNAAQgCgMgGgGQgGgFgKAAQgMAAgHAJQgHAKgBARIAAAJQAAAQAIAKQAGAKAMAAQAKAAAHgFQAFgFADgNIANAAQgCAQgKAJQgKAJgQAAQgRAAgLgNg");
	this.shape_120.setTransform(137.2,606.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("rgba(255,255,255,0.008)").ss(1,1,1).p("A02jRMAptAAAIAAGjMgptAAAg");
	this.shape_121.setTransform(585,649.7,4.382,0.412);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#C29B01").s().p("A02DSIAAmjMAptAAAIAAGjg");
	this.shape_122.setTransform(585,649.7,4.382,0.412);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("rgba(255,255,255,0.008)").ss(1,1,1).p("A02jRMAptAAAIAAGjMgptAAAg");
	this.shape_123.setTransform(585,8.6,4.382,0.412);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#C29B01").s().p("A02DSIAAmjMAptAAAIAAGjg");
	this.shape_124.setTransform(585,8.6,4.382,0.412);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiXfmIwVgJQh1AAhJh1QgYgkgPgsIgMgiQAAAPgeiNQgiicgPiJQgQiIhKgiQgXgLgbAAIgVADIjNgBQhOgBgygKIgjgKQAFh6gKjwMAAhgsMUA/kgADgABAADMgAiAx7QABACiFADQiDADhuAAQhbAAgpBAQgVAggBAiIhjIkIgGAdQgNAhgdAbQhbBXjjAAQjLAAvMgIg");
	mask.setTransform(231.9,345.6);

	// btn_cigarros
	this.btn_cigarro8 = new lib.btn_cigarro8();
	this.btn_cigarro8.name = "btn_cigarro8";
	this.btn_cigarro8.parent = this;
	this.btn_cigarro8.setTransform(399.5,411.1,1,1,0,0,0,20.3,0);
	new cjs.ButtonHelper(this.btn_cigarro8, 0, 1, 1);

	this.btn_cigarro7 = new lib.btn_cigarro7();
	this.btn_cigarro7.name = "btn_cigarro7";
	this.btn_cigarro7.parent = this;
	this.btn_cigarro7.setTransform(351.5,411.1,1,1,0,0,0,20.3,0);
	new cjs.ButtonHelper(this.btn_cigarro7, 0, 1, 1);

	this.btn_cigarro6 = new lib.btn_cigarro6();
	this.btn_cigarro6.name = "btn_cigarro6";
	this.btn_cigarro6.parent = this;
	this.btn_cigarro6.setTransform(303.5,411.1,1,1,0,0,0,20.3,0);
	new cjs.ButtonHelper(this.btn_cigarro6, 0, 1, 1);

	this.btn_cigarro5 = new lib.btn_cigarro5();
	this.btn_cigarro5.name = "btn_cigarro5";
	this.btn_cigarro5.parent = this;
	this.btn_cigarro5.setTransform(255.5,411.1,1,1,0,0,0,20.3,0);
	new cjs.ButtonHelper(this.btn_cigarro5, 0, 1, 1);

	this.btn_cigarro4 = new lib.btn_cigarro4();
	this.btn_cigarro4.name = "btn_cigarro4";
	this.btn_cigarro4.parent = this;
	this.btn_cigarro4.setTransform(207.5,411.1,1,1,0,0,0,20.3,0);
	new cjs.ButtonHelper(this.btn_cigarro4, 0, 1, 1);

	this.btn_cigarro3 = new lib.btn_cigarro3();
	this.btn_cigarro3.name = "btn_cigarro3";
	this.btn_cigarro3.parent = this;
	this.btn_cigarro3.setTransform(159.5,411.1,1,1,0,0,0,20.3,0);
	new cjs.ButtonHelper(this.btn_cigarro3, 0, 1, 1);

	this.btn_cigarro2 = new lib.btn_cigarro2();
	this.btn_cigarro2.name = "btn_cigarro2";
	this.btn_cigarro2.parent = this;
	this.btn_cigarro2.setTransform(111.5,411.1,1,1,0,0,0,20.3,0);
	new cjs.ButtonHelper(this.btn_cigarro2, 0, 1, 1);

	this.btn_cigarro1 = new lib.btn_cigarro1();
	this.btn_cigarro1.name = "btn_cigarro1";
	this.btn_cigarro1.parent = this;
	this.btn_cigarro1.setTransform(63.2,411.8,1,1,0,0,0,20.3,0.7);
	new cjs.ButtonHelper(this.btn_cigarro1, 0, 1, 1);

	var maskedShapeInstanceList = [this.btn_cigarro8,this.btn_cigarro7,this.btn_cigarro6,this.btn_cigarro5,this.btn_cigarro4,this.btn_cigarro3,this.btn_cigarro2,this.btn_cigarro1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_cigarro1},{t:this.btn_cigarro2},{t:this.btn_cigarro3},{t:this.btn_cigarro4},{t:this.btn_cigarro5},{t:this.btn_cigarro6},{t:this.btn_cigarro7},{t:this.btn_cigarro8}]}).wait(1));

	// cigarros
	this.cigarro8 = new lib.cigarro8();
	this.cigarro8.name = "cigarro8";
	this.cigarro8.parent = this;
	this.cigarro8.setTransform(399.5,411.1,1,1,0,0,0,24.2,1.1);

	this.cigarro7 = new lib.cigarro7();
	this.cigarro7.name = "cigarro7";
	this.cigarro7.parent = this;
	this.cigarro7.setTransform(351.5,411.1,1,1,0,0,0,24.2,1.1);

	this.cigarro6 = new lib.cigarro6();
	this.cigarro6.name = "cigarro6";
	this.cigarro6.parent = this;
	this.cigarro6.setTransform(303.5,411.1,1,1,0,0,0,24.2,1.1);

	this.cigarro5 = new lib.cigarro5();
	this.cigarro5.name = "cigarro5";
	this.cigarro5.parent = this;
	this.cigarro5.setTransform(255.5,411.1,1,1,0,0,0,24.2,1.1);

	this.cigarro4 = new lib.cigarro4();
	this.cigarro4.name = "cigarro4";
	this.cigarro4.parent = this;
	this.cigarro4.setTransform(207.5,411.1,1,1,0,0,0,24.2,1.1);

	this.cigarro3 = new lib.cigarro3();
	this.cigarro3.name = "cigarro3";
	this.cigarro3.parent = this;
	this.cigarro3.setTransform(159.5,411.1,1,1,0,0,0,24.2,1.1);

	this.cigarro2 = new lib.cigarro2();
	this.cigarro2.name = "cigarro2";
	this.cigarro2.parent = this;
	this.cigarro2.setTransform(111.5,411.1,1,1,0,0,0,24.2,1.1);

	this.cigarro1 = new lib.cigarro1();
	this.cigarro1.name = "cigarro1";
	this.cigarro1.parent = this;
	this.cigarro1.setTransform(63.2,411.8,1,1,0,0,0,23.9,1.1);

	var maskedShapeInstanceList = [this.cigarro8,this.cigarro7,this.cigarro6,this.cigarro5,this.cigarro4,this.cigarro3,this.cigarro2,this.cigarro1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cigarro1},{t:this.cigarro2},{t:this.cigarro3},{t:this.cigarro4},{t:this.cigarro5},{t:this.cigarro6},{t:this.cigarro7},{t:this.cigarro8}]}).wait(1));

	// embalagem
	this.instance = new lib.embalagem();
	this.instance.parent = this;
	this.instance.setTransform(0,376.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.cigarro_animacao = new lib.cigarro_animacao();
	this.cigarro_animacao.name = "cigarro_animacao";
	this.cigarro_animacao.parent = this;
	this.cigarro_animacao.setTransform(0,0.4);

	this.timeline.addTween(cjs.Tween.get(this.cigarro_animacao).wait(1));

}).prototype = getMCSymbolPrototype(lib.tela2, new cjs.Rectangle(-1,-1,1172.1,1106.8), null);


// stage content:
(lib.efeitosdocigarro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.tela2.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// tela1
	this.tela1 = new lib.tela1();
	this.tela1.name = "tela1";
	this.tela1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.tela1).wait(1));

	// tela2
	this.tela2 = new lib.tela2();
	this.tela2.name = "tela2";
	this.tela2.parent = this;
	this.tela2.setTransform(0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.tela2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(584.5,328.2,1171.1,1106.3);
// library properties:
lib.properties = {
	id: '0DA40ACB98215048A7C8EB8776241AF8',
	width: 1170,
	height: 658,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg_tela1.jpg?1539610773762", id:"bg_tela1"},
		{src:"images/cancer.png?1539610773762", id:"cancer"},
		{src:"images/celulas.png?1539610773762", id:"celulas"},
		{src:"images/cigarro.png?1539610773762", id:"cigarro"},
		{src:"images/cigarro_bg1__.png?1539610773762", id:"cigarro_bg1__"},
		{src:"images/cigarro_bg2__.png?1539610773762", id:"cigarro_bg2__"},
		{src:"images/cigarros.png?1539610773762", id:"cigarros"},
		{src:"images/death.png?1539610773762", id:"death"},
		{src:"images/embalagem.png?1539610773762", id:"embalagem"},
		{src:"images/globolosvermelhos.png?1539610773762", id:"globolosvermelhos"},
		{src:"images/popup1.png?1539610773762", id:"popup1"},
		{src:"images/popup2.png?1539610773762", id:"popup2"},
		{src:"images/pulmao.png?1539610773762", id:"pulmao"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0DA40ACB98215048A7C8EB8776241AF8'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;