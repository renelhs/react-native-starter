module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        'module:react-native-dotenv',
        [
            'module-resolver',
            {
                root: ['./src'],
                extensions: [
                    '.ios.js',
                    '.android.js',
                    '.ios.jsx',
                    '.android.jsx',
                    '.js',
                    '.jsx',
                    '.json',
                ],
            },
        ],
    ],
};
