(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [];


// symbols:



(lib.Bertalanffy = function() {
	this.initialize(img.Bertalanffy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,258,385);


(lib.Bradford = function() {
	this.initialize(img.Bradford);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,313,403);


(lib.deming = function() {
	this.initialize(img.deming);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,396);


(lib.drucker = function() {
	this.initialize(img.drucker);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,680,453);


(lib.fayol = function() {
	this.initialize(img.fayol);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,799,1107);


(lib.fiedler = function() {
	this.initialize(img.fiedler);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,280);


(lib.FrederickTaylor = function() {
	this.initialize(img.FrederickTaylor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,1047);


(lib.Mayo = function() {
	this.initialize(img.Mayo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,227,320);


(lib.saussure = function() {
	this.initialize(img.saussure);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,295);


(lib.simon = function() {
	this.initialize(img.simon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,384,251);


(lib.weber = function() {
	this.initialize(img.weber);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,467);// helper functions:

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


(lib.wavesvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// wave_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAwhEQCAgFBlAaQBqAcA1A4QiahJjlAGQjvAHj5BdQDOiAEVgKg");
	this.shape.setTransform(222,190.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#008AFF").s().p("AgwHPQh7iHgkjCQgnjUBYi4QBnjVD7h5Qi3BjhPC8QhHCnAWDIQAUC8BdCXQBdCZCBAvIgIAAQiMAAh4iGg");
	this.shape_1.setTransform(82.2,78.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00BAFF").s().p("AgCE+QhJhRgsh7Qgrh7gEiJQgDiRApiCQgYEgBVDmQBPDcCbBoQhegThLhUg");
	this.shape_2.setTransform(260.4,155.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#008AFF").s().p("AARHqQibhBhkipQhpiwAMjGQANjfChiyQiLDIADDLQACCvBsCXQBgCHCUBKQCTBIB+gVQhVAyhaAAQhFAAhJgeg");
	this.shape_3.setTransform(116.9,75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiDETQiPhkgwipQgvimA+jCQgnCEAjCEQAnCUB3BrQBzBnCGASQCQASBnhaQg6B9iSAPQgRABgSAAQh3AAh0hQg");
	this.shape_4.setTransform(135.2,75.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#008AFF").s().p("Am+IUQjFgoh8hLICfAjQDDAlC0ACQJAAIDXlNQCGjOgVjnQgIhjglhOQgkhNg1gnQBEAhA3BIQA7BMAbBiQBDDuiOD2QhiCsjHBeQivBTjnAOQgwADgwAAQifAAifghg");
	this.shape_5.setTransform(130.8,119.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00BAFF").s().p("AozL9QFbgHDuiPQDTiABrjdQBbi9gFjTQgEjChNh1QhGhrhehBQhbhAhggOQhigOhWAnQhZApg9BeQAfhsBhg/QBqhGCUAOQDRATCICRQB6CEAnDMQAlDDgyDDQgzDJh+B9QjhDjj7A6QhjAWiEAFIgpAAIitgBg");
	this.shape_6.setTransform(172.5,108.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003D8F").s().p("AOtN5Qlog0lwBzQjJA+jbAEQjoAEjeg9Qn+iOlIm0QETDFExBrQEkBnEeAJQEbAJDyhTQD3hUCtinQCqijA6jhQA2jQg1jMQg2jMiPh/QiaiJjVgFQi/gFh4BNQhoBCgkBwQggBlAeBjQAeBiBIAmQBdAxBVguQBNgrAjhlQAyBBAKBjQAJBqgtBcQgzBqhxA6QiBBDjFgIQjqgJh+jMQh1i+AikAQAlkMC+i1QDZjPFfgOQPIgmAJSHQACDoBODhQBnErD2FBQjuiklBgvg");
	this.shape_7.setTransform(150,110);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0.1,300,220);
p.frameBounds = [rect];


(lib.txt5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggAuIAAgUIASAGIAMACQAGAAAEgDQAEgCAAgGQAAgDgCgCQgBgCgEgCQgDgDgJgEQgJgFgEgDQgFgEgDgFQgDgFAAgHQAAgOAJgHQAKgIAPAAIAPACIAOAFIgGARIgOgFIgKgBQgFAAgDADQgEACAAAFQAAABAAAAQAAABABABQAAAAAAABQAAAAABABQABACADACIAMAHQAOAHAGAGQAFAGAAAKQAAAOgKAIQgKAIgQAAQgQAAgNgGg");
	this.shape.setTransform(89.5,122.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgiAmQgNgNAAgZQAAgYANgNQAMgOAXAAQAXAAAMAOQAMANAAAYQAAAZgMANQgMAOgYAAQgWAAgMgOgAgSgZQgGAJAAAQQAAARAGAIQAHAJALAAQAaAAAAgiQAAghgZAAQgMAAgHAIg");
	this.shape_1.setTransform(80,122.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AASAzIgrhMIgBAAIACAcIAAAwIgUAAIAAhkIAbAAIArBKIABAAIgBgaIAAgwIATAAIAABkg");
	this.shape_2.setTransform(68.6,122.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAaAzIgIgZIgjAAIgIAZIgXAAIAkhkIAZAAIAkBkgAgMAIIAZAAIgLgkIgCgGIgMAqg");
	this.shape_3.setTransform(58,122.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZAnQgJgNAAgaQAAgZAIgNQAJgNARAAQARAAAJAOQAJANAAAYQAAAbgIAMQgJANgSAAQgQAAgJgNgAgKgaQgDAIAAASQAAATADAHQADAJAHAAQAHAAAEgJQADgHAAgTQAAgSgDgIQgEgHgHgBQgHABgDAHg");
	this.shape_4.setTransform(45.4,122.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiAuIAAgSQAGADAHACQAHACAHAAQAJAAAGgEQAFgDAAgIQAAgHgGgDQgGgDgMAAIgHAAIAAgQIAHAAQALAAAGgDQAFgDAAgHQAAgMgNAAIgKACQgGACgGAEIgKgPQAOgKATAAQAPAAAJAGQAJAHAAALQAAAJgGAHQgGAHgKACIAAABQAMABAHAFQAGAGAAAKQAAAOgLAJQgKAIgTAAQgQAAgNgGg");
	this.shape_5.setTransform(37.4,122.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003F8B").s().p("AlpBhQgpABgcgdQgdgdAAgoIAAhhIOXAAIAABhQAAAogdAdQgcAdgpgBg");
	this.shape_6.setTransform(63.4,123.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWAgQgGgFAAgLQAAgVAigBIANgBIAAgEQAAgIgEgFQgEgEgIAAQgIAAgMAGIgDgIIAMgGIAMgBQANAAAGAGQAGAGAAANIAAAwIgIAAIgCgKIgBAAQgFAHgGACQgFADgHAAQgLAAgGgGgAAHABQgMABgGADQgGADAAAJQAAAFAEAEQADACAHAAQAJABAGgGQAGgFAAgLIAAgHg");
	this.shape_7.setTransform(102.7,101.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgFAyIAAhIIAKAAIAABIgAgEgkQgBgCgBgEQABgEABgCQACgBACAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQACACAAAEQAAAEgCACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgCAAgCgBg");
	this.shape_8.setTransform(97.4,100.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgaAwQgIgFAAgKQAAgGAFgFQAEgFAIgCQgDgBgCgDQgCgDAAgDQAAgEACgCQACgDAFgDQgGgCgDgGQgEgGAAgHQAAgMAHgGQAIgHANAAIAJABIAaAAIAAAHIgOACIADAGQACAEAAAFQAAAKgIAHQgHAGgMAAIgGAAQgHAEAAAEQAAADACACQADABAGAAIAMAAQAMAAAGAFQAHAFAAAKQAAAMgKAGQgKAHgSAAQgOAAgIgGgAgTAXQgEADAAAHQAAAGAFADQAFADAJAAQANAAAHgEQAHgEAAgHQAAgGgEgDQgDgCgLAAIgMAAQgIAAgEAEgAgNgpQgEAFAAAIQAAAIAEAEQAFADAIAAQAPAAAAgPQAAgRgQAAQgHAAgFAEg");
	this.shape_9.setTransform(91.9,103.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRAhQgHgEgEgJQgFgIAAgMQAAgRAJgKQAJgKAPAAQAQAAAJAKQAJAKAAARQAAARgJALQgJAKgQAAQgJAAgIgFgAgPgUQgGAGAAAOQAAAOAGAHQAFAIAKgBQALABAGgIQAFgHAAgOQAAgNgFgHQgGgIgLABQgKgBgFAIg");
	this.shape_10.setTransform(84,101.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgFA0IAAhnIAKAAIAABng");
	this.shape_11.setTransform(78.2,100.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRAhQgHgEgEgJQgFgIAAgMQAAgRAJgKQAJgKAPAAQAQAAAJAKQAJAKAAARQAAARgJALQgJAKgQAAQgJAAgIgFgAgPgUQgGAGAAAOQAAAOAGAHQAFAIAKgBQALABAGgIQAFgHAAgOQAAgNgFgHQgGgIgLABQgKgBgFAIg");
	this.shape_12.setTransform(72.2,101.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AATAlIAAguQAAgJgDgFQgFgEgJAAQgKAAgGAGQgEAGAAAPIAAAlIgLAAIAAhIIAJAAIABAKIABAAQADgFAGgDQAGgDAHAAQANAAAHAGQAHAGgBAOIAAAvg");
	this.shape_13.setTransform(64,101.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgQAcQgKgKABgSQgBgRAKgKQAJgKAPAAIALABIAIACIgEAKIgIgDIgHAAQgWAAAAAbQAAANAGAIQAFAHAKAAQAJAAAKgEIAAAKQgIAEgLAAQgPAAgIgKg");
	this.shape_14.setTransform(56.6,101.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgUAcQgKgKAAgSQAAgQAJgLQAIgKAOAAQAOAAAIAJQAIAJAAAPIAAAGIgyAAQABANAHAHQAFAGALAAQAMAAALgFIAAAKIgLAEIgMABQgQAAgJgKgAgMgWQgFAGgBAKIAlAAQAAgLgEgFQgFgGgJAAQgHAAgGAGg");
	this.shape_15.setTransform(49.3,101.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgKAYIAAgrIgLAAIAAgGIALgEIAFgQIAFAAIAAARIAVAAIAAAJIgVAAIAAAqQAAAHADADQADAEAGgBIAFAAIAFgBIAAAJIgGABIgGABQgUAAAAgWg");
	this.shape_16.setTransform(43,101.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRAhQgHgEgEgJQgFgIAAgMQAAgRAJgKQAJgKAPAAQAQAAAJAKQAJAKAAARQAAARgJALQgJAKgQAAQgJAAgIgFgAgPgUQgGAGAAAOQAAAOAGAHQAFAIAKgBQALABAGgIQAFgHAAgOQAAgNgFgHQgGgIgLABQgKgBgFAIg");
	this.shape_17.setTransform(36.5,101.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgFAyIAAhIIALAAIAABIgAgEgkQgCgCAAgEQAAgEACgCQACgBACAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABAAQACACAAAEQAAAEgCACQgBAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgCAAgCgBg");
	this.shape_18.setTransform(30.7,100.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AghAxIAAhhIAcAAQASAAAJAGQAJAGAAANQAAAIgFAGQgFAFgJACIAAAAQAWAEAAATQAAANgJAIQgJAHgQAAgAgVAoIAUAAQALgBAGgFQAGgEAAgJQAAgKgGgEQgGgFgMABIgTAAgAgVgGIASAAQALAAAGgEQAFgEAAgIQAAgIgGgFQgGgDgMAAIgQAAg");
	this.shape_19.setTransform(24.7,100.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgVAcQgJgKAAgRQAAgSAJgKQAIgKAPAAQANAAAIAJQAIAJAAAPIAAAGIgyAAQABANAGAHQAHAGAJAAQAMAAAMgFIAAAKIgLAEIgNABQgPAAgKgKgAgMgWQgFAFgBALIAmAAQAAgLgGgFQgEgGgJAAQgHAAgGAGg");
	this.shape_20.setTransform(99.6,86.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgWAgQgGgFAAgLQAAgVAigBIANAAIAAgFQAAgJgEgDQgEgFgIAAQgIAAgMAGIgDgJIAMgFIAMgBQANAAAGAGQAGAGAAANIAAAxIgIAAIgCgLIgBAAQgFAHgGACQgFADgHAAQgLAAgGgGgAAHABQgMAAgGAEQgGAEAAAHQAAAHAEACQADAEAHAAQAJAAAGgGQAGgFAAgLIAAgGg");
	this.shape_21.setTransform(88.1,86.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgEAyIAAhIIAJAAIAABIgAgEgkQgCgCABgEQgBgEACgCQACgBACAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQACACAAAEQAAAEgCACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgCAAgCgBg");
	this.shape_22.setTransform(82.8,85.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgaAwQgIgFAAgKQAAgGAFgFQAEgFAIgCQgDgBgCgDQgCgDAAgDQAAgEACgCQACgDAFgDQgGgCgDgGQgEgGAAgHQAAgMAHgGQAIgHANAAIAJABIAaAAIAAAHIgOACIADAGQACAEAAAFQAAAKgIAHQgHAGgMAAIgGAAQgHAEAAAEQAAADACACQADABAGAAIAMAAQAMAAAGAFQAHAFAAAKQAAAMgKAGQgKAHgSAAQgOAAgIgGgAgTAXQgEADAAAHQAAAGAFADQAFADAJAAQANAAAHgEQAHgEAAgHQAAgGgEgDQgDgCgLAAIgMAAQgIAAgEAEgAgNgpQgEAFAAAIQAAAIAEAEQAFADAIAAQAPAAAAgPQAAgRgQAAQgHAAgFAEg");
	this.shape_23.setTransform(77.3,88.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgRAhQgHgFgEgIQgFgIAAgMQAAgRAJgKQAJgKAPAAQAQAAAJAKQAJALAAAQQAAARgJALQgJAKgQAAQgJAAgIgFgAgPgVQgGAIAAANQAAAOAGAHQAFAIAKAAQALAAAGgIQAFgHAAgOQAAgNgFgIQgGgGgLgBQgKABgFAGg");
	this.shape_24.setTransform(69.4,86.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgEA0IAAhnIAJAAIAABng");
	this.shape_25.setTransform(63.6,85.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgRAhQgHgFgEgIQgFgIAAgMQAAgRAJgKQAJgKAPAAQAQAAAJAKQAJALAAAQQAAARgJALQgJAKgQAAQgJAAgIgFgAgPgVQgGAIAAANQAAAOAGAHQAFAIAKAAQALAAAGgIQAFgHAAgOQAAgNgFgIQgGgGgLgBQgKABgFAGg");
	this.shape_26.setTransform(57.6,86.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AATAlIAAguQAAgJgDgFQgFgEgJAAQgKAAgGAGQgEAGAAAPIAAAlIgMAAIAAhIIAJAAIACAKIABAAQADgFAGgDQAHgDAGAAQANAAAHAGQAGAGAAAOIAAAvg");
	this.shape_27.setTransform(49.4,86.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgRAcQgIgKgBgRQABgSAIgKQAJgKAQAAIAKABIAIADIgCAJIgJgDIgHgBQgWAAAAAcQAAAOAFAHQAGAHAKAAQAJAAAJgEIAAAKQgHAEgLAAQgPAAgJgKg");
	this.shape_28.setTransform(42,86.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgVAcQgJgKAAgRQAAgSAJgKQAIgKAPAAQANAAAIAJQAIAJAAAPIAAAGIgyAAQABANAGAHQAHAGAJAAQAMAAAMgFIAAAKIgLAEIgNABQgPAAgKgKgAgMgWQgFAFgBALIAmAAQAAgLgGgFQgEgGgJAAQgHAAgGAGg");
	this.shape_29.setTransform(34.8,86.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgFAxIAAhXIgfAAIAAgKIBJAAIAAAKIgfAAIAABXg");
	this.shape_30.setTransform(27.1,85.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgJARIAEgRIADgQIALAAIABACIgFAOIgGARg");
	this.shape_31.setTransform(106.4,75.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgRAhQgHgEgEgJQgFgJAAgLQAAgRAJgKQAJgKAPAAQAQAAAJAKQAJAKAAARQAAARgJALQgJAKgQAAQgJAAgIgFgAgPgUQgGAGAAAOQAAAOAGAHQAFAIAKgBQALABAGgIQAFgHAAgOQAAgNgFgHQgGgIgLAAQgKAAgFAIg");
	this.shape_32.setTransform(100.8,71.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgWAtQgGgGAAgKQAAgWAigBIANgBIAAgEQAAgHgEgEQgEgFgIAAQgIAAgMAGIgDgIIAMgGIAMgBQANAAAGAGQAGAGAAAMIAAAxIgIAAIgCgKIgBAAQgFAHgGACQgFADgHAAQgLAAgGgGgAAHAOQgMABgGADQgGAEAAAHQAAAHAEACQADADAHAAQAJABAGgGQAGgGAAgKIAAgHgAAHgiIgFgCIgFgEIgEgBQgEAAgBACQgCADgBADIgHAAQABgHAEgFQAEgFAGAAIAGABIAFADIAFADIAEABQABAAABAAQAAAAABgBQAAAAABAAQAAgBABAAQACgCABgEIAGAAQgBAIgDAFQgEAEgHAAIgFgBg");
	this.shape_33.setTransform(92.6,70.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgIA1IAAgHIAGABQAFAAADgCQACgBAAgEQAAgDgCgBQgEgCgGgBIAFgLQgLgCgGgIQgKgKAAgQQAAgTAKgKQAJgKAPAAIAKABIAJADIgDAJIgJgCIgHgBQgWAAAAAcQAAAOAGAGQAFAHAKAAQAJAAAKgEIAAAKQgHAEgLAAIABgBIgIAAIAAABIAGAAIABAAIgDAGQAMADAAAJQAAAHgFADQgGAEgIAAIgGgBgAAIAWIAAAAgAAIAWgAAHAWIgGAAIAAgBIAIAAIgBABIgBAAg");
	this.shape_34.setTransform(85.9,73.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgWAgQgGgGAAgKQAAgVAigBIANgBIAAgEQAAgIgEgEQgEgFgIAAQgIAAgMAGIgDgIIAMgGIAMgBQANAAAGAGQAGAGAAANIAAAwIgIAAIgCgKIgBAAQgFAHgGACQgFADgHAAQgLAAgGgGgAAHABQgMABgGADQgGAEAAAHQAAAHAEACQADADAHAAQAJABAGgGQAGgGAAgKIAAgHg");
	this.shape_35.setTransform(78.5,71.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgRAcQgIgKgBgSQABgRAIgKQAJgKAQAAIAKABIAIACIgCAKIgJgDIgIgBQgVABAAAbQAAAOAFAHQAGAHAKAAQAJAAAJgEIAAAKQgHAEgLAAQgPAAgJgKg");
	this.shape_36.setTransform(71.8,71.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgFAyIAAhIIALAAIAABIgAgEgkQgCgCAAgEQAAgEACgCQACgBACAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABAAQACACAAAEQAAAEgCACQgBAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgCAAgCgBg");
	this.shape_37.setTransform(66.7,70.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAUAlIAAguQAAgJgFgFQgEgEgIAAQgLAAgFAGQgFAGgBAPIAAAlIgLAAIAAhIIAJAAIACAKIAAAAQAEgFAGgDQAGgDAHAAQANAAAHAGQAGAGABAOIAAAvg");
	this.shape_38.setTransform(60.8,71.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgXAfQgHgHAAgNIAAgvIALAAIAAAuQAAAJAFAEQAEAFAIAAQALAAAFgHQAFgFAAgPIAAglIAMAAIAABIIgKAAIgBgKIgBAAQgDAFgGAEQgGACgHAAQgNAAgHgGg");
	this.shape_39.setTransform(52.3,71.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AApAlIAAguQAAgJgEgFQgDgEgIAAQgLAAgFAGQgFAGAAAMIAAAoIgKAAIAAguQAAgJgEgFQgDgEgIAAQgLAAgEAGQgFAHAAAOIAAAlIgLAAIAAhIIAJAAIABAKIABAAQADgFAGgDQAFgDAIAAQARAAAEAMIABAAQADgGAGgDQAGgDAIAAQANAAAGAGQAGAGAAAOIAAAvg");
	this.shape_40.setTransform(41.8,71.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgRAhQgHgEgEgJQgFgJAAgLQAAgRAJgKQAJgKAPAAQAQAAAJAKQAJAKAAARQAAARgJALQgJAKgQAAQgJAAgIgFgAgPgUQgGAGAAAOQAAAOAGAHQAFAIAKgBQALABAGgIQAFgHAAgOQAAgNgFgHQgGgIgLAAQgKAAgFAIg");
	this.shape_41.setTransform(31.2,71.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgYAlQgMgNAAgYQAAgOAFgMQAGgLALgGQALgGANAAQAPAAAMAFIgFAKQgLgFgLAAQgQAAgIAKQgKALAAASQAAATAJALQAJAKAQAAQAKAAANgEIAAAKQgKAEgPAAQgUAAgMgNg");
	this.shape_42.setTransform(23,70.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgJARIAEgRIADgQIALAAIABACIgFAOIgGARg");
	this.shape_43.setTransform(99.9,60.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgRAhQgHgFgEgIQgFgIAAgMQAAgRAJgKQAJgKAPAAQAQAAAJAKQAJALAAAQQAAARgJALQgJAKgQAAQgJAAgIgFgAgPgVQgGAIAAANQAAAOAGAHQAFAIAKAAQALAAAGgIQAFgHAAgOQAAgNgFgIQgGgGgLgBQgKABgFAGg");
	this.shape_44.setTransform(94.3,56.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgWAtQgGgGAAgKQAAgWAigBIANAAIAAgFQAAgIgEgDQgEgFgIAAQgIAAgMAGIgDgJIAMgEQAGgCAGAAQANAAAGAGQAGAFAAANIAAAyIgIAAIgCgLIgBAAQgFAHgGADQgFACgHAAQgLAAgGgGgAAHAOQgMAAgGAEQgGAEAAAHQAAAHAEACQADAEAHAAQAJgBAGgFQAGgGAAgKIAAgGgAAHgiIgFgDIgFgCIgEgBQgEAAgBACQgCABgBAEIgHAAQABgHAEgFQAEgFAGAAIAGACIAFACIAFADIAEABQABAAABAAQAAAAABAAQAAgBABAAQAAAAABgBQACgCABgEIAGAAQgBAIgDAFQgEAFgHgBIgFgBg");
	this.shape_45.setTransform(86.1,55.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgJA1IAAgHIAHABQAFAAADgCQACgBAAgEQAAgDgCgBQgEgCgFgBIAEgLIAGAAIABAAIgDAGQAMADAAAJQAAAHgFADQgFAEgJAAIgHgBgAAIAWIgBAAIgGAAIAAgBIAHAAIAAABIAAgBIgHAAIAAABQgLgCgHgIQgIgKgBgQQABgTAIgKQAJgKAQAAIAKABIAIADIgCAJIgJgCIgIgBQgVAAAAAcQAAAOAFAGQAGAHAKAAQAJAAAJgEIAAAKQgGAEgLAAIAAAAgAABAWIAAAAg");
	this.shape_46.setTransform(79.5,58.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgWAgQgGgGAAgKQAAgVAigBIANAAIAAgFQAAgJgEgDQgEgFgIAAQgIAAgMAGIgDgJIAMgEQAGgCAGAAQANAAAGAGQAGAFAAANIAAAyIgIAAIgCgLIgBAAQgFAHgGADQgFACgHAAQgLAAgGgGgAAHABQgMAAgGAEQgGAEAAAHQAAAHAEACQADAEAHAAQAJgBAGgFQAGgGAAgKIAAgGg");
	this.shape_47.setTransform(72,56.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AApAlIAAguQAAgJgEgFQgDgEgIAAQgLAAgFAGQgFAGAAAMIAAAoIgKAAIAAguQAAgJgEgFQgDgEgIAAQgLAAgEAGQgFAHAAAOIAAAlIgLAAIAAhIIAJAAIABAKIABAAQADgFAGgDQAFgDAIAAQARAAAEAMIABAAQADgGAGgDQAGgDAIAAQANAAAGAGQAGAGAAAOIAAAvg");
	this.shape_48.setTransform(62.1,56.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgUAlIAAhIIAJAAIABANIAAAAQAFgHAFgEQAGgDAGAAIAJAAIgCALIgHgBQgJAAgGAHQgGAHAAALIAAAmg");
	this.shape_49.setTransform(53.4,56.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgRAhQgHgFgEgIQgFgIAAgMQAAgRAJgKQAJgKAPAAQAQAAAJAKQAJALAAAQQAAARgJALQgJAKgQAAQgJAAgIgFgAgPgVQgGAIAAANQAAAOAGAHQAFAIAKAAQALAAAGgIQAFgHAAgOQAAgNgFgIQgGgGgLgBQgKABgFAGg");
	this.shape_50.setTransform(45.9,56.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgLA1IAAhAIgNAAIAAgFIANgEIAAgFQAAgbAWABQAGAAAIACIgDAJQgGgCgFAAQgGAAgDAEQgCAEAAAJIAAAFIASAAIAAAJIgSAAIAABAg");
	this.shape_51.setTransform(39.9,55.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AATAlIAAguQAAgJgDgFQgEgEgKAAQgKAAgFAGQgGAGAAAPIAAAlIgKAAIAAhIIAJAAIABAKIAAAAQAEgFAGgDQAHgDAGAAQANAAAHAGQAHAGAAAOIAAAvg");
	this.shape_52.setTransform(33,56.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgFAxIAAhhIALAAIAABhg");
	this.shape_53.setTransform(26.8,55.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#00224C").s().p("AoVI4QhkAAAAhkIAAunQAAhkBkAAIQrAAQBkAAAABkIAAOnQAABkhkAAg");
	this.shape_54.setTransform(63.4,56.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt5, rect = new cjs.Rectangle(0,0,126.8,133.1), [rect]);


(lib.txt4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggAuIAAgUIASAGIAMACQAGAAAEgDQAEgCAAgGQAAgDgCgCQgBgCgEgCQgDgDgJgEQgJgFgEgDQgFgEgDgFQgDgFAAgHQAAgOAJgHQAKgIAPAAIAPACIAOAFIgGARIgOgFIgKgBQgFAAgDADQgEACAAAFQAAABAAAAQAAABABABQAAAAAAABQAAAAABABQABACADACIAMAHQAOAHAGAGQAFAGAAAKQAAAOgKAIQgKAIgQAAQgQAAgNgGg");
	this.shape.setTransform(89.5,122.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgiAmQgNgNAAgZQAAgYANgNQAMgOAXAAQAXAAAMAOQAMANAAAYQAAAZgMANQgMAOgYAAQgWAAgMgOgAgSgZQgGAJAAAQQAAARAGAIQAHAJALAAQAaAAAAgiQAAghgZAAQgMAAgHAIg");
	this.shape_1.setTransform(80,122.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AASAzIgrhMIgBAAIACAcIAAAwIgUAAIAAhkIAbAAIArBKIABAAIgBgaIAAgwIATAAIAABkg");
	this.shape_2.setTransform(68.6,122.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAaAzIgIgZIgjAAIgIAZIgXAAIAkhkIAZAAIAkBkgAgMAIIAZAAIgLgkIgCgGIgMAqg");
	this.shape_3.setTransform(58,122.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZAnQgJgNAAgaQAAgZAIgNQAJgNARAAQARAAAJAOQAJANAAAYQAAAbgIAMQgJANgSAAQgQAAgJgNgAgKgaQgDAIAAASQAAATADAHQADAJAHAAQAHAAAEgJQADgHAAgTQAAgSgDgIQgEgHgHgBQgHABgDAHg");
	this.shape_4.setTransform(45.4,122.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAFAzIAAgWIgqAAIAAgOIArhAIAUAAIAAA+IAMAAIAAAQIgMAAIAAAWgAAAgOIgSAbIAXAAIAAgQIABgNIAAgJIAAAAIgGALg");
	this.shape_5.setTransform(37.4,122.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003F8B").s().p("AlpBhQgpABgcgdQgdgdAAgoIAAhhIOXAAIAABhQAAAogdAdQgcAdgpgBg");
	this.shape_6.setTransform(63.4,123.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgeAnIAAgMIAOAGIAOABQAJAAAGgDQAFgEAAgGQAAgFgEgEQgFgDgLgGQgNgDgFgDQgFgDgCgFQgDgEAAgGQAAgKAJgHQAIgGAPAAQAOAAANAGIgFALQgNgGgKAAQgJAAgFADQgEADAAAFQAAADACADQABADAEACIAOAGQAQAFAFAGQAGAFAAAJQAAAMgJAGQgJAHgQAAQgRAAgKgGg");
	this.shape_7.setTransform(108.1,97.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUAnQgJgFgFgKQgFgLAAgNQAAgUALgMQAKgMASAAQATAAAKAMQALAMAAAUQAAAVgLAMQgLAMgSAAQgLAAgJgGgAgSgZQgHAJAAAQQAAAQAHAKQAGAIAMAAQANAAAHgIQAHgKAAgQQAAgQgHgIQgHgJgNAAQgMAAgGAIg");
	this.shape_8.setTransform(99.3,97.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUAiQgKgMAAgWQAAgUAKgMQAKgMATAAQAGAAAHABQAGABAEADIgFALIgJgDIgKgCQgZABAAAgQAAARAHAIQAGAJAMAAQAKgBAMgEIAAAMQgJAEgNAAQgSAAgKgLg");
	this.shape_9.setTransform(90.7,97.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgGA8IAAhXIAMAAIAABXgAgFgsQgCgCAAgEQAAgEACgCQADgCACAAQADAAACACQADACAAAEQAAAEgDACQgCADgDAAQgCAAgDgDg");
	this.shape_10.setTransform(84.6,96.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAXAsIAAg3QAAgLgFgFQgEgFgLAAQgMAAgHAHQgGAIAAARIAAAsIgNAAIAAhWIAKAAIADAMIAAAAQAEgGAIgEQAHgDAIAAQAPAAAIAHQAIAIAAARIAAA3g");
	this.shape_11.setTransform(77.6,97.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgUA5QgJgFgFgKQgFgLAAgNQAAgUALgMQAKgMASAAQATAAAKAMQALAMAAAUQAAAVgLAMQgKAMgTAAQgLAAgJgGgAgTgHQgGAIAAARQAAAQAGAKQAHAIAMAAQANAAAGgIQAIgKgBgQQABgRgIgHQgGgJgNAAQgMAAgHAIgAARgkQgHgEgKgLQgKALgHAEIgJAAIAAgBIAPgRIAFgIIANAAIAGAIIAOARIAAABg");
	this.shape_12.setTransform(67.7,95.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgYAsIAAhWIALAAIABAQIABAAQAFgIAGgFQAHgEAHAAIALABIgCAMIgKgBQgKAAgHAIQgHAJAAANIAAAtg");
	this.shape_13.setTransform(60.1,97.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgMAcIAAgzIgNAAIAAgGIANgGIAFgSIAHAAIAAAUIAZAAIAAAKIgZAAIAAAyQAAAIAEAEQADAEAHAAIAHAAIAFgBIAAAKIgHACIgHAAQgYAAAAgag");
	this.shape_14.setTransform(53.2,96.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgYAiQgMgNAAgUQAAgVALgMQAKgMARAAQAQAAAJALQAKALAAARIAAAHIg7AAQAAAPAIAJQAHAHAMABQAOAAAOgHIAAAMIgNAFIgPABQgSAAgLgLgAgOgaQgHAGgBAMIAtAAQAAgLgGgIQgFgGgLAAQgJAAgGAHg");
	this.shape_15.setTransform(45.9,97.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgGA+IAAh7IANAAIAAB7g");
	this.shape_16.setTransform(39.2,95.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgfA6IAAhzIA/AAIAAAMIgyAAIAAAmIAvAAIAAAKIgvAAIAAArIAyAAIAAAMg");
	this.shape_17.setTransform(33,96.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgYAiQgMgNAAgUQAAgVALgMQAKgMARAAQAQAAAJALQAKALAAARIAAAHIg7AAQAAAPAIAJQAHAHAMABQAOAAAOgHIAAAMIgNAFIgPABQgSAAgLgLgAgOgaQgHAGgBAMIAtAAQAAgLgGgIQgFgGgLAAQgJAAgGAHg");
	this.shape_18.setTransform(19.4,97.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgeAoIAAgNIAOAGIAOABQAJAAAGgDQAFgDAAgHQAAgFgEgDQgFgFgLgEQgNgEgFgDQgFgDgCgFQgDgEAAgGQAAgKAJgHQAIgGAPAAQAOAAANAGIgFAKQgNgFgKAAQgJAAgFADQgEADAAAFQAAADACADQABADAEACIAOAGQAQAFAFAGQAGAFAAAJQAAAMgJAHQgJAGgQAAQgRAAgKgFg");
	this.shape_19.setTransform(114.4,79.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgUAoQgJgGgFgKQgFgKAAgOQAAgVAKgLQALgMASAAQASAAAMAMQAKAMAAAUQAAAVgKAMQgLAMgTAAQgLAAgJgFgAgTgZQgGAJAAAQQAAAQAGAJQAHAJAMAAQANAAAGgJQAIgJgBgQQABgPgIgJQgGgJgNAAQgMAAgHAIg");
	this.shape_20.setTransform(105.6,79.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgUAhQgLgLAAgWQAAgUALgMQALgMASAAQAHAAAFABQAHACADACIgDAKIgKgCIgJgBQgZAAAAAgQAAARAGAIQAGAIAMAAQALAAALgEIAAAMQgJAEgNAAQgRAAgLgMg");
	this.shape_21.setTransform(97,79.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgGA7IAAhWIAMAAIAABWgAgFgrQgCgDAAgEQAAgFACgCQADgBACAAQADAAACABQADACAAAFQAAAEgDADQgCACgDAAQgCAAgDgCg");
	this.shape_22.setTransform(90.9,78.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAxAsIAAg3QAAgLgEgFQgFgFgKAAQgMAAgGAHQgFAHAAAPIAAAvIgNAAIAAg3QAAgLgEgFQgFgFgJAAQgMAAgGAHQgGAIAAARIAAAsIgNAAIAAhWIAKAAIADAMIAAAAQAEgGAHgEQAHgDAIAAQAUAAAGAOIAAAAQAFgGAHgEQAHgEAJAAQAPAAAIAHQAHAIAAARIAAA3g");
	this.shape_23.setTransform(81.3,79.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgOA+IAAhWIANAAIAABWgAgOgjIAAgCIAIgMIAGgMIAPAAIAAABIgKANQgFAIgGAEg");
	this.shape_24.setTransform(72.5,78);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgbAlQgIgIAAgQIAAg4IANAAIAAA3QAAALAFAFQAFAFAKAAQANAAAGgHQAGgIAAgQIAAgtIANAAIAABWIgKAAIgCgMIgBAAQgEAHgHADQgHADgJAAQgPAAgIgHg");
	this.shape_25.setTransform(64.5,80);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAZBAIAAglIABgOIgBAAQgJANgRAAQgRAAgKgLQgJgMAAgUQAAgWAJgMQAKgMARAAQARAAAJAOIABAAIACgMIAKAAIAAB9gAgRgrQgGAJAAARQAAAQAGAIQAGAIALAAQANAAAGgHQAGgHAAgQIAAgCQAAgTgGgIQgGgIgNAAQgLAAgGAJg");
	this.shape_26.setTransform(54.4,81.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgUAoQgJgGgFgKQgFgKAAgOQAAgVAKgLQAMgMARAAQATAAALAMQAKAMAAAUQAAAVgKAMQgMAMgSAAQgLAAgJgFgAgSgZQgHAJAAAQQAAAQAHAJQAGAJAMAAQANAAAHgJQAGgJABgQQgBgPgGgJQgHgJgNAAQgMAAgGAIg");
	this.shape_27.setTransform(44.8,79.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgYAsIAAhWIALAAIABAQIABAAQAFgIAGgFQAHgEAHAAIALABIgCAMIgKgBQgKAAgHAIQgHAJAAANIAAAtg");
	this.shape_28.setTransform(37.1,79.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgMAcIAAgzIgNAAIAAgGIANgGIAFgSIAHAAIAAAUIAZAAIAAAKIgZAAIAAAyQAAAIAEAEQADAEAHAAIAHAAIAFgBIAAAKIgHACIgHAAQgYAAAAgag");
	this.shape_29.setTransform(30.3,79);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgYAhQgMgMAAgUQAAgUALgMQAKgNARAAQAQAAAJALQAKALAAARIAAAIIg7AAQAAAPAIAHQAHAJAMgBQAOABAOgHIAAANIgNAEIgPABQgSAAgLgMgAgOgaQgHAGgBAMIAtAAQAAgMgGgHQgFgGgLAAQgJAAgGAHg");
	this.shape_30.setTransform(22.9,79.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgkA6IAAhzIAeAAQArAAAAAiQAAARgMAJQgMAKgWAAIgNAAIAAAtgAgWABIAMAAQARAAAIgFQAIgGAAgMQAAgMgIgFQgHgHgPAAIgPAAg");
	this.shape_31.setTransform(13.9,78.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgLAUIAFgUIADgTIAOAAIABACIgGARIgHAUg");
	this.shape_32.setTransform(92.2,66.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgUAoQgJgGgFgKQgFgLAAgNQAAgVALgLQAKgMASAAQATAAAKAMQALAMAAAUQAAAVgLAMQgKAMgTAAQgLAAgJgFgAgSgYQgHAIAAAQQAAARAHAIQAGAJAMAAQANAAAGgJQAIgIgBgRQABgPgIgJQgGgJgNAAQgMAAgGAJg");
	this.shape_33.setTransform(85.6,62.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgaA2QgIgHAAgMQAAgbApgBIAPAAIAAgGQAAgJgEgFQgFgFgJAAQgKAAgOAHIgEgKQAGgEAIgCQAIgCAGAAQAQAAAHAHQAIAHAAAPIAAA7IgKAAIgCgNIgBAAQgHAJgGACQgHADgIAAQgNAAgHgGgAAJARQgPAAgHAEQgHAFAAAJQAAAHAEAEQAFADAHAAQAMAAAHgGQAHgHAAgMIAAgIgAAIgoIgGgEIgFgDIgGgBQgEAAgCACQgCACgBAFIgIAAQABgJAFgGQAFgFAHAAIAHABIAFAEIAGADIAGABQAEAAABgCQACgCACgFIAHAAQgBAJgEAGQgFAFgHAAIgHgBg");
	this.shape_34.setTransform(75.8,60.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgLA/IAAgIIAIAAQAGAAADgBQADgCAAgEQAAgEgDgCQgDgCgHgBIAFgNIAHAAIABAAIgEAIQAPADAAALQAAAHgGAFQgGAEgLAAIgIgBgAAJAaIgBAAIgHAAIABgBIAIAAIgBABIABgBIgIAAIgBABQgNgCgIgJQgLgMAAgUQAAgWALgMQAKgMATAAQAGAAAHACQAGABADACIgDALIgKgDIgKgBQgYAAAAAiQgBAQAHAHQAGAJAMAAQAKAAAMgFIAAAMQgIAEgNAAIAAAAgAABAaIAAAAg");
	this.shape_35.setTransform(68,64);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgaAnQgIgHAAgMQAAgaApgBIAPAAIAAgGQAAgKgEgFQgFgFgJAAQgKAAgOAGIgEgKQAGgDAIgCQAIgCAGAAQAQAAAHAHQAIAHAAAPIAAA6IgKAAIgCgMIgBAAQgHAIgGADQgHADgIAAQgNAAgHgGgAAJACQgPAAgHAEQgHAEAAAKQAAAHAEAEQAFADAHAAQAMAAAHgGQAHgIAAgMIAAgHg");
	this.shape_36.setTransform(59.1,62.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgGA7IAAhVIAMAAIAABVgAgFgrQgCgCAAgFQAAgFACgCQADgCACAAQADAAACACQADACAAAFQAAAFgDACQgCACgDAAQgCAAgDgCg");
	this.shape_37.setTransform(52.8,60.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgHArIghhVIAOAAIATAyIAHAXIAAAAIAGgRIAVg4IAOAAIghBVg");
	this.shape_38.setTransform(46.7,62.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAlA6IgOglIgtAAIgPAlIgOAAIAvhzIAKAAIAuBzgAgEgaIgOAjIAkAAIgNgjIgFgQIgEAQg");
	this.shape_39.setTransform(37.5,60.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#00224C").s().p("AoVI4QhkAAAAhkIAAunQAAhkBkAAIQrAAQBkAAAABkIAAOnQAABkhkAAg");
	this.shape_40.setTransform(63.4,56.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt4, rect = new cjs.Rectangle(0,0,126.8,133.1), [rect]);


(lib.txt3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggAuIAAgUIASAGIAMACQAGAAAEgDQAEgCAAgGQAAgDgCgCQgBgCgEgCQgDgDgJgEQgJgFgEgDQgFgEgDgFQgDgFAAgHQAAgOAJgHQAKgIAPAAIAPACIAOAFIgGARIgOgFIgKgBQgFAAgDADQgEACAAAFQAAABAAAAQAAABABABQAAAAAAABQAAAAABABQABACADACIAMAHQAOAHAGAGQAFAGAAAKQAAAOgKAIQgKAIgQAAQgQAAgNgGg");
	this.shape.setTransform(89.5,122.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgiAmQgNgNAAgZQAAgYANgNQAMgOAXAAQAXAAAMAOQAMANAAAYQAAAZgMANQgMAOgYAAQgWAAgMgOgAgSgZQgGAJAAAQQAAARAGAIQAHAJALAAQAaAAAAgiQAAghgZAAQgMAAgHAIg");
	this.shape_1.setTransform(80,122.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AASAzIgrhMIgBAAIACAcIAAAwIgUAAIAAhkIAbAAIArBKIABAAIgBgaIAAgwIATAAIAABkg");
	this.shape_2.setTransform(68.6,122.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAaAzIgIgZIgjAAIgIAZIgXAAIAkhkIAZAAIAkBkgAgMAIIAZAAIgLgkIgCgGIgMAqg");
	this.shape_3.setTransform(58,122.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZAnQgJgNAAgaQAAgZAIgNQAJgNARAAQARAAAJAOQAJANAAAYQAAAbgIAMQgJANgSAAQgQAAgJgNgAgKgaQgDAIAAASQAAATADAHQADAJAHAAQAHAAAEgJQADgHAAgTQAAgSgDgIQgEgHgHgBQgHABgDAHg");
	this.shape_4.setTransform(45.4,122.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghAuIAAgTIANAFIAOACQASAAAAgQQAAgPgTAAIgIAAIgHACIgIgFIADgyIA2AAIAAASIgjAAIgCAUIACgBIAKgBQAPAAAIAJQAJAHAAAOQgBARgJAJQgLAJgTAAQgQAAgLgFg");
	this.shape_5.setTransform(37.4,122.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003F8B").s().p("AlpBhQgpABgcgdQgdgdAAgoIAAhhIOXAAIAABhQAAAogdAdQgcAdgpgBg");
	this.shape_6.setTransform(63.4,123.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUAdQgGgFAAgJQAAgTAggBIALAAIAAgFQAAgHgEgEQgDgEgHAAQgIAAgKAFIgDgHQAFgDAGgCQAFgBAFAAQAMAAAGAFQAGAFAAAMIAAAsIgIAAIgCgJIAAAAQgFAGgFACQgFACgHAAQgJAAgGgFgAAHABQgLAAgGAEQgFADAAAHQAAAFADADQAEADAFAAQAJAAAFgFQAGgFAAgJIAAgGg");
	this.shape_7.setTransform(83.9,101.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPAaQgIgJAAgQQAAgQAIgJQAIgJAOAAIAJABIAIACIgDAJIgIgCIgHgBQgSAAgBAYQAAANAGAGQAEAHAJAAQAIAAAJgEIAAAJQgHADgKAAQgNAAgIgIg");
	this.shape_8.setTransform(78,101.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgEAtIAAhBIAJAAIAABBgAgDghQgCgCAAgDQAAgDACgCQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAgBQAAABABAAQABAAAAAAQABAAAAAAQABABAAAAQACACAAADQAAADgCACQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_9.setTransform(73.3,100.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAlAiIAAgqQAAgIgDgEQgDgEgIAAQgJAAgEAFQgFAGAAALIAAAkIgJAAIAAgqQAAgIgDgEQgEgEgHAAQgJAAgFAFQgEAGAAANIAAAiIgKAAIAAhCIAIAAIACAKIAAAAQADgFAFgDQAFgDAHAAQAPAAAEALIABAAQADgFAFgDQAGgDAHAAQALAAAGAGQAFAGAAANIAAAqg");
	this.shape_10.setTransform(65.9,101.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgKAvIAAhBIAKAAIAABBgAgLgaIAAgCIAGgJIAFgJIAMAAIAAABIgIAKIgIAJg");
	this.shape_11.setTransform(59.3,100.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgVAcQgGgGAAgMIAAgrIAKAAIAAAqQAAAJAEAEQAEAEAIAAQAJAAAFgGQAFgGAAgNIAAgiIAKAAIAABCIgJAAIgBgJIgBAAQgDAFgFACQgGADgGAAQgMAAgGgGg");
	this.shape_12.setTransform(53.2,101.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAVA3IgSgUIgDAAQgSAAgLgLQgLgMAAgVQAAgWALgMQALgLASgBQATAAALANQALAMAAAVQAAAQgHALQgHAMgMADIAVAWgAgVgkQgIAJAAASQAAARAIAJQAIAKANgBQAPABAHgKQAIgJAAgRQAAgSgIgJQgHgJgPAAQgNAAgIAJg");
	this.shape_13.setTransform(44.6,101.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTAaQgIgJAAgQQAAgPAIgKQAIgJAMAAQAMAAAIAIQAHAIAAAOIAAAFIgtAAQAAAMAHAGQAFAGAJAAQALAAAKgFIAAAJIgKADIgLABQgOAAgJgIgAgLgUQgFAGgBAJIAiAAQAAgKgEgFQgEgFgIAAQgHAAgFAFg");
	this.shape_14.setTransform(99.2,88.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgSAaQgJgJAAgQQAAgPAIgKQAIgJAMAAQAMAAAIAIQAHAIAAAOIAAAFIgsAAQgBAMAHAGQAFAGAJAAQALAAAKgFIAAAJIgKADIgMABQgNAAgIgIgAgLgUQgEAGgBAJIAiAAQgBgKgEgFQgEgFgIAAQgHAAgFAFg");
	this.shape_15.setTransform(89,88.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgVAnQgHgJAAgQQAAgQAHgJQAHgJANAAQANAAAHAKIABAAIgBgFIAAgFIAAgbIAKAAIAABeIgIAAIgBgJIgBAAQgHAJgNABQgNAAgHgJgAgNgEQgFAFAAANQAAAMAFAHQAEAGAJABQAKAAAEgHQAFgFAAgNIAAgBQAAgOgFgFQgEgHgKAAQgJAAgEAIg");
	this.shape_16.setTransform(81.5,86.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgUAdQgGgFAAgJQAAgTAggBIALAAIAAgFQAAgHgEgEQgDgEgHAAQgIAAgKAFIgDgHQAFgDAGgCQAFgBAFAAQAMAAAGAFQAGAFAAAMIAAAsIgIAAIgCgJIAAAAQgFAGgFACQgFACgHAAQgJAAgGgFgAAHABQgLAAgGAEQgFADAAAHQAAAFADADQAEADAFAAQAJAAAFgFQAGgFAAgJIAAgGg");
	this.shape_17.setTransform(74.2,88.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgVAnQgHgJAAgQQAAgQAHgJQAHgJANAAQANAAAHAKIABAAIgBgFIAAgFIAAgbIAKAAIAABeIgIAAIgBgJIgBAAQgHAJgNABQgNAAgHgJgAgNgEQgFAFAAANQAAAMAFAHQAEAGAJABQAKAAAEgHQAFgFAAgNIAAgBQAAgOgFgFQgEgHgKAAQgJAAgEAIg");
	this.shape_18.setTransform(67,86.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgEAuIAAhCIAJAAIAABCgAgDggQgCgCAAgEQAAgDACgCQAAAAABgBQAAAAAAAAQABAAABAAQAAgBAAAAQAAAAABABQABAAAAAAQABAAAAAAQABABAAAAQACACAAADQAAAEgCACQAAAAgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAgBAAQAAgBAAAAQgBAAAAAAg");
	this.shape_19.setTransform(61.8,86.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgPAaQgIgJAAgQQAAgQAIgJQAIgJAOAAIAKABIAHACIgDAJIgIgCIgGgBQgUAAAAAYQABANAFAGQAEAHAJAAQAIAAAJgEIAAAJQgHADgKAAQgOAAgHgIg");
	this.shape_20.setTransform(57.5,88.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgEAuIAAhCIAJAAIAABCgAgDggQgCgCAAgEQAAgDACgCQAAAAABgBQAAAAAAAAQABAAABAAQAAgBAAAAQAAAAABABQABAAAAAAQABAAAAAAQABABAAAAQACACAAADQAAAEgCACQAAAAgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAgBAAQAAgBAAAAQgBAAAAAAg");
	this.shape_21.setTransform(52.8,86.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgSAiIAAhCIAIAAIABANIABAAQAEgHAEgDQAFgEAGAAIAIABIgBAJIgIgBQgIAAgEAHQgGAGAAAKIAAAjg");
	this.shape_22.setTransform(49.1,88);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgJAVIAAgmIgJAAIAAgFIAJgEIAEgOIAFAAIAAAPIATAAIAAAIIgTAAIAAAmQAAAGADADQADADAEAAIAGAAIADgBIAAAIIgEABIgGAAQgSAAAAgUg");
	this.shape_23.setTransform(44,87.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgTAaQgIgJAAgQQAAgPAIgKQAHgJANAAQANAAAHAIQAHAIAAAOIAAAFIgsAAQAAAMAFAGQAGAGAJAAQAKAAALgFIAAAJIgKADIgLABQgOAAgJgIgAgLgUQgFAGAAAJIAiAAQAAgKgFgFQgEgFgIAAQgHAAgFAFg");
	this.shape_24.setTransform(38.4,88.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgEAvIAAhdIAJAAIAABdg");
	this.shape_25.setTransform(33.3,86.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgYAsIAAhXIAxAAIAAAJIgmAAIAAAcIAjAAIAAAJIgjAAIAAAgIAmAAIAAAJg");
	this.shape_26.setTransform(28.5,87);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgIAPIAEgPIACgOIAKAAIABABIgEANIgGAPg");
	this.shape_27.setTransform(119.4,77.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgUAdQgGgFAAgJQAAgTAggBIALAAIAAgFQAAgHgEgEQgDgEgHAAQgIAAgKAFIgDgHQAFgDAGgCQAFgBAFAAQAMAAAGAFQAGAFAAAMIAAAsIgIAAIgCgJIAAAAQgFAGgFACQgFACgHAAQgJAAgGgFgAAHABQgLAAgGAEQgFADAAAHQAAAFADADQAEADAFAAQAJAAAFgFQAGgFAAgJIAAgGg");
	this.shape_28.setTransform(114.4,74.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AASAiIAAgqQAAgIgEgEQgEgEgHAAQgKAAgFAFQgFAGAAANIAAAiIgKAAIAAhCIAJAAIABAKIABAAQADgFAFgDQAGgDAGAAQAMAAAGAGQAGAGAAANIAAAqg");
	this.shape_29.setTransform(107.4,74.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgSAiIAAhCIAIAAIABANIABAAQAEgHAEgDQAFgEAGAAIAIABIgBAJIgIgBQgIAAgEAHQgGAGAAAKIAAAjg");
	this.shape_30.setTransform(101.5,74.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgSAaQgJgJAAgQQAAgPAIgKQAIgJAMAAQAMAAAIAIQAHAIAAAOIAAAFIgtAAQAAAMAHAGQAFAGAJAAQALAAAKgFIAAAJIgKADIgLABQgOAAgIgIgAgLgUQgFAGgBAJIAiAAQAAgKgEgFQgEgFgIAAQgHAAgFAFg");
	this.shape_31.setTransform(95.1,74.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgJAVIAAgmIgKAAIAAgFIAKgEIAEgOIAFAAIAAAPIATAAIAAAIIgTAAIAAAmQAAAGADADQACADAFAAIAGAAIADgBIAAAIIgEABIgGAAQgSAAAAgUg");
	this.shape_32.setTransform(89.4,73.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AASAiIAAgqQAAgIgEgEQgEgEgHAAQgKAAgFAFQgFAGAAANIAAAiIgKAAIAAhCIAJAAIABAKIABAAQADgFAFgDQAGgDAGAAQAMAAAGAGQAGAGAAANIAAAqg");
	this.shape_33.setTransform(83.4,74.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgEAsIAAhXIAJAAIAABXg");
	this.shape_34.setTransform(77.9,73.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgPAeQgHgEgEgIQgDgHAAgLQgBgPAJgJQAHgJAOAAQAOAAAIAJQAJAJAAAPQAAAQgJAJQgIAJgOAAQgIAAgHgEgAgOgSQgFAGAAAMQAAANAFAGQAFAHAJAAQAKAAAFgHQAFgGAAgNQAAgMgFgGQgFgHgKAAQgJAAgFAHg");
	this.shape_35.setTransform(69.2,74.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgUApQgGgFAAgJQAAgVAgAAIALAAIAAgFQAAgHgEgDQgDgEgHAAQgIAAgKAFIgDgIQAFgDAGgBQAFgCAFAAQAMAAAGAGQAGAFAAALIAAAtIgIAAIgCgJIAAAAQgFAGgFACQgFACgHAAQgJAAgGgFgAAHANQgLAAgGAEQgFADAAAHQAAAFADADQAEADAFAAQAJAAAFgFQAGgFAAgJIAAgHgAAGgfIgFgCIgDgCIgEgBQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAQgCACAAAEIgGAAQAAgHAEgFQADgDAGAAIAFAAIAEADIAFADIAEABQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAIADgGIAGAAQgBAIgEADQgDAFgGAAIgFgCg");
	this.shape_36.setTransform(61.8,73.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgJAVIAAgmIgKAAIAAgFIAKgEIAEgOIAFAAIAAAPIATAAIAAAIIgTAAIAAAmQAAAGADADQADADAFAAIAEAAIAFgBIAAAIIgFABIgGAAQgSAAAAgUg");
	this.shape_37.setTransform(56.4,73.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgXAeIAAgJIALAEIALABQAGAAAFgCQADgDAAgFQAAgEgDgDIgLgGIgOgFQgEgDgBgDQgDgDAAgFQAAgIAHgFQAGgEALAAQALAAAKAEIgEAIQgJgEgJAAQgGAAgDACQgEADAAAEQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAIADAEIALAFQAMADAEAEQAEAFABAGQgBAJgGAFQgIAFgLAAQgNAAgIgEg");
	this.shape_38.setTransform(51.3,74.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgVAcQgGgGAAgMIAAgrIAKAAIAAAqQAAAJAEAEQAEAEAIAAQAJAAAFgGQAFgGAAgNIAAgiIAKAAIAABCIgJAAIgBgJIgBAAQgDAFgFACQgGADgGAAQgMAAgGgGg");
	this.shape_39.setTransform(44.4,74.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgJAtQgFgCgEgFIgBAAIgCAIIgHAAIAAhcIAKAAIAAAWIgBAOIABAAQAHgKANAAQANAAAHAJQAHAJAAAQQAAAPgHAKQgHAIgNABQgGgBgFgCgAgOgFQgEAFAAAOQAAAOAFAFQAEAGAKABQAJgBAEgGQAFgHAAgNQAAgNgFgFQgEgGgKAAQgJgBgFAHg");
	this.shape_40.setTransform(37.1,73.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAlAiIAAgqQAAgIgDgEQgDgEgIAAQgJAAgEAFQgFAGAAALIAAAkIgJAAIAAgqQAAgIgDgEQgEgEgHAAQgJAAgFAFQgEAGAAANIAAAiIgKAAIAAhCIAIAAIACAKIAAAAQADgFAFgDQAFgDAHAAQAPAAAEALIABAAQADgFAFgDQAGgDAHAAQALAAAGAGQAFAGAAANIAAAqg");
	this.shape_41.setTransform(27.3,74.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgPAeQgHgEgEgIQgDgHAAgLQgBgPAJgJQAHgJAOAAQAOAAAIAJQAJAJAAAPQAAAQgJAJQgIAJgOAAQgIAAgHgEgAgOgSQgFAGAAAMQAAANAFAGQAFAHAJAAQAJAAAGgHQAFgGAAgNQAAgMgFgGQgGgHgJAAQgJAAgFAHg");
	this.shape_42.setTransform(17.8,74.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgWAiQgKgMAAgWQAAgNAEgKQAGgKAKgGQAJgFAMAAQAOAAAKAFIgEAIQgKgEgKAAQgNAAgJAJQgIAKgBAQQAAARAJAKQAIAJAOAAQAJAAAMgDIAAAJQgJADgOAAQgSAAgLgLg");
	this.shape_43.setTransform(10.4,73.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgTAaQgIgJAAgQQAAgPAIgKQAHgJANAAQANAAAHAIQAHAIAAAOIAAAFIgtAAQABAMAFAGQAGAGAJAAQALAAAKgFIAAAJIgKADIgLABQgOAAgJgIgAgLgUQgEAGgCAJIAiAAQABgKgFgFQgEgFgIAAQgHAAgFAFg");
	this.shape_44.setTransform(97.6,60.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgVAnQgHgJAAgRQAAgPAHgJQAHgJANAAQANAAAHAKIABAAIgBgFIAAgFIAAgbIAKAAIAABeIgIAAIgBgJIgBAAQgHAKgNgBQgNAAgHgIgAgNgFQgFAGAAAMQAAANAFAHQAEAGAJAAQAKABAEgHQAFgFAAgNIAAgCQAAgNgFgFQgEgGgKgBQgJABgEAGg");
	this.shape_45.setTransform(90.1,59.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgXAeIAAgJIALAEIAKABQAHAAAFgCQADgDAAgFQAAgEgCgDIgNgGIgNgFQgEgDgCgDQgCgDAAgFQABgIAGgFQAGgEALAAQALAAAKAEIgDAIQgLgEgHAAQgHAAgDACQgEADAAAEQAAAAAAABQAAABAAAAQABABAAAAQAAABAAAAIAFAEIAKAFQAMADAFAEQADAFAAAGQAAAJgGAFQgIAFgLAAQgNAAgIgEg");
	this.shape_46.setTransform(80.3,60.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgUAdQgGgFAAgJQAAgTAggBIALAAIAAgFQAAgHgEgEQgDgEgHAAQgIAAgKAFIgDgHQAFgDAGgCQAFgBAFAAQAMAAAGAFQAGAFAAAMIAAAsIgIAAIgCgJIAAAAQgFAGgFACQgFACgHAAQgJAAgGgFgAAHABQgLAAgGAEQgFADAAAHQAAAFADADQAEADAFAAQAJAAAFgFQAGgFAAgJIAAgGg");
	this.shape_47.setTransform(73.7,60.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AASAiIAAgqQAAgIgEgEQgEgEgHAAQgKAAgFAFQgFAGAAANIAAAiIgKAAIAAhCIAJAAIABAKIABAAQADgFAFgDQAGgDAGAAQAMAAAGAGQAGAGAAANIAAAqg");
	this.shape_48.setTransform(66.6,60.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgEAuIAAhCIAJAAIAABCgAgDghQgCgCAAgDQAAgDACgCQAAAAABgBQAAAAAAAAQABAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQACACAAADQAAADgCACQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAgBAAQAAgBAAAAQgBAAAAgBg");
	this.shape_49.setTransform(61.3,59.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgVAcQgGgGAAgMIAAgrIAKAAIAAAqQAAAJAEAEQAEAEAIAAQAJAAAFgGQAFgGAAgNIAAgiIAKAAIAABCIgJAAIgBgJIgBAAQgDAFgFACQgGADgGAAQgMAAgGgGg");
	this.shape_50.setTransform(55.8,61);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AATAxIAAgdIABgKIgBAAQgHAKgNAAQgNAAgHgJQgHgJAAgPQAAgQAHgKQAHgJANAAQANAAAHALIABAAIABgKIAIAAIAABggAgNggQgFAGAAANQAAAMAFAGQAEAHAJAAQAJAAAFgGQAFgFAAgMIAAgCQAAgOgFgGQgEgGgKAAQgJAAgEAHg");
	this.shape_51.setTransform(48.1,62.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgUArQgGgFAAgKQAAgTAggCIALAAIAAgEQAAgGgEgFQgDgDgHAAQgIAAgKAFIgDgHQAFgEAGgBQAFgCAFABQAMAAAGAFQAGAFAAALIAAAtIgIAAIgCgKIAAAAQgFAHgFACQgFACgHAAQgJAAgGgFgAAHAPQgLAAgGADQgFAEAAAHQAAAFADADQAEADAFAAQAJAAAFgFQAGgGAAgJIAAgFgAgFgbIAAgBIAFgJIAGgKIAMAAIAAABIgIAKIgJAJg");
	this.shape_52.setTransform(40.8,59.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAiAsIAAg4IABgVIgBAAIgeBNIgHAAIgehNIgBAAIABAWIAAA3IgKAAIAAhXIAQAAIAbBIIAAAAIAdhIIAPAAIAABXg");
	this.shape_53.setTransform(32,59.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#00224C").s().p("AoVI4QhkAAAAhkIAAunQAAhkBkAAIQrAAQBkAAAABkIAAOnQAABkhkAAg");
	this.shape_54.setTransform(63.4,56.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt3, rect = new cjs.Rectangle(0,0,126.8,133.1), [rect]);


(lib.txt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggAuIAAgUIASAGIAMACQAGAAAEgDQAEgCAAgGQAAgDgCgCQgBgCgEgCQgDgDgJgEQgJgFgEgDQgFgEgDgFQgDgFAAgHQAAgOAJgHQAKgIAPAAIAPACIAOAFIgGARIgOgFIgKgBQgFAAgDADQgEACAAAFQAAABAAAAQAAABABABQAAAAAAABQAAAAABABQABACADACIAMAHQAOAHAGAGQAFAGAAAKQAAAOgKAIQgKAIgQAAQgQAAgNgGg");
	this.shape.setTransform(89.5,122.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgiAmQgNgNAAgZQAAgYANgNQAMgOAXAAQAXAAAMAOQAMANAAAYQAAAZgMANQgMAOgYAAQgWAAgMgOgAgSgZQgGAJAAAQQAAARAGAIQAHAJALAAQAaAAAAgiQAAghgZAAQgMAAgHAIg");
	this.shape_1.setTransform(80,122.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AASAzIgrhMIgBAAIACAcIAAAwIgUAAIAAhkIAbAAIArBKIABAAIgBgaIAAgwIATAAIAABkg");
	this.shape_2.setTransform(68.6,122.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAaAzIgIgZIgjAAIgIAZIgXAAIAkhkIAZAAIAkBkgAgMAIIAZAAIgLgkIgCgGIgMAqg");
	this.shape_3.setTransform(58,122.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggAuIAAgTIAMAFIAOACQATAAAAgQQAAgPgUAAIgIAAIgHACIgJgFIAEgyIA2AAIAAASIgjAAIgCAUIADgBIAJgBQAOAAAJAJQAIAHAAAOQABARgLAJQgKAJgSAAQgRAAgKgFg");
	this.shape_4.setTransform(45.5,122.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghAuIAAgTIANAFIAOACQASAAAAgQQAAgPgTAAIgIAAIgHACIgIgFIADgyIA2AAIAAASIgjAAIgCAUIACgBIAKgBQAPAAAIAJQAJAHAAAOQgBARgJAJQgLAJgTAAQgQAAgLgFg");
	this.shape_5.setTransform(37.4,122.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003F8B").s().p("AlpBhQgpABgcgdQgdgdAAgoIAAhhIOXAAIAABhQAAAogdAdQgcAdgpgBg");
	this.shape_6.setTransform(63.4,123.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUAnQgJgFgFgKQgFgLAAgNQAAgUAKgMQALgMASAAQASAAAMAMQAKAMAAAUQAAAVgKAMQgLAMgTAAQgLAAgJgGgAgTgZQgGAJAAAQQAAAQAGAKQAHAIAMAAQANAAAGgIQAIgKgBgQQABgQgIgIQgGgJgNAAQgMAAgHAIg");
	this.shape_7.setTransform(79,97.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLA/IAAgIIAIAAQAGAAADgBQADgCAAgEQAAgEgDgCQgDgCgIgBIAGgNQgNgCgIgJQgLgMAAgUQAAgWALgMQALgMASAAQAHAAAFACQAHABADACIgDALIgKgDIgJgBQgZAAAAAiQAAAQAGAHQAGAJAMAAQALAAALgFIAAAMQgIAEgNAAIABgBIgIAAIgBABIAHAAIABAAIgEAIQAPADAAALQAAAHgGAFQgGAEgLAAIgIgBgAAJAaIAAAAgAAJAagAAIAaIgHAAIABgBIAIAAIgBABIgBAAg");
	this.shape_8.setTransform(70.4,99.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAlA6IgOglIguAAIgOAlIgOAAIAuhzIALAAIAuBzgAgEgaIgOAjIAkAAIgNgjIgFgQIgEAQg");
	this.shape_9.setTransform(61.3,96.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgYAiQgMgNAAgUQAAgVALgMQAKgMARAAQAQAAAJALQAKALAAARIAAAHIg7AAQAAAPAIAJQAHAHAMABQAOAAAOgHIAAAMIgNAFIgPABQgSAAgLgLgAgOgaQgHAGgBAMIAtAAQAAgLgGgIQgFgGgLAAQgJAAgGAHg");
	this.shape_10.setTransform(47.3,97.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgeAoIAAgNIAOAGIAOABQAJAAAGgDQAFgDAAgHQAAgFgEgDQgFgFgLgEQgNgEgFgDQgFgDgCgFQgDgEAAgGQAAgKAJgHQAIgGAPAAQAOAAANAGIgFAKQgNgFgKAAQgJAAgFADQgEADAAAFQAAADACADQABADAEACIAOAGQAQAFAFAGQAGAFAAAJQAAAMgJAHQgJAGgQAAQgRAAgKgFg");
	this.shape_11.setTransform(94.3,79.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgaAnQgIgHAAgNQAAgZApgBIAPgBIAAgFQAAgKgEgFQgFgFgJAAQgKAAgOAGIgEgKQAGgDAIgCQAIgCAGAAQAQAAAHAHQAIAHAAAPIAAA6IgKAAIgCgMIgBAAQgHAJgGACQgHADgIAAQgNAAgHgGgAAJABQgPABgHAEQgHAFAAAIQAAAIAEAEQAFADAHAAQAMAAAHgHQAHgGAAgNIAAgHg");
	this.shape_12.setTransform(85.6,79.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgGA7IAAhWIAMAAIAABWgAgFgrQgCgDAAgEQAAgFACgCQADgBACAAQADAAACABQADACAAAFQAAAEgDADQgCACgDAAQgCAAgDgCg");
	this.shape_13.setTransform(79.3,78.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgHArIghhWIAOAAIATAzIAHAYIAAAAIAGgSIAVg5IAOAAIghBWg");
	this.shape_14.setTransform(73.2,79.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgUAoQgJgGgFgKQgFgKAAgOQAAgVALgLQAKgMASAAQATAAAKAMQALAMAAAUQAAAVgLAMQgLAMgSAAQgLAAgJgFgAgSgZQgHAJAAAQQAAAQAHAJQAGAJAMAAQANAAAHgJQAHgJAAgQQAAgPgHgJQgHgJgNAAQgMAAgGAIg");
	this.shape_15.setTransform(64.2,79.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgYAsIAAhWIALAAIABAQIABAAQAFgIAGgFQAGgEAIAAIALABIgCAMIgKgBQgKAAgHAIQgHAJAAANIAAAtg");
	this.shape_16.setTransform(56.6,79.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgYAsIAAhWIALAAIACAQIAAAAQAFgIAGgFQAGgEAJAAIAKABIgCAMIgKgBQgKAAgHAIQgHAJAAANIAAAtg");
	this.shape_17.setTransform(49.9,79.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgYAhQgMgMAAgUQAAgUALgMQAKgNARAAQAQAAAJALQAKALAAARIAAAIIg7AAQAAAPAIAHQAHAJAMgBQAOABAOgHIAAANIgNAEIgPABQgSAAgLgMgAgOgaQgHAGgBAMIAtAAQAAgMgGgHQgFgGgLAAQgJAAgGAHg");
	this.shape_18.setTransform(41.5,79.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgfA6IAAhzIA/AAIAAAMIgyAAIAAArIAvAAIAAAKIgvAAIAAAyg");
	this.shape_19.setTransform(33.4,78.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgYAsIAAhWIALAAIACAQIAAAAQAFgIAGgFQAGgEAIAAIALABIgCAMIgJgBQgLAAgGAIQgIAJAAANIAAAtg");
	this.shape_20.setTransform(83.2,62);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgUAoQgJgGgFgKQgFgLAAgNQAAgVALgLQAKgMASAAQATAAAKAMQALAMAAAUQAAAVgLAMQgKAMgTAAQgLAAgJgFgAgSgYQgHAIAAAQQAAARAHAIQAGAJAMAAQANAAAGgJQAIgIgBgRQABgPgIgJQgGgJgNAAQgMAAgGAJg");
	this.shape_21.setTransform(74.3,62.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AglBAIAAh9IAKAAIACAMIABAAQAFgHAHgEQAGgDAIAAQARAAAKAMQAJAMAAAVQAAAVgJAMQgKALgRAAQgHAAgHgDQgHgDgFgGIgBAAIABAOIAAAkgAgSgsQgGAHAAAQIAAADQAAASAGAHQAGAIANAAQALAAAGgJQAHgIAAgQQAAgQgHgJQgGgJgMAAQgMAAgGAIg");
	this.shape_22.setTransform(64.7,64);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgaAnQgIgHAAgMQAAgaApgBIAPAAIAAgGQAAgKgEgFQgFgFgJAAQgKAAgOAGIgEgKQAGgDAIgCQAIgCAGAAQAQAAAHAHQAIAHAAAPIAAA6IgKAAIgCgMIgBAAQgHAIgGADQgHADgIAAQgNAAgHgGgAAJACQgPAAgHAEQgHAEAAAKQAAAHAEAEQAFADAHAAQAMAAAHgGQAHgIAAgMIAAgHg");
	this.shape_23.setTransform(54.7,62.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgGA6IgphzIAOAAIAbBKQAEANACAMIAHgaIAbhJIAOAAIgpBzg");
	this.shape_24.setTransform(45.6,60.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00224C").s().p("AoVI4QhkAAAAhkIAAunQAAhkBkAAIQrAAQBkAAAABkIAAOnQAABkhkAAg");
	this.shape_25.setTransform(63.4,56.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt2, rect = new cjs.Rectangle(0,0,126.8,133.1), [rect]);


(lib.txt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggAuIAAgUIASAGIAMACQAGAAAEgDQAEgCAAgGQAAgDgCgCQgBgCgEgCQgDgDgJgEQgJgFgEgDQgFgEgDgFQgDgFAAgHQAAgOAJgHQAKgIAPAAIAPACIAOAFIgGARIgOgFIgKgBQgFAAgDADQgEACAAAFQAAABAAAAQAAABABABQAAAAAAABQAAAAABABQABACADACIAMAHQAOAHAGAGQAFAGAAAKQAAAOgKAIQgKAIgQAAQgQAAgNgGg");
	this.shape.setTransform(89.5,122.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgiAmQgNgNAAgZQAAgYANgNQAMgOAXAAQAXAAAMAOQAMANAAAYQAAAZgMANQgMAOgYAAQgWAAgMgOgAgSgZQgGAJAAAQQAAARAGAIQAHAJALAAQAaAAAAgiQAAghgZAAQgMAAgHAIg");
	this.shape_1.setTransform(80,122.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AASAzIgrhMIgBAAIACAcIAAAwIgUAAIAAhkIAbAAIArBKIABAAIgBgaIAAgwIATAAIAABkg");
	this.shape_2.setTransform(68.6,122.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAaAzIgIgZIgjAAIgIAZIgXAAIAkhkIAZAAIAkBkgAgMAIIAZAAIgLgkIgCgGIgMAqg");
	this.shape_3.setTransform(58,122.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZAnQgJgNAAgaQAAgZAIgNQAJgNARAAQARAAAJAOQAJANAAAYQAAAbgIAMQgJANgSAAQgQAAgJgNgAgKgaQgDAIAAASQAAATADAHQADAJAHAAQAHAAAEgJQADgHAAgTQAAgSgDgIQgEgHgHgBQgHABgDAHg");
	this.shape_4.setTransform(45.4,122.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRAuQgJgFgEgKQgEgKgBgOQAAgcANgPQANgPAYAAIANABIAAARIgLgBQgMAAgFADQgIAEgDAGQgDAHgBALIABAAQAHgLAOAAQANAAAIAIQAHAIABAPQAAAQgKAJQgJAKgQAAQgKAAgIgGgAgJAFQgFAFAAAFQAAAIAFAGQAEAGAGAAQAGAAAEgFQAEgFAAgIQAAgHgEgFQgDgEgHAAQgFAAgFAEg");
	this.shape_5.setTransform(37.4,122.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003F8B").s().p("AlpBhQgpABgcgdQgdgdAAgoIAAhhIOXAAIAABhQAAAogdAdQgcAdgpgBg");
	this.shape_6.setTransform(63.4,123.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUAnQgJgFgFgKQgFgLAAgNQAAgUALgMQAKgMASAAQATAAAKAMQALAMAAAUQAAAVgLAMQgKAMgTAAQgLAAgJgGgAgTgZQgGAJAAAQQAAAQAGAKQAHAIAMAAQANAAAGgIQAIgKgBgQQABgQgIgIQgGgJgNAAQgMAAgHAIg");
	this.shape_7.setTransform(114,97.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYAsIAAhWIALAAIACAQIAAAAQAFgIAGgFQAHgEAIAAIAKABIgCAMIgJgBQgLAAgGAIQgIAJAAANIAAAtg");
	this.shape_8.setTransform(106.4,97.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYAsIAAhWIALAAIABAQIABAAQAFgIAGgFQAGgEAIAAIALABIgCAMIgKgBQgKAAgHAIQgHAJAAANIAAAtg");
	this.shape_9.setTransform(99.8,97.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgYAiQgMgNAAgUQAAgVALgMQAKgMARAAQAQAAAJALQAKALAAARIAAAHIg7AAQAAAPAIAJQAHAHAMABQAOAAAOgHIAAAMIgNAFIgPABQgSAAgLgLgAgOgaQgHAGgBAMIAtAAQAAgLgGgIQgFgGgLAAQgJAAgGAHg");
	this.shape_10.setTransform(91.3,97.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgfA6IAAhzIA/AAIAAAMIgyAAIAAArIAvAAIAAALIgvAAIAAAxg");
	this.shape_11.setTransform(83.2,96.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYAiQgMgNAAgUQAAgVALgMQAKgMARAAQAQAAAJALQAKALAAARIAAAHIg7AAQAAAPAIAJQAHAHAMABQAOAAAOgHIAAAMIgNAFIgPABQgSAAgLgLgAgOgaQgHAGgBAMIAtAAQAAgLgGgIQgFgGgLAAQgJAAgGAHg");
	this.shape_12.setTransform(69.6,97.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgeAnIAAgMIAOAGIAOABQAJAAAGgDQAFgEAAgGQAAgFgEgEQgFgDgLgGQgNgDgFgDQgFgDgCgFQgDgEAAgGQAAgKAJgHQAIgGAPAAQAOAAANAGIgFALQgNgGgKAAQgJAAgFADQgEADAAAFQAAADACADQABADAEACIAOAGQAQAFAFAGQAGAFAAAJQAAAMgJAGQgJAHgQAAQgRAAgKgGg");
	this.shape_13.setTransform(57,97.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgGA8IAAhXIAMAAIAABXgAgFgsQgCgCAAgEQAAgEACgCQADgCACAAQADAAACACQADACAAAEQAAAEgDACQgCADgDAAQgCAAgDgDg");
	this.shape_14.setTransform(51,96.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgYAiQgMgNAAgUQAAgVALgMQAKgMARAAQAQAAAJALQAKALAAARIAAAHIg7AAQAAAPAIAJQAHAHAMABQAOAAAOgHIAAAMIgNAFIgPABQgSAAgLgLgAgOgaQgHAGgBAMIAtAAQAAgLgGgIQgFgGgLAAQgJAAgGAHg");
	this.shape_15.setTransform(44.4,97.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgMAcIAAgzIgNAAIAAgGIANgGIAFgSIAHAAIAAAUIAZAAIAAAKIgZAAIAAAyQAAAIAEAEQADAEAHAAIAHAAIAFgBIAAAKIgHACIgHAAQgYAAAAgag");
	this.shape_16.setTransform(36.9,96.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAYAsIgYgkIgXAkIgQAAIAhgsIgfgrIAPAAIAWAiIAXgiIAPAAIgfArIAgAsg");
	this.shape_17.setTransform(29.8,97.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgYA0QgMgNAAgUQAAgVALgMQAKgMARAAQAQAAAJALQAKALAAAQIAAAIIg7AAQAAAPAIAJQAHAHAMABQAOAAAOgHIAAAMIgNAFIgPABQgSAAgLgLgAgOgIQgHAGgBALIAtAAQAAgKgGgIQgFgGgLAAQgJAAgGAHgAATgkQgHgEgLgLQgKALgGAEIgJAAIAAgBIAOgRIAGgIIAMAAIAGAIIAOARIAAABg");
	this.shape_18.setTransform(21,95.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgGA6IAAhnIglAAIAAgMIBWAAIAAAMIglAAIAABng");
	this.shape_19.setTransform(12,96.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgLAUIAFgUIADgTIAOAAIABACIgGASIgHATg");
	this.shape_20.setTransform(101.3,84.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgaAnQgIgHAAgNQAAgZApgBIAPgBIAAgFQAAgKgEgFQgFgFgJAAQgKAAgOAGIgEgKQAGgDAIgCQAIgCAGAAQAQAAAHAHQAIAHAAAPIAAA6IgKAAIgCgMIgBAAQgHAJgGACQgHADgIAAQgNAAgHgGgAAJABQgPABgHAEQgHAFAAAIQAAAIAEAEQAFADAHAAQAMAAAHgHQAHgGAAgNIAAgHg");
	this.shape_21.setTransform(94.7,79.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgUAhQgLgLAAgWQAAgUALgMQAKgMATAAQAGAAAHABQAGACAEACIgEAKIgKgCIgKgBQgYAAAAAgQgBARAHAIQAGAIAMAAQAKAAAMgEIAAAMQgIAEgOAAQgSAAgKgMg");
	this.shape_22.setTransform(86.9,79.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgGA7IAAhWIAMAAIAABWgAgFgrQgCgDAAgEQAAgFACgCQADgBACAAQADAAACABQADACAAAFQAAAEgDADQgCACgDAAQgCAAgDgCg");
	this.shape_23.setTransform(80.7,78.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgFA+IAAh7IALAAIAAB7g");
	this.shape_24.setTransform(76.6,78.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgbAlQgIgIAAgQIAAg4IANAAIAAA3QAAALAFAFQAFAFAKAAQANAAAGgHQAGgIAAgQIAAgtIANAAIAABWIgKAAIgCgMIgBAAQgEAHgHADQgHADgJAAQgPAAgIgHg");
	this.shape_25.setTransform(69.5,80);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgaA5QgIgHAAgNQAAgaApgBIAPgBIAAgFQAAgJgEgFQgFgFgJAAQgKAAgOAGIgEgKQAGgDAIgCQAIgCAGAAQAQAAAHAHQAIAHAAAOIAAA7IgKAAIgCgMIgBAAQgHAJgGACQgHADgIAAQgNAAgHgGgAAJATQgPABgHAEQgHAFAAAIQAAAIAEAEQAFADAHAAQAMAAAHgHQAHgGAAgNIAAgHgAgHgkIAAgCIAIgMIAGgMIAQAAIAAABQgDAGgHAIIgMALg");
	this.shape_26.setTransform(59.8,78.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgYAsIAAhWIALAAIACAQIAAAAQAFgIAGgFQAHgEAIAAIAKABIgCAMIgJgBQgLAAgGAIQgIAJAAANIAAAtg");
	this.shape_27.setTransform(52.8,79.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgcAzQgJgLAAgWQAAgUAJgNQAKgMARABQARgBAJANIABAAIgBgGIAAgGIAAgjIANAAIAAB6IgKAAIgCgMIgBAAQgJANgRABQgRAAgKgMgAgRgGQgGAIAAAQQAAARAGAIQAGAJALAAQANgBAGgGQAGgIAAgRIAAgCQAAgSgGgHQgGgJgNAAQgLAAgGAKg");
	this.shape_28.setTransform(43.7,78.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgGA7IAAhWIAMAAIAABWgAgFgrQgCgDAAgEQAAgFACgCQADgBACAAQADAAACABQADACAAAFQAAAEgDADQgCACgDAAQgCAAgDgCg");
	this.shape_29.setTransform(36.9,78.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAeA6IAAg2Ig7AAIAAA2IgOAAIAAhzIAOAAIAAAxIA7AAIAAgxIAOAAIAABzg");
	this.shape_30.setTransform(28.9,78.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgaAnQgIgHAAgMQAAgaApgBIAPAAIAAgGQAAgKgEgFQgFgFgJAAQgKAAgOAGIgEgKQAGgDAIgCQAIgCAGAAQAQAAAHAHQAIAHAAAPIAAA6IgKAAIgCgMIgBAAQgHAIgGADQgHADgIAAQgNAAgHgGgAAJACQgPAAgHAEQgHAEAAAKQAAAHAEAEQAFADAHAAQAMAAAHgGQAHgIAAgMIAAgHg");
	this.shape_31.setTransform(86.8,62.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgGA7IAAhVIAMAAIAABVgAgFgrQgCgCAAgFQAAgFACgCQADgCACAAQADAAACACQADACAAAFQAAAFgDACQgCACgDAAQgCAAgDgCg");
	this.shape_32.setTransform(80.5,60.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgeA5QgKgGAAgLQAAgIAFgGQAFgGAKgCQgEgCgCgDQgDgDABgEQgBgFADgCQACgEAGgDQgGgDgFgHQgEgGAAgJQAAgOAIgIQAJgIAPAAQAGAAAGACIAeAAIAAAIIgQACIAEAHQACAFAAAFQAAANgJAIQgIAHgPAAIgIAAQgHAEgBAGQAAAEAEABQACACAIAAIANAAQAPAAAIAGQAHAGAAALQAAAPgMAHQgLAIgVAAQgSAAgIgHgAgWAbQgFAEAAAIQAAAHAGAEQAFAEAMAAQAQAAAHgFQAJgFgBgJQABgHgFgCQgEgDgMAAIgQAAQgIAAgFAEgAgPgwQgFAFAAAKQAAAJAFAEQAFAFAJAAQASAAAAgTQABgTgTAAQgJAAgFAFg");
	this.shape_33.setTransform(74,64);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgYAsIAAhWIALAAIABAQIABAAQAFgIAGgFQAHgEAHAAIALABIgCAMIgKgBQgKAAgHAIQgHAJAAANIAAAtg");
	this.shape_34.setTransform(66.8,62);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgYAhQgMgLAAgVQAAgUALgMQAKgNARAAQAQAAAJALQAKALAAARIAAAIIg7AAQAAAPAIAHQAHAJAMgBQAOAAAOgFIAAAMIgNAEIgPABQgSAAgLgMgAgOgaQgHAGgBANIAtAAQAAgMgGgIQgFgGgLAAQgJAAgGAHg");
	this.shape_35.setTransform(58.4,62.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAXAsIAAg3QAAgLgFgFQgEgFgLAAQgMAAgHAHQgGAIAAARIAAAsIgNAAIAAhWIAKAAIADAMIAAAAQAEgGAIgEQAHgDAIAAQAPAAAIAHQAIAIAAARIAAA3g");
	this.shape_36.setTransform(48.8,62);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgfA6IAAhzIA/AAIAAAMIgyAAIAAAlIAvAAIAAAMIgvAAIAAAqIAyAAIAAAMg");
	this.shape_37.setTransform(39.6,60.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#00224C").s().p("AoVI4QhkAAAAhkIAAunQAAhkBkAAIQrAAQBkAAAABkIAAOnQAABkhkAAg");
	this.shape_38.setTransform(63.4,56.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt1, rect = new cjs.Rectangle(0,0,126.8,133.1), [rect]);


(lib.trainsvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// train.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF4A00").s().p("AksEsIAApXIHBAAQBTAAAsBHQAsBGgkBLIkcF/g");
	this.shape.setTransform(406.1,30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF7900").s().p("AkrEsIkdl/QgkhLAshGQAshHBTAAIODAAQBTAAAsBHQAsBGgkBLIkdF/g");
	this.shape_1.setTransform(376,30);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E3E3E8").s().p("AjgJYIAAyvQC7AACDCDQCDCEAAC7IAAJXQAAA/gsArQgrAsg/AAg");
	this.shape_2.setTransform(127.5,197);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF4A00").s().p("AqnEsIAApXIQjAAQB8AABYBYQBYBZAAB6QAAB8hYBYQhYBYh8AAg");
	this.shape_3.setTransform(173,61);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF7900").s().p("Ay0EsIAAnBQAAg/ArgrQAsgsA/AAIenAAQB8AABYBYQBYBZAAB6QAAB8hYBYQhYBYh8AAg");
	this.shape_4.setTransform(120.5,61);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B4747").s().p("AhKiVQA/AAArArQArAsAAA+QAAA/grAsQgrArg/AAg");
	this.shape_5.setTransform(112.5,437);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#356970").s().p("AhqBrQgrgsAAg/QAAg+ArgsQAsgrA+AAQA/AAAsArQArAsAAA+QAAA/grAsQgsArg/AAQg+AAgsgrg");
	this.shape_6.setTransform(105,437);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D4D4D9").s().p("AjgnBQC7AACDCEQCDCDAAC6QAAC7iDCDQiDCEi7AAg");
	this.shape_7.setTransform(127.5,437);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EDEDF2").s().p("Ak9E+QiEiDAAi7QAAi6CEiDQCDiEC6AAQC7AACECEQCDCDAAC6QAAC7iDCDQiECEi7AAQi6AAiDiEg");
	this.shape_8.setTransform(105,437);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2B4747").s().p("Al2rtQCYAACMA7QCFA5BoBoQBoBoA5CHQA7CKAACYQAACZg7CLQg5CGhoBoQhoBoiFA5QiMA7iYAAg");
	this.shape_9.setTransform(142.5,437);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#356970").s().p("AkjKzQiHg5hnhoQhohog5iGQg7iLAAiZQAAiYA7iKQA5iHBohoQBnhoCHg5QCMg7CXAAQCYAACMA7QCGA5BoBoQBoBoA5CHQA7CKAACYQAACZg7CLQg5CGhoBoQhoBoiGA5QiMA7iYAAQiXAAiMg7g");
	this.shape_10.setTransform(105,437);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D4D4D9").s().p("AiVkrQB8AABXBYQBYBYAAB7QAAB8hYBYQhXBYh8AAg");
	this.shape_11.setTransform(286,452);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EDEDF2").s().p("AjTDUQhYhYAAh8QAAh7BYhYQBYhYB7AAQB8AABYBYQBYBYAAB7QAAB8hYBYQhYBYh8AAQh7AAhYhYg");
	this.shape_12.setTransform(271,452);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2B4747").s().p("AkrpXQD3AACwCxQCwCwAAD2QAAD4iwCwQiwCwj3AAg");
	this.shape_13.setTransform(301,452);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#356970").s().p("AmmGoQixiwAAj4QAAj2CxiwQCwixD2AAQD3AACxCxQCwCwAAD2QAAD4iwCwQixCwj3AAQj2AAiwiwg");
	this.shape_14.setTransform(271,452);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D4D4D9").s().p("AiVkrQB8AABXBYQBYBYAAB7QAAB8hYBYQhXBYh8AAg");
	this.shape_15.setTransform(436,452);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EDEDF2").s().p("AjTDUQhYhYAAh8QAAh7BYhYQBZhYB6AAQB8AABYBYQBYBYAAB7QAAB8hYBYQhYBYh8AAQh6AAhZhYg");
	this.shape_16.setTransform(421,452);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2B4747").s().p("AkrpXQD3AACwCxQCwCwAAD2QAAD4iwCwQiwCwj3AAg");
	this.shape_17.setTransform(451,452);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#356970").s().p("AmnGoQiwiwAAj4QAAj2CwiwQCwixD3AAQD3AACxCxQCwCwAAD2QAAD4iwCwQixCwj3AAQj3AAiwiwg");
	this.shape_18.setTransform(421,452);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E3E3E8").s().p("AhpEAQgsgsAAg+IAAkrQAAg+AsgsQAsgsA9AAQA+AAAsAsQAsAsAAA+IAAErQAAA+gsAsQgsAsg+AAQg9AAgsgsg");
	this.shape_19.setTransform(256,242);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E3E3E8").s().p("AhpEAQgsgsAAg+IAAkrQAAg+AsgsQAsgsA9AAQA+AAAsAsQAsAsAAA+IAAErQAAA+gsAsQgsAsg+AAQg9AAgsgsg");
	this.shape_20.setTransform(316,242);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E3E3E8").s().p("AhpEAQgsgsAAg+IAAkrQAAg+AsgsQAsgsA9AAQA+AAAsAsQAsAsAAA+IAAErQAAA+gsAsQgsAsg+AAQg9AAgsgsg");
	this.shape_21.setTransform(376,242);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EDEDF2").s().p("AkrJYQg/AAgsgsQgrgrAAg/IAApXQAAi7CEiEQCDiDC6AAQC7AACECDQCDCEAAC7IAAJXQAAA/gsArQgrAsg/AAg");
	this.shape_22.setTransform(105,197);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF4A00").s().p("A/yLuIAA3bMA4ZAAAQC8AACHCEQCJCEAAC6IAAODQAAA/grAsQgsArg/AAg");
	this.shape_23.setTransform(308.5,377);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF7900").s().p("Egg9ALuQi7AAiEiEQiDiDAAi7IAAwZMBIzAAAQC8AACHCEQCJCEAAC6IAAODQAAA/grAsQgsArg/AAg");
	this.shape_24.setTransform(256,377);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2B4747").s().p("AoRS1MAAAglpIQjiWMAAAAqVg");
	this.shape_25.setTransform(158,196.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2A5959").s().p("AweQfMAAAgg9MAg9gEsMAAAAqVg");
	this.shape_26.setTransform(105.5,196.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CA2E00").s().p("A1KqxQAAg9AxgtQAwgsA/AAMAlfAAAQA2AAApAjQAqAiAKA0IEsXbMgznAA7g");
	this.shape_27.setTransform(315.5,236);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2B4747").s().p("AiVL4IAA3vIErAAIAAXvg");
	this.shape_28.setTransform(391,106);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2A5959").s().p("AkrL4IAA3vIJXAAIAAXvg");
	this.shape_29.setTransform(376,106);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,512,512);
p.frameBounds = [rect];


(lib.smartphonesvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// smartphone.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C9D5D9").s().p("AgYAPQgGAAgFgFQgEgDAAgHQAAgFAEgEQAFgFAGAAIAxAAQAGAAAEAFQAFAEAAAFQAAAHgFADQgEAFgGAAg");
	this.shape.setTransform(17,53.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#476A7A").s().p("AgEAKQgKAAAAgKQAAgJAKAAIAJAAQAEAAADADQADADAAADQAAAEgDAEQgDACgEAAg");
	this.shape_1.setTransform(24.5,3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#476A7A").s().p("AgEAKQgKAAAAgKQAAgJAKAAIAJAAQAEAAADADQADADAAADQAAAEgDAEQgDACgEAAg");
	this.shape_2.setTransform(28.5,3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#476A7A").s().p("AgdAKQgKAAAAgKQAAgJAKAAIA7AAQAEAAADADQADADAAADQAAAKgKAAg");
	this.shape_3.setTransform(17,3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6D919D").s().p("AgLAMQgDgDAAgEQAAgEADgCIAKgKQACgDAEAAQAEAAADADQADADAAAEQAAAEgDACIgKAKQgCADgEAAQgFAAgCgDg");
	this.shape_4.setTransform(19.5,9.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6D919D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADAEAAACQAAADgDAEQgEADgDAAQgDAAgDgDg");
	this.shape_5.setTransform(17,12);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6D919D").s().p("AgzA0QgDgDAAgEQAAgEADgDIBZhZQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADIhZBZQgCADgFAAQgFAAgCgDg");
	this.shape_6.setTransform(10.5,18.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6D919D").s().p("AgVAWQgDgDAAgEQAAgEADgDIAdgdQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADIgdAdQgCADgFAAQgFAAgCgDg");
	this.shape_7.setTransform(13.5,10.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6D919D").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADAEAAACQAAADgDAEQgEADgDAAQgDAAgDgDg");
	this.shape_8.setTransform(10,14);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6D919D").s().p("AgQARQgDgDAAgEQAAgEADgDIATgTQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADIgTATQgCADgFAAQgFAAgCgDg");
	this.shape_9.setTransform(7,17);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6D919D").s().p("AgaAbQgDgDAAgEQAAgEADgDIAngnQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADIgnAnQgCADgFAAQgFAAgCgDg");
	this.shape_10.setTransform(8,11);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#476A7A").s().p("AiLDXIAAmtIEXAAIAAGtg");
	this.shape_11.setTransform(17,27.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2E434E").s().p("AhwEiQgXAAgSgRQgQgQAAgYIAAnQQAAgYAQgRQASgRAXAAIDhAAQAXAAARARQARARAAAYIAAHQQAAAYgRAQQgRARgXAAg");
	this.shape_12.setTransform(17,29);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,34,58);
p.frameBounds = [rect];


(lib.shirtsvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shirt.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E84332").s().p("EgfBAg1IAAtyQQmn5MjtbQMitdGuxGINqKfIpqMbIoSmFMAAAAw0g");
	this.shape.setTransform(313.4,231.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ECECEC").s().p("AkIBYIAAivIIRAAIAACvg");
	this.shape_1.setTransform(256,44.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF4B39").s().p("EgWEAifMAAAgw0IoSGEIppsaIR7tzIJrAAQgBCiA/CTQA8CPBuBuQBuBuCPA8QCTA/ChAAQChAACUg/QCOg8BuhuQBuhuA8iPQA/iTAAiiIJqAAIR8NzIpqMaIoSmEMAAAAw0g");
	this.shape_2.setTransform(256,220.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF4B39").s().p("EgWEAifMAAAgw0IoSGEIppsaIR7tzIJrAAQgBCiA/CTQA8CPBuBuQBuBuCPA8QCTA/ChAAQChAACUg/QCOg8BuhuQBuhuA8iPQA/iTAAiiIJqAAIR8NzIpqMaIoSmEMAAAAw0g");
	this.shape_3.setTransform(256,220.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#844428").s().p("AsZJqIAAzTQGCCBGXAAQGYAAGCiBIAATTg");
	this.shape_4.setTransform(256,61.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,512,441.4);
p.frameBounds = [rect];


(lib.shipsvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ship.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00E3F9").s().p("Aw8BpQgogmgzgUQgygUg2AAIAAkrQBwAABoAqQBqAsBTBSQBPBMB0AAQB1AABOhMQCmipDvAAQDtAACnCpQBRBPByAAQByAABRhPQBRhRBugsQBsgrB0AAQA/AAAsArQArAsAAA/QAAA9grAsQgtAsg+AAQg4AAg1AUQg5AUgnAmQhSBThrAsQhnAphxAAQhxAAhngpQhsgshRhTQhShPhwAAQhyAAhRBPQimCpjvAAQjvAAimipg");
	this.shape.setTransform(384,424.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00E3F9").s().p("Aw8BpQgogmgzgUQgygUg2AAIAAkrQBwAABoAqQBqAsBTBSQBPBMB0ABQB1gBBOhMQCmipDvABQDtgBCnCpQBRBPByAAQByAABRhPQBRhQBugtQBsgrB0AAQA/AAAsArQArAsAAA/QAAA9grAtQgtArg+AAQg4AAg1AUQg5AUgnAmQhSBThrAsQhnAphxAAQhxAAhngpQhsgshRhTQhShPhwABQhygBhRBPQimCpjvgBQjvABimipg");
	this.shape_1.setTransform(384,484.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#83ECFB").s().p("ADDBpQgogmgzgUQgygUg2AAQg1AAgyAUQgzAUgoAmQinCpjugBQjvABimipQhRhPhyABQhygBhRBPQimCpjvgBQjvABimipQgogmg4gUQg2gUg3AAQg/AAgsgrQgrgtAAg9QAAg/ArgsQAsgrA/AAQB0AABsArQBvAtBQBQQBRBPByAAQByAABRhPQCmipDvABQDvgBCmCpQBPBMB0ABQB1gBBOhMQBShSBrgsQBogqBvAAQBwAABoAqQBrAsBSBSQBOBMB1ABQB0gBBPhMQCmipDuABQDvgBCmCpQBSBPByAAQByAABRhPQBRhQBugtQBrgrB1AAQA/AAAsArQArAsAAA/QAAA9grAtQgtArg+AAQg4AAg1AUQg5AUgnAmQhSBThrAsQhnAphxAAQhxAAhngpQhsgshRhTQhShPhxABQhygBhRBPQimCpjvgBQjvABimipg");
	this.shape_2.setTransform(256,484.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#83ECFB").s().p("ADDBpQgogmgzgUQgygUg2AAQg1AAgyAUQgzAUgoAmQinCpjuAAQjvAAimipQhRhPhyAAQhyAAhRBPQimCpjvAAQjvAAimipQgogmg4gUQg2gUg3AAQg/AAgsgsQgrgsAAg9QAAg/ArgsQAsgrA/AAQB0AABsArQBvAsBQBRQBRBPByAAQByAABRhPQCmipDvAAQDvAACmCpQBPBMB0AAQB1AABOhMQBShSBrgsQBogqBvAAQBwAABoAqQBrAsBSBSQBOBMB1AAQB0AABPhMQCmipDuAAQDvAACmCpQBSBPByAAQByAABRhPQBRhRBugsQBrgrB1AAQA/AAAsArQArAsAAA/QAAA9grAsQgtAsg+AAQg4AAg1AUQg5AUgnAmQhSBThrAsQhnAphxAAQhxAAhngpQhsgshRhTQhShPhxAAQhyAAhRBPQimCpjvAAQjvAAimipg");
	this.shape_3.setTransform(256,424.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1A3636").s().p("ApFNIQg+g+hPggQhLgehUAAIAA6PQAZABAXAIIazI6InOReQhtgZhoAZQhuAbhPBPQh7B8iwAAQiwAAh8h8g");
	this.shape_4.setTransform(344.2,340.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A5959").s().p("AEsNIQg+g+hPggQhLgehUAAQhTAAhLAeQhPAgg+A+Qh7B8ixAAQiwAAh8h8QhPhPhugbQhngZhuAZInOxeIa0o6QAVgJAaAAQAbAAAVAJIa0I6InOReQhtgZhoAZQhuAbhPBPQh8B8iwAAQiwAAh8h8g");
	this.shape_5.setTransform(256,340.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A5959").s().p("AvOEHIAAusQAaAAAWAJIcHJYQAdAJAYAWQAYAVANAcQAMAaAAAhQAAAggMAdIiuGRIoECRg");
	this.shape_6.setTransform(353.5,248.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#356970").s().p("AAAEHIx8F+IpnhwIiumRQgMgdAAggQAAghAMgaQANgcAYgWQAXgVAegJIcIpYQAWgJAZAAQAZAAAXAJIcIJYQAdAJAXAWQAZAVANAcQAMAaAAAhQAAAggMAdIiuGRIoECRg");
	this.shape_7.setTransform(256,248.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#78BBC7").s().p("AqiKKIAA0TIODAAQC7AACDCEQCECEAAC6IAAK6QAABAgsArQgrAsg/AAg");
	this.shape_8.setTransform(323.5,186);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BBE3E8").s().p("AyvKKQg/AAgrgsQgsgrAAhAIAAq6QAAi6CEiEQCDiEC7AAIcHAAQC7AACDCEQCECEAAC6IAAK6QAABAgsArQgrAsg/AAg");
	this.shape_9.setTransform(256,186);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CB2036").s().p("AkrHCIAAuDIJXAAIAALtQAAA/grArQgsAsg/AAg");
	this.shape_10.setTransform(286,106);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF3650").s().p("AnBHCQg/AAgsgsQgrgrAAg/IAArtISvAAIAALtQAAA/grArQgsAsg/AAg");
	this.shape_11.setTransform(256,106);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1A3636").s().p("AkrHHIAAuNIHBAAQA/AAAsArQArAsAAA/IAAHLIlSEsg");
	this.shape_12.setTransform(286,45.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2A5959").s().p("AjRHHImGksIAAnLQAAg/ArgsQAsgrA/AAIODAAQA/AAAsArQArAsAAA/IAAHLIlTEsg");
	this.shape_13.setTransform(256,45.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,512,512);
p.frameBounds = [rect];


(lib.pumpjacksvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pumpjack.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#424242").s().p("AkrJdIAA3lIJXAAIAAXlIksEsg");
	this.shape.setTransform(451,90.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5A5A5A").s().p("AiVQaIksuEIAAyvIODAAMAAAAgzg");
	this.shape_1.setTransform(45,196);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF4A00").s().p("AvjBOId/sgIBIJnI/HM+g");
	this.shape_2.setTransform(355.6,105.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF7900").s().p("A/MIAMA9RgZiIBIJnMg9RAZeg");
	this.shape_3.setTransform(255.5,145.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5A5A5A").s().p("Az/ExIAAphMAn/AAAIAAJhg");
	this.shape_4.setTransform(384,481.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6E6E6E").s().p("Egn/AExIAAphMBP/AAAIAAJhg");
	this.shape_5.setTransform(256,481.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#424242").s().p("An47jIEmg7MALLA34IkmBFg");
	this.shape_6.setTransform(328.7,305);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5A5A5A").s().p("An9ZEMALWgzIIElBBMgLWAzIg");
	this.shape_7.setTransform(184.9,313.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#424242").s().p("AkrHCIAAuDIJXAAIAAODg");
	this.shape_8.setTransform(451,436);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#424242").s().p("Ao+BCIAAmLIKEooIDEDkIphIKIOVMSIjGDjg");
	this.shape_9.setTransform(313.5,389.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5A5A5A").s().p("AAABCIu2MwIjGjjIOWsSIpGnyIDGjjIJmIPIKFooIDDDkIphIKIOWMSIjGDjg");
	this.shape_10.setTransform(256,389.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#424242").s().p("Al2CWIAAkrILtAAIAAErg");
	this.shape_11.setTransform(293.5,316);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5A5A5A").s().p("ArtCWIAAkrIXbAAIAAErg");
	this.shape_12.setTransform(256,316);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#242424").s().p("AiVVGMAAAgqLIErAAMAAAAqLg");
	this.shape_13.setTransform(451,286);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,512,512);
p.frameBounds = [rect];


(lib.onda_final5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlkFlQiTiUAAjRQAAjQCTiUQCViUDPAAQDRAACUCUQCUCUAADQQAADRiUCUQiUCUjRgBQjPABiViUg");
	mask.setTransform(50.6,50.5);

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#023E8F").s().p("AgzAfQgLgLAAgTQAAgMAHgKQAGgJAMgGQAMgFARAAQAkAAASAPQARAOAAAdIgBAQIgQAAQABgIAAgHQABgTgMgKQgKgKgXgBIAAABQAHAFAEAHQADAHAAAJQAAAQgKAJQgJAKgSAAQgTAAgMgLgAgggSQgGADgEAFQgDAFAAAGQAAAKAGAGQAHAFAMAAQALAAAFgFQAGgFgBgKQABgJgGgHQgGgHgHAAQgIAAgHADg");
	this.shape.setTransform(59.4,59.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#023E8F").s().p("AgzAfQgLgLAAgTQAAgMAHgKQAGgJAMgGQAMgFARAAQAkAAASAPQARAOAAAdIgBAQIgQAAQABgIAAgHQABgTgMgKQgKgKgXgBIAAABQAHAFAEAHQADAHAAAJQAAAQgKAJQgJAKgSAAQgTAAgMgLgAgggSQgGADgEAFQgDAFAAAGQAAAKAGAGQAHAFAMAAQALAAAFgFQAGgFgBgKQABgJgGgHQgGgHgHAAQgIAAgHADg");
	this.shape_1.setTransform(59.4,69.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#023E8F").s().p("AgzAfQgLgLAAgTQAAgMAHgKQAGgJAMgGQAMgFARAAQAkAAASAPQARAOAAAdIgBAQIgQAAQABgIAAgHQABgTgMgKQgKgKgXgBIAAABQAHAFAEAHQADAHAAAJQAAAQgKAJQgJAKgSAAQgTAAgMgLgAgggSQgGADgEAFQgDAFAAAGQAAAKAGAGQAHAFAMAAQALAAAFgFQAGgFgBgKQABgJgGgHQgGgHgHAAQgIAAgHADg");
	this.shape_2.setTransform(59.4,79.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#023E8F").s().p("Ag9gJIAAgQIB7AAIAAATIhPAAIgXAAIAFAFIAQARIgNAKg");
	this.shape_3.setTransform(59.4,90.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(0,0,0,0.008)").ss(1,1,1).p("ACvE6IldAAQA5gCAzhkQAcg3A7ioQA3ifAlhCQAegzAgga");
	this.shape_4.setTransform(27.4,69.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AitE6QA3gCA0hkQAcg3A6ioQA4ifAlhCQAegzAfgaIAAJzg");
	this.shape_5.setTransform(27.4,69.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CCCCCC").ss(2,1,1).p("AmSFFQA5gCAzhjQAcg3A7ipQA3idAlhBQA7hmBDAAQBEAAA7BmQApBFA0CZQA+C2ATAqQAtBkAtABg");
	this.shape_6.setTransform(50.5,57.5,1.255,1.376);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(0,0,0,0.008)").ss(1,1,1).p("AmSFFQA5gCAzhjQAcg3A7ipQA3idAlhBQA7hmBDAAQBEAAA7BmQApBFA0CZQA+C2ATAqQAtBkAtABg");
	this.shape_7.setTransform(50.4,64.2,1.164,1.164);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#02BAFF").s().p("AmSFFQA5gCAzhjQAcg3A7ipQA3idAlhCQA7hlBDAAQBEAAA7BlQApBGA0CZQA+C2ATAqQAtBkAuABg");
	this.shape_8.setTransform(50.4,64.2,1.164,1.164);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#023E8F").s().p("AlkFlQiTiUAAjRQAAjQCTiUQCViUDPAAQDRAACUCUQCUCUAADQQAADRiUCUQiUCUjRgBQjPABiViUg");
	this.shape_9.setTransform(50.6,50.5);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.onda_final5, rect = new cjs.Rectangle(0.2,0,100.9,100.9), [rect]);


(lib.onda_final4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlkFlQiTiUAAjRQAAjQCTiUQCViUDPAAQDRAACUCUQCUCUAADQQAADRiUCUQiUCUjRgBQjPABiViUg");
	mask.setTransform(50.6,50.5);

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmSFFQA5gCAzhjQAcg3A7ipQA3idAlhBQA7hmBDAAQBEAAA7BmQApBFA0CZQA+C2ATAqQAtBkAtABg");
	this.shape.setTransform(50.3,68.5,1.004,1.004);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AmSFFQA5gCAzhjQAcg3A7ipQA3idAlhCQA7hlBDAAQBEAAA7BlQApBGA0CZQA+C2ATAqQAtBkAuABg");
	this.shape_1.setTransform(50.3,68.5,1.004,1.004);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(2,1,1).p("AmSFFQA5gCAzhjQAcg3A7ipQA3idAlhBQA7hmBDAAQBEAAA7BmQApBFA0CZQA+C2ATAqQAtBkAtABg");
	this.shape_2.setTransform(50.5,57.5,1.255,1.376);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,0,0,0.008)").ss(1,1,1).p("AmSFFQA5gCAzhjQAcg3A7ipQA3idAlhBQA7hmBDAAQBEAAA7BmQApBFA0CZQA+C2ATAqQAtBkAtABg");
	this.shape_3.setTransform(50.4,64.2,1.164,1.164);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#02BAFF").s().p("AmSFFQA5gCAzhjQAcg3A7ipQA3idAlhCQA7hlBDAAQBEAAA7BlQApBGA0CZQA+C2ATAqQAtBkAuABg");
	this.shape_4.setTransform(50.4,64.2,1.164,1.164);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#023E8F").s().p("AlkFlQiTiUAAjRQAAjQCTiUQCViUDPAAQDRAACUCUQCUCUAADQQAADRiUCUQiUCUjRgBQjPABiViUg");
	this.shape_5.setTransform(50.6,50.5);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.onda_final4, rect = new cjs.Rectangle(0.2,0,100.9,100.9), [rect]);


(lib.onda_final3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlkFlQiTiUAAjRQAAjQCTiUQCViUDPAAQDRAACUCUQCUCUAADQQAADRiUCUQiUCUjRgBQjPABiViUg");
	mask.setTransform(50.6,50.5);

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmSFFQA5gCAzhjQAcg3A7ipQA3idAlhBQA7hmBDAAQBEAAA7BmQApBFA0CZQA+C2ATAqQAtBkAtABg");
	this.shape.setTransform(50.3,68.5,1.004,1.004);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AmSFFQA5gCAzhjQAcg3A7ipQA3idAlhCQA7hlBDAAQBEAAA7BlQApBGA0CZQA+C2ATAqQAtBkAuABg");
	this.shape_1.setTransform(50.3,68.5,1.004,1.004);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(2,1,1).p("AmSFFQA5gCAzhjQAcg3A7ipQA3idAlhBQA7hmBDAAQBEAAA7BmQApBFA0CZQA+C2ATAqQAtBkAtABg");
	this.shape_2.setTransform(50.5,57.5,1.255,1.376);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,0,0,0.008)").ss(1,1,1).p("AmSFFQA5gCAzhjQAcg3A7ipQA3idAlhBQA7hmBDAAQBEAAA7BmQApBFA0CZQA+C2ATAqQAtBkAtABg");
	this.shape_3.setTransform(50.4,64.2,1.164,1.164);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#02BAFF").s().p("AmSFFQA5gCAzhjQAcg3A7ipQA3idAlhCQA7hlBDAAQBEAAA7BlQApBGA0CZQA+C2ATAqQAtBkAuABg");
	this.shape_4.setTransform(50.4,64.2,1.164,1.164);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#023E8F").s().p("AlkFlQiTiUAAjRQAAjQCTiUQCViUDPAAQDRAACUCUQCUCUAADQQAADRiUCUQiUCUjRgBQjPABiViUg");
	this.shape_5.setTransform(50.6,50.5);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.onda_final3, rect = new cjs.Rectangle(0.2,0,100.9,100.9), [rect]);


(lib.onda_final2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlkFlQiTiUAAjRQAAjQCTiUQCViUDPAAQDRAACUCUQCUCUAADQQAADRiUCUQiUCUjRgBQjPABiViUg");
	mask.setTransform(50.6,50.5);

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmSFFQA5gCAzhjQAcg3A7ipQA3idAlhBQA7hmBDAAQBEAAA7BmQApBFA0CZQA+C2ATAqQAtBkAtABg");
	this.shape.setTransform(50.3,68.5,1.004,1.004);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AmSFFQA5gCAzhjQAcg3A7ipQA3idAlhCQA7hlBDAAQBEAAA7BlQApBGA0CZQA+C2ATAqQAtBkAuABg");
	this.shape_1.setTransform(50.3,68.5,1.004,1.004);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(2,1,1).p("AmSFFQA5gCAzhjQAcg3A7ipQA3idAlhBQA7hmBDAAQBEAAA7BmQApBFA0CZQA+C2ATAqQAtBkAtABg");
	this.shape_2.setTransform(50.5,57.5,1.255,1.376);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,0,0,0.008)").ss(1,1,1).p("AmSFFQA5gCAzhjQAcg3A7ipQA3idAlhBQA7hmBDAAQBEAAA7BmQApBFA0CZQA+C2ATAqQAtBkAtABg");
	this.shape_3.setTransform(50.4,64.2,1.164,1.164);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#02BAFF").s().p("AmSFFQA5gCAzhjQAcg3A7ipQA3idAlhCQA7hlBDAAQBEAAA7BlQApBGA0CZQA+C2ATAqQAtBkAuABg");
	this.shape_4.setTransform(50.4,64.2,1.164,1.164);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#023E8F").s().p("AlkFlQiTiUAAjRQAAjQCTiUQCViUDPAAQDRAACUCUQCUCUAADQQAADRiUCUQiUCUjRgBQjPABiViUg");
	this.shape_5.setTransform(50.6,50.5);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.onda_final2, rect = new cjs.Rectangle(0.2,0,100.9,100.9), [rect]);


(lib.onda_final1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlkFlQiTiUAAjRQAAjQCTiUQCViUDPAAQDRAACUCUQCUCUAADQQAADRiUCUQiUCUjRgBQjPABiViUg");
	mask.setTransform(50.6,50.5);

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.008)").ss(1,1,1).p("AmSFFQA5gCAzhjQAcg3A7ipQA3idAlhBQA7hmBDAAQBEAAA7BmQApBFA0CZQA+C2ATAqQAtBkAtABg");
	this.shape.setTransform(50.3,68.5,1.004,1.004);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmSFFQA5gCAzhjQAcg3A7ipQA3idAlhCQA7hlBDAAQBEAAA7BlQApBGA0CZQA+C2ATAqQAtBkAuABg");
	this.shape_1.setTransform(50.3,68.5,1.004,1.004);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(2,1,1).p("AmSFFQA5gCAzhjQAcg3A7ipQA3idAlhBQA7hmBDAAQBEAAA7BmQApBFA0CZQA+C2ATAqQAtBkAtABg");
	this.shape_2.setTransform(50.5,57.5,1.255,1.376);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,0,0,0.008)").ss(1,1,1).p("AmSFFQA5gCAzhjQAcg3A7ipQA3idAlhBQA7hmBDAAQBEAAA7BmQApBFA0CZQA+C2ATAqQAtBkAtABg");
	this.shape_3.setTransform(50.4,64.2,1.164,1.164);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#02BAFF").s().p("AmSFFQA5gCAzhjQAcg3A7ipQA3idAlhCQA7hlBDAAQBEAAA7BlQApBGA0CZQA+C2ATAqQAtBkAuABg");
	this.shape_4.setTransform(50.4,64.2,1.164,1.164);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#023E8F").s().p("AlkFlQiTiUAAjRQAAjQCTiUQCViUDPAAQDRAACUCUQCUCUAADQQAADRiUCUQiUCUjRgBQjPABiViUg");
	this.shape_5.setTransform(50.6,50.5);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.onda_final1, rect = new cjs.Rectangle(0.2,0,100.9,100.9), [rect]);


(lib.mousesvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mouse.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhBBNQgcgYgHgkQgGgoAYgiQAYghApgHIADgBQAogHAhAYQAiAXAIApQAHAogYAiQgXAigpAHIgVACQgkAAgcgXg");
	this.shape.setTransform(399.2,455.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjME/QgWgMgOgVQgXgjAIgoQAIgpAjgXQBphFBHhnQBGhnAah7QAJgpAjgWQAigWApAIQAoAJAXAjQAWAigJApQgjCihcCGQhdCHiJBcQgZARgeAAQgZAAgWgMg");
	this.shape_1.setTransform(443.8,421.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgBBkQgqAAgdgdQgdgeAAgpQAAgoAdgeQAdgdAqAAIAEAAQApAAAdAdQAdAeAAAoQAAApgdAeQgdAdgpAAg");
	this.shape_2.setTransform(67,149.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhGDcQgdgdAAgpIAAkqQAAgqAdgdQAdgdApAAQApAAAdAdQAeAdAAAqIAAEqQAAApgeAdQgdAdgpAAQgoAAgegdg");
	this.shape_3.setTransform(59.5,62.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhFDcQgegdAAgpIAAkqQAAgpAegeQAdgdAoAAQAqAAAdAdQAdAeAAApIAAEqQAAApgdAdQgdAdgqAAQgoAAgdgdg");
	this.shape_4.setTransform(93.1,62.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhGBJQgdgdAAgqIAAgDQAAgqAdgdQAegdAoAAQApAAAdAdQAeAeAAApIAAADQAAAqgeAdQgdAdgpAAQgpAAgdgdg");
	this.shape_5.setTransform(381.1,265.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("EARCAn7QjmAAjShaQjLhWidieQididhWjMQhYjUAAjnIAA8gQAAiuB6h7QB7h8CtAAIMMAAIAAr7QAAibg9iOQg6iIhqhqQhqhqiJg6QiOg8icAAIgiAAQibAAiOA8QiJA6hqBqQhqBqg6CIQg8COAACbMAAAA1BQAACWg7CKQg4CEhnBnQhmBmiFA5QiKA6iXAAQiWAAiKg6QiFg5hnhmQhnhng4iEQg7iKAAiWIAA1cIjiAAQgpAAgegdQgdgdAAgpIAAlTIhgAAQhkAAhGhMQhHhNAAhsIAAybQAAgpAdgeQAdgdApAAIBWAAIAAuKQAAgpAdgdQAdgeApAAIO+AAQApAAAdAeQAdAdAAApIAAOKIBWAAQApAAAdAdQAdAeAAApIAASbQAABshGBNQhHBMhkAAIhgAAIAAFTQAAApgdAdQgdAdgqAAIjiAAIAAVcQAADfCfCfQCfCeDgAAQDhAACeieQCfifAAjfMAAAg1BQAAjDBMizQBKitCFiFQCGiGCthJQCyhMDEAAIAiAAQDEAACzBMQCuBJCFCGQCGCFBJCtQBMCzAADDIAAL7IMMAAQCtAAB7B8QB7B7AACuIAAcgQAADnhZDUQhWDMidCdQidCejLBWQjTBajmAAgACeWJQAAC/BJCuQBHCpCBCCQCBCCCoBHQCtBKC9AAIFMAAQC+AACthKQCnhHCBiCQCCiCBGipQBKiuAAi/IAAtkMgiVAAAgADeozQhABAAABcIAAL1MAiVAAAIAAr1QAAhchAhAQhBhBhaAAIsPAAQADAPAAALIAAGcQAAAqgdAdQgdAdgqAAQgpAAgdgdQgdgdAAgqIAAmcQAAgOADgMIsPAAQhbAAhABBgA/hDnIHEAAIAAjvInEAAgEgkzgENQAAAZAOATQAMARAQAAIQUAAQAQAAAMgRQAOgTAAgZIAAq1IlsAAQgqAAgdgdQgdgdAAgqQAAgpAdgdQAdgdAqAAIFsAAIAAi7IxoAAgEgh6gYMIL2AAIAAsmIr2AAg");
	this.shape_6.setTransform(255.5,255.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F0F0FB").s().p("AneH3IAAvtIO9AAIAAPtg");
	this.shape_7.setTransform(76.3,60.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C9FD7").s().p("AiGDcIAAm3IENAAIAAG3g");
	this.shape_8.setTransform(95.4,266.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3C9FD7").s().p("AjfKeQg7AAgpgwQgqguAAhDIAAyaILbAAIAASaQAABDgpAuQgqAwg6AAg");
	this.shape_9.setTransform(106.1,177.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F0F0FB").s().p("AneH3IAAvtIO9AAIAAPtg");
	this.shape_10.setTransform(76.3,60.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BFBFCF").s().p("AtDJNIAAtYQAAiFBfheQBeheCDAAIQIAAQCDAABeBeQBdBeAACFIAANYg");
	this.shape_11.setTransform(417.4,241.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F0F0FB").s().p("ApTJ+QjwkhAAl2IAAvHIaGAAIAAPHQAAF2jwEhQjsEdlnBHQlmhHjtkdg");
	this.shape_12.setTransform(417.4,399.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,511,511);
p.frameBounds = [rect];


(lib.linha_do_tempo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_89 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(89).call(this.frame_89).wait(1));

	// anos
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(2,1,1).p("Ai1iAIHsAAIAACAQAAA2gmAlQgmAmg1AAInsAAIAAiBQAAg1AmgmQAmglA1AAg");
	this.shape.setTransform(54.1,12.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgnA5IAAgSQAHADAJACQAIACAIABQANgBAHgFQAHgHAAgLQAAgWgcgBIgJACIgLABIgJgEIAFg9IBAAAIAAASIguAAIgDAfIAHgBIAKgBQASAAALAKQALAIAAASQAAAUgMALQgNALgWAAQgUAAgMgGg");
	this.shape_1.setTransform(69.1,14.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgeA3QgLgIAAgQQAAgLAGgIQAFgIAOgGQgMgHgFgHQgEgIAAgJQAAgOAKgIQALgIAQAAQASAAAKAIQAKAIAAAOQAAATgXAMQAPAGAGAIQAGAIAAAKQAAAPgLAKQgLAJgUAAQgTAAgLgJgAgRAQQgFAGAAAIQAAAJAGAFQAGAFAKAAQALAAAGgFQAGgGAAgIQAAgHgFgGQgGgFgMgFIgBgBQgLAEgFAGgAgNgrQgFAEAAAHQAAAFACADIAFAHIALAGQALgEAEgFQAEgFAAgHQAAgHgFgEQgGgEgIAAQgIAAgFAEg");
	this.shape_2.setTransform(59.1,14.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgbA+IAxhpIhAAAIAAgSIBVAAIAAAOIgwBtg");
	this.shape_3.setTransform(49.1,14.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AAHA+IAAhPIAAgXIgEAFIgTAPIgKgMIAkgdIARAAIAAB7g");
	this.shape_4.setTransform(38.1,14.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#999999").ss(2,1,1).p("Ai1iAIHsAAIAACAQAAA2gmAlQgmAmg1AAInsAAIAAiBQAAg1AmgmQAmglA1AAg");
	this.shape_5.setTransform(266.8,12.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgnA5IAAgSQAHADAJACQAIACAIABQANgBAHgFQAHgHAAgLQAAgWgcgBIgJACIgLABIgJgEIAFg9IBAAAIAAASIguAAIgDAfIAHgBIAKgBQASAAALAKQALAIAAASQAAAUgMALQgNALgWAAQgUAAgMgGg");
	this.shape_6.setTransform(281.8,14.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AAKA+IAAgbIg3AAIAAgPIA3hSIATAAIAABQIARAAIAAARIgRAAIAAAbgAADgZIgeArIAlAAIAAgdIABgcIgBAAIgHAOg");
	this.shape_7.setTransform(271.9,14.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgeA3QgLgIAAgQQAAgLAGgIQAFgIAOgGQgMgHgFgHQgEgIAAgJQAAgOAKgIQALgIAQAAQASAAAKAIQAKAIAAAOQAAATgXAMQAPAGAGAIQAGAIAAAKQAAAPgLAKQgLAJgUAAQgTAAgLgJgAgRAQQgFAGAAAIQAAAJAGAFQAGAFAKAAQALAAAGgFQAGgGAAgIQAAgHgFgGQgGgFgMgFIgBgBQgLAEgFAGgAgNgrQgFAEAAAHQAAAFACADIAFAHIALAGQALgEAEgFQAEgFAAgHQAAgHgFgEQgGgEgIAAQgIAAgFAEg");
	this.shape_8.setTransform(261.8,14.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AAHA+IAAhPIAAgXIgEAFIgTAPIgKgMIAkgdIARAAIAAB7g");
	this.shape_9.setTransform(250.9,14.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#999999").ss(2,1,1).p("Ai1iAIHsAAIAACAQAAA2gmAlQgmAmg1AAInsAAIAAiBQAAg1AmgmQAmglA1AAg");
	this.shape_10.setTransform(479.4,12.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgfAwQgKgQAAggQAAgfAKgQQALgQAUAAQAVAAALAQQAKARAAAeQAAAggKARQgLAPgVAAQgUAAgLgQgAgQgjQgFALAAAYQAAAaAFAKQAFAMALAAQALAAAGgMQAFgKAAgaQAAgYgFgLQgGgLgLAAQgLAAgFALg");
	this.shape_11.setTransform(494.4,14.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgfAwQgKgQAAggQAAgfAKgQQALgQAUAAQAVAAALAQQAKARAAAeQAAAggKARQgLAPgVAAQgUAAgLgQgAgQgjQgFALAAAYQAAAaAFAKQAFAMALAAQALAAAGgMQAFgKAAgaQAAgYgFgLQgGgLgLAAQgLAAgFALg");
	this.shape_12.setTransform(484.4,14.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AghA/IAAgRQAIACAIAAQATAAAKgLQAKgLABgXIgBAAQgFAHgHAEQgHADgJAAQgRAAgJgKQgJgJAAgSQAAgUALgLQAKgMATAAQANAAAKAHQAJAGAGAMQAFANAAARQAAAkgPASQgPASgcAAIgRgBgAgQgnQgGAGAAANQAAAKAFAGQAGAFAKAAQAJAAAHgFQAHgGAAgIQAAgHgDgHQgDgHgFgDQgFgEgGAAQgLAAgFAHg");
	this.shape_13.setTransform(474.4,14.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AAHA+IAAhPIAAgXIgEAFIgTAPIgKgMIAkgdIARAAIAAB7g");
	this.shape_14.setTransform(463.5,14.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#999999").ss(2,1,1).p("Ai1iAIHsAAIAACAQAAA2gmAlQgmAmg1AAInsAAIAAiBQAAg1AmgmQAmglA1AAg");
	this.shape_15.setTransform(693.6,12.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgfAwQgKgQAAggQAAgfAKgQQALgQAUAAQAVAAALAQQAKARAAAeQAAAggKARQgLAPgVAAQgUAAgLgQgAgQgjQgFALAAAYQAAAaAFAKQAFAMALAAQALAAAGgMQAFgKAAgaQAAgYgFgLQgGgLgLAAQgLAAgFALg");
	this.shape_16.setTransform(708.6,14.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgnA5IAAgSQAHADAJACQAIACAIABQANgBAHgFQAHgHAAgLQAAgWgcgBIgJACIgLABIgJgEIAFg9IBAAAIAAASIguAAIgDAfIAHgBIAKgBQASAAALAKQALAIAAASQAAAUgMALQgNALgWAAQgUAAgMgGg");
	this.shape_17.setTransform(698.7,14.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AghA/IAAgRQAIACAIAAQATAAAKgLQAKgLABgXIgBAAQgFAHgHAEQgHADgJAAQgRAAgJgKQgJgJAAgSQAAgUALgLQAKgMATAAQANAAAKAHQAJAGAGAMQAFANAAARQAAAkgPASQgPASgcAAIgRgBgAgQgnQgGAGAAANQAAAKAFAGQAGAFAKAAQAJAAAHgFQAHgGAAgIQAAgHgDgHQgDgHgFgDQgFgEgGAAQgLAAgFAHg");
	this.shape_18.setTransform(688.6,14.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AAHA+IAAhPIAAgXIgEAFIgTAPIgKgMIAkgdIARAAIAAB7g");
	this.shape_19.setTransform(677.7,14.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#999999").ss(2,1,1).p("Ai1iAIHsAAIAACAQAAA2gmAlQgmAmg1AAInsAAIAAiBQAAg1AmgmQAmglA1AAg");
	this.shape_20.setTransform(911.5,12.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgfAwQgKgQAAggQAAgfAKgQQALgQAUAAQAVAAALAQQAKARAAAeQAAAggKARQgLAPgVAAQgUAAgLgQgAgQgjQgFALAAAYQAAAaAFAKQAFAMALAAQALAAAGgMQAFgKAAgaQAAgYgFgLQgGgLgLAAQgLAAgFALg");
	this.shape_21.setTransform(926.4,14.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AghA/IAAgRQAIACAIAAQATAAAKgLQAKgLABgXIgBAAQgFAHgHAEQgHADgJAAQgRAAgJgKQgJgJAAgSQAAgUALgLQAKgMATAAQANAAAKAHQAJAGAGAMQAFANAAARQAAAkgPASQgPASgcAAIgRgBgAgQgnQgGAGAAANQAAAKAFAGQAGAFAKAAQAJAAAHgFQAHgGAAgIQAAgHgDgHQgDgHgFgDQgFgEgGAAQgLAAgFAHg");
	this.shape_22.setTransform(916.5,14.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AghA/IAAgRQAIACAIAAQATAAAKgLQAKgLABgXIgBAAQgFAHgHAEQgHADgJAAQgRAAgJgKQgJgJAAgSQAAgUALgLQAKgMATAAQANAAAKAHQAJAGAGAMQAFANAAARQAAAkgPASQgPASgcAAIgRgBgAgQgnQgGAGAAANQAAAKAFAGQAGAFAKAAQAJAAAHgFQAHgGAAgIQAAgHgDgHQgDgHgFgDQgFgEgGAAQgLAAgFAHg");
	this.shape_23.setTransform(906.5,14.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AAHA+IAAhPIAAgXIgEAFIgTAPIgKgMIAkgdIARAAIAAB7g");
	this.shape_24.setTransform(895.5,14.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#999999").ss(2,1,1).p("Ai1iAIHsAAIAACAQAAA2gmAlQgmAmg1AAInsAAIAAiBQAAg1AmgmQAmglA1AAg");
	this.shape_25.setTransform(1114,12.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AgfAwQgKgQAAggQAAgfAKgQQALgQAUAAQAVAAALAQQAKARAAAeQAAAggKARQgLAPgVAAQgUAAgLgQgAgQgjQgFALAAAYQAAAaAFAKQAFAMALAAQALAAAGgMQAFgKAAgaQAAgYgFgLQgGgLgLAAQgLAAgFALg");
	this.shape_26.setTransform(1129,14.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AgpA/IAAgPIAgggIASgUQAFgGACgFQACgGAAgGQAAgIgFgFQgFgFgIAAQgHAAgHADQgHACgJAHIgKgNQAKgJAKgDQAKgEAKAAQARAAAKAJQALAJAAAPQAAAJgDAHQgDAIgGAHQgHAIgOAOIgVAVIAAABIA6AAIAAARg");
	this.shape_27.setTransform(1119,14.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AgfAwQgKgQAAggQAAgfAKgQQALgQAUAAQAVAAALAQQAKARAAAeQAAAggKARQgLAPgVAAQgUAAgLgQgAgQgjQgFALAAAYQAAAaAFAKQAFAMALAAQALAAAGgMQAFgKAAgaQAAgYgFgLQgGgLgLAAQgLAAgFALg");
	this.shape_28.setTransform(1109,14.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AgpA/IAAgPIAgggIASgUQAFgGACgFQACgGAAgGQAAgIgFgFQgFgFgIAAQgHAAgHADQgHACgJAHIgKgNQAKgJAKgDQAKgEAKAAQARAAAKAJQALAJAAAPQAAAJgDAHQgDAIgGAHQgHAIgOAOIgVAVIAAABIA6AAIAAARg");
	this.shape_29.setTransform(1099.1,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},89).wait(1));

	// 1
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#47B9FF").ss(2,1,1).p("EhZQAAAMCyhAAA");
	this.shape_30.setTransform(54.1,211.6,0.012,1,90);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#47B9FF").ss(2,1,1).p("AAABOIAAib");
	this.shape_31.setTransform(54.1,210.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#47B9FF").ss(2,1,1).p("AAABYIAAiv");
	this.shape_32.setTransform(54.1,209.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#47B9FF").ss(2,1,1).p("AAABiIAAjD");
	this.shape_33.setTransform(54.1,208.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#47B9FF").ss(2,1,1).p("AAABsIAAjX");
	this.shape_34.setTransform(54.1,207.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAB2IAAjr");
	this.shape_35.setTransform(54.1,206.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#47B9FF").ss(2,1,1).p("AAACAIAAj/");
	this.shape_36.setTransform(54.1,205.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#47B9FF").ss(2,1,1).p("AAACKIAAkT");
	this.shape_37.setTransform(54.1,204.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#47B9FF").ss(2,1,1).p("AAACUIAAkn");
	this.shape_38.setTransform(54.1,203.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#47B9FF").ss(2,1,1).p("AAACeIAAk7");
	this.shape_39.setTransform(54.1,202.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#47B9FF").ss(2,1,1).p("AAACoIAAlP");
	this.shape_40.setTransform(54.1,201.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#47B9FF").ss(2,1,1).p("AAACyIAAlj");
	this.shape_41.setTransform(54.1,200.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAC8IAAl3");
	this.shape_42.setTransform(54.1,199.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#47B9FF").ss(2,1,1).p("AAADGIAAmL");
	this.shape_43.setTransform(54.1,198.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#47B9FF").ss(2,1,1).p("AAADQIAAmf");
	this.shape_44.setTransform(54.1,197.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#47B9FF").ss(2,1,1).p("AAADaIAAmz");
	this.shape_45.setTransform(54.1,196.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#47B9FF").ss(2,1,1).p("AAADkIAAnH");
	this.shape_46.setTransform(54.1,195.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#47B9FF").ss(2,1,1).p("AAADuIAAnb");
	this.shape_47.setTransform(54.1,194.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAD4IAAnv");
	this.shape_48.setTransform(54.1,193.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAECIAAoD");
	this.shape_49.setTransform(54.1,192.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAEMIAAoX");
	this.shape_50.setTransform(54.1,191.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAEWIAAor");
	this.shape_51.setTransform(54.1,190.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAEgIAAo/");
	this.shape_52.setTransform(54.1,189.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAErIAApV");
	this.shape_53.setTransform(54.1,188.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAE1IAApp");
	this.shape_54.setTransform(54.1,187.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAE/IAAp9");
	this.shape_55.setTransform(54.1,186.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAFJIAAqR");
	this.shape_56.setTransform(54.1,185.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAFTIAAql");
	this.shape_57.setTransform(54.1,184.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAFdIAAq5");
	this.shape_58.setTransform(54.1,183.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAFnIAArN");
	this.shape_59.setTransform(54.1,182.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAFxIAArh");
	this.shape_60.setTransform(54.1,181.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAF7IAAr1");
	this.shape_61.setTransform(54.1,180.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAGFIAAsJ");
	this.shape_62.setTransform(54.1,179.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAGPIAAsd");
	this.shape_63.setTransform(54.1,178.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAGZIAAsx");
	this.shape_64.setTransform(54.1,177.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAGjIAAtF");
	this.shape_65.setTransform(54.1,176.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAGtIAAtZ");
	this.shape_66.setTransform(54.1,175.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAG3IAAtt");
	this.shape_67.setTransform(54.1,174.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAHBIAAuB");
	this.shape_68.setTransform(54.1,173.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAHLIAAuV");
	this.shape_69.setTransform(54.1,172.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAHVIAAup");
	this.shape_70.setTransform(54.1,171.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAHfIAAu9");
	this.shape_71.setTransform(54.1,170.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAHpIAAvR");
	this.shape_72.setTransform(54.1,169.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAHzIAAvl");
	this.shape_73.setTransform(54.1,168.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAH9IAAv5");
	this.shape_74.setTransform(54.1,167.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAIHIAAwN");
	this.shape_75.setTransform(54.1,166.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAIRIAAwh");
	this.shape_76.setTransform(54.1,165.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAIbIAAw1");
	this.shape_77.setTransform(54.1,164.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAIlIAAxJ");
	this.shape_78.setTransform(54.1,163.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAIvIAAxd");
	this.shape_79.setTransform(54.1,162.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAI5IAAxx");
	this.shape_80.setTransform(54.1,161.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAJDIAAyF");
	this.shape_81.setTransform(54.1,160.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAJNIAAyZ");
	this.shape_82.setTransform(54.1,159.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAJXIAAyt");
	this.shape_83.setTransform(54.1,158.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAJhIAAzB");
	this.shape_84.setTransform(54.1,157.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAJrIAAzV");
	this.shape_85.setTransform(54.1,156.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAJ1IAAzp");
	this.shape_86.setTransform(54.1,155.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAJ/IAAz9");
	this.shape_87.setTransform(54.1,154.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAKJIAA0R");
	this.shape_88.setTransform(54.1,153.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAKTIAA0l");
	this.shape_89.setTransform(54.1,152.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAKdIAA05");
	this.shape_90.setTransform(54.1,151.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAKnIAA1N");
	this.shape_91.setTransform(54.1,150.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAKxIAA1h");
	this.shape_92.setTransform(54.1,149.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAK7IAA11");
	this.shape_93.setTransform(54.1,148.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#47B9FF").ss(2,1,1).p("AAALFIAA2J");
	this.shape_94.setTransform(54.1,147.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#47B9FF").ss(2,1,1).p("AAALPIAA2d");
	this.shape_95.setTransform(54.1,146.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#47B9FF").ss(2,1,1).p("AAALZIAA2x");
	this.shape_96.setTransform(54.1,145.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#47B9FF").ss(2,1,1).p("AAALjIAA3F");
	this.shape_97.setTransform(54.1,144.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#47B9FF").ss(2,1,1).p("AAALtIAA3Z");
	this.shape_98.setTransform(54.1,143.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAL3IAA3t");
	this.shape_99.setTransform(54.1,142.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAMBIAA4B");
	this.shape_100.setTransform(54.1,141.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAMLIAA4V");
	this.shape_101.setTransform(54.1,140.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAMVIAA4p");
	this.shape_102.setTransform(54.1,139.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAMfIAA49");
	this.shape_103.setTransform(54.1,138.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAMpIAA5R");
	this.shape_104.setTransform(54.1,137.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAMzIAA5l");
	this.shape_105.setTransform(54.1,136.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAM9IAA55");
	this.shape_106.setTransform(54.1,135.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#47B9FF").ss(2,1,1).p("AAANHIAA6N");
	this.shape_107.setTransform(54.1,134.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#47B9FF").ss(2,1,1).p("AAANRIAA6h");
	this.shape_108.setTransform(54.1,133.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#47B9FF").ss(2,1,1).p("AAANbIAA61");
	this.shape_109.setTransform(54.1,132.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#47B9FF").ss(2,1,1).p("AAANlIAA7J");
	this.shape_110.setTransform(54.1,131.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#47B9FF").ss(2,1,1).p("AAANvIAA7d");
	this.shape_111.setTransform(54.1,130.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAN5IAA7x");
	this.shape_112.setTransform(54.1,129.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAODIAA8F");
	this.shape_113.setTransform(54.1,128.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAONIAA8Z");
	this.shape_114.setTransform(54.1,127.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAOXIAA8t");
	this.shape_115.setTransform(54.1,126.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAOhIAA9B");
	this.shape_116.setTransform(54.1,125.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAOrIAA9V");
	this.shape_117.setTransform(54.1,124.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAO1IAA9p");
	this.shape_118.setTransform(54.1,123.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30,p:{scaleX:0.012,y:211.6}}]}).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_30,p:{scaleX:0.168,y:122.6}}]},1).wait(1));

	// 2
	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#47B9FF").ss(2,1,1).p("EhZQAAAMCyhAAA");
	this.shape_119.setTransform(266.8,211.6,0.012,1,90);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#47B9FF").ss(2,1,1).p("AAABOIAAib");
	this.shape_120.setTransform(266.8,210.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#47B9FF").ss(2,1,1).p("AAABYIAAiv");
	this.shape_121.setTransform(266.8,209.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#47B9FF").ss(2,1,1).p("AAABiIAAjD");
	this.shape_122.setTransform(266.8,208.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#47B9FF").ss(2,1,1).p("AAABsIAAjX");
	this.shape_123.setTransform(266.8,207.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAB2IAAjr");
	this.shape_124.setTransform(266.8,206.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#47B9FF").ss(2,1,1).p("AAACAIAAj/");
	this.shape_125.setTransform(266.8,205.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#47B9FF").ss(2,1,1).p("AAACKIAAkT");
	this.shape_126.setTransform(266.8,204.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#47B9FF").ss(2,1,1).p("AAACUIAAkn");
	this.shape_127.setTransform(266.8,203.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#47B9FF").ss(2,1,1).p("AAACeIAAk7");
	this.shape_128.setTransform(266.8,202.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#47B9FF").ss(2,1,1).p("AAACoIAAlP");
	this.shape_129.setTransform(266.8,201.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#47B9FF").ss(2,1,1).p("AAACyIAAlj");
	this.shape_130.setTransform(266.8,200.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAC8IAAl3");
	this.shape_131.setTransform(266.8,199.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#47B9FF").ss(2,1,1).p("AAADGIAAmL");
	this.shape_132.setTransform(266.8,198.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#47B9FF").ss(2,1,1).p("AAADQIAAmf");
	this.shape_133.setTransform(266.8,197.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#47B9FF").ss(2,1,1).p("AAADaIAAmz");
	this.shape_134.setTransform(266.8,196.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#47B9FF").ss(2,1,1).p("AAADkIAAnH");
	this.shape_135.setTransform(266.8,195.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#47B9FF").ss(2,1,1).p("AAADuIAAnb");
	this.shape_136.setTransform(266.8,194.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAD4IAAnv");
	this.shape_137.setTransform(266.8,193.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAECIAAoD");
	this.shape_138.setTransform(266.8,192.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAEMIAAoX");
	this.shape_139.setTransform(266.8,191.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAEWIAAor");
	this.shape_140.setTransform(266.8,190.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAEgIAAo/");
	this.shape_141.setTransform(266.8,189.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAErIAApV");
	this.shape_142.setTransform(266.8,188.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAE1IAApp");
	this.shape_143.setTransform(266.8,187.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAE/IAAp9");
	this.shape_144.setTransform(266.8,186.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAFJIAAqR");
	this.shape_145.setTransform(266.8,185.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAFTIAAql");
	this.shape_146.setTransform(266.8,184.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAFdIAAq5");
	this.shape_147.setTransform(266.8,183.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAFnIAArN");
	this.shape_148.setTransform(266.8,182.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAFxIAArh");
	this.shape_149.setTransform(266.8,181.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAF7IAAr1");
	this.shape_150.setTransform(266.8,180.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAGFIAAsJ");
	this.shape_151.setTransform(266.8,179.6);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAGPIAAsd");
	this.shape_152.setTransform(266.8,178.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAGZIAAsx");
	this.shape_153.setTransform(266.8,177.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAGjIAAtF");
	this.shape_154.setTransform(266.8,176.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAGtIAAtZ");
	this.shape_155.setTransform(266.8,175.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAG3IAAtt");
	this.shape_156.setTransform(266.8,174.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAHBIAAuB");
	this.shape_157.setTransform(266.8,173.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAHLIAAuV");
	this.shape_158.setTransform(266.8,172.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAHVIAAup");
	this.shape_159.setTransform(266.8,171.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAHfIAAu9");
	this.shape_160.setTransform(266.8,170.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAHpIAAvR");
	this.shape_161.setTransform(266.8,169.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAHzIAAvl");
	this.shape_162.setTransform(266.8,168.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAH9IAAv5");
	this.shape_163.setTransform(266.8,167.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAIHIAAwN");
	this.shape_164.setTransform(266.8,166.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAIRIAAwh");
	this.shape_165.setTransform(266.8,165.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAIbIAAw1");
	this.shape_166.setTransform(266.8,164.6);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAIlIAAxJ");
	this.shape_167.setTransform(266.8,163.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAIvIAAxd");
	this.shape_168.setTransform(266.8,162.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAI5IAAxx");
	this.shape_169.setTransform(266.8,161.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAJDIAAyF");
	this.shape_170.setTransform(266.8,160.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAJNIAAyZ");
	this.shape_171.setTransform(266.8,159.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAJXIAAyt");
	this.shape_172.setTransform(266.8,158.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAJhIAAzB");
	this.shape_173.setTransform(266.8,157.6);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAJrIAAzV");
	this.shape_174.setTransform(266.8,156.6);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAJ1IAAzp");
	this.shape_175.setTransform(266.8,155.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAJ/IAAz9");
	this.shape_176.setTransform(266.8,154.6);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAKJIAA0R");
	this.shape_177.setTransform(266.8,153.6);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAKTIAA0l");
	this.shape_178.setTransform(266.8,152.6);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAKdIAA05");
	this.shape_179.setTransform(266.8,151.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAKnIAA1N");
	this.shape_180.setTransform(266.8,150.6);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAKxIAA1h");
	this.shape_181.setTransform(266.8,149.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAK7IAA11");
	this.shape_182.setTransform(266.8,148.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#47B9FF").ss(2,1,1).p("AAALFIAA2J");
	this.shape_183.setTransform(266.8,147.6);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#47B9FF").ss(2,1,1).p("AAALPIAA2d");
	this.shape_184.setTransform(266.8,146.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#47B9FF").ss(2,1,1).p("AAALZIAA2x");
	this.shape_185.setTransform(266.8,145.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#47B9FF").ss(2,1,1).p("AAALjIAA3F");
	this.shape_186.setTransform(266.8,144.6);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#47B9FF").ss(2,1,1).p("AAALtIAA3Z");
	this.shape_187.setTransform(266.8,143.6);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAL3IAA3t");
	this.shape_188.setTransform(266.8,142.6);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAMBIAA4B");
	this.shape_189.setTransform(266.8,141.6);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAMLIAA4V");
	this.shape_190.setTransform(266.8,140.6);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAMVIAA4p");
	this.shape_191.setTransform(266.8,139.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAMfIAA49");
	this.shape_192.setTransform(266.8,138.6);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAMpIAA5R");
	this.shape_193.setTransform(266.8,137.6);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAMzIAA5l");
	this.shape_194.setTransform(266.8,136.6);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAM9IAA55");
	this.shape_195.setTransform(266.8,135.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#47B9FF").ss(2,1,1).p("AAANHIAA6N");
	this.shape_196.setTransform(266.8,134.6);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#47B9FF").ss(2,1,1).p("AAANRIAA6h");
	this.shape_197.setTransform(266.8,133.6);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#47B9FF").ss(2,1,1).p("AAANbIAA61");
	this.shape_198.setTransform(266.8,132.6);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#47B9FF").ss(2,1,1).p("AAANlIAA7J");
	this.shape_199.setTransform(266.8,131.6);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#47B9FF").ss(2,1,1).p("AAANvIAA7d");
	this.shape_200.setTransform(266.8,130.6);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAN5IAA7x");
	this.shape_201.setTransform(266.8,129.6);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAODIAA8F");
	this.shape_202.setTransform(266.8,128.6);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAONIAA8Z");
	this.shape_203.setTransform(266.8,127.6);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAOXIAA8t");
	this.shape_204.setTransform(266.8,126.6);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAOhIAA9B");
	this.shape_205.setTransform(266.8,125.6);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAOrIAA9V");
	this.shape_206.setTransform(266.8,124.6);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAO1IAA9p");
	this.shape_207.setTransform(266.8,123.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_119,p:{scaleX:0.012,y:211.6}}]}).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_119,p:{scaleX:0.168,y:122.6}}]},1).wait(1));

	// 3
	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#47B9FF").ss(2,1,1).p("EhZQAAAMCyhAAA");
	this.shape_208.setTransform(479.4,211.6,0.012,1,90);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#47B9FF").ss(2,1,1).p("AAABOIAAib");
	this.shape_209.setTransform(479.4,210.6);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#47B9FF").ss(2,1,1).p("AAABYIAAiv");
	this.shape_210.setTransform(479.4,209.6);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#47B9FF").ss(2,1,1).p("AAABiIAAjD");
	this.shape_211.setTransform(479.4,208.6);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#47B9FF").ss(2,1,1).p("AAABsIAAjX");
	this.shape_212.setTransform(479.4,207.6);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAB2IAAjr");
	this.shape_213.setTransform(479.4,206.6);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#47B9FF").ss(2,1,1).p("AAACAIAAj/");
	this.shape_214.setTransform(479.4,205.6);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#47B9FF").ss(2,1,1).p("AAACKIAAkT");
	this.shape_215.setTransform(479.4,204.6);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#47B9FF").ss(2,1,1).p("AAACUIAAkn");
	this.shape_216.setTransform(479.4,203.6);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#47B9FF").ss(2,1,1).p("AAACeIAAk7");
	this.shape_217.setTransform(479.4,202.6);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#47B9FF").ss(2,1,1).p("AAACoIAAlP");
	this.shape_218.setTransform(479.4,201.6);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#47B9FF").ss(2,1,1).p("AAACyIAAlj");
	this.shape_219.setTransform(479.4,200.6);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAC8IAAl3");
	this.shape_220.setTransform(479.4,199.6);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#47B9FF").ss(2,1,1).p("AAADGIAAmL");
	this.shape_221.setTransform(479.4,198.6);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#47B9FF").ss(2,1,1).p("AAADQIAAmf");
	this.shape_222.setTransform(479.4,197.6);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#47B9FF").ss(2,1,1).p("AAADaIAAmz");
	this.shape_223.setTransform(479.4,196.6);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#47B9FF").ss(2,1,1).p("AAADkIAAnH");
	this.shape_224.setTransform(479.4,195.6);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#47B9FF").ss(2,1,1).p("AAADuIAAnb");
	this.shape_225.setTransform(479.4,194.6);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAD4IAAnv");
	this.shape_226.setTransform(479.4,193.6);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAECIAAoD");
	this.shape_227.setTransform(479.4,192.6);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAEMIAAoX");
	this.shape_228.setTransform(479.4,191.6);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAEWIAAor");
	this.shape_229.setTransform(479.4,190.6);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAEgIAAo/");
	this.shape_230.setTransform(479.4,189.6);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAErIAApV");
	this.shape_231.setTransform(479.4,188.6);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAE1IAApp");
	this.shape_232.setTransform(479.4,187.6);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAE/IAAp9");
	this.shape_233.setTransform(479.4,186.6);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAFJIAAqR");
	this.shape_234.setTransform(479.4,185.6);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAFTIAAql");
	this.shape_235.setTransform(479.4,184.6);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAFdIAAq5");
	this.shape_236.setTransform(479.4,183.6);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAFnIAArN");
	this.shape_237.setTransform(479.4,182.6);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAFxIAArh");
	this.shape_238.setTransform(479.4,181.6);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAF7IAAr1");
	this.shape_239.setTransform(479.4,180.6);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAGFIAAsJ");
	this.shape_240.setTransform(479.4,179.6);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAGPIAAsd");
	this.shape_241.setTransform(479.4,178.6);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAGZIAAsx");
	this.shape_242.setTransform(479.4,177.6);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAGjIAAtF");
	this.shape_243.setTransform(479.4,176.6);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAGtIAAtZ");
	this.shape_244.setTransform(479.4,175.6);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAG3IAAtt");
	this.shape_245.setTransform(479.4,174.6);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAHBIAAuB");
	this.shape_246.setTransform(479.4,173.6);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAHLIAAuV");
	this.shape_247.setTransform(479.4,172.6);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAHVIAAup");
	this.shape_248.setTransform(479.4,171.6);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAHfIAAu9");
	this.shape_249.setTransform(479.4,170.6);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAHpIAAvR");
	this.shape_250.setTransform(479.4,169.6);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAHzIAAvl");
	this.shape_251.setTransform(479.4,168.6);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAH9IAAv5");
	this.shape_252.setTransform(479.4,167.6);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAIHIAAwN");
	this.shape_253.setTransform(479.4,166.6);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAIRIAAwh");
	this.shape_254.setTransform(479.4,165.6);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAIbIAAw1");
	this.shape_255.setTransform(479.4,164.6);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAIlIAAxJ");
	this.shape_256.setTransform(479.4,163.6);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAIvIAAxd");
	this.shape_257.setTransform(479.4,162.6);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAI5IAAxx");
	this.shape_258.setTransform(479.4,161.6);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAJDIAAyF");
	this.shape_259.setTransform(479.4,160.6);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAJNIAAyZ");
	this.shape_260.setTransform(479.4,159.6);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAJXIAAyt");
	this.shape_261.setTransform(479.4,158.6);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAJhIAAzB");
	this.shape_262.setTransform(479.4,157.6);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAJrIAAzV");
	this.shape_263.setTransform(479.4,156.6);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAJ1IAAzp");
	this.shape_264.setTransform(479.4,155.6);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAJ/IAAz9");
	this.shape_265.setTransform(479.4,154.6);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAKJIAA0R");
	this.shape_266.setTransform(479.4,153.6);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAKTIAA0l");
	this.shape_267.setTransform(479.4,152.6);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAKdIAA05");
	this.shape_268.setTransform(479.4,151.6);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAKnIAA1N");
	this.shape_269.setTransform(479.4,150.6);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAKxIAA1h");
	this.shape_270.setTransform(479.4,149.6);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAK7IAA11");
	this.shape_271.setTransform(479.4,148.6);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#47B9FF").ss(2,1,1).p("AAALFIAA2J");
	this.shape_272.setTransform(479.4,147.6);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#47B9FF").ss(2,1,1).p("AAALPIAA2d");
	this.shape_273.setTransform(479.4,146.6);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#47B9FF").ss(2,1,1).p("AAALZIAA2x");
	this.shape_274.setTransform(479.4,145.6);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#47B9FF").ss(2,1,1).p("AAALjIAA3F");
	this.shape_275.setTransform(479.4,144.6);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#47B9FF").ss(2,1,1).p("AAALtIAA3Z");
	this.shape_276.setTransform(479.4,143.6);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAL3IAA3t");
	this.shape_277.setTransform(479.4,142.6);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAMBIAA4B");
	this.shape_278.setTransform(479.4,141.6);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAMLIAA4V");
	this.shape_279.setTransform(479.4,140.6);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAMVIAA4p");
	this.shape_280.setTransform(479.4,139.6);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAMfIAA49");
	this.shape_281.setTransform(479.4,138.6);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAMpIAA5R");
	this.shape_282.setTransform(479.4,137.6);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAMzIAA5l");
	this.shape_283.setTransform(479.4,136.6);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAM9IAA55");
	this.shape_284.setTransform(479.4,135.6);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#47B9FF").ss(2,1,1).p("AAANHIAA6N");
	this.shape_285.setTransform(479.4,134.6);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#47B9FF").ss(2,1,1).p("AAANRIAA6h");
	this.shape_286.setTransform(479.4,133.6);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#47B9FF").ss(2,1,1).p("AAANbIAA61");
	this.shape_287.setTransform(479.4,132.6);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#47B9FF").ss(2,1,1).p("AAANlIAA7J");
	this.shape_288.setTransform(479.4,131.6);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#47B9FF").ss(2,1,1).p("AAANvIAA7d");
	this.shape_289.setTransform(479.4,130.6);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAN5IAA7x");
	this.shape_290.setTransform(479.4,129.6);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAODIAA8F");
	this.shape_291.setTransform(479.4,128.6);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAONIAA8Z");
	this.shape_292.setTransform(479.4,127.6);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAOXIAA8t");
	this.shape_293.setTransform(479.4,126.6);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAOhIAA9B");
	this.shape_294.setTransform(479.4,125.6);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAOrIAA9V");
	this.shape_295.setTransform(479.4,124.6);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAO1IAA9p");
	this.shape_296.setTransform(479.4,123.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_208,p:{scaleX:0.012,y:211.6}}]}).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_208,p:{scaleX:0.168,y:122.6}}]},1).wait(1));

	// 4
	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#47B9FF").ss(2,1,1).p("EhZQAAAMCyhAAA");
	this.shape_297.setTransform(694.6,211.7,0.012,1,90);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#47B9FF").ss(2,1,1).p("AAABPIAAid");
	this.shape_298.setTransform(694.6,210.7);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#47B9FF").ss(2,1,1).p("AAABZIAAix");
	this.shape_299.setTransform(694.6,209.7);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#47B9FF").ss(2,1,1).p("AAABjIAAjF");
	this.shape_300.setTransform(694.6,208.7);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("#47B9FF").ss(2,1,1).p("AAABtIAAjZ");
	this.shape_301.setTransform(694.6,207.7);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAB3IAAjt");
	this.shape_302.setTransform(694.6,206.7);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#47B9FF").ss(2,1,1).p("AAACBIAAkB");
	this.shape_303.setTransform(694.6,205.7);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("#47B9FF").ss(2,1,1).p("AAACLIAAkV");
	this.shape_304.setTransform(694.6,204.7);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("#47B9FF").ss(2,1,1).p("AAACVIAAkp");
	this.shape_305.setTransform(694.6,203.7);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("#47B9FF").ss(2,1,1).p("AAACfIAAk9");
	this.shape_306.setTransform(694.6,202.7);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("#47B9FF").ss(2,1,1).p("AAACpIAAlR");
	this.shape_307.setTransform(694.6,201.7);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("#47B9FF").ss(2,1,1).p("AAACzIAAll");
	this.shape_308.setTransform(694.6,200.7);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAC9IAAl5");
	this.shape_309.setTransform(694.6,199.7);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("#47B9FF").ss(2,1,1).p("AAADHIAAmN");
	this.shape_310.setTransform(694.6,198.7);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f().s("#47B9FF").ss(2,1,1).p("AAADRIAAmh");
	this.shape_311.setTransform(694.6,197.7);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f().s("#47B9FF").ss(2,1,1).p("AAADbIAAm1");
	this.shape_312.setTransform(694.6,196.7);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f().s("#47B9FF").ss(2,1,1).p("AAADlIAAnJ");
	this.shape_313.setTransform(694.6,195.7);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f().s("#47B9FF").ss(2,1,1).p("AAADvIAAnd");
	this.shape_314.setTransform(694.6,194.7);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAD5IAAnx");
	this.shape_315.setTransform(694.6,193.7);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAEDIAAoF");
	this.shape_316.setTransform(694.6,192.7);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAENIAAoZ");
	this.shape_317.setTransform(694.6,191.7);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAEXIAAot");
	this.shape_318.setTransform(694.6,190.7);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAEhIAApB");
	this.shape_319.setTransform(694.6,189.7);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAErIAApV");
	this.shape_320.setTransform(694.6,188.7);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAE1IAApp");
	this.shape_321.setTransform(694.6,187.7);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAE/IAAp9");
	this.shape_322.setTransform(694.6,186.7);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAFJIAAqR");
	this.shape_323.setTransform(694.6,185.7);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAFTIAAql");
	this.shape_324.setTransform(694.6,184.7);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAFdIAAq5");
	this.shape_325.setTransform(694.6,183.7);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAFnIAArN");
	this.shape_326.setTransform(694.6,182.7);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAFxIAArh");
	this.shape_327.setTransform(694.6,181.7);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAF7IAAr1");
	this.shape_328.setTransform(694.6,180.7);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAGFIAAsJ");
	this.shape_329.setTransform(694.6,179.7);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAGPIAAsd");
	this.shape_330.setTransform(694.6,178.7);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAGZIAAsx");
	this.shape_331.setTransform(694.6,177.7);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAGjIAAtF");
	this.shape_332.setTransform(694.6,176.7);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAGtIAAtZ");
	this.shape_333.setTransform(694.6,175.7);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAG3IAAtt");
	this.shape_334.setTransform(694.6,174.7);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAHBIAAuB");
	this.shape_335.setTransform(694.6,173.7);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAHLIAAuV");
	this.shape_336.setTransform(694.6,172.7);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAHVIAAup");
	this.shape_337.setTransform(694.6,171.7);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAHfIAAu9");
	this.shape_338.setTransform(694.6,170.7);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAHpIAAvR");
	this.shape_339.setTransform(694.6,169.7);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAHzIAAvl");
	this.shape_340.setTransform(694.6,168.7);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAH9IAAv5");
	this.shape_341.setTransform(694.6,167.7);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAIHIAAwN");
	this.shape_342.setTransform(694.6,166.6);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAIRIAAwh");
	this.shape_343.setTransform(694.6,165.6);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAIbIAAw1");
	this.shape_344.setTransform(694.6,164.6);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAIlIAAxJ");
	this.shape_345.setTransform(694.6,163.6);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAIvIAAxd");
	this.shape_346.setTransform(694.6,162.6);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAI5IAAxx");
	this.shape_347.setTransform(694.6,161.6);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAJDIAAyF");
	this.shape_348.setTransform(694.6,160.6);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAJNIAAyZ");
	this.shape_349.setTransform(694.6,159.6);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAJXIAAyt");
	this.shape_350.setTransform(694.6,158.6);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAJhIAAzB");
	this.shape_351.setTransform(694.6,157.6);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAJrIAAzV");
	this.shape_352.setTransform(694.6,156.6);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAJ1IAAzp");
	this.shape_353.setTransform(694.6,155.6);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAJ/IAAz9");
	this.shape_354.setTransform(694.6,154.6);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAKJIAA0R");
	this.shape_355.setTransform(694.6,153.6);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAKTIAA0l");
	this.shape_356.setTransform(694.6,152.6);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAKdIAA05");
	this.shape_357.setTransform(694.6,151.6);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAKnIAA1N");
	this.shape_358.setTransform(694.6,150.6);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAKxIAA1h");
	this.shape_359.setTransform(694.6,149.6);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAK7IAA11");
	this.shape_360.setTransform(694.6,148.6);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f().s("#47B9FF").ss(2,1,1).p("AAALFIAA2J");
	this.shape_361.setTransform(694.6,147.6);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f().s("#47B9FF").ss(2,1,1).p("AAALPIAA2d");
	this.shape_362.setTransform(694.6,146.6);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f().s("#47B9FF").ss(2,1,1).p("AAALZIAA2x");
	this.shape_363.setTransform(694.6,145.6);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f().s("#47B9FF").ss(2,1,1).p("AAALjIAA3F");
	this.shape_364.setTransform(694.6,144.6);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f().s("#47B9FF").ss(2,1,1).p("AAALtIAA3Z");
	this.shape_365.setTransform(694.6,143.6);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAL3IAA3t");
	this.shape_366.setTransform(694.6,142.6);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAMBIAA4B");
	this.shape_367.setTransform(694.6,141.6);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAMLIAA4V");
	this.shape_368.setTransform(694.6,140.6);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAMVIAA4p");
	this.shape_369.setTransform(694.6,139.6);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAMfIAA49");
	this.shape_370.setTransform(694.6,138.6);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAMqIAA5S");
	this.shape_371.setTransform(694.6,137.6);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAMzIAA5l");
	this.shape_372.setTransform(694.6,136.6);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAM9IAA55");
	this.shape_373.setTransform(694.6,135.6);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f().s("#47B9FF").ss(2,1,1).p("AAANHIAA6N");
	this.shape_374.setTransform(694.6,134.6);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f().s("#47B9FF").ss(2,1,1).p("AAANRIAA6h");
	this.shape_375.setTransform(694.6,133.6);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("#47B9FF").ss(2,1,1).p("AAANbIAA61");
	this.shape_376.setTransform(694.6,132.6);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f().s("#47B9FF").ss(2,1,1).p("AAANlIAA7J");
	this.shape_377.setTransform(694.6,131.6);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f().s("#47B9FF").ss(2,1,1).p("AAANvIAA7d");
	this.shape_378.setTransform(694.6,130.6);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAN5IAA7x");
	this.shape_379.setTransform(694.6,129.6);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAODIAA8F");
	this.shape_380.setTransform(694.6,128.6);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAONIAA8Z");
	this.shape_381.setTransform(694.6,127.6);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAOXIAA8t");
	this.shape_382.setTransform(694.6,126.6);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAOhIAA9B");
	this.shape_383.setTransform(694.6,125.6);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAOrIAA9V");
	this.shape_384.setTransform(694.6,124.6);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAO1IAA9p");
	this.shape_385.setTransform(694.6,123.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_297,p:{scaleX:0.012,y:211.7}}]}).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_297,p:{scaleX:0.168,y:122.6}}]},1).wait(1));

	// 5
	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f().s("#47B9FF").ss(2,1,1).p("EhZQAAAMCyhAAA");
	this.shape_386.setTransform(911.3,211.7,0.012,1,90);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f().s("#47B9FF").ss(2,1,1).p("AAABPIAAid");
	this.shape_387.setTransform(911.3,210.7);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f().s("#47B9FF").ss(2,1,1).p("AAABZIAAix");
	this.shape_388.setTransform(911.3,209.7);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f().s("#47B9FF").ss(2,1,1).p("AAABjIAAjF");
	this.shape_389.setTransform(911.3,208.7);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f().s("#47B9FF").ss(2,1,1).p("AAABtIAAjZ");
	this.shape_390.setTransform(911.3,207.7);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAB3IAAjt");
	this.shape_391.setTransform(911.3,206.7);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f().s("#47B9FF").ss(2,1,1).p("AAACBIAAkB");
	this.shape_392.setTransform(911.3,205.7);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f().s("#47B9FF").ss(2,1,1).p("AAACLIAAkV");
	this.shape_393.setTransform(911.3,204.7);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f().s("#47B9FF").ss(2,1,1).p("AAACVIAAkp");
	this.shape_394.setTransform(911.3,203.7);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f().s("#47B9FF").ss(2,1,1).p("AAACfIAAk9");
	this.shape_395.setTransform(911.3,202.7);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f().s("#47B9FF").ss(2,1,1).p("AAACpIAAlR");
	this.shape_396.setTransform(911.3,201.7);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f().s("#47B9FF").ss(2,1,1).p("AAACzIAAll");
	this.shape_397.setTransform(911.3,200.7);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAC9IAAl5");
	this.shape_398.setTransform(911.3,199.7);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f().s("#47B9FF").ss(2,1,1).p("AAADHIAAmN");
	this.shape_399.setTransform(911.3,198.7);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f().s("#47B9FF").ss(2,1,1).p("AAADRIAAmh");
	this.shape_400.setTransform(911.3,197.7);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f().s("#47B9FF").ss(2,1,1).p("AAADbIAAm1");
	this.shape_401.setTransform(911.3,196.7);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f().s("#47B9FF").ss(2,1,1).p("AAADlIAAnJ");
	this.shape_402.setTransform(911.3,195.7);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f().s("#47B9FF").ss(2,1,1).p("AAADvIAAnd");
	this.shape_403.setTransform(911.3,194.7);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAD5IAAnx");
	this.shape_404.setTransform(911.3,193.7);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAEDIAAoF");
	this.shape_405.setTransform(911.3,192.7);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAENIAAoZ");
	this.shape_406.setTransform(911.3,191.7);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAEXIAAot");
	this.shape_407.setTransform(911.3,190.7);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAEhIAApB");
	this.shape_408.setTransform(911.3,189.7);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAErIAApV");
	this.shape_409.setTransform(911.3,188.7);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAE1IAApp");
	this.shape_410.setTransform(911.3,187.7);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAE/IAAp9");
	this.shape_411.setTransform(911.3,186.7);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAFJIAAqR");
	this.shape_412.setTransform(911.3,185.7);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAFTIAAql");
	this.shape_413.setTransform(911.3,184.7);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAFdIAAq5");
	this.shape_414.setTransform(911.3,183.7);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAFnIAArN");
	this.shape_415.setTransform(911.3,182.7);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAFxIAArh");
	this.shape_416.setTransform(911.3,181.7);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAF7IAAr1");
	this.shape_417.setTransform(911.3,180.7);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAGFIAAsJ");
	this.shape_418.setTransform(911.3,179.7);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAGPIAAsd");
	this.shape_419.setTransform(911.3,178.7);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAGZIAAsx");
	this.shape_420.setTransform(911.3,177.7);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAGjIAAtF");
	this.shape_421.setTransform(911.3,176.7);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAGtIAAtZ");
	this.shape_422.setTransform(911.3,175.7);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAG3IAAtt");
	this.shape_423.setTransform(911.3,174.7);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAHBIAAuB");
	this.shape_424.setTransform(911.3,173.7);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAHLIAAuV");
	this.shape_425.setTransform(911.3,172.7);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAHVIAAup");
	this.shape_426.setTransform(911.3,171.7);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAHfIAAu9");
	this.shape_427.setTransform(911.3,170.7);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAHpIAAvR");
	this.shape_428.setTransform(911.3,169.7);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAHzIAAvl");
	this.shape_429.setTransform(911.3,168.7);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAH9IAAv5");
	this.shape_430.setTransform(911.3,167.7);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAIHIAAwN");
	this.shape_431.setTransform(911.3,166.6);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAIRIAAwh");
	this.shape_432.setTransform(911.3,165.6);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAIbIAAw1");
	this.shape_433.setTransform(911.3,164.6);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAIlIAAxJ");
	this.shape_434.setTransform(911.3,163.6);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAIvIAAxd");
	this.shape_435.setTransform(911.3,162.6);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAI5IAAxx");
	this.shape_436.setTransform(911.3,161.6);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAJDIAAyF");
	this.shape_437.setTransform(911.3,160.6);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAJNIAAyZ");
	this.shape_438.setTransform(911.3,159.6);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAJXIAAyt");
	this.shape_439.setTransform(911.3,158.6);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAJhIAAzB");
	this.shape_440.setTransform(911.3,157.6);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAJrIAAzV");
	this.shape_441.setTransform(911.3,156.6);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAJ1IAAzp");
	this.shape_442.setTransform(911.3,155.6);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAJ/IAAz9");
	this.shape_443.setTransform(911.3,154.6);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAKJIAA0R");
	this.shape_444.setTransform(911.3,153.6);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAKTIAA0l");
	this.shape_445.setTransform(911.3,152.6);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAKdIAA05");
	this.shape_446.setTransform(911.3,151.6);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAKnIAA1N");
	this.shape_447.setTransform(911.3,150.6);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAKxIAA1h");
	this.shape_448.setTransform(911.3,149.6);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAK7IAA11");
	this.shape_449.setTransform(911.3,148.6);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f().s("#47B9FF").ss(2,1,1).p("AAALFIAA2J");
	this.shape_450.setTransform(911.3,147.6);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f().s("#47B9FF").ss(2,1,1).p("AAALPIAA2d");
	this.shape_451.setTransform(911.3,146.6);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f().s("#47B9FF").ss(2,1,1).p("AAALZIAA2x");
	this.shape_452.setTransform(911.3,145.6);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f().s("#47B9FF").ss(2,1,1).p("AAALjIAA3F");
	this.shape_453.setTransform(911.3,144.6);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f().s("#47B9FF").ss(2,1,1).p("AAALtIAA3Z");
	this.shape_454.setTransform(911.3,143.6);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAL3IAA3t");
	this.shape_455.setTransform(911.3,142.6);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAMBIAA4B");
	this.shape_456.setTransform(911.3,141.6);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAMLIAA4V");
	this.shape_457.setTransform(911.3,140.6);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAMVIAA4p");
	this.shape_458.setTransform(911.3,139.6);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAMfIAA49");
	this.shape_459.setTransform(911.3,138.6);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAMqIAA5S");
	this.shape_460.setTransform(911.3,137.6);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAMzIAA5l");
	this.shape_461.setTransform(911.3,136.6);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAM9IAA55");
	this.shape_462.setTransform(911.3,135.6);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f().s("#47B9FF").ss(2,1,1).p("AAANHIAA6N");
	this.shape_463.setTransform(911.3,134.6);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f().s("#47B9FF").ss(2,1,1).p("AAANRIAA6h");
	this.shape_464.setTransform(911.3,133.6);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f().s("#47B9FF").ss(2,1,1).p("AAANbIAA61");
	this.shape_465.setTransform(911.3,132.6);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f().s("#47B9FF").ss(2,1,1).p("AAANlIAA7J");
	this.shape_466.setTransform(911.3,131.6);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f().s("#47B9FF").ss(2,1,1).p("AAANvIAA7d");
	this.shape_467.setTransform(911.3,130.6);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAN5IAA7x");
	this.shape_468.setTransform(911.3,129.6);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAODIAA8F");
	this.shape_469.setTransform(911.3,128.6);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAONIAA8Z");
	this.shape_470.setTransform(911.3,127.6);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAOXIAA8t");
	this.shape_471.setTransform(911.3,126.6);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAOhIAA9B");
	this.shape_472.setTransform(911.3,125.6);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAOrIAA9V");
	this.shape_473.setTransform(911.3,124.6);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAO1IAA9p");
	this.shape_474.setTransform(911.3,123.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_386,p:{scaleX:0.012,y:211.7}}]}).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_388}]},1).to({state:[{t:this.shape_389}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_394}]},1).to({state:[{t:this.shape_395}]},1).to({state:[{t:this.shape_396}]},1).to({state:[{t:this.shape_397}]},1).to({state:[{t:this.shape_398}]},1).to({state:[{t:this.shape_399}]},1).to({state:[{t:this.shape_400}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_402}]},1).to({state:[{t:this.shape_403}]},1).to({state:[{t:this.shape_404}]},1).to({state:[{t:this.shape_405}]},1).to({state:[{t:this.shape_406}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_408}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_410}]},1).to({state:[{t:this.shape_411}]},1).to({state:[{t:this.shape_412}]},1).to({state:[{t:this.shape_413}]},1).to({state:[{t:this.shape_414}]},1).to({state:[{t:this.shape_415}]},1).to({state:[{t:this.shape_416}]},1).to({state:[{t:this.shape_417}]},1).to({state:[{t:this.shape_418}]},1).to({state:[{t:this.shape_419}]},1).to({state:[{t:this.shape_420}]},1).to({state:[{t:this.shape_421}]},1).to({state:[{t:this.shape_422}]},1).to({state:[{t:this.shape_423}]},1).to({state:[{t:this.shape_424}]},1).to({state:[{t:this.shape_425}]},1).to({state:[{t:this.shape_426}]},1).to({state:[{t:this.shape_427}]},1).to({state:[{t:this.shape_428}]},1).to({state:[{t:this.shape_429}]},1).to({state:[{t:this.shape_430}]},1).to({state:[{t:this.shape_431}]},1).to({state:[{t:this.shape_432}]},1).to({state:[{t:this.shape_433}]},1).to({state:[{t:this.shape_434}]},1).to({state:[{t:this.shape_435}]},1).to({state:[{t:this.shape_436}]},1).to({state:[{t:this.shape_437}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_439}]},1).to({state:[{t:this.shape_440}]},1).to({state:[{t:this.shape_441}]},1).to({state:[{t:this.shape_442}]},1).to({state:[{t:this.shape_443}]},1).to({state:[{t:this.shape_444}]},1).to({state:[{t:this.shape_445}]},1).to({state:[{t:this.shape_446}]},1).to({state:[{t:this.shape_447}]},1).to({state:[{t:this.shape_448}]},1).to({state:[{t:this.shape_449}]},1).to({state:[{t:this.shape_450}]},1).to({state:[{t:this.shape_451}]},1).to({state:[{t:this.shape_452}]},1).to({state:[{t:this.shape_453}]},1).to({state:[{t:this.shape_454}]},1).to({state:[{t:this.shape_455}]},1).to({state:[{t:this.shape_456}]},1).to({state:[{t:this.shape_457}]},1).to({state:[{t:this.shape_458}]},1).to({state:[{t:this.shape_459}]},1).to({state:[{t:this.shape_460}]},1).to({state:[{t:this.shape_461}]},1).to({state:[{t:this.shape_462}]},1).to({state:[{t:this.shape_463}]},1).to({state:[{t:this.shape_464}]},1).to({state:[{t:this.shape_465}]},1).to({state:[{t:this.shape_466}]},1).to({state:[{t:this.shape_467}]},1).to({state:[{t:this.shape_468}]},1).to({state:[{t:this.shape_469}]},1).to({state:[{t:this.shape_470}]},1).to({state:[{t:this.shape_471}]},1).to({state:[{t:this.shape_472}]},1).to({state:[{t:this.shape_473}]},1).to({state:[{t:this.shape_474}]},1).to({state:[{t:this.shape_386,p:{scaleX:0.168,y:122.6}}]},1).wait(1));

	// 6
	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f().s("#47B9FF").ss(2,1,1).p("EhZQAAAMCyhAAA");
	this.shape_475.setTransform(1114.5,212.9,0.01,1,90);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f().s("#47B9FF").ss(2,1,1).p("AAABEIAAiH");
	this.shape_476.setTransform(1114.5,211.9);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f().s("#47B9FF").ss(2,1,1).p("AAABOIAAib");
	this.shape_477.setTransform(1114.5,210.9);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f().s("#47B9FF").ss(2,1,1).p("AAABYIAAiv");
	this.shape_478.setTransform(1114.5,209.9);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f().s("#47B9FF").ss(2,1,1).p("AAABiIAAjD");
	this.shape_479.setTransform(1114.5,208.9);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f().s("#47B9FF").ss(2,1,1).p("AAABsIAAjX");
	this.shape_480.setTransform(1114.5,207.8);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAB2IAAjr");
	this.shape_481.setTransform(1114.5,206.8);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f().s("#47B9FF").ss(2,1,1).p("AAACAIAAkA");
	this.shape_482.setTransform(1114.5,205.8);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f().s("#47B9FF").ss(2,1,1).p("AAACLIAAkV");
	this.shape_483.setTransform(1114.5,204.8);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f().s("#47B9FF").ss(2,1,1).p("AAACVIAAkp");
	this.shape_484.setTransform(1114.5,203.8);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f().s("#47B9FF").ss(2,1,1).p("AAACfIAAk9");
	this.shape_485.setTransform(1114.5,202.8);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f().s("#47B9FF").ss(2,1,1).p("AAACpIAAlR");
	this.shape_486.setTransform(1114.5,201.8);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f().s("#47B9FF").ss(2,1,1).p("AAACzIAAll");
	this.shape_487.setTransform(1114.5,200.7);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAC9IAAl5");
	this.shape_488.setTransform(1114.5,199.7);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f().s("#47B9FF").ss(2,1,1).p("AAADIIAAmO");
	this.shape_489.setTransform(1114.5,198.7);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f().s("#47B9FF").ss(2,1,1).p("AAADRIAAmh");
	this.shape_490.setTransform(1114.5,197.7);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f().s("#47B9FF").ss(2,1,1).p("AAADcIAAm2");
	this.shape_491.setTransform(1114.5,196.7);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f().s("#47B9FF").ss(2,1,1).p("AAADmIAAnL");
	this.shape_492.setTransform(1114.5,195.6);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f().s("#47B9FF").ss(2,1,1).p("AAADwIAAnf");
	this.shape_493.setTransform(1114.5,194.6);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAD6IAAnz");
	this.shape_494.setTransform(1114.5,193.6);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAEEIAAoH");
	this.shape_495.setTransform(1114.5,192.6);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAEOIAAob");
	this.shape_496.setTransform(1114.5,191.6);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAEYIAAov");
	this.shape_497.setTransform(1114.5,190.6);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAEiIAApE");
	this.shape_498.setTransform(1114.5,189.6);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAEtIAApZ");
	this.shape_499.setTransform(1114.5,188.5);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAE3IAApt");
	this.shape_500.setTransform(1114.5,187.5);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAFBIAAqB");
	this.shape_501.setTransform(1114.5,186.5);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAFLIAAqV");
	this.shape_502.setTransform(1114.5,185.5);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAFVIAAqp");
	this.shape_503.setTransform(1114.5,184.5);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAFfIAAq9");
	this.shape_504.setTransform(1114.5,183.5);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAFqIAArS");
	this.shape_505.setTransform(1114.5,182.5);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAF0IAArm");
	this.shape_506.setTransform(1114.5,181.5);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAF+IAAr7");
	this.shape_507.setTransform(1114.5,180.4);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAGIIAAsP");
	this.shape_508.setTransform(1114.5,179.4);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAGSIAAsj");
	this.shape_509.setTransform(1114.5,178.4);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAGcIAAs3");
	this.shape_510.setTransform(1114.5,177.4);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAGmIAAtL");
	this.shape_511.setTransform(1114.5,176.4);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAGxIAAth");
	this.shape_512.setTransform(1114.5,175.4);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAG7IAAt1");
	this.shape_513.setTransform(1114.5,174.4);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAHFIAAuJ");
	this.shape_514.setTransform(1114.5,173.3);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAHPIAAud");
	this.shape_515.setTransform(1114.5,172.3);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAHZIAAux");
	this.shape_516.setTransform(1114.5,171.3);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAHjIAAvF");
	this.shape_517.setTransform(1114.5,170.3);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAHtIAAvZ");
	this.shape_518.setTransform(1114.5,169.3);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAH3IAAvt");
	this.shape_519.setTransform(1114.5,168.3);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAIBIAAwB");
	this.shape_520.setTransform(1114.5,167.2);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAIMIAAwX");
	this.shape_521.setTransform(1114.5,166.2);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAIWIAAwr");
	this.shape_522.setTransform(1114.5,165.2);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAIgIAAw/");
	this.shape_523.setTransform(1114.5,164.2);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAIqIAAxT");
	this.shape_524.setTransform(1114.5,163.2);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAI0IAAxn");
	this.shape_525.setTransform(1114.5,162.2);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAI+IAAx7");
	this.shape_526.setTransform(1114.5,161.1);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAJIIAAyP");
	this.shape_527.setTransform(1114.5,160.1);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAJSIAAyk");
	this.shape_528.setTransform(1114.5,159.1);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAJcIAAy4");
	this.shape_529.setTransform(1114.5,158.1);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAJnIAAzN");
	this.shape_530.setTransform(1114.5,157.1);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAJxIAAzh");
	this.shape_531.setTransform(1114.5,156.1);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAJ7IAAz1");
	this.shape_532.setTransform(1114.5,155.1);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAKFIAA0J");
	this.shape_533.setTransform(1114.5,154);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAKPIAA0d");
	this.shape_534.setTransform(1114.5,153);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAKaIAA0z");
	this.shape_535.setTransform(1114.5,152);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAKkIAA1H");
	this.shape_536.setTransform(1114.5,151);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAKuIAA1b");
	this.shape_537.setTransform(1114.5,150);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAK4IAA1v");
	this.shape_538.setTransform(1114.5,149);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f().s("#47B9FF").ss(2,1,1).p("AAALCIAA2D");
	this.shape_539.setTransform(1114.5,148);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f().s("#47B9FF").ss(2,1,1).p("AAALMIAA2X");
	this.shape_540.setTransform(1114.5,147);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f().s("#47B9FF").ss(2,1,1).p("AAALWIAA2r");
	this.shape_541.setTransform(1114.5,145.9);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f().s("#47B9FF").ss(2,1,1).p("AAALhIAA3B");
	this.shape_542.setTransform(1114.5,144.9);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f().s("#47B9FF").ss(2,1,1).p("AAALrIAA3V");
	this.shape_543.setTransform(1114.5,143.9);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAL1IAA3p");
	this.shape_544.setTransform(1114.5,142.9);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAL/IAA39");
	this.shape_545.setTransform(1114.5,141.9);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAMJIAA4R");
	this.shape_546.setTransform(1114.5,140.9);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAMTIAA4l");
	this.shape_547.setTransform(1114.5,139.9);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAMdIAA45");
	this.shape_548.setTransform(1114.5,138.8);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAMoIAA5P");
	this.shape_549.setTransform(1114.5,137.8);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAMxIAA5h");
	this.shape_550.setTransform(1114.5,136.8);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAM8IAA53");
	this.shape_551.setTransform(1114.5,135.8);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f().s("#47B9FF").ss(2,1,1).p("AAANGIAA6L");
	this.shape_552.setTransform(1114.5,134.8);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f().s("#47B9FF").ss(2,1,1).p("AAANQIAA6f");
	this.shape_553.setTransform(1114.5,133.7);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f().s("#47B9FF").ss(2,1,1).p("AAANaIAA6z");
	this.shape_554.setTransform(1114.5,132.7);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f().s("#47B9FF").ss(2,1,1).p("AAANkIAA7H");
	this.shape_555.setTransform(1114.5,131.7);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f().s("#47B9FF").ss(2,1,1).p("AAANuIAA7b");
	this.shape_556.setTransform(1114.5,130.7);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAN4IAA7v");
	this.shape_557.setTransform(1114.5,129.7);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAODIAA8F");
	this.shape_558.setTransform(1114.5,128.7);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAONIAA8Z");
	this.shape_559.setTransform(1114.5,127.7);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAOXIAA8t");
	this.shape_560.setTransform(1114.5,126.6);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAOhIAA9B");
	this.shape_561.setTransform(1114.5,125.6);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAOrIAA9V");
	this.shape_562.setTransform(1114.5,124.6);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f().s("#47B9FF").ss(2,1,1).p("AAAO1IAA9p");
	this.shape_563.setTransform(1114.5,123.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_475,p:{scaleX:0.01,y:212.9}}]}).to({state:[{t:this.shape_476}]},1).to({state:[{t:this.shape_477}]},1).to({state:[{t:this.shape_478}]},1).to({state:[{t:this.shape_479}]},1).to({state:[{t:this.shape_480}]},1).to({state:[{t:this.shape_481}]},1).to({state:[{t:this.shape_482}]},1).to({state:[{t:this.shape_483}]},1).to({state:[{t:this.shape_484}]},1).to({state:[{t:this.shape_485}]},1).to({state:[{t:this.shape_486}]},1).to({state:[{t:this.shape_487}]},1).to({state:[{t:this.shape_488}]},1).to({state:[{t:this.shape_489}]},1).to({state:[{t:this.shape_490}]},1).to({state:[{t:this.shape_491}]},1).to({state:[{t:this.shape_492}]},1).to({state:[{t:this.shape_493}]},1).to({state:[{t:this.shape_494}]},1).to({state:[{t:this.shape_495}]},1).to({state:[{t:this.shape_496}]},1).to({state:[{t:this.shape_497}]},1).to({state:[{t:this.shape_498}]},1).to({state:[{t:this.shape_499}]},1).to({state:[{t:this.shape_500}]},1).to({state:[{t:this.shape_501}]},1).to({state:[{t:this.shape_502}]},1).to({state:[{t:this.shape_503}]},1).to({state:[{t:this.shape_504}]},1).to({state:[{t:this.shape_505}]},1).to({state:[{t:this.shape_506}]},1).to({state:[{t:this.shape_507}]},1).to({state:[{t:this.shape_508}]},1).to({state:[{t:this.shape_509}]},1).to({state:[{t:this.shape_510}]},1).to({state:[{t:this.shape_511}]},1).to({state:[{t:this.shape_512}]},1).to({state:[{t:this.shape_513}]},1).to({state:[{t:this.shape_514}]},1).to({state:[{t:this.shape_515}]},1).to({state:[{t:this.shape_516}]},1).to({state:[{t:this.shape_517}]},1).to({state:[{t:this.shape_518}]},1).to({state:[{t:this.shape_519}]},1).to({state:[{t:this.shape_520}]},1).to({state:[{t:this.shape_521}]},1).to({state:[{t:this.shape_522}]},1).to({state:[{t:this.shape_523}]},1).to({state:[{t:this.shape_524}]},1).to({state:[{t:this.shape_525}]},1).to({state:[{t:this.shape_526}]},1).to({state:[{t:this.shape_527}]},1).to({state:[{t:this.shape_528}]},1).to({state:[{t:this.shape_529}]},1).to({state:[{t:this.shape_530}]},1).to({state:[{t:this.shape_531}]},1).to({state:[{t:this.shape_532}]},1).to({state:[{t:this.shape_533}]},1).to({state:[{t:this.shape_534}]},1).to({state:[{t:this.shape_535}]},1).to({state:[{t:this.shape_536}]},1).to({state:[{t:this.shape_537}]},1).to({state:[{t:this.shape_538}]},1).to({state:[{t:this.shape_539}]},1).to({state:[{t:this.shape_540}]},1).to({state:[{t:this.shape_541}]},1).to({state:[{t:this.shape_542}]},1).to({state:[{t:this.shape_543}]},1).to({state:[{t:this.shape_544}]},1).to({state:[{t:this.shape_545}]},1).to({state:[{t:this.shape_546}]},1).to({state:[{t:this.shape_547}]},1).to({state:[{t:this.shape_548}]},1).to({state:[{t:this.shape_549}]},1).to({state:[{t:this.shape_550}]},1).to({state:[{t:this.shape_551}]},1).to({state:[{t:this.shape_552}]},1).to({state:[{t:this.shape_553}]},1).to({state:[{t:this.shape_554}]},1).to({state:[{t:this.shape_555}]},1).to({state:[{t:this.shape_556}]},1).to({state:[{t:this.shape_557}]},1).to({state:[{t:this.shape_558}]},1).to({state:[{t:this.shape_559}]},1).to({state:[{t:this.shape_560}]},1).to({state:[{t:this.shape_561}]},1).to({state:[{t:this.shape_562}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_475,p:{scaleX:0.168,y:122.6}}]},1).wait(1));

	// base
	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f().s("#47B9FF").ss(2,1,1).p("EhbZAAAMC2zAAA");
	this.shape_564.setTransform(585,218.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_564).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1,203.8,1172,15.9);
p.frameBounds = [rect, new cjs.Rectangle(-1,201.8,1172,17.9), new cjs.Rectangle(-1,199.8,1172,19.9), new cjs.Rectangle(-1,197.8,1172,21.9), new cjs.Rectangle(-1,195.8,1172,23.9), new cjs.Rectangle(-1,193.8,1172,25.9), new cjs.Rectangle(-1,191.8,1172,27.9), new cjs.Rectangle(-1,189.8,1172,29.9), new cjs.Rectangle(-1,187.8,1172,31.9), new cjs.Rectangle(-1,185.8,1172,33.9), new cjs.Rectangle(-1,183.8,1172,35.9), new cjs.Rectangle(-1,181.8,1172,37.9), new cjs.Rectangle(-1,179.8,1172,39.9), new cjs.Rectangle(-1,177.8,1172,41.9), new cjs.Rectangle(-1,175.8,1172,43.9), new cjs.Rectangle(-1,173.8,1172,45.8), new cjs.Rectangle(-1,171.8,1172,47.8), new cjs.Rectangle(-1,169.8,1172,49.8), new cjs.Rectangle(-1,167.8,1172,51.9), new cjs.Rectangle(-1,165.8,1172,53.9), new cjs.Rectangle(-1,163.8,1172,55.9), new cjs.Rectangle(-1,161.8,1172,57.9), new cjs.Rectangle(-1,159.8,1172,59.9), new cjs.Rectangle(-1,157.7,1172,61.9), new cjs.Rectangle(-1,155.7,1172,63.9), new cjs.Rectangle(-1,153.7,1172,65.9), new cjs.Rectangle(-1,151.7,1172,67.9), new cjs.Rectangle(-1,149.7,1172,69.9), new cjs.Rectangle(-1,147.7,1172,71.9), new cjs.Rectangle(-1,145.7,1172,73.9), new cjs.Rectangle(-1,143.7,1172,75.9), new cjs.Rectangle(-1,141.7,1172,77.9), new cjs.Rectangle(-1,139.7,1172,79.9), new cjs.Rectangle(-1,137.7,1172,81.9), new cjs.Rectangle(-1,135.7,1172,83.9), new cjs.Rectangle(-1,133.7,1172,85.9), new cjs.Rectangle(-1,131.7,1172,87.9), new cjs.Rectangle(-1,129.7,1172,89.9), new cjs.Rectangle(-1,127.7,1172,91.9), new cjs.Rectangle(-1,125.7,1172,93.9), new cjs.Rectangle(-1,123.7,1172,95.9), new cjs.Rectangle(-1,121.7,1172,97.9), new cjs.Rectangle(-1,119.7,1172,99.9), new cjs.Rectangle(-1,117.7,1172,101.9), new cjs.Rectangle(-1,115.7,1172,103.9), new cjs.Rectangle(-1,113.7,1172,105.9), new cjs.Rectangle(-1,111.7,1172,107.9), new cjs.Rectangle(-1,109.7,1172,109.9), new cjs.Rectangle(-1,107.7,1172,111.9), new cjs.Rectangle(-1,105.7,1172,113.9), new cjs.Rectangle(-1,103.7,1172,115.9), new cjs.Rectangle(-1,101.7,1172,117.9), new cjs.Rectangle(-1,99.7,1172,119.9), new cjs.Rectangle(-1,97.7,1172,121.9), new cjs.Rectangle(-1,95.7,1172,123.9), new cjs.Rectangle(-1,93.7,1172,125.9), new cjs.Rectangle(-1,91.7,1172,127.9), new cjs.Rectangle(-1,89.7,1172,129.9), new cjs.Rectangle(-1,87.7,1172,131.9), new cjs.Rectangle(-1,85.7,1172,133.9), new cjs.Rectangle(-1,83.7,1172,135.9), new cjs.Rectangle(-1,81.7,1172,137.9), new cjs.Rectangle(-1,79.7,1172,139.9), new cjs.Rectangle(-1,77.7,1172,141.9), new cjs.Rectangle(-1,75.7,1172,143.9), new cjs.Rectangle(-1,73.7,1172,145.9), new cjs.Rectangle(-1,71.7,1172,147.9), new cjs.Rectangle(-1,69.7,1172,150), new cjs.Rectangle(-1,67.7,1172,152), new cjs.Rectangle(-1,65.7,1172,154), new cjs.Rectangle(-1,63.7,1172,156), new cjs.Rectangle(-1,61.7,1172,158), new cjs.Rectangle(-1,59.7,1172,160), new cjs.Rectangle(-1,57.7,1172,162), new cjs.Rectangle(-1,55.7,1172,164), new cjs.Rectangle(-1,53.7,1172,166), new cjs.Rectangle(-1,51.7,1172,168), new cjs.Rectangle(-1,49.7,1172,170), new cjs.Rectangle(-1,47.7,1172,172), new cjs.Rectangle(-1,45.7,1172,174), new cjs.Rectangle(-1,43.7,1172,176), new cjs.Rectangle(-1,41.7,1172,178), new cjs.Rectangle(-1,39.7,1172,180), new cjs.Rectangle(-1,37.7,1172,182), new cjs.Rectangle(-1,35.7,1172,184), new cjs.Rectangle(-1,33.7,1172,186), new cjs.Rectangle(-1,31.7,1172,188), new cjs.Rectangle(-1,29.7,1172,190), new cjs.Rectangle(-1,27.7,1172,192), new cjs.Rectangle(-1,-1,1172,220.6)];


(lib.lampsvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lamp.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDF60").s().p("ABkDQIkzk0QgWgWAAgfQAAggAWgWQAWgWAgAAQAfAAAXAWIEzEzQAWAWAAAgQAAAggWAWQgWAWggAAQgfAAgXgWg");
	this.shape.setTransform(231.1,455.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFDF60").s().p("AjPDQQgWgWAAggQAAggAWgWIEzkzQAXgWAfAAQAgAAAWAWQAWAWAAAgQAAAfgWAWIkzE0QgXAWgfAAQggAAgWgWg");
	this.shape_1.setTransform(23,455.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFDF60").s().p("Ag1EQQgWgWAAggIAAmzQAAggAWgVQAWgXAfAAQAgAAAWAXQAWAVAAAgIAAGzQAAAggWAWQgWAWggAAQgfAAgWgWg");
	this.shape_2.setTransform(127.1,482.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFDF60").s().p("AD1FyQkzhYinkbQg2hagghlQgSg3gGgkQgFgfASgaQASgaAfgFQAegGAaASQAaASAGAfQAFAeAPAtQAbBTAsBKQCHDnD6BHQAeAJAPAbQAPAcgIAeQgHAZgVAPQgUAPgZAAQgLAAgKgDg");
	this.shape_3.setTransform(72.1,350.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BBEEFF").s().p("AqjDGQgoAAgcgdQgcgcAAgoIAAjJQAAgoAcgdQAcgcAoAAIVGAAQAoAAAcAcQAdAdAAAoIAADJQAAAogdAcQgcAdgoAAg");
	this.shape_4.setTransform(126.9,57.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0097B1").s().p("AqXFaICzq0IPJAAICzK0g");
	this.shape_5.setTransform(126.9,57.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#37C3E2").s().p("ApfI/QgsAAgbgjQgagiALgrID7vKQAHgdAYgTQAYgTAfAAILJAAQAfAAAYATQAYATAHAdID8PKQALArgbAiQgbAjgrAAg");
	this.shape_6.setTransform(126.9,57.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9800").s().p("AkoBmQgfgHgSgaQgRgaAGgfQAGgeAagRQBBgsBRgOQBqgTBPAwQBOgoBOACQBjACBKBKQAXAXAAAeQAAAggXAWQgWAWgfAAQggAAgWgWQgugthDASQgmALgeAXQgWARgcgCQgdgCgUgUQgqgqhMAUQgXAHgZAMIgWANQgUAMgVAAQgIAAgIgBg");
	this.shape_7.setTransform(126.9,199.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF9800").s().p("Ag1MGQgWgXAAgfIAA2fQAAgfAWgWQAWgXAfAAQAgAAAWAXQAWAWAAAfIAAWfQAAAfgWAXQgWAWggAAQgfAAgWgWg");
	this.shape_8.setTransform(155.1,158.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9800").s().p("Ag0MGQgXgXAAgfIAA2fQAAgfAXgWQAVgXAfAAQAfAAAXAXQAWAWAAAfIAAWfQAAAfgWAXQgXAWgfAAQgfAAgVgWg");
	this.shape_9.setTransform(98.7,158.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF9800").s().p("ABHS+QCvkhAAlTQAAjPhDjBQhBi6h5idQi9j2hjkrQhiknAAk7IAAlVICUAAIAAEQQAAE7BiEmQBjEsC9D1QB5CeBBC6QBDDBAADOQAAGAjaE5QjVEylbCHQEfifCokZg");
	this.shape_10.setTransform(209.5,252.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF9800").s().p("ApHDWQAFhAAAhMIAAkfISEAAIAAEOQAABPAHBOg");
	this.shape_11.setTransform(127.1,108.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFC100").s().p("AgRaeQjzgDjdhhQjXhdimimQiminhcjWQhfjegDjzQgCjQBCjCQA/i7B4ifQCojeBjj+QBkkCAVkPQAFhBAAhMIAAkgISFAAIAAEPQAABPAGBPQAWERBgD9QBhEBClDWQB6CdBBC6QBDDBAADPQAAD6hiDkQheDdirCpQisCpjdBbQjeBajxAAIgRAAg");
	this.shape_12.setTransform(127.1,256.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,254.2,512);
p.frameBounds = [rect];


(lib.labsvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lab.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjHCgIAAk/IGPAAIAACfIjvAAIAACgg");
	this.shape.setTransform(124,80);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#008994").s().p("AsfCgIAAk/IY/AAIAAE/g");
	this.shape_1.setTransform(136,24);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhPBQIAAifICfAAIAACfg");
	this.shape_2.setTransform(112,360);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhPBQIAAifICfAAIAACfg");
	this.shape_3.setTransform(80,360);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhPBQIAAifICfAAIAACfg");
	this.shape_4.setTransform(96,376);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhPBQIAAifICfAAIAACfg");
	this.shape_5.setTransform(96,344);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhPBQIAAifICfAAIAACfg");
	this.shape_6.setTransform(176,400);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhPBQIAAifICfAAIAACfg");
	this.shape_7.setTransform(144,400);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhPBQIAAifICfAAIAACfg");
	this.shape_8.setTransform(160,416);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhPBQIAAifICfAAIAACfg");
	this.shape_9.setTransform(160,384);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#008994").s().p("At4UAQjeAAiMiWQhChFgbhXQgchaAUhdMAMYggWIRfAAMAMYAgWQAUBdgcBaQgbBXhBBFQiNCWjeAAg");
	this.shape_10.setTransform(136,344);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C9E0E9").s().p("EgN4AhwQjeAAiMiWQhChFgbhXQgchaAUhdMAMYggWIAA7gIRfAAIAAbgMAMYAgWQAUBdgcBaQgbBXhBBFQiNCWjeAAg");
	this.shape_11.setTransform(136,256);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AjHCgIAAk/IGPAAIAACfIjvAAIAACgg");
	this.shape_12.setTransform(268,144);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF7513").s().p("AhPBQIAAifICfAAIAACfg");
	this.shape_13.setTransform(416,64);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF7513").s().p("AhPBQIAAifICfAAIAACfg");
	this.shape_14.setTransform(384,64);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF7513").s().p("AhPBQIAAifICfAAIAACfg");
	this.shape_15.setTransform(400,80);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF7513").s().p("AhPBQIAAifICfAAIAACfg");
	this.shape_16.setTransform(400,48);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF7513").s().p("AhPBQIAAifICfAAIAACfg");
	this.shape_17.setTransform(304,24);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF7513").s().p("AhPBQIAAifICfAAIAACfg");
	this.shape_18.setTransform(272,24);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF7513").s().p("AhPBQIAAifICfAAIAACfg");
	this.shape_19.setTransform(288,40);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF7513").s().p("AhPBQIAAifICfAAIAACfg");
	this.shape_20.setTransform(288,8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF7513").s().p("AjvBQIAAifIHfAAIAACfg");
	this.shape_21.setTransform(424,296);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF7513").s().p("AmPBQIAAifIMfAAIAACfg");
	this.shape_22.setTransform(408,344);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF7513").s().p("AmPBQIAAifIMfAAIAACfg");
	this.shape_23.setTransform(408,248);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFBE2E").s().p("AsfRgQiEAAheheQhehdAAiFIAA9/MAi/AAAIAAd/QAACEheBeQheBeiEAAg");
	this.shape_24.setTransform(336,312);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C9E0E9").s().p("AtvZAQiGgBhehgQhdhgABiHMAAAgs3MAlfAAAIigGbMAAAAmcQACCHheBgQheBgiGABg");
	this.shape_25.setTransform(344,264);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,464.1,472);
p.frameBounds = [rect];


(lib.hydropowersvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hydro-power.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDB08").s().p("AhvFhIwmAAMAWcgkyIigaOIQwAAMgXBAkVg");
	this.shape.setTransform(302.2,200.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjGItQhxkCgNkaQgMkZBakKQBakKC1jYIDmDAQiRCuhJDVQhHDVAKDgQAKDiBaDOQBaDNCgCgIjUDUQjHjHhxkBg");
	this.shape_1.setTransform(82.6,316.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009EFF").s().p("EgPogn/IX+coQD2ElB3FqQB1FdgRFxQgQFyiSFSQiXFdkPEPQkgEgl2CXQlpCTmIAAg");
	this.shape_2.setTransform(300.3,256);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#32CFFE").s().p("EgLwAltQl3iXkgkgQkPkPiXldQiSlSgQlyQgRlxB0ldQB4lqD2klIX+8oIX/coQD2ElB3FqQB1FdgRFxQgQFyiSFSQiXFdkPEPQkgEgl3CXQlpCTmIAAQmHAAlpiTg");
	this.shape_3.setTransform(200.2,256);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,419.7,512);
p.frameBounds = [rect];


(lib.factorysvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// factory.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8C5B52").s().p("Egl9ACuQgkAAgZgZQgagaAAgkIAAkEMBOpAAAIAAEEQAAAkgaAaQgZAZgkAAg");
	this.shape.setTransform(251.7,489.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF7F12").s().p("AkDEwIAAoIQAAgkAZgZQAagaAkAAIFaAAQAkAAAZAaQAZAZAAAkIAAIIg");
	this.shape_1.setTransform(425.2,442.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8C5B52").s().p("AkvBXIAAitIIIAAQAkAAAZAZQAaAaAAAjQAAAkgaAaQgZAZgkAAg");
	this.shape_2.setTransform(256,437.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8C5B52").s().p("AkvBXIAAitIIIAAQAkAAAZAaQAaAZAAAjQAAAkgaAaQgZAZgkAAg");
	this.shape_3.setTransform(256,403.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8C5B52").s().p("AkvBXIAAitIIIAAQAkAAAZAaQAaAZAAAjQAAAkgaAZQgZAagkAAg");
	this.shape_4.setTransform(256,368.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5F454D").s().p("AmxLiIAA1mQgBglAagbQAZgbAlgCIK1AAQAlACAaAbQAZAbgBAlIAAVmg");
	this.shape_5.setTransform(269,407.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A1D4F2").s().p("AjYEEQgkAAgZgZQgagZAAgkIAAlaQAAgkAagaQAZgZAkAAIGxAAQAkAAAZAZQAaAaAAAkIAAFaQAAAkgaAZQgZAZgkAAg");
	this.shape_6.setTransform(160.6,385.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A1D4F2").s().p("AjYEEQgkAAgZgZQgZgZgBgkIAAlaQABgkAZgaQAZgZAkAAIGxAAQAkAAAaAZQAZAaAAAkIAAFaQAAAkgZAZQgaAZgkAAg");
	this.shape_7.setTransform(65.1,385.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF8E3F").s().p("AncBXQgkAAgagaQgZgZAAgkQAAgjAZgZQAagaAkAAIO5AAQAkAAAaAaQAZAZAAAjQAAAkgZAZQgaAagkAAg");
	this.shape_8.setTransform(151.9,299);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF8E3F").s().p("AmGBXIAAitIK2AAQAkAAAZAaQAaAZAAAjQAAAkgaAZQgZAagkAAg");
	this.shape_9.setTransform(39.1,299);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F1551E").s().p("A7HRoMAAAgjPMA2PAAAMAAAAjPg");
	this.shape_10.setTransform(173.6,368.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FED650").s().p("AjYBXQgkAAgZgZQgagaAAgkQAAgjAagaQAZgZAkAAIGxAAQAkAAAZAZQAaAaAAAjQAAAkgaAaQgZAZgkAAg");
	this.shape_11.setTransform(446.9,359.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FED650").s().p("AjYBXQgkAAgZgZQgagaAAgkQAAgjAagaQAZgZAkAAIGxAAQAkAAAZAZQAaAaAAAjQAAAkgaAaQgZAZgkAAg");
	this.shape_12.setTransform(368.8,359.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFC500").s().p("AtjM5IAA5xIZtAAQAlAAAbAaQAaAbAAAkIAAYYg");
	this.shape_13.setTransform(416.6,398.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BE913E").s().p("AoIPmIEF/LIIHAAIEFfLg");
	this.shape_14.setTransform(425.2,225.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F1C154").s().p("AkDEEIAAmdQAAgsAfgfQAfgfAsAAIEzAAQAsAAAfAfQAfAfAAAsIAAGdg");
	this.shape_15.setTransform(425.2,116.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#7BBBE3").s().p("AEEEwQk+AAikjBQhAhLghhfQgbhRAAhMQAAgkAagZQAZgaAkAAQAjAAAaAaQAaAZgBAkQACBkA7BYQBuCfEGgBQAkAAAZAaQAaAZAAAkQAAAkgaAaQgZAZgkAAg");
	this.shape_16.setTransform(303.8,147.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7BBBE3").s().p("AlMAuQg+hQgZhiIgOhTQAAglAZgZQAagaAjAAQAkAAAaAaQAZAZABAjQAAAZAMAkQAVBCAxA1QCbCoFxgBQAkABAaAZQAZAZAAAlQAAAjgZAaQgaAZgkAAQniAAjFkCg");
	this.shape_17.setTransform(251.7,129.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7BBBE3").s().p("AkIHKQiwhcg2ivQg3i0A/ixQBAiyCdhoQB6hGCMgNQCLgNCEAuQBpAjBnA2QAfARAKAjQAKAigRAfQgQAfgiALQgiALgggQQhVgvhdgfQhggjhnAJQhkAIhaAyQhrBJgrB7QgrB5AlB8QAjBwB8A8QBnAxCBAAQAkAAAZAaQAaAZAAAkQAAAkgaAaQgZAZgkAAQi0AAiShNg");
	this.shape_18.setTransform(225.5,63.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7BBBE3").s().p("AIJFBQgkAAgZgYQgZgZgBgjQgHhVgphJQgqhKhFgwQh1hYiwgOQh6gJiJAbQhpAUhnAtQghAOghgNQgigNgOghQgOghANgiQANghAhgPQB3gzB8gYQDOgpCyAeQCyAeCABgQBlBJA8BtQA8BsAIB8QABAkgZAaQgZAagkABg");
	this.shape_19.setTransform(303.7,32.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#7BBBE3").s().p("AHcFDQgjAAgZgYQgZgZgBgjQgFhTglhKQglhKhAg0QhlhWiZgNQhrgJh4AaQhqAYhhAyQgfAQgigLQgigKgQggQgRgfAKgiQAKgiAfgRQB1g9CCgdQCjguCmAfQCmAfCHBmQBcBNA1BrQA2BrAFB4QABAlgZAZQgYAaglABg");
	this.shape_20.setTransform(386.3,32.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A1D4F2").s().p("AjTJwIgFADQmyAAitjZQg3hEgVhRIgLhEIACgPQhwgRhZhIQhYhIgnhqQguiYA1iWQA1iVCDhZQBqg8B5gLQB5gLBzApIAGACIANgkQBugvB0gXQCugiCYATQCtAXB6BbIAUgSQBrg4B2gZQCPgpCSAaQCTAaB4BYQBOBBAtBbQAtBbAFBlIoANAQhUCKiOBPQiNBPiiAAQkjAAiJixg");
	this.shape_21.setTransform(308.1,88.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#DE3726").s().p("A7HE6IAAiuILhm4QAUgMAYgBQAXAAAUAMQAVALALAVQAMAUAAAXIAAFuILhm4QAUgMAYgBQAXAAAUAMQAUALAMAVQALAUAAAXIAAFuILhm4QAUgMAXgBQAYAAAUAMQAUALAMAVQAMAUAAAXIAAFuILhm4QAUgMAXgBQAYAAAUAMQAUALAMAVQAMAUAAAXIAAIcg");
	this.shape_22.setTransform(173.6,241.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,503.4,507.3);
p.frameBounds = [rect];


(lib.dnasvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dna.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6D6E71").s().p("A9LdMQg5g6AAhRQAAhSA5g6QC3i2Apl1QAhkkg4lYIFQlQQDTAiDJABQJUACDykzQEMlYh+sKIFPlQQFZA4EkggQF0gqC3i3QA6g5BRAAQBSAAA5A5QA7A6AABSQAABRg7A6Qj+D+nBBHQk8Ayl7gtQByO9nCG7Qm8G4uzhwQAtF6gzE9QhGHAj/D/Qg5A5hRAAQhSAAg6g5g");
	this.shape.setTransform(319.5,319.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#808285").s().p("EgTQAnGQg6g5AAhSQAAhRA6g6QC2i3Aql0QAhkkg5lZQlYg4kkAhQl0Aqi3C2Qg5A6hSAAQhSAAg5g6Qg6g5AAhSQAAhRA6g6QD+j/HAhGQE9gyF6AsQhwu8HBm8QG+m3OxBwQgtl6Azk9QBGnBD+j+QA6g6BSAAQBRAAA6A6QA6A6AABRQAABSg6A5Qi+C+glGKQgcEgA1E/QFYA5EkghQF1gpC4i3QA5g6BSAAQBRAAA6A6QA6A6AABRQAABSg6A5Qj+D/nBBGQk9Azl6gtQBxO8nCG8Qm9G3uxhwQAsF6gyE9QhHHBj+D+Qg5A6hSAAQhSAAg5g6gAmwojQktDyACJOQABDIAjDTQDSAjDJABQJTACDyk0QEOlZh/sIQj5gpjMAAQm4AAjrC9g");
	this.shape_1.setTransform(256,256);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#28C3E4").s().p("ABvGFIototIEWkWIItItQA6A6AABRQAABSg6A5Qg5A6hSAAQhRAAg6g6g");
	this.shape_2.setTransform(316.2,257.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#28D2E4").s().p("AGjK5IxbxbQg6g5AAhSQAAhRA6g6QA5g6BRAAQBTAAA5A6IRbRbQA6A6AABRQAABSg6A5Qg5A6hSAAQhRAAg6g6g");
	this.shape_3.setTransform(285.5,226.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#28C3E4").s().p("ABvGFIototIEWkWIItItQA6A6AABRQAABSg6A5Qg5A6hSAAQhRAAg6g6g");
	this.shape_4.setTransform(143.4,430.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#28D2E4").s().p("AGiK5IxbxbQg5g5AAhSQAAhRA5g7QA6g5BSAAQBRAAA6A5IRbRbQA6A7AABRQAABSg6A5Qg6A6hRAAQhSAAg6g6g");
	this.shape_5.setTransform(112.6,399.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF905E").s().p("ABvGFIototIEWkWIItItQA6A6AABRQAABSg6A5Qg5A6hSAAQhRAAg6g6g");
	this.shape_6.setTransform(430.2,143.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFDB77").s().p("AGjK5IxbxbQg6g5AAhTQAAhRA6g5QA6g6BRAAQBSAAA5A6IRbRbQA6A6AABRQAABSg6A5Qg5A6hSAAQhRAAg6g6g");
	this.shape_7.setTransform(399.4,112.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF905E").s().p("ABvGFIototIEWkWIItItQA6A6AABRQAABSg6A5Qg5A6hSAAQhRAAg6g6g");
	this.shape_8.setTransform(257.3,316.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFDB77").s().p("AGiK5IxbxbQg5g6AAhRQAAhRA5g7QA7g5BRAAQBRAAA6A5IRbRbQA6A7AABRQAABRg6A6Qg6A6hRAAQhRAAg7g6g");
	this.shape_9.setTransform(226.6,285.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0.1,512,512);
p.frameBounds = [rect];


(lib.desktopcomputersvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// desktop-computer.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C3B40").s().p("Ag7BnQgZgZAAgjIAAhVQAAgjAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAjIAABVQAAAjgZAZQgZAZgjAAQgjAAgYgZg");
	this.shape.setTransform(435.2,431);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C3B40").s().p("AktHYQh9h9AAiwIAAlVQABiwB8h9QB9h9CwAAQCxAAB9B9QB8B9ABCwIAAFVQAACwh9B9Qh9B9ixAAQiwAAh9h9gAi0leQhLBLAABpIAAFVQAABqBLBLQBLBLBpAAQBqAABLhLQBLhLAAhqIAAlVQAAhphLhLQhLhLhqAAQhpAAhLBLg");
	this.shape_1.setTransform(435.2,452.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C3B40").s().p("EgdUAoAQhqAAhLhLQhLhLAAhqIAAqrQAAhpBLhMQBLhLBqABIOqAAIAAhWQAAiwB9h9QB9h9CxAAIaqAAQBqAABKhMQBLhKAAhrIAAiqQAAhqhLhLQhKhLhqAAIl1AAIAVCrIC1AAQAjAAAZAZQAZAZAAAjQAAAjgZAZQgZAZgjAAI3/AAQgjAAgZgZQgZgYAAgkQAAgkAZgYQAZgZAjAAIC0AAIBAoAIxJAAQhqAAhMhKQhLhMAAhpIAA9WQAAhpBLhMQBMhLBqAAMAypAAAQBqAABLBLQBLBMAABpIAAdWQAABphLBMQhLBKhqAAIxKAAIAWCqIGKAAQCwAAB9B+QB9B8AACxIAACqQAACxh9B9Qh9B9iwABI6qAAQhqAAhLBKQhLBLAABqIAABWMAhUAAAQBqgBBLBLQBLBMAABpIAAKrQAABqhLBLQhLBLhqAAgA+RYZQgZAZAAAjIAAKrQAAAkAZAZQAZAZAkgBMAypAAAQAkABAYgZQAZgZAAgkIAAqrQAAgigZgaQgYgYgkAAMgypAAAQgkAAgZAYgAKfFWIhAoAIq9AAIhAIAIM9AAgA2qmpQAAAjAZAZQAZAZAkAAMAypAAAQAjAAAZgZQAZgZAAgjIAAkBMg1UAAAgEgWRgk7QgZAZAAAjIAAWrMA1VAAAIAA2rQAAgjgZgZQgZgZgkAAMgypAAAQgkAAgZAZg");
	this.shape_2.setTransform(213.3,256);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C3B40").s().p("AhVBVQgjAAgZgZQgZgYAAgkQAAgiAZgZQAZgZAjAAICqAAQAkAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgkAAg");
	this.shape_3.setTransform(238.9,204.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C3B40").s().p("AhVBVQgjAAgZgZQgZgYAAgkQAAgiAZgZQAZgZAjAAICqAAQAkAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgkAAg");
	this.shape_4.setTransform(315.7,426.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3C3B40").s().p("AhUBVQgkAAgZgZQgZgYAAgkQAAgiAZgZQAZgZAkAAICqAAQAiAAAaAZQAYAZAAAiQAAAkgYAYQgZAZgjAAg");
	this.shape_5.setTransform(273.1,426.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3C3B40").s().p("AhUBVQgkAAgZgZQgZgZAAgjQAAgiAZgZQAagZAjAAICpAAQAkAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgkAAg");
	this.shape_6.setTransform(230.4,426.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3C3B40").s().p("AhVBVQgjAAgZgZQgZgYAAgkQAAgiAZgZQAZgZAjAAICqAAQAkAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgkAAg");
	this.shape_7.setTransform(187.7,426.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C3B40").s().p("AhUBVQgkAAgZgZQgZgYAAgkQAAgiAZgZQAZgZAkAAICqAAQAiAAAZAZQAZAZAAAiQAAAkgZAYQgYAZgjAAg");
	this.shape_8.setTransform(145.1,426.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3C3B40").s().p("AhUBVQgkAAgZgZQgZgZAAgjQAAgiAZgZQAagZAjAAICpAAQAkAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgkAAg");
	this.shape_9.setTransform(102.4,426.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3C3B40").s().p("AhVBVQgjAAgZgZQgZgYAAgkQAAgiAZgZQAZgZAjAAICqAAQAkAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgkAAg");
	this.shape_10.setTransform(59.7,426.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3C3B40").s().p("AhVBWQgjAAgZgZQgZgaAAgjQAAgjAZgZQAZgZAjABICqAAQAkgBAZAZQAZAaAAAiQAAAjgZAaQgZAZgkAAg");
	this.shape_11.setTransform(315.7,452.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3C3B40").s().p("AhUBWQgkAAgZgZQgZgaAAgjQAAgjAZgZQAZgZAkABICqAAQAigBAaAZQAYAZAAAjQAAAjgYAaQgaAZgiAAg");
	this.shape_12.setTransform(273.1,452.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3C3B40").s().p("AhUBWQgjAAgagZQgZgaAAgjQAAgiAZgaQAagZAjABICpAAQAkgBAZAZQAZAaAAAiQAAAjgZAaQgZAZgkAAg");
	this.shape_13.setTransform(230.4,452.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3C3B40").s().p("AhVBWQgjAAgZgZQgZgaAAgjQAAgjAZgZQAZgZAjABICqAAQAkgBAZAZQAZAaAAAiQAAAjgZAaQgZAZgkAAg");
	this.shape_14.setTransform(187.7,452.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3C3B40").s().p("AhUBWQgkAAgZgZQgZgaAAgjQAAgjAZgZQAZgZAkABICqAAQAigBAZAZQAZAZAAAjQAAAjgZAaQgZAZgiAAg");
	this.shape_15.setTransform(145.1,452.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3C3B40").s().p("AhUBWQgjAAgagZQgZgaAAgjQAAgiAZgaQAagZAjABICpAAQAkgBAZAZQAZAaAAAiQAAAjgZAaQgZAZgkAAg");
	this.shape_16.setTransform(102.4,452.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3C3B40").s().p("AhVBWQgjAAgZgZQgZgaAAgjQAAgjAZgZQAZgZAjABICqAAQAkgBAZAZQAZAaAAAiQAAAjgZAaQgZAZgkAAg");
	this.shape_17.setTransform(59.7,452.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3C3B40").s().p("AhUBVQgkAAgZgZQgZgYAAgkQAAgiAZgZQAZgZAkAAICpAAQAkAAAZAZQAYAZAAAiQAAAkgYAYQgZAZgkAAg");
	this.shape_18.setTransform(42.7,477.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3C3B40").s().p("AhUBVQgkAAgZgZQgZgZAAgjQAAgiAZgZQAagZAjAAICpAAQAkAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgkAAg");
	this.shape_19.setTransform(332.8,477.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3C3B40").s().p("AxUBVQgjAAgagZQgZgYAAgkQAAgiAZgZQAagZAjAAMAipAAAQAkAAAYAZQAaAZAAAiQAAAkgaAYQgYAZgkAAg");
	this.shape_20.setTransform(187.7,477.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFEC96").s().p("AjwGcQhkhkAAiNIAAlVQAAiOBkhjQBjhkCNAAQCNAABkBkQBkBjAACOIAAFVQAACNhkBkQhkBkiNAAQiNAAhjhkg");
	this.shape_21.setTransform(435.2,452.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#7A7781").s().p("An/FWIBWqrINUAAIBVKrg");
	this.shape_22.setTransform(238.9,264.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFC573").s().p("A5UEAQhHAAgygyQgygxAAhHIAAlVMA3/AAAIAAFVQAABHgyAxQgyAyhHAAg");
	this.shape_23.setTransform(238.9,204.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFEC96").s().p("A7/NVIAA3+QAAhHAygyQAygyBHAAMAypAAAQBHAAAyAyQAyAyAABHIAAX+g");
	this.shape_24.setTransform(238.9,93.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFC573").s().p("A5UIAQhHAAgygyQgygyAAhHIAAqqQAAhGAygyQAygyBHAAMAypAAAQBHAAAyAyQAyAyAABGIAAKqQAABHgyAyQgyAyhHAAg");
	this.shape_25.setTransform(187.7,452.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,477.9,512);
p.frameBounds = [rect];


(lib.carsvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// car.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCD1D3").s().p("AYZD7QhohnAAiUQAAiTBohnQBnhoCUABQCTgBBoBoQBnBnAACTQAACUhnBnQhnBniUABQiUgBhnhngAZQjDQhQBRAAByQAABzBQBRQBRBQBzAAQBzAABQhQQBQhRAAhzQAAhyhQhRQhQhPhzAAQhzAAhRBPgEggOAD7QhnhnAAiUQAAiTBnhnQBohoCTABQCUgBBnBoQBoBnAACTQAACUhoBnQhnBniUABQiTgBhohngA/WjDQhQBRAAByQAABzBQBRQBQBQBzAAQB0AABQhQQBQhRAAhzQAAhyhQhRQhQhPh0AAQhzAAhQBPg");
	this.shape.setTransform(252,248.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6CD3EA").s().p("AMrB9Qm7iKl1AAQlzAAm3CKQkcBZj1B7QCDlVEziiQFFiqI8AAIALAAQJFAAFGCqQE0CiCAFVQjyh6kkhag");
	this.shape_1.setTransform(251.9,53.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFB551").s().p("AY3B1QgzgTAAgdIAAhDQAAg6ApgnQApgoA7AAIBHAAQA8AAAoApQAoApgGA3IAABDQAAAbgyAUQgyAUhJAAQhIAAgygTgA8rB1QgzgTAAgdIAAhDQAAg6AqgnQApgoA7AAIBHAAQA7AAAoApQApApgGA3IAABDQAAAbgzAUQg0AUhGAAQhJAAgygTg");
	this.shape_2.setTransform(251.3,171.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BEC9CC").s().p("AbABUQgigiAAgyQAAgxAigiQAigiAyAAQAyAAAiAiQAiAiAAAxQAAAygiAiQgiAigyAAQgyAAgigigA9nBUQgigiAAgyQAAgxAigiQAigiAyAAQAwAAAjAiQAkAiAAAxQAAAygiAiQgiAigzAAQgyAAgigig");
	this.shape_3.setTransform(252,248.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E0E4E5").s().p("AYZD7QhohnAAiUQAAiTBohnQBnhoCUABQCTgBBoBoQBnBnAACTQAACUhnBnQhnBniUABQiUgBhnhngEggOAD7QhnhnAAiUQAAiTBnhnQBohoCTABQCUgBBnBoQBoBnAACTQAACUhoBnQhnBniUABQiTgBhohng");
	this.shape_4.setTransform(252,248.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF7A70").s().p("AhOOxIAA9hICdAAIAAdhg");
	this.shape_5.setTransform(252,212.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DD3626").s().p("AECLsIAA3XQGLADFFBCQEFA1DFBaQisCHiNDMQi+EShwFzQgcBZg3BUQhTB+hWAAgAowLsQhUAAhUh+Qg6hYgahVQhyl4jBkRQiOjLiuiEQDQhbEKg1QFShEGZAAIAAXXg");
	this.shape_6.setTransform(249.9,212.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF564A").s().p("Ao2OzQjAAAiPjdQgthFgjhSIgahFQiWn0kekeQhahZhcg6IhLgnQhigoAng/QANgTAYgUIAWgQQGPjiKzhFQFagjEJALICvgBQDbACDYAWQKzBEGUDkIAUAOQAXASAMASQAkA6hbAqQhyAtiRCRQkgEiiWH0QgiBuhIBuQiPDdjAAAg");
	this.shape_7.setTransform(252,212.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E4E8E8").s().p("EgiPACxQhnAAhIhFQhJhGAAhgQAAgyAkgiQAkgiAyAAMBIaAAAQAzAAAkAiQAkAiAAAyQAABghIBGQhJBFhoAAg");
	this.shape_8.setTransform(251.9,324.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DD3626").s().p("EgjcAMWQiDgDhAhMQg4hCgBhzIAAjBQABi2BFikQBDigB6h7QB6h7CehDQCkhGCzAAIZqjtIZiDtQC0AACkBGQCfBDB5B8QB6B7BDChQBGClgBC3IAADBQAAB0g2BBQhBBLiFAAg");
	this.shape_9.setTransform(252.1,232.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9B2317").s().p("AwFDtQjKguhvg8Qhyg/AAhEQAAhDByg+QBvg8DKgvQGrhiJaAAQJbAAGrBiQDKAvBvA8QByA+AABDQAABEhyA/QhvA8jKAuQmrBipbAAQpaAAmrhig");
	this.shape_10.setTransform(252,332.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5BC7DE").s().p("A2wLZQAAl5A/j9QBFkXCcixQCli6EWhbQEehdGsAAIALAAQGyAAEhBdQEYBbCmC6QCcCxBGEXQA+D9AAF5g");
	this.shape_11.setTransform(252,92.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DD3626").s().p("A51M7QAAmrBHkgQBPk9CxjIQC7jUE7hnQFEhqHlAAIAMAAQHtAAFJBqQE+BnC9DUQCyDIBPE9QBHEeAAGtg");
	this.shape_12.setTransform(252,82.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1A4C5B").s().p("AdVHtQhrgBhMhNQhNhNAAhtIAAqCIKZhPIAALRQAABthLBNQhMBNhsABgA/lHtQhrgBhMhNQhNhNAAhtIAArRIKZBPIAAKCQAABthLBNQhMBNhtABg");
	this.shape_13.setTransform(251.8,384);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0B2A34").s().p("AWtDsQhQAAg4g5Qg5g5AAhTIAAkSIIAAAIAAHXgA7rDsIAAnXIIAAAIAAESQAABTg5A5Qg4A5hQAAg");
	this.shape_14.setTransform(252,366.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,504.1,433.3);
p.frameBounds = [rect];


(lib.anvilsvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// anvil.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#343740").s().p("AqBDLQgdh2hAhoQg+hnhZhRIbsAAQhaBRg+BnQg/BogeB2g");
	this.shape.setTransform(255.2,157.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B6B7BC").s().p("ApLC6ICYlzIP/AAIiYFzg");
	this.shape_1.setTransform(308.2,276.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B6B7BC").s().p("AsYKvIIy1dIP/AAIoxVaQgvADg4AAg");
	this.shape_2.setTransform(361.6,68.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#93959D").s().p("AumKvQhthhiGg0QiMg3iXAAQh8AAh1AlQhyAkhiBEQjJhKiciVQiciUhUjFMAhHAAAIAArmMAtmAAAQAAELhjD1QhfDsivC8QivC7jlBwQjsBzkGAUQgwADg4AAg");
	this.shape_3.setTransform(260.1,68.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#93959D").s().p("A0IC6IAAlzMAoRAAAIAAFzg");
	this.shape_4.setTransform(255.7,276.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#454A54").s().p("AyqAbQhRjAgBjVMAiZAAAIFgL1g");
	this.shape_5.setTransform(127.7,71.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#454A54").s().p("At/J6IAAgIQB/hxBHiZQBJifAAiwQAAhegWheQgdh2hAhqQg+hnhZhQIN3kXIN1EXQhaBQg+BnQg/BqgeB2QgWBeAABeQAAC0BMChQBJCcCEBwIrwDZg");
	this.shape_6.setTransform(255.7,194.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,512,295.2);
p.frameBounds = [rect];


(lib.airplanesvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// airplane.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5F7680").s().p("ACSEkQAAi1iAh/QiAiBi1AAIAAh2QBPgcBDAAQC0AACBCAQCACBAAC0QAABDgcBPg");
	this.shape.setTransform(447.8,64.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5F7680").s().p("AqPKRQgSgSA/hkQCAjJGbmaQGambDJiAQBkhAATASIABAWQgHAigoA/QiADJmbGaQmaGbjJCAQhNAygdAAQgIAAgEgFg");
	this.shape_1.setTransform(133.6,378.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C9D7DE").s().p("EghLAhMQiJiJESoRQBVimB1i5IBjiYIS1z9QTZ0iC3i3QBohpC1hVQClhNC9grQC3grCPAEQCWADA1A2QA2A1ADCWQAECPgqC3QgsC9hNClQhVC1hpBoUgEkAElgmyAkgQjuCkkJCJQlhC3iyAAQhZAAgugug");
	this.shape_2.setTransform(295,216.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00AEF1").s().p("AaSfcQhkhlg5jPQhklulNxHIk4v+Qn+iho0iuQxrlbkWg/QjPguhlhhQhahVAPhlQAPhgBmhDQBshGCfgCQESgDazBHQNaAkMkAlQAiMjAiNbQBFazADESQACCfhBBsQg+BmheAOQgOACgOAAQhUAAhMhNg");
	this.shape_3.setTransform(223.7,288.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00AEF1").s().p("AKxPVQhLgZg3g2QhbhckAmRIjsmAQi3hsjJiAQmRkAhchbQg2g3gZhLQgZhMANhEQAPhKA4grQA/gwBoAAQC2AALaBKQFtAkFIAlIBKK2QBJLZAAC2QAABogwA/QgrA4hKAPQgYAFgZAAQguAAgxgRg");
	this.shape_4.setTransform(99.7,412.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5F7680").s().p("AjOGdIjPjPQgqgqAAg9QAAg8AqgrIGdmcQArgrA9AAQA8AAAqArIDPDOQArArAAA9QAAA8grAqImdGdQgqArg8AAQg8AAgsgrg");
	this.shape_5.setTransform(214.1,78.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5F7680").s().p("AjNGdIjPjPQgrgqAAg9QAAg8ArgrIGcmcQArgrA8AAQA9AAArArIDODOQArArAAA8QAAA9grAqImdGdQgqArg8AAQg9AAgqgrg");
	this.shape_6.setTransform(433.2,297.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,512,512);
p.frameBounds = [rect];


(lib.btn1_dot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AilCmQhFhEAAhiQAAhhBFhEQBFhEBggBQBiABBFBEQBDBEAABhQAABihDBEQhFBEhiAAQhgAAhFhEg");
	this.shape.setTransform(23.5,23.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn1_dot, rect = new cjs.Rectangle(0,0,46.9,46.9), [rect]);


(lib.btn_voltar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAtCIIhAhoIgfAAIAABoIg6AAIAAkPIBQAAQA2AAAbAUQAaAUAAApQAAAYgNATQgNASgYAKIBQB3gAgygOIATAAQAbAAAMgKQANgJAAgTQAAgUgNgIQgNgIgcAAIgRAAg");
	this.shape.setTransform(190,39.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABGCJIgUhBIhjAAIgTBBIg/AAIBhkRIBFAAIBhERgAgiAXIBGAAIgfhiIgFgSIgiB0g");
	this.shape_1.setTransform(162.5,39.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcCIIAAjfIhKAAIAAgwIDNAAIAAAwIhKAAIAADfg");
	this.shape_2.setTransform(138.3,39.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhTCIIAAkPIA5AAIAADfIBuAAIAAAwg");
	this.shape_3.setTransform(117.5,39.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhfBoQgigkAAhEQAAhDAigkQAhgkA+AAQA/AAAiAkQAhAkAABDQAABEghAkQgjAkg+AAQg+AAghgkgAgzhEQgRAXAAAtQAAAuARAXQASAXAhAAQBFAAAAhcQAAhbhFAAQghAAgSAXg");
	this.shape_4.setTransform(90.4,39.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfCIIhckPIA6AAIAzChIAJAhIAFAbQACgRAMgrIA0ihIA6AAIhdEPg");
	this.shape_5.setTransform(62.8,39.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// bg
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F18F01").s().p("AzoF3IAArtMAkJAAAQAqAAAiAJQB8AhAACZIAAIqg");
	this.shape_6.setTransform(125.6,37.5,1,1,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CA7801").s().p("AzoGBIAAo5QAAjIDIAAMAkJAAAIAAMBg");
	this.shape_7.setTransform(125.6,38.4,1,1,0,180,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,251.4,75);
p.frameBounds = [rect, new cjs.Rectangle(0,0,251.4,77)];


(lib.btn_reiniciar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAtCIIhAhoIgfAAIAABoIg6AAIAAkPIBQAAQA2AAAbAUQAaAUAAApQAAAYgNATQgNASgYAKIBQB3gAgygOIATAAQAbAAAMgKQANgJAAgTQAAgUgNgIQgNgIgcAAIgRAAg");
	this.shape.setTransform(211.8,37.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABGCJIgUhBIhjAAIgTBBIg/AAIBhkRIBFAAIBhERgAgiAXIBGAAIgfhiIgFgSIgiB0g");
	this.shape_1.setTransform(184.3,37.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcCIIAAkPIA5AAIAAEPg");
	this.shape_2.setTransform(164.8,37.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhIBoQgfgkAAhEQAAgpAQggQAPggAegRQAcgRAmAAQAoAAAoATIgSAvIgfgNQgQgFgPAAQggAAgRAZQgTAYABArQAABbBDAAQAdAAApgOIAAAwQgiAOgpAAQg7AAgggkg");
	this.shape_3.setTransform(146.7,37.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgcCIIAAkPIA5AAIAAEPg");
	this.shape_4.setTransform(127.8,37.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAvCIIh1jNIgCAAQADA3ABAWIAACAIg0AAIAAkPIBJAAIB1DLIACAAQgEg1AAgVIAAiBIA1AAIAAEPg");
	this.shape_5.setTransform(106,37.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcCIIAAkPIA5AAIAAEPg");
	this.shape_6.setTransform(84.1,37.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhOCIIAAkPICdAAIAAAvIhjAAIAAA8IBbAAIAAAuIhbAAIAABGIBjAAIAAAwg");
	this.shape_7.setTransform(67.7,37.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAtCIIhAhoIgfAAIAABoIg6AAIAAkPIBQAAQA2AAAbAUQAaAUAAApQAAAYgNATQgNASgYAKIBQB3gAgygOIATAAQAbAAAMgKQANgJAAgTQAAgUgNgIQgNgIgcAAIgRAAg");
	this.shape_8.setTransform(45.5,37.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// bg
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F18F01").s().p("AzoF3IAArtMAkJAAAQAqAAAiAJQB8AhAACZIAAIqg");
	this.shape_9.setTransform(125.6,37.5,1,1,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CA7801").s().p("AzoGBIAAo5QAAjIDIAAMAkJAAAIAAMBg");
	this.shape_10.setTransform(125.6,38.4,1,1,0,180,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9}]}).to({state:[{t:this.shape_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,251.4,75);
p.frameBounds = [rect, new cjs.Rectangle(0,0,251.4,77)];


(lib.btn_onda = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AuHRvMAAAgjdIcPAAMAAAAjdg");
	this.shape.setTransform(83.5,108.5,0.924,0.956);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,167,217);
p.frameBounds = [rect];


(lib.btn_dot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AilCmQhFhEAAhiQAAhhBFhEQBFhEBggBQBiABBFBEQBDBEAABhQAABihDBEQhFBEhiAAQhgAAhFhEg");
	this.shape.setTransform(23.5,23.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_dot, rect = new cjs.Rectangle(0,0,46.9,46.9), [rect]);


(lib.btn_conteudo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("ABNBmIAAiDQAAgWACgaIgBAAIhGCzIgSAAIhFi0IgBAAQACAVAAAeIAACBIgWAAIAAjLIAkAAIBACnIAAAAIBCinIAjAAIAADLg");
	this.shape.setTransform(216.8,54.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhRBmIAAjLIA/AAQAvAAAaAaQAbAaAAAwQAAAxgcAcQgbAagzAAgAg5BRIAdAAQApABAWgWQAVgVABgnQgBgogTgVQgVgTgmgBIgjAAg");
	this.shape_1.setTransform(194,54.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("ABCBmIgZhAIhRAAIgZBAIgZAAIBRjMIATAAIBQDMgAgIguIgYA+IBBAAIgYg+IgJgeQgCAOgGAQg");
	this.shape_2.setTransform(174,54.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgvBDQgNgLgBgWQAAgtBKgDIAagBIAAgJQAAgSgIgJQgHgIgSAAQgSAAgYAMIgHgSQALgGAOgEQANgDANAAQAbAAANAMQANAMABAbIAABnIgSAAIgFgWIgBAAQgLAPgLAFQgMAFgQAAQgXAAgMgMgAAPACQgaABgNAIQgMAHAAAQQAAANAIAGQAHAHAOAAQAVAAAMgMQAMgMAAgVIAAgOg");
	this.shape_3.setTransform(149,57.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgxBaQgRgVAAgmQAAglARgVQAQgVAeAAQAeAAARAXIACAAIgBgLIgBgLIAAg+IAXAAIAADYIgSAAIgDgUIgCAAQgQAXgfAAQgeAAgQgUgAgfgMQgLAOAAAdQAAAeALAPQAKAPAVAAQAXAAALgNQAKgNAAgdIAAgFQAAgfgKgOQgLgOgXAAQgVAAgKAQg");
	this.shape_4.setTransform(132.4,54.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("Ag1BFIAAgVQALAGANADQAMADAMAAQARAAAKgFQAKgGAAgMQAAgJgIgHQgIgGgVgJQgWgGgJgGQgJgHgEgHQgEgHAAgLQAAgTAPgLQAPgLAaABQAYgBAYALIgIATQgXgKgTAAQgQAAgIAFQgIAFAAAJQAAAGADAFQADAEAHAEQAHAEATAHQAbAKAKAKQAJAJAAAPQAAAWgQALQgQAMgcAAQgeAAgRgKg");
	this.shape_5.setTransform(109.9,57.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgwBDQgMgLAAgWQAAgtBJgDIAagBIAAgJQAAgSgIgJQgHgIgSAAQgSAAgYAMIgHgSQALgGANgEQAOgDAMAAQAcAAAOAMQAMAMAAAbIAABnIgRAAIgEgWIgBAAQgMAPgMAFQgLAFgQAAQgXAAgNgMgAAPACQgaABgNAIQgMAHAAAQQAAANAHAGQAIAHAOAAQAVAAAMgMQAMgMAAgVIAAgOg");
	this.shape_6.setTransform(94.5,57.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgLBpIAAiYIAXAAIAACYgAgJhNQgEgDAAgIQAAgJAEgDQAEgEAFAAQAGAAAEAEQAEADAAAJQAAAIgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_7.setTransform(83.5,54.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgrBOIAAiYIATAAIADAdIABAAQAJgQALgIQAMgIAOAAQAKAAAIACIgDAWQgJgDgIAAQgSAAgNAPQgMAPAAAXIAABRg");
	this.shape_8.setTransform(75,57.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgkBFQgQgJgJgSQgIgSAAgYQAAgkATgWQASgUAgAAQAhgBATAWQASAVAAAkQAAAmgSAUQgTAWghgBQgUAAgQgKgAgigrQgLAOAAAdQAAAdAMAQQALAPAWAAQAXAAAMgPQALgQAAgdQAAgcgLgPQgMgPgXgBQgWABgMAPg");
	this.shape_9.setTransform(59.5,57.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgsA6QgUgUAAglQAAgkATgWQASgVAdAAQAdgBARAUQARASAAAfIAAAOIhpAAQABAbANAOQANAOAWAAQAZAAAYgLIAAAVQgMAFgLADQgLACgQAAQggABgUgWgAgagvQgLAMgCAVIBPAAQAAgWgKgLQgKgMgSAAQgRAAgLAMg");
	this.shape_10.setTransform(42.9,57.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgLBmIAAi2IhAAAIAAgVICYAAIAAAVIhBAAIAAC2g");
	this.shape_11.setTransform(26.9,54.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("Ag1BFIAAgVQALAGANADQAMADAMAAQARAAAKgGQAKgFAAgNQAAgIgIgGQgIgHgVgJQgWgHgJgGQgJgFgEgIQgEgHAAgLQAAgTAPgKQAPgMAaAAQAYAAAYALIgIATQgXgKgTAAQgQAAgIAFQgIAFAAAKQAAAFADAFQADAFAHADQAHAEATAHQAbAKAKAJQAJALAAAOQAAAWgQAMQgQAMgcgBQgeABgRgLg");
	this.shape_12.setTransform(217.5,25.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgvBDQgNgLgBgWQAAgtBKgDIAagBIAAgJQAAgSgIgJQgHgIgSAAQgSAAgYAMIgHgSQALgGAOgEQANgDANAAQAbAAANAMQANAMABAbIAABnIgSAAIgFgWIgBAAQgLAPgLAFQgMAFgQAAQgXAAgMgMgAAPACQgaABgNAIQgMAHAAAQQAAANAIAGQAHAHAOAAQAVAAAMgMQAMgMAAgVIAAgOg");
	this.shape_13.setTransform(202.1,25.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgxBaQgRgVAAgmQAAglARgVQAQgVAeAAQAeAAARAXIACAAIgBgLIgBgLIAAg+IAXAAIAADYIgSAAIgDgUIgCAAQgQAXgfAAQgeAAgQgUgAgfgMQgLAOAAAdQAAAeALAPQAKAPAVAAQAXAAALgNQAKgNAAgdIAAgFQAAgfgKgOQgLgOgXAAQgVAAgKAQg");
	this.shape_14.setTransform(185.4,22.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgwBDQgNgLABgWQgBgtBKgDIAagBIAAgJQAAgSgIgJQgIgIgRAAQgSAAgYAMIgHgSQALgGANgEQAOgDAMAAQAcAAAOAMQAMAMAAAbIAABnIgRAAIgFgWIAAAAQgMAPgMAFQgKAFgRAAQgXAAgNgMgAAPACQgaABgNAIQgMAHAAAQQAAANAHAGQAIAHAOAAQAVAAAMgMQAMgMAAgVIAAgOg");
	this.shape_15.setTransform(161.2,25.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgLBpIAAiYIAXAAIAACYgAgJhNQgEgEAAgHQAAgJAEgDQAEgEAFAAQAGAAAEAEQAEADAAAJQAAAHgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_16.setTransform(150.1,23.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("Ag3BlQgQgLAAgUQAAgOAJgKQAJgLAQgDQgGgDgEgGQgEgFAAgHQAAgJAEgFQAFgGAKgGQgMgFgIgMQgHgMAAgPQAAgZAPgNQAPgOAcAAQALAAAJADIA1AAIAAAOIgcAEQAEAFADAIQADAHAAAKQAAAXgQANQgPAOgaAAQgHAAgGgCQgOAIAAALQAAAGAFAEQAFACANAAIAaAAQAYAAAOALQANAKAAAUQAAAagUANQgVANgmAAQgeAAgQgLgAgoAwQgJAHAAAOQAAANALAGQAKAHAUAAQAcAAAOgJQAOgJAAgPQAAgMgIgFQgIgFgVAAIgbAAQgPAAgJAIgAgchVQgIAIAAASQAAAQAJAIQAJAIAQAAQAhAAAAghQAAgighAAQgRAAgJAJg");
	this.shape_17.setTransform(138.6,29.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AgkBFQgQgJgJgSQgIgSAAgYQAAglATgUQASgWAgAAQAhABATAVQASAWAAAjQAAAmgSAVQgTAUghAAQgUABgQgLgAgigsQgLAPAAAdQAAAdAMAPQALAQAWAAQAXAAAMgQQALgPAAgdQAAgcgLgQQgMgOgXAAQgWAAgMAOg");
	this.shape_18.setTransform(122.2,25.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgLBtIAAjZIAXAAIAADZg");
	this.shape_19.setTransform(110,22.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgkBFQgQgJgJgSQgIgSAAgYQAAglATgUQASgWAgAAQAhABATAVQASAWAAAjQAAAmgSAVQgTAUghAAQgUABgQgLgAgigsQgLAPAAAdQAAAdAMAPQALAQAWAAQAXAAAMgQQALgPAAgdQAAgcgLgQQgMgOgXAAQgWAAgMAOg");
	this.shape_20.setTransform(97.7,25.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AApBOIAAhiQAAgTgIgJQgJgJgSAAQgXAAgLANQgMANABAdIAABQIgYAAIAAiYIATAAIAEAVIABAAQAHgMANgFQAMgHAPAAQAcAAAOANQAOAOAAAdIAABjg");
	this.shape_21.setTransform(80.4,25.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AgkBFQgQgJgJgSQgIgSAAgYQAAglATgUQASgWAgAAQAhABATAVQASAWAAAjQAAAmgSAVQgTAUghAAQgUABgQgLgAgigsQgLAPAAAdQAAAdAMAPQALAQAWAAQAXAAAMgQQALgPAAgdQAAgcgLgQQgMgOgXAAQgWAAgMAOg");
	this.shape_22.setTransform(62.8,25.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AgrBOIAAiYIATAAIADAcIABAAQAJgPALgIQAMgIAOAAQAKAAAIACIgDAWQgJgDgIAAQgSAAgNAQQgMAOAAAXIAABRg");
	this.shape_23.setTransform(49.4,25.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("Ag0BOQgYgcAAgyQAAgfAMgXQALgYAXgNQAWgNAdAAQAgAAAYAMIgKAUQgXgLgXAAQghAAgTAWQgUAXAAAmQAAAoATAWQATAWAhgBQAWAAAbgHIAAAVQgVAIgfAAQgsAAgZgbg");
	this.shape_24.setTransform(34,23.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// bg
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("rgba(255,255,255,0.008)").ss(1,1,1).p("AwgmAMAkJAAAIAAMBMgnRAAAIAAo5QAAjIDIAAg");
	this.shape_25.setTransform(125.7,38.5,1,1,0,0,180);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF9F1C").s().p("AzoGBIAAo5QAAjIDIAAMAkJAAAIAAMBg");
	this.shape_26.setTransform(125.7,38.5,1,1,0,0,180);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F18F01").s().p("AzoGBIAAo5QAAjIDIAAMAkJAAAIAAMBg");
	this.shape_27.setTransform(125.7,38.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25}]}).to({state:[{t:this.shape_27},{t:this.shape_25}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1,-1,253.4,79);
p.frameBounds = [rect, rect];


(lib.btn_conteudo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgrBOIAAiYIATAAIADAdIABAAQAJgQALgIQAMgIAOAAQAKAAAIACIgDAWQgJgDgIAAQgSAAgNAPQgMAPAAAXIAABRg");
	this.shape.setTransform(202,53.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgsA6QgUgUAAglQAAgkATgWQASgVAdAAQAdgBARAUQARASAAAfIAAAOIhpAAQABAbANAOQANAOAWAAQAZAAAYgLIAAAVQgMAFgLADQgLACgQAAQggABgUgWgAgagvQgLAMgCAVIBPAAQAAgWgKgLQgKgMgSAAQgRAAgLAMg");
	this.shape_1.setTransform(187.2,53.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgWAxIAAhaIgWAAIAAgLIAWgKIAJghIANAAIAAAkIAsAAIAAASIgsAAIAABZQAAAOAGAHQAHAHALAAIAMAAIAJgCIAAARQgEACgHABIgNACQgrAAAAgvg");
	this.shape_2.setTransform(174,51.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgsA6QgUgUAAglQAAgkATgWQASgVAdAAQAdgBARAUQARASAAAfIAAAOIhpAAQABAbANAOQANAOAWAAQAZAAAYgLIAAAVQgMAFgLADQgLACgQAAQggABgUgWgAgagvQgLAMgCAVIBPAAQAAgWgKgLQgKgMgSAAQgRAAgLAMg");
	this.shape_3.setTransform(161,53.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AhDBwIAAjcIATAAIAEAVIABAAQAIgNAMgGQANgFAOAAQAfAAAQAVQAQAUAAAmQABAlgSAVQgQAVgeAAQgOAAgNgGQgMgFgIgMIgCAAQACANAAAMIAAA/gAgghOQgLANAAAcIAAAFQAAAgALANQALAOAWAAQAUAAALgQQAMgPAAgcQAAgdgMgPQgLgPgUAAQgXAAgKANg");
	this.shape_4.setTransform(144.7,56.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("ABWBOIAAhiQAAgTgIgJQgIgJgQAAQgWAAgKANQgKAMAAAZIAABVIgXAAIAAhiQAAgTgHgJQgIgJgRAAQgWAAgKANQgKANAAAeIAABPIgXAAIAAiYIATAAIADAVIACAAQAGgLAMgHQAMgGAPAAQAkAAAKAaIABAAQAHgMANgHQANgHAQAAQAaAAANAOQANANAAAdIAABjg");
	this.shape_5.setTransform(122.2,53.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgxBAQgOgNAAgdIAAhjIAYAAIAABiQgBATAJAJQAJAKARAAQAXgBAMgNQALgNAAgdIAAhQIAXAAIAACYIgTAAIgDgVIgCAAQgHAMgNAGQgMAGgQAAQgcAAgNgOg");
	this.shape_6.setTransform(100,53.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AApBtIAAhjQAAgSgJgJQgIgJgTAAQgWAAgMANQgKANgBAdIAABQIgXAAIAAjZIAXAAIAABCQABAMgCAIIABAAQAIgLAMgGQANgHAPAAQAcAAAOAOQAOANAAAcIAABkg");
	this.shape_7.setTransform(82.6,50);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgkA7QgSgVAAglQAAglASgWQATgUAhAAQALgBALADQALACAGAEIgHAUQgHgEgJgCQgKgCgHAAQgtAAAAA7QAAAcALAPQAMAPAVAAQATAAAUgIIAAAVQgPAHgXAAQghAAgSgUg");
	this.shape_8.setTransform(67.2,53.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("Ag/BgIAAgYQAMAGAPADQAPADAOAAQAXAAAMgJQAMgJAAgQQAAgKgEgHQgEgIgKgFQgKgFgUgIQgcgJgNgOQgMgOAAgXQAAgXASgOQASgOAcAAQAeAAAaALIgIAUQgZgKgYAAQgSAAgKAIQgLAIAAAOQAAALAEAHQAEAHAJAGQAKAFASAHQAgAKAMAOQAMANAAAVQAAAbgUAOQgTAQghAAQgkAAgTgJg");
	this.shape_9.setTransform(52.3,50.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgsA6QgUgUAAglQAAgkATgWQASgVAdAAQAdgBARAUQARASAAAfIAAAOIhpAAQABAbANAOQANAOAWAAQAZAAAYgKIAAAUQgMAFgLADQgLACgQAAQggABgUgWgAgagvQgLAMgCAVIBPAAQAAgWgKgLQgKgMgSAAQgRAAgLAMg");
	this.shape_10.setTransform(198.7,26.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgxBaQgRgVAAgmQAAglARgVQAQgVAeAAQAeAAARAXIACAAIgBgLIgBgLIAAg+IAXAAIAADYIgSAAIgDgUIgCAAQgQAXgfAAQgeAAgQgUgAgfgMQgLAOAAAdQAAAeALAPQAKAPAVAAQAXAAALgNQAKgNAAgdIAAgFQAAgfgKgOQgLgOgXAAQgVAAgKAQg");
	this.shape_11.setTransform(181.4,23.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("Ag1BFIAAgVQALAGANADQAMADAMAAQARAAAKgFQAKgHAAgLQAAgJgIgHQgIgGgVgJQgWgGgJgGQgJgHgEgHQgEgHAAgLQAAgTAPgLQAPgLAaABQAYgBAYALIgIATQgXgKgTAAQgQAAgIAFQgIAFAAAJQAAAGADAFQADAEAHAEQAHAEATAHQAbAKAKAKQAJAJAAAPQAAAWgQALQgQAMgcAAQgeAAgRgKg");
	this.shape_12.setTransform(158.9,26.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgwBDQgMgLAAgWQAAgtBJgDIAagBIAAgJQAAgSgIgJQgHgIgSAAQgSAAgYAMIgHgSQALgGANgEQAOgDAMAAQAcAAAOAMQAMAMAAAbIAABnIgRAAIgEgWIgBAAQgMAPgMAFQgLAFgQAAQgXAAgNgMgAAPACQgaABgNAIQgMAHAAAQQAAANAHAGQAIAHAOAAQAVAAAMgMQAMgMAAgVIAAgOg");
	this.shape_13.setTransform(143.6,26.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgxBaQgRgVAAgmQAAglARgVQAQgVAeAAQAeAAARAXIACAAIgBgLIgBgLIAAg+IAXAAIAADYIgSAAIgDgUIgCAAQgQAXgfAAQgeAAgQgUgAgfgMQgLAOAAAdQAAAeALAPQAKAPAVAAQAXAAALgNQAKgNAAgdIAAgFQAAgfgKgOQgLgOgXAAQgVAAgKAQg");
	this.shape_14.setTransform(126.9,23.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AApBOIAAhiQAAgSgIgKQgJgJgSAAQgXAAgLANQgLANAAAeIAABPIgYAAIAAiYIATAAIADAVIACAAQAHgLANgGQANgHAOAAQAcAAAOAOQAOANAAAdIAABjg");
	this.shape_15.setTransform(109.9,26.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgkBFQgQgJgJgSQgIgSAAgYQAAgkATgWQASgUAgAAQAhgBATAWQASAVAAAkQAAAmgSAUQgTAWghgBQgUAAgQgKgAgigrQgLAOAAAdQAAAdAMAQQALAPAWAAQAXAAAMgPQALgQAAgdQAAgcgLgPQgMgPgXgBQgWABgMAPg");
	this.shape_16.setTransform(92.4,26.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("Ag1BFIAAgVQALAGANADQAMADAMAAQARAAAKgFQAKgHAAgLQAAgJgIgHQgIgGgVgJQgWgGgJgGQgJgHgEgHQgEgHAAgLQAAgTAPgLQAPgLAaABQAYgBAYALIgIATQgXgKgTAAQgQAAgIAFQgIAFAAAJQAAAGADAFQADAEAHAEQAHAEATAHQAbAKAKAKQAJAJAAAPQAAAWgQALQgQAMgcAAQgeAAgRgKg");
	this.shape_17.setTransform(69.6,26.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("ABCBmIgZhAIhSAAIgYBAIgZAAIBRjMIATAAIBQDMgAgIguIgYA+IBBAAIgYg+IgJgeQgCAOgGAQg");
	this.shape_18.setTransform(53.6,24.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// bg
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(255,255,255,0.008)").ss(1,1,1).p("AwgmAMAkJAAAIAAMBMgnRAAAIAAo5QAAjIDIAAg");
	this.shape_19.setTransform(125.7,38.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF9F1C").s().p("AzoGBIAAo5QAAjIDIAAMAkJAAAIAAMBg");
	this.shape_20.setTransform(125.7,38.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F18F01").s().p("AzoGBIAAo5QAAjIDIAAMAkJAAAIAAMBg");
	this.shape_21.setTransform(125.7,38.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19}]}).to({state:[{t:this.shape_21},{t:this.shape_19}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-0.9,-1,253.4,79);
p.frameBounds = [rect, rect];


(lib.img11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AllAAILLAA");
	this.shape.setTransform(42.3,71.3,0.763,0.763);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFBF69").s().p("AgIAUIgFgCIAAgJIAGADIAGABQAFAAABgEIgBgCIgDgCIgEgCIgGgDIgEgDIgBgFQAAgFAFgDQAEgDAFAAQAIAAAHADIgEAIIgFgCIgGgBQgDAAAAACQAAABAAAAQAAAAAAABQABAAAAAAQAAABABAAIAFADIAHADIADADIABAFQAAAGgEADQgEADgIAAIgHAAg");
	this.shape_1.setTransform(61.8,65.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFBF69").s().p("AAHAUIAAgWQAAgEgBgCQgCgCgDAAQgDAAgCACQgCAEAAAFIAAATIgLAAIAAgmIAIAAIABAFIABAAQACgDADgBQACgCAEAAQAHAAADAEQAEAEAAAGIAAAZg");
	this.shape_2.setTransform(57.7,65.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFBF69").s().p("AgMAPQgFgFAAgKQAAgIAFgGQAFgFAIAAQAIAAAEAFQAFAEAAAJIAAAEIgYAAQAAAEACADQADACAEAAIAGAAIAHgDIAAAJIgGACIgIAAQgIAAgGgFgAgEgJQgCACAAAEIAOAAQAAgEgCgCQgCgDgDAAQgDAAgCADg");
	this.shape_3.setTransform(53.2,65.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFBF69").s().p("AgOAaQgFgDAAgFQAAgEADgCQACgDAEgBIgDgCIgBgDIABgDIAEgDQgDgBgCgDQgCgDAAgEQAAgHAFgDQAEgDAHgBIADABIADAAIAOAAIAAAGIgGABQABADAAADQAAAHgEADQgEAEgHgBIgCAAIgCAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAABAAAAQAAACAFABIAGAAQAHgBADADQADADAAAFQAAAHgFAEQgGAEgKAAQgIAAgEgDgAgHAOQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAABABQACABAEAAQAFAAADgCQADgBAAgDQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAIgGgBIgEAAQgDAAgCACgAgFgOQAAADABACQABABAAAAQAAAAABABQAAAAABAAQABAAAAAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABgBQABgCAAgDQAAgHgFAAQgFAAAAAHg");
	this.shape_4.setTransform(49,66.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFBF69").s().p("AgNARQgDgDgBgGQABgGAEgCQAEgDAIAAIAHgBIAAgBQAAgGgHAAQgDAAgHADIgDgIQAHgDAHAAQAIAAAEADQAEAEAAAHIAAAZIgHAAIgCgGIAAAAQgDAEgDABIgGABQgGAAgDgDgAgDADQgDACAAADQABAFAEAAQAEAAACgCQACgDAAgDIAAgDIgFAAQgDAAgCABg");
	this.shape_5.setTransform(44.7,65.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFBF69").s().p("AgNAXQgFgGAAgKQABgIAEgGQADgFAIAAQAGAAAEAGIAAAAIgBgIIAAgNIALAAIAAA2IgIAAIgCgFIgBAAQgDAGgGgBQgIAAgDgEgAgEAAQgCACgBAFQABAGACADQACADACAAQAFAAACgCQABgDAAgGIAAgBQAAgGgBgCQgDgCgEAAQgCAAgCADg");
	this.shape_6.setTransform(40.3,65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFBF69").s().p("AgMAUIAAgmIAIAAIACAHIABAAQABgEACgCQAEgCADAAIAEABIgBAKIgDgBQgFAAgDACQgCADAAAEIAAAUg");
	this.shape_7.setTransform(36.7,65.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFBF69").s().p("AgJASQgEgCgCgFQgDgFAAgGQAAgJAFgFQAFgFAJAAQAFAAAFACQADADADAEQACAFAAAFQAAAKgFAFQgFAFgJAAQgFAAgEgCgAgFgIQgCADAAAFQAAAGACADQACADADAAQAFAAABgDQADgDAAgGQAAgFgDgDQgBgDgFAAQgDAAgCADg");
	this.shape_8.setTransform(32.6,65.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFBF69").s().p("AgGAXIgBAAIgCAEIgIAAIAAg2IALAAIAAANIgBAIIABAAQADgGAHAAQAHAAAEAFQADAGAAAIQAAAKgEAGQgEAEgHAAQgGAAgDgEgAgFgBQgBACAAAFIAAABQAAAGABADQACADADAAQAEAAACgDQACgDAAgGQAAgGgCgCQgCgCgEAAQgDAAgCACg");
	this.shape_9.setTransform(28.2,65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFBF69").s().p("AANAaIgEgMIgRAAIgEAMIgMAAIASgzIANAAIASAzgAgGAEIANAAIgGgRIgBgEIgGAVg");
	this.shape_10.setTransform(23.4,65.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFBF69").s().p("AgIAUIgGgCIAAgJIAHADIAHABQAEAAAAgEIgBgCIgCgCIgEgCIgGgDIgEgDIgBgFQAAgFAFgDQADgDAHAAQAHAAAGADIgDAIIgFgCIgFgBQgEAAAAACQAAABAAAAQAAAAAAABQABAAAAAAQAAAAABABIAFADIAHADIADADIABAFQAAAGgEADQgFADgHAAIgHAAg");
	this.shape_11.setTransform(51.6,59.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFBF69").s().p("AgNARQgDgDAAgGQAAgGAEgCQAEgDAIAAIAHgBIAAgBQAAgGgGAAQgEAAgGADIgEgIQAHgDAHAAQAIAAAEADQAEAEABAHIAAAZIgIAAIgCgGIAAAAQgDAEgDABIgHABQgFAAgDgDgAgDADQgCACgBADQAAAFAGAAQACAAACgCQADgDAAgDIAAgDIgFAAQgDAAgCABg");
	this.shape_12.setTransform(47.6,59.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFBF69").s().p("AgEATIgQgmIALAAIAIAVIABAIIABgIIAIgVIAMAAIgPAmg");
	this.shape_13.setTransform(43.5,59.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFBF69").s().p("AgJASQgEgCgCgFQgDgFAAgGQAAgJAFgFQAFgFAJAAQAFAAAFACQAEADACAEQACAFAAAFQAAAKgFAFQgFAFgJAAQgEAAgFgCgAgFgIQgCADAAAFQAAAGACADQACADADAAQAEAAACgDQACgDAAgGQAAgFgCgDQgCgDgEAAQgDAAgCADg");
	this.shape_14.setTransform(39.2,59.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFBF69").s().p("AAJAZIgVglIgBAAIABAOIAAAXIgKAAIAAgxIAOAAIAVAlIAAgOIAAgXIAKAAIAAAxg");
	this.shape_15.setTransform(34,59);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgSAZQgIgJAAgQQAAgPAJgJQAJgJAPAAQAKAAAKAEIgFAMQgHgEgIAAQgIAAgFAGQgGAGAAAJQAAALAFAGQAEAFAHAAIAJgBIAAgNIgMAAIAAgLIAaAAIAAAhIgMADIgMABQgNAAgIgJg");
	this.shape_16.setTransform(57.7,77.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AALAhIgbgxIAAASIAAAfIgMAAIAAhBIASAAIAbAwIABAAIgBgRIAAgfIAMAAIAABBg");
	this.shape_17.setTransform(50.8,77.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgGAhIAAhBIANAAIAABBg");
	this.shape_18.setTransform(45.6,77.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAWAhIAAgfIAAgEIABgPIgBAAIgRAyIgLAAIgQgzIAAAUIAAAfIgMAAIAAhBIATAAIAPAxIAAAAIAQgxIATAAIAABBg");
	this.shape_19.setTransform(39.7,77.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgSAhIAAhBIAlAAIAAAMIgXAAIAAAOIAVAAIAAAKIgVAAIAAARIAXAAIAAAMg");
	this.shape_20.setTransform(33,77.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgaAhIAAhBIAVAAQAPAAAIAJQAJAIAAAPQAAAQgJAIQgJAJgRAAgAgMAVIAGAAQATAAAAgVQAAgUgSAAIgHAAg");
	this.shape_21.setTransform(27,77.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(18,44,52,0.847)").s().p("AmvDOIAAlcQAAg/A+AAILjAAQA+AAAAA/IAAFcg");
	this.shape_22.setTransform(42,69.1,0.763,0.763);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlyGlQgyAAAAgyIAArlQAAgyAyAAILlAAQAyAAAAAyIAALlQAAAygyAAg");
	mask.setTransform(42.1,42.1);

	// img
	this.instance = new lib.deming();
	this.instance.parent = this;
	this.instance.setTransform(-2.2,-9.2,0.254,0.254);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img11, rect = new cjs.Rectangle(0,0,84.2,84.8), [rect]);


(lib.img10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AllAAILLAA");
	this.shape.setTransform(42.3,71.3,0.763,0.763);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFBF69").s().p("AgNARQgDgDAAgGQgBgGAFgCQAEgDAIAAIAHgBIAAgBQAAgGgGAAQgEAAgHADIgDgIQAHgDAHAAQAIAAAEADQAFAEgBAHIAAAZIgHAAIgCgGIgBAAQgCAEgDABIgGABQgGAAgDgDgAgDADQgDACABADQAAAFAEAAQAEAAACgCQACgDAAgDIAAgDIgEAAQgEAAgCABg");
	this.shape_1.setTransform(63.5,65.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFBF69").s().p("AgEAbIAAgmIAJAAIAAAmgAgFgVQAAgFAFAAQAGAAAAAFQAAAAAAABQAAABAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgFAAAAgFg");
	this.shape_2.setTransform(60.3,64.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFBF69").s().p("AgPAAQAAgJAFgFQAFgFAJAAQAHAAAFADIgDAIIgFgCIgEgBQgIAAAAALQAAAMAIAAIAFgBQADgBADgCIAAAKIgGACIgGAAQgSAAAAgUg");
	this.shape_3.setTransform(57.4,65.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFBF69").s().p("AAHAUIAAgWQAAgEgBgCQgCgCgDAAQgDAAgCACQgCAEAAAFIAAATIgLAAIAAgmIAIAAIABAFIABAAQACgDADgBQACgCAEAAQAHAAADAEQAEAEAAAGIAAAZg");
	this.shape_4.setTransform(53.2,65.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFBF69").s().p("AgMAXQgFgFAAgKQAAgJAFgFQAFgGAIAAQAIAAAEAFQAFAFAAAHIAAAFIgYAAQAAAFACACQADADAEAAIAGgBIAHgCIAAAIIgGACIgIABQgIAAgGgFgAgEgCQgCACAAADIAOAAQAAgDgCgCQgCgCgDAAQgDAAgCACgAAJgPQgGgDgCgDIgHAGIgHAAIAAgBIAJgLIALAAIAEAFIAFAGIAAABg");
	this.shape_5.setTransform(48.7,64.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFBF69").s().p("AgOAaQgFgDAAgFQAAgEADgCQACgDAEgBIgDgCIgBgDIABgDIAEgDQgDgBgCgDQgCgDAAgEQAAgHAFgDQAEgDAHgBIADABIADAAIAOAAIAAAGIgGABQABADAAADQAAAHgEADQgEAEgHgBIgCAAIgCAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAABAAAAQAAACAFABIAGAAQAHgBADADQADADAAAFQAAAHgFAEQgGAEgKAAQgIAAgEgDgAgHAOQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAABABQACABAEAAQAFAAADgCQADgBAAgDQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAIgGgBIgEAAQgDAAgCACgAgFgOQAAADABACQABABAAAAQAAAAABABQAAAAABAAQABAAAAAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABgBQABgCAAgDQAAgHgFAAQgFAAAAAHg");
	this.shape_6.setTransform(44.5,66.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFBF69").s().p("AAHAUIAAgWQAAgEgBgCQgCgCgDAAQgDAAgCACQgCAEAAAFIAAATIgLAAIAAgmIAIAAIABAFIABAAQACgDADgBQACgCAEAAQAHAAADAEQAEAEAAAGIAAAZg");
	this.shape_7.setTransform(40.2,65.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFBF69").s().p("AgEAbIAAgmIAKAAIAAAmgAgFgVQAAgFAFAAQAGAAAAAFQAAAAAAABQAAABAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgFAAAAgFg");
	this.shape_8.setTransform(36.7,64.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFBF69").s().p("AgFAVQgCgEAAgGIAAgSIgGAAIAAgEIAGgEIADgIIAGAAIAAAIIALAAIAAAIIgLAAIAAASIABAEIAEABIAHgBIAAAIQgEABgGAAQgGAAgDgDg");
	this.shape_9.setTransform(34,65.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFBF69").s().p("AAHAUIAAgWQAAgEgBgCQgCgCgDAAQgDAAgCACQgCAEAAAFIAAATIgLAAIAAgmIAIAAIABAFIABAAQACgDADgBQACgCAEAAQAHAAADAEQAEAEAAAGIAAAZg");
	this.shape_10.setTransform(30.2,65.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFBF69").s().p("AgJASQgEgCgCgFQgDgFAAgGQAAgJAFgFQAFgFAIAAQAGAAAFACQAEADACAEQACAFAAAFQAAAKgFAFQgFAFgJAAQgFAAgEgCgAgFgIQgCADAAAFQAAAGACADQACADADAAQAEAAACgDQACgDAAgGQAAgFgCgDQgCgDgEAAQgDAAgCADg");
	this.shape_11.setTransform(25.6,65.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFBF69").s().p("AgNAUQgFgHAAgNQAAgHACgGQADgGAGgDQAGgDAFAAQAIAAAHADIgDAJIgGgCIgGgBQgFAAgDAEQgDAFAAAHQAAARALAAQAGAAAIgCIAAAJQgGACgJAAQgJAAgHgGg");
	this.shape_12.setTransform(21.1,65.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFBF69").s().p("AgNARQgDgDgBgGQABgGAEgCQAEgDAIAAIAHgBIAAgBQAAgGgGAAQgEAAgGADIgEgIQAHgDAHAAQAIAAAEADQAEAEABAHIAAAZIgIAAIgCgGIAAAAQgDAEgDABIgHABQgFAAgDgDgAgDADQgCACgBADQAAAFAGAAQACAAACgCQADgDAAgDIAAgDIgFAAQgDAAgCABg");
	this.shape_13.setTransform(56.7,59.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFBF69").s().p("AgNAWQgEgFgBgJQAAgJAFgGQAEgFAHAAQAGAAAEAGIAAAAIgBgIIAAgMIAMAAIAAA1IgJAAIgCgFIgBAAQgDAFgHABQgGAAgEgGgAgEAAQgCACAAAGQAAAFACAEQABACAEAAQADAAACgCQACgDAAgFIAAgBQAAgHgCgBQgCgDgEAAQgCAAgCADg");
	this.shape_14.setTransform(52.2,58.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFBF69").s().p("AgNARQgDgDAAgGQgBgGAFgCQAEgDAIAAIAHgBIAAgBQAAgGgGAAQgEAAgHADIgDgIQAHgDAHAAQAIAAAEADQAFAEgBAHIAAAZIgHAAIgCgGIgBAAQgCAEgDABIgGABQgGAAgDgDgAgDADQgDACABADQAAAFAEAAQAEAAABgCQADgDAAgDIAAgDIgEAAQgEAAgCABg");
	this.shape_15.setTransform(45.9,59.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFBF69").s().p("AgEAbIAAgmIAJAAIAAAmgAgFgVQAAgFAFAAQAGAAAAAFQAAAAAAABQAAABAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgFAAAAgFg");
	this.shape_16.setTransform(42.8,58.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFBF69").s().p("AgMAUIAAgmIAIAAIACAGIABAAQABgDACgCQAEgCADAAIAEAAIgBALIgDgBQgFAAgDADQgCADAAADIAAAUg");
	this.shape_17.setTransform(40.2,59.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFBF69").s().p("AgJASQgEgCgDgFQgCgFAAgGQAAgJAFgFQAFgFAIAAQAGAAAEACQAEADADAEQACAFAAAFQAAAKgFAFQgFAFgJAAQgFAAgEgCgAgFgIQgCADAAAFQAAAGACADQACADADAAQAFAAACgDQABgDAAgGQAAgFgBgDQgCgDgFAAQgDAAgCADg");
	this.shape_18.setTransform(36.2,59.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFBF69").s().p("AgMAPQgFgFAAgKQAAgIAFgGQAFgFAIAAQAIAAAEAFQAFAEAAAJIAAAEIgYAAQAAAEACADQADACAEAAIAGAAIAHgDIAAAJIgGACIgIAAQgIAAgGgFgAgEgJQgCACAAAEIAOAAQAAgEgCgCQgCgDgDAAQgDAAgCADg");
	this.shape_19.setTransform(31.9,59.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFBF69").s().p("AgEAZIAAgoIgOAAIAAgJIAlAAIAAAJIgOAAIAAAog");
	this.shape_20.setTransform(27.6,59);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AALAhIgPgZIgHAAIAAAZIgOAAIAAhBIATAAQAMAAAHAFQAGAFAAAKQAAAGgDAEQgDAEgGACIATAdgAgLgDIAEAAQAHAAACgCQADgCAAgFQAAgEgDgCQgCgCgHAAIgEAAg");
	this.shape_21.setTransform(57.9,77.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgSAhIAAhBIAlAAIAAAMIgXAAIAAAOIAVAAIAAAKIgVAAIAAARIAXAAIAAAMg");
	this.shape_22.setTransform(52,77.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgTAhIAAhBIAOAAIAAA1IAZAAIAAAMg");
	this.shape_23.setTransform(47,77.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgaAhIAAhBIAVAAQAPAAAIAJQAJAIAAAPQAAAQgJAIQgJAJgRAAgAgMAVIAGAAQATAAAAgVQAAgUgSAAIgHAAg");
	this.shape_24.setTransform(40.9,77.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgSAhIAAhBIAlAAIAAAMIgXAAIAAAOIAVAAIAAAKIgVAAIAAARIAXAAIAAAMg");
	this.shape_25.setTransform(35,77.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgGAhIAAhBIANAAIAABBg");
	this.shape_26.setTransform(30.7,77.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgSAhIAAhBIAlAAIAAAMIgXAAIAAARIAVAAIAAAKIgVAAIAAAag");
	this.shape_27.setTransform(26.8,77.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(18,44,52,0.847)").s().p("AmvDOIAAlcQAAg/A+AAILjAAQA+AAAAA/IAAFcg");
	this.shape_28.setTransform(42,69.1,0.763,0.763);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlyGlQgyAAAAgyIAArlQAAgyAyAAILlAAQAyAAAAAyIAALlQAAAygyAAg");
	mask.setTransform(42.1,42.1);

	// img
	this.instance = new lib.fiedler();
	this.instance.parent = this;
	this.instance.setTransform(-2.2,-14.1,0.449,0.449);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img10, rect = new cjs.Rectangle(0,0,84.2,84.8), [rect]);


(lib.img9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AllAAILLAA");
	this.shape.setTransform(42.3,71.3,0.763,0.763);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFBF69").s().p("AgIAUIgFgCIAAgJIAGADIAGABQAGAAAAgEIgBgCIgDgCIgEgCIgHgDIgDgDIgBgFQAAgFAEgDQAEgDAGAAQAIAAAHADIgDAIIgGgCIgGgBQgDAAAAACQAAABAAAAQAAAAAAABQABAAAAAAQAAABAAAAIAGADIAHADIADADIABAFQAAAGgEADQgEADgIAAIgHAAg");
	this.shape_1.setTransform(56.5,65.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFBF69").s().p("AgNARQgEgDABgGQgBgGAFgCQAEgDAIAAIAHgBIAAgBQAAgGgGAAQgEAAgGADIgEgIQAHgDAHAAQAIAAAEADQAFAEAAAHIAAAZIgIAAIgCgGIAAAAQgDAEgDABIgHABQgFAAgDgDgAgDADQgCACAAADQgBAFAGAAQACAAACgCQADgDAAgDIAAgDIgFAAQgDAAgCABg");
	this.shape_2.setTransform(52.4,65.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFBF69").s().p("AATAUIAAgWQAAgEgBgCQgCgCgDAAQgEAAgCACQgCADAAAFIAAAUIgJAAIAAgWQAAgEgCgCQgBgCgDAAQgEAAgCACQgCAEAAAFIAAATIgLAAIAAgmIAJAAIABAFIABAAQABgDADgBQADgCAEAAQAIAAADAGIABAAQABgDADgBIAHgCQAHAAADADQAEAEAAAHIAAAZg");
	this.shape_3.setTransform(46.8,65.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFBF69").s().p("AgMAPQgFgFAAgKQAAgIAFgGQAFgFAIAAQAIAAAEAFQAFAEAAAJIAAAEIgYAAQAAAEACADQADACAEAAIAGAAIAHgDIAAAJIgGACIgIAAQgIAAgGgFgAgEgJQgCACAAAEIAOAAQAAgEgCgCQgCgDgDAAQgDAAgCADg");
	this.shape_4.setTransform(41.2,65.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFBF69").s().p("AgFAVQgCgEAAgGIAAgSIgGAAIAAgEIAGgEIADgIIAGAAIAAAIIALAAIAAAIIgLAAIAAASIABAEIAEABIAHgBIAAAIQgEABgGAAQgGAAgDgDg");
	this.shape_5.setTransform(37.5,65.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFBF69").s().p("AgIAUIgFgCIAAgJIAGADIAGABQAGAAgBgEIAAgCIgDgCIgEgCIgHgDIgDgDIgBgFQAAgFAEgDQAFgDAGAAQAHAAAGADIgCAIIgGgCIgFgBQgEAAAAACQAAABAAAAQAAAAAAABQABAAAAAAQAAABAAAAIAGADIAHADIADADIABAFQAAAGgEADQgFADgHAAIgHAAg");
	this.shape_6.setTransform(34.2,65.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFBF69").s().p("AgEAbIAAgmIAKAAIAAAmgAgFgVQAAgFAFAAQAGAAAAAFQAAAAAAABQAAABAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgFAAAAgFg");
	this.shape_7.setTransform(31.3,64.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFBF69").s().p("AgPAXIAAgKIAIAEIAGAAIAFgBQAAAAABgBQAAAAAAAAQABgBAAgBQAAAAAAgBIgBgDIgCgCIgGgDIgHgEQgDgCAAgCQgCgDAAgEQAAgGAEgEQAFgEAHAAIAIABIAHACIgDAJIgHgDIgFAAQgCAAgCABQAAABgBAAQAAABAAAAQAAABAAAAQAAABAAAAIAAADIACACIAGADQAIADACADQADAEgBAFQAAAGgEAEQgGAEgHAAQgJAAgFgDg");
	this.shape_8.setTransform(28.3,65.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFBF69").s().p("AgIAUIgGgCIAAgJIAHADIAHABQAEAAABgEIgCgCIgCgCIgEgCIgGgDIgEgDIgBgFQAAgFAFgDQAEgDAFAAQAIAAAHADIgEAIIgFgCIgGgBQgDAAAAACQAAABAAAAQAAAAAAABQABAAAAAAQAAAAABABIAFADIAHADIADADIABAFQAAAGgEADQgFADgHAAIgHAAg");
	this.shape_9.setTransform(59,59.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFBF69").s().p("AgJASQgEgCgDgFQgCgFAAgGQAAgJAFgFQAFgFAIAAQAGAAAEACQAFADACAEQACAFAAAFQAAAKgFAFQgFAFgJAAQgEAAgFgCgAgFgIQgCADAAAFQAAAGACADQACADADAAQAFAAACgDQABgDAAgGQAAgFgBgDQgCgDgFAAQgDAAgCADg");
	this.shape_10.setTransform(55,59.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFBF69").s().p("AgOAWQgDgFAAgJQAAgJAEgGQAEgFAHAAQAGAAAEAGIABAAIgBgIIAAgMIALAAIAAA1IgJAAIgCgFIAAAAQgEAFgGABQgHAAgFgGgAgFAAQgCACAAAGQAAAFACAEQACACADAAQAFAAACgCQABgDABgFIAAgBQAAgHgCgBQgCgDgFAAQgDAAgCADg");
	this.shape_11.setTransform(50.4,58.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFBF69").s().p("AgNARQgDgDgBgGQABgGAEgCQAEgDAIAAIAHgBIAAgBQAAgGgHAAQgDAAgGADIgEgIQAHgDAHAAQAIAAAEADQAEAEABAHIAAAZIgIAAIgCgGIAAAAQgDAEgDABIgHABQgFAAgDgDgAgDADQgCACgBADQAAAFAGAAQACAAACgCQADgDAAgDIAAgDIgFAAQgDAAgCABg");
	this.shape_12.setTransform(44.1,59.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFBF69").s().p("AgFAbIAAgmIALAAIAAAmgAgFgVQAAgFAFAAQAGAAAAAFQAAAAAAABQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgFAAAAgFg");
	this.shape_13.setTransform(40.9,58.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFBF69").s().p("AgMAUIAAgmIAIAAIACAGIABAAQABgDACgCQAEgCADAAIAEAAIgBALIgDgBQgFAAgDADQgCADAAADIAAAUg");
	this.shape_14.setTransform(38.4,59.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFBF69").s().p("AgJASQgEgCgCgFQgDgFAAgGQAAgJAFgFQAFgFAJAAQAFAAAFACQAEADACAEQACAFAAAFQAAAKgFAFQgFAFgJAAQgFAAgEgCgAgFgIQgCADAAAFQAAAGACADQACADADAAQAEAAACgDQACgDABgGQgBgFgCgDQgCgDgEAAQgDAAgCADg");
	this.shape_15.setTransform(34.3,59.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFBF69").s().p("AgMAPQgFgFAAgKQAAgIAFgGQAFgFAIAAQAIAAAEAFQAFAEAAAJIAAAEIgYAAQAAAEACADQADACAEAAIAGAAIAHgDIAAAJIgGACIgIAAQgIAAgGgFgAgEgJQgCACAAAEIAOAAQAAgEgCgCQgCgDgDAAQgDAAgCADg");
	this.shape_16.setTransform(30,59.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFBF69").s().p("AgEAZIAAgoIgOAAIAAgJIAlAAIAAAJIgOAAIAAAog");
	this.shape_17.setTransform(25.8,59);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AALAhIgPgZIgHAAIAAAZIgOAAIAAhBIATAAQAMAAAHAFQAGAFAAAKQAAAGgDAEQgDAEgGACIATAdgAgLgDIAEAAQAHAAACgCQADgCAAgFQAAgEgDgCQgCgCgHAAIgEAAg");
	this.shape_18.setTransform(61.1,77.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgSAhIAAhBIAlAAIAAAMIgXAAIAAAOIAVAAIAAAKIgVAAIAAARIAXAAIAAAMg");
	this.shape_19.setTransform(55.3,77.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AALAhIgQgcIgHAEIAAAYIgNAAIAAhBIANAAIAAAeIAGgHIARgXIAPAAIgWAdIAWAkg");
	this.shape_20.setTransform(50,77.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgQAZQgIgJAAgQQAAgJAEgIQADgHAHgEQAHgFAJAAQAJAAAKAFIgFALIgHgDIgHgBQgHAAgEAGQgFAGAAAJQAAAWAQAAQAHAAAJgDIAAALQgIAEgKAAQgNAAgHgJg");
	this.shape_21.setTransform(43.7,77.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgTAbQgHgHAAgLIAAgpIAOAAIAAAnQAAAHADAEQADAEAGAAQAHAAADgEQADgEAAgHIAAgnIAOAAIAAApQAAAHgEAGQgDAFgGADQgGADgIAAQgMAAgHgGg");
	this.shape_22.setTransform(37.2,78);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AALAhIgPgZIgHAAIAAAZIgOAAIAAhBIATAAQAMAAAHAFQAGAFAAAKQAAAGgDAEQgDAEgGACIATAdgAgLgDIAEAAQAHAAACgCQADgCAAgFQAAgEgDgCQgCgCgHAAIgEAAg");
	this.shape_23.setTransform(31.1,77.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgaAhIAAhBIAVAAQAPAAAIAJQAJAIAAAPQAAAQgJAIQgJAJgRAAgAgMAVIAGAAQATAAAAgVQAAgUgSAAIgHAAg");
	this.shape_24.setTransform(24.4,77.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(18,44,52,0.847)").s().p("AmvDOIAAlcQAAg/A+AAILjAAQA+AAAAA/IAAFcg");
	this.shape_25.setTransform(42,69.1,0.763,0.763);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlyGlQgyAAAAgyIAArlQAAgyAyAAILlAAQAyAAAAAyIAALlQAAAygyAAg");
	mask.setTransform(42.1,42.1);

	// img
	this.instance = new lib.drucker();
	this.instance.parent = this;
	this.instance.setTransform(-33.9,-6.7,0.214,0.214);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img9, rect = new cjs.Rectangle(0,0,84.2,84.8), [rect]);


(lib.img8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AllAAILLAA");
	this.shape.setTransform(42.3,71.5,0.763,0.763);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFBF69").s().p("AgEAaIAAgyIAJAAIAAAyg");
	this.shape_1.setTransform(66.4,64.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFBF69").s().p("AgMAQQgDgDAAgGQAAgFAEgCQAEgDAHAAIAGgBIAAgBQAAgFgFgBQgEABgGACIgDgGQAGgEAHAAQAHAAAEAEQAEADAAAGIAAAYIgHAAIgCgGIgFAFIgGABQgFAAgDgDgAgDADQgBAAAAABQAAAAgBABQAAAAAAABQAAABAAAAQAAAFAFAAQACAAACgCQACgCAAgEIAAgCIgEAAIgFABg");
	this.shape_2.setTransform(63.2,65.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFBF69").s().p("AAHATIAAgVQAAgEgCgCQAAAAAAgBQgBAAAAAAQgBAAgBgBQAAAAgBAAQgDAAgCADQgCADAAAFIAAASIgKAAIAAgkIAIAAIABAFIABAAQABgDADgBQACgCAEAAQAGAAAEAEQADADAAAHIAAAXg");
	this.shape_3.setTransform(59.1,65.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFBF69").s().p("AgIARQgEgDgDgEQgCgEAAgGQAAgIAFgFQAFgFAHAAQAFAAAEADQAFACACAEQACAFAAAEQAAAJgFAFQgFAFgIAAQgEAAgEgCgAgFgHQgCADAAAEQAAAFACADQACADADAAQAEAAACgDQACgDAAgFQAAgEgCgDQgCgDgEAAQgDAAgCADg");
	this.shape_4.setTransform(54.8,65.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFBF69").s().p("AgEAaIAAgkIAJAAIAAAkgAgEgUQAAgEAEAAQAFAAAAAEIgBAEIgEABQgEAAAAgFg");
	this.shape_5.setTransform(51.7,64.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFBF69").s().p("AgOABQAAgJAFgFQAFgFAHAAQAHAAAFADIgDAIIgFgCIgEgBQgHAAAAALQAAAKAHAAIAGAAIAFgDIAAAIIgFADIgHAAQgQAAAAgSg");
	this.shape_6.setTransform(48.9,65.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFBF69").s().p("AgMAQQgDgDAAgGQAAgFAEgCQAEgDAHAAIAGgBIAAgBQAAgFgFgBQgEABgGACIgDgGQAGgEAHAAQAHAAAEAEQAEADAAAGIAAAYIgHAAIgCgGIgFAFIgGABQgFAAgDgDgAgDADQgBAAAAABQgBAAAAABQAAAAAAABQAAABAAAAQAAAFAFAAQACAAACgCQACgCAAgEIAAgCIgEAAIgFABg");
	this.shape_7.setTransform(45,65.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFBF69").s().p("AgOASIAAgGIAQgWIgOAAIAAgHIAaAAIAAAGIgQAWIARAAIAAAHg");
	this.shape_8.setTransform(41.5,65.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFBF69").s().p("AgEAaIAAgkIAJAAIAAAkgAgEgUQAAgEAEAAQAFAAAAAEIgBAEIgEABQgEAAAAgFg");
	this.shape_9.setTransform(38.8,64.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFBF69").s().p("AAHATIAAgVQAAgEgCgCQAAAAAAgBQgBAAAAAAQgBAAgBgBQAAAAgBAAQgDAAgCADQgCADAAAFIAAASIgKAAIAAgkIAIAAIABAFIABAAQABgDADgBQACgCAEAAQAGAAAEAEQADADAAAHIAAAXg");
	this.shape_10.setTransform(35.6,65.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFBF69").s().p("AgMAQQgDgDAAgGQAAgFAEgCQAEgDAHAAIAGgBIAAgBQAAgFgFgBQgEABgGACIgDgGQAGgEAHAAQAHAAAEAEQAEADAAAGIAAAYIgHAAIgCgGIgFAFIgGABQgFAAgDgDgAgDADQgBAAAAABQgBAAAAABQAAAAAAABQAAABAAAAQAAAFAFAAQACAAACgCQACgCAAgEIAAgCIgEAAIgFABg");
	this.shape_11.setTransform(31.2,65.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFBF69").s().p("AgNAYQgFgCAAgFQAAgEADgCQACgCAEgBIgDgCIgBgDIABgDIADgDQgCgBgCgDQgBgCAAgEQAAgGADgDQAEgEAHAAIADABIADAAIAMAAIAAAFIgFACQABACAAADQAAAGgDADQgFAEgGAAIgCAAIgBgBIgCACQAAACAFAAIAGAAQAGAAADADQADACAAAFQABAHgGADQgFAEgKAAQgHAAgEgDgAgHANQAAAAgBAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABQAEAAADgBQABgBABAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAIgFgBIgEAAQgDAAgCACgAgFgNQAAABAAABQAAAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAQABAAAAAAQAAAAABAAQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAgHgFAAQgFAAAAAHg");
	this.shape_12.setTransform(27.4,66);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFBF69").s().p("AgLATIAAgkIAIAAIABAGIABAAQABgDACgCQADgCADAAIAEABIgBAJIgDAAQgFAAgCACQgCADAAADIAAATg");
	this.shape_13.setTransform(24.1,65.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFBF69").s().p("AgQATQgGgHAAgMQAAgLAGgGQAGgHAKAAQALAAAGAHQAGAGAAALQAAAMgGAHQgGAGgLAAQgKAAgGgGgAgIgLQgDAEAAAHQAAAIADAEQADAEAFAAQAMAAAAgQQAAgPgMAAQgFAAgDAEg");
	this.shape_14.setTransform(19.7,64.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFBF69").s().p("AgIARQgEgDgDgEQgCgEAAgGQAAgIAFgFQAFgFAHAAQAFAAAEACQAFACACAFQACAFAAAEQAAAJgFAFQgFAFgIAAQgEAAgEgCgAgFgHQgCACAAAFQAAAGACACQACADADAAQAEAAACgDQACgCAAgGQAAgFgCgCQgCgDgEAAQgDAAgCADg");
	this.shape_15.setTransform(69.5,59.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFBF69").s().p("AgEATQgDgCAAgHIAAgQIgFAAIAAgEIAGgEIADgHIAFAAIAAAIIAKAAIAAAHIgKAAIAAAQIABAEIADABIAHgBIAAAHQgEACgFAAQgFAAgDgEg");
	this.shape_16.setTransform(65.9,59.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFBF69").s().p("AAHATIAAgVQAAgEgCgCQAAAAAAgBQgBAAAAAAQgBgBgBAAQAAAAgBAAQgDAAgCADQgCADAAAFIAAASIgKAAIAAgkIAIAAIABAFIABAAQABgDADgBQACgCAEAAQAGAAAEAEQADADAAAHIAAAXg");
	this.shape_17.setTransform(62.3,59.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFBF69").s().p("AgLAPQgFgGAAgJQAAgIAFgFQAEgFAHAAQAIAAAEAEQAFAFAAAIIAAADIgXAAQAAAFADACQACACADAAIAHAAIAGgCIAAAIIgGABIgHABQgIAAgFgEgAgDgJQgDADAAADIAOAAQAAgDgCgDQgCgCgEAAQgBAAgCACg");
	this.shape_18.setTransform(58.1,59.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFBF69").s().p("AASATIAAgVQAAgEgCgCQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAQgDAAgCADQgCADAAAEIAAATIgJAAIAAgVIgBgGQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAQgEAAgBADQgCADAAAFIAAASIgKAAIAAgkIAIAAIABAFIABAAIAEgEQADgCADAAQAHAAADAGIABAAQACgDADgBQADgCADAAQAGAAAEAEQADADAAAHIAAAXg");
	this.shape_19.setTransform(52.8,59.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFBF69").s().p("AgEAZIAAgjIAJAAIAAAjgAgEgTQAAgFAEgBQAFABAAAFIgBADIgEABQgEAAAAgEg");
	this.shape_20.setTransform(48.5,58.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFBF69").s().p("AgEASIgOgjIAKAAIAHATIABAIIABgIIAIgTIAKAAIgOAjg");
	this.shape_21.setTransform(45.5,59.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFBF69").s().p("AgEAZIAAgyIAJAAIAAAyg");
	this.shape_22.setTransform(42.6,58.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFBF69").s().p("AgIARQgEgDgDgEQgCgEAAgGQAAgIAFgFQAFgFAHAAQAFAAAEACQAFACACAFQACAFAAAEQAAAJgFAFQgFAFgIAAQgEAAgEgCgAgFgHQgCACAAAFQAAAGACACQACADADAAQAEAAACgDQACgCAAgGQAAgFgCgCQgCgDgEAAQgDAAgCADg");
	this.shape_23.setTransform(39.5,59.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFBF69").s().p("AgEASIgOgjIAKAAIAHATIABAIIABgIIAIgTIAKAAIgOAjg");
	this.shape_24.setTransform(35.5,59.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFBF69").s().p("AAHATIAAgVQAAgEgCgCQAAAAAAgBQgBAAAAAAQgBgBgBAAQAAAAgBAAQgDAAgCADQgCADAAAFIAAASIgKAAIAAgkIAIAAIABAFIABAAQABgDADgBQACgCAEAAQAGAAAEAEQADADAAAHIAAAXg");
	this.shape_25.setTransform(31.4,59.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFBF69").s().p("AgLAPQgFgGAAgJQAAgIAEgFQAFgFAIAAQAHAAAEAEQAFAFAAAIIAAADIgXAAQAAAFACACQADACADAAIAHAAIAGgCIAAAIIgGABIgHABQgIAAgFgEgAgEgJQgCADAAADIAOAAQgBgDgCgDQgCgCgCAAQgCAAgDACg");
	this.shape_26.setTransform(27.2,59.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFBF69").s().p("AgIASIgFgBIAAgJIAGADIAGABQAFAAAAgEIAAgBIgDgCIgEgCIgGgDIgDgDIgBgFQAAgEAEgDQAEgDAFAAQAHAAAHADIgEAHIgEgBIgGgBQgDgBAAADQAAAAAAABQAAAAAAAAQABABAAAAQAAAAABAAIAFADIAGADIADADIABAFQAAAFgEADQgEADgHAAIgHgBg");
	this.shape_27.setTransform(23.6,59.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFBF69").s().p("AgLAPQgFgGAAgJQAAgIAEgFQAFgFAIAAQAHAAAEAEQAFAFAAAIIAAADIgXAAQAAAFACACQADACAEAAIAGAAIAGgCIAAAIIgGABIgHABQgIAAgFgEgAgEgJQgBADAAADIAMAAQAAgDgCgDQgCgCgCAAQgDAAgCACg");
	this.shape_28.setTransform(19.9,59.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFBF69").s().p("AgTAYIAAgvIAPAAQALAAAGAGQAHAHAAAKQAAALgHAHQgHAGgMAAgAgJAQIAEAAQAOAAABgQQgBgPgNAAIgFAAg");
	this.shape_29.setTransform(15.5,58.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgaAhIAAhBIAVAAQAPAAAIAJQAJAIAAAPQAAAQgJAIQgJAJgRAAgAgMAVIAGAAQATAAAAgVQAAgUgSAAIgHAAg");
	this.shape_30.setTransform(64.3,77.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AALAhIgPgZIgHAAIAAAZIgOAAIAAhBIATAAQAMAAAHAFQAGAFAAAKQAAAGgDAEQgDAEgGACIATAdgAgLgDIAEAAQAHAAACgCQADgCAAgFQAAgEgDgCQgCgCgHAAIgEAAg");
	this.shape_31.setTransform(58.2,77.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgWAZQgIgJAAgQQAAgPAIgJQAIgJAOAAQAPAAAIAJQAIAJAAAPQAAAQgIAJQgIAJgPAAQgOAAgIgJgAgLgQQgEAGgBAKQABALAEAFQADAGAIAAQAQAAAAgWQAAgVgQAAQgHAAgEAFg");
	this.shape_32.setTransform(51.1,77.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgSAhIAAhBIAlAAIAAAMIgXAAIAAARIAVAAIAAAKIgVAAIAAAag");
	this.shape_33.setTransform(45.1,77.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgaAhIAAhBIAVAAQAPAAAIAJQAJAIAAAPQAAAQgJAIQgJAJgRAAgAgMAVIAGAAQATAAAAgVQAAgUgSAAIgHAAg");
	this.shape_34.setTransform(39.2,77.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AARAhIgFgQIgXAAIgFAQIgOAAIAWhBIAQAAIAYBBgAgIAGIAQAAIgHgXIgBgFIgIAcg");
	this.shape_35.setTransform(32.5,77.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AALAhIgPgZIgHAAIAAAZIgOAAIAAhBIATAAQAMAAAHAFQAGAFAAAKQAAAGgDAEQgDAEgGACIATAdgAgLgDIAEAAQAHAAACgCQADgCAAgFQAAgEgDgCQgCgCgHAAIgEAAg");
	this.shape_36.setTransform(26.7,77.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgXAhIAAhBIAUAAQANAAAHAEQAGAEAAAJQAAAGgDAEQgDADgEABQAGABADAEQACADAAAHQAAAJgGAFQgGAFgMAAgAgJAVIAJAAQAFAAACgCQADgCAAgFQAAgIgLAAIgIAAgAgJgGIAIAAQAFAAACgBQADgCAAgEQAAgEgDgCQgDgBgFAAIgHAAg");
	this.shape_37.setTransform(20.3,77.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(18,44,52,0.847)").s().p("AmvDOIAAlcQAAg/A+AAILjAAQA+AAAAA/IAAFcg");
	this.shape_38.setTransform(42,69.1,0.763,0.763);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlyGlQgyAAAAgyIAArlQAAgyAyAAILlAAQAyAAAAAyIAALlQAAAygyAAg");
	mask.setTransform(42.1,42.1);

	// img
	this.instance = new lib.Bradford();
	this.instance.parent = this;
	this.instance.setTransform(-2.2,-16.5,0.289,0.289);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img8, rect = new cjs.Rectangle(0,0,84.2,84.8), [rect]);


(lib.img7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AllAAILLAA");
	this.shape.setTransform(42.3,69.5,0.907,0.763);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFBF69").s().p("AgHASIgGgBIAAgIIAHACIAGABQAEAAAAgDIgBgCIgCgCIgEgCIgGgDIgDgDIgBgFQAAgEAEgDQAEgDAGAAQAGAAAGADIgDAHIgFgCIgFAAQAAAAAAAAQgBAAgBAAQAAABAAAAQgBABAAAAIABACIAGADIAGADIADADIABAEQAAAGgEADQgEADgHAAIgGgBg");
	this.shape_1.setTransform(73.3,63.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFBF69").s().p("AgMAQQgDgDAAgGQAAgFAEgCQAEgDAHAAIAGAAIAAgCQABgFgHAAQgCAAgHACIgDgGQAGgEAHAAQAHAAAEADQAEAEAAAGIAAAXIgHAAIgCgFIAAAAIgFAFIgGABQgFAAgDgDgAADACQgEAAgCABQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAAAFAEAAQADAAACgCQACgCAAgEIAAgDg");
	this.shape_2.setTransform(69.6,63.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFBF69").s().p("AASASIAAgUQAAgEgBgCQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBgBAAQgEABgBACQgCADAAAEIAAASIgJAAIAAgUIgBgGQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgEAAgCADQgCADAAAFIAAARIgKAAIAAgjIAIAAIABAFIABAAQABgDAEgBQACgBADgBQAIABACAFIACAAQABgDADgBQADgBADgBQAHABADADQACADAAAHIAAAWg");
	this.shape_3.setTransform(64.4,63.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFBF69").s().p("AgLAOQgFgFAAgJQAAgIAFgFQAEgFAHAAQAIAAAEAFQAFAEAAAIIAAAEIgXAAQAAAEADACQACADADAAIAGgBIAHgCIAAAHIgGACIgHABQgIAAgFgFgAgDgJQgCACgBAEIANAAQAAgEgCgCQgBgCgEAAQAAAAAAAAQgBAAAAABQgBAAAAAAQgBABAAAAg");
	this.shape_4.setTransform(59.2,63.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFBF69").s().p("AgEATQgCgDgBgGIAAgQIgEAAIAAgEIAFgEIADgHIAFAAIAAAIIAKAAIAAAHIgKAAIAAAQQAAABAAAAQAAABAAAAQABABAAAAQAAAAAAABIAEABIAFgCIAAAIQgDABgGAAQgEAAgDgDg");
	this.shape_5.setTransform(55.8,62.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFBF69").s().p("AgHASIgGgBIAAgIIAHACIAGABQAEAAAAgDIgBgCIgCgCIgEgCIgGgDIgDgDIgBgFQAAgEAEgDQAEgDAGAAQAGAAAGADIgDAHIgFgCIgFAAQAAAAAAAAQgBAAgBAAQAAABAAAAQgBABAAAAIABACIAGADIAGADIADADIABAEQAAAGgEADQgEADgHAAIgGgBg");
	this.shape_6.setTransform(52.7,63.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFBF69").s().p("AgEAZIAAgjIAJAAIAAAjgAgEgTQAAgFAEAAQAFAAAAAFQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgEAAAAgFg");
	this.shape_7.setTransform(50,62.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFBF69").s().p("AgPAWIAAgKIAIADIAHABQACAAACgBQAAgBABAAQAAAAAAgBQAAAAAAgBQABAAAAgBIgBgCIgDgCIgEgEIgHgDIgEgEQgBgCAAgEQAAgGAFgEQADgDAHAAIAHABIAHACIgDAIIgGgCIgFgBIgDABQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABIAAACIADACIAFADQAGADADADQADADAAAFQAAAGgFAEQgFADgHAAQgHAAgHgCg");
	this.shape_8.setTransform(47.2,62.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFBF69").s().p("AgHASIgGgBIAAgIIAHACIAGABQAEAAAAgDIgBgCIgCgCIgEgCIgGgDIgDgDIgBgFQAAgEAEgDQAEgDAGAAQAGAAAGADIgDAHIgFgCIgFAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBABAAAAIABACIAGADIAGADIADADIABAEQAAAGgEADQgEADgHAAIgGgBg");
	this.shape_9.setTransform(42,63.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFBF69").s().p("AgJARQgDgDgCgEQgCgEAAgGQgBgIAFgFQAFgFAHAAQAFAAAFADQAEACABAEQACAEAAAFQABAJgFAFQgEAFgJAAQgEAAgFgCgAgEgHQgCADAAAEQAAAFACADQABADADAAQAEAAACgDQABgDAAgFQAAgEgBgDQgCgDgEAAQgDAAgBADg");
	this.shape_10.setTransform(38.3,63.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFBF69").s().p("AgMAUQgEgEAAgJQAAgIAEgFQAEgFAGAAQAGAAADAFIAAgHIAAgMIAKAAIAAAyIgIAAIgCgFIAAAAQgEAGgFAAQgHAAgDgGgAgEAAQgCACAAAFQAAAGACACQACADACAAQAEAAACgCQABgCAAgGIAAgBQABgGgCgBQgCgDgEAAQgCAAgCADg");
	this.shape_11.setTransform(34,62.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFBF69").s().p("AgMAQQgDgDAAgGQAAgFAEgCQAEgDAHAAIAHAAIAAgCQgBgFgFAAQgDAAgGACIgEgGQAGgEAHAAQAHAAAEADQAEAEAAAGIAAAXIgHAAIgBgFIgBAAIgFAFIgGABQgFAAgDgDgAACACQgDAAgCABQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAFAFAAQACAAACgCQADgCAAgEIAAgDg");
	this.shape_12.setTransform(28.2,63.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFBF69").s().p("AgEAZIAAgjIAJAAIAAAjgAgEgTQAAgFAEAAQAFAAAAAFQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgEAAAAgFg");
	this.shape_13.setTransform(25.3,62.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFBF69").s().p("AgLASIAAgjIAIAAIABAGIABAAIADgFQADgCAEAAIADABIgBAJIgDAAQgEAAgDADQgCABAAAEIAAASg");
	this.shape_14.setTransform(22.9,63.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFBF69").s().p("AgJARQgDgDgCgEQgDgEAAgGQAAgIAFgFQAFgFAHAAQAFAAAEADQAFACABAEQACAEAAAFQABAJgFAFQgFAFgIAAQgEAAgFgCgAgEgHQgCADgBAEQABAFACADQABADADAAQAEAAACgDQACgDgBgFQABgEgCgDQgCgDgEAAQgDAAgBADg");
	this.shape_15.setTransform(19.2,63.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFBF69").s().p("AgLAOQgFgFAAgJQAAgIAFgFQAEgFAHAAQAIAAAEAFQAFAEAAAIIAAAEIgXAAQAAAEADACQACADADAAIAGgBIAHgCIAAAHIgGACIgHABQgIAAgFgFgAgDgJQgCACgBAEIANAAQAAgEgCgCQgBgCgEAAQAAAAAAAAQgBAAAAABQgBAAAAAAQgBABAAAAg");
	this.shape_16.setTransform(15.2,63.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFBF69").s().p("AgEAYIAAgmIgNAAIAAgJIAjAAIAAAJIgNAAIAAAmg");
	this.shape_17.setTransform(11.3,62.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgGAhIAAgZIgVgoIAOAAIANAbIANgbIAQAAIgWAnIAAAag");
	this.shape_18.setTransform(71.3,77.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgSAhIAAhBIAlAAIAAAMIgXAAIAAARIAVAAIAAAKIgVAAIAAAag");
	this.shape_19.setTransform(66.1,77.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgSAhIAAhBIAlAAIAAAMIgXAAIAAARIAVAAIAAAKIgVAAIAAAag");
	this.shape_20.setTransform(61.1,77.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AALAhIgbgxIABASIAAAfIgNAAIAAhBIARAAIAcAwIABAAIgBgRIAAgfIAMAAIAABBg");
	this.shape_21.setTransform(54.7,77.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AARAhIgFgQIgXAAIgEAQIgQAAIAYhBIAQAAIAWBBgAgHAGIAQAAIgHgXIgCgFIgHAcg");
	this.shape_22.setTransform(47.8,77.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgTAhIAAhBIAOAAIAAA1IAZAAIAAAMg");
	this.shape_23.setTransform(42.3,77.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AARAhIgFgQIgXAAIgFAQIgPAAIAYhBIAQAAIAWBBgAgHAGIAQAAIgHgXIgCgFIgHAcg");
	this.shape_24.setTransform(36.3,77.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgGAhIAAg1IgSAAIAAgMIAxAAIAAAMIgSAAIAAA1g");
	this.shape_25.setTransform(30.5,77.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AALAhIgPgZIgHAAIAAAZIgOAAIAAhBIATAAQAMAAAHAFQAGAFAAAKQAAAGgDAEQgDAEgGACIATAdgAgLgDIAEAAQAHAAACgCQADgCAAgFQAAgEgDgCQgCgCgHAAIgEAAg");
	this.shape_26.setTransform(25.2,77.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgSAhIAAhBIAlAAIAAAMIgXAAIAAAOIAVAAIAAAKIgVAAIAAARIAXAAIAAAMg");
	this.shape_27.setTransform(19.4,77.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgXAhIAAhBIAUAAQANAAAHAEQAGAEAAAJQAAAGgDAEQgDADgEABQAGABADAEQACADAAAHQAAAJgGAFQgGAFgMAAgAgJAVIAJAAQAFAAACgCQADgCAAgFQAAgIgLAAIgIAAgAgJgGIAIAAQAFAAACgBQADgCAAgEQAAgEgDgCQgDgBgFAAIgHAAg");
	this.shape_28.setTransform(13.7,77.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(18,44,52,0.847)").s().p("AmvDOIAAlcQAAg/A+AAILjAAQA+AAAAA/IAAFcg");
	this.shape_29.setTransform(42,69.1,0.821,0.763);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlyGlQgyAAAAgyIAArlQAAgyAyAAILlAAQAyAAAAAyIAALlQAAAygyAAg");
	mask.setTransform(42.1,42.1);

	// img
	this.instance = new lib.Bertalanffy();
	this.instance.parent = this;
	this.instance.setTransform(-2,-35.5,0.339,0.339);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img7, rect = new cjs.Rectangle(0,0,84.2,84.8), [rect]);


(lib.img6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AllAAILLAA");
	this.shape.setTransform(42.3,71.3,0.763,0.763);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFBF69").s().p("AgIAUIgFgCIAAgJIAGADIAGABQAGAAAAgEIgBgCIgDgCIgEgCIgHgDIgDgDIgBgFQAAgFAEgDQAFgDAGAAQAHAAAGADIgCAIIgGgCIgFgBQgEAAAAACQAAABAAAAQAAAAAAABQABAAAAAAQAAABAAAAIAGADIAHADIADADIABAFQAAAGgEADQgFADgHAAIgHAAg");
	this.shape_1.setTransform(67.1,65.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFBF69").s().p("AgNARQgDgDAAgGQAAgGAEgCQAEgDAIAAIAHgBIAAgBQAAgGgHAAQgDAAgGADIgEgIQAHgDAHAAQAIAAAEADQAEAEABAHIAAAZIgIAAIgCgGIAAAAQgDAEgDABIgHABQgFAAgDgDgAgDADQgCACgBADQAAAFAGAAQACAAACgCQADgDAAgDIAAgDIgFAAQgDAAgCABg");
	this.shape_2.setTransform(63,65.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFBF69").s().p("AgFAVQgCgEAAgGIAAgSIgGAAIAAgEIAGgEIADgIIAGAAIAAAIIALAAIAAAIIgLAAIAAASIABAEIAEABIAHgBIAAAIQgEABgGAAQgGAAgDgDg");
	this.shape_3.setTransform(59.3,65.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFBF69").s().p("AgIAUIgGgCIAAgJIAHADIAHABQAEAAAAgEIgBgCIgCgCIgEgCIgGgDIgEgDIgBgFQAAgFAFgDQADgDAHAAQAHAAAGADIgDAIIgFgCIgFgBQgEAAAAACQAAABAAAAQAAAAAAABQABAAAAAAQAAABAAAAIAGADIAHADIADADIABAFQAAAGgEADQgEADgIAAIgHAAg");
	this.shape_4.setTransform(56,65.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFBF69").s().p("AgEAbIAAgmIAJAAIAAAmgAgFgVQAAgFAFAAQAGAAAAAFQAAAAAAABQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgFAAAAgFg");
	this.shape_5.setTransform(53.1,64.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFBF69").s().p("AgFAbIAAg1IALAAIAAA1g");
	this.shape_6.setTransform(50.9,64.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFBF69").s().p("AgNARQgDgDAAgGQAAgGAEgCQAEgDAIAAIAHgBIAAgBQAAgGgGAAQgEAAgGADIgEgIQAHgDAHAAQAIAAAEADQAEAEABAHIAAAZIgIAAIgCgGIAAAAQgDAEgDABIgHABQgFAAgDgDgAgDADQgCACgBADQAAAFAGAAQACAAACgCQADgDAAgDIAAgDIgFAAQgDAAgCABg");
	this.shape_7.setTransform(47.6,65.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFBF69").s().p("AgMAUIAAgmIAIAAIACAHIABAAQABgEACgCQAEgCADAAIAEABIgBAKIgDgBQgFAAgDACQgCADAAAEIAAAUg");
	this.shape_8.setTransform(44,65.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFBF69").s().p("AgNAQQgEgDAAgHIAAgZIAKAAIAAAWQAAAEACACQABACAEAAQAEAAACgDQABgDAAgFIAAgTIALAAIAAAmIgIAAIgCgFIAAAAIgFAEQgDACgDAAQgHAAgDgEg");
	this.shape_9.setTransform(39.9,65.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFBF69").s().p("AgFAVQgCgEAAgGIAAgSIgGAAIAAgEIAGgEIADgIIAGAAIAAAIIALAAIAAAIIgLAAIAAASIABAEIAEABIAHgBIAAAIQgEABgGAAQgGAAgDgDg");
	this.shape_10.setTransform(35.9,65.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFBF69").s().p("AgOAQQgDgDAAgHIAAgZIAKAAIAAAWQABAEABACQABACAEAAQAEAAACgDQACgDAAgFIAAgTIAKAAIAAAmIgIAAIgCgFIAAAAIgFAEQgDACgDAAQgHAAgEgEg");
	this.shape_11.setTransform(32,65.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFBF69").s().p("AgMAUIAAgmIAIAAIACAHIABAAQABgEACgCQAEgCADAAIAEABIgBAKIgDgBQgFAAgDACQgCADAAAEIAAAUg");
	this.shape_12.setTransform(28.2,65.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFBF69").s().p("AgFAVQgCgEAAgGIAAgSIgGAAIAAgEIAGgEIADgIIAGAAIAAAIIALAAIAAAIIgLAAIAAASIABAEIAEABIAHgBIAAAIQgEABgGAAQgGAAgDgDg");
	this.shape_13.setTransform(24.8,65.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFBF69").s().p("AgIAUIgFgCIAAgJIAGADIAGABQAGAAAAgEIgBgCIgDgCIgEgCIgHgDIgDgDIgBgFQAAgFAEgDQAFgDAFAAQAIAAAGADIgCAIIgGgCIgGgBQgDAAAAACQAAABAAAAQAAAAAAABQABAAAAAAQAAABAAAAIAGADIAHADIADADIABAFQAAAGgEADQgFADgHAAIgHAAg");
	this.shape_14.setTransform(21.5,65.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFBF69").s().p("AgOAaIAAgzIAdAAIAAAJIgSAAIAAALIAQAAIAAAIIgQAAIAAAOIASAAIAAAJg");
	this.shape_15.setTransform(17.8,65.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFBF69").s().p("AgIAUIgGgCIAAgJIAHADIAHABQAEAAABgEIgCgCIgCgCIgEgCIgGgDIgEgDIgBgFQAAgFAFgDQAEgDAFAAQAIAAAHADIgEAIIgFgCIgGgBQgDAAAAACQAAABAAAAQAAAAAAABQABAAAAAAQAAAAABABIAFADIAHADIADADIABAFQAAAGgEADQgFADgHAAIgHAAg");
	this.shape_16.setTransform(59,59.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFBF69").s().p("AgJASQgEgCgDgFQgCgFAAgGQAAgJAFgFQAFgFAIAAQAGAAAEACQAFADACAEQACAFAAAFQAAAKgFAFQgFAFgJAAQgEAAgFgCgAgFgIQgCADAAAFQAAAGACADQACADADAAQAFAAACgDQABgDAAgGQAAgFgBgDQgCgDgFAAQgDAAgCADg");
	this.shape_17.setTransform(55,59.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFBF69").s().p("AgOAWQgDgFAAgJQAAgJAEgGQAEgFAHAAQAGAAAEAGIABAAIgBgIIAAgMIALAAIAAA1IgJAAIgCgFIAAAAQgEAFgGABQgHAAgFgGgAgFAAQgCACAAAGQAAAFACAEQACACADAAQAFAAACgCQABgDABgFIAAgBQAAgHgCgBQgCgDgFAAQgDAAgCADg");
	this.shape_18.setTransform(50.4,58.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFBF69").s().p("AgNARQgDgDgBgGQABgGAEgCQAEgDAIAAIAHgBIAAgBQAAgGgHAAQgDAAgGADIgEgIQAHgDAHAAQAIAAAEADQAEAEABAHIAAAZIgIAAIgCgGIAAAAQgDAEgDABIgHABQgFAAgDgDgAgDADQgCACgBADQAAAFAGAAQACAAACgCQADgDAAgDIAAgDIgFAAQgDAAgCABg");
	this.shape_19.setTransform(44.1,59.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFBF69").s().p("AgFAbIAAgmIALAAIAAAmgAgFgVQAAgFAFAAQAGAAAAAFQAAAAAAABQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgFAAAAgFg");
	this.shape_20.setTransform(40.9,58.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFBF69").s().p("AgMAUIAAgmIAIAAIACAGIABAAQABgDACgCQAEgCADAAIAEAAIgBALIgDgBQgFAAgDADQgCADAAADIAAAUg");
	this.shape_21.setTransform(38.4,59.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFBF69").s().p("AgJASQgEgCgCgFQgDgFAAgGQAAgJAFgFQAFgFAJAAQAFAAAFACQAEADACAEQACAFAAAFQAAAKgFAFQgFAFgJAAQgFAAgEgCgAgFgIQgCADAAAFQAAAGACADQACADADAAQAEAAACgDQACgDABgGQgBgFgCgDQgCgDgEAAQgDAAgCADg");
	this.shape_22.setTransform(34.3,59.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFBF69").s().p("AgMAPQgFgFAAgKQAAgIAFgGQAFgFAIAAQAIAAAEAFQAFAEAAAJIAAAEIgYAAQAAAEACADQADACAEAAIAGAAIAHgDIAAAJIgGACIgIAAQgIAAgGgFgAgEgJQgCACAAAEIAOAAQAAgEgCgCQgCgDgDAAQgDAAgCADg");
	this.shape_23.setTransform(30,59.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFBF69").s().p("AgEAZIAAgoIgOAAIAAgJIAlAAIAAAJIgOAAIAAAog");
	this.shape_24.setTransform(25.8,59);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgSAhIAAhBIAlAAIAAAMIgXAAIAAAOIAVAAIAAAKIgVAAIAAARIAXAAIAAAMg");
	this.shape_25.setTransform(63.2,77.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AALAhIgPgZIgHAAIAAAZIgOAAIAAhBIATAAQAMAAAHAFQAGAFAAAKQAAAGgDAEQgDAEgGACIATAdgAgLgDIAEAAQAHAAACgCQADgCAAgFQAAgEgDgCQgCgCgHAAIgEAAg");
	this.shape_26.setTransform(57.8,77.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgTAbQgHgHAAgLIAAgpIAOAAIAAAnQAAAHADAEQADAEAGAAQAHAAADgEQADgEAAgHIAAgnIAOAAIAAApQAAAHgEAGQgDAFgGADQgGADgIAAQgMAAgHgGg");
	this.shape_27.setTransform(50.9,78);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgVAeIAAgNIAMAEIAIABQAEAAACgCQACgBAAgEIgBgDIgCgDIgIgEIgJgFQgDgCgCgEQgCgDAAgFQAAgJAHgFQAFgFAKAAIAKACIAJADIgFALIgIgDIgHgBQgDAAgCACQgCACAAADIABADIACACIAIAFQAKAEADAEQADAEABAHQgBAIgGAGQgGAFgLAAQgKAAgJgEg");
	this.shape_28.setTransform(45,77.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgVAeIAAgNIAMAEIAIABQAEAAACgCQACgBAAgEIgBgDIgCgDIgIgEIgJgFQgDgCgCgEQgCgDAAgFQAAgJAHgFQAFgFAKAAIAKACIAJADIgFALIgIgDIgHgBQgDAAgCACQgCACAAADIABADIACACIAIAFQAKAEADAEQADAEABAHQgBAIgGAGQgHAFgKAAQgKAAgJgEg");
	this.shape_29.setTransform(40,77.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgTAbQgHgHAAgLIAAgpIAOAAIAAAnQAAAHADAEQADAEAGAAQAHAAADgEQADgEAAgHIAAgnIAOAAIAAApQAAAHgEAGQgDAFgGADQgGADgIAAQgMAAgHgGg");
	this.shape_30.setTransform(33.9,78);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AARAhIgFgQIgXAAIgFAQIgPAAIAYhBIAQAAIAWBBgAgHAGIAQAAIgIgXIgBgFIgHAcg");
	this.shape_31.setTransform(27.3,77.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgUAeIAAgNIALAEIAJABQADAAADgCQACgBAAgEIgBgDIgEgDIgHgEIgJgFQgDgCgCgEQgBgDAAgFQAAgJAFgFQAGgFAJAAIAKACIAKADIgEALIgJgDIgHgBQgDAAgCACQgCACAAADIABADIADACIAIAFQAIAEAEAEQADAEAAAHQABAIgHAGQgGAFgLAAQgKAAgIgEg");
	this.shape_32.setTransform(21.7,77.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(18,44,52,0.847)").s().p("AmvDOIAAlcQAAg/A+AAILjAAQA+AAAAA/IAAFcg");
	this.shape_33.setTransform(42,69.1,0.763,0.763);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlyGlQgyAAAAgyIAArlQAAgyAyAAILlAAQAyAAAAAyIAALlQAAAygyAAg");
	mask.setTransform(42.1,42.1);

	// img
	this.instance = new lib.saussure();
	this.instance.parent = this;
	this.instance.setTransform(-2.2,-6.7,0.449,0.449);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img6, rect = new cjs.Rectangle(0,0,84.2,84.8), [rect]);


(lib.img5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AllAAILLAA");
	this.shape.setTransform(42.3,71.3,0.763,0.763);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFBF69").s().p("AgNARQgDgDgBgGQABgGAEgCQAEgDAIAAIAHgBIAAgBQAAgGgHAAQgDAAgGADIgEgIQAHgDAHAAQAIAAAEADQAEAEAAAHIAAAZIgHAAIgCgGIAAAAQgDAEgDABIgHABQgFAAgDgDgAgDADQgDACAAADQABAFAFAAQACAAADgCQACgDAAgDIAAgDIgFAAQgDAAgCABg");
	this.shape_1.setTransform(62.6,66.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFBF69").s().p("AgFAVQgCgDAAgHIAAgRIgGAAIAAgFIAGgDIADgJIAGAAIAAAJIALAAIAAAIIgLAAIAAARIABADIAEABIAHgBIAAAIQgEACgGAAQgGAAgDgDg");
	this.shape_2.setTransform(59,65.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFBF69").s().p("AgIAUIgFgCIAAgJIAGADIAGABQAGAAAAgEIgBgCIgDgCIgEgCIgHgDIgDgDIgBgFQAAgFAEgDQAFgDAFAAQAIAAAGADIgCAIIgGgCIgGgBQgDAAAAACQAAABAAAAQAAAAAAABQABAAAAAAQAAAAAAABIAGADIAHADIADADIABAFQAAAGgEADQgFADgHAAIgHAAg");
	this.shape_3.setTransform(55.7,66.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFBF69").s().p("AgEAbIAAgmIAKAAIAAAmgAgFgVQAAgFAFAAQAGAAAAAFQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgFAAAAgFg");
	this.shape_4.setTransform(52.8,65.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFBF69").s().p("AgMAUIAAgmIAIAAIACAGIABAAQABgDACgCQAEgCADAAIAEAAIgBAKIgDAAQgFAAgDADQgCADAAADIAAAUg");
	this.shape_5.setTransform(50.2,66.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFBF69").s().p("AgJASQgEgCgDgFQgCgFAAgGQAAgJAFgFQAFgFAIAAQAGAAAEACQAEADADAEQACAFAAAFQAAAKgFAFQgFAFgJAAQgFAAgEgCgAgFgIQgCADAAAFQAAAGACADQACADADAAQAEAAACgDQACgDAAgGQAAgFgCgDQgCgDgEAAQgDAAgCADg");
	this.shape_6.setTransform(46.2,66.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFBF69").s().p("AgEAbIAAgmIAKAAIAAAmgAgFgVQAAgFAFAAQAGAAAAAFQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgFAAAAgFg");
	this.shape_7.setTransform(42.9,65.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFBF69").s().p("AgEATIgPglIAKAAIAIAUIABAIIABgIIAIgUIALAAIgOAlg");
	this.shape_8.setTransform(39.8,66.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFBF69").s().p("AgNARQgDgDAAgGQAAgGAEgCQAEgDAIAAIAHgBIAAgBQAAgGgGAAQgEAAgGADIgEgIQAHgDAHAAQAIAAAEADQAEAEABAHIAAAZIgIAAIgCgGIAAAAQgDAEgDABIgHABQgFAAgDgDgAgDADQgCACgBADQAAAFAGAAQACAAACgCQADgDAAgDIAAgDIgFAAQgDAAgCABg");
	this.shape_9.setTransform(35.4,66.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFBF69").s().p("AAHAbIAAgXQAAgHgGAAQgDAAgCADQgCACAAAHIAAASIgLAAIAAg1IALAAIAAALIgBAGIAAADIABAAQADgGAHAAQAHAAADAEQAEAEAAAGIAAAZg");
	this.shape_10.setTransform(31,65.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFBF69").s().p("AgMAPQgFgFAAgKQAAgIAFgGQAFgFAIAAQAIAAAEAFQAFAEAAAJIAAAEIgYAAQAAAEACADQADACAEAAIAGAAIAHgDIAAAJIgGACIgIAAQgIAAgGgFgAgEgJQgCACAAAEIAOAAQAAgEgCgCQgCgDgDAAQgDAAgCADg");
	this.shape_11.setTransform(26.5,66.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFBF69").s().p("AgSAZIAAgyIAQAAQAKABAEADQAFADABAGQgBAFgCADQgCACgDABQAFABACADQACADAAAEQAAAHgFAFQgFADgJAAgAgHAQIAHAAQADABACgCQACgCAAgEQAAgGgIAAIgGAAgAgHgEIAGAAQADAAACgCQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQgCgCgEAAIgFAAg");
	this.shape_12.setTransform(22.2,65.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFBF69").s().p("AgNARQgDgDgBgGQABgGAEgCQAEgDAIAAIAHgBIAAgBQAAgGgHAAQgDAAgGADIgEgIQAHgDAHAAQAIAAAEADQAEAEABAHIAAAZIgIAAIgCgGIAAAAQgDAEgDABIgHABQgFAAgDgDgAgDADQgCACgBADQAAAFAGAAQACAAACgCQADgDAAgDIAAgDIgFAAQgDAAgCABg");
	this.shape_13.setTransform(51.3,59.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFBF69").s().p("AgFAbIAAgmIALAAIAAAmgAgFgVQAAgFAFAAQAGAAAAAFQAAAAAAABQAAABAAAAQgBAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgFAAAAgFg");
	this.shape_14.setTransform(48.1,59.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFBF69").s().p("AgMAUIAAgmIAIAAIACAHIABAAQABgEACgCQAEgCADAAIAEABIgBAKIgDgBQgFAAgDACQgCADAAAEIAAAUg");
	this.shape_15.setTransform(45.6,59.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFBF69").s().p("AgJASQgEgCgCgFQgDgFAAgGQAAgJAFgFQAFgFAJAAQAFAAAFACQAEADACAEQACAFAAAFQAAAKgFAFQgFAFgJAAQgFAAgEgCgAgFgIQgCADAAAFQAAAGACADQACADADAAQAEAAACgDQACgDABgGQgBgFgCgDQgCgDgEAAQgDAAgCADg");
	this.shape_16.setTransform(41.5,59.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFBF69").s().p("AgMAPQgFgFAAgKQAAgIAFgGQAFgFAIAAQAIAAAEAFQAFAEAAAJIAAAEIgYAAQAAAEACADQADACAEAAIAGAAIAHgDIAAAJIgGACIgIAAQgIAAgGgFgAgEgJQgCACAAAEIAOAAQAAgEgCgCQgCgDgDAAQgDAAgCADg");
	this.shape_17.setTransform(37.2,59.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFBF69").s().p("AgEAaIAAgqIgOAAIAAgJIAlAAIAAAJIgOAAIAAAqg");
	this.shape_18.setTransform(33,59.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AALAhIgbgxIAAASIAAAfIgMAAIAAhBIASAAIAbAwIABAAIgBgRIAAgfIAMAAIAABBg");
	this.shape_19.setTransform(54.3,77.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgWAZQgIgJAAgQQAAgPAIgJQAIgJAOAAQAPAAAIAJQAIAJAAAPQAAAQgIAJQgIAJgPAAQgOAAgIgJgAgLgQQgFAGAAAKQAAALAFAFQADAGAIAAQAQAAAAgWQAAgVgQAAQgHAAgEAFg");
	this.shape_20.setTransform(47,77.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAWAhIAAgfIAAgEIABgPIgBAAIgRAyIgLAAIgQgzIAAAUIAAAfIgMAAIAAhBIATAAIAPAxIAAAAIARgxIASAAIAABBg");
	this.shape_21.setTransform(39,77.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgGAhIAAhBIANAAIAABBg");
	this.shape_22.setTransform(33.2,77.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgUAeIAAgNIALAEIAJABQADAAADgCQACgBAAgEIgBgDIgEgDIgHgEIgJgFQgDgCgBgEQgCgDAAgFQAAgJAFgFQAGgFAJAAIAKACIAKADIgEALIgJgDIgHgBQgDAAgCACQgCACAAADIABADIADACIAIAFQAIAEAEAEQAEAEgBAHQABAIgHAGQgGAFgLAAQgKAAgIgEg");
	this.shape_23.setTransform(29.2,77.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(18,44,52,0.847)").s().p("AmvDOIAAlcQAAg/A+AAILjAAQA+AAAAA/IAAFcg");
	this.shape_24.setTransform(42,69.1,0.763,0.763);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlyGlQgyAAAAgyIAArlQAAgyAyAAILlAAQAyAAAAAyIAALlQAAAygyAAg");
	mask.setTransform(42.1,42.1);

	// img
	this.instance = new lib.simon();
	this.instance.parent = this;
	this.instance.setTransform(-29.5,-17,0.426,0.426);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img5, rect = new cjs.Rectangle(0,0,84.2,84.8), [rect]);


(lib.img4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AllAAILLAA");
	this.shape.setTransform(42.3,71.1,0.763,0.763);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFBF69").s().p("AgNARQgDgDgBgGQABgGAEgCQAEgDAIAAIAHgBIAAgBQAAgGgHAAQgDAAgGADIgEgIQAHgDAHAAQAIAAAEADQAEAEABAHIAAAZIgIAAIgCgGIAAAAQgDAEgDABIgHABQgFAAgDgDgAgDADQgCACgBADQAAAFAGAAQACAAACgCQADgDAAgDIAAgDIgFAAQgDAAgCABg");
	this.shape_1.setTransform(59.4,65.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFBF69").s().p("AgFAbIAAgmIALAAIAAAmgAgFgVQAAgFAFAAQAGAAAAAFQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgFAAAAgFg");
	this.shape_2.setTransform(56.2,65.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFBF69").s().p("AgPAAQAAgJAFgFQAFgFAJAAQAHAAAFADIgDAIIgFgCIgEgBQgIAAAAALQAAAMAIAAIAFgBQADgBADgCIAAAKIgGACIgGAAQgSAAAAgUg");
	this.shape_3.setTransform(53.3,65.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFBF69").s().p("AgNARQgEgDABgGQgBgGAFgCQAEgDAIAAIAHgBIAAgBQAAgGgGAAQgEAAgHADIgDgIQAHgDAHAAQAIAAAEADQAFAEAAAHIAAAZIgIAAIgCgGIgBAAQgCAEgDABIgHABQgFAAgDgDgAgDADQgDACABADQAAAFAEAAQAEAAABgCQADgDAAgDIAAgDIgEAAQgEAAgCABg");
	this.shape_4.setTransform(49.2,65.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFBF69").s().p("AgMAUIAAgmIAIAAIACAHIABAAQABgEACgCQAEgCADAAIAEABIgBAJIgDAAQgFAAgDACQgCAEAAADIAAAUg");
	this.shape_5.setTransform(45.6,65.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFBF69").s().p("AgPAAQAAgJAFgFQAFgFAJAAQAHAAAFADIgDAIIgFgCIgEgBQgIAAAAALQAAAMAIAAIAFgBQADgBADgCIAAAKIgGACIgGAAQgSAAAAgUg");
	this.shape_6.setTransform(42,65.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFBF69").s().p("AgJASQgEgCgDgFQgCgFAAgGQAAgJAFgFQAFgFAIAAQAGAAAEACQAFADACAEQACAFAAAFQAAAKgFAFQgFAFgJAAQgEAAgFgCgAgFgIQgCADAAAFQAAAGACADQACADADAAQAFAAACgDQACgDAAgGQAAgFgCgDQgCgDgFAAQgDAAgCADg");
	this.shape_7.setTransform(37.9,65.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFBF69").s().p("AgMAUIAAgmIAIAAIACAHIABAAQABgEACgCQAEgCADAAIAEABIgBAJIgDAAQgFAAgDACQgCAEAAADIAAAUg");
	this.shape_8.setTransform(34.2,65.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFBF69").s().p("AgNAQQgEgDAAgHIAAgZIALAAIAAAWQAAAEABACQACACADAAQADAAADgDQABgDAAgFIAAgTIALAAIAAAmIgIAAIgCgFIAAAAIgFAEQgDACgDAAQgHAAgDgEg");
	this.shape_9.setTransform(30.1,65.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFBF69").s().p("AgSAaIAAgzIAQAAQAKAAAEAEQAFADABAGQAAAFgDADQgCACgDACQAEAAADACQACAEAAAEQAAAIgFADQgFAFgJAAgAgHARIAHAAQADgBACgBQACgCABgEQgBgGgHAAIgHAAgAgHgFIAGAAQADAAACgBQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBgBAAQAAAAgBgBQgCgBgEAAIgFAAg");
	this.shape_10.setTransform(25.4,65.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFBF69").s().p("AgNARQgDgDgBgGQABgGAEgCQAEgDAIAAIAHgBIAAgBQAAgGgGAAQgEAAgGADIgEgIQAHgDAHAAQAIAAAEADQAEAEABAHIAAAZIgIAAIgCgGIAAAAQgDAEgDABIgHABQgFAAgDgDgAgDADQgCACgBADQAAAFAGAAQACAAACgCQADgDAAgDIAAgDIgFAAQgDAAgCABg");
	this.shape_11.setTransform(56.7,59.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFBF69").s().p("AgNAXQgEgGgBgJQAAgJAFgGQAEgFAHAAQAGAAAEAGIAAAAIgBgIIAAgNIAMAAIAAA2IgJAAIgCgFIgBAAQgDAFgHAAQgGAAgEgEgAgEAAQgCACAAAGQAAAFACAEQABACAEAAQADAAACgCQACgDAAgGIAAAAQAAgHgCgBQgCgDgEAAQgCAAgCADg");
	this.shape_12.setTransform(52.2,59);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFBF69").s().p("AgNARQgDgDAAgGQgBgGAFgCQAEgDAIAAIAHgBIAAgBQAAgGgGAAQgEAAgHADIgDgIQAHgDAHAAQAIAAAEADQAFAEgBAHIAAAZIgHAAIgCgGIgBAAQgCAEgDABIgGABQgGAAgDgDgAgDADQgDACABADQAAAFAEAAQAEAAABgCQADgDAAgDIAAgDIgEAAQgEAAgCABg");
	this.shape_13.setTransform(45.9,59.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFBF69").s().p("AgEAbIAAgmIAJAAIAAAmgAgFgVQAAgFAFAAQAGAAAAAFQAAAAAAABQAAABAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgFAAAAgFg");
	this.shape_14.setTransform(42.8,59);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFBF69").s().p("AgMAUIAAgmIAIAAIACAGIABAAQABgDACgCQAEgCADAAIAEABIgBAKIgDgBQgFAAgDADQgCACAAAEIAAAUg");
	this.shape_15.setTransform(40.2,59.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFBF69").s().p("AgJASQgEgCgDgFQgCgFAAgGQAAgJAFgFQAFgFAIAAQAGAAAEACQAEADADAEQACAFAAAFQAAAKgFAFQgFAFgJAAQgFAAgEgCgAgFgIQgCADAAAFQAAAGACADQACADADAAQAFAAACgDQABgDAAgGQAAgFgBgDQgCgDgFAAQgDAAgCADg");
	this.shape_16.setTransform(36.2,59.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFBF69").s().p("AgMAPQgFgFAAgKQAAgIAFgGQAFgFAIAAQAIAAAEAFQAFAEAAAJIAAAEIgYAAQAAAEACADQADACAEAAIAGAAIAHgDIAAAJIgGACIgIAAQgIAAgGgFgAgEgJQgCACAAAEIAOAAQAAgEgCgCQgCgDgDAAQgDAAgCADg");
	this.shape_17.setTransform(31.9,59.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFBF69").s().p("AgEAaIAAgpIgOAAIAAgJIAlAAIAAAJIgOAAIAAApg");
	this.shape_18.setTransform(27.6,59.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AALAhIgPgZIgHAAIAAAZIgOAAIAAhBIATAAQAMAAAHAFQAGAFAAAKQAAAGgDAEQgDAEgGACIATAdgAgLgDIAEAAQAHAAACgCQADgCAAgFQAAgEgDgCQgCgCgHAAIgEAAg");
	this.shape_19.setTransform(55.4,77.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgSAhIAAhBIAlAAIAAAMIgXAAIAAAOIAVAAIAAAKIgVAAIAAARIAXAAIAAAMg");
	this.shape_20.setTransform(49.6,77.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgXAhIAAhBIAUAAQANAAAHAEQAGAEAAAJQAAAGgDAEQgDADgEABQAGABADAEQACADAAAHQAAAJgGAFQgGAFgMAAgAgJAVIAJAAQAFAAACgCQADgCAAgFQAAgIgLAAIgIAAgAgJgGIAIAAQAFAAACgBQADgCAAgEQAAgEgDgCQgDgBgFAAIgHAAg");
	this.shape_21.setTransform(43.9,77.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgSAhIAAhBIAlAAIAAAMIgXAAIAAAOIAVAAIAAAKIgVAAIAAARIAXAAIAAAMg");
	this.shape_22.setTransform(38.3,77.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAMAhIgJgiIgCgHIgBgIIAAAIIgCAHIgJAiIgQAAIgQhBIANAAIAJAjIADARIABgIIACgIIAKgkIAMAAIAJAkIACAIIABAIIACgIIABgJIAJgjIANAAIgQBBg");
	this.shape_23.setTransform(31.1,77.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(18,44,52,0.847)").s().p("AmvDOIAAlcQAAg/A+AAILjAAQA+AAAAA/IAAFcg");
	this.shape_24.setTransform(42,69.1,0.763,0.763);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlyGlQgyAAAAgyIAArlQAAgyAyAAILlAAQAyAAAAAyIAALlQAAAygyAAg");
	mask.setTransform(42.1,42.1);

	// img
	this.instance = new lib.weber();
	this.instance.parent = this;
	this.instance.setTransform(-2.2,-14.1,0.254,0.254);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img4, rect = new cjs.Rectangle(0,0,84.2,84.8), [rect]);


(lib.img3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AllAAILLAA");
	this.shape.setTransform(42.3,71.3,0.763,0.763);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFBF69").s().p("AgIASIgEgCIAAgIIAFACIAHABQAEAAAAgDIgBgCIgDgBIgDgCIgGgDQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIgBgEQAAgFADgDQAEgCAFAAQAHAAAGACIgDAHIgFgBIgFgBQgDAAAAACIACACIAEADIAGADIADADIACAEQgBAGgEADQgDACgHAAIgHAAg");
	this.shape_1.setTransform(71.2,65.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFBF69").s().p("AgMAPQgDgCAAgGQAAgFAEgCQAEgDAHAAIAGAAIAAgCQAAgFgFAAQgEAAgFACIgDgGQAFgDAHAAQAHAAAEADQAEADAAAGIAAAXIgHAAIgCgFQgCADgDABIgGABQgFAAgDgDgAgDADQAAAAgBABQAAAAAAABQgBAAAAABQAAABAAAAQAAAEAFAAQACAAACgCQACgCAAgDIAAgDIgEAAIgFACg");
	this.shape_2.setTransform(67.5,65.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFBF69").s().p("AAGASIAAgTQABgFgCgCQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgDAAgCACQgCADAAAFIAAARIgJAAIAAgjIAHAAIACAFIAAAAQABgCADgCIAGgBQAGAAADADQAEAEgBAGIAAAWg");
	this.shape_3.setTransform(63.5,65.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFBF69").s().p("AgMAPQgDgCAAgGQAAgFAEgCQAEgDAHAAIAGAAIAAgCQAAgFgFAAQgDAAgGACIgEgGQAHgDAGAAQAHAAAEADQAEADAAAGIAAAXIgHAAIgCgFQgCADgDABIgGABQgFAAgDgDgAgDADQAAAAgBABQAAAAAAABQgBAAAAABQAAABAAAAQAAAEAFAAQACAAACgCQACgCAAgDIAAgDIgEAAIgFACg");
	this.shape_4.setTransform(59.3,65.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFBF69").s().p("AARASIAAgTIgBgHQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgDgBgDADQgBACAAAFIAAASIgJAAIAAgTIgBgHQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgEAAgCACQgBADAAAFIAAARIgKAAIAAgjIAIAAIABAFIABAAQABgDACgBQADgBAEAAQAGAAADAFIABAAQABgDAEgBQACgBADAAQAHAAADADQADADAAAHIAAAWg");
	this.shape_5.setTransform(54.2,65.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFBF69").s().p("AgMAPQgDgDAAgHIAAgWIAJAAIAAAUQAAADACADQAAAAABAAQAAABABAAQAAAAABAAQAAABABAAQADAAACgEQACgCAAgGIAAgQIAJAAIAAAjIgHAAIgBgFIgBAAQgBADgDABIgGABQgGAAgDgDg");
	this.shape_6.setTransform(48.9,65.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFBF69").s().p("AAJAXIAAgUIgRAAIAAAUIgKAAIAAgtIAKAAIAAASIARAAIAAgSIAKAAIAAAtg");
	this.shape_7.setTransform(44.3,65.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFBF69").s().p("AgIASIgEgCIAAgIIAFACIAGABQAFAAAAgDIgBgCIgDgBIgDgCIgGgDQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIgBgEQgBgFAEgDQAEgCAFAAQAHAAAGACIgDAHIgFgBIgFgBQgDAAAAACIABACIAGADIAFADIAEADIABAEQAAAGgFADQgEACgGAAIgHAAg");
	this.shape_8.setTransform(38.5,65.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFBF69").s().p("AgLAOQgEgFAAgJQAAgIAEgEQAFgFAGAAQAIAAAEAEQAEAEAAAIIAAADIgWAAQABAFACACQACACADAAIAGAAIAGgDIAAAIIgFACIgHAAQgIAAgFgEgAgDgJQgCACAAAEIAMAAQAAgEgCgCQgBgBgEAAQAAAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_9.setTransform(35,65.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFBF69").s().p("AgIAXQgEgDgCgEQgCgEAAgGQAAgHAEgFQAFgFAHAAQAFAAAEACQAEADACAEQACADAAAFQAAAJgFAFQgEAFgIAAQgEAAgEgCgAgFAAQgBABAAAFQAAAGABACQACADADAAQAEAAABgDQACgCAAgGQAAgFgCgBQgBgDgEAAQgDAAgCADgAACgPIgCgBIgCgBIgCAAIgCAAIgCADIgEAAQAAgFACgCQADgDADAAIADABIABABIADABIACAAIACAAIABgDIAFAAQAAAFgDACQgCADgEAAIgCgBg");
	this.shape_10.setTransform(31,65.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFBF69").s().p("AgFAZIAAgFIACAAIACABQABAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQAAgDgFgBIADgFIADABIACAAIgBABQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAAEgCACQgDACgEAAIgEgBgAAEALIAAgBIgFAAIAFAAIAAABIgCAAIgDgBQgMgCAAgOQAAgJAEgFQAFgFAHAAQAGAAAFADIgDAHIgEgBIgEgBQgGAAAAALQAAAJAGAAIAFgBQADAAACgCIAAAIIgFACIgEABg");
	this.shape_11.setTransform(27.4,66.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFBF69").s().p("AgMAPQgDgCAAgGQAAgFAEgCQAEgDAHAAIAGAAIAAgCQAAgFgFAAQgEAAgFACIgEgGQAHgDAGAAQAHAAAEADQAEADAAAGIAAAXIgHAAIgCgFQgCADgDABIgGABQgFAAgDgDgAgDADQAAAAgBABQAAAAAAABQgBAAAAABQAAABAAAAQAAAEAFAAQACAAACgCQACgCAAgDIAAgDIgDAAIgGACg");
	this.shape_12.setTransform(23.6,65.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFBF69").s().p("AgEAZIAAgxIAJAAIAAAxg");
	this.shape_13.setTransform(20.8,65.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFBF69").s().p("AgLAOQgEgFAAgJQAAgIAEgEQAFgFAGAAQAIAAAEAEQAEAEAAAIIAAADIgWAAQABAFACACQACACADAAIAGAAIAGgDIAAAIIgFACIgHAAQgIAAgFgEgAgDgJQgCACAAAEIAMAAQAAgEgCgCQgBgBgEAAQAAAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_14.setTransform(17.9,65.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFBF69").s().p("AAIAXIgLgSIgFAAIAAASIgJAAIAAgtIANAAQAIAAAFADQAFAEgBAHQABAEgDADQgCACgFACIAPAUgAgIgCIADAAQAFAAABgBQADgCgBgDQABgDgDgCQgBgBgFAAIgDAAg");
	this.shape_15.setTransform(14.2,65.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFBF69").s().p("AgHASIgGgCIAAgIIAHACIAGABQAEAAAAgDIgBgCIgCgBIgEgCIgGgDQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBIgBgEQABgFADgDQADgCAHAAQAGAAAGACIgDAHIgFgBIgEgBQgEAAAAACIABACIAFADIAHADIACADIABAEQAAAGgDADQgFACgGAAIgGAAg");
	this.shape_16.setTransform(57.4,60.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFBF69").s().p("AgMAPQgDgCAAgGQAAgFAEgCQAEgDAHAAIAGAAIAAgCQAAgFgGAAQgDAAgGACIgCgGQAFgDAHAAQAHAAAEADQAEADAAAGIAAAXIgHAAIgCgFQgDADgCABIgGABQgFAAgDgDgAgDADQgBAAAAABQAAAAAAABQgBAAAAABQAAABAAAAQAAAEAFAAQACAAACgCQACgCAAgDIAAgDIgEAAIgFACg");
	this.shape_17.setTransform(53.6,60.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFBF69").s().p("AgMAVQgEgFABgJQgBgIAEgEQADgFAHgBQAFABAEAFIAAAAIAAgIIAAgLIAJAAIAAAwIgHAAIgCgEQgEAFgFAAQgHAAgDgEgAgEAAQgCABAAAGQAAAFACADQACADACAAQAEgBABgCQACgCAAgFIAAgBQAAgGgBgCQgCgCgEAAQgCABgCACg");
	this.shape_18.setTransform(49.6,59.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFBF69").s().p("AgMAPQgDgCAAgGQAAgFAEgCQAEgDAHAAIAGAAIAAgCQAAgFgGAAQgCAAgHACIgCgGQAFgDAHAAQAHAAAEADQAEADAAAGIAAAXIgHAAIgCgFQgDADgCABIgGABQgFAAgDgDgAgDADQgBAAAAABQAAAAgBABQAAAAAAABQAAABAAAAQAAAEAFAAQACAAACgCQACgCAAgDIAAgDIgDAAIgGACg");
	this.shape_19.setTransform(43.9,60.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFBF69").s().p("AgEAZIAAgjIAJAAIAAAjgAgEgTQAAgFAEAAQAFAAAAAFIgBAEIgEABQgEAAAAgFg");
	this.shape_20.setTransform(41,59.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFBF69").s().p("AgKASIAAgiIAHAAIACAGIAAAAQABgEACgCQADgBADAAIADAAIAAAKIgDgBQgEAAgDACQgCACAAAEIAAASg");
	this.shape_21.setTransform(38.8,60.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFBF69").s().p("AgIAQQgEgCgCgEQgCgEAAgGQAAgIAEgFQAFgEAHAAQAFAAAEACQAEACACAEQACAEAAAFQAAAJgFAFQgEAEgIAAQgEAAgEgCgAgFgHQgBADAAAEQAAAFABADQACADADAAQAEAAABgDQACgDAAgFQAAgEgCgDQgBgDgEAAQgDAAgCADg");
	this.shape_22.setTransform(35.1,60.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFBF69").s().p("AgLAOQgEgFAAgJQAAgIAEgEQAFgFAGAAQAIAAAEAEQAEAEAAAIIAAADIgWAAQABAFACACQACACADAAIAGAAIAGgDIAAAIIgFACIgHAAQgIAAgFgEgAgDgJQgCACAAAEIAMAAQAAgEgCgCQgBgBgEAAQAAAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_23.setTransform(31.2,60.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFBF69").s().p("AgEAXIAAglIgNAAIAAgIIAjAAIAAAIIgOAAIAAAlg");
	this.shape_24.setTransform(27.4,59.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgWAZQgIgJAAgQQAAgPAIgJQAIgJAOAAQAPAAAIAJQAIAJAAAPQAAAQgIAJQgIAJgPAAQgOAAgIgJgAgMgQQgDAGAAAKQAAALADAFQAEAGAIAAQAQAAAAgWQAAgVgQAAQgHAAgFAFg");
	this.shape_25.setTransform(52.7,77.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgGAhIAAgZIgWgoIAQAAIAMAbIAOgbIAOAAIgVAnIAAAag");
	this.shape_26.setTransform(46.2,77.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AARAhIgFgQIgXAAIgEAQIgQAAIAYhBIAQAAIAWBBgAgHAGIAQAAIgHgXIgCgFIgHAcg");
	this.shape_27.setTransform(40.2,77.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAWAhIAAgfIABgEIAAgPIAAAAIgRAyIgMAAIgQgzIABAUIAAAfIgNAAIAAhBIATAAIAPAxIAAAAIAQgxIATAAIAABBg");
	this.shape_28.setTransform(32.7,77.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(18,44,52,0.847)").s().p("AmvDOIAAlcQAAg/A+AAILjAAQA+AAAAA/IAAFcg");
	this.shape_29.setTransform(42,69.1,0.763,0.763);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlyGlQgyAAAAgyIAArlQAAgyAyAAILlAAQAyAAAAAyIAALlQAAAygyAAg");
	mask.setTransform(42.1,42.1);

	// img
	this.instance = new lib.Mayo();
	this.instance.parent = this;
	this.instance.setTransform(-12.4,-6.7,0.449,0.449);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img3, rect = new cjs.Rectangle(0,0,84.2,84.8), [rect]);


(lib.img2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AllAAILLAA");
	this.shape.setTransform(42.3,69.9,0.763,0.763);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFBF69").s().p("AgNARQgDgDAAgGQAAgGAEgCQAEgDAIAAIAHgBIAAgBQAAgGgGAAQgEAAgGADIgEgIQAHgDAHAAQAIAAAEADQAEAEABAHIAAAZIgIAAIgCgGIAAAAQgDAEgDABIgHABQgFAAgDgDgAgDADQgCACgBADQAAAFAGAAQACAAACgCQADgDAAgDIAAgDIgFAAQgDAAgCABg");
	this.shape_1.setTransform(66.5,63.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFBF69").s().p("AgPAAQAAgJAFgFQAFgFAJAAQAHAAAFADIgDAIIgFgCIgEgBQgIAAAAALQAAAMAIAAIAFgBQADgBADgCIAAAKIgGACIgGAAQgSAAAAgUg");
	this.shape_2.setTransform(62.6,63.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFBF69").s().p("AgFAbIAAgmIAKAAIAAAmgAgFgVQAAgFAFAAQAGAAAAAFQAAAAAAABQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgFAAAAgFg");
	this.shape_3.setTransform(59.6,62.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFBF69").s().p("AgIAUIgGgCIAAgJIAHADIAHABQAEAAABgEIgCgCIgCgCIgEgCIgGgDIgEgDIgBgFQAAgFAFgDQAEgDAFAAQAIAAAHADIgEAIIgFgCIgGgBQgDAAAAACQAAABAAAAQAAAAAAABQABAAAAAAQAAAAABABIAFADIAHADIADADIABAFQAAAGgEADQgFADgHAAIgHAAg");
	this.shape_4.setTransform(56.8,63.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFBF69").s().p("AgIAUIgGgCIAAgJIAHADIAHABQAEAAABgEIgCgCIgCgCIgEgCIgGgDIgEgDIgBgFQAAgFAFgDQAEgDAFAAQAIAAAHADIgEAIIgFgCIgGgBQgDAAAAACQAAABAAAAQAAAAAAABQABAAAAAAQAAAAABABIAFADIAHADIADADIABAFQAAAGgEADQgFADgHAAIgHAAg");
	this.shape_5.setTransform(53.2,63.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFBF69").s().p("AgNAZQgDgDAAgGQgBgHAFgDQAEgDAIAAIAHAAIAAgCQAAgFgGAAQgEAAgHADIgDgHQAHgEAHAAQAIAAAEAEQAFADgBAGIAAAaIgHAAIgCgFIgBAAQgCADgDACIgGABQgGAAgDgDgAgDALQgDABABAEQAAAEAEAAQAEAAACgCQACgCAAgEIAAgDIgEAAQgEAAgCACgAgEgPIAAgBIAHgLIAMAAIAAABIgGAFIgHAGg");
	this.shape_6.setTransform(49.1,62.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFBF69").s().p("AgFAbIAAg1IALAAIAAA1g");
	this.shape_7.setTransform(46,62.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFBF69").s().p("AgNAUQgFgHAAgNQAAgHADgGQACgGAGgDQAGgDAFAAQAIAAAHADIgDAJIgGgCIgGgBQgEAAgEAEQgDAFAAAHQAAARALAAQAGAAAIgCIAAAJQgGACgJAAQgJAAgHgGg");
	this.shape_8.setTransform(42.6,62.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFBF69").s().p("AgNARQgEgDABgGQgBgGAFgCQAEgDAIAAIAHgBIAAgBQAAgGgGAAQgEAAgHADIgDgIQAHgDAHAAQAIAAAEADQAFAEAAAHIAAAZIgIAAIgCgGIgBAAQgCAEgDABIgHABQgFAAgDgDgAgDADQgDACABADQAAAFAEAAQAEAAABgCQADgDAAgDIAAgDIgEAAQgEAAgCABg");
	this.shape_9.setTransform(36.1,63.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFBF69").s().p("AgFAbIAAgmIAKAAIAAAmgAgFgVQAAgFAFAAQAGAAAAAFQAAAAAAABQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgFAAAAgFg");
	this.shape_10.setTransform(33,62.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFBF69").s().p("AgMAUIAAgmIAIAAIACAGIABAAQABgDACgCQAEgCADAAIAEAAIgBALIgDgBQgFAAgDADQgCADAAADIAAAUg");
	this.shape_11.setTransform(30.4,63.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFBF69").s().p("AgJASQgEgCgDgFQgCgFAAgGQAAgJAFgFQAFgFAIAAQAGAAAEACQAEADADAEQACAFAAAFQAAAKgFAFQgFAFgJAAQgFAAgEgCgAgFgIQgCADAAAFQAAAGACADQACADADAAQAEAAACgDQACgDAAgGQAAgFgCgDQgCgDgEAAQgDAAgCADg");
	this.shape_12.setTransform(26.4,63.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFBF69").s().p("AgMAPQgFgFAAgKQAAgIAFgGQAFgFAIAAQAIAAAEAFQAFAEAAAJIAAAEIgYAAQAAAEACADQADACAEAAIAGAAIAHgDIAAAJIgGACIgIAAQgIAAgGgFgAgEgJQgCACAAAEIAOAAQAAgEgCgCQgCgDgDAAQgDAAgCADg");
	this.shape_13.setTransform(22.1,63.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFBF69").s().p("AgEAZIAAgoIgOAAIAAgJIAlAAIAAAJIgOAAIAAAog");
	this.shape_14.setTransform(17.8,62.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgTAhIAAhBIAOAAIAAA1IAZAAIAAAMg");
	this.shape_15.setTransform(54.8,77.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgWAZQgIgJAAgQQAAgPAIgJQAIgJAOAAQAPAAAIAJQAIAJAAAPQAAAQgIAJQgIAJgPAAQgOAAgIgJgAgLgQQgFAGAAAKQAAALAFAFQADAGAIAAQARAAAAgWQAAgVgRAAQgHAAgEAFg");
	this.shape_16.setTransform(48.3,77.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgGAhIAAgZIgWgoIAQAAIAMAbIAOgbIAPAAIgWAnIAAAag");
	this.shape_17.setTransform(41.8,77.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AARAhIgFgQIgXAAIgEAQIgQAAIAYhBIAQAAIAWBBgAgHAGIAQAAIgHgXIgCgFIgHAcg");
	this.shape_18.setTransform(35.8,77.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgSAhIAAhBIAlAAIAAAMIgXAAIAAARIAVAAIAAAKIgVAAIAAAag");
	this.shape_19.setTransform(30.2,77.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(18,44,52,0.847)").s().p("AmvDOIAAlcQAAg/A+AAILjAAQA+AAAAA/IAAFcg");
	this.shape_20.setTransform(42,69.1,0.763,0.763);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlyGlQgyAAAAgyIAArlQAAgyAyAAILlAAQAyAAAAAyIAALlQAAAygyAAg");
	mask.setTransform(42.1,42.1);

	// img
	this.instance = new lib.fayol();
	this.instance.parent = this;
	this.instance.setTransform(-2.2,-22.3,0.111,0.111);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img2, rect = new cjs.Rectangle(0,0,84.2,84.8), [rect]);


(lib.img1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AllAAILLAA");
	this.shape.setTransform(42.3,71.5,0.763,0.763);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFBF69").s().p("AgNARQgEgDAAgGQAAgGAFgCQAEgDAIAAIAHgBIAAgBQAAgGgHAAQgDAAgHADIgDgIQAHgDAHAAQAIAAAEADQAFAEgBAHIAAAZIgHAAIgCgGIgBAAQgCAEgDABIgGABQgGAAgDgDgAgDADQgCACAAADQAAAFAEAAQADAAADgCQACgDAAgDIAAgDIgEAAQgEAAgCABg");
	this.shape_1.setTransform(57,66.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFBF69").s().p("AgPAAQAAgJAFgFQAFgFAJAAQAHAAAFADIgDAIIgFgCIgEgBQgIAAAAALQAAAMAIAAIAFgBQADgBADgCIAAAKIgGACIgGAAQgSAAAAgUg");
	this.shape_2.setTransform(53.1,66.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFBF69").s().p("AgFAbIAAgmIAKAAIAAAmgAgFgVQAAgFAFAAQAGAAAAAFQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgFAAAAgFg");
	this.shape_3.setTransform(50.2,65.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFBF69").s().p("AgIAcIAAgeIgGAAIAAgGIAGgCIAAgEQAAgGADgEQAEgCAGAAQAFgBAFACIgDAIIgGgBQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAABIgBADIAAADIAJAAIAAAIIgJAAIAAAeg");
	this.shape_4.setTransform(47.9,65.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFBF69").s().p("AgJAcIAAgmIAKAAIAAAmgAgJgPIAAgBIAIgKIALAAIAAAAIgGAGIgGAFg");
	this.shape_5.setTransform(45.6,65.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFBF69").s().p("AgFAVQgCgDAAgHIAAgRIgGAAIAAgFIAGgDIADgJIAGAAIAAAJIALAAIAAAIIgLAAIAAARIABAEIAEAAIAHAAIAAAIQgEABgGAAQgGAAgDgDg");
	this.shape_6.setTransform(42.5,66.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFBF69").s().p("AAHAUIAAgWQAAgEgBgCQgCgCgDgBQgDAAgCADQgCAEAAAFIAAATIgLAAIAAgmIAIAAIABAFIABAAQACgDADgCQACgBAEAAQAHAAADAEQAEADAAAIIAAAYg");
	this.shape_7.setTransform(38.6,66.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFBF69").s().p("AgMAPQgFgFAAgKQAAgIAFgGQAFgFAIAAQAIAAAEAFQAFAEAAAJIAAAEIgYAAQAAAEACADQADACAEAAIAGAAIAHgDIAAAJIgGACIgIAAQgIAAgGgFgAgEgJQgCACAAAEIAOAAQAAgEgCgCQgCgDgDAAQgDAAgCADg");
	this.shape_8.setTransform(34.1,66.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFBF69").s().p("AgFAbIAAgmIAKAAIAAAmgAgFgVQAAgFAFAAQAGAAAAAFQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgFAAAAgFg");
	this.shape_9.setTransform(30.9,65.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFBF69").s().p("AgMAUQgHgHAAgNQAAgHADgGQAEgGAFgDQAFgDAHAAQAHAAAHADIgDAJIgGgCIgFgBQgGAAgDAEQgDAFAAAHQAAARAMAAQAFAAAIgCIAAAJQgHACgHAAQgLAAgFgGg");
	this.shape_10.setTransform(27.6,65.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFBF69").s().p("AgJASQgEgCgDgFQgCgFAAgGQAAgJAFgFQAFgFAIAAQAGAAAEACQAFADACAEQACAFAAAFQAAAKgFAFQgFAFgJAAQgEAAgFgCgAgFgIQgCADAAAFQAAAGACADQACADADAAQAFAAACgDQABgDAAgGQAAgFgBgDQgCgDgFAAQgDAAgCADg");
	this.shape_11.setTransform(66.2,59.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFBF69").s().p("AgNAZQgDgEgBgFQABgHAEgDQAEgDAIAAIAHgBIAAgBQAAgFgHAAQgDAAgGADIgEgHQAHgEAHAAQAIAAAEAEQAEADABAGIAAAaIgIAAIgCgGIAAAAQgDAEgDACIgHABQgFAAgDgDgAgDAKQgDACAAAEQABAEAFAAQACAAADgCQACgDAAgDIAAgDIgFAAQgDAAgCABgAAEgQIgDgBIgBgBIgDgBIgCABIgCACIgFAAQAAgEADgEQADgCAEAAIACABIACABIADABIADAAIABgBIACgCIAFAAQAAAFgDADQgCACgEAAIgDAAg");
	this.shape_12.setTransform(61.7,58.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFBF69").s().p("AgFAcIAAgGIACABIADAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAgBQAAgCgFgBIADgGQgOgCAAgQQAAgKAFgFQAFgFAJAAQAHAAAFACIgDAIIgFgBIgEgBQgIAAAAAMQAAALAIgBIAFgBQADAAADgCIAAAJIgGACIgEABIAAgBIgGAAIAEABIACAAIgCAAIgEgBIAGAAIAAABIgBACIAEADQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAFgCABQgDACgEAAIgFAAg");
	this.shape_13.setTransform(57.9,60.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFBF69").s().p("AgNARQgDgDgBgGQABgGAEgCQAEgDAIAAIAHgBIAAgBQAAgGgHAAQgDAAgHADIgDgIQAHgDAHAAQAIAAAEADQAEAEAAAHIAAAZIgHAAIgCgGIAAAAQgDAEgDABIgGABQgGAAgDgDgAgDADQgDACAAADQABAFAEAAQAEAAACgCQACgDAAgDIAAgDIgFAAQgDAAgCABg");
	this.shape_14.setTransform(53.7,59.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFBF69").s().p("AgMAUIAAgmIAIAAIACAGIABAAQABgDACgCQAEgCADAAIAEAAIgBALIgDgBQgFAAgDADQgCADAAADIAAAUg");
	this.shape_15.setTransform(50.2,59.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFBF69").s().p("AgFAVQgCgEAAgGIAAgRIgGAAIAAgFIAGgEIADgIIAGAAIAAAIIALAAIAAAJIgLAAIAAARIABADIAEABIAHgBIAAAIQgEACgGAAQgGAAgDgDg");
	this.shape_16.setTransform(46.8,59.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFBF69").s().p("AgIAUIgGgCIAAgJIAHADIAHABQAEAAAAgEIgBgCIgCgCIgEgCIgGgDIgEgDIgBgFQAAgFAFgDQADgDAHAAQAHAAAGADIgDAIIgFgCIgFgBQgEAAAAACQAAABAAAAQAAAAAAABQABAAAAAAQAAAAABABIAFADIAHADIADADIABAFQAAAGgEADQgFADgHAAIgHAAg");
	this.shape_17.setTransform(43.5,59.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFBF69").s().p("AgFAbIAAgmIAKAAIAAAmgAgFgVQAAgFAFAAQAGAAAAAFQAAAAAAABQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgFAAAAgFg");
	this.shape_18.setTransform(40.6,58.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFBF69").s().p("AAHAUIAAgWQAAgEgBgCQgCgDgDAAQgDAAgCAEQgCACAAAHIAAASIgLAAIAAgmIAIAAIABAFIABAAQACgDADgBQACgCAEAAQAHAAADAEQAEAEAAAHIAAAYg");
	this.shape_19.setTransform(37.1,59.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFBF69").s().p("AgFAbIAAgmIALAAIAAAmgAgFgVQAAgFAFAAQAGAAAAAFQAAAAAAABQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgFAAAAgFg");
	this.shape_20.setTransform(33.7,58.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFBF69").s().p("AATAUIAAgWQAAgEgBgCQgCgDgDAAQgEAAgCAEQgCACAAAGIAAATIgJAAIAAgWQAAgEgCgCQgBgDgDAAQgEAAgCAEQgCACAAAHIAAASIgLAAIAAgmIAJAAIABAFIABAAQABgDADgBQADgCAEAAQAIAAADAGIABAAQABgDADgBIAHgCQAHAAADAEQAEADAAAIIAAAYg");
	this.shape_21.setTransform(29.1,59.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFBF69").s().p("AgOAWQgDgFAAgJQgBgJAFgGQADgFAIAAQAGAAAEAGIABAAIgBgIIAAgMIALAAIAAA1IgJAAIgCgFIAAAAQgEAFgHABQgHAAgEgGgAgFAAQgBACAAAGQAAAFABAEQACACAEAAQADAAACgCQACgDABgFIAAgBQAAgHgDgBQgBgDgFAAQgDAAgCADg");
	this.shape_22.setTransform(23.2,58.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFBF69").s().p("AANAaIgEgMIgRAAIgEAMIgMAAIASgzIANAAIASAzgAgGAEIANAAIgGgRIgBgEIgGAVg");
	this.shape_23.setTransform(18.5,58.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AALAhIgPgZIgHAAIAAAZIgOAAIAAhBIATAAQAMAAAHAFQAGAFAAAKQAAAGgDAEQgDAEgGACIATAdgAgLgDIAEAAQAHAAACgCQADgCAAgFQAAgEgDgCQgCgCgHAAIgEAAg");
	this.shape_24.setTransform(57.6,77.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgWAZQgIgJAAgQQAAgPAIgJQAIgJAOAAQAPAAAIAJQAIAJAAAPQAAAQgIAJQgIAJgPAAQgOAAgIgJgAgMgQQgDAGAAAKQAAALADAFQAFAGAHAAQAQAAABgWQgBgVgQAAQgHAAgFAFg");
	this.shape_25.setTransform(50.6,77.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgTAhIAAhBIAOAAIAAA1IAZAAIAAAMg");
	this.shape_26.setTransform(44.6,77.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgGAhIAAgZIgVgoIAOAAIANAbIANgbIAQAAIgWAnIAAAag");
	this.shape_27.setTransform(38.9,77.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AARAhIgFgQIgXAAIgEAQIgQAAIAYhBIAPAAIAXBBgAgHAGIAPAAIgGgXIgCgFIgHAcg");
	this.shape_28.setTransform(32.9,77.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgGAhIAAg1IgSAAIAAgMIAxAAIAAAMIgSAAIAAA1g");
	this.shape_29.setTransform(27.1,77.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(18,44,52,0.847)").s().p("AmvDOIAAlcQAAg/A+AAILjAAQA+AAAAA/IAAFcg");
	this.shape_30.setTransform(42,69.1,0.763,0.763);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlyGlQgyAAAAgyIAArlQAAgyAyAAILlAAQAyAAAAAyIAALlQAAAygyAAg");
	mask.setTransform(42.1,42.1);

	// img
	this.instance = new lib.FrederickTaylor();
	this.instance.parent = this;
	this.instance.setTransform(-2.2,-4,0.113,0.113);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img1, rect = new cjs.Rectangle(0,0,84.2,84.8), [rect]);


(lib.alvo_box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33CC99").s().p("AmkGlIAAtJINJAAIAANJg");
	this.shape.setTransform(42.1,42.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.alvo_box, rect = new cjs.Rectangle(0,0,84.2,84.2), [rect]);


(lib.tela1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btn_conteudo1.addEventListener("click", conteudo1.bind(this));
		function conteudo1(){
			createjs.Tween.get(this.parent.tela1)
			.to({x:-2000, visible:false}, 1000, createjs.Ease.quartInOut);
			
			this.parent.tela2.linha_do_tempo.play();
			
			createjs.Tween.get(this.parent.tela2).to({x:0}, 1000, createjs.Ease.quartInOut);
			this.parent.tela2.visible = true;	
			
			createjs.Tween.get(this.parent.tela2.onda1_img).wait(500).to({alpha:1}, 1000);
			createjs.Tween.get(this.parent.tela2.onda2_img).wait(1000).to({alpha:1}, 1000);
			createjs.Tween.get(this.parent.tela2.onda3_img).wait(1500).to({alpha:1}, 1000);
			createjs.Tween.get(this.parent.tela2.onda4_img).wait(2000).to({alpha:1}, 1000);
			createjs.Tween.get(this.parent.tela2.onda5_img).wait(2500).to({alpha:1}, 1000);
		
		}
		
		
		
		this.btn_conteudo2.addEventListener("click", conteudo2.bind(this));
		function conteudo2(){
			createjs.Tween.get(this.parent.tela1)
			.to({x:-2000, visible:false}, 1000, createjs.Ease.quadInOut);
			
			createjs.Tween.get(this.parent.tela3).to({x:0}, 1000, createjs.Ease.quadInOut);
			this.parent.tela3.visible = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btn_conteudo2 = new lib.btn_conteudo2();
	this.btn_conteudo2.parent = this;
	this.btn_conteudo2.setTransform(701.2,484,0.909,0.909,0,0,0,125.6,38.6);
	new cjs.ButtonHelper(this.btn_conteudo2, 0, 1, 1);

	this.btn_conteudo1 = new lib.btn_conteudo1();
	this.btn_conteudo1.parent = this;
	this.btn_conteudo1.setTransform(468.8,484,0.909,0.909,0,0,0,125.7,38.6);
	new cjs.ButtonHelper(this.btn_conteudo1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_conteudo1},{t:this.btn_conteudo2}]}).wait(1));

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFBF69").ss(3,1,1).p("Eg/gAAAMB/BAAA");
	this.shape.setTransform(585,347.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHAyQgDgDAAgHQAAgGADgDQADgDAEAAQAFAAADADQADADAAAGQAAAGgDADQgDADgFAAQgEAAgDgCgAgHgdQgDgDAAgHQAAgMAKAAQALAAAAAMQAAAGgDADQgDADgFAAQgEAAgDgCg");
	this.shape_1.setTransform(843.6,400.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiAtIAAgOIAQAGQAIACAHAAQALAAAGgEQAHgEAAgHQAAgGgFgEQgFgEgOgGQgOgEgGgEQgFgEgDgFQgDgEAAgIQAAgLAKgIQAKgGAQAAQAQgBAPAHIgFAMQgPgGgMAAQgKAAgFADQgGAEAAAFQAAAFACACQACADAFADIAQAHQASAGAGAGQAGAHAAAKQAAANgKAIQgKAHgSAAQgUAAgLgGg");
	this.shape_2.setTransform(836.8,400.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXAtQgKgGgGgMQgGgMAAgPQAAgYANgNQAMgNAVAAQAUAAAMANQANAOAAAXQAAAYgNANQgMAOgVAAQgNAAgKgGgAgWgcQgHAJAAATQAAATAHAJQAIALAOAAQAPAAAHgKQAIgKAAgTQAAgSgIgKQgHgKgPAAQgOAAgIAKg");
	this.shape_3.setTransform(826.7,400.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXAmQgMgNAAgZQAAgYAMgNQAMgNAVAAQAIAAAHABIALADIgFAOIgLgEIgKgCQgdAAAAAmQAAATAHAJQAIAKANAAQAMAAAOgFIAAANQgKAFgQAAQgUAAgMgNg");
	this.shape_4.setTransform(816.9,400.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGBEIAAhjIANAAIAABjgAgFgyQgDgCAAgGQAAgEADgDQADgCACAAQADAAADACQADADAAAEQAAAGgDACQgDADgDAAQgCAAgDgDg");
	this.shape_5.setTransform(809.9,398.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgrBJIAAiPIAMAAIADANIAAAAQAGgIAIgDQAHgEAJAAQAUAAALAOQALANAAAYQAAAYgLAOQgLANgUAAQgIAAgIgDQgIgEgGgIIgBAAIABARIAAApgAgVgzQgHAJAAASIAAADQAAAVAHAIQAHAJAPAAQAMAAAIgKQAHgJAAgTQAAgSgHgKQgIgKgNAAQgOAAgHAIg");
	this.shape_6.setTransform(802.1,402.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXBCQgLgHgFgLQgGgMAAgQQAAgXANgNQAMgOAUAAQAVAAAMAOQAMANAAAXQAAAYgMAOQgMAOgVAAQgNAAgKgGgAgVgHQgIAIAAATQAAAUAIAJQAHAKAOAAQAPAAAIgKQAHgJAAgUQAAgTgHgIQgIgLgPAAQgOAAgHALgAgMgpIAAgDIAKgNIAHgOIASAAIAAACIgMAOQgHAJgGAFg");
	this.shape_7.setTransform(790.6,398.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOAgIAAg6IgOAAIAAgIIAOgGIAGgVIAIAAIAAAXIAdAAIAAAMIgdAAIAAA5QAAAJAEAFQAEAFAIAAIAHgBIAGgBIAAALQgCACgFAAIgIABQgcAAAAgeg");
	this.shape_8.setTransform(781.6,399.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgiAtIAAgOIAQAGQAIACAHAAQALAAAGgEQAHgEAAgHQAAgGgFgEQgFgEgOgGQgOgEgGgEQgFgEgDgFQgDgEAAgIQAAgLAKgIQAKgGAQAAQAQgBAPAHIgFAMQgPgGgMAAQgKAAgFADQgGAEAAAFQAAAFACACQACADAFADIAQAHQASAGAGAGQAGAHAAAKQAAANgKAIQgKAHgSAAQgUAAgLgGg");
	this.shape_9.setTransform(769.2,400.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgHBEIAAhjIAPAAIAABjgAgGgyQgCgCAAgGQAAgEACgDQAEgCACAAQAEAAADACQACADAAAEQAAAGgCACQgDADgEAAQgCAAgEgDg");
	this.shape_10.setTransform(762.4,398.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgXAtQgLgGgFgMQgGgMABgPQAAgYALgNQAMgNAWAAQAUAAAMANQAMAOABAXQgBAYgMANQgMAOgVAAQgNAAgKgGgAgWgcQgHAJAAATQAAATAHAJQAIALAOAAQAPAAAHgKQAIgKAAgTQAAgSgIgKQgHgKgPAAQgOAAgIAKg");
	this.shape_11.setTransform(754.4,400.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AggA6QgLgNAAgZQAAgXALgOQALgNATAAQAUAAAKAOIACAAIgBgHIAAgHIAAgpIAPAAIAACNIgNAAIgCgOIAAAAQgLAPgUAAQgTAAgLgNgAgUgIQgHAKAAASQAAAUAHAJQAHAKANAAQAPgBAHgHQAHgJAAgSIAAgEQAAgUgHgJQgIgJgOAAQgNAAgHAKg");
	this.shape_12.setTransform(742.8,398.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AA4AzIAAhAQAAgMgFgGQgFgGgLAAQgOAAgHAIQgGAJAAAQIAAA3IgPAAIAAhAQAAgMgFgGQgFgGgKAAQgPAAgGAJQgHAIAAAUIAAAzIgPAAIAAhjIAMAAIADANIABAAQAEgGAIgEQAHgEAKAAQAXAAAGAQIABAAQAFgIAIgEQAIgFALABQARgBAJAJQAIAJAAATIAABAg");
	this.shape_13.setTransform(724,400.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgcAmQgNgNAAgZQAAgWAMgPQAMgNASAAQATAAALAMQALAMAAAUIAAAJIhEAAQABARAIAJQAJAJAOAAQAQAAAPgGIAAANQgHADgHACQgIABgJAAQgVAAgNgNgAgRgeQgHAHgBAOIAzAAQAAgOgHgHQgGgIgMAAQgKAAgIAIg");
	this.shape_14.setTransform(710.2,400.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgXAtQgKgGgGgMQgGgMABgPQAAgYAMgNQAMgNAVAAQAUAAAMANQANAOAAAXQAAAYgNANQgMAOgVAAQgMAAgLgGgAgWgcQgHAJAAATQAAATAHAJQAIALAOAAQAPAAAHgKQAIgKAAgTQAAgSgIgKQgHgKgPAAQgOAAgIAKg");
	this.shape_15.setTransform(694.5,400.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AggA6QgLgNAAgZQAAgXALgOQALgNATAAQAUAAAKAOIACAAIgBgHIAAgHIAAgpIAPAAIAACNIgNAAIgCgOIAAAAQgLAPgUAAQgTAAgLgNgAgUgIQgHAKAAASQAAAUAHAJQAHAKANAAQAPgBAHgHQAHgJAAgSIAAgEQAAgUgHgJQgIgJgOAAQgNAAgHAKg");
	this.shape_16.setTransform(682.9,398.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgHBEIAAhjIAOAAIAABjgAgGgyQgCgCAAgGQAAgEACgDQADgCADAAQAEAAADACQACADAAAEQAAAGgCACQgDADgEAAQgDAAgDgDg");
	this.shape_17.setTransform(675.2,398.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AggA6QgLgNAAgZQAAgXALgOQALgNATAAQAUAAAKAOIACAAIgBgHIAAgHIAAgpIAPAAIAACNIgNAAIgCgOIAAAAQgLAPgUAAQgTAAgLgNgAgUgIQgHAKAAASQAAAUAHAJQAHAKANAAQAPgBAHgHQAHgJAAgSIAAgEQAAgUgHgJQgIgJgOAAQgNAAgHAKg");
	this.shape_18.setTransform(666.9,398.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgHBEIAAhjIAOAAIAABjgAgFgyQgDgCAAgGQAAgEADgDQACgCADAAQAEAAADACQACADAAAEQAAAGgCACQgDADgEAAQgDAAgCgDg");
	this.shape_19.setTransform(659.1,398.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgIAyIglhjIAQAAIAVA6QAHAVABAGIAAAAIAHgUIAXhBIAQAAIglBjg");
	this.shape_20.setTransform(652.1,400.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgGBEIAAhjIAOAAIAABjgAgGgyQgCgCAAgGQAAgEACgDQADgCADAAQADAAADACQADADAAAEQAAAGgDACQgDADgDAAQgDAAgDgDg");
	this.shape_21.setTransform(645.1,398.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AggA6QgLgNAAgZQAAgXALgOQALgNATAAQAUAAAKAOIACAAIgBgHIAAgHIAAgpIAPAAIAACNIgNAAIgCgOIAAAAQgLAPgUAAQgTAAgLgNgAgUgIQgHAKAAASQAAAUAHAJQAHAKANAAQAPgBAHgHQAHgJAAgSIAAgEQAAgUgHgJQgIgJgOAAQgNAAgHAKg");
	this.shape_22.setTransform(636.8,398.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgOBEQgIgEgGgIIgBAAIgDAOIgLAAIAAiNIAPAAIAAAjIAAAUIAAAAQALgOATAAQAUAAALANQALANAAAXQAAAZgLAOQgLANgUAAQgIAAgIgDgAgVgJQgHAJAAATQAAAWAHAJQAHAIAPABQANAAAHgLQAHgJAAgUQAAgTgHgJQgHgJgOAAQgOAAgHAJg");
	this.shape_23.setTransform(626,398.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgfAqQgKgJABgTIAAhAIAPAAIAABAQgBAMAGAGQAFAGAMAAQAPAAAIgJQAGgIAAgTIAAg0IAPAAIAABjIgMAAIgCgOIgBAAQgEAIgJAEQgIAEgJAAQgSAAgJgJg");
	this.shape_24.setTransform(614.3,400.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgiAtIAAgOIAQAGQAIACAHAAQALAAAGgEQAHgEAAgHQAAgGgFgEQgFgEgOgGQgOgEgGgEQgFgEgDgFQgDgEAAgIQAAgLAKgIQAKgGAQAAQAQgBAPAHIgFAMQgPgGgMAAQgKAAgFADQgGAEAAAFQAAAFACACQACADAFADIAQAHQASAGAGAGQAGAHAAAKQAAANgKAIQgKAHgSAAQgUAAgLgGg");
	this.shape_25.setTransform(604.2,400.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgGBEIAAhjIANAAIAABjgAgFgyQgDgCAAgGQAAgEADgDQADgCACAAQADAAADACQADADAAAEQAAAGgDACQgDADgDAAQgCAAgDgDg");
	this.shape_26.setTransform(592.6,398.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgXAtQgKgGgGgMQgFgMgBgPQAAgYAMgNQAMgNAVAAQAVAAANANQAMAOgBAXQABAYgMANQgNAOgVAAQgMAAgLgGgAgVgcQgIAJAAATQAAATAIAJQAHALAOAAQAPAAAIgKQAHgKAAgTQAAgSgHgKQgIgKgPAAQgOAAgHAKg");
	this.shape_27.setTransform(584.6,400.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgPBHIAAhWIgSAAIAAgHIASgGIAAgFQAAglAfAAQAIAAAKADIgEAMQgIgDgHABQgIAAgEAFQgDAFAAANIAAAGIAYAAIAAANIgYAAIAABWg");
	this.shape_28.setTransform(576.4,398.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgXAtQgLgGgFgMQgGgMABgPQAAgYALgNQAMgNAWAAQAUAAAMANQAMAOABAXQgBAYgMANQgMAOgVAAQgNAAgKgGgAgWgcQgHAJAAATQAAATAHAJQAIALAOAAQAPAAAHgKQAIgKAAgTQAAgSgIgKQgHgKgPAAQgOAAgIAKg");
	this.shape_29.setTransform(562.3,400.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AggA6QgLgNAAgZQAAgXALgOQALgNATAAQAUAAAKAOIACAAIgBgHIAAgHIAAgpIAPAAIAACNIgNAAIgCgOIAAAAQgLAPgUAAQgTAAgLgNgAgUgIQgHAKAAASQAAAUAHAJQAHAKANAAQAPgBAHgHQAHgJAAgSIAAgEQAAgUgHgJQgIgJgOAAQgNAAgHAKg");
	this.shape_30.setTransform(550.7,398.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgfA/QgKgJABgTIAAhAIAPAAIAABAQgBAMAGAGQAFAGAMAAQAPAAAIgJQAGgIAAgTIAAg0IAPAAIAABjIgMAAIgCgNIgBAAQgEAHgJAEQgIAEgJAAQgSAAgJgJgAgKgpIAAgDIAKgNIAGgOIATAAIAAACIgMAOIgNAOg");
	this.shape_31.setTransform(539.6,398.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgcAmQgNgNAAgZQAAgWAMgPQAMgNASAAQATAAALAMQALAMAAAUIAAAJIhEAAQABARAJAJQAIAJAOAAQAQAAAPgGIAAANQgHADgIACQgHABgJAAQgVAAgNgNgAgQgeQgIAHgBAOIAzAAQAAgOgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_32.setTransform(528.7,400.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgOAgIAAg6IgOAAIAAgIIAOgGIAGgVIAIAAIAAAXIAdAAIAAAMIgdAAIAAA5QAAAJAEAFQAEAFAIAAIAHgBIAGgBIAAALQgCACgFAAIgIABQgcAAAAgeg");
	this.shape_33.setTransform(520.1,399.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAaAzIAAhAQAAgMgFgGQgGgGgMAAQgOAAgHAJQgHAIgBAUIAAAzIgPAAIAAhjIANAAIACANIABAAQAEgGAJgEQAIgEAKAAQARgBAKAJQAIAJABATIAABAg");
	this.shape_34.setTransform(511.3,400.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgXAtQgLgGgFgMQgFgMAAgPQgBgYAMgNQAMgNAVAAQAVAAANANQAMAOAAAXQAAAYgMANQgNAOgVAAQgMAAgLgGgAgWgcQgHAJAAATQAAATAHAJQAIALAOAAQAPAAAHgKQAIgKAAgTQAAgSgIgKQgHgKgPAAQgOAAgIAKg");
	this.shape_35.setTransform(499.9,400.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgXAmQgMgNAAgZQAAgYAMgNQAMgNAVAAQAIAAAHABIALADIgFAOIgLgEIgKgCQgdAAAAAmQAAATAHAJQAIAKANAAQAMAAAOgFIAAANQgKAFgQAAQgUAAgMgNg");
	this.shape_36.setTransform(490.1,400.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgcAmQgNgNAAgZQAAgWAMgPQAMgNASAAQATAAALAMQALAMAAAUIAAAJIhEAAQABARAIAJQAJAJAOAAQAQAAAPgGIAAANQgIADgGACQgIABgJAAQgWAAgMgNgAgRgeQgHAHgBAOIAzAAQAAgOgHgHQgGgIgMAAQgKAAgIAIg");
	this.shape_37.setTransform(475.5,400.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgOAgIAAg6IgOAAIAAgIIAOgGIAGgVIAIAAIAAAXIAdAAIAAAMIgdAAIAAA5QAAAJAEAFQAEAFAIAAIAHgBIAGgBIAAALQgCACgFAAIgIABQgcAAAAgeg");
	this.shape_38.setTransform(466.9,399.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgiAtIAAgOIAQAGQAIACAHAAQALAAAGgEQAHgEAAgHQAAgGgFgEQgFgEgOgGQgOgEgGgEQgFgEgDgFQgDgEAAgIQAAgLAKgIQAKgGAQAAQAQgBAPAHIgFAMQgPgGgMAAQgKAAgFADQgGAEAAAFQAAAFACACQACADAFADIAQAHQASAGAGAGQAGAHAAAKQAAANgKAIQgKAHgSAAQgUAAgLgGg");
	this.shape_39.setTransform(459.3,400.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgkBCIAAiDIBJAAIAAANIg6AAIAAArIA2AAIAAANIg2AAIAAAwIA6AAIAAAOg");
	this.shape_40.setTransform(450,399.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgHAKQgDgDAAgHQAAgFADgDQADgDAEAAQAFAAADADQADADAAAFQAAAGgDADQgDADgFAAQgEAAgDgCg");
	this.shape_41.setTransform(437.2,404.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAMAYIgEgvIARAAIgEAvgAgUAYIgEgvIARAAIgEAvg");
	this.shape_42.setTransform(431,394.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgiAtIAAgOIAQAGQAIACAHAAQALAAAGgEQAHgEAAgHQAAgGgFgEQgFgEgOgGQgOgEgGgEQgFgEgDgFQgDgEAAgIQAAgLAKgIQAKgGAQAAQAQgBAPAHIgFAMQgPgGgMAAQgKAAgFADQgGAEAAAFQAAAFACACQACADAFADIAQAHQASAGAGAGQAGAHAAAKQAAANgKAIQgKAHgSAAQgUAAgLgGg");
	this.shape_43.setTransform(422.9,400.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgdAmQgMgNAAgZQAAgWAMgPQALgNAUAAQASAAALAMQALAMAAAUIAAAJIhDAAQAAARAJAJQAHAJAPAAQAQAAAQgGIAAANQgJADgHACQgGABgLAAQgUAAgOgNgAgQgeQgIAHgBAOIAzAAQAAgOgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_44.setTransform(413.3,400.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgOAgIAAg6IgOAAIAAgIIAOgGIAGgVIAIAAIAAAXIAdAAIAAAMIgdAAIAAA5QAAAJAEAFQAEAFAIAAIAHgBIAGgBIAAALQgCACgFAAIgIABQgcAAAAgeg");
	this.shape_45.setTransform(404.7,399.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAaAzIAAhAQABgMgGgGQgFgGgMAAQgPAAgHAJQgIAIAAAUIAAAzIgOAAIAAhjIAMAAIACANIABAAQAFgGAIgEQAIgEAKAAQARgBAKAJQAJAJAAATIAABAg");
	this.shape_46.setTransform(395.8,400.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgcAmQgNgNAAgZQAAgWAMgPQAMgNASAAQATAAALAMQALAMAAAUIAAAJIhEAAQABARAIAJQAJAJAOAAQAQAAAPgGIAAANQgHADgHACQgHABgKAAQgWAAgMgNgAgRgeQgHAHgBAOIAzAAQAAgOgHgHQgGgIgMAAQgLAAgHAIg");
	this.shape_47.setTransform(384.9,400.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgkBCQgKgIAAgNQAAgJAGgHQAGgGAKgDQgEgBgCgEQgDgEAAgEQAAgGADgDQADgEAGgEQgHgDgGgIQgEgHAAgKQAAgQAKgJQAKgJARAAQAHAAAHACIAiAAIAAAJIgTADIAFAIQACAFAAAGQAAAPgKAJQgKAIgQAAIgJAAQgJAFAAAHQAAAEADACQADABAJAAIAQAAQAQAAAJAHQAIAHAAANQABARgNAIQgOAJgZAAQgTAAgLgHgAgaAfQgGAFABAJQAAAIAGAEQAHAEANAAQASAAAJgFQAJgGAAgKQAAgIgFgDQgFgDgOAAIgRAAQgKAAgGAFgAgSg3QgFAFgBAMQABAKAFAFQAHAGAKAAQAVAAAAgWQAAgWgVAAQgLAAgGAGg");
	this.shape_48.setTransform(374.6,402.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgbAzIAAhjIAMAAIABATIACAAQAFgKAHgGQAIgEAJAAIALABIgCANIgKgBQgMAAgIAKQgJAJABAPIAAA1g");
	this.shape_49.setTransform(366.4,400.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgdAmQgMgNAAgZQAAgWAMgPQALgNAUAAQASAAALAMQALAMAAAUIAAAJIhEAAQABARAIAJQAIAJAPAAQAQAAAQgGIAAANQgJADgGACQgIABgKAAQgVAAgNgNgAgRgeQgHAHgBAOIAzAAQAAgOgGgHQgHgIgLAAQgLAAgIAIg");
	this.shape_50.setTransform(356.8,400.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AA4AzIAAhAQAAgMgFgGQgFgGgLAAQgOAAgHAIQgGAJAAAQIAAA3IgPAAIAAhAQAAgMgFgGQgFgGgKAAQgPAAgGAJQgHAIAAAUIAAAzIgPAAIAAhjIAMAAIADANIABAAQAEgGAIgEQAHgEAKAAQAXAAAGAQIABAAQAFgIAIgEQAIgFALABQARgBAJAJQAIAJAAATIAABAg");
	this.shape_51.setTransform(342.9,400.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgkBCIAAiDIBJAAIAAANIg6AAIAAArIA2AAIAAANIg2AAIAAAwIA6AAIAAAOg");
	this.shape_52.setTransform(329.4,399.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgiAtIAAgOIAQAGQAIACAHAAQALAAAGgEQAHgDAAgJQAAgFgFgEQgFgFgOgFQgOgEgGgEQgFgEgDgFQgDgFAAgGQAAgNAKgGQAKgIAQAAQAQABAPAGIgFAMQgPgGgMAAQgKAAgFAEQgGACAAAHQAAADACAEQACACAFACIAQAIQASAGAGAGQAGAGAAAKQAAAPgKAHQgKAIgSgBQgUABgLgHg");
	this.shape_53.setTransform(900.1,377.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAaAyIAAg/QABgMgGgGQgFgGgMAAQgPAAgHAIQgIAJAAATIAAAzIgOAAIAAhiIALAAIADAOIABAAQAFgHAIgFQAIgDAJgBQASABAKAIQAJAJgBATIAAA/g");
	this.shape_54.setTransform(890,377.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgdAmQgMgNAAgYQAAgXAMgOQAMgOASgBQATAAALAMQALANAAAUIAAAIIhEAAQABASAIAJQAIAJAPAAQAQAAAPgHIAAAOQgIADgGACQgHABgKAAQgWAAgNgNgAgRgfQgHAJgBAOIAzAAQAAgPgHgIQgGgHgMAAQgKAAgIAHg");
	this.shape_55.setTransform(879.1,377.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgkBCQgKgIAAgNQAAgJAGgHQAGgGAKgDQgEgBgCgEQgDgEAAgEQAAgGADgDQADgEAGgEQgHgDgGgIQgEgHAAgKQAAgQAJgJQALgJARAAQAHAAAHACIAiAAIAAAJIgTADIAFAIQACAFAAAGQAAAPgKAJQgKAIgRAAIgIAAQgKAFABAHQAAAEADACQADABAJAAIAQAAQAQAAAJAHQAIAHAAANQAAARgMAIQgOAJgYAAQgUAAgLgHgAgaAfQgGAFABAJQAAAIAGAEQAHAEANAAQASAAAJgFQAJgGAAgKQAAgIgFgDQgFgDgOAAIgRAAQgKAAgGAFgAgSg3QgFAFAAAMQAAAKAFAFQAHAGAKAAQAVAAAAgWQAAgWgWAAQgKAAgGAGg");
	this.shape_56.setTransform(868.8,379.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgeAsQgJgIAAgOQAAgdAvgBIARgBIAAgGQAAgMgFgGQgFgFgLAAQgLAAgQAHIgFgLQAIgEAJgCQAIgCAIgBQASAAAIAJQAJAHAAASIAABCIgLAAIgDgNIgBAAQgHAIgIAEQgHADgKAAQgPAAgIgHgAAKACQgRAAgIAFQgIAFAAAKQAAAIAFAFQAFAEAJAAQANAAAIgIQAIgIAAgNIAAgJg");
	this.shape_57.setTransform(858.2,377.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AggA6QgLgOAAgYQAAgYALgNQALgNATgBQAUABAKAOIACAAIgBgHIAAgHIAAgoIAPAAIAACLIgNAAIgCgNIAAAAQgLAPgUAAQgTAAgLgNgAgUgHQgHAIAAAUQAAATAHAJQAHAJANAAQAPABAHgJQAHgIAAgTIAAgDQAAgUgHgJQgIgJgOAAQgNAAgHALg");
	this.shape_58.setTransform(847.4,375.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgbAyIAAhiIAMAAIABASIACAAQAFgJAHgFQAIgGAJAAIALABIgCAPIgKgCQgMAAgIAKQgJAKABAOIAAA0g");
	this.shape_59.setTransform(838.9,377.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgXAtQgLgGgFgMQgGgMAAgPQAAgYANgNQAMgNAUgBQAVABAMANQAMAOAAAXQAAAYgMAOQgMANgVAAQgNABgKgHgAgVgcQgIAJAAATQAAATAIAKQAHAKAOgBQAPAAAIgJQAHgKAAgTQAAgSgHgKQgIgKgPAAQgOAAgHAKg");
	this.shape_60.setTransform(828.8,377.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgOBEQgIgEgGgHIgBAAIgDAMIgLAAIAAiLIAPAAIAAAhIAAAWIAAAAQALgPATgBQAUABALANQALANAAAYQAAAYgLAOQgLANgUAAQgIAAgIgDgAgVgJQgHAJAAAUQAAAUAHAKQAHAJAPgBQANABAHgKQAHgLAAgSQAAgUgHgJQgHgJgOAAQgOAAgHAJg");
	this.shape_61.setTransform(817.8,375.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AArBCIgRgpIg0AAIgQApIgQAAIA1iEIAMAAIA0CEgAgFgeIgPAoIApAAIgPgoIgGgTIgFATg");
	this.shape_62.setTransform(806,375.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AAMAYIgEgvIARAAIgEAvgAgUAYIgEgvIARAAIgEAvg");
	this.shape_63.setTransform(796.4,371.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgiAtIAAgOIAQAGQAIACAHAAQALAAAGgEQAHgDAAgJQAAgFgFgEQgFgFgOgFQgOgEgGgEQgFgEgDgFQgDgFAAgGQAAgNAKgGQAKgIAQAAQAQABAPAGIgFAMQgPgGgMAAQgKAAgFAEQgGACAAAHQAAADACAEQACACAFACIAQAIQASAGAGAGQAGAGAAAKQAAAPgKAHQgKAIgSgBQgUABgLgHg");
	this.shape_64.setTransform(783.4,377.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgeAsQgJgIAAgOQAAgdAvgBIARgBIAAgGQAAgMgFgGQgFgFgLAAQgLAAgQAHIgFgLQAIgEAJgCQAIgCAIgBQASAAAIAJQAJAHAAASIAABCIgLAAIgDgNIgBAAQgHAIgIAEQgHADgKAAQgPAAgIgHgAAKACQgRAAgIAFQgIAFAAAKQAAAIAFAFQAFAEAJAAQANAAAIgIQAIgIAAgNIAAgJg");
	this.shape_65.setTransform(773.5,377.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgiAtIAAgOIAQAGQAIACAHAAQALAAAGgEQAHgDAAgJQAAgFgFgEQgFgFgOgFQgOgEgGgEQgFgEgDgFQgDgFAAgGQAAgNAKgGQAKgIAQAAQAQABAPAGIgFAMQgPgGgMAAQgKAAgFAEQgGACAAAHQAAADACAEQACACAFACIAQAIQASAGAGAGQAGAGAAAKQAAAPgKAHQgKAIgSgBQgUABgLgHg");
	this.shape_66.setTransform(759.5,377.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgdAmQgMgNAAgYQAAgXAMgOQALgOAUgBQASAAALAMQALANAAAUIAAAIIhDAAQAAASAJAJQAHAJAPAAQAQAAAQgHIAAAOQgIADgIACQgGABgLAAQgUAAgOgNgAgQgfQgIAJgBAOIAzAAQAAgPgGgIQgHgHgLAAQgMAAgGAHg");
	this.shape_67.setTransform(749.8,377.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgOAgIAAg6IgOAAIAAgIIAOgGIAGgVIAIAAIAAAXIAdAAIAAAMIgdAAIAAA5QAAAJAEAFQAEAFAIAAIAHgBIAGgBIAAALQgCACgFAAIgIABQgcAAAAgeg");
	this.shape_68.setTransform(741.2,376.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AAbAyIAAg/QAAgMgGgGQgGgGgMAAQgOAAgHAIQgHAJAAATIAAAzIgQAAIAAhiIAMAAIADAOIABAAQAFgHAIgFQAIgDAJgBQATABAIAIQAJAJAAATIAAA/g");
	this.shape_69.setTransform(732.4,377.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgdAmQgMgNAAgYQAAgXAMgOQALgOAUgBQASAAALAMQALANAAAUIAAAIIhDAAQAAASAJAJQAHAJAPAAQAQAAAQgHIAAAOQgIADgIACQgGABgLAAQgUAAgOgNgAgQgfQgIAJgBAOIAzAAQAAgPgGgIQgHgHgLAAQgMAAgGAHg");
	this.shape_70.setTransform(721.5,377.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgcAyIAAhiIANAAIACASIABAAQAFgJAHgFQAIgGAJAAIALABIgCAPIgLgCQgLAAgIAKQgIAKAAAOIAAA0g");
	this.shape_71.setTransform(713.1,377.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgdAmQgMgNAAgYQAAgXAMgOQALgOAUgBQASAAALAMQALANAAAUIAAAIIhDAAQAAASAJAJQAHAJAPAAQAQAAAQgHIAAAOQgIADgIACQgGABgLAAQgUAAgOgNgAgQgfQgIAJgBAOIAzAAQAAgPgGgIQgHgHgLAAQgMAAgGAHg");
	this.shape_72.setTransform(703.5,377.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgPBHIAAhWIgSAAIAAgIIASgFIAAgGQAAgkAfAAQAIAAAKADIgEAMQgIgDgHAAQgIAAgEAGQgDAGAAAMIAAAHIAYAAIAAAMIgYAAIAABWg");
	this.shape_73.setTransform(695.6,375.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgcAmQgNgNAAgYQAAgXAMgOQAMgOASgBQATAAALAMQALANAAAUIAAAIIhEAAQABASAIAJQAJAJAOAAQAQAAAPgHIAAAOQgHADgHACQgIABgJAAQgVAAgNgNgAgRgfQgHAJgBAOIAzAAQAAgPgHgIQgGgHgMAAQgKAAgIAHg");
	this.shape_74.setTransform(686.8,377.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgbAyIAAhiIAMAAIABASIABAAQAGgJAHgFQAHgGAKAAIAMABIgCAPIgMgCQgLAAgIAKQgJAKAAAOIAAA0g");
	this.shape_75.setTransform(678.4,377.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgiAtIAAgOIAQAGQAIACAHAAQALAAAGgEQAHgDAAgJQAAgFgFgEQgFgFgOgFQgOgEgGgEQgFgEgDgFQgDgFAAgGQAAgNAKgGQAKgIAQAAQAQABAPAGIgFAMQgPgGgMAAQgKAAgFAEQgGACAAAHQAAADACAEQACACAFACIAQAIQASAGAGAGQAGAGAAAKQAAAPgKAHQgKAIgSgBQgUABgLgHg");
	this.shape_76.setTransform(664.7,377.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgXAtQgLgGgFgMQgGgMABgPQgBgYAMgNQAMgNAWgBQAUABANANQALAOABAXQgBAYgLAOQgNANgVAAQgNABgKgHgAgWgcQgHAJAAATQAAATAHAKQAIAKAOgBQAPAAAHgJQAIgKAAgTQAAgSgIgKQgHgKgPAAQgOAAgIAKg");
	this.shape_77.setTransform(654.6,377.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgXAmQgMgNAAgYQAAgZAMgNQAMgNAVgBQAIABAHABIALAEIgFAMIgLgDIgKgCQgdAAAAAnQAAARAHALQAIAJANAAQAMAAAOgFIAAANQgKAGgQgBQgUAAgMgNg");
	this.shape_78.setTransform(644.8,377.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgGBEIAAhiIAOAAIAABigAgFgxQgDgDAAgFQAAgFADgDQACgCADAAQADAAADACQADADAAAFQAAAFgDADQgDACgDAAQgDAAgCgCg");
	this.shape_79.setTransform(637.9,375.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgPBHIAAhWIgSAAIAAgIIASgFIAAgGQAAgkAfAAQAIAAAKADIgEAMQgIgDgHAAQgIAAgEAGQgDAGAAAMIAAAHIAYAAIAAAMIgYAAIAABWg");
	this.shape_80.setTransform(632.9,375.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgeBAQgJgHAAgOQAAgfAvgBIARgBIAAgGQAAgKgFgGQgFgFgLAAQgLAAgQAHIgFgMQAIgEAJgBQAIgDAIAAQASAAAIAIQAJAIAAAQIAABEIgLAAIgDgOIgBAAQgHAJgIAEQgHADgKAAQgPAAgIgIgAAKAWQgRABgIAFQgIAEAAALQAAAIAFAEQAFAFAJAAQANgBAIgHQAIgIAAgOIAAgJgAgIgqIAAgCIAJgOIAIgNIASAAIAAABIgMAPQgIAJgGAEg");
	this.shape_81.setTransform(623.7,375.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgcAyIAAhiIANAAIACASIABAAQAFgJAHgFQAIgGAJAAIALABIgCAPIgKgCQgMAAgIAKQgJAKABAOIAAA0g");
	this.shape_82.setTransform(615.8,377.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgkBCQgKgIAAgNQAAgJAGgHQAFgGALgDQgDgBgDgEQgDgEAAgEQAAgGADgDQADgEAGgEQgIgDgEgIQgFgHAAgKQAAgQAJgJQALgJARAAQAHAAAHACIAiAAIAAAJIgSADIAEAIQACAFAAAGQAAAPgKAJQgKAIgRAAIgIAAQgKAFAAAHQABAEADACQADABAJAAIAQAAQAQAAAJAHQAJAHAAANQAAARgOAIQgNAJgYAAQgUAAgLgHgAgaAfQgFAFAAAJQgBAIAIAEQAGAEANAAQASAAAJgFQAJgGAAgKQAAgIgFgDQgFgDgOAAIgRAAQgKAAgGAFgAgSg3QgFAFAAAMQAAAKAFAFQAHAGAKAAQAVAAAAgWQAAgWgWAAQgKAAgGAGg");
	this.shape_83.setTransform(606.2,379.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgXAtQgKgGgGgMQgFgMgBgPQABgYALgNQANgNAUgBQAVABANANQAMAOgBAXQABAYgMAOQgNANgVAAQgMABgLgHgAgVgcQgIAJAAATQAAATAIAKQAHAKAOgBQAPAAAIgJQAHgKAAgTQAAgSgHgKQgIgKgPAAQgOAAgHAKg");
	this.shape_84.setTransform(595.5,377.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgPBHIAAhWIgSAAIAAgIIASgFIAAgGQAAgkAfAAQAIAAAKADIgEAMQgIgDgHAAQgIAAgEAGQgDAGAAAMIAAAHIAYAAIAAAMIgYAAIAABWg");
	this.shape_85.setTransform(587.3,375.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AAaAyIAAg/QAAgMgFgGQgGgGgLAAQgPAAgHAIQgIAJAAATIAAAzIgOAAIAAhiIAMAAIACAOIABAAQAFgHAIgFQAIgDAKgBQARABAKAIQAIAJABATIAAA/g");
	this.shape_86.setTransform(578,377.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgHBEIAAhiIAOAAIAABigAgGgxQgCgDAAgFQAAgFACgDQADgCADAAQAEAAADACQACADAAAFQAAAFgCADQgDACgEAAQgDAAgDgCg");
	this.shape_87.setTransform(569.9,375.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgiAtIAAgOIAQAGQAIACAHAAQALAAAGgEQAHgDAAgJQAAgFgFgEQgFgFgOgFQgOgEgGgEQgFgEgDgFQgDgFAAgGQAAgNAKgGQAKgIAQAAQAQABAPAGIgFAMQgPgGgMAAQgKAAgFAEQgGACAAAHQAAADACAEQACACAFACIAQAIQASAGAGAGQAGAGAAAKQAAAPgKAHQgKAIgSgBQgUABgLgHg");
	this.shape_88.setTransform(558.3,377.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgXAtQgKgGgGgMQgGgMABgPQAAgYAMgNQAMgNAVgBQAUABAMANQANAOAAAXQAAAYgNAOQgMANgVAAQgMABgLgHgAgWgcQgHAJAAATQAAATAHAKQAIAKAOgBQAPAAAHgJQAIgKAAgTQAAgSgIgKQgHgKgPAAQgOAAgIAKg");
	this.shape_89.setTransform(548.2,377.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgeAsQgJgIAAgOQAAgdAvgBIARgBIAAgGQAAgMgFgGQgFgFgLAAQgLAAgQAHIgFgLQAIgEAJgCQAIgCAIgBQASAAAIAJQAJAHAAASIAABCIgLAAIgDgNIgBAAQgHAIgIAEQgHADgKAAQgPAAgIgHgAAKACQgRAAgIAFQgIAFAAAKQAAAIAFAFQAFAEAJAAQANAAAIgIQAIgIAAgNIAAgJg");
	this.shape_90.setTransform(532.3,377.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgUBYIAAgMQAGACAGAAQAHAAACgEQAEgEAAgIIAAhzIAPAAIAAByQAAAdgaAAQgJAAgFgCgAAGhIQgDgCAAgGQAAgFADgCQADgCADAAQAEAAADACQACACAAAFQAAAGgCACQgDADgEAAQgDAAgDgDg");
	this.shape_91.setTransform(523.9,377.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgdAmQgMgNAAgYQAAgXAMgOQALgOAUgBQASAAALAMQALANAAAUIAAAIIhDAAQAAASAJAJQAHAJAPAAQAQAAAQgHIAAAOQgIADgIACQgGABgLAAQgUAAgOgNgAgQgfQgIAJgBAOIAzAAQAAgPgGgIQgHgHgLAAQgMAAgGAHg");
	this.shape_92.setTransform(517.6,377.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgIAyIgmhjIAQAAIAWA6QAHAVABAGIABAAIAFgUIAYhBIARAAIgmBjg");
	this.shape_93.setTransform(507.7,377.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgcAmQgNgNAAgYQAAgXAMgOQAMgOASgBQATAAALAMQALANAAAUIAAAIIhDAAQAAASAJAJQAHAJAPAAQAQAAAPgHIAAAOQgIADgHACQgGABgLAAQgUAAgNgNgAgQgfQgIAJgBAOIAzAAQAAgPgHgIQgGgHgMAAQgLAAgGAHg");
	this.shape_94.setTransform(493.1,377.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgXAtQgLgGgFgMQgFgMAAgPQgBgYAMgNQAMgNAVgBQAVABANANQAMAOgBAXQABAYgMAOQgNANgVAAQgMABgLgHgAgWgcQgHAJAAATQAAATAHAKQAIAKAOgBQAPAAAHgJQAIgKAAgTQAAgSgIgKQgHgKgPAAQgOAAgIAKg");
	this.shape_95.setTransform(477.4,377.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AAcAyIgcgoIgbAoIgRAAIAkgyIgigxIARAAIAZAmIAagmIARAAIgjAxIAlAyg");
	this.shape_96.setTransform(466.9,377.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgHBEIAAhiIAOAAIAABigAgFgxQgDgDAAgFQAAgFADgDQADgCACAAQAEAAADACQACADAAAFQAAAFgCADQgDACgEAAQgCAAgDgCg");
	this.shape_97.setTransform(459.7,375.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgeAsQgJgIAAgOQAAgdAvgBIARgBIAAgGQAAgMgFgGQgFgFgLAAQgLAAgQAHIgFgLQAIgEAJgCQAIgCAIgBQASAAAIAJQAJAHAAASIAABCIgLAAIgDgNIgBAAQgHAIgIAEQgHADgKAAQgPAAgIgHgAAKACQgRAAgIAFQgIAFAAAKQAAAIAFAFQAFAEAJAAQANAAAIgIQAIgIAAgNIAAgJg");
	this.shape_98.setTransform(451.9,377.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgOBEQgIgEgGgHIgBAAIgDAMIgLAAIAAiLIAPAAIAAAhIAAAWIAAAAQALgPATgBQAUABALANQALANAAAYQAAAYgLAOQgLANgUAAQgIAAgIgDgAgVgJQgHAJAAAUQAAAUAHAKQAHAJAPgBQANABAHgKQAHgLAAgSQAAgUgHgJQgHgJgOAAQgOAAgHAJg");
	this.shape_99.setTransform(441.6,375.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgeAsQgJgIAAgOQAAgdAvgBIARgBIAAgGQAAgMgFgGQgFgFgLAAQgLAAgQAHIgFgLQAIgEAJgCQAIgCAIgBQASAAAIAJQAJAHAAASIAABCIgLAAIgDgNIgBAAQgHAIgIAEQgHADgKAAQgPAAgIgHgAAKACQgRAAgIAFQgIAFAAAKQAAAIAFAFQAFAEAJAAQANAAAIgIQAIgIAAgNIAAgJg");
	this.shape_100.setTransform(430.2,377.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgiAtIAAgOIAQAGQAIACAHAAQALAAAGgEQAHgDAAgJQAAgFgFgEQgFgFgOgFQgOgEgGgEQgFgEgDgFQgDgFAAgGQAAgNAKgGQAKgIAQAAQAQABAPAGIgFAMQgPgGgMAAQgKAAgFAEQgGACAAAHQAAADACAEQACACAFACIAQAIQASAGAGAGQAGAGAAAKQAAAPgKAHQgKAIgSgBQgUABgLgHg");
	this.shape_101.setTransform(416.1,377.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgcAmQgNgNAAgYQAAgXAMgOQAMgOASgBQATAAALAMQALANAAAUIAAAIIhEAAQABASAIAJQAJAJAOAAQAQAAAPgHIAAAOQgHADgHACQgHABgKAAQgWAAgMgNgAgRgfQgHAJgBAOIAzAAQAAgPgHgIQgGgHgMAAQgKAAgIAHg");
	this.shape_102.setTransform(406.5,377.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgXA+QgKgFgGgNQgGgLABgQQAAgXAMgNQAMgOAVAAQAUAAAMAOQANANAAAXQAAAYgNAOQgMAOgVAAQgMAAgLgHgAgWgLQgHAKAAASQAAATAHAKQAIAKAOAAQAPAAAHgKQAIgJAAgUQAAgSgIgKQgHgKgPABQgOgBgIAKgAAGgvIgGgDIgGgEQgEgCgDAAQgFABgCACQgCADgBAFIgJAAQABgKAFgHQAFgGAIAAQAEAAAFACIAGADIAHAFIAGABQAEAAACgCIAEgJIAJAAQgBALgFAGQgGAGgIAAQgEAAgEgCg");
	this.shape_103.setTransform(395.7,375.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgOAgIAAg6IgOAAIAAgIIAOgGIAGgVIAIAAIAAAXIAdAAIAAAMIgdAAIAAA5QAAAJAEAFQAEAFAIAAIAHgBIAGgBIAAALQgCACgFAAIgIABQgcAAAAgeg");
	this.shape_104.setTransform(386.7,376.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgXAtQgLgGgFgMQgGgMABgPQgBgYAMgNQAMgNAWgBQAUABANANQALAOABAXQgBAYgLAOQgNANgVAAQgNABgKgHgAgWgcQgHAJAAATQAAATAHAKQAIAKAOgBQAPAAAHgJQAIgKAAgTQAAgSgIgKQgHgKgPAAQgOAAgIAKg");
	this.shape_105.setTransform(377.9,377.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgOBEQgIgEgGgHIgBAAIgDAMIgLAAIAAiLIAPAAIAAAhIAAAWIAAAAQALgPATgBQAUABALANQALANAAAYQAAAYgLAOQgLANgUAAQgIAAgIgDgAgVgJQgHAJAAAUQAAAUAHAKQAHAJAPgBQANABAHgKQAHgLAAgSQAAgUgHgJQgHgJgOAAQgOAAgHAJg");
	this.shape_106.setTransform(366.9,375.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgiAtIAAgOIAQAGQAIACAHAAQALAAAGgEQAHgDAAgJQAAgFgFgEQgFgFgOgFQgOgEgGgEQgFgEgDgFQgDgFAAgGQAAgNAKgGQAKgIAQAAQAQABAPAGIgFAMQgPgGgMAAQgKAAgFAEQgGACAAAHQAAADACAEQACACAFACIAQAIQASAGAGAGQAGAGAAAKQAAAPgKAHQgKAIgSgBQgUABgLgHg");
	this.shape_107.setTransform(351.7,377.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgXAtQgKgGgGgMQgFgMgBgPQAAgYAMgNQAMgNAVgBQAVABANANQAMAOgBAXQABAYgMAOQgNANgVAAQgMABgLgHgAgVgcQgIAJAAATQAAATAIAKQAHAKAOgBQAPAAAIgJQAHgKAAgTQAAgSgHgKQgIgKgPAAQgOAAgHAKg");
	this.shape_108.setTransform(341.6,377.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AAaAyIAAg/QAAgMgFgGQgGgGgMAAQgOAAgHAIQgHAJgBATIAAAzIgPAAIAAhiIANAAIACAOIABAAQAEgHAJgFQAIgDAKgBQARABAKAIQAIAJABATIAAA/g");
	this.shape_109.setTransform(330.4,377.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgcAmQgNgNAAgYQAAgXAMgOQAMgOASgBQATAAALAMQALANAAAUIAAAIIhEAAQABASAIAJQAJAJAOAAQAQAAAPgHIAAAOQgHADgHACQgIABgJAAQgVAAgNgNgAgRgfQgHAJgBAOIAzAAQAAgPgHgIQgGgHgMAAQgKAAgIAHg");
	this.shape_110.setTransform(314.6,377.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AggAqQgIgJgBgTIAAhAIAQAAIAABAQAAAMAFAGQAGAGALAAQAPAAAHgJQAIgIAAgTIAAg0IAOAAIAABjIgMAAIgCgOIgBAAQgEAIgJAEQgIAEgKAAQgRAAgKgJg");
	this.shape_111.setTransform(303.6,377.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AAdBJIAAgrIABgPIgCAAQgKAPgUAAQgTAAgLgNQgLgOAAgXQAAgZALgNQALgOATAAQAUAAALAPIABAAIACgNIAMAAIAACPgAgUgxQgHAKAAATQAAATAHAJQAHAJANAAQAOAAAHgIQAHgIABgSIAAgDQAAgVgIgJQgHgJgOAAQgNAAgHAKg");
	this.shape_112.setTransform(292,379.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgHBEIAAhiIAPAAIAABigAgGgxQgCgDAAgFQAAgFACgDQADgCADAAQAEAAADACQACADAAAFQAAAFgCADQgDACgEAAQgDAAgDgCg");
	this.shape_113.setTransform(284.3,375.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgGBGIAAiLIANAAIAACLg");
	this.shape_114.setTransform(279.6,375.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AghAyQgQgRAAghQAAgUAIgPQAHgPAOgJQAPgIATAAQAUAAAQAHIgHAOQgOgHgPAAQgWAAgMAOQgNAPABAYQAAAaAMAOQAMAOAWAAQANAAASgFIAAAOQgOAFgUAAQgcAAgQgSg");
	this.shape_115.setTransform(271.6,375.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFBF69").s().p("AkAFmIAAibQBQAjA3AOQA3APAvAAQA2AAAdgVQAdgVAAgqQAAgWgMgSQgOgSgYgRQgagRhMglQhIgiglgeQgkgggVgpQgVgpgBg4QAAhoBHg8QBHg9B9AAQA9ABA4APQA3AOA9AaIg1CCQhAgagpgKQgpgKgoAAQgvAAgZAWQgZAWAAAjQAAAXAKARQAKAQAXAPQAWAPBTAoQBuA1ApA0QApA1AABOQAABqhMA+QhOA9iIAAQh9ABhigwg");
	this.shape_116.setTransform(885,284);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFBF69").s().p("AjiGKIAAsTIHFAAIAACJIkeAAIAACtIEKAAIAACIIkKAAIAADLIEeAAIAACKg");
	this.shape_117.setTransform(832.4,284);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFBF69").s().p("AhTGKIAAqIIjWAAIAAiLIJTAAIAACLIjWAAIAAKIg");
	this.shape_118.setTransform(775.1,284);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFBF69").s().p("ACJGKIlWpTIgEAAQAKCeAABCIAAFzIiWAAIAAsTIDTAAIFWJNIAEAAQgJiZAAg/IAAl1ICXAAIAAMTg");
	this.shape_119.setTransform(705.6,284);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFBF69").s().p("AjiGKIAAsTIHFAAIAACJIkeAAIAACtIEKAAIAACIIkKAAIAADLIEeAAIAACKg");
	this.shape_120.setTransform(638.8,284);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFBF69").s().p("AjkEsQhfhoAAjEQAAi/BuhqQBthsDAAAQB6AABxAxIg4CGQhWgrheAAQhrAAhBBJQhCBIAAB6QAACBA1BDQA1BEBjAAQA0AAA2gLIAAikIiVAAIAAiKIE5AAIAAGXQhMAZhDAKQhEALhGgBQixAAhehpg");
	this.shape_121.setTransform(572.4,284);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFBF69").s().p("ACBGKIi6kuIhZAAIAAEuIioAAIAAsTIDmAAQCgAABNA7QBNA6AAB3QAABGgnA2QgmA1hGAfQCyEKA2BNgAiSgrIA2AAQBPAAAlgbQAlgaAAg5QAAg4gmgYQgmgXhRAAIgyAAg");
	this.shape_122.setTransform(509.5,284);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFBF69").s().p("AjiGKIAAsTIHFAAIAACJIkeAAIAACtIEKAAIAACIIkKAAIAADLIEeAAIAACKg");
	this.shape_123.setTransform(446.2,284);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFBF69").s().p("AEKGKIAAl1IABg8QABgiAGiVIgFAAIjLJoIiYAAIi+ppIgFAAQAKC8AAA/IAAFuIiVAAIAAsTIDkAAIC6JaIADAAIDFpaIDjAAIAAMTg");
	this.shape_124.setTransform(368.9,284);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFBF69").s().p("AjiGKIAAsTIHFAAIAACJIkeAAIAACtIEKAAIAACIIkKAAIAADLIEeAAIAACKg");
	this.shape_125.setTransform(295,284);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AjHEqIAAhIQAnARAvAKQAtAJAuAAQBIAAAmgcQAlgcAAgyQAAghgMgVQgOgVgfgSQgfgSg/gWQhZgfgmgsQgmgrAAhGQAAhKA3grQA4gsBZAAQBfAABQAjIgXBBQhPgihKAAQg6AAghAaQghAZAAAtQAAAhANAVQAMAVAcASQAdARA7AVQBkAjAmApQAlApAABBQAABUg8AvQg+AvhnAAQhxAAg9gdg");
	this.shape_126.setTransform(832,202.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("ACkE+IlboVIgDAAQAHBeAABOIAAFpIhEAAIAAp7IBTAAIFaISIADAAIgEhLQgDhAABgbIAAlsIBFAAIAAJ7g");
	this.shape_127.setTransform(779.7,202.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AiwE+IAAp7IFhAAIAABCIkXAAIAADMIEGAAIAABBIkGAAIAADqIEXAAIAABCg");
	this.shape_128.setTransform(729.1,202.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("Ai3DxQhQhWAAibQAAhiAohKQAnhLBLgnQBLgoBjAAQBmAABYAmIgdBBQhWglhQAAQhzAAhBBGQhBBFAAB5QAACBA/BDQA/BCB4AAQBCAAA/gPIAAjEIiOAAIAAhBIDYAAIAAE0QgyAQg0AJQg0AIhFAAQiQAAhQhWg");
	this.shape_129.setTransform(675.5,202.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("ADNE/IhPjKIj+AAIhODKIhLAAID8p9IA9AAID6J9gAgbiRIhLDEIDNAAIhKjEQgOgmgPg2QgJAqgSAyg");
	this.shape_130.setTransform(621.4,202.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("Aj9E+IAAp7IDDAAQCTAABSBSQBTBSAACUQAACchWBUQhVBTigAAgAizD+IBaAAQCDAABDhBQBChBAAh/QAAh8g+g/Qg+g/h7AAIhrAAg");
	this.shape_131.setTransform(568.4,202.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("ACIE+IiZkJIiEAAIAAEJIhKAAIAAp7ICvAAQBzAAA5AtQA3AtAABaQAAB+iAArICtEegAiVgJIBlAAQBNAAAlgfQAlgfAAg+QAAhAgmgbQglgchRAAIhgAAg");
	this.shape_132.setTransform(516.3,202.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AjXDxQhMhWAAibQAAicBMhUQBNhWCMAAQCJAABNBXQBMBXAACYQAACYhMBYQhOBXiJAAQiMAAhMhWgAiejBQg3BDAAB+QAACBA3BDQA3BDBoAAQBpAAA2hDQA2hCAAiCQAAiAg1hBQg2hDhpAAQhpAAg3BDg");
	this.shape_133.setTransform(456.4,202.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AjbE+IAAp7ICzAAQB+AAA4AmQA5AmAABRQAAA5gfAlQggAkg9ALIAAAFQCRAXAACAQAABVg5AwQg6AwhoAAgAiRD/ICEAAQBMAAAngeQAngeAAg/QAAg8gogbQgogchQAAIh+AAgAiRgtIB5AAQBOAAAigYQAigZAAg6QAAg2gmgXQgmgYhTAAIhsAAg");
	this.shape_134.setTransform(400.7,202.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("ADNE/IhPjKIj+AAIhODKIhLAAID8p9IA9AAID6J9gAgbiRIhLDEIDNAAIhKjEQgOgmgPg2QgJAqgSAyg");
	this.shape_135.setTransform(347.7,202.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg
	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("rgba(3,63,143,0.298)").ss(3,1,1).p("AJZxVMgSxAir");
	this.shape_136.setTransform(1110.4,542.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("rgba(3,63,143,0.298)").ss(3,1,1).p("AOX6hMgctA1D");
	this.shape_137.setTransform(1078.6,483.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("rgba(3,63,143,0.298)").ss(3,1,1).p("EATQgjjMgmfBHH");
	this.shape_138.setTransform(1046.2,425.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("rgba(3,63,143,0.298)").ss(3,1,1).p("EAYPgsvMgwdBZf");
	this.shape_139.setTransform(1014.3,366.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("rgba(3,63,143,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_140.setTransform(972.4,326.6,1,1.151,28.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("rgba(3,63,143,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_141.setTransform(908.7,326.6,1,1.151,28.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("rgba(3,63,143,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_142.setTransform(845,326.6,1,1.151,28.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("rgba(3,63,143,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_143.setTransform(781.3,326.6,1,1.151,28.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("rgba(3,63,143,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_144.setTransform(717.6,326.6,1,1.151,28.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("rgba(3,63,143,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_145.setTransform(653.9,326.6,1,1.151,28.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("rgba(3,63,143,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_146.setTransform(590.2,326.6,1,1.151,28.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("rgba(3,63,143,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_147.setTransform(526.5,326.6,1,1.151,28.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("rgba(3,63,143,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_148.setTransform(462.8,326.6,1,1.151,28.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("rgba(3,63,143,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_149.setTransform(399.1,326.6,1,1.151,28.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("rgba(3,63,143,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_150.setTransform(335.4,326.6,1,1.151,28.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("rgba(3,63,143,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_151.setTransform(271.7,326.6,1,1.151,28.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("rgba(3,63,143,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_152.setTransform(208,326.6,1,1.151,28.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("rgba(3,63,143,0.298)").ss(3,1,1).p("EAZLgueMgyVBc9");
	this.shape_153.setTransform(160,297.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("rgba(3,63,143,0.298)").ss(3,1,1).p("EAUMglSMgoXBKl");
	this.shape_154.setTransform(128.2,238.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("rgba(3,63,143,0.298)").ss(3,1,1).p("APO8GMgebA4N");
	this.shape_155.setTransform(96.3,179.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("rgba(3,63,143,0.298)").ss(3,1,1).p("AKKywMgUTAlh");
	this.shape_156.setTransform(65,120.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#02224E").s().p("EhbZAzaMAAAhmzMC2zAAAMAAABmzg");
	this.shape_157.setTransform(585,329);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tela1, rect = new cjs.Rectangle(-2.5,-1.5,1174.6,659.5), [rect]);


(lib.tela_final = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btn_reiniciar.addEventListener("click", reiniciar.bind(this));
		function reiniciar(){
			location.reload();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btn_reiniciar = new lib.btn_reiniciar();
	this.btn_reiniciar.parent = this;
	this.btn_reiniciar.setTransform(703.8,411.9,0.736,0.736);
	new cjs.ButtonHelper(this.btn_reiniciar, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_reiniciar).wait(1));

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFBF69").s().p("AgKBKQgGgEAAgKQAAgJAFgFQAEgFAHAAQAIAAAEAFQAEAFAAAJQAAAJgEAEQgEAFgIAAQgGAAgEgEgAgKgtQgGgEAAgKQAAgSAQAAQAQAAAAASQAAAJgEAFQgEAEgIAAQgGAAgEgEg");
	this.shape.setTransform(656.3,446.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFBF69").s().p("AgqBMIAAiUIATAAIACAbIABAAQAJgOALgIQALgIAOAAQAKAAAIACIgDAVQgKgCgHAAQgSAAgLAOQgNAPAAAWIAABPg");
	this.shape_1.setTransform(646.5,446.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFBF69").s().p("AguBCQgNgLAAgWQABgrBGgDIAagBIAAgJQgBgSgHgIQgIgIgQAAQgSAAgXALIgHgRQALgGANgDQANgEANAAQAaAAANAMQAMAMAAAaIAABkIgQAAIgFgUIAAAAQgMANgLAGQgLAEgQAAQgVAAgNgLgAAOADQgaAAgLAIQgMAHAAAPQAAANAIAGQAGAGAOAAQAUAAAMgLQAMgLAAgVIAAgNg");
	this.shape_2.setTransform(630.2,446.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFBF69").s().p("AgKBmIAAiUIAVAAIAACUgAgIhKQgEgFAAgHQAAgIAEgEQADgDAFAAQAFAAAEADQAEAFAAAHQAAAHgEAFQgEADgFAAQgFAAgDgDg");
	this.shape_3.setTransform(618.1,443.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFBF69").s().p("AgjA5QgSgTAAglQAAgkASgVQASgUAhAAQAKAAALACQALADAGACIgHAUQgHgDgJgCQgJgCgHAAQgsAAAAA5QAAAbALAPQALAOAVAAQASABAUgJIAAAUQgPAIgXAAQgfAAgSgUg");
	this.shape_4.setTransform(606.8,446.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFBF69").s().p("AgKBmIAAiUIAVAAIAACUgAgIhKQgEgFAAgHQAAgIAEgEQADgDAFAAQAFAAAEADQAEAFAAAHQAAAHgEAFQgEADgFAAQgFAAgDgDg");
	this.shape_5.setTransform(595,443.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFBF69").s().p("AAnBMIAAhgQAAgSgIgJQgIgJgSAAQgWAAgLANQgLANAAAdIAABNIgWAAIAAiUIASAAIAEAUIABAAQAHgLAMgGQANgGAOAAQAbAAANANQAOANAAAdIAABgg");
	this.shape_6.setTransform(581.6,446.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFBF69").s().p("AgKBmIAAiUIAVAAIAACUgAgIhKQgEgFAAgHQAAgIAEgEQADgDAFAAQAFAAAEADQAEAFAAAHQAAAHgEAFQgEADgFAAQgFAAgDgDg");
	this.shape_7.setTransform(568.1,443.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFBF69").s().p("AgrA5QgTgUAAgjQAAgjASgWQARgVAdAAQAcAAAQASQARATAAAeIAAANIhlAAQAAAbANANQANANAVAAQAYABAXgKIAAATQgLAFgLADQgKACgQAAQgfAAgUgUgAgagtQgKALgCAVIBNAAQAAgWgKgLQgJgLgSAAQgRAAgLAMg");
	this.shape_8.setTransform(555.5,446.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFBF69").s().p("AgqBMIAAiUIATAAIACAbIABAAQAJgOALgIQALgIAOAAQAKAAAIACIgDAVQgKgCgHAAQgSAAgLAOQgNAPAAAWIAABPg");
	this.shape_9.setTransform(541.5,446.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFBF69").s().p("AguBCQgMgLAAgWQAAgrBHgDIAZgBIAAgJQAAgSgIgIQgHgIgRAAQgSAAgXALIgHgRQALgGANgDQANgEAMAAQAbAAANAMQAMAMAAAaIAABkIgQAAIgEgUIgBAAQgMANgLAGQgLAEgQAAQgWAAgMgLgAAOADQgaAAgLAIQgMAHAAAPQAAANAHAGQAIAGANAAQAUAAAMgLQAMgLAAgVIAAgNg");
	this.shape_10.setTransform(516.6,446.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFBF69").s().p("AgqBMIAAiUIATAAIACAbIABAAQAJgOALgIQALgIAOAAQAKAAAIACIgDAVQgKgCgHAAQgSAAgLAOQgNAPAAAWIAABPg");
	this.shape_11.setTransform(503.3,446.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFBF69").s().p("AguBCQgMgLAAgWQgBgrBIgDIAYgBIAAgJQABgSgIgIQgHgIgRAAQgSAAgXALIgHgRQALgGANgDQANgEAMAAQAbAAANAMQANAMAAAaIAABkIgRAAIgFgUIgBAAQgLANgLAGQgLAEgPAAQgXAAgMgLgAAPADQgaAAgMAIQgMAHAAAPQAAANAHAGQAHAGAOAAQAUAAAMgLQAMgLAAgVIAAgNg");
	this.shape_12.setTransform(487.1,446.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFBF69").s().p("AhABtIAAjXIASAAIADAVIABAAQAIgMAMgGQALgFAOAAQAeAAARAUQAPAUAAAlQAAAjgQAVQgQAUgeAAQgNAAgMgFQgMgGgIgLIgCAAIACAZIAAA9gAgghNQgKANAAAcIAAAFQAAAfAKANQALANAWAAQATAAALgQQALgOAAgcQAAgbgLgPQgLgPgUAAQgWAAgKAMg");
	this.shape_13.setTransform(470.3,449.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFBF69").s().p("AgKBmIAAiUIAVAAIAACUgAgIhKQgEgFAAgHQAAgIAEgEQADgDAFAAQAFAAAEADQAEAFAAAHQAAAHgEAFQgEADgFAAQgFAAgDgDg");
	this.shape_14.setTransform(447.8,443.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFBF69").s().p("AgwA/QgNgNAAgcIAAhhIAWAAIAABgQAAASAJAJQAIAJASAAQAWAAALgNQAKgMAAgdIAAhOIAXAAIAACUIgTAAIgDgUIgBAAQgHALgMAGQgNAGgOAAQgbAAgOgNg");
	this.shape_15.setTransform(434.3,446.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFBF69").s().p("AArBtIAAhAQAAgNABgKIgBAAQgQAXgeAAQgdAAgQgUQgQgUAAgkQAAgkAQgVQAQgUAeAAQAdAAAQAXIABAAIADgVIASAAIAADXgAgehKQgLAPAAAdQAAAcALANQAJAPAVAAQAVAAALgMQAKgMABgcIAAgFQAAgfgKgOQgLgNgWAAQgUAAgKAPg");
	this.shape_16.setTransform(415.5,449.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFBF69").s().p("AguBCQgMgLAAgWQAAgrBHgDIAZgBIAAgJQAAgSgIgIQgHgIgRAAQgSAAgXALIgHgRQALgGANgDQANgEAMAAQAbAAANAMQAMAMAAAaIAABkIgQAAIgEgUIgBAAQgMANgLAGQgLAEgQAAQgWAAgMgLgAAOADQgaAAgLAIQgMAHAAAPQAAANAHAGQAIAGANAAQAUAAAMgLQAMgLAAgVIAAgNg");
	this.shape_17.setTransform(397.8,446.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFBF69").s().p("AgqA5QgUgUAAgjQAAgjASgWQASgVAcAAQAdAAAQASQAQATAAAeIAAANIhmAAQABAbANANQANANAVAAQAYABAXgKIAAATQgLAFgLADQgLACgOAAQghAAgSgUgAgZgtQgLALgCAVIBNAAQAAgWgKgLQgJgLgSAAQgRAAgKAMg");
	this.shape_18.setTransform(372.8,446.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFBF69").s().p("AgwA/QgNgNAAgcIAAhhIAWAAIAABgQAAASAJAJQAIAJASAAQAWAAALgNQAKgMAAgdIAAhOIAXAAIAACUIgTAAIgDgUIgBAAQgHALgMAGQgNAGgOAAQgbAAgOgNg");
	this.shape_19.setTransform(355,446.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFBF69").s().p("AArBtIAAhAQAAgNABgKIgCAAQgPAXgfAAQgcAAgQgUQgRgUAAgkQAAgkARgVQAQgUAdAAQAeAAAQAXIABAAIAEgVIASAAIAADXgAgehKQgLAPAAAdQAAAcALANQAJAPAVAAQAWAAAKgMQAKgMABgcIAAgFQAAgfgLgOQgKgNgWAAQgUAAgKAPg");
	this.shape_20.setTransform(336.2,449.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFBF69").s().p("AgKBmIAAiUIAVAAIAACUgAgIhKQgEgFAAgHQAAgIAEgEQADgDAFAAQAFAAAEADQAEAFAAAHQAAAHgEAFQgEADgFAAQgFAAgDgDg");
	this.shape_21.setTransform(323.1,443.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFBF69").s().p("AgKBqIAAjTIAVAAIAADTg");
	this.shape_22.setTransform(314.7,443.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFBF69").s().p("AgyBLQgYgaAAgxQAAgeAMgXQALgXAWgNQAVgMAcAAQAgAAAXAMIgKATQgWgKgXAAQgfAAgUAVQgTAXAAAkQABAnASAWQASAUAhAAQAVAAAagHIAAAUQgUAIgeAAQgsAAgXgbg");
	this.shape_23.setTransform(301.5,444.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#F18F01").ss(3,1,1).p("Eg/gAAAMB/BAAA");
	this.shape_24.setTransform(590.1,412.8,0.731,1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F18F01").s().p("AgWAWQgIgIAAgOQAAgOAIgIQAIgHAOAAQAPAAAIAHQAIAJAAANQAAANgIAJQgIAIgPAAQgNAAgJgIg");
	this.shape_25.setTransform(878.3,389.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F18F01").s().p("AhJCBIAAkBICTAAIAAAtIhdAAIAAA5IBWAAIAAArIhWAAIAABDIBdAAIAAAtg");
	this.shape_26.setTransform(861.9,378.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F18F01").s().p("AhqCBIAAkBIBRAAQA+AAAjAiQAjAhAAA8QAAA+gkAiQglAihDAAgAgzBUIAXAAQBOAAAAhUQAAhThIAAIgdAAg");
	this.shape_27.setTransform(836.6,378.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F18F01").s().p("ABCCBIgTg9IhdAAIgTA9Ig7AAIBckBIBBAAIBbEBgAggAWIBCAAIgdhdIgFgRIggBug");
	this.shape_28.setTransform(808.5,378.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F18F01").s().p("AhqCBIAAkBIBRAAQA+AAAjAiQAjAhAAA8QAAA+gkAiQglAihDAAgAgzBUIAXAAQBOAAAAhUQAAhThIAAIgdAAg");
	this.shape_29.setTransform(781.5,378.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F18F01").s().p("AgaCBIAAkBIA1AAIAAEBg");
	this.shape_30.setTransform(759.8,378.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F18F01").s().p("AgdCBIhXkBIA3AAIAwCZIAJAfIAEAZQACgQALgoIAxiZIA3AAIhXEBg");
	this.shape_31.setTransform(740.3,378.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F18F01").s().p("AgaCBIAAkBIA1AAIAAEBg");
	this.shape_32.setTransform(720.8,378.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F18F01").s().p("AgaCBIAAjTIhGAAIAAguIDBAAIAAAuIhGAAIAADTg");
	this.shape_33.setTransform(702.6,378.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F18F01").s().p("ABCCBIgTg9IhdAAIgTA9Ig6AAIBakBIBCAAIBcEBgAghAWIBDAAIgehdIgEgRIghBug");
	this.shape_34.setTransform(677.9,378.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F18F01").s().p("ABBCBIgSg9IhdAAIgSA9Ig8AAIBbkBIBCAAIBcEBgAghAWIBDAAIgdhdIgFgRIghBug");
	this.shape_35.setTransform(640.1,378.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F18F01").s().p("AhNBpQgcgZAAgtIAAikIA3AAIAACcQAAAeAMAOQAMAOAaAAQAbAAAMgOQAMgOAAgeIAAicIA3AAIAAClQAAAcgNAWQgNAVgYAMQgYALggAAQgyABgbgag");
	this.shape_36.setTransform(601,378.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F18F01").s().p("AhaBiQgggiABhAQAAhAAfgiQAgghA6AAQA7AAAgAhQAfAjABA/QgBBAgfAiQggAig7AAQg6AAgggigAgwhAQgQAWAAAqQAAArAQAWQAQAWAgAAQBBgBAAhWQAAhWhBAAQgfAAgRAWg");
	this.shape_37.setTransform(571.2,378.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F18F01").s().p("AAtCBIhvjCIgCAAQADA0AAAVIAAB5IgwAAIAAkBIBEAAIBvDAIACAAQgDgyAAgUIAAh6IAxAAIAAEBg");
	this.shape_38.setTransform(540.4,378.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F18F01").s().p("AgaCBIAAkBIA1AAIAAEBg");
	this.shape_39.setTransform(518,378.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F18F01").s().p("ABWCBIAAh6IABgTIACg8IgBAAIhCDJIgyAAIg+jJIgBAAQADA9AAAUIAAB4IgxAAIAAkBIBKAAIA9DEIABAAIBBjEIBKAAIAAEBg");
	this.shape_40.setTransform(493.2,378.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F18F01").s().p("AAqCBIg8hjIgdAAIAABjIg3AAIAAkBIBLAAQA0AAAZAUQAZATAAAmQAAAXgNASQgMARgXAKIBMBwgAgvgNIARAAQAaAAAMgJQAMgJAAgSQAAgSgNgIQgLgIgbAAIgQAAg");
	this.shape_41.setTransform(464.1,378.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F18F01").s().p("AhJCBIAAkBICTAAIAAAtIhcAAIAAA5IBWAAIAAArIhWAAIAABDIBcAAIAAAtg");
	this.shape_42.setTransform(439.3,378.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F18F01").s().p("AgaCBIAAjTIhGAAIAAguIDBAAIAAAuIhGAAIAADTg");
	this.shape_43.setTransform(416.4,378.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F18F01").s().p("AhKCoIAAkAICTAAIAAAtIhdAAIAAA3IBWAAIAAAsIhWAAIAABDIBdAAIAAAtgAAohtQgbgQgNgPQgOAPgaAQIgkAAIAAgFQAighALgUIA+AAQAFAJAOAQQANAQANAMIAAAFg");
	this.shape_44.setTransform(383.5,374.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F18F01").s().p("AhEBiQgdgiAAhAQAAgnAPgeQAOgeAbgQQAcgQAjAAQAmAAAmASIgRAsQgPgHgOgFQgPgFgPAAQgdAAgRAXQgRAXAAApQAABWA/AAQAcAAAngOIAAAuQghANgmAAQg4AAgegig");
	this.shape_45.setTransform(359.9,378.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F18F01").s().p("AhaBiQgggiABhAQAAhAAfgiQAgghA6AAQA7AAAgAhQAfAjABA/QgBBAgfAiQggAig7AAQg6AAgggigAgwhAQgQAWAAAqQAAArAQAWQAQAWAgAAQBBgBAAhWQAAhWhBAAQgfAAgRAWg");
	this.shape_46.setTransform(331.8,378.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F18F01").s().p("AgdCBIhXkBIA3AAIAwCZIAJAfIAEAZQACgQALgoIAxiZIA3AAIhXEBg");
	this.shape_47.setTransform(303.9,378.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("Ag2HAQgUgUAAgtQAAhWBKABQAkgBAUAWQATAXABApQAAAogVAWQgTAXgkAAQgggBgWgTgAgfDEIghqWICCAAIghKWg");
	this.shape_48.setTransform(869.2,301.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AkfGuIAAhoQA4AZBCAOQBDANBBAAQBqAAA2goQA2gpAAhIQAAgwgTgeQgUgegsgaQgtgahbggQiAgug3g+Qg3g/AAhlQABhqBPg+QBQg/CCAAQCJAAByAyIghBdQhxgwhsAAQhUAAgvAkQgwAlAABBQAAAvASAfQASAeAqAZQApAZBVAgQCQAyA3A7QA2A7AABeQgBB5hXBEQhYBDiVAAQikAAhXgpg");
	this.shape_49.setTransform(825.6,300.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("ADtHLIn1sBIgFAAQAKCIAABwIAAIJIhiAAIAAuUIB4AAIHzL9IAFAAIgFhsQgFhdACgoIAAoMIBjAAIAAOUg");
	this.shape_50.setTransform(750.2,300.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("Aj/JWIAAuUIH/AAIAABfImUAAIAAEmIF7AAIAABeIl7AAIAAFSIGUAAIAABfgAhfmHIAAgQQAegnAkg3QAhg3AUgpIB/AAIAAANQgcApg2A7Qg3A8gnAhg");
	this.shape_51.setTransform(677.1,286.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("Ak9HLIAAuUIEDAAQC2AABSA2QBRA2AAB3QAABRgtA2QguA0hXAPIAAAHQDRAiAAC5QAAB7hTBFQhTBFiWAAgAjSFvIC/AAQBuAAA5gqQA4grAAhcQAAhVg5goQg6gph0AAIi3AAgAjShBICwAAQBwAAAxgjQAygkAAhUQAAhNg4giQg3gih3AAIidAAg");
	this.shape_52.setTransform(608.6,300.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AEoHNIhykkIluAAIhyEkIhsAAIFruZIBZAAIFoOZgAgnjSIhsEbIEoAAIhrkbQgUg3gWhOQgOA9gZBIg");
	this.shape_53.setTransform(532.2,300.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("ADFHLIjdl+IjAAAIAAF+IhqAAIAAuUID7AAQCoAABRBAQBQBBAACBQAAC3i4A/ID5GcgAjYgOICTAAQBwAAA0gsQA1gtAAhaQAAhbg1goQg2goh2AAIiLAAg");
	this.shape_54.setTransform(465.5,300.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AEoHNIhykkIlvAAIhwEkIhsAAIFquZIBZAAIFpOZgAgnjSIhsEbIEnAAIhqkbQgVg3gVhOQgNA9gaBIg");
	this.shape_55.setTransform(388.6,300.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AkiHLIAAuUIDuAAQFXAAAAEKQAACMhfBKQhfBLiwAAIhsAAIAAFpgAi3AGIBgAAQCNAAA/gtQA/guAAhkQAAhbg7gtQg8gsh9AAIh3AAg");
	this.shape_56.setTransform(320.8,300.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("rgba(3,63,143,0.298)").ss(3,1,1).p("AJZxVMgSxAir");
	this.shape_57.setTransform(1110.4,542.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("rgba(3,63,143,0.298)").ss(3,1,1).p("AOX6hMgctA1D");
	this.shape_58.setTransform(1078.6,483.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("rgba(3,63,143,0.298)").ss(3,1,1).p("EATQgjjMgmfBHH");
	this.shape_59.setTransform(1046.2,425.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("rgba(3,63,143,0.298)").ss(3,1,1).p("EAYPgsvMgwdBZf");
	this.shape_60.setTransform(1014.3,366.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("rgba(3,63,143,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_61.setTransform(972.4,326.6,1,1.151,28.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("rgba(3,63,143,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_62.setTransform(908.7,326.6,1,1.151,28.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("rgba(3,63,143,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_63.setTransform(845,326.6,1,1.151,28.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("rgba(3,63,143,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_64.setTransform(781.3,326.6,1,1.151,28.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("rgba(3,63,143,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_65.setTransform(717.6,326.6,1,1.151,28.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("rgba(3,63,143,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_66.setTransform(653.9,326.6,1,1.151,28.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("rgba(3,63,143,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_67.setTransform(590.2,326.6,1,1.151,28.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("rgba(3,63,143,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_68.setTransform(526.5,326.6,1,1.151,28.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("rgba(3,63,143,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_69.setTransform(462.8,326.6,1,1.151,28.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("rgba(3,63,143,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_70.setTransform(399.1,326.6,1,1.151,28.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("rgba(3,63,143,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_71.setTransform(335.4,326.6,1,1.151,28.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("rgba(3,63,143,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_72.setTransform(271.7,326.6,1,1.151,28.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("rgba(3,63,143,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_73.setTransform(208,326.6,1,1.151,28.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("rgba(3,63,143,0.298)").ss(3,1,1).p("EAZLgueMgyVBc9");
	this.shape_74.setTransform(160,297.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("rgba(3,63,143,0.298)").ss(3,1,1).p("EAUMglSMgoXBKl");
	this.shape_75.setTransform(128.2,238.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("rgba(3,63,143,0.298)").ss(3,1,1).p("APO8GMgebA4N");
	this.shape_76.setTransform(96.3,179.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("rgba(3,63,143,0.298)").ss(3,1,1).p("AKKywMgUTAlh");
	this.shape_77.setTransform(65,120.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#02224E").s().p("EhbZAzaMAAAhmzMC2zAAAMAAABmzg");
	this.shape_78.setTransform(585,329);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tela_final, rect = new cjs.Rectangle(-2.5,-1.5,1174.6,659.5), [rect]);


(lib.icons5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.instance = new lib.dnasvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(94.2,73.8,0.066,0.066,0,0,0,256.1,256.1);

	this.instance_1 = new lib.mousesvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(59.7,25.5,0.055,0.055,0,0,0,255.7,255.7);

	this.instance_2 = new lib.smartphonesvg("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(25.7,73.3,0.506,0.506,0,0,0,17.1,28.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AiECFQg3g3AAhOQAAhNA3g3QA3g3BNAAQBOAAA3A3QA3A3AABNQAABOg3A3Qg3A3hOAAQhNAAg3g3g");
	this.shape.setTransform(59.7,25.3,1.127,1.127);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#003F8B").ss(2,1,1).p("AC8AAQAABOg3A3Qg3A3hOAAQhNAAg3g3Qg3g3AAhOQAAhNA3g3QA3g3BNAAQBOAAA3A3QA3A3AABNg");
	this.shape_1.setTransform(59.8,25.4,1.348,1.348);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AiECFQg3g3AAhOQAAhNA3g3QA3g3BNAAQBOAAA3A3QA3A3AABNQAABOg3A3Qg3A3hOAAQhNAAg3g3g");
	this.shape_2.setTransform(25.3,73.7,1.127,1.127);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#003F8B").ss(2,1,1).p("AC8AAQAABOg3A3Qg3A3hOAAQhNAAg3g3Qg3g3AAhOQAAhNA3g3QA3g3BNAAQBOAAA3A3QA3A3AABNg");
	this.shape_3.setTransform(25.3,73.7,1.348,1.348);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AiECFQg3g3AAhOQAAhNA3g3QA3g3BNAAQBOAAA3A3QA3A3AABNQAABOg3A3Qg3A3hOAAQhNAAg3g3g");
	this.shape_4.setTransform(94.2,73.7,1.127,1.127);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#003F8B").ss(2,1,1).p("AC8AAQAABOg3A3Qg3A3hOAAQhNAAg3g3Qg3g3AAhOQAAhNA3g3QA3g3BNAAQBOAAA3A3QA3A3AABNg");
	this.shape_5.setTransform(94.2,73.7,1.348,1.348);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.icons5, rect = new cjs.Rectangle(-1,-1,121.6,101.1), [rect]);


(lib.icons4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.instance = new lib.desktopcomputersvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(94.5,73.3,0.055,0.055,0,0,0,240,256.6);

	this.instance_1 = new lib.pumpjacksvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(59.5,24.7,0.053,0.053,0,0,0,256.1,256.1);

	this.instance_2 = new lib.airplanesvg("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(24.3,74.9,0.056,0.056,0,0,0,255.8,255.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AiECFQg3g3AAhOQAAhNA3g3QA3g3BNAAQBOAAA3A3QA3A3AABNQAABOg3A3Qg3A3hOAAQhNAAg3g3g");
	this.shape.setTransform(59.7,25.3,1.127,1.127);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#003F8B").ss(2,1,1).p("AC8AAQAABOg3A3Qg3A3hOAAQhNAAg3g3Qg3g3AAhOQAAhNA3g3QA3g3BNAAQBOAAA3A3QA3A3AABNg");
	this.shape_1.setTransform(59.8,25.4,1.348,1.348);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AiECFQg3g3AAhOQAAhNA3g3QA3g3BNAAQBOAAA3A3QA3A3AABNQAABOg3A3Qg3A3hOAAQhNAAg3g3g");
	this.shape_2.setTransform(25.3,73.7,1.127,1.127);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#003F8B").ss(2,1,1).p("AC8AAQAABOg3A3Qg3A3hOAAQhNAAg3g3Qg3g3AAhOQAAhNA3g3QA3g3BNAAQBOAAA3A3QA3A3AABNg");
	this.shape_3.setTransform(25.3,73.7,1.348,1.348);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AiECFQg3g3AAhOQAAhNA3g3QA3g3BNAAQBOAAA3A3QA3A3AABNQAABOg3A3Qg3A3hOAAQhNAAg3g3g");
	this.shape_4.setTransform(94.2,73.7,1.127,1.127);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#003F8B").ss(2,1,1).p("AC8AAQAABOg3A3Qg3A3hOAAQhNAAg3g3Qg3g3AAhOQAAhNA3g3QA3g3BNAAQBOAAA3A3QA3A3AABNg");
	this.shape_5.setTransform(94.2,73.7,1.348,1.348);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.icons4, rect = new cjs.Rectangle(-1,-1,121.6,101.1), [rect]);


(lib.icons3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.instance = new lib.labsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(95.2,73.6,0.057,0.057,0,0,0,233.6,238);

	this.instance_1 = new lib.lampsvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(60,25.4,0.064,0.064,0,0,0,127.5,256.6);

	this.instance_2 = new lib.carsvg("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(25.6,72.1,0.059,0.059,0,0,0,252,217.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AiECFQg3g3AAhOQAAhNA3g3QA3g3BNAAQBOAAA3A3QA3A3AABNQAABOg3A3Qg3A3hOAAQhNAAg3g3g");
	this.shape.setTransform(59.7,25.3,1.127,1.127);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#003F8B").ss(2,1,1).p("AC8AAQAABOg3A3Qg3A3hOAAQhNAAg3g3Qg3g3AAhOQAAhNA3g3QA3g3BNAAQBOAAA3A3QA3A3AABNg");
	this.shape_1.setTransform(59.8,25.4,1.348,1.348);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AiECFQg3g3AAhOQAAhNA3g3QA3g3BNAAQBOAAA3A3QA3A3AABNQAABOg3A3Qg3A3hOAAQhNAAg3g3g");
	this.shape_2.setTransform(25.3,73.7,1.127,1.127);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#003F8B").ss(2,1,1).p("AC8AAQAABOg3A3Qg3A3hOAAQhNAAg3g3Qg3g3AAhOQAAhNA3g3QA3g3BNAAQBOAAA3A3QA3A3AABNg");
	this.shape_3.setTransform(25.3,73.7,1.348,1.348);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AiECFQg3g3AAhOQAAhNA3g3QA3g3BNAAQBOAAA3A3QA3A3AABNQAABOg3A3Qg3A3hOAAQhNAAg3g3g");
	this.shape_4.setTransform(94.2,73.7,1.127,1.127);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#003F8B").ss(2,1,1).p("AC8AAQAABOg3A3Qg3A3hOAAQhNAAg3g3Qg3g3AAhOQAAhNA3g3QA3g3BNAAQBOAAA3A3QA3A3AABNg");
	this.shape_5.setTransform(94.2,73.7,1.348,1.348);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.icons3, rect = new cjs.Rectangle(-1,-1,121.6,101.1), [rect]);


(lib.icons2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.instance = new lib.factorysvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(94.4,72.3,0.053,0.053,0,0,0,251.8,254.6);

	this.instance_1 = new lib.trainsvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(60.8,24.6,0.047,0.047,0,0,0,256.1,256.1);

	this.instance_2 = new lib.shipsvg("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(25.4,73.2,0.054,0.054,0,0,0,257,257);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AiECFQg3g3AAhOQAAhNA3g3QA3g3BNAAQBOAAA3A3QA3A3AABNQAABOg3A3Qg3A3hOAAQhNAAg3g3g");
	this.shape.setTransform(59.7,25.3,1.127,1.127);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#003F8B").ss(2,1,1).p("AC8AAQAABOg3A3Qg3A3hOAAQhNAAg3g3Qg3g3AAhOQAAhNA3g3QA3g3BNAAQBOAAA3A3QA3A3AABNg");
	this.shape_1.setTransform(59.8,25.4,1.348,1.348);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AiECFQg3g3AAhOQAAhNA3g3QA3g3BNAAQBOAAA3A3QA3A3AABNQAABOg3A3Qg3A3hOAAQhNAAg3g3g");
	this.shape_2.setTransform(25.3,73.7,1.127,1.127);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#003F8B").ss(2,1,1).p("AC8AAQAABOg3A3Qg3A3hOAAQhNAAg3g3Qg3g3AAhOQAAhNA3g3QA3g3BNAAQBOAAA3A3QA3A3AABNg");
	this.shape_3.setTransform(25.3,73.7,1.348,1.348);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AiECFQg3g3AAhOQAAhNA3g3QA3g3BNAAQBOAAA3A3QA3A3AABNQAABOg3A3Qg3A3hOAAQhNAAg3g3g");
	this.shape_4.setTransform(94.2,73.7,1.127,1.127);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#003F8B").ss(2,1,1).p("AC8AAQAABOg3A3Qg3A3hOAAQhNAAg3g3Qg3g3AAhOQAAhNA3g3QA3g3BNAAQBOAAA3A3QA3A3AABNg");
	this.shape_5.setTransform(94.2,73.7,1.348,1.348);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.icons2, rect = new cjs.Rectangle(-1,-1,121.6,101.1), [rect]);


(lib.icons1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.instance = new lib.shirtsvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(93.9,75.1,0.063,0.063,0,0,0,255.8,220.8);

	this.instance_1 = new lib.anvilsvg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(59.1,26.3,0.061,0.061,0,0,0,256.5,147.7);

	this.instance_2 = new lib.hydropowersvg("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(25.4,73.8,0.061,0.061,0,0,0,209.8,256.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AiECFQg3g3AAhOQAAhNA3g3QA3g3BNAAQBOAAA3A3QA3A3AABNQAABOg3A3Qg3A3hOAAQhNAAg3g3g");
	this.shape.setTransform(59.7,25.3,1.127,1.127);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#003F8B").ss(2,1,1).p("AC8AAQAABOg3A3Qg3A3hOAAQhNAAg3g3Qg3g3AAhOQAAhNA3g3QA3g3BNAAQBOAAA3A3QA3A3AABNg");
	this.shape_1.setTransform(59.8,25.4,1.348,1.348);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AiECFQg3g3AAhOQAAhNA3g3QA3g3BNAAQBOAAA3A3QA3A3AABNQAABOg3A3Qg3A3hOAAQhNAAg3g3g");
	this.shape_2.setTransform(25.3,73.7,1.127,1.127);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#003F8B").ss(2,1,1).p("AC8AAQAABOg3A3Qg3A3hOAAQhNAAg3g3Qg3g3AAhOQAAhNA3g3QA3g3BNAAQBOAAA3A3QA3A3AABNg");
	this.shape_3.setTransform(25.3,73.7,1.348,1.348);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AiECFQg3g3AAhOQAAhNA3g3QA3g3BNAAQBOAAA3A3QA3A3AABNQAABOg3A3Qg3A3hOAAQhNAAg3g3g");
	this.shape_4.setTransform(94.2,73.7,1.127,1.127);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#003F8B").ss(2,1,1).p("AC8AAQAABOg3A3Qg3A3hOAAQhNAAg3g3Qg3g3AAhOQAAhNA3g3QA3g3BNAAQBOAAA3A3QA3A3AABNg");
	this.shape_5.setTransform(94.2,73.7,1.348,1.348);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.icons1, rect = new cjs.Rectangle(-1,-1,121.6,101.1), [rect]);


(lib.btn11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A56D20").s().p("AgYAhQgKgMAAgVQAAgUAMgLQALgMAVAAQANAAAMAFIgGAPQgJgFgLAAQgKAAgHAIQgIAIAAAMQAAAOAGAIQAGAHAKAAIALgBIAAgSIgQAAIAAgOIAiAAIAAAsIgPADIgPABQgTAAgKgLg");
	this.shape.setTransform(60.6,40.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A56D20").s().p("AAPArIgkhAIgBAAIABAXIAAApIgQAAIAAhVIAXAAIAkA/IABAAIgBgWIAAgpIAQAAIAABVg");
	this.shape_1.setTransform(51.6,40.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A56D20").s().p("AgIArIAAhVIARAAIAABVg");
	this.shape_2.setTransform(44.7,40.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A56D20").s().p("AAdArIAAgpIAAgFIABgUIgBAAIgWBCIgQAAIgUhDIgBAAIABAbIAAAoIgQAAIAAhVIAZAAIAUBBIAVhBIAZAAIAABVg");
	this.shape_3.setTransform(37.1,40.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A56D20").s().p("AgYArIAAhVIAxAAIAAAPIgfAAIAAATIAcAAIAAAOIgcAAIAAAWIAfAAIAAAPg");
	this.shape_4.setTransform(28.2,40.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A56D20").s().p("AgjArIAAhVIAbAAQAUAAAMALQALALAAAUQABAUgMALQgMAMgWAAgAgRAcIAIAAQAZAAAAgcQABgbgYAAIgKAAg");
	this.shape_5.setTransform(20.4,40.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// bg
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFBF69").s().p("At4QOQiVAAAAiVIAA7xQAAiVCVAAIbxAAQCVAAAACVIAAbxQAACViVAAg");
	this.shape_6.setTransform(40.4,40.5,0.39,0.39);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFD8A3").s().p("At4QOQiVAAAAiVIAA7xQAAiVCVAAIbxAAQCVAAAACVIAAbxQAACViVAAg");
	this.shape_7.setTransform(40.4,40.5,0.39,0.39);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_7}]},1).wait(1));

	// dot
	this.btn11_dot = new lib.btn_dot();
	this.btn11_dot.parent = this;
	this.btn11_dot.setTransform(40.4,40.4,1,1,0,0,0,23.4,23.4);

	this.timeline.addTween(cjs.Tween.get(this.btn11_dot).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,80.9,80.9);
p.frameBounds = [rect, rect];


(lib.btn10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A56D20").s().p("AAOArIgUghIgJAAIAAAhIgSAAIAAhVIAZAAQAQAAAIAGQAJAHAAANQAAAHgEAGQgFAFgHADIAZAmgAgPgEIAGAAQAIAAADgDQAEgDAAgGQAAgGgEgDQgDgCgJAAIgFAAg");
	this.shape.setTransform(65.1,40.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A56D20").s().p("AgXArIAAhVIAvAAIAAAPIgdAAIAAATIAcAAIAAAOIgcAAIAAAWIAdAAIAAAPg");
	this.shape_1.setTransform(57.4,40.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A56D20").s().p("AAOArIgWgkIgIAFIAAAfIgSAAIAAhVIASAAIAAAnIAHgKIAXgdIAUAAIgeAmIAfAvg");
	this.shape_2.setTransform(50.5,40.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A56D20").s().p("AgWAhQgKgMAAgVQAAgMAFgKQAFgKAJgGQAJgFALAAQANAAANAGIgGAPIgKgEQgFgCgFAAQgJAAgFAIQgGAHAAANQAAAdAUAAQAJAAANgFIAAAQQgKAEgNAAQgSAAgKgLg");
	this.shape_3.setTransform(42.2,40.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A56D20").s().p("AgZAjQgJgJAAgOIAAg2IASAAIAAAzQAAAKAEAFQAEAEAIAAQAJAAAEgEQAEgFAAgKIAAgzIASAAIAAA2QAAAJgEAIQgEAHgIAEQgIADgLAAQgQAAgJgIg");
	this.shape_4.setTransform(33.7,40.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A56D20").s().p("AAOArIgUghIgJAAIAAAhIgSAAIAAhVIAZAAQAQAAAIAGQAJAHAAANQAAAHgEAGQgFAFgHADIAZAmgAgPgEIAGAAQAIAAADgDQAEgDAAgGQAAgGgEgDQgDgCgJAAIgFAAg");
	this.shape_5.setTransform(25.8,40.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A56D20").s().p("AgjArIAAhVIAbAAQAUAAAMALQALALAAAUQAAAUgLALQgMAMgXAAgAgRAcIAIAAQAZAAAAgcQABgbgYAAIgKAAg");
	this.shape_6.setTransform(17,40.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// bg
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFBF69").s().p("At4QOQiVAAAAiVIAA7xQAAiVCVAAIbxAAQCVAAAACVIAAbxQAACViVAAg");
	this.shape_7.setTransform(40.4,40.5,0.39,0.39);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFD8A3").s().p("At4QOQiVAAAAiVIAA7xQAAiVCVAAIbxAAQCVAAAACVIAAbxQAACViVAAg");
	this.shape_8.setTransform(40.4,40.5,0.39,0.39);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.shape_8}]},1).wait(1));

	// dot
	this.btn10_dot = new lib.btn_dot();
	this.btn10_dot.parent = this;
	this.btn10_dot.setTransform(40.4,40.4,1,1,0,0,0,23.4,23.4);

	this.timeline.addTween(cjs.Tween.get(this.btn10_dot).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,80.9,80.9);
p.frameBounds = [rect, rect];


(lib.btn9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A56D20").s().p("AAOArIgUghIgJAAIAAAhIgSAAIAAhVIAZAAQAQAAAIAGQAJAHAAANQAAAHgEAGQgFAFgHADIAZAmgAgPgEIAGAAQAIAAADgDQAEgDAAgGQAAgGgEgDQgDgCgJAAIgFAAg");
	this.shape.setTransform(60.9,40.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A56D20").s().p("AgXArIAAhVIAvAAIAAAPIgdAAIAAATIAbAAIAAAOIgbAAIAAAWIAdAAIAAAPg");
	this.shape_1.setTransform(53.2,40.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A56D20").s().p("AgZArIAAhVIASAAIAABGIAhAAIAAAPg");
	this.shape_2.setTransform(46.6,40.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A56D20").s().p("AgjArIAAhVIAbAAQAUAAAMALQAMALAAAUQgBAUgLALQgNAMgVAAgAgRAcIAJAAQAZAAAAgcQgBgbgXAAIgKAAg");
	this.shape_3.setTransform(38.7,40.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A56D20").s().p("AgXArIAAhVIAvAAIAAAPIgeAAIAAATIAcAAIAAAOIgcAAIAAAWIAeAAIAAAPg");
	this.shape_4.setTransform(30.8,40.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A56D20").s().p("AgIArIAAhVIARAAIAABVg");
	this.shape_5.setTransform(25.3,40.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A56D20").s().p("AgXArIAAhVIAvAAIAAAPIgeAAIAAAWIAdAAIAAAOIgdAAIAAAig");
	this.shape_6.setTransform(20.3,40.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// bg
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFBF69").s().p("At4QOQiVAAAAiVIAA7xQAAiVCVAAIbxAAQCVAAAACVIAAbxQAACViVAAg");
	this.shape_7.setTransform(40.4,40.5,0.39,0.39);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFD8A3").s().p("At4QOQiVAAAAiVIAA7xQAAiVCVAAIbxAAQCVAAAACVIAAbxQAACViVAAg");
	this.shape_8.setTransform(40.4,40.5,0.39,0.39);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.shape_8}]},1).wait(1));

	// dot
	this.btn9_dot = new lib.btn_dot();
	this.btn9_dot.parent = this;
	this.btn9_dot.setTransform(40.4,40.4,1,1,0,0,0,23.4,23.4);

	this.timeline.addTween(cjs.Tween.get(this.btn9_dot).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,80.9,80.9);
p.frameBounds = [rect, rect];


(lib.btn8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A56D20").s().p("AgGAjIAAgbIgYgrIARAAIANAeIAPgeIAQAAIgYArIAAAbg");
	this.shape.setTransform(72,40.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A56D20").s().p("AgUAjIAAhGIApAAIAAANIgaAAIAAASIAYAAIAAALIgYAAIAAAcg");
	this.shape_1.setTransform(66.4,40.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A56D20").s().p("AgUAjIAAhGIApAAIAAANIgaAAIAAASIAYAAIAAALIgYAAIAAAcg");
	this.shape_2.setTransform(60.9,40.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A56D20").s().p("AAMAjIgdg1IgBAAIABAUIAAAhIgOAAIAAhGIATAAIAfA0IAAAAIgBgSIAAgiIANAAIAABGg");
	this.shape_3.setTransform(53.9,40.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A56D20").s().p("AASAkIgFgRIgZAAIgFARIgRAAIAahHIARAAIAaBHgAgIAGIARAAIgIgZIgBgFIgIAeg");
	this.shape_4.setTransform(46.4,40.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A56D20").s().p("AgVAjIAAhGIAPAAIAAA6IAcAAIAAAMg");
	this.shape_5.setTransform(40.4,40.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A56D20").s().p("AASAkIgFgRIgZAAIgFARIgQAAIAZhHIARAAIAZBHgAgIAGIASAAIgIgZIgCgFIgIAeg");
	this.shape_6.setTransform(33.9,40.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A56D20").s().p("AgGAjIAAg5IgUAAIAAgNIA1AAIAAANIgUAAIAAA5g");
	this.shape_7.setTransform(27.6,40.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A56D20").s().p("AALAjIgQgbIgIAAIAAAbIgOAAIAAhGIAUAAQAOABAGAFQAIAFAAALQgBAGgDAFQgDAEgGADIAVAegAgNgDIAGAAQAGAAADgCQAEgDgBgFQABgFgEgCQgCgCgIAAIgFAAg");
	this.shape_8.setTransform(21.8,40.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A56D20").s().p("AgUAjIAAhGIApAAIAAANIgaAAIAAAPIAYAAIAAAMIgYAAIAAASIAaAAIAAAMg");
	this.shape_9.setTransform(15.4,40.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A56D20").s().p("AgZAjIAAhGIAVAAQAPAAAHAFQAGAEABAJQgBAHgDAEQgCAEgGAAIAAABQAIABACAEQAEAEAAAHQAAAKgIAFQgHAGgMgBgAgKAXIAKAAQAEAAAEgCQACgDAAgEQAAgKgLABIgJAAgAgKgHIAJAAQAFAAACgCQADgBAAgEQAAgFgDgBQgDgCgGAAIgHAAg");
	this.shape_10.setTransform(9.3,40.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// bg
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFBF69").s().p("At4QOQiVAAAAiVIAA7xQAAiVCVAAIbxAAQCVAAAACVIAAbxQAACViVAAg");
	this.shape_11.setTransform(40.4,40.5,0.39,0.39);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFD8A3").s().p("At4QOQiVAAAAiVIAA7xQAAiVCVAAIbxAAQCVAAAACVIAAbxQAACViVAAg");
	this.shape_12.setTransform(40.4,40.5,0.39,0.39);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},1).wait(1));

	// dot
	this.btn8_dot = new lib.btn_dot();
	this.btn8_dot.parent = this;
	this.btn8_dot.setTransform(40.4,40.4,1,1,0,0,0,23.4,23.4);

	this.timeline.addTween(cjs.Tween.get(this.btn8_dot).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,80.9,80.9);
p.frameBounds = [rect, rect];


(lib.btn7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A56D20").s().p("AgjArIAAhVIAbAAQAUAAAMALQAMALAAAUQgBAUgLALQgNAMgVAAgAgRAcIAJAAQAZAAAAgcQgBgbgXAAIgKAAg");
	this.shape.setTransform(69.3,40.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A56D20").s().p("AAOArIgUghIgJAAIAAAhIgSAAIAAhVIAZAAQAQAAAIAGQAJAHAAANQAAAHgEAGQgFAFgHADIAZAmgAgPgEIAGAAQAIAAADgDQAEgDAAgGQAAgGgEgDQgDgCgJAAIgFAAg");
	this.shape_1.setTransform(61.2,40.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A56D20").s().p("AgdAgQgLgLAAgVQAAgVALgLQAKgLATAAQAUAAAKAMQALAKAAAVQAAAVgLALQgKAMgUAAQgTAAgKgMgAgPgUQgGAHAAANQAAAOAGAIQAFAHAKAAQAWAAAAgdQAAgcgWAAQgKAAgFAIg");
	this.shape_2.setTransform(51.9,40.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A56D20").s().p("AgXArIAAhVIAvAAIAAAPIgeAAIAAAWIAcAAIAAAOIgcAAIAAAig");
	this.shape_3.setTransform(44.1,40.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A56D20").s().p("AgiArIAAhVIAaAAQAUAAAMALQAMALAAAUQgBAUgMALQgLAMgWAAgAgQAcIAIAAQAZAAAAgcQAAgbgYAAIgJAAg");
	this.shape_4.setTransform(36.3,40.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A56D20").s().p("AAWArIgGgUIgfAAIgGAUIgUAAIAfhVIAVAAIAfBVgAgKAHIAVAAIgKgeIgBgGIgKAkg");
	this.shape_5.setTransform(27.5,40.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A56D20").s().p("AAOArIgUghIgJAAIAAAhIgSAAIAAhVIAZAAQAQAAAIAGQAJAHAAANQAAAHgEAGQgFAFgHADIAZAmgAgPgEIAGAAQAIAAADgDQAEgDAAgGQAAgGgEgDQgDgCgJAAIgFAAg");
	this.shape_6.setTransform(20,40.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A56D20").s().p("AgfArIAAhVIAbAAQARAAAIAFQAIAFAAAMQAAAHgDAFQgEAFgGABIAAABQAIABAEAFQAEAFAAAIQAAAMgJAGQgIAHgPAAgAgNAcIAMAAQAHAAADgDQAEgDAAgGQAAgLgPAAIgLAAgAgNgIIALAAQAGAAAEgCQADgDAAgFQAAgFgEgCQgDgCgHAAIgKAAg");
	this.shape_7.setTransform(11.6,40.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// bg
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFBF69").s().p("At4QOQiVAAAAiVIAA7xQAAiVCVAAIbxAAQCVAAAACVIAAbxQAACViVAAg");
	this.shape_8.setTransform(40.4,40.5,0.39,0.39);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFD8A3").s().p("At4QOQiVAAAAiVIAA7xQAAiVCVAAIbxAAQCVAAAACVIAAbxQAACViVAAg");
	this.shape_9.setTransform(40.4,40.5,0.39,0.39);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},1).wait(1));

	// dot
	this.btn7_dot = new lib.btn_dot();
	this.btn7_dot.parent = this;
	this.btn7_dot.setTransform(40.4,40.4,1,1,0,0,0,23.4,23.4);

	this.timeline.addTween(cjs.Tween.get(this.btn7_dot).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,80.9,80.9);
p.frameBounds = [rect, rect];


(lib.btn6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A56D20").s().p("AAOArIgUghIgJAAIAAAhIgSAAIAAhVIAZAAQAQAAAIAGQAJAHAAANQAAAHgEAGQgFAFgHADIAZAmgAgPgEIAGAAQAIAAADgDQAEgDAAgGQAAgGgEgDQgDgCgJAAIgFAAg");
	this.shape.setTransform(60.6,40.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A56D20").s().p("AgdAgQgLgLAAgVQAAgVALgLQAKgLATAAQAUAAAKAMQALAKAAAVQAAAVgLALQgKAMgUAAQgTAAgKgMgAgPgUQgGAHAAANQAAAOAGAIQAFAHAKAAQAWAAAAgdQAAgcgWAAQgKAAgFAIg");
	this.shape_1.setTransform(51.3,40.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A56D20").s().p("AgZArIAAhVIASAAIAABGIAhAAIAAAPg");
	this.shape_2.setTransform(43.5,40.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A56D20").s().p("AgIArIAAghIgdg0IAUAAIARAjIASgjIAUAAIgdAzIAAAig");
	this.shape_3.setTransform(36,40.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A56D20").s().p("AAWArIgHgUIgeAAIgGAUIgUAAIAfhVIAVAAIAeBVgAgKAHIAVAAIgJgeIgCgGIgKAkg");
	this.shape_4.setTransform(28.1,40.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A56D20").s().p("AgIArIAAhGIgXAAIAAgPIA/AAIAAAPIgXAAIAABGg");
	this.shape_5.setTransform(20.5,40.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// bg
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFBF69").s().p("At4QOQiVAAAAiVIAA7xQAAiVCVAAIbxAAQCVAAAACVIAAbxQAACViVAAg");
	this.shape_6.setTransform(40.4,40.5,0.39,0.39);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFD8A3").s().p("At4QOQiVAAAAiVIAA7xQAAiVCVAAIbxAAQCVAAAACVIAAbxQAACViVAAg");
	this.shape_7.setTransform(40.4,40.5,0.39,0.39);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_7}]},1).wait(1));

	// dot
	this.btn6_dot = new lib.btn_dot();
	this.btn6_dot.parent = this;
	this.btn6_dot.setTransform(40.4,40.4,1,1,0,0,0,23.4,23.4);

	this.timeline.addTween(cjs.Tween.get(this.btn6_dot).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,80.9,80.9);
p.frameBounds = [rect, rect];


(lib.btn5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A56D20").s().p("AAPArIglhAIAAAAIABAXIAAApIgQAAIAAhVIAWAAIAlA/IAAAAIgBgWIAAgpIARAAIAABVg");
	this.shape.setTransform(56.2,40.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A56D20").s().p("AgdAgQgLgLAAgVQAAgVALgLQAKgLATAAQAUAAAKAMQALAKAAAVQAAAVgLALQgKAMgUAAQgTAAgKgMgAgPgUQgGAHAAANQAAAOAGAIQAFAHAKAAQAWAAAAgdQAAgcgWAAQgKAAgFAIg");
	this.shape_1.setTransform(46.5,40.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A56D20").s().p("AAdArIAAgpIAAgFIABgUIgBAAIgWBCIgQAAIgUhDIgBAAIABAbIAAAoIgQAAIAAhVIAZAAIAUBBIAVhBIAZAAIAABVg");
	this.shape_2.setTransform(36.1,40.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A56D20").s().p("AgIArIAAhVIARAAIAABVg");
	this.shape_3.setTransform(28.5,40.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A56D20").s().p("AgbAnIAAgRIAPAFIAKACQAFAAAEgCQADgDAAgEQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBgBQgBgCgCgBIgKgGQgIgEgFgCQgDgDgCgFQgDgEAAgHQAAgLAIgHQAHgGANAAIANACIAMAEIgFAOIgMgEIgJgBQgDAAgDACQgDADAAAEIABAEIAEADIAKAHQAMAFAFAFQAEAGAAAIQAAAMgJAHQgIAGgNAAQgPAAgKgFg");
	this.shape_4.setTransform(23.2,40.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// bg
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFBF69").s().p("At4QOQiVAAAAiVIAA7xQAAiVCVAAIbxAAQCVAAAACVIAAbxQAACViVAAg");
	this.shape_5.setTransform(40.4,40.5,0.39,0.39);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFD8A3").s().p("At4QOQiVAAAAiVIAA7xQAAiVCVAAIbxAAQCVAAAACVIAAbxQAACViVAAg");
	this.shape_6.setTransform(40.4,40.5,0.39,0.39);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},1).wait(1));

	// dot
	this.btn5_dot = new lib.btn_dot();
	this.btn5_dot.parent = this;
	this.btn5_dot.setTransform(40.4,40.4,1,1,0,0,0,23.4,23.4);

	this.timeline.addTween(cjs.Tween.get(this.btn5_dot).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,80.9,80.9);
p.frameBounds = [rect, rect];


(lib.btn4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A56D20").s().p("AgZArIAAhVIASAAIAABGIAhAAIAAAPg");
	this.shape.setTransform(56.8,40.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A56D20").s().p("AgdAgQgLgLAAgVQAAgVALgLQAKgLATAAQAUAAAKAMQALAKAAAVQAAAVgLALQgKAMgUAAQgTAAgKgMgAgPgUQgGAHAAANQAAAOAGAIQAFAHAKAAQAWAAAAgdQAAgcgWAAQgKAAgFAIg");
	this.shape_1.setTransform(48.3,40.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A56D20").s().p("AgIArIAAghIgdg0IAUAAIARAjIASgjIAUAAIgdAzIAAAig");
	this.shape_2.setTransform(39.7,40.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A56D20").s().p("AAWArIgHgUIgdAAIgHAUIgTAAIAehVIAVAAIAeBVgAgKAHIAVAAIgJgeIgCgGIgKAkg");
	this.shape_3.setTransform(31.9,40.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A56D20").s().p("AgXArIAAhVIAvAAIAAAPIgeAAIAAAWIAdAAIAAAOIgdAAIAAAig");
	this.shape_4.setTransform(24.7,40.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// bg
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFBF69").s().p("At4QOQiVAAAAiVIAA7xQAAiVCVAAIbxAAQCVAAAACVIAAbxQAACViVAAg");
	this.shape_5.setTransform(40.4,40.5,0.39,0.39);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFD8A3").s().p("At4QOQiVAAAAiVIAA7xQAAiVCVAAIbxAAQCVAAAACVIAAbxQAACViVAAg");
	this.shape_6.setTransform(40.4,40.5,0.39,0.39);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},1).wait(1));

	// dot
	this.btn4_dot = new lib.btn_dot();
	this.btn4_dot.parent = this;
	this.btn4_dot.setTransform(40.4,40.4,1,1,0,0,0,23.4,23.4);

	this.timeline.addTween(cjs.Tween.get(this.btn4_dot).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,80.9,80.9);
p.frameBounds = [rect, rect];


(lib.btn3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A56D20").s().p("AgdAgQgLgLAAgVQAAgVALgLQAKgLATAAQAUAAAKAMQALAKAAAVQAAAVgLALQgKAMgUAAQgTAAgKgMgAgPgUQgGAHAAANQAAAOAGAIQAFAHAKAAQAWAAAAgdQAAgcgWAAQgKAAgFAIg");
	this.shape.setTransform(54,40.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A56D20").s().p("AgIArIAAghIgdg0IAUAAIARAjIASgjIAUAAIgdAzIAAAig");
	this.shape_1.setTransform(45.5,40.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A56D20").s().p("AAWArIgHgUIgdAAIgHAUIgUAAIAfhVIAVAAIAeBVgAgKAHIAVAAIgJgeIgCgGIgKAkg");
	this.shape_2.setTransform(37.6,40.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A56D20").s().p("AAdArIAAgpIAAgFIABgUIgBAAIgWBCIgQAAIgUhDIgBAAIABAbIAAAoIgQAAIAAhVIAZAAIAUBBIAVhBIAZAAIAABVg");
	this.shape_3.setTransform(27.8,40.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// bg
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFBF69").s().p("At4QOQiVAAAAiVIAA7xQAAiVCVAAIbxAAQCVAAAACVIAAbxQAACViVAAg");
	this.shape_4.setTransform(40.4,40.5,0.39,0.39);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFD8A3").s().p("At4QOQiVAAAAiVIAA7xQAAiVCVAAIbxAAQCVAAAACVIAAbxQAACViVAAg");
	this.shape_5.setTransform(40.4,40.5,0.39,0.39);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},1).wait(1));

	// dot
	this.btn3_dot = new lib.btn_dot();
	this.btn3_dot.parent = this;
	this.btn3_dot.setTransform(40.4,40.4,1,1,0,0,0,23.4,23.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("At4QOQiVAAAAiVIAA7xQAAiVCVAAIbxAAQCVAAAACVIAAbxQAACViVAAg");
	this.shape_6.setTransform(40.4,40.5,0.39,0.39);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.btn3_dot}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,80.9,80.9);
p.frameBounds = [rect, rect];


(lib.btn2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A56D20").s().p("AAOArIgUghIgJAAIAAAhIgSAAIAAhVIAZAAQAQAAAIAGQAJAHAAANQAAAHgEAGQgFAFgHADIAZAmgAgPgEIAGAAQAIAAADgDQAEgDAAgGQAAgGgEgDQgDgCgJAAIgFAAg");
	this.shape.setTransform(57.6,40.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A56D20").s().p("AgYArIAAhVIAxAAIAAAPIgfAAIAAATIAcAAIAAAOIgcAAIAAAWIAfAAIAAAPg");
	this.shape_1.setTransform(49.9,40.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A56D20").s().p("AgfArIAAhVIAbAAQARAAAIAFQAIAFAAAMQAAAHgDAFQgEAFgGABIAAABQAIABAEAFQAEAFAAAIQAAAMgJAGQgIAHgPAAgAgNAcIAMAAQAHAAADgDQAEgDAAgGQAAgLgPAAIgLAAgAgNgIIALAAQAGAAAEgCQADgDAAgFQAAgFgEgCQgDgCgHAAIgKAAg");
	this.shape_2.setTransform(42.5,40.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A56D20").s().p("AgXArIAAhVIAvAAIAAAPIgdAAIAAATIAbAAIAAAOIgbAAIAAAWIAdAAIAAAPg");
	this.shape_3.setTransform(35.1,40.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A56D20").s().p("AAQArIgMgsIgCgKIgCgKIgBAKIgCAKIgMAsIgUAAIgWhVIASAAIALAuIAEAWIABgKIADgLIAMgvIAQAAIANAvIACAKIACALIACgLIACgLIALguIASAAIgWBVg");
	this.shape_4.setTransform(25.7,40.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// bg
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFBF69").s().p("AlZGVQg6gBgBg6IAAqzQABg6A6gBIKzAAQA6ABABA6IAAKzQgBA6g6ABg");
	this.shape_5.setTransform(40.5,40.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFD8A3").s().p("AlZGVQg6gBgBg6IAAqzQABg6A6gBIKzAAQA6ABABA6IAAKzQgBA6g6ABg");
	this.shape_6.setTransform(40.5,40.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},1).wait(1));

	// dot
	this.btn2_dot = new lib.btn_dot();
	this.btn2_dot.parent = this;
	this.btn2_dot.setTransform(40.4,40.4,1,1,0,0,0,23.4,23.4);

	this.timeline.addTween(cjs.Tween.get(this.btn2_dot).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,80.9,80.9);
p.frameBounds = [rect, rect];


(lib.btn1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A56D20").s().p("AgYArIAAhVIAwAAIAAAPIgeAAIAAATIAcAAIAAAOIgcAAIAAAWIAeAAIAAAPg");
	this.shape.setTransform(67.7,40.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A56D20").s().p("AAOArIgUghIgJAAIAAAhIgSAAIAAhVIAZAAQAQAAAIAGQAJAHAAANQAAAHgEAGQgFAFgHADIAZAmgAgPgEIAGAAQAIAAADgDQAEgDAAgGQAAgGgEgDQgDgCgJAAIgFAAg");
	this.shape_1.setTransform(60.8,40.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A56D20").s().p("AgZAjQgJgJAAgOIAAg2IASAAIAAAzQAAAKAEAFQAEAEAIAAQAJAAAEgEQAEgFAAgKIAAgzIASAAIAAA2QAAAJgEAIQgEAHgIAEQgIADgLAAQgQAAgJgIg");
	this.shape_2.setTransform(51.7,40.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A56D20").s().p("AgbAnIAAgRIAPAFIAKACQAFAAAEgCQADgDAAgEQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBgBQgBgCgCgBIgKgGQgIgEgFgCQgDgDgCgFQgDgEAAgHQAAgLAIgHQAHgGANAAIANACIAMAEIgFAOIgMgEIgJgBQgDAAgDACQgDADAAAEIABAEIAEADIAKAHQAMAFAFAFQAEAGAAAIQAAAMgJAHQgIAGgNAAQgPAAgKgFg");
	this.shape_3.setTransform(43.9,40.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A56D20").s().p("AgbAnIAAgRIAOAFIAMACQAEAAAEgCQADgDAAgEQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQgBgCgEgBIgKgGQgHgEgEgCQgEgDgDgFQgCgEAAgHQAAgLAIgHQAIgGAMAAIANACIAMAEIgGAOIgLgEIgJgBQgEAAgDACQgCADAAAEIABAEIADADIALAHQAMAFAFAFQAEAGAAAIQAAAMgJAHQgIAGgNAAQgOAAgLgFg");
	this.shape_4.setTransform(37.3,40.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A56D20").s().p("AgZAjQgJgJAAgOIAAg2IASAAIAAAzQAAAKAEAFQAEAEAIAAQAJAAAEgEQAEgFAAgKIAAgzIASAAIAAA2QAAAJgEAIQgEAHgIAEQgIADgLAAQgQAAgJgIg");
	this.shape_5.setTransform(29.4,40.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A56D20").s().p("AAWArIgGgUIgfAAIgGAUIgUAAIAfhVIAVAAIAfBVgAgKAHIAVAAIgKgeIgBgGIgKAkg");
	this.shape_6.setTransform(20.8,40.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A56D20").s().p("AgbAnIAAgRIAOAFIAMACQAFAAADgCQADgDAAgEQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQgBgCgEgBIgKgGQgHgEgEgCQgFgDgCgFQgCgEAAgHQAAgLAIgHQAIgGAMAAIANACIANAEIgHAOIgLgEIgIgBQgEAAgEACQgCADAAAEIABAEIADADIALAHQAMAFAEAFQAFAGAAAIQAAAMgIAHQgJAGgOAAQgOAAgKgFg");
	this.shape_7.setTransform(13.4,40.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// btn
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFBF69").s().p("At4QOQiVAAAAiVIAA7xQAAiVCVAAIbxAAQCVAAAACVIAAbxQAACViVAAg");
	this.shape_8.setTransform(40.4,40.5,0.39,0.39);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFD8A3").s().p("At4QOQiVAAAAiVIAA7xQAAiVCVAAIbxAAQCVAAAACVIAAbxQAACViVAAg");
	this.shape_9.setTransform(40.4,40.5,0.39,0.39);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},1).wait(1));

	// dot
	this.btn1_dot = new lib.btn1_dot();
	this.btn1_dot.parent = this;
	this.btn1_dot.setTransform(40.4,40.4,1,1,0,0,0,23.4,23.4);

	this.btn1_dot_1 = new lib.btn_dot();
	this.btn1_dot_1.parent = this;
	this.btn1_dot_1.setTransform(40.4,40.4,1,1,0,0,0,23.4,23.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn1_dot_1},{t:this.btn1_dot}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,80.9,80.9);
p.frameBounds = [rect, rect];


(lib.btn_origem = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().rr(-103.85,-103.85,207.7,207.7,15);
	this.shape.setTransform(40.4,40.5,0.39,0.39);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// box
	this.alvo_box = new lib.alvo_box();
	this.alvo_box.parent = this;
	this.alvo_box.setTransform(40.7,40.7,0.965,0.965,0,0,0,42.1,42.1);
	this.alvo_box.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.alvo_box).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_origem, rect = new cjs.Rectangle(0,0,81.3,81.3), [rect]);


(lib.alvo11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.img11.alpha = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// alvo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s("#FFFFFF").ss(3,1,1).rr(-103.85,-103.85,207.7,207.7,15);
	this.shape.setTransform(86.4,86.4,0.832,0.832);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// img
	this.img11 = new lib.img11();
	this.img11.parent = this;
	this.img11.setTransform(0,0,2.051,2.051);

	this.timeline.addTween(cjs.Tween.get(this.img11).wait(1));

	// box
	this.alvo_box = new lib.alvo_box();
	this.alvo_box.parent = this;
	this.alvo_box.setTransform(86.4,86.4,2.051,2.051,0,0,0,42.1,42.1);
	this.alvo_box.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.alvo_box).wait(1));

}).prototype = getMCSymbolPrototype(lib.alvo11, rect = new cjs.Rectangle(-4.5,-18.8,182.4,206.4), [rect]);


(lib.alvo10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.img10.alpha = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// alvo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s("#FFFFFF").ss(3,1,1).rr(-103.85,-103.85,207.7,207.7,15);
	this.shape.setTransform(86.4,86.4,0.832,0.832);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// img
	this.img10 = new lib.img10();
	this.img10.parent = this;
	this.img10.setTransform(0,0,2.051,2.051);

	this.timeline.addTween(cjs.Tween.get(this.img10).wait(1));

	// box
	this.alvo_box = new lib.alvo_box();
	this.alvo_box.parent = this;
	this.alvo_box.setTransform(86.4,86.4,2.051,2.051,0,0,0,42.1,42.1);
	this.alvo_box.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.alvo_box).wait(1));

}).prototype = getMCSymbolPrototype(lib.alvo10, rect = new cjs.Rectangle(-4.5,-28.9,184.2,257.9), [rect]);


(lib.alvo9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.img9.alpha = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// alvo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s("#FFFFFF").ss(3,1,1).rr(-103.85,-103.85,207.7,207.7,15);
	this.shape.setTransform(86.4,86.4,0.832,0.832);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// img
	this.img9 = new lib.img9();
	this.img9.parent = this;
	this.img9.setTransform(0,0,2.051,2.051);

	this.timeline.addTween(cjs.Tween.get(this.img9).wait(1));

	// box
	this.alvo_box = new lib.alvo_box();
	this.alvo_box.parent = this;
	this.alvo_box.setTransform(86.4,86.4,2.051,2.051,0,0,0,42.1,42.1);
	this.alvo_box.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.alvo_box).wait(1));

}).prototype = getMCSymbolPrototype(lib.alvo9, rect = new cjs.Rectangle(-69.5,-13.8,298.4,198.8), [rect]);


(lib.alvo8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.img8.alpha = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// alvo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s("#FFFFFF").ss(3,1,1).rr(-103.85,-103.85,207.7,207.7,15);
	this.shape.setTransform(86.4,86.4,0.832,0.832);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// img
	this.img8 = new lib.img8();
	this.img8.parent = this;
	this.img8.setTransform(0,0,2.051,2.051);

	this.timeline.addTween(cjs.Tween.get(this.img8).wait(1));

	// box
	this.alvo_box = new lib.alvo_box();
	this.alvo_box.parent = this;
	this.alvo_box.setTransform(86.4,86.4,2.051,2.051,0,0,0,42.1,42.1);
	this.alvo_box.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.alvo_box).wait(1));

}).prototype = getMCSymbolPrototype(lib.alvo8, rect = new cjs.Rectangle(-4.5,-33.9,185.3,238.7), [rect]);


(lib.alvo7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.img7.alpha = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// alvo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s("#FFFFFF").ss(3,1,1).rr(-103.85,-103.85,207.7,207.7,15);
	this.shape.setTransform(86.4,86.4,0.832,0.832);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// img
	this.img7 = new lib.img7();
	this.img7.parent = this;
	this.img7.setTransform(0,0,2.051,2.051);

	this.timeline.addTween(cjs.Tween.get(this.img7).wait(1));

	// box
	this.alvo_box = new lib.alvo_box();
	this.alvo_box.parent = this;
	this.alvo_box.setTransform(86.4,86.4,2.051,2.051,0,0,0,42.1,42.1);
	this.alvo_box.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.alvo_box).wait(1));

}).prototype = getMCSymbolPrototype(lib.alvo7, rect = new cjs.Rectangle(-4.1,-72.9,179.4,267.7), [rect]);


(lib.alvo6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.img6.alpha = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// alvo
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AritfIXFAAQB9AAAAB9IAAXFQAAB9h9AAI3FAAQh9AAAAh9IAA3FQAAh9B9AAg");
	this.shape.setTransform(86.4,86.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.098)").s().p("AriNgQh9AAAAh9IAA3FQAAh9B9AAIXFAAQB9AAAAB9IAAXFQAAB9h9AAg");
	this.shape_1.setTransform(86.4,86.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// img
	this.img6 = new lib.img6();
	this.img6.parent = this;
	this.img6.setTransform(0,0,2.051,2.051);

	this.timeline.addTween(cjs.Tween.get(this.img6).wait(1));

	// box
	this.alvo_box = new lib.alvo_box();
	this.alvo_box.parent = this;
	this.alvo_box.setTransform(86.4,86.4,2.051,2.051,0,0,0,42.1,42.1);
	this.alvo_box.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.alvo_box).wait(1));

}).prototype = getMCSymbolPrototype(lib.alvo6, rect = new cjs.Rectangle(-4.5,-13.8,184.2,271.8), [rect]);


(lib.alvo5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.img5.alpha = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// alvo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s("#FFFFFF").ss(3,1,1).rr(-103.85,-103.85,207.7,207.7,15);
	this.shape.setTransform(86.4,86.4,0.832,0.832);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// img
	this.img5 = new lib.img5();
	this.img5.parent = this;
	this.img5.setTransform(0,0,2.051,2.051);

	this.timeline.addTween(cjs.Tween.get(this.img5).wait(1));

	// box
	this.alvo_box = new lib.alvo_box();
	this.alvo_box.parent = this;
	this.alvo_box.setTransform(86.4,86.4,2.051,2.051,0,0,0,42.1,42.1);
	this.alvo_box.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.alvo_box).wait(1));

}).prototype = getMCSymbolPrototype(lib.alvo5, rect = new cjs.Rectangle(-60.5,-34.8,335.7,219.4), [rect]);


(lib.alvo4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.img4.alpha = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// alvo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s("#FFFFFF").ss(3,1,1).rr(-103.85,-103.85,207.7,207.7,15);
	this.shape.setTransform(86.4,86.4,0.832,0.832);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// img
	this.img4 = new lib.img4();
	this.img4.parent = this;
	this.img4.setTransform(0,0,2.051,2.051);

	this.timeline.addTween(cjs.Tween.get(this.img4).wait(1));

	// box
	this.alvo_box = new lib.alvo_box();
	this.alvo_box.parent = this;
	this.alvo_box.setTransform(86.4,86.4,2.051,2.051,0,0,0,42.1,42.1);
	this.alvo_box.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.alvo_box).wait(1));

}).prototype = getMCSymbolPrototype(lib.alvo4, rect = new cjs.Rectangle(-4.5,-28.9,182.4,243.4), [rect]);


(lib.alvo3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.img3.alpha = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// alvo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s("#FFFFFF").ss(3,1,1).rr(-103.85,-103.85,207.7,207.7,15);
	this.shape.setTransform(86.4,86.4,0.832,0.832);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// img
	this.img3 = new lib.img3();
	this.img3.parent = this;
	this.img3.setTransform(0,0,2.051,2.051);

	this.timeline.addTween(cjs.Tween.get(this.img3).wait(1));

	// box
	this.alvo_box = new lib.alvo_box();
	this.alvo_box.parent = this;
	this.alvo_box.setTransform(86.4,86.4,2.051,2.051,0,0,0,42.1,42.1);
	this.alvo_box.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.alvo_box).wait(1));

}).prototype = getMCSymbolPrototype(lib.alvo3, rect = new cjs.Rectangle(-25.5,-13.8,209.1,294.8), [rect]);


(lib.alvo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.img2.alpha = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// alvo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s("#FFFFFF").ss(3,1,1).rr(-103.85,-103.85,207.7,207.7,15);
	this.shape.setTransform(86.4,86.4,0.832,0.832);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// img
	this.img2 = new lib.img2();
	this.img2.parent = this;
	this.img2.setTransform(0,0,2.051,2.051);

	this.timeline.addTween(cjs.Tween.get(this.img2).wait(1));

	// box
	this.alvo_box = new lib.alvo_box();
	this.alvo_box.parent = this;
	this.alvo_box.setTransform(86.4,86.4,2.051,2.051,0,0,0,42.1,42.1);
	this.alvo_box.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.alvo_box).wait(1));

}).prototype = getMCSymbolPrototype(lib.alvo2, rect = new cjs.Rectangle(-4.5,-45.8,181.4,251.4), [rect]);


(lib.alvo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.img1.alpha = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// alvo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s("#FFFFFF").ss(3,1,1).rr(-103.85,-103.85,207.7,207.7,15);
	this.shape.setTransform(86.4,86.4,0.832,0.832);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// img
	this.img1 = new lib.img1();
	this.img1.parent = this;
	this.img1.setTransform(0,0,2.051,2.051);

	this.timeline.addTween(cjs.Tween.get(this.img1).wait(1));

	// box
	this.alvo_box = new lib.alvo_box();
	this.alvo_box.parent = this;
	this.alvo_box.setTransform(86.4,86.4,2.051,2.051,0,0,0,42.1,42.1);
	this.alvo_box.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.alvo_box).wait(1));

}).prototype = getMCSymbolPrototype(lib.alvo1, rect = new cjs.Rectangle(-4.5,-8.3,184.9,242), [rect]);


(lib.tela3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btn_voltar.addEventListener("click", voltar.bind(this));
		function voltar(){
			createjs.Tween.get(this.parent.tela1).to({x:0}, 1000, createjs.Ease.quartInOut);
			this.parent.tela1.visible = true;
			
			createjs.Tween.get(this.parent.tela3).to({x:-2000, visible: false}, 1000, createjs.Ease.quartInOut);	
			
		}
		
		
		
		
		//CONTAGEM DE ACERTOS PARA ENCERRAR ATIVIDADE AUTOMATICAMENTE
		
		var questoes = 0;
		
		
		
			
			
		
		//VERIFICAR
		var p = this;
		
		p.checando = function(){
			
			setTimeout(function(){
				if (questoes == 11){
					createjs.Tween.get(p.parent.tela_final).wait(500).to({y:0}, 1000, createjs.Ease.bounceOut);}
		});}
		
		
		
		//------------------------------------------------------CLICAR E ARRASTAR------------------------------------------------------
		
		
		createjs.Touch.enable(stage);
		
		
		
		
		//------------------------------------BTN1------------------------------------
		
		this.btn1.alvo6 = this.alvo6;
		this.btn1.btn1_origem = this.btn1_origem;
		
		
		this.btn1.on("mousedown", onMouseDown.bind(this));
		function onMouseDown(evt){	
			
			var item = evt.currentTarget;
			item.offset = {x:0, y:0};
		
			var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
			item.offset.x = pt.x - item.x;
			item.offset.y = pt.y - item.y;
			item.drag = true;
			
		}
		
		
		this.btn1.on("pressmove", onMouseMove.bind(this));
		function onMouseMove(evt){	
			
			var item = evt.currentTarget;
			if(item.drag){
				var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
				item.x = pt.x - item.offset.x;
				item.y = pt.y - item.offset.y;
			}
			
		}
		
		
		this.btn1.on("pressup", onMouseUp.bind(this));
		function onMouseUp(evt){	
			
			var item = evt.currentTarget;
			var pt = item.localToLocal(item.btn1_dot.x, item.btn1_dot.y, item.alvo6.alvo_box);
			if (item.alvo6.alvo_box.hitTest(pt.x, pt.y)){item.x = item.alvo6.x; item.y = item.alvo6.y;
			createjs.Tween.get(this.alvo6.img6).to({alpha:1}, 1000);
			this.btn1.visible = false; questoes = questoes+1; this.checando();}	
			
			else {item.x = item.btn1_origem.x; item.y = item.btn1_origem.y;}	
			
		}
		
		
		
		
		//------------------------------------BTN2------------------------------------
		
		this.btn2.alvo4 = this.alvo4;
		this.btn2.btn2_origem = this.btn2_origem;
		
		
		this.btn2.on("mousedown", onMouseDown2.bind(this));
		function onMouseDown2(evt){	
			
			var item = evt.currentTarget;
			item.offset = {x:0, y:0};
		
			var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
			item.offset.x = pt.x - item.x;
			item.offset.y = pt.y - item.y;
			item.drag = true;
			
		}
		
		
		this.btn2.on("pressmove", onMouseMove2.bind(this));
		function onMouseMove2(evt){	
			
			var item = evt.currentTarget;
			if(item.drag){
				var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
				item.x = pt.x - item.offset.x;
				item.y = pt.y - item.offset.y;
			}
			
		}
		
		
		this.btn2.on("pressup", onMouseUp2.bind(this));
		function onMouseUp2(evt){	
			
			var item = evt.currentTarget;
			var pt = item.localToLocal(item.btn2_dot.x, item.btn2_dot.y, item.alvo4.alvo_box);
			if (item.alvo4.alvo_box.hitTest(pt.x, pt.y)){item.x = item.alvo4.x; item.y = item.alvo4.y;
			createjs.Tween.get(this.alvo4.img4).to({alpha:1}, 1000);
			this.btn2.visible = false; questoes = questoes+1; this.checando();}	
			
			else {item.x = item.btn2_origem.x; item.y = item.btn2_origem.y;}	
			
		}
		
		
		
		//------------------------------------BTN3------------------------------------
		
		this.btn3.alvo3 = this.alvo3;
		this.btn3.btn3_origem = this.btn3_origem;
		
		
		this.btn3.on("mousedown", onMouseDown3.bind(this));
		function onMouseDown3(evt){	
			
			var item = evt.currentTarget;
			item.offset = {x:0, y:0};
		
			var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
			item.offset.x = pt.x - item.x;
			item.offset.y = pt.y - item.y;
			item.drag = true;
			
		}
		
		
		this.btn3.on("pressmove", onMouseMove3.bind(this));
		function onMouseMove3(evt){	
			
			var item = evt.currentTarget;
			if(item.drag){
				var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
				item.x = pt.x - item.offset.x;
				item.y = pt.y - item.offset.y;
			}
			
		}
		
		
		this.btn3.on("pressup", onMouseUp3.bind(this));
		function onMouseUp3(evt){	
			
			var item = evt.currentTarget;
			var pt = item.localToLocal(item.btn3_dot.x, item.btn3_dot.y, item.alvo3.alvo_box);
			if (item.alvo3.alvo_box.hitTest(pt.x, pt.y)){item.x = item.alvo3.x; item.y = item.alvo3.y;
			createjs.Tween.get(this.alvo3.img3).to({alpha:1}, 1000);
			this.btn3.visible = false; questoes = questoes+1; this.checando();}	
			
			else {item.x = item.btn3_origem.x; item.y = item.btn3_origem.y;}	
			
		}
		
		
		
		//------------------------------------BTN4------------------------------------
		
		this.btn4.alvo2 = this.alvo2;
		this.btn4.btn4_origem = this.btn4_origem;
		
		
		this.btn4.on("mousedown", onMouseDown4.bind(this));
		function onMouseDown4(evt){	
			
			var item = evt.currentTarget;
			item.offset = {x:0, y:0};
		
			var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
			item.offset.x = pt.x - item.x;
			item.offset.y = pt.y - item.y;
			item.drag = true;
			
		}
		
		
		this.btn4.on("pressmove", onMouseMove4.bind(this));
		function onMouseMove4(evt){	
			
			var item = evt.currentTarget;
			if(item.drag){
				var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
				item.x = pt.x - item.offset.x;
				item.y = pt.y - item.offset.y;
			}
			
		}
		
		
		this.btn4.on("pressup", onMouseUp4.bind(this));
		function onMouseUp4(evt){	
			
			var item = evt.currentTarget;
			var pt = item.localToLocal(item.btn4_dot.x, item.btn4_dot.y, item.alvo2.alvo_box);
			if (item.alvo2.alvo_box.hitTest(pt.x, pt.y)){item.x = item.alvo2.x; item.y = item.alvo2.y;
			createjs.Tween.get(this.alvo2.img2).to({alpha:1}, 1000);
			this.btn4.visible = false; questoes = questoes+1; this.checando();}	
			
			else {item.x = item.btn4_origem.x; item.y = item.btn4_origem.y;}	
			
		}
		
		
		//------------------------------------BTN5------------------------------------
		
		this.btn5.alvo5 = this.alvo5;
		this.btn5.btn5_origem = this.btn5_origem;
		
		
		this.btn5.on("mousedown", onMouseDown5.bind(this));
		function onMouseDown5(evt){	
			
			var item = evt.currentTarget;
			item.offset = {x:0, y:0};
		
			var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
			item.offset.x = pt.x - item.x;
			item.offset.y = pt.y - item.y;
			item.drag = true;
			
		}
		
		
		this.btn5.on("pressmove", onMouseMove5.bind(this));
		function onMouseMove5(evt){	
			
			var item = evt.currentTarget;
			if(item.drag){
				var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
				item.x = pt.x - item.offset.x;
				item.y = pt.y - item.offset.y;
			}
			
		}
		
		
		this.btn5.on("pressup", onMouseUp5.bind(this));
		function onMouseUp5(evt){	
			
			var item = evt.currentTarget;
			var pt = item.localToLocal(item.btn5_dot.x, item.btn5_dot.y, item.alvo5.alvo_box);
			if (item.alvo5.alvo_box.hitTest(pt.x, pt.y)){item.x = item.alvo5.x; item.y = item.alvo5.y;
			createjs.Tween.get(this.alvo5.img5).to({alpha:1}, 1000);
			this.btn5.visible = false; questoes = questoes+1; this.checando();}	
			
			else {item.x = item.btn5_origem.x; item.y = item.btn5_origem.y;}	
			
		}
		
		
		//------------------------------------BTN6------------------------------------
		
		this.btn6.alvo1 = this.alvo1;
		this.btn6.btn6_origem = this.btn6_origem;
		
		
		this.btn6.on("mousedown", onMouseDown6.bind(this));
		function onMouseDown6(evt){	
			
			var item = evt.currentTarget;
			item.offset = {x:0, y:0};
		
			var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
			item.offset.x = pt.x - item.x;
			item.offset.y = pt.y - item.y;
			item.drag = true;
			
		}
		
		
		this.btn6.on("pressmove", onMouseMove6.bind(this));
		function onMouseMove6(evt){	
			
			var item = evt.currentTarget;
			if(item.drag){
				var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
				item.x = pt.x - item.offset.x;
				item.y = pt.y - item.offset.y;
			}
			
		}
		
		
		this.btn6.on("pressup", onMouseUp6.bind(this));
		function onMouseUp6(evt){	
			
			var item = evt.currentTarget;
			var pt = item.localToLocal(item.btn6_dot.x, item.btn6_dot.y, item.alvo1.alvo_box);
			if (item.alvo1.alvo_box.hitTest(pt.x, pt.y)){item.x = item.alvo1.x; item.y = item.alvo1.y;
			createjs.Tween.get(this.alvo1.img1).to({alpha:1}, 1000);
			this.btn6.visible = false; questoes = questoes+1; this.checando();}	
			
			else {item.x = item.btn6_origem.x; item.y = item.btn6_origem.y;}	
			
		}
		
		
		//------------------------------------BTN7------------------------------------
		
		this.btn7.alvo8 = this.alvo8;
		this.btn7.btn7_origem = this.btn7_origem;
		
		
		this.btn7.on("mousedown", onMouseDown7.bind(this));
		function onMouseDown7(evt){	
			
			var item = evt.currentTarget;
			item.offset = {x:0, y:0};
		
			var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
			item.offset.x = pt.x - item.x;
			item.offset.y = pt.y - item.y;
			item.drag = true;
			
		}
		
		
		this.btn7.on("pressmove", onMouseMove7.bind(this));
		function onMouseMove7(evt){	
			
			var item = evt.currentTarget;
			if(item.drag){
				var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
				item.x = pt.x - item.offset.x;
				item.y = pt.y - item.offset.y;
			}
			
		}
		
		
		this.btn7.on("pressup", onMouseUp7.bind(this));
		function onMouseUp7(evt){	
			
			var item = evt.currentTarget;
			var pt = item.localToLocal(item.btn7_dot.x, item.btn7_dot.y, item.alvo8.alvo_box);
			if (item.alvo8.alvo_box.hitTest(pt.x, pt.y)){item.x = item.alvo8.x; item.y = item.alvo8.y;
			createjs.Tween.get(this.alvo8.img8).to({alpha:1}, 1000);
			this.btn7.visible = false; questoes = questoes+1; this.checando();}	
			
			else {item.x = item.btn7_origem.x; item.y = item.btn7_origem.y;}	
			
		}
		
		
		//------------------------------------BTN8------------------------------------
		
		this.btn8.alvo7 = this.alvo7;
		this.btn8.btn8_origem = this.btn8_origem;
		
		
		this.btn8.on("mousedown", onMouseDown8.bind(this));
		function onMouseDown8(evt){	
			
			var item = evt.currentTarget;
			item.offset = {x:0, y:0};
		
			var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
			item.offset.x = pt.x - item.x;
			item.offset.y = pt.y - item.y;
			item.drag = true;
			
		}
		
		
		this.btn8.on("pressmove", onMouseMove8.bind(this));
		function onMouseMove8(evt){	
			
			var item = evt.currentTarget;
			if(item.drag){
				var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
				item.x = pt.x - item.offset.x;
				item.y = pt.y - item.offset.y;
			}
			
		}
		
		
		this.btn8.on("pressup", onMouseUp8.bind(this));
		function onMouseUp8(evt){	
			
			var item = evt.currentTarget;
			var pt = item.localToLocal(item.btn8_dot.x, item.btn8_dot.y, item.alvo7.alvo_box);
			if (item.alvo7.alvo_box.hitTest(pt.x, pt.y)){item.x = item.alvo7.x; item.y = item.alvo7.y;
			createjs.Tween.get(this.alvo7.img7).to({alpha:1}, 1000);
			this.btn8.visible = false; questoes = questoes+1; this.checando();}	
			
			else {item.x = item.btn8_origem.x; item.y = item.btn8_origem.y;}	
			
		}
		
		
		
		//------------------------------------BTN9------------------------------------
		
		this.btn9.alvo10 = this.alvo10;
		this.btn9.btn9_origem = this.btn9_origem;
		
		
		this.btn9.on("mousedown", onMouseDown9.bind(this));
		function onMouseDown9(evt){	
			
			var item = evt.currentTarget;
			item.offset = {x:0, y:0};
		
			var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
			item.offset.x = pt.x - item.x;
			item.offset.y = pt.y - item.y;
			item.drag = true;
			
		}
		
		
		this.btn9.on("pressmove", onMouseMove9.bind(this));
		function onMouseMove9(evt){	
			
			var item = evt.currentTarget;
			if(item.drag){
				var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
				item.x = pt.x - item.offset.x;
				item.y = pt.y - item.offset.y;
			}
			
		}
		
		
		this.btn9.on("pressup", onMouseUp9.bind(this));
		function onMouseUp9(evt){	
			
			var item = evt.currentTarget;
			var pt = item.localToLocal(item.btn9_dot.x, item.btn9_dot.y, item.alvo10.alvo_box);
			if (item.alvo10.alvo_box.hitTest(pt.x, pt.y)){item.x = item.alvo10.x; item.y = item.alvo10.y;
			createjs.Tween.get(this.alvo10.img10).to({alpha:1}, 1000);
			this.btn9.visible = false; questoes = questoes+1; this.checando();}	
			
			else {item.x = item.btn9_origem.x; item.y = item.btn9_origem.y;}	
			
		}
		
		
		
		
		
		//------------------------------------BTN10------------------------------------
		
		this.btn10.alvo9 = this.alvo9;
		this.btn10.btn10_origem = this.btn10_origem;
		
		
		this.btn10.on("mousedown", onMouseDown10.bind(this));
		function onMouseDown10(evt){	
			
			var item = evt.currentTarget;
			item.offset = {x:0, y:0};
		
			var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
			item.offset.x = pt.x - item.x;
			item.offset.y = pt.y - item.y;
			item.drag = true;
			
		}
		
		
		this.btn10.on("pressmove", onMouseMove10.bind(this));
		function onMouseMove10(evt){	
			
			var item = evt.currentTarget;
			if(item.drag){
				var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
				item.x = pt.x - item.offset.x;
				item.y = pt.y - item.offset.y;
			}
			
		}
		
		
		this.btn10.on("pressup", onMouseUp10.bind(this));
		function onMouseUp10(evt){	
			
			var item = evt.currentTarget;
			var pt = item.localToLocal(item.btn10_dot.x, item.btn10_dot.y, item.alvo9.alvo_box);
			if (item.alvo9.alvo_box.hitTest(pt.x, pt.y)){item.x = item.alvo9.x; item.y = item.alvo9.y;
			createjs.Tween.get(this.alvo9.img9).to({alpha:1}, 1000);
			this.btn10.visible = false; questoes = questoes+1; this.checando();}	
			
			else {item.x = item.btn10_origem.x; item.y = item.btn10_origem.y;}	
			
		}
		
		
		
		
		//------------------------------------BTN11------------------------------------
		
		this.btn11.alvo11 = this.alvo11;
		this.btn11.btn11_origem = this.btn11_origem;
		
		
		this.btn11.on("mousedown", onMouseDown11.bind(this));
		function onMouseDown11(evt){	
			
			var item = evt.currentTarget;
			item.offset = {x:0, y:0};
		
			var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
			item.offset.x = pt.x - item.x;
			item.offset.y = pt.y - item.y;
			item.drag = true;
			
		}
		
		
		this.btn11.on("pressmove", onMouseMove11.bind(this));
		function onMouseMove11(evt){	
			
			var item = evt.currentTarget;
			if(item.drag){
				var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
				item.x = pt.x - item.offset.x;
				item.y = pt.y - item.offset.y;
			}
			
		}
		
		
		this.btn11.on("pressup", onMouseUp11.bind(this));
		function onMouseUp11(evt){	
			
			var item = evt.currentTarget;
			var pt = item.localToLocal(item.btn11_dot.x, item.btn11_dot.y, item.alvo11.alvo_box);
			if (item.alvo11.alvo_box.hitTest(pt.x, pt.y)){item.x = item.alvo11.x; item.y = item.alvo11.y;
			createjs.Tween.get(this.alvo11.img11).to({alpha:1}, 1000);
			this.btn11.visible = false; questoes = questoes+1; this.checando();}	
			
			else {item.x = item.btn11_origem.x; item.y = item.btn11_origem.y;}	
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggAyQgLgRAAghQAAghALgQQALgRAVAAQAWAAALARQALARAAAgQAAAigLAQQgLARgWAAQgVAAgLgRgAgQglQgGAMAAAZQAAAbAGALQAFALALAAQAMAAAFgLQAGgMAAgaQAAgZgGgLQgFgMgMAAQgLAAgFALg");
	this.shape.setTransform(1063.8,508.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AghBBIAAgSQAHACAIAAQAUAAALgLQAKgLABgYIgBAAQgFAHgIAEQgHAEgJAAQgRAAgKgLQgKgKAAgSQAAgVAMgLQALgNATAAQANABAKAGQALAHAGANQAFAMAAATQAAAlgPASQgQATgeAAQgMAAgEgBgAgRgpQgFAHAAAMQAAALAFAHQAFAFALABQAJgBAIgFQAHgHAAgHQAAgIgDgHQgDgHgFgEQgGgEgGAAQgLAAgGAHg");
	this.shape_1.setTransform(1053.5,508.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghBBIAAgSQAHACAIAAQAUAAAKgLQALgLABgYIgBAAQgGAHgHAEQgHAEgJAAQgRAAgKgLQgKgKAAgSQAAgVALgLQAMgNATAAQANABAKAGQALAHAGANQAFAMAAATQAAAlgPASQgQATgeAAQgMAAgEgBgAgQgpQgHAHAAAMQABALAFAHQAFAFALABQAJgBAIgFQAHgHAAgHQAAgIgDgHQgDgHgFgEQgGgEgGAAQgLAAgFAHg");
	this.shape_2.setTransform(1043.2,508.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAHBBIAAhTIABgXIgFAEIgTARIgLgOIAlgeIASAAIAACBg");
	this.shape_3.setTransform(1031.9,508.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgrBCIAAgQIAighIASgVIAHgMQACgGAAgGQAAgJgFgFQgFgFgIAAQgIAAgHADQgHACgJAIIgLgOQALgJAKgEQAKgEALAAQASAAAKAKQALAJAAAQQAAAJgDAIQgDAIgGAHQgHAIgPAOIgWAXIAAAAIA9AAIAAATg");
	this.shape_4.setTransform(879.1,508.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcBAIAyhtIhCAAIAAgSIBZAAIAAAOIgyBxg");
	this.shape_5.setTransform(868.7,508.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AghBBIAAgSQAHACAIAAQAUAAALgLQAKgLABgYIgBAAQgFAHgIAEQgHAEgJAAQgRAAgKgLQgKgKAAgSQAAgVAMgLQALgNATAAQANABALAGQAKAHAGANQAFAMAAATQAAAlgPASQgQATgeAAQgMAAgEgBgAgRgpQgFAHAAAMQgBALAGAHQAFAFALABQAJgBAIgFQAHgHAAgHQAAgIgDgHQgDgHgFgEQgGgEgGAAQgLAAgGAHg");
	this.shape_6.setTransform(858.5,508.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAHBBIAAhTIABgXIgFAEIgTARIgLgOIAlgeIASAAIAACBg");
	this.shape_7.setTransform(847.2,508.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AggAyQgLgRAAghQAAghALgQQALgRAVAAQAWAAALARQALARAAAgQAAAigLAQQgLARgWAAQgVAAgLgRgAgQglQgGAMAAAZQAAAbAGALQAFALALAAQAMAAAFgLQAGgMAAgaQAAgZgGgLQgFgMgMAAQgLAAgFALg");
	this.shape_8.setTransform(695.5,508.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgcBAIAyhtIhCAAIAAgSIBZAAIAAAOIgyBxg");
	this.shape_9.setTransform(685.2,508.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgiBBIAAgSQAIACAIAAQAUAAAKgLQALgLABgYIgBAAQgFAHgIAEQgHAEgJAAQgSAAgJgLQgKgKAAgSQAAgVALgLQAMgNAUAAQAMABAKAGQALAHAFANQAGAMAAATQAAAlgQASQgPATgeAAQgLAAgGgBgAgQgpQgGAHgBAMQAAALAGAHQAFAFALABQAKgBAHgFQAHgHAAgHQAAgIgDgHQgDgHgGgEQgFgEgGAAQgLAAgFAHg");
	this.shape_10.setTransform(675,508.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAHBBIAAhTIABgXIgFAEIgTARIgLgOIAlgeIASAAIAACBg");
	this.shape_11.setTransform(663.7,508.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgrBCIAAgQIAighIASgVIAHgMQACgGAAgGQAAgJgFgFQgFgFgIAAQgIAAgHADQgHACgJAIIgLgOQALgJAKgEQAKgEALAAQASAAAKAKQALAJAAAQQAAAJgDAIQgDAIgGAHQgHAIgPAOIgWAXIAAAAIA9AAIAAATg");
	this.shape_12.setTransform(510.3,508.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgWA7QgKgGgFgNQgGgNAAgRQAAhMA9AAQAKAAAGACIAAASQgGgDgJAAQgUAAgKAMQgLAKgBAaIABAAQAEgIAIgEQAHgDAKAAQARAAAKAKQAKAKAAASQAAAVgLAMQgMALgTAAQgNAAgLgHgAgKACQgFACgEAGQgDAFAAAEQAAANAHAIQAHAJAJAAQALAAAGgHQAFgHAAgNQAAgLgFgGQgFgGgLABQgGAAgGACg");
	this.shape_13.setTransform(500.1,508.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgiBBIAAgSQAIACAIAAQAUAAALgLQAKgLABgYIgBAAQgGAHgHAEQgHAEgJAAQgRAAgKgLQgKgKAAgSQAAgVAMgLQALgNAUAAQAMABALAGQAKAHAFANQAGAMAAATQAAAlgQASQgPATgeAAQgLAAgGgBgAgRgpQgFAHAAAMQgBALAGAHQAFAFALABQAKgBAHgFQAHgHAAgHQAAgIgDgHQgDgHgGgEQgFgEgGAAQgLAAgGAHg");
	this.shape_14.setTransform(489.8,508.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAHBBIAAhTIABgXIgFAEIgTARIgLgOIAlgeIASAAIAACBg");
	this.shape_15.setTransform(478.5,508.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AggAyQgLgRAAghQAAghALgQQALgRAVAAQAWAAALARQALARAAAgQAAAigLAQQgLARgWAAQgVAAgLgRgAgQglQgGAMAAAZQAAAbAGALQAFALALAAQAMAAAFgLQAGgMAAgaQAAgZgGgLQgFgMgMAAQgLAAgFALg");
	this.shape_16.setTransform(324.9,508.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgWA7QgKgGgFgNQgGgNAAgRQAAhMA9AAQAKAAAGACIAAASQgGgDgJAAQgUAAgKAMQgLAKgBAaIABAAQAEgIAIgEQAHgDAKAAQARAAAKAKQAKAKAAASQAAAVgLAMQgMALgTAAQgNAAgLgHgAgKACQgFACgEAGQgDAFAAAEQAAANAHAIQAHAJAJAAQALAAAGgHQAFgHAAgNQAAgLgFgGQgFgGgLABQgGAAgGACg");
	this.shape_17.setTransform(314.7,508.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgiBBIAAgSQAIACAIAAQAUAAALgLQAKgLABgYIgBAAQgGAHgHAEQgHAEgJAAQgRAAgKgLQgKgKAAgSQAAgVAMgLQALgNATAAQANABALAGQAKAHAFANQAGAMAAATQAAAlgQASQgPATgeAAQgLAAgGgBgAgRgpQgFAHAAAMQgBALAGAHQAFAFALABQAKgBAHgFQAHgHAAgHQAAgIgDgHQgDgHgGgEQgFgEgGAAQgLAAgGAHg");
	this.shape_18.setTransform(304.4,508.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAHBBIAAhTIABgXIgFAEIgTARIgLgOIAlgeIASAAIAACBg");
	this.shape_19.setTransform(293.1,508.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AggAyQgLgRAAghQAAghALgQQALgRAVAAQAWAAALARQALARAAAgQAAAigLAQQgLARgWAAQgVAAgLgRgAgQglQgGAMAAAZQAAAbAGALQAFALALAAQAMAAAFgLQAGgMAAgaQAAgZgGgLQgFgMgMAAQgLAAgFALg");
	this.shape_20.setTransform(1063.8,286.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgpA7IAAgTQAHAEAKACQAJACAIAAQANAAAHgGQAIgGAAgMQAAgYgdAAIgKABIgLACIgJgEIAFhAIBCAAIAAATIgwAAIgDAgIAIgBIAKgBQATAAAMAKQALAKAAASQAAAUgNAMQgNAMgXAAQgWAAgMgHg");
	this.shape_21.setTransform(1053.5,286.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AghBBIAAgSQAHADAIAAQAUAAAKgMQALgLABgYIgBAAQgGAHgHAFQgHADgJAAQgRAAgKgLQgKgJAAgTQAAgUALgNQAMgMATABQANgBAKAIQALAGAGANQAFANAAARQAAAmgPASQgQAUgeAAQgMAAgEgCgAgQgpQgHAHAAANQABAKAFAHQAFAGALgBQAJABAIgGQAHgGAAgJQAAgIgDgHQgDgGgFgEQgGgEgGAAQgLAAgFAHg");
	this.shape_22.setTransform(1043.2,286.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAHBBIAAhTIABgXIgFAEIgTARIgLgOIAlgeIASAAIAACBg");
	this.shape_23.setTransform(1031.9,286.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgcBAIAyhuIhCAAIAAgSIBZAAIAAAPIgyBxg");
	this.shape_24.setTransform(879,286.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AALBBIAAgcIg6AAIAAgQIA6hVIAUAAIAABTIARAAIAAASIgRAAIAAAcgAADgaIgfAtIAnAAIAAgfIABgdIgBAAIgIAPg");
	this.shape_25.setTransform(868.8,286.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AghBBIAAgSQAHADAIAAQAUAAALgMQAKgLABgYIgBAAQgFAHgIAFQgHADgJAAQgRAAgKgLQgKgJAAgTQAAgUAMgNQALgMATABQANgBALAIQAKAGAGANQAFANAAARQAAAmgPASQgQAUgeAAQgMAAgEgCgAgRgpQgFAHAAANQgBAKAGAHQAFAGALgBQAJABAIgGQAHgGAAgJQAAgIgDgHQgDgGgFgEQgGgEgGAAQgLAAgGAHg");
	this.shape_26.setTransform(858.5,286.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAHBBIAAhTIABgXIgFAEIgTARIgLgOIAlgeIASAAIAACBg");
	this.shape_27.setTransform(847.2,286.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AggAyQgLgRAAghQAAghALgQQALgRAVAAQAWAAALARQALARAAAgQAAAigLAQQgLARgWAAQgVAAgLgRgAgQglQgGAMAAAZQAAAbAGALQAFALALAAQAMAAAFgLQAGgMAAgaQAAgZgGgLQgFgMgMAAQgLAAgFALg");
	this.shape_28.setTransform(694.3,286.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AALBBIAAgcIg6AAIAAgQIA6hVIAUAAIAABTIARAAIAAASIgRAAIAAAcgAADgaIgfAtIAnAAIAAgfIABgdIgBAAIgIAPg");
	this.shape_29.setTransform(684,286.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AghBBIAAgSQAHADAIAAQAUAAALgMQAKgLABgYIgBAAQgGAHgHAFQgHADgJAAQgRAAgKgLQgKgJAAgTQAAgUALgNQAMgMATABQANgBAKAIQALAGAGANQAFANAAARQAAAmgPASQgQAUgeAAQgMAAgEgCgAgQgpQgHAHAAANQABAKAFAHQAFAGALgBQAJABAIgGQAHgGAAgJQAAgIgDgHQgDgGgFgEQgGgEgGAAQgLAAgFAHg");
	this.shape_30.setTransform(673.8,286.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAHBBIAAhTIABgXIgFAEIgTARIgLgOIAlgeIASAAIAACBg");
	this.shape_31.setTransform(662.5,286.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgpA7IAAgTQAHAEAKACQAJACAIAAQANAAAHgGQAIgGAAgMQAAgYgdAAIgKABIgLACIgJgEIAFhAIBCAAIAAATIgwAAIgDAgIAIgBIAKgBQATAAAMAKQALAKAAASQAAAUgNAMQgNAMgXAAQgWAAgMgHg");
	this.shape_32.setTransform(509.7,286.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgqA8IAAgTQAIAEAJACQAJADAJAAQANgBAIgGQAHgFAAgMQABgKgJgFQgIgEgRAAIgLAAIAAgRIALAAQAfABAAgWQAAgIgGgFQgFgEgKAAQgHAAgHACQgHACgJAGIgKgPQASgNAXABQATAAALAIQALAIgBAPQABAMgIAJQgGAIgOADIAAAAQAQACAIAHQAHAHABANQAAATgOAKQgNALgXAAQgVgBgPgGg");
	this.shape_33.setTransform(499.3,286.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AghBBIAAgSQAHADAIAAQAUAAALgMQAKgLABgYIgBAAQgFAHgIAFQgHADgJAAQgRAAgKgLQgKgJAAgTQAAgUAMgNQALgMATABQANgBALAIQAKAGAGANQAFANAAARQAAAmgPASQgQAUgeAAQgMAAgEgCgAgRgpQgFAHAAANQgBAKAGAHQAFAGALgBQAJABAIgGQAHgGAAgJQAAgIgDgHQgDgGgFgEQgGgEgGAAQgLAAgGAHg");
	this.shape_34.setTransform(489.1,286.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAHBBIAAhTIABgXIgFAEIgTARIgLgOIAlgeIASAAIAACBg");
	this.shape_35.setTransform(477.8,286.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgWA8QgKgHgFgNQgGgMAAgTQAAhKA9AAQAKgBAGACIAAASQgGgCgJAAQgUAAgKALQgLALgBAZIABAAQAEgIAIgDQAHgFAKAAQARAAAKALQAKAKAAATQAAATgLAMQgMANgTAAQgNgBgLgGgAgKABQgFAEgEAEQgDAGAAAEQAAANAHAJQAHAIAJAAQALAAAGgHQAFgGAAgNQAAgLgFgHQgFgFgLgBQgGAAgGACg");
	this.shape_36.setTransform(325,286.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAHBBIAAhTIABgXIgFAEIgTARIgLgOIAlgeIASAAIAACBg");
	this.shape_37.setTransform(313.6,286.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgiBBIAAgSQAIADAIAAQAUAAALgMQAKgLABgYIgBAAQgGAHgHAFQgHADgJAAQgRAAgKgLQgKgJAAgTQAAgUAMgNQALgMATABQANgBALAIQAKAGAFANQAGANAAARQAAAmgQASQgPAUgeAAQgLAAgGgCgAgRgpQgFAHAAANQgBAKAGAHQAFAGALgBQAKABAHgGQAHgGAAgJQAAgIgDgHQgDgGgGgEQgFgEgGAAQgLAAgGAHg");
	this.shape_38.setTransform(304.4,286.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAHBBIAAhTIABgXIgFAEIgTARIgLgOIAlgeIASAAIAACBg");
	this.shape_39.setTransform(293.1,286.3);

	this.btn11 = new lib.btn11();
	this.btn11.parent = this;
	this.btn11.setTransform(1097.8,595.9,1.203,1.203,0,0,0,40.5,40.5);
	new cjs.ButtonHelper(this.btn11, 0, 1, 1);

	this.btn10 = new lib.btn10();
	this.btn10.parent = this;
	this.btn10.setTransform(994.9,595.9,1.203,1.203,0,0,0,40.5,40.5);
	new cjs.ButtonHelper(this.btn10, 0, 1, 1);

	this.btn9 = new lib.btn9();
	this.btn9.parent = this;
	this.btn9.setTransform(892.1,595.9,1.203,1.203,0,0,0,40.5,40.5);
	new cjs.ButtonHelper(this.btn9, 0, 1, 1);

	this.btn8 = new lib.btn8();
	this.btn8.parent = this;
	this.btn8.setTransform(790.2,595.9,1.203,1.203,0,0,0,40.5,40.5);
	new cjs.ButtonHelper(this.btn8, 0, 1, 1);

	this.btn7 = new lib.btn7();
	this.btn7.parent = this;
	this.btn7.setTransform(687.5,595.9,1.203,1.203,0,0,0,40.5,40.5);
	new cjs.ButtonHelper(this.btn7, 0, 1, 1);

	this.btn6 = new lib.btn6();
	this.btn6.parent = this;
	this.btn6.setTransform(585.1,595.9,1.203,1.203,0,0,0,40.5,40.5);
	new cjs.ButtonHelper(this.btn6, 0, 1, 1);

	this.btn5 = new lib.btn5();
	this.btn5.parent = this;
	this.btn5.setTransform(482.6,595.9,1.203,1.203,0,0,0,40.5,40.5);
	new cjs.ButtonHelper(this.btn5, 0, 1, 1);

	this.btn4 = new lib.btn4();
	this.btn4.parent = this;
	this.btn4.setTransform(380.2,595.9,1.203,1.203,0,0,0,40.5,40.5);
	new cjs.ButtonHelper(this.btn4, 0, 1, 1);

	this.btn3 = new lib.btn3();
	this.btn3.parent = this;
	this.btn3.setTransform(277.9,595.9,1.203,1.203,0,0,0,40.5,40.5);
	new cjs.ButtonHelper(this.btn3, 0, 1, 1);

	this.btn2 = new lib.btn2();
	this.btn2.parent = this;
	this.btn2.setTransform(175.5,595.9,1.203,1.203,0,0,0,40.5,40.5);
	new cjs.ButtonHelper(this.btn2, 0, 1, 1);

	this.btn1 = new lib.btn1();
	this.btn1.parent = this;
	this.btn1.setTransform(73.2,595.9,1.203,1.203,0,0,0,40.5,40.5);
	new cjs.ButtonHelper(this.btn1, 0, 1, 1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgGAJQgDgDAAgGQAAgFADgDQACgDAEAAQAFAAADADQADADAAAFQAAAGgDADQgDADgFAAQgDAAgDgDg");
	this.shape_40.setTransform(113.2,470.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AggArIAAgNQAGADAJACQAHACAIAAQAJAAAGgDQAHgEAAgHQAAgGgFgEQgFgEgMgFQgOgEgGgEQgFgDgCgFQgEgFAAgGQAAgMAKgGQAJgHAQAAQAPAAAOAGIgEAMQgOgGgMAAQgJAAgGADQgFADAAAGQAAAEACADQACACAFADIAPAHQARAFAFAGQAGAGABAKQgBANgJAHQgKAHgRAAQgSAAgLgGg");
	this.shape_41.setTransform(106.6,466.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgdAqQgIgHAAgOQAAgbAtgCIAQAAIAAgGQAAgLgFgGQgFgFgKAAQgLAAgPAHIgEgLIAPgGQAJgCAGAAQASAAAHAIQAJAHAAARIAAA/IgLAAIgCgNIgBAAQgHAJgIADQgHADgJAAQgOAAgIgHgAAJABQgQABgIAFQgHAEAAAKQAAAIAFAEQAFAEAIAAQANAAAHgHQAIgHAAgOIAAgIg");
	this.shape_42.setTransform(97.2,466.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgGBBIAAheIANAAIAABegAgFgvQgDgCAAgFQAAgFADgCQACgDADAAQADAAADADQACACAAAFQAAAFgCACQgDACgDAAQgDAAgCgCg");
	this.shape_43.setTransform(90.4,464.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgaAwIAAhdIAMAAIABARIABAAQAFgJAHgFQAHgFAJAAIALABIgCANIgKgBQgMAAgHAJQgIAJAAAPIAAAxg");
	this.shape_44.setTransform(85.2,466.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgFgLAAgPQAAgWALgNQAMgNATAAQAUAAAMANQALANAAAWQAAAXgLANQgMANgUAAQgMAAgKgGgAgUgaQgIAJAAARQAAASAIAKQAHAJANAAQAOAAAHgJQAIgKAAgSQAAgRgIgJQgHgKgOAAQgNAAgHAKg");
	this.shape_45.setTransform(75.6,466.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgbAkQgMgNAAgWQAAgWALgNQAMgOASAAQARAAALAMQAKALAAAUIAAAIIhAAAQAAAQAIAJQAIAIAOAAQAPAAAPgGIAAANQgIADgGACIgRABQgUAAgMgNgAgQgcQgGAHgCANIAxAAQAAgOgGgHQgGgHgMAAQgKAAgHAIg");
	this.shape_46.setTransform(65.4,466.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgOAfIAAg4IgNAAIAAgGIANgHIAGgUIAIAAIAAAWIAbAAIAAALIgbAAIAAA3QAAAIAEAFQAEAFAHAAIAIgBIAFgCIAAAMIgHACIgIAAQgbAAAAgcg");
	this.shape_47.setTransform(57.2,465.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AggArIAAgNQAHADAHACQAIACAIAAQAJAAAHgDQAGgEAAgHQAAgGgFgEQgFgEgMgFQgOgEgFgEQgGgDgCgFQgDgFAAgGQgBgMAKgGQAKgHAPAAQAPAAAPAGIgGAMQgOgGgMAAQgIAAgFADQgGADAAAGQAAAEACADQACACAEADIAQAHQARAFAFAGQAHAGgBAKQABANgKAHQgKAHgRAAQgSAAgLgGg");
	this.shape_48.setTransform(184.3,447.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgdAqQgIgHAAgOQAAgbAtgCIAQAAIAAgGQAAgLgFgGQgEgFgLAAQgLAAgPAHIgFgLIAQgGQAIgCAIAAQAQAAAJAIQAIAHAAARIAAA/IgLAAIgCgNIgBAAQgIAJgHADQgGADgKAAQgOAAgIgHgAAJABQgQABgHAFQgIAEAAAKQAAAIAFAEQAFAEAIAAQAMAAAIgHQAHgHABgOIAAgIg");
	this.shape_49.setTransform(174.9,447.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgHAvIgkhdIAPAAIAUA3QAHATABAGIAAAAIAGgTIAXg9IAPAAIgkBdg");
	this.shape_50.setTransform(165.9,447.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgHBBIAAheIAOAAIAABegAgFgvQgCgCgBgFQABgFACgCQACgDADAAQAEAAACADQACACABAFQgBAFgCACQgCACgEAAQgDAAgCgCg");
	this.shape_51.setTransform(159.3,445.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgNAfIAAg4IgOAAIAAgHIAOgGIAFgUIAIAAIAAAWIAbAAIAAALIgbAAIAAA3QAAAJAEAEQAEAEAHABIAIgBIAFgBIAAALIgGABIgJABQgbAAABgcg");
	this.shape_52.setTransform(153.8,446.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgWAkQgLgMAAgXQAAgXALgNQAMgNAUAAIANACIALADIgEAMIgKgDIgKgBQgcAAgBAjQAAASAIAJQAHAJANAAQALAAAMgFIAAANQgIAFgPAAQgUAAgLgNg");
	this.shape_53.setTransform(146.8,447.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgbAkQgMgNAAgWQAAgWALgNQAMgOASAAQARAAALAMQAKALAAAUIAAAIIhAAAQAAAQAIAJQAIAIAOAAQAPAAAPgGIAAANQgIADgGACIgRABQgUAAgMgNgAgQgcQgGAHgCANIAxAAQAAgOgGgHQgGgHgMAAQgKAAgHAIg");
	this.shape_54.setTransform(137.5,447.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgpBFIAAiIIAMAAIACANIABAAQAFgHAIgEQAHgDAIAAQATAAAKAMQALANAAAXQAAAXgLANQgKAMgTAAQgIAAgHgDQgIgDgFgHIgBAAIABAPIAAAngAgUgwQgGAIAAARIAAADQAAAUAGAIQAHAJAOAAQAMAAAHgKQAHgJAAgSQAAgRgHgKQgHgJgNAAQgNAAgHAIg");
	this.shape_55.setTransform(127.4,449.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AggArIAAgNQAHADAIACQAIACAGAAQALAAAFgDQAHgEAAgHQAAgGgFgEQgFgEgNgFQgNgEgGgEQgFgDgDgFQgCgFAAgGQAAgMAJgGQAJgHAQAAQAPAAAOAGIgEAMQgOgGgMAAQgKAAgFADQgFADAAAGQAAAEACADQACACAEADIAQAHQAQAFAHAGQAFAGAAAKQAAANgKAHQgJAHgRAAQgTAAgKgGg");
	this.shape_56.setTransform(117.6,447.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgbAkQgMgNAAgWQAAgWALgNQAMgOASAAQARAAALAMQAKALAAAUIAAAIIhAAAQAAAQAIAJQAIAIAOAAQAPAAAPgGIAAANQgIADgGACIgRABQgUAAgMgNgAgQgcQgGAHgCANIAxAAQAAgOgGgHQgGgHgMAAQgKAAgHAIg");
	this.shape_57.setTransform(108.4,447.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgaAwIAAhdIAMAAIABARIABAAQAFgJAHgFQAHgFAJAAIALABIgCANIgKgBQgMAAgHAJQgIAJAAAPIAAAxg");
	this.shape_58.setTransform(100.5,447);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AggArIAAgNQAHADAHACQAIACAIAAQAJAAAHgDQAGgEAAgHQAAgGgFgEQgFgEgMgFQgOgEgFgEQgGgDgCgFQgDgFgBgGQAAgMAKgGQAKgHAPAAQAPAAAPAGIgGAMQgOgGgMAAQgJAAgEADQgGADAAAGQAAAEACADQACACAFADIAPAHQAQAFAGAGQAHAGAAAKQAAANgKAHQgKAHgRAAQgSAAgLgGg");
	this.shape_59.setTransform(87.5,447.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgdAqQgIgHAAgOQAAgbAtgCIAQAAIAAgGQAAgLgFgGQgFgFgKAAQgLAAgPAHIgEgLIAPgGQAJgCAGAAQARAAAJAIQAIAHAAARIAAA/IgLAAIgDgNIgBAAQgHAJgGADQgIADgJAAQgOAAgIgHgAAJABQgQABgHAFQgIAEAAAKQAAAIAFAEQAFAEAIAAQAMAAAIgHQAIgHgBgOIAAgIg");
	this.shape_60.setTransform(78.1,447.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgeAoQgJgIAAgSIAAg9IAPAAIAAA8QAAAMAFAFQAGAHALAAQANAAAIgJQAGgIAAgTIAAgwIAPAAIAABdIgMAAIgDgMIAAAAQgFAHgHAEQgIADgJAAQgRAAgJgIg");
	this.shape_61.setTransform(68,447.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AggArIAAgNQAHADAHACQAIACAHAAQAKAAAHgDQAGgEAAgHQAAgGgFgEQgFgEgNgFQgNgEgFgEQgGgDgDgFQgCgFAAgGQAAgMAJgGQAKgHAPAAQAPAAAPAGIgGAMQgOgGgMAAQgIAAgFADQgGADAAAGQAAAEACADQACACAEADIAQAHQARAFAFAGQAHAGgBAKQABANgKAHQgKAHgRAAQgSAAgLgGg");
	this.shape_62.setTransform(58.4,447.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AggArIAAgNQAHADAHACQAIACAIAAQAKAAAGgDQAGgEAAgHQAAgGgFgEQgFgEgMgFQgOgEgFgEQgGgDgCgFQgDgFgBgGQAAgMAKgGQAKgHAPAAQAPAAAPAGIgGAMQgOgGgMAAQgJAAgEADQgGADAAAGQAAAEACADQACACAFADQADACAMAFQAQAFAGAGQAHAGAAAKQAAANgKAHQgKAHgRAAQgSAAgLgGg");
	this.shape_63.setTransform(200.9,427.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgdAqQgIgHAAgOQAAgbAtgCIAQAAIAAgGQAAgLgFgGQgFgFgKAAQgLAAgPAHIgEgLIAPgGQAJgCAGAAQARAAAIAIQAJAHAAARIAAA/IgLAAIgDgNIgBAAQgHAJgGADQgIADgJAAQgOAAgIgHgAAJABQgQABgIAFQgHAEAAAKQAAAIAFAEQAFAEAIAAQAMAAAIgHQAIgHgBgOIAAgIg");
	this.shape_64.setTransform(191.5,427.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgbAkQgMgNAAgWQAAgWALgNQAMgOASAAQARAAALAMQAKALAAAUIAAAIIhAAAQAAAQAIAJQAIAIAOAAQAPAAAPgGIAAANQgIADgGACIgRABQgUAAgMgNgAgQgcQgGAHgCANIAxAAQAAgOgGgHQgGgHgMAAQgKAAgHAIg");
	this.shape_65.setTransform(177.3,427.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgNAfIAAg4IgOAAIAAgGIAOgHIAGgUIAHAAIAAAWIAcAAIAAALIgcAAIAAA3QAAAIAEAFQAEAFAHAAIAHgBIAGgCIAAAMIgGACIgJAAQgbAAABgcg");
	this.shape_66.setTransform(169.2,426.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AAZAwIAAg8QAAgLgFgHQgFgFgMAAQgNAAgHAIQgHAIAAATIAAAwIgPAAIAAhdIANAAIACAMIABAAQAEgGAHgEQAIgEAJAAQARAAAJAIQAIAIAAASIAAA9g");
	this.shape_67.setTransform(160.8,427.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgbAkQgMgNAAgWQAAgWALgNQAMgOASAAQARAAALAMQAKALAAAUIAAAIIhAAAQAAAQAIAJQAIAIAOAAQAPAAAPgGIAAANQgIADgGACIgRABQgUAAgMgNgAgQgcQgGAHgCANIAxAAQAAgOgGgHQgGgHgMAAQgKAAgHAIg");
	this.shape_68.setTransform(150.4,427.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgaAwIAAhdIAMAAIABARIABAAQAFgJAHgFQAHgFAJAAIALABIgCANIgKgBQgMAAgHAJQgIAJAAAPIAAAxg");
	this.shape_69.setTransform(142.5,427.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgbAkQgMgNAAgWQAAgWALgNQAMgOASAAQARAAALAMQAKALAAAUIAAAIIhAAAQAAAQAIAJQAIAIAOAAQAPAAAPgGIAAANQgIADgGACIgRABQgUAAgMgNgAgQgcQgGAHgCANIAxAAQAAgOgGgHQgGgHgMAAQgKAAgHAIg");
	this.shape_70.setTransform(133.3,427.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgPBEIAAhTIgRAAIAAgGIARgGIAAgEQABgjAdAAQAIAAAJACIgEAMQgIgCgGAAQgIAAgEAFQgCAFAAAMIAAAGIAWAAIAAALIgWAAIAABTg");
	this.shape_71.setTransform(125.9,425.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgbAkQgMgNAAgWQAAgWALgNQAMgOASAAQARAAALAMQAKALAAAUIAAAIIhAAAQAAAQAIAJQAIAIAOAAQAPAAAPgGIAAANQgIADgGACIgRABQgUAAgMgNgAgQgcQgGAHgCANIAxAAQAAgOgGgHQgGgHgMAAQgKAAgHAIg");
	this.shape_72.setTransform(117.5,427.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgaAwIAAhdIAMAAIABARIABAAQAFgJAHgFQAHgFAJAAIALABIgCANIgKgBQgMAAgHAJQgIAJAAAPIAAAxg");
	this.shape_73.setTransform(109.5,427.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgFgLAAgPQAAgWALgNQAMgNATAAQAUAAAMANQALANAAAWQAAAXgLANQgMANgUAAQgMAAgKgGgAgUgaQgIAJAAARQAAASAIAKQAHAJANAAQAOAAAHgJQAIgKAAgSQAAgRgIgJQgHgKgOAAQgNAAgHAKg");
	this.shape_74.setTransform(95.4,427.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AAZAwIAAg8QAAgLgFgHQgGgFgLAAQgOAAgGAIQgHAIAAATIAAAwIgOAAIAAhdIAMAAIABAMIABAAQAFgGAIgEQAHgEAKAAQAQAAAJAIQAJAIgBASIAAA9g");
	this.shape_75.setTransform(84.7,427.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgdAqQgIgHAAgOQAAgbAtgCIAQAAIAAgGQAAgLgFgGQgFgFgKAAQgLAAgPAHIgEgLIAPgGQAJgCAGAAQARAAAIAIQAJAHAAARIAAA/IgLAAIgDgNIgBAAQgHAJgGADQgIADgJAAQgOAAgIgHgAAJABQgQABgIAFQgHAEAAAKQAAAIAFAEQAFAEAIAAQAMAAAIgHQAIgHgBgOIAAgIg");
	this.shape_76.setTransform(74,427.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgFgLAAgPQAAgWALgNQAMgNATAAQAUAAAMANQALANAAAWQAAAXgLANQgMANgUAAQgMAAgKgGgAgUgaQgIAJAAARQAAASAIAKQAHAJANAAQAOAAAHgJQAIgKAAgSQAAgRgIgJQgHgKgOAAQgNAAgHAKg");
	this.shape_77.setTransform(59.5,427.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgdAqQgIgHAAgOQAAgbAtgCIAQAAIAAgGQAAgLgFgGQgEgFgLAAQgLAAgPAHIgFgLIAQgGQAIgCAIAAQAQAAAJAIQAIAHAAARIAAA/IgLAAIgDgNIAAAAQgIAJgHADQgGADgKAAQgOAAgIgHgAAJABQgQABgHAFQgIAEAAAKQAAAIAFAEQAFAEAIAAQAMAAAIgHQAHgHABgOIAAgIg");
	this.shape_78.setTransform(191.5,407.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgaAwIAAhdIAMAAIABARIABAAQAFgJAHgFQAHgFAJAAIALABIgCANIgKgBQgMAAgHAJQgIAJAAAPIAAAxg");
	this.shape_79.setTransform(183.9,407.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgdAqQgIgHAAgOQAAgbAtgCIAQAAIAAgGQAAgLgFgGQgEgFgLAAQgLAAgPAHIgFgLIAQgGQAIgCAIAAQAQAAAJAIQAIAHAAARIAAA/IgLAAIgDgNIgBAAQgHAJgHADQgGADgKAAQgOAAgIgHgAAJABQgQABgHAFQgIAEAAAKQAAAIAFAEQAFAEAIAAQAMAAAIgHQAHgHAAgOIAAgIg");
	this.shape_80.setTransform(174.5,407.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgpBFIAAiIIAMAAIACANIABAAQAFgHAIgEQAHgDAIAAQATAAAKAMQALANAAAXQAAAXgLANQgKAMgTAAQgIAAgHgDQgIgDgFgHIgBAAIABAPIAAAngAgUgwQgGAIAAARIAAADQAAAUAGAIQAHAJAOAAQAMAAAHgKQAHgJAAgSQAAgRgHgKQgHgJgNAAQgNAAgHAIg");
	this.shape_81.setTransform(164.8,409.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AggArIAAgNQAGADAJACQAIACAHAAQAJAAAHgDQAGgEAAgHQAAgGgFgEQgFgEgMgFQgOgEgFgEQgGgDgCgFQgEgFAAgGQAAgMAKgGQAKgHAPAAQAPAAAPAGIgFAMQgOgGgNAAQgJAAgFADQgFADAAAGQAAAEACADQACACAFADIAPAHQARAFAFAGQAHAGAAAKQgBANgJAHQgKAHgRAAQgSAAgLgGg");
	this.shape_82.setTransform(150.4,407.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgFgLAAgPQAAgWALgNQAMgNATAAQAUAAAMANQALANAAAWQAAAXgLANQgMANgUAAQgMAAgKgGgAgUgaQgIAJAAARQAAASAIAKQAHAJANAAQAOAAAHgJQAIgKAAgSQAAgRgIgJQgHgKgOAAQgNAAgHAKg");
	this.shape_83.setTransform(140.7,407.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgWAkQgLgMAAgXQAAgXAMgNQAKgNAVAAIAOACIAKADIgFAMIgKgDIgKgBQgbAAAAAjQAAASAHAJQAHAJANAAQAMAAAMgFIAAANQgJAFgPAAQgUAAgLgNg");
	this.shape_84.setTransform(131.5,407.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgGBBIAAheIANAAIAABegAgFgvQgDgCABgFQgBgFADgCQADgDACAAQADAAADADQADACAAAFQAAAFgDACQgDACgDAAQgCAAgDgCg");
	this.shape_85.setTransform(124.9,406.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgaAwIAAhdIAMAAIABARIABAAQAFgJAHgFQAHgFAJAAIALABIgCANIgKgBQgMAAgHAJQgIAJAAAPIAAAxg");
	this.shape_86.setTransform(119.6,407.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgWA/QgKgGgFgMQgFgLAAgPQAAgWALgMQAMgNATAAQAUAAAMANQALANAAAVQAAAYgLANQgMAMgUAAQgMAAgKgFgAgUgHQgIAIAAASQAAATAIAJQAHAKANAAQAOAAAHgKQAIgJAAgTQAAgSgIgIQgHgJgOAAQgNAAgHAJgAgLgnIAAgCIAJgNIAGgNIASAAIAAABQgEAGgHAIIgMANg");
	this.shape_87.setTransform(110.1,405.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgbAkQgMgNAAgWQAAgWALgNQAMgOASAAQARAAALAMQAKALAAAUIAAAIIhAAAQAAAQAIAJQAIAIAOAAQAPAAAPgGIAAANQgIADgGACIgRABQgUAAgMgNgAgQgcQgGAHgCANIAxAAQAAgOgGgHQgGgHgMAAQgKAAgHAIg");
	this.shape_88.setTransform(99.8,407.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgNAfIAAg4IgOAAIAAgGIAOgHIAFgUIAIAAIAAAWIAbAAIAAALIgbAAIAAA3QAAAIAEAFQAEAEAHABIAIgBIAFgBIAAALIgGABIgJABQgbAAABgcg");
	this.shape_89.setTransform(91.7,406.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AggArIAAgNQAHADAHACQAIACAIAAQAJAAAHgDQAGgEAAgHQAAgGgFgEQgFgEgMgFQgOgEgFgEQgGgDgCgFQgDgFAAgGQgBgMAKgGQAKgHAPAAQAPAAAPAGIgGAMQgOgGgMAAQgIAAgFADQgGADAAAGQAAAEACADQACACAEADIAQAHQARAFAFAGQAHAGgBAKQABANgKAHQgKAHgRAAQgSAAgLgGg");
	this.shape_90.setTransform(79.9,407.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgFgLAAgPQAAgWALgNQAMgNATAAQAUAAAMANQALANAAAWQAAAXgLANQgMANgUAAQgMAAgKgGgAgUgaQgIAJAAARQAAASAIAKQAHAJANAAQAOAAAHgJQAIgKAAgSQAAgRgIgJQgHgKgOAAQgNAAgHAKg");
	this.shape_91.setTransform(70.3,407.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgeA3QgLgMABgYQgBgWALgNQAKgNASAAQATAAAKAOIABAAIgBgHIAAgGIAAgnIAPAAIAACFIgMAAIgCgMIgBAAQgKAOgTAAQgSAAgKgNgAgTgHQgHAJAAARQAAATAHAJQAGAJANAAQAOAAAHgIQAGgIAAgSIAAgDQAAgTgGgIQgHgJgOAAQgNAAgGAKg");
	this.shape_92.setTransform(59.3,405.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AggArIAAgNQAHADAHACQAIACAHAAQAKAAAHgDQAGgEAAgHQAAgGgFgEQgFgEgNgFQgNgEgFgEQgGgDgDgFQgCgFAAgGQAAgMAJgGQAKgHAPAAQAPAAAPAGIgGAMQgOgGgMAAQgIAAgFADQgGADAAAGQAAAEACADQACACAEADQAFACALAFQARAFAFAGQAHAGgBAKQABANgLAHQgJAHgRAAQgSAAgLgGg");
	this.shape_93.setTransform(194.3,388.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgbAkQgMgNAAgWQAAgWALgNQAMgOASAAQARAAALAMQAKALAAAUIAAAIIhAAAQAAAQAIAJQAIAIAOAAQAPAAAPgGIAAANQgIADgGACIgRABQgUAAgMgNgAgQgcQgGAHgCANIAxAAQAAgOgGgHQgGgHgMAAQgKAAgHAIg");
	this.shape_94.setTransform(185.2,388.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AA1AwIAAg9QAAgKgFgHQgEgFgLAAQgNAAgHAIQgGAHAAAQIAAA0IgNAAIAAg9QAAgKgFgHQgFgFgKAAQgOAAgGAIQgGAIAAATIAAAwIgPAAIAAhdIAMAAIADAMIABAAQADgGAHgEQAIgEAJAAQAWAAAGAQIABAAQAEgHAIgFQAIgEALAAQAQAAAHAIQAJAIgBASIAAA9g");
	this.shape_95.setTransform(172,388.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgFgLAAgPQAAgWALgNQAMgNATAAQAUAAAMANQALANAAAWQAAAXgLANQgMANgUAAQgMAAgKgGgAgUgaQgIAJAAARQAAASAIAKQAHAJANAAQAOAAAHgJQAIgKAAgSQAAgRgIgJQgHgKgOAAQgNAAgHAKg");
	this.shape_96.setTransform(158.4,388.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AAZAwIAAg8QAAgLgFgHQgFgFgLAAQgOAAgHAIQgHAIAAATIAAAwIgPAAIAAhdIANAAIACAMIABAAQAEgGAHgEQAIgEAJAAQARAAAJAIQAIAIAAASIAAA9g");
	this.shape_97.setTransform(147.7,388.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AggArIAAgNQAGADAJACQAHACAHAAQALAAAFgDQAHgEAAgHQAAgGgFgEQgFgEgNgFQgNgEgGgEQgFgDgDgFQgDgFAAgGQAAgMAKgGQAJgHAQAAQAPAAAOAGIgEAMQgOgGgMAAQgJAAgGADQgFADAAAGQAAAEACADQACACAFADQADACAMAFQAQAFAHAGQAFAGABAKQAAANgLAHQgJAHgRAAQgTAAgKgGg");
	this.shape_98.setTransform(133.5,388.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgWArQgKgGgFgLQgFgLAAgPQAAgWALgNQAMgNATAAQAUAAAMANQALANAAAWQAAAXgLANQgMANgUAAQgMAAgKgGgAgUgaQgIAJAAARQAAASAIAKQAHAJANAAQAOAAAHgJQAIgKAAgSQAAgRgIgJQgHgKgOAAQgNAAgHAKg");
	this.shape_99.setTransform(123.9,388.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgbAkQgMgNAAgWQAAgWALgNQAMgOASAAQARAAALAMQAKALAAAUIAAAIIhAAAQAAAQAIAJQAIAIAOAAQAPAAAPgGIAAANQgIADgGACIgRABQgUAAgMgNgAgQgcQgGAHgCANIAxAAQAAgOgGgHQgGgHgMAAQgKAAgHAIg");
	this.shape_100.setTransform(109.1,388.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgNAfIAAg4IgOAAIAAgGIAOgGIAFgVIAIAAIAAAWIAbAAIAAALIgbAAIAAA3QAAAJAEAEQAEAFAHgBIAIAAIAFgCIAAALIgGADIgJAAQgaAAAAgcg");
	this.shape_101.setTransform(101,387.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AggArIAAgNQAHADAHACQAJACAHAAQAJAAAHgDQAGgEAAgHQAAgGgFgEQgFgEgMgFQgOgEgFgEQgGgDgCgFQgDgFgBgGQAAgMAKgGQAKgHAPAAQAPAAAPAGIgGAMQgOgGgMAAQgJAAgEADQgGADAAAGQAAAEACADQACACAFADQADACAMAFQAQAFAGAGQAHAGAAAKQAAANgKAHQgKAHgRAAQgSAAgLgGg");
	this.shape_102.setTransform(93.8,388.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgdAqQgIgHAAgOQAAgbAtgCIAQAAIAAgGQAAgLgFgGQgFgFgKAAQgLAAgPAHIgFgLIAQgGQAIgCAIAAQARAAAHAIQAJAHAAARIAAA/IgLAAIgCgNIgBAAQgIAJgHADQgGADgKAAQgOAAgIgHgAAJABQgQABgIAFQgHAEAAAKQAAAIAFAEQAEAEAJAAQANAAAHgHQAIgHAAgOIAAgIg");
	this.shape_103.setTransform(84.3,388.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgaAwIAAhdIAMAAIABARIABAAQAFgJAHgFQAHgFAJAAIALABIgCANIgKgBQgMAAgHAJQgIAJAAAOIAAAyg");
	this.shape_104.setTransform(76.7,388.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgaAwIAAhdIAMAAIABARIABAAQAFgJAHgFQAHgFAJAAIALABIgCANIgKgBQgMAAgHAJQgIAJAAAOIAAAyg");
	this.shape_105.setTransform(69.5,388.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AApA/IgQgoIgxAAIgQAoIgPAAIAyh9IALAAIAyB9gAgEgcIgPAmIAnAAIgOgmIgGgSQgBAIgDAKg");
	this.shape_106.setTransform(59.7,386.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgrA8IAAgTQAJAEAJACQAJADAIAAQAPgBAHgGQAIgFAAgMQgBgKgHgFQgJgEgQAAIgLAAIAAgRIALAAQAdABAAgWQAAgIgEgFQgGgEgJAAQgIAAgHACQgHACgJAGIgKgPQASgNAXABQATAAAKAIQAMAIAAAPQgBAMgGAJQgHAIgNADIAAAAQAPACAHAHQAJAHgBANQABATgNAKQgOALgXAAQgWgBgPgGg");
	this.shape_107.setTransform(140.1,286.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AggAyQgLgRAAghQAAghALgQQALgRAVAAQAWAAALARQALARAAAgQAAAigLAQQgLARgWAAQgVAAgLgRgAgQglQgGAMAAAZQAAAbAGALQAFALALAAQAMAAAFgLQAGgMAAgaQAAgZgGgLQgFgMgMAAQgLAAgFALg");
	this.shape_108.setTransform(129.9,286.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AghBBIAAgSQAHADAIAAQAUAAALgMQAKgLABgYIgBAAQgFAHgIAFQgHADgJAAQgRAAgKgLQgKgJAAgTQAAgUAMgNQALgMATABQANgBALAIQAKAGAGANQAFANAAARQAAAmgPASQgQAUgeAAQgMAAgEgCgAgRgpQgFAHAAANQgBAKAGAHQAFAGALgBQAJABAIgGQAHgGAAgJQAAgIgDgHQgDgGgFgEQgGgEgGAAQgLAAgGAHg");
	this.shape_109.setTransform(119.6,286.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AAHBBIAAhTIABgXIgFAEIgTARIgLgOIAlgeIASAAIAACBg");
	this.shape_110.setTransform(108.3,286.3);

	this.btn_voltar = new lib.btn_voltar();
	this.btn_voltar.parent = this;
	this.btn_voltar.setTransform(1095.4,39.9,0.595,0.595,0,0,0,125.7,38.8);
	new cjs.ButtonHelper(this.btn_voltar, 0, 1, 1);

	this.alvo5 = new lib.alvo5();
	this.alvo5.parent = this;
	this.alvo5.setTransform(863.7,189.6,0.926,0.926,0,0,0,86.4,86.4);

	this.alvo4 = new lib.alvo4();
	this.alvo4.parent = this;
	this.alvo4.setTransform(679,189.6,0.926,0.926,0,0,0,86.4,86.4);

	this.alvo3 = new lib.alvo3();
	this.alvo3.parent = this;
	this.alvo3.setTransform(494.3,189.6,0.926,0.926,0,0,0,86.4,86.4);

	this.alvo2 = new lib.alvo2();
	this.alvo2.parent = this;
	this.alvo2.setTransform(309.6,189.6,0.926,0.926,0,0,0,86.4,86.4);

	this.alvo11 = new lib.alvo11();
	this.alvo11.parent = this;
	this.alvo11.setTransform(1048.4,412.7,0.926,0.926,0,0,0,86.4,86.4);

	this.alvo10 = new lib.alvo10();
	this.alvo10.parent = this;
	this.alvo10.setTransform(863.7,412.7,0.926,0.926,0,0,0,86.4,86.4);

	this.alvo9 = new lib.alvo9();
	this.alvo9.parent = this;
	this.alvo9.setTransform(680.2,412.7,0.926,0.926,0,0,0,86.4,86.4);

	this.alvo8 = new lib.alvo8();
	this.alvo8.parent = this;
	this.alvo8.setTransform(495,412.7,0.926,0.926,0,0,0,86.4,86.4);

	this.alvo7 = new lib.alvo7();
	this.alvo7.parent = this;
	this.alvo7.setTransform(309.6,412.7,0.926,0.926,0,0,0,86.4,86.4);

	this.alvo1 = new lib.alvo1();
	this.alvo1.parent = this;
	this.alvo1.setTransform(124.9,189.6,0.926,0.926,0,0,0,86.4,86.4);

	this.alvo6 = new lib.alvo6();
	this.alvo6.parent = this;
	this.alvo6.setTransform(1048.4,189.6,0.926,0.926,0,0,0,86.4,86.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.alvo6},{t:this.alvo1},{t:this.alvo7},{t:this.alvo8},{t:this.alvo9},{t:this.alvo10},{t:this.alvo11},{t:this.alvo2},{t:this.alvo3},{t:this.alvo4},{t:this.alvo5},{t:this.btn_voltar},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.btn1},{t:this.btn2},{t:this.btn3},{t:this.btn4},{t:this.btn5},{t:this.btn6},{t:this.btn7},{t:this.btn8},{t:this.btn9},{t:this.btn10},{t:this.btn11},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// btn_origem
	this.btn11_origem = new lib.btn_origem();
	this.btn11_origem.parent = this;
	this.btn11_origem.setTransform(1097.6,595.7,1,1,0,0,0,40.5,40.5);

	this.btn10_origem = new lib.btn_origem();
	this.btn10_origem.parent = this;
	this.btn10_origem.setTransform(994.7,595.7,1,1,0,0,0,40.5,40.5);

	this.btn9_origem = new lib.btn_origem();
	this.btn9_origem.parent = this;
	this.btn9_origem.setTransform(891.9,595.7,1,1,0,0,0,40.5,40.5);

	this.btn8_origem = new lib.btn_origem();
	this.btn8_origem.parent = this;
	this.btn8_origem.setTransform(790,595.7,1,1,0,0,0,40.5,40.5);

	this.btn7_origem = new lib.btn_origem();
	this.btn7_origem.parent = this;
	this.btn7_origem.setTransform(687.3,595.7,1,1,0,0,0,40.5,40.5);

	this.btn6_origem = new lib.btn_origem();
	this.btn6_origem.parent = this;
	this.btn6_origem.setTransform(584.9,595.7,1,1,0,0,0,40.5,40.5);

	this.btn5_origem = new lib.btn_origem();
	this.btn5_origem.parent = this;
	this.btn5_origem.setTransform(482.4,595.7,1,1,0,0,0,40.5,40.5);

	this.btn4_origem = new lib.btn_origem();
	this.btn4_origem.parent = this;
	this.btn4_origem.setTransform(380,595.7,1,1,0,0,0,40.5,40.5);

	this.btn3_origem = new lib.btn_origem();
	this.btn3_origem.parent = this;
	this.btn3_origem.setTransform(277.7,595.7,1,1,0,0,0,40.5,40.5);

	this.btn2_origem = new lib.btn_origem();
	this.btn2_origem.parent = this;
	this.btn2_origem.setTransform(175.3,595.7,1,1,0,0,0,40.5,40.5);

	this.btn1_origem = new lib.btn_origem();
	this.btn1_origem.parent = this;
	this.btn1_origem.setTransform(73,595.7,1,1,0,0,0,40.5,40.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn1_origem},{t:this.btn2_origem},{t:this.btn3_origem},{t:this.btn4_origem},{t:this.btn5_origem},{t:this.btn6_origem},{t:this.btn7_origem},{t:this.btn8_origem},{t:this.btn9_origem},{t:this.btn10_origem},{t:this.btn11_origem}]}).wait(1));

	// txt
	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AghAsIAAgOQAHAEAIACQAIACAHAAQALAAAGgEQAGgDAAgIQAAgGgFgEQgFgEgNgFQgNgEgGgEQgGgEgDgEQgCgFAAgHQAAgMAJgHQAKgGAQAAQAPAAAPAGIgFAMQgPgGgLAAQgKAAgFADQgFADAAAGQAAAEACADQACADAEACIAQAHQARAGAGAGQAGAGAAAKQAAANgKAIQgKAHgRAAQgTAAgLgGg");
	this.shape_111.setTransform(1095.1,430);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AAaAxIAAg9QAAgMgGgGQgFgGgMAAQgNAAgIAIQgHAIAAATIAAAyIgOAAIAAhgIAMAAIACAOIAAAAQAFgIAIgDQAJgEAJAAQARAAAJAIQAIAIABATIAAA+g");
	this.shape_112.setTransform(1085.1,429.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgcAlQgMgNAAgXQAAgXALgOQAMgNATAAQASAAALAMQAKAMAAATIAAAIIhCAAQABASAIAIQAIAJAOAAQAQAAAPgGIAAANIgOAFQgIABgKAAQgUAAgNgNgAgQgeQgHAIgCAOIAyAAQAAgOgGgIQgGgHgLAAQgLAAgHAHg");
	this.shape_113.setTransform(1074.5,430);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgiBAQgLgHAAgNQAAgJAGgHQAGgGAKgCQgEgCgCgDQgDgEAAgEQAAgGADgDQADgEAGgDQgIgDgEgIQgFgHAAgKQAAgQAJgJQAKgIARAAQAHAAAGABIAiAAIAAAKIgSACIAEAIQACAFAAAHQAAANgKAJQgJAIgQAAIgJAAQgJAFAAAHQAAADADACQAEACAIAAIAQAAQAPAAAJAGQAIAIAAAMQAAAQgNAIQgMAJgYAAQgTAAgKgHgAgZAeQgGAFAAAJQAAAIAHADQAHAFAMAAQARAAAJgGQAJgFAAgKQAAgIgFgDQgEgCgOAAIgRAAQgKAAgFAEgAgRg2QgGAGAAALQAAAKAGAFQAGAFAKAAQAVAAAAgUQAAgXgVAAQgLAAgFAGg");
	this.shape_114.setTransform(1064.4,432.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgeArQgIgIAAgOQAAgcAugBIAQgBIAAgGQAAgLgEgGQgFgFgLAAQgLAAgQAHIgEgLQAHgEAJgCQAIgCAIAAQARAAAIAHQAJAIAAARIAABBIgLAAIgDgOIgBAAQgHAKgHADQgHADgKAAQgPAAgIgHgAAJABQgQABgIAFQgIAEAAALQAAAIAFAEQAFAEAJAAQAMAAAIgIQAIgHAAgOIAAgIg");
	this.shape_115.setTransform(1054.1,430);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgfA5QgLgNAAgYQAAgXALgOQALgNATAAQASAAALAOIABAAIgBgHIAAgGIAAgoIAPAAIAACJIgMAAIgCgNIgBAAQgKAPgTAAQgTAAgLgNgAgTgIQgHAJAAATQAAASAGAKQAHAJANAAQAOAAAHgIQAHgIAAgSIAAgDQAAgUgHgJQgHgJgOAAQgNAAgGAKg");
	this.shape_116.setTransform(1043.4,428);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgbAxIAAhgIAMAAIACASIABAAQAFgJAHgFQAHgFAJAAIAMABIgCANIgLgBQgMAAgHAJQgJAKABAOIAAAzg");
	this.shape_117.setTransform(1035.2,429.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgWAsQgKgGgGgMQgGgLAAgPQAAgXANgNQALgNAUAAQAUAAANANQALAOAAAWQAAAXgLAOQgMANgVAAQgMAAgKgGgAgVgbQgHAJAAASQAAASAIAKQAGAKAOAAQAPAAAHgKQAIgKAAgSQAAgSgIgJQgHgKgPAAQgNAAgIAKg");
	this.shape_118.setTransform(1025.4,430);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgOBCQgIgDgFgIIgBAAIgDANIgLAAIAAiJIAPAAIAAAiIgBAUIABAAQAKgPATAAQATAAALANQALANAAAXQAAAYgLANQgLAOgTAAQgIAAgIgEgAgUgJQgHAJAAATQAAAVAHAIQAHAJAOAAQANAAAHgKQAGgJAAgTQAAgTgGgIQgHgJgOAAQgOAAgGAIg");
	this.shape_119.setTransform(1014.6,428);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AAqBBIgQgpIgzAAIgQApIgPAAIAziBIALAAIAzCBgAgFgdIgPAoIApAAIgPgoIgGgTQgBAJgEAKg");
	this.shape_120.setTransform(1003,428.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AghAsIAAgOQAHAEAIACQAIACAHAAQALAAAGgEQAGgDAAgIQAAgGgFgEQgFgEgNgFQgNgEgGgEQgGgEgDgEQgCgFAAgHQAAgMAJgHQAKgGAQAAQAPAAAPAGIgFAMQgPgGgLAAQgKAAgFADQgFADAAAGQAAAEACADQACADAEACIAQAHQARAGAGAGQAGAGAAAKQAAANgKAIQgKAHgRAAQgTAAgLgGg");
	this.shape_121.setTransform(1070.2,411.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgeArQgIgIAAgOQAAgcAugBIAQgBIAAgGQAAgLgEgGQgFgFgLAAQgLAAgQAHIgEgLQAHgEAJgCQAIgCAIAAQARAAAIAHQAJAIAAARIAABBIgLAAIgDgOIgBAAQgHAKgHADQgHADgKAAQgPAAgIgHgAAJABQgQABgIAFQgIAEAAALQAAAIAFAEQAFAEAJAAQAMAAAIgIQAIgHAAgOIAAgIg");
	this.shape_122.setTransform(1060.4,411.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgHAxIglhhIAPAAIAVA5IAIAaIAAAAIAHgTIAXhAIAPAAIgkBhg");
	this.shape_123.setTransform(1051.1,411.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgWAsQgLgGgFgMQgGgLAAgPQAAgXANgNQAMgNATAAQAVAAAMANQALAOAAAWQAAAXgLAOQgMANgVAAQgMAAgKgGgAgVgbQgHAJAAASQAAASAHAKQAIAKANAAQAPAAAHgKQAIgKAAgSQAAgSgIgJQgHgKgPAAQgNAAgIAKg");
	this.shape_124.setTransform(1041.2,411.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AAhBBIhFhsIgBAAIABAjIAABJIgNAAIAAiBIAQAAIBGBsIABAAIgBgQIgBgSIAAhKIAOAAIAACBg");
	this.shape_125.setTransform(1029,409.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgeArQgIgIAAgOQAAgcAugBIAQgBIAAgGQAAgLgEgGQgFgFgLAAQgLAAgQAHIgEgLQAHgEAJgCQAIgCAIAAQARAAAIAHQAJAIAAARIAABBIgLAAIgDgOIgBAAQgHAKgHADQgHADgKAAQgPAAgIgHgAAJABQgQABgIAFQgIAEAAALQAAAIAFAEQAFAEAJAAQAMAAAIgIQAIgHAAgOIAAgIg");
	this.shape_126.setTransform(913.2,430);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgHBCIAAhgIAOAAIAABggAgFgwQgCgCgBgGQABgFACgCQACgDADAAQAEAAACADQACACABAFQgBAGgCACQgCACgEAAQgDAAgCgCg");
	this.shape_127.setTransform(906.3,428.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgXAlQgLgNAAgYQAAgXAMgNQALgNAVAAIAOABIALAEIgFAMIgKgDIgKgBQgcAAAAAkQAAASAGAKQAIAJANAAQAMAAANgFIAAANQgKAFgOAAQgVAAgMgNg");
	this.shape_128.setTransform(899.9,430);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AAaAxIAAg9QAAgMgGgGQgFgGgLAAQgPAAgHAIQgHAIAAATIAAAyIgOAAIAAhgIAMAAIACAOIAAAAQAFgIAIgDQAJgEAJAAQARAAAJAIQAIAIABATIAAA+g");
	this.shape_129.setTransform(889.8,429.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgcA5QgMgNAAgXQAAgXALgOQAMgNATAAQASAAALAMQAKAMAAASIAAAJIhBAAQAAASAIAIQAIAJAOAAQAQAAAPgGIAAANIgOAFQgIABgKAAQgUAAgNgNgAgQgKQgHAIgBANIAxAAQAAgNgGgIQgGgHgLAAQgLAAgHAHgAAVgoQgIgFgLgMQgMAMgHAFIgKAAIAAgCIAQgSIAGgJIAOAAIAGAJIARASIAAACg");
	this.shape_130.setTransform(879.2,428);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgiBAQgLgHAAgNQAAgJAGgHQAGgGAKgCQgEgCgCgDQgDgEAAgEQAAgGADgDQADgEAGgDQgIgDgEgIQgFgHAAgKQAAgQAJgJQAKgIARAAQAHAAAGABIAiAAIAAAKIgSACIAEAIQACAFAAAHQAAANgKAJQgJAIgQAAIgJAAQgJAFAAAHQAAADADACQAEACAIAAIAQAAQAPAAAJAGQAIAIAAAMQAAAQgNAIQgMAJgYAAQgTAAgKgHgAgZAeQgGAFAAAJQAAAIAHADQAHAFAMAAQARAAAJgGQAJgFAAgKQAAgIgFgDQgEgCgOAAIgRAAQgKAAgFAEgAgRg2QgGAGAAALQAAAKAGAFQAGAFAKAAQAVAAAAgUQAAgXgVAAQgLAAgFAGg");
	this.shape_131.setTransform(869.1,432.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AAaAxIAAg9QAAgMgGgGQgFgGgMAAQgOAAgGAIQgIAIAAATIAAAyIgPAAIAAhgIANAAIACAOIAAAAQAFgIAIgDQAJgEAJAAQARAAAIAIQAJAIAAATIAAA+g");
	this.shape_132.setTransform(858.6,429.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgHBCIAAhgIAOAAIAABggAgFgwQgDgCAAgGQAAgFADgCQACgDADAAQADAAADADQADACgBAFQABAGgDACQgDACgDAAQgDAAgCgCg");
	this.shape_133.setTransform(850.8,428.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgOAfIAAg5IgOAAIAAgHIAOgGIAHgVIAHAAIAAAXIAcAAIAAALIgcAAIAAA4QAAAJAEAFQAEAEAIAAIAHAAIAGgBIAAALQgDABgEABIgJABQgbAAAAgeg");
	this.shape_134.setTransform(845.2,428.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AAaAxIAAg9QAAgMgFgGQgGgGgLAAQgOAAgIAIQgHAIAAATIAAAyIgOAAIAAhgIALAAIADAOIABAAQAEgIAIgDQAIgEAJAAQASAAAJAIQAJAIgBATIAAA+g");
	this.shape_135.setTransform(836.6,429.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgXAsQgKgGgFgMQgGgLABgPQgBgXAMgNQAMgNAVAAQATAAANANQAMAOAAAWQAAAXgMAOQgMANgVAAQgMAAgLgGgAgVgbQgHAJAAASQAAASAHAKQAIAKANAAQAOAAAIgKQAHgKABgSQgBgSgHgJQgIgKgOAAQgOAAgHAKg");
	this.shape_136.setTransform(825.5,430);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AggAxQgQgRAAggQAAgUAIgPQAHgOAOgJQAOgHASAAQAUgBAQAIIgHANQgOgHgPAAQgUAAgNAOQgMAOAAAYQAAAZAMAOQAMAOAVAAQAOAAARgFIAAANQgOAGgTgBQgcAAgPgRg");
	this.shape_137.setTransform(814.6,428.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgeArQgIgIAAgOQAAgcAugBIAQgBIAAgGQAAgLgEgGQgFgFgLAAQgLAAgQAHIgEgLQAHgEAJgCQAIgCAIAAQARAAAIAHQAJAIAAARIAABBIgLAAIgDgOIgBAAQgHAKgHADQgHADgKAAQgPAAgIgHgAAJABQgQABgIAFQgIAEAAALQAAAIAFAEQAFAEAJAAQAMAAAIgIQAIgHAAgOIAAgIg");
	this.shape_138.setTransform(897.7,411.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgfA5QgLgNAAgYQAAgXALgOQALgNATAAQASAAALAOIABAAIgBgHIAAgGIAAgoIAPAAIAACJIgMAAIgCgNIgBAAQgKAPgTAAQgTAAgLgNgAgTgIQgHAJAAATQAAASAGAKQAHAJANAAQAOAAAHgIQAHgIAAgSIAAgDQAAgUgHgJQgHgJgOAAQgNAAgGAKg");
	this.shape_139.setTransform(887.1,409.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgeArQgIgIAAgOQAAgcAugBIAQgBIAAgGQAAgLgEgGQgFgFgLAAQgLAAgQAHIgEgLQAHgEAJgCQAIgCAIAAQARAAAIAHQAJAIAAARIAABBIgLAAIgDgOIgBAAQgHAKgHADQgHADgKAAQgPAAgIgHgAAJABQgQABgIAFQgIAEAAALQAAAIAFAEQAFAEAJAAQAMAAAIgIQAIgHAAgOIAAgIg");
	this.shape_140.setTransform(871.7,411.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgHBCIAAhgIAOAAIAABggAgFgwQgDgDABgFQgBgFADgCQADgCACgBQAEABACACQACACABAFQgBAFgCADQgCACgEAAQgCAAgDgCg");
	this.shape_141.setTransform(864.8,409.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgbAxIAAhgIAMAAIACASIAAAAQAGgJAHgFQAHgFAKAAIALABIgCANIgLgBQgMAAgHAJQgJAKAAAOIAAAzg");
	this.shape_142.setTransform(859.5,411.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgXAsQgJgGgGgMQgFgLgBgPQABgXALgNQANgNATAAQAVAAAMANQAMAOgBAWQABAXgMAOQgMANgVAAQgMAAgLgGgAgVgbQgHAJAAASQAAASAIAKQAGAKAOAAQAOAAAIgKQAIgKgBgSQABgSgIgJQgIgKgOAAQgOAAgHAKg");
	this.shape_143.setTransform(849.7,411.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgbAlQgNgNAAgXQAAgXAMgOQALgNASAAQATAAAKAMQALAMAAATIAAAIIhCAAQABASAIAIQAIAJAOAAQAPAAAQgGIAAANIgPAFQgHABgJAAQgVAAgMgNgAgQgeQgHAIgCAOIAzAAQgBgOgGgIQgGgHgMAAQgKAAgHAHg");
	this.shape_144.setTransform(839.2,411.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgHBBIAAhzIgoAAIAAgOIBgAAIAAAOIgqAAIAABzg");
	this.shape_145.setTransform(829.2,409.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AghAsIAAgOQAHAEAIACQAIACAHAAQALAAAGgEQAGgDAAgIQAAgGgFgEQgFgEgNgFQgNgEgGgEQgGgEgDgEQgCgFAAgHQAAgMAJgHQAKgGAQAAQAPAAAPAGIgFAMQgPgGgLAAQgKAAgFADQgFADAAAGQAAAEACADQACADAEACIAQAHQARAGAGAGQAGAGAAAKQAAANgKAIQgKAHgRAAQgTAAgLgGg");
	this.shape_146.setTransform(713.4,430);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgeArQgIgIAAgOQAAgcAugBIAQgBIAAgGQAAgLgEgGQgFgFgLAAQgLAAgQAHIgEgLQAHgEAJgCQAIgCAIAAQARAAAIAHQAJAIAAARIAABBIgLAAIgDgOIgBAAQgHAKgHADQgHADgKAAQgPAAgIgHgAAJABQgQABgIAFQgIAEAAALQAAAIAFAEQAFAEAJAAQAMAAAIgIQAIgHAAgOIAAgIg");
	this.shape_147.setTransform(703.6,430);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AA2AxIAAg+QAAgLgEgGQgGgGgKAAQgNAAgHAIQgGAIAAAQIAAA1IgOAAIAAg+QAAgLgFgGQgFgGgLAAQgNAAgHAIQgGAJgBASIAAAyIgOAAIAAhgIAMAAIACAOIABAAQAEgHAIgEQAIgEAIAAQAXAAAHAQIAAAAQAFgIAHgEQAJgEAKAAQARAAAIAIQAIAIAAATIAAA+g");
	this.shape_148.setTransform(690.5,429.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgbAlQgNgNAAgXQAAgXALgOQAMgNATAAQASAAAKAMQALAMAAATIAAAIIhBAAQAAASAIAIQAIAJAOAAQAPAAAQgGIAAANIgPAFQgGABgLAAQgUAAgMgNgAgQgeQgHAIgBAOIAyAAQAAgOgHgIQgGgHgLAAQgLAAgHAHg");
	this.shape_149.setTransform(677,430);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgOAfIAAg5IgOAAIAAgHIAOgGIAHgVIAHAAIAAAXIAcAAIAAALIgcAAIAAA4QAAAJAEAFQAEAEAIAAIAHAAIAGgBIAAALQgDABgEABIgJABQgbAAAAgeg");
	this.shape_150.setTransform(668.7,428.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AghAsIAAgOQAHAEAIACQAIACAHAAQALAAAGgEQAGgDAAgIQAAgGgFgEQgFgEgNgFQgNgEgGgEQgGgEgDgEQgCgFAAgHQAAgMAJgHQAKgGAQAAQAPAAAPAGIgFAMQgPgGgLAAQgKAAgFADQgFADAAAGQAAAEACADQACADAEACIAQAHQARAGAGAGQAGAGAAAKQAAANgKAIQgKAHgRAAQgTAAgLgGg");
	this.shape_151.setTransform(661.3,430);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgHBCIAAhgIAOAAIAABggAgFgwQgCgCgBgGQABgFACgCQACgDADAAQAEAAACADQACACABAFQgBAGgCACQgCACgEAAQgDAAgCgCg");
	this.shape_152.setTransform(654.7,428.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgnA9IAAgPIARAFQAJACAKAAQANAAAIgGQAHgFAAgLQABgGgDgFQgDgEgGgEQgGgDgMgFQgTgFgHgJQgIgJAAgOQAAgPALgJQAMgJARABQATAAARAGIgFAOQgRgHgOAAQgMAAgGAFQgHAFABAJQAAAHABAEQADAFAGADQAGADALAFQAVAGAHAJQAHAIABANQgBARgLAJQgNAKgUAAQgXAAgMgFg");
	this.shape_153.setTransform(647.5,428.4);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AghAsIAAgOQAHAEAIACQAIACAHAAQALAAAGgEQAGgDAAgIQAAgGgFgEQgFgEgNgFQgNgEgGgEQgGgEgDgEQgCgFAAgHQAAgMAJgHQAKgGAQAAQAPAAAPAGIgFAMQgPgGgLAAQgKAAgFADQgFADAAAGQAAAEACADQACADAEACIAQAHQARAGAGAGQAGAGAAAKQAAANgKAIQgKAHgRAAQgTAAgLgGg");
	this.shape_154.setTransform(720,411.4);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgWAsQgKgGgGgMQgFgLgBgPQABgXAMgNQALgNAUAAQAVAAAMANQALAOAAAWQAAAXgLAOQgMANgVAAQgMAAgKgGgAgVgbQgHAJAAASQAAASAIAKQAGAKAOAAQAPAAAHgKQAIgKgBgSQABgSgIgJQgHgKgPAAQgNAAgIAKg");
	this.shape_155.setTransform(710.3,411.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AgfA5QgLgNAAgYQAAgXALgOQALgNATAAQASAAALAOIABAAIgBgHIAAgGIAAgoIAPAAIAACJIgMAAIgCgNIgBAAQgKAPgTAAQgTAAgLgNgAgTgIQgHAJAAATQAAASAGAKQAHAJANAAQAOAAAHgIQAHgIAAgSIAAgDQAAgUgHgJQgHgJgOAAQgNAAgGAKg");
	this.shape_156.setTransform(698.9,409.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgeArQgIgIAAgOQAAgcAugBIAQgBIAAgGQAAgLgEgGQgFgFgLAAQgLAAgQAHIgEgLQAHgEAJgCQAIgCAIAAQARAAAIAHQAJAIAAARIAABBIgLAAIgDgOIgBAAQgHAKgHADQgHADgKAAQgPAAgIgHgAAJABQgQABgIAFQgIAEAAALQAAAIAFAEQAFAEAJAAQAMAAAIgIQAIgHAAgOIAAgIg");
	this.shape_157.setTransform(683.5,411.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AgHBCIAAhgIAOAAIAABggAgFgwQgDgDAAgFQAAgFADgCQACgCADgBQADABADACQADACgBAFQABAFgDADQgDACgDAAQgDAAgCgCg");
	this.shape_158.setTransform(676.6,409.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgbAxIAAhgIAMAAIACASIAAAAQAGgJAHgFQAHgFAKAAIALABIgCANIgLgBQgMAAgHAJQgJAKAAAOIAAAzg");
	this.shape_159.setTransform(671.3,411.3);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AgWAsQgLgGgFgMQgGgLABgPQAAgXAMgNQALgNAVAAQATAAANANQALAOAAAWQAAAXgLAOQgMANgVAAQgMAAgKgGgAgVgbQgHAJAAASQAAASAHAKQAIAKANAAQAPAAAHgKQAIgKAAgSQAAgSgIgJQgHgKgPAAQgOAAgHAKg");
	this.shape_160.setTransform(661.5,411.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AgcAlQgMgNAAgXQAAgXALgOQAMgNATAAQASAAALAMQAKAMAAATIAAAIIhBAAQAAASAIAIQAIAJAOAAQAQAAAPgGIAAANIgOAFQgIABgKAAQgUAAgNgNgAgQgeQgHAIgBAOIAxAAQAAgOgGgIQgGgHgLAAQgLAAgHAHg");
	this.shape_161.setTransform(651.1,411.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AgHBBIAAhzIgoAAIAAgOIBgAAIAAAOIgpAAIAABzg");
	this.shape_162.setTransform(641,409.8);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AgGBFIAAiJIANAAIAACJg");
	this.shape_163.setTransform(554.9,427.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgeArQgIgIAAgOQAAgcAugBIAQgBIAAgGQAAgLgEgGQgFgFgLAAQgLAAgQAHIgEgLQAHgEAJgCQAIgCAIAAQARAAAIAHQAJAIAAARIAABBIgLAAIgDgOIgBAAQgHAKgHADQgHADgKAAQgPAAgIgHgAAJABQgQABgIAFQgIAEAAALQAAAIAFAEQAFAEAJAAQAMAAAIgIQAIgHAAgOIAAgIg");
	this.shape_164.setTransform(547.2,430);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AAaAxIAAg9QAAgMgGgGQgFgGgMAAQgOAAgHAIQgHAIAAATIAAAyIgOAAIAAhgIAMAAIACAOIAAAAQAFgIAIgDQAJgEAJAAQARAAAJAIQAIAIABATIAAA+g");
	this.shape_165.setTransform(536.9,429.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AgXAsQgKgGgFgMQgFgLAAgPQgBgXAMgNQAMgNAVAAQATAAANANQAMAOAAAWQAAAXgMAOQgMANgVAAQgMAAgLgGgAgVgbQgHAJAAASQAAASAHAKQAIAKANAAQAOAAAIgKQAHgKAAgSQAAgSgHgJQgIgKgOAAQgOAAgHAKg");
	this.shape_166.setTransform(525.9,430);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgHBCIAAhgIAOAAIAABggAgFgwQgDgCAAgGQAAgFADgCQADgDACAAQADAAADADQADACgBAFQABAGgDACQgDACgDAAQgCAAgDgCg");
	this.shape_167.setTransform(518.2,428.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgWAlQgMgNAAgYQAAgXAMgNQAMgNAUAAIAOABIALAEIgEAMIgLgDIgKgBQgcAAAAAkQgBASAIAKQAHAJANAAQAMAAANgFIAAANQgKAFgPAAQgUAAgLgNg");
	this.shape_168.setTransform(511.8,430);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgeArQgIgIAAgOQAAgcAugBIAQgBIAAgGQAAgLgEgGQgFgFgLAAQgLAAgQAHIgEgLQAHgEAJgCQAIgCAIAAQARAAAIAHQAJAIAAARIAABBIgLAAIgDgOIgBAAQgHAKgHADQgHADgKAAQgPAAgIgHgAAJABQgQABgIAFQgIAEAAALQAAAIAFAEQAFAEAJAAQAMAAAIgIQAIgHAAgOIAAgIg");
	this.shape_169.setTransform(501.9,430);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgiAwIAAgKIA0hKIgxAAIAAgMIBBAAIAAAMIgzBJIA0AAIAAALg");
	this.shape_170.setTransform(493,430);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AgGBCIAAhgIANAAIAABggAgFgwQgCgCAAgGQAAgFACgCQADgDACAAQADAAADADQADACAAAFQAAAGgDACQgDACgDAAQgCAAgDgCg");
	this.shape_171.setTransform(486.6,428.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AAaAxIAAg9QAAgMgGgGQgFgGgMAAQgOAAgGAIQgIAIAAATIAAAyIgPAAIAAhgIANAAIACAOIABAAQAEgIAIgDQAIgEAJAAQASAAAIAIQAJAIAAATIAAA+g");
	this.shape_172.setTransform(478.7,429.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgeArQgIgIAAgOQAAgcAugBIAQgBIAAgGQAAgLgEgGQgFgFgLAAQgLAAgQAHIgEgLQAHgEAJgCQAIgCAIAAQARAAAIAHQAJAIAAARIAABBIgLAAIgDgOIgBAAQgHAKgHADQgHADgKAAQgPAAgIgHgAAJABQgQABgIAFQgIAEAAALQAAAIAFAEQAFAEAJAAQAMAAAIgIQAIgHAAgOIAAgIg");
	this.shape_173.setTransform(467.7,430);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgiBAQgLgHAAgNQAAgJAGgHQAGgGAKgCQgEgCgCgDQgDgEAAgEQAAgGADgDQADgEAGgDQgIgDgEgIQgFgHAAgKQAAgQAJgJQAKgIARAAQAHAAAGABIAiAAIAAAKIgSACIAEAIQACAFAAAHQAAANgKAJQgJAIgQAAIgJAAQgJAFAAAHQAAADADACQAEACAIAAIAQAAQAPAAAJAGQAIAIAAAMQAAAQgNAIQgMAJgYAAQgTAAgKgHgAgZAeQgGAFAAAJQAAAIAHADQAHAFAMAAQARAAAJgGQAJgFAAgKQAAgIgFgDQgEgCgOAAIgRAAQgKAAgFAEgAgRg2QgGAGAAALQAAAKAGAFQAGAFAKAAQAVAAAAgUQAAgXgVAAQgLAAgFAGg");
	this.shape_174.setTransform(457.9,432.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgbAxIAAhgIAMAAIACASIAAAAQAGgJAHgFQAHgFAKAAIALABIgCANIgLgBQgLAAgIAJQgJAKAAAOIAAAzg");
	this.shape_175.setTransform(450,429.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgrAxQgQgRAAggQAAgfAQgRQAQgSAcAAQAbAAAQASQAPASAAAeQAAAfgPASQgQASgcAAQgbAAgQgSgAgggmQgLANAAAZQAAAaALAOQAMANAUAAQAWAAAKgNQAMgOAAgaQAAgZgMgOQgKgNgVAAQgVAAgMAOg");
	this.shape_176.setTransform(438.6,428.3);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgXAsQgJgGgGgMQgFgLgBgPQABgXALgNQANgNATAAQAVAAAMANQALAOAAAWQAAAXgLAOQgMANgVAAQgMAAgLgGgAgVgbQgHAJAAASQAAASAIAKQAGAKAOAAQAOAAAIgKQAIgKgBgSQABgSgIgJQgIgKgOAAQgOAAgHAKg");
	this.shape_177.setTransform(562.1,411.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgOAfIAAg5IgOAAIAAgHIAOgGIAHgVIAHAAIAAAXIAcAAIAAALIgcAAIAAA4QAAAJAEAFQAEAEAIAAIAHAAIAGgBIAAALQgDABgEABIgJABQgbAAAAgeg");
	this.shape_178.setTransform(553.4,410.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AAaAxIAAg9QAAgMgFgGQgGgGgLAAQgOAAgIAIQgHAIAAATIAAAyIgOAAIAAhgIALAAIADAOIAAAAQAFgIAIgDQAIgEAKAAQARAAAJAIQAIAIABATIAAA+g");
	this.shape_179.setTransform(544.8,411.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgcAlQgMgNAAgXQAAgXALgOQAMgNATAAQASAAALAMQAKAMAAATIAAAIIhBAAQAAASAIAIQAIAJAOAAQAQAAAPgGIAAANIgPAFQgHABgKAAQgUAAgNgNgAgQgeQgHAIgBAOIAxAAQABgOgHgIQgGgHgLAAQgLAAgHAHg");
	this.shape_180.setTransform(534.2,411.4);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AA2AxIAAg+QABgLgGgGQgEgGgLAAQgOAAgGAIQgHAIABAQIAAA1IgOAAIAAg+QAAgLgFgGQgFgGgKAAQgOAAgHAIQgGAJAAASIAAAyIgPAAIAAhgIAMAAIADAOIAAAAQAEgHAIgEQAHgEAJAAQAYAAAFAQIABAAQAEgIAJgEQAIgEAKAAQARAAAIAIQAIAIAAATIAAA+g");
	this.shape_181.setTransform(520.6,411.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AgHBCIAAhgIAOAAIAABggAgFgwQgCgDgBgFQABgFACgCQACgCADgBQAEABACACQACACABAFQgBAFgCADQgCACgEAAQgDAAgCgCg");
	this.shape_182.setTransform(509.9,409.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AgHAxIglhhIAPAAIAVA5IAIAaIAAAAIAHgTIAXhAIAPAAIgkBhg");
	this.shape_183.setTransform(503.1,411.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgGBFIAAiJIANAAIAACJg");
	this.shape_184.setTransform(496.3,409.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgWAsQgLgGgFgMQgGgLAAgPQAAgXANgNQAMgNATAAQAVAAAMANQALAOAAAWQAAAXgLAOQgMANgVAAQgMAAgKgGgAgVgbQgHAJAAASQAAASAHAKQAHAKAOAAQAPAAAHgKQAIgKAAgSQAAgSgIgJQgHgKgPAAQgNAAgIAKg");
	this.shape_185.setTransform(488.6,411.4);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AgHAxIglhhIAPAAIAVA5IAIAaIAAAAIAHgTIAXhAIAPAAIgkBhg");
	this.shape_186.setTransform(478.6,411.4);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AAaAxIAAg9QAAgMgFgGQgGgGgMAAQgOAAgGAIQgIAIAAATIAAAyIgPAAIAAhgIAMAAIADAOIABAAQAEgIAIgDQAIgEAJAAQASAAAIAIQAKAIgBATIAAA+g");
	this.shape_187.setTransform(468.6,411.3);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AgbAlQgNgNAAgXQAAgXAMgOQALgNATAAQASAAAKAMQALAMAAATIAAAIIhCAAQABASAIAIQAIAJAOAAQAPAAAQgGIAAANIgPAFQgGABgLAAQgUAAgMgNgAgQgeQgHAIgCAOIAzAAQAAgOgHgIQgGgHgLAAQgLAAgHAHg");
	this.shape_188.setTransform(458,411.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AghAsIAAgOQAHAEAIACQAIACAHAAQALAAAGgEQAGgDAAgIQAAgGgFgEQgFgEgNgFQgNgEgGgEQgGgEgDgEQgCgFAAgHQAAgMAJgHQAKgGAQAAQAPAAAPAGIgFAMQgPgGgLAAQgKAAgFADQgFADAAAGQAAAEACADQACADAEACIAQAHQARAGAGAGQAGAGAAAKQAAANgKAIQgKAHgRAAQgTAAgLgGg");
	this.shape_189.setTransform(448.6,411.4);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AgbAlQgNgNAAgXQAAgXAMgOQALgNASAAQATAAAKAMQALAMAAATIAAAIIhCAAQABASAIAIQAIAJAOAAQAPAAAQgGIAAANIgOAFQgIABgJAAQgVAAgMgNgAgQgeQgHAIgCAOIAzAAQgBgOgGgIQgGgHgMAAQgKAAgHAHg");
	this.shape_190.setTransform(439.3,411.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgyBBIAAiBIAnAAQAdAAAQARQASARgBAeQAAAfgRARQgSARgfAAgAgkA0IASAAQAaAAAOgNQANgOAAgZQAAgZgMgNQgNgNgYAAIgWAAg");
	this.shape_191.setTransform(428,409.8);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AghAsIAAgOQAHAEAIACQAIACAHAAQALAAAGgEQAGgDAAgIQAAgGgFgEQgFgEgNgFQgNgEgGgEQgGgEgDgEQgCgFAAgHQAAgMAJgHQAKgGAQAAQAPAAAPAGIgFAMQgPgGgLAAQgKAAgFADQgFADAAAGQAAAEACADQACADAEACIAQAHQARAGAGAGQAGAGAAAKQAAANgKAIQgKAHgRAAQgTAAgLgGg");
	this.shape_192.setTransform(342.7,430);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgeArQgIgIAAgOQAAgcAugBIAQgBIAAgGQAAgLgEgGQgFgFgLAAQgLAAgQAHIgEgLQAHgEAJgCQAIgCAIAAQARAAAIAHQAJAIAAARIAABBIgLAAIgDgOIgBAAQgHAKgHADQgHADgKAAQgPAAgIgHgAAJABQgQABgIAFQgIAEAAALQAAAIAFAEQAFAEAJAAQAMAAAIgIQAIgHAAgOIAAgIg");
	this.shape_193.setTransform(332.9,430);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AA2AxIAAg+QAAgLgEgGQgGgGgKAAQgNAAgHAIQgGAIgBAQIAAA1IgNAAIAAg+QAAgLgFgGQgFgGgLAAQgNAAgHAIQgGAJgBASIAAAyIgOAAIAAhgIAMAAIACAOIABAAQAEgHAIgEQAIgEAIAAQAXAAAHAQIAAAAQAFgIAHgEQAJgEAKAAQARAAAIAIQAIAIAAATIAAA+g");
	this.shape_194.setTransform(319.8,429.9);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgbAlQgNgNAAgXQAAgXAMgOQALgNASAAQATAAAKAMQALAMAAATIAAAIIhBAAQAAASAIAIQAIAJAOAAQAPAAAQgGIAAANIgPAFQgGABgLAAQgUAAgMgNgAgQgeQgHAIgBAOIAyAAQAAgOgHgIQgGgHgMAAQgKAAgHAHg");
	this.shape_195.setTransform(306.3,430);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AgOAfIAAg5IgOAAIAAgHIAOgGIAHgVIAHAAIAAAXIAcAAIAAALIgcAAIAAA4QAAAJAEAFQAEAEAIAAIAHAAIAGgBIAAALQgDABgEABIgJABQgbAAAAgeg");
	this.shape_196.setTransform(298,428.9);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AghAsIAAgOQAHAEAIACQAIACAHAAQALAAAGgEQAGgDAAgIQAAgGgFgEQgFgEgNgFQgNgEgGgEQgGgEgDgEQgCgFAAgHQAAgMAJgHQAKgGAQAAQAPAAAPAGIgFAMQgPgGgLAAQgKAAgFADQgFADAAAGQAAAEACADQACADAEACIAQAHQARAGAGAGQAGAGAAAKQAAANgKAIQgKAHgRAAQgTAAgLgGg");
	this.shape_197.setTransform(290.6,430);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AgHBCIAAhgIAOAAIAABggAgFgwQgCgCgBgGQABgFACgCQACgDADAAQAEAAACADQACACABAFQgBAGgCACQgCACgEAAQgDAAgCgCg");
	this.shape_198.setTransform(284,428.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AgoA9IAAgPIASAFQAJACAJAAQAOAAAIgGQAIgFgBgLQAAgGgCgFQgDgEgGgEQgHgDgLgFQgSgFgIgJQgIgJAAgOQAAgPALgJQAMgJARABQATAAARAGIgFAOQgRgHgOAAQgLAAgHAFQgGAFAAAJQAAAHABAEQADAFAGADQAGADALAFQAUAGAIAJQAHAIAAANQABARgMAJQgNAKgUAAQgYAAgMgFg");
	this.shape_199.setTransform(276.8,428.4);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AghAsIAAgOQAHAEAIACQAIACAHAAQALAAAGgEQAGgDAAgIQAAgGgFgEQgFgEgNgFQgNgEgGgEQgGgEgDgEQgCgFAAgHQAAgMAJgHQAKgGAQAAQAPAAAPAGIgFAMQgPgGgLAAQgKAAgFADQgFADAAAGQAAAEACADQACADAEACIAQAHQARAGAGAGQAGAGAAAKQAAANgKAIQgKAHgRAAQgTAAgLgGg");
	this.shape_200.setTransform(349.3,411.4);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AgWAsQgKgGgGgMQgGgLAAgPQAAgXANgNQAMgNATAAQAVAAAMANQALAOAAAWQAAAXgLAOQgMANgVAAQgMAAgKgGgAgVgbQgHAJAAASQAAASAIAKQAGAKAOAAQAPAAAHgKQAIgKAAgSQAAgSgIgJQgHgKgPAAQgNAAgIAKg");
	this.shape_201.setTransform(339.6,411.4);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgfA5QgLgNAAgYQAAgXALgOQALgNATAAQASAAALAOIABAAIgBgHIAAgGIAAgoIAPAAIAACJIgMAAIgCgNIgBAAQgKAPgTAAQgTAAgLgNgAgTgIQgHAJAAATQAAASAGAKQAHAJANAAQAOAAAHgIQAHgIAAgSIAAgDQAAgUgHgJQgHgJgOAAQgNAAgGAKg");
	this.shape_202.setTransform(328.2,409.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgeArQgIgIAAgOQAAgcAugBIAQgBIAAgGQAAgLgEgGQgFgFgLAAQgLAAgQAHIgEgLQAHgEAJgCQAIgCAIAAQARAAAIAHQAJAIAAARIAABBIgLAAIgDgOIgBAAQgHAKgHADQgHADgKAAQgPAAgIgHgAAJABQgQABgIAFQgIAEAAALQAAAIAFAEQAFAEAJAAQAMAAAIgIQAIgHAAgOIAAgIg");
	this.shape_203.setTransform(312.8,411.4);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AgGBCIAAhgIANAAIAABggAgFgwQgDgDAAgFQAAgFADgCQACgCADgBQADABADACQACACAAAFQAAAFgCADQgDACgDAAQgDAAgCgCg");
	this.shape_204.setTransform(305.9,409.6);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AgbAxIAAhgIAMAAIACASIAAAAQAGgJAHgFQAHgFAKAAIALABIgCANIgLgBQgLAAgIAJQgJAKAAAOIAAAzg");
	this.shape_205.setTransform(300.6,411.3);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AgXAsQgKgGgFgMQgGgLABgPQAAgXALgNQAMgNAVAAQATAAANANQAMAOAAAWQAAAXgMAOQgMANgVAAQgMAAgLgGgAgVgbQgHAJAAASQAAASAHAKQAIAKANAAQAOAAAIgKQAHgKABgSQgBgSgHgJQgIgKgOAAQgOAAgHAKg");
	this.shape_206.setTransform(290.8,411.4);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AgcAlQgMgNAAgXQAAgXALgOQAMgNATAAQASAAALAMQAKAMAAATIAAAIIhBAAQAAASAIAIQAIAJAOAAQAQAAAPgGIAAANIgOAFQgIABgKAAQgUAAgNgNgAgQgeQgHAIgBAOIAxAAQABgOgHgIQgGgHgLAAQgLAAgHAHg");
	this.shape_207.setTransform(280.4,411.4);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AgHBBIAAhzIgoAAIAAgOIBgAAIAAAOIgqAAIAABzg");
	this.shape_208.setTransform(270.3,409.8);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AghAsIAAgOQAHAEAIACQAIACAHAAQALAAAGgEQAGgDAAgIQAAgGgFgEQgFgEgNgFQgNgEgGgEQgGgEgDgEQgCgFAAgHQAAgMAJgHQAKgGAQAAQAPAAAPAGIgFAMQgPgGgLAAQgKAAgFADQgFADAAAGQAAAEACADQACADAEACIAQAHQARAGAGAGQAGAGAAAKQAAANgKAIQgKAHgRAAQgTAAgLgGg");
	this.shape_209.setTransform(1104.7,201.6);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AgeArQgIgIAAgOQAAgcAugBIAQgBIAAgGQAAgLgEgGQgFgFgLAAQgLAAgQAHIgEgLQAHgEAJgCQAIgCAIAAQARAAAIAHQAJAIAAARIAABBIgLAAIgDgOIgBAAQgHAKgHADQgHADgKAAQgPAAgIgHgAAJABQgQABgIAFQgIAEAAALQAAAIAFAEQAFAEAJAAQAMAAAIgIQAIgHAAgOIAAgIg");
	this.shape_210.setTransform(1095,201.6);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AgOAfIAAg5IgOAAIAAgHIAOgGIAHgVIAHAAIAAAXIAcAAIAAALIgcAAIAAA4QAAAJAEAFQAEAEAIAAIAHAAIAGgBIAAALQgDABgEABIgJABQgbAAAAgeg");
	this.shape_211.setTransform(1087,200.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AghAsIAAgOQAHAEAIACQAIACAHAAQALAAAGgEQAGgDAAgIQAAgGgFgEQgFgEgNgFQgNgEgGgEQgGgEgDgEQgCgFAAgHQAAgMAJgHQAKgGAQAAQAPAAAPAGIgFAMQgPgGgLAAQgKAAgFADQgFADAAAGQAAAEACADQACADAEACIAQAHQARAGAGAGQAGAGAAAKQAAANgKAIQgKAHgRAAQgTAAgLgGg");
	this.shape_212.setTransform(1079.7,201.6);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AgHBCIAAhfIAOAAIAABfgAgFgwQgDgCAAgFQAAgFADgDQACgCADAAQADAAADACQADADgBAFQABAFgDACQgDACgDAAQgDAAgCgCg");
	this.shape_213.setTransform(1073.1,199.8);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AgGBFIAAiJIANAAIAACJg");
	this.shape_214.setTransform(1068.5,199.5);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AgeArQgIgIAAgOQAAgcAugBIAQgBIAAgGQAAgLgEgGQgFgFgLAAQgLAAgQAHIgEgLQAHgEAJgCQAIgCAIAAQARAAAIAHQAJAIAAARIAABBIgLAAIgDgOIgBAAQgHAKgHADQgHADgKAAQgPAAgIgHgAAJABQgQABgIAFQgIAEAAALQAAAIAFAEQAFAEAJAAQAMAAAIgIQAIgHAAgOIAAgIg");
	this.shape_215.setTransform(1060.9,201.6);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AgbAxIAAhgIAMAAIACASIAAAAQAGgJAHgFQAHgFAJAAIAMABIgCANIgLgBQgMAAgHAJQgIAKgBAOIAAAzg");
	this.shape_216.setTransform(1053.1,201.5);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AgfApQgIgJgBgSIAAg+IAPAAIAAA+QAAALAGAGQAFAGALAAQAPAAAHgJQAHgHAAgUIAAgxIAOAAIAABfIgMAAIgBgMIgBAAQgFAGgIAEQgIAEgJABQgSAAgJgJg");
	this.shape_217.setTransform(1043.1,201.7);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AgOAfIAAg5IgOAAIAAgHIAOgGIAHgVIAHAAIAAAXIAcAAIAAALIgcAAIAAA4QAAAJAEAFQAEAEAIAAIAHAAIAGgBIAAALQgDABgEABIgJABQgbAAAAgeg");
	this.shape_218.setTransform(1034.4,200.5);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AgeApQgKgJABgSIAAg+IAPAAIAAA+QAAALAEAGQAGAGALAAQAPAAAHgJQAHgHAAgUIAAgxIAOAAIAABfIgLAAIgDgMIgBAAQgEAGgIAEQgIAEgJABQgSAAgIgJg");
	this.shape_219.setTransform(1025.6,201.7);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AgbAxIAAhgIAMAAIACASIABAAQAFgJAHgFQAHgFAJAAIAMABIgCANIgLgBQgLAAgIAJQgIAKAAAOIAAAzg");
	this.shape_220.setTransform(1017,201.5);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AgOAfIAAg5IgOAAIAAgHIAOgGIAHgVIAHAAIAAAXIAcAAIAAALIgcAAIAAA4QAAAJAEAFQAEAEAIAAIAHAAIAGgBIAAALQgDABgEABIgJABQgbAAAAgeg");
	this.shape_221.setTransform(1009.5,200.5);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AghAsIAAgOQAHAEAIACQAIACAHAAQALAAAGgEQAGgDAAgIQAAgGgFgEQgFgEgNgFQgNgEgGgEQgGgEgDgEQgCgFAAgHQAAgMAJgHQAKgGAQAAQAPAAAPAGIgFAMQgPgGgLAAQgKAAgFADQgFADAAAGQAAAEACADQACADAEACIAQAHQARAGAGAGQAGAGAAAKQAAANgKAIQgKAHgRAAQgTAAgLgGg");
	this.shape_222.setTransform(1002.1,201.6);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AgjBBIAAiBIBHAAIAAAOIg4AAIAAApIA0AAIAAANIg0AAIAAAvIA4AAIAAAOg");
	this.shape_223.setTransform(993,199.9);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AghAsIAAgOQAHAEAIACQAIACAHAAQALAAAGgEQAGgDAAgIQAAgGgFgEQgFgEgNgFQgNgEgGgEQgGgEgDgEQgCgFAAgHQAAgMAJgHQAKgGAQAAQAPAAAPAGIgFAMQgPgGgLAAQgKAAgFADQgFADAAAGQAAAEACADQACADAEACIAQAHQARAGAGAGQAGAGAAAKQAAANgKAIQgKAHgRAAQgTAAgLgGg");
	this.shape_224.setTransform(1088.3,183);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AgXAsQgJgGgGgMQgFgLAAgPQgBgXAMgNQAMgNAVAAQATAAANANQAMAOAAAWQAAAXgMAOQgMANgVAAQgMAAgLgGgAgVgbQgHAJAAASQAAASAHAKQAHAKAOAAQAOAAAIgKQAHgKAAgSQAAgSgHgJQgIgKgOAAQgOAAgHAKg");
	this.shape_225.setTransform(1078.5,183);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("AgfA5QgLgNAAgYQAAgXALgOQALgNATAAQASAAALAOIABAAIgBgHIAAgGIAAgoIAPAAIAACJIgMAAIgCgNIgBAAQgKAPgTAAQgTAAgLgNgAgTgIQgHAJAAATQAAASAGAKQAHAJANAAQAOAAAHgIQAHgIAAgSIAAgDQAAgUgHgJQgHgJgOAAQgNAAgGAKg");
	this.shape_226.setTransform(1067.1,181.1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AgeArQgIgIAAgOQAAgcAugBIAQgBIAAgGQAAgLgEgGQgFgFgLAAQgLAAgQAHIgEgLQAHgEAJgCQAIgCAIAAQARAAAIAHQAJAIAAARIAABBIgLAAIgDgOIgBAAQgHAKgHADQgHADgKAAQgPAAgIgHgAAJABQgQABgIAFQgIAEAAALQAAAIAFAEQAFAEAJAAQAMAAAIgIQAIgHAAgOIAAgIg");
	this.shape_227.setTransform(1051.8,183);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AgHBCIAAhgIAOAAIAABggAgFgwQgCgCAAgFQAAgGACgCQACgDADAAQAEAAACADQACACABAGQgBAFgCACQgCACgEAAQgDAAgCgCg");
	this.shape_228.setTransform(1044.9,181.2);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AgbAxIAAhgIAMAAIACASIABAAQAFgJAHgFQAHgFAJAAIAMABIgCANIgLgBQgLAAgIAJQgIAKAAAOIAAAzg");
	this.shape_229.setTransform(1039.5,182.9);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("AgWAsQgKgGgGgMQgFgLgBgPQABgXAMgNQALgNAUAAQAVAAAMANQALAOAAAWQAAAXgLAOQgMANgVAAQgMAAgKgGgAgVgbQgHAJAAASQAAASAIAKQAGAKAOAAQAOAAAIgKQAIgKgBgSQABgSgIgJQgIgKgOAAQgNAAgIAKg");
	this.shape_230.setTransform(1029.8,183);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AgbAlQgNgNAAgXQAAgXAMgOQALgNASAAQATAAAKAMQALAMAAATIAAAIIhCAAQABASAIAIQAIAJAOAAQAPAAAQgGIAAANIgOAFQgIABgJAAQgVAAgMgNgAgQgeQgHAIgCAOIAzAAQgBgOgGgIQgGgHgMAAQgKAAgHAHg");
	this.shape_231.setTransform(1019.3,183);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AgGBBIAAhzIgqAAIAAgOIBgAAIAAAOIgoAAIAABzg");
	this.shape_232.setTransform(1009.2,181.4);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AgeArQgIgIAAgOQAAgcAugBIAQgBIAAgGQAAgLgEgGQgFgFgLAAQgLAAgQAHIgEgLQAHgEAJgCQAIgCAIAAQARAAAIAHQAJAIAAARIAABBIgLAAIgDgOIgBAAQgHAKgHADQgHADgKAAQgPAAgIgHgAAJABQgQABgIAFQgIAEAAALQAAAIAFAEQAFAEAJAAQAMAAAIgIQAIgHAAgOIAAgIg");
	this.shape_233.setTransform(910.5,201.6);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("AgOAfIAAg5IgOAAIAAgHIAOgGIAHgVIAHAAIAAAXIAcAAIAAALIgcAAIAAA4QAAAJAEAFQAEAEAIAAIAHAAIAGgBIAAALQgDABgEABIgJABQgbAAAAgeg");
	this.shape_234.setTransform(902.6,200.5);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("AghAsIAAgOQAHAEAIACQAIACAHAAQALAAAGgEQAGgDAAgIQAAgGgFgEQgFgEgNgFQgNgEgGgEQgGgEgDgEQgCgFAAgHQAAgMAJgHQAKgGAQAAQAPAAAPAGIgFAMQgPgGgLAAQgKAAgFADQgFADAAAGQAAAEACADQACADAEACIAQAHQARAGAGAGQAGAGAAAKQAAANgKAIQgKAHgRAAQgTAAgLgGg");
	this.shape_235.setTransform(895.2,201.6);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("AgHBCIAAhfIAOAAIAABfgAgFgwQgDgCABgFQgBgFADgDQADgCACAAQAEAAACACQACADABAFQgBAFgCACQgCACgEAAQgCAAgDgCg");
	this.shape_236.setTransform(888.6,199.8);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFFFF").s().p("AgbAxIAAhgIAMAAIACASIABAAQAFgJAHgFQAHgFAJAAIAMABIgCANIgLgBQgLAAgIAJQgIAKAAAOIAAAzg");
	this.shape_237.setTransform(883.3,201.5);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("AgXAsQgJgGgGgMQgFgLgBgPQABgXALgNQANgNATAAQAVAAAMANQALAOABAWQgBAXgLAOQgMANgVAAQgMAAgLgGgAgVgbQgHAJAAASQAAASAIAKQAGAKAOAAQAOAAAIgKQAIgKgBgSQABgSgIgJQgIgKgOAAQgOAAgHAKg");
	this.shape_238.setTransform(873.5,201.6);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("AgHBCIAAhfIAOAAIAABfgAgFgwQgCgCgBgFQABgFACgDQACgCADAAQAEAAACACQACADABAFQgBAFgCACQgCACgEAAQgDAAgCgCg");
	this.shape_239.setTransform(865.9,199.8);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("AgHAwIglhfIAPAAIAVA4IAIAaIAAAAIAHgTIAXg/IAPAAIgkBfg");
	this.shape_240.setTransform(859,201.6);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFFFF").s().p("AgeArQgIgIAAgOQAAgcAugBIAQgBIAAgGQAAgLgEgGQgFgFgLAAQgLAAgQAHIgEgLQAHgEAJgCQAIgCAIAAQARAAAIAHQAJAIAAARIAABBIgLAAIgDgOIgBAAQgHAKgHADQgHADgKAAQgPAAgIgHgAAJABQgQABgIAFQgIAEAAALQAAAIAFAEQAFAEAJAAQAMAAAIgIQAIgHAAgOIAAgIg");
	this.shape_241.setTransform(849.1,201.6);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFFFF").s().p("AAaBFIAAg/QAAgLgFgGQgGgFgLAAQgOAAgIAIQgHAIAAASIAAAzIgOAAIAAiJIAOAAIAAAqIAAAMIABAAQADgHAJgEQAHgEAKAAQASAAAJAJQAJAIgBASIAAA/g");
	this.shape_242.setTransform(838.8,199.5);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("AgbAlQgNgNAAgXQAAgXALgOQAMgNATAAQASAAAKAMQALAMAAATIAAAIIhBAAQAAASAIAIQAIAJAOAAQAPAAAQgGIAAANIgPAFQgGABgLAAQgUAAgMgNgAgQgeQgHAIgBAOIAyAAQAAgOgHgIQgGgHgLAAQgLAAgHAHg");
	this.shape_243.setTransform(828.2,201.6);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("AgsBBIAAiBIAlAAQAYAAAMAIQALAIAAAQQAAAMgGAIQgHAHgMACIAAABQAeAEAAAaQAAARgMAKQgMAKgVAAgAgdA0IAbAAQAPAAAIgGQAHgGAAgNQAAgMgIgGQgIgFgPAAIgaAAgAgdgIIAZAAQAPAAAHgFQAHgFAAgMQAAgLgIgFQgIgFgQAAIgWAAg");
	this.shape_244.setTransform(817.6,199.9);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFFFF").s().p("AgeArQgIgIAAgOQAAgcAugBIAQgBIAAgGQAAgLgEgGQgFgFgLAAQgLAAgQAHIgEgLQAHgEAJgCQAIgCAIAAQARAAAIAHQAJAIAAARIAABBIgLAAIgDgOIgBAAQgHAKgHADQgHADgKAAQgPAAgIgHgAAJABQgQABgIAFQgIAEAAALQAAAIAFAEQAFAEAJAAQAMAAAIgIQAIgHAAgOIAAgIg");
	this.shape_245.setTransform(884.7,183);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFFFF").s().p("AgHBCIAAhgIAOAAIAABggAgFgwQgDgCAAgFQAAgGADgCQACgDADAAQADAAADADQADACgBAGQABAFgDACQgDACgDAAQgDAAgCgCg");
	this.shape_246.setTransform(877.8,181.2);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFFFFF").s().p("AgbAxIAAhgIAMAAIACASIAAAAQAGgJAHgFQAHgFAKAAIALABIgCANIgLgBQgMAAgHAJQgJAKAAAOIAAAzg");
	this.shape_247.setTransform(872.4,182.9);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("AgWAsQgLgGgFgMQgGgLABgPQAAgXAMgNQAMgNAUAAQATAAANANQAMAOgBAWQABAXgMAOQgMANgVAAQgMAAgKgGgAgVgbQgHAJAAASQAAASAHAKQAIAKANAAQAPAAAHgKQAIgKAAgSQAAgSgIgJQgHgKgPAAQgOAAgHAKg");
	this.shape_248.setTransform(862.7,183);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFFFF").s().p("AgcAlQgMgNAAgXQAAgXALgOQAMgNATAAQASAAALAMQAKAMAAATIAAAIIhBAAQAAASAIAIQAIAJAOAAQAQAAAPgGIAAANIgOAFQgIABgKAAQgUAAgNgNgAgQgeQgHAIgBAOIAxAAQAAgOgGgIQgGgHgLAAQgLAAgHAHg");
	this.shape_249.setTransform(852.2,183);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("AgGBBIAAhzIgqAAIAAgOIBgAAIAAAOIgoAAIAABzg");
	this.shape_250.setTransform(842.2,181.4);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("AgeArQgIgIAAgOQAAgcAugBIAQgBIAAgGQAAgLgEgGQgFgFgLAAQgLAAgQAHIgEgLQAHgEAJgCQAIgCAIAAQARAAAIAHQAJAIAAARIAABBIgLAAIgDgOIgBAAQgHAKgHADQgHADgKAAQgPAAgIgHgAAJABQgQABgIAFQgIAEAAALQAAAIAFAEQAFAEAJAAQAMAAAIgIQAIgHAAgOIAAgIg");
	this.shape_251.setTransform(717.7,201.6);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AgGBCIAAhfIANAAIAABfgAgFgwQgDgCABgFQgBgFADgDQADgCACAAQADAAADACQADADAAAFQAAAFgDACQgDACgDAAQgCAAgDgCg");
	this.shape_252.setTransform(710.8,199.8);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFFFFF").s().p("AgXAlQgLgNAAgYQAAgXAMgNQALgNAWAAIANABIALAEIgFAMIgKgDIgKgBQgdAAAAAkQABASAGAKQAIAJANAAQAMAAANgFIAAANQgKAFgOAAQgVAAgMgNg");
	this.shape_253.setTransform(704.4,201.6);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("AgeArQgIgIAAgOQAAgcAugBIAQgBIAAgGQAAgLgEgGQgFgFgLAAQgLAAgQAHIgEgLQAHgEAJgCQAIgCAIAAQARAAAIAHQAJAIAAARIAABBIgLAAIgDgOIgBAAQgHAKgHADQgHADgKAAQgPAAgIgHgAAJABQgQABgIAFQgIAEAAALQAAAIAFAEQAFAEAJAAQAMAAAIgIQAIgHAAgOIAAgIg");
	this.shape_254.setTransform(694.5,201.6);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFFFFF").s().p("AgbAxIAAhgIAMAAIACASIAAAAQAGgJAHgFQAHgFAJAAIAMABIgCANIgLgBQgLAAgIAJQgIAKgBAOIAAAzg");
	this.shape_255.setTransform(686.7,201.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("AgXAlQgLgNAAgYQAAgXAMgNQALgNAWAAIANABIALAEIgFAMIgKgDIgKgBQgdAAAAAkQABASAGAKQAIAJANAAQAMAAANgFIAAANQgKAFgOAAQgVAAgMgNg");
	this.shape_256.setTransform(678.3,201.6);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("AgWAsQgLgGgFgMQgGgLABgPQAAgXALgNQAMgNAVAAQATAAANANQAMAOAAAWQAAAXgMAOQgMANgVAAQgMAAgKgGgAgVgbQgHAJAAASQAAASAHAKQAIAKANAAQAOAAAIgKQAHgKABgSQgBgSgHgJQgIgKgOAAQgOAAgHAKg");
	this.shape_257.setTransform(668.4,201.6);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFFFFF").s().p("AgbAxIAAhgIAMAAIACASIABAAQAFgJAHgFQAHgFAKAAIALABIgCANIgLgBQgMAAgHAJQgJAKABAOIAAAzg");
	this.shape_258.setTransform(659.9,201.5);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("AgeApQgJgJAAgSIAAg+IAOAAIAAA+QAAALAGAGQAFAGAMAAQAOAAAHgJQAHgHAAgUIAAgxIAPAAIAABfIgNAAIgBgMIgBAAQgFAGgIAEQgIAEgJABQgSAAgIgJg");
	this.shape_259.setTransform(649.9,201.7);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFFFFF").s().p("AgsBBIAAiBIAlAAQAYAAAMAIQALAIAAAQQAAAMgGAIQgHAHgMACIAAABQAeAEAAAaQAAARgMAKQgMAKgVAAgAgdA0IAbAAQAPAAAIgGQAHgGAAgNQAAgMgIgGQgIgFgPAAIgaAAgAgdgIIAZAAQAPAAAHgFQAHgFAAgMQAAgLgIgFQgIgFgQAAIgWAAg");
	this.shape_260.setTransform(638.8,199.9);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFFFFF").s().p("AgeArQgIgIAAgOQAAgcAugBIAQgBIAAgGQAAgLgEgGQgFgFgLAAQgLAAgQAHIgEgLQAHgEAJgCQAIgCAIAAQARAAAIAHQAJAIAAARIAABBIgLAAIgDgOIgBAAQgHAKgHADQgHADgKAAQgPAAgIgHgAAJABQgQABgIAFQgIAEAAALQAAAIAFAEQAFAEAJAAQAMAAAIgIQAIgHAAgOIAAgIg");
	this.shape_261.setTransform(712,183);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFFFFF").s().p("AgfA5QgLgNAAgYQAAgXALgOQALgNATAAQASAAALAOIABAAIgBgHIAAgGIAAgoIAPAAIAACJIgMAAIgCgNIgBAAQgKAPgTAAQgTAAgLgNgAgTgIQgHAJAAATQAAASAGAKQAHAJANAAQAOAAAHgIQAHgIAAgSIAAgDQAAgUgHgJQgHgJgOAAQgNAAgGAKg");
	this.shape_262.setTransform(701.4,181.1);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFFFFF").s().p("AgeArQgIgIAAgOQAAgcAugBIAQgBIAAgGQAAgLgEgGQgFgFgLAAQgLAAgQAHIgEgLQAHgEAJgCQAIgCAIAAQARAAAIAHQAJAIAAARIAABBIgLAAIgDgOIgBAAQgHAKgHADQgHADgKAAQgPAAgIgHgAAJABQgQABgIAFQgIAEAAALQAAAIAFAEQAFAEAJAAQAMAAAIgIQAIgHAAgOIAAgIg");
	this.shape_263.setTransform(686,183);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFFFFF").s().p("AgGBCIAAhgIANAAIAABggAgFgwQgCgCAAgFQAAgGACgCQADgDACAAQADAAADADQACACAAAGQAAAFgCACQgDACgDAAQgDAAgCgCg");
	this.shape_264.setTransform(679.1,181.2);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FFFFFF").s().p("AgbAxIAAhgIAMAAIACASIAAAAQAGgJAHgFQAHgFAJAAIAMABIgCANIgLgBQgMAAgHAJQgJAKAAAOIAAAzg");
	this.shape_265.setTransform(673.8,182.9);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFFFFF").s().p("AgXAsQgKgGgFgMQgGgLABgPQgBgXAMgNQAMgNAVAAQATAAANANQAMAOAAAWQAAAXgMAOQgMANgVAAQgMAAgLgGgAgVgbQgHAJAAASQAAASAHAKQAIAKANAAQAOAAAIgKQAHgKAAgSQAAgSgHgJQgIgKgOAAQgOAAgHAKg");
	this.shape_266.setTransform(664,183);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFFFFF").s().p("AgcAlQgMgNAAgXQAAgXALgOQAMgNATAAQASAAAKAMQALAMAAATIAAAIIhBAAQAAASAIAIQAIAJAOAAQAPAAAQgGIAAANIgPAFQgGABgLAAQgUAAgNgNgAgQgeQgHAIgBAOIAxAAQABgOgHgIQgGgHgLAAQgLAAgHAHg");
	this.shape_267.setTransform(653.5,183);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFFFFF").s().p("AgHBBIAAhzIgoAAIAAgOIBfAAIAAAOIgoAAIAABzg");
	this.shape_268.setTransform(643.5,181.4);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FFFFFF").s().p("AghAsIAAgOQAHAEAIACQAIACAHAAQALAAAGgEQAGgDAAgIQAAgGgFgEQgFgEgNgFQgNgEgGgEQgGgEgDgEQgCgFAAgHQAAgMAJgHQAKgGAQAAQAPAAAPAGIgFAMQgPgGgLAAQgKAAgFADQgFADAAAGQAAAEACADQACADAEACIAQAHQARAGAGAGQAGAGAAAKQAAANgKAIQgKAHgRAAQgTAAgLgGg");
	this.shape_269.setTransform(531.6,210.9);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FFFFFF").s().p("AgeArQgIgIAAgOQAAgcAugBIAQgBIAAgGQAAgLgEgGQgFgFgLAAQgLAAgQAHIgEgLQAHgEAJgCQAIgCAIAAQARAAAIAHQAJAIAAARIAABBIgLAAIgDgOIgBAAQgHAKgHADQgHADgKAAQgPAAgIgHgAAJABQgQABgIAFQgIAEAAALQAAAIAFAEQAFAEAJAAQAMAAAIgIQAIgHAAgOIAAgIg");
	this.shape_270.setTransform(521.9,210.9);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFFFFF").s().p("AAaAxIAAg9QAAgMgGgGQgFgGgMAAQgOAAgGAIQgIAIAAATIAAAyIgPAAIAAhgIANAAIACAOIAAAAQAFgIAIgDQAJgEAJAAQARAAAIAIQAJAIAAATIAAA+g");
	this.shape_271.setTransform(511.6,210.8);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FFFFFF").s().p("AgeArQgIgIAAgOQAAgcAugBIAQgBIAAgGQAAgLgEgGQgFgFgLAAQgLAAgQAHIgEgLQAHgEAJgCQAIgCAIAAQARAAAIAHQAJAIAAARIAABBIgLAAIgDgOIgBAAQgHAKgHADQgHADgKAAQgPAAgIgHgAAJABQgQABgIAFQgIAEAAALQAAAIAFAEQAFAEAJAAQAMAAAIgIQAIgHAAgOIAAgIg");
	this.shape_272.setTransform(500.6,210.9);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FFFFFF").s().p("AA2AxIAAg+QAAgLgEgGQgGgGgKAAQgNAAgHAIQgGAIAAAQIAAA1IgOAAIAAg+QAAgLgFgGQgFgGgLAAQgNAAgHAIQgGAJgBASIAAAyIgOAAIAAhgIAMAAIACAOIABAAQAEgHAIgEQAIgEAIAAQAXAAAHAQIAAAAQAEgIAIgEQAJgEAKAAQARAAAIAIQAIAIAAATIAAA+g");
	this.shape_273.setTransform(487.4,210.8);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FFFFFF").s().p("AgeApQgKgIABgTIAAg+IAPAAIAAA+QAAAMAEAFQAGAGALAAQAPAAAHgIQAHgJAAgSIAAgyIAPAAIAABgIgMAAIgDgOIgBAAQgEAIgIADQgIAFgJAAQgSAAgIgJg");
	this.shape_274.setTransform(473.3,211);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFFFFF").s().p("AAiBBIAAg9IhDAAIAAA9IgPAAIAAiBIAPAAIAAA3IBDAAIAAg3IAPAAIAACBg");
	this.shape_275.setTransform(461.1,209.2);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FFFFFF").s().p("AghAsIAAgOQAHAEAIACQAIACAHAAQALAAAGgEQAGgDAAgIQAAgGgFgEQgFgEgNgFQgNgEgGgEQgGgEgDgEQgCgFAAgHQAAgMAJgHQAKgGAQAAQAPAAAPAGIgFAMQgPgGgLAAQgKAAgFADQgFADAAAGQAAAEACADQACADAEACIAQAHQARAGAGAGQAGAGAAAKQAAANgKAIQgKAHgRAAQgTAAgLgGg");
	this.shape_276.setTransform(528,192.3);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FFFFFF").s().p("AgbAlQgNgNAAgXQAAgXALgOQAMgNATAAQASAAAKAMQALAMAAATIAAAIIhBAAQAAASAIAIQAIAJAOAAQAPAAAQgGIAAANIgPAFQgGABgLAAQgUAAgMgNgAgQgeQgHAIgBAOIAyAAQAAgOgHgIQgGgHgLAAQgLAAgHAHg");
	this.shape_277.setTransform(518.6,192.3);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FFFFFF").s().p("AgXA9QgJgGgGgMQgFgLgBgPQABgXALgNQANgNATAAQAVAAAMANQALAOAAAWQAAAXgLAOQgMANgVAAQgMAAgLgGgAgVgKQgHAJAAASQAAASAIAKQAGAKAOAAQAOAAAIgKQAIgKgBgSQABgSgIgJQgIgKgOAAQgOAAgHAKgAgggrQABgLAGgGQAFgGAIAAQAEAAADABIAHAEIAHAEIAGABQAEAAACgCQACgDACgFIAJAAQgCAKgFAGQgFAGgIAAQgEAAgDgBIgHgEIgHgDQgCgCgDAAQgFAAgCACIgEAJg");
	this.shape_278.setTransform(508.1,190.6);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFFFFF").s().p("AgMBGIAAgJIAKABQAFgBAEgBQADgCAAgFQAAgDgDgDQgEgDgIgBIAGgOQgOgCgKgKQgLgOAAgWQAAgYAMgOQALgNAVAAIAOABIALAEIgFANIgKgEIgKgBQgdAAABAmQgBASAIAIQAHAKANAAQAMgBANgFIAAANQgKAFgOAAIABgCIgKAAIAAACIAIAAIABAAIgBAAIgIAAIAAgCIAKAAIgBACIgDAIQAPAEAAAMQAAAJgGAEQgHAFgNAAIgIgBg");
	this.shape_279.setTransform(498.6,194.4);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FFFFFF").s().p("AgeArQgIgIAAgOQAAgcAugBIAQgBIAAgGQAAgLgEgGQgFgFgLAAQgLAAgQAHIgEgLQAHgEAJgCQAIgCAIAAQARAAAIAHQAJAIAAARIAABBIgLAAIgDgOIgBAAQgHAKgHADQgHADgKAAQgPAAgIgHgAAJABQgQABgIAFQgIAEAAALQAAAIAFAEQAFAEAJAAQAMAAAIgIQAIgHAAgOIAAgIg");
	this.shape_280.setTransform(488.7,192.3);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFFFFF").s().p("AgGBFIAAiJIANAAIAACJg");
	this.shape_281.setTransform(481.7,190.2);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FFFFFF").s().p("AgcAlQgMgNAAgXQAAgXALgOQAMgNATAAQASAAAKAMQALAMAAATIAAAIIhBAAQAAASAIAIQAIAJAOAAQAPAAAQgGIAAANIgPAFQgGABgLAAQgUAAgNgNgAgQgeQgHAIgBAOIAxAAQABgOgHgIQgGgHgLAAQgLAAgHAHg");
	this.shape_282.setTransform(474.4,192.3);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFFFFF").s().p("AAcBBIgfg2IgbAAIAAA2IgOAAIAAiBIAiAAQAXAAAMAKQALAJAAASQAAAagaAIIAkA6gAgegBIAVAAQAPAAAHgGQAHgHABgMQgBgNgHgGQgIgFgPAAIgUAAg");
	this.shape_283.setTransform(464.5,190.6);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FFFFFF").s().p("AghAsIAAgOQAHAEAIACQAIACAHAAQALAAAGgEQAGgDAAgIQAAgGgFgEQgFgEgNgFQgNgEgGgEQgGgEgDgEQgCgFAAgHQAAgMAJgHQAKgGAQAAQAPAAAPAGIgFAMQgPgGgLAAQgKAAgFADQgFADAAAGQAAAEACADQACADAEACIAQAHQARAGAGAGQAGAGAAAKQAAANgKAIQgKAHgRAAQgTAAgLgGg");
	this.shape_284.setTransform(534.6,173.7);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FFFFFF").s().p("AgeArQgIgIAAgOQAAgcAugBIAQgBIAAgGQAAgLgEgGQgFgFgLAAQgLAAgQAHIgEgLQAHgEAJgCQAIgCAIAAQARAAAIAHQAJAIAAARIAABBIgLAAIgDgOIgBAAQgHAKgHADQgHADgKAAQgPAAgIgHgAAJABQgQABgIAFQgIAEAAALQAAAIAFAEQAFAEAJAAQAMAAAIgIQAIgHAAgOIAAgIg");
	this.shape_285.setTransform(524.9,173.7);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFFFFF").s().p("AgfA5QgLgNAAgYQAAgXALgOQALgNATAAQASAAALAOIABAAIgBgHIAAgGIAAgoIAPAAIAACJIgMAAIgCgNIgBAAQgKAPgTAAQgTAAgLgNgAgTgIQgHAJAAATQAAASAGAKQAHAJANAAQAOAAAHgIQAHgIAAgSIAAgDQAAgUgHgJQgHgJgOAAQgNAAgGAKg");
	this.shape_286.setTransform(514.3,171.8);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("AgeArQgIgIAAgOQAAgcAugBIAQgBIAAgGQAAgLgEgGQgFgFgLAAQgLAAgQAHIgEgLQAHgEAJgCQAIgCAIAAQARAAAIAHQAJAIAAARIAABBIgLAAIgDgOIgBAAQgHAKgHADQgHADgKAAQgPAAgIgHgAAJABQgQABgIAFQgIAEAAALQAAAIAFAEQAFAEAJAAQAMAAAIgIQAIgHAAgOIAAgIg");
	this.shape_287.setTransform(498.9,173.7);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FFFFFF").s().p("AgHBDIAAhhIAOAAIAABhgAgFgwQgCgDgBgFQABgEACgDQACgCADgBQADABADACQADADgBAEQABAFgDADQgDACgDAAQgDAAgCgCg");
	this.shape_288.setTransform(492,171.9);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFFFFF").s().p("AgbAxIAAhgIAMAAIACASIAAAAQAGgJAHgFQAHgFAKAAIALABIgCANIgLgBQgMAAgHAJQgJAKAAAOIAAAzg");
	this.shape_289.setTransform(486.7,173.6);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFFFFF").s().p("AgWAsQgLgGgFgMQgGgLAAgPQAAgXANgNQAMgNATAAQAVAAAMANQALAOAAAWQAAAXgLAOQgMANgVAAQgMAAgKgGgAgVgbQgHAJAAASQAAASAIAKQAHAKANAAQAPAAAHgKQAIgKAAgSQAAgSgIgJQgHgKgPAAQgNAAgIAKg");
	this.shape_290.setTransform(476.9,173.7);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFFFF").s().p("AgbAlQgNgNAAgXQAAgXALgOQAMgNATAAQASAAAKAMQALAMAAATIAAAIIhBAAQAAASAIAIQAIAJAOAAQAPAAAQgGIAAANIgPAFQgGABgLAAQgUAAgMgNgAgQgeQgHAIgBAOIAyAAQAAgOgHgIQgGgHgLAAQgLAAgHAHg");
	this.shape_291.setTransform(466.4,173.7);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFFFFF").s().p("AgHBBIAAhzIgoAAIAAgOIBfAAIAAAOIgoAAIAABzg");
	this.shape_292.setTransform(456.4,172.1);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FFFFFF").s().p("AgeArQgIgIAAgOQAAgcAugBIAQgBIAAgGQAAgLgEgGQgFgFgLAAQgLAAgQAHIgEgLQAHgEAJgCQAIgCAIAAQARAAAIAHQAJAIAAARIAABBIgLAAIgDgOIgBAAQgHAKgHADQgHADgKAAQgPAAgIgHgAAJABQgQABgIAFQgIAEAAALQAAAIAFAEQAFAEAJAAQAMAAAIgIQAIgHAAgOIAAgIg");
	this.shape_293.setTransform(337.3,201.6);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FFFFFF").s().p("AgXAlQgLgNAAgYQAAgXAMgNQALgNAVAAIAOABIALAEIgFAMIgKgDIgKgBQgdAAABAkQgBASAIAKQAHAJANAAQAMAAANgFIAAANQgKAFgPAAQgUAAgMgNg");
	this.shape_294.setTransform(328.5,201.6);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFFFFF").s().p("AgGBCIAAhfIANAAIAABfgAgFgwQgCgCAAgFQAAgFACgDQACgCADAAQADAAADACQACADAAAFQAAAFgCACQgDACgDAAQgCAAgDgCg");
	this.shape_295.setTransform(321.8,199.8);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FFFFFF").s().p("AghAsIAAgOQAHAEAIACQAIACAHAAQALAAAGgEQAGgDAAgIQAAgGgFgEQgFgEgNgFQgNgEgGgEQgGgEgDgEQgCgFAAgHQAAgMAJgHQAKgGAQAAQAPAAAPAGIgFAMQgPgGgLAAQgKAAgFADQgFADAAAGQAAAEACADQACADAEACIAQAHQARAGAGAGQAGAGAAAKQAAANgKAIQgKAHgRAAQgTAAgLgGg");
	this.shape_296.setTransform(315.2,201.6);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FFFFFF").s().p("AghAsIAAgOQAHAEAIACQAIACAHAAQALAAAGgEQAGgDAAgIQAAgGgFgEQgFgEgNgFQgNgEgGgEQgGgEgDgEQgCgFAAgHQAAgMAJgHQAKgGAQAAQAPAAAPAGIgFAMQgPgGgLAAQgKAAgFADQgFADAAAGQAAAEACADQACADAEACIAQAHQARAGAGAGQAGAGAAAKQAAANgKAIQgKAHgRAAQgTAAgLgGg");
	this.shape_297.setTransform(306.6,201.6);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FFFFFF").s().p("AgeA/QgIgIAAgOQAAgdAugBIAQgBIAAgGQAAgKgEgGQgFgFgLAAQgLAAgQAHIgEgLQAHgEAJgCQAIgCAIAAQARAAAIAHQAJAIAAAQIAABCIgLAAIgDgOIgBAAQgHAKgHADQgHADgKAAQgPAAgIgHgAAJAVQgQABgIAFQgIAEAAALQAAAIAFAEQAFAEAJAAQAMAAAIgIQAIgHAAgOIAAgIgAgIgoIAAgDIAIgNIAIgNIASAAIAAABQgEAGgIAJIgNANg");
	this.shape_298.setTransform(296.9,199.6);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FFFFFF").s().p("AgGBFIAAiJIANAAIAACJg");
	this.shape_299.setTransform(289.9,199.5);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FFFFFF").s().p("AggAxQgQgSAAgfQAAgTAIgQQAHgPAOgHQAOgJATABQATAAAQAHIgHANQgOgHgPAAQgUAAgNAOQgMAOAAAYQAAAZAMAOQAMAOAVAAQAOAAARgFIAAANQgOAGgTAAQgcgBgPgRg");
	this.shape_300.setTransform(282.2,200);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FFFFFF").s().p("AgeArQgIgIAAgOQAAgcAugBIAQgBIAAgGQAAgLgEgGQgFgFgLAAQgLAAgQAHIgEgLQAHgEAJgCQAIgCAIAAQARAAAIAHQAJAIAAARIAABBIgLAAIgDgOIgBAAQgHAKgHADQgHADgKAAQgPAAgIgHgAAJABQgQABgIAFQgIAEAAALQAAAIAFAEQAFAEAJAAQAMAAAIgIQAIgHAAgOIAAgIg");
	this.shape_301.setTransform(330.5,183);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FFFFFF").s().p("AgGBCIAAhgIANAAIAABggAgFgwQgCgCAAgFQAAgGACgCQADgDACAAQADAAADADQACACAAAGQAAAFgCACQgDACgDAAQgCAAgDgCg");
	this.shape_302.setTransform(323.6,181.2);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FFFFFF").s().p("AgbAxIAAhgIAMAAIACASIABAAQAFgJAHgFQAHgFAKAAIALABIgCANIgLgBQgLAAgIAJQgJAKABAOIAAAzg");
	this.shape_303.setTransform(318.2,182.9);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FFFFFF").s().p("AgXAsQgKgGgFgMQgGgLABgPQgBgXAMgNQAMgNAVAAQATAAANANQAMAOAAAWQAAAXgMAOQgMANgVAAQgMAAgLgGgAgVgbQgHAJAAASQAAASAHAKQAIAKANAAQAOAAAIgKQAHgKAAgSQAAgSgHgJQgIgKgOAAQgOAAgHAKg");
	this.shape_304.setTransform(308.5,183);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FFFFFF").s().p("AgcAlQgMgNAAgXQAAgXALgOQAMgNATAAQASAAAKAMQALAMAAATIAAAIIhBAAQAAASAIAIQAIAJAOAAQAPAAAQgGIAAANIgPAFQgGABgLAAQgUAAgNgNgAgQgeQgHAIgBAOIAxAAQABgOgHgIQgGgHgLAAQgLAAgHAHg");
	this.shape_305.setTransform(298,183);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FFFFFF").s().p("AgHBBIAAhzIgoAAIAAgOIBfAAIAAAOIgoAAIAABzg");
	this.shape_306.setTransform(288,181.4);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FFFFFF").s().p("AgeArQgIgIAAgOQAAgcAugBIAQgBIAAgGQAAgLgEgGQgFgFgLAAQgLAAgQAHIgEgLQAHgEAJgCQAIgCAIAAQARAAAIAHQAJAIAAARIAABBIgLAAIgDgOIgBAAQgHAKgHADQgHADgKAAQgPAAgIgHgAAJABQgQABgIAFQgIAEAAALQAAAIAFAEQAFAEAJAAQAMAAAIgIQAIgHAAgOIAAgIg");
	this.shape_307.setTransform(158.1,201.6);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FFFFFF").s().p("AgXAlQgLgNAAgYQAAgXAMgNQALgNAWAAIANABIALAEIgFAMIgKgDIgKgBQgcAAAAAkQAAASAGAKQAIAJANAAQAMAAANgFIAAANQgKAFgOAAQgVAAgMgNg");
	this.shape_308.setTransform(149.3,201.6);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FFFFFF").s().p("AgHBCIAAhfIAOAAIAABfgAgFgwQgDgCABgFQgBgFADgDQADgCACAAQAEAAACACQACADABAFQgBAFgCACQgCACgEAAQgCAAgDgCg");
	this.shape_309.setTransform(142.5,199.8);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FFFFFF").s().p("AgPBFIAAhUIgRAAIAAgHIARgFIAAgGQAAgjAeAAQAIAAAKADIgDAMQgJgDgGAAQgIAAgEAFQgDAGAAAMIAAAGIAXAAIAAAMIgXAAIAABUg");
	this.shape_310.setTransform(137.6,199.5);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FFFFFF").s().p("AgQBFIAAhgIAPAAIAABggAgQgnIAAgDIAJgNIAHgNIARAAIAAABQgDAGgIAJIgMANg");
	this.shape_311.setTransform(132.7,199.5);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#FFFFFF").s().p("AgOAfIAAg5IgOAAIAAgHIAOgGIAHgVIAHAAIAAAXIAcAAIAAALIgcAAIAAA4QAAAJAEAFQAEAEAIAAIAHAAIAGgBIAAALQgDABgEABIgJABQgbAAAAgeg");
	this.shape_312.setTransform(126.3,200.5);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FFFFFF").s().p("AAaAxIAAg9QAAgMgGgGQgFgGgLAAQgPAAgHAIQgHAIAAATIAAAyIgOAAIAAhgIAMAAIACAOIAAAAQAFgIAIgDQAJgEAJAAQARAAAJAIQAIAIABATIAAA+g");
	this.shape_313.setTransform(117.6,201.5);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FFFFFF").s().p("AgcAlQgMgNAAgXQAAgXALgOQAMgNATAAQASAAALAMQAKAMAAATIAAAIIhBAAQAAASAIAIQAIAJAOAAQAQAAAPgGIAAANIgOAFQgIABgKAAQgUAAgNgNgAgQgeQgHAIgBAOIAxAAQAAgOgGgIQgGgHgLAAQgLAAgHAHg");
	this.shape_314.setTransform(107,201.6);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FFFFFF").s().p("AgGBCIAAhfIANAAIAABfgAgFgwQgDgCABgFQgBgFADgDQADgCACAAQADAAADACQADADAAAFQAAAFgDACQgDACgDAAQgCAAgDgCg");
	this.shape_315.setTransform(99.7,199.8);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#FFFFFF").s().p("AggAxQgQgSAAgfQAAgTAHgQQAIgPAOgHQAOgJASABQAUAAAQAHIgHANQgOgHgPAAQgUAAgNAOQgMAOAAAYQAAAZAMAOQAMAOAVAAQAOAAARgFIAAANQgOAGgTAAQgcgBgPgRg");
	this.shape_316.setTransform(91.9,200);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FFFFFF").s().p("AgWAsQgKgGgGgMQgGgLAAgPQAAgXANgNQAMgNATAAQAVAAAMANQALAOAAAWQAAAXgLAOQgMANgVAAQgMAAgKgGgAgVgbQgHAJAAASQAAASAIAKQAGAKAOAAQAPAAAHgKQAIgKAAgSQAAgSgIgJQgHgKgPAAQgNAAgIAKg");
	this.shape_317.setTransform(180.3,183);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FFFFFF").s().p("AgeA8QgIgIAAgOQAAgdAugBIAQgBIAAgGQAAgKgEgGQgFgFgLAAQgLAAgQAHIgEgLQAHgEAJgCQAIgCAIAAQARAAAIAHQAJAIAAARIAABBIgLAAIgDgOIgBAAQgHAKgHADQgHADgKAAQgPAAgIgHgAAJASQgQABgIAFQgIAEAAALQAAAIAFAEQAFAEAJAAQAMAAAIgIQAIgHAAgOIAAgIgAgdgrQABgLAFgGQAFgGAJAAQAEAAADABIAHAEIAGAEIAGABQAFAAACgCQACgDABgFIAJAAQgBAKgFAGQgFAGgJAAIgHgBIgHgEIgGgDQgDgCgDAAQgEAAgDACIgDAJg");
	this.shape_318.setTransform(169.4,181.3);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FFFFFF").s().p("AgMBGIAAgJIAJABQAGgBAEgBQAEgCAAgFQAAgEgEgCQgEgCgIgCIAGgOQgOgCgJgKQgMgNAAgXQAAgZAMgNQALgNAWAAIANABIALAEIgEAMIgLgDIgKgBQgcAAgBAmQAAASAIAIQAHAKANAAQAMgBANgFIAAANQgKAFgNAAIABgCIgKAAIgBACIAIAAIACAAIgFAIQAQAEABAMQAAAIgIAGQgGAEgMAAIgJgBgAALAdIAAAAgAALAdgAAJAdIgIAAIABgCIAKAAIgBACIgCAAg");
	this.shape_319.setTransform(160.6,185.1);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FFFFFF").s().p("AgeArQgIgIAAgOQAAgcAugBIAQgBIAAgGQAAgLgEgGQgFgFgLAAQgLAAgQAHIgEgLQAHgEAJgCQAIgCAIAAQARAAAIAHQAJAIAAARIAABBIgLAAIgDgOIgBAAQgHAKgHADQgHADgKAAQgPAAgIgHgAAJABQgQABgIAFQgIAEAAALQAAAIAFAEQAFAEAJAAQAMAAAIgIQAIgHAAgOIAAgIg");
	this.shape_320.setTransform(150.7,183);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FFFFFF").s().p("AgbAxIAAhgIAMAAIACASIABAAQAFgJAHgFQAHgFAJAAIAMABIgCANIgLgBQgLAAgIAJQgIAKAAAOIAAAzg");
	this.shape_321.setTransform(142.9,182.9);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FFFFFF").s().p("AgOAfIAAg5IgOAAIAAgHIAOgGIAHgVIAHAAIAAAXIAcAAIAAALIgcAAIAAA4QAAAJAEAFQAEAEAIAAIAHAAIAGgBIAAALQgDABgEABIgJABQgbAAAAgeg");
	this.shape_322.setTransform(135.4,182);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FFFFFF").s().p("AghAsIAAgOQAHAEAIACQAIACAHAAQALAAAGgEQAGgDAAgIQAAgGgFgEQgFgEgNgFQgNgEgGgEQgGgEgDgEQgCgFAAgHQAAgMAJgHQAKgGAQAAQAPAAAPAGIgFAMQgPgGgLAAQgKAAgFADQgFADAAAGQAAAEACADQACADAEACIAQAHQARAGAGAGQAGAGAAAKQAAANgKAIQgKAHgRAAQgTAAgLgGg");
	this.shape_323.setTransform(128,183);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FFFFFF").s().p("AgGBCIAAhgIANAAIAABggAgFgwQgDgCAAgFQAAgGADgCQADgDACAAQADAAADADQACACAAAGQAAAFgCACQgDACgDAAQgCAAgDgCg");
	this.shape_324.setTransform(121.4,181.2);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FFFFFF").s().p("AAaAxIAAg9QAAgMgGgGQgFgGgLAAQgPAAgHAIQgHAIAAATIAAAyIgOAAIAAhgIALAAIADAOIAAAAQAFgIAIgDQAJgEAJAAQARAAAJAIQAIAIABATIAAA+g");
	this.shape_325.setTransform(113.6,182.9);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FFFFFF").s().p("AgHBCIAAhgIAOAAIAABggAgFgwQgCgCgBgFQABgGACgCQACgDADAAQAEAAACADQACACABAGQgBAFgCACQgCACgEAAQgDAAgCgCg");
	this.shape_326.setTransform(105.7,181.2);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FFFFFF").s().p("AA3AxIAAg+QgBgLgEgGQgFgGgLAAQgOAAgGAIQgHAIAAAQIAAA1IgNAAIAAg+QAAgLgFgGQgFgGgLAAQgOAAgGAIQgHAJAAASIAAAyIgOAAIAAhgIAMAAIACAOIABAAQAEgHAIgEQAIgEAJAAQAWAAAHAQIAAAAQAFgIAHgEQAJgEALAAQAQAAAIAIQAIAIAAATIAAA+g");
	this.shape_327.setTransform(95,182.9);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FFFFFF").s().p("AgfA5QgLgNAAgYQAAgXALgOQALgNATAAQASAAALAOIABAAIgBgHIAAgGIAAgoIAPAAIAACJIgMAAIgCgNIgBAAQgKAPgTAAQgTAAgLgNgAgTgIQgHAJAAATQAAASAGAKQAHAJANAAQAOAAAHgIQAHgIAAgSIAAgDQAAgUgHgJQgHgJgOAAQgNAAgGAKg");
	this.shape_328.setTransform(80.6,181.1);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FFFFFF").s().p("AAqBBIgQgpIgzAAIgQApIgPAAIAziBIALAAIAzCBgAgFgdIgPAoIApAAIgPgoIgGgTQgBAJgEAKg");
	this.shape_329.setTransform(69.6,181.4);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#033F8F").s().p("AhCBkIAAgYQANAGAPADQAQADAPAAQAYAAANgJQAMgKAAgQQAAgMgEgGQgFgIgKgGQgLgGgUgHQgegKgNgOQgMgPAAgYQAAgZASgOQATgPAdAAQAgAAAbAMIgIAVQgagKgZgBQgTAAgLAJQgLAIAAAQQAAAKAEAIQAEAHAKAFQAJAHATAHQAiAKANAOQAMAOAAAWQAAAdgUAPQgVAQgiAAQgmAAgUgKg");
	this.shape_330.setTransform(388.8,41.7);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#033F8F").s().p("Ag7BrIAAjVIB2AAIAAAWIhdAAIAABFIBYAAIAAAVIhYAAIAABPIBdAAIAAAWg");
	this.shape_331.setTransform(373.8,41.7);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#033F8F").s().p("AgLBrIAAi/IhEAAIAAgWICfAAIAAAWIhEAAIAAC/g");
	this.shape_332.setTransform(357.6,41.7);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#033F8F").s().p("AA3BrIh0iyIgBAAQACAfABAaIAAB5IgYAAIAAjVIAdAAIBzCyIABAAIgBgaIgBgeIAAh6IAXAAIAADVg");
	this.shape_333.setTransform(339.1,41.7);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#033F8F").s().p("Ag6BrIAAjVIB2AAIAAAWIheAAIAABFIBYAAIAAAVIhYAAIAABPIBeAAIAAAWg");
	this.shape_334.setTransform(321,41.7);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#033F8F").s().p("Ag9BRQgbgdAAg0QAAggANgZQAOgaAZgNQAZgNAhAAQAiAAAeANIgKAVQgdgLgbgBQgmAAgWAYQgWAXAAAoQAAAsAWAWQAVAWAoAAQAWAAAVgFIAAhCIgwAAIAAgVIBJAAIAABnQgRAGgSACQgRADgXAAQgwAAgbgdg");
	this.shape_335.setTransform(302,41.7);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#033F8F").s().p("AAuBrIgzhZIgtAAIAABZIgYAAIAAjVIA6AAQAnAAASAQQATAOAAAfQAAAqgrAOIA6BggAgygDIAjAAQAZAAAMgKQAMgKAAgVQAAgVgMgKQgNgJgaAAIghAAg");
	this.shape_336.setTransform(284.3,41.7);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#033F8F").s().p("Ag7BrIAAjVIB2AAIAAAWIhdAAIAABFIBYAAIAAAVIhYAAIAABPIBdAAIAAAWg");
	this.shape_337.setTransform(267.1,41.7);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#033F8F").s().p("ABRBrIAAiJQAAgXACgcIgBAAIhJC8IgTAAIhJi8IgBAAQACAWAAAfIAACHIgXAAIAAjVIAmAAIBDCwIAAAAIBFiwIAlAAIAADVg");
	this.shape_338.setTransform(245.6,41.7);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#033F8F").s().p("Ag6BrIAAjVIB2AAIAAAWIheAAIAABFIBYAAIAAAVIhYAAIAABPIBeAAIAAAWg");
	this.shape_339.setTransform(225.4,41.7);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#033F8F").s().p("AhCBkIAAgYQANAGAPADQAQADAPAAQAYAAANgJQAMgKAAgQQAAgMgEgGQgFgIgKgGQgLgGgUgHQgegKgNgOQgMgPAAgYQAAgZASgOQATgPAdAAQAgAAAbAMIgIAVQgagKgZgBQgTAAgLAJQgLAIAAAQQAAAKAEAIQAEAHAKAFQAJAHATAHQAiAKANAOQAMAOAAAWQAAAdgUAPQgVAQgiAAQgmAAgUgKg");
	this.shape_340.setTransform(202.5,41.7);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#033F8F").s().p("AA3BrIh0iyIgBAAQADAfAAAaIAAB5IgYAAIAAjVIAcAAIB0CyIABAAIgBgaIgBgeIAAh6IAYAAIAADVg");
	this.shape_341.setTransform(184,41.7);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#033F8F").s().p("Ag7BrIAAjVIB2AAIAAAWIhdAAIAABFIBYAAIAAAVIhYAAIAABPIBdAAIAAAWg");
	this.shape_342.setTransform(165.9,41.7);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#033F8F").s().p("Ag9BRQgbgdAAg0QAAggANgZQAOgaAZgNQAZgNAhAAQAiAAAeANIgKAVQgdgLgbgBQgmAAgWAYQgWAXAAAoQAAAsAWAWQAVAWAoAAQAWAAAVgFIAAhCIgwAAIAAgVIBJAAIAABnQgRAGgSACQgRADgXAAQgwAAgbgdg");
	this.shape_343.setTransform(146.9,41.7);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#033F8F").s().p("ABFBrIgbhEIhUAAIgbBEIgZAAIBVjVIAUAAIBUDVgAgIgwIgaBBIBFAAIgZhBQgFgNgFgSQgCAOgGARg");
	this.shape_344.setTransform(127.7,41.7);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#033F8F").s().p("AhUBrIAAjVIBBAAQAxAAAcAcQAbAbAAAyQAAA0gcAcQgdAcg1AAgAg8BVIAfAAQArABAXgWQAWgWAAgqQAAgqgVgVQgVgVgogBIglAAg");
	this.shape_345.setTransform(108.9,41.7);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#033F8F").s().p("AAuBrIgzhZIgtAAIAABZIgYAAIAAjVIA6AAQAnAAASAQQATAOAAAfQAAAqgrAOIA6BggAgygDIAjAAQAZAAAMgKQAMgKAAgVQAAgVgMgKQgNgJgaAAIghAAg");
	this.shape_346.setTransform(90.3,41.7);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#033F8F").s().p("AhIBRQgZgdAAg0QAAg0AZgcQAagdAuAAQAuAAAaAdQAaAeAAAyQAAAzgaAeQgaAdguAAQguAAgagdgAg1hAQgSAWAAAqQAAArASAXQATAWAiAAQAkAAASgWQASgWAAgsQAAgrgSgVQgSgXgkAAQgiAAgTAXg");
	this.shape_347.setTransform(69.2,41.7);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#033F8F").s().p("AhJBrIAAjVIA8AAQAqAAATANQATAMAAAcQAAATgKAMQgLANgVADIAAACQAxAHAAArQAAAdgTAQQgUAQgiAAgAgxBWIAtAAQAZAAANgKQANgKABgVQAAgVgOgJQgNgJgaAAIgsAAgAgxgOIAqAAQAZAAAMgJQALgIAAgUQAAgSgNgHQgNgJgbAAIglAAg");
	this.shape_348.setTransform(49.5,41.7);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#033F8F").s().p("ABFBrIgbhEIhUAAIgbBEIgZAAIBVjVIAUAAIBUDVgAgIgwIgaBBIBFAAIgZhBQgFgNgFgSQgCAOgGARg");
	this.shape_349.setTransform(30.7,41.7);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("#666666").ss(2,1,1).p("AAAkLIAAIX");
	this.shape_350.setTransform(410.5,40.8,1.237,0.741);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#666666").s().p("AA+BSIAAhpIACgnIgBAAIg4CQIgPAAIg3iQIgBAAQABARAAAXIAABoIgRAAIAAijIAdAAIAzCHIAAAAIA1iHIAcAAIAACjg");
	this.shape_351.setTransform(750.6,41.5);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#666666").s().p("AhABSIAAijIAyAAQAlAAAVAVQAVAWAAAlQABAogXAVQgWAWgoAAgAguBCIAYAAQAhAAARgRQARgRAAggQAAgggQgQQgQgRgfAAIgcAAg");
	this.shape_352.setTransform(732.3,41.5);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#666666").s().p("AA1BSIgVg0IhAAAIgUA0IgUAAIBBijIAPAAIBBCjgAgGglIgUAyIA1AAIgUgyIgHgYIgGAYg");
	this.shape_353.setTransform(716.3,41.5);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#666666").s().p("AgmA2QgKgJAAgSQAAgjA6gDIAVAAIAAgIQAAgOgGgHQgGgHgOAAQgOAAgUAJIgFgOQAJgFALgCQAKgEAKAAQAWABALAJQAKAKAAAWIAABSIgNAAIgEgRIgBAAQgJAMgJAEQgJADgNAAQgSAAgLgJgAAMACQgVAAgKAHQgKAGAAAMQAAALAGAFQAHAFALABQAQAAAKgKQAKgJAAgSIAAgLg");
	this.shape_354.setTransform(696.2,43.6);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#666666").s().p("AgnBIQgOgQAAgfQAAgdAOgRQANgRAYAAQAYAAANASIABAAIAAgJIgBgIIAAgyIATAAIAACtIgPAAIgDgQIgBAAQgNASgYAAQgYAAgNgQgAgZgKQgJAMAAAXQAAAYAJAMQAIAMARAAQASAAAJgKQAIgLAAgXIAAgEQAAgZgIgLQgJgLgSAAQgRAAgIAMg");
	this.shape_355.setTransform(682.9,41.1);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#666666").s().p("AgrA4IAAgRQAJAEALADQAKACAKABQANgBAHgEQAJgFgBgJQABgHgHgGQgGgFgRgHQgRgFgHgFQgIgFgDgGQgEgGAAgIQAAgQANgIQAMgJAUAAQAUABATAHIgGAQQgTgIgPAAQgNAAgGAEQgHAEAAAIQAAAEADAEQACADAGADIAVAJQAVAIAIAHQAHAJAAAMQABARgNAJQgNAJgWAAQgZABgOgIg");
	this.shape_356.setTransform(664.8,43.6);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#666666").s().p("AgmA2QgKgJAAgSQAAgjA6gDIAVAAIAAgIQAAgOgGgHQgGgHgOAAQgOAAgUAJIgFgOQAJgFALgCQAKgEAKAAQAWABALAJQAKAKAAAWIAABSIgNAAIgEgRIgBAAQgJAMgJAEQgJADgNAAQgSAAgLgJgAAMACQgVAAgKAHQgKAGAAAMQAAALAGAFQAHAFALABQAQAAAKgKQAKgJAAgSIAAgLg");
	this.shape_357.setTransform(652.5,43.6);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#666666").s().p("AgJBUIAAh6IASAAIAAB6gAgHg+QgDgDAAgGQAAgGADgDQADgDAEAAQAEAAAEADQADADAAAGQAAAGgDADQgEADgEAAQgEAAgDgDg");
	this.shape_358.setTransform(643.6,41.3);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#666666").s().p("AgjA+IAAh5IAQAAIACAWIABAAQAHgMAJgGQAKgHALAAIAOABIgCASIgOgCQgOABgKAMQgLALAAATIAABAg");
	this.shape_359.setTransform(636.8,43.5);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#666666").s().p("AgdA4QgMgHgIgPQgGgPgBgTQAAgdAPgRQAPgRAaAAQAaAAAPARQAPARAAAdQAAAegPARQgPAQgaAAQgQABgNgIgAgbgjQgKAMABAXQgBAYAKAMQAKAMARAAQASAAAKgMQAJgMAAgYQAAgXgJgMQgKgMgSAAQgSAAgJAMg");
	this.shape_360.setTransform(624.4,43.6);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#666666").s().p("AgjAvQgQgRAAgdQAAgcAPgSQAOgSAYAAQAXAAANAQQAOAPAAAYIAAAMIhUAAQAAAVALALQAKAMATAAQATAAATgJIAAARIgSAGQgJABgMAAQgaAAgQgQgAgVgmQgJAKgCARIBAAAQAAgRgIgKQgIgJgPAAQgNAAgJAJg");
	this.shape_361.setTransform(611.1,43.6);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#666666").s().p("AgJBSIAAiSIg0AAIAAgRIB6AAIAAARIg0AAIAACSg");
	this.shape_362.setTransform(598.2,41.5);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#666666").s().p("AgrA4IAAgRQAKAEAKADQAKACAJABQAOgBAIgEQAHgFABgJQAAgHgHgGQgGgFgRgHQgRgFgHgFQgIgFgDgGQgDgGgBgIQABgQALgIQANgJAUAAQAUABATAHIgGAQQgTgIgPAAQgMAAgHAEQgHAEAAAIQAAAEACAEQADADAGADIAVAJQAVAIAIAHQAIAJAAAMQgBARgNAJQgMAJgWAAQgZABgOgIg");
	this.shape_363.setTransform(580.5,43.6);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#666666").s().p("AgmA2QgKgJAAgSQAAgjA6gDIAVAAIAAgIQAAgOgGgHQgGgHgOAAQgOAAgUAJIgFgOQAJgFALgCQAKgEAKAAQAWABALAJQAKAKAAAWIAABSIgNAAIgEgRIgBAAQgJAMgJAEQgJADgNAAQgSAAgLgJgAAMACQgVAAgKAHQgKAGAAAMQAAALAGAFQAHAFALABQAQAAAKgKQAKgJAAgSIAAgLg");
	this.shape_364.setTransform(568.1,43.6);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#666666").s().p("AgnBIQgOgQAAgfQAAgdAOgRQANgRAYAAQAYAAANASIABAAIAAgJIgBgIIAAgyIATAAIAACtIgPAAIgDgQIgBAAQgNASgYAAQgYAAgNgQgAgZgKQgJAMAAAXQAAAYAJAMQAJAMAQAAQASAAAJgKQAIgLAAgXIAAgEQAAgZgIgLQgJgLgSAAQgQAAgJAMg");
	this.shape_365.setTransform(554.8,41.1);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#666666").s().p("AgmA2QgKgJAAgSQAAgjA6gDIAVAAIAAgIQAAgOgGgHQgGgHgOAAQgOAAgUAJIgFgOQAJgFALgCQAKgEAKAAQAWABALAJQAKAKAAAWIAABSIgNAAIgEgRIgBAAQgJAMgJAEQgJADgNAAQgSAAgLgJgAAMACQgVAAgKAHQgKAGAAAMQAAALAGAFQAHAFALABQAQAAAKgKQAKgJAAgSIAAgLg");
	this.shape_366.setTransform(535.3,43.6);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#666666").s().p("AgJBUIAAh6IASAAIAAB6gAgGg+QgEgDAAgGQAAgGAEgDQADgDADAAQAFAAADADQADADAAAGQAAAGgDADQgDADgFAAQgDAAgDgDg");
	this.shape_367.setTransform(526.4,41.3);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#666666").s().p("AgsBRQgNgJAAgQQAAgMAHgHQAHgJANgCQgEgDgDgEQgEgEAAgGQAAgIAEgEQADgFAIgEQgJgEgHgJQgFgKAAgMQgBgVAMgKQANgLAWAAQAIAAAJACIAqAAIAAAMIgXADQADAEADAGQACAGAAAIQAAASgMALQgMALgVAAIgKgBQgNAGAAAIQAAAGAFACQAEADAKAAIAVAAQAUgBAKAJQALAJAAAPQAAAVgQALQgRAKgeAAQgYAAgNgJgAggAmQgHAHAAAKQAAALAIAFQAJAFAPAAQAXAAALgHQAMgHgBgMQABgKgHgEQgGgEgRAAIgVAAQgNAAgHAGgAgWhFQgHAIAAANQAAAOAHAGQAIAHANgBQAaAAAAgaQAAgcgbAAQgNABgHAGg");
	this.shape_368.setTransform(517.2,46.2);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#666666").s().p("AgdA4QgMgHgIgPQgHgPAAgTQABgdAPgRQAOgRAaAAQAaAAAPARQAQARAAAdQAAAegQARQgPAQgaAAQgQABgNgIgAgbgjQgKAMAAAXQAAAYAKAMQAKAMARAAQASAAAKgMQAJgMAAgYQAAgXgJgMQgKgMgSAAQgRAAgKAMg");
	this.shape_369.setTransform(504,43.6);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#666666").s().p("AgJBXIAAitIASAAIAACtg");
	this.shape_370.setTransform(494.2,41);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#666666").s().p("AgdA4QgMgHgIgPQgGgPgBgTQAAgdAPgRQAPgRAaAAQAaAAAPARQAQARAAAdQAAAegQARQgPAQgaAAQgQABgNgIgAgbgjQgKAMAAAXQAAAYAKAMQAKAMARAAQASAAAKgMQAJgMAAgYQAAgXgJgMQgKgMgSAAQgSAAgJAMg");
	this.shape_371.setTransform(484.3,43.6);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#666666").s().p("AAhA+IAAhOQAAgPgHgHQgHgIgPAAQgRAAgKAKQgJALABAYIAAA/IgTAAIAAh5IAPAAIADAQIABAAQAGgIAKgFQAKgFAMgBQAWAAALALQALALAAAXIAABPg");
	this.shape_372.setTransform(470.4,43.5);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#666666").s().p("AgdA4QgNgHgGgPQgIgPABgTQgBgdAPgRQAQgRAZAAQAaAAAPARQAPARAAAdQAAAegPARQgPAQgaAAQgQABgNgIgAgbgjQgJAMAAAXQAAAYAJAMQAJAMASAAQASAAAJgMQAKgMAAgYQAAgXgKgMQgJgMgSAAQgRAAgKAMg");
	this.shape_373.setTransform(456.4,43.6);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#666666").s().p("AgiA+IAAh5IAPAAIACAWIABAAQAHgMAJgGQAJgHAMAAIAOABIgCASIgNgCQgPABgKAMQgKALAAATIAABAg");
	this.shape_374.setTransform(445.5,43.5);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#666666").s().p("AgpA/QgUgWAAgpQAAgYAKgTQAJgTASgLQASgKAXAAQAaAAATAJIgIARQgSgJgTAAQgbAAgPASQgQASAAAeQABAgAPASQAOASAcAAQAQAAAXgHIAAARQgRAGgaAAQgiAAgUgVg");
	this.shape_375.setTransform(433.1,41.5);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("#CCCCCC").ss(5,0,0,3).p("Eg/gAAAMB/BAAA");
	this.shape_376.setTransform(585,78.9,1.439,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111}]}).wait(1));

	// bg
	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#FFFFFF").s().p("EhbZAzaMAAAhmzMC2zAAAMAAABmzg");
	this.shape_377.setTransform(585,39,1,0.119);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f().s("rgba(52,127,150,0.2)").ss(3,1,1).p("AJZxVMgSxAir");
	this.shape_378.setTransform(1110.4,542.2);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f().s("rgba(52,127,150,0.2)").ss(3,1,1).p("AOX6hMgctA1D");
	this.shape_379.setTransform(1078.6,483.4);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f().s("rgba(52,127,150,0.2)").ss(3,1,1).p("EATQgjjMgmfBHH");
	this.shape_380.setTransform(1046.2,425.6);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f().s("rgba(52,127,150,0.2)").ss(3,1,1).p("EAYPgsvMgwdBZf");
	this.shape_381.setTransform(1014.3,366.8);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f().s("rgba(52,127,150,0.2)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_382.setTransform(972.4,326.6,1,1.151,28.4);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f().s("rgba(52,127,150,0.2)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_383.setTransform(908.7,326.6,1,1.151,28.4);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f().s("rgba(52,127,150,0.2)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_384.setTransform(845,326.6,1,1.151,28.4);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f().s("rgba(52,127,150,0.2)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_385.setTransform(781.3,326.6,1,1.151,28.4);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f().s("rgba(52,127,150,0.2)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_386.setTransform(717.6,326.6,1,1.151,28.4);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f().s("rgba(52,127,150,0.2)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_387.setTransform(653.9,326.6,1,1.151,28.4);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f().s("rgba(52,127,150,0.2)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_388.setTransform(590.2,326.6,1,1.151,28.4);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f().s("rgba(52,127,150,0.2)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_389.setTransform(526.5,326.6,1,1.151,28.4);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f().s("rgba(52,127,150,0.2)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_390.setTransform(462.8,326.6,1,1.151,28.4);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f().s("rgba(52,127,150,0.2)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_391.setTransform(399.1,326.6,1,1.151,28.4);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f().s("rgba(52,127,150,0.2)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_392.setTransform(335.4,326.6,1,1.151,28.4);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f().s("rgba(52,127,150,0.2)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_393.setTransform(271.7,326.6,1,1.151,28.4);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f().s("rgba(52,127,150,0.2)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_394.setTransform(208,326.6,1,1.151,28.4);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f().s("rgba(52,127,150,0.2)").ss(3,1,1).p("EAZLgueMgyVBc9");
	this.shape_395.setTransform(160,297.5);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f().s("rgba(52,127,150,0.2)").ss(3,1,1).p("EAUMglSMgoXBKl");
	this.shape_396.setTransform(128.2,238.7);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f().s("rgba(52,127,150,0.2)").ss(3,1,1).p("APO8GMgebA4N");
	this.shape_397.setTransform(96.3,179.9);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f().s("rgba(52,127,150,0.2)").ss(3,1,1).p("AKKywMgUTAlh");
	this.shape_398.setTransform(65,120.1);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#122C34").s().p("EhbZAzaMAAAhmzMC2zAAAMAAABmzg");
	this.shape_399.setTransform(585,329);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tela3, rect = new cjs.Rectangle(-2.5,-1.5,1175,659.5), [rect]);


(lib.onda5_img = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.icons5.alpha = 0;
		this.txt5.alpha = 0;
		this.onda_final5.alpha = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// onda_final
	this.onda_final5 = new lib.onda_final5();
	this.onda_final5.parent = this;
	this.onda_final5.setTransform(75.4,77.1,1.395,1.395,0,0,0,50.6,51.8);

	this.timeline.addTween(cjs.Tween.get(this.onda_final5).wait(1));

	// img
	this.instance = new lib.wavesvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(73.2,70.1,0.388,0.388,0,0,0,150.1,110.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AKhAAQAAEWjFDGQjGDFkWAAQkVAAjGjFQjFjGAAkWQAAkWDFjFQDGjFEVAAQEWAADGDFQDFDFAAEWg");
	this.shape.setTransform(75.6,75.6,1.123,1.123);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AnbHcQjEjGgBkWQABkVDEjGQDGjEEVgBQEWABDGDEQDEDGABEVQgBEWjEDGQjGDFkWAAQkVAAjGjFg");
	this.shape_1.setTransform(75.6,75.6,1.123,1.123);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// txt
	this.icons5 = new lib.icons5();
	this.icons5.parent = this;
	this.icons5.setTransform(0,0,1.254,1.254);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgfApQgIgHAAgOQAAgOALgHQALgHAVgBIAQAAIAAgFQAAgJgEgFQgEgEgJAAQgHAAgGACIgNAFIgGgOQAIgEAJgCQAIgDAHAAQATAAAJAIQAJAIAAARIAAA+IgOAAIgFgNIAAAAQgHAJgGADQgIADgJAAQgOAAgIgIgAAIADQgNAAgGAFQgHAEAAAIQAAAHADADQAFAEAHAAQAKAAAHgGQAGgHAAgLIAAgIg");
	this.shape_2.setTransform(124.3,166.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AggA2QgKgNAAgXQAAgVAKgOQAKgNASABQARgBAKAOIABAAIgCgPIAAgjIAVAAIAACEIgQAAIgDgNIgCAAQgJAOgSAAQgRAAgKgNgAgQgEQgFAHAAAQQAAAPAFAJQAGAIAKAAQAMAAAGgHQAGgHAAgPIAAgDQAAgSgGgGQgGgIgMAAQgKAAgGAJg");
	this.shape_3.setTransform(113.8,164.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AAVAwIAAg5QAAgLgEgFQgEgFgKgBQgMAAgGAIQgFAHAAARIAAAvIgUAAIAAhdIAPAAIADAMIABAAQAEgGAIgEQAIgEAIAAQAiAAAAAiIAAA9g");
	this.shape_4.setTransform(103.1,166.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgqAwQgPgRAAgfQAAgeAPgRQAPgQAbAAQAcAAAPARQAPARAAAdQAAAegPASQgPAQgcAAQgbAAgPgQgAgaghQgKALAAAWQAAAXAJAMQAKAMARAAQASAAAJgMQAKgLAAgYQAAgWgKgLQgJgNgSAAQgRAAgJANg");
	this.shape_5.setTransform(90.7,164.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgfApQgIgHAAgOQAAgOALgHQALgHAVgBIAQAAIAAgFQAAgJgEgFQgEgEgJAAQgHAAgGACIgNAFIgGgOQAIgEAJgCQAIgDAIAAQARAAAKAIQAJAIAAARIAAA+IgPAAIgDgNIgBAAQgHAJgHADQgHADgJAAQgOAAgIgIgAAIADQgNAAgGAFQgHAEAAAIQAAAHADADQAFAEAHAAQAKAAAHgGQAGgHAAgLIAAgIg");
	this.shape_6.setTransform(74,166.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgRAcIAAgxIgMAAIAAgJIANgHIAHgUIAMAAIAAAVIAaAAIAAAPIgaAAIAAAxQAAAHADAEQAEADAGAAQAHAAAHgCIAAAPIgIADIgLAAQgcAAAAgeg");
	this.shape_7.setTransform(65.7,165.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AAVAwIAAg5QAAgLgEgFQgEgFgKgBQgMAAgGAIQgFAHAAARIAAAvIgUAAIAAhdIAPAAIADAMIABAAQAEgGAIgEQAIgEAIAAQAiAAAAAiIAAA9g");
	this.shape_8.setTransform(56.8,166.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgJBBIAAhdIATAAIAABdgAgHgtQgDgDAAgFQAAgFADgDQADgDAEAAQAFAAADADQADADAAAFQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_9.setTransform(48.8,164.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AggAnQgIgIAAgRIAAg9IAUAAIAAA5QAAALAEAFQAEAGAKAAQALAAAGgIQAHgHAAgRIAAgvIATAAIAABdIgQAAIgCgMIgBAAQgEAGgIAEQgIAEgIAAQgSAAgIgJg");
	this.shape_10.setTransform(40.9,166.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AAbBOIgYgcIgDAAQgbAAgPgQQgPgRAAgeQAAgfAPgRQAPgQAbAAQAcAAAPARQAPARAAAeQAAAWgIAPQgJAPgRAHIAeAggAgagvQgKALAAAXQAAAWAJAMQAKAMARAAQASAAAJgMQAKgLAAgXQAAgXgKgLQgJgNgSAAQgRAAgJANg");
	this.shape_11.setTransform(28.5,166.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ArIJfIAAw5QAAg3AngmQAngnA2AAIUMAAIAAQ5QAAA3gmAmQgnAng2AAg");
	this.shape_12.setTransform(75.6,119.2);

	this.txt5 = new lib.txt5();
	this.txt5.parent = this;
	this.txt5.setTransform(77.2,66,1,1,0,0,0,63.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt5},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.icons5}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.onda5_img, rect = new cjs.Rectangle(-1.2,-1.2,153.4,200.3), [rect]);


(lib.onda4_img = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.icons4.alpha = 0;
		this.txt4.alpha = 0;
		this.onda_final4.alpha = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// onda_final
	this.onda_final4 = new lib.onda_final4();
	this.onda_final4.parent = this;
	this.onda_final4.setTransform(75.4,77.1,1.395,1.395,0,0,0,50.6,51.8);

	this.timeline.addTween(cjs.Tween.get(this.onda_final4).wait(1));

	// img
	this.instance = new lib.wavesvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(73.2,70.1,0.388,0.388,0,0,0,150.1,110.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AKhAAQAAEWjFDGQjGDFkWAAQkVAAjGjFQjFjGAAkWQAAkWDFjFQDGjFEVAAQEWAADGDFQDFDFAAEWg");
	this.shape.setTransform(75.6,75.6,1.123,1.123);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AnbHcQjEjGgBkWQABkVDEjGQDGjEEVgBQEWABDGDEQDEDGABEVQgBEWjEDGQjGDFkWAAQkVAAjGjFg");
	this.shape_1.setTransform(75.6,75.6,1.123,1.123);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// txt
	this.icons4 = new lib.icons4();
	this.icons4.parent = this;
	this.icons4.setTransform(0,0,1.254,1.254);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgfApQgIgHAAgOQAAgOALgHQALgHAVgBIAQAAIAAgFQAAgJgEgFQgFgEgIAAQgHAAgGACIgNAFIgGgOQAHgEAKgCQAIgDAIAAQASAAAJAIQAJAIAAARIAAA+IgPAAIgDgNIgBAAQgHAJgHADQgGADgLAAQgOAAgHgIgAAIADQgNAAgHAFQgGAEAAAIQAAAHAEADQADAEAIAAQAKAAAGgGQAHgHAAgLIAAgIg");
	this.shape_2.setTransform(125.1,166.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AggA2QgKgNAAgXQAAgVAKgOQAKgNASABQARgBAKAOIABAAIgCgPIAAgjIAVAAIAACEIgQAAIgEgNIgBAAQgJAOgSAAQgRAAgKgNgAgQgEQgFAHAAAQQAAAPAFAJQAGAIAKAAQAMAAAGgHQAGgHgBgPIAAgDQABgSgGgGQgGgIgMAAQgKAAgGAJg");
	this.shape_3.setTransform(114.6,164.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AAVAwIAAg5QAAgLgEgFQgEgFgKgBQgMAAgGAIQgFAHAAARIAAAvIgUAAIAAhdIAPAAIADAMIABAAQAEgGAIgEQAIgEAIAAQAiAAAAAiIAAA9g");
	this.shape_4.setTransform(104,166.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgqAwQgPgRAAgfQAAgeAPgRQAPgQAbAAQAcAAAPARQAPARAAAdQAAAegPASQgPAQgcAAQgbAAgPgQgAgaghQgKALAAAWQAAAXAJAMQAKAMARAAQASAAAJgMQAKgLAAgYQAAgWgKgLQgJgNgSAAQgRAAgJANg");
	this.shape_5.setTransform(91.6,164.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgfApQgIgHAAgOQAAgOALgHQALgHAVgBIAQAAIAAgFQAAgJgEgFQgEgEgJAAQgHAAgGACIgNAFIgGgOQAHgEAJgCQAJgDAIAAQARAAAKAIQAJAIAAARIAAA+IgPAAIgEgNIAAAAQgHAJgHADQgGADgLAAQgOAAgHgIgAAIADQgNAAgHAFQgGAEAAAIQAAAHAEADQADAEAIAAQAKAAAGgGQAHgHAAgLIAAgIg");
	this.shape_6.setTransform(74.8,166.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgRAcIAAgxIgMAAIAAgJIANgHIAHgUIAMAAIAAAVIAaAAIAAAPIgaAAIAAAxQAAAHADAEQAEADAGAAQAHAAAHgCIAAAPIgIADIgLAAQgcAAAAgeg");
	this.shape_7.setTransform(66.6,165.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgcAwIAAhdIAQAAIACAQIABAAQAFgIAHgFQAHgFAJAAIAKABIgCATIgJgCQgMABgGAHQgIAJAAAMIAAAwg");
	this.shape_8.setTransform(60,166.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgfApQgIgHAAgOQAAgOALgHQALgHAVgBIAQAAIAAgFQAAgJgEgFQgFgEgIAAQgGAAgHACIgNAFIgGgOQAHgEAKgCQAJgDAHAAQASAAAJAIQAJAIAAARIAAA+IgPAAIgDgNIgBAAQgHAJgHADQgGADgLAAQgNAAgIgIgAAIADQgNAAgHAFQgGAEAAAIQAAAHAEADQAEAEAHAAQAKAAAHgGQAGgHAAgLIAAgIg");
	this.shape_9.setTransform(50.3,166.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AggAnQgJgIAAgRIAAg9IAVAAIAAA5QgBALAFAFQAEAGAKAAQALAAAHgIQAFgHAAgRIAAgvIAVAAIAABdIgQAAIgDgMIgBAAQgEAGgIAEQgHAEgKAAQgRAAgIgJg");
	this.shape_10.setTransform(40,166.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AAbBOIgYgcIgDAAQgbAAgPgQQgPgRAAgeQAAgfAPgRQAPgQAbAAQAcAAAPARQAPARAAAeQAAAWgIAPQgJAPgRAHIAeAggAgagvQgKALAAAXQAAAWAJAMQAKAMARAAQASAAAJgMQAKgLAAgXQAAgXgKgLQgJgNgSAAQgRAAgJANg");
	this.shape_11.setTransform(27.6,166.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ArIJfIAAw5QAAg3AngmQAngnA2AAIUMAAIAAQ5QAAA3gmAmQgnAng2AAg");
	this.shape_12.setTransform(75.6,119.2);

	this.txt4 = new lib.txt4();
	this.txt4.parent = this;
	this.txt4.setTransform(77.2,66,1,1,0,0,0,63.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt4},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.icons4}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.onda4_img, rect = new cjs.Rectangle(-1.2,-1.2,153.4,200.3), [rect]);


(lib.onda3_img = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.icons3.alpha = 0;
		this.txt3.alpha = 0;
		this.onda_final3.alpha = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// onda_final
	this.onda_final3 = new lib.onda_final3();
	this.onda_final3.parent = this;
	this.onda_final3.setTransform(75.4,77.1,1.395,1.395,0,0,0,50.6,51.8);

	this.timeline.addTween(cjs.Tween.get(this.onda_final3).wait(1));

	// img
	this.instance = new lib.wavesvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(73.2,70.1,0.388,0.388,0,0,0,150.1,110.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AKhAAQAAEWjFDGQjGDFkWAAQkVAAjGjFQjFjGAAkWQAAkWDFjFQDGjFEVAAQEWAADGDFQDFDFAAEWg");
	this.shape.setTransform(75.6,75.6,1.123,1.123);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AnbHcQjEjGgBkWQABkVDEjGQDGjEEVgBQEWABDGDEQDEDGABEVQgBEWjEDGQjGDFkWAAQkVAAjGjFg");
	this.shape_1.setTransform(75.6,75.6,1.123,1.123);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// txt
	this.icons3 = new lib.icons3();
	this.icons3.parent = this;
	this.icons3.setTransform(0,0,1.254,1.254);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgfApQgIgHAAgOQAAgOALgHQALgHAVgBIAQAAIAAgFQAAgJgEgFQgEgEgJAAQgHAAgGACIgNAFIgGgOQAHgEAJgCQAJgDAIAAQARAAAKAIQAJAIAAARIAAA+IgPAAIgEgNIAAAAQgHAJgHADQgGADgLAAQgOAAgHgIgAAIADQgNAAgHAFQgGAEAAAIQAAAHAEADQADAEAIAAQAKAAAGgGQAHgHAAgLIAAgIg");
	this.shape_2.setTransform(129.7,166.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AggA2QgKgNAAgXQAAgVAKgOQAKgNASABQARgBAKAOIABAAIgCgPIAAgjIAVAAIAACEIgQAAIgDgNIgCAAQgJAOgSAAQgRAAgKgNgAgQgEQgFAHAAAQQAAAPAFAJQAGAIAKAAQAMAAAGgHQAGgHAAgPIAAgDQAAgSgGgGQgGgIgMAAQgKAAgGAJg");
	this.shape_3.setTransform(119.2,164.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AAVAwIAAg5QAAgLgEgFQgEgFgKgBQgMAAgGAIQgFAHAAARIAAAvIgUAAIAAhdIAPAAIADAMIABAAQAEgGAIgEQAIgEAIAAQAiAAAAAiIAAA9g");
	this.shape_4.setTransform(108.6,166.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgqAwQgPgRAAgfQAAgeAPgRQAPgQAbAAQAcAAAPARQAPARAAAdQAAAegPASQgPAQgcAAQgbAAgPgQgAgaghQgKALAAAWQAAAXAJAMQAKAMARAAQASAAAJgMQAKgLAAgYQAAgWgKgLQgJgNgSAAQgRAAgJANg");
	this.shape_5.setTransform(96.1,164.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgfApQgIgHAAgOQAAgOALgHQALgHAVgBIAQAAIAAgFQAAgJgEgFQgFgEgIAAQgHAAgGACIgNAFIgGgOQAIgEAIgCQAKgDAGAAQASAAAKAIQAJAIAAARIAAA+IgOAAIgFgNIAAAAQgHAJgGADQgIADgJAAQgOAAgIgIgAAIADQgNAAgHAFQgGAEAAAIQAAAHADADQAEAEAIAAQAKAAAGgGQAHgHAAgLIAAgIg");
	this.shape_6.setTransform(79.4,166.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgcAwIAAhdIAQAAIACAQIABAAQAFgIAHgFQAHgFAJAAIAKABIgCATIgJgCQgMABgGAHQgIAJAAAMIAAAwg");
	this.shape_7.setTransform(71.4,166.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgJBBIAAhdIATAAIAABdgAgHgtQgDgDAAgFQAAgFADgDQADgDAEAAQAFAAADADQADADAAAFQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_8.setTransform(64.7,164.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgcAkQgNgNAAgWQAAgWAMgNQALgOATAAQATAAALAMQALALAAAUIAAAKIg+AAQAAANAHAIQAHAHAMAAQAIAAAIgBIAPgGIAAARQgHADgIACIgRABQgVAAgMgNgAgNgaQgGAGgBALIAqAAQAAgLgGgGQgFgGgKAAQgIAAgGAGg");
	this.shape_9.setTransform(57.2,166.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgXAlQgMgNAAgXQAAgXAMgNQAMgNAUAAQAQAAALAGIgGAQQgMgFgJAAQgXAAAAAgQAAAPAGAIQAGAIAKAAQAOAAAMgGIAAARQgGADgFACIgPABQgVAAgKgMg");
	this.shape_10.setTransform(48.1,166.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgcAwIAAhdIAQAAIACAQIABAAQAFgIAHgFQAHgFAJAAIAKABIgCATIgJgCQgMABgGAHQgIAJAAAMIAAAwg");
	this.shape_11.setTransform(40.4,166.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgcAkQgNgNAAgWQAAgWAMgNQALgOATAAQATAAALAMQALALAAAUIAAAKIg+AAQAAANAHAIQAHAHAMAAQAIAAAIgBIAPgGIAAARQgHADgIACIgRABQgVAAgMgNgAgNgaQgGAGgBALIAqAAQAAgLgGgGQgFgGgKAAQgIAAgGAGg");
	this.shape_12.setTransform(31.1,166.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgJA+IAAhqIglAAIAAgRIBdAAIAAARIglAAIAABqg");
	this.shape_13.setTransform(21.1,164.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ArIJfIAAw5QAAg3AngmQAngnA2AAIUMAAIAAQ5QAAA3gmAmQgnAng2AAg");
	this.shape_14.setTransform(75.6,119.2);

	this.txt3 = new lib.txt3();
	this.txt3.parent = this;
	this.txt3.setTransform(77.2,66,1,1,0,0,0,63.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt3},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.icons3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.onda3_img, rect = new cjs.Rectangle(-1.2,-1.2,153.4,200.3), [rect]);


(lib.onda2_img = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.icons2.alpha = 0;
		this.txt2.alpha = 0;
		this.onda_final2.alpha = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// onda_final
	this.onda_final2 = new lib.onda_final2();
	this.onda_final2.parent = this;
	this.onda_final2.setTransform(75.4,77.1,1.395,1.395,0,0,0,50.6,51.8);

	this.timeline.addTween(cjs.Tween.get(this.onda_final2).wait(1));

	// img
	this.instance = new lib.wavesvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(73.2,70.1,0.388,0.388,0,0,0,150.1,110.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AKhAAQAAEWjFDGQjGDFkWAAQkVAAjGjFQjFjGAAkWQAAkWDFjFQDGjFEVAAQEWAADGDFQDFDFAAEWg");
	this.shape.setTransform(75.6,75.6,1.123,1.123);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AnbHcQjEjGgBkWQABkVDEjGQDGjEEVgBQEWABDGDEQDEDGABEVQgBEWjEDGQjGDFkWAAQkVAAjGjFg");
	this.shape_1.setTransform(75.6,75.6,1.123,1.123);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// txt
	this.icons2 = new lib.icons2();
	this.icons2.parent = this;
	this.icons2.setTransform(0,0,1.254,1.254);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgfApQgIgHAAgOQAAgOALgHQALgHAVgBIAQAAIAAgFQAAgJgEgFQgFgEgIAAQgHAAgGACIgNAFIgGgOQAIgEAIgCQAKgDAGAAQASAAAKAIQAJAIAAARIAAA+IgOAAIgFgNIAAAAQgHAJgGADQgIADgJAAQgPAAgHgIgAAIADQgNAAgHAFQgGAEAAAIQAAAHAEADQADAEAIAAQAKAAAGgGQAHgHAAgLIAAgIg");
	this.shape_2.setTransform(131.6,166.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AggA2QgKgNAAgXQAAgVAKgOQAKgNASABQARgBAKAOIABAAIgCgPIAAgjIAVAAIAACEIgQAAIgEgNIgBAAQgJAOgSAAQgRAAgKgNgAgPgEQgGAHAAAQQAAAPAGAJQAFAIAKAAQAMAAAGgHQAGgHgBgPIAAgDQABgSgGgGQgGgIgMAAQgKAAgFAJg");
	this.shape_3.setTransform(121.2,164.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AAVAwIAAg5QAAgLgEgFQgEgFgKgBQgMAAgGAIQgFAHAAARIAAAvIgUAAIAAhdIAPAAIADAMIABAAQAEgGAIgEQAIgEAIAAQAiAAAAAiIAAA9g");
	this.shape_4.setTransform(110.5,166.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgqAwQgPgRAAgfQAAgeAPgRQAPgQAbAAQAcAAAPARQAPARAAAdQAAAegPASQgPAQgcAAQgbAAgPgQgAgaghQgKALAAAWQAAAXAJAMQAKAMARAAQASAAAJgMQAKgLAAgYQAAgWgKgLQgJgNgSAAQgRAAgJANg");
	this.shape_5.setTransform(98.1,164.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgfApQgIgHAAgOQAAgOALgHQALgHAVgBIAQAAIAAgFQAAgJgEgFQgFgEgIAAQgGAAgHACIgNAFIgGgOQAIgEAIgCQAKgDAGAAQATAAAJAIQAJAIAAARIAAA+IgOAAIgFgNIAAAAQgHAJgGADQgIADgJAAQgPAAgHgIgAAIADQgNAAgHAFQgGAEAAAIQAAAHADADQAEAEAIAAQAKAAAGgGQAHgHAAgLIAAgIg");
	this.shape_6.setTransform(81.3,166.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AggA2QgKgNAAgXQAAgVAKgOQAKgNASABQARgBAKAOIABAAIgCgPIAAgjIAVAAIAACEIgQAAIgEgNIgBAAQgJAOgSAAQgRAAgKgNgAgPgEQgGAHAAAQQAAAPAGAJQAFAIAKAAQAMAAAGgHQAGgHgBgPIAAgDQABgSgGgGQgGgIgMAAQgKAAgFAJg");
	this.shape_7.setTransform(70.9,164.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AAVAwIAAg5QAAgLgEgFQgEgFgKgBQgMAAgGAIQgFAHAAARIAAAvIgUAAIAAhdIAPAAIADAMIABAAQAEgGAIgEQAIgEAIAAQAiAAAAAiIAAA9g");
	this.shape_8.setTransform(60.2,166.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AggAnQgIgIAAgRIAAg9IATAAIAAA5QABALAEAFQAEAGAKAAQAMAAAFgIQAHgHAAgRIAAgvIATAAIAABdIgQAAIgCgMIgBAAQgEAGgIAEQgIAEgIAAQgSAAgIgJg");
	this.shape_9.setTransform(49.1,166.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgjA+QgKgGAAgNQAAgJAFgGQAGgGAKgCQgEgCgDgDQgDgFAAgDQAAgGADgCQAEgEAFgEQgHgDgFgHQgEgHAAgKQAAgPAKgJQAJgIASAAIAIABIAGABIAhAAIAAALIgRADIAFAHQABAFAAAEQAAAPgKAIQgLAJgQgBIgIAAQgGAEgBAEQAAAEADABQAEACAIgBIAPAAQAPAAAIAIQAJAGAAAMQAAARgOAIQgNAJgYAAQgTAAgKgHgAgWAeQgFAFAAAHQAAAGAFAEQAHADAKAAQAPAAAJgEQAIgGAAgHQgBgGgEgDQgFgCgLAAIgOAAQgJgBgFAEgAgOgyQgFAFABAJQgBAJAFAFQAFAEAIABQARAAAAgTQAAgJgFgFQgEgFgIAAQgIAAgFAFg");
	this.shape_10.setTransform(38.7,168.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgcAkQgNgNAAgWQAAgWAMgNQALgOATAAQATAAALAMQALALAAAUIAAAKIg+AAQAAANAHAIQAHAHAMAAQAIAAAIgBIAPgGIAAARQgHADgIACIgRABQgVAAgMgNgAgNgaQgGAGgBALIAqAAQAAgLgGgGQgFgGgKAAQgIAAgGAGg");
	this.shape_11.setTransform(28.9,166.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgnA5IAAgTQAJAEAJACQAKADAIAAQALAAAGgFQAGgEAAgIQAAgHgGgFQgFgFgPgGQgRgHgHgIQgHgJAAgNQAAgPALgJQALgJARAAQASAAASAIIgGAQQgRgHgNAAQgJAAgFAFQgFAEAAAHQAAAFACADQACAEAFADQAEADALAFQAOAGAHAEQAGAFADAGQADAGAAAIQAAARgMAKQgMAJgUAAQgVAAgOgHg");
	this.shape_12.setTransform(19.1,164.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ArIJfIAAw5QAAg3AngmQAngnA2AAIUMAAIAAQ5QAAA3gmAmQgnAng2AAg");
	this.shape_13.setTransform(75.6,119.2);

	this.txt2 = new lib.txt2();
	this.txt2.parent = this;
	this.txt2.setTransform(77.2,66,1,1,0,0,0,63.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt2},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.icons2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.onda2_img, rect = new cjs.Rectangle(-1.2,-1.2,153.4,200.3), [rect]);


(lib.onda1_img = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.icons1.alpha = 0;
		this.txt1.alpha = 0;
		this.onda_final1.alpha = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// onda_final
	this.onda_final1 = new lib.onda_final1();
	this.onda_final1.parent = this;
	this.onda_final1.setTransform(75.4,77.1,1.395,1.395,0,0,0,50.6,51.8);

	this.timeline.addTween(cjs.Tween.get(this.onda_final1).wait(1));

	// img
	this.instance = new lib.wavesvg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(73.2,70.1,0.388,0.388,0,0,0,150.1,110.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AKhAAQAAEWjFDGQjGDFkWAAQkVAAjGjFQjFjGAAkWQAAkWDFjFQDGjFEVAAQEWAADGDFQDFDFAAEWg");
	this.shape.setTransform(75.6,75.6,1.123,1.123);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AnbHcQjEjGgBkWQABkVDEjGQDGjEEVgBQEWABDGDEQDEDGABEVQgBEWjEDGQjGDFkWAAQkVAAjGjFg");
	this.shape_1.setTransform(75.6,75.6,1.123,1.123);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// txt
	this.icons1 = new lib.icons1();
	this.icons1.parent = this;
	this.icons1.setTransform(0,0,1.254,1.254);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgfApQgIgHAAgOQAAgOALgHQALgHAVgBIAQAAIAAgFQAAgJgEgFQgEgEgJAAQgHAAgGACIgNAFIgGgOQAIgEAJgCQAIgDAIAAQARAAAKAIQAJAIAAARIAAA+IgPAAIgDgNIgBAAQgHAJgGADQgIADgKAAQgNAAgIgIgAAIADQgNAAgGAFQgHAEAAAIQAAAHADADQAFAEAHAAQAKAAAHgGQAGgHAAgLIAAgIg");
	this.shape_2.setTransform(131.6,166.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AggA2QgKgNAAgXQAAgVAKgOQAKgNASABQASgBAJAOIABAAIgCgPIAAgjIAVAAIAACEIgQAAIgEgNIgBAAQgJAOgRAAQgSAAgKgNgAgPgEQgGAHAAAQQAAAPAGAJQAFAIAKAAQAMAAAGgHQAFgHAAgPIAAgDQAAgSgFgGQgGgIgMAAQgKAAgFAJg");
	this.shape_3.setTransform(121.1,164.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AAVAwIAAg5QAAgLgEgFQgEgFgKgBQgMAAgGAIQgFAHAAARIAAAvIgUAAIAAhdIAPAAIADAMIABAAQAEgGAIgEQAIgEAIAAQAiAAAAAiIAAA9g");
	this.shape_4.setTransform(110.4,166.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgqAwQgPgRAAgfQAAgeAPgRQAPgQAbAAQAcAAAPARQAPARAAAdQAAAegPASQgPAQgcAAQgbAAgPgQgAgaghQgKALAAAWQAAAXAJAMQAKAMARAAQASAAAJgMQAKgLAAgYQAAgWgKgLQgJgNgSAAQgRAAgJANg");
	this.shape_5.setTransform(98,164.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgfApQgIgHAAgOQAAgOALgHQALgHAVgBIAQAAIAAgFQAAgJgEgFQgFgEgIAAQgGAAgHACIgNAFIgGgOQAHgEAKgCQAIgDAIAAQASAAAJAIQAJAIAAARIAAA+IgPAAIgDgNIgBAAQgHAJgHADQgGADgLAAQgNAAgIgIgAAIADQgNAAgGAFQgHAEAAAIQAAAHAEADQAEAEAHAAQAKAAAHgGQAGgHAAgLIAAgIg");
	this.shape_6.setTransform(81.3,166.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgcAwIAAhdIAQAAIACAQIABAAQAFgIAHgFQAHgFAJAAIAKABIgCATIgJgCQgMABgGAHQgIAJAAAMIAAAwg");
	this.shape_7.setTransform(73.3,166.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgJBBIAAhdIATAAIAABdgAgHgtQgDgDAAgFQAAgFADgDQADgDAEAAQAFAAADADQADADAAAFQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_8.setTransform(66.5,164.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgcAkQgNgNAAgWQAAgWAMgNQALgOATAAQATAAALAMQALALAAAUIAAAKIg+AAQAAANAHAIQAHAHAMAAQAIAAAIgBIAPgGIAAARQgHADgIACIgRABQgVAAgMgNgAgNgaQgGAGgBALIAqAAQAAgLgGgGQgFgGgKAAQgIAAgGAGg");
	this.shape_9.setTransform(59.1,166.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AAxAwIAAg5QAAgLgEgFQgEgFgJgBQgLAAgGAIQgFAHAAAPIAAAxIgTAAIAAg5QAAgLgEgFQgEgFgJgBQgMAAgFAIQgFAHAAARIAAAvIgUAAIAAhdIAPAAIADAMIABAAQAEgGAHgEQAIgEAJAAQAVAAAHAPIABAAQAEgHAIgEQAHgEAKAAQARAAAIAIQAHAJAAARIAAA9g");
	this.shape_10.setTransform(45.8,166.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgJBBIAAhdIATAAIAABdgAgHgtQgDgDAAgFQAAgFADgDQADgDAEAAQAFAAADADQADADAAAFQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_11.setTransform(35,164.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgcAwIAAhdIAQAAIACAQIABAAQAFgIAHgFQAHgFAJAAIAKABIgCATIgJgCQgMABgGAHQgIAJAAAMIAAAwg");
	this.shape_12.setTransform(29.4,166.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgoA+IAAh7IAkAAQAWAAALAJQAMAKAAASQAAAUgNAJQgMALgXAAIgNAAIAAAugAgUAAIALAAQAOAAAIgGQAHgFAAgMQAAgLgGgFQgHgFgNAAIgOAAg");
	this.shape_13.setTransform(20.1,164.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ArIJfIAAw5QAAg3AngmQAngnA2AAIUMAAIAAQ5QAAA3gmAmQgnAng2AAg");
	this.shape_14.setTransform(75.6,119.2);

	this.txt1 = new lib.txt1();
	this.txt1.parent = this;
	this.txt1.setTransform(77.2,66,1,1,0,0,0,63.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt1},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.icons1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.onda1_img, rect = new cjs.Rectangle(-1.2,-1.2,153.4,200.3), [rect]);


(lib.tela2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.onda1_img.alpha = 0;
		this.onda2_img.alpha = 0;
		this.onda3_img.alpha = 0;
		this.onda4_img.alpha = 0;
		this.onda5_img.alpha = 0;
		
		
		
		this.btn_voltar.addEventListener("click", voltar.bind(this));
		function voltar(){
			createjs.Tween.get(this.parent.tela1).to({x:0}, 1000, createjs.Ease.quartInOut);
			this.parent.tela1.visible = true;
			
			this.onda1_img.alpha = 0;
			this.onda2_img.alpha = 0;
			this.onda3_img.alpha = 0;
			this.onda4_img.alpha = 0;
			this.onda5_img.alpha = 0;
			
			createjs.Tween.get(this.parent.tela2).to({x:-2000, visible: false}, 1000, createjs.Ease.quartInOut);
			
			this.linha_do_tempo.gotoAndStop(1);
		
		}
		
		
		
		//----------ANIMAÇÃO DOS BOTÕES COM MOUSEOVER//
		
		stage.enableMouseOver();
		
		
		//BTN_ONDA1
		
		this.btn_onda1.addEventListener("mouseover", mouseover1.bind(this));
		function mouseover1(){
			createjs.Tween.get(this.onda1_img.icons1).to({y:-120, alpha:1}, 500, createjs.Ease.bounceOut);
			createjs.Tween.get(this.onda1_img.txt1).to({y:135, alpha:1}, 500, createjs.Ease.bounceOut);
			createjs.Tween.get(this.onda1_img.onda_final1).to({alpha:1}, 500);}
			
			
		this.btn_onda1.addEventListener("mouseout", mouseout1.bind(this));
		function mouseout1(){
			createjs.Tween.get(this.onda1_img.icons1).to({y:20, alpha:0}, 500, createjs.Ease.bounceOut);
			createjs.Tween.get(this.onda1_img.txt1).to({y:66, alpha:0}, 500, createjs.Ease.bounceOut);
			createjs.Tween.get(this.onda1_img.onda_final1).to({alpha:0}, 500, createjs.Ease.bounceOut);}
			
			
		this.btn_onda1.addEventListener("mouseleave", mouseleave1.bind(this));
		function mouseleave1(){
			createjs.Tween.get(this.onda1_img.icons1).to({y:20, alpha:0}, 500, createjs.Ease.bounceOut);
			createjs.Tween.get(this.onda1_img.txt1).to({y:66, alpha:0}, 500, createjs.Ease.bounceOut);}
			
			
			
			
		//BTN_ONDA2
		
		this.btn_onda2.addEventListener("mouseover", mouseover2.bind(this));
		function mouseover2(){
			createjs.Tween.get(this.onda2_img.icons2).to({y:-120, alpha:1}, 500, createjs.Ease.bounceOut);
			createjs.Tween.get(this.onda2_img.txt2).to({y:135, alpha:1}, 500, createjs.Ease.bounceOut);
			createjs.Tween.get(this.onda2_img.onda_final2).to({alpha:1}, 500);}
			
		this.btn_onda2.addEventListener("mouseout", mouseout2.bind(this));
		function mouseout2(){
			createjs.Tween.get(this.onda2_img.icons2).to({y:20, alpha:0}, 500, createjs.Ease.bounceOut);
			createjs.Tween.get(this.onda2_img.txt2).to({y:66, alpha:0}, 500, createjs.Ease.bounceOut);
			createjs.Tween.get(this.onda2_img.onda_final2).to({alpha:0}, 500);}
			
			
		this.btn_onda2.addEventListener("mouseleave", mouseleave2.bind(this));
		function mouseleave2(){
			createjs.Tween.get(this.onda2_img.icons2).to({y:20, alpha:0}, 500, createjs.Ease.bounceOut);
			createjs.Tween.get(this.onda2_img.txt2).to({y:66, alpha:0}, 500, createjs.Ease.bounceOut);}
			
			
		
			
			
		//BTN_ONDA3
		
		this.btn_onda3.addEventListener("mouseover", mouseover3.bind(this));
		function mouseover3(){
			createjs.Tween.get(this.onda3_img.icons3).to({y:-120, alpha:1}, 500, createjs.Ease.bounceOut);
			createjs.Tween.get(this.onda3_img.txt3).to({y:135, alpha:1}, 500, createjs.Ease.bounceOut);
				createjs.Tween.get(this.onda3_img.onda_final3).to({alpha:1}, 500);}
		
			
		this.btn_onda3.addEventListener("mouseout", mouseout3.bind(this));
		function mouseout3(){
			createjs.Tween.get(this.onda3_img.icons3).to({y:20, alpha:0}, 500, createjs.Ease.bounceOut);
			createjs.Tween.get(this.onda3_img.txt3).to({y:66, alpha:0}, 500, createjs.Ease.bounceOut);
			createjs.Tween.get(this.onda3_img.onda_final3).to({alpha:0}, 500);}
		
			
			
		this.btn_onda3.addEventListener("mouseleave", mouseleave3.bind(this));
		function mouseleave3(){
			createjs.Tween.get(this.onda3_img.icons3).to({y:20, alpha:0}, 500, createjs.Ease.bounceOut);
			createjs.Tween.get(this.onda3_img.txt3).to({y:66, alpha:0}, 500, createjs.Ease.bounceOut);}
			
			
			
		//BTN_ONDA4
		
		this.btn_onda4.addEventListener("mouseover", mouseover4.bind(this));
		function mouseover4(){
			createjs.Tween.get(this.onda4_img.icons4).to({y:-120, alpha:1}, 500, createjs.Ease.bounceOut);
			createjs.Tween.get(this.onda4_img.txt4).to({y:135, alpha:1}, 500, createjs.Ease.bounceOut);
			createjs.Tween.get(this.onda4_img.onda_final4).to({alpha:1}, 500);}
		
			
		this.btn_onda4.addEventListener("mouseout", mouseout4.bind(this));
		function mouseout4(){
			createjs.Tween.get(this.onda4_img.icons4).to({y:20, alpha:0}, 500, createjs.Ease.bounceOut);
			createjs.Tween.get(this.onda4_img.txt4).to({y:66, alpha:0}, 500, createjs.Ease.bounceOut);
			createjs.Tween.get(this.onda4_img.onda_final4).to({alpha:0}, 500);}
		
			
			
		this.btn_onda4.addEventListener("mouseleave", mouseleave4.bind(this));
		function mouseleave4(){
			createjs.Tween.get(this.onda4_img.icons4).to({y:20, alpha:0}, 500, createjs.Ease.bounceOut);
			createjs.Tween.get(this.onda4_img.txt4).to({y:66, alpha:0}, 500, createjs.Ease.bounceOut);}
			
			
		
		//BTN_ONDA5
		
		this.btn_onda5.addEventListener("mouseover", mouseover5.bind(this));
		function mouseover5(){
			createjs.Tween.get(this.onda5_img.icons5).to({y:-120, alpha:1}, 500, createjs.Ease.bounceOut);
			createjs.Tween.get(this.onda5_img.txt5).to({y:135, alpha:1}, 500, createjs.Ease.bounceOut);
			createjs.Tween.get(this.onda5_img.onda_final5).to({alpha:1}, 500);}
		
			
		this.btn_onda5.addEventListener("mouseout", mouseout5.bind(this));
		function mouseout5(){
			createjs.Tween.get(this.onda5_img.icons5).to({y:20, alpha:0}, 500, createjs.Ease.bounceOut);
			createjs.Tween.get(this.onda5_img.txt5).to({y:66, alpha:0}, 500, createjs.Ease.bounceOut);
			createjs.Tween.get(this.onda5_img.onda_final5).to({alpha:0}, 500);}
			
			
		this.btn_onda5.addEventListener("mouseleave", mouseleave5.bind(this));
		function mouseleave5(){
			createjs.Tween.get(this.onda5_img.icons5).to({y:20, alpha:0}, 500, createjs.Ease.bounceOut);
			createjs.Tween.get(this.onda5_img.txt5).to({y:66, alpha:0}, 500, createjs.Ease.bounceOut);}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btn_voltar = new lib.btn_voltar();
	this.btn_voltar.parent = this;
	this.btn_voltar.setTransform(1095.4,39.9,0.595,0.595,0,0,0,125.7,38.8);
	new cjs.ButtonHelper(this.btn_voltar, 0, 1, 1);

	this.btn_onda5 = new lib.btn_onda();
	this.btn_onda5.parent = this;
	this.btn_onda5.setTransform(1019.2,417.2,1,1,0,0,0,83.5,108.5);
	new cjs.ButtonHelper(this.btn_onda5, 0, 1, 1);

	this.btn_onda4 = new lib.btn_onda();
	this.btn_onda4.parent = this;
	this.btn_onda4.setTransform(803.8,417.2,1,1,0,0,0,83.5,108.5);
	new cjs.ButtonHelper(this.btn_onda4, 0, 1, 1);

	this.btn_onda3 = new lib.btn_onda();
	this.btn_onda3.parent = this;
	this.btn_onda3.setTransform(588.5,417.2,1,1,0,0,0,83.5,108.5);
	new cjs.ButtonHelper(this.btn_onda3, 0, 1, 1);

	this.btn_onda2 = new lib.btn_onda();
	this.btn_onda2.parent = this;
	this.btn_onda2.setTransform(373.1,417.2,1,1,0,0,0,83.5,108.5);
	new cjs.ButtonHelper(this.btn_onda2, 0, 1, 1);

	this.btn_onda1 = new lib.btn_onda();
	this.btn_onda1.parent = this;
	this.btn_onda1.setTransform(157.8,417.2,1,1,0,0,0,83.5,108.5);
	new cjs.ButtonHelper(this.btn_onda1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_onda1},{t:this.btn_onda2},{t:this.btn_onda3},{t:this.btn_onda4},{t:this.btn_onda5},{t:this.btn_voltar}]}).wait(1));

	// onda1_img
	this.onda5_img = new lib.onda5_img();
	this.onda5_img.parent = this;
	this.onda5_img.setTransform(1019.3,407.4,1,1,0,0,0,75.5,99.9);

	this.onda4_img = new lib.onda4_img();
	this.onda4_img.parent = this;
	this.onda4_img.setTransform(803.9,407.4,1,1,0,0,0,75.5,99.9);

	this.onda3_img = new lib.onda3_img();
	this.onda3_img.parent = this;
	this.onda3_img.setTransform(588.6,407.4,1,1,0,0,0,75.5,99.9);

	this.onda2_img = new lib.onda2_img();
	this.onda2_img.parent = this;
	this.onda2_img.setTransform(373.2,407.4,1,1,0,0,0,75.5,99.9);

	this.onda1_img = new lib.onda1_img();
	this.onda1_img.parent = this;
	this.onda1_img.setTransform(157.9,407.4,1,1,0,0,0,75.5,99.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.onda1_img},{t:this.onda2_img},{t:this.onda3_img},{t:this.onda4_img},{t:this.onda5_img}]}).wait(1));

	// timeline
	this.linha_do_tempo = new lib.linha_do_tempo();
	this.linha_do_tempo.parent = this;
	this.linha_do_tempo.setTransform(0,206.2);

	this.timeline.addTween(cjs.Tween.get(this.linha_do_tempo).wait(1));

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#033F8F").s().p("AhCBkIAAgYQANAGAPADQAQADAPAAQAYAAANgJQAMgKAAgQQAAgMgEgGQgFgIgKgGQgLgGgUgHQgegKgNgOQgMgPAAgYQAAgZASgOQATgPAdAAQAgAAAbAMIgIAVQgagKgZgBQgTAAgLAJQgLAIAAAQQAAAKAEAIQAEAHAKAFQAJAHATAHQAiAKANAOQAMAOAAAWQAAAdgUAPQgVAQgiAAQgmAAgUgKg");
	this.shape.setTransform(388.8,41.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#033F8F").s().p("Ag7BrIAAjVIB2AAIAAAWIhdAAIAABFIBYAAIAAAVIhYAAIAABPIBdAAIAAAWg");
	this.shape_1.setTransform(373.8,41.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#033F8F").s().p("AgLBrIAAi/IhEAAIAAgWICfAAIAAAWIhEAAIAAC/g");
	this.shape_2.setTransform(357.6,41.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#033F8F").s().p("AA3BrIh0iyIgBAAQACAfABAaIAAB5IgYAAIAAjVIAdAAIBzCyIABAAIgBgaIgBgeIAAh6IAXAAIAADVg");
	this.shape_3.setTransform(339.1,41.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#033F8F").s().p("Ag6BrIAAjVIB2AAIAAAWIheAAIAABFIBYAAIAAAVIhYAAIAABPIBeAAIAAAWg");
	this.shape_4.setTransform(321,41.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#033F8F").s().p("Ag9BRQgbgdAAg0QAAggANgZQAOgaAZgNQAZgNAhAAQAiAAAeANIgKAVQgdgLgbgBQgmAAgWAYQgWAXAAAoQAAAsAWAWQAVAWAoAAQAWAAAVgFIAAhCIgwAAIAAgVIBJAAIAABnQgRAGgSACQgRADgXAAQgwAAgbgdg");
	this.shape_5.setTransform(302,41.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#033F8F").s().p("AAuBrIgzhZIgtAAIAABZIgYAAIAAjVIA6AAQAnAAASAQQATAOAAAfQAAAqgrAOIA6BggAgygDIAjAAQAZAAAMgKQAMgKAAgVQAAgVgMgKQgNgJgaAAIghAAg");
	this.shape_6.setTransform(284.3,41.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#033F8F").s().p("Ag7BrIAAjVIB2AAIAAAWIhdAAIAABFIBYAAIAAAVIhYAAIAABPIBdAAIAAAWg");
	this.shape_7.setTransform(267.1,41.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#033F8F").s().p("ABRBrIAAiJQAAgXACgcIgBAAIhJC8IgTAAIhJi8IgBAAQACAWAAAfIAACHIgXAAIAAjVIAmAAIBDCwIAAAAIBFiwIAlAAIAADVg");
	this.shape_8.setTransform(245.6,41.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#033F8F").s().p("Ag6BrIAAjVIB2AAIAAAWIheAAIAABFIBYAAIAAAVIhYAAIAABPIBeAAIAAAWg");
	this.shape_9.setTransform(225.4,41.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#033F8F").s().p("AhCBkIAAgYQANAGAPADQAQADAPAAQAYAAANgJQAMgKAAgQQAAgMgEgGQgFgIgKgGQgLgGgUgHQgegKgNgOQgMgPAAgYQAAgZASgOQATgPAdAAQAgAAAbAMIgIAVQgagKgZgBQgTAAgLAJQgLAIAAAQQAAAKAEAIQAEAHAKAFQAJAHATAHQAiAKANAOQAMAOAAAWQAAAdgUAPQgVAQgiAAQgmAAgUgKg");
	this.shape_10.setTransform(202.5,41.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#033F8F").s().p("AA3BrIh0iyIgBAAQADAfAAAaIAAB5IgYAAIAAjVIAcAAIB0CyIABAAIgBgaIgBgeIAAh6IAYAAIAADVg");
	this.shape_11.setTransform(184,41.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#033F8F").s().p("Ag7BrIAAjVIB2AAIAAAWIhdAAIAABFIBYAAIAAAVIhYAAIAABPIBdAAIAAAWg");
	this.shape_12.setTransform(165.9,41.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#033F8F").s().p("Ag9BRQgbgdAAg0QAAggANgZQAOgaAZgNQAZgNAhAAQAiAAAeANIgKAVQgdgLgbgBQgmAAgWAYQgWAXAAAoQAAAsAWAWQAVAWAoAAQAWAAAVgFIAAhCIgwAAIAAgVIBJAAIAABnQgRAGgSACQgRADgXAAQgwAAgbgdg");
	this.shape_13.setTransform(146.9,41.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#033F8F").s().p("ABFBrIgbhEIhUAAIgbBEIgZAAIBVjVIAUAAIBUDVgAgIgwIgaBBIBFAAIgZhBQgFgNgFgSQgCAOgGARg");
	this.shape_14.setTransform(127.7,41.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#033F8F").s().p("AhUBrIAAjVIBBAAQAxAAAcAcQAbAbAAAyQAAA0gcAcQgdAcg1AAgAg8BVIAfAAQArABAXgWQAWgWAAgqQAAgqgVgVQgVgVgogBIglAAg");
	this.shape_15.setTransform(108.9,41.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#033F8F").s().p("AAuBrIgzhZIgtAAIAABZIgYAAIAAjVIA6AAQAnAAASAQQATAOAAAfQAAAqgrAOIA6BggAgygDIAjAAQAZAAAMgKQAMgKAAgVQAAgVgMgKQgNgJgaAAIghAAg");
	this.shape_16.setTransform(90.3,41.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#033F8F").s().p("AhIBRQgZgdAAg0QAAg0AZgcQAagdAuAAQAuAAAaAdQAaAeAAAyQAAAzgaAeQgaAdguAAQguAAgagdgAg1hAQgSAWAAAqQAAArASAXQATAWAiAAQAkAAASgWQASgWAAgsQAAgrgSgVQgSgXgkAAQgiAAgTAXg");
	this.shape_17.setTransform(69.2,41.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#033F8F").s().p("AhJBrIAAjVIA8AAQAqAAATANQATAMAAAcQAAATgKAMQgLANgVADIAAACQAxAHAAArQAAAdgTAQQgUAQgiAAgAgxBWIAtAAQAZAAANgKQANgKABgVQAAgVgOgJQgNgJgaAAIgsAAgAgxgOIAqAAQAZAAAMgJQALgIAAgUQAAgSgNgHQgNgJgbAAIglAAg");
	this.shape_18.setTransform(49.5,41.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#033F8F").s().p("ABFBrIgbhEIhUAAIgbBEIgZAAIBVjVIAUAAIBUDVgAgIgwIgaBBIBFAAIgZhBQgFgNgFgSQgCAOgGARg");
	this.shape_19.setTransform(30.7,41.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#666666").ss(2,1,1).p("AAAkLIAAIX");
	this.shape_20.setTransform(410.5,40.8,1.237,0.741);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("AgjA+IAAh5IAQAAIACAWIABAAQAHgMAJgGQAKgHALAAIAOABIgCASIgOgCQgOABgKAMQgLALAAATIAABAg");
	this.shape_21.setTransform(688.2,43.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#666666").s().p("AgjAvQgQgRAAgdQAAgcAPgSQAOgSAYAAQAXAAANAQQAOAPAAAYIAAAMIhUAAQAAAVALALQAKAMATAAQATAAATgJIAAARIgSAGQgJABgMAAQgaAAgQgQgAgVgmQgJAKgCARIBAAAQAAgRgIgKQgIgJgPAAQgNAAgJAJg");
	this.shape_22.setTransform(676.3,43.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#666666").s().p("AgSAnIAAhIIgSAAIAAgJIASgHIAIgbIAKAAIAAAdIAjAAIAAAOIgjAAIAABIQAAALAFAGQAFAGAJAAIAKgBIAHgCIAAAPIgJACIgLABQgiAAAAgmg");
	this.shape_23.setTransform(665.7,42.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666666").s().p("AgjAvQgQgRAAgdQAAgcAOgSQAPgSAYAAQAXAAAOAQQANAPAAAYIAAAMIhUAAQAAAVALALQAKAMASAAQAUAAAUgJIAAARIgTAGQgJABgNAAQgaAAgPgQgAgVgmQgJAKgCARIBAAAQAAgRgIgKQgIgJgOAAQgOAAgJAJg");
	this.shape_24.setTransform(655.3,43.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#666666").s().p("Ag1BaIAAixIAPAAIADARIABAAQAHgKAJgFQAKgEALAAQAZAAANARQANARAAAeQAAAdgNAQQgOARgYAAQgLAAgKgEQgKgEgGgKIgCAAIACAUIAAAzgAgag/QgIALAAAWIAAAFQAAAZAIAKQAJAMASgBQAQAAAJgMQAJgMAAgXQAAgXgJgMQgJgMgRAAQgRgBgJALg");
	this.shape_25.setTransform(642.1,46.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#666666").s().p("ABFA+IAAhPQAAgOgGgHQgGgIgOAAQgRAAgIAKQgJAKAAAVIAABDIgRAAIAAhPQAAgOgHgHQgGgIgNAAQgSAAgIAKQgIALAAAYIAAA/IgTAAIAAh5IAQAAIADAQIABAAQAFgIAJgFQAKgFAMgBQAdABAIAUIAAAAQAGgKAKgFQALgGANAAQAVAAAKALQALALAAAXIAABPg");
	this.shape_26.setTransform(624.1,43.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#666666").s().p("AgnA0QgLgKAAgYIAAhPIASAAIAABOQAAAQAHAHQAHAHAPAAQASAAAJgKQAJgLAAgYIAAg/IASAAIAAB5IgPAAIgDgQIgBAAQgFAJgKAFQgLAFgMgBQgWABgLgLg");
	this.shape_27.setTransform(606.2,43.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#666666").s().p("AAhBXIAAhPQAAgOgHgIQgHgHgOAAQgTAAgJAKQgIALgBAXIAABAIgTAAIAAitIATAAIAAA1IgBAPIABAAQAGgIAKgGQALgFAMAAQAWAAAMALQAKALABAWIAABQg");
	this.shape_28.setTransform(592.3,41);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#666666").s().p("AgdAwQgOgRAAgeQAAgeAPgRQAOgRAbAAIASACQAIACAFACIgFARIgOgFIgNgBQgkAAAAAuQAAAXAJAMQAJANARAAQAQAAAQgHIAAARQgNAFgSAAQgaAAgPgPg");
	this.shape_29.setTransform(580,43.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#666666").s().p("AgzBNIAAgSQALAEAMACQAMADALAAQASAAAKgHQAJgIABgNQAAgIgEgFQgEgGgHgFQgJgEgPgGQgXgHgJgLQgKgMAAgSQAAgTAOgLQAOgLAWAAQAZAAAUAJIgFAQQgVgIgTAAQgOAAgIAGQgJAHAAAMQAAAIADAGQADAFAHAFQAIAEAPAGQAZAIAKAKQAKALAAARQAAAVgQAMQgQAMgaAAQgdAAgQgHg");
	this.shape_30.setTransform(568,41.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#666666").s().p("AgkAvQgPgRAAgdQAAgcAOgSQAPgSAYAAQAXAAAOAQQANAPAAAYIAAAMIhUAAQABAVAKALQALAMARAAQAUAAATgJIAAARIgSAGQgJABgNAAQgaAAgQgQgAgVgmQgJAKgBARIA/AAQAAgRgIgKQgIgJgPAAQgNAAgJAJg");
	this.shape_31.setTransform(549.3,43.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#666666").s().p("AgnBIQgOgQAAgfQAAgdAOgRQANgRAYAAQAYAAANASIABAAIAAgJIgBgIIAAgyIATAAIAACtIgPAAIgDgQIgBAAQgNASgYAAQgYAAgNgQgAgZgKQgJAMAAAXQAAAYAJAMQAJAMAQAAQASAAAJgKQAJgLgBgXIAAgEQABgZgJgLQgJgLgSAAQgQAAgJAMg");
	this.shape_32.setTransform(535.4,41.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#666666").s().p("AgrA4IAAgRQAKAEAKADQAKACAJABQAOgBAIgEQAHgFABgJQgBgHgGgGQgGgFgRgHQgRgFgHgFQgIgFgDgGQgDgGgBgIQAAgQAMgIQANgJAUAAQAUABATAHIgGAQQgTgIgPAAQgMAAgHAEQgHAEAAAIQAAAEACAEQADADAGADIAVAJQAVAIAIAHQAIAJAAAMQAAARgOAJQgMAJgWAAQgZABgOgIg");
	this.shape_33.setTransform(517.4,43.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#666666").s().p("AgmA2QgKgJAAgSQAAgjA6gDIAVAAIAAgIQAAgOgGgHQgGgHgOAAQgOAAgUAJIgFgOQAJgFALgCQAKgEAKAAQAWABALAJQAKAKAAAWIAABSIgNAAIgEgRIgBAAQgJAMgJAEQgJADgNAAQgSAAgLgJgAAMACQgVAAgKAHQgKAGAAAMQAAALAGAFQAHAFALABQAQAAAKgKQAKgJAAgSIAAgLg");
	this.shape_34.setTransform(505,43.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#666666").s().p("AgnBIQgOgQAAgfQAAgdAOgRQANgRAYAAQAYAAANASIABAAIAAgJIgBgIIAAgyIATAAIAACtIgPAAIgDgQIgBAAQgNASgYAAQgYAAgNgQgAgZgKQgJAMAAAXQAAAYAJAMQAIAMARAAQASAAAJgKQAIgLAAgXIAAgEQAAgZgIgLQgJgLgSAAQgRAAgIAMg");
	this.shape_35.setTransform(491.7,41.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#666666").s().p("AAhA+IAAhOQAAgPgHgHQgHgIgOAAQgTAAgJAKQgIALgBAYIAAA/IgTAAIAAh5IAQAAIADAQIABAAQAFgIALgFQAKgFAMgBQAWAAAMALQAKALABAXIAABPg");
	this.shape_36.setTransform(478,43.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#666666").s().p("AgdA4QgMgHgIgPQgGgPAAgTQAAgdAOgRQAPgRAaAAQAaAAAPARQAPARAAAdQAAAegPARQgPAQgaAAQgQABgNgIgAgbgjQgJAMAAAXQAAAYAJAMQAKAMARAAQASAAAJgMQAKgMAAgYQAAgXgKgMQgJgMgSAAQgRAAgKAMg");
	this.shape_37.setTransform(463.9,43.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#666666").s().p("AgqA4IAAgRQAIAEALADQAKACAJABQAOgBAIgEQAHgFAAgJQAAgHgFgGQgHgFgRgHQgRgFgIgFQgGgFgEgGQgEgGABgIQgBgQAMgIQANgJAUAAQAUABATAHIgHAQQgSgIgPAAQgNAAgGAEQgHAEAAAIQAAAEACAEQADADAGADIAUAJQAWAIAIAHQAIAJgBAMQAAARgNAJQgMAJgWAAQgYABgOgIg");
	this.shape_38.setTransform(445.6,43.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#666666").s().p("AA1BSIgVg0IhAAAIgUA0IgUAAIBBijIAPAAIBBCjgAgGglIgUAyIA1AAIgUgyIgHgYIgGAYg");
	this.shape_39.setTransform(432.8,41.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#CCCCCC").ss(5,0,0,3).p("Eg/gAAAMB/BAAA");
	this.shape_40.setTransform(585,78.9,1.439,1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("EhbZAGGIAAsLMC2zAAAIAAMLg");
	this.shape_41.setTransform(585,39);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("rgba(241,143,1,0.298)").ss(3,1,1).p("AJZxVMgSxAir");
	this.shape_42.setTransform(1110.4,542.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("rgba(241,143,1,0.298)").ss(3,1,1).p("AOX6hMgctA1D");
	this.shape_43.setTransform(1078.6,483.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("rgba(241,143,1,0.298)").ss(3,1,1).p("EATQgjjMgmfBHH");
	this.shape_44.setTransform(1046.2,425.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("rgba(241,143,1,0.298)").ss(3,1,1).p("EAYPgsvMgwdBZf");
	this.shape_45.setTransform(1014.3,366.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("rgba(241,143,1,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_46.setTransform(972.4,326.6,1,1.151,28.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("rgba(241,143,1,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_47.setTransform(908.7,326.6,1,1.151,28.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(241,143,1,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_48.setTransform(845,326.6,1,1.151,28.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("rgba(241,143,1,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_49.setTransform(781.3,326.6,1,1.151,28.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("rgba(241,143,1,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_50.setTransform(717.6,326.6,1,1.151,28.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("rgba(241,143,1,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_51.setTransform(653.9,326.6,1,1.151,28.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("rgba(241,143,1,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_52.setTransform(590.2,326.6,1,1.151,28.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("rgba(241,143,1,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_53.setTransform(526.5,326.6,1,1.151,28.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("rgba(241,143,1,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_54.setTransform(462.8,326.6,1,1.151,28.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("rgba(241,143,1,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_55.setTransform(399.1,326.6,1,1.151,28.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("rgba(241,143,1,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_56.setTransform(335.4,326.6,1,1.151,28.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("rgba(241,143,1,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_57.setTransform(271.7,326.6,1,1.151,28.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("rgba(241,143,1,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_58.setTransform(208,326.6,1,1.151,28.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("rgba(241,143,1,0.298)").ss(3,1,1).p("EAZLgueMgyVBc9");
	this.shape_59.setTransform(160,297.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("rgba(241,143,1,0.298)").ss(3,1,1).p("EAUMglSMgoXBKl");
	this.shape_60.setTransform(128.2,238.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("rgba(241,143,1,0.298)").ss(3,1,1).p("APO8GMgebA4N");
	this.shape_61.setTransform(96.3,179.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("rgba(241,143,1,0.298)").ss(3,1,1).p("AKKywMgUTAlh");
	this.shape_62.setTransform(65,120.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFBF69").s().p("EhbZAzaMAAAhmzMC2zAAAMAAABmzg");
	this.shape_63.setTransform(585,329);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tela2, rect = new cjs.Rectangle(-2.5,-1.5,1175,659.5), [rect]);


// stage content:
(lib.abordagensemergentes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.tela2.visible = false;
		this.tela3.visible = false;
		this.tela_final.y = -700;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// tela_final
	this.tela_final = new lib.tela_final();
	this.tela_final.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.tela_final).wait(1));

	// tela1
	this.tela1 = new lib.tela1();
	this.tela1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.tela1).wait(1));

	// tela2
	this.tela2 = new lib.tela2();
	this.tela2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.tela2).wait(1));

	// tela3
	this.tela3 = new lib.tela3();
	this.tela3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.tela3).wait(1));

	// bg_total
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(241,143,1,0.298)").ss(3,1,1).p("AJZxVMgSxAir");
	this.shape.setTransform(1110,542.2,0.999,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(241,143,1,0.298)").ss(3,1,1).p("AOX6hMgctA1D");
	this.shape_1.setTransform(1078.2,483.4,0.999,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(241,143,1,0.298)").ss(3,1,1).p("EATQgjjMgmfBHH");
	this.shape_2.setTransform(1045.8,425.6,0.999,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(241,143,1,0.298)").ss(3,1,1).p("EAYPgsvMgwdBZf");
	this.shape_3.setTransform(1014,366.8,0.999,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(241,143,1,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_4.setTransform(972.2,326.6,0.999,1.151,0,28.4,28.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(241,143,1,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_5.setTransform(908.5,326.6,0.999,1.151,0,28.4,28.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(241,143,1,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_6.setTransform(844.9,326.6,0.999,1.151,0,28.4,28.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(241,143,1,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_7.setTransform(781.3,326.6,0.999,1.151,0,28.4,28.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(241,143,1,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_8.setTransform(717.7,326.6,0.999,1.151,0,28.4,28.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(241,143,1,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_9.setTransform(654.1,326.6,0.999,1.151,0,28.4,28.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(241,143,1,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_10.setTransform(590.5,326.6,0.999,1.151,0,28.4,28.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(241,143,1,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_11.setTransform(526.8,326.6,0.999,1.151,0,28.4,28.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(241,143,1,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_12.setTransform(463.2,326.6,0.999,1.151,0,28.4,28.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(241,143,1,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_13.setTransform(399.6,326.6,0.999,1.151,0,28.4,28.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(241,143,1,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_14.setTransform(336,326.6,0.999,1.151,0,28.4,28.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(241,143,1,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_15.setTransform(272.4,326.6,0.999,1.151,0,28.4,28.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(241,143,1,0.298)").ss(3,1,1).p("EAAAgyaMAAABk1");
	this.shape_16.setTransform(208.8,326.6,0.999,1.151,0,28.4,28.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(241,143,1,0.298)").ss(3,1,1).p("EAZLgueMgyVBc9");
	this.shape_17.setTransform(160.9,297.5,0.999,1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(241,143,1,0.298)").ss(3,1,1).p("EAUMglSMgoXBKl");
	this.shape_18.setTransform(129.1,238.7,0.999,1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(241,143,1,0.298)").ss(3,1,1).p("APO8GMgebA4N");
	this.shape_19.setTransform(97.2,179.9,0.999,1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(241,143,1,0.298)").ss(3,1,1).p("AKKywMgUTAlh");
	this.shape_20.setTransform(66,120.1,0.999,1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFBF69").s().p("EhbZAzaMAAAhmzMC2zAAAMAAABmzg");
	this.shape_21.setTransform(585.3,329,0.999,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(582.5,327.5,1175,659.5);
p.frameBounds = [rect];
// library properties:
lib.properties = {
	id: 'A44B6838DFA6DB43A2ECD4CA373130D0',
	width: 1170,
	height: 658,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Bertalanffy.jpg?1543319813487", id:"Bertalanffy"},
		{src:"images/Bradford.jpg?1543319813487", id:"Bradford"},
		{src:"images/deming.jpg?1543319813487", id:"deming"},
		{src:"images/drucker.jpg?1543319813487", id:"drucker"},
		{src:"images/fayol.jpg?1543319813487", id:"fayol"},
		{src:"images/fiedler.jpg?1543319813487", id:"fiedler"},
		{src:"images/FrederickTaylor.jpg?1543319813487", id:"FrederickTaylor"},
		{src:"images/Mayo.jpg?1543319813487", id:"Mayo"},
		{src:"images/saussure.jpg?1543319813487", id:"saussure"},
		{src:"images/simon.jpg?1543319813487", id:"simon"},
		{src:"images/weber.jpg?1543319813487", id:"weber"}
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
an.compositions['A44B6838DFA6DB43A2ECD4CA373130D0'] = {
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