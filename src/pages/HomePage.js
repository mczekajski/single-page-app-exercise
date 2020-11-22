import React from 'react';
import Article from './Article'

const articles = [
    {
        id: 1,
        title: "Czym jest teoria strun?",
        author: "Jan Nowak",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, tempora aperiam quisquam qui delectus ducimus facilis quod cupiditate necessitatibus, natus, quam dolores eligendi eum aliquam at expedita laudantium harum velit!"
    },
    {
        id: 2,
        title: "Czym jest paradoks fermiego?",
        author: "Jan Nowak",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, tempora aperiam quisquam qui delectus ducimus facilis quod cupiditate necessitatibus, natus, quam dolores eligendi eum aliquam at expedita laudantium harum velit!"
    },
    {
        id: 3,
        title: "Ciemna materia i ciemna energia.",
        author: "Jan Nowak",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, tempora aperiam quisquam qui delectus ducimus facilis quod cupiditate necessitatibus, natus, quam dolores eligendi eum aliquam at expedita laudantium harum velit!"
    },
]

const HomePage = () => {

    const artList = articles.map(article => (
        <Article key={article.id} {...article}/>
    ))

    return ( 
        <div className="home">
            {artList}
        </div>
     );
}
 
export default HomePage;