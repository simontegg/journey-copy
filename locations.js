module.exports = [
  {
    id: 'kakacafe',
    kakaNest: false,
    image: '',
    nearbyDescription:  `Kraark! Yummy huhu grubs, my favourite! \n
    What’s for ~branch~ brunch?`,
      distantDescription: `Beside the grass field or up a narrow track \n
    You’ll find this Kākā hotspot, serving delicious snacks! \n
    `,
    challenge: {
      text: 'kakacafe challenge',
      options: [
        'N_white',
        'N_yellow',
        'Y_red'
      ],
    },
    nearby: [
      { id: 'pinetree', 
        image: 'http://i.imgur.com/JR9EgiR.jpg', 
      },
      { id: 'toast', 
        image: 'http://i.imgur.com/JR9EgiR.jpg', 
      },
      { id: 'treefern', 
        image: 'http://i.imgur.com/BalscL7.jpg', 
      }
    ]
  },
  {
    id: 'rata',
    kakaNest: false,
    image: 'http://i.imgur.com/2b7zINM.jpg',
    challenge: {
      text: `One question to make sure you've been paying attention.
        What colour are my flowers?`,
      options: [
        'N_white',
        'N_yellow',
        'Y_red'
      ],
    },
    nearby: [
      { id: 'hollowtree', 
        image: 'http://i.imgur.com/o2xickb.jpg'},
        { id: 'tikouka', 
          image: 'http://i.imgur.com/mpWc8DO.jpg'}, 
          { id: 'karaka', 
            image: 'http://i.imgur.com/mpWc8DO.jpg'}
    ]
  },
  {
    id: 'tikouka',
    kakaNest: false,
    nearbyDescription:  `We Kākā love the *bluish-white berries* of the Ti Kouka \n
    They ripen at the end of summer. Krark! \n
    `,
    distantDescription: `Head down to the playground to find this spiky tree \n`,
    challenge: {
      text: 'What colour are Cabbage tree berries?',
      options: [
        'Y_bluish-white',
        'N_red',
        'N_invisible'
      ]
    },
    nearby: [
      { 
        id: 'karaka', 
        image: 'http://i.imgur.com/pPVsw0N.jpg',
      },
      { id: 'rata', image: 'http://i.imgur.com/CwW29Wf.jpg' },
      { id: 'stream', image: 'http://i.imgur.com/wr1drzF.jpg' }
    ]

  },
  {
    id: 'stream',
    kakaNest: false,
    challenge: {
      text: `When humans arrived, my cousins disappeared… \n
      If you look hard, you might still see _______ footprints \n`,
        options: [
          'N_taniwha',
          'Y_Moa',
          'N_Tyrannosaurus Rex'
        ],
    },
    nearby: [
      { id: 'treefern', image: 'http://i.imgur.com/sVg7db8.jpg' },
      { id: 'hollowtree', image: 'http://i.imgur.com/s7SKFBT.jpg' },
      { id: 'deadtree', image: 'https://i.imgur.com/8bLIq1K.jpg'}
    ]
  },
  {
    id: 'karaka',
    kakaNest: false,
    challenge: {
      text: 'What do the leaves of the Karaka tree look like?',
      options: [
        'N_floppy and purple',
        'N_small and square',
        'Y_big and leathery'
      ],
    },
    nearby: [
      { id: 'tikouka', 
        image: 'http://i.imgur.com/J2hlObD.jpg', 
      },
      { id: 'stream', 
        image: 'http://i.imgur.com/SC7HzPF.jpg', 
      },
      { id: 'manuka', 
        image: 'http://i.imgur.com/reGFW8a.jpg', 
      },
    ]
  },
  {
    id: 'hollowtree',
    kakaNest: false,
    challenge: {
      text: 'Kākā love a good place to make a nest, which of these locations do we like the most?',
      options: [
        'N_a spiky bush',
        'Y_a hollow tree',
        'N_under the sea'
      ],
    },
    nearby: [
      { id: 'rata', 
        image: 'http://i.imgur.com/B3AN9pX.jpg', 
      },
      { id: 'stream', 
        image: 'http://i.imgur.com/v5GIiqJ.jpg', 
      },
      { id: 'deadtree', 
        image: 'http://i.imgur.com/v5GIiqJ.jpg', 
      }]

  },
  {
    id: 'manuka',
    kakaNest: false,
    nearbyDescription:  `Mānuka trees have small sharp-tipped leaves and white flowers. \n
    We'd love to suck their nectar but our beaks are too big! \n
    `,
    distantDescription: `Krark! \n
    This one is hard to find! \n
    Head to the grass near the ⚡*power-pylon ⚡ \n
    And look down 👀\n
    `,
    challenge: {
      text: `Manuka pollen is made into something sweet and sticky by an insect. \n
      I can't remember their name but I do remember that they buzz… \n
      Do you know what they're called?
      `,
      options: [
        'N_wasps',
        'N_flies',
        'Y_bees'
      ],
    },
    nearby: [
      { id: 'karaka', 
        image: 'http://i.imgur.com/pPVsw0N.jpg', 
      },
      { id: 'rata', 
        image: 'http://i.imgur.com/CwW29Wf.jpg', 
      },
      { id: 'stream', 
        image: 'http://i.imgur.com/wr1drzF.jpg' }                                                                          ]
  },
  {
    id: 'treefern',
    kakaNest: false,
    challenge: {
      text: `You found the punga! \n
      Some humans here in Aotearoa love to use it as a symbol on their rugby jerseys.
        Can you tell me which part of the tree they put on their jerseys?`,
      options: [
        'N_twisted scales',
        'N_long fronds',
        'Y_silver ferns'
      ],
    },
    nearby: [
      { id: 'stream', 
        image: 'http://i.imgur.com/4kM1JFY.jpg', 
      },
      { id: 'kakacafe', 
        image: 'http://i.imgur.com/4kM1JFY.jpg', 
      },
      { id: 'hollowtree', 
        image: 'http://i.imgur.com/mZ0InNL.jpg'
      }
    ]
  },
  {
    id: 'pinetree',
    kakaNest: true,
    challenge: {
      text: "Pine trees grow fast and have pointy needles for capturing sunlight. Which one of these pictures looks most like a pine tree?",
      options: [
      'Y_🌳',
      'N_🍀',
      'N_🌵'
],
    },
    nearby: [
      { id: 'toast', 
        image: 'http://i.imgur.com/0m59zpf.jpg', 
      },
      { id: 'kakacafe', 
        image: 'http://i.imgur.com/mFT8vVl.jpg', 
      },
      { id: 'deadtree', 
        image: 'http://i.imgur.com/IWOLMzD.jpg'
      }
    ]
  },
  {
    id: 'deadtree',
    kakaNest: false,
    challenge: {
      text: 'If fish have scales, and birds have feathers, what do trees have?',
      options: [
        'Y_bark',
        'N_hair',
        'N_comfy underpants'
      ],
    },
    nearby: [
      { id: 'hollowtree', 
        image: 'https://i.imgur.com/aTDwYFM.jpg', 
      },
      { id: 'karaka', 
        image: 'https://i.imgur.com/W1DO3Di.jpg', 
      },
      { id: 'stream', 
        image: 'https://i.imgur.com/Idm0aar.jpg'
      }
    ]
  }
]
