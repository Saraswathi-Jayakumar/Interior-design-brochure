




var toggleButton =document.getElementsByClassName("Menu")[0];
var navbarLinks =document.getElementsByClassName("Items")[0];

toggleButton.addEventListener('click',()=>{
    navbarLinks.classList.toggle('active')
})
// declaring variables of images

var images = ["Images/Residential projects/3.Living room.jpg",
                "Images/Residential projects/7.residentialInterior.jpg",
                "Images/CommercialProjects/5.Office2.jpg",
                "Images/Others/5.Wallpaper.jpg"];

var resImages = ["Images/Residential projects/1.pooja room.jpg",
                "Images/Residential projects/2.Poojaroom.jfif",
                "Images/Residential projects/3.Living room.jpg",
                "Images/Residential projects/4.Living-Room.jpg",
                "Images/Residential projects/5.Kitchendesign.jpg",
                "Images/Residential projects/6.Kitchen.jpg",
                "Images/Residential projects/7.residentialInterior.jpg",
                "Images/Residential projects/8.Bedroom.jpg",
                "Images/Residential projects/9.Dinning.jpg",
                "Images/Residential projects/10.Dinning.jpg",
                "Images/Residential projects/11.Bathroom.jpg",
                "Images/Residential projects/12.Bathroom.jpg"];

var comImages=["Images/CommercialProjects/1.hotel-lobby.jpg",
                "Images/CommercialProjects/2.Commercialdesign2.jfif",
                "Images/CommercialProjects/3.Commercialdesign1.jpg",
                "Images/CommercialProjects/4.Office.jpg",
                "Images/CommercialProjects/5.Office2.jpg",
                "Images/CommercialProjects/6.Office.jpg",
                "Images/CommercialProjects/7.Office.jpg"];

var otherImages=["Images/Others/1.wardrobe.jpg",
                    "Images/Others/2.Wardrobe2.jpg",
                    "Images/Others/3.Ceilingdesign.jpg",
                    "Images/Others/4.Ceilingdesign2.jpg",
                    "Images/Others/5.Wallpaper.jpg",
                    "Images/Others/6.wallPaper2.jpg",
                    "Images/Others/7.Lightings.jfif",
                    "Images/Others/8.Lighting2.jpg"];

var imageContainer = document.getElementById("interiorImage");

var captionBox=document.getElementById("captionBox");

var i=0;

time=4000;

// declaring variables of setInterval function

var a;
var b;
var c;
var x;

// Display images when onload the page

changeImage();

function changeImage(){
    x=setInterval(function(){
        if(i<images.length-1){
            i++;
            }
            else{
                i=0;
            }
            imageContainer.src = images[i];
            captionBox.innerHTML=i+1+"/"+images.length;
        },time);
}

// Declaring testimonial text

const testimonials=[
                    {
                        Values:[
                            '"Wow is all I can say about the finished rooms! They came out much better than we could have ever imagined."',
                            "- Anita. S, Product Manager"
                            ],
                    },

                    {
                        Values:[
                            '"Working with xxx Interior has been a pleasure and a positive experience. The design team went above and beyond their call of duty. We ended up with an environment that is beautiful, functional and very unique."',
                            '- Monal. S, Senior Manager'
                            ],
                    },

                    {
                        Values:[
                            '"Xxx has performed and delivered for us in an efficient and professional fashion. The design talent is exceptional and has given us a unique environment for our staff and customer. Its been a great all around experience and we look forward to future projects with xxx."',
                            "- Sonu Nigam. M.J, Software Engineer"
                            ],
                    },

                    {
                        Values:[
                            '"There are few words to describe Xxx Interiors designs, we can only describe them as creative, classy and with a great sense of spacing, they are simply the best designs.  It is nice to work with true professionals with high ethics and values."',
                            "- Jay Kumar. K, Doctor"
                            ],
                    },

                    {
                        Values:[
                            '"My expectations were well understood and appropriate recommendations were discussed to get started with the right foot. It was thorough professional right from the beginning."',
                            "- Prakash. V, Fitness Trainer"
                        ],
                    },
                ];

var dots = document.getElementsByClassName("circle");               

var j=0;

var y;

var index;

// Displaying testimonial text 

changeTestimonialText();

