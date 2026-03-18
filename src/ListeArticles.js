import { useState, useEffect } from 'react';

function ListeArticles() {
    // Instead of useFetch API, we use our own local state with meaningful sentences
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulating an API call delay of 1 second
        const timer = setTimeout(() => {
            setData([
                { id: 1, title: 'Understanding how React Hooks transform state management' },
                { id: 2, title: 'Building modern and responsive web applications from scratch' },
                { id: 3, title: 'The importance of writing clean, maintainable, and scalable code' },
                { id: 4, title: 'Mastering asynchronous JavaScript and API data fetching' },
                { id: 5, title: 'Designing intuitive user interfaces with sleek dark themes' }
            ]);
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) return <p>Loading articles...</p>;

    return (
        <ul>
            {data.map((article) => (
                <li key={article.id}><strong>{article.title}</strong></li>
            ))}
        </ul>
    );
}

export default ListeArticles;