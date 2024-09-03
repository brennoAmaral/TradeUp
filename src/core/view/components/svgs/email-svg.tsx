import useTheme from '@/theme/use-theme';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';


export default function SvgEmail() {
  const {colors} = useTheme()
  return (
    <Svg viewBox="0 0 24 24" fill="none" style={{height: 27, width: 27}}>
      <G clip-path="url(#clip0_429_11225)">
        <Path d="M3 5H21V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V5Z" stroke={colors.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M3 5L12 14L21 5" stroke={colors.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </G>
      <Defs>
        <ClipPath id="clip0_429_11225">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}