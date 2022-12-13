

const nba = {}

nba.teams = {
    'Atlanta Hawks': [
        1610612737, 'Atlanta Hawks', 23, 13,
        10, 0.565, 48.4, 43.3,
        92.4, 0.469, 9.7, 29.6,
        0.326, 17.7, 21.5, 0.822,
        11.1, 33.5, 44.6, 23.8,
        13.2, 7.3, 4.8, 5.1,
        19.9, 21.1, 114, 0.7,
        13, 9, 9, 9,
        10, 3, 4, 16,
        30, 29, 27, 18,
        26, 4, 13, 11,
        10, 20, 2, 12,
        16, 18, 9, 9,
        13, 15, 10, 'Atlanta Hawks'
    ],
    'Boston Celtics': [
        1610612738, 'Boston Celtics', 24, 19,
        5, 0.792, 48.6, 42.6,
        86.3, 0.494, 16.8, 41.6,
        0.404, 18.8, 22.1, 0.849,
        8, 34.2, 42.2, 27,
        13.9, 6.1, 5.2, 3.7,
        20.5, 20.5, 120.8, 8.2,
        4, 1, 1, 1,
        7, 10, 23, 3,
        1, 2, 1, 14,
        24, 1, 27, 7,
        25, 9, 6, 30,
        12, 2, 15, 17,
        1, 2, 10, 'Boston Celtics'
    ],
    'Brooklyn Nets': [
        1610612751, 'Brooklyn Nets', 25, 13,
        12, 0.52, 48.2, 41,
        83.1, 0.494, 11.8, 31.8,
        0.372, 17, 21.4, 0.796,
        7.4, 32.8, 40.2, 26,
        14.7, 7, 7.2, 4.1,
        22.2, 18.8, 110.9, 0.8,
        2, 9, 17, 17,
        25, 18, 29, 2,
        16, 22, 10, 25,
        27, 10, 30, 15,
        28, 11, 15, 20,
        1, 4, 26, 28,
        19, 14, 10, 'Brooklyn Nets'
    ],
    'Charlotte Hornets': [
        1610612766, 'Charlotte Hornets', 23,
        7, 16, 0.304,
        49.1, 40.9, 92.5,
        0.442, 10.2, 32,
        0.32, 16.9, 22.9,
        0.74, 12.7, 32.7,
        45.4, 24.9, 14.8,
        7.6, 4.9, 7.2,
        21.1, 20.8, 109,
        -6, 13, 26,
        26, 26, 1,
        19, 3, 30,
        27, 21, 29,
        26, 18, 26,
        4, 17, 6,
        13, 17, 10,
        14, 30, 21,
        16, 27, 26,
        10, 'Charlotte Hornets'
    ],
    'Chicago Bulls': [
        1610612741, 'Chicago Bulls', 23, 9,
        14, 0.391, 48.2, 41.1,
        87.6, 0.469, 10.1, 28.7,
        0.354, 19.2, 23.3, 0.825,
        9.6, 33.3, 42.9, 24.3,
        14.6, 7.5, 5.2, 5.9,
        20.2, 19.7, 111.5, -1.3,
        13, 25, 25, 25,
        17, 17, 16, 15,
        28, 30, 15, 9,
        16, 3, 22, 14,
        20, 16, 13, 11,
        11, 27, 13, 26,
        16, 22, 10, 'Chicago Bulls'
    ],
    'Cleveland Cavaliers': [
        1610612739, 'Cleveland Cavaliers', 24,
        15, 9, 0.625,
        49, 40.3, 84.8,
        0.475, 12.1, 32.1,
        0.378, 18.7, 23.2,
        0.808, 9.7, 33.4,
        43.1, 23.5, 15.1,
        6.3, 4.2, 4.5,
        19.4, 22.1, 111.3,
        6.3, 4, 4,
        5, 5, 3,
        22, 24, 10,
        11, 19, 6,
        15, 17, 7,
        21, 12, 19,
        23, 19, 29,
        23, 10, 4,
        5, 17, 4,
        10, 'Cleveland Cavaliers'
    ],
    'Dallas Mavericks': [
        1610612742, 'Dallas Mavericks', 22,
        11, 11, 0.5,
        48.7, 39.2, 83.6,
        0.468, 14.3, 40.6,
        0.351, 18, 25.1,
        0.716, 7.8, 30.5,
        38.3, 21.6, 12.8,
        8, 3.5, 4.5,
        20.8, 23, 110.6,
        2.3, 27, 18,
        10, 18, 4,
        25, 26, 17,
        4, 3, 17,
        17, 6, 29,
        29, 30, 30,
        28, 1, 7,
        28, 9, 18,
        1, 21, 7,
        10, 'Dallas Mavericks'
    ],
    'Denver Nuggets': [
        1610612743, 'Denver Nuggets', 23,
        14, 9, 0.609,
        48.2, 43.2, 86.4,
        0.5, 12.3, 30.9,
        0.397, 16.1, 21.7,
        0.745, 10.4, 32.7,
        43.1, 27.9, 15.3,
        7.1, 4.3, 4.5,
        19.4, 20, 114.7,
        1.1, 13, 6,
        5, 6, 17,
        5, 22, 1,
        10, 26, 2,
        28, 25, 24,
        16, 16, 17,
        3, 22, 18,
        22, 11, 5,
        22, 12, 13,
        10, 'Denver Nuggets'
    ],
    'Detroit Pistons': [
        1610612765, 'Detroit Pistons', 25,
        6, 19, 0.24,
        48.2, 39.1, 87.5,
        0.447, 11, 32.5,
        0.338, 20.9, 27,
        0.774, 11.3, 31.2,
        42.5, 21.9, 14.4,
        6.8, 4, 6.3,
        23, 21.9, 110.1,
        -8.1, 2, 27,
        29, 29, 25,
        27, 19, 28,
        22, 16, 21,
        1, 1, 21,
        11, 27, 23,
        27, 11, 22,
        27, 29, 30,
        6, 23, 29,
        10, 'Detroit Pistons'
    ],
    'Golden State Warriors': [
        1610612744, 'Golden State Warriors', 24,
        13, 11, 0.542,
        48.2, 43.1, 89,
        0.484, 16.7, 43.6,
        0.382, 14.8, 18.7,
        0.791, 8.9, 33.7,
        42.6, 30, 17.1,
        7.1, 4.1, 3.5,
        22.9, 18.7, 117.7,
        1.4, 4, 9,
        10, 10, 22,
        7, 14, 6,
        2, 1, 5,
        29, 30, 15,
        25, 10, 21,
        1, 29, 16,
        26, 1, 29,
        29, 3, 11,
        10, 'Golden State Warriors'
    ],
    'Houston Rockets': [
        1610612745, 'Houston Rockets', 23,
        6, 17, 0.261,
        48, 38.9, 87.6,
        0.444, 12, 35.2,
        0.342, 20.2, 25.8,
        0.781, 13.3, 32.5,
        45.8, 21.5, 17.8,
        7.8, 4.7, 6.1,
        20.8, 22.7, 110,
        -7, 13, 27,
        27, 27, 27,
        30, 16, 29,
        13, 9, 18,
        3, 2, 18,
        2, 19, 5,
        29, 30, 8,
        17, 28, 17,
        2, 24, 28,
        10, 'Houston Rockets'
    ],
    'Indiana Pacers': [
        1610612754, 'Indiana Pacers', 23,
        12, 11, 0.522,
        48, 40.8, 90.9,
        0.449, 14.3, 40.1,
        0.355, 19.3, 24.2,
        0.797, 10.9, 32.4,
        43.3, 27.7, 15.7,
        8.3, 6.4, 5.5,
        22.2, 20.9, 115.1,
        -1.3, 13, 15,
        10, 14, 27,
        20, 7, 27,
        5, 4, 14,
        8, 12, 9,
        14, 20, 14,
        5, 23, 4,
        3, 23, 27,
        15, 9, 22,
        10, 'Indiana Pacers'
    ],
    'Los Angeles Clippers': [
        1610612746, 'Los Angeles Clippers', 24, 13,
        11, 0.542, 48, 39,
        83.3, 0.468, 11.2, 31.4,
        0.355, 17.6, 23.7, 0.745,
        8.9, 34.4, 43.3, 22.4,
        15.9, 6.5, 4.7, 4.5,
        20.3, 20.3, 106.7, -1.8,
        4, 9, 10, 10,
        27, 29, 27, 19,
        20, 24, 13, 20,
        14, 25, 24, 5,
        13, 26, 24, 26,
        18, 12, 14, 19,
        30, 25, 10, 'Los Angeles Clippers'
    ],
    'Los Angeles Lakers': [
        1610612747, 'Los Angeles Lakers', 22,
        10, 12, 0.455,
        48.2, 42.3, 89.4,
        0.473, 9.9, 30,
        0.33, 20.2, 25.4,
        0.797, 9.7, 36.2,
        46, 25.1, 14.5,
        6.8, 5.2, 5.6,
        18.7, 21.5, 114.8,
        -0.4, 27, 23,
        17, 23, 15,
        11, 12, 11,
        29, 28, 25,
        2, 4, 8,
        20, 2, 4,
        12, 12, 23,
        10, 24, 1,
        7, 11, 16,
        10, 'Los Angeles Lakers'
    ],
    'Memphis Grizzlies': [
        1610612763, 'Memphis Grizzlies', 23,
        14, 9, 0.609,
        48.4, 42.7, 92.7,
        0.46, 12.3, 33.8,
        0.366, 17.7, 25.3,
        0.699, 14.2, 34.8,
        49, 24.3, 14.7,
        7, 5.3, 5.7,
        20, 22.5, 115.3,
        1.7, 13, 6,
        5, 6, 10,
        9, 2, 22,
        9, 14, 11,
        18, 5, 30,
        1, 4, 1,
        16, 16, 21,
        9, 25, 11,
        3, 8, 10,
        10, 'Memphis Grizzlies'
    ],
    'Miami Heat': [
        1610612748, 'Miami Heat', 23, 11,
        12, 0.478, 48.7, 39.2,
        86.6, 0.452, 11.9, 35.3,
        0.337, 19.2, 22.7, 0.847,
        9.5, 31.7, 41.2, 23.9,
        14.2, 7.7, 3.4, 4.2,
        19.3, 21.1, 109.5, -0.8,
        13, 18, 17, 19,
        5, 26, 21, 25,
        14, 8, 24, 9,
        20, 2, 23, 24,
        27, 19, 9, 9,
        29, 6, 3, 11,
        26, 18, 10, 'Miami Heat'
    ],
    'Milwaukee Bucks': [
        1610612749, 'Milwaukee Bucks', 22,
        16, 6, 0.727,
        48.5, 41.3, 89.7,
        0.46, 13.1, 37.3,
        0.352, 17, 23.5,
        0.724, 11.6, 36.8,
        48.4, 24.6, 15,
        6.6, 6.4, 4.9,
        19.1, 20.1, 112.7,
        4.7, 27, 2,
        2, 2, 9,
        16, 10, 21,
        7, 7, 16,
        24, 15, 27,
        10, 1, 2,
        15, 18, 25,
        2, 16, 2,
        21, 15, 5,
        10, 'Milwaukee Bucks'
    ],
    'Minnesota Timberwolves': [
        1610612750,
        'Minnesota Timberwolves',
        23,
        11,
        12,
        0.478,
        48.2,
        42.3,
        87.5,
        0.483,
        11.1,
        34,
        0.326,
        19.3,
        24.4,
        0.792,
        9.8,
        33.3,
        43.1,
        26.5,
        16.6,
        8.3,
        5.9,
        4,
        22.3,
        21,
        115,
        -1.2,
        13,
        18,
        17,
        19,
        17,
        12,
        18,
        7,
        21,
        13,
        28,
        7,
        9,
        14,
        19,
        13,
        17,
        10,
        28,
        4,
        6,
        3,
        28,
        14,
        10,
        20,
        10,
        'Minnesota Timberwolves'
    ],
    'New Orleans Pelicans': [
        1610612740, 'New Orleans Pelicans', 23,
        15, 8, 0.652,
        48.7, 43.3, 89.3,
        0.485, 11.5, 30.7,
        0.375, 19.2, 24.2,
        0.794, 11.3, 33.9,
        45.1, 27.1, 14.6,
        8.8, 4.5, 5.2,
        19.6, 20, 117.3,
        7, 13, 4,
        4, 4, 5,
        4, 13, 5,
        18, 27, 7,
        9, 11, 12,
        12, 9, 7,
        7, 14, 2,
        21, 19, 7,
        22, 5, 3,
        10, 'New Orleans Pelicans'
    ],
    'New York Knicks': [
        1610612752, 'New York Knicks', 24,
        11, 13, 0.458,
        48.6, 41.7, 91.8,
        0.454, 10.7, 34,
        0.313, 19.6, 24.8,
        0.793, 12.7, 34.1,
        46.8, 23.5, 14,
        7, 4.5, 5,
        21.8, 21.1, 113.6,
        -1.3, 4, 18,
        22, 21, 7,
        14, 5, 24,
        24, 12, 30,
        6, 8, 13,
        5, 8, 3,
        22, 7, 19,
        20, 17, 23,
        10, 14, 21,
        10, 'New York Knicks'
    ],
    'Oklahoma City Thunder': [
        1610612760, 'Oklahoma City Thunder', 23,
        10, 13, 0.435,
        49.1, 44, 94.7,
        0.464, 11.5, 34,
        0.338, 17.4, 22.2,
        0.784, 12.2, 32.4,
        44.6, 24.2, 14.1,
        8.2, 5.9, 5.8,
        21.9, 19.7, 116.8,
        -1, 13, 23,
        22, 24, 1,
        1, 1, 20,
        18, 11, 20,
        22, 23, 17,
        6, 20, 9,
        18, 8, 6,
        5, 26, 24,
        25, 6, 19,
        10, 'Oklahoma City Thunder'
    ],
    'Orlando Magic': [
        1610612753, 'Orlando Magic', 24, 5,
        19, 0.208, 48.2, 39.2,
        83.3, 0.471, 10.5, 31,
        0.34, 18.8, 24, 0.785,
        9.8, 32.3, 42.1, 21.2,
        16.6, 6.3, 5.2, 4.7,
        20.8, 20.2, 107.8, -6.6,
        4, 30, 29, 30,
        22, 23, 27, 14,
        26, 25, 19, 12,
        13, 16, 18, 22,
        26, 30, 27, 28,
        12, 14, 19, 20,
        29, 27, 10, 'Orlando Magic'
    ],
    'Philadelphia 76ers': [
        1610612755, 'Philadelphia 76ers', 23,
        12, 11, 0.522,
        48, 39, 82.8,
        0.471, 11.9, 32,
        0.372, 18.4, 22.7,
        0.811, 8.2, 31.7,
        40, 23.3, 14.2,
        8.4, 4.7, 5.2,
        19.5, 19, 108.3,
        1.8, 13, 15,
        10, 14, 27,
        28, 30, 13,
        14, 20, 9,
        16, 19, 6,
        26, 24, 29,
        24, 9, 3,
        19, 21, 6,
        27, 28, 9,
        10, 'Philadelphia 76ers'
    ],
    'Phoenix Suns': [
        1610612756, 'Phoenix Suns', 23, 16,
        7, 0.696, 48.2, 43.7,
        90.7, 0.481, 12.8, 33.3,
        0.386, 16.6, 20.5, 0.811,
        11.7, 31.6, 43.3, 27.6,
        13.5, 7.3, 5.6, 4.1,
        21.9, 20.3, 116.7, 8.3,
        13, 2, 3, 3,
        17, 2, 8, 8,
        8, 15, 3, 27,
        28, 5, 9, 26,
        14, 6, 5, 12,
        7, 5, 24, 18,
        7, 1, 10, 'Phoenix Suns'
    ],
    'Portland Trail Blazers': [
        1610612757,
        'Portland Trail Blazers',
        24,
        13,
        11,
        0.542,
        48.4,
        39.2,
        83.8,
        0.468,
        12.1,
        31.5,
        0.383,
        19.8,
        25.8,
        0.767,
        10.7,
        32.5,
        43.2,
        23.8,
        15.2,
        6.7,
        4.2,
        4.8,
        19.6,
        22.3,
        110.3,
        -0.7,
        4,
        9,
        10,
        10,
        12,
        23,
        25,
        18,
        12,
        23,
        4,
        4,
        3,
        23,
        15,
        18,
        16,
        21,
        21,
        24,
        25,
        15,
        8,
        4,
        22,
        17,
        10,
        'Portland Trail Blazers'
    ],
    'Sacramento Kings': [
        1610612758, 'Sacramento Kings', 22,
        13, 9, 0.591,
        48.2, 43.1, 87.5,
        0.493, 13.5, 37.4,
        0.362, 19.8, 24.9,
        0.795, 8, 34.2,
        42.2, 28.1, 15.1,
        7.2, 3.4, 4.5,
        20.9, 21.4, 119.6,
        4.1, 27, 9,
        5, 8, 15,
        6, 20, 4,
        6, 6, 12,
        5, 7, 11,
        27, 6, 24,
        2, 20, 15,
        30, 13, 20,
        8, 2, 6,
        10, 'Sacramento Kings'
    ],
    'San Antonio Spurs': [
        1610612759, 'San Antonio Spurs', 24,
        6, 18, 0.25,
        48.2, 41.8, 91.5,
        0.457, 11.6, 34.4,
        0.338, 14.3, 19.8,
        0.722, 12, 30.6,
        42.6, 27.8, 16.3,
        7.1, 4.2, 4.3,
        19.9, 18.7, 109.5,
        -11.8, 4, 27,
        28, 28, 22,
        13, 6, 23,
        17, 10, 22,
        30, 29, 28,
        7, 29, 21,
        4, 26, 16,
        23, 7, 10,
        29, 25, 30,
        10, 'San Antonio Spurs'
    ],
    'Toronto Raptors': [
        1610612761, 'Toronto Raptors', 23,
        12, 11, 0.522,
        48.2, 40.7, 90.4,
        0.45, 10.7, 32.3,
        0.329, 18.8, 24.3,
        0.776, 12.9, 30.8,
        43.7, 23.3, 13.3,
        10.2, 5.4, 5.3,
        20.6, 21, 110.9,
        1.4, 13, 15,
        10, 14, 17,
        21, 9, 26,
        25, 17, 26,
        13, 10, 20,
        3, 28, 12,
        25, 3, 1,
        8, 22, 16,
        12, 20, 12,
        10, 'Toronto Raptors'
    ],
    'Utah Jazz': [
        1610612762, 'Utah Jazz', 26, 14,
        12, 0.538, 48.4, 42.7,
        89.5, 0.477, 14.6, 39.1,
        0.374, 17.6, 22.6, 0.779,
        11.8, 32.3, 44.1, 27.1,
        16, 7.3, 4.9, 5.2,
        21.6, 21, 117.7, 2.1,
        1, 6, 17, 13,
        14, 8, 11, 9,
        3, 5, 8, 21,
        21, 19, 8, 23,
        11, 8, 25, 14,
        15, 20, 22, 13,
        4, 8, 10, 'Utah Jazz'
    ],
    'Washington Wizards': [
        1610612764, 'Washington Wizards', 24,
        11, 13, 0.458,
        48.4, 41.5, 88.1,
        0.471, 10.9, 32.2,
        0.338, 17.1, 22.2,
        0.769, 9.8, 34.9,
        44.7, 24.8, 13.3,
        6.5, 6.2, 4.4,
        20.2, 19.8, 111,
        -1.5, 4, 18,
        22, 21, 12,
        15, 15, 12,
        23, 18, 23,
        23, 22, 22,
        17, 3, 8,
        14, 4, 27,
        4, 8, 12,
        24, 18, 24,
        10, 'Washington Wizards'
    ]
}
nba.history = [
    {
        "gameId": "0022200352",
        "gameCode": "20221205/LACCHA",
        "gameStatus": 3,
        "gameStatusText": "Final",
        "period": 4,
        "gameClock": "",
        "gameTimeUTC": "2022-12-06T00:00:00Z",
        "gameEt": "2022-12-05T19:00:00Z",
        "regulationPeriods": 4,
        "ifNecessary": false,
        "seriesGameNumber": "",
        "seriesText": "",
        "homeTeam": {
            "teamId": 1610612766,
            "teamName": "Hornets",
            "teamCity": "Charlotte",
            "teamTricode": "CHA",
            "wins": 7,
            "losses": 17,
            "score": 117,
            "seed": null,
            "inBonus": null,
            "timeoutsRemaining": 0,
            "periods": [
                {
                    "period": 1,
                    "periodType": "REGULAR",
                    "score": 26
                },
                {
                    "period": 2,
                    "periodType": "REGULAR",
                    "score": 28
                },
                {
                    "period": 3,
                    "periodType": "REGULAR",
                    "score": 36
                },
                {
                    "period": 4,
                    "periodType": "REGULAR",
                    "score": 27
                }
            ]
        },
        "awayTeam": {
            "teamId": 1610612746,
            "teamName": "Clippers",
            "teamCity": "LA",
            "teamTricode": "LAC",
            "wins": 14,
            "losses": 11,
            "score": 119,
            "seed": null,
            "inBonus": null,
            "timeoutsRemaining": 1,
            "periods": [
                {
                    "period": 1,
                    "periodType": "REGULAR",
                    "score": 28
                },
                {
                    "period": 2,
                    "periodType": "REGULAR",
                    "score": 35
                },
                {
                    "period": 3,
                    "periodType": "REGULAR",
                    "score": 21
                },
                {
                    "period": 4,
                    "periodType": "REGULAR",
                    "score": 35
                }
            ]
        },
        "gameLeaders": {
            "homeLeaders": {
                "personId": 1626162,
                "name": "Kelly Oubre Jr.",
                "jerseyNum": "12",
                "position": "F-G",
                "teamTricode": "CHA",
                "playerSlug": null,
                "points": 28,
                "rebounds": 7,
                "assists": 2
            },
            "awayLeaders": {
                "personId": 202331,
                "name": "Paul George",
                "jerseyNum": "13",
                "position": "F",
                "teamTricode": "LAC",
                "playerSlug": null,
                "points": 19,
                "rebounds": 3,
                "assists": 7
            }
        },
        "pbOdds": {
            "team": null,
            "odds": 0.0,
            "suspended": 0
        }
    },
    {
        "gameId": "0022200353",
        "gameCode": "20221205/MILORL",
        "gameStatus": 3,
        "gameStatusText": "Final",
        "period": 4,
        "gameClock": "",
        "gameTimeUTC": "2022-12-06T00:00:00Z",
        "gameEt": "2022-12-05T19:00:00Z",
        "regulationPeriods": 4,
        "ifNecessary": false,
        "seriesGameNumber": "",
        "seriesText": "",
        "homeTeam": {
            "teamId": 1610612753,
            "teamName": "Magic",
            "teamCity": "Orlando",
            "teamTricode": "ORL",
            "wins": 5,
            "losses": 20,
            "score": 102,
            "seed": null,
            "inBonus": null,
            "timeoutsRemaining": 0,
            "periods": [
                {
                    "period": 1,
                    "periodType": "REGULAR",
                    "score": 21
                },
                {
                    "period": 2,
                    "periodType": "REGULAR",
                    "score": 24
                },
                {
                    "period": 3,
                    "periodType": "REGULAR",
                    "score": 27
                },
                {
                    "period": 4,
                    "periodType": "REGULAR",
                    "score": 30
                }
            ]
        },
        "awayTeam": {
            "teamId": 1610612749,
            "teamName": "Bucks",
            "teamCity": "Milwaukee",
            "teamTricode": "MIL",
            "wins": 17,
            "losses": 6,
            "score": 109,
            "seed": null,
            "inBonus": null,
            "timeoutsRemaining": 0,
            "periods": [
                {
                    "period": 1,
                    "periodType": "REGULAR",
                    "score": 30
                },
                {
                    "period": 2,
                    "periodType": "REGULAR",
                    "score": 26
                },
                {
                    "period": 3,
                    "periodType": "REGULAR",
                    "score": 32
                },
                {
                    "period": 4,
                    "periodType": "REGULAR",
                    "score": 21
                }
            ]
        },
        "gameLeaders": {
            "homeLeaders": {
                "personId": 1631094,
                "name": "Paolo Banchero",
                "jerseyNum": "5",
                "position": "F",
                "teamTricode": "ORL",
                "playerSlug": null,
                "points": 20,
                "rebounds": 12,
                "assists": 7
            },
            "awayLeaders": {
                "personId": 203507,
                "name": "Giannis Antetokounmpo",
                "jerseyNum": "34",
                "position": "F",
                "teamTricode": "MIL",
                "playerSlug": null,
                "points": 34,
                "rebounds": 13,
                "assists": 5
            }
        },
        "pbOdds": {
            "team": null,
            "odds": 0.0,
            "suspended": 0
        }
    },
    {
        "gameId": "0022200354",
        "gameCode": "20221205/OKCATL",
        "gameStatus": 3,
        "gameStatusText": "Final",
        "period": 4,
        "gameClock": "",
        "gameTimeUTC": "2022-12-06T00:30:00Z",
        "gameEt": "2022-12-05T19:30:00Z",
        "regulationPeriods": 4,
        "ifNecessary": false,
        "seriesGameNumber": "",
        "seriesText": "",
        "homeTeam": {
            "teamId": 1610612737,
            "teamName": "Hawks",
            "teamCity": "Atlanta",
            "teamTricode": "ATL",
            "wins": 13,
            "losses": 11,
            "score": 114,
            "seed": null,
            "inBonus": null,
            "timeoutsRemaining": 0,
            "periods": [
                {
                    "period": 1,
                    "periodType": "REGULAR",
                    "score": 29
                },
                {
                    "period": 2,
                    "periodType": "REGULAR",
                    "score": 30
                },
                {
                    "period": 3,
                    "periodType": "REGULAR",
                    "score": 29
                },
                {
                    "period": 4,
                    "periodType": "REGULAR",
                    "score": 26
                }
            ]
        },
        "awayTeam": {
            "teamId": 1610612760,
            "teamName": "Thunder",
            "teamCity": "Oklahoma City",
            "teamTricode": "OKC",
            "wins": 11,
            "losses": 13,
            "score": 121,
            "seed": null,
            "inBonus": null,
            "timeoutsRemaining": 0,
            "periods": [
                {
                    "period": 1,
                    "periodType": "REGULAR",
                    "score": 27
                },
                {
                    "period": 2,
                    "periodType": "REGULAR",
                    "score": 27
                },
                {
                    "period": 3,
                    "periodType": "REGULAR",
                    "score": 30
                },
                {
                    "period": 4,
                    "periodType": "REGULAR",
                    "score": 37
                }
            ]
        },
        "gameLeaders": {
            "homeLeaders": {
                "personId": 1629027,
                "name": "Trae Young",
                "jerseyNum": "11",
                "position": "G",
                "teamTricode": "ATL",
                "playerSlug": null,
                "points": 23,
                "rebounds": 3,
                "assists": 10
            },
            "awayLeaders": {
                "personId": 1628983,
                "name": "Shai Gilgeous-Alexander",
                "jerseyNum": "2",
                "position": "G",
                "teamTricode": "OKC",
                "playerSlug": null,
                "points": 35,
                "rebounds": 6,
                "assists": 5
            }
        },
        "pbOdds": {
            "team": null,
            "odds": 0.0,
            "suspended": 0
        }
    },
    {
        "gameId": "0022200355",
        "gameCode": "20221205/BOSTOR",
        "gameStatus": 3,
        "gameStatusText": "Final",
        "period": 4,
        "gameClock": "",
        "gameTimeUTC": "2022-12-06T00:30:00Z",
        "gameEt": "2022-12-05T19:30:00Z",
        "regulationPeriods": 4,
        "ifNecessary": false,
        "seriesGameNumber": "",
        "seriesText": "",
        "homeTeam": {
            "teamId": 1610612761,
            "teamName": "Raptors",
            "teamCity": "Toronto",
            "teamTricode": "TOR",
            "wins": 12,
            "losses": 12,
            "score": 110,
            "seed": null,
            "inBonus": null,
            "timeoutsRemaining": 0,
            "periods": [
                {
                    "period": 1,
                    "periodType": "REGULAR",
                    "score": 25
                },
                {
                    "period": 2,
                    "periodType": "REGULAR",
                    "score": 37
                },
                {
                    "period": 3,
                    "periodType": "REGULAR",
                    "score": 18
                },
                {
                    "period": 4,
                    "periodType": "REGULAR",
                    "score": 30
                }
            ]
        },
        "awayTeam": {
            "teamId": 1610612738,
            "teamName": "Celtics",
            "teamCity": "Boston",
            "teamTricode": "BOS",
            "wins": 20,
            "losses": 5,
            "score": 116,
            "seed": null,
            "inBonus": null,
            "timeoutsRemaining": 0,
            "periods": [
                {
                    "period": 1,
                    "periodType": "REGULAR",
                    "score": 27
                },
                {
                    "period": 2,
                    "periodType": "REGULAR",
                    "score": 29
                },
                {
                    "period": 3,
                    "periodType": "REGULAR",
                    "score": 35
                },
                {
                    "period": 4,
                    "periodType": "REGULAR",
                    "score": 25
                }
            ]
        },
        "gameLeaders": {
            "homeLeaders": {
                "personId": 1627783,
                "name": "Pascal Siakam",
                "jerseyNum": "43",
                "position": "F",
                "teamTricode": "TOR",
                "playerSlug": null,
                "points": 29,
                "rebounds": 8,
                "assists": 7
            },
            "awayLeaders": {
                "personId": 1628369,
                "name": "Jayson Tatum",
                "jerseyNum": "0",
                "position": "F-G",
                "teamTricode": "BOS",
                "playerSlug": null,
                "points": 31,
                "rebounds": 12,
                "assists": 3
            }
        },
        "pbOdds": {
            "team": null,
            "odds": 0.0,
            "suspended": 0
        }
    },
    {
        "gameId": "0022200356",
        "gameCode": "20221205/PHIHOU",
        "gameStatus": 3,
        "gameStatusText": "Final/OT2",
        "period": 6,
        "gameClock": "",
        "gameTimeUTC": "2022-12-06T01:00:00Z",
        "gameEt": "2022-12-05T20:00:00Z",
        "regulationPeriods": 4,
        "ifNecessary": false,
        "seriesGameNumber": "",
        "seriesText": "",
        "homeTeam": {
            "teamId": 1610612745,
            "teamName": "Rockets",
            "teamCity": "Houston",
            "teamTricode": "HOU",
            "wins": 7,
            "losses": 17,
            "score": 132,
            "seed": null,
            "inBonus": null,
            "timeoutsRemaining": 0,
            "periods": [
                {
                    "period": 1,
                    "periodType": "REGULAR",
                    "score": 27
                },
                {
                    "period": 2,
                    "periodType": "REGULAR",
                    "score": 29
                },
                {
                    "period": 3,
                    "periodType": "REGULAR",
                    "score": 34
                },
                {
                    "period": 4,
                    "periodType": "REGULAR",
                    "score": 18
                },
                {
                    "period": 5,
                    "periodType": "OVERTIME",
                    "score": 9
                },
                {
                    "period": 6,
                    "periodType": "OVERTIME",
                    "score": 15
                }
            ]
        },
        "awayTeam": {
            "teamId": 1610612755,
            "teamName": "76ers",
            "teamCity": "Philadelphia",
            "teamTricode": "PHI",
            "wins": 12,
            "losses": 12,
            "score": 123,
            "seed": null,
            "inBonus": null,
            "timeoutsRemaining": 1,
            "periods": [
                {
                    "period": 1,
                    "periodType": "REGULAR",
                    "score": 30
                },
                {
                    "period": 2,
                    "periodType": "REGULAR",
                    "score": 25
                },
                {
                    "period": 3,
                    "periodType": "REGULAR",
                    "score": 29
                },
                {
                    "period": 4,
                    "periodType": "REGULAR",
                    "score": 24
                },
                {
                    "period": 5,
                    "periodType": "OVERTIME",
                    "score": 9
                },
                {
                    "period": 6,
                    "periodType": "OVERTIME",
                    "score": 6
                }
            ]
        },
        "gameLeaders": {
            "homeLeaders": {
                "personId": 1630224,
                "name": "Jalen Green",
                "jerseyNum": "4",
                "position": "G",
                "teamTricode": "HOU",
                "playerSlug": null,
                "points": 27,
                "rebounds": 4,
                "assists": 7
            },
            "awayLeaders": {
                "personId": 203954,
                "name": "Joel Embiid",
                "jerseyNum": "21",
                "position": "C-F",
                "teamTricode": "PHI",
                "playerSlug": null,
                "points": 39,
                "rebounds": 7,
                "assists": 3
            }
        },
        "pbOdds": {
            "team": null,
            "odds": 0.0,
            "suspended": 0
        }
    },
    {
        "gameId": "0022200357",
        "gameCode": "20221205/MIAMEM",
        "gameStatus": 3,
        "gameStatusText": "Final",
        "period": 4,
        "gameClock": "",
        "gameTimeUTC": "2022-12-06T01:00:00Z",
        "gameEt": "2022-12-05T20:00:00Z",
        "regulationPeriods": 4,
        "ifNecessary": false,
        "seriesGameNumber": "",
        "seriesText": "",
        "homeTeam": {
            "teamId": 1610612763,
            "teamName": "Grizzlies",
            "teamCity": "Memphis",
            "teamTricode": "MEM",
            "wins": 15,
            "losses": 9,
            "score": 101,
            "seed": null,
            "inBonus": null,
            "timeoutsRemaining": 1,
            "periods": [
                {
                    "period": 1,
                    "periodType": "REGULAR",
                    "score": 27
                },
                {
                    "period": 2,
                    "periodType": "REGULAR",
                    "score": 31
                },
                {
                    "period": 3,
                    "periodType": "REGULAR",
                    "score": 24
                },
                {
                    "period": 4,
                    "periodType": "REGULAR",
                    "score": 19
                }
            ]
        },
        "awayTeam": {
            "teamId": 1610612748,
            "teamName": "Heat",
            "teamCity": "Miami",
            "teamTricode": "MIA",
            "wins": 11,
            "losses": 13,
            "score": 93,
            "seed": null,
            "inBonus": null,
            "timeoutsRemaining": 1,
            "periods": [
                {
                    "period": 1,
                    "periodType": "REGULAR",
                    "score": 32
                },
                {
                    "period": 2,
                    "periodType": "REGULAR",
                    "score": 19
                },
                {
                    "period": 3,
                    "periodType": "REGULAR",
                    "score": 26
                },
                {
                    "period": 4,
                    "periodType": "REGULAR",
                    "score": 16
                }
            ]
        },
        "gameLeaders": {
            "homeLeaders": {
                "personId": 1626145,
                "name": "Tyus Jones",
                "jerseyNum": "21",
                "position": "G",
                "teamTricode": "MEM",
                "playerSlug": null,
                "points": 28,
                "rebounds": 5,
                "assists": 10
            },
            "awayLeaders": {
                "personId": 1629639,
                "name": "Tyler Herro",
                "jerseyNum": "14",
                "position": "G",
                "teamTricode": "MIA",
                "playerSlug": null,
                "points": 23,
                "rebounds": 13,
                "assists": 5
            }
        },
        "pbOdds": {
            "team": null,
            "odds": 0.0,
            "suspended": 0
        }
    },
    {
        "gameId": "0022200358",
        "gameCode": "20221205/PHXDAL",
        "gameStatus": 3,
        "gameStatusText": "Final",
        "period": 4,
        "gameClock": "",
        "gameTimeUTC": "2022-12-06T01:30:00Z",
        "gameEt": "2022-12-05T20:30:00Z",
        "regulationPeriods": 4,
        "ifNecessary": false,
        "seriesGameNumber": "",
        "seriesText": "",
        "homeTeam": {
            "teamId": 1610612742,
            "teamName": "Mavericks",
            "teamCity": "Dallas",
            "teamTricode": "DAL",
            "wins": 12,
            "losses": 11,
            "score": 130,
            "seed": null,
            "inBonus": null,
            "timeoutsRemaining": 1,
            "periods": [
                {
                    "period": 1,
                    "periodType": "REGULAR",
                    "score": 33
                },
                {
                    "period": 2,
                    "periodType": "REGULAR",
                    "score": 34
                },
                {
                    "period": 3,
                    "periodType": "REGULAR",
                    "score": 29
                },
                {
                    "period": 4,
                    "periodType": "REGULAR",
                    "score": 34
                }
            ]
        },
        "awayTeam": {
            "teamId": 1610612756,
            "teamName": "Suns",
            "teamCity": "Phoenix",
            "teamTricode": "PHX",
            "wins": 16,
            "losses": 8,
            "score": 111,
            "seed": null,
            "inBonus": null,
            "timeoutsRemaining": 1,
            "periods": [
                {
                    "period": 1,
                    "periodType": "REGULAR",
                    "score": 15
                },
                {
                    "period": 2,
                    "periodType": "REGULAR",
                    "score": 26
                },
                {
                    "period": 3,
                    "periodType": "REGULAR",
                    "score": 34
                },
                {
                    "period": 4,
                    "periodType": "REGULAR",
                    "score": 36
                }
            ]
        },
        "gameLeaders": {
            "homeLeaders": {
                "personId": 1629029,
                "name": "Luka Doncic",
                "jerseyNum": "77",
                "position": "F-G",
                "teamTricode": "DAL",
                "playerSlug": null,
                "points": 33,
                "rebounds": 6,
                "assists": 8
            },
            "awayLeaders": {
                "personId": 1626166,
                "name": "Cameron Payne",
                "jerseyNum": "15",
                "position": "G",
                "teamTricode": "PHX",
                "playerSlug": null,
                "points": 14,
                "rebounds": 6,
                "assists": 10
            }
        },
        "pbOdds": {
            "team": null,
            "odds": 0.0,
            "suspended": 0
        }
    },
    {
        "gameId": "0022200359",
        "gameCode": "20221205/INDGSW",
        "gameStatus": 3,
        "gameStatusText": "Final",
        "period": 4,
        "gameClock": "",
        "gameTimeUTC": "2022-12-06T03:00:00Z",
        "gameEt": "2022-12-05T22:00:00Z",
        "regulationPeriods": 4,
        "ifNecessary": false,
        "seriesGameNumber": "",
        "seriesText": "",
        "homeTeam": {
            "teamId": 1610612744,
            "teamName": "Warriors",
            "teamCity": "Golden State",
            "teamTricode": "GSW",
            "wins": 13,
            "losses": 12,
            "score": 104,
            "seed": null,
            "inBonus": null,
            "timeoutsRemaining": 0,
            "periods": [
                {
                    "period": 1,
                    "periodType": "REGULAR",
                    "score": 21
                },
                {
                    "period": 2,
                    "periodType": "REGULAR",
                    "score": 29
                },
                {
                    "period": 3,
                    "periodType": "REGULAR",
                    "score": 31
                },
                {
                    "period": 4,
                    "periodType": "REGULAR",
                    "score": 23
                }
            ]
        },
        "awayTeam": {
            "teamId": 1610612754,
            "teamName": "Pacers",
            "teamCity": "Indiana",
            "teamTricode": "IND",
            "wins": 13,
            "losses": 11,
            "score": 112,
            "seed": null,
            "inBonus": null,
            "timeoutsRemaining": 1,
            "periods": [
                {
                    "period": 1,
                    "periodType": "REGULAR",
                    "score": 34
                },
                {
                    "period": 2,
                    "periodType": "REGULAR",
                    "score": 25
                },
                {
                    "period": 3,
                    "periodType": "REGULAR",
                    "score": 30
                },
                {
                    "period": 4,
                    "periodType": "REGULAR",
                    "score": 23
                }
            ]
        },
        "gameLeaders": {
            "homeLeaders": {
                "personId": 202691,
                "name": "Klay Thompson",
                "jerseyNum": "11",
                "position": "G",
                "teamTricode": "GSW",
                "playerSlug": null,
                "points": 28,
                "rebounds": 2,
                "assists": 4
            },
            "awayLeaders": {
                "personId": 1629614,
                "name": "Andrew Nembhard",
                "jerseyNum": "2",
                "position": "G-F",
                "teamTricode": "IND",
                "playerSlug": null,
                "points": 31,
                "rebounds": 8,
                "assists": 13
            }
        },
        "pbOdds": {
            "team": null,
            "odds": 0.0,
            "suspended": 0
        }
    }
]
export default nba