const memberValidation = {
    memberId : {
        presence : true,
        //영문으로 시작하고 영 숫자 허용 5자리 이상 20자리 이하-
        format : { pattern: "(?=[\d]*[a-zA-Z])[a-zA-Z0-9]{5,20}" }
    },
    memberPassword : {
        presence : true,
        format : { pattern: "(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,20}$" }
    },
    memberPasswordCheck : {
        presence : true,
        equality : "memberPassword"
    },
    memberName : {
        presence : true,
        format : { pattern : "^[기-힣]{2,8}" },
    },
    memberNickname : {
        presence : true,
        format : {pattern : "[기-힣a-zA-Z0-9]{1,20}" },
    },
    memberPhone : {
      presence : true,
      format : { pattern : "^((010-[0-9]{4})|((01[16789]{1}|02|0[3-9]{1}[0-9]{1})-[0-9]{3,4}))-[0-9]{4}$" }
    },
    memberEmail : {
        presence : true,
        format : { pattern : "^[a-zA-Z0-9]([-_\.]?[a-zA-Z0-9])*@[a-zA-Z0-9]([-_\.]?[a-zA-Z0-9])*\.[a-zA-Z0-9]{2,3}$" }
    }

}

//유효성 체크 항목 is-invalid 초기화
function removeIsInvalidInClass() {
    document.querySelectorAll('.check-validation').forEach(function (inputTag) {
        inputTag.classList.remove('is-invalid');
    });
}

//유효성 체크 항목 is-invalid 추가
function addIsInvalidInClass(result) {

    if (result) {
        console.log(result);
        for (const name in result) {
            console.log(typeof name);
            console.log(name);
            document.querySelector(`input[name=${name}]`).classList.add('is-invalid');
        }
    }

}

document.getElementById('memberJoinForm').addEventListener('submit',function(event){
    event.preventDefault();
    removeIsInvalidInClass();
    const result = validate(this,memberValidation);
    addIsInvalidInClass(result);
});

