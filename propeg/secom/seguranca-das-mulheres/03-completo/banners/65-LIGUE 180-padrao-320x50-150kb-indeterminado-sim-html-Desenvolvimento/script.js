var animations = [
    {
    action: function () {
      var confettiDrop = [
        [
          {
            id: "#i01",
            duration: 250,
            delayBefore: 0,
            delayAfter: 0,
            animations: { opacity: 1, scale: [1.25, 1.25] },
          },
          {
            id: "#i01",
            duration: 500,
            delayBefore: 0,
            delayAfter: 0,
            animations: { scale: [1, 1.25] },
          },
        ],
      ];
      var confettiAnim = new WAnimation(confettiDrop, {
        loop: false,
        clearAfterEnd: false,
      });
      confettiAnim.startAnimation();
    },
  },
  [ 
    {
      id: '#i02',
      duration: 750,
      delayBefore: 350,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i03',
      duration: 750,
      delayBefore: 450,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i04',
      duration: 750,
      delayBefore: 550,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i04-1',
      duration: 750,
      delayBefore: 650,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i04-2',
      duration: 750,
      delayBefore: 750,
      delayAfter: 3000,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
  ],
  [
    {
      id: '#i04-2',
      duration: 250,
      delayBefore: 0,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0, top:"5%", left:0}
    },
    {
      id: '#i04-1',
      duration: 250,
      delayBefore: 100,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0, top:"5%", left:0}
    },
    {
      id: '#i04',
      duration: 250,
      delayBefore: 200,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:0, top:"5%", left:0}
    },
  ],
  [
    {
      id: '#i05',
      duration: 750,
      delayBefore: 250,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i05-1',
      duration: 750,
      delayBefore: 350,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i05-2',
      duration: 750,
      delayBefore: 450,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i05-3',
      duration: 750,
      delayBefore: 550,
      delayAfter: 3000,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
  ],
  [
    {
      id: '#i06',
      duration: 250,
      delayBefore: 150,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i07',
      duration: 750,
      delayBefore: 350,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i08',
      duration: 750,
      delayBefore: 450,
      delayAfter: 3000,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
  ],
 ]
 new WAnimation(animations, {
     loop: true,
     clearAfterEnd: false,
   }).startAnimation();      