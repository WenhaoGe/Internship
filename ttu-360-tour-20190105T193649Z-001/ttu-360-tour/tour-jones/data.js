var APP_DATA = {
  "scenes": [
    {
      "id": "0-50-yard-line",
      "name": "50 Yard Line",
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
      "faceSize": 1536,
      "initialViewParameters": {
        "yaw": 1.9138535531079874,
        "pitch": 0.03262524150657775,
        "fov": 1.4958178908921285
      },
      "linkHotspots": [
        {
          "yaw": -1.2202202794003654,
          "pitch": -0.1212272191133863,
          "rotation": 0,
          "target": "1-stands"
        },
        {
          "yaw": -1.4111537524240916,
          "pitch": -0.25630281805342037,
          "rotation": 0,
          "target": "2-front"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-stands",
      "name": "Stands",
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
      "faceSize": 1536,
      "initialViewParameters": {
        "yaw": 1.6217975038940136,
        "pitch": 0.12562649895112088,
        "fov": 1.4958178908921285
      },
      "linkHotspots": [
        {
          "yaw": 1.5971670181415547,
          "pitch": 0.06462952403301081,
          "rotation": 0,
          "target": "0-50-yard-line"
        },
        {
          "yaw": -1.626341591198857,
          "pitch": -0.030742088267995626,
          "rotation": 0,
          "target": "2-front"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-front",
      "name": "Front",
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
      "faceSize": 1536,
      "initialViewParameters": {
        "yaw": 1.801337234251882,
        "pitch": -0.13219197946217776,
        "fov": 1.4958178908921285
      },
      "linkHotspots": [
        {
          "yaw": 1.770603711783954,
          "pitch": -0.1193871170804428,
          "rotation": 0,
          "target": "1-stands"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
