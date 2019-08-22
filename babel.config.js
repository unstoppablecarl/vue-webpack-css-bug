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
                '@base': './src/base',
                '@foo': './src/foo',
                '@bar': './src/bar',
                '@common': './src/common'
            }
        }],
        '@babel/plugin-syntax-dynamic-import',
    ]
}
