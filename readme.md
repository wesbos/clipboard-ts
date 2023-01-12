## Clipboard TS

This script will take TS vis stdin, convert to JS and pass back via process.stdout

Meant to be used with automation apps like Better Touch Tool to make a "Paste as JS" keyboard shortcut.

This package will probably be obsolete once @swc/cli fixes their M1 integration since it should be all doable via the CLI.

# Usage

Feel free to add setups for different apps.

To test on the CLI:

```
echo "const x:number = 777; document.querySelector<HTMLDivElement>('.wrapper')" | npx clipboard-ts
```

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
