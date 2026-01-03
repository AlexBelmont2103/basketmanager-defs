# @alexbelmont2103/contracts

Shared TypeScript types (API contracts) for BasketManager.

## Install (GitHub Packages)

1) Create or update your frontend repo `.npmrc`:

```ini
@alexbelmont2103:registry=https://npm.pkg.github.com
```

2) Authenticate (one-time):

- Create a GitHub Personal Access Token (classic) with at least: `read:packages`.
- Then login:

```bash
npm login --registry=https://npm.pkg.github.com
```

3) Install:

```bash
npm i @alexbelmont2103/contracts
```

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
