# Sveltekit Minimalist Template

A minimalist [Sveltekit](https://kit.svelte.dev/) template with only:

- [P69](https://github.com/PaulioRandall/p69) CSS Compile Time Tokens
- [Prettier](https://prettier.io/) Formatter

## Getting started

### 1. Install Node v18.16.0

By either:

1. Installing [nvm](https://github.com/nvm-sh/nvm) then:

```bash
nvm install 18.16.0
nvm use 18.16.0
```

2. Installing [Node v18.16.0 directly](https://nodejs.org/en/download/).

### 2. Fork and clone

Or clone it first to try out:

```bash
git clone https://github.com/PaulioRandall/sveltekit-minimalist-template.git
cd sveltekit-minimalist-template
```

### (Optional) 3. Delete the lock file

For good measure:

```bash
rm -f package-lock.json
```

### 4. Update package metadata

Update `package.json` with your project name, repository url, and other metadata.

### (Optional) 5. Update dependencies

Including the node version if possible. For most teams it's wise to stay on an LTS version and not upgrade until the next LTS version
is both stable and your dependencies are compatible.

### 6. Install dependencies

```bash
npm i
```

### 7. Run in dev mode

```bash
npm run dev
```

### 8. Visit the site

Start modifying at [localhost:3000](http://localhost:3000).

### 9. Commit changes

When you are ready to commit and push changes use the following command to do a full format, build, and test.

```bash
npm run commit
```

You'll know if everything is good because you'll get a curated ASCII scene. This can be changed by modifying `./scripts/youre-ready-to-ship.txt`:

```bash
                                                ...oo000o.
                                                          00oo.
___ _________  _________  ______  __________  _________        oo.
 -- |       |  |       |  |    |  |        |  |       |  _____    o
___ |       |  | Ready |  | To |  |  Ship  |  |       |  |__D|____][_
 -- |_______|%%|_______|%%|____|%%|________|%%|_______|%%|_~~~~++++~_}
     @~~@~~@    @~~@~~@    @~~@    @~@~~@~@    @~~@~~@    @~~@~~~@~~@
```

## Customise formatting

Modify `.prettierrc.json` to customise styling. Or replace Prettier with your preferred tool.

## Production build warning

```bash
Could not detect a supported production environment...
```

Don't worry if you get a build warning like the one above.

When the time comes to deploy to development and production environments you'll want to research [SvelteKit adapters](https://kit.svelte.dev/docs/adapters).

I use Vercel to host my personal website so I use [@sveltejs/adapter-vercel](https://www.npmjs.com/package/@sveltejs/adapter-vercel). There are many others and you can write your own. I've written a custom Express adapter before and it's not too difficult; just a little tedious because they're not easy to test.
