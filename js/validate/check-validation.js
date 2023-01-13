const memberValidation = {
    memberId : {
        presence : true,
        //영문으로 시작하고 영 숫자 허용 5자리 이상 20자리 이하-
        format : { pattern: "(?=[\d]*[a-zA-Z])[a-zA-Z0-9]{5,20}" }
    },
    memberPw : {
        presence : true,
        format : { pattern: "(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,20}$" }
    },
    memberPwCheck : {
        presence : true,
        equality : "memberPassword"
    },
    name : {
        presence : true,
        format : { pattern : "^[기-힣]{2,8}" },
    },
    nickName : {
        presence : true,
        format : {pattern : "[기-힣a-zA-Z0-9]{1,20}" },
    },
    phoneNumber : {
        presence : true,
        format : { pattern : "^((010-[0-9]{4})|((01[16789]{1}|02|0[3-9]{1}[0-9]{1})-[0-9]{3,4}))-[0-9]{4}$" }
    },
    email : {
        presence : true,
        format : { pattern : "^[a-zA-Z0-9]([-_\.]?[a-zA-Z0-9])*@[a-zA-Z0-9]([-_\.]?[a-zA-Z0-9])*\.[a-zA-Z0-9]{2,3}$" }
    }

}

const allConstraint = new Map();
allConstraint.set('memberValidation',memberValidation)

//유효성 체크 항목 is-invalid 초기화
function removeIsInvalidInClass() {
    document.querySelectorAll('.check-validation').forEach(function (inputTag) {
        inputTag.classList.remove('is-invalid');
    });
}

//유효성 체크 항목 is-invalid 추가
function addIsInvalidInClass(result) {

    if (result) {

        for (const name in result) {
            document.querySelector(`input[name=${name}]`).classList.add('is-invalid');
        }

    }

}

document.querySelector('.need-validation-form').addEventListener('submit',function(event){
    event.preventDefault();
    removeIsInvalidInClass();
    const result = validate(this,allConstraint.get(this.dataset.constraint));

    if(result) {
        addIsInvalidInClass(result);
    }else {
        this.submit();
    }

});

