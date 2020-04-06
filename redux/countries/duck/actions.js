import types from './types'

const add = country => ({
    type: types.ADD, country
})

const clear = () => ({
    type: types.CLEAR
})


const searched = searched => ({
    type: types.SEARCHED, searched
})

export default {
    add,
    clear,
    searched
}