var tl = gsap.timeline({scrollTrigger:{
    trigger:"#main",
    start:"50% 50%",
    end:"100% 50%",
    scrub:2,
    pin:true
}});

tl
.to("#top",{
    top:"-50%"
},'a')

.to("#bottom",{
    bottom:"-50%"
},'a')

.to("#top-h",{
    top:"60%"
},'a')

.to("#btm-h",{
    bottom:"-i60%"
},'a')
