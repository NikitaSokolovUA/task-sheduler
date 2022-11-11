import { selectUser } from 'redux/auth/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';

const UserMenu = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    
    return <>
        <p>Hello, {user.name}</p>
        <button type='button' onClick={()=> dispatch(logOut())}>Log Out</button>
    </>

    
}

export default UserMenu