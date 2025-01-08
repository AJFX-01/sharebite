import { Box, BoxProps } from '@mui/material';
import { ImgHTMLAttributes } from 'react';

interface ImageProps extends BoxProps {
  src: ImgHTMLAttributes<HTMLImageElement>['src'];
  alt: string;
}

const Image = ({ src, alt, ...rest }: ImageProps) => {
  return <Box component="img" src={src} alt={alt} {...rest} />;
};

export default Image;
