export default {
	preset: 'ts-jest',
	testEnvironment: 'jest-environment-jsdom',
	transform: {
		'^.+\\.ts$': ['ts-jest'],
	},
	testMatch: ['<rootDir>/src/tests/**/*.ts'],
};
