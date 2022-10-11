import { parseColor } from '../Palette';

function createTheme(
  primary = { color: 'indigo', intensity: 500 },
  secondary = { color: 'cyan', intensity: 300 },
  warning = { color: 'red', intensity: 500 }
) {
  const primaryColor = parseColor({ ...primary });
  const secondaryColor = parseColor({ ...secondary });
  const warningColor = parseColor({ ...warning });

  const styles = [];
  const colorSheet = new CSSStyleSheet();
  colorSheet.replaceSync(`:root {
    --COLOR_PRIMARY: ${primaryColor.normal};
    --COLOR_PRIMARY_HOVER: ${primaryColor.hover};
    --COLOR_PRIMARY_ACTIVE: ${primaryColor.active};
    --COLOR_SECONDARY: ${secondaryColor.normal};
    --COLOR_SECONDARY_HOVER: ${secondaryColor.hover};
    --COLOR_SECONDARY_ACTIVE: ${secondaryColor.active};
    --COLOR_WARNING: ${warningColor.normal};
    --COLOR_WARNING_HOVER: ${warningColor.hover};
    --COLOR_WARNING_ACTIVE: ${warningColor.active};
  }`);
  styles.push(colorSheet);
  document.adoptedStyleSheets = [...document.adoptedStyleSheets, colorSheet];
}

export default createTheme;
