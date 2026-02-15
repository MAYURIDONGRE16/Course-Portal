const express=require('express');

const app=express();

app.use(express.static('public/'));

app.set('view engine', 'ejs');


const courses = [
  { id: 1, name: "MERN Stack", duration: "6 Months", fees: 25000 },
  { id: 2, name: "Python Full Stack", duration: "5 Months", fees: 20000 },
  { id: 3, name: "Java Development", duration: "4 Months", fees: 18000 }
   ];


app.get('/',(req,res)=>{
    res.render('home.ejs')
})

app.get('/course',(req,res)=>{
   
    res.render('course.ejs',{courses})
})

app.get('/course/:id', (req, res) => {
    const course = courses.find(c => c.id == req.params.id);
    if(course) res.render('course-details', {course});
    else res.send('Course not found');
});



app.get('/about',(req,res)=>{
    res.render('about.ejs');

})


const PORT=3000
const HOST='127.0.0.1'
app.listen(PORT,HOST,()=>{
    console.log(`server is running on http://${HOST}:${PORT} `)
})