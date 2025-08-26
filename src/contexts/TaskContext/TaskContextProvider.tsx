import { useEffect, useReducer } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';
import { taskReducer } from './taskReducer';

type TaskContextProviderPros = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderPros) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
