export default function cliente(req,res){
    if(req.method == 'POST'){
        hadlePost(req, res)
    }
    else{
        res.status(405).
    }

}

function hadlePost(req, res){
    res.status(200).json({
        id:3,
        nome:'Mateus',
        email: 'magtash68@gmail.com'
    })
}