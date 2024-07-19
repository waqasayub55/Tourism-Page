const images1 = ["https://upload.wikimedia.org/wikipedia/commons/f/fc/LotusDelhi.jpg",
                 "https://media.islamicity.org/wp-content/uploads/2017/03/AdobeStock_12502528.jpeg", "https://content.cdntwrk.com/files/aHViPTExNjEzMCZjbWQ9aXRlbWVkaXRvcmltYWdlJmZpbGVuYW1lPWl0ZW1lZGl0b3JpbWFnZV82MTdhNzkwYWRmMjY3LmpwZyZ2ZXJzaW9uPTAwMDAmc2lnPWI5N2UzYTQ2NDI5YWM3NjJiNGRmYTRlMWQxZGE1MDAy",
                 "https://indiacsr.in/wp-content/uploads/2022/07/India-Gate.jpg"];
const imageElement1 = document.getElementById("image1");
const images2 = ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/ee/1b/e4/kerala-luxury-houseboat.jpg?w=700&h=-1&s=1","https://img.freepik.com/premium-photo/india-gate-all-india-war-memorial-with-illuminated-new-delhi_117930-1909.jpg", "https://img.traveltriangle.com/blog/wp-content/uploads/2019/06/Red-Fort-cover.jpg", "https://www.arch2o.com/wp-content/uploads/2021/09/Arch2O-10-interesting-facts-about-the-statue-of-unity-1-scaled.jpg"];
const imageElement2 = document.getElementById("image2");
const images3 = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvxsGRNaAj-OtdcP6PSZAZbKg_WZ1LUahhRg&usqp=CAU","https://indiaongo.in/wp-content/uploads/2016/11/lotus-temple.jpg", "https://planetofhotels.com/guide/sites/default/files/styles/node__blog_post__bp_banner/public/hero_banner/Taj-Mahal.jpg", "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/61000/61730-Red-Fort.jpg"];
const imageElement3 = document.getElementById("image3");
const images4 = ["https://www.airpano.com/files/vr-taj-mahal_01_big.jpg", "https://img.traveltriangle.com/blog/wp-content/uploads/2019/06/Red-Fort-cover.jpg", "https://cf.bstatic.com/xdata/images/hotel/max1024x768/122953225.jpg?k=4680a7bab07189d5915a623e34754ccb7fdca079670d3a4be13725ca5d9d0590&o=&hp=1","https://a.travel-assets.com/findyours-php/viewfinder/images/res70/67000/67993-New-Delhi.jpg"];
const imageElement4 = document.getElementById("image4");
let currentIndex = 0;

function changeImage() {
  imageElement1.src = images1[currentIndex];
   imageElement2.src = images2[currentIndex];
  imageElement3.src = images3[currentIndex];
   imageElement4.src = images4[currentIndex];
  currentIndex= (currentIndex + 1) % images1.length;
  
}

setInterval(changeImage, 1000); // Change image every second


const textElement = document.getElementById('text');
const text = "Hello there, I'm MPS, a passionate blogger who thrives on crafting stories, sharing insights, and connecting with an ever-growing audience. My journey in the world of blogging has been nothing short of an adventure. I'm committed to offering a unique perspective that resonates with my audience.";
const typingSpeed = 20; // Adjust typing speed (lower value means faster)

let charIndex = 0;

function type() {
  if (charIndex < text.length) {
    textElement.textContent += text.charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  }
  else{
    const signature=document.getElementById("signature");
    signature.style.opacity=1;
    const cursor=document.getElementById("cursor");
    cursor.style.display="none";
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(type, typingSpeed);
});


