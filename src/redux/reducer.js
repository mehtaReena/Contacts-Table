import * as  actions from './action/actionTypes'

const initialState = {
    contacts :[

    ],

}


  let lastId=0;

 export default function reducer(state =initialState, action){
    switch(action.type){
    case actions.ADD_CONTACT:
        console.log("ADD...")
        return {
            contacts: [...state.contacts,
            {id:++lastId ,name :action.payload.name,
            email:action.payload.email
            }
           ]
          }



    case actions.REMOVE_CONTACT:
        console.log("REMOVE..." ,action.payload.id , state.contacts)
        return{
            contacts: state.contacts.filter(user=>user.id!==action.payload.id)
        }

    default:
       return{...state}

    }

}