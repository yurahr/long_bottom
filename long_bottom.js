медленная прокрутка вниз

ставим якоря в нужныйх нам местах:
<div class="nav">
           <ul>
               <li><a href="#a1">Внешний вид</a></li>
               <li><a href="#a2">Преимущества</a></li>
               <li><a href="#a3">Видео обзор</a></li>
               <li><a href="#a4">Купить</a></li>
           </ul>
       </div><!--конец  class="nav"-->
</header>
    <div class="section-img" id="a1">

------------------------------------------------------

подключаем библиотеки:

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js?ver=1.7.1"></script>
<script src="js/long_bottom.js"></script> 
	
-----------------------------------------------------

в файле long_bottom.js указываем класс для которого нужна анимация:	

$(document).ready(function(){
            $(".nav").on("click","a", function (event) {
                event.preventDefault();
                var id  = $(this).attr('href'), top = $(id).offset().top;     
                $('body,html').animate({scrollTop: top}, 500);
            });
        });

----------------------------------------------------