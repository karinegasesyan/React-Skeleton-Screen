import React, { useEffect, useState } from 'react';
import SkeletonArticle from '../skeletons/SkeletonArticle';

const Articls = () => {
    const [articls, setArticls] = useState(null);
    useEffect(() => {
        setTimeout(async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await res.json();
            setArticls(data);
        }, 5000)
    })
    return(
        <div className="articls">
            <h2>Articls</h2>
            {articls && articls.map(article => (
                <div className="article" key= { article.id }>
                    <h3> { article.title } </h3>
                    <p> { article.body } </p>
                </div>
            ))}
            {!articls && [1,2,3,4,5].map((n) => <SkeletonArticle key={n} theme="dark" />)}
        </div>
    )
}

export  default Articls;