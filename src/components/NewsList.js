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

const sample = [
    {
        title: '제목',
        url: 'https://google.com',
        urlToImg: 'https://via.placeholder.com/160',
        description: '내용',
    },
];

const NewsList = () => {
    return (
        <NewsListBlock>
            <NewsItems article={sample[0]} />
            <NewsItems article={sample[0]} />
            <NewsItems article={sample[0]} />
            <NewsItems article={sample[0]} />
            <NewsItems article={sample[0]} />
            <NewsItems article={sample[0]} />
            <NewsItems article={sample[0]} />
            <NewsItems article={sample[0]} />
        </NewsListBlock>
    );
};

export default NewsList;
