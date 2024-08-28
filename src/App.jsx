import "./App.css";

import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { useSelector } from "react-redux";

function App() {
  const contacts = useSelector((state) => state.contacts.contacts.items);
  const nameFilter = useSelector((state) => state.contacts.filters.name);

  const usersContact = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];
  const [users] = useState(() => {
    const usersContactStorage = window.localStorage.getItem("contact");
    return usersContactStorage ? JSON.parse(usersContactStorage) : usersContact;
  });

  const [filterValue, setFilterValue] = useState(""); //стан фільтру

  useEffect(() => {
    window.localStorage.setItem("contact", JSON.stringify(users));
  }, [users]);

  const handleFilter = (event) => {
    const value = event.target.value;
    setFilterValue(value); // функція яка змінює стан фільтру
  };
  const filteredContacts = users.filter((user) =>
    user.name.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase())
  );

  const onDeleteContact = (contactId) => {
    setUsers(users.filter((user) => user.id !== contactId));
  };
  const onAddContact = (user) => {
    const finalUser = {
      ...user,
      id: nanoid(),
    };

    setUsers([finalUser, ...users]);
  };

  return (
    <div>
      <h1 className="title">Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox filterValue={filterValue} handleFilter={handleFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
}

export default App;
