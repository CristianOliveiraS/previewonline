var animations = [
  [
    {
      id: '#i01',
      duration: 250,
      delayBefore: 0,
      delayAfter: 0,
      animations: {opacity:1}
    },
    {
      id: '#i02',
      duration: 650,
      delayBefore: 350,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },   
    {
      id: '#i03',
      duration: 650,
      delayBefore: 350,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },  
    {
      id: '#i04',
      duration: 650,
      delayBefore: 450,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },  
    {
      id: '#i05',
      duration: 650,
      delayBefore: 550,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },  
    {
      id: '#i06',
      duration: 650,
      delayBefore: 650,
      delayAfter: 2800,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },  
  ],
  [
    {
      id: '#i07',
      duration: 550,
      delayBefore: 350,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    }, 
    {
      id: '#i08',
      duration: 750,
      delayBefore: 550,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    }, 
    {
      id: '#i09',
      duration: 650,
      delayBefore: 750,
      delayAfter: 3000,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    }, 
  ],
  [
    {
      id: '#i10',
      duration: 250,
      delayBefore: 0,
      delayAfter: 0,
      animations: {opacity:1}
    },
    {
      id: '#i10-1',
      duration: 750,
      delayBefore: 250,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    }, 
    {
      id: '#i14',
      duration: 750,
      delayBefore: 350,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },  
    {
      id: '#i13',
      duration: 750,
      delayBefore: 450,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },  
    {
      id: '#i12',
      duration: 750,
      delayBefore: 550,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },  
    {
      id: '#i11',
      duration: 750,
      delayBefore: 650,
      delayAfter: 2500,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },  
  ],
  [
    {
      id: '#i15',
      duration: 350,
      delayBefore: 250,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1}
    },
    {
      id: '#i16',
      duration: 750,
      delayBefore: 450,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },  
    {
      id: '#i17',
      duration: 750,
      delayBefore: 550,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },  
    {
      id: '#i18',
      duration: 750,
      delayBefore: 650,
      delayAfter: 3000,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },  
  ],
 ]
 new WAnimation(animations, {
     loop: true,
     clearAfterEnd: false,
   }).startAnimation();      