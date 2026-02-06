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
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i04-1',
      duration: 650,
      delayBefore: 450,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i04-2',
      duration: 650,
      delayBefore: 750,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i04-3',
      duration: 650,
      delayBefore: 850,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i04-4',
      duration: 650,
      delayBefore: 950,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i04-5',
      duration: 650,
      delayBefore: 1050,
      delayAfter: 3000,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
  ],
  [
     {
      id: '#i01',
      duration: 850,
      delayBefore: 0,
      delayAfter: 0,
      easing: "easeInOutCubic",
      animations: {opacity:1, top:"-100%", left:0}
    },   
    {
      id: '#i02',
      duration: 850,
      delayBefore: 0,
      delayAfter: 4000,
      easing: "easeInOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
  ],
  [
       {
      id: '#i02',
      duration: 850,
      delayBefore: 0,
      delayAfter: 0,
      easing: "easeInOutCubic",
      animations: {opacity:1, top:"-100%", left:0}
    },   
    {
      id: '#i03',
      duration: 850,
      delayBefore: 0,
      delayAfter: 4000,
      easing: "easeInOutCubic",
      animations: {opacity:1, top:0, left:0}
    },  
  ],
  [
    {
      id: '#i04',
      duration: 250,
      delayBefore: 0,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0, top:0, left:0}
    },
    {
      id: '#i04-1',
      duration: 250,
      delayBefore: 0,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0, top:0, left:0}
    },
    {
      id: '#i04-2',
      duration: 250,
      delayBefore: 0,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0, top:0, left:0}
    },
    {
      id: '#i04-3',
      duration: 250,
      delayBefore: 0,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0, top:0, left:0}
    },
    {
      id: '#i04-4',
      duration: 250,
      delayBefore: 0,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0, top:0, left:0}
    },
    {
      id: '#i04-5',
      duration: 250,
      delayBefore: 0,
      delayAfter: 400,
      easing: "easeOutCubic",
      animations: {opacity:0, top:0, left:0}
    },
  ]
 ]
 new WAnimation(animations, {
     loop: true,
     clearAfterEnd: false,
   }).startAnimation();      