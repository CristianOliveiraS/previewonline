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
              animations: {opacity:1}
            },
            {
              id: '#i01',
              duration: 30050,
              delayBefore: 0,
              delayAfter: 0,
              animations: {scale:[1.25,1]}
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
      animations: {opacity:1, left:0, top:0}
    },
    {
      id: '#i03',
      duration: 650,
      delayBefore: 550,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },
    {
      id: '#i03-1',
      duration: 650,
      delayBefore: 650,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },
    {
      id: '#i04',
      duration: 650,
      delayBefore: 750,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },
    {
      id: '#i04-1',
      duration: 650,
      delayBefore: 850,
      delayAfter: 4000,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },
  ],
  {
    action: function() {
        var confettiDrop = [
          [
            {
              id: '#i05',
              duration: 250,
              delayBefore: 0,
              delayAfter: 0,
              animations: {opacity:1}
            },
            {
              id: '#i05',
              duration: 50050,
              delayBefore: 0,
              delayAfter: 0,
              animations: {scale:[1.25,1]}
            },
          ],
        ];
        var confettiAnim = new WAnimation(confettiDrop, {loop: false, clearAfterEnd: false});
        confettiAnim.startAnimation();
    }
  },
  [
    {
      id: '#i06',
      duration: 650,
      delayBefore: 350,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },
    {
      id: '#i06-1',
      duration: 650,
      delayBefore: 550,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },
    {
      id: '#i06-2',
      duration: 650,
      delayBefore: 650,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },
    {
      id: '#i07',
      duration: 650,
      delayBefore: 750,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },
    {
      id: '#i07-1',
      duration: 650,
      delayBefore: 950,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },
    {
      id: '#i07-2',
      duration: 650,
      delayBefore: 1050,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },
    {
      id: '#i08',
      duration: 650,
      delayBefore: 1150,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },
    {
      id: '#i08-1',
      duration: 650,
      delayBefore: 1350,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },
    {
      id: '#i08-2',
      duration: 650,
      delayBefore: 1450,
      delayAfter: 3500,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },
  ],
  [
    {
      id: '#i09',
      duration: 250,
      delayBefore: 250,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },   
    {
      id: '#i10',
      duration: 650,
      delayBefore: 350,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },
    {
      id: '#i11',
      duration: 650,
      delayBefore: 450,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },
    {
      id: '#i12',
      duration: 650,
      delayBefore: 550,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },
    {
      id: '#i13',
      duration: 650,
      delayBefore: 650,
      delayAfter: 3500,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0}
    },
  ],
 ]
 new WAnimation(animations, {
     loop: false,
     clearAfterEnd: false,
   }).startAnimation();      