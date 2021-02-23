# better-theme-get

A better existential getter function for styled-system. This is based off of [@styled-system/theme-get](https://www.npmjs.com/package/@styled-system/theme-get).

## Install

```
yarn add better-theme-get
```

## Usage

**Expected Usage (dual argument)**

```
get(themeKey: string, optThemeValue?: string | number | Array<string | number> | null)
```

Using this function with two arguments is shorter, and can leverage styled-system's theme aware matchers, so you do not have to specify indices.

```
const Spacer = styled.div`
  ${get("margin-top", 3)};
`;
```

and with media queries too!

```
const ButtonMedia = styled.button`
  ${get("font-size", [0, 2, 4])};
`;
```

**Verbose Usage (single argument)**

```
get(themeKey: string)
```

With this, you _do_ have to specify what theme property or index you are trying to access, as the function cannot infer that on its own. This is closer to the original api of `theme-get`

```
const Spacer = styled.div`
  margin-top: ${get("space.3")};
`;
```

**Independent Usage (outside of styled-components)**

_Note that you must provide your theme object as a named param for the second invocation_

```
const themeColor = get("colors.iconGrey")({
    theme,
  });
```
