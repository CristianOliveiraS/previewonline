var animations = [
  [                                                                                        
   {
     id: '#i01',
     duration: 200,
     delayBefore: 150,
     delayAfter: 0,
     easing: "easeOutBack",
     animations: {opacity:1, left:0, top:0,}
   },              
   {
     id: '#i02',
     duration: 200,
     delayBefore: 250,
     delayAfter: 0,
     easing: "easeOutBack",
     animations: {opacity:1, left:0, top:0,}
   },              
   {
     id: '#i03',
     duration: 200,
     delayBefore: 350,
     delayAfter: 0,
     easing: "easeOutBack",
     animations: {opacity:1, left:0, top:0,}
   },              
   {
     id: '#i04',
     duration: 200,
     delayBefore: 450,
     delayAfter: 0,
     easing: "easeOutBack",
     animations: {opacity:1, left:0, top:0,}
   },              
   {
     id: '#i05',
     duration: 850,
     delayBefore: 250,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
   },              
   {
     id: '#i06',
     duration: 850,
     delayBefore: 250,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
   },              
   {
     id: '#i07',
     duration: 850,
     delayBefore: 350,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
   },              
   {
     id: '#i08',
     duration: 850,
     delayBefore: 450,
     delayAfter: 3000,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
   },              
  ],
  [
   {
     id: '#i09',
     duration: 850,
     delayBefore: 450,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
   },
   {
     id: '#i10',
     duration: 850,
     delayBefore: 650,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
   },
   {
     id: '#i11',
     duration: 850,
     delayBefore: 1150,
     delayAfter: 0,
     easing: "easeOutBack",
     animations: {opacity:1, left:0, top:0,}
   },
   {
     id: '#i12',
     duration: 850,
     delayBefore: 850,
     delayAfter: 3000,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
   },
  ],
]
 new WAnimation(animations, {
     loop: false,
     clearAfterEnd: false,
   }).startAnimation();      