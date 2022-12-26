import axios from 'axios';
import { useState } from 'react';

function App() {
    const [data, setData] = useState(null);
    const onClick = async () => {
        try {
            const response = await axios.get(
                'https://newsapi.org/v2/top-headlines?country=kr&apiKey=f61996914f2a4a48871e35246aab8eed',
            );
            setData(response.data);
        } catch (e) {
            alert(e);
        }
    };
    return (
        <div>
            <div>
                <button onClick={onClick}>불러오기</button>
            </div>
            {data && (
                <textarea
                    rows={7}
                    value={JSON.stringify(data, null, 2)}
                    readOnly={true}
                />
            )}
        </div>
    );
}

export default App;
