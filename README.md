# API-tehtävä #

**Tee kalvosetti valitsemastasi API-rajapinnasta (lyhyt kalvosetti riittää):**
> * Kuvaile API
> * Mitä sillä voi tehdä?
> * Mitä toimintoja se tarjoaa?

https://docs.google.com/a/metropolia.fi/presentation/d/1tdLMGggbbQ3687MnQpGZFQKoMeAQRqAzNHyNqy-itrA/edit?usp=sharing
  
**Rakenna myös JS-sovellus joka käyttää ko. JS-rajapintaa. Muista seuraavat seikat:**
> * Käyttöliittymä, jossa näytetään API:sta tulevat tiedot tai vuorovaikutus rajapinnan kanssa
> * API-kutsu (HTTP GET tai HTTP POST) omaan funktioon
> * Prosessoivat funktiot omiin funktioihinsa

Tämä tehtävä oli yllättävän vaikea, vaikka päädyin lopulta valitsemaan Tumblr-API:n, jota käytin myös edellisessä jaksossa. Kaikki funktioni taitavat olla samassa kasassa, ihan vain siksi, että löysin tällä mallilla toimivan esimerkki-ratkaisun netistä, jota sitten muutin itselleni sopivaksi tässä.

https://github.com/jeminalinnama/api-exercise/blob/master/index.html

https://github.com/jeminalinnama/api-exercise/blob/master/script.js
  
---

# Oman aiheen määrittely #

**Määrittele alustava ideasi projektista. Voit tarvittaessa vaihtaa ideaa myöhemmin.**

> Kerro sovelluksesi perusajatus muutamalla lauseella

Sovellus toimisi selaimessa. Siinä pystyisi drag-and-drop-tyyppisesti tehdä valmiista asseteista monisteita/opetusmateriaaleja esimerkiksi juuri ohjelmoinnillisen ajattelun opetukseen. Opettajan ei tarvitsisi siis osata käyttää esimerkiksi Illustratoria. Luodut monisteet tallentuisivat tietokantaan. Käyttäjillä olisi mahdollisuus myös selata kaikkia aiemmin tehtyjä monisteita. Adminilla olisi mahdollisuus nostaa parhaita monisteita etusivulle.

Mahdollisuus tehdä siis vaikka tämän tehtävän tyylisiä monisteita: http://www.helloruby.com/play/9

> Määritä pari keskeistä käyttäjätarinaa (user stories): mitä sovelluksella voi tehdä? (=Niukat kuvaukset riittävät)

* Opettajana, haluan itse pystyä luomaan kauniin ja toimivan monisteen, jotta tekniset taitoni eivät ole esteenä uusien opetusmateriaalien luomiselle.
* Opettajana, haluan pystyä valitsemaan myös valmiita rakenteita (esimerkiksi kirjoituskentät, loop-rakenteet, algoritmin rakenne), jotta minun ei tarvitse rakentaa monistetta aivan kokonaan alusta asti.
* Opettajana/vanhempana/kerhonohjaajana, haluan selata muiden luomia monisteita, jotta voin tarjota sekä itselleni että lapselle uusia mahdollisuuksia ja ideoita oppimiseen.
* Adminina, haluan pystyä valitsemaan parhaita monisteita ja nostaa niitä etusivulle, jotta käyttäjät löytäisivät helpommin loistavimmat ideat.
* Adminina, haluan pystyä joko poistamaan/piilottamaan tehtyjä monisteita tai valitsemaan kaikille julkaistavat monisteet, jotta palveluun ei päädy epäasiallista materiaalia.
* Opettajana, haluan pystyä kirjautumaan sovellukseeen, jotta pystyn helposti löytämään aiemmin tekemäni monisteet.
* Opettajana, haluan pystyä lisäämään monisteita omille listoilleni (defaultina "suosikit"), jotta pystyn helpommin löytämään suosikkimonisteeni, ja jotta pystyn palaamaan johonkin monisteeseen esimerkiksi luokkani siirtyessä seuraavaan aiheeseen tai seuraavalle vuosikurssille.

> Mitä API-rajapintoja aiot käyttää ja miksi?

Ainakin jokin kirjautumisen mahdollistava rajapinta. Ehkä Linkedin olisi kaikista ammattimaisin? -> Voisi mahdollistaa verkostoitumisen Linkednissä?

> Mitä JS-kirjastoja aiot käyttää, mihin tarkoitukseen?

* Fabric.js tai muu vastaava: canvas-elementille piirto ja vektoreiden siirtely/muokkaus/yms.
* Moniste pitää pystyä tallentamaan ainakin PDF-muotoon, mieluiten myös niin, että monisteen tekoa voi jatkaa myöhemmin/korjata virheitä/jatkaa toisen tekemää monistetta.

> Projektissa tullaan rakentamaan NodeJS-palvelin REST-henkisellä toteutuksella (RESTistä lisää vielä myöhemmin). 
Mitä asioita sovelluksesi tulee tallentamaan palvelimelle / tietokantaan? Anna esimerkkejä tallennettavista tietueista. 
(NodeJS-palvelimella tullaan hyödyntämään tallennukseen dokumenttiorientoitunutta tietokantaa (MongoDB) tai tarvittaessa relaatiotietokantaa. Lisäksi hakukoneen integrointi voi olla tarpeen.)

* Assetit todennäköisesti SVG-muodossa. Haetaanko värikoodit myös tietokannasta? 
* Valmiit monisteet jotenkin "projekti"-muodossa + luodut PDF:t.
* Käyttäjän suosikkilistat? Miten linkittyy esim. Linkedin-kirjautumiseen? Käyttäjän omat monisteet?

---

# Openshift #

> Luo itsellesi tili Openshiftiin: https://www.openshift.com/

jemina.linnama@gmail.com

> Kerro lyhyesti omin sanoin mikä Openshift on (tai mikä se näyttäisi olevan)?

OpenShift on ilmainen open-source PaaS (Platform as a Service), joka toimii pilvessä ja mahdollistaa kehittäjän luoda, testata ja pyörittää sovelluksia ja julkaista niitä.

> Ekstra: Jos haluat, voit kokeilla luoda itsellesi tyhjän NodeJS-palvelimen

Helposti onnistui!
