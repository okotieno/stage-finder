'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const createItem = async (route, tableName) => {
      const [existingResult] = await queryInterface.sequelize.query(
        `SELECT "id" FROM "${tableName}" WHERE "name" = :name;`,
        {
          replacements: { name: route.name }
        }
      );
      let existingResultId = existingResult?.[0]?.id;
      if (existingResultId) {
        return existingResultId;
      }
      await queryInterface.bulkInsert(tableName, [
        {
          ...route,
          ['created_at']: new Date(),
          ['updated_at']: new Date()
        }
      ]);

      const [results] = await queryInterface.sequelize.query(
        `SELECT "id" FROM "${tableName}" WHERE "name" = :name;`,
        {
          replacements: { name: route.name }
        }
      );
      return results[0]?.id;

    };

    const routes = [
      {
        'routeName': '110ATH',
        'source': {
          'name': 'Athiriver',
          'lat': -1.4565,
          'lng': 36.9786
        },
        'terminus': {
          'name': 'Kitengela',
          'lat': -1.4412,
          'lng': 36.9571
        },
        'stops': [
          {
            'name': 'Athiriver',
            'lat': -1.4565,
            'lng': 36.9786
          },
          {
            'name': 'Kitengela',
            'lat': -1.4412,
            'lng': 36.9571
          }
        ],
        'saccos': [
          'Embassava, UmoInner'
        ]
      },
      {
        'routeName': '46',
        'source': {
          'name': 'Kawangware',
          'lat': -1.2907,
          'lng': 36.7202
        },
        'terminus': {
          'name': 'Yaya',
          'lat': -1.2955,
          'lng': 36.7862
        },
        'stops': [
          {
            'name': 'Kawangware',
            'lat': -1.2907,
            'lng': 36.7202
          },
          {
            'name': 'Yaya',
            'lat': -1.2955,
            'lng': 36.7862
          }
        ],
        'saccos': []
      },
      {
        'routeName': '19C',
        'source': {
          'name': 'Komarocks',
          'lat': -1.2758,
          'lng': 36.8947
        },
        'terminus': {
          'name': 'Jacaranda',
          'lat': -1.2972,
          'lng': 36.8771
        },
        'stops': [
          {
            'name': 'Komarocks',
            'lat': -1.2758,
            'lng': 36.8947
          },
          {
            'name': 'Jacaranda',
            'lat': -1.2972,
            'lng': 36.8771
          }
        ],
        'saccos': []
      },
      {
        'routeName': '34B',
        'source': {
          'name': 'Kayole',
          'lat': -1.2871,
          'lng': 36.9039
        },
        'terminus': {
          'name': 'Jacaranda',
          'lat': -1.2972,
          'lng': 36.8771
        },
        'stops': [
          {
            'name': 'Kayole',
            'lat': -1.2871,
            'lng': 36.9039
          },
          {
            'name': 'Jacaranda',
            'lat': -1.2972,
            'lng': 36.8771
          }
        ],
        'saccos': []
      },
      {
        'routeName': '12C',
        'source': {
          'name': 'City Centre',
          'lat': -1.286389,
          'lng': 36.817223
        },
        'terminus': {
          'name': 'South C',
          'lat': -1.3284,
          'lng': 36.8309
        },
        'stops': [
          {
            'name': 'City Centre',
            'lat': -1.286389,
            'lng': 36.817223
          },
          {
            'name': 'South C',
            'lat': -1.3284,
            'lng': 36.8309
          }
        ],
        'saccos': []
      },
      {
        'routeName': '33',
        'source': {
          'name': 'City Centre',
          'lat': -1.286389,
          'lng': 36.817223
        },
        'terminus': {
          'name': 'Utawala',
          'lat': -1.2756,
          'lng': 36.9617
        },
        'stops': [
          {
            'name': 'City Centre',
            'lat': -1.286389,
            'lng': 36.817223
          },
          {
            'name': 'Utawala',
            'lat': -1.2756,
            'lng': 36.9617
          }
        ],
        'saccos': []
      },
      {
        'routeName': '7C',
        'source': {
          'name': 'City Centre',
          'lat': -1.286389,
          'lng': 36.817223
        },
        'terminus': {
          'name': 'KNH',
          'lat': -1.3007,
          'lng': 36.8073
        },
        'stops': [
          {
            'name': 'City Centre',
            'lat': -1.286389,
            'lng': 36.817223
          },
          {
            'name': 'KNH',
            'lat': -1.3007,
            'lng': 36.8073
          }
        ],
        'saccos': []
      },
      {
        'routeName': '8',
        'source': {
          'name': 'City Centre',
          'lat': -1.286389,
          'lng': 36.817223
        },
        'terminus': {
          'name': 'Kibera',
          'lat': -1.3126,
          'lng': 36.7911
        },
        'stops': [
          {
            'name': 'City Centre',
            'lat': -1.286389,
            'lng': 36.817223
          },
          {
            'name': 'Kibera',
            'lat': -1.3126,
            'lng': 36.7911
          }
        ],
        'saccos': []
      },
      {
        'routeName': '24',
        'source': {
          'name': 'City Centre',
          'lat': -1.286389,
          'lng': 36.817223
        },
        'terminus': {
          'name': 'Karen',
          'lat': -1.3224,
          'lng': 36.6856
        },
        'stops': [
          {
            'name': 'City Centre',
            'lat': -1.286389,
            'lng': 36.817223
          },
          {
            'name': 'Karen',
            'lat': -1.3224,
            'lng': 36.6856
          },
          {
            'name': 'Hardy',
            'lat': -1.3395,
            'lng': 36.6684
          }
        ],
        'saccos': []
      },
      {
        'routeName': '32',
        'source': {
          'name': 'City Centre',
          'lat': -1.286389,
          'lng': 36.817223
        },
        'terminus': {
          'name': 'Ayani',
          'lat': -1.2995,
          'lng': 36.7768
        },
        'stops': [
          {
            'name': 'City Centre',
            'lat': -1.286389,
            'lng': 36.817223
          },
          {
            'name': 'Ayani',
            'lat': -1.2995,
            'lng': 36.7768
          }
        ],
        'saccos': []
      },
      {
        'routeName': '111',
        'source': {
          'name': 'City Centre',
          'lat': -1.286389,
          'lng': 36.817223
        },
        'terminus': {
          'name': 'Ngong',
          'lat': -1.3611,
          'lng': 36.6544
        },
        'stops': [
          {
            'name': 'City Centre',
            'lat': -1.286389,
            'lng': 36.817223
          },
          {
            'name': 'Ngong',
            'lat': -1.3611,
            'lng': 36.6544
          }
        ],
        'saccos': []
      },
      {
        'routeName': '4W',
        'source': {
          'name': 'City Centre',
          'lat': -1.286389,
          'lng': 36.817223
        },
        'terminus': {
          'name': 'Kibera',
          'lat': -1.3126,
          'lng': 36.7911
        },
        'stops': [
          {
            'name': 'City Centre',
            'lat': -1.286389,
            'lng': 36.817223
          },
          {
            'name': 'Kibera',
            'lat': -1.3126,
            'lng': 36.7911
          }
        ],
        'saccos': []
      },
      {
        'routeName': '102',
        'source': {
          'name': 'City Centre',
          'lat': -1.286389,
          'lng': 36.817223
        },
        'terminus': {
          'name': 'Kikuyu',
          'lat': -1.2556,
          'lng': 36.6587
        },
        'stops': [
          {
            'name': 'City Centre',
            'lat': -1.286389,
            'lng': 36.817223
          },
          {
            'name': 'Kikuyu',
            'lat': -1.2556,
            'lng': 36.6587
          }
        ],
        'saccos': []
      },
      {
        'routeName': '25A',
        'source': {
          'name': 'City Centre',
          'lat': -1.286389,
          'lng': 36.817223
        },
        'terminus': {
          'name': 'Lucky Summer',
          'lat': -1.2414,
          'lng': 36.8976
        },
        'stops': [
          {
            'name': 'City Centre',
            'lat': -1.286389,
            'lng': 36.817223
          },
          {
            'name': 'Lucky Summer',
            'lat': -1.2414,
            'lng': 36.8976
          }
        ],
        'saccos': []
      },
      {
        'routeName': '43',
        'source': {
          'name': 'City Centre',
          'lat': -1.286389,
          'lng': 36.817223
        },
        'terminus': {
          'name': 'Ngumba',
          'lat': -1.2369,
          'lng': 36.8707
        },
        'stops': [
          {
            'name': 'City Centre',
            'lat': -1.286389,
            'lng': 36.817223
          },
          {
            'name': 'Ngumba',
            'lat': -1.2369,
            'lng': 36.8707
          }
        ],
        'saccos': []
      },
      {
        'routeName': '44',
        'source': {
          'name': 'City Centre',
          'lat': -1.286389,
          'lng': 36.817223
        },
        'terminus': {
          'name': 'Kahawa West',
          'lat': -1.2177,
          'lng': 36.8881
        },
        'stops': [
          {
            'name': 'City Centre',
            'lat': -1.286389,
            'lng': 36.817223
          },
          {
            'name': 'Kahawa West',
            'lat': -1.2177,
            'lng': 36.8881
          }
        ],
        'saccos': []
      },
      {
        'routeName': '145',
        'source': {
          'name': 'City Centre',
          'lat': -1.286389,
          'lng': 36.817223
        },
        'terminus': {
          'name': 'Ruiru Town',
          'lat': -1.1458,
          'lng': 36.9622
        },
        'stops': [
          {
            'name': 'City Centre',
            'lat': -1.286389,
            'lng': 36.817223
          },
          {
            'name': 'Ruiru Town',
            'lat': -1.1458,
            'lng': 36.9622
          }
        ],
        'saccos': []
      },
      {
        'routeName': '45',
        'source': {
          'name': 'City Centre',
          'lat': -1.286389,
          'lng': 36.817223
        },
        'terminus': {
          'name': 'Githurai',
          'lat': -1.1869,
          'lng': 36.9074
        },
        'stops': [
          {
            'name': 'City Centre',
            'lat': -1.286389,
            'lng': 36.817223
          },
          {
            'name': 'Githurai',
            'lat': -1.1869,
            'lng': 36.9074
          }
        ],
        'saccos': []
      },
      {
        'routeName': '49',
        'source': {
          'name': 'City Centre',
          'lat': -1.286389,
          'lng': 36.817223
        },
        'terminus': {
          'name': 'Sunton',
          'lat': -1.2073,
          'lng': 36.8924
        },
        'stops': [
          {
            'name': 'City Centre',
            'lat': -1.286389,
            'lng': 36.817223
          },
          {
            'name': 'Sunton',
            'lat': -1.2073,
            'lng': 36.8924
          }
        ]
      },
      {
        'routeName': '119',
        'source': {
          'name': 'City Centre',
          'lat': -1.286389,
          'lng': 36.817223
        },
        'terminus': {
          'name': 'Wangige',
          'lat': -1.2232,
          'lng': 36.7096
        },
        'stops': [
          {
            'name': 'City Centre',
            'lat': -1.286389,
            'lng': 36.817223
          },
          {
            'name': 'Wangige',
            'lat': -1.2232,
            'lng': 36.7096
          }
        ],
        'saccos': []
      },
      {
        'routeName': '103',
        'source': {
          'name': 'City Centre',
          'lat': -1.286389,
          'lng': 36.817223
        },
        'terminus': {
          'name': 'Wangige Nakumatt',
          'lat': -1.2321,
          'lng': 36.7002
        },
        'stops': [
          {
            'name': 'City Centre',
            'lat': -1.286389,
            'lng': 36.817223
          },
          {
            'name': 'Wangige Nakumatt',
            'lat': -1.2321,
            'lng': 36.7002
          }
        ],
        'saccos': []
      },
      {
        'routeName': '11B',
        'source': {
          'name': 'City Centre',
          'lat': -1.286389,
          'lng': 36.817223
        },
        'terminus': {
          'name': 'Banana',
          'lat': -1.1879,
          'lng': 36.7495
        },
        'stops': [
          {
            'name': 'City Centre',
            'lat': -1.286389,
            'lng': 36.817223
          },
          {
            'name': 'Banana',
            'lat': -1.1879,
            'lng': 36.7495
          }
        ],
        'saccos': []
      },
      {
        'routeName': '118',
        'source': {
          'name': 'City Centre',
          'lat': -1.286389,
          'lng': 36.817223
        },
        'terminus': {
          'name': 'Wangige',
          'lat': -1.2232,
          'lng': 36.7096
        },
        'stops': [
          {
            'name': 'City Centre',
            'lat': -1.286389,
            'lng': 36.817223
          },
          {
            'name': 'Wangige',
            'lat': -1.2232,
            'lng': 36.7096
          }
        ],
        'saccos': []
      },
      {
        'routeName': '17A',
        'source': {
          'name': 'City Centre',
          'lat': -1.286389,
          'lng': 36.817223
        },
        'terminus': {
          'name': 'Eastleigh',
          'lat': -1.2736,
          'lng': 36.8507
        },
        'stops': [
          {
            'name': 'City Centre',
            'lat': -1.286389,
            'lng': 36.817223
          },
          {
            'name': 'Kayole',
            'lat': -1.2871,
            'lng': 36.9039
          },
          {
            'name': 'Eastleigh',
            'lat': -1.2736,
            'lng': 36.8507
          }
        ],
        'saccos': []
      },
      {
        'routeName': '18C',
        'source': {
          'name': 'City Centre',
          'lat': -1.286389,
          'lng': 36.817223
        },
        'terminus': {
          'name': 'Eastleigh',
          'lat': -1.2736,
          'lng': 36.8507
        },
        'stops': [
          {
            'name': 'City Centre',
            'lat': -1.286389,
            'lng': 36.817223
          },
          {
            'name': 'Komarocks',
            'lat': -1.2758,
            'lng': 36.8947
          },
          {
            'name': 'Eastleigh',
            'lat': -1.2736,
            'lng': 36.8507
          }
        ]
      },
      {
        'routeName': '34',
        'source': {
          'name': 'City Centre',
          'lat': -1.286389,
          'lng': 36.817223
        },
        'terminus': {
          'name': 'Kayole',
          'lat': -1.2871,
          'lng': 36.9039
        },
        'stops': [
          {
            'name': 'City Centre',
            'lat': -1.286389,
            'lng': 36.817223
          },
          {
            'name': 'Kayole',
            'lat': -1.2871,
            'lng': 36.9039
          }
        ],
        'saccos': []
      },
      {
        'routeName': '15',
        'source': {
          'name': 'City Centre',
          'lat': -1.286389,
          'lng': 36.817223
        },
        'terminus': {
          'name': 'Uthiru',
          'lat': -1.2679,
          'lng': 36.7064
        },
        'stops': [
          {
            'name': 'City Centre',
            'lat': -1.286389,
            'lng': 36.817223
          },
          {
            'name': 'Uthiru',
            'lat': -1.2679,
            'lng': 36.7064
          }
        ],
        'saccos': []
      },
      {
        'routeName': '12',
        'source': {
          'name': 'City Centre',
          'lat': -1.286389,
          'lng': 36.817223
        },
        'terminus': {
          'name': 'Langata',
          'lat': -1.3602,
          'lng': 36.7312
        },
        'stops': [
          {
            'name': 'City Centre',
            'lat': -1.286389,
            'lng': 36.817223
          },
          {
            'name': 'Langata',
            'lat': -1.3602,
            'lng': 36.7312
          }
        ],
        'saccos': []
      },
      {
        'routeName': '33A',
        'source': {
          'name': 'City Centre',
          'lat': -1.286389,
          'lng': 36.817223
        },
        'terminus': {
          'name': 'Nyayo Estate',
          'lat': -1.3042,
          'lng': 36.8731
        },
        'stops': [
          {
            'name': 'City Centre',
            'lat': -1.286389,
            'lng': 36.817223
          },
          {
            'name': 'Nyayo Estate',
            'lat': -1.3042,
            'lng': 36.8731
          }
        ],
        'saccos': []
      }
    ];

    for (let i = 0; i < routes.length; i++) {

      const route = routes[i];
      const sourceStopId = await createItem(route.source, 'stops');
      const terminusStopId = await createItem(route.terminus, 'stops');
      const routeId = await createItem({
        name: route.routeName,
        ['terminus_stop_id']: terminusStopId,
        ['source_stop_id']: sourceStopId
      }, 'routes');
      for (let j = 0; j < route.stops.length; j++) {
        const destination = route.stops[j];
        const stopId = await createItem(destination, 'stops');

        await queryInterface.bulkInsert('route_stop', [
          {
            ['route_id']: routeId,
            ['stop_id']: stopId,
            ['created_at']: new Date(),
            ['updated_at']: new Date()
          }
        ]);


      }
    }
  },

  async down(queryInterface) {

    await queryInterface.bulkDelete('stops', null, {});
  }
};
