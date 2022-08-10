export default function cliente(req,res){
    res.status(200).json({
        id:3,
        nome:'Mateus',
        email: 'magtash68@gmail.com'
    })
}

function hadler