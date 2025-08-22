import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useRef} from 'react';
import type { TaskModel } from '../../models/taskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

export function MainForm() {
  const {setState} = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

   if(taskNameInput.current === null) return;

   const taskName = taskNameInput.current.value.trim();
    if(!taskName) {
      alert('digite o nome da tarefa')
      return
    }
    //criar nova tarefa
    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: 1,
      type: 'workTime'
    };

    const secondsRemaining = newTask.duration * 60

    setState(prevState => {
      return {
        ...prevState,
        config:{...prevState.config},
        activeTask: newTask,
        currentCycle: 1,
        secondsRemaining,
        formattedSecondsRemaining: '00:00',
        tasks: [
          ...prevState.tasks, newTask
        ],
      }
    })
   console.log(taskName);
  }

  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <h1>o formulario foi enviado </h1>
      <div className='formRow'>
        <DefaultInput
          labelText='task'
          id='meuid'
          type='text'
          placeholder='Digite algo'
          ref={taskNameInput}
        />
      </div>

      <div className='formRow'>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className='formRow'>
        <Cycles />
      </div>
      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
