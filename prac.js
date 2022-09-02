var text = document.getElementById('greeting');
var im = document.querySelector('img')
var timer = new Date();
var hour = timer.getHours();
if (hour > 12) {
    text.innerText = 'good evening'
    im.src = '../image/img2.jpg'
}
else {
    text.innerText = 'good morning'
    im.src = '../image/img1.jpg'

}
