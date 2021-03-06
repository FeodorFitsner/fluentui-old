import { MakeStyles } from '../../types';
import { hyphenateProperty } from './hyphenateProperty';

export function cssifyObject(style: MakeStyles) {
  let css = '';

  // eslint-disable-next-line guard-for-in
  for (const property in style) {
    const value = style[property];

    if (typeof value !== 'string' && typeof value !== 'number') {
      continue;
    }

    // prevents the semicolon after
    // the last rule declaration
    if (css) {
      css += ';';
    }

    css += hyphenateProperty(property) + ':' + value;
  }

  return css;
}
