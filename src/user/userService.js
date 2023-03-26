 module.exports.getDataFromDBService = () => {
    return new Promise(function checkURL (resolve,reject){
        userModel.find({},function returnData(error,results){
            if(error){
                reject(false);
            }else{
                resolve(result)
            }
        })
    })
 }