import Svg, { Defs, G, Path, Rect } from 'react-native-svg';

interface SvgEye {
  isSlash?: boolean
}

export default function SvgEye({ isSlash = false }: SvgEye) {

  return (
    <Svg width="800px" height="800px" viewBox="0 0 24 24" fill="none">
      <G clip-path="url(#clip0_429_11225)">
        <Path d="M3 5H21V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V5Z" stroke="#292929" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M3 5L12 14L21 5" stroke="#292929" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
      </G>
      <Defs>
        <clipPath id="clip0_429_11225">
          <Rect width="24" height="24" fill="white" />
        </clipPath>
      </Defs>
    </Svg>
  );
}