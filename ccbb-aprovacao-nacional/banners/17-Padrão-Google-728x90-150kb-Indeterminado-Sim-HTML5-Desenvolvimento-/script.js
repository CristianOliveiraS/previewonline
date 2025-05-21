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
      duration: 650,
      delayBefore: 350,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i03',
      duration: 650,
      delayBefore: 350,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i04',
      duration: 650,
      delayBefore: 450,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i05',
      duration: 650,
      delayBefore: 650,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i06',
      duration: 650,
      delayBefore: 750,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i07',
      duration: 650,
      delayBefore: 850,
      delayAfter: 2500,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
  ],
  [
    {
      id: '#i06',
      duration: 550,
      delayBefore: 0,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0, top:0, left:0, scale:[0.5,1]}
    },
    {
      id: '#i05',
      duration: 550,
      delayBefore: 0,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0, top:0, left:0, scale:[0.5,1]}
    },
    {
      id: '#i07',
      duration: 550,
      delayBefore: 100,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0, top:0, left:0, scale:[0.5,1]}
    },
    {
      id: '#i04',
      duration: 550,
      delayBefore: 100,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0, top:0, left:0, scale:[0.5,1]}
    },
    {
      id: '#i02',
      duration: 250,
      delayBefore: 200,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0, top:0, left:"-2%"}
    },
  ],
  [
    {
      id: '#i08',
      duration: 650,
      delayBefore: 350,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i09',
      duration: 650,
      delayBefore: 450,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i10',
      duration: 650,
      delayBefore: 650,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i11',
      duration: 650,
      delayBefore: 750,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i12',
      duration: 650,
      delayBefore: 850,
      delayAfter: 2800,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
  ],
  [
    {
      id: '#i11',
      duration: 550,
      delayBefore: 0,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0, top:0, left:0, scale:[0.5,1]}
    },
    {
      id: '#i10',
      duration: 550,
      delayBefore: 0,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0, top:0, left:0, scale:[0.5,1]}
    },
    {
      id: '#i12',
      duration: 550,
      delayBefore: 100,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0, top:0, left:0, scale:[0.5,1]}
    },
    {
      id: '#i09',
      duration: 550,
      delayBefore: 100,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0, top:0, left:0, scale:[0.5,1]}
    },
    {
      id: '#i08',
      duration: 250,
      delayBefore: 200,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0, top:0, left:"-50px"}
    },
  ],
  [
    {
      id: '#i13',
      duration: 650,
      delayBefore: 350,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i14',
      duration: 650,
      delayBefore: 450,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i15',
      duration: 650,
      delayBefore: 650,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i16',
      duration: 650,
      delayBefore: 750,
      delayAfter: 2800,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
  ],
 ]
 new WAnimation(animations, {
     loop: true,
     clearAfterEnd: false,
   }).startAnimation();      