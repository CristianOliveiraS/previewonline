var animations = [
  [                                                                                      
   {
     id: '#i01',
     duration: 800,
     delayBefore: 400,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
   },   
    

   {
     id: '#i02',
     duration: 800,
     delayBefore: 400,
     delayAfter: 0,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
   },             
   
   {
     id: '#i03',
     duration: 800,
     delayBefore: 400,
     delayAfter: 3000,
     easing: "easeOutCubic",
     animations: {opacity:1, left:0, top:0,}
   },    


 
    {
      id: '#i04',
      duration: 800,
      delayBefore: 400,
      delayAfter: 0,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0,}
    },

    {
      id: '#i05',
      duration: 800,
      delayBefore: 0,
      delayAfter: 100,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0,}
    },

    {
      id: '#i06',
      duration: 800,
      delayBefore: 100,
      delayAfter: 3000,
      easing: "easeOutCubic",
      animations: {opacity:1, left:0, top:0,}
    },


  ],



];  



 new WAnimation(animations, {
     loop: false,
     clearAfterEnd: false,
   }).startAnimation();      