var animations = [
  [ 
    {
      id: '#i01',
      duration: 100,
      delayBefore: 0,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i04',
      duration: 650,
      delayBefore: 350,
      delayAfter: 4000,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
  ],
  [
     {
      id: '#i01',
      duration: 400,
      delayBefore: 0,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:"-100%", left:0}
    },   
    {
      id: '#i02',
      duration: 400,
      delayBefore: 250,
      delayAfter: 4000,
      easing: "easeOutBack",
      animations: {opacity:1, top:0, left:0}
    },
  ],
  [
       {
      id: '#i02',
      duration: 400,
      delayBefore: 0,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:"-100%", left:0}
    },   
    {
      id: '#i03',
      duration: 400,
      delayBefore: 250,
      delayAfter: 4000,
      easing: "easeOutBack",
      animations: {opacity:1, top:0, left:0}
    },  
  ],
  [
    {
      id: '#i04',
      duration: 650,
      delayBefore: 0,
      delayAfter: 400,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:"-100%"}
    },
  ]
 ]
 new WAnimation(animations, {
     loop: true,
     clearAfterEnd: false,
   }).startAnimation();      