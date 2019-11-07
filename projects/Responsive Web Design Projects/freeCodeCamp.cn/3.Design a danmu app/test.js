

function isTrue(val) {
	console.log(val);
	return val;
}
function bouncer(arr) {
	return arr.filter(function(val) {
		return val;
	});
}
console.log(bouncer([9, '', false, null, NaN, undefined, 2, 1]));
