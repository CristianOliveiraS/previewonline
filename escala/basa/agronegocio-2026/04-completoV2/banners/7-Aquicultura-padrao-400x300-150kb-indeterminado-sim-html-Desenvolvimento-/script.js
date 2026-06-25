var animations = [
  [ 
    {
      id: '#i01',
      duration: 250,
      delayBefore: 150,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i02',
      duration: 750,
      delayBefore: 350,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i03',
      duration: 750,
      delayBefore: 450,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i04',
      duration: 750,
      delayBefore: 650,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i04',
      duration: 450,
      delayBefore: 650,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, scale:[1.02],top:0, left:0}
    },
    {
      id: '#i04',
      duration: 450,
      delayBefore: 650,
      delayAfter: 2800,
      easing: "easeOutCubic",
      animations: {opacity:1,scale:[1],top:0, left:0}
    },
    {
      id: '#i05',
      duration: 750,
      delayBefore: 750,
      delayAfter: 4000,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
  ],
 ]
 new WAnimation(animations, {
     loop: true,
     clearAfterEnd: false,
   }).startAnimation();      