$(function(){

    gsap.set('header .menu-wrap .menu-item',{
        opacity:0,
        yPercent:100,
    })

    menu = gsap.to('header .menu-wrap .menu-item',{
        opacity:1,
        yPercent:0,
        paused:true,
        stagger:0.1,
    })

    $('.btn-menu').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.menu-wrap').toggleClass('active');

        menu.restart();
    })
  
   const frame1 = gsap.to('.shrink-inner',{
        scrollTrigger:{
            trigger:".hori-inner",
            start:"0% 0%",
            end:"600%",
            // markers:true,
            scrub:1,
            pin:true,
            invalidateOnRefresh: true,
        },
        ease:'none',
        xPercent:-100,
        x:()=>{
            return window.innerWidth
        }
   })

   const frame2 = gsap.to('.shrink-inner2',{
        scrollTrigger:{
            trigger:".sub1-4",
            start:"0% 0%",
            end:"300%",
            // markers:true,
            scrub:1,
            pin:true,
            invalidateOnRefresh: true,
        },
        ease:'none',
        xPercent:-100,
        x:()=>{
            return window.innerWidth
        }
   })

   const page_home = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            containerAnimation: frame1,
            start: "0% 0%",
            end:"100% 50%",
            // markers:true,
            scrub:1,
        },
        ease:'none'
   }) 

   page_home
      .addLabel('a')
      .to('.home .txt1',{
        xPercent:50
      },'a')

      .to('.home .txt2',{
        xPercent:-150
      },'a')
      .to('.home .txt3',{
        xPercent:50
      },'a')
      
      gsap.to('.clinique .thumb-wrap img', {
        xPercent:-20, 
        scrollTrigger: {
            trigger:".clinique",
            containerAnimation: frame1,
            start: "0% 100%",
            end:"100% 100%",
            // markers:true,
            scrub:1,
        },
        ease:'none'
    });

    const page_showereel = gsap.timeline({
          scrollTrigger: {
              trigger: ".showereel",
              containerAnimation: frame1,
              start: "-50% 0%",
              end:"100% 50%",
              // markers:true,
              scrub:1,
          },
          ease:'none'
    }) 

    page_showereel
        .addLabel('a')
        .to('.showereel .txt3',{
          xPercent:10
        },'a')
        .to('.showereel .txt5',{
          xPercent:-10
        },'a')
      
    const page_gallery = gsap.timeline({
      scrollTrigger: {
          trigger: ".gallery",
          containerAnimation: frame1,
          start: "-50% 0%",
          end:"300% 300%",
          // markers:true,
          scrub:1,
      },
      ease:'none'
    }) 
    page_gallery
        .addLabel('a')
        .to('.gallery .style1 img',{
          y:-300
        },'a')
        .to('.gallery .style2 img',{
          y:300
        },'a')
        .to('.gallery .style3 img',{
          y:-300
        },'a')   

    const page_services = gsap.timeline({
      scrollTrigger: {
          trigger: ".services",
          containerAnimation: frame1,
          start: "-50% 0%",
          end:"200% 200%",
          // markers:true,
          scrub:1,
      },
      ease:'none'
    }) 

    page_gallery
        .addLabel('a')
        .to('.services .sc-title h3.txt1',{
          x:0
        },'a')
        .to('.services .sc-title h3.txt2',{
          x:600
        },'a')
        .to('.services .sc-title h3.txt3',{
          x:-400
        },'a')
        .to('.services .sc-title h3.txt4',{
          x:350
        },'a')
        .to('.services .sc-title h3.txt5',{
          x:-300
        },'a')
        .to('.services .sc-title h3.txt6',{
          x:400
        },'a')

   gsap.to('.motion1', {
        scale:3,
        scrollTrigger: {
            trigger: ".section1",
            containerAnimation: frame1,
            start: "0% 0%",
            end:"100% 50%",
            // markers:true,
            scrub:1,
        },
        ease:'none'
    });

    gsap.to('.motion2', {
        scale:3,
        scrollTrigger: {
            trigger: ".section4",
            containerAnimation: frame1,
            start: "0% 50%",
            end:"100% 50%",
            // markers:true,
            scrub:1,
        },
        ease:'none'
    });

    gsap.to('.motion3', {
        scale:3,
        scrollTrigger: {
            trigger: ".sub1-1",
            start: "0% 50%",
            end:"100% 50%",
            // markers:true,
            scrub:1,
        },
        ease:'none'
    });

    gsap.to('.motion4', {
        scale:3,
        scrollTrigger: {
            trigger: ".sub2-1",
            containerAnimation: frame2,
            start: "30% 0%",
            end:"100% 50%",
            // markers:true,
            scrub:1,
        },
        ease:'none'
    });

})