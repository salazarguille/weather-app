/* eslint-disable import/prefer-default-export */
export const UVI_RESPONSE = {
    data: {
        lat: 37.3855,
        lon: -122.088,
        date_iso: '2020-02-22T12:00:00Z',
        date: 1582372800000,
        value: 3.57,
    },
};

export const FORECAST_RESPONSE = {
    cod: '200',
    message: 0.0122,
    cnt: 40,
    list: [
        {
            dt: 1519074000,
            main: {
                temp: 283.99,
                temp_min: 281.801,
                temp_max: 283.99,
                pressure: 989.94,
                sea_level: 1029.29,
                grnd_level: 989.94,
                humidity: 52,
                temp_kf: 2.19,
            },
            weather: [
                {
                    id: 801,
                    main: 'Clouds',
                    description: 'few clouds',
                    icon: '02d',
                },
            ],
            clouds: {
                all: 20,
            },
            wind: {
                speed: 3.36,
                deg: 325.001,
            },
            rain: { },
            sys: {
                pod: 'd',
            },
            dt_txt: '2018-02-19 21:00:00',
        },
        {
            dt: 1519084800,
            main: {
                temp: 282.64,
                temp_min: 281.177,
                temp_max: 282.64,
                pressure: 990.6,
                sea_level: 1029.94,
                grnd_level: 990.6,
                humidity: 47,
                temp_kf: 1.46,
            },
            weather: [
                {
                    id: 802,
                    main: 'Clouds',
                    description: 'scattered clouds',
                    icon: '03n',
                },
            ],
            clouds: {
                all: 36,
            },
            wind: {
                speed: 3.17,
                deg: 319.502,
            },
            rain: { },
            sys: {
                pod: 'n',
            },
            dt_txt: '2018-02-20 00:00:00',
        },
        {
            dt: 1519095600,
            main: {
                temp: 278.3,
                temp_min: 277.566,
                temp_max: 278.3,
                pressure: 992.46,
                sea_level: 1032.01,
                grnd_level: 992.46,
                humidity: 53,
                temp_kf: 0.73,
            },
            weather: [
                {
                    id: 800,
                    main: 'Clear',
                    description: 'clear sky',
                    icon: '01n',
                },
            ],
            clouds: {
                all: 0,
            },
            wind: {
                speed: 2.12,
                deg: 309.009,
            },
            rain: { },
            sys: {
                pod: 'n',
            },
            dt_txt: '2018-02-20 03:00:00',
        },
    ],
    city: {
        name: 'Mountain View',
        coord: {
            lat: 37.3855,
            lon: -122.088,
        },
        sunrise: 1582595794,
        sunset: 1582555621,
        country: 'US',
    },
};

export const WEATHER_FOR_RESPONSE = {
    success: true,
    data: {
        city: {
            name: 'Mountain View',
            coord: {
                lat: 37.3855,
                lon: -122.088,
            },
            sunrise: 1582595794,
            sunset: 1582555621,
            country: 'US',
        },
        days: [
            {
                dt: 1519074000,
                main: {
                    temp: 283.99,
                    temp_min: 281.801,
                    temp_max: 283.99,
                    pressure: 989.94,
                    sea_level: 1029.29,
                    grnd_level: 989.94,
                    humidity: 52,
                    temp_kf: 2.19,
                },
                weather: [
                    {
                        id: 801,
                        main: 'Clouds',
                        description: 'few clouds',
                        icon: '02d',
                    },
                ],
                clouds: {
                    all: 20,
                },
                wind: {
                    speed: 3.36,
                    deg: 325.001,
                },
                rain: { },
                sys: {
                    pod: 'd',
                },
                dt_txt: '2018-02-19 21:00:00',
            },
            {
                dt: 1519084800,
                main: {
                    temp: 282.64,
                    temp_min: 281.177,
                    temp_max: 282.64,
                    pressure: 990.6,
                    sea_level: 1029.94,
                    grnd_level: 990.6,
                    humidity: 47,
                    temp_kf: 1.46,
                },
                weather: [
                    {
                        id: 802,
                        main: 'Clouds',
                        description: 'scattered clouds',
                        icon: '03n',
                    },
                ],
                clouds: {
                    all: 36,
                },
                wind: {
                    speed: 3.17,
                    deg: 319.502,
                },
                rain: { },
                sys: {
                    pod: 'n',
                },
                dt_txt: '2018-02-20 00:00:00',
            },
            {
                dt: 1519095600,
                main: {
                    temp: 278.3,
                    temp_min: 277.566,
                    temp_max: 278.3,
                    pressure: 992.46,
                    sea_level: 1032.01,
                    grnd_level: 992.46,
                    humidity: 53,
                    temp_kf: 0.73,
                },
                weather: [
                    {
                        id: 800,
                        main: 'Clear',
                        description: 'clear sky',
                        icon: '01n',
                    },
                ],
                clouds: {
                    all: 0,
                },
                wind: {
                    speed: 2.12,
                    deg: 309.009,
                },
                rain: { },
                sys: {
                    pod: 'n',
                },
                dt_txt: '2018-02-20 03:00:00',
            },
        ],
    },
};


export const CONFIG = {
    WEATHER_API_URL: 'https://api.mock',
    OPEN_WEATHER_MAP_KEY: 'MY_KEY',
};
