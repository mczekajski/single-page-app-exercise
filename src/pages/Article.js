import React from 'react';

const Article = ({author, text, title}) => {
    const styles = {
        marginTop: 40
    }
    return ( 
        <article style={styles}>
            <h3 style={{
                marginBottom: 3,
                textTransform: "uppercase"
            }}>{title}</h3>
            <span style={{
                display: "block",
                fontSize: 14,
                marginBottom: 10,
            }}>{author}</span>
            <p style={{fontSize: 16}}>{text}</p>
        </article>
     );
}
 
export default Article;