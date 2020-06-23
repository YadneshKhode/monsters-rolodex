import React from "react";
import "./card-list.modules.css";
import { Card } from "../card/card.component";
export const CardList = (props) => (
  <div className="card-list wrapper">
    {props.monsters.map((monster) => (
      <Card key={monster.id} monster = {monster}/>
    ))}
  </div>
);
