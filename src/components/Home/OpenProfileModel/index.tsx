import { ContainerModal } from '../../../style/global';
import { SectionProfileModelStyle } from './style';
import { IOpenProfile } from './type';

const OpenProfileModel = ({ setModel, user }: IOpenProfile) => {
  return (
    <ContainerModal>
      <SectionProfileModelStyle>
        <h3>{user.nomeCompleto}</h3>
        <p>email: {user.email}</p>
        <p>telefone: {user.telefone}</p>
        <button type='button' onClick={() => setModel(false)}>
          Sair
        </button>
      </SectionProfileModelStyle>
    </ContainerModal>
  );
};

export default OpenProfileModel;
