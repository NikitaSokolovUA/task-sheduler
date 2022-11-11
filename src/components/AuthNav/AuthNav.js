import { NavLink } from 'react-router-dom';



const AuthNav = () => {  

    return <>
        <NavLink to={'/registration'}>Registration</NavLink>
        <NavLink to={'/log_in'}>Log in</NavLink>
    </>
}

export default AuthNav