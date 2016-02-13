/**
 * The app's tab bar
 */
'use strict';

var React = require('react-native');
var Globals = require('./Globals');
var FlightPage = require('./FlightPage');
var MapPage = require('./MapPage');
var SettingsPage = require('./SettingsPage');
var {
  Component,
  View,
  StyleSheet,
  TabBarIOS,
  Text,
} = React;

var eyeIcon = 'data:image/png;base64,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';
var planeIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAABsFBMVEUAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYvW4TAAAAj3RSTlMAAAECAwQFBwgJCgwNDhAREhMUFRYbHB0lJicoKi4wMTI2Nzg5Ojs9PkZHSElLUFFSU1ZXWFtcXmJjZWdoaW1wcnN0dXd5e3x9foGGh4iJiouOkpmbnaOlpqeoqausrrGys7S3ubu9w8TFxsjN0NHS09TY2drb3N7f4OHi4+Xm7O3u7/Hy8/X29/j5+vv8/hGYt1UAAAMBSURBVHgB7Nl5V01RGMfxxyWRpAwNNxkyD1RmMgipkIGigRIZQoNIBiVD1G34vWXuc9Y9d5/WynL2Xmv//vF5BXutu5/7Pec5soSMf4D/B1jM8oJQrjAUTyHjTZEw3EDoWa4QFH5DqD0hBPXIuioEeePIOiUEp5E1u1f8yxlB1o8K8e8wDJ83iHeJVzD054t3e2B6nCPePYXpjni3FRGXxLsHMM0fEt/K52Ca2im+tSDiSykxy2pkLTHLqm8FMcuqM0HMsrrOzLKqJWZZze0nZllNbiJmWY0VE7OsBvKJWVa9OcQsqxZmllU9Mctq/ggxy2p6l7iTK83NzdeKYmdZTZSJuyH80ZOInWX1bp0460RaXfwsqxfubW5C2kxl/Cyr+85troF6XxA/y+qm8/VGoMsiy+qMa+pSCJyNn2U1d8B9DFRqS/wsq8nN4qQjnKnV8bOsxkvERSMyOiyyrIb06LaqEaq1yLJ64tLmJEJTFRZZVq1ib1kKoeFVFllWDWJvEFl3LbIcOCrW2mE4YZFlldotthpg+LnRIsvqa1IsVcH0Os8iy2p0vfMYqFabLKuXKy3HYBoRx2yyrLqWipUBREwmbbKsbomVNkRNDP/VKBb3dvjf9N0+btz2y6DoLTHGgOL7SQmUgeWcMQYUv0pF9YPleTC490CzjzgGqlHSDoKmW9JKQTNGPwD9J6BfQvoY0v+I+H/F/Bjxc8x/IGlbeDLfj2QDiJip9PxQunAIzvt+LE8iotv7i0kVTB/WeH81a4BhZpv/l9N2GOoIr+eDyHpIWFCYK5qPhYQVTdK8AIwlVbVxAShrukZk9CQoi8oO4wJQVrVDCMxuZyyrjXX9BdK6vty8AIwPFjVQnwpZn2yagguwg/bRqhNpF3mf7XQIHv1u3w4JAAAAGIT1b02MGRrcf7jj0l+3/Lz2970HDJ5weMTiGY+HTJ5yeczmOZ8HjZ50YtTqWa+HzZ52e9zueb8PHHzi4SMXn/n40MmnXj5287mfDx598mmiV5D9Xl4/IKVeOxMsP2AzAAAAAElFTkSuQmCC';
var gearIcon = 'data:image/png;base64,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';
var logoIcon = 'data:image/png;base64,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';

const TABS = {
  FLIGHTS: {
    title: 'Flights',
    icon: {
      uri: planeIcon,
      scale: 4,
    }
  },
  EAGLE_EYE: {
    title: 'Eagle Eye',
    icon: {
      uri: logoIcon,
      scale: 2.7,
    }
  },
  SETTINGS: {
    title: 'Settings',
    icon: {
      uri: gearIcon,
      scale: 7,
    },
  },
}

class AppTabBar extends Component {
  static get displayName() { return 'TabBarExample' }

  constructor() {
    super();
    this.state = {
      // selectedTabTitle: TABS.EAGLE_EYE.title,
      selectedTabTitle: TABS.FLIGHTS.title,
    };
  }

  _renderContent(tabTitle: string) {
    switch (tabTitle) {
      case 'Flights':
        return (
          <FlightPage/>
        );
        break;
      case 'Eagle Eye':
        return (
          <MapPage style={styles.mapPage}/>
        );
        break;
      case 'Settings':
        return (
          <SettingsPage style={styles.settingsPage}/>
        );
        break;
      default:
        throw new Error('Wrong tab!');
    }
  }

  _renderTab(tabData: object) {
    return (
      <TabBarIOS.Item
        title={tabData.title}
        icon={tabData.icon}
        selected={this.state.selectedTabTitle === tabData.title}
        onPress={() => {
          this.setState({
            selectedTabTitle: tabData.title
          });
        }}>
        {this._renderContent(tabData.title)}
        </TabBarIOS.Item>
    );
  }

  render() {
    // Tab contents
    var tabBarItems = [];
    for (var tabKey in TABS) {
      var tabData = TABS[tabKey];
      tabBarItems.push(this._renderTab(tabData));
    }

    // Tab bar
    return (
      <TabBarIOS
        tintColor={Globals.colors.primary}
        barTintColor="white">
        {tabBarItems}
      </TabBarIOS>
    );
  }
}

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
  mapPage: {
    flex: 1,
    backgroundColor: 'green',
  },
});

module.exports = AppTabBar;
