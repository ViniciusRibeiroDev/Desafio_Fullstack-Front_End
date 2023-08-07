import { SubmitHandler, useForm } from 'react-hook-form';
import { ContainerModal } from '../../../style/global';
import { EditContactEditSectioStyle } from './style';
import { IEditContactProps, ISubmitContact } from './type';
// import { IContact } from '../../../interfaces';
import api from '../../../API';
import { yupResolver } from '@hookform/resolvers/yup';
import { editContactSchema } from './schema';
import { toast } from 'react-toastify';

const EditContactModel = ({ setModel, contact }: IEditContactProps) => {
  const token: string | null = localStorage.getItem('@TOKEN');

  const { register, handleSubmit } = useForm<ISubmitContact>({
    resolver: yupResolver(editContactSchema),
  });

  const submitEditContact: SubmitHandler<ISubmitContact> = async (data) => {
    const newData: ISubmitContact = {};

    if (data.nomeCompleto !== '') newData.nomeCompleto = data.nomeCompleto;
    if (data.email !== '') newData.email = data.email;
    if (data.telefone !== '') newData.telefone = data.telefone;

    try {
      await api.patch(`/contacts/${contact.id}`, newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success(`Contato editado`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } catch (error) {
      toast.error(`${error.response.data.message}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };

  const deleteContact = async () => {
    try {
      await api.delete(`/contacts/${contact.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success(`${'contato deletado com sucesso'}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } catch (error) {
      toast.error(`${error.response.data.message}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };

  return (
    <ContainerModal>
      <EditContactEditSectioStyle>
        <form onSubmit={handleSubmit(submitEditContact)}>
          <h3>Editar: {contact.nomeCompleto}</h3>
          <div>
            <label htmlFor='name'>Nome Completo</label>
            <input type='text' id='name' {...register('nomeCompleto')} />
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' {...register('email')} />
          </div>
          <div>
            <label htmlFor='telafone'>telafone</label>
            <input type='tel' id='telafone' {...register('telefone')} />
          </div>
          <button type='submit'>Atualizar</button>
          <button type='button' onClick={() => setModel(false)}>
            Cancelar
          </button>
          <button onClick={deleteContact}>Deletar contato</button>
        </form>
      </EditContactEditSectioStyle>
    </ContainerModal>
  );
};

export default EditContactModel;
