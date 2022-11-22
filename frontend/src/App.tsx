import './App.css';
import SkinContext from './context/SkinContext';
import TransferMenuContext from './context/TransferMenuContext';
import UserContext from './context/UserContext';
import AppRoutes from './routes';

function App() {
  return (
    <UserContext>
      <SkinContext>
        <TransferMenuContext>
          <AppRoutes />
        </TransferMenuContext>
      </SkinContext>
    </UserContext>
  );
}

export default App;
