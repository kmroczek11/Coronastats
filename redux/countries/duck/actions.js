import types from './types'

const add = country => ({
    type: types.ADD, country
})

const received = () => ({
    type: types.RECEIVED
})

export default {
    add,
    received
}