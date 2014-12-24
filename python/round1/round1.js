      $(document).ready(function() {
        $('#content').keypress(function(key) {
            if($('#fromselect').val() == '2'){
              if(key.charCode < 48 || key.charCode > 49) return false;
            }
            else if($('#fromselect').val() == '8'){
              if(key.charCode < 48 || key.charCode > 55) return false;
            }
            else if($('#fromselect').val() == '10'){
              if(key.charCode < 48 || key.charCode > 57) return false;
            }
            else if($('#fromselect').val() == '16'){
              if((key.charCode < 48 || key.charCode > 57) && (key.charCode < 65 || key.charCode > 70)) return false;
            }
        });

        $('#fromselect').change(function (){
          $('#content').val('');
        });

        $('#submitbutton').click(function(){
          var regexBinary = new RegExp("^[01]");
          var regexOctal = new RegExp("^[0-7]");
          var regexDecimal = new RegExp("^[0-9]");
          var regexHexa = new RegExp("^[A-F0-9]");
          var content = $('#content').val();

          for(var i = 0; i < content.length; i++){
            if($('#fromselect').val() == '2'){
              if(!regexBinary.test(content.charAt(i))) return false;
            }
            else if($('#fromselect').val() == '8'){
              if(!regexOctal.test(content.charAt(i))) return false;
            }
            else if($('#fromselect').val() == '10'){
              if(!regexDecimal.test(content.charAt(i))) return false;
            }
            else if($('#fromselect').val() == '16'){
              if(!regexHexa.test(content.charAt(i))) return false;
            }
          }
        });

      });