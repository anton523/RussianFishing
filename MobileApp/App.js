import MainContainer from './src/navigation/MainContainer';
import { NativeBaseProvider } from 'native-base';

const App = () => {
  return (
    <NativeBaseProvider>
      <MainContainer />
    </NativeBaseProvider>

  );
}

export default App;