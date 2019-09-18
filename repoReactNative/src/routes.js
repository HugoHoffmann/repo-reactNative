import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';

const Routes = createAppContainer(
    createStackNavigator({
        Main,
        User,
    }, {
            headerLayoutPreset: 'center',
            headerBackTitleVisible: false,
            defaultNavigationsOptions: {
                headerStyle: {
                    backgroundColor: '#ff9033',
                },
                headerTintColor: '#fff',
        }
    )
);

export default Routes;
