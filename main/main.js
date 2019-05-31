// Write your cade below:
module.exports = function main(num1, num2) {
  
  return get_remainder(num1, num2);
  
};

// 求余
function get_remainder(num1, num2) {
	//判断输入是否合法，非法直接返回NaN；合法则进行计算后返回结果
	if (isValid(num1, num2) === false) {
		return NaN;
	}
	
	return (num1 % num2);
}
// 判断输入是否合法
// 非法return false；合法则return true 
function isValid(num1, num2) {
	//输入不是String或Number类型为非法
	if (!(typeof num1=='string' || typeof num1=='number') || !(typeof num2=='number' || typeof num2=='number')) {
		return false;
	}
	//对于输入的String或Number类型数据，有以下情况为非法：
	//1、输入含有空字符串''
	//2、输入含有NaN
	//3、输入有一个不能解析为数字
	//4、输入中除数num2是0或者'0'
    if (num1 === '' || num2 === '') {    		//输入为空字符串''
        return false;
    } else if (isNaN(num1) || isNaN(num2)) {    // 输入为NaN
        return false;
    } else if (!(/^[0-9]+.?[0-9]*/).test(num1) || !(/^[0-9]+.?[0-9]*/).test(num2)) {    // 输入有一个不能解析为数字
        return false;
    } else if (Number(num2) === 0) {    		// 除数为0
        return false;
    } else {                           			// 输入正确
        return true;
    }
}


