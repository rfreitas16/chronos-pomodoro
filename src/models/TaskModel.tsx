import type { TaskStateModel } from './TaskStateModel';

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completeDate: number | null; //quando a task chegar ao fim
  interruptDate: number | null; // quando a task for interrompida
  // type: 'workTime' | 'shortBreakTime ' | 'longBreakTime';
  type: keyof TaskStateModel['config'];
};
