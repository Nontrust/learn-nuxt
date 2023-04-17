module.exports = {
    apps: [
        {
            name: 'LearnNuxt',
            exec_mode: 'cluster',
            instances: '4', // Or a number of instances
            script: './node_modules/nuxt/bin/nuxt.js',
            args: 'start',
            ignore_watch : ['/node_modules', '/backend']
        }
    ]
}