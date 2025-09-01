import { SaveIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { DefaultInput } from '../../components/DefaultInput';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';
import { useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

export function Settings() {
  const { state } = useTaskContext();
  const workTimeInput = useRef<HTMLInputElement>(null);
  const shortBreakTimeInput = useRef<HTMLInputElement>(null);
  const longBreakTimeInput = useRef<HTMLInputElement>(null);

  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const workTime = workTimeInput.current?.value;
    const shortBreakTime = shortBreakTimeInput.current?.value;
    const longBreakTime = longBreakTimeInput.current?.value;
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>Configuracoes</Heading>
      </Container>
      <Container>
        <p style={{ textAlign: 'center' }}>
          modifique as configuracoes para tempos de foco
        </p>
      </Container>
      <Container>
        <form onSubmit={handleSaveSettings} action='' className='form'>
          <div className='formRow'>
            <DefaultInput
              id='workTime'
              labelText='Foco'
              ref={workTimeInput}
              defaultValue={state.config.workTime}
            />
          </div>
          <div className='formRow'>
            <DefaultInput
              id='shortTime'
              labelText='Descanso curto'
              ref={shortBreakTimeInput}
              defaultValue={state.config.shortBreakTime}
            />
          </div>
          <div className='formRow'>
            <DefaultInput
              id='longBreakTime'
              labelText='Descanso longo'
              ref={longBreakTimeInput}
               defaultValue={state.config.longBreakTime}
            />
          </div>
          <div className='formRow'>
            <DefaultButton
              icon={<SaveIcon></SaveIcon>}
              aria-label='Salvar configuracoes'
              title='Salvar configuracoes'
            ></DefaultButton>
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}
