// jest.config.js
module.exports = {
    coverageReporters: ['json', 'lcovonly', 'text', 'clover', 'html'],
    collectCoverage: true,
    collectCoverageFrom: [
        '**/*.{js,jsx}',
        '!**/node_modules/**',
        '!**/coverage/**',
        '!**/serviceWorker.js',
        '!**/jest.config.js',
        '!**/tests/mocks/**',
        '!**/env/index.js',
    ],
    coverageThreshold: {
        global: {
            branches: 70,
            functions: 72,
            lines: 65,
            statements: 67,
        },
    },
};
