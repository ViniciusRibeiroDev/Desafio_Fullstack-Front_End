import { useContext } from 'react';
import { IOpenAndCloseModelProps } from '../../../interfaces';
import { ContainerModal } from '../../../style/global';
import { DeleteAccontSectionStyle } from './style';
import { HomeContext } from '../../../context/HomeContext';

const DeleteAccont = ({ setModel }: IOpenAndCloseModelProps) => {
  const { deleteUser } = useContext(HomeContext);

  return (
    <ContainerModal>
      <DeleteAccontSectionStyle>
        <h2>Tem certeza que deseja deletar sua conta?</h2>
        <button onClick={deleteUser}>Sim</button>
        <button onClick={() => setModel(false)}>Não</button>
      </DeleteAccontSectionStyle>
    </ContainerModal>
  );
};

export default DeleteAccont;
