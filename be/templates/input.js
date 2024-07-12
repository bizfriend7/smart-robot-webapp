function adjustInputsBasedOnMacro(macroValue) {
    const inputs = {
        A: document.getElementById('macroInputA'),
        B: document.getElementById('macroInputB'),
        C: document.getElementById('macroInputC'),
        D: document.getElementById('macroInputD'),
        E: document.getElementById('macroInputE'),
        F: document.getElementById('macroInputF')
    };

    const macroInput2 = document.getElementById('macroInput2');

    // 모든 input 필드를 숨기기
    Object.values(inputs).forEach(input => input.style.display = 'none');
    macroInput2.readOnly = false;
    // 매크로 값에 따라 필요한 input 필드만 보이게 설정
    const match = macroValue.match(/(\d{2})$/);
    const lastTwoDigits = match ? match[1] : null;

    // 추출한 값에 따라 필요한 input 필드만 보이게 설정
    if (lastTwoDigits === '01') {
        inputs.A.style.display = 'block';
        inputs.B.style.display = 'block';
        macroInput2.value = '0'; // 필요한 값 설정
        macroInput2.readOnly = true;

    } else if (lastTwoDigits === '02') {
        inputs.A.style.display = 'block';
        inputs.B.style.display = 'block';
        inputs.C.style.display = 'block';
        inputs.D.style.display = 'block';
        macroInput2.value = '0'; // 필요한 값 설정
        macroInput2.readOnly = true;
    } 
    else if (lastTwoDigits === '03') {
        inputs.A.style.display = 'block';
        inputs.B.style.display = 'block';
        inputs.C.style.display = 'block';
        inputs.D.style.display = 'block';
        macroInput2.value = '0'; // 필요한 값 설정
        macroInput2.readOnly = true;
    } 
    else if (lastTwoDigits === '04') {
        inputs.A.style.display = 'block';
        inputs.B.style.display = 'block';
        inputs.C.style.display = 'block';
        macroInput2.value = '0'; // 필요한 값 설정
        macroInput2.readOnly = true;
    } 
    else if (lastTwoDigits === '05') {
        inputs.A.style.display = 'block';
        inputs.B.style.display = 'block';
        inputs.C.style.display = 'block';
        macroInput2.value = '0'; // 필요한 값 설정
        macroInput2.readOnly = true;
    }
    else if (lastTwoDigits === '11') {
        inputs.A.style.display = 'block';
        inputs.B.style.display = 'block';
    }
    else if (lastTwoDigits === '13') {
        inputs.A.style.display = 'block';
        inputs.B.style.display = 'block';
        inputs.C.style.display = 'block';
    }
    else if (lastTwoDigits === '14') {
        inputs.A.style.display = 'block';
        inputs.B.style.display = 'block';
        inputs.C.style.display = 'block';
    }
    else if (lastTwoDigits === '15') {
        inputs.A.style.display = 'block';
    }
    else if (lastTwoDigits === '16') {
        inputs.A.style.display = 'block';
        inputs.B.style.display = 'block';
    }
    else if (lastTwoDigits === '31') {
        inputs.A.style.display = 'block';
        inputs.B.style.display = 'block';
    }
    else if (lastTwoDigits === '32') {
        inputs.A.style.display = 'block';
        inputs.B.style.display = 'block';
    }
    else if (lastTwoDigits === '33') {
        inputs.A.style.display = 'block';
        inputs.B.style.display = 'block';
        inputs.C.style.display = 'block';
    }
    else if (lastTwoDigits === '34') {
        inputs.A.style.display = 'block';
        inputs.B.style.display = 'block';
        inputs.C.style.display = 'block';
    }
    else if (lastTwoDigits === '21') {
        inputs.A.style.display = 'block';
        inputs.B.style.display = 'block';
        macroInput2.value = selectedPartInfo.가공길이; // 필요한 값 설정
        macroInput2.readOnly = true;
        
    } 
    else if (lastTwoDigits === '22') {
        inputs.A.style.display = 'block';
        inputs.B.style.display = 'block';
        inputs.C.style.display = 'block';
        inputs.D.style.display = 'block';
        macroInput2.value = selectedPartInfo.가공길이; // 필요한 값 설정
        macroInput2.readOnly = true;
    } 
    else if (lastTwoDigits === '23') {
        inputs.A.style.display = 'block';
        inputs.B.style.display = 'block';
        inputs.C.style.display = 'block';
        inputs.D.style.display = 'block';
        macroInput2.value = selectedPartInfo.가공길이; // 필요한 값 설정
        macroInput2.readOnly = true;
    } 
    else if (lastTwoDigits === '24') {
        inputs.A.style.display = 'block';
        inputs.B.style.display = 'block';
        inputs.C.style.display = 'block';
        macroInput2.value = selectedPartInfo.가공길이; // 필요한 값 설정
        macroInput2.readOnly = true;
    } 
    else if (lastTwoDigits === '25') {
        inputs.A.style.display = 'block';
        inputs.B.style.display = 'block';
        inputs.C.style.display = 'block';
        macroInput2.value = selectedPartInfo.가공길이; // 필요한 값 설정
        macroInput2.readOnly = true;
    }
    else {
        // 기본적으로 모든 input 필드를 보이게 설정 (필요에 따라 수정 가능)
        Object.values(inputs).forEach(input => input.style.display = 'block');
    }
}

// 함수 전역 접근 가능하게 설정
window.adjustInputsBasedOnMacro = adjustInputsBasedOnMacro;

window.onMacroInputFormUpdated = function() {
    document.getElementById('macroInput3').addEventListener('input', function(event) {
        const selectedValue = event.target.value;
        adjustInputsBasedOnMacro(selectedValue);
    });
};