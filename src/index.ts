import { themeGet } from "@styled-system/theme-get";
import css from "@styled-system/css";

const camelCase = (input: string) =>
  input.toLowerCase().replace(/-(.)/g, (match, group1) => group1.toUpperCase());

// a getter to access theme items
// you can use it to get 1 value > get('fontSizes.3'); or both css prop:val > get('font-size', 3);
const get = (
  themeKey: string,
  optThemeValue?: string | number | Array<string | number> | null
) => (props: { theme: {} }) => {
  // nominal case for when you pass both args
  if (themeKey && optThemeValue !== null && optThemeValue !== undefined) {
    const normalizedThemeKey = camelCase(themeKey);
    return css({
      [normalizedThemeKey]: optThemeValue,
    });
  }
  return themeGet(themeKey)(props);
};

export default get;
