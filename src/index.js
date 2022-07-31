module.exports = function reverse (n) {
	n = Math.abs(n)
	n=String(n).split('')
	let r = Number(n.reverse().join(''))
	return r
}
