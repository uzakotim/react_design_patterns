// import { CurrentUserLoader } from './components/CurrentUserLoader';
import { UserInfo } from './components/people/UserInfo';
// import { UserLoader } from './components/UserLoader';
// import { ResourceLoader } from './components/ResourceLoader';
// import { ProductInfo } from './components/ProductInfo';
import { DataSource } from './components/DataSource';
import axios from 'axios';

const getServerData = (url) => async () => {
    const response = await axios.get(url);
    return response.data;
};

const getLocalStorageData = (key) => () => {
    return localStorage.getItem(key);
};

const Text = ({ message }) => <h1>{message}</h1>;

function App() {
    return (
        <>
            <DataSource
                getDataFunction={getServerData('/users/123')}
                resourceName='user'
            >
                <UserInfo />
            </DataSource>
            <DataSource
                getDataFunction={getLocalStorageData('message')}
                resourceName='message'
            >
                <Text />
            </DataSource>
        </>
    );
}
export default App;
