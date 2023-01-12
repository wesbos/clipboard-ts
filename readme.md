## Clipboard TS

This scirpt will take TS vis stdin, convert to JS and pass back via process.stdout

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
