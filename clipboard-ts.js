#! /usr/bin/env node
import { transformSync } from '@swc/core';

const maybeTs = decodeURIComponent(process.argv[2]);
// This entire file can be removed when npx swc is working on mac M1.
try {
  const output = transformSync(maybeTs, {
    jsc: {
      parser: { syntax: `typescript` },
      target: `es2022`,
    },
  });
  process.stdout.write(output.code);
} catch (err) {
  console.log(err);
  const result = `/* TypeScript Failed to transform - did ya goof it up? Here is what you gave me */
    ${maybeTs}
  `;
  process.stdout.write(result);
}
