//////////////////// courses data////////////////////////////////////////

const courses_pythonList = document.querySelector('.pythoncourses');
const courses_pythonTemplate = document.querySelector("#pythoncourses");
const courses_ExcelList = document.querySelector('.excelcourses');
const courses_ExcelTemplate = document.querySelector("#excelcourses");
const courses_webList = document.querySelector('.webcourses');
const courses_webTemplate = document.querySelector("#webcourses");
const courses_javaList = document.querySelector('.javacourses');
const courses_javaTemplate = document.querySelector("#javacourses");
const courses_dataList = document.querySelector('.datacourses');
const courses_dataTemplate = document.querySelector("#datacourses");
const courses_awsList = document.querySelector('.awscourses');
const courses_awsTemplate = document.querySelector("#awscourses");
const courses_drawingList = document.querySelector('.drawingcourses');
const courses_drawingTemplate = document.querySelector("#drawingcourses");

//fetching data
const getPythonCourses = async () => {
        const response_python = await fetch("http://localhost:3000/coursespython");
        json_python = await response_python.json();
        return json_python
}
getPythonCourses().then(
    json_python => {
        for(i=0;i< json_python.length;i++){
            const course = courses_pythonTemplate.content.cloneNode(true).children[0];
            const img = course.querySelector(".image");
            img.src = json_python[i].image;
            let title = course.querySelector(".title");
            title.innerText = json_python[i].title;
            let author = course.querySelector(".author");
            author.innerText=json_python[i].author;
            let rate = course.querySelector(".rate");
            rate.innerText =json_python[i].rate ;
            let reviews = course.querySelector(".reviews") ;
            reviews.innerText ="("+json_python[i].reviews +")";
            let price = course.querySelector(".price");
            price.innerText = "E£" + json_python[i].price;
            let pre_discount = course.querySelector(".pre_discount");
            pre_discount.innerText = "E£" + json_python[i].pre_discount;
            let bestseller=course.querySelector(".bestseller");
            if (json_python[i].bestseller===true) {
                bestseller.innerText = "Bestseller"; 
            }
            else{
                bestseller.innerText  = ""; 
            }
            courses_pythonList.append(course);


        }
    }
)

const getExcelCourses = async () => {
    const response_excel = await fetch("http://localhost:3000/coursesexcel");
    json_excel = await response_excel.json();
    return json_excel
}
getExcelCourses().then(
json_excel => {
    for(i=0;i< json_excel.length;i++){
        const course = courses_ExcelTemplate.content.cloneNode(true).children[0];
        const img = course.querySelector(".image");
        img.src = json_excel[i].image;
        let title = course.querySelector(".title");
        title.innerText = json_excel[i].title;
        let author = course.querySelector(".author");
        author.innerText=json_excel[i].author;
        let rate = course.querySelector(".rate");
        rate.innerText =json_excel[i].rate ;
        let reviews = course.querySelector(".reviews") ;
        reviews.innerText ="("+json_excel[i].reviews +")";
        let price = course.querySelector(".price");
        price.innerText = "E£" + json_excel[i].price;
        let pre_discount = course.querySelector(".pre_discount");
        pre_discount.innerText = "E£" + json_excel[i].pre_discount;
        let bestseller=course.querySelector(".bestseller");
        if (json_excel[i].bestseller===true) {
            bestseller.innerText = "Bestseller"; 
        }
        else{
            bestseller.innerText  = ""; 
        }
        courses_ExcelList.append(course);



    }
}
)

const getWebCourses = async () => {
    const response_web = await fetch("http://localhost:3000/coursesweb");
    json_web = await response_web.json();
    return json_web;
}
getWebCourses().then(
    json_web => {
        for(i=0;i< json_web.length;i++){
            const course = courses_webTemplate.content.cloneNode(true).children[0];
            const img = course.querySelector(".image");
            img.src = json_web[i].image;
            let title = course.querySelector(".title");
            title.innerText = json_web[i].title;
            let author = course.querySelector(".author");
            author.innerText=json_web[i].author;
            let rate = course.querySelector(".rate");
            rate.innerText =json_web[i].rate ;
            let reviews = course.querySelector(".reviews") ;
            reviews.innerText ="("+json_web[i].reviews +")";
            let price = course.querySelector(".price");
            price.innerText = "E£" + json_web[i].price;
            let pre_discount = course.querySelector(".pre_discount");
            pre_discount.innerText = "E£" + json_web[i].pre_discount;
            let bestseller=course.querySelector(".bestseller");
            if (json_web[i].bestseller===true) {
                bestseller.innerText = "Bestseller"; 
            }
            else{
                bestseller.innerText  = ""; 
            }
            courses_webList.append(course);



        }
    }
)
const getJavaCourses = async () => {
    const response_excel = await fetch("http://localhost:3000/coursesjava");
    json_java = await response_excel.json();
    return json_java;
}
getJavaCourses().then(
    json_java => {
        for(i=0;i< json_java.length;i++){
            const course = courses_javaTemplate.content.cloneNode(true).children[0];
            const img = course.querySelector(".image");
            img.src = json_java[i].image;
            let title = course.querySelector(".title");
            title.innerText = json_java[i].title;
            let author = course.querySelector(".author");
            author.innerText=json_java[i].author;
            let rate = course.querySelector(".rate");
            rate.innerText =json_java[i].rate ;
            let reviews = course.querySelector(".reviews") ;
            reviews.innerText ="("+json_java[i].reviews +")";
            let price = course.querySelector(".price");
            price.innerText = "E£" + json_java[i].price;
            let pre_discount = course.querySelector(".pre_discount");
            pre_discount.innerText = "E£" + json_java[i].pre_discount;
            let bestseller=course.querySelector(".bestseller");
            if (json_java[i].bestseller===true) {
                bestseller.innerText = "Bestseller"; 
            }
            else{
                bestseller.innerText  = ""; 
            }
            courses_javaList.append(course);


        }
    }
)

