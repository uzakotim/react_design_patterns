import { UserInfo } from './components/people/UserInfo';
import { ProductInfo } from './components/products/ProductInfo';
function App() {
    return (
        <>
            <UserInfo userId='123'></UserInfo>
            <ProductInfo productId='1234'></ProductInfo>
        </>
    );
}

export default App;
