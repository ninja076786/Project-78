var allfamname=["My Family Book","Mom","Dad","Brother #1","Me","Brother #2","Baby","Grandmother"];
var allfamimg=["https://learnto-fly3.com/wp-content/uploads/thumbs/gamemonetize/H/happy-family-coloring-book-150x150.jpg","https://th.bing.com/th/id/R5927699426d630cbe379b6483eacfcf5?rik=vivkRrOYjlfjQg&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fxig%2f6ex%2fxig6exprT.png&ehk=1IxwiAqyTKf%2bBXb0aq45yQ12P550565QJtgBSzwZ%2f38%3d&risl=&pid=ImgRaw","https://www.nicepng.com/png/detail/90-905390_dad-cartoon-dad-png.png","https://th.bing.com/th/id/Ra94be14ee4f3c1cf09c6faa25e0628c4?rik=haGa%2fPsItOV04g&riu=http%3a%2f%2fwww.parkwayreststop.com%2fwp-content%2fuploads%2f2012%2f12%2fBoy.jpg&ehk=96YUaPEsBtqi5qqPSwdcU%2fsBV1kHdYrJq4N2Zrb6By8%3d&risl=&pid=ImgRaw","https://i.pinimg.com/originals/6c/37/69/6c37698a47865e8bc16c693bbc6384cc.png","https://media.istockphoto.com/vectors/cartoon-school-boy-with-school-bag-is-waving-his-hand-back-to-school-vector-id693560778?k=6&m=693560778&s=612x612&w=0&h=KriD2c8ZQlKfHN05O3VGCYFgq3O8UGgEYmMuewc1AUw=","https://th.bing.com/th/id/R43960e364c8c9695ae0640f86902bd4f?rik=8YKEXShM5qOF%2fw&riu=http%3a%2f%2fclipground.com%2fimages%2fcutest-baby-boy-clipart-5.jpg&ehk=8W0nBxI8inGcOhN8ul97uhV5S5JK4G8k%2bQa9oqzS1As%3d&risl=&pid=ImgRaw","https://www.clipartmax.com/png/small/285-2853661_grandmother-clipart-black-and-white-senior-moments-at-my-age-the-only.png"]
var i=0;
function flipimage1() {
if (i == 8) {
i=0
}
document.getElementById("Family Name").innerHTML=allfamname[i];
document.getElementById("img").src=allfamimg[i];
i++;}
function flipimage2() {
if (i == 0) {
i=8
}
i--;
document.getElementById("Family Name").innerHTML=allfamname[i];
document.getElementById("img").src=allfamimg[i];
}