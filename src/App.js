import Card from "./components/Card";
import contacts from "./contacts";

function App() {
  function createCard(contact) {
    return (
      <Card
        key={contact.id}
        name={contact.name}
        img={contact.imgURL}
        tel={contact.phone}
        email={contact.email}
      />
    );
  }
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
