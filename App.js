import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/firebase/AuthProvider';
import BottomNavigation from './src/navigation/BottomNavigation';

export default function App() {
  return (
      <NavigationContainer>
        <AuthProvider>
          <BottomNavigation />
        </AuthProvider>
      </NavigationContainer>
  );
}

