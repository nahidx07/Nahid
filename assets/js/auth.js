<script type="module">
import { doc, getDoc, setDoc } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

(async () => {
  const ref = doc(db, "users", telegramUser.userId);
  const snap = await getDoc(ref);
  if (!snap.exists()) {
    await setDoc(ref, {
      userId: telegramUser.userId,
      username: telegramUser.username,
      name: telegramUser.name,
      photo: telegramUser.photo,
      points: 0,
      referralCode: "REF" + telegramUser.userId,
      createdAt: Date.now()
    });
  }
})();
</script>
