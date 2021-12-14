const { Router } = require('express')
const api = require('../services/api')
const { DateTime } = require('luxon')

const rooms = Router()

rooms.post('/', async (req, res) => {
  await api.post('/rooms', req.body)
  return res.status(201).json({})
})

rooms.get('/', async (req, res) => {
  const response = await api.get('/rooms')
  return res.status(200).json(response.data)
})

rooms.get('/:_id', async (req, res) => {
  const response = await api.get(`/rooms/${req.params._id}`)

  const periods = [{
    name: 'Manhã',
    available: [{
      start: DateTime.local().set({ hour: 10, minute: 0 }).toFormat('HH:mm'),
      end: DateTime.local().set({ hour: 11, minute: 0 }).toFormat('HH:mm')
    }, {
      start: DateTime.local().set({ hour: 11, minute: 0 }).toFormat('HH:mm'),
      end: DateTime.local().set({ hour: 12, minute: 0 }).toFormat('HH:mm')
    }]
  }, {
    name: 'Tarde',
    available: [{
      start: DateTime.local().set({ hour: 13, minute: 0 }).toFormat('HH:mm'),
      end: DateTime.local().set({ hour: 14, minute: 0 }).toFormat('HH:mm')
    }, {
      start: DateTime.local().set({ hour: 14, minute: 0 }).toFormat('HH:mm'),
      end: DateTime.local().set({ hour: 15, minute: 0 }).toFormat('HH:mm')
    }]
  }, {
    name: 'Noite',
    available: [{
      start: DateTime.local().set({ hour: 20, minute: 0 }).toFormat('HH:mm'),
      end: DateTime.local().set({ hour: 21, minute: 0 }).toFormat('HH:mm')
    }]
  }]

  return res.status(200).json({
    ...response.data,
    schedule: [{
      date: DateTime.local().set({ day: 10 }).toISODate(),
      periods
    }, {
      date: DateTime.local().set({ day: 11 }).toISODate(),
      periods
    }, {
      date: DateTime.local().set({ day: 12 }).toISODate(),
      periods
    }]
  })
})

rooms.put('/:_id', async (req, res) => {
  await api.put(`/rooms/${req.params._id}`, req.body)
  return res.status(204).json({})
})

rooms.delete('/:_id', async (req, res) => {
  await api.delete(`/rooms/${req.params._id}`)
  return res.status(204).json({})
})

module.exports = rooms
