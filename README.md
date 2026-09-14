# Portfolio

A single-page static portfolio. No build step, no dependencies — open `index.html` in a
browser and it works.

```
index.html   the whole page (content lives here, in plain HTML)
styles.css   design tokens and layout
.nojekyll    tells GitHub Pages to serve the files as-is
```

## Editing

**Content** is plain HTML in `index.html`, grouped into four sections: Flagship, Selected
work, Open source, What I work with.

To add a project, copy an existing `<article class="entry">` block and edit it. Each entry
has the same four parts:

```html
<article class="entry">
  <p class="state is-open">public</p>          <!-- left rail label; drop is-open for closed work -->
  <div>
    <h3><a href="...">Project name</a></h3>     <!-- omit the <a> if there is nothing to link -->
    <p>One or two sentences on what it does and why.</p>
    <p class="stack">Comma, separated, stack</p>
    <p class="repo"><a href="...">link text</a></p>   <!-- omit entirely for private work -->
  </div>
</article>
```

**Redactions.** Client and employer names that can't be published are rendered as a solid
block instead of being silently dropped:

```html
<span class="redact" style="--w:13ch"><span class="sr-only">a client name, redacted</span></span>
```

Set `--w` to roughly the length of the hidden name. The `sr-only` span is what a screen
reader announces, so keep it generic — never put the real name there.

**Colors and type** are CSS custom properties at the top of `styles.css`, with a light-mode
set right below. The page follows the visitor's OS theme.

## To do

`index.html` has a commented-out LinkedIn line in the contact list. Uncomment it and fill in
your handle.

## Deploying to GitHub Pages

Either works:

**Option A — a user site at `baajayi.github.io`**

```bash
cd /home/bam/portfolio
git init && git add -A && git commit -m "Portfolio"
gh repo create baajayi.github.io --public --source=. --push
```

Pages turns on automatically for a `USERNAME.github.io` repo. Live in a minute or two at
`https://baajayi.github.io`.

**Option B — a project site**

```bash
cd /home/bam/portfolio
git init && git add -A && git commit -m "Portfolio"
gh repo create portfolio --public --source=. --push
gh api -X POST repos/baajayi/portfolio/pages -f 'source[branch]=main' -f 'source[path]=/'
```

Live at `https://baajayi.github.io/portfolio`.

Netlify and Vercel also work with no configuration — drop the folder in, no build command,
publish directory `.`.
