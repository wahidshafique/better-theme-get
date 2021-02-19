import { themeGet } from "@styled-system/theme-get";
import css from "@styled-system/css";

const camelCase = (input: string) =>
  input.toLowerCase().replace(/-(.)/g, (match, group1) => group1.toUpperCase());

// a getter to access theme items
// you can use it to get 1 value > get('fontSizes.3'); or both css prop:val > get('font-size', 3);

const get = (themeKey: string, optThemeValue?: number, optThemeObject?: {}) => (
  props: any
) => {
  // nominal case for when you pass both args
  if (themeKey && optThemeValue !== undefined) {
    const normalizedThemeKey = camelCase(themeKey);
    return css({
      [normalizedThemeKey]: optThemeValue,
    });
  }
  // otherwise act on single arg as usual
  let modProps = props || {};
  // if there is a missing theme for some reason, default to the optional theme argument
  if (!modProps?.theme && optThemeObject) {
    modProps = {
      ...modProps,
      theme: optThemeObject,
    };
  }
  return themeGet(themeKey)(modProps);
};

export default get;
