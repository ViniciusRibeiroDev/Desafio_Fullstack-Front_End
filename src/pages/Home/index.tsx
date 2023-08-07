import { useState } from 'react';
import CardsContact from '../../components/Home/CardsContact';
import HearderComponents from '../../components/Home/Header';
import EditContactModel from '../../components/Home/EditContactModel';
import { IContact } from '../../interfaces';

const HomePage = () => {
  const [editContact, setEditContact] = useState<boolean>(false);
  const [contact, setContact] = useState<IContact>({} as IContact);

  return (
    <>
      <HearderComponents />
      <h2>Contatos</h2>
      <CardsContact setContact={setContact} setModel={setEditContact} />
      {editContact ? (
        <EditContactModel contact={contact} setModel={setEditContact} />
      ) : null}
    </>
  );
};

export default HomePage;
