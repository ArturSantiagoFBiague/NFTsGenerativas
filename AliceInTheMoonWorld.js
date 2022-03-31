//Umas das minhas preferidas feita no Hydra
function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b


osc1=rnd_btw(1,8)
osc2=rnd_btw(1,3)
osc3=rnd_btw(.8,4)
osc4=rnd_btw(1,10)
noise3=rnd_btw(1,15)
noise4=rnd_btw(0,20)
rotate1=rnd_btw(10,100)
cor=rnd_btw(2.0,2.9)
lado=rnd_btw(3,5)

voronoi(osc1, .1, osc2)
.diff(
  shape(lado, .01, .5).rotate(0 ,-1).colorama(cor)
)
.modulateRotate(noise(noise3, 3.14/rotate1)
)
.diff(
	noise(osc3, .5, 0)
)
.out()
