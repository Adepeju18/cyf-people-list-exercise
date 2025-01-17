/*
  We are going to finish the code below
  so that we can add new people to our
  list.

  1. Remove the people prop and
  use useState instead
  with an array of names.

  2. Use useState to store the 
  value of the input when it changes
  (this will be the new person's name).

  3. When the button is clicked, the
  new person's name should be added to
  array of names in state.

  4. Stretch goal: Add a another button
  below that removes the last person from the
  list when it is clicked.

  5. Stretch goal 2: Add an input next to
  the remove name button and change how it
  works so that it removes the person with
  the name matching the input. (Hint: you
  can use the .filter method for this).
*/

import React, { useState } from "react";

const PeopleList = () => {
  const [people, setPeople] = useState(["Dave", "Alice", "Bob"]);
  const [newName, setNewName] = useState("");
  const [filter, setFilter] = useState("");

  function addNewPerson() {
    const newPeople = [...people, newName];
    setPeople(newPeople);
  }
  function removePerson(index){
    const person = [...people, newName];
    person.splice(index, 3)
    setPeople(person);
  }

  return (
    <div>
      <ul className="PeopleList">
        {people.map((person, index) => (
          <li key={index}>{person}</li>
        ))}
      </ul>
      <div>
        <h3>Add a person</h3>
        <label>
          Name:{" "}
          <input
            type="text"
            onChange={(event) => setNewName(event.target.value)}
          />
          <input type="text" 
          value={filter}
          onChange={(event) =>setFilter(event.target.value)}/>
        </label>
        <button onClick={addNewPerson}>Add person</button>
         <button onClick={removePerson}>Remove person</button>
      </div>
    </div>
  );
};

export default PeopleList;
