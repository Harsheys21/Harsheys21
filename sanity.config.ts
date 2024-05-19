import { defineConfig} from 'sanity';
import { deskTool} from 'sanity/desk';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision'
import schemas from './sanity/schemas/index.ts';

const config = defineConfig({
    projectId: "vilmgree",
    dataset: "production",
    title: "personal website",
    apiVersion: "2023-11-05",
    basePath: "/admin",
    plugins: [deskTool(), visionTool()],
    schema: {types: schemas}
})

export default config;