import types from './types'

const add = country => ({
    type: types.ADD, country
})

const clear = () => ({
    type: types.CLEAR
})


const received = () => ({
    type: types.RECEIVED
})

export default {
    add,
    clear,
    received
}