export default function cliente(req,res){
    if(req.method == 'POST'){
        hadlePost(req, res)
    }
    else{
        res.status(405).send()
    }

}

function hadlePost(req, res){
