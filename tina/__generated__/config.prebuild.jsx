// tina/config.ts
import { defineConfig } from 'tinacms';
var branch =
	process.env.GITHUB_BRANCH ||
	process.env.VERCEL_GIT_COMMIT_REF ||
	process.env.HEAD ||
	'main';
var config_default = defineConfig({
	branch,
	// Get this from tina.io
	clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
	// Get this from tina.io
	token: process.env.TINA_TOKEN,
	build: {
		outputFolder: 'admin',
		publicFolder: 'public',
	},
	media: {
		tina: {
			mediaRoot: '',
			publicFolder: 'public',
		},
	},
	// See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
	schema: {
		collections: [
			{
				name: 'projects',
				label: 'Projects',
				path: 'content/projects',
				fields: [
					{
						type: 'string',
						name: 'title',
						label: 'Title',
						isTitle: true,
						required: true,
					},
					{
						type: 'string',
						name: 'overview',
						label: 'Overview',
						required: true,
					},
					{
						type: 'string',
						label: 'Tools',
						name: 'tools',
						list: true,
					},
					{
						type: 'rich-text',
						name: 'summary',
						label: 'Summary',
						isBody: true,
					},
					{
						type: 'string',
						label: 'Tags',
						name: 'tags',
						list: true,
					},
					{
						type: 'object',
						name: 'projectImages',
						label: 'Project Images',
						ui: {
							itemProps: (item) => ({ label: item.altText || 'Image' }),
						},
						list: true,
						fields: [
							{
								type: 'image',
								name: 'src',
								label: 'Image Source',
							},
							{
								type: 'string',
								name: 'altText',
								label: 'Alt Text',
							},
						],
					},
				],
				ui: {
					// This is an DEMO router. You can remove this to fit your site
					// router: ({ document }) => `/demo/blog/${document._sys.filename}`,
				},
			},
		],
	},
});
export { config_default as default };
