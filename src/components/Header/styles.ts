import {StyleSheet} from 'react-native';
import { globalConfig } from '../../global/dimensions';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: globalConfig.glocalDimensions.height / 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: globalConfig.dimensions.marginH,
    marginBottom: globalConfig.glocalDimensions.height / 120
  },
  greeting: {
    alignItems: 'center',
  },
  iconBox: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  icon: {
      marginLeft: globalConfig.glocalDimensions.width / 30
  }
});
