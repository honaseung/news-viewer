import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import usePromise from '../lib/usePromise';
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
    const [loading, response, error] = usePromise(() => {
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(
            `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=f61996914f2a4a48871e35246aab8eed`,
        );
    }, [category]);

    if (loading) {
        return <NewsListBlock>로딩 중...</NewsListBlock>;
    }

    if (!response) {
        return null;
    }

    if (error) {
        return <NewsListBlock>에러 입니다.</NewsListBlock>;
    }

    const { articles } = response.data;

    return (
        <NewsListBlock>
            {articles.map((article) => (
                <NewsItems key={article.url} article={article} />
            ))}
        </NewsListBlock>
    );
};

export default NewsList;
