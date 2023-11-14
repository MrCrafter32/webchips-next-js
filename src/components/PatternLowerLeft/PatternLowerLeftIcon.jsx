import { memo, SVGProps } from 'react';

const PatternLowerLeftIcon = () => (
  <svg preserveAspectRatio='none' viewBox='0 0 1079 1005' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M30.7057 490.234C44.3556 292.988 185 -16.788 428.187 26.7298C807.955 94.6883 678.346 460.282 939.708 508.641C940.015 508.697 940.346 508.79 940.637 508.903C1115.68 576.992 1043.53 817.331 814.907 989.111C813.949 989.83 812.832 990.196 811.637 990.106C586.709 973.245 17.0918 686.962 30.7057 490.234Z'
      fill='url(#paint0_linear_57_4)'
      fillOpacity={0.7}
    />
    <defs>
      <linearGradient id='paint0_linear_57_4' x1={556} y1={502.563} x2={969} y2={57} gradientUnits='userSpaceOnUse'>
        <stop offset={0.179495} stopColor='#FF0101' />
        <stop offset={0.615625} stopColor='#FF09F5' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(PatternLowerLeftIcon);
export { Memo as PatternLowerLeftIcon };
