var gm = require('googlemaps');
var util = require('util');

var markers, styles;

markers = [
  { 'location': 'Tegnérgatan 28, Stockholm, Sweden' },
];

styles = [
  { 'feature': 'road', 'element': 'all', 'rules': 
    {
      'hue': '0x00ff00',
      'saturation': -100
    }
  }
];

module.exports.map = function () {
  var map = gm.staticMap(markers[0].location, 15, '640x200', false, false, 'roadmap', markers, styles);

  map = map + '&scale=2';

  return '<img src="' + map + '">';
};