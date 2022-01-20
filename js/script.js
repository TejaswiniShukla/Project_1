function fullScreen(){
  
  function initialise(){
    $('#headText').textillate({
      selector: '.texts',
      loop: false,
      minDisplayTime: 2000,
      initialDelay: 0,
      autoStart: true,
    
      in: {
        effect: 'fadeInUp',
        delayScale: 1.5,
        delay: 25,
        sync: false,
        shuffle: false,
      },
    }); 
    sec1()
  }
  
  function sec1(){
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#imgs",
        start: "top top",
        pin:true,
        scrub:true,
      },
    })
    .addLabel("vid","+=0")
    .to("#large",{
      width:"100%",
      ease:Expo.easeInOut,
    },"vid")
    .to("#sm1 , #med1",{
      x:-130,
      opacity:0,
      duration:.5,
      ease:Expo.easeInOut,
    },"vid")
    .to("#sm2 , #med2",{
      x:130,
      opacity:0,
      duration:.5,
      ease:Expo.easeInOut,
    },"vid")
  sec2()
  }
  
  function sec2(){
    var tl2 = gsap.timeline({
      onStart:function(){
        $('#t_head , #t_shead').textillate({
          selector: '.texts',
          loop: false,
          minDisplayTime: 3000,
          initialDelay: 1,
          autoStart: true,
        
          in: {
            effect: 'fadeInUp',
            delayScale: 2.0,
            delay: 50,
            sync: false,
            shuffle: false,
          }
        });
      },
      scrollTrigger: {
        trigger: "#two",
        
        start: "top 60%",
      },
    })
    .to("#t_head,#t_shead",{
      opacity:1
    })
    .to("#t_line",{
      width:"100%",
      ease:Expo.easeInOut,
      duration : 1.5,
    })
  
  
    // Animation for image and paragraph
    var tl3 = gsap.timeline({
  
      onStart:function(){
        $('#bleft p').textillate({
          selector: '.texts',
          loop: false,
          minDisplayTime: 3000,
          initialDelay: 1,
          autoStart: true,
        
          in: {
            effect: 'fadeInUp',
            delayScale: 0.1,
            delay: 50,
            sync: false,
            shuffle: false,
          }
        });
      },
      scrollTrigger: {
        trigger: "#t_box",
        start: "top 60%",
      }, 
    })
    .to("#bleft p",{
      opacity:1,
    })
    .to("#bimg",{
      scale :1.5,
      ease:Expo.easeInOut,
      duration:1.0,
      delay:0
    },"box")
    .to("#bimg img",{
      scale:1.0,
      ease:Expo.easeInOut,
      duration:1.0,
      delay:0
    },"box")
  sec3()
  
  }
  
  function sec3(){
    var tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: "#three",
        start: "top 60%",
      },
    })
  
    var tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: "#timg",
        start: "top 70%",
      }
    })
    .to("#timg",{
      scale :1.5,
      ease:Expo.easeInOut,
      duration:1,
      delay:0
    },"box1")
    .to("#timg img",{
      scale:1.0,
      ease:Expo.easeInOut,
      duration:1,
      delay:0
    },"box1")
  
  }
  initialise()
}


function mobile(){
  function minitialise(){
    $('#headText').textillate({
      selector: '.texts',
      loop: false,
      minDisplayTime: 2000,
      initialDelay: 0,
      autoStart: true,
    
      in: {
        effect: 'fadeInUp',
        delayScale: 1.5,
        delay: 25,
        sync: false,
        shuffle: false,
      },
    }); 
    msec1()
  }
  
  function msec1(){
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#imgs",
        start: "top top",
        // pin:true,
        // scrub:true,
      }
    })
    .addLabel("vid","+=0")
    .to("#large",{
      width:"100%",
      ease:Expo.easeInOut,
    },"vid")
    .to("#sm1 , #med1",{
      x:-130,
      opacity:0,
      duration:.5,
      ease:Expo.easeInOut,
    },"vid")
    .to("#sm2 , #med2",{
      x:130,
      opacity:0,
      duration:.5,
      ease:Expo.easeInOut,
    },"vid")
  msec2()
  }
  
  function msec2(){
    var tl2 = gsap.timeline({
      onStart:function(){
        $('#t_head , #t_shead').textillate({
          selector: '.texts',
          loop: false,
          minDisplayTime: 3000,
          initialDelay: 1,
          autoStart: true,
        
          in: {
            effect: 'fadeInUp',
            delayScale: 2.0,
            delay: 50,
            sync: false,
            shuffle: false,
          }
        });
      },
      scrollTrigger: {
        trigger: "#two",
        start: "top 60%",
      }
    })
    .to("#t_head,#t_shead",{
      opacity:1
    })
    .to("#t_line",{
      width:"100%",
      ease:Expo.easeInOut,
      duration : 1.5,
    })
  
  
    // Animation for image and para
    var tl3 = gsap.timeline({
  
      onStart:function(){
        $('#bleft p').textillate({
          selector: '.texts',
          loop: false,
          minDisplayTime: 3000,
          initialDelay: 1,
          autoStart: true,
        
          in: {
            effect: 'fadeInUp',
            delayScale: 0.1,
            delay: 50,
            sync: false,
            shuffle: false,
          }
        });
      },
      scrollTrigger: {
        trigger: "#t_box",
        start: "top 60%",
       
      },
      
    })
    .to("#bleft p",{
      opacity:1,
    })
    .to("#bimg",{
      scale :1.5,
      ease:Expo.easeInOut,
      duration:1.0,
      delay:0.1
    },"box")
    .to("#bimg img",{
      scale:1.0,
      ease:Expo.easeInOut,
      duration:1.0,
      delay:0.1
    },"box")
  msec3()
  
  }
  
  function msec3(){
    var tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: "#three",
        start: "top 60%",
      },
    })
  
    var tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: "#timg",
        start: "top 70%",
      }
    })
    .to("#timg",{
      scale :1.5,
      ease:Expo.easeInOut,
      duration:1,
      delay:0
    },"box1")
    .to("#timg img",{
      scale:1.0,
      ease:Expo.easeInOut,
      duration:1,
      delay:0
    },"box1")
  }
  minitialise()
}


function start(){
  if(screen.width <= 450){
    mobile()
  }
  else{
    fullScreen()
  }
}

start()