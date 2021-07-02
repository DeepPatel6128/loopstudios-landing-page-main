// const imagePath = {
//     curviness:0,
//     autoRotate:false,
//     values:[
//         {left:0, opacity:1}
//     ]
// }
// const textPath = {
//     curviness:0,
//     autoRotate:false,
//     values:[
//         {right:0, opacity:1}
//     ]
// };

// const tween = new TimelineLite();

// tween.add(
//     TweenLite.to('.image',1 ,{
//         bezier:imagePath,
//         ease:Power1.ease
//     }),
//     TweenLite.to('.animation-2',1,{
//         bezier:textPath,
//         ease:Power1.ease
//     })
// );

// const controller = new ScrollMagic.Controller();

// const scene = new ScrollMagic.Scene({
//     triggerElement: '.animation',
//     duration:1
// })
// .addIndicators()

const obs = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.target.firstElementChild.classList.contains('animation-1') && entry.isIntersecting == true){
            entry.target.firstElementChild.classList.add('animate-image')
        }
        if(entry.target.lastElementChild.classList.contains('animation-2') && entry.isIntersecting == true){
             entry.target.lastElementChild.classList.add('animate-text')
        }
        if(entry.target.classList.contains('photo-grid') && entry.isIntersecting === true){
            entry.target.classList.add('animate-grid')
        }
    })
})
obs.observe(document.querySelector('.animation'))
obs.observe(document.querySelector('.photo-grid'))