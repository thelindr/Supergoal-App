export default number => {
  if (number % 1 !== 0) {
    return number.toFixed(2).toString().replace(".", ",")
  } else {
    return number.toString()
  }
}
