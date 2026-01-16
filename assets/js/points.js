<script type="module">
import { doc, updateDoc, increment } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

let sec = 0;

setInterval(async () => {
  sec++;
  if (sec % 60 === 0) {
    await updateDoc(doc(db, "users", telegramUser.userId), {
      points: increment(10)
    });
  }
}, 1000);
</script>
