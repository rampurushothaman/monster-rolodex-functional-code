import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import "./App.css";
import React, { useEffect, useState } from "react";

const App = () => {
  console.log('render')
  const [searchField, setsearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filtredMonster, setFiltredMonster] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((user) => setMonsters(user));
  }, []);

  const onSearchChange = (event) => {
    const searchFieldstring = event.target.value.toLocaleLowerCase();
    setsearchField(searchFieldstring);
  };

  useEffect(() => {
    const newFiltredMonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFiltredMonster(newFiltredMonster);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
        className="monsters-search-box"
      />
      <CardList monsters={filtredMonster} />
    </div>
  );
};

export default App;
