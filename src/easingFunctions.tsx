/* eslint no-return-assign: 0 */
/* eslint no-param-reassign: 0 */
/* eslint no-cond-assign: 0 */
/* eslint no-plusplus: 0 */
/* eslint no-restricted-properties: 0 */
import { IeasingFunction } from './types';

export const easeInQuad:IeasingFunction = (elps, from, to, dr) => (
  to * (elps /= dr) * elps + from
);

export const easeOutQuad:IeasingFunction = (elps, from, to, dr) => (
  -to * (elps /= dr) * (elps - 2) + from
);

export const easeInOutQuad:IeasingFunction = (elps, from, to, dr) => {
  if ((elps /= dr / 2) < 1) {
    return to / 2 * elps * elps + from;
  }
  return -to / 2 * (--elps * (elps - 2) - 1) + from;
};

export const easeInCubic:IeasingFunction = (elps, from, to, dr) => (
  to * (elps /= dr) * elps * elps + from
);

export const easeOutCubic:IeasingFunction = (elps, from, to, dr) => (
  to * ((elps = elps / dr - 1) * elps * elps + 1) + from
);

export const easeInOutCubic:IeasingFunction = (elps, from, to, dr) => {
  if ((elps /= dr / 2) < 1) {
    return to / 2 * elps * elps * elps + from;
  }
  return to / 2 * ((elps -= 2) * elps * elps + 2) + from;
};

export const easeInQuart:IeasingFunction = (elps, from, to, dr) => (
  to * (elps /= dr) * elps * elps * elps + from
);

export const easeOutQuart:IeasingFunction = (elps, from, to, dr) => (
  -to * ((elps = elps / dr - 1) * elps * elps * elps - 1) + from
);

export const easeInOutQuart:IeasingFunction = (elps, from, to, dr) => {
  if ((elps /= dr / 2) < 1) {
    return to / 2 * elps * elps * elps * elps + from;
  }
  return -to / 2 * ((elps -= 2) * elps * elps * elps - 2) + from;
};

export const easeInQuint:IeasingFunction = (elps, from, to, dr) => (
  to * (elps /= dr) * elps * elps * elps * elps + from
);

export const easeOutQuint:IeasingFunction = (elps, from, to, dr) => (
  to * ((elps = elps / dr - 1) * elps * elps * elps * elps + 1) + from
);

export const easeInOutQuint:IeasingFunction = (elps, from, to, dr) => {
  if ((elps /= dr / 2) < 1) {
    return to / 2 * elps * elps * elps * elps * elps + from;
  }
  return to / 2 * ((elps -= 2) * elps * elps * elps * elps + 2) + from;
};

export const easeInSine:IeasingFunction = (elps, from, to, dr) => (
  -to * Math.cos(elps / dr * (Math.PI / 2)) + to + from
);

export const easeOutSine:IeasingFunction = (elps, from, to, dr) => (
  to * Math.sin(elps / dr * (Math.PI / 2)) + from
);

export const easeInOutSine:IeasingFunction = (elps, from, to, dr) => (
  -to / 2 * (Math.cos(Math.PI * elps / dr) - 1) + from
);

export const easeInExpo:IeasingFunction = (elps, from, to, dr) => (
  elps === 0 ? from : to * Math.pow(2, 10 * (elps / dr - 1)) + from
);

export const easeOutExpo:IeasingFunction = (elps, from, to, dr) => elps === dr
  ? from + to
  : to * (-Math.pow(2, -10 * elps / dr) + 1) + from;

export const easeInOutExpo:IeasingFunction = (elps, from, to, dr) => {
  if (elps === 0) {
    return from;
  }
  if (elps === dr) {
    return from + to;
  }
  if ((elps /= dr / 2) < 1) {
    return to / 2 * Math.pow(2, 10 * (elps - 1)) + from;
  }
  return to / 2 * (-Math.pow(2, -10 * --elps) + 2) + from;
};

export const easeInCirc:IeasingFunction = (elps, from, to, dr) => (
  -to * (Math.sqrt(1 - (elps /= dr) * elps) - 1) + from
);

export const easeOutCirc:IeasingFunction = (elps, from, to, dr) => (
  to * Math.sqrt(1 - (elps = elps / dr - 1) * elps) + from
);

