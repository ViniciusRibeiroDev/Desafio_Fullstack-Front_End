import { IContact, IOpenAndCloseModelProps } from '../../../interfaces';

export interface ICardsContactProps extends IOpenAndCloseModelProps {
  setContact: React.Dispatch<React.SetStateAction<IContact>>;
}
