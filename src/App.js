import HeartsList from './components/HeartsList';
import Header from './components/Header';
import './App.css';

// constant variables for the messages
const headerMessage = 'I ❤️ React';

// stateless functional component
function App() {
    return (
        // empty element 'fragment'
        <>
            <Header msg={headerMessage} />
            <HeartsList />
        </>
    );
}

export default App;