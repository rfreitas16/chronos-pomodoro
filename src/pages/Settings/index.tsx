import { SaveIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { DefaultInput } from '../../components/DefaultInput';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';

export function Settings() {
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
        <form action='' className='form'>
          <div className='formRow'>
            <DefaultInput id='workTime' labelText='Foco' />
          </div>
          <div className='formRow'>
            <DefaultInput id='shortTime' labelText='Descanso curto' />
          </div>
          <div className='formRow'>
            <DefaultInput id='longBreakTime' labelText='Descanso longo' />
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
