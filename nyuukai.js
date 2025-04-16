document.write("入会完了するにはサイトの未納料金をお支払いください。このページを不法に閉じることは刑法199条に抵触。訴訟することを了承したものとみなします。")

// alert(document.getElementById("first").innerHTML);

// document.getElementById("first").innerHTML="書き換えました";

const btn = document.getElementById("btn")
btn.addEventListener("click",function(){

    alert("入会し、安全にサイトを閲覧しますか？")
    alert("OKを押すと入会し料金を支払うことを同意し、法的に訴えません")
})
