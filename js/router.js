function goPage(page) {
  history.pushState({}, "", "/" + page);
  renderPage(page);
}

function renderPage(page) {
  let content = document.getElementById("content");
  if (page === "anasayfa") {
    content.innerHTML = "<h1>Ana Sayfa 🏠</h1><p>Hoşgeldin kankam 🚬</p>";
  } else if (page === "hakkimda") {
    content.innerHTML = "<h1>Hakkımda 👤</h1><p>Ben Berkay, yazılım kafasıyla uğraşırım. Çayımı da şekersiz içerim 😎</p>";
  } else if (page === "iletisim") {
    content.innerHTML = "<h1>İletişim 📞</h1><p>Mail: <a href='mailto:seninmailin@mail.com'>seninmailin@mail.com</a></p>";
  } else {
    content.innerHTML = "<h1>404 😅</h1><p>Sayfa bulunamadı!</p>";
  }
}

window.addEventListener("popstate", () => {
  renderPage(location.pathname.replace("/", ""));
});

renderPage(location.pathname.replace("/", "") || "anasayfa");
