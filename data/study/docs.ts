
const thisYear = new Date().getFullYear();

export default {
  title: '参考文档',
  nav: [
    {
      subtitle: 'Docker',
      nav: [
        {
          icon: 'assets/icon/community/007.svg',
          name: 'Docker — 从入门到实践',
          desc: 'Docker — 从入门到实践',
          link: 'https://yeasy.gitbooks.io/docker_practice/',
        },
        {
          icon: 'assets/icon/community/007.svg',
          name: 'Docker官方映像文档',
          desc: 'docker-library中的Docker官方映像文档',
          link: 'https://github.com/docker-library/docs',
        },
        {
          icon: 'https://avatars2.githubusercontent.com/u/7739233?s=200&v=4',
          name: 'Docker Hub',
          desc: 'Docker 镜像仓库',
          link: 'https://hub.docker.com/',
        },
        {
          icon: 'https://avatars2.githubusercontent.com/u/7739233?s=200&v=4',
          name: 'Docker-Compose',
          desc: '使用Docker定义和运行多容器应用程序',
          link: 'https://docs.docker.com/compose/',
          language: [
            '',
            '',
            'https://github.com/docker/compose'
          ]
        },
      ]
    },
    {
      subtitle: 'Git',
      nav: [
        {
          icon: 'assets/icon/community/007.svg',
          name: 'git-manual',
          desc: 'Git常用命令参考手册 (推荐学习)',
          link: 'https://github.com/xjh22222228/git-manual',
        },
        {
          icon: 'assets/icon/community/007.svg',
          name: 'GitHub Docs',
          desc: 'github 官方帮助文档',
          link: 'https://help.github.com/cn',
        },
        {
          icon: 'assets/icon/community/007.svg',
          name: 'awesome-actions',
          desc: '精选的GitHub上很棒的Action列表',
          link: 'https://github.com/sdras/awesome-actions',
        },
        {
          icon: 'assets/icon/community/007.svg',
          name: 'Github - Actions',
          desc: 'Github 官方Actions 资源列表',
          link: 'https://github.com/marketplace?type=actions',
        },
        {
          icon: 'assets/icon/community/007.svg',
          name: 'growing-up',
          desc: '程序猿成长计划',
          link: 'https://github.com/mylxsw/growing-up',
        },
      ]
    },
    {
      subtitle: '服务器',
      nav: [
        {
          icon: 'https://avatars0.githubusercontent.com/u/1412239?s=200&v=4',
          name: 'nginx',
          desc: 'nginx参考文档',
          link: 'http://nginx.org/en/docs/',
          language: [
            '',
            '',
            'https://github.com/nginx/nginx'
          ]
        },
        {
          icon: 'https://avatars0.githubusercontent.com/u/1412239?s=200&v=4',
          name: 'Nginx开发从入门到精通',
          desc: 'Nginx开发从入门到精通',
          link: 'http://tengine.taobao.org/book/index.html',
          language: [
            '',
            '',
            'https://github.com/taobao/nginx-book'
          ]
        },
      ]
    },
    {
      subtitle: '数据库',
      nav: [
        {
          icon: 'https://avatars3.githubusercontent.com/u/1529926?s=200&v=4',
          name: 'redis',
          desc: 'Redis 是一个开源（BSD许可）的，内存中的数据结构存储系统，它可以用作数据库、缓存和消息中间件。 它支持多种类型的数据结构',
          link: 'http://www.redis.cn/',
          language: [
            'https://redis.io/',
            'http://www.redis.cn/',
            'https://github.com/redis/redis'
          ]
        },
      ]
    },
    {
      subtitle: '其他文档',
      nav: [
        {
          icon: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/linux/linux.png',
          name: 'Linux 常用命令参考手册',
          desc: 'Linux 常用命令参考手册',
          link: 'https://github.com/xjh22222228/linux-manual',
        },
        {
          icon: 'assets/icon/community/007.svg',
          name: 'developer-roadmap',
          desc: `${thisYear}年成为网络开发人员的路线图`,
          link: 'https://github.com/kamranahmedse/developer-roadmap',
        },
        {
          icon: 'https://devhints.io/assets/favicon.png',
          name: 'Devhints',
          desc: 'WEB开发速查表，mysql/go/java/js/bash/react/git...',
          link: 'https://devhints.io/',
        },
        {
          icon: 'assets/icon/utility-tool/062.png',
          name: 'linux-command',
          desc: 'Linux命令大全搜索工具，内容包含Linux命令手册、详解、学习、搜集',
          link: 'https://git.io/linux',
          language: [
            '',
            '',
            'https://github.com/jaywcjlove/linux-command'
          ]
        },
        {
          icon: 'assets/icon/community/007.svg',
          name: 'learn-regex',
          desc: '正则表达式学习',
          link: 'https://github.com/ziishaned/learn-regex',
        },
        {
          icon: 'assets/icon/community/007.svg',
          name: 'the-art-of-command-line',
          desc: '命令行的艺术',
          link: 'https://github.com/jlevy/the-art-of-command-line/blob/master/README-zh.md',
        },
        {
          icon: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/chrome/chrome.png',
          name: 'Peter Beverloo',
          desc: 'Chrome浏览器命令参数参考手册',
          link: 'https://peter.sh/experiments/chromium-command-line-switches/',
        },
        {
          icon: 'https://avatars2.githubusercontent.com/u/11618545?s=200&v=4',
          name: 'vimrc',
          desc: 'vim配置参考手册',
          link: 'https://github.com/amix/vimrc',
        },
        {
          icon: 'https://www.jenkins.io/zh/sites/default/files/jenkins_favicon.ico',
          name: 'Jenkins',
          desc: 'Jenkins是开源CI&CD软件领导者， 提供超过1000个插件来支持构建、部署、自动化， 满足任何项目的需要',
          link: 'https://www.jenkins.io/zh/',
        },
        {
          icon: 'https://learnxinyminutes.com/favicon.ico',
          name: 'learnxinyminutes-docs',
          desc: '在Y分钟内学习X',
          link: 'https://learnxinyminutes.com/',
        },
        {
          icon: 'https://code.visualstudio.com/apple-touch-icon.png',
          name: 'Vscode Docs',
          desc: 'Vscode 扩展开发文档',
          link: 'https://liiked.github.io/VS-Code-Extension-Doc-ZH/#/',
          language: [
            'https://code.visualstudio.com/api',
            'https://liiked.github.io/VS-Code-Extension-Doc-ZH/#/',
            'https://github.com/microsoft/vscode-docs'
          ]
        },
      ]
    },
  ]
}
