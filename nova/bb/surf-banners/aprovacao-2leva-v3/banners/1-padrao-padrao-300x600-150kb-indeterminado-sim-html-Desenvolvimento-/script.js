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
      duration: 250,
      delayBefore: 150,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i03',
      duration: 750,
      delayBefore: 950,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i04',
      duration: 750,
      delayBefore: 1050,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i05',
      duration: 750,
      delayBefore: 1150,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:"-160px"}
    },
    {
      id: '#i03-1',
      duration: 50,
      delayBefore: 1850,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i03-2',
      duration: 50,
      delayBefore: 2850,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i03-2',
      duration: 50,
      delayBefore: 3850,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0, top:0, left:0}
    },
    {
      id: '#i03-1',
      duration: 50,
      delayBefore: 4850,
      delayAfter: 500,
      easing: "easeOutCubic",
      animations: {opacity:0, top:0, left:0}
    },
  ],
  [
     {
      id: '#i06',
      duration: 550,
      delayBefore: 150,
      delayAfter: 2000,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },  
  ]
 ]
 new WAnimation(animations, {
     loop: true,
     clearAfterEnd: false,
   }).startAnimation();      