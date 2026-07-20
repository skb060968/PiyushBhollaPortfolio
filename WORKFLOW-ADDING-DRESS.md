# WORKFLOW: Adding New Dress to Collection

This document explains the complete step-by-step process for adding a new dress to the Portfolio Website collection.

---

## Step 1: Prepare Your Images
- Have 2-4 PNG images of the dress ready
- Name them anything (e.g., `photo1.png`, `photo2.png`, etc.)
- The script will handle renaming automatically

---

## Step 2: Create Folder Structure
Create a new folder for your dress:
```
public/images/collection-lookbook/shop/items/{dress-name}/
```

**Example:**
```
public/images/collection-lookbook/shop/items/23dress/
```

---

## Step 3: Add PNG Images
- Copy your 2-4 PNG images into the folder you created
- Don't worry about file naming - the script will handle it
- Original names don't matter (can be `IMG_001.png`, `photo1.png`, etc.)

---

## Step 4: Run the Master Script
Run the automated image processing script:
```bash
npm run process-images
```

### What This Script Does Automatically:
1. ✅ Converts all PNG images to WebP format
2. ✅ Renames them to `{dress-name}-1.webp`, `{dress-name}-2.webp`, etc.
3. ✅ Generates thumbnails in `public/images/collection-lookbook/shop/thumbnails/{dress-name}/`
4. ✅ Automatically updates `lib/data/projects.ts` with the new dress entry

**Note:** The script is idempotent - safe to run multiple times with no harm.

---

## Step 5: Assign Dress to a Collection (Manual Step)

Edit `lib/data/collections.ts` and add the dress slug to the appropriate collection's `projects` array.

### Existing Collections:

1. **valley-of-flowers**
   - Menswear, All Seasons
   - Description: A menswear collection transforming the fleeting beauty of the Valley of Flowers
   - Current dresses: 3dress, 4dress, 6dress, 19dress, 20dress, 21dress

2. **nawab-nouveau**
   - Menswear, Fall/Winter 2026
   - Description: Tailored pieces for the modern man who values quality and timeless elegance
   - Current dresses: 5dress

3. **after-hours**
   - Womenswear, Spring/Summer 2026
   - Description: Womenswear collection inspired by electric spirit of London's Nightlife
   - Current dresses: 10dress, 11dress, 12dress, 14dress, 15dress, 17dress, 18dress, 22dress

4. **the-glimmering-cage**
   - Fall/Winter Couture 2026
   - Description: This collection symbolizes the tension between limitation and artistic expression
   - Current dresses: 1dress, 2dress

5. **nirvikara-the-untainted**
   - Resort 2026
   - Description: A craft based collection inspired by a Lotus reflecting the human journey of growing
   - Current dresses: 7dress, 8dress, 13dress, 16dress

6. **neel-kamal**
   - Spring/Summer 2026
   - Description: The transformation of an authentic handloom saree inspired by a Blue Lotus
   - Current dresses: 9dress

### Example: Adding "23dress" to "after-hours" collection

Open `lib/data/collections.ts` and update:

```typescript
{
  slug: "after-hours",
  name: "After Hours",
  season: "Spring/Summer 2026",
  description: "Womenswear collection inspired by electric spirit of London's Nightlife.",
  coverImage: "/images/collection-lookbook/after-hours.webp",
  projects: ["10dress", "11dress", "12dress", "14dress", "15dress", "17dress", "18dress", "22dress", "23dress"], // Added 23dress
},
```

---

## Step 6: Create New Collection (Optional)

If the dress doesn't fit any existing collection, you can create a new collection.

Add a new entry to the `collections` array in `lib/data/collections.ts`:

```typescript
{
  slug: "new-collection-slug",
  name: "New Collection Name",
  season: "Season/Year",
  description: "Description of the collection theme and inspiration",
  coverImage: "/images/collection-lookbook/new-collection.webp",
  projects: ["23dress"],
},
```

**Note:** You'll also need to add a cover image for the new collection at:
`public/images/collection-lookbook/new-collection.webp`

---

## Step 7: Verify Changes

Before committing, verify:
- ✅ WebP images created in `/items/{dress-name}/`
- ✅ Thumbnails created in `/thumbnails/{dress-name}/`
- ✅ `lib/data/projects.ts` has the new dress entry
- ✅ `lib/data/collections.ts` has the dress assigned to a collection

---

## Step 8: Commit and Push

Stage and commit all the changes:

```bash
git add lib/data/projects.ts
git add lib/data/collections.ts
git add public/images/collection-lookbook/shop/items/23dress/
git add public/images/collection-lookbook/shop/thumbnails/23dress/
git commit -m "Add new dress: 23dress to after-hours collection"
git push
```

---

## Quick Reference

### Files Modified:
- `lib/data/projects.ts` - Auto-updated by script
- `lib/data/collections.ts` - Manual edit required
- `public/images/collection-lookbook/shop/items/{dress}/` - Auto-created by script
- `public/images/collection-lookbook/shop/thumbnails/{dress}/` - Auto-created by script

### Commands:
```bash
# Process all images (conversion, thumbnails, data update)
npm run process-images

# Individual scripts (if needed)
npm run convert-webp
npm run generate-shop
npm run update-projects
npm run update-collections
```

---

## Troubleshooting

### Script doesn't find my images
- Make sure PNG files are in the correct folder: `public/images/collection-lookbook/shop/items/{dress-name}/`
- Run `npm run process-images` again

### Dress not showing on website
- Check that dress is assigned to a collection in `lib/data/collections.ts`
- Check that the projects array includes your dress slug
- Rebuild the site if running dev server

### Wrong number of images
- Delete all WebP files in the dress folder
- Delete PNG files you don't want
- Add correct PNG files
- Run `npm run process-images` again

---

## Summary

**Automated Steps (by script):**
- ✅ PNG to WebP conversion
- ✅ File renaming
- ✅ Thumbnail generation
- ✅ Update `projects.ts`

**Manual Steps (required):**
- ✅ Create folder structure
- ✅ Add PNG images
- ✅ Assign dress to collection in `collections.ts`
- ✅ Commit and push changes

**Total Time:** ~5 minutes per dress
