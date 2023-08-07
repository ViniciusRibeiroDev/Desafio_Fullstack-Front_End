import { useContext } from 'react';
import { HomeContext } from '../../../context/HomeContext';
import { useForm } from 'react-hook-form';
import { ISubmitEditProfile } from '../../../context/HomeContext/type';
import { editProfileSchema } from './schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { ContainerModal } from '../../../style/global';
import { createPortal } from 'react-dom';
import { SectionEditProfileModelStyle } from './style';
import { IOpenAndCloseModelProps } from '../../../interfaces';

const EditProfileModel = ({ setModel }: IOpenAndCloseModelProps) => {
  const { submitEditProfile } = useContext(HomeContext);

  const { register, handleSubmit } = useForm<ISubmitEditProfile>({
    resolver: yupResolver(editProfileSchema),
  });

  return createPortal(
    <ContainerModal>
      <SectionEditProfileModelStyle>
        <h3>Editar Perfil</h3>
        <form onSubmit={handleSubmit(submitEditProfile)}>
          <div>
            <label htmlFor='name'>Nome Completo</label>
            <input type='text' id='name' {...register('nomeCompleto')} />
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' {...register('email')} />
          </div>
          <div>
            <label htmlFor='password'>Senha</label>
            <input type='password' id='password' {...register('password')} />
          </div>
          <div>
            <label htmlFor='telefone'>telefone</label>
            <input type='tel' id='telefone' {...register('telefone')} />
          </div>
          <button type='submit'>Atualizar</button>
          <button type='button' onClick={() => setModel(false)}>
            Cancelar
          </button>
        </form>
      </SectionEditProfileModelStyle>
    </ContainerModal>,
    document.body
  );
};

export default EditProfileModel;
