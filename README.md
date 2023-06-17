# Sveltekit Minimalist Template

A minimalist [Sveltekit](https://kit.svelte.dev/) template with only [Prettier](https://prettier.io/) and a few sparse components and pages.

## Full list of commands

| Command | Description |
| --- | :--- |
| **`npm run fmt`** | Format everything |
| **`npm run clean`** | Delete build directory |
| **`npm run build`** | Build the project |
| **`npm run dev`** | Runs in developer mode |
| **`npm run preview`** | Builds project and starts as if it was in production |
| **`npm run commit`** | Do all checks needed to confirm changes are ready for integration |

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

You'll know if everything is good because you'll get a curated ASCII scene. This can be changed by modifying `./scripts/youre-ready-to-integrate.txt`:

```bash
                                       ...oo000o.
                                                 00oo.
  __________  _________  ______  _____________        oo.
  |        |  |       |  |    |  |           |  _____    o
  | You're |  | Ready |  | To |  | Integrate |  |__D|____][_
  |________|%%|_______|%%|____|%%|___________|%%|_~~~~++++~_}
   @~@~~@~@    @~~@~~@    @~~@    @~~@~~~@~~@    @~~@~~~@~~@
```

## Customise formatting

Modify `.prettierrc.json` to customise styling. Or replace Prettier with your preferred tool.

## Production build warning

```bash
Could not detect a supported production environment...
```

Don't worry if you get a build warning like the one above.

When the time comes to deploy to development and production environments you'll want to research [SvelteKit adapters](https://kit.svelte.dev/docs/adapters).

Since I use Vercel to host my personal website I use [@sveltejs/adapter-vercel](https://www.npmjs.com/package/@sveltejs/adapter-vercel). There are many others and you can write your own. I've written a custom Express adapter before and it's not too difficult; just a little tedious because they are not easy to test.
