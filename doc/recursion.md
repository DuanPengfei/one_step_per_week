# 每日一算法：递归

## 递归概念
在编程中，递归指在函数定义中调用自身的方法。编写递归函数时要确定两个条件：递归条件、基线条件（退出条件）。满足递归条件时调用自身进行进一步处理，满足基线条件时返回结果给到上一层，使递归函数层层退出最终返回结果。

## 递归的运行机制：计算阶乘
```
function factorial(num) {
    if (1 === num) return 1;  // 基线条件
    else return num * factorial(num - 1);  // 递归条件
}

console.log(factorial(3));  // 6
```

num | 栈
---- | ----
3 | factorial：num = 3
2 | factorial：num = 2<br /> factorial：num = 3
1 | factorial：num = 1<br /> factorial：num = 2<br /> factorial：num = 3

递归函数的运行过程如上表格所示，每进行一步，如果没有满足基线条件，则再次调用函数自身，因为当前函数暂停执行是需要记录状态的，所以会在栈中压入一个新的元素。待到满足基线条件时再一层层返回结果，栈一层层弹出。

从上述递归函数运行流程可以看出，如果需要计算的流程非常长，会占用大量的内存，导致栈溢出。为解决栈溢出的问题，很多编程语言运行环境都实现了尾递归优化，JavaScript 从 ES6 起也支持尾递归优化。

## 尾递归概念
要了解尾递归我们首先要了解尾调用的概念，尾调用是指一个函数中的最后一个动作是函数调用，即最后这个函数调用的返回值被当做直接当前函数的返回。

以下代码展示的场景即为尾调用：
```
function bar(data) {
    // do something
}

function foo(data) {
    return bar(data);
}
```
尾调用的函数并不一定是在当前函数的最后一行，以下代码展示的场景同样为尾调用：

```
function bar(data) {
    // do something
}

function foo(data) {
    if(data) return bar(data);
    else return null;
}
```

以上代码因为 if-else 分支情况的存在 `bar(data);` 同样是尾调用。

在理解了尾调用概念后，我们再来谈谈尾递归。尾递归为尾调用的一个特殊场景，即尾调用的函数为当前函数自身。

## 尾递归的运行机制：计算阶乘优化
```
function factorial(num, result = 1) {
    if (1 === num) return result;
    else return factorial(num - 1, result * num);
}

function factorial(3);
```

num | 栈
---- | ----
3 | factorial：num = 3, result: 1
2 | factorial：num = 2, result: 3
1 | factorial：num = 1, result: 6

经过尾递归优化后的函数运行机制如上。与普通递归函数相比，尾递归在当前函数暂停执行时已经运行到尾调用位置，因为尾调用的返回值被当做当前函数的返回值直接返回，所以不再需要保存当前函数的状态，因此编程语言对尾调用的优化，会修改当前函数调用栈而不是增加一个新的调用栈元素。通过尾递归优化后的函数运行流程可以看出，函数运行不会不断增加内存占用，也不会导致栈溢出。

## 总结
因递归逻辑易于理解，所以递归在开发中是常用的方法。未进行尾递归优化有可能会导致栈溢出，所以在实现递归时尽量保证使用尾递归，如果所使用的编程语言不支持尾递归且需要处理的流程很长会导致栈溢出，这个时候可以选择使用循环的方式来处理问题。