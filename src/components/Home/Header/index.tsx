import { HiOutlineUserCircle } from 'react-icons/hi';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { HeaderStyle, NavStyle } from './style';
import EditProfileModel from '../EditProfileModel';
import { useContext, useState } from 'react';
import OpenProfileModel from '../OpenProfileModel';
import { HomeContext } from '../../../context/HomeContext';
import RegisterContactModel from '../RegisterContactModel';
import { useNavigate } from 'react-router-dom';
import DeleteAccont from '../DeletarAccount';

const HearderComponents = () => {
  const { user } = useContext(HomeContext);

  const [editProfileModel, setEditProfileModel] = useState<boolean>(false);
  const [profileModel, setProfileModel] = useState<boolean>(false);
  const [createContactModel, setCreateContactModel] = useState<boolean>(false);
  const [deleteAcountModel, setDeleteAcountModel] = useState<boolean>(false);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('@TOKEN');
    navigate('/');
  };

  return (
    <HeaderStyle>
      <HiOutlineUserCircle onClick={() => setProfileModel(true)} />
      <NavStyle>
        <ul>
          <li onClick={() => setEditProfileModel(true)}>Editar Perfil</li>
          <li onClick={() => setCreateContactModel(true)}>
            Cadastrar Contatos
          </li>
          <li onClick={() => setDeleteAcountModel(true)}>Deletar Conta</li>
        </ul>
      </NavStyle>
      <RiLogoutBoxLine onClick={logout} />
      {editProfileModel ? (
        <EditProfileModel setModel={setEditProfileModel} />
      ) : null}
      {profileModel ? (
        <OpenProfileModel setModel={setProfileModel} user={user} />
      ) : null}
      {createContactModel ? (
        <RegisterContactModel setModel={setCreateContactModel} />
      ) : null}
      {deleteAcountModel ? (
        <DeleteAccont setModel={setDeleteAcountModel} />
      ) : null}
    </HeaderStyle>
  );
};

export default HearderComponents;
