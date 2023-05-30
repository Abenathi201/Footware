products = [
    {
        id: 1,
        name: "Random Name",
        Image: "https://i.postimg.cc/m21ykSCF/498ebc4b-6d00-45cd-8e16-cb1a87984ee3.jpg",
        details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat sint architecto numquam  ! Hic neque facere odit nostrum quas modi sunt! Omnis obcaecati laboriosam dignissimos ab iste accusantium ad.",
        price: "$ 740"
    },
    {
        id: 2,
        name: "Air Jordan 1",
        Image: "https://i.postimg.cc/C5XCJZT1/Air-Jordan-1-Just-Don-Bhm-Pack.jpg",
        details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat sint architecto numquam  ! Hic neque facere odit nostrum quas modi sunt! Omnis obcaecati laboriosam dignissimos ab iste accusantium ad.",
        price: "$ 350"
    },
    {
        id: 3,
        name: "Balmoral Derby by Septieme Largeur",
        Image: "https://i.postimg.cc/pTVBdbJ2/Balmoral-Derby-by-Septieme-Largeur-Pure-Greatness.jpg",
        details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat sint architecto numquam  ! Hic neque facere odit nostrum quas modi sunt! Omnis obcaecati laboriosam dignissimos ab iste accusantium ad.",
        price: "$ 450"
    },
    {
        id: 4,
        name: "Emarald Lebron",
        Image: "https://i.postimg.cc/BnWcK1B7/Emerald-Lebron.jpg",
        details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat sint architecto numquam  ! Hic neque facere odit nostrum quas modi sunt! Omnis obcaecati laboriosam dignissimos ab iste accusantium ad.",
        price: "$ 700"
    },
    {
        id: 5,
        name: "Osco Oxford",
        Image: "https://i.postimg.cc/brsHQx5W/Man-Latest-2020-Formal-Shoes-Design-Stylish-Uniqe-Color-Combination-Formal-Shoes-Top-10-Trends.jpg",
        details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat sint architecto numquam  ! Hic neque facere odit nostrum quas modi sunt! Omnis obcaecati laboriosam dignissimos ab iste accusantium ad.",
        price: "$ 200"
    },
    {
        id: 6,
        name: "Men's Air Trainers",
        Image: "https://i.postimg.cc/jqFhR1wb/Men-Shoes-Casual-White-Sneakers-2021-Brand-Trendy-Mens-Trainers-Air-Cushion-Men-Sneakers-Sport-Shoes.jpg",
        details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat sint architecto numquam  ! Hic neque facere odit nostrum quas modi sunt! Omnis obcaecati laboriosam dignissimos ab iste accusantium ad.",
        price: "$ 500"
    },
    
    {
        id: 7,
        name: "Wingtip Grey Genuine Leather",
        Image: "https://i.postimg.cc/kg8s1y5d/Size-6-13-Wingtip-Grey-Genuine-Leather-Oxford-Dress-Shoes-for-Men-Black-9.jpg",
        details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat sint architecto numquam  ! Hic neque facere odit nostrum quas modi sunt! Omnis obcaecati laboriosam dignissimos ab iste accusantium ad.",
        price: "$ 215.99"
    },
    
    {
        id: 8,
        name: "Classic Men's Shoe",
        Image: "https://i.postimg.cc/gJMHXSg3/lassic-Mens-Shoes.jpg",
        details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat sint architecto numquam  ! Hic neque facere odit nostrum quas modi sunt! Omnis obcaecati laboriosam dignissimos ab iste accusantium ad.",
        price: "$ 750"
    },
    {
        id: 9,
        name: " Yeknu Upper Material",
        Image: "https://i.postimg.cc/QxQ7PN7H/Yeknu-Men-Dress-Italian-Leather-Shoes-Slip-On-Fashion-Men-Leather-Moccasin-Glitter-Formal-Male-Shoes.jpg",
        details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat sint architecto numquam  ! Hic neque facere odit nostrum quas modi sunt! Omnis obcaecati laboriosam dignissimos ab iste accusantium ad.",
        price: "$ 200"
    },
]

let items = document.getElementById('items')
products.forEach((product) => {
    items.innerHTML += `
    <div class="col-12 col-md-4 col-sm-6">
    <div class="item m-4 p-3" style="width:24.375rem">
        <img src="${product.Image}" class="card-img" style="width:100%">
        <div class="info">
            <h4>${product.name}</h4>
            <p class="text">${product.price}</p>
            <a href="#" class="item-btn">Add to Cart</a>
        </div>
    </div>
    </div>
    `;
})












{/* <div class="col-xl-3 col-sm-4 col-6">
<div class="product product-type-0" data-aos="zoom-in" data-aos-delay="0">
  <div class="product-image mb-md-3">
    <div class="product-badge badge bg-secondary">Fresh</div><a href="detail-1.html">
      <div class="product-swap-image"><img class="img-fluid product-swap-image-front" src="${product.Image}" alt="product"/><img class="img-fluid" src="${product.Image}" alt="product"/></div></a>
    <div class="product-hover-overlay"><a class="text-dark text-sm" href="#!">
        <svg class="svg-icon text-primary-hover svg-icon-heavy d-sm-none">
          <use xlink:href="#retail-bag-1"> </use>
        </svg><span class="d-none d-sm-inline">Add to cart</span></a>
      <div><a class="text-dark text-primary-hover me-2" href="#!">
          <svg class="svg-icon svg-icon-heavy">
            <use xlink:href="#heart-1"> </use>
          </svg></a><a class="text-dark text-primary-hover text-decoration-none" href="#!" data-bs-toggle="modal" data-bs-target="#quickView">
          <svg class="svg-icon svg-icon-heavy">
            <use xlink:href="#expand-1"> </use>
          </svg></a></div>
    </div>
  </div>
  <div class="position-relative">
    <h3 class="text-base mb-1"><a class="text-dark" href="detail-1.html">${product.name}</a></h3>
    <p class="text-gray-600 text-sm"> 
      <s class="me-2 text-gray-500">${product.price}
    </p>
    <div class="product-stars text-xs"><i class="fa fa-star text-primary"></i><i class="fa fa-star text-primary"></i><i class="fa fa-star text-primary"></i><i class="fa fa-star text-muted"></i><i class="fa fa-star text-muted"></i></div>
  </div>
</div>
</div> */}