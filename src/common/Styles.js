import {
    Dimensions,
    Platform
} from 'react-native';
  
const {width, height} = Dimensions.get('window');
const {heightWindow} = Dimensions.get('window');

let Styles = {
    FontSize: {
      tiny: 12,
      small: 14,
      medium: 16,
      big: 18,
      large: 20,
    },
  
};

Styles.Common = {
    paddingLeft: 15,
    paddingRight: 15,
    paddingHorizontal: 10,
  
    Column: {},
    ColumnCenter: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    ColumnCenterTop: {
      alignItems: 'center',
    },
    ColumnCenterBottom: {
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    ColumnCenterLeft: {
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    ColumnCenterRight: {
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    Row: {
      flexDirection: 'row',
    },
    RowCenter: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    RowCenterTop: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    RowCenterBottom: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
    RowCenterLeft: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    RowCenterRight: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    RowCenterBetween: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
};
  
export default Styles;
  