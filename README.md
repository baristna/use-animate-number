# useAnimateNumber react hook

<a href="https://www.npmjs.com/package/use-animate-number"><img alt="npm" src="https://img.shields.io/npm/v/use-animate-number.svg"></a>

A <a href="https://reactjs.org/docs/hooks-intro.html">React Hook</a> for making value change smoothly to create animation base

<hr />

<a href="#installation">Installation</a> |
<a href="#options">Options</a> |
<a href="#skip-animation">Skip Animation</a> |

<hr/>

When creating a custom animation with react, `useAnimateNumber` hook handle tha value change from the start value
to the end smoothly with easing functions.


### Installation
```
$ yarn add use-animate-number
```

It's like `useState` with `number` type.<br /><br />


Import
```js
import useAnimateNumber from 'use-animate-number';
```

Usage
```js
const Component = () => {
  const [value, setValue] = useAnimateNumber(0, options)
  return (...)
}
```


### Options

`options` object can be passed as second argument of the function to customize the animation.
Here are the default options;

```js
{
  duration: 1000,
  enterance: true,
  direct: false,
  disabled: false,
  decimals: 2;
}
```
| Name      | Type    | Default | Description                                                                                                 |
|-----------|---------|---------|-------------------------------------------------------------------------------------------------------------|
| duration  | number  | 1000    | Duration of animation to be done in milliseconds                                                            |
| enterance | boolean | true    | Will run animation to initial value from 0 at start.                                                        |
| direct    | boolean | false   | For simple usage, instead of using update function, it will animate the value when initial argument is set. |
| disabled  | boolean | false   | Disable the animation and value change will be done instantly.                                              |
| decimals  | number  | 2       | The decimal to be included to the calculation.                                                              |



### options.direct
If you don't need extra logic, you can ignore using the update function by setting `direct` option.

```js
const [animateValue] = useAnimateNumber(0, { direct: true });
```

### Skip Animation
To skip animation for a state update, second argument can be used.

```js 
const [value, setValue] = useAnimateNumber(0);

setCurrentValue(0, true); // It will instantly set the value as 0 in no time
setCurrentValue(100); // It will work as usual
```
