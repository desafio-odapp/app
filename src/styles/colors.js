import Color from 'color';

export default {

  light: '#FFF',
  lightDarken: Color('#FFF').darken(0.5).hex(),
  lightLighten: Color('#FFF').lighten(0.5).hex(),

  black: '#000',
  blackDarken: Color('#000').darken(0.5).hex(),
  blackLighten: Color('#000').lighten(0.5).hex(),

  regular: '#e1e1e1',
  regularDarken: Color('#e1e1e1').darken(0.5).hex(),
  regularLighten: Color('#e1e1e1').lighten(0.5).hex(),

  primary: '#2c8097',
  primaryDarken: Color('#2c8097').darken(0.5).hex(),
  primaryLighten: Color('#2c8097').lighten(0.5).hex(),

  secondary: '#3dd3e0',
  secondaryDarken: Color('#3dd3e0').darken(0.5).hex(),
  secondaryLighten: Color('#3dd3e0').lighten(0.5).hex(),

  tertiary: '#ffffff',
  tertiaryDarken: Color('#ffffff').darken(0.5).hex(),
  tertiaryLighten: Color('#ffffff').lighten(0.5).hex(),

  success: '#61BD4F',
  successDarken: Color('#61BD4F').darken(0.5).hex(),
  successLighten: Color('#61BD4F').lighten(0.5).hex(),


  danger: '#3dd3e0',
  dangerDarken: Color('#3dd3e0').darken(0.5).hex(),
  dangerLighten: Color('#3dd3e0').lighten(0.5).hex(),

  transparent: 'transparent',
  darkTransparent: 'rgba(0, 0, 0, 0.6)',
  whiteTransparent: 'rgba(255, 255, 255, 0.3)',
};
