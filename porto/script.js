const track=document.querySelector('#experience-track');
const previous=document.querySelector('#exp-prev');
const next=document.querySelector('#exp-next');
function updateSlider(){const end=track.scrollWidth-track.clientWidth-4;previous.disabled=track.scrollLeft<=4;next.disabled=track.scrollLeft>=end}
previous.addEventListener('click',()=>track.scrollBy({left:-380,behavior:'smooth'}));
next.addEventListener('click',()=>track.scrollBy({left:380,behavior:'smooth'}));
track.addEventListener('scroll',updateSlider);window.addEventListener('resize',updateSlider);updateSlider();

const imageDialog=document.querySelector('#image-dialog');
const dialogImage=imageDialog.querySelector('img');
const dialogCaption=imageDialog.querySelector('p');
const prevImage=imageDialog.querySelector('.prev');
const nextImage=imageDialog.querySelector('.next');
let gallery=[];let current=0;
function renderGallery(){dialogImage.src=gallery[current];dialogCaption.textContent=`${current+1} / ${gallery.length}`;prevImage.hidden=gallery.length<2;nextImage.hidden=gallery.length<2}
function openGallery(images){gallery=images;current=0;renderGallery();imageDialog.showModal()}
document.querySelectorAll('[data-gallery]').forEach(button=>button.addEventListener('click',()=>openGallery(button.dataset.gallery.split(','))));
document.querySelectorAll('[data-single]').forEach(button=>button.addEventListener('click',()=>openGallery([button.dataset.single])));
prevImage.addEventListener('click',()=>{current=(current-1+gallery.length)%gallery.length;renderGallery()});
nextImage.addEventListener('click',()=>{current=(current+1)%gallery.length;renderGallery()});
imageDialog.querySelector('.dialog-close').addEventListener('click',()=>imageDialog.close());

const detailDialog=document.querySelector('#detail-dialog');
document.querySelectorAll('.mini-project').forEach(button=>button.addEventListener('click',()=>{detailDialog.querySelector('img').src=button.dataset.modalImage;detailDialog.querySelector('h2').textContent=button.dataset.modalTitle;detailDialog.querySelector('.detail-text').textContent=button.dataset.modalText;detailDialog.querySelector('strong').textContent=button.dataset.modalStack;detailDialog.showModal()}));
detailDialog.querySelector('.dialog-close').addEventListener('click',()=>detailDialog.close());
document.querySelectorAll('.placeholder-link').forEach(link=>link.addEventListener('click',event=>event.preventDefault()));
[imageDialog,detailDialog].forEach(dialog=>dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close()}));
