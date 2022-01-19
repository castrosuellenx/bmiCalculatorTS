import React from 'react';

// images
import exampleUserPicture from './images/exampleUserPicture.png';

// svg
import MenuDarkSVG from './svg/menuDark.svg';
import MenuLightSVG from './svg/menuLight.svg';
import MaleDarkSVG from './svg/maleDark.svg';
import MaleDarkUnfocusedSVG from './svg/maleDarkUnfocused.svg';
import MaleLightSVG from './svg/maleLight.svg';
import MaleLightUnfocusedSVG from './svg/maleLightUnfocused.svg';
import FemaleDarkSVG from './svg/femaleDark.svg';
import FemaleDarkUnfocusedSVG from './svg/femaleDarkUnfocused.svg';
import FemaleLightSVG from './svg/femaleLight.svg';
import FemaleLightUnfocusedSVG from './svg/femaleDarkUnfocused.svg';

export const images = {
  exampleUserPicture,
};

export type SVGProps = {
  width: number | string;
  height: number | string;
};

export const MenuDark: React.FC<SVGProps> = ({width, height}) => (
  <MenuDarkSVG width={width} height={height} />
);

export const MenuLight: React.FC<SVGProps> = ({width, height}) => (
  <MenuLightSVG width={width} height={height} />
);

export const MaleDark: React.FC<SVGProps> = ({width, height}) => (
  <MaleDarkSVG width={width} height={height} />
);

export const MaleDarkUnfocused: React.FC<SVGProps> = ({width, height}) => (
  <MaleDarkUnfocusedSVG width={width} height={height} />
);

export const MaleLight: React.FC<SVGProps> = ({width, height}) => (
  <MaleLightSVG width={width} height={height} />
);

export const MaleLightUnfocused: React.FC<SVGProps> = ({width, height}) => (
  <MaleLightUnfocusedSVG width={width} height={height} />
);

export const FemaleDark: React.FC<SVGProps> = ({width, height}) => (
  <FemaleDarkSVG width={width} height={height} />
);

export const FemaleDarkUnfocused: React.FC<SVGProps> = ({width, height}) => (
  <FemaleDarkUnfocusedSVG width={width} height={height} />
);

export const FemaleLight: React.FC<SVGProps> = ({width, height}) => (
  <FemaleLightSVG width={width} height={height} />
);

export const FemaleLightUnfocused: React.FC<SVGProps> = ({width, height}) => (
  <FemaleLightUnfocusedSVG width={width} height={height} />
);
