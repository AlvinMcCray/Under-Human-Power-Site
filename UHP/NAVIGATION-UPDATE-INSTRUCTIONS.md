# Adding "Trail Journal" to Navigation Menu

Since your project files are read-only in this environment, here's what you need to do in VS Code:

## Step 1: Update Navigation on ALL Pages

Open each of these files in VS Code:
- index.html
- about.html  
- journey.html
- sponsors.html
- trail-journal.html (the new file you just downloaded)

## Step 2: Find the Navigation Section

Look for this part in each file:

```html
<ul class="nav-links">
    <li><a href="index.html">Home</a></li>
    <li><a href="journey.html">Journey</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="sponsors.html">Sponsors</a></li>
</ul>
```

## Step 3: Add Trail Journal Link

Insert the Trail Journal link after Journey:

```html
<ul class="nav-links">
    <li><a href="index.html">Home</a></li>
    <li><a href="journey.html">Journey</a></li>
    <li><a href="trail-journal.html">Trail Journal</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="sponsors.html">Sponsors</a></li>
</ul>
```

## Step 4: Set Active State

On each page, make sure the correct link has `class="active"`:

**On index.html:**
```html
<li><a href="index.html" class="active">Home</a></li>
```

**On journey.html:**
```html
<li><a href="journey.html" class="active">Journey</a></li>
```

**On trail-journal.html:**
```html
<li><a href="trail-journal.html" class="active">Trail Journal</a></li>
```

**On about.html:**
```html
<li><a href="about.html" class="active">About</a></li>
```

**On sponsors.html:**
```html
<li><a href="sponsors.html" class="active">Sponsors</a></li>
```

## Step 5: Add CSS to style.css

Open your `style.css` file and paste the CSS from `trail-journal-styles.css` at the very end of the file.

## Done!

Your navigation menu will now show:
Home → Journey → Trail Journal → About → Sponsors

Save all files and refresh your browser to see the changes!
