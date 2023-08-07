import { IAPIReturnUser, IOpenAndCloseModelProps } from '../../../interfaces';

export interface IOpenProfile extends IOpenAndCloseModelProps {
  user: IAPIReturnUser;
}
