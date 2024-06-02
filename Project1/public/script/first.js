const tl=gsap.timeline();

function moveLeftPage(){
  tl.to('.login',{
    x:"-90%"
  })
  tl.to('.reg',{
    opacity:0
  })
}
function moveRightPage(){
    tl.to('.login',{
      x:"100%",
      duration:1,
    },'a')
    tl.to('.reg',{
      opacity:1,
      duration:0.5
    },'a')
  }
const loginbtn=document.querySelector('button');
const login=document.querySelector('.login')
loginbtn.addEventListener('click',function(){
    moveLeftPage();
})

const cut=document.querySelector('.login i');
cut.addEventListener('click',function(){
    moveRightPage();
})
