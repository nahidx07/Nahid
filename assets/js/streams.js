<script type="module">
import { collection, getDocs } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const box = document.getElementById("streams");
const snap = await getDocs(collection(db, "streams"));

snap.forEach(d => {
  const s = d.data();
  box.innerHTML += `
    <div class="card" onclick="location.href='player.html?id=${d.id}'">
      <img src="${s.thumbnail}">
      <h4>${s.title}</h4>
      <span class="live">LIVE</span>
    </div>`;
});
</script>
