import type { TaskModel } from '../models/taskModel';

export function getnextCycleType(currentCycle: number): TaskModel['type'] {
  if (currentCycle === 8) return 'longBreakTime';
  if (currentCycle % 2 === 0) return 'shortBreakTime';
  return 'workTime';
}
