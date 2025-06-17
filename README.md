# striver-snippets 

一个 vscode 代码片段插件，包含js ts tsx css less scss 的常用snippets，便于日后开发。

## 代码片段使用指南

### JavaScript/TypeScript/React 相关代码片段

#### 日志输出
- `clo==` - 输出带有等号分隔的对象日志
  ```javascript
  console.log('=======object=======', object);
  ```
- `clo=t` - 输出带有等号分隔的文本日志
  ```javascript
  console.log('=======text=======');
  ```

#### 导入语句
- `im less` - 导入 Less 模块
  ```javascript
  import styles from './index.module.less';
  ```
- `im classNames` - 导入 classNames 库
  ```javascript
  import classNames from 'classnames';
  ```
- `imr` - 导入 React
  ```javascript
  import React from 'react';
  ```

#### React 组件模板
- `rfcd` - 创建默认导出的 React 函数组件
- `rfc` - 创建命名导出的 React 函数组件

#### React Hooks
- `useStateSnippet` - 创建 useState Hook
- `useEffectSnippet` - 创建 useEffect Hook
- `useContextSnippet` - 创建 useContext Hook
- `useMemoSnippet` - 创建 useMemo Hook
- `useRefSnippet` - 创建 useRef Hook
- `useImperativeHandleSnippet` - 创建 useImperativeHandle Hook
- `useCallbackSnippet` - 创建 useCallback Hook
- `useLayoutEffectSnippet` - 创建 useLayoutEffect Hook
- `useReducerSnippet` - 创建 useReducer Hook
- `useLockFnSnippet` - 创建异步锁函数

### CSS 相关代码片段

- `t-ell` - 单行文本溢出省略
  ```css
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ```
- `t-ell-more` - 多行文本溢出省略
  ```css
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  ```
- `f-center` - Flex 布局居中
  ```css
  display: flex;
  justify-content: center;
  align-items: center;
  ```

### 公司专用代码片段

- `e c useColumns` - 创建表格列配置 Hook
  ```typescript
  import { IColumnType } from '@/components/common';

  export const useColumns = (): {
    topSearchColumns: IColumnType[];
    tableColumns: IColumnType[];
  } => {
    const topSearchColumns: IColumnType[] = [];
    const tableColumns: IColumnType[] = [];

    return {
      topSearchColumns,
      tableColumns,
    };
  };
  ```

## 使用方法

1. 在 VSCode 中安装此插件
2. 在相应的文件类型中输入上述代码片段的前缀
3. 按下 Tab 键或 Enter 键即可插入对应的代码片段

## 支持的文件类型

- JavaScript (.js)
- TypeScript (.ts)
- React TypeScript (.tsx)
- CSS (.css)
- Less (.less)
- SCSS (.scss)

