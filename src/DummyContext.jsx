import { createContext } from 'react';

const DummyContext = createContext();

export const DummyProvider = ({ children }) => {

    // API CALL FUNCTION
    const fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(json => console.log(json))
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }

    return (
        <DummyContext.Provider value={{ fetchData }}>
            {children}
        </DummyContext.Provider>
    );
}

export default DummyContext;