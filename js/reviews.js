const reviews = [
    {
        Date: "15 June 2019",
        Image: "https://lajollaweb.com/images/reviews/drew.jpg?v=1",
        Name: "Dr. Drew Alexander",
        From: "www.orthoalexander.com",
        Review: "I have worked with Mehdi and his amazing La Jolla Web company for several years now. Mehdi and his team are by far the best website design team out there! Timely service, customization that fits any of your needs, and an impressive WOW factor that will drive patients to your business. We have had so many of our patients compliment the quality of our website and for many of them, it was one of the main reasons they came in to see us. So if you want to have a website that is visually enticing, with a interactive/clean user interface, and with a team that is ready to make any creative design idea you have a reality, then definitely choose La Jolla Web and Mehdi for all your Web Design needs.",
    },
    {
        Date: "29 June 2019",
        Image: "https://lajollaweb.com/images/reviews/andrea.jpg?v=1",
        Name: "Andrea Miller",
        From: "www.gogetterdating.com",
        Review: "I am so fortunate to have worked with Mehdi for the past 3 years. He is an AMAZING designer and really took our product the next level. We get the best feedback about the look &amp; feel of our app and this is very much thanks to Mehdi. He always puts his heart and soul into everything and is committed his is to deliver top notch work. I have recommended Mehdi to multiple people already and will continue to do so.",
    },

    {
        Date: "20 September 2019",
        Image: "https://lajollaweb.com/images/reviews/mike.jpg?v=1",
        Name: "Michael Emilio",
        From: "www.turfgrassproducts.com",
        Review: "Mehdi always delivers top quality results and truly cares about the success of the projects he works on. His skillsets are top notch and his ability to bring an idea to life is second to none. After building me a killer app on our first project, we are now working on our second!",
    },
    {
        Date: "07 March 2019",
        Image: "https://lajollaweb.com/images/reviews/kayla.jpg?v=1",
        Name: "Kayla Hatch",
        From: "Honest, Fresh and Fit",
        Review: "I was in need of desperate help to bring my business logo to life. I let them know what my vision was and before I knew it, they had exactly what I wanted!! Thank you so much for working with me and bringing my vision to life!",
    },
    {
        Date: "12 January 2019",
        Image: "https://lajollaweb.com/images/reviews/brandon.jpg?v=1",
        Name: "Brandon Haynie",
        From: "Primitive Smoke BBQ",
        Review: "I was fortunate to collaborate with Brian and Mehdi when I needed help with my restaurant branding. They have always surprised me with amazing designs to further my business’ appeal to new clients. I highly recommend La Jolla Web to anyone looking for top notch design, please feel free to contact me for any recommendation. Thank you guys! We love your work!",
    },
    {
        Date: "07 March 2019",
        Image: "https://lajollaweb.com/images/reviews/russ.jpg?v=1",
        Name: "Russ Van Huizum",
        From: "www.topdoglimobus.com",
        Review: "We are a local business in San Diego and wanted our website to stand out from the rest, and there are many within our industry.\n Working with Mehdi, we were guided throughout the process and the outcome exceeded anything we could have imagined. With his impeccable artistry and vision, he designed a website so unique in its category that we immediately received daily compliments from our clients on its beauty and ease of navigation.\n As a result, we have won several awards, our business is thriving, and we are beyond thrilled with our elegant new website.",
    },
    {
        Date: "04 November 2018",
        Image: "https://lajollaweb.com/images/reviews/othmane.jpg?v=1",
        Name: "Othmane Alaoui",
        From: "www.colosseumdevelopment.com",
        Review: "I’ve had a great experience working with Mehdi. For someone like me who is not a tech/web expert, Mehdi was the best choice, who took the time to explain and vulgarize concepts, propose alternatives and facilitate decisions. Mehdi is a very reliable service provider, meeting all his deadlines, and delivered a great website at a very competitive cost. Will definitely work with Mehdi again for future needs.",
    },
    {
        Date: "14 September 2019",
        Image: "https://lajollaweb.com/images/reviews/tarik.jpg?v=1",
        Name: "Tarik Benslimane",
        From: "Viva Events",
        Review: "I had the chance to work with Mehdi on several projects. I always had a great feedback on the design and on the different steps of the process. The work was done in a reactive and detailed manner.\nHe is an authentic artist who loves challenges. You’ll be surprise by his talent and creativity. I have recommended him to many of my friends and collaborators. Best web site design company I have come across.",
    },
    {
        Date: "26 March 2019",
        Image: "https://lajollaweb.com/images/reviews/kevin-luseo.jpg?v=1",
        Name: "Kevin Goldstein",
        From: "www.luseogroup.com",
        Review: "I have worked with Mehdi and his team at La Jolla Web on several occasions. They are hands-down one of the finest web design service firms that I have ever collaborated with. The appearance of our website is world-class, and they brought to the table specific design suggestions to improve functionality and the user experience that I would never have thought of. They have my highest endorsement as a tremendously talented, creative, and cost-effective web design firm.",
    },
];
let $ = document.querySelector.bind(document);
reviews.forEach((item, index) => {
    $("#testim-dots").innerHTML += '<li class="dot"></li>';
    $("#testim-content").innerHTML += `<div>
        <div class="img"><img src="${item.Image}"/></div>
        <h2>${item.Name}</h2>
        <h3>${item.From}</h3>
        <h4>${item.Date}</h4>
        <p>${item.Review}</p>
        </div>`;
});
