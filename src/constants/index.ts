import bg1 from '../assets/images/bg1.png';

export const RESUME_CONFIG = {
  templateKey: 'developer-concise-1',
  templateName: '程序员创意简洁风格简历',
  templateConfig: {
    config: {
      modules: [
        { key: 'introduce', name: '简介', visible: true },
        { key: 'workingHistory', name: '工作经历', visible: true },
        { key: 'ownerProjects', name: '个人项目', visible: true },
        { key: 'aboutMe', name: '关于我', visible: true },
      ],
      backgroundImage: bg1,
      githubVisible: true,
      blogVisible: true,
    },
    data: {
      name: '张三',
      gender: '男',
      age: '26岁',
      city: '深圳',
      phoneNumber: '12345678900',
      email: '123456789@qq.com',
      education: {
        schoolName: '某职业技术学校',
        graduationTime: '2021',
        major: '计算机科学与技术',
      },
      target: '前端开发工程师',
      introduce:
        '使⽤ HTML5 + CSS3 进⾏设计稿还原，熟悉移动端适配⽅案 \n熟练掌握 JavaScript，TypeScript ，并能运⽤ ES6，ES7 进⾏⾼效开发\n熟悉 React/Vue 及其生态\n具有多端开发经验，包括但不限于：Web 应用（H5 + B端后台）、React Native、微信小程序等\n使用Node.js（Hapi/koa）开发过BFF层',
      projects: [
        {
          title: 'React 组件库、React Native组件库',
          content:
            '项目预览：https://github.com/、https://github.com/\n技术选型：Dumi、React、React Native、TypeScript\n⼀个React 和 React Native组件库，⽀持在线查看⽂档和预览效果；独⽴开发14个通⽤的Web组件和14个RN组件，发布npm，部署项⽬⽂档，可以在线查看代码实例，⽀持PC和⼿机预览效果。',
        },
        {
          title: 'JIRA 项⽬',
          content:
            '项目预览：https://github.com/ \n技术选型：React、React Query、TypeScript、Ant Design\n软件项目开发工作流管理系统；⼆次封装react-beautiful-dnd实现多级拖拽功能，使⽤react-query乐观更新实现拖拽排序数据持久化；使⽤msw以localStorage为数据库，mock接⼝数据，并实现控制请求时⻓和失败率的开发者⼯具。',
        },
      ],
      github: 'https://github.com/',
      blog: 'https://github.com/',
      workingHistory: [
        {
          title: 'XXX有限公司 - 前端开发工程师',
          content:
            '• 某APP\n技术栈：React、React Native、Redux、TypeScript\n⼀站式汽配采购平台，包含询报价和商城两⼤业务模块，涵盖汽⻋VIN码扫描识别⻋型，发布询价，采购配件，退换货等功能。\n1、保质保量地完成迭代开发任务和轮流负责线上 OnCall \n2、参与RN组件库的设计与实现，使用 Dumi 编写组件的详细⽂档和使⽤实例，提⾼开发效率\n3、通过压缩图片、重构旧代码等手段优化项目，减小包体积 10M 以上\n4、参与设计和开发埋点上报方案，将曝光、点击、长按等用户行为统一封装\n\n• 其他工作\n技术栈：H5、React、Mobx、TypeScript、Node、Hapi\n1、负责广告落地页、活动分享、代客询价等 H5 项目的开发和维护\n2、负责移动端后台配置项目和小程序的维护\n3、参与使用Hapi开发移动端BFF层\n\n',
          startTime: '2021.07',
          endTime: '2023.02',
        },
        {
          title: '华为OD - 前端开发工程师',
          content:
            '• ISDP平台及其子项目\n技术栈：Vue3、AUI、TypeScript\nISDP是华为面向运营商及行业客户的数字化作业平台，同时覆盖工单管理、资源管理、生产资料管理、实施计划管理及项目管理。\n1、从零开始搭建前端项目工作流，包含申请代码仓、搭建流水线、搭建项目基本框架、申请部署单元等\n2、封装集成基础功能，包含引入业务公共组建、统一处理服务端状态、处理登录重定向、集成埋码逻辑等\n3、预研解决动态生成流程图、文件预览、文件比较等难点问题\n4、重构旧代码，Vue2升级Vue3\n\n',
          startTime: '2023.05',
          endTime: '2023.11',
        },
        {
          title: 'XXXX外包项目 - 前端开发工程师',
          content:
            '• 学生辅学系统（前台+后台）\n技术栈：（Vue3、Uniapp）+ （React、Ant Design Pro）\n提供学生互相辅导学业的平台，包含师生互选、社区答疑、沟通、讲解预约、课程评价、义工时结算等功能\n1、使用 OpenAPI 插件自动生成服务端数据定义和接口代码，提高联调和开发效率\n2、根据 UI 设计，自制组件库\n3、使用 React.memo、useMemo、useTransition 等 API 优化页面性能',
          startTime: '2023.11',
          endTime: '2024.02',
        },
      ],
      aboutMe: '睡觉，看小说，资深隐居吧老哥',
    },
  },
};

export type IResumeConfig = typeof RESUME_CONFIG;
export type IResumeData = typeof RESUME_CONFIG.templateConfig.data;
export type IConfig = typeof RESUME_CONFIG.templateConfig.config;
export type IModuleItem =
  (typeof RESUME_CONFIG.templateConfig.config.modules)[number];
export type IWorkHistoryItem =
  (typeof RESUME_CONFIG.templateConfig.data.workingHistory)[number];
