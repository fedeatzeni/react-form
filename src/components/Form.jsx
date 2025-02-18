import { useState } from "react";

const startList = ["primo", "secondo", "terzo"]

export default function Form() {
    // stati lista 
    const [articles, setArticles] = useState(startList);
    const [newArticle, setNewArticle] = useState("");


    function addArticle() {
        event.preventDefault();
        // crea un nuovo array con l'aggiunta di un elemento 
        let updatedArticles = [...articles, newArticle];
        //aggiorna l'array
        setArticles(updatedArticles);
        // pulisce l'input del form
        setNewArticle("");
    }

    function removeArticle(i) {
        setArticles(articles.filter((articles, index) => index !== i));
    }

    return (
        <>
            <form onSubmit={addArticle}>
                <input type="text" value={newArticle} onChange={event => setNewArticle(event.target.value)} />
                <button>Invia</button>
            </form>

            <ul>
                {articles.map((el, index) => <li key={index}>{el} <button onClick={()=> removeArticle(index)}>elimina</button></li>)}
            </ul>
        </>
    )
}
