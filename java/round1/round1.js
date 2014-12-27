$(document).ready(function() {
    		$('#content').keypress(function(key) {
            if($('#frombinary').is(':checked')){
              if(key.charCode < 48 || key.charCode > 49) return false;
            }
            else if($('#fromoctal').is(':checked')){
              if(key.charCode < 48 || key.charCode > 55) return false;
            }
            else if($('#fromdecimal').is(':checked')){
              if(key.charCode < 48 || key.charCode > 57) return false;
            }
            else if($('#fromhexa').is(':checked')){
              if((key.charCode < 48 || key.charCode > 57) && (key.charCode < 65 || key.charCode > 70)) return false;
            }
        });

        $("#frombinary, #fromoctal, #fromdecimal, #fromhexa").change(function (){
          $('#content').val('');
        });

        $('#submitbutton').click(function(){
          var regexBinary = new RegExp("^[01]");
          var regexOctal = new RegExp("^[0-7]");
          var regexDecimal = new RegExp("^[0-9]");
          var regexHexa = new RegExp("^[A-F0-9]");
          var content = $('#content').val();

          for(var i = 0; i < content.length; i++){
            if($('#frombinary').is(':checked')){
              if(!regexBinary.test(content.charAt(i))) return false;
            }
            else if($('#fromoctal').is(':checked')){
              if(!regexOctal.test(content.charAt(i))) return false;
            }
            else if($('#fromdecimal').is(':checked')){
              if(!regexDecimal.test(content.charAt(i))) return false;
            }
            else if($('#fromhexa').is(':checked')){
              if(!regexHexa.test(content.charAt(i))) return false;
            }
          }
        });
    	});