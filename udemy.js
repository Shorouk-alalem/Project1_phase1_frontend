const course_title = document.querySelectorAll(".title");
const course_author = document.querySelectorAll(".author");
const course_image = document.querySelectorAll(".image");
const course_price = document.querySelectorAll(".price");

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
            course_price[i].textContent = "$"+coursedata[i].price;
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
