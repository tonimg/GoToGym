const rp = require('request-promise')
const cheerio = require('cheerio')

require('dotenv').load()

const db = require('../config/db')
const Gym = require('../models/Gym')

const URL = 'https://www.gympass.com/es/gimnasios'
let datas = []

// const DB_URI = process.env.DB_URI
// db.open(DB_URI)
// console.log(` Connecting to ${DB_URI}... `)

rp(URL)
  .then(bodyHtml => {
    const $ = cheerio.load(bodyHtml)

    const $gyms = $('.rec_list_s.rec_list_s_container.col-xs-12.col-md-6')
    $gyms.each((index, item) => {
      const elem = $(item)

      const data = {}

      data.name = elem.find('h3').text()

      data.description = elem.find('p').text()

      data.latitude = elem.find('meta[itemprop = "latitude"]').attr('content')

      data.longitud = elem.find('meta[itemprop = "longitude"]').attr('content')

      data.postalCode = elem.find('meta[itemprop = "postalCode"]').attr('content')

      data.street = elem.find('meta[itemprop = "address"]').attr('content')

      data.image = elem.find('.rec_list_image').attr('src')

      // const descriptionNoise = elem.find('p').text()
      // data.description = descriptionNoise.replace(/[\s]{2,}|\\n/g, '')

      console.log(data)
      // datas.push(data)
    })
  })

// esto para ejecutarlo y generar fichero --> node server/parser/get_data > data.txt

// data.replace(/[\s]{2,}|\\n/g, '') // Este replace me quita los espacios en blanco dos o más "/[\s]{2,}" o "<|>" que tenga \n con esta otra expresión "\\n/g" y le digo que lo sustituya por un espacio en blanco.
