import { printProps } from './components/printProps';
import { UserInfo } from './components/people/UserInfo';
import { withUser } from './components/withUser';
import { UserInfoForm } from './components/UserInfoForm';
const UserInfoWrapped = printProps(UserInfo);
const UserInfoWithLoader = withUser(UserInfo, '234');
function App() {
    return <UserInfoForm />;
}

export default App;
