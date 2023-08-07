import { useContext } from 'react';
import { HomeContext } from '../../../context/HomeContext';
import { LiContactStyle, UlContactStyle } from './style';
import { ICardsContactProps } from './type';
import { IContact } from '../../../interfaces';

const CardsContact = ({ setContact, setModel }: ICardsContactProps) => {
  const { contacts } = useContext(HomeContext);

  const clickCard = (data: IContact) => {
    setModel(true);
    setContact(data);
  };

  return (
    <UlContactStyle>
      {contacts.map((contact) => {
        return (
          <LiContactStyle key={contact.id} onClick={() => clickCard(contact)}>
            <h3>{contact.nomeCompleto}</h3>
            <p>{contact.email}</p>
          </LiContactStyle>
        );
      })}
    </UlContactStyle>
  );
};

export default CardsContact;
