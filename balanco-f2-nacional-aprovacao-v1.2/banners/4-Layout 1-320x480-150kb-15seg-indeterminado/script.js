var animations = [
  [
    {
      id: '#i01',
      duration: 400,
      delayBefore: 200,
      delayAfter: 0,
      animations: {opacity:1}
    }, 
    {
      id: '#i02',
      duration: 750,
      delayBefore: 250,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1,  top:0}
    },
    {
      id: '#i03',
      duration: 750,
      delayBefore: 450,
      delayAfter: 3000,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },
    {
      id: '#i04',
      duration: 750,
      delayBefore: 650,
      delayAfter: 3000,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },
    {
      id: '#i05',
      duration: 750,
      delayBefore: 850,
      delayAfter: 3000,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },
    {
      id: '#i06',
      duration: 750,
      delayBefore: 1050,
      delayAfter: 3000,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },
  ],
 ]
 new WAnimation(animations, {
     loop: false,
     clearAfterEnd: false,
   }).startAnimation();      