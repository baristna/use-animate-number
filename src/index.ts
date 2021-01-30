import { useEffect, useState, useRef } from 'react';
import * as easings from './easingFunctions';
import {
  IuseAnimateNumber,
  IeasingFunction,
  ITimerRef
} from './types';

const initTimer = setTimeout(() => null, Math.max());

const useAnimateNumber:IuseAnimateNumber = (
  initial = 0,
  options,
) => {
  const conf = {
    duration: options?.duration ?? 1000,
    enterance: options?.enterance ?? true,
    direct: options?.direct ?? false,
    disabled: options?.disabled ?? false,
    easing: options?.easing ?? 'easeInOutQuad',
    decimals: options?.decimals ?? 2,
  };

  const increment = 20;
  const [animationInfo, setAnimationInfo] = useState({
    value: initial,
    skip: conf.disabled || !conf.enterance,
  });
  const [currentTime, setCurrentTime] = useState(conf.duration + 100);
  const [currentValue, setCurrentValue] = useState(0);
  const timer = useRef<ITimerRef>(initTimer);
  const clearTm = () => timer && clearTimeout(timer.current);

  // Clear timer at load and unload
  useEffect(() => {
    clearTm();
    return () => clearTm();
  }, []);

  useEffect(() => {
    if (conf.direct) {
      clearTm();
      setAnimationInfo({ value: initial, skip: conf.disabled });
    }
  }, [initial]);

  // Start animation: clear previous timer, setTime to zero
  useEffect(() => {
    if (animationInfo.skip) {
      setCurrentValue(animationInfo.value || 0);
    } else {
      setCurrentTime(0);
    }
  }, [animationInfo]);

  const easingFn:IeasingFunction = (...args) => easings[conf.easing](...args);

  const handleValueSet = (value: number, skip = conf.disabled) => {
    clearTm();
    // wrapped by timeout to get all of the function calls simultaneously
    setTimeout(() => {
      setAnimationInfo({ value, skip });
    }, 1);
  };

  // Animation frame for each currentTime change.
  useEffect(() => {
    if (currentTime < conf.duration) {
      setCurrentValue(
        easingFn(
          currentTime,
          currentValue,
          (animationInfo.value - currentValue),
          conf.duration
        )
      );
      timer.current = setTimeout(() => {
        // trigger animation frame effect by increasing currentTime
        setCurrentTime(currentTime + increment);
      }, increment);
    }
  }, [currentTime]);

  return [parseFloat((currentValue).toFixed(conf.decimals)), handleValueSet];
};

export default useAnimateNumber
