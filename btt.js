async (clipboardContentString) => {
  const shellScriptWrapper = {
    script: `PATH=/usr/local/bin/ npx clipboard-ts`,
    launchPath: `/bin/zsh`,
  };

  const result = await runShellScript(shellScriptWrapper);
  return result;
};
