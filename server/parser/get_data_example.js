const rp = require('request-promise')
const cheerio = require('cheerio')

require('dotenv').load()

const db = require('../config/db')
const Pizza = require('../models/Pizza')

const URL = 'https://www.dominospizza.es/carta-de-pizzas'
let data = []

const DB_URI = process.env.DB_URI
db.open(DB_URI)
console.log(`Connecting to ${DB_URI}...`)

rp(URL)
  .then(bodyHtml => {
    const $ = cheerio.load(bodyHtml)

    const $pizzas = $('#CartaPizzas ul li')

    $pizzas.each((index, item) => {
      const name = $(item).attr('data-name')
      const image = $(item).find('img').attr('src')
      const description = $(item).find('.pizza-detail > span').text()
      data.push({ name, description, image })
    })

    data = data.filter(pizza => pizza.name !== 'Elige por mitades')

    Pizza.create(data)
      .then(() => console.log('pizzas inserted properly '))
      .catch(() => console.log('there was an error inserting pizzas'))
  })
