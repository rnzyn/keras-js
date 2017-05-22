// TEST DATA
// Keyed by mocha test ID
// Python code for generating test data can be found in the matching jupyter notebook in folder `notebooks/`.

;(function() {
  var DATA = {
    'pooling.GlobalAveragePooling2D.0': {
      input: {
        data: [
          0.38825,
          0.616859,
          -0.903684,
          0.806884,
          -0.727288,
          -0.673966,
          -0.577175,
          -0.387585,
          -0.257311,
          -0.509074,
          -0.260107,
          -0.175546,
          -0.36369,
          0.000508,
          0.660501,
          0.597718,
          -0.516095,
          -0.635432,
          0.051806,
          0.827972,
          0.776157,
          -0.924706,
          0.475891,
          -0.245901,
          0.938555,
          -0.153749,
          -0.78604,
          -0.743216,
          0.623975,
          -0.88669,
          -0.405761,
          -0.047077,
          0.93782,
          0.817619,
          -0.698627,
          -0.779825,
          0.082966,
          -0.198865,
          -0.803914,
          -0.013523,
          0.656264,
          0.20553,
          -0.99514,
          -0.845919,
          -0.780934,
          -0.54633,
          -0.584082,
          -0.381479,
          0.07203,
          -0.932858,
          -0.388963,
          -0.640372,
          -0.762033,
          0.520289,
          -0.850815,
          0.83055,
          0.657538,
          -0.995219,
          0.924136,
          -0.09163,
          -0.83776,
          0.570101,
          0.811735,
          -0.248129,
          -0.669459,
          -0.622836,
          0.488153,
          0.819239,
          0.684766,
          -0.329173,
          0.541295,
          0.675745,
          0.552436,
          -0.314967,
          0.588244,
          -0.764561,
          -0.405427,
          0.165388,
          0.036045,
          -0.7066,
          0.987815,
          0.424845,
          -0.898345,
          -0.084084,
          0.424759,
          -0.463452,
          -0.464603,
          -0.889256,
          0.047486,
          0.593987,
          -0.041217,
          -0.674434,
          -0.437693,
          -0.698919,
          0.415884,
          0.503516,
          0.804258,
          0.474695,
          -0.147267,
          -0.807198,
          -0.922972,
          0.369532,
          -0.214226,
          0.34421,
          -0.267339,
          -0.858829,
          -0.005027,
          0.268902
        ],
        shape: [6, 6, 3]
      },
      expected: { data: [-0.187999, -0.083497, -0.011324], shape: [3] }
    },
    'pooling.GlobalAveragePooling2D.1': {
      input: {
        data: [
          0.277769,
          -0.324717,
          -0.828538,
          0.27327,
          -0.103567,
          0.352973,
          -0.424245,
          0.084882,
          -0.667369,
          -0.013292,
          -0.730917,
          0.020447,
          -0.56258,
          -0.930644,
          -0.372492,
          0.595927,
          0.519345,
          0.659999,
          -0.520708,
          -0.060843,
          0.140459,
          0.198302,
          0.525008,
          0.508564,
          0.513985,
          0.548433,
          0.271675,
          -0.565162,
          -0.896829,
          0.987411,
          0.60257,
          0.39488,
          0.475653,
          0.972433,
          0.770687,
          -0.124055,
          0.063721,
          -0.033112,
          0.644369,
          -0.013292,
          0.534668,
          -0.326544,
          0.600593,
          -0.767345,
          -0.525822,
          -0.635478,
          0.78529,
          0.647604,
          0.495353,
          -0.380054,
          -0.630392,
          0.527641,
          -0.343892,
          0.405197,
          -0.065455,
          -0.574106,
          -0.493058,
          0.61698,
          -0.069963,
          0.061398,
          0.283554,
          0.200134,
          0.271897,
          0.354207,
          -0.121057,
          -0.577198,
          -0.193319,
          -0.167341,
          0.497023,
          0.674803,
          0.365241,
          -0.254262,
          -0.267867,
          0.90223,
          -0.960562,
          0.833171,
          -0.360657,
          0.290601,
          0.737442,
          -0.656173,
          -0.311816,
          -0.544177,
          0.681235,
          0.530767,
          0.674875,
          -0.511685,
          -0.21598,
          -0.544874,
          -0.748065,
          0.353896,
          0.636164,
          -0.775521,
          0.5865,
          -0.297541,
          -0.861248,
          0.22867,
          -0.888671,
          -0.295104,
          -0.709528,
          -0.899564,
          -0.16393,
          0.021623,
          0.23474,
          0.825311,
          0.721459,
          -0.493389,
          -0.979736,
          0.698471
        ],
        shape: [3, 6, 6]
      },
      expected: { data: [0.071353, 0.051611, -0.070248], shape: [3] }
    },
    'pooling.GlobalAveragePooling2D.2': {
      input: {
        data: [
          -0.504559,
          0.757141,
          0.875796,
          -0.387981,
          -0.0693,
          -0.652691,
          -0.555212,
          -0.434044,
          0.235791,
          -0.605425,
          0.718481,
          -0.209725,
          0.39433,
          -0.062265,
          -0.773059,
          0.044988,
          0.788582,
          -0.418206,
          0.614434,
          -0.961147,
          0.540911,
          0.289499,
          0.209071,
          -0.023188,
          0.527788,
          -0.515541,
          0.942285,
          0.522851,
          -0.896798,
          -0.850198
        ],
        shape: [5, 3, 2]
      },
      expected: { data: [0.203236, -0.233729], shape: [2] }
    }
  }

  window.TEST_DATA = Object.assign({}, window.TEST_DATA, DATA)
})()
