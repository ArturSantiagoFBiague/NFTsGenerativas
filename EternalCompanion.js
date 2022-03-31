//Arte feita no Hydra
function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b


osc1=rnd_btw(7.0,7.9)
osc2=rnd_btw(0.06,6)
osc3=rnd_btw(20,200)
osc4=rnd_btw(.03,2)
noise1=rnd_btw(0.03,6)
noise4=rnd_btw(0,20)
rotate1=rnd_btw(10,100)
rotate2=rnd_btw(10,50)
cor=rnd_btw(2.0,2.9)
cor2=rnd_btw(1.0,3.9)
lado=rnd_btw(-8,8)
lado2=rnd_btw(.4,4.9)

shape(3, .3, .30).rotate(()=>time/10).modulateRotate(noise(.006, 3.14/10))
.diff(osc(3, .06, .06).add(gradient(cor2, .01).posterize(osc1 , 0.3 )))
.add(shape(60, 0.1, lado2).pixelate(osc2, osc3).colorama(cor).rotate(()=>time/lado))
.diff(noise(osc4, .1, 01))
.blend(o3)
.out()