function changeTestimonialText(){
    y=setInterval(function(){        
        if(j<testimonials.length-1){
            dots[j].classList.remove('active');
            j++;
        }
        else{
            dots[j].classList.remove('active');
            j=0;
        }
        document.getElementById("TestimonialText").innerHTML=testimonials[j].Values[0];
        document.getElementById("TestimonialName").innerHTML=testimonials[j].Values[1];
        dots[j].classList.add('active');
    },time);
}

// clearing intervals when switch between different design images

function reset(){
    clearInterval(x);
    clearInterval(a);
    clearInterval(b);
    clearInterval(c);
}

// displaying the next image in the particular image gallery

var k = 0;

var rightBut=document.getElementById("right");

rightBut.addEventListener('click',nextImage);

function nextImage(){

    reset();

    if(clicked[0]=="Residential"){
        if(i<resImages.length-1){
            i++;
        }else{
            i=0;
        }
        imageContainer.src=resImages[i];
        captionBox.innerHTML=i+1+"/"+resImages.length;
    }

    if(clicked[0]=="Commercial"){
        if(i<comImages.length-1){
            i++;
        }else{
            i=0;
        }
        imageContainer.src=comImages[i];
        captionBox.innerHTML=i+1+"/"+comImages.length;
    }

    if(clicked[0]=="Others"){
        if(i<otherImages.length-1){
            i++;
        }else{
            i=0;
        }
        imageContainer.src=otherImages[i];
        captionBox.innerHTML=i+1+"/"+otherImages.length;
    }
    
    if(clicked[0]=="All"){
        if(i<images.length-1){
            i++;
        }else{
            i=0;
        }
        imageContainer.src=images[i];
        captionBox.innerHTML=i+1+"/"+images.length;
    }
}

// displaying the previous image in the particular image gallery

var leftBut=document.getElementById("left");

leftBut.addEventListener('click',preImage);

function preImage(){

    reset();
    if(clicked[0]=="Residential"){
        if(i>0){
            --i;
        }
        else{
            i=resImages.length-1;
        }
        imageContainer.src=resImages[i];
        captionBox.innerHTML=1+i+"/"+resImages.length;
    }

    if(clicked[0]=="Commercial"){
        if(i>0){
            --i;
        }
        else{
            i=comImages.length-1;
        }
        imageContainer.src=comImages[i];
        captionBox.innerHTML=1+i+"/"+comImages.length;
    }

    if(clicked[0]=="Others"){
        if(i>0){
            --i;
        
        }
        else{
            i=otherImages.length-1;
        }
        imageContainer.src=otherImages[i];
        captionBox.innerHTML=1+i+"/"+otherImages.length;
    }

    if(clicked[0]=="All"){
        if(i>0){
            --i;
        }
        else{
            i=images.length-1;
        }
        imageContainer.src=images[i];
        captionBox.innerHTML=1+i+"/"+images.length;
    }
}

// displaying the residential design images gallery

var clicked=["All"];

var resView = document.getElementById("resView");

resView.addEventListener('click', ResView);

function ResView(){

    reset();

    clicked.pop();
    clicked.push("Residential");

    i=0;
    captionBox.innerHTML=i+1+"/"+resImages.length;
    imageContainer.src=resImages[i];
    a=setInterval(function(){
        if(i<resImages.length-1){
            i++;
            }
            else{
                i=0;
            }
            imageContainer.src=resImages[i];
            captionBox.innerHTML=i+1+"/"+resImages.length;
        },time);
}

// displaying the commercial design images gallery

var comView=document.getElementById("comView");

comView.addEventListener('click', ComView);

function ComView(){

    reset();

    clicked.pop();
    clicked.push("Commercial");

    i=0;
    captionBox.innerHTML=i+1+"/"+comImages.length;
    imageContainer.src=comImages[i];
    b=setInterval(function(){
        if(i<comImages.length-1){
            i++;
            }
            else{
                i=0;
            }
            imageContainer.src=comImages[i];
            captionBox.innerHTML=i+1+"/"+comImages.length;
        },time);
}

// displaying other design images gallery

var otherView=document.getElementById("otherView");

otherView.addEventListener('click', OtherView);

function OtherView(){

    reset();

    clicked.pop();
    clicked.push("Others");

    i=0;
    captionBox.innerHTML=i+1+"/"+otherImages.length;
    imageContainer.src=otherImages[i];
    b=setInterval(function(){
        if(i<otherImages.length-1){
            i++;
            }
            else{
                i=0;
            }
            imageContainer.src=otherImages[i];
            captionBox.innerHTML=i+1+"/"+otherImages.length;
        },time);
    }