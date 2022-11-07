import { Layout } from 'components/Layout/Layout';
import { AppBar } from 'components/AppBar/AppBar';
import { TaskForm } from 'components/TaskForm/TaskForm';
import { TaskList } from 'components/TaskList/TaskList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTasks } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();

    dispatch(fetchTasks(controller));

    return () => controller.abort();
  }, [dispatch]);

  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
};
