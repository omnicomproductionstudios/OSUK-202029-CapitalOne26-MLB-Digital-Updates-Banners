var mainTL = gsap.timeline();
var expandedTL = gsap.timeline();
var videoPlayTL = gsap.timeline();
var vidPoster, video1;
var _f1 = 0.2;



function init(){ 


  myFT.on('expand', expand);
  myFT.on('contract', contract);
  video1 = myFT.$("#video1");
  var expandClick = myFT.$(".clickthrough");
  var ctaClick = myFT.$(".cta");
  myFT.applyClickTag(expandClick, 1);
  myFT.applyClickTag(video1, 1);
  myFT.applyClickTag(ctaClick, 1);

  vidPoster = document.getElementById('vidPoster');
  banner = document.getElementById('banner')
  vidPoster.addEventListener('click', vidPosterClick)

  document.getElementById('cover').style.display = "none";
  
  banner.addEventListener('mouseenter', onMouseEnter);
  banner.addEventListener('mouseleave', onMouseLeave);
  
  video1.on("ended", function() {
    gsap.to(vidPoster, 0.4,{autoAlpha:1, ease:Power2.easeOut})
    
  }); 

  mainTL.from('.capOneLogo', 0.4,{x:"-=232", ease:'power1.out', overwrite:0}, 0.25)
        .from(redSwoop, 0.25,{alpha:0, scale:"4", x:"-=30", y:"+=40", transformOrigin:"100% 50%", ease:'power1.out', overwrite:0}, 0.5)
        .from(capital, 0.25,{alpha:0, y:"+=10", ease:'power1.inOut', overwrite:0}, 0.5)
        .from(one, 0.25,{alpha:0, y:"+=10", ease:'power1.inOut', overwrite:0}, 0.55)

        
        .from('.ballCont', 2,{x:"-=780", ease: "none"}, _f1+0.25)
        .to(ball, 2,{rotation:"+=1440", ease: "none"}, '<')
}

function vidPosterClick(){
  gsap.to(vidPoster, 0.1,{autoAlpha:0, ease:Power2.easeOut});
  video1[0].play();
  video1[0].muted = false;
}

function expand(){
  
    expandedTL.to(banner, 0,{css:{overflow:"visible"}}, 0)
              .from('.capOneLogo', 0.4,{x:"-=232", ease:'power1.out', overwrite:0}, _f1-0.2)

              .from(expRedSwoop, 0.4,{autoAlpha:0, scale:"2", x:"-=60", y:"+=8", transformOrigin:"50% 50%", ease:'power1.out', overwrite:0,}, _f1)
              .from(expCapital, 0.4,{alpha:0, y:"+=10", ease:'power1.inOut', overwrite:0}, _f1)
              .from(expOne, 0.4,{alpha:0, y:"+=10", ease:'power1.inOut', overwrite:0}, _f1+0.05)

              .from('.ballContExp', 1,{x:"-=335", ease: "none"}, _f1+0.25)
              .to(ballExp, 2,{rotation:"+=1440", ease: "none"}, '<')
                 
      expandedTL.restart();
      // gsap.to('.ballCont', {css:{transform:"unset"}},0);
    }
function contract(){
  // gsap.to('.ballCont', {css:{transform:"unset"}},0.2);
  
  gsap.to(banner, 0,{css:{overflow:"hidden"}}, 0)
  mainTL.restart();
}

function onMouseEnter(){
  gsap.to(rArrow, 0.2,{x:5, ease:'power1.out'})
  gsap.to(rArrowExp, 0.2,{x:5, ease:'power1.out'})
}
function onMouseLeave(){
  gsap.to(rArrow, 0.2,{x:0, ease:'power1.out'})
  gsap.to(rArrowExp, 0.2,{x:0, ease:'power1.out'})
}

window.onload=init;