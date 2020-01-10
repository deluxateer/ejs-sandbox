const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  const currentDay = (new Date()).getDay()
  let day = ''

  if (currentDay === 6 || currentDay === 0) {
    day = 'Weekend'
  } else {
    day = 'Weekday'
  }

  res.render('list', { kindOfDay: day })
})

const port = 3000

app.listen(port, () => { console.log(`Server running on port ${port}`) })