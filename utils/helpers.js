exports.isNumber = (evt) => {
  evt = evt ? evt : window.event
  let charCode = evt.which ? evt.which : evt.keyCode
  if (
    charCode > 31 &&
    (charCode < 48 || charCode > 57) &&
    charCode !== 46 &&
    charCode !== 8
  ) {
    evt.preventDefault()
  } else {
    return true
  }
}

exports.formatAmountToDollar = (amount, decimal, currency) => {
  if (amount === undefined) return
  const value = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: decimal,
  })
  return value.format(amount)
}

exports.formatISODate = (date) => {
  if (!date) return ''
  let currentdate = new Date(date)

  let datetime =
    currentdate.getDate() +
    '-' +
    (currentdate.getMonth() + 1) +
    '-' +
    currentdate.getFullYear()

  return datetime
}

exports.formatISOTime = (date) => {
  return new Date(date).toLocaleString('en-US').split(',')[1]
}

exports.milliSecondsToDayHourMin = (timeRemaining) => {
  let dayInMilliseconds = 86400000
  let hourInMilliseconds = 3600000
  let day = Math.floor(timeRemaining / dayInMilliseconds)
  let hour = Math.floor(
    (timeRemaining - day * dayInMilliseconds) / hourInMilliseconds
  )
  let min = Math.round(
    (timeRemaining - day * dayInMilliseconds - hour * hourInMilliseconds) /
      60000
  )
  let seconds = Math.round(timeRemaining - min / 60)
  const pad = function (num) {
    return num < 10 ? '0' + num : num
  }
  if (min === 60) {
    hour++
    min = 0
  }
  if (hour === 24) {
    day++
    hour = 0
  }
  return `${day} : ${pad(hour)}  :  ${pad(min)}:  ${pad(seconds)}`
}

exports.calculateDay = (time) => {
  let timeToMilliseconds = new Date(time).getTime()
  let currentTime = Date.now()
  let ellapsedTime = currentTime - timeToMilliseconds
  const days = Math.floor(ellapsedTime / (1000 * 60 * 60 * 24))
  return days
}

exports.calculateHour = (time) => {
  let timeToMilliseconds = new Date(time).getTime()
  let currentTime = Date.now()
  let ellapsedTime = currentTime - timeToMilliseconds
  const hour = Math.floor(ellapsedTime / (1000 * 60 * 60)) % 24
  return hour
}

exports.calculateMin = (time) => {
  let timeToMilliseconds = new Date(time).getTime()
  let currentTime = Date.now()
  let ellapsedTime = currentTime - timeToMilliseconds
  const min = Math.floor(ellapsedTime / (1000 * 60)) % 60
  return min
}

exports.getTimeLeft = (countDownDate) => {
  const now = new Date().getTime()

  // Find the distance between now and the count down date
  const distance = countDownDate - now
  if (distance < 0) return 'EXPIRED'
  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)
  const pad = function (num) {
    return num < 10 ? '0' + num : num
  }
  return `${days} : ${pad(hours)}  :  ${pad(minutes)}:  ${pad(seconds)}`
}
exports.capitalizeEachWord = (string) => {
  if (!string) return
  let words = string.split(' ').map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  })
  return words.join(' ')
}

exports.abbreviate = (string) => {
  if (!string) return
  let letters = string.split(' ').map((word) => {
    return word.charAt(0).toUpperCase()
  })
  return letters.join(' . ')
}

exports.capitalize = (string) => {
  if (!string) return
  return string.charAt(0).toUpperCase() + string.slice(1)
}

exports.truncate = (text, length) => {
  if (text.length > length) {
    return text.slice(0, length) + '...'
  } else {
    return text
  }
}

exports.removeUnderscore = (value) => {
  if (!value) return ''
  if (!value.includes('_')) return value
  const splitValue = value.split('_')
  if (splitValue.length === 1) return splitValue
  return splitValue.join(' ')
}

exports.getRandomColour = function () {
  const activityColours = [
    '#3C7CBC',
    '#00BB5D',
    '#F7B633',
    '#070E14',
    '#DA0A0A',
  ]
  const number = Math.floor(Math.random() * activityColours.length)
  return activityColours[number]
}

exports.convertToLocale = function (price) {
  return price.toLocaleString()
}

exports.blankString = function (str) {
  return !str || /^\s*$/.test(str)
}

exports.industries = [
  'Electronics',
  'Mining',
  'Music',
  'Manufacturing',
  'Energy',
  'News Media',
  'Entertainment',
  'Hospitality',
  'Health care',
  'Food',
  'Pharmaceutical',
  'Education',
  'Construction',
  'Agriculture',
  'Telecommunication',
  'Technology',
  'Computer and Technology',
  'Transport',
  'Aerospace',
  'Retail',
  'Financial Services',
]

exports.stages = [
  'Pre seed',
  'Seed',
  'Series A',
  'Series B',
  'Series C',
  'Series D',
  'Public',
]

exports.companyTypes = ['Public', 'Private', 'Non Profit']

exports.phoneNoAccNoValidation = (val) => {
  let isNum = /^\d+$/.test(val)
  if (!val || !isNum) return false
  return val.length > 9 && val.length < 12 && true
}
