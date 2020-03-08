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
                  buildHookId: '5e65598746c3243eebf05783',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-76-studio',
                  apiId: '29d7836a-b245-4350-99ea-dae82444a433'
                },
                {
                  buildHookId: '5e655987e412f89049083b85',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-76',
                  apiId: '686b6677-b3b8-42cc-be96-8b2b69ceedad'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simen/sanity-gatsby-blog-76',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-76.netlify.com', category: 'apps' }
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
