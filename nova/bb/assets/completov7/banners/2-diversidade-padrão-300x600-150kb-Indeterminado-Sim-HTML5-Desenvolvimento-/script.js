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
              animations: {opacity:1,scale:[1.25,1.25]}
            },
            {
              id: '#i01',
              duration: 450,
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
      delayBefore: 550,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i03',
      duration: 450,
      delayBefore: 550,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, scale:[1.06]}
    },
    {
      id: '#i03',
      duration: 450,
      delayBefore: 550,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1,scale:[1]}
    },
    {
      id: '#i04',
      duration: 650,
      delayBefore: 650,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i04',
      duration: 450,
      delayBefore: 650,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, scale:[1.06]}
    },
    {
      id: '#i04',
      duration: 450,
      delayBefore: 650,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1,scale:[1]}
    },
    {
      id: '#i05',
      duration: 650,
      delayBefore: 750,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i05',
      duration: 450,
      delayBefore: 750,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, scale:[1.06]}
    },
    {
      id: '#i05',
      duration: 450,
      delayBefore: 750,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1,scale:[1]}
    },
    {
      id: '#i05-1',
      duration: 650,
      delayBefore: 850,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i05-1',
      duration: 450,
      delayBefore: 850,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, scale:[1.06]}
    },
    {
      id: '#i05-1',
      duration: 450,
      delayBefore: 850,
      delayAfter: 2800,
      easing: "easeOutCubic",
      animations: {opacity:1,scale:[1]}
    },
  ],
  [
    {
      id: '#i06',
      duration: 650,
      delayBefore: 350,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i07',
      duration: 650,
      delayBefore: 550,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i08',
      duration: 650,
      delayBefore: 650,
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