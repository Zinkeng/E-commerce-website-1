import React from 'react'
import { useState } from 'react'
import tv1 from './tvImages/tv1.jpg'
import tv2 from './tvImages/tv2.jpg'
import tv3 from './tvImages/tv3.jpg'
import tv4 from './tvImages/tv4.jpeg'
import tv5 from './tvImages/tv5.jpg'
import tv6 from './tvImages/tv6.jpg'
import tv7 from './tvImages/tv7.png'
import tv8 from './tvImages/tv8.jpg'
import tv9 from './tvImages/tv9.jpg'
import sony from './tvImages/sony.jpg'
import apple from './tvImages/appletv.jpg'
import appletv1 from './tvImages/appletv1.jpeg'

function Tv() {
    const [items, setItems] = useState(
        [  { image:tv1 ,title:"blanket " ,  price:"900,000 FCFA" ,id:1} ,
          { image:tv2,title:"Note 20 Ultra" ,  price:"500,000 FCFA",id:2 },
          { image:tv3 ,title:"iphone 8" ,  price:"90,000 FCFA",id:3 },
          { image:tv4 ,title:"Pixel 4a" ,  price:"200,000 FCFA" ,id:4},
          { image:tv5 ,title:"Samsung S21 Ultra" ,  price:"700,000 FCFA" ,id:5},
          { image:tv6 ,title:"Oneplus 8" ,  price:"300,000 FCFA",id:6},
          { image:apple ,title:"Huawei P50 Pro" ,  price:"950,000 FCFA" ,id:7},
          { image:appletv1,title:"iphone X" ,  price:"200,000 FCFA",id:8},
          { image:sony ,title:"vivo x7 Pro" ,  price:"300,000 FCFA" ,id:9},
          { image:tv7 ,title:"vivo x7 Pro" ,  price:"300,000 FCFA" ,id:10},
          { image:tv8 ,title:"vivo x7 Pro" ,  price:"300,000 FCFA" ,id:11},
          { image:tv9 ,title:"vivo x7 Pro" ,  price:"300,000 FCFA" ,id:11},
        ])
  return (
    <div class="d-flex justify-content-around flex-wrap mt-3 " >
      {items.map( (item) => (
        <div class="card mb-5" style={{maxWidth: "430px"}} key={item.id}>
        <div class="row g-0">
          <div class="col-xl-4 " style={{height: "200px"}}>
            <img src={item.image} class="img-fluid rounded-start height-auto pt-5" alt="..."/>
          </div>
          <div class="col-md-8 ">
            <div class="card-body">
              <h5 class="card-title">{item.title}</h5>
              <p class="card-text">{item.price}</p>
              <p class="card-text" style={{marginTop:'-14px' , marginBottom:'4px' , fontWeight:'bold'}}>Quantity</p>
              <p class="card-text">
                <form action="#">
            
            <select name="languages" id="lang" style={{ marginBottom:'8px'}}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
            <p class="card-text"> <button type='submit' class="buyButton"> Buy Now</button> </p>
            <p class="card-text">  <button type='submit' class="buyButton"> Add to Kart</button> </p>
      </form></p>
              
            </div>
          </div>
        </div>
      </div>
      
      ))}
        
    </div>
  )
}

export default Tv