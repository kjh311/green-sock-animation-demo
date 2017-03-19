// $( document ).ready(function() {
    // alert( "ready!" );



var photo = document.getElementById("kev"); //or use jQuery's $("#photo")
TweenLite.to(kev, 2, {left:400, opacity:1, rotation:360, transformOrigin:"center", ease:Power2.easeOut, delay:1});
// TweenMax.to('.kev', 2, {width:600});
var button1 = document.getElementById("button1");
TweenLite.to(button1, 1, {left:400, opacity:1, width:300, ease:Power2.easeOut, delay:2.3});

var button2 = document.getElementById("button2");
TweenLite.to(button2, 1, {left:400, opacity:1, width:320, ease:Power2.easeOut, delay:2.4});

var button3 = document.getElementById("button3");
TweenLite.to(button3, 1, {left:400, opacity:1, width:340, ease:Power2.easeOut, delay:2.5});

var button4 = document.getElementById("button4");
TweenLite.to(button4, 1, {left:400, opacity:1, width:360, ease:Power2.easeOut, delay:2.6});

var button5 = document.getElementById("button5");
TweenLite.to(button5, 1, {left:400, opacity:1, width:380, ease:Power2.easeOut, delay:2.7});

var button6 = document.getElementById("button6");
TweenLite.to(button6, 1, {left:400, opacity:1, width:400, ease:Power2.easeOut, delay:2.8});

var bar1 = document.getElementById("bar1");
TweenLite.to(bar1, 1, { opacity:1, ease:Power2.easeOut, delay:3.5});
var tl = new TimelineMax();
tl.to(bar1, 2, {height:100, top:180, repeat:-1, yoyo:true})
tl.play();

var bar2 = document.getElementById("bar2");
TweenLite.to(bar2, 1, { opacity:1, ease:Power2.easeOut, delay:3.6});
var tl2 = new TimelineMax();
tl2.to(bar2, 2.2, {height:50, top:230, repeat:-1, yoyo:true, delay:1})
tl2.play();

var bar3 = document.getElementById("bar3");
TweenLite.to(bar3, 1, { opacity:1, ease:Power2.easeOut, delay:3.7});
var tl2 = new TimelineMax();
tl2.to(bar3, 2.2, {height:70, top:210, repeat:-1, yoyo:true, delay:1.1})
tl2.play();


function myFunction(){
  // alert('done');
}







// });