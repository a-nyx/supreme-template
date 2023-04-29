/** @type {import('next').NextConfig} */

import fs from 'fs';
import yaml from 'js-yaml';

let publicConfigs;
let serverConfigs;

try {
  publicConfigs = yaml.load(fs.readFileSync('./public.config.yaml', 'utf8'));
} catch (e) {
  publicConfigs = {};
  console.log(`public configs couldn't load`, e);
}

try {
  serverConfigs = yaml.load(fs.readFileSync('./server.config.yaml', 'utf8'));
} catch (e) {
  serverConfigs = {};
  console.log(`server configs couldn't load`, e);
}

const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: publicConfigs,
  serverRuntimeConfig: serverConfigs,
  env: {},
};

export default nextConfig;
