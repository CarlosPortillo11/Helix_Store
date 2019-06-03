$(document).ready(function(){
console.log("Todo listo");

$("#btn").click(function(){
  getProducts();
});

function getProducts(){
  $.ajax({
       type: 'GET',
       url: 'https://mini-shop-rg.herokuapp.com/products',
       dataType: 'json',
       data: "data",
       success: function(respuesta){
         console.log(respuesta);
         var dispinfo = $("#info");
         var dispad = $(".advice");
         //var cardbod = $("")
         var baseinfo = respuesta;
         var parseinfor = "";
         var parsename = [];
         var parseprice = "";
         var parsestock = "";
         var parsedesp = "";

         for (var i = 0; i < baseinfo.length; i++) {
           var info = baseinfo[i];
          parsename[i] = info.name;

           parseinfor += ('<br><hr/>'
          +'<div class="items">'
          +'<br>'
           +'<img src='+info.image
           +'><p class="ptitle">'+info.name
           +'</p><p class="ptitle">$ '+info.price
           +'</p><p class="pinfo">'+info.description
           +'</p><p class="ptitle">Unidades: '+info.stock+
           +'</p></div><br>');

         }
         //$("#ctitle").html(parsename);
         dispinfo.html(parseinfor);
         dispad.html("Consulta Exitosa");
       },
       error: function(error){
         alert("Nuestas ardillas estan durmiendo, intenta más tarde");
       },
       complete: function(status){
         alert("Bienvenido");
       }
 });
};
});
