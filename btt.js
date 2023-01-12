async (clipboardContentString) => {
  function encode(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, (c) => `%${c.charCodeAt(0).toString(16)}`);
  }
  const code = encode(clipboardContentString);
  const shellScriptWrapper = {
    script: `PATH=/usr/local/bin/ clipboard-ts "${code}"`,
    launchPath: `/bin/zsh`,
  };

  const result = await runShellScript(shellScriptWrapper);
  return result;
};
