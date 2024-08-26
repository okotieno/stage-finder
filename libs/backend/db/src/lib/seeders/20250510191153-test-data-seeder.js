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
        'destinationsServed': [
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
        'destinationsServed': [
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
        ]
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
        'destinationsServed': [
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
        ]
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
        'destinationsServed': [
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
        ]
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
        'destinationsServed': [
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
        ]
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
        'destinationsServed': [
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
        ]
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
        'destinationsServed': [
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
        ]
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
        'destinationsServed': [
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
        ]
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
        'destinationsServed': [
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
        ]
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
        'destinationsServed': [
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
        ]
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
        'destinationsServed': [
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
        ]
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
        'destinationsServed': [
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
        ]
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
        'destinationsServed': [
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
        ]
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
        'destinationsServed': [
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
        ]
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
        'destinationsServed': [
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
        ]
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
        'destinationsServed': [
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
        ]
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
        'destinationsServed': [
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
        ]
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
        'destinationsServed': [
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
        ]
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
        'destinationsServed': [
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
        'destinationsServed': [
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
        ]
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
        'destinationsServed': [
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
        ]
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
        'destinationsServed': [
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
        ]
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
        'destinationsServed': [
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
        ]
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
        'destinationsServed': [
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
        ]
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
        'destinationsServed': [
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
        'destinationsServed': [
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
        ]
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
        'destinationsServed': [
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
        ]
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
        'destinationsServed': [
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
        ]
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
        'destinationsServed': [
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
        ]
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
      for (let j = 0; j < route.destinationsServed.length; j++) {
        const destination = route.destinationsServed[j];
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
