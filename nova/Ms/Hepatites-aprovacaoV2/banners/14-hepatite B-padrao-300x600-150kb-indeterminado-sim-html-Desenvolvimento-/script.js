var animations = [
  [
    {
      id: '#i01',
      duration: 250,
      delayBefore: 250,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
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
      delayBefore: 450,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },  
    {
      id: '#i04',
      duration: 650,
      delayBefore: 550,
      delayAfter: 3000,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },    
  ],
  [
    {
      id: '#i05',
      duration: 250,
      delayBefore: 250,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },   
    {
      id: '#i06',
      duration: 650,
      delayBefore: 350,
      delayAfter: 2500,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },  
  ],
  [
    {
      id: '#i07',
      duration: 250,
      delayBefore: 250,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },     
    {
      id: '#i08',
      duration: 650,
      delayBefore: 250,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },   
    {
      id: '#i09',
      duration: 650,
      delayBefore: 350,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },  
    {
      id: '#i10',
      duration: 650,
      delayBefore: 450,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },  
    {
      id: '#i11',
      duration: 650,
      delayBefore: 550,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },   
    {
      id: '#i11-1',
      duration: 650,
      delayBefore: 650,
      delayAfter: 3500,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },   
  ],
  [
    {
      id: '#i12',
      duration: 250,
      delayBefore: 250,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },   
    {
      id: '#i13',
      duration: 650,
      delayBefore: 350,
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