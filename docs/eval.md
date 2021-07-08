# fEval
Usage:
```javascript
mobjutil.feval(string);
``` 
Produces output like a normal javascript eval, but it works bu turning the input string into an [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE), making it faster than the standard js eval. [EVAL IS STILL EVIL](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#never_use_eval!) AND SHOULD ONLY BE USED IF NO OTHER OPTIONS ARE PRESENT.