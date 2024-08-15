
function page1anim(){
    var tl=gsap.timeline()

    tl.from("nav h1,nav h4,nav button",{
        opacity:0,
        y:-30,
        duration:0.4,
        delay:0.1,
        stagger:0.1
        
    })
    tl.from(".center-part1 h1",{
        x:-100,
        opacity:0,
        duration:0.4
    })
    tl.from(".center-part1 p",{
        x:-100,
        opacity:0,
        duration:0.4
    })
    
    tl.from(".center-part1 button",{
        opacity:0,
        y:-10,
        duration:0.3
    })
    tl.from(".center-part2 img",{
        x:20,
        opacity:0,
        duration:0.5
    },"-=0.3")
    
    tl.from(".section1bottom img",{
        opacity:0,
        y:30,
        duration:0.7,
        stagger:0.15
    })
}
page1anim()

function page2anim(){
    var tl=gsap.timeline({
        scrollTrigger:{
            trigger:".section2",
            scroller:"body",
            start:"top 50%",

            end:"top -20",
            scrub:1,
            
        }
    })
    
    tl.from(".services",{
        y:30.,
        opacity:0,
        duration:0.5
    })
    
    tl.from(".elem.line1.left",{
        duartion:1,
        x:-300,
        opacity:0
    },"anim1")
    tl.from(".elem.line1.right",{
        duartion:1,
        x:300,
        opacity:0
    },"anim1")
    tl.from(".elem.line2.left",{
        duartion:1,
        x:-300,
        opacity:0
    },"anim2")
    tl.from(".elem.line2.right",{
        duartion:1,
        x:300,
        opacity:0
    },"anim2")
}

page2anim()