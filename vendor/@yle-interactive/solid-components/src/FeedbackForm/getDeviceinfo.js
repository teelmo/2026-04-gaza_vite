import Bowser from "bowser";

const getUserDeviceInfo = () => {
    const navigator = window.navigator;
    const bowser = Bowser.parse(navigator.userAgent);

      const windowResolution = () => {
          const resolution = {
              width: window.innerWidth,
              height: window.innerHeight,
          };
          return resolution;
      };

      const getUserDeviceResolution = () => {
          const deviceResolution = {
              deviceWidth: window.screen.width,
              deviceHeight: window.screen.height,
          };
          return deviceResolution;
      };


      const data = {
            ...bowser,
            os: Object.values(bowser.os).join(" "),
            browser: Object.values(bowser.browser).join(" "),
            userAgent: navigator?.userAgent,
            windowResolution: windowResolution(),
            deviceResolution: getUserDeviceResolution(),
      };
      return data;

      
  };

  export default getUserDeviceInfo;