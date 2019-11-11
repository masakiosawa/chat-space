$(function(){
  function buildHTML(message){
  image = ( message.image ) ? `<img class= "lower-message__image" src=${message.image} >` : "";
  let html = `<div class=message>
                <div class="upper-info">
                  <div class="upper-info__talker">
                    ${message.user_name}
                  </div>
                  <div class="upper-info__date">
                    ${message.date}
                  </div>
                </div>
                <div class="message__text">
                  <p class="message__text__content">
                    ${message.content}
                  </p>
                    ${image}
                </div>
              </div> `
              $('.messages').append(html); 
            }

    $('.new_message').on('submit', function(e){
      e.preventDefault()
      let formData = new FormData(this);
      let url = $(this).attr('action')
      $.ajax({
        url: url,  //同期通信でいう『パス』
        type: 'POST',  //同期通信でいう『HTTPメソッド』
        data: formData,  
        dataType: 'json',
        processData: false,
        contentType: false
      })
      .done(function(data){
        buildHTML(data);
          $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
          $('form')[0].reset();
        })
        .fail(function(){
          alert('error');
        });
        return false;
      })
      
})
