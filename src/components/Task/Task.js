import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import { deletedTask, toggleCompleted } from "redux/actions";
import { useDispatch } from "react-redux";

export const Task = ({ task }) => {

  const dispatch = useDispatch()

  const handleCLick = () => dispatch(deletedTask(task.id))

  const handleToggle =() => dispatch(toggleCompleted(task.id))


  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        onChange={handleToggle}
        className={css.checkbox}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleCLick}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
