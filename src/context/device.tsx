import { createContext, ReactNode, useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import Device from '../constants/device';

const DeviceContext = createContext<Device | undefined>(undefined);

interface DeviceWrapperProps {
  children?: ReactNode;
}

const DeviceWrapper: React.FC<DeviceWrapperProps> = ({ children }) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1600px)' });
  const isLaptop = useMediaQuery({ query: '(min-width: 1000px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 640px)' });
  const isMobile = useMediaQuery({ query: '(min-width: 320px)' });

  const getDevice = (): Device | undefined => {
    if (isDesktop) return Device.DESKTOP;
    if (isLaptop) return Device.LAPTOP;
    if (isTablet) return Device.TABLET;
    if (isMobile) return Device.MOBILE;
  };

  return <DeviceContext.Provider value={getDevice()}>{children}</DeviceContext.Provider>;
};

export function useDeviceContext() {
  return useContext(DeviceContext);
}

export default DeviceWrapper;
