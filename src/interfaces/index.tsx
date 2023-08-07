export interface IAPIReturnToken {
  token: string;
}

export interface IAPIReturnUser {
  id: number;
  nomeCompleto: string;
  email: string;
  telefone: string;
  dateTime: string;
}

export interface IProviderProps {
  children: React.ReactNode;
}

export interface IOpenAndCloseModelProps {
  setModel: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IContact {
  id: number;
  nomeCompleto: string;
  email: string;
  telefone: string;
  dateTime: string;
}
