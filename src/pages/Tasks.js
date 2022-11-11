import { Layout } from 'components/Layout/Layout';
import { AppBar } from 'components/AppBar/AppBar';
import { TaskForm } from 'components/TaskForm/TaskForm';
import { TaskList } from 'components/TaskList/TaskList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTasks } from 'redux/operations';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

const Tasks = () => {
  const dispatch = useDispatch();
  const {isLoggedIn} =useAuth()

  useEffect(() => {
    const controller = new AbortController();

    dispatch(fetchTasks(controller));

    return () => controller.abort();
  }, [dispatch]);
    
  return <Layout>
       {!isLoggedIn && (
      <Navigate to="/" replace={true}/>
        )}
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
}

export default Tasks