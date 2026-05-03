/**
 * demo-no-access.mjs
 *
 * Simulates a developer with no access to the private @yleisradio /
 * @yle-interactive npm registry, then proves the project builds anyway.
 *
 * pnpm fetches packages using the hardcoded tarball URLs in pnpm-lock.yaml,
 * bypassing .npmrc registry config entirely, so we can't prevent the install
 * on a machine whose Keychain has credentials. Instead we:
 *
 *  1. Install normally (all packages land)
 *  2. Surgically remove the private packages from node_modules
 *  3. Run pnpm build-dev — must succeed using vendor/ alone
 */

import { execSync } from 'child_process';
import { rmSync, readdirSync } from 'fs';
import { join } from 'path';

const run = (cmd) => execSync(cmd, { stdio: 'inherit' });

// 1. Fresh install
console.log('\n── Step 1: fresh pnpm install ───────────────────────────────────────');
rmSync('node_modules', { recursive: true, force: true });
run('pnpm install');

// 2. Remove private packages from node_modules
console.log('\n── Step 2: remove private packages from node_modules ────────────────');
const privateScopes = ['@yleisradio', '@yle-interactive'];

for (const scope of privateScopes) {
  rmSync(join('node_modules', scope), { recursive: true, force: true });
  console.log(`  removed node_modules/${scope}`);
}

// Also remove from pnpm's virtual store
const pnpmDir = join('node_modules', '.pnpm');
for (const entry of readdirSync(pnpmDir)) {
  if (privateScopes.some((s) => entry.startsWith(s.replace('/', '+')))) {
    rmSync(join(pnpmDir, entry), { recursive: true, force: true });
    console.log(`  removed node_modules/.pnpm/${entry}`);
  }
}

// 3. Build — must succeed via vendor/
console.log('\n── Step 3: build-dev (no private packages in node_modules) ─────────');
run('pnpm build-dev');

console.log('\n✓ No-access demo complete — build succeeded using vendor/ alone.\n');
