import {
  Grey,
  Red,
  Pink,
  Grape,
  Violet,
  Indigo,
  Blue,
  Cyan,
  Teal,
  Green,
  Lime,
  Yellow,
  Orange,
} from '../Color';

const hoverIntensity = {
  50: 100,
  100: 50,
  200: 100,
  300: 200,
  400: 300,
  500: 400,
  600: 500,
  700: 600,
  800: 700,
  900: 800,
};

const activeIntensity = {
  50: 200,
  100: 200,
  200: 300,
  300: 400,
  400: 500,
  500: 600,
  600: 700,
  800: 900,
  900: 900,
};

/**
 * @author Cheolu.B
 * @description
 * @param {'grey' | 'red' | 'pink' | 'grape' | 'violet' | 'indigo' | 'blue' | 'cyan' | 'teal' | 'green' | 'lime' | 'yellow' | 'orange'} color
 * @param {50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900} intensity
 */
function parseColor({ color, intensity }) {
  console.log(color, intensity);
  const hoverIntensity =
    (intensity > 100 && intensity - 100) ||
    (intensity <= 50 && 100) ||
    (intensity === 100 && 50);
  const activeIntensity =
    (intensity >= 200 && intensity < 900 && intensity + 100) ||
    (intensity < 200 && intensity > 50 && intensity + 200) ||
    (intensity < 50 && 100);
  switch (color) {
    case 'grey':
      return {
        normal: Grey[intensity],
        hover: Grey[hoverIntensity[intensity]],
        active: Grey[activeIntensity[intensity]],
      };
    case 'red':
      return {
        normal: Red[intensity],
        hover: Red[hoverIntensity[intensity]],
        active: Red[activeIntensity[intensity]],
      };
    case 'pink':
      return {
        normal: Pink[intensity],
        hover: Pink[hoverIntensity[intensity]],
        active: Pink[activeIntensity[intensity]],
      };
    case 'grape':
      return {
        normal: Grape[intensity],
        hover: Grape[hoverIntensity[intensity]],
        active: Grape[activeIntensity[intensity]],
      };
    case 'violet':
      return {
        normal: Violet[intensity],
        hover: Violet[hoverIntensity[intensity]],
        active: Violet[activeIntensity[intensity]],
      };
    case 'indigo':
      return {
        normal: Indigo[intensity],
        hover: Indigo[hoverIntensity[intensity]],
        active: Indigo[activeIntensity[intensity]],
      };
    case 'blue':
      return {
        normal: Blue[intensity],
        hover: Blue[hoverIntensity[intensity]],
        active: Blue[activeIntensity[intensity]],
      };
    case 'cyan':
      return {
        normal: Cyan[intensity],
        hover: Cyan[hoverIntensity[intensity]],
        active: Cyan[activeIntensity[intensity]],
      };
    case 'teal':
      return {
        normal: Teal[intensity],
        hover: Teal[hoverIntensity[intensity]],
        active: Teal[activeIntensity[intensity]],
      };
    case 'green':
      return {
        normal: Green[intensity],
        hover: Green[hoverIntensity[intensity]],
        active: Green[activeIntensity[intensity]],
      };
    case 'lime':
      return {
        normal: Lime[intensity],
        hover: Lime[hoverIntensity[intensity]],
        active: Lime[activeIntensity[intensity]],
      };
    case 'yellow':
      return {
        normal: Yellow[intensity],
        hover: Yellow[hoverIntensity[intensity]],
        active: Yellow[activeIntensity[intensity]],
      };
    case 'orange':
      return {
        normal: Orange[intensity],
        hover: Orange[hoverIntensity[intensity]],
        active: Orange[activeIntensity[intensity]],
      };
  }
}

export default parseColor;
