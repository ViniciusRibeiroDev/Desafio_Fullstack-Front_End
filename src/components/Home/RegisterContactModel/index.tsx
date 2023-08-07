import { useForm } from 'react-hook-form';
import { IOpenAndCloseModelProps } from '../../../interfaces';
import { ContainerModal } from '../../../style/global';
import { SectionResgisterContactModel } from './style';
import { ISubmitCreateContact } from '../../../context/HomeContext/type';
import { useContext } from 'react';
import { HomeContext } from '../../../context/HomeContext';

const RegisterContactModel = ({ setModel }: IOpenAndCloseModelProps) => {
  const { submitCreateContact } = useContext(HomeContext);

  const { register, handleSubmit } = useForm<ISubmitCreateContact>();

  return (
    <ContainerModal>
      <SectionResgisterContactModel>
        <h3>Cadastrar Contatos</h3>
        <form onSubmit={handleSubmit(submitCreateContact)}>
          <div>
            <label htmlFor='name'>Nome Completo</label>
            <input type='text' id='name' {...register('nomeCompleto')} />
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' {...register('email')} />
          </div>
          <div>
            <label htmlFor='telefone'>telefone</label>
            <input type='tel' id='telefone' {...register('telefone')} />
          </div>
          <button type='submit'>Adicionar</button>
          <button type='button' onClick={() => setModel(false)}>
            Cancelar
          </button>
        </form>
      </SectionResgisterContactModel>
    </ContainerModal>
  );
};

export default RegisterContactModel;
