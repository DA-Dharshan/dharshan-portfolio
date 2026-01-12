
# Professional Portfolio Template

## How Contact Form Works (GitHub Pages Compatible)

This template uses **EmailJS**, which allows email sending directly from JavaScript without a backend.

### Setup Steps:
1. Go to https://www.emailjs.com/
2. Create a free account
3. Add your email service (Gmail, Outlook, etc.)
4. Create an email template
5. Copy:
   - Public Key
   - Service ID
   - Template ID
6. Paste them into `script.js`

```js
emailjs.init("YOUR_PUBLIC_KEY");
```

### Deploy on GitHub Pages
1. Upload all files to your GitHub repository
2. Go to **Settings → Pages**
3. Select branch → `main`
4. Your portfolio is live 🎉
