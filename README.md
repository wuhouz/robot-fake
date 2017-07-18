# robot-fake
# 2. 注释规范
> JS支持两种不同类型的注释：单行注释和多行注释。

## 2.1 单行注释

**说明：**单行注释以两个斜线开始，以行尾结束。  
**语法：**// 这是单行注释

**使用方式：**

① 单独一行：//(双斜线)与注释文字之间保留一个空格。  
② 在代码后面添加注释：//(双斜线)与代码之间保留一个空格，并且//(双斜线)与注释文字之间保留一个空格。  
③ 注释代码：//(双斜线)与代码之间保留一个空格。

**示例：**

```js
// 调用了一个函数；1)单独在一行
setTitle();
 
var maxCount = 10; // 设置最大量；2)在代码后面注释
 
// setName(); // 3)注释代码
```

## 2.2 多行注释

**说明：**以/*开头，*/结尾  
**语法：**/* 注释说明 */  
**使用方法：**  
① 若开始(/*)和结束(*/)都在一行，推荐采用单行注释。  
② 若至少三行注释时，第一行为/\*，最后行为*/，其他行以*开始，并且注释文字与*保留一个空格。

**示例：**

```js
/*
* 代码执行到这里后会调用setTitle()函数
* setTitle()：设置title的值
*/
setTitle();
```

## 2.3 函数(方法)注释

**说明：**函数(方法)注释也是多行注释的一种，但是包含了特殊的注释要求，参照 javadoc(百度百科)。  
**语法：**  
```js
/** 
* 函数说明 
* @关键字 
*/
```

**常用注释关键字：**(只列出一部分，并不是全部)

注释名 | 语法 | 含义 | 示例
------ | ---- | ---- | ---
@param | @param 参数名 {参数类型} 描述信息 | 描述参数的信息 | @param name {String} 传入名称
@return	| @return {返回类型} 描述信息 | 描述返回值的信息 | @return {Boolean} true:可执行;false:不可执行
@author | @author 作者信息 [附属信息：如邮箱、日期] | 描述此函数作者的信息 | @author 张三 2015/07/21 
@version | @version XX.XX.XX | 描述此函数的版本号 | @version 1.0.3
@example | @example 示例代码 | 演示函数的使用 | @example setTitle('测试')

**示例：**

```js
/**
* 合并Grid的行
* @param grid {Ext.Grid.Panel} 需要合并的Grid
* @param cols {Array} 需要合并列的Index(序号)数组；从0开始计数，序号也包含。
* @param isAllSome {Boolean} ：是否2个tr的cols必须完成一样才能进行合并。true：完成一样；false(默认)：不完全一样
* @return void
* @author polk6 2015/07/21 
* @example
* _________________                             _________________
* |  年龄 |  姓名 |                             |  年龄 |  姓名 |
* -----------------      mergeCells(grid,[0])   -----------------
* |  18   |  张三 |              =>             |       |  张三 |
* -----------------                             -  18   ---------
* |  18   |  王五 |                             |       |  王五 |
* -----------------                             -----------------
*/
function mergeCells(grid, cols, isAllSome) {
    // Do Something
}
```
