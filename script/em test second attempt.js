$(document).ready(function(){
    
    var addresses;
    var pass;

    setInterval(
        function(){
            var dt=(Date.now())
            // var use=dt.toLocaleString()
            var news =new Date(dt)
            var hours=(news.getHours())
            var minutes=(news.getMinutes())
            var seconds=(news.getSeconds())
            $('#hour').html(hours)
            $('#minute').html(minutes)
            $('#second').html(seconds)
            if(hours>9){
                $('#hzero').hide()
            }
            else{
                $('#hzero').show()
            }

            if(minutes>9){
                $('#mzero').hide()
            }
            else{
                $('#mzero').show()
            }
            if(seconds>9){
                $('#szero').hide()
            }
            else{
                $('#szero').show()
            }

        },1000
    )


    $('#email').keyup(function(){
        var email=$('#email').val()
        addresses='sam@yahoo.com'
        pass='we'
        if((email.includes('@'))){
            $('#password').removeAttr('disabled')
            $('#password').keyup(function(){
                var password=($('#password').val())
                $('#time').removeAttr('disabled')
                    $('#time').keyup(function(){
                        var times= $('#time').val()
                        $('#submit1').removeAttr('disabled')
                        
                        $('#submit1').click(function(){
                            if((email=='sam@yahoo.com') && (password == 'we')){
                                $('#intro').hide()
                                $('#paga').show()
                            }
                            
                        })

                        

                
                    })
        
            })
        }
        

    })
   
    
})