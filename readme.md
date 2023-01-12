## Clipboard TS

This script will take TS via argv[2], convert to JS and pass back via process.stdout

Meant to be used with automation apps like Better Touch Tool to make a "Paste as JS" keyboard shortcut.

This package will probably be obsolete once @swc/cli fixes their M1 integration since it should be all doable via the CLI.

# Usage

Feel free to add setups for different apps.

To test on the CLI, you can use `npx clipboard-ts`, but installing it globally will be MUCH faster.

`npm i -g clipboard-ts`

Then run

```
clipboard-ts "const x:number = 100; document.querySelector<HTMLDivElemet>('.div')"
```

## Better Touch Tool

1. Go to `Automations and Other Triggers` (⌘9)
2. Press the `+` Create a trigger with the type of "Clipboard Manager / JavaScript Transformer"
3. Name it `Convert TS to JS`
4. paste the code from [./btt.js](./btt.js) into the "Clipboard Transformer Funciton (JavaScript)"
5. Go to Keyboard Shortcuts (⌘4)
6. Create a new trigger, with the type of "Paste Specific items....".
7. Give it a good keyboard shortcut.
8. In the 1st box, put 1
9. in the 3rd dropbox, select your "Convert TS to JS"

Now copy some ts, and try paste it.
