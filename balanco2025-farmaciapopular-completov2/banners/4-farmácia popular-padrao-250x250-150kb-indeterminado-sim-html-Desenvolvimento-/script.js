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
      animations: {opacity:1, left:"88px"}
    },
    {
      id: '#i03',
      duration: 750,
      delayBefore: 450,
      delayAfter: 3000,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },
  ],
  [
    {
      id: '#i03',
      duration: 350,
      delayBefore: 0,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0, left:"-100%"}
    },  
    {
      id: '#i02',
      duration: 550,
      delayBefore: 350,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:"-88px"}
    },  
  ],
  [
    {
      id: '#i04',
      duration: 750,
      delayBefore: 250,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },
    {
      id: '#i05',
      duration: 750,
      delayBefore: 250,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },
    {
      id: '#i06',
      duration: 750,
      delayBefore: 450,
      delayAfter: 3000,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },
  ],
  [
    {
      id: '#i06',
      duration: 250,
      delayBefore: 0,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0, left:0, top:0}
    },  
  ],
  [
    {
      id: '#i06-1',
      duration: 750,
      delayBefore: 250,
      delayAfter: 2500,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    }
  ],
  [
    {
      id: '#i07',
      duration: 400,
      delayBefore: 200,
      delayAfter: 0,
      animations: {opacity:1}
    }, 
    {
      id: '#i08',
      duration: 750,
      delayBefore: 350,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },
    {
      id: '#i09',
      duration: 750,
      delayBefore: 450,
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