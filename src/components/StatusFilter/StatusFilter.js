import { Button } from "components/Button/Button";
import css from "./StatusFilter.module.css";
import { statusFilters } from "redux/constatns";
import { useSelector,useDispatch } from "react-redux";
import { selectStatusFilter } from "redux/selectors";
import { setStatusFilter } from "redux/filtersSlice";

export const StatusFilter = () => {
  const dispatch = useDispatch()

  const filter = useSelector(selectStatusFilter)

  const handleFilterChange = filter =>dispatch(setStatusFilter(filter))

  
  return (
    <div className={css.wrapper}>
      <Button onClick={() => handleFilterChange(statusFilters.all)}
        selected={filter === statusFilters.all}>All</Button>
      <Button onClick={() => handleFilterChange(statusFilters.active)}
        selected={filter === statusFilters.active}>Active</Button>
      <Button onClick={() => handleFilterChange(statusFilters.completed)}
        selected={filter === statusFilters.completed}>Completed</Button>
    </div>
  );
};
