// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    extends: 'airbnb-base',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // check if imports actually resolve
    'settings': {
        'import/resolver': {
            'webpack': {
                'config': 'build/webpack.base.conf.js'
            }
        }
    },
    // add your custom rules here
    'rules': {
        // 4个空格缩进
        'indent': ['error', 4, {
            SwitchCase: 1
        }],
        // 允许输出到控制台
        'no-console': 'off',
        // 关闭 要求或禁止末尾逗号
        'comma-dangle': 'off',
        // 禁止混合使用不同的操作符 指定允许使用混合的两个操作符，前提是它们有同样的优先级
        'no-mixed-operators': 'off',
        // 允许类方法中不包含使用this
        'class-methods-use-this': 'off',
        // 允许修改参数属性
        'no-param-reassign': ['error', {
            props: false
        }],
        // 强制 typeof 表达式与有效的字符串进行比较
        "valid-typeof": ['error', {
            requireStringLiterals: false
        }],
        // don't require .vue extension when importing
        'import/extensions': ['error', 'always', {
            'js': 'never',
            'vue': 'never'
        }],
        // allow optionalDependencies
        'import/no-extraneous-dependencies': ['error', {
            'optionalDependencies': ['test/unit/index.js']
        }],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
}
