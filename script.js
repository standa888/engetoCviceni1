
const informace = gsap.timeline({defaults: {duration: 0.5, ease: "none"}})


informace.fromTo( `.levaStrana`, {opacity: 0, x: -500}, {opacity: 1, x: 0, duration: 1.2, ease: "expoScale(0.5,7,none)"})
informace.fromTo( `.levaStrana__jmeno, .levaStrana__kontakty, .levaStrana__vzdelani`, {opacity: 0, x: -200}, {opacity: 1, x: 0})
informace.fromTo( `.hlavniStrana`, {opacity: 0, x: 100}, {opacity: 1, x: 0})