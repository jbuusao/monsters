import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CardList.css";
import { Card } from '../card/Card'

export const CardList = (props) => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(resp => { setCards(resp.data) })
      .catch(error => { console.log(error) })

  });
  return (
    <div className="card-list">
      {cards.map(m => m.name.toLowerCase().includes(props.filter.toLowerCase()) ? <Card monster={m} key={m.id} /> : null)}
    </div >)
}
