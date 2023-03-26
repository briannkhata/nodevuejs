const getDataControllerfn = async (req,res) =>{
    const employees = await userService.getDataFromDBService;
    res.send({"status" : true, "data":employees})
}