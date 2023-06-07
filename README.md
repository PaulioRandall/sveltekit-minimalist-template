# Sveltekit Minimalist Template

A minimalist [Sveltekit](https://kit.svelte.dev/) template with only [Prettier](https://prettier.io/) and a few sparse components and pages included.

## Getting started

1. Install [Node v18.16.0](https://nodejs.org/en/download/) (I recommend [nvm](https://github.com/nvm-sh/nvm) if you can).

2. Fork then clone the repo:

```bash
git clone https://github.com/PaulioRandall/sveltekit-minimalist-template.git
cd sveltekit-minimalist-template
```

3. Update project name in `package.json` with your project name.

4. Delete the lock file for good measure:

```bash
rm -f package-lock.json
```

5. Install dependencies and run in dev mode:

```bash
npm i
npm run dev
```

5. Start programming [localhost:3000](http://localhost:3000)

6. When you are ready to commit and push changes use:

```bash
npm run commit
```

You'll know if everything is good because you'll get a curated ASCII scene. This can be changed by modifying `./scripts/well-done.txt`:

```bash
                                       ...oo000o.
                                                 00oo.
  __________  _________  ______  _____________        oo.
  |        |  |       |  |    |  |           |  _____    o
  | You're |  | Ready |  | To |  | Integrate |  |__D|____][_
  |________|%%|_______|%%|____|%%|___________|%%|_~~~~++++~_}
   @~@~~@~@    @~~@~~@    @~~@    @~~@~~~@~~@    @~~@~~~@~~@
```

## Full list of commands

- **`npm run fmt`** Format everything
- **`npm run clean`** Delete build folder and caches
- **`npm run build`** Build the project
- **`npm run dev`** Runs in developer mode
- **`npm run preview`** Builds project and starts as if it was in production
- **`npm run commit`** Do all checks needed to confirm the project is ready for commit

## Stuck or curious

#### Format code?

```bash
npm run fmt
```

Modify `.prettierrc.json` to customise styling. Or replace Prettier with your preferred formatting tool.

#### Delete build directory?

```bash
npm run clean
```

#### Production build warning

```bash
	Could not detect a supported production environment...
```

Don't worry if you get a build warning like the one above.

When the time comes to deploy to development and production environments you'll want to research [SvelteKit adapters](https://kit.svelte.dev/docs/adapters).

Since I use Vercel to host my personal website I use [@sveltejs/adapter-vercel](https://www.npmjs.com/package/@sveltejs/adapter-vercel). There are many others and you can write your own. I've written a custom Express adapter before and it's not too difficult; just a little tedious due to extra work needed to test it.
