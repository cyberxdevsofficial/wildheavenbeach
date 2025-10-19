// Hamburger Menu
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// Booking Form WhatsApp Redirect
const bookingForm = document.getElementById("booking-form");
const roomDetailsDiv = document.getElementById("room-details");

if (bookingForm) {
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const room = document.getElementById("room").value;
    const guests = document.getElementById("guests").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;

    if (!room || !guests || !checkin || !checkout) {
      alert("Please fill in all fields");
      return;
    }

    let price = room === "Superior King Room" ? 69.82 : 89.77;
    roomDetailsDiv.innerHTML = `
      <h2>${room}</h2>
      <p>Price: $${price} per night</p>
      <p>Guests: ${guests}</p>
      <p>Check-in: ${checkin}</p>
      <p>Check-out: ${checkout}</p>
    `;

    const message = encodeURIComponent(
      `Room: ${room}\nNumber of Guests: ${guests}\nCheck-in: ${checkin}\nCheck-out: ${checkout}`
    );
    window.location.href = `https://wa.me/94710695082?text=${message}`;
  });
}

// Contact Form mailto redirect
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name")?.value;
    const email = document.getElementById("email")?.value;
    const message = document.getElementById("message")?.value;

    if (name && email && message) {
      const subject = encodeURIComponent(`New message from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.location.href = `mailto:wildheavenbeach@gmail.com?subject=${subject}&body=${body}`;
    }
  });
}
