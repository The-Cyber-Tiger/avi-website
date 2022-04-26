const circle = document.querySelector('.ball');
const cp = document.querySelector('.cp');
const iot = document.querySelector('.iot');
const voice = document.querySelector('.voice');

if (window.screen.width > 992){

    function moveCircle(e) {
        TweenLite.to(circle, 0.3, {
          css: {
            left: e.pageX-25,
            top: e.pageY-75
          }
        });
      }
      
      gsap.set("#cp ,#iot ,#voice",{
          opacity: 0
          });
      
      document.addEventListener('mousemove',(e)=>{
          moveCircle(e);
      });
      
      cp.addEventListener('mouseenter',(e)=>{
          gsap.to("#cp",{opacity: 1})
      });
      cp.addEventListener('mouseleave',(e)=>{
          gsap.to("#cp",{opacity: 0})
      });
      iot.addEventListener('mouseenter',(e)=>{
          gsap.to("#iot",{opacity: 1})
      });
      iot.addEventListener('mouseleave',(e)=>{
          gsap.to("#iot",{opacity: 0})
      });
      voice.addEventListener('mouseenter',(e)=>{
          gsap.to("#voice",{opacity: 1})
      })
      voice.addEventListener('mouseleave',(e)=>{
          gsap.to("#voice",{opacity: 0})
      })
}



