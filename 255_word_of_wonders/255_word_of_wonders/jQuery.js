$(function(){

    var letters = [] ;
    var shuffleNum ;
    var answersArray = ['MARKS','MARK','MASK','RAM','ASK','','','','','']

    $("#circular-area").css({'height':'285px','width':'285px'});
    
    var word ="";
    $('#circular-area span').click(function(){

          
        if(!($(this).hasClass('clicked'))){
            $(this).addClass('clicked');
            word += $(this).text();

            $('.keyword-review').append($(this).text());
            
        }else{
            $(this).effect("shake",{direction:"up",times:2},500)
        }
      });
      $(document).bind("contextmenu", function(e){
        e.preventDefault();
        var flag=0;
        for(let k=1;k<6;k++){
            console.log(word);
            if(word===answersArray[k-1]){ 
                flag = 1 ;
                if(answersArray[k+4]==="1"){
                $(`.${answersArray[k-1]}`).animate({color:"blue"},100);
                $(`.${answersArray[k-1]}`).animate({color:"white"},100);
                $(`.${answersArray[k-1]}`).animate({color:"blue"},100);
                $(`.${answersArray[k-1]}`).animate({color:"white"},100);
                $(`.${answersArray[k-1]}`).animate({color:"blue"},100);
                $(`.${answersArray[k-1]}`).animate({color:"white"},100);
                break;
                }
                answersArray[k+4]="1";
                $(`.${answersArray[k-1]}`).animate({backgroundColor: '#7e93cc'},700);
                $(`.${answersArray[k-1]}`).addClass("founded");
            }
        }
        if(flag==0){
            $('.keyword-review').effect("shake", {times:2},500);
            word="";
            setTimeout(function(){
                $('.keyword-review').text("");
            }, 500);
            
        }else{
            word="";
            $('.keyword-review').text("");
        }
        
        
        for(let j=1;j<6;j++){
            $(`.letter-${j}`).removeClass("clicked");
        }
      });
      
        //shuffle button
      $('.material-icons').click(function(){
        if($(".keyword-review").text()==""){
        for(let i=1;i<6;i++){
            letters[i]=$(`.letter-${i}`).text();
            $(`.letter-${i}`).text("") ;
        }
        console.log(letters);
        shuffleNum = Math.floor(Math.random()*5)+1 ;
        
        for(let t=1;t<6;t++){
           while($(`.letter-${shuffleNum}`).text()!==""){
            shuffleNum = Math.floor(Math.random()*5)+1 ;
           }
           $(`.letter-${shuffleNum}`).text(letters[t]);
           shuffleNum = Math.floor(Math.random()*5)+1 ;
        }
    }else{
        $('.material-icons').effect("shake",{times:2,distance:10},500);
    }
      });

      $('.lightbulb').click(function(){
        for(let n=1;n<7;n++){
            for(let m=0;m<7;m++){
               if(!$(`table tr:nth-of-type(${n})`).children().eq(`${m}`).hasClass("founded")&&
               !$(`table tr:nth-of-type(${n})`).children().eq(`${m}`).hasClass("hint")){
                $(`table tr:nth-of-type(${n})`).children().eq(`${m}`).addClass("hint");
                $(`table tr:nth-of-type(${n})`).children().eq(`${m}`).animate({color:"black"},400);
               }
               else if($(`table tr:nth-of-type(${n})`).children().eq(`${m}`).hasClass("hint")){
                $(`table tr:nth-of-type(${n})`).children().eq(`${m}`).removeClass("hint");
                $(`table tr:nth-of-type(${n})`).children().eq(`${m}`).animate({color:"white"},400);

               }
            }
        }
      });
})