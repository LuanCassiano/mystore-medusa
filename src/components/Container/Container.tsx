import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentProps } from './types/containerProps';
import { styles } from './Container.styles';

export default function Container ({ children }: ContentProps) {
  return (
    <SafeAreaView
      style={styles.container}
      edges={['bottom']}
      testID='container-component'
    >
      {children}
    </SafeAreaView>
  )
}