const getdataCourses = async () => {
    const response_data = await fetch("http://localhost:3000/coursesdata");
    json_data= await response_data.json();
    return json_data;
}
getdataCourses().then(
    json_data => {
        for(i=0;i< json_data.length;i++){
            const course = courses_dataTemplate.content.cloneNode(true).children[0];
            const img = course.querySelector(".image");
            img.src = json_data[i].image;
            let title = course.querySelector(".title");
            title.innerText = json_data[i].title;
            let author = course.querySelector(".author");
            author.innerText=json_data[i].author;
            let rate = course.querySelector(".rate");
            rate.innerText =json_data[i].rate ;
            let reviews = course.querySelector(".reviews") ;
            reviews.innerText ="("+json_data[i].reviews +")";
            let price = course.querySelector(".price");
            price.innerText = "E£" + json_data[i].price;
            let pre_discount = course.querySelector(".pre_discount");
            pre_discount.innerText = "E£" + json_data[i].pre_discount;
            let bestseller=course.querySelector(".bestseller");
            if (json_data[i].bestseller===true) {
                bestseller.innerText = "Bestseller"; 
            }
            else{
                bestseller.innerText  = ""; 
            }
            courses_dataList.append(course);


        }
    }
)
const getawsCourses = async () => {
    const response_aws = await fetch("http://localhost:3000/coursesaws");
    json_aws= await response_aws.json();
    return json_aws;
}
getawsCourses().then(
    json_aws => {
        for(i=0;i< json_aws.length;i++){
            const course = courses_awsTemplate.content.cloneNode(true).children[0];
            const img = course.querySelector(".image");
            img.src = json_aws[i].image;
            let title = course.querySelector(".title");
            title.innerText = json_aws[i].title;
            let author = course.querySelector(".author");
            author.innerText=json_aws[i].author;
            let rate = course.querySelector(".rate");
            rate.innerText =json_aws[i].rate ;
            let reviews = course.querySelector(".reviews") ;
            reviews.innerText ="("+json_aws[i].reviews +")";
            let price = course.querySelector(".price");
            price.innerText = "E£" + json_aws[i].price;
            let pre_discount = course.querySelector(".pre_discount");
            pre_discount.innerText = "E£" + json_aws[i].pre_discount;
            let bestseller=course.querySelector(".bestseller");
            if (json_aws[i].bestseller===true) {
                bestseller.innerText = "Bestseller"; 
            }
            else{
                bestseller.innerText  = ""; 
            }
            courses_awsList.append(course);


        }
    }
)
const getdrawingCourses = async () => {
    const response_drawing = await fetch("http://localhost:3000/coursesdrawing");
    json_drawing= await response_drawing.json();
    return json_drawing;
}
getdrawingCourses().then(
    json_drawing => {
        for(i=0;i< json_drawing.length;i++){
            const course = courses_drawingTemplate.content.cloneNode(true).children[0];
            const img = course.querySelector(".image");
            img.src = json_drawing[i].image;
            let title = course.querySelector(".title");
            title.innerText = json_drawing[i].title;
            let author = course.querySelector(".author");
            author.innerText=json_drawing[i].author;
            let rate = course.querySelector(".rate");
            rate.innerText =json_drawing[i].rate ;
            let reviews = course.querySelector(".reviews") ;
            reviews.innerText ="("+json_drawing[i].reviews +")";
            let price = course.querySelector(".price");
            price.innerText = "E£" + json_drawing[i].price;
            let pre_discount = course.querySelector(".pre_discount");
            pre_discount.innerText = "E£" + json_drawing[i].pre_discount;
            let bestseller=course.querySelector(".bestseller");
            if (json_drawing[i].bestseller===true) {
                bestseller.innerText = "Bestseller"; 
            }
            else{
                bestseller.innerText  = ""; 
            }
            courses_drawingList.append(course);

        }
    }
)

//search bar being functional 
const course_block = getPythonCourses();
const search_button = document.querySelector(".searchbtn");
const searchcourse = document.querySelector(".formcontrol");

 const Search=(e)=>{
    e.preventDefault();
    const searchinput = searchcourse.value;
    for (let i = 0; i < course_block.length; ++i){
            if(course_block[i].title.toLowerCase().indexOf(searchinput.toLowerCase()) !== -1){
                course_block[i].style.display ="";
            }
            else{
                course_block[i].style.display="none";
            }
    }
}
search_button.addEventListener("click", Search);