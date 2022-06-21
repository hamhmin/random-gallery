//이미지 변경 함수
const img_url = [
    'images/img01.jpg',
    'images/img02.jpg',
    'images/img03.jpg',
    'images/img04.jpg',
    'images/img05.jpg',
    'images/img06.jpg',
];

$(function(){

    // 년/월/일
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth();
    let date = d.getDate();
    console.log(year,month,date);

    // HTML에 날짜 표시

    $('.year').html(year);
    // $('.month').html(month);
    // 1~9월은 01 02 03월... 로 표시
    if(month > 9){
        $('.month').html(month)
    }else{
        $('.month').html(`0${month}`)
    }

    $('.date').html(date);

    function changeBg() {
        // 0 ~ 2 랜덤값 생성(이미지 번호)
        let imgNum = Math.floor(Math.random() * 5);
        console.log(imgNum);

        // 이미지 변경하기
        $('body').css({
            background: `url('images/filter-box.png'),
            url(${img_url[imgNum]})`
          })
    }

    // setInterval (함수, 시간ms)
    setInterval(changeBg,3500);
});