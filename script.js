var nickname = 'Brykie';
var heightinch = '65';
var weightkg = '78';

var feet = Math.floor(heightinch / 12);
var inch = (heightinch % 12);
var heightfeet = (feet + "'" + inch)

var weightlbs = (weightkg * 2.2)


alert("Name: " + nickname + "\nHeight: " + heightfeet + "\nWeight: " + weightlbs.toFixed(1) + " lbs");
