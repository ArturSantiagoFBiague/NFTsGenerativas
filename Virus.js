//Arte feita no Hydra
function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b


osc1=rnd_btw(3,30)
osc2=rnd_btw(0.01,0.9)
osc3=rnd_btw(0.03,2)
osc4=rnd_btw(1,10)
noise1=rnd_btw(0.03,6)
noise4=rnd_btw(0,20)
rotate1=rnd_btw(10,100)
rotate2=rnd_btw(10,50)
cor=rnd_btw(3.0,3.9)
lado=rnd_btw(3,5)







shape(lado, .3, .30).rotate(()=>time/rotate1).modulateRotate(noise(noise1, 3.14/rotate2))
.diff(osc(osc1, .06, .06).add(gradient(2.3, .01).posterize(osc2 , 0.3 )))
.mult(shape(60, .1, 4).pixelate(0.01, 320).colorama(cor).rotate(()=>time/3))
.diff(noise(osc3, .1, 1))
.blend(o3)
.out()
