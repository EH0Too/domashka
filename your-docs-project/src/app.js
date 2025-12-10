gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if(ScrollTrigger.isTouch !==1){
ScrollSmoother.create({
 wrapper:'.wrapper',
 content:'.content',   
 smooth: 1.5,
 effects: true,
})
gsap.fromTo('.hero-section',{opacity: 1},{opacity:0,
    scrollTrigger:{
        trigger  :'.hero-section',
        start:'center',
        end:'820',
        scrub: true,
    }
})

    let itemsL= gsap.utils.toArray('.gallery-left .gallery-item')

    itemsL.forEach( item =>{
            gsap.fromTo(item,{x:-50 ,opacity:0},{opacity:1, x: 0,
            scrollTrigger:{
                trigger: item,
                scrub: true,
                start: 'top 80%', 
                end: 'top 30%',
            }
        }) 
        
    })
    

    let itemsR= gsap.utils.toArray('.gallery-right .gallery-item')

    itemsR.forEach( item =>{
            gsap.fromTo(item,{x: 50 ,opacity:0},{opacity:1, x: 0,
            scrollTrigger:{
                trigger: item,
                scrub: true,
                start: 'top 80%', 
                end: 'top 30%',
            }
        }) 
        
    })
        gsap.fromTo('.footer', 
    { y: 50, opacity: 0 },
    {
        y: 0,
        opacity: 1,
        scrollTrigger: {
        trigger: '.footer',
        start: 'top 90%',
        toggleActions: 'play none none none'
        }
    }
    );

}