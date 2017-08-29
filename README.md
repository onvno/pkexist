
# pkexist

**Install**

```
npm install -g pkexist
```



#### Usage

**shell**

```
$ pkexist react uba teeeeeest
```

返回信息：

```
teeeeeest: Congratulations, this package has't existed
react: Sorry, this package has existed
uba: Sorry, this package has existed
```



**node**

```
var pkexist = require(pkexist);
pkexist('react');
// react: Sorry, this package has existed
pkexist('teeeeeest')
// teeeeeest: Congratulations, this package has't existed
```

