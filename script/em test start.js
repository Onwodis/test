

$(document).ready(function(){
    var answer1;
    var answer2;
    var answer3;
    var answer4;

    var score1;
    var score2;
    var score3;
    var score4;
    var totals;

    var dancer1;
    var dancer2;
    var dancer3;
    var dancer4;

    var rats1='A'
    var rats2='B'
    var rats3='C'
    var rats4='D'

    // var page11=$('#pg1')
    // page11.hide(3000)
    // if((mailAdresses.includes(email)) && (passLists.includes(password))){


    // login started
    var mailAdresses=['sam@yahoo.com','me@yahoo.com','she@yahoo.com','ok@gmail.com','yes@outlook.com']
    var passLists=['we',12,123,1234,12345]
    // function ghh(){
    //     $('#firstpg1').hide()
    //     page11.show()
    // }

    // $('#email').keyup(function(){
    //     var email=$('#email').val()
    //     if(email.includes('@')){
    //         $('#password').removeAttr('disabled')
    //         $('#password').keyup(function(){
    //             var password=$('#password').val()
    //             $('#time').removeAttr('disabled')
    //                 $('#time').keyup(function(){
    //                     var times= $('#time').val()
    //                     $('#submit2').removeAttr('disabled')
    //                     $('#submit2').click(function(){
    //                         if((mailAdresses.includes(email)) && (passLists.includes(password))){
                                
    //                         }
    //                         else{
    //                             alert('incorrect details')
    //                         }
                            
                            
    //                     })

                        

                
    //                 })
        
    //         })
    //     }
        

    // })





    // login ended
    



    // for pg1 and p1
    // $('#pg1').show()
    $('#a').click(function(){
        answer1=$('#a').val()       
        $('#p2').removeAttr('disabled')
    })
    $('#b').click(function(){
        answer1=$('#b').val()
        $('#p2').removeAttr('disabled')

    })
    $('#c').click(function(){
        answer1=$('#c').val()
        $('#p2').removeAttr('disabled')
    })
    $('#d').click(function(){
        answer1=$('#d').val()
        $('#p2').removeAttr('disabled')
    })
    $('#e').click(function(){
        answer1=$('#e').val()
        $('#p2').removeAttr('disabled')
    })
    $('#p2').click(function(){
        if(answer1=='a'){
            score1=1
        }
        else{
            score1=0
            dancer1=answer1
        }   
        $('#pg1').hide(700)
        $('#pg2').show(400)

    })
 // for pg2 and p2
    $('#a2').click(function(){
        answer2=$('#a2').val()       
        $('#p32').removeAttr('disabled')
    })
    $('#b2').click(function(){
        answer2=$('#b2').val()

        $('#p32').removeAttr('disabled')
    })
    $('#c2').click(function(){
        answer2=$('#c2').val()
        $('#p32').removeAttr('disabled')

    })
    $('#d2').click(function(){
        answer2=$('#d2').val()

        $('#p32').removeAttr('disabled')
    })
    $('#e2').click(function(){
        answer2=$('#e2').val()
        $('#p32').removeAttr('disabled')
    })
    $('#p32').click(function(){
        if(answer2=='b'){
            score2=1
        }
        else{
            score2=0
            dancer2=answer2
            // dancer2.css('color','red')  
            // dancer2.css('font-weight','bolder')
        }
        $('#pg2').hide(700)
        $('#pg3').show(400)
    })


                // for pg3 and p3
    
    $('#a3').click(function(){
        answer3=$('#a3').val()       
        $('#p43').removeAttr('disabled')
    })
    $('#b3').click(function(){
        answer3=$('#b3').val()
        $('#p43').removeAttr('disabled')

    })
    $('#c3').click(function(){
        answer3=$('#c3').val()
        $('#p43').removeAttr('disabled')
    })
    $('#d3').click(function(){
        answer3=$('#d3').val()
        $('#p43').removeAttr('disabled')
    })
    $('#e3').click(function(){
        answer3=$('#e3').val()
        $('#p43').removeAttr('disabled')
    })
    $('#p43').click(function(){
        if(answer3=='c'){
            score3=1
        }
        else{
            score3=0
            dancer3=answer3
            // dancer3.css('color','red')  
            // dancer3.css('font-weight','bolder')
        }
        $('#pg3').hide(700)
        $('#p2').hide(700)
        $('#p3').hide(1000)
        $('#pg4').show(400)
        $('#finish4').setInterval(200)
    })

        // PG4 and p4
    $('#a4').click(function(){
        answer4=$('#a4').val()       
        $('#finish4').removeAttr('disabled')
    })
    $('#b4').click(function(){
        answer4=$('#b4').val()

        $('#finish4').removeAttr('disabled')
    })
    $('#c4').click(function(){
        answer4=$('#c4').val()
        $('#finish4').removeAttr('disabled')

    })
    $('#d4').click(function(){
        answer4=$('#d4').val()

        $('#finish4').removeAttr('disabled')
    })
    $('#e4').click(function(){
        answer4=$('#e4').val()

        $('#finish4').removeAttr('disabled')
    })

    $('#finish4').click(function(){
        if(answer4=='d'){
            score4=1
        }
        else {
            score4=0
            dancer4=answer4
            // dancer4.css('color','red')  
            // dancer4.css('font-weight','bolder')  
        }
        totals=score1+score2+score3+score4

        // $('#finish4').hide(400)
        $('#pg4').hide(1200)
        alert('Sure?')
        $('#submitteds').show(900)
        $('#scorez').html('Your score is ' +totals)
        if(answer1=='a'){
            $('#q1').html("Question 1: "+"<span style='font-size: larger;color: blue;font-weight: bolder;'>"+rats1+"</span>" +"(Correct)")
        }
        else{
            $('#q1').html("Question 1:" +"<span style='font-size:larger;color: red;font-weight: bolder;text-transform: uppercase;'>"+dancer1+"</span>"+' (WRONG). The correct option is '+rats1)
        }
        if(answer2=='b'){
            $('#q2').html("Question 2: "+"<span style='font-size: larger;color: blue;font-weight: bolder;'>"+rats2+"</span>" +"(Correct)")
        }
        else{
            $('#q2').html("Question 2:" +"<span style='font-size: larger;color: red;font-weight: bolder;text-transform: uppercase;'>"+dancer2+"</span>"+' (WRONG). The correct option is '+rats2)
        }
        if(answer3=='c'){
            $('#q3').html("Question 3: "+"<span style='font-size: larger;color: blue;font-weight: bolder;'>"+rats3+"</span>" +"(Correct)")
        }
        else{
            $('#q3').html("Question 3:" +"<span style='font-size: larger;color: red;font-weight: bolder;text-transform: uppercase;'>"+dancer3+"</span>"+' (WRONG). The correct option is '+rats3)
        }
        if(answer4=='d'){
            $('#q4').html("Question 4: "+"<span style='font-size: larger;color: blue;font-weight: bolder;'>"+rats4+"</span>" +"(Correct)")
        }
        else{
            $('#q4').html("Question 4:" +"<span style='font-size: larger;color: red;font-weight: bolder;text-transform: uppercase;'>"+dancer4+"</span>"+' (WRONG). The correct option is '+rats4)
        }
        // $("#display2").html("<u>Here is the "+ "<span style='color:blue'> "+start+"</span> "+" times table ,through to "+ stop +"</span></u>")


    })  
    
    
    


    

    


})