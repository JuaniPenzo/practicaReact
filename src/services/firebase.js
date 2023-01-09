import { initializeApp } from "firebase/app";
import {getFirestore, doc, getDoc, getDocs, collection, addDoc, where, documentId, writeBatch, query} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB4pRwzPBedw_3TSl0Y9zcMZ6GxhJtmCLY",
  authDomain: "proyectoreact-8bcbe.firebaseapp.com",
  projectId: "proyectoreact-8bcbe",
  storageBucket: "proyectoreact-8bcbe.appspot.com",
  messagingSenderId: "895803904386",
  appId: "1:895803904386:web:bc7e87dcbb6ef108033f9b",
  measurementId: "G-6B06RQ9YBC"
};
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const DB = getFirestore(app)

  export async function getSingleItem(id){
    const docRef = doc(DB, "data", id)

    const snapshot = await getDoc(docRef)

    const item = snapshot.data()

    item.id = snapshot.id

    return item
  }

  export async function getItems(){
    const collectionRef = collection(DB, "data")

    const docsRef = await getDocs(collectionRef)

    const itemsArray = docsRef.docs

    const items = itemsArray.map(doc=> {
        const item = doc.data()
        item.id = doc.id
        
        return item
    })

    return items
  }

  export async function createBuyOrder(order){
    const collectionRef = collection(DB, "orders")

    let newOrder = await addDoc(collectionRef, order)

    return newOrder.id
  }
  export async function createBuyOrderWithStock(order){
    const collectionRef = collection(DB, "orders")
    const collectionProductsRef = collection(DB, "data" )
    let batch = writeBatch(DB)

    let arrayIds = order.items.map(itemInCart =>itemInCart.id)

    const q = query(collectionProductsRef, where(documentId, "in", arrayIds))

    let snapshot = await getDocs(q)

    snapshot.docs.forEach(doc=>{
      let stockDisponible = doc.data().stock;
      let countInCart = doc.data().count;
      if(stockDisponible<countInCart)
        throw new Error("Stock no disponible")
        else
        batch.update(doc, {stock : stockDisponible-countInCart});
      })
    await batch.commit()

    let newOrder = await addDoc(collectionRef, order)

    return newOrder.id
  }

  // export async function exportItemToFirebase(){
  //   const data = [
  //       {
  //        "id": 1,
  //        "marca": "Volkswagen",
  //        "modelo": "Voyage",
  //        "stock": 64,
  //        "img": "https://4.bp.blogspot.com/-79fnKbw3xTk/XKywVh9efdI/AAAAAAAAdIk/iFxC90iLvJIbAHtfN3xb3zPbt7lkQJLfQCLcBGAs/w1200-h630-p-k-no-nu/Volkswagen-Voyage-2019-Argentina.jpg",
  //        "precio": 22372,
  //        "discount": 20
  //       },
  //       {
  //        "id": 2,
  //        "marca": "Volkswagen",
  //        "modelo": "Tiguan",
  //        "stock": 10,
  //        "img": "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/xl/RT_V_54b7c86a5acf4e8aa372456cb88339fd.jpg",
  //        "precio": 57123
  //       },
  //       {
  //        "id": 3,
  //        "marca": "Volkswagen",
  //        "modelo": "Gol",
  //        "stock": 89,
  //        "img": "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/xl/RT_V_2103cf5ea8894b65a193bfddd1bca03f.jpg",
  //        "precio": 88953,
  //        "discount": 20
  //       },
  //       {
  //        "id": 4,
  //        "marca": "Volkswagen",
  //        "modelo": "Polo",
  //        "stock": 65,
  //        "img": "https://cdn.motor1.com/images/mgl/rM14P/s1/oficial-se-presento-el-restyling-del-vw-polo-y-ahora-viene-con-gnc.jpg",
  //        "precio": 65859
  //       },
  //       {
  //        "id": 5,
  //        "marca": "Volkswagen",
  //        "modelo": "Nivus",
  //        "stock": 94,
  //        "img": "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_e6157bd522ef4cc08807d1b4b8e0d431.jpg",
  //        "precio": 86307,
  //        "discount": 20
  //       },
  //       {
  //        "id": 6,
  //        "marca": "Volkswagen",
  //        "modelo": "Vento",
  //        "stock": 59,
  //        "img": "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/xl/RT_V_17c9d3885bf34e9b8f97b1e35a3fa24a.jpg",
  //        "precio": 11409
  //       },
  //       {
  //        "id": 7,
  //        "marca": "Volkswagen",
  //        "modelo": "Amarok",
  //        "stock": 72,
  //        "img": "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/xl/RT_V_eb920fd356044f8b854396b536b9b78b.jpg",
  //        "precio": 70471
  //       },
  //       {
  //        "id": 8,
  //        "marca": "Volkswagen",
  //        "modelo": "Golf",
  //        "stock": 40,
  //        "img": "https://autotest.com.ar/wp-content/uploads/2020/11/VOLKSWAGEN-GOLF-R-2022.jpg",
  //        "precio": 38575,
  //        "discount": 20
  //       },
  //       {
  //        "id": 9,
  //        "marca": "Volkswagen",
  //        "modelo": "Gol Power",
  //        "stock": 32,
  //        "img": "https://cloudfront-us-east-1.images.arcpublishing.com/artear/EA43A5DFD5HBTHMZSHGOSJEPXY.jpg",
  //        "precio": 21236
  //       },
  //       {
  //        "id": 10,
  //        "marca": "Volkswagen",
  //        "modelo": "Saveiro",
  //        "stock": 89,
  //        "img": "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/xl/RT_V_e495469aca444ee19102e33113bc9069.jpg",
  //        "precio": 42835
  //       },
  //       {
  //        "id": 11,
  //        "marca": "Audi",
  //        "modelo": "A1",
  //        "stock": 48,
  //        "img": "https://www.lavoz.com.ar/resizer/m6IMiu3oAfEAQyiJfokpSoSz5_o=/980x640/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/Y5HXTEKADRCAPDFAKR2QRKFJNQ.jpg",
  //        "precio": 28925,
  //        "discount": 20
  //       },
  //       {
  //        "id": 12,
  //        "marca": "Audi",
  //        "modelo": "A2",
  //        "stock": 12,
  //        "img": "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2022/01/audi-a2-2595009.jpg",
  //        "precio": 8287
  //       },
  //       {
  //        "id": 13,
  //        "marca": "Audi",
  //        "modelo": "A3",
  //        "stock": 45,
  //        "img": "https://hips.hearstapps.com/hmg-prod/images/new-audi-a3-sedan-101-1595373883.jpg?crop=0.638xw:0.719xh;0.0993xw,0.0831xh&amp;resize=640:*",
  //        "precio": 37772,
  //        "discount": 20
  //       },
  //       {
  //        "id": 14,
  //        "marca": "Audi",
  //        "modelo": "A4",
  //        "stock": 17,
  //        "img": "https://imgd.aeplcdn.com/664x374/n/cw/ec/51909/a4-exterior-right-front-three-quarter-2.jpeg?q=75",
  //        "precio": 58585
  //       },
  //       {
  //        "id": 15,
  //        "marca": "Audi",
  //        "modelo": "A5",
  //        "stock": 63,
  //        "img": "https://hips.hearstapps.com/hmg-prod/images/2023-audi-a5-front-exterior-1658502717.jpg?crop=0.678xw:0.902xh;0.261xw,0.0983xh&amp;resize=640:*",
  //        "precio": 11010,
  //        "discount": 20
  //       },
  //       {
  //        "id": 16,
  //        "marca": "Audi",
  //        "modelo": "TT",
  //        "stock": 14,
  //        "img": "https://cdn.motor1.com/images/mgl/1by3L/s1/critica-audi-tts-quattro.jpg",
  //        "precio": 18390
  //       },
  //       {
  //        "id": 17,
  //        "marca": "Audi",
  //        "modelo": "Q7",
  //        "stock": 29,
  //        "img": "https://cdn.motor1.com/images/mgl/GLqQE/s1/lanzamiento-audi-q7-2020.jpg",
  //        "precio": 74531,
  //        "discount": 20
  //       },
  //       {
  //        "id": 18,
  //        "marca": "Audi",
  //        "modelo": "Q8",
  //        "stock": 5,
  //        "img": "https://acnews.blob.core.windows.net/imgnews/large/NAZ_ab301a206edc4723851cdb2d54bfec2f.jpg",
  //        "precio": 28283
  //       },
  //       {
  //        "id": 19,
  //        "marca": "Audi",
  //        "modelo": "A6",
  //        "stock": 76,
  //        "img": "https://acnews.blob.core.windows.net/imgnews/large/NAZ_60373d59907f4f47befdc519f1e05ee6.jpg",
  //        "precio": 6800
  //       },
  //       {
  //        "id": 20,
  //        "marca": "Audi",
  //        "modelo": "Q3",
  //        "stock": 46,
  //        "img": "https://autotest.com.ar/wp-content/uploads/2020/12/AUDI-Q3-PRUEBA.jpg",
  //        "precio": 73261
  //       },
  //       {
  //        "id": 21,
  //        "marca": "Seat",
  //        "modelo": "Altea",
  //        "stock": 76,
  //        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/2007_SEAT_Altea_Reference_TDi_1.9_Front.jpg/1200px-2007_SEAT_Altea_Reference_TDi_1.9_Front.jpg",
  //        "precio": 24249,
  //        "discount": 20
  //       },
  //       {
  //        "id": 22,
  //        "marca": "Seat",
  //        "modelo": "Arona",
  //        "stock": 44,
  //        "img": "https://cdn.motor1.com/images/mgl/RP9Pr/s1/seat-arona.jpg",
  //        "precio": 82764
  //       },
  //       {
  //        "id": 23,
  //        "marca": "Seat",
  //        "modelo": "Ateca",
  //        "stock": 8,
  //        "img": "https://www.topgear.com/sites/default/files/cars-car/image/2020/10/ateca_xperience_1.5_tsi_white_2020_014.jpg",
  //        "precio": 14670
  //       },
  //       {
  //        "id": 24,
  //        "marca": "Seat",
  //        "modelo": "Ibiza",
  //        "stock": 87,
  //        "img": "https://images.prismic.io/carwow/570146e0-38bf-45d6-a7a2-2d2dd38fa1c6_Front+%C2%BE+static.jpg?fit=clip&amp;q=60&amp;w=750&amp;cs=tinysrgb&amp;auto=format",
  //        "precio": 70265,
  //        "discount": 20
  //       },
  //       {
  //        "id": 25,
  //        "marca": "Seat",
  //        "modelo": "Leon",
  //        "stock": 27,
  //        "img": "https://www.topgear.com/sites/default/files/cars-car/image/2020/01/vd_230_accion_11.jpg",
  //        "precio": 61073
  //       },
  //       {
  //        "id": 26,
  //        "marca": "Seat",
  //        "modelo": "Minimo",
  //        "stock": 19,
  //        "img": "https://fotos.perfil.com/2019/02/26/minimo-el-pequeno-prototipo-electrico-de-seat-644860.jpg",
  //        "precio": 83064,
  //        "discount": 20
  //       },
  //       {
  //        "id": 27,
  //        "marca": "Seat",
  //        "modelo": "Tarraco",
  //        "stock": 77,
  //        "img": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/seat-boosts-its-large-suvs-performance-as-tarraco-2-0-tsi-245ps-dsg-4drive-enters-production-01-hq-1610961181.jpg",
  //        "precio": 50235
  //       },
  //       {
  //        "id": 28,
  //        "marca": "Seat",
  //        "modelo": "Toledo",
  //        "stock": 9,
  //        "img": "https://upload.wikimedia.org/wikipedia/commons/f/f6/2014_Seat_Toledo_1.6_TDI_front_view.jpg",
  //        "precio": 79019,
  //        "discount": 20
  //       },
  //       {
  //        "id": 29,
  //        "marca": "Seat",
  //        "modelo": "Exeo",
  //        "stock": 83,
  //        "img": "https://upload.wikimedia.org/wikipedia/commons/6/67/2011_SEAT_Exeo_Sport_Tech_CR_TDi_168_2.0_Front.jpg",
  //        "precio": 7246
  //       },
  //       {
  //        "id": 30,
  //        "marca": "Seat",
  //        "modelo": "Born",
  //        "stock": 37,
  //        "img": "https://www.autoweb.com.ar/wp-content/uploads/2019/03/seat_el-born_concept_1_07f0046910730ba0.jpg",
  //        "precio": 47901
  //       },
  //       {
  //        "id": 31,
  //        "marca": "Skoda",
  //        "modelo": "Enyaq",
  //        "stock": 11,
  //        "img": "https://img.remediosdigitales.com/cced79/skoda_enyaq_prueba_contacto/450_1000.jpeg",
  //        "precio": 44229,
  //        "discount": 20
  //       },
  //       {
  //        "id": 32,
  //        "marca": "Skoda",
  //        "modelo": "Fabia",
  //        "stock": 85,
  //        "img": "https://www.topgear.com/sites/default/files/2022/02/1.%204609-All-newFabia-GreyUK.jpg",
  //        "precio": 50868
  //       },
  //       {
  //        "id": 33,
  //        "marca": "Skoda",
  //        "modelo": "Kamiq",
  //        "stock": 94,
  //        "img": "https://www.topgear.com/sites/default/files/2021/09/Medium-2824-KamiqMonteCarlo.jpg",
  //        "precio": 55336,
  //        "discount": 20
  //       },
  //       {
  //        "id": 34,
  //        "marca": "Skoda",
  //        "modelo": "Scala",
  //        "stock": 94,
  //        "img": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/skoda-scala-edition-s-abt-1-1613050286.jpg",
  //        "precio": 70960
  //       },
  //       {
  //        "id": 35,
  //        "marca": "Skoda",
  //        "modelo": "Karoq",
  //        "stock": 21,
  //        "img": "https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1649950643/autoexpress/2022/04/Skoda%20Karoq%20facelift%202022%20UK-18.jpg",
  //        "precio": 45515,
  //        "discount": 20
  //       },
  //       {
  //        "id": 36,
  //        "marca": "Skoda",
  //        "modelo": "Octavia",
  //        "stock": 77,
  //        "img": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Skoda_Octavia_IV_liftback_%28cropped%29.jpg",
  //        "precio": 26249
  //       },
  //       {
  //        "id": 37,
  //        "marca": "Skoda",
  //        "modelo": "Octavia Combi",
  //        "stock": 8,
  //        "img": "https://cdn.motor1.com/images/mgl/RWAxm/s1/skoda-octavia-combi-2020-im-test.jpg",
  //        "precio": 45759,
  //        "discount": 20
  //       },
  //       {
  //        "id": 38,
  //        "marca": "Skoda",
  //        "modelo": "SuperB",
  //        "stock": 8,
  //        "img": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20200721112554_Skoda-Superb-FL-front-action.jpg&amp;w=726&amp;h=482&amp;q=75&amp;c=1",
  //        "precio": 36640
  //       },
  //       {
  //        "id": 39,
  //        "marca": "Skoda",
  //        "modelo": "SuperB Combi",
  //        "stock": 38,
  //        "img": "https://cdn.motor1.com/images/mgl/bgz6Xm/s1/2023-skoda-superb-combi-rendering.jpg",
  //        "precio": 28417,
  //        "discount": 20
  //       },
  //       {
  //        "id": 40,
  //        "marca": "Skoda",
  //        "modelo": "Kodiaq",
  //        "stock": 22,
  //        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/2018_Skoda_Kodiaq_Scout_TDi_SCR_4X4_2.0_Front.jpg/800px-2018_Skoda_Kodiaq_Scout_TDi_SCR_4X4_2.0_Front.jpg",
  //        "precio": 81434
  //       }
  //   ]
  //   const collectionRef = collection(DB, "data");
  //   for(let item of data){
  //       addDoc(collectionRef, item)
  //       console.log(item.id)
  //   }
  // }