// Slick slider 
$(document).ready(function() {
    $('.main-slider').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        centerMode: true,
        asNavFor: '.thumbnail-slider',
        swipeToSlide: true
    });

    $('.thumbnail-slider').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        asNavFor: '.main-slider',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        arrows: true
    });

    $('.prev-arrow').click(function() {
        console.log('Prev button clicked');
        $('.main-slider').slick('slickPrev');
    });
    
    $('.next-arrow').click(function() {
        console.log('Next button clicked');
        $('.main-slider').slick('slickNext');
    });
    
});

// Accordion list
var acc = document.getElementsByClassName("accordion-header");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

// Slick slider
window.addEventListener('resize', function() {
    if (window.innerWidth < 800) {
      $('.product-block').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
      });
    } else {
      if ($('.product-block').hasClass('slick-initialized')) {
        $('.product-block').slick('unslick');
      }
    }
  });

//
//   const reviewContainers = document.querySelectorAll('.review-container');
// const prevBtn = document.querySelector('.prev-arrow');
// const nextBtn = document.querySelector('.next-arrow');

// let currentIndex = 0;

// function showReview(index) {
//   reviewContainers.forEach((container, i) => {
//     if (i === index) {
//       container.style.display = 'block';
//     } else {
//       container.style.display = 'none';
//     }
//   });
// }

// prevBtn.addEventListener('click', () => {
//   currentIndex = (currentIndex - 1 + reviewContainers.length) % reviewContainers.length;
//   showReview(currentIndex);
// });

// nextBtn.addEventListener('click', () => {
//   currentIndex = (currentIndex + 1) % reviewContainers.length;
//   showReview(currentIndex);
// });

// showReview(currentIndex);


// Initialize a headless CMS client
const contentfulClient = createClient({
    space: 'sd1ygy5u8poo',
    accessToken: 'EYvgLcf-hnssXLa0tsoazazyOBvjwi1e6B4ER9PbGLY'
  });
  
//   // Fetch content entries from the CMS
//   async function getComments() {
//     try {
//       const response = await contentfulClient.getEntries({
//         content_type: 'comment'
//       });
//       return response.items;
//     } catch (error) {
//       console.error('Error fetching comments:', error);
//       return [];
//     }
//   }
  
//   // Render the comments section on the page
//   async function renderCommentsSection() {
//     const commentsContainer = document.getElementById('comments-section');
//     const comments = await getComments();
  
//     comments.forEach(comment => {
//       const commentElement = document.createElement('div');
//       commentElement.classList.add('comment');
  
//       const authorElement = document.createElement('h4');
//       authorElement.textContent = comment.fields.author;
  
//       const contentElement = document.createElement('p');
//       contentElement.textContent = comment.fields.content;
  
//       commentElement.appendChild(authorElement);
//       commentElement.appendChild(contentElement);
//       commentsContainer.appendChild(commentElement);
//     });
//   }
  
//   // Call the renderCommentsSection function to display the comments
//   renderCommentsSection();

// Fetch reviews from the headless CMS
async function getReviews() {
    try {
      const response = await contentfulClient.getEntries({
        content_type: 'review'
      });
      return response.items;
    } catch (error) {
      console.error('Error fetching reviews:', error);
      return [];
    }
  }
  
  // Render the reviews section on the page
  async function renderReviewsSection() {
    const reviewsContainer = document.querySelector('.reviews-container');
    const reviews = await getReviews();
  
    reviews.forEach(review => {
      const reviewElement = document.createElement('div');
      reviewElement.classList.add('review-container');
  
      const topPartElement = document.createElement('div');
      topPartElement.classList.add('top-part');
  
      const reviewLogoElement = document.createElement('div');
      reviewLogoElement.classList.add('review-logo');
      const reviewLogoImage = document.createElement('img');
      reviewLogoImage.src = review.fields.logo.fields.file.url;
      reviewLogoElement.appendChild(reviewLogoImage);
  
      const reviewUserContainerElement = document.createElement('div');
      reviewUserContainerElement.classList.add('review-user-container');
  
      const reviewStarsElement = document.createElement('div');
      reviewStarsElement.classList.add('review-stars');
      const starRatingElement = document.createElement('ul');
      starRatingElement.classList.add('star-rating');
      for (let i = 0; i < review.fields.rating; i++) {
        const starElement = document.createElement('li');
        const starImage = document.createElement('img');
        starImage.src = './image/star.svg';
        starImage.alt = `${review.fields.rating} out of 5 stars`;
        starImage.classList.add('user-star');
        starElement.appendChild(starImage);
        starRatingElement.appendChild(starElement);
      }
      reviewStarsElement.appendChild(starRatingElement);
  
      const reviewUserElement = document.createElement('div');
      reviewUserElement.classList.add('review-user');
      reviewUserElement.textContent = review.fields.author;
  
      reviewUserContainerElement.appendChild(reviewStarsElement);
      reviewUserContainerElement.appendChild(reviewUserElement);
  
      const reviewTextsElement = document.createElement('div');
      reviewTextsElement.classList.add('review-texts');
      reviewTextsElement.textContent = review.fields.content;
  
      topPartElement.appendChild(reviewLogoElement);
      topPartElement.appendChild(reviewUserContainerElement);
  
      reviewElement.appendChild(topPartElement);
      reviewElement.appendChild(reviewTextsElement);
  
      reviewsContainer.appendChild(reviewElement);
    });
  }
  
  // Call the renderReviewsSection function to display the reviews
  renderReviewsSection();