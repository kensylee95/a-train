declare module 'lucide-react' {
  import * as React from 'react';
  export interface IconProps extends React.SVGProps<SVGSVGElement> {
    color?: string;
    size?: number | string;
    absoluteStrokeWidth?: boolean;
  }
  export const Facebook: React.FC<IconProps>;
  export const Instagram: React.FC<IconProps>;
  export const Twitter: React.FC<IconProps>;
}


