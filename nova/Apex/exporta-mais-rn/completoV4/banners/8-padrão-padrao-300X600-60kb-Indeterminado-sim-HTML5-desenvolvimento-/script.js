var animations = [
 [
    {
      id: '#i01',
      duration: 250,
      delayBefore: 250,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1}
    },
    {
      id: '#i02',
      duration: 750,
      delayBefore: 400,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
 ],
 {
  action: function() {
      var confettiDrop = [
        [
          {
            id: '#i02',
            duration: 30000,
            delayBefore: 0,
            delayAfter: 0,
            easing: "easeOutCubic",
            animations: {opacity:1, scale:[1.18,1], left:0}
          }, 
        ],
      ];
      var confettiAnim = new WAnimation(confettiDrop, {loop: false, clearAfterEnd: false});
      confettiAnim.startAnimation();
  }
},
[
  {
    id: '#i03',
    duration: 750,
    delayBefore: 0,
    delayAfter: 0,
    easing: "easeOutCubic",
    animations: {opacity:1, top:0, left:0}
  },
  {
    id: '#i04',
    duration: 750,
    delayBefore: 100,
    delayAfter: 0,
    easing: "easeOutCubic",
    animations: {opacity:1, top:0, left:0}
  },
  {
    id: '#i05',
    duration: 750,
    delayBefore: 200,
    delayAfter: 2500,
    easing: "easeOutCubic",
    animations: {opacity:1, top:0, left:0}
  },
],
[
  {
    id: '#i06',
    duration: 250,
    delayBefore: 250,
    delayAfter: 0,
    easing: "easeOutCubic",
    animations: {opacity:1, left:0}
  },
  {
    id: '#i07',
    duration: 750,
    delayBefore: 500,
    delayAfter: 0,
    easing: "easeOutCubic",
    animations: {opacity:1, scale:[1,1.18], left:0}
  },
  {
    id: '#i08',
    duration: 750,
    delayBefore: 600,
    delayAfter: 0,
    easing: "easeOutCubic",
    animations: {opacity:1, top:0, left:0}
  }, 
  {
    id: '#i09',
    duration: 750,
    delayBefore: 700,
    delayAfter: 0,
    easing: "easeOutCubic",
    animations: {opacity:1, top:0, left:0}
  }, 
  {
    id: '#i10',
    duration: 750,
    delayBefore: 800,
    delayAfter: 0,
    easing: "easeOutCubic",
    animations: {opacity:1, top:0, left:0}
  }, 
  {
    id: '#i11',
    duration: 750,
    delayBefore: 900,
    delayAfter: 0,
    easing: "easeOutCubic",
    animations: {opacity:1, top:0, left:0}
  }, 
  {
    id: '#i12',
    duration: 750,
    delayBefore: 1000,
    delayAfter: 3000,
    easing: "easeOutCubic",
    animations: {opacity:1, top:0, left:0}
  }, 
],
[
  {
    id: '#i13',
    duration: 250,
    delayBefore: 250,
    delayAfter: 0,
    easing: "easeOutCubic",
    animations: {opacity:1, left:0}
  },
  {
    id: '#i14',
    duration: 650,
    delayBefore: 500,
    delayAfter: 0,
    easing: "easeOutCubic",
    animations: {opacity:1, left:0}
  },
  {
    id: '#i15',
    duration: 650,
    delayBefore: 600,
    delayAfter: 0,
    easing: "easeOutCubic",
    animations: {opacity:1, left:0, top:0}
  },
  {
    id: '#i16',
    duration: 650,
    delayBefore: 700,
    delayAfter: 0,
    easing: "easeOutCubic",
    animations: {opacity:1, left:0, top:0}
  },
  {
    id: '#i16-1',
    duration: 650,
    delayBefore: 800,
    delayAfter: 0,
    easing: "easeOutCubic",
    animations: {opacity:1, left:0, top:0}
  },
  {
    id: '#i17',
    duration: 650,
    delayBefore: 1000,
    delayAfter: 2500,
    easing: "easeOutCubic",
    animations: {opacity:1, left:0, top:0}
  },
],
]
new WAnimation(animations, {
    loop: false,
    clearAfterEnd: false,
  }).startAnimation();      