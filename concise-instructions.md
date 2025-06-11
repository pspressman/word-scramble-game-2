# Building & Deploying a React Word Scramble Game to Vercel

## 1. Setup Project Structure
```bash
mkdir -p word-scramble-game/src/components
mkdir -p word-scramble-game/public/images
cd word-scramble-game
```

## 2. Create Essential Files
- `package.json` - Contains React dependencies and scripts
- `.gitignore` - Excludes node_modules and build files
- `vercel.json` - Vercel deployment configuration
- React application files (in src directory)
- Public assets (in public directory)

## 3. Install Dependencies
```bash
npm install
```

## 4. Test Locally
```bash
npm start
```

## 5. Build for Production
```bash
npm run build
```

## 6. Version Control Setup
```bash
git init
git add .
git commit -m "Initial commit"
```

## 7. Create GitHub Repository
- Visit github.com and create a new repository
- Follow GitHub's instructions to push your project

## 8. Connect to GitHub
```bash
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

## 9. Deploy to Vercel
- Visit vercel.com and sign in
- Click "Import Project"
- Select your GitHub repository
- Ensure Vercel has access to your GitHub repository:
  - In GitHub, check Settings > Applications > Installed GitHub Apps
  - Verify Vercel has permission to your repositories

## 10. Troubleshooting Common Issues
- **"Repository not found"**: Check GitHub permissions for Vercel
- **Build failures**: Check for syntax errors or unused imports
- **CSS reference errors**: Ensure all CSS files exist for each component
- **Case sensitivity issues**: Ensure correct casing in file paths

## 11. After Deployment
- Vercel provides a deployment URL (yourproject.vercel.app)
- Test your application on the deployment URL
- You can configure custom domains in Vercel's project settings

## 12. Updating Your Deployed App
```bash
# Make changes to your code
git add .
git commit -m "Update description"
git push
```
Vercel will automatically redeploy when it detects changes in your GitHub repository.
