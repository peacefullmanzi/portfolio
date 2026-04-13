# Your Portfolio

A minimalistic, high-end portfolio built with Next.js, Framer Motion, and Tailwind CSS.

## 🚀 Getting Started Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Add your profile picture:**
   - Take the image you uploaded, ensure it is named `profile.jpg`.
   - Place it inside the `public/` directory if not already there (e.g., `public/profile.jpg`).
   - The application will automatically pick it up and display it in the Hero section!

## 🐙 GitHub Workflow

Learning how to push your code to GitHub is essential. Here is a step-by-step guide.

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   ```

2. **Make your first commit:**
   ```bash
   git commit -m "Initial commit: Set up Next.js portfolio"
   ```

3. **Create a remote repository on GitHub:**
   - Go to GitHub and click **New Repository**.
   - Do NOT check "Initialize with README" or `.gitignore` since you already have them.

4. **Connect and push:**
   Replace the URL with your new repository URL.
   ```bash
   git remote add origin https://github.com/your-username/portfolio.git
   git branch -M main
   git push -u origin main
   ```

Whenever you make changes, repeat the simplified flow:
```bash
git add .
git commit -m "Describe what you changed"
git push
```

## 🔥 Deploying to Firebase Hosting

Firebase Hosting is incredibly fast and perfect for Next.js applications (Firebase now supports Web Frameworks including Next.js natively, or you can do a static export).

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase:**
   ```bash
   firebase login
   ```

3. **Initialize Firebase in this project:**
   ```bash
   firebase init hosting
   ```
   *Follow the prompts:*
   - Choose your Firebase project.
   - When asked if you want to use a web framework, say **Yes** (it will detect Next.js).
   - Alternatively, you can use Next.js static export by changing `next.config.ts`. If standard Hosting: select `.next` or follow the experimental web frameworks prompt.

4. **Deploy your app:**
   ```bash
   firebase deploy --only hosting
   ```

Your site is now live!
