function scCheck(){
  if ($(document).scrollTop() >= $(window).height()-4) {
    $('.navbar').addClass('navbar-fixed')
    $('#slide-in-header-projects').addClass('slide-in')
    
} else {
    $('.navbar').removeClass('navbar-fixed')
    $('#slide-in-header-projects').removeClass('slide-in')

}

if ($(document).scrollTop() >= $(window).height()*2-4) {
  $('#slide-in-header-experience').addClass('slide-in')
  
} else {
  $('#slide-in-header-experience').removeClass('slide-in')

}
}
$(document).on('scroll',function(){
    scCheck();

 
});

var texts = ["game", "backend", "software"]
var textIndex = 0;
var wordIndex = 0;

function updateWord(){
    $("#typewriter").html(texts[textIndex].substring(0, wordIndex))
}

function type(){
    if(textIndex > texts.length){
        textIndex = 0;
        wordIndex = 0;
    }
    wordIndex+=1;
    if(wordIndex > texts[textIndex].length){
        textIndex+=1;
        setTimeout(startTyping, 1000)
    }else {
        updateWord();
        setTimeout(type, Math.random() * 30 + 70)
    }
}
function startTyping(){
    wordIndex = 0;
    setTimeout(type, Math.random() * 30 + 70)
}


startTyping();





var allItems = ["home", "projects", "experience", "contact"]
var current = "home";
function switchTo(to){
  //disableScroll();
  //setTimeout(enableScroll, 1000)
  current = to;
  allItems.forEach(x=> {
    $('#nav-item-' + x).removeClass('active-nav')
  })

  $('#nav-item-' + to).addClass('active-nav')

}


switchTo(window.location.hash.replace("#", ""))

var root = document.querySelector(':root')
window.onresize = function(){
  //root.setAttribute("style", "scroll-behavior: auto;");

  var id = current;
  var element = document.getElementById(id);
  /*element.scrollIntoView({
    behavior: "auto"

  })*/
  //root.setAttribute("style", "scroll-behavior: smooth;");
};





var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

// $( document ).ready( function () {
//   $( "a[href*='#']" ).on( "click", function( event ) {
      
//       var href = event.target.href; 
//       href = href.slice( href.indexOf( "#" ), href.length );
//       scrollto($( href ).get( 0 ))
//   } );
// } );

// function scrollto(to){
//   var smoothScrollFeature = 'scrollBehavior' in document.documentElement.style;
//   to = to.offsetTop;
//   var i = parseInt(window.pageYOffset);
//   if ( i != to ) {
    
      
//   }
// };
var scroll = new SmoothScroll('a[href*="#"]');
document.addEventListener('gesturestart', function (e) {
  e.preventDefault();
});