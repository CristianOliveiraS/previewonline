var animations = [
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
              duration: 500,
              delayBefore: 0,
              delayAfter: 2000,
              animations: {scale:[1,1.25]}
            },
          ],
  [ 
    {
        id: '#i02',
        duration: 750,
        delayBefore: 250,
        delayAfter: 0,
        easing: 'easeOutCubic',
        animations: {opacity: 1, left:0, top:0},   
    },
    {
        id: '#i03',
        duration: 750,
        delayBefore: 350,
        delayAfter: 0,
        easing: 'easeOutCubic',
        animations: {opacity: 1, left:0, top:0},   
    },
    {
        id: '#i04',
        duration: 750,
        delayBefore: 550,
        delayAfter: 0,
        easing: 'easeOutBack',
        animations: {opacity: 1, left:0, top:0},   
    },
    {
        id: '#i05',
        duration: 750,
        delayBefore: 650,
        delayAfter: 0,
        easing: 'easeOutBack',
        animations: {opacity: 1, left:0, top:0},   
    },
    {
        id: '#i06',
        duration: 750,
        delayBefore: 750,
        delayAfter: 0,
        easing: 'easeOutBack',
        animations: {opacity: 1, left:0, top:0},   
    },
    {
        id: '#i07',
        duration: 750,
        delayBefore: 850,
        delayAfter: 3500,
        easing: 'easeOutBack',
        animations: {opacity: 1, left:0, top:0},   
    },
  ],
  [
    {
        id: '#i08',
        duration: 450,
        delayBefore: 250,
        delayAfter: 0,
        easing: 'easeOutCubic',
        animations: {opacity: 1, left:0, top:0},   
    },
    {
        id: '#i09',
        duration: 450,
        delayBefore: 450,
        delayAfter: 0,
        easing: 'easeOutCubic',
        animations: {opacity: 1, left:0, top:0},   
    },
    {
        id: '#i10',
        duration: 450,
        delayBefore: 650,
        delayAfter: 0,
        easing: 'easeOutCubic',
        animations: {opacity: 1, left:0, top:0},   
    },
    {
        id: '#i11',
        duration: 450,
        delayBefore: 850,
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