function getoldlist() {
    var u = window.localStorage.getItem('userId');
    var list;
    this.$axios({
        method:'post',
        url:'',
        data:{
           uid:u
        }
    }).then(response=>{
        console.log(response.data)
        return response.data;
    }

    )

}