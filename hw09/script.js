ID=prompt('아이디 입력');
if(ID=='admin') {
    password=prompt('비밀번호 입력');
    if(password==='123456') {
        alert('로그인 되었습니다. 커피 원두 추천을 받아 보세요.')
        location.href="coffee (login complete).html"
    }
    else {
        alert('회원 정보가 없습니다. 회원가입을 진행 해 주세요.')
        location.href="signup.html"
    }
}
else {
    alert('회원 정보가 없습니다. 회원가입을 진행 해 주세요.')
    location.href="signup.html"
}