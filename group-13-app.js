import express from 'express' 

const app = express();

const PORT = 3000; 

app.get('/datetime', (req, res) =>{ 
    const currentDateTime = new Date(); 
    const date = currentDateTime.toISOString().split('T')[0]; //the toISOString extract the full ISO string then i splite ('T')[0] will handle just the date part

    const time = currentDateTime.toTimeString().split(" ")[0]; //the toTimeString gives a time string of the type 12:23:30 GMT+0000 the split(" ")[0] method takes the part with index 0 which give the time part
    res.json({
        date : date,
        time : time
    }); 
})
app.listen(PORT, ()=>{
    console.log(`Server is runing on http://localhost:${PORT}`);
});