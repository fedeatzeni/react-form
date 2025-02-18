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

    return (
        <>
            <form onSubmit={addArticle}>
                <input type="text" value={newArticle} onChange={event => setNewArticle(event.target.value)} />
                <button>Invia</button>
            </form>

            <ul>
                {articles.map(el => <li>{el}</li>)}
            </ul>
        </>
    )
}
