import { IContact, IOpenAndCloseModelProps } from '../../../interfaces';

export interface IEditContactProps extends IOpenAndCloseModelProps {
  contact: IContact;
}

export interface ISubmitContact {
  nomeCompleto?: string | null | undefined;
  email?: string | null | undefined;
  telefone?: string | null | undefined;
}
