import Categories from './components/Categories';
import NewsList from './components/NewsList';
import { useCallback, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

function App() {
    return (
        <div>
            <Routes>
                <Route index element={<NewsPage />} />
                <Route path="/:category" element={<NewsPage />} />
                {/* <Categories category={category} onSelect={onSelect} />
                <NewsList category={category} /> */}
            </Routes>
        </div>
    );
}

export default App;
