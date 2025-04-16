var animations = [
  {
    action: function() {
        var confettiDrop = [
          [
            {
              id: '#i01',
              duration: 250,
              delayBefore: 0,
              delayAfter: 0,
              animations: {opacity:1,scale:[1.25,1.25],}
            },
            {
              id: '#i01',
              duration: 9050,
              delayBefore: 0,
              delayAfter: 0,
              animations: {scale:[1,1.25]}
            },
          ],
        ];
        var confettiAnim = new WAnimation(confettiDrop, {loop: false, clearAfterEnd: false});
        confettiAnim.startAnimation();
    }
  },
  [
    {
      id: '#i01-1',
      duration: 750,
      delayBefore: 200,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0}
    },
    {
      id: '#i02',
      duration: 750,
      delayBefore: 250,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0}
    },
    {
      id: '#i03',
      duration: 750,
      delayBefore: 350,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0}
    },
    {
      id: '#i04',
      duration: 750,
      delayBefore: 400,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0}
    },
    {
      id: '#i05',
      duration: 750,
      delayBefore: 500,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0}
    },
    {
      id: '#i06',
      duration: 750,
      delayBefore: 600,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0}
    },
    {
      id: '#i07',
      duration: 750,
      delayBefore: 700,
      delayAfter: 2000,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0}
    },
  ],
  [
    {
      id: '#i01-1',
      duration: 250,
      delayBefore: 0,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0, left:0}
    },
    {
      id: '#i02',
      duration: 250,
      delayBefore: 0,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0, left:0}
    },
    {
      id: '#i03',
      duration: 250,
      delayBefore: 150,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0, left:0}
    },
    {
      id: '#i04',
      duration: 250,
      delayBefore: 250,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0, left:0}
    },
    {
      id: '#i05',
      duration: 250,
      delayBefore: 350,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0, left:0}
    },
    {
      id: '#i06',
      duration: 250,
      delayBefore: 450,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0, left:0}
    },
    {
      id: '#i07',
      duration: 250,
      delayBefore: 550,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0, left:0}
    },
  ],
  [
    {
      id: '#i08',
      duration: 750,
      delayBefore: 250,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0}
    },
    {
      id: '#i09',
      duration: 750,
      delayBefore: 350,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0}
    },
    {
      id: '#i10',
      duration: 750,
      delayBefore: 400,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0}
    },
    {
      id: '#i11',
      duration: 750,
      delayBefore: 500,
      delayAfter: 3000,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0}
    },
  ],
  [
    {
      id: '#i11',
      duration: 250,
      delayBefore: 0,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0, top:"20px"}
    },
    {
      id: '#i10',
      duration: 250,
      delayBefore: 150,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0, top:"20px"}
    },
    {
      id: '#i09',
      duration: 250,
      delayBefore: 250,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0, top:"20px"}
    },
    {
      id: '#i08',
      duration: 250,
      delayBefore: 350,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0, top:"20px"}
    },
  ],
  [
    {
      id: '#i12',
      duration: 750,
      delayBefore: 250,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0}
    },
    {
      id: '#i13',
      duration: 750,
      delayBefore: 350,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0}
    },
    {
      id: '#i14',
      duration: 750,
      delayBefore: 400,
      delayAfter: 2000,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0}
    },
  ],
  [
    {
      id: '#i12',
      duration: 250,
      delayBefore: 0,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0}
    },
    {
      id: '#i13',
      duration: 250,
      delayBefore: 0,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0}
    },
    {
      id: '#i14',
      duration: 250,
      delayBefore: 0,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0}
    },
  ],
  [
    {
      id: '#i15',
      duration: 750,
      delayBefore: 250,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0}
    },
  ],
 ]
 new WAnimation(animations, {
     loop: false,
     clearAfterEnd: false,
   }).startAnimation();      