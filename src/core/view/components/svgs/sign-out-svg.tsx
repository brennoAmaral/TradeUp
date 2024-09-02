import useTheme from '@/theme/use-theme';
import { Line, Path, Polyline, Svg } from 'react-native-svg';


export default function SvgSignOut() {
  const { colors } = useTheme()
  return (
    <Svg fill={colors.primary} viewBox="0 0 24 24" id="sign-out-left-2"  style={{height:27, width:27}}>
      <Polyline id="primary" points="6 15 3 12 6 9" stroke={colors.primary} fill="none" strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}  />
      <Line id="primary-2"  x1="3" y1="12" x2="17" y2="12" stroke={colors.primary} fill="none" strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}  />
      <Path id="primary-3"  d="M10,8V5a1,1,0,0,1,1-1h9a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H11a1,1,0,0,1-1-1V16"  stroke={colors.primary} fill="none" strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}  />
    </Svg>
  );
}