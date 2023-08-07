import { SubmitHandler } from 'react-hook-form';
import { IAPIReturnUser } from '../../interfaces';

export interface ISubmitEditProfile {
  nomeCompleto?: string | null | undefined;
  email?: string | null | undefined;
  password?: string | null | undefined;
  telefone?: string | null | undefined;
}

export interface ITokenDecode {
  iat: number;
  sub: string;
}

export interface IHomeContext {
  submitEditProfile: SubmitHandler<ISubmitEditProfile>;
  deleteUser: () => Promise<void>;
  user: IAPIReturnUser;
  contacts: IAPIReturnUser[];
  submitCreateContact: SubmitHandler<ISubmitCreateContact>;
  setContacts: React.Dispatch<React.SetStateAction<IAPIReturnUser[]>>;
}

export interface IAPIReturnContactsUser {
  id: number;
  nomeCompleto: string;
  email: string;
  telefone: string;
  dateTime: string;
}

export type ISubmitCreateContact = Omit<
  IAPIReturnContactsUser,
  'id' | 'dateTime'
>;
