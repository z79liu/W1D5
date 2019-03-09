var test = [79927398710, 79927398711, 79927398712, 79927398713, 79927398714, 79927398715, 79927398716, 79927398717, 79927398718, 79927398719]

function Checkluhn(number) {
  var total = 0
  num = number.toString().split('') ;
  console.log(num)
  final = [] ;
  initialNum = num.length - 2
  for (i = initialNum; i >= 0 ; i -= 2){
    final[i] = num[i] * 2
    if (final[i] > 9){
      final[i] = final[i] - 9
    }
    if (i > 0) {
      final[i - 1] = num[i - 1] * 1
    }
  }
  console.log(final)
  for (i = 0 ; i < final.length ; i++){
    total += final[i]
  }
  checkDigit = total* 9 % 10
  console.log(checkDigit)
  if (checkDigit != num[num.length -1]){
    return false
  } else {
    return true
  }
}

console.log(Checkluhn(79927398713))

module.exports = Checkluhn ;