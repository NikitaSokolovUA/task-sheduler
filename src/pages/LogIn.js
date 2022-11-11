import { Field, Formik, Form, ErrorMessage } from "formik"
import * as yup from 'yup';
import { Layout } from "components/Layout/Layout"
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";
import { useAuth } from "hooks/useAuth";
import { Navigate } from "react-router-dom";


const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string().required().min(8, 'Min 8 symbols')
})

const LogIn = () => {
    const {isLoggedIn} =useAuth()
    const dispatch = useDispatch()
    const initialValues = {
        email: '',
        password: ''
    }
    const handleSubmit = (initialValues, { resetForm }) => {
        dispatch(logIn(initialValues))
        resetForm()        
    }

    return <Layout>
        {isLoggedIn && <Navigate to="/tasks" replace={true}/>}
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}>
            <Form>
                <p>Email</p>
                <Field type='email' name='email' />
                <ErrorMessage name="email"/>
                <p>Password</p>
                <Field type='text' name='password' />
                <ErrorMessage name="password" />
                <button type='submit'>Log In</button>
            </Form>
        </Formik>
    </Layout>
}

export default LogIn