export const easeInOutCirc:IeasingFunction = (elps, from, to, dr) => {
  if ((elps /= dr / 2) < 1) {
    return -to / 2 * (Math.sqrt(1 - elps * elps) - 1) + from;
  }
  return to / 2 * (Math.sqrt(1 - (elps -= 2) * elps) + 1) + from;
};

export const easeInElastic:IeasingFunction = (elps, from, to, dr) => {
  let s = 1.70158;
  let p = 0;
  let a = to;
  if (elps === 0) {
    return from;
  }
  if ((elps /= dr) === 1) {
    return from + to;
  }
  if (!p) {
    p = dr * 0.3;
  }
  if (a < Math.abs(to)) {
    a = to;
    s = p / 4;
  } else {
    s = p / (2 * Math.PI) * Math.asin(to / a);
  }
  return (
    -(a * Math.pow(2, 10 * (elps -= 1)) * Math.sin((elps * dr - s) * (2 * Math.PI) / p))
		+ from
  );
};

export const easeOutElastic:IeasingFunction = (elps, from, to, dr) => {
  let s = 1.70158;
  let p = 0;
  let a = to;
  if (elps === 0) {
    return from;
  }
  if ((elps /= dr) === 1) {
    return from + to;
  }
  if (!p) {
    p = dr * 0.3;
  }
  if (a < Math.abs(to)) {
    a = to;
    s = p / 4;
  } else {
    s = p / (2 * Math.PI) * Math.asin(to / a);
  }
  return a * Math.pow(2, -10 * elps) * Math.sin((elps * dr - s) * (2 * Math.PI) / p) + to + from;
};

export const easeInOutElastic:IeasingFunction = (elps, from, to, dr) => {
  let s = 1.70158;
  let p = 0;
  let a = to;
  if (elps === 0) {
    return from;
  }
  if ((elps /= dr / 2) === 2) {
    return from + to;
  }
  if (!p) {
    p = dr * (0.3 * 1.5);
  }
  if (a < Math.abs(to)) {
    a = to;
    s = p / 4;
  } else {
    s = p / (2 * Math.PI) * Math.asin(to / a);
  }
  if (elps < 1) {
    return (
      -0.5 * (a * Math.pow(2, 10 * (elps -= 1)) * Math.sin((elps * dr - s) * (2 * Math.PI) / p))
			+ from
    );
  }
  return (
    a * Math.pow(2, -10 * (elps -= 1)) * Math.sin((elps * dr - s) * (2 * Math.PI) / p) * 0.5
		+ to + from
  );
};

export const easeInBack:IeasingFunction = (elps, from, to, dr, s = 1.70158) => (
  to * (elps /= dr) * elps * ((s + 1) * elps - s) + from
);

export const easeOutBack:IeasingFunction = (elps, from, to, dr, s = 1.70158) => (
  to * ((elps = elps / dr - 1) * elps * ((s + 1) * elps + s) + 1) + from
);

export const easeInOutBack:IeasingFunction = (elps, from, to, dr, s = 1.70158) => {
  if ((elps /= dr / 2) < 1) {
    return to / 2 * (elps * elps * (((s *= 1.525) + 1) * elps - s)) + from;
  }
  return to / 2 * ((elps -= 2) * elps * (((s *= 1.525) + 1) * elps + s) + 2) + from;
};

export const easeOutBounce:IeasingFunction = (elps, from, to, dr) => {
  if ((elps /= dr) < 1 / 2.75) {
    return to * (7.5625 * elps * elps) + from;
  } if (elps < 2 / 2.75) {
    return to * (7.5625 * (elps -= 1.5 / 2.75) * elps + 0.75) + from;
  } if (elps < 2.5 / 2.75) {
    return to * (7.5625 * (elps -= 2.25 / 2.75) * elps + 0.9375) + from;
  }
  return to * (7.5625 * (elps -= 2.625 / 2.75) * elps + 0.984375) + from;
};

export const easeInBounce:IeasingFunction = (elps, from, to, dr) => (
  to - easeOutBounce(dr - elps, 0, to, dr) + from
);

export const easeInOutBounce:IeasingFunction = (elps, from, to, dr) => {
  if (elps < dr / 2) {
    return easeInBounce(elps * 2, 0, to, dr) * 0.5 + from;
  }
  return easeOutBounce(elps * 2 - dr, 0, to, dr) * 0.5 + to * 0.5 + from;
};
