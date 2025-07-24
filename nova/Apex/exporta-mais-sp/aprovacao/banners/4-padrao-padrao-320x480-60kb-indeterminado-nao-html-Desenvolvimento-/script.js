var animations = [
  [ 
    {
      id: '#i01',
      duration: 750,
      delayBefore: 250,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:'-50px', left:0}
    },
    {
      id: '#i02',
      duration: 650,
      delayBefore: 550,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i03',
      duration: 650,
      delayBefore: 650,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i04',
      duration: 250,
      delayBefore: 650,
      delayAfter: 0,
      easing: "easeOutBack",
      animations: {opacity:1, top:0, left:0, scale: [5, 1]}
    },
    {
      id: '#i04-1',
      duration: 250,
      delayBefore: 750,
      delayAfter: 0,
      easing: "easeOutBack",
      animations: {opacity:1, top:0, left:0, scale: [5, 1]}
    },
    {
      id: '#i04-2',
      duration: 250,
      delayBefore: 850,
      delayAfter: 0,
      easing: "easeOutBack",
      animations: {opacity:1, top:0, left:0, scale: [5, 1]}
    },
    {
      id: '#i04-3',
      duration: 250,
      delayBefore: 950,
      delayAfter: 0,
      easing: "easeOutBack",
      animations: {opacity:1, top:0, left:0, scale: [5, 1]}
    },
    {
      id: '#i04-4',
      duration: 250,
      delayBefore: 1050,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0, scale: [5, 1]}
    },
    {
      id: '#i05',
      duration: 450,
      delayBefore: 1150,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i06',
      duration: 450,
      delayBefore: 1250,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i07',
      duration: 450,
      delayBefore: 1350,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i08',
      duration: 450,
      delayBefore: 1450,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i09',
      duration: 450,
      delayBefore: 1550,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i10',
      duration: 450,
      delayBefore: 1550,
      delayAfter: 3000,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
  ],
  [
   {
      id: '#i11',
      duration: 450,
      delayBefore: 250,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
   {
      id: '#i12',
      duration: 450,
      delayBefore: 350,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
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
      delayBefore: 550,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
   {
      id: '#i15',
      duration: 650,
      delayBefore: 750,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
   {
      id: '#i16',
      duration: 650,
      delayBefore: 850,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
   {
      id: '#i16-1',
      duration: 650,
      delayBefore: 950,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
   {
      id: '#i17',
      duration: 650,
      delayBefore: 1050,
      delayAfter: 3000,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
  ],
  {
      id: '#i18',
      duration: 450,
      delayBefore: 0,
      delayAfter: 4000,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
  },
 ]
 new WAnimation(animations, {
     loop: false,
     clearAfterEnd: false,
   }).startAnimation();      