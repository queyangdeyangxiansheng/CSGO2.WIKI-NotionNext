const CONFIG = {
  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2023-09-21', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: '内部高端饰品交易平台（微信群可用）', url: 'https://www.csgo2.wiki/article/trade' },
    { title: '🎉CSGO2.Wiki 特殊模板捡漏大师全新发布🎉', url: 'https://www.csgo2.wiki/article/RareHunter' }
  ],

  // 英雄区左右侧组件颠倒位置
  HEO_HERO_REVERSE: false,
  // 博客主体区左右侧组件颠倒位置
  HEO_HERO_BODY_REVERSE: false,

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: 'CNCS权威',
  HEO_HERO_TITLE_2: '饰品排行榜',
  HEO_HERO_TITLE_3: 'CSGO2.WIKI',
  HEO_HERO_TITLE_4: '共建网站',
  HEO_HERO_TITLE_5: 'CSGO2.Wiki 长期抽奖活动',
  HEO_HERO_TITLE_LINK: 'https://www.csgo2.wiki/article/bigroll',

  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: { title: '刀类排行', url: '/tag/刀' },
  HEO_HERO_CATEGORY_2: { title: '手套排行', url: '/tag/手套' },
  HEO_HERO_CATEGORY_3: { title: '交易平台', url: '/tag/交易平台' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: '推荐',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  HEO_INFOCARD_GREETINGS: [
    '你好！我是',
    '🔍 CNCS饰品排行榜',
    '🧱 数据派饰品收藏家'
  ],
  HEO_INFO_CARD_URL: 'https://www.csgo2.wiki/article/contact', // 个人资料底部按钮链接

  // 用户技能图标
  HEO_GROUP_ICONS: [
    {
      title_1: '1',
      img_1: '/images/heo/imglist/1.png',
      color_1: '#989bf8',
      title_2: '2',
      img_2: '/images/heo/imglist/2.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'Docker',
      img_1: '/images/heo/imglist/3.png',
      color_1: '#57b6e6',
      title_2: 'Photoshop',
      img_2: '/images/heo/imglist/4.png',
      color_2: '#4082c3'
    },
    {
      title_1: 'FinalCutPro',
      img_1: '/images/heo/imglist/5.png',
      color_1: '#ffffff',
      title_2: 'Python',
      img_2: '/images/heo/imglist/6.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'Swift',
      img_1: '/images/heo/imglist/7.png',
      color_1: '#eb6840',
      title_2: 'Principle',
      img_2: '/images/heo/imglist/8.png',
      color_2: '#8f55ba'
    },
    {
      title_1: 'illustrator',
      img_1: '/images/heo/imglist/9.png',
      color_1: '#f29e39',
      title_2: 'CSS3',
      img_2: '/images/heo/imglist/10.png',
      color_2: '#2c51db'
    },
    {
      title_1: 'JS',
      img_1: '/images/heo/imglist/11.png',
      color_1: '#f7cb4f',
      title_2: 'HTML',
      img_2: '/images/heo/imglist/12.png',
      color_2: '#e9572b'
    },
    {
      title_1: 'Git',
      img_1: '/images/heo/imglist/13.png',
      color_1: '#df5b40',
      title_2: 'Rhino',
      img_2: '/images/heo/imglist/14.png',
      color_2: '#1f1f1f'
    }
  ],

  HEO_SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: '交流频道',
  HEO_SOCIAL_CARD_TITLE_2: '加入我们的社群讨论分享',
  HEO_SOCIAL_CARD_TITLE_3: '点击加入社群',
  HEO_SOCIAL_CARD_URL: 'https://www.csgo2.wiki/article/contact',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
