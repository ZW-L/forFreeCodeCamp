var Person = function(firstAndLast) {
  var _firstName
  var _lastName
  function init(fullName) {
    var arr = fullName.split(' ')
    _firstName = arr[0]
    _lastName = arr[1]
  }
  init(firstAndLast)

  this.getFirstName = function() {
    return _firstName
  }
  this.getLastName = function() {
    return _lastName
  }
  this.getFullName = function() {
    return _firstName + ' ' + _lastName
  }
  this.setFirstName = function(firstName) {
    _firstName = firstName
  }
  this.setLastName = function(lastName) {
    _lastName = lastName
  }
  this.setFullName = function(fullName) {
    init(fullName)
  }
}

var bob = new Person('Bob Ross')
bob.getFullName()
