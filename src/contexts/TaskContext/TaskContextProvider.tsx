import { useEffect, useReducer } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';
import { taskReducer } from './taskReducer';
import { TimerWorkerManager } from '../../workers/TimerWOrkerManager';
import { TaskActionTypes } from './taskActions';

type TaskContextProviderPros = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderPros) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  const worker = TimerWorkerManager.getIntance();

  worker.onmessage(e => {
    const countDownSeconds = e.data;
    console.log(countDownSeconds);
    if (countDownSeconds <= 0) {
      dispatch({
        type: TaskActionTypes.COMPLETE_TASK,
      });
      worker.terminate();
    } else {
      dispatch({
        type: TaskActionTypes.COUNT_DOWN,
        payload: { secondsRemaining: countDownSeconds },
      });
    }
  });

  useEffect(() => {
    if (!state.activeTask) {
      console.log('worker terminado pq nao tem task');
      worker.terminate();
    }
    worker.postMessage(state);
  }, [worker, state]);
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
