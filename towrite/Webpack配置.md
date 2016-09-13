## Webpack配置先关

#### loader路径问题

webpack会在根目录查找`node_modules`下的`loader`，如特殊情况，如服务器端执行，因webpack找不到根目录下的`node_modules`而执行出现问题，可通过以下配置解决,仍然需要注意node_modules路径：

```
resolveLoader: { root: path.join(__dirname, "node_modules") }
```

* [Module not found: Error: Cannot resolve module 'babel-loader'](https://github.com/webpack/webpack/issues/1083) issue反馈

* [webpack官网信息](https://webpack.github.io/docs/configuration.html#resolveloader)

  > *IMPORTANT*: The loaders here are resolved *relative to the resource* which they are applied to. This means they are not resolved relative the the configuration file. If you have loaders installed from npm and your `node_modules` folder is not in a parent folder of all source files, webpack cannot find the loader. You need to add the `node_modules` folder as absolute path to the `resolveLoader.root`option. (`resolveLoader: { root: path.join(__dirname, "node_modules") }`)



#### Babel配置支持ie8

```
> cat .babelrc                                                                  
{
  "presets": ["es2015-loose","stage-0"],
  "plugins": [   "transform-es3-property-literals",
            "transform-es3-member-expression-literals"]
}
```

package.json

```
"devDependencies": {
    "babel-core": "^6.11.4",
    "babel-eslint": "^6.1.2",
    "babel-loader": "^6.2.4",
    "babel-plugin-add-module-exports": "^0.2.1",
    "babel-plugin-transform-es3-member-expression-literals": "^6.8.0",
    "babel-plugin-transform-es3-property-literals": "^6.8.0",
    "babel-preset-es2015": "^6.14.0",
    "babel-preset-es2015-loose": "^7.0.0",
    "babel-preset-stage-0": "^6.5.0",
```

