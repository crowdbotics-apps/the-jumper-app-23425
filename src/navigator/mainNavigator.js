import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile186872Navigator from '../features/UserProfile186872/navigator';
import Maps186853Navigator from '../features/Maps186853/navigator';
import Settings186831Navigator from '../features/Settings186831/navigator';
import Settings186816Navigator from '../features/Settings186816/navigator';
import NotificationList186815Navigator from '../features/NotificationList186815/navigator';
import Maps186814Navigator from '../features/Maps186814/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile186872: { screen: UserProfile186872Navigator },
Maps186853: { screen: Maps186853Navigator },
Settings186831: { screen: Settings186831Navigator },
Settings186816: { screen: Settings186816Navigator },
NotificationList186815: { screen: NotificationList186815Navigator },
Maps186814: { screen: Maps186814Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
