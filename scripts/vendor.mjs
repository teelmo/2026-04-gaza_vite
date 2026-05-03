/**
 * vendor.mjs
 *
 * Copies private @yleisradio and @yle-interactive packages from node_modules
 * into vendor/ so developers without access to the private npm registry can
 * still build the project.
 *
 * Run once (by whoever has registry access), then commit vendor/ to git.
 * Usage: pnpm vendor
 *
 * NOTE: Node's cpSync({dereference:true}) only dereferences the top-level
 * source, not symlinks encountered during recursive traversal. We use the
 * shell `cp -RL` flag instead, which fully resolves every symlink at every
 * level — essential because pnpm stores packages as deeply nested symlinks
 * inside node_modules/.pnpm/...
 */

import { execSync } from 'child_process';
import { rmSync, mkdirSync } from 'fs';

// Start fresh so stale files from previous runs don't linger
rmSync('vendor', { recursive: true, force: true });
mkdirSync('vendor', { recursive: true });

// -R  recursive
// -L  dereference ALL symlinks (follow them, copy the real files)
execSync('cp -RL node_modules/@yleisradio vendor/@yleisradio');
console.log('✓ Vendored node_modules/@yleisradio → vendor/@yleisradio');

execSync('cp -RL node_modules/@yle-interactive vendor/@yle-interactive');
console.log('✓ Vendored node_modules/@yle-interactive → vendor/@yle-interactive');

console.log('\nDone. Commit vendor/ to git.');
