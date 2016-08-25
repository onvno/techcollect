# CHANGELOG.md规范

type

```
feat：新功能（feature）
fix：修补bug
docs：文档（documentation）
style： 格式（不影响代码运行的变动）
refactor：重构（即不是新增功能，也不是修改bug的代码变动）
test：增加测试
chore：构建过程或辅助工具的变动
```



安装

```
$ npm install -g commitizen
```



支持 Angular 的 Commit message

```
$ commitizen init cz-conventional-changelog --save --save-exact
```



生成changelog

```
$ npm install -g conventional-changelog-cli
$ cd my-project
$ conventional-changelog -p angular -i CHANGELOG.md -s
```



