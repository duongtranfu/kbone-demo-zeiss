/**
 * 配置参考：https://wechat-miniprogram.github.io/kbone/docs/config/
 */
const path = require('path')

module.exports = {
    origin: 'https://test.miniprogram.com',
    entry: '/',
    router: {
        index: [
            '/(home|index)?',
            '/index.html',
            '/test/(home|index)',
        ]
    },
    redirect: {
        notFound: 'home',
        accessDenied: 'home',
    },
    generate: {
        autoBuildNpm: 'npm',
        tabBar: {
            color: '#ADBAC8',
            selectedColor: '#0025AC',
            backgroundColor: '#ffffff',
            list: [{
                pageName: 'index',
                text: '首页',
                iconPath: path.resolve(__dirname, '../src/img/home.png'),
                selectedIconPath: path.resolve(__dirname, '../src/img/home_selected.png'),
            }, {
                pageName: 'bottom2',
                text: '所有课程',
                iconPath: path.resolve(__dirname, '../src/img/video.png'),
                selectedIconPath: path.resolve(__dirname, '../src/img/video_selected.png'),
            }, {
                pageName: 'bottom3',
                text: '文献&解读',
                iconPath: path.resolve(__dirname, '../src/img/paper.png'),
                selectedIconPath: path.resolve(__dirname, '../src/img/paper_selected.png'),
            }, {
                pageName: 'bottom4',
                text: '我的',
                iconPath: path.resolve(__dirname, '../src/img/user.png'),
                selectedIconPath: path.resolve(__dirname, '../src/img/user_selected.png'),
            }],
        },
    },
    app: {
        navigationBarTitleText: '蔡司E学苑',
    },
    appExtraConfig: {
        sitemapLocation: 'sitemap.json',
    },
    global: {},
    pages: {},
    optimization: {
        domSubTreeLevel: 10,

        elementMultiplexing: true,
        textMultiplexing: true,
        commentMultiplexing: true,
        domExtendMultiplexing: true,

        styleValueReduce: 5000,
        attrValueReduce: 5000,
    },
    projectConfig: {
        projectname: 'kbone-template-react',
        appid: '',
    },
}
