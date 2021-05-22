import './styles.css';
import UserInput from './UserInput';
import TableData from './TableData';
import { useSelector } from 'react-redux';



export default function Home(props) {

    const contactList = useSelector(state => state.contacts);



    return (
        <div className='container'>
            <div className='userinfo-wrapper'>
                <h3>Contacts</h3>
                <UserInput></UserInput>
                <table id='users'>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Delete?</th>
                    </tr>
                    <tbody>
                        {
                            contactList.map((item) =>
                                <TableData
                                    id={item.id}
                                    name={item.name}
                                    email={item.email}

                                ></TableData>
                            )
                        }

                    </tbody>

                </table>

            </div>
        </div>

    )

}
