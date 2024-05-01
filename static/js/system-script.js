const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });


function firstPageAnim() {
    var tl = gsap.timeline();
  
    tl.from(".bounding .boundingelem1", {
        y: "-10",
        opacity: 0,
        duration: 3,
        ease: Expo.easeInOut,
      })
      .to(".bounding .boundingelem1", {
        opacity: 0,
        duration: 1,
        // delay: 1, // Delay for 1 second after the previous animation
        ease: Expo.easeInOut,
      })
      .from(".bounding .boundingelem2", {
        y: "-10",
        opacity: 0,
        duration: 2,
        ease: Expo.easeInOut,
        delay: -1,
        stagger: 0.2
      })
    //   .to(".bounding .boundingelem2", {
    //     y: 0,
    //     ease: Expo.easeInOut,
    //     duration: 2,
    //     delay: -1,
    //     stagger: 0.2,
    //   })
      .from(".smallelem", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut,
      });
  }


var timeout;

function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function(dets) {
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`; 
    });
}

function circleFlattening() {
    //define default scale vale
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function(dets) {
        clearTimeout(timeout);//hoisting being used here 

        xscale = gsap.utils.clamp(0.8,1.2,dets.clientX - xprev);
        yscale = gsap.utils.clamp(0.8,1.2,dets.clientY - yprev);
        
        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMouseFollower(xscale, yscale);
        
        timeout = setTimeout(function(){
            document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
        }, 30) //async function
    });
}

circleMouseFollower()
circleFlattening()
firstPageAnim()

