import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schema} from './sanity/schemaTypes'
import {structure} from './sanity/structure'

// These are hardcoded here because sanity.config.ts runs in Vite's browser
// context where process.env is not available. The project ID is not a secret.
export default defineConfig({
  name: 'default',
  title: 'Mark DeKraker',
  projectId: 'c8fatw9j',
  dataset: 'production',
  plugins: [structureTool({structure}), visionTool()],
  schema,
})
