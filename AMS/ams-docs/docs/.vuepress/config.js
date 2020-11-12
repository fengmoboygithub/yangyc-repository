module.exports = {
	title : 'AMS',
	description : '使用AMS快速构建web应用程序',
	port : 3000,
	head : [
		[
			'link', {
				rel : 'icon',
				href : '/images/favicon.ico'
			}

		],
		[
			'link', {
				rel : 'stylesheet',
				href : '/css/ams.css'
			}
		],
		[
			'script', {
				charset : 'utf-8',
				src : '/js/ams.js'
			}
		]
	],
	base : '',
	markdown : {
		lineNumbers : true // 代码块是否显示行号
	},
	themeConfig : {
		sidebarDepth : 3,
		algolia : {
			// 使用官方注册key无需appId
			appId: 'YDP9KZMGO2',
			// 官方注册默认 key 017ae7acde5e01882ca2985797787d06
			apiKey : 'c841514e21bbde012990423504390975',
			indexName : 'ams',
			algoliaOptions : {
				hitsPerPage : 5,
				facetFilters : ""
			}
		},
		nav : [// 导航栏配置
			{
				text : '文档',
				link : '/ams/'
			}
		],
		sidebar : {// 侧边栏配置
			'/ams/' : [{
					title : '文档',
					collapsable : false,
					children : [
						'',
						'document/kslj',
						'document/hjbs',
						'document/xmjs',
						'document/htsc',
						'document/qdsc',
						'document/zjwd'
					]
				}, {
					title : '其它',
					collapsable : false,
					children : [
						'other/faq'
					]
				}
			]

		}
	}
};