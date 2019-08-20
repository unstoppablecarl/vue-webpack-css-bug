module.exports = {
    'presets': [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                    ie: '11'
                },
            }
        ],
    ],
    'plugins': [
        ['module-resolver', {
            'root': ['./src'],
            'alias': {
                '@': './src'
            }
        }],
        '@babel/plugin-syntax-dynamic-import',
    ]
}
