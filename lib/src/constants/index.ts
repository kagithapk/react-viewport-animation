export const CLASSNAME = 'react-viewport-animation';

export const ANIMATION_KEYFRAMES = {
  bounce: 'bounce',
  flash: 'flash',
  pulse: 'pulse',
  rubberBand: 'rubberBand',
  shakeX: 'shakeX',
  shakeY: 'shakeY',
  headShake: 'headShake',
  swing: 'swing',
  tada: 'tada',
  wobble: 'wobble',
  jello: 'jello',
  heartBeat: 'heartBeat',
  backInDown: 'backInDown',
  backInLeft: 'backInLeft',
  backInRight: 'backInRight',
  backInUp: 'backInUp',
  backOutDown: 'backOutDown',
  backOutLeft: 'backOutLeft',
  backOutRight: 'backOutRight',
  backOutUp: 'backOutUp',
  bounceIn: 'bounceIn',
  bounceInDown: 'bounceInDown',
  bounceInLeft: 'bounceInLeft',
  bounceInRight: 'bounceInRight',
  bounceInUp: 'bounceInUp',
  bounceOut: 'bounceOut',
  bounceOutDown: 'bounceOutDown',
  bounceOutLeft: 'bounceOutLeft',
  bounceOutRight: 'bounceOutRight',
  bounceOutUp: 'bounceOutUp',
  fadeIn: 'fadeIn',
  fadeInDown: 'fadeInDown',
  fadeInDownBig: 'fadeInDownBig',
  fadeInLeft: 'fadeInLeft',
  fadeInLeftBig: 'fadeInLeftBig',
  fadeInRight: 'fadeInRight',
  fadeInRightBig: 'fadeInRightBig',
  fadeInUp: 'fadeInUp',
  fadeInUpBig: 'fadeInUpBig',
  fadeInTopLeft: 'fadeInTopLeft',
  fadeInTopRight: 'fadeInTopRight',
  fadeInBottomLeft: 'fadeInBottomLeft',
  fadeInBottomRight: 'fadeInBottomRight',
  fadeOut: 'fadeOut',
  fadeOutDown: 'fadeOutDown',
  fadeOutDownBig: 'fadeOutDownBig',
  fadeOutLeft: 'fadeOutLeft',
  fadeOutLeftBig: 'fadeOutLeftBig',
  fadeOutRight: 'fadeOutRight',
  fadeOutRightBig: 'fadeOutRightBig',
  fadeOutUp: 'fadeOutUp',
  fadeOutUpBig: 'fadeOutUpBig',
  fadeOutTopLeft: 'fadeOutTopLeft',
  fadeOutTopRight: 'fadeOutTopRight',
  fadeOutBottomRight: 'fadeOutBottomRight',
  fadeOutBottomLeft: 'fadeOutBottomLeft',
  flip: 'flip',
  flipInX: 'flipInX',
  flipInY: 'flipInY',
  flipOutX: 'flipOutX',
  flipOutY: 'flipOutY',
  lightSpeedInRight: 'lightSpeedInRight',
  lightSpeedInLeft: 'lightSpeedInLeft',
  lightSpeedOutRight: 'lightSpeedOutRight',
  lightSpeedOutLeft: 'lightSpeedOutLeft',
  rotateIn: 'rotateIn',
  rotateInDownLeft: 'rotateInDownLeft',
  rotateInDownRight: 'rotateInDownRight',
  rotateInUpLeft: 'rotateInUpLeft',
  rotateInUpRight: 'rotateInUpRight',
  rotateOut: 'rotateOut',
  rotateOutDownLeft: 'rotateOutDownLeft',
  rotateOutDownRight: 'rotateOutDownRight',
  rotateOutUpLeft: 'rotateOutUpLeft',
  rotateOutUpRight: 'rotateOutUpRight',
  hinge: 'hinge',
  jackInTheBox: 'jackInTheBox',
  rollIn: 'rollIn',
  rollOut: 'rollOut',
  zoomIn: 'zoomIn',
  zoomInDown: 'zoomInDown',
  zoomInLeft: 'zoomInLeft',
  zoomInRight: 'zoomInRight',
  zoomInUp: 'zoomInUp',
  zoomOut: 'zoomOut',
  zoomOutDown: 'zoomOutDown',
  zoomOutLeft: 'zoomOutLeft',
  zoomOutRight: 'zoomOutRight',
  zoomOutUp: 'zoomOutUp',
  slideInDown: 'slideInDown',
  slideInLeft: 'slideInLeft',
  slideInRight: 'slideInRight',
  slideInUp: 'slideInUp',
  slideOutDown: 'slideOutDown',
  slideOutLeft: 'slideOutLeft',
  slideOutRight: 'slideOutRight',
  slideOutUp: 'slideOutUp',
};

export type AnimationEffect = keyof typeof ANIMATION_KEYFRAMES;

export const DATA_ID = 'data-rva';
export const DATA_ANIMATION_EFFECT = `${DATA_ID}_animation_effect`;
export const DATA_ANIMATION_DURATION = `${DATA_ID}_animation_duration`;
export const DATA_ANIMATION_DELAY = `${DATA_ID}_animation_delay`;
