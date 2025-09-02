import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function Tips() {
  const { state } = useTaskContext();
  //ciclos
  const nextCycle = getNextCycle(state.currentCycle);
  //tipo do ciclo
  const nextCycleType = getNextCycleType(nextCycle);
  //mensagem entre os ciclos
  const tipsForWhenActiveTask = {
    workTime: (
      <span>
        Foque por <b>{state.config.workTime}min</b>
      </span>
    ),
    shortBreakTime: <span>Descanse por {state.config.shortBreakTime} </span>,
    longBreakTime: <span>Descanso longo</span>,
  };
  const tipsForNoActiveTask = {
    workTime: <span>Proximo ciclo é de {state.config.workTime}min</span>,
    shortBreakTime: (
      <span>Proximo ciclo é descanso {state.config.shortBreakTime} </span>
    ),
    longBreakTime: <span>Proximo descanso sera longo</span>,
  };
  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </>
  );
}
