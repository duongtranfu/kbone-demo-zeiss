module.exports = {
	"origin": "https://test.miniprogram.com",
	"entry": "/",
	"router": {
		"index": [
			{
				"regexp": "^(?:\\/(home|index))?(?:\\/)?$",
				"options": "i"
			},
			{
				"regexp": "^\\/index\\.html(?:\\/)?$",
				"options": "i"
			},
			{
				"regexp": "^\\/test\\/(home|index)(?:\\/)?$",
				"options": "i"
			}
		]
	},
	"generate": {
		"worker": "common/workers"
	},
	"runtime": {
		"subpackagesMap": {},
		"tabBarMap": {
			"/pages/index/index": true,
			"/pages/bottom2/index": true,
			"/pages/bottom3/index": true,
			"/pages/bottom4/index": true
		},
		"usingComponents": {}
	},
	"pages": {
		"index": {},
		"bottom2": {},
		"bottom3": {},
		"bottom4": {}
	},
	"redirect": {
		"notFound": "home",
		"accessDenied": "home"
	},
	"optimization": {
		"domSubTreeLevel": 10,
		"elementMultiplexing": true,
		"textMultiplexing": true,
		"commentMultiplexing": true,
		"domExtendMultiplexing": true,
		"styleValueReduce": 5000,
		"attrValueReduce": 5000
	}
}