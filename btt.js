async (clipboardContentString) => {
  function encode(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, (c) => `%${c.charCodeAt(0).toString(16)}`);
  }
  const code = encode(clipboardContentString);
  const shellScriptWrapper = {
    script: `PATH=/usr/local/bin/ /Users/wesbos/Videos/hot-tips/code/clipboard-ts/clipboard-ts.js ${code}`,
    launchPath: `/bin/zsh`,
  };

  const result = await runShellScript(shellScriptWrapper);
  return result;
};
