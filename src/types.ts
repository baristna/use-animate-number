import * as easings from './easingFunctions';

export type oneOfEasingType = keyof typeof easings

export type IeasingFunction = (
	elapsed: number,
	initialValue: number,
	amountOfChange: number,
	duration: number,
	s?: number
) => number

export interface IuseAnimateNumberOptions {
  duration?: number;
  enterance?: boolean;
  direct?: boolean;
  disabled?: boolean;
  easing?: oneOfEasingType;
  decimals?: number;
}

export type IuseAnimateNumber = (
  val: number,
  options?: IuseAnimateNumberOptions,
) => [number, (state:number, skip: boolean) => void]

export type ITimerRef = ReturnType<typeof setTimeout>
