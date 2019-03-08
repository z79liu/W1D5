function sortNum(array) {
  array.sort(function(a,b){
    return a - b
  })
  return array
}

// console.log(sortNum([3,2,1]))

var startlist =  []

module.exports = {
  addlist: function(num){
    startlist.push(num)
    return startlist
  } ,
  sortedlist: function() {
    return sortNum(startlist)
  } ,
}