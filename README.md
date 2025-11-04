# striver-snippets

一个 vscode 代码片段插件，包含 js ts tsx css 的常用 snippets，便于平时开发工作。

## 🎯 使用方法

1. 在 VSCode 中安装此插件
2. 在相应的文件类型中输入上述代码片段的前缀
3. 按下 Tab 键或 Enter 键即可插入对应的代码片段

## 🎯 支持的文件类型

- JavaScript (.js)
- TypeScript (.ts)
- React TypeScript (.tsx)
- CSS (.css)
- Less (.less)
- SCSS (.scss)

## 📋 代码片段使用指南

### JavaScript/TypeScript/React 相关代码片段

#### 日志相关

| 触发前缀 | 描述                   | 代码示例                                       |
| -------- | ---------------------- | ---------------------------------------------- |
| `cll`  | 带分隔符的对象日志输出 | `console.log('=======object=======', object);` |
| `cllt`  | 带分隔符的文本日志输出 | `console.log('=======object=======');`         |

#### 导入导出相关

| 触发前缀        | 描述               | 代码示例                                    |
| --------------- | ------------------ | ------------------------------------------- |
| `im less`       | 导入 less 样式文件 | `import styles from './index.module.less';` |
| `im classNames` | 导入 classNames 库 | `import classNames from 'classnames';`      |
| `imr`           | 导入 React         | `import React from 'react';`                |

#### React 组件相关

| 触发前缀 | 描述                          | 代码示例                     |
| -------- | ----------------------------- | ---------------------------- |
| `rfcd`   | 创建默认导出的 React 函数组件 | 代码较长，请使用触发前缀查看 |
| `rfc`    | 创建导出的 React 函数组件     | 代码较长，请使用触发前缀查看 |

#### Hooks 相关

| 触发前缀                     | 描述                           | 代码示例                                                     |
| ---------------------------- | ------------------------------ | ------------------------------------------------------------ |
| `useStateSnippet`            | React useState Hook            | `const [first, setFirst] = useState(second)`                 |
| `useEffectSnippet`           | React useEffect Hook           | `useEffect(() => { first }, [second])`                       |
| `useContextSnippet`          | React useContext Hook          | `const first = useContext(second)`                           |
| `useMemoSnippet`             | React useMemo Hook             | `useMemo(() => first, [second])`                             |
| `useRefSnippet`              | React useRef Hook              | `const first = useRef(second)`                               |
| `useImperativeHandleSnippet` | React useImperativeHandle Hook | 代码较长，请使用触发前缀查看                                 |
| `useCallbackSnippet`         | React useCallback Hook         | `const first = useCallback(second, [third])`                 |
| `useLayoutEffectSnippet`     | React useLayoutEffect Hook     | `useLayoutEffect(() => { first }, [second])`                 |
| `useReducerSnippet`          | React useReducer Hook          | `const [state, dispatch] = useReducer(first, second, third)` |
| `useLockFnSnippet`           | useLockFn Hook                 | `const first = useLockFn(async () => { second })`            |

### CSS 相关代码片段

| 触发前缀     | 描述             | 代码示例                                                          |
| ------------ | ---------------- | ----------------------------------------------------------------- |
| `t-ell`      | 单行文本超出省略 | `overflow: hidden; text-overflow: ellipsis; white-space: nowrap;` |
| `t-ell-more` | 多行文本超出省略 | 代码较长，请使用触发前缀查看                                      |
| `f-center`   | CSS Flex 居中    | `display: flex; justify-content: center; align-items: center;`    |

### 公司专用代码片段

| 触发前缀         | 描述                | 代码示例                     |
| ---------------- | ------------------- | ---------------------------- |
| `ecUseColumns`   | useColumns 报表配置 | 代码较长，请使用触发前缀查看 |
| `baseReportPage` | 报表组件 snippet    | 代码较长，请使用触发前缀查看 |
