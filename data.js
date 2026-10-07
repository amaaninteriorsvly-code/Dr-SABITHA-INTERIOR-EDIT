var APP_DATA = {
  "scenes": [
    {
      "id": "0-entry",
      "name": "ENTRY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.07756434606370277,
          "pitch": 0.6237045768034193,
          "rotation": 0,
          "target": "1-living-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living-1",
      "name": "LIVING 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.08418271378304887,
          "pitch": 0.5434063897703894,
          "rotation": 0,
          "target": "2-living-2"
        },
        {
          "yaw": -2.255318010007656,
          "pitch": 0.46153051224296426,
          "rotation": 0,
          "target": "3-passage-1"
        },
        {
          "yaw": 3.06717290336817,
          "pitch": 0.6435120440534163,
          "rotation": 4.71238898038469,
          "target": "0-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-living-2",
      "name": "LIVING 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "1-living-1"
        },
        {
          "yaw": -1.118729688564109,
          "pitch": 0.5390502098387113,
          "rotation": 0,
          "target": "1-living-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-passage-1",
      "name": "PASSAGE 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.05988401513980435,
          "pitch": 0.4802267599176826,
          "rotation": 0,
          "target": "4-courtyard"
        },
        {
          "yaw": -1.4599079869934588,
          "pitch": 0.557427489002837,
          "rotation": 0,
          "target": "1-living-1"
        },
        {
          "yaw": 2.969612047866855,
          "pitch": 0.306425578799546,
          "rotation": 0,
          "target": "6-lift-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-courtyard",
      "name": "COURTYARD",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -1.4238191161407432,
          "pitch": 0.6084015114120724,
          "rotation": 0,
          "target": "3-passage-1"
        },
        {
          "yaw": 1.1465414132472205,
          "pitch": 0.6150068527136305,
          "rotation": 0,
          "target": "10-home-theatre-1"
        },
        {
          "yaw": 2.812738845750892,
          "pitch": 0.5962206727489185,
          "rotation": 0,
          "target": "9-passage-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-wash-area",
      "name": "WASH AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 1.1337607187347558,
          "pitch": 0.7368218812507905,
          "rotation": 0,
          "target": "7-dining-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-lift-area",
      "name": "LIFT AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -1.5794168225120409,
          "pitch": 0.4707663713797636,
          "rotation": 0,
          "target": "7-dining-1"
        },
        {
          "yaw": 2.975783798688873,
          "pitch": 0.25512029029524896,
          "rotation": 0,
          "target": "3-passage-1"
        },
        {
          "yaw": 1.0593555741814686,
          "pitch": 0.7703516952688219,
          "rotation": 0,
          "target": "13-bedroom-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-dining-1",
      "name": "DINING 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.12551802592014027,
          "pitch": 0.72378475897351,
          "rotation": 0,
          "target": "8-dining-2"
        },
        {
          "yaw": -1.0394592724092604,
          "pitch": 0.43721934247740535,
          "rotation": 0,
          "target": "23-kitchen-1"
        },
        {
          "yaw": -1.6760272717502218,
          "pitch": 0.4622200962218592,
          "rotation": 0,
          "target": "5-wash-area"
        },
        {
          "yaw": -2.61082620872868,
          "pitch": 0.6897450345700022,
          "rotation": 0,
          "target": "20-bedroom-3"
        },
        {
          "yaw": 1.2553507579169398,
          "pitch": 0.43550414613561017,
          "rotation": 4.71238898038469,
          "target": "6-lift-area"
        },
        {
          "yaw": 2.150974185754894,
          "pitch": 0.341246400836134,
          "rotation": 1.5707963267948966,
          "target": "3-passage-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-dining-2",
      "name": "DINING 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.6748077004387394,
          "pitch": 0.35863718161661495,
          "rotation": 0,
          "target": "7-dining-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-passage-2",
      "name": "PASSAGE 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.6495149334978709,
          "pitch": 0.40586558036225284,
          "rotation": 0,
          "target": "3-passage-1"
        },
        {
          "yaw": -1.6507791982538116,
          "pitch": 1.0009902551812395,
          "rotation": 4.71238898038469,
          "target": "17-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-home-theatre-1",
      "name": "HOME THEATRE 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.26662804916933425,
          "pitch": 0.5355262934169911,
          "rotation": 0,
          "target": "11-home-theatre-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-home-theatre-2",
      "name": "HOME THEATRE 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.0806469623173669,
        "pitch": 0.0005003887303303145,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.724665448431594,
          "pitch": 0.45602540618875587,
          "rotation": 0,
          "target": "12-home-theatre-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-home-theatre-3",
      "name": "HOME THEATRE 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 1.5154264311580654,
          "pitch": 0.5937491431170479,
          "rotation": 0,
          "target": "3-passage-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-bedroom-1",
      "name": "BEDROOM 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.6192694940571979,
          "pitch": 0.4556376937770992,
          "rotation": 0,
          "target": "14-bedroom-12"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-bedroom-12",
      "name": "BEDROOM 1.2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.65232514655656,
          "pitch": 0.5059810727818288,
          "rotation": 0,
          "target": "15-bedroom-13"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-bedroom-13",
      "name": "BEDROOM 1.3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.6851254585530917,
          "pitch": 0.35561750129220115,
          "rotation": 0,
          "target": "16-bedroom-14"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-bedroom-14",
      "name": "BEDROOM 1.4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -2.8332032409395396,
          "pitch": 0.46603364543988945,
          "rotation": 1.5707963267948966,
          "target": "6-lift-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-bedroom-2",
      "name": "BEDROOM 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.0946947714814177
      },
      "linkHotspots": [
        {
          "yaw": -0.25170317955037724,
          "pitch": 0.4844917880334343,
          "rotation": 0,
          "target": "18-bedroom-22"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-bedroom-22",
      "name": "BEDROOM 2.2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.1174321955832447
      },
      "linkHotspots": [
        {
          "yaw": 0.45470758539008926,
          "pitch": 0.4541442254648693,
          "rotation": 0,
          "target": "19-bedroom-23"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-bedroom-23",
      "name": "BEDROOM 2.3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 2.297312795909349,
          "pitch": 0.5788773625891572,
          "rotation": 0,
          "target": "9-passage-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-bedroom-3",
      "name": "BEDROOM 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.19581074728579395,
        "pitch": -0.013133214530016701,
        "fov": 1.0723428494219516
      },
      "linkHotspots": [
        {
          "yaw": -0.10640020747254653,
          "pitch": 0.4712067792732082,
          "rotation": 0,
          "target": "21-bedroom-32"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-bedroom-32",
      "name": "BEDROOM 3.2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -2.8732938705866076,
          "pitch": 0.7267738301506572,
          "rotation": 0,
          "target": "22-bedroom-33"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-bedroom-33",
      "name": "BEDROOM 3.3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.513549276171192,
          "pitch": 0.35556959154709844,
          "rotation": 0,
          "target": "7-dining-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-kitchen-1",
      "name": "KITCHEN 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.47921717135843345,
          "pitch": 0.4593023337759288,
          "rotation": 0,
          "target": "24-kitchen-2"
        },
        {
          "yaw": 1.4826353938432542,
          "pitch": 0.5220735863269397,
          "rotation": 0,
          "target": "7-dining-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-kitchen-2",
      "name": "KITCHEN 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.25198401485983446,
          "pitch": 0.639212337938293,
          "rotation": 0,
          "target": "25-kitchen-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-kitchen-3",
      "name": "KITCHEN 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.04216599104032959,
          "pitch": 0.4396423839088399,
          "rotation": 0,
          "target": "23-kitchen-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Dr SABITHA INTERIOR 125",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
