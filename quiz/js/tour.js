var panorama, viewer, container, infospot;

container = document.querySelector('#container');

panorama = new PANOLENS.ImagePanorama('imagenes/planeta.png');


//Norteamerica
var infoNorteAmerica = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infoNorteAmerica.position.set(-180, 463, -500);

infoNorteAmerica.addEventListener('click', function () {
    Swal.fire({
        title: 'Norteamérica',
        html: 'Yace en el hemisferio norte y casi por completo en el hemisferio occidental y limita al norte con el océano Ártico, al este con el océano Atlántico, al noreste con Europa septentrional a través de Groenlandia, al sureste con el mar Caribe, al suroeste con el océano Pacífico y al noroeste con Asia del Norte a través del estrecho de Bering.',
        background: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        width: 400
    });
});
panorama.add(infoNorteAmerica)

//Centroamerica
var infoCentroAmerica = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infoCentroAmerica.position.set(-38, 90, -500);

infoCentroAmerica.addEventListener('click', function () {
    Swal.fire({
        title: 'Centroamérica',
        html: 'Desde el punto de vista histórico-cultural, algunos historiadores delimitan la región comprendida por los antiguos territorios del Reino de Guatemala, es decir, las actuales repúblicas de Guatemala, El Salvador, Honduras, Nicaragua y Costa Rica, además de las divisiones administrativas al sur y sureste del istmo de Tehuantepec en México. Desde el punto de vista geográfico la región comprende los territorios ubicados entre este istmo, y la cuenca del río Atrato en el Darién colombiano',
        background: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        width: 400
    });
});
panorama.add(infoCentroAmerica)

//Sudamerica
var infoSudAmerica = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infoSudAmerica.position.set(202, -120, -500);

infoSudAmerica.addEventListener('click', function () {
    Swal.fire({
        title: 'Sudamérica',
        html: 'Está conformada por un conjunto de trece países soberanos: Argentina, Bolivia, Brasil, Chile, Colombia, Ecuador, Guyana, Paraguay, Perú, Surinam, Trinidad y Tobago, Uruguay, Venezuela, además de Francia con la Guayana Francesa​ y cinco dependencias de otros estados. Brasil concentra aproximadamente la mitad de la población y la producción económica de la región.',
        background: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        width: 400
    });
});
panorama.add(infoSudAmerica)

//Europa
var infoEuropa = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infoEuropa.position.set(430, 499, -7);

infoEuropa.addEventListener('click', function () {
    Swal.fire({
        title: 'Europa',
        html: 'Alberga un gran número de Estados soberanos cuyo número exacto depende de la definición de la frontera de Europa, así como de la exclusión o inclusión de Estados parcialmente reconocidos. De todos los países europeos, Rusia (país euroasiático) es el mayor en superficie, mientras que la Ciudad del Vaticano es el más pequeño.',
        background: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        width: 400
    });
});
panorama.add(infoEuropa)

//Africa
var infoAfrica = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infoAfrica.position.set(500, 99, 91);

infoAfrica.addEventListener('click', function () {
    Swal.fire({
        title: 'África',
        html: 'El nombre del continente proviene del latín. Desde el siglo II a. C., los romanos llamaban África a las tierras que los griegos conocían como Libia, al oeste del Nilo y al este de los montes Atlas. La población supera los mil cuatrocientos millones de habitantes, un 15 % del total mundial.',
        background: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        width: 400
    });
});
panorama.add(infoAfrica)

//Asia
var infoAsia = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infoAsia.position.set(6, 500, 489);

infoAsia.addEventListener('click', function () {
    Swal.fire({
        title: 'Asia',
        html: 'Es la cuna de muchas civilizaciones antiguas como la mesopotámica, la india y la china, entre otras. En la división convencional de continentes, de origen europeo, Asia y Europa aparecen como dos entidades diferentes por razones culturales e históricas. En términos geográficos, forman en realidad un único continente, llamado Eurasia.',
        background: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        width: 400
    });
});
panorama.add(infoAsia)

//Oceania
var infoOceania = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infoOceania.position.set(-361, -273, 500);

infoOceania.addEventListener('click', function () {
    Swal.fire({
        title: 'Oceanía',
        html: 'Es el continente más pequeño y menos poblado de la tierra. Es un continente insular, lo que quiere decir que la mayoría de sus países no tienen fronteras o son islas. Está constituido por la plataforma continental de Australia y los archipiélagos de Melanesia, Micronesia y Polinesia.',
        background: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        width: 400
    });
});
panorama.add(infoOceania)

//Oceano PACIFICO
var infoPacifico = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infoPacifico.position.set(-500, 97, -162);

infoPacifico.addEventListener('click', function () {
    Swal.fire({
        title: 'Océano Pacífico',
        html: 'Es la parte del océano mundial de mayor extensión de la Tierra. Ocupa la tercera parte de su superficie y se extiende aproximadamente 15 500 kilómetros desde el mar de Bering limitando con el Glacial Ártico por el norte, hasta los márgenes congelados del mar de Ross y limitando por el sur con la Antártida.',
        background: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        width: 400
    });
});
panorama.add(infoPacifico)

//Oceano atlantico
var infoAtlantico = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infoAtlantico.position.set( 412, 289, -500);

infoAtlantico.addEventListener('click', function () {
    Swal.fire({
        title: 'Océano Atlántico',
        html: 'Es un agente de importancia global en lo referente al clima, ya que de sus corrientes depende en buena medida el clima de los continentes ribereños.  Es además el océano más joven del planeta, formado hace 200 millones de años​ por la división del supercontinente Pangea.',
        background: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        width: 400
    });
});
panorama.add(infoAtlantico)

//Oceano indico
var infoIndico = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infoIndico.position.set(222, -133, 500);

infoIndico.addEventListener('click', function () {
    Swal.fire({
        title: 'Océano Índico',
        html: 'Las naciones insulares del océano son Madagascar (cuarta isla más grande del mundo), Comoras, Seychelles, Maldivas, Mauricio, y Sri Lanka; Indonesia lo bordea. Sirve como una ruta de tránsito entre Asia y África lo que lo ha convertido en un foco de conflictos.',
        background: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        width: 400
    });
});
panorama.add(infoIndico)

//artico
var infoArtico = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infoArtico.position.set(98, 500, -111);

infoArtico.addEventListener('click', function () {
    Swal.fire({
        title: 'Ártico',
        html: 'Es el área alrededor del Polo Norte de la Tierra. Incluye partes de Rusia, Estados Unidos (Alaska), Canadá, Dinamarca (Groenlandia), Islandia, la región de Laponia, en Suecia, Noruega, Finlandia, y las islas Svalbard, así como el océano Ártico.',
        background: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        width: 400
    });
});
panorama.add(infoArtico)

//antartida
var infoAntartida = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infoAntartida.position.set(27, -500, 43);

infoAntartida.addEventListener('click', function () {
    Swal.fire({
        title: 'Antártida',
        html: 'Es el continente más austral de la Tierra. Está situada completamente en el hemisferio sur, casi enteramente al sur del círculo polar antártico y está rodeada por el océano Antártico. Contiene el polo sur geográfico, por lo que de manera coloquial y por extensión también es conocida como el polo sur. ',
        background: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        width: 400
    });
});
panorama.add(infoAntartida)


viewer = new PANOLENS.Viewer({ container: container});
viewer.add(panorama);