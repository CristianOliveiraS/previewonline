var animations = [
  [                                                                                        
   {
     id: '#i01',
     duration: 850,
     delayBefore: 150,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
  },              
   {
     id: '#i02',
     duration: 850,
     delayBefore: 180,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
  },              
   {
     id: '#i03',
     duration: 850,
     delayBefore: 210,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
  },              
   {
     id: '#i04',
     duration: 850,
     delayBefore: 240,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
  },              
   {
     id: '#i04-1',
     duration: 850,
     delayBefore: 270,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
  },              
   {
     id: '#i04-2',
     duration: 850,
     delayBefore: 300,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
  },              
   {
     id: '#i05',
     duration: 550,
     delayBefore: 525,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
  },              
   {
     id: '#i06',
     duration: 550,
     delayBefore: 625,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
  },              
   {
     id: '#i07',
     duration: 550,
     delayBefore: 655,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
  },              
   {
     id: '#i08',
     duration: 550,
     delayBefore: 685,
     delayAfter: 3000,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
  },           
  ],
  [
  {
     id: '#i01',
     duration: 450,
     delayBefore: 0,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:"-259px", top:0,}
  },
  {
     id: '#i02',
     duration: 450,
     delayBefore: 30,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:"-259px", top:0,}
  },
  {
     id: '#i03',
     duration: 450,
     delayBefore: 60,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:"-259px", top:0,}
  },
  {
     id: '#i04',
     duration: 450,
     delayBefore: 90,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:"-259px", top:0,}
  },
  {
     id: '#i04-1',
     duration: 450,
     delayBefore: 120,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:"-259px", top:0,}
  },
  {
     id: '#i04-2',
     duration: 450,
     delayBefore: 150,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:"-259px", top:0,}
  },
  {
     id: '#i09',
     duration: 150,
     delayBefore: 150,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
  },
  {
     id: '#i10',
     duration: 650,
     delayBefore: 250,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
  },
  {
     id: '#i11',
     duration: 650,
     delayBefore: 350,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
  },
  {
     id: '#i12',
     duration: 650,
     delayBefore: 450,
     delayAfter: 4000,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
  },
  ],
  [
   {
     id: '#i10',
     duration: 250,
     delayBefore: 0,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:0, left:0, top:0,}
  },
  {
     id: '#i11',
     duration: 250,
     delayBefore: 0,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:0, left:0, top:0,}
  },
  {
     id: '#i12',
     duration: 250,
     delayBefore: 0,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:0, left:0, top:0,}
  },
  ],
  [
   {
     id: '#i13',
     duration: 650,
     delayBefore: 250,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
  },
   {
     id: '#i14',
     duration: 650,
     delayBefore: 350,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
  },
   {
     id: '#i15',
     duration: 650,
     delayBefore: 450,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
  },
  ],
]
 new WAnimation(animations, {
     loop: false,
     clearAfterEnd: false,
   }).startAnimation();      