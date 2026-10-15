# 💕 Hearty Proposer

A romantic multi-page website to propose your feelings to your loved one.

## How to run

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## Adding your photo (Gift page)

1. Drop your photo into the `public/` folder and name it `gift-photo.jpg`  
   *(or any extension — just update the `IMAGE_SRC` constant in `src/pages/GiftPage.jsx`)*
2. The image will display full-screen on the Gift page.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — proposal with Yes/No buttons |
| `/yes` | Thank-you message |
| `/gift` | Apology + your photo |
| `/birthday` | Full birthday message |

## Build for production

```bash
npm run build
npm run preview
```
"# hearty-proposer" 
