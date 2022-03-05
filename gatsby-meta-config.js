module.exports = {
  title: `autumnly1007.github.io`,
  description: `사계절 개발일기`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://autumnly1007.github.io`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `autumnly1007/autumnly1007.github.io`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `안가을`,
    bio: {
      role: `개발자`,
      description: ['사람에 가치를 두는', '능동적으로 일하는', '이로운 것을 만드는'],
      thumbnail: 'sample.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/autumnly1007`,
      linkedIn: ``, 
      email: `autumnly1007@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2020.04 ~',
        activity: '웹 개발',
        /*links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://autumnly1007.github.io/blog',
          demo: 'https://autumnly1007.github.io',
        },*/
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '공공기관 홈페이지 및 관리 시스템 구축',
        /*description:
          '',*/
        techStack: ['java', 'spring', 'javascript', 'scss', 'mssql', 'mariaDB'],
        // thumbnailUrl: 'blog.png',
        /*links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
          demo: 'https://www.zoomkoding.com',
        },*/
      },
      {
        title: '공공기관 ERP 시스템 구축',
        /*description:
          '',*/
        techStack: ['java', 'spring', 'javascript', 'oracle'],
        // thumbnailUrl: 'blog.png',
        /*links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
          demo: 'https://www.zoomkoding.com',
        },*/
      },
    ],
  },
};
