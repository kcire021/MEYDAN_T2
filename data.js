var APP_DATA = {
  "scenes": [
    {
      "id": "0-street",
      "name": "STREET",
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
        "yaw": 0.0028559933214360456,
        "pitch": 0.2583658418578594,
        "fov": 1.4083983627516938
      },
      "linkHotspots": [
        {
          "yaw": -0.17886641268884595,
          "pitch": 0.24368422282408098,
          "rotation": 0,
          "target": "2-living-1"
        },
        {
          "yaw": 0.3543582400802343,
          "pitch": 0.13853045240802864,
          "rotation": 0,
          "target": "3-living-2"
        },
        {
          "yaw": 0.04396627506344686,
          "pitch": 0.27712843647175056,
          "rotation": 0,
          "target": "1-garden"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-garden",
      "name": "GARDEN",
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
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "yaw": 0.014719909777495488,
        "pitch": 0.23618291604178054,
        "fov": 1.4083983627516938
      },
      "linkHotspots": [
        {
          "yaw": 0.22223127494594763,
          "pitch": 0.2312968425980575,
          "rotation": 0,
          "target": "2-living-1"
        },
        {
          "yaw": -0.3119268179851087,
          "pitch": 0.09624918503013014,
          "rotation": 0,
          "target": "3-living-2"
        },
        {
          "yaw": -0.054035184038975004,
          "pitch": 0.21090353808998685,
          "rotation": 0,
          "target": "0-street"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-living-1",
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
        "yaw": -0.11043862309253782,
        "pitch": 0.03915105570327526,
        "fov": 1.4083983627516938
      },
      "linkHotspots": [
        {
          "yaw": 0.5722816240303477,
          "pitch": 0.11096183595681985,
          "rotation": 0,
          "target": "1-garden"
        },
        {
          "yaw": 1.8308712622887642,
          "pitch": -0.24070982651180728,
          "rotation": 0,
          "target": "3-living-2"
        },
        {
          "yaw": -2.6337469778663394,
          "pitch": 0.0037219207650291963,
          "rotation": 0,
          "target": "0-street"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-living-2",
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
        "yaw": 0.01621877455825782,
        "pitch": 0.12037400284258659,
        "fov": 1.4083983627516938
      },
      "linkHotspots": [
        {
          "yaw": -1.4232694561167385,
          "pitch": 0.10998399695895422,
          "rotation": 5.497787143782138,
          "target": "1-garden"
        },
        {
          "yaw": 0.7313476684135747,
          "pitch": 0.09003136752806284,
          "rotation": 0.7853981633974483,
          "target": "0-street"
        },
        {
          "yaw": -2.5873095253338736,
          "pitch": 0.21215488120816062,
          "rotation": 11.780972450961727,
          "target": "2-living-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "MEYDAN_T1",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
