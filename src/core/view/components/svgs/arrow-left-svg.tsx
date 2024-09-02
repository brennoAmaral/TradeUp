import useTheme from '@/theme/use-theme';
import Svg, { Path } from 'react-native-svg';


export default function SvgArrowLeft() {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 24 24" fill="none" style={{ height: 35, width: 35 }}>
      <Path d="M15 7L10 12L15 17" stroke={colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}