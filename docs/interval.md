# interval
Usage:
```javascript
/* Start interval */
let loop = mobjutil.interval(callback, milliseconds [, times]);

/* Stop interval */
loop.stop();
```
Creating a new loop works like the normal javascript `setInterval()` function. Stopping it is done using the `.stop()` method.
This smart loop waits for it's callback to have been executed before running again, reducing lag and thread clutter.