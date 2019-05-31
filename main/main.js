// Write your cade below:
module.exports = function main(num1, num2) {
  
  return get_remainder(num1, num2);
  
};

// ����
function get_remainder(num1, num2) {
	//�ж������Ƿ�Ϸ����Ƿ�ֱ�ӷ���NaN���Ϸ�����м���󷵻ؽ��
	if (isValid(num1, num2) === false) {
		return NaN;
	}
	
	return (num1 % num2);
}
// �ж������Ƿ�Ϸ�
// �Ƿ�return false���Ϸ���return true 
function isValid(num1, num2) {
	//���벻��String��Number����Ϊ�Ƿ�
	if (!(typeof num1=='string' || typeof num1=='number') || !(typeof num2=='number' || typeof num2=='number')) {
		return false;
	}
	//���������String��Number�������ݣ����������Ϊ�Ƿ���
	//1�����뺬�п��ַ���''
	//2�����뺬��NaN
	//3��������һ�����ܽ���Ϊ����
	//4�������г���num2��0����'0'
    if (num1 === '' || num2 === '') {    		//����Ϊ���ַ���''
        return false;
    } else if (isNaN(num1) || isNaN(num2)) {    // ����ΪNaN
        return false;
    } else if (!(/^[0-9]+.?[0-9]*/).test(num1) || !(/^[0-9]+.?[0-9]*/).test(num2)) {    // ������һ�����ܽ���Ϊ����
        return false;
    } else if (Number(num2) === 0) {    		// ����Ϊ0
        return false;
    } else {                           			// ������ȷ
        return true;
    }
}


