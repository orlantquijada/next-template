1. Bootstrap NextJS project
```bash
yarn create next-app <app_name>
```
2. Bootstrap eslint config
```bash
yarn eslint --init
```
3. Eslint-Prettier integration
```bash
yarn add --dev prettier eslint-config-prettier eslint-plugin-prettier
```
4. Treeshaking config
Declare `components/` as not a side-effect in `package.json`
```json
{
	...
	"sideEffects": [
	  "!(components/)"
	],
	...
}
```
5. Absolute imports
```
// tsconfig.json

{
	"compilerOptions: {
		...
		"baseUrl": "./",
		"paths": {
		"@/*": ["./*"]
		},
		...
	}
}
```
6. [Testing](https://nextjs.org/docs/testing#manual-setup-1)
```bash
yarn add --dev jest babel-jest @testing-library/react @testing-library/jest-dom identity-obj-proxy react-test-renderer
```
7. Automated testing, linting and formatting (git hooks)
```bash
npx mrm@2 lint-staged
```