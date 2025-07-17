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
              animations: {opacity:1, scale:[1.25,1.25]}
            },
            {
              id: '#i01',
              duration: 300,
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
        duration: 300,
        delayBefore: 300,
        delayAfter: 0,
        easing: 'easeOutBack',
        animations: {opacity: 1,scale: [5, 1], left:0, top:0},   
    },
    {
        id: '#i03',
        duration: 200,
        delayBefore: 500,
        delayAfter: 1500,
        easing: 'easeOutBack',
        animations: {opacity: 1,scale: [5, 1], left:0, top:0},   
    },
  ],
        {
    action: function() {
        var confettiDrop = [
          [
            {
              id: '#i04',
              duration: 150,
              delayBefore: 0,
              delayAfter: 0,
              animations: {opacity:1}
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
        duration: 250,
        delayBefore: 300,
        delayAfter: 0,
        easing: 'easeOutCubic',
        animations: {top:'-49px'},   
    },
    {
        id: '#i03',
        duration: 250,
        delayBefore: 300,
        delayAfter: 0,
        easing: 'easeOutCubic',
        animations: {top:'-49px'},   
    },
  ],
  [
   {
        id: '#i05',
        duration: 750,
        delayBefore: 0,
        delayAfter: 0,
        easing: 'easeOutCubic',
        animations: {opacity: 1, left:0, top:0},   
    },
   {
        id: '#i06',
        duration: 750,
        delayBefore: 100,
        delayAfter: 0,
        easing: 'easeOutCubic',
        animations: {opacity: 1, left:0, top:0},   
    },
        {
        id: '#i07',
        duration: 650,
        delayBefore: 300,
        delayAfter: 0,
        easing: 'easeOutCubic',
        animations: {opacity: 1,left:0, top:0},   
    },
    {
        id: '#i08',
        duration: 200,
        delayBefore: 500,
        delayAfter: 0,
        easing: 'easeOutBack',
        animations: {opacity: 1,scale: [5, 1], left:0, top:0},   
    },
    {
        id: '#i09',
        duration: 650,
        delayBefore: 700,
        delayAfter: 0,
        easing: 'easeOutCubic',
        animations: {opacity: 1, left:0, top:0},   
    },
    {
        id: '#i09-1',
        duration: 650,
        delayBefore: 800,
        delayAfter: 0,
        easing: 'easeOutCubic',
        animations: {opacity: 1, left:0, top:0},   
    },
    {
        id: '#i09-2',
        duration: 650,
        delayBefore: 900,
        delayAfter: 0,
        easing: 'easeOutCubic',
        animations: {opacity: 1, left:0, top:0},   
    },
    {
        id: '#i10',
        duration: 650,
        delayBefore: 1000,
        delayAfter: 4000,
        easing: 'easeOutCubic',
        animations: {opacity: 1, left:0, top:0},   
    },
  ],
 ]
 new WAnimation(animations, {
     loop: false,
     clearAfterEnd: false,
   }).startAnimation();      