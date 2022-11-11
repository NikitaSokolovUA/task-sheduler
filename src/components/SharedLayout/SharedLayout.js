import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css'

const SharedLayout = () => {
    const { isLoggedIn } = useAuth()
    
    return <>
        <header className={css.header__container}>
            <nav className={css.header__nav}>
                <NavLink to={'/home'}>Home</NavLink>
                {isLoggedIn && <NavLink to={'/tasks'}>Tasks</NavLink>}
                {isLoggedIn ? <UserMenu /> : <AuthNav/>}
            </nav>
        </header>
        <Outlet />
    </>
}

export default SharedLayout