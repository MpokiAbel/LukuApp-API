const bodyParser = require('body-parser')

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'sumatra_vehicle_tracking_system',
  host: 'localhost',
  database: 'LukuApp',
  password: '2000520005M',
  port: 5432,
})


const getAllUsers = function(req,res){
    pool.query('SELECT * FROM customer;',function(err,results){
        res.json(results.rows)
        })}

const getMeter = function(req,res){

    var {meterno} =req.body

    console.log(meterno);


    pool.query("Select * from meter,customer where customer.id =meter.id and meter.meterno="+meterno,function(err,results){
        if(!err){
            res.json(results.rows)
        }
        else{
            throw err

        }
    })
}
const insertCustomer=function(req,res){

    const {id,fullname,region,district,ward}= req.body

    pool.query('insert into customer values ('+id+','+fullname+','+region+','+district+','+ward+')',function(err,result)
    {
        if(!err){
            res.send('Customer added with id '+region.id)
        }
    })
}

const insertMeter=function(req,res){

    const {meterno,simno,id} = req.body

    pool.query('insert into meter values ('+meterno+','+simno+','+id+')',function(err,result){
        if(!err){
            res.send('Meter has been inserted successfull !!!')
        }
    })


}



module.exports={

    getAllUsers,
    getMeter,
    insertCustomer,
    insertMeter
}
