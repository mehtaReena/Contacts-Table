import { useDispatch } from "react-redux";
import { removeContact } from "./redux/action/actions";



function TableData(props) {

    let dispatch=useDispatch()

    function clickHandle(){
     dispatch(removeContact(props.id));
    }



    return (
        <tr key={props.id}>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td><div className='delete'>
            <button className='removebtn' onClick={clickHandle} > 🗑 Remove user</button>
             </div></td>
        </tr>
    );
}


export default TableData;