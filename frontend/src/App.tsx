import './App.css';
import SkinContext from './context/SkinContext';
import TransferMenuContext from './context/TransferMenuContext';
import AppRoutes from './routes';

function App() {
  return (
    <SkinContext>
      <TransferMenuContext>
        <AppRoutes />
      </TransferMenuContext>
    </SkinContext>
  );
}

export default App;
