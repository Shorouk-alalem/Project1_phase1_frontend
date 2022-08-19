const course_title = document.querySelectorAll(".title");
const course_author = document.querySelectorAll(".author");
const course_image = document.querySelectorAll(".image");
const course_price = document.querySelectorAll(".price");
const course_rating = document.querySelectorAll(".rate");
const course_review = document.querySelectorAll(".reviewers");
const course_price2 = document.querySelectorAll(".pre_discount");
const bestseller = document.querySelectorAll(".bestseller");

//fetching data
const getCourses = async () => {
        let response = await fetch("http://localhost:3000/courses");
        json = await response.json();
        return json;
}
//DOM manipulation  
getCourses().then(
    coursedata => {
        for (let i = 0; i < coursedata.length; ++i) {
            course_title[i].textContent = coursedata[i].title;
            course_author[i].textContent = coursedata[i].author;
            course_image[i].src  = coursedata[i].image;
            course_price[i].textContent = "E£"+coursedata[i].price;
            course_rating[i].textContent = coursedata[i].rate;
            course_review[i].textContent = "("+coursedata[i].reviews+")";
            course_price2[i].textContent = "E£"+coursedata[i].pre_discount;
            if (coursedata[i].bestseller==true) {
                bestseller[i].textContent = "Bestseller"; 
            }
            else{
                bestseller[i].textContent  = ""; 
            }


        }
    }
);

//search bar being functional 
const course_block = document.querySelectorAll(".courseblock");
const search_button = document.querySelector(".search-button");
const searchcourse = document.querySelector(".form-control");

 const Search=(e)=>{
    e.preventDefault();
    const searchinput = searchcourse.value;
    for (let i = 0; i < course_block.length; ++i){
            if(course_title[i].textContent.toLowerCase().indexOf(searchinput.toLowerCase()) != -1){
                course_block[i].style.display ="";
            }
            else{
                course_block[i].style.display="none";
            }
    }
}
search_button.addEventListener("click", Search);
