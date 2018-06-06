// @flow
import { createStackNavigator } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';

import Categories from '../Views/Categories';
import ObservationEditor from '../Views/ObservationEditor';
import ObservationFields from '../Views/ObservationFields';
import CameraView from '../Views/CameraView';
import PhotoView from '../Views/PhotoView';
import ObservationDetailView from '../Views/ObservationDetailView';
import PreferencesView from '../Views/PreferencesView/PreferencesView';
import MapView from '../Views/MapView';

const routeConfiguration = {
  Categories: { screen: Categories },
  ObservationEditor: { screen: ObservationEditor },
  ObservationFields: { screen: ObservationFields },
  CameraView: { screen: CameraView },
  PhotoView: { screen: PhotoView },
  ObservationDetailView: { screen: ObservationDetailView },
  PreferencesView: { screen: PreferencesView },
  MapView: { screen: MapView }
};
const stackConfiguration = {
  initialRouteName: 'MapView',
  headerMode: 'none',
  transitionConfig: () => ({
    screenInterpolator: sceneProps => {
      if (
        sceneProps.scene.route.routeName.match('ObservationDetailView') ||
        sceneProps.scene.route.routeName.match('ObservationFields')
      ) {
        return CardStackStyleInterpolator.forHorizontal(sceneProps);
      }

      return CardStackStyleInterpolator.forFade(sceneProps);
    }
  })
};

const MainStackNavigation = createStackNavigator(
  routeConfiguration,
  stackConfiguration
);

export default MainStackNavigation;
