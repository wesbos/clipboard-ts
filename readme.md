## Clipboard TS

This scirpt will take TS in your clipboard, convert to JS and put it back in your clipboard.

Handy for pasting TS into environments that only support JS - like the dev tools.

Meant to be used with automation apps like Better Touch Tool to make a "Paste as JS" keyboard shortcut.

# Usage

Feel free to add setups for different apps

## Better Touch Tool

```js
async (clipboardContentString) => {
  const shellScriptWrapper = {
    script: `PATH=/usr/local/bin/ npx clipboard-ts`,
    launchPath: `/bin/zsh`,
  };

  const result = await runShellScript(shellScriptWrapper);
  return result;
};
```

https://cs.github.com/dvanoni/spotify-saver/blob/8df2b6bfe10f171b781ebea93d2e7ff0ce79b75a/btt/trigger.js?q=runShellScript+better+touch+tool

```js
async (clipboardContentString) => {
  //example
  return clipboardContentString.toUpperCase();
};
```
