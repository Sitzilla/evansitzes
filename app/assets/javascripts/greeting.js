$(document).ready(function(){
  $(".first").on("click", function() {
  	$(this).parent().first().append("<div class=\"left-pic\"><p>A Yukata is a traditional Japanese robe to be warn in the summer time.  I was able to go with some Japanese friends and explore Kyomizu-tera in the historical district of Japan's ancient capital, Kyoto.	</br>	日本に留学中、浴衣を着て清水寺に参詣しました。日本の人達が何回も僕と写真を一緒に撮って欲しいと頼んできてくれてとても楽しかったし、良い経験だった！</p></div>");
  });
  $(".second").on("click", function() {
  	$(this).parent().first().append("<p>Kinkakuji, literally the Golden Pavilion, is one of the most well known historical buildings in Asia.  Centuries old and plated in gold, every Japanese person will visit this cultural landmark at least once in their life. </br>  私にとって、金閣寺は日本の歴史的建造物の中で一番興味のある寺です。金閣寺が最初に建てられたのは1397年ですが、1955年に全面復元工事が行われました。金閣寺は、京都の見所の一つだと思います。</p>");
  });
});
