import { useRef } from 'react';
import { useDispatch} from 'react-redux';
import { addContact } from './redux/action/actions'

function UserInput (props)  {

    let dispatch=useDispatch();
    let inputRef=useRef();
    let emailRef=useRef();

    function clickHandle(){
        let obj={
            name:inputRef.current.value,
            email:emailRef.current.value
        }
     dispatch(addContact(obj))
     inputRef.current.value='';
     emailRef.current.value='';

    }

        return (
            <div className='user-inputs'>
             <input type="text" id="name" ref={inputRef} name="name" required placeholder='name'></input>
             <input type="email" id="email"pattern=".+@globex.com"  ref={emailRef} placeholder='abc@gmail.com' size="30" required></input>
             <button className='addbtn' onClick={clickHandle}>New Contact</button>


            </div>
        );
    }


export default UserInput;