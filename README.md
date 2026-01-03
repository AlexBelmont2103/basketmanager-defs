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

## Publishing

Publishing is handled by CI when a tag matching `contracts-v*` is pushed.

1) Publish an existing version by pushing a tag matching `contracts-v*`.

Example:

```bash
git tag contracts-v0.1.0
git push origin contracts-v0.1.0
```

2) Or use the **Release** workflow (workflow_dispatch) to bump the version and create/push the tag; CI will publish automatically from that tag.
