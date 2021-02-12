import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const ImageAltTextIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg
      role="presentation"
      focusable="false"
      viewBox="2 2 16 16"
      className={classes.svg}
      style={{ overflow: 'visible' }}
    >
      <path
        className={cx(iconClassNames.outline, classes.outlinePart)}
        d="M3 1C1.89542 1 1 1.89539 1 3V7C1 8.10461 1.89542 9 3 9H8C9.10458 9 10 8.10461 10 7V3C10 1.89539 9.10458 1 8 1H3ZM3.5 6H7.5C7.77615 6 8 6.22388 8 6.5C8 6.77612 7.77615 7 7.5 7H3.5C3.22385 7 3 6.77612 3 6.5C3 6.22388 3.22385 6 3.5 6ZM3 3.5C3 3.22388 3.22385 3 3.5 3H7.5C7.77615 3 8 3.22388 8 3.5C8 3.77612 7.77615 4 7.5 4H3.5C3.22385 4 3 3.77612 3 3.5ZM3 14V10H4V14C4 14.3727 4.1019 14.7214 4.27939 15.0201L8.94867 10.432C9.53226 9.85864 10.4677 9.85864 11.0513 10.432L15.7206 15.0201C15.8981 14.7214 16 14.3727 16 14V6C16 4.89539 15.1046 4 14 4H11V3H14C15.6569 3 17 4.34314 17 6V14C17 15.6569 15.6569 17 14 17H6C4.34314 17 3 15.6569 3 14ZM6 16H14C14.3691 16 14.7149 15.9 15.0117 15.7256L10.3504 11.1453C10.1559 10.9542 9.84409 10.9542 9.64957 11.1453L4.98825 15.7256C5.28506 15.9 5.63086 16 6 16ZM12.5 9C11.6716 9 11 8.32837 11 7.5C11 6.67163 11.6716 6 12.5 6C13.3284 6 14 6.67163 14 7.5C14 8.32837 13.3284 9 12.5 9ZM13 7.5C13 7.22388 12.7762 7 12.5 7C12.2238 7 12 7.22388 12 7.5C12 7.77612 12.2238 8 12.5 8C12.7762 8 13 7.77612 13 7.5Z"
      />
      <path
        className={cx(iconClassNames.filled, classes.filledPart)}
        d="M1 3C1 1.89539 1.89542 1 3 1H8C9.10458 1 10 1.89539 10 3V7C10 8.10461 9.10458 9 8 9H3C1.89542 9 1 8.10461 1 7V3ZM3 6.5C3 6.77612 3.22385 7 3.5 7H7.5C7.77615 7 8 6.77612 8 6.5C8 6.22388 7.77615 6 7.5 6H3.5C3.22385 6 3 6.22388 3 6.5ZM3.5 3C3.22385 3 3 3.22388 3 3.5C3 3.77612 3.22385 4 3.5 4H7.5C7.77615 4 8 3.77612 8 3.5C8 3.22388 7.77615 3 7.5 3H3.5ZM12.5 8C12.7761 8 13 7.77614 13 7.5C13 7.22386 12.7761 7 12.5 7C12.2239 7 12 7.22386 12 7.5C12 7.77614 12.2239 8 12.5 8ZM3 10H8C9.65686 10 11 8.65691 11 7V3H14C15.6569 3 17 4.34315 17 6V14C17 14.6495 16.7936 15.2509 16.4428 15.7419L11.0524 10.4345C10.4686 9.85964 9.53144 9.85964 8.94759 10.4345L3.55724 15.7419C3.20642 15.2509 3 14.6495 3 14V10ZM12.5 9C13.3284 9 14 8.32843 14 7.5C14 6.67157 13.3284 6 12.5 6C11.6716 6 11 6.67157 11 7.5C11 8.32843 11.6716 9 12.5 9ZM4.26544 16.448C4.75517 16.7956 5.35372 17 6 17H14C14.6463 17 15.2448 16.7956 15.7346 16.448L10.3508 11.1471C10.1562 10.9555 9.84381 10.9555 9.6492 11.1471L4.26544 16.448Z"
      />
    </svg>
  ),
  displayName: 'ImageAltTextIcon',
});
