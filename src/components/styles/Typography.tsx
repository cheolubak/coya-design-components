/**
 * Material Typo scale
 * https://material.io/design/typography/the-type-system.html#type-scale
 */

import { css } from '@emotion/react';

export const HEADLINE = (level: 1 | 2 | 3 | 4 | 5 | 6) => {
  switch (level) {
    case 1: {
      return css`
        font-size: 96px;
        font-weight: 300;
        letter-spacing: -1.5px;
      `;
    }
    case 2: {
      return css`
        font-size: 60px;
        font-weight: 300;
        letter-spacing: -0.5px;
      `;
    }
    case 3: {
      return css`
        font-size: 48px;
        font-weight: 400;
        letter-spacing: 0;
      `;
    }
    case 4: {
      return css`
        font-size: 34px;
        font-weight: 400;
        letter-spacing: 0.25px;
      `;
    }
    case 5: {
      return css`
        font-size: 24px;
        font-weight: 400;
        letter-spacing: 0;
      `;
    }
    case 6: {
      return css`
        font-size: 20px;
        font-weight: 500;
        letter-spacing: 0.15px;
      `;
    }
  }
};

export const SUBTITLE = (level: 1 | 2) => {
  switch (level) {
    case 1: {
      return css`
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 15px;
      `;
    }
    case 2: {
      return css`
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.1px;
      `;
    }
  }
};

export const BODY = (level: 1 | 2) => {
  switch (level) {
    case 1: {
      return css`
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0.5px;
      `;
    }
    case 2: {
      return css`
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0.25px;
      `;
    }
  }
};

export const BUTTON = () => {
  return css`
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1.25px;
  `;
};

export const CAPTION = () => {
  return css`
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.4px;
  `;
};

export const OVERLINE = () => {
  return css`
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 1.5px;
  `;
};
