# UPDATE NAVIGATION ON ALL EXISTING PAGES

You need to update the navigation on these pages:
- index.html
- about.html
- journey.html
- sponsors.html

## Find this section in each file:

```html
<ul class="nav-links">
    <li><a href="index.html">Home</a></li>
    <li><a href="journey.html">Journey</a></li>
    <li><a href="trail-journal.html">Trail Journal</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="sponsors.html">Sponsors</a></li>
</ul>
```

## Replace with this:

```html
<ul class="nav-links">
    <li><a href="index.html">Home</a></li>
    <li><a href="journey.html">Journey</a></li>
    <li class="dropdown">
        <a href="trail-journal.html">Trail Journal</a>
        <ul class="dropdown-menu">
            <li><a href="photo-gallery.html">Photo Gallery</a></li>
            <li><a href="maps-gps.html">Maps & GPS Data</a></li>
            <li><a href="journal-entries.html">Journal Entries</a></li>
            <li><a href="guestbook.html">Guestbook</a></li>
        </ul>
    </li>
    <li><a href="about.html">About</a></li>
    <li><a href="sponsors.html">Sponsors</a></li>
</ul>
```

## Important:
- Make sure the correct page has `class="active"` on its link
- For example, on index.html, the Home link should have `class="active"`
- On about.html, the About link should have `class="active"`
