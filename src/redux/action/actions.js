import * as  actions from './actionTypes'



export function addContact(description) {
    return {
        type: actions.ADD_CONTACT,
        payload: {
            name: description.name,
            email:description.email

        }
    }
}

export function removeContact(id) {
    return {
        type: actions.REMOVE_CONTACT,
        payload: {
            id: id
        }
    }
}

