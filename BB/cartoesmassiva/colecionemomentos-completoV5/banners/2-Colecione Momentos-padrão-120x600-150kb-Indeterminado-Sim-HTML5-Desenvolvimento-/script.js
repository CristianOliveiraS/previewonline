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
              duration: 15050,
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
      id: '#i04',
      duration: 450,
      delayBefore: 450,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, scale:[1.05]}
    },
    {
      id: '#i04',
      duration: 450,
      delayBefore: 450,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1,scale:[1]}
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
      id: '#i05',
      duration: 450,
      delayBefore: 650,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, scale:[1.05]}
    },
    {
      id: '#i05',
      duration: 450,
      delayBefore: 650,
      delayAfter: 2800,
      easing: "easeOutCubic",
      animations: {opacity:1,scale:[1]}
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
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
     {
      id: '#i08',
      duration: 650,
      delayBefore: 950,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, top:0, left:0}
    },
    {
      id: '#i06',
      duration: 450,
      delayBefore: 2000,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1,scale:[1.02]}
    },
    {
      id: '#i06',
      duration: 450,
      delayBefore: 2000,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1,scale:[1]}
    },
    {
      id: '#i07',
      duration: 450,
      delayBefore: 2100,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1,scale:[1.02]}
    },   
    {
      id: '#i07',
      duration: 450,
      delayBefore: 2100,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1,scale:[1]}
    },   
    {
      id: '#i02',
      duration: 450,
      delayBefore: 2300,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1,scale:[1.02]}
    },   
    {
      id: '#i02',
      duration: 450,
      delayBefore: 2300,
      delayAfter: 3800,
      easing: "easeOutCubic",
      animations: {opacity:1,scale:[1]}
    },   
  ],
 ]
 new WAnimation(animations, {
     loop: true,
     clearAfterEnd: false,
   }).startAnimation();      