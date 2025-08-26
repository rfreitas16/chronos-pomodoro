import { createContext } from 'react';
import type { TaskStateModel } from '../../models/TaskStateModel';
import { initialTaskState } from './initialTaskState';
import { TaskActionModel } from './taskActions';

type TaskContextProps = {
  state: TaskStateModel;
  dispatch: React.Dispatch<TaskStateModel>;
};
const initialContextValue = {
  state: initialTaskState,
  dispatch: () => {},
};
export const TaskContext = createContext<TaskContextProps>(initialContextValue);
