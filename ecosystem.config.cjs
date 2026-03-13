/** PM2 config: keeps MagmaLink dev server running. Start with: npm run dev:pm2 */
module.exports = {
  apps: [
    {
      name: 'magmalink-dev',
      script: 'node_modules/astro/astro.js',
      args: 'dev',
      cwd: __dirname,
      interpreter: 'node',
      autorestart: true,
      watch: false,
      env: { NODE_ENV: 'development' },
    },
  ],
};
