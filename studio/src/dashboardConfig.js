export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ecb3ba145228aee36799452',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-oxpr2cv6',
                  apiId: 'ec3c1fdd-df81-4d18-a828-e33bf19d9f46'
                },
                {
                  buildHookId: '5ecb3ba1c16d84055d50dd0e',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-jy5t3w14',
                  apiId: 'd059e5e8-5b88-4f2f-aa1b-32d7b081bcfb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bjmedinam/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-jy5t3w14.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
