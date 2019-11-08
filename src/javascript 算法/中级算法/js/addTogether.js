function addTogether() {
	var args = Array.prototype.slice.call(arguments)
  if(args.length === 2 && (typeof args[0] !== 'number' || typeof args[1] !== 'number')) {
    return undefined
  }

	if(args.length === 1) {
		return (typeof args[0] !== 'number') ? undefined : function(num) {
			return (typeof num === 'number') ? args[0] + num : undefined
    }
  }

  return args[0] + args[1]
}

addTogether(2, 3)