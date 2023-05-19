/*
Notes:
Custom Facial duration is different 70 vs 90
Bio is possible array
Under enhancements
  Ampoules (facial product enhancer
*/

export const db = [
  {
    title: 'Custom Facial',
    image: '',
    bio: 'A personalized treatment in the traditional European facial style, including; cleansing, exfoliation, massage, a mask and extractions to rejuvenate and maintain.',
    cost: 175,
    type: 'facial',
    duration: 90,
  },
  {
    title: 'Deep cleansing Facial',
    image: '',
    bio: 'Ideal for blemish-prone and congested skin. Steam, manual lymphatic drainage with clarifying essential oils, and a minimum of 20 min for cleansing and extractions will leave your skin feeling thoroughly refreshed with less inflammation.',
    cost: 150,
    type: 'facial',
    duration: 70,
  },
  {
    title: 'Dermaplane Express',
    image: '',
    bio: 'Using manual exfoliation to remove the dull dead layer of skin and hair, allowing for deeper product penetration and instant results. Great for all skin types, even sensitive skin!',
    cost: 175,
    type: 'facial',
    duration: 80,
  },
  {
    title: 'Classic Hydrating Facial',
    image: '',
    bio: 'Tackle surface dehydration and fine lines with this treatment designed to plump and moisturize the skin.',
    cost: 168,
    type: 'facial',
    duration: 70,
  },
  {
    title: 'Back Facial',
    image: '',
    bio: 'Treat your back with a stimulating massage, steam, and hydrating mask. All your skin deserves to feel beautiful.',
    cost: 98,
    type: 'facial',
    duration: 45,
  },
  {
    title: 'Brightening Facial',
    image: '',
    bio: 'Help reduce the look of pigmentation and bring back the glow to sallow skin. Utilizing massage and fruit enzymes to brighten the appearance of your skin.',
    cost: 168,
    type: 'facial',
    duration: 70,
  },
  {
    title: 'Age Later Facial',
    image: '',
    bio: 'Minimize the signs of aging, this facial is rich with antioxidants to help battle free radical damage, leaving your skin feeling nourished and rejuvenated. Comeswith Red LED.',
    cost: 168,
    type: 'facial',
    duration: 75,
  },
  {
    title: 'Brow Wax',
    image: '',
    bio: 'Shaping or clean-up of your eyebrows.',
    cost: 25,
    type: 'wax',
    duration: 30,
  },
  {
    title: 'Lips or Chin',
    image: '',
    bio: 'Service includes waxing of both the upper and lower lips OR the chin.',
    cost: 20,
    type: 'wax',
    duration: 30,
  },
  {
    title: 'Full Face',
    image: '',
    bio: 'Includes the hairline, nose, sideburns, cheeks, upper lip, lower lip, chin and front of the neck. EXCLUDES brows.',
    cost: 60,
    type: 'wax',
    duration: 30,
  },
  {
    title: 'Full Face WITH Brow',
    image: '',
    bio: 'Includes the hairline, eyebrows, nose, sideburns, cheeks, upper lip, lower lip, chin and front of the neck.',
    cost: 75,
    type: 'wax',
    duration: 30,
  },
  {
    title: 'Underarms',
    image: '',
    bio: 'Includes the underarm. Does not include the upper arm.',
    cost: 25,
    type: 'wax',
    duration: 30,
  },
  {
    title: 'Legs Upper or Lower',
    image: '',
    bio: [
      'Either upper or lower not full legs.',
      'Upper: Includes the upper legs, inner thighs and knees. Does not include the bikini line.',
      'Lower: Includes the lower legs, knees, feet and toes.',
    ],
    cost: 55,
    type: 'wax',
    duration: 30,
  },
  {
    title: 'Legs Full',
    image: '',
    bio: 'Upper and lower legs. Includes the knees, feet and toes. Does not include the bikini line.',
    cost: 95,
    type: 'wax',
    duration: 45,
  },
  {
    title: 'Arms Upper or Lower',
    image: '',
    bio: [
      'Either upper or lower arm',
      'Upper arm including the elbow. Does not include shoulders.',
      'Lower arm including elbow, hands and fingers.',
    ],
    cost: 25,
    type: 'wax',
    duration: 30,
  },
  {
    title: 'Bikini Line',
    image: '',
    bio: 'Currently only offered to guests with a vulva. Includes 4 finger widths from the natural bikini line and two finger widths from the top. Does not include the inner thigh.',
    cost: 40,
    type: 'wax',
    duration: 30,
  },
  {
    title: 'Bikini - Full',
    image: '',
    bio: 'Currently only offered to guests with a vulva. As much or as little as you want off the front. Includes bikini line.',
    cost: 50,
    type: 'wax',
    duration: 30,
  },
  {
    title: 'Brazilian',
    image: '',
    bio: 'Currently only offered to guests with a vulva. As much or as little as you want off the front. Includes bikini line and butt strip.',
    cost: 120,
    type: 'wax',
    duration: 35,
  },
  // {
  //   title: 'Brazilian Maintenance',
  //   image: '',
  //   bio: 'Currently only offered to guests with a vulva. As much or as little as you want off the front. Includes bikini line and butt strip.',
  //   cost: 60,
  //   type: 'wax',
  //   duration: 30,
  // },
  {
    title: 'Brow Tint',
    image: '',
    bio: 'Eyebrow tinting is the process of applying semi-permanent dye to enhance, shape, and define your brows. Brow tinting gives the appearance of thicker, more accentuated brows with the goal being to match your natural brow color whenever possible.',
    cost: 25,
    type: 'wax',
    duration: 20,
  },
  {
    title: 'Lash Lamination',
    image: '',
    bio: 'Enhance your natural lashes with our lash treatment.',
    cost: 120,
    type: 'lamination',
    duration: 80,
  },
  {
    title: 'Brow Lamination',
    image: '',
    bio: 'Enhance your natural brows with our brow treatment.',
    cost: 100,
    type: 'lamination',
    duration: 35,
  },
  {
    title: 'Brow and Lash Lamination',
    image: '',
    bio: 'Enhance your natural brows and lashes with our brow and lash treatment. Comes with free brow and lash tint',
    cost: 200,
    type: 'lamination',
    duration: 80,
  },
  {
    title: 'Brow Tint',
    image: '',
    bio: 'Eyebrow tinting is the process of applying semi-permanent dye to enhance, shape, and define your brows. Brow tinting gives the appearance of thicker, more accentuated brows with the goal being to match your natural brow color whenever possible.',
    cost: 25,
    type: 'lamination',
    duration: 20,
  },
  {
    title: 'Lash Tint',
    image: '',
    bio: 'Lash tinting is a semi-permanent dye is applied to your natural lashes, which will not only highlight your facial features but add a rich color to your lackluster lash line.',
    cost: 35,
    type: 'lamination',
    duration: 20,
  },
  {
    title: 'Lash and Brow Tint',
    image: '',
    bio: [
      'Save time and tint both your lashes and brows at the same time!',
      'Eyebrow tinting is the process of applying semi-permanent dye to enhance, shape, and define your brows. Brow tinting gives the appearance of thicker, more accentuated brows with the goal being to match your natural brow color whenever possible.',
      'Lash tinting is a semi-permanent dye is applied to your natural lashes, which will not only highlight your facial features but add a rich color to your lackluster lash line.'
  ],
    cost: 60,
    type: 'lamination',
    duration: 30,
  },
  {
    title: 'Brightening Peel',
    image: '',
    bio: 'Treat discoloration, dehydration, uneven skin tone and acne with this peel featuring a blend of brightening ingredients such as lactic and kojic acid.',
    cost: 175,
    type: 'peel',
    duration: 60,
  },
  {
    title: 'Brightening Peel with Dermaplane',
    image: '',
    bio: '***Client consultation required*** Treat discoloration, dehydration, uneven skin tone and acne with this peel featuring a blend of brightening ingredients such as lactic and kojic acid.',
    cost: 275,
    type: 'peel',
    duration: 85,
  },
  {
    title: 'Age Defy Peel',
    image: '',
    bio: 'Improve fine lines, age spots and discoloration with a blend of glycolic acid and resorcinol in this peel designed to target the signs of aging.',
    cost: 175,
    type: 'peel',
    duration: 60,
  },
  {
    title: 'Age Defy Peel with Dermaplane',
    image: '',
    bio: '***Client consultation required*** Improve fine lines, age spots and discoloration with a blend of glycolic acid and resorcinol in this peel designed to target the signs of aging.',
    cost: 275,
    type: 'peel',
    duration: 85,
  },
  {
    title: 'Acne Peel',
    image: '',
    bio: 'Best peel option for acne-prone and oily skin types with salicylic and glycolic acids to clear and brighten.',
    cost: 175,
    type: 'peel',
    duration: 60,
  },
  {
    title: 'Acne Peel with Dermaplane',
    image: '',
    bio: '***Client consultation required*** Best peel option for acne-prone and oily skin types with salicylic and glycolic acids to clear and brighten.',
    cost: 275,
    type: 'peel',
    duration: 85,
  },
  {
    title: 'O2 Lift Treatment',
    image: '',
    bio: 'Our signature oxygenating treatment disgned to boost brightness and glow in dull skin',
    cost: 150,
    type: 'peel',
    duration: 45,
  },
  {
    title: 'Signature Peel',
    image: '',
    bio: 'Features Vitamin C, Fruit enzymes and hyaluronic acid to brighten, hydrate and smooth the skin.',
    cost: 175,
    type: 'peel',
    duration: 60,
  },
  {
    title: 'High frequency',
    image: '',
    bio: 'The high frequency is used to treat and prevent stubborn acne, shrink enlarged pores, reduce the appearance of fine lines and wrinkles, decongest puffy eyes, fade dark eye circles and even rejuvenate the condition of the scalp and nourish hair follicles for healthier hair growth.',
    cost: 15,
    type: 'enhancement',
    duration: 15,
  },
  {
    title: 'Red LED',
    image: '',
    bio: 'Red LED light may reduce inflammation and stimulate the production of collagen, a protein responsible for younger-looking skin that diminishes with age.',
    cost: 15,
    type: 'enhancement',
    duration: 15,
  },
  {
    title: 'Ampoules (facial product enhancer)',
    image: '',
    bio: 'An ampoule is a type of treatment that contains highly-concentrated skincare ingredients. It\'s designed to deliver small, targeted dosages in order to address a particular skin concern, such as skin dryness, discoloration and dark spots, dull skin or wrinkles and other signs of aging.',
    cost: 35,
    type: 'enhancement',
    duration: 15,
  },
  {
    title: 'Back facial as add on',
    image: '',
    bio: 'Enhance any facial by treating your back with a stimulating massage, steam, and hydrating mask. All your skin deserves to feel beautiful.',
    cost: 80,
    type: 'enhancement',
    duration: 45,
  },
  {
    title: 'Sheet mask',
    image: '',
    bio: '',
    cost: 15,
    type: 'enhancement',
    duration: 15,
  },
  {
    title: 'Eye Mask',
    image: '',
    bio: '',
    cost: 24,
    type: 'enhancement',
    duration: 15,
  }
];


