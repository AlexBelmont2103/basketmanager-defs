# @alexbelmont2103/contracts

Shared TypeScript types (API contracts) for BasketManager.

## Install (GitHub Packages)

1) Create or update your project `.npmrc`:

```ini
@alexbelmont2103:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
```

2) Authenticate

Recommended (local): use GitHub CLI to source `NODE_AUTH_TOKEN` automatically:

```bash
gh auth login
gh auth refresh -s read:packages

NODE_AUTH_TOKEN="$(gh auth token)" npm i @alexbelmont2103/contracts
```

Alternative: use a GitHub token (PAT) with at least `read:packages` and export it as `NODE_AUTH_TOKEN` before installing.

### Troubleshooting

- `E401 Unauthorized`
	- `gh auth status`
	- `gh auth refresh -s read:packages`
- `E404 Not Found` from `registry.npmjs.org` for `@alexbelmont2103/contracts`
	- Confirm your `.npmrc` contains `@alexbelmont2103:registry=https://npm.pkg.github.com/`.

## Usage

```ts
import type { MatchDTO, MatchEventDTO, MatchFrameDTO, CourtSnapshot } from '@alexbelmont2103/contracts';
```

## Development

- Build (cleans `dist/` first):
	- `npm run build`

## Publishing

Publishing is handled by CI when a tag matching `contracts-v*` is pushed.

### Best practice (recommended)

Use `npm version` so `package.json` and the tag stay in sync.

```bash
# patch/minor/major all work
npm version patch --tag-version-prefix contracts-v

# push commits + the newly-created tag
npm run push:with-tags
```

`npm run push:with-tags` runs `git push && git push --follow-tags`.

### Tag-only publishing (CI will set the npm version)

If you manually create a tag, CI will derive the npm version from the tag name (e.g. `contracts-v0.1.2` → `0.1.2`) during the publish job.

```bash
git tag -a contracts-v0.1.2 -m "contracts v0.1.2"
git push origin contracts-v0.1.2
```

Notes:
- You cannot publish over an existing version (you’ll get `npm ERR! 409 Conflict`). Create a new version/tag instead.
- Avoid reusing/moving tag names once pushed.
