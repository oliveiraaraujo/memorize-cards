import React from 'react';
import Cards from '../components/Cards';
import {cards} from '../data/cards.json';

const WithCards = () => <Cards cards={cards} />;

export default WithCards;