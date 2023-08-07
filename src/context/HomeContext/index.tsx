import { createContext, useEffect, useState } from 'react';
import { IAPIReturnUser, IProviderProps } from '../../interfaces';
import jwtDecode from 'jwt-decode';
import { SubmitHandler } from 'react-hook-form';
import {
  IHomeContext,
  ISubmitCreateContact,
  ISubmitEditProfile,
  ITokenDecode,
} from './type';
import api from '../../API';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const HomeContext = createContext<IHomeContext>({} as IHomeContext);

export const HomeProvider = ({ children }: IProviderProps) => {
  const token: string | null = localStorage.getItem('@TOKEN');
  const token_decode: ITokenDecode = jwtDecode(token!);

  const [user, setUser] = useState<IAPIReturnUser>({} as IAPIReturnUser);
  const [contacts, setContacts] = useState<IAPIReturnUser[]>(
    [] as IAPIReturnUser[]
  );

  const navigate = useNavigate();

  useEffect(() => {
    const submitGetUser = async () => {
      try {
        const response = await api.get<IAPIReturnUser>(
          `/users/${token_decode.sub}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUser(response.data);
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
    submitGetUser();
  }, [token, token_decode.sub]);

  const submitEditProfile: SubmitHandler<ISubmitEditProfile> = async (data) => {
    const newData: ISubmitEditProfile = {};

    if (data.nomeCompleto !== '') newData.nomeCompleto = data.nomeCompleto;
    if (data.email !== '') newData.email = data.email;
    if (data.password !== '') newData.password = data.password;
    if (data.telefone !== '') newData.telefone = data.telefone;

    try {
      const response = await api.patch<IAPIReturnUser>(
        `/users/${token_decode.sub}`,
        newData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setContacts({ ...contacts, ...response });

      toast.success('Dados do usuário editado', {
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

  const submitCreateContact: SubmitHandler<ISubmitCreateContact> = async (
    data
  ) => {
    try {
      await api.post<IAPIReturnUser>(`/contacts`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success('Contato criado', {
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

  useEffect(() => {
    const submitGetContactsUser = async () => {
      try {
        const response = await api.get<IAPIReturnUser[]>(`/contacts`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setContacts(response.data);
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
    submitGetContactsUser();
  }, [token]);

  const deleteUser = async (): Promise<void> => {
    try {
      await api.delete(`/users/${token_decode.sub}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success('Conta deleta', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      localStorage.removeItem('@TOKEN');
      navigate('/');
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
    <HomeContext.Provider
      value={{
        submitEditProfile,
        user,
        contacts,
        deleteUser,
        submitCreateContact,
        setContacts,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
