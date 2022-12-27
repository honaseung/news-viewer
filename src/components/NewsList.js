import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItems from './NewsItem';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

// const sample = [
//     {
//         title: '제목',
//         url: 'https://google.com',
//         urlToImage: 'https://via.placeholder.com/160',
//         description: '내용',
//     },
// ];

const NewsList = ({ category }) => {
    const [articles, setArticles] = useState(null);
    const [loding, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const query = category === 'all' ? '' : `&category=${category}`;
                const response = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=f61996914f2a4a48871e35246aab8eed`,
                );
                setArticles(response.data.articles);
            } catch (e) {
                alert(e);
            }
            setLoading(false);
        };
        fetchData();
    }, [category]);

    if (loding) {
        return <NewsListBlock>로딩 중...</NewsListBlock>;
    }

    if (!articles) {
        return null;
    }

    return (
        <NewsListBlock>
            {articles.map((article) => (
                <NewsItems key={article.url} article={article} />
            ))}
        </NewsListBlock>
    );
};

export default NewsList;
