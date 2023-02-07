var showList = []; 

fetch("./tv-shows.json")
  .then((resp) => resp.json())
  .then((data) => {
    
    showList = data;
    setTvShows(data); 
  });

function setTvShows(data) {
  var liste = document.querySelector(".tvShowList"); //bütün satırlara ulaş

  liste.innerHTML = ""; //listeyi temizle
  data.forEach((w) => {
    //array in içinde gezin herbir w
    //listeye istenen bilgilerini ekle

    //!https://www.w3schools.com/howto/howto_css_cards.asp  adresinden alttaki card kalıbını al
    liste.innerHTML += `
    <div class="col-md-3"> 
 <div class="card" >
   <img src=${w.show.image ? w.show.image.medium : ""} class="card-img-top">
   <div class="card-body">
     <h5 class="card-title">${w.show.name}</h5>
     
     
     <a class= "btn btn-success"  href=${w.show.url}>Detaylar</a>
     <p> </p>
   </div>
 </div></div> `;
  });
}
document.getElementById("search").oninput = (e) => {
 
  var data1 = showList.filter((w) => 
     w.show.name.toLowerCase().includes(e.target.value.toLowerCase())
  );
  setTvShows(data1);
};