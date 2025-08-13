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
     duration: 750,
     delayBefore: 350,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
   },                                                                                        
   {
     id: '#i03',
     duration: 750,
     delayBefore: 500,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
   },                                                                                        
   {
     id: '#i04',
     duration: 750,
     delayBefore: 600,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
   },                                                                                        
   {
     id: '#i05',
     duration: 750,
     delayBefore: 700,
     delayAfter: 3500,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
   },                                                                                        
  ],
  [
   {
     id: '#i06',
     duration: 250,
     delayBefore: 250,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
   },  
   {
     id: '#i07',
     duration: 750,
     delayBefore: 450,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
   },  
   {
     id: '#i08',
     duration: 750,
     delayBefore: 550,
     delayAfter: 5500,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
   },  
  ],
  [
   {
     id: '#i09',
     duration: 250,
     delayBefore: 250,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
   },  
   {
     id: '#i10',
     duration: 750,
     delayBefore: 550,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
   },  
   {
     id: '#i11',
     duration: 750,
     delayBefore: 700,
     delayAfter: 6500,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
   },  
   {
     id: '#i12',
     duration: 750,
     delayBefore: 750,
     delayAfter: 6500,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
   },  
  ],
  
]
 new WAnimation(animations, {
     loop: false,
     clearAfterEnd: false,
   }).startAnimation();      