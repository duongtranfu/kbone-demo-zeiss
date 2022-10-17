const mp = require('miniprogram-render')
const getBaseConfig = require('../base.js')
const config = require('../../config')

function init(window, document) {require('../../common/vendors~bottom2~bottom3~bottom4~index.js')(window, document);require('../../common/default~bottom2~bottom3~bottom4~index.js')(window, document);require('../../common/bottom3.js')(window, document)}

const baseConfig = getBaseConfig(mp, config, init)

Component({
    ...baseConfig.base,
    methods: {
        ...baseConfig.methods,
        
        
        
    },
})
