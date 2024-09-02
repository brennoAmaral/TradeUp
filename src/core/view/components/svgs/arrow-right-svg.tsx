import useTheme from '@/theme/use-theme';
import { Path, Svg } from 'react-native-svg';


export default function SvgArrowRight() {
  const { colors } = useTheme()
  return (
    <Svg viewBox="0 0 24 24" fill="none" style={{ height: 35, width: 35 }}>
      <Path  d="M10 7L15 12L10 17" stroke={colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
  );
}