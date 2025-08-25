import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useRef } from 'react';
import type { TaskModel } from '../../models/taskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getnextCycleType } from '../../utils/getNextCycleType';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';

export function MainForm() {
  const { state, setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  //ciclos
  const nextCycle = getNextCycle(state.currentCycle);
  //tipo do ciclo
  const nextCycleType = getnextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();
    if (!taskName) {
      return;
    }
    //criar nova tarefa
    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleInterruptTask(){
        setState(prevState => {
      return {
        ...prevState,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        tasks: prevState.tasks.map(task => {
          if(prevState.activeTask && prevState.activeTask.id === task.id){
            return {...task, interruptDate:Date.now()};
          }
          return task;
        }),
      };
    });
  }

  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          labelText='task'
          id='meuid'
          type='text'
          placeholder='Digite algo'
          ref={taskNameInput}
          disabled= {!!state.activeTask}
        />
      </div>

      <div className='formRow'>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      {state.currentCycle > 0 && (
      <div className='formRow'>
        <Cycles />
      </div>
      )}
      <div className='formRow'>
        {!state.activeTask && (
          <DefaultButton aria-label='iniciar nova tarefa'
           title='iniciar nova tarefa' type='submit'
            icon={<PlayCircleIcon />}
            key='botao_submit'
            />
        )}
        {!!state.activeTask &&  (
          <DefaultButton aria-label='interromper tarefa atual' title='interromper tarefa atual' type='button' color='red' icon={<StopCircleIcon />}
          onClick={handleInterruptTask}
          key='botao_button'
          />
          

        )}

      </div>
    </form>
  );
}
