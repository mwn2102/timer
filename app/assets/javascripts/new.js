
$(document).ready(function(){
    if ($('.container').length) {
        var h1 = document.getElementsByTagName('h1')[0],
            start = document.getElementById('start'),
            stop = document.getElementById('stop'),
            clear = document.getElementById('clear'),
            form = document.getElementById('test3'),
            update = document.getElementById('update'),
            seconds = 0, minutes = 0, hours = 0,
            t;
            
        
        function add () {
            var $test = $('#test3').val();
            seconds = $test.slice(6,8);
            minutes = $test.slice(3,5);
            minutes = Number(minutes);
            hours = $test.slice(0,2);
            hours = Number(hours);
            
            seconds++;
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
                if (minutes >= 60) {
                    minutes = 0;
                    hours++;
                }
            }
            tenths();
            
          
            
        //     h1.textContent
            form.value = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
        
            timer();
        }
            
        function timer() {
            t = setTimeout(add, 1000);
        }
        // timer();
            
        function tenths() {
            var x,y;
            if (minutes % 6 === 0){
                   x = minutes/60;
                   y = x + hours;
                   $('#result').html(y);
                }
            else {
                var z = minutes % 6;
                var temp = minutes - z;
                x = temp/60;
                y = x + hours;
                $('#result').html(y);
            }
        }    
        
        
        /* Start button */
        start.onclick = timer;
        
        /* Stop button */
        stop.onclick = function() {
            clearTimeout(t);
        };
        
        /* Clear button */
        // clear.onclick = function() {
        //     form.value = "00:00:00";
        //     $('#result').html('');
        //     seconds = 0; minutes = 0; hours = 0;
            
        // };
        
        $('#clear').on('click', function(){
            form.value = "00:00:00";
            $('#result').html('0');
            seconds = 0; minutes = 0; hours = 0;
        });
         
            
        $('#test3').on('change', function(){
            var $changed = $('#test3').val();
            var min = $changed.slice(3,5);
            min = Number(min);
            var hr = $changed.slice(0,2);
            hr = Number(hr);
            var f,g;
            if (min % 6 === 0){
                   f = min/60;
                   g = f + hr;
                  $('#result').html(g);
                }
            else {
                   var temp = min % 6;
                   min = min-temp;
                   f = min/60;
                   g = f + hr;
                  $('#result').html(g);
                }
            
          });
    }

    
});

















