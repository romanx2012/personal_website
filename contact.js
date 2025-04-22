document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("confirmation").classList.remove("hidden");
    this.reset();

});

// added sparkle trail to cursor

document.addEventListener("mousemove", function (e) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle-trail";
    sparkle.style.left = e.pageX + "px";
    sparkle.style.top = e.pageY + "px";
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 800);
  });

