var animations = [
  [                                                                                        
   {
     id: '#i01',
     duration: 250,
     delayBefore: 250,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
   },              
   {
     id: '#i02',
     duration: 850,
     delayBefore: 450,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
   },              
   {
     id: '#i03',
     duration: 850,
     delayBefore: 450,
     delayAfter: 4000,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
   },                         
  ],
  [
   {
     id: '#i04',
     duration: 850,
     delayBefore: 250,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
   },
   {
     id: '#i05',
     duration: 850,
     delayBefore: 450,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
   },
   {
     id: '#i06',
     duration: 850,
     delayBefore: 850,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
   },
   {
     id: '#i07',
     duration: 850,
     delayBefore: 950,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
   },
   {
     id: '#i07-1',
     duration: 850,
     delayBefore: 1050,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
   },
   {
     id: '#i08',
     duration: 850,
     delayBefore: 850,
     delayAfter: 4000,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
   },
  ],
  [
   {
     id: '#i09',
     duration: 850,
     delayBefore: 250,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
   },
   {
     id: '#i10',
     duration: 850,
     delayBefore: 450,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
   },
   {
     id: '#i11',
     duration: 850,
     delayBefore: 850,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
   },
   {
     id: '#i12',
     duration: 850,
     delayBefore: 950,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
   },
   {
     id: '#i12-1',
     duration: 850,
     delayBefore: 1050,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
   },
   {
     id: '#i13',
     duration: 850,
     delayBefore: 650,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
   },
   {
     id: '#i14',
     duration: 850,
     delayBefore: 650,
     delayAfter: 4000,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
   },
  ],
  [
   {
     id: '#i15',
     duration: 850,
     delayBefore: 250,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
   },
   {
     id: '#i16',
     duration: 850,
     delayBefore: 550,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
   },
   {
     id: '#i17',
     duration: 850,
     delayBefore: 650,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
   },
   {
     id: '#i18',
     duration: 850,
     delayBefore: 850,
     delayAfter: 4000,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
   },
  ],
  [
   {
     id: '#i16',
     duration: 850,
     delayBefore: 550,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:0, left:0, top:0,}
   },
   {
     id: '#i17',
     duration: 850,
     delayBefore: 650,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:0, left:0, top:0,}
   },
   {
     id: '#i18',
     duration: 850,
     delayBefore: 850,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:0, left:0, top:0,}
   },
   {
     id: '#i19',
     duration: 850,
     delayBefore: 1350,
     delayAfter: 4000,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
   },
  ],
]
 new WAnimation(animations, {
     loop: false,
     clearAfterEnd: false,
   }).startAnimation();